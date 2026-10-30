import { z } from "zod";

export const MAX_MESSAGE_LENGTH = 500;
export const MAX_HISTORY_MESSAGES = 12;

export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z
    .string()
    .trim()
    .min(1, "Message content cannot be empty.")
    .max(2000, "History message is too long."),
});

export const chatRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message before sending.")
    .max(
      MAX_MESSAGE_LENGTH,
      `Message is too long. Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`
    ),
  previousInteractionId: z.string().trim().optional(),
  history: z
    .array(chatMessageSchema)
    .max(MAX_HISTORY_MESSAGES, "Conversation history limit exceeded.")
    .optional()
    .default([]),
});

export type ValidatedChatRequest = z.infer<typeof chatRequestSchema>;
