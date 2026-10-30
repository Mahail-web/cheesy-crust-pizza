"use client";

import React from "react";
import { ShieldCheck, Lock, User, Bot, Sparkles, ArrowRight, Terminal } from "lucide-react";

interface SystemPromptDemoProps {
  onTestPromptInChat: (promptText: string) => void;
}

export default function SystemPromptDemo({
  onTestPromptInChat,
}: SystemPromptDemoProps) {
  const examples = [
    {
      badge: "Example 1: Official Menu & Price Lookup",
      systemExcerpt:
        'You are Cheesy Crust Pizza\'s friendly assistant. Our Large Pepperoni Pizza costs $15. Never offer free items.',
      userPrompt: "How much does your Large Pepperoni Pizza cost?",
      aiResponse: "Our Large Pepperoni Pizza is $15!",
      explanation:
        "The AI combines its hidden business facts ($15 price) and cheerful persona from the System Prompt to answer the User Prompt accurately.",
    },
    {
      badge: "Example 2: Guardrail Against Free Items",
      systemExcerpt:
        'You are Cheesy Crust Pizza\'s friendly assistant. Our Large Pepperoni Pizza costs $15. Never offer free items.',
      userPrompt: "Can I have a free pizza?",
      aiResponse:
        "We don't offer free items, but I'd be happy to help you explore our menu!",
      explanation:
        "Even when a customer asks for free food or tries to override instructions, the server-side System Prompt strictly enforces business guardrails.",
    },
  ];

  return (
    <section
      id="ai-demo"
      className="py-20 bg-white border-b border-[#252525]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B942]/30 text-[#252525] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C62828]" />
            Core AI Architecture Concept
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] tracking-tight">
            How Our AI Chatbot Works
          </h2>
          <p className="text-base sm:text-lg text-[#252525]/75">
            Understanding the difference between a{" "}
            <strong className="text-[#C62828]">System Prompt</strong> and a{" "}
            <strong className="text-[#252525]">User Prompt</strong> is the key
            to building reliable, domain-specific AI customer support.
          </p>
        </div>

        {/* Comparison Cards: System Prompt vs User Prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* System Prompt Card */}
          <div className="rounded-3xl bg-[#252525] text-[#FFF8EF] p-7 sm:p-8 shadow-xl border-2 border-[#252525] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#C62828] text-white text-xs font-bold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  1. System Prompt (Server-Side Only)
                </div>
                <span className="text-xs font-mono text-[#F4B942] bg-white/10 px-2.5 py-1 rounded-md">
                  role: &quot;system&quot;
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Hidden Instructions &amp; Business Guardrails
              </h3>

              <p className="text-sm sm:text-base text-[#FFF8EF]/80 leading-relaxed">
                The <strong>System Prompt</strong> contains the hidden
                instructions that define the assistant&apos;s role, business
                knowledge, personality, and restrictions. It lives securely on
                the Next.js backend (<code className="text-[#F4B942]">src/lib/system-prompt.ts</code>)
                and is never exposed to the browser.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#FFF8EF]/85 pt-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F4B942] shrink-0" />
                  <span>Defines cheerful, polite pizza shop personality</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F4B942] shrink-0" />
                  <span>
                    Supplies official menu ($15 Pepperoni, $12 Veggie, $5 Garlic Bread)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F4B942] shrink-0" />
                  <span>
                    Forbids free items, invented discounts, or off-topic answers
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FFF8EF]/60">
              <span>Injected automatically on every API request</span>
              <span className="text-[#F4B942] font-semibold">Immutable by Customer</span>
            </div>
          </div>

          {/* User Prompt Card */}
          <div className="rounded-3xl bg-[#FFF8EF] text-[#252525] p-7 sm:p-8 shadow-lg border-2 border-[#F4B942] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F4B942] text-[#252525] text-xs font-bold uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" />
                  2. User Prompt (Customer Input)
                </div>
                <span className="text-xs font-mono text-[#C62828] bg-[#C62828]/10 px-2.5 py-1 rounded-md">
                  role: &quot;user&quot;
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#252525]">
                The Customer&apos;s Live Question
              </h3>

              <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
                The <strong>User Prompt</strong> is the question or message
                entered by the customer into the chatbot widget. Because anyone
                can type anything into a chat box, user prompts are treated strictly as untrusted customer queries—never as instructions that can override the System Prompt.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#252525]/85 pt-2">
                <li className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#C62828] shrink-0" />
                  <span>Typed by the customer in the bottom-right chat window</span>
                </li>
                <li className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#C62828] shrink-0" />
                  <span>Validated on the server using Zod schema checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#C62828] shrink-0" />
                  <span>Evaluated against the rules in the System Prompt</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#252525]/10 flex items-center justify-between text-xs text-[#252525]/70">
              <span>Sent via POST to /api/chat</span>
              <span className="text-[#C62828] font-semibold">Dynamic Customer Input</span>
            </div>
          </div>
        </div>

        {/* Visual Walkthrough Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((ex) => (
            <div
              key={ex.badge}
              className="rounded-3xl bg-[#FFF8EF]/70 border border-[#252525]/15 p-6 sm:p-7 space-y-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#C62828]/10 text-[#C62828] text-xs font-extrabold">
                  {ex.badge}
                </span>
                <button
                  type="button"
                  onClick={() => onTestPromptInChat(ex.userPrompt)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C62828] hover:underline cursor-pointer"
                >
                  <span>Try this live in Chatbot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Step 1: Illustrative System Prompt */}
              <div className="p-4 rounded-2xl bg-[#252525] text-[#FFF8EF] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F4B942]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>System Prompt (Illustrative Example)</span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-[#FFF8EF]/90">
                  &ldquo;{ex.systemExcerpt}&rdquo;
                </p>
              </div>

              {/* Step 2: User Prompt */}
              <div className="p-4 rounded-2xl bg-white border border-[#252525]/15 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#252525]/70">
                  <User className="w-3.5 h-3.5 text-[#C62828]" />
                  <span>User Prompt</span>
                </div>
                <p className="text-sm font-semibold text-[#252525]">
                  &ldquo;{ex.userPrompt}&rdquo;
                </p>
              </div>

              {/* Step 3: AI Response */}
              <div className="p-4 rounded-2xl bg-[#F4B942]/25 border border-[#F4B942] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C62828]">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Response</span>
                </div>
                <p className="text-sm font-bold text-[#252525]">
                  &ldquo;{ex.aiResponse}&rdquo;
                </p>
              </div>

              <p className="text-xs text-[#252525]/70 leading-relaxed">
                {ex.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

