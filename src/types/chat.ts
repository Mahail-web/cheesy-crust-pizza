export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
}

export interface ChatRequestPayload {
  message: string;
  previousInteractionId?: string;
  history: Array<{
    role: MessageRole;
    content: string;
  }>;
}

export interface ChatResponsePayload {
  reply?: string;
  interactionId?: string;
  error?: string;
}
