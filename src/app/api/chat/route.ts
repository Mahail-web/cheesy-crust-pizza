import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";
import { chatRequestSchema } from "@/lib/validation";

// Simple in-memory rate limiter per client IP (20 requests per 60 seconds)
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 20;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function isRateLimited(clientKey: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(clientKey);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Basic rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "local-client";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "You're sending messages a bit too quickly! Please wait a moment and try again. 🍕",
        },
        { status: 429 }
      );
    }

    // 2. Parse and validate request body with Zod
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload provided." },
        { status: 400 }
      );
    }

    const parsed = chatRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || "Invalid message format.";
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const { message, previousInteractionId, history } = parsed.data;

    // 3. Check server-side Gemini API key configuration (accepts GEMINI_API_KEY or OPENAI_API_KEY)
    const apiKey = (
      process.env.GEMINI_API_KEY ||
      process.env.OPENAI_API_KEY ||
      ""
    ).trim();

    if (!apiKey || apiKey === "your_api_key_here") {
      return NextResponse.json(
        {
          error:
            "Our AI assistant is temporarily unavailable because the Gemini API key is not configured on the server (.env.local). Please add a valid GEMINI_API_KEY / OPENAI_API_KEY or call us at +1 212 555 0148!",
        },
        { status: 503 }
      );
    }

    const model = (
      process.env.GEMINI_MODEL ||
      process.env.OPENAI_MODEL ||
      "gemini-3.5-flash-lite"
    ).trim();

    // 4. Initialize official Google GenAI SDK client on the server
    const client = new GoogleGenAI({ apiKey });

    // 5. Build input for Gemini Interactions API with server-side SYSTEM_PROMPT.
    // Note: system_instruction is interaction-scoped and sent on every turn.
    // If previousInteractionId is provided, chain the stateful conversation;
    // otherwise, if stateless history is provided, map history into steps.
    const sanitizedHistory = history.slice(-10);

    let interaction;
    if (previousInteractionId) {
      interaction = await client.interactions.create({
        model,
        system_instruction: SYSTEM_PROMPT,
        previous_interaction_id: previousInteractionId,
        input: message,
      });
    } else if (sanitizedHistory.length > 0) {
      const stepsInput = [
        ...sanitizedHistory.map((msg) =>
          msg.role === "user"
            ? {
                type: "user_input" as const,
                content: [{ type: "text" as const, text: msg.content }],
              }
            : {
                type: "model_output" as const,
                content: [{ type: "text" as const, text: msg.content }],
              }
        ),
        {
          type: "user_input" as const,
          content: [{ type: "text" as const, text: message }],
        },
      ];

      interaction = await client.interactions.create({
        model,
        system_instruction: SYSTEM_PROMPT,
        input: stepsInput,
      });
    } else {
      interaction = await client.interactions.create({
        model,
        system_instruction: SYSTEM_PROMPT,
        input: message,
      });
    }

    const reply = interaction.output_text?.trim();

    if (!reply) {
      return NextResponse.json(
        {
          error:
            "Sorry, I couldn't generate a response right now. Please try asking again or call us at +1 212 555 0148.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        reply,
        interactionId: interaction.id,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[/api/chat] Gemini API Error:", error);

    const errObj = error as {
      message?: string;
      body?: string;
      status?: number;
      statusCode?: number;
      cause?: { body?: string; statusCode?: number };
    };
    const combinedErrorText = [
      errObj?.message,
      errObj?.body,
      errObj?.cause?.body,
      String(error),
    ]
      .filter(Boolean)
      .join(" ");

    if (
      errObj?.status === 401 ||
      errObj?.status === 403 ||
      errObj?.statusCode === 401 ||
      errObj?.statusCode === 403 ||
      combinedErrorText.includes("API_KEY_INVALID") ||
      combinedErrorText.includes("API key not valid")
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid Gemini API Key: The key in .env.local was rejected by Google (API_KEY_INVALID). Please generate a valid Gemini API key from https://aistudio.google.com/apikey (starts with 'AIzaSy...') and update .env.local.",
        },
        { status: 401 }
      );
    }

    if (
      errObj?.status === 429 ||
      errObj?.statusCode === 429 ||
      combinedErrorText.includes("429") ||
      combinedErrorText.includes("RESOURCE_EXHAUSTED")
    ) {
      return NextResponse.json(
        {
          error:
            "Our AI assistant is experiencing high demand or quota limits right now. Please try again shortly or call +1 212 555 0148!",
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Oops! Something went wrong while connecting to the Cheesy Crust Assistant. Please try again in a moment or call us at +1 212 555 0148.",
      },
      { status: 500 }
    );
  }
}
