"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Pizza,
  X,
  Send,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  Bot,
  User,
} from "lucide-react";
import { ChatMessage } from "@/types/chat";
import { MAX_MESSAGE_LENGTH } from "@/lib/validation";

const INITIAL_GREETING =
  "Hey there! Welcome to Cheesy Crust Pizza! 🍕 I'm your pizza assistant. I can help you explore our menu, check prices, learn about delivery, and answer questions about our shop. What would you like to know?";

const SUGGESTED_QUESTIONS = [
  {
    label: "View Pizza Menu",
    prompt: "What pizzas and sides do you have on your menu?",
  },
  {
    label: "Check Prices",
    prompt: "How much do your pizzas and garlic bread cost?",
  },
  {
    label: "Delivery Information",
    prompt: "How long does delivery take?",
  },
  {
    label: "Opening Hours",
    prompt: "What are your opening hours and where are you located?",
  },
];

interface ChatWidgetProps {
  isOpen: boolean;
  onToggleOpen: (open: boolean) => void;
  externalPromptTrigger: { text: string; id: number } | null;
}

export default function ChatWidget({
  isOpen,
  onToggleOpen,
  externalPromptTrigger,
}: ChatWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-greeting",
      role: "assistant",
      content: INITIAL_GREETING,
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previousInteractionId, setPreviousInteractionId] = useState<string | undefined>(undefined);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lastHandledTriggerId = useRef<number | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen, errorMessage]);

  const sendMessage = useCallback(
    async (textToSend: string) => {
      const trimmed = textToSend.trim();
      if (!trimmed || isLoading) return;

      if (trimmed.length > MAX_MESSAGE_LENGTH) {
        setErrorMessage(
          `Message is too long (${trimmed.length}/${MAX_MESSAGE_LENGTH} characters). Please shorten your question.`
        );
        return;
      }

      setErrorMessage(null);

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Prepare limited conversation history (excluding initial greeting if desired, or keeping last 10 turns)
      const historyPayload = messages
        .filter((m) => m.id !== "initial-greeting")
        .slice(-10)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmed,
            previousInteractionId,
            history: historyPayload,
          }),
        });

        const data = await response.json();

        if (!response.ok || data.error) {
          setErrorMessage(
            data.error ||
              "Sorry, our pizza assistant encountered a temporary issue. Please try again!"
          );
        } else if (data.reply) {
          if (data.interactionId) {
            setPreviousInteractionId(data.interactionId);
          }
          const assistantMsg: ChatMessage = {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: data.reply,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => [...prev, assistantMsg]);
        }
      } catch {
        setErrorMessage(
          "Network error: Could not reach the Cheesy Crust Assistant. Please check your connection and try again."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages, previousInteractionId]
  );

  // Handle external triggers (e.g., "Ask About This Item" or SystemPromptDemo test button)
  useEffect(() => {
    if (
      externalPromptTrigger &&
      externalPromptTrigger.id !== lastHandledTriggerId.current
    ) {
      lastHandledTriggerId.current = externalPromptTrigger.id;
      onToggleOpen(true);
      if (externalPromptTrigger.text.trim()) {
        sendMessage(externalPromptTrigger.text);
      }
    }
  }, [externalPromptTrigger, onToggleOpen, sendMessage]);

  const handleResetChat = () => {
    setMessages([
      {
        id: "initial-greeting",
        role: "assistant",
        content: INITIAL_GREETING,
        timestamp: "Just now",
      },
    ]);
    setInput("");
    setErrorMessage(null);
    setPreviousInteractionId(undefined);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat Window when open */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Cheesy Crust Assistant Chat Window"
          className="mb-3 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[calc(100dvh-6.5rem)] sm:max-h-[600px] bg-[#FFF8EF] rounded-3xl shadow-2xl border-2 border-[#252525]/15 flex flex-col overflow-hidden transition-all"
        >
          {/* Header */}
          <div className="bg-[#C62828] text-white px-4 py-3.5 flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F4B942] text-[#252525] flex items-center justify-center shadow-sm shrink-0">
                <Pizza className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-extrabold leading-tight">
                  Cheesy Crust Assistant
                </h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium text-white/90">
                    Online • AI Support
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Clear / Reset Chat"
                aria-label="Clear and reset conversation"
                className="p-2 rounded-xl text-white/85 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onToggleOpen(false)}
                title="Close Chat"
                aria-label="Close Chat Window"
                className="p-2 rounded-xl text-white/85 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll bg-[#FFF8EF]">
            {messages.map((msg) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2.5 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-xl bg-[#C62828] text-[#F4B942] flex items-center justify-center shrink-0 shadow-2xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                      isUser
                        ? "bg-[#C62828] text-white rounded-br-xs font-medium"
                        : "bg-white text-[#252525] border border-[#252525]/10 rounded-bl-xs"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">
                      {msg.content}
                    </p>
                    <span
                      className={`block text-[10px] mt-1.5 ${
                        isUser ? "text-white/75 text-right" : "text-[#252525]/45"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-xl bg-[#252525] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Suggested Conversation Buttons (always accessible or highlighted near start) */}
            {messages.length <= 2 && !isLoading && (
              <div className="pt-1 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#252525]/55 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C62828]" />
                  Suggested Questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      disabled={isLoading}
                      onClick={() => sendMessage(item.prompt)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-[#F4B942]/30 text-[#252525] border border-[#F4B942] shadow-2xs transition-all cursor-pointer disabled:opacity-50"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing / Loading Indicator */}
            {isLoading && (
              <div className="flex items-end gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-xl bg-[#C62828] text-[#F4B942] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#252525]/10 rounded-2xl rounded-bl-xs px-4 py-3 shadow-2xs flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#C62828] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#F4B942] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#C62828] animate-bounce" />
                  </span>
                  <span className="text-xs font-semibold text-[#252525]/70">
                    Baking a fresh answer...
                  </span>
                </div>
              </div>
            )}

            {/* Friendly Error Message Banner */}
            {errorMessage && (
              <div
                role="alert"
                className="p-3.5 rounded-2xl bg-red-50 border border-red-300 text-red-900 text-xs flex items-start gap-2.5 shadow-2xs"
              >
                <AlertTriangle className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Assistant Notice</p>
                  <p className="leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Pills Bar when conversation has progressed */}
          {messages.length > 2 && (
            <div className="px-3 py-2 bg-white border-t border-[#252525]/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {SUGGESTED_QUESTIONS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  disabled={isLoading}
                  onClick={() => sendMessage(item.prompt)}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FFF8EF] hover:bg-[#F4B942]/30 text-[#252525] border border-[#252525]/15 shrink-0 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="p-3 bg-white border-t border-[#252525]/10 shrink-0"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                maxLength={MAX_MESSAGE_LENGTH}
                placeholder="Ask about our pizzas, prices, or delivery..."
                aria-label="Type your message to Cheesy Crust Assistant"
                className="flex-1 max-h-24 px-3.5 py-2.5 rounded-2xl bg-[#FFF8EF] border border-[#252525]/20 text-xs sm:text-sm text-[#252525] placeholder:text-[#252525]/50 focus:outline-none focus:border-[#C62828] resize-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="h-10 px-4 rounded-2xl bg-[#C62828] hover:bg-[#a71f1f] disabled:bg-[#252525]/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all shrink-0 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 text-[#F4B942]" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
            <div className="mt-1.5 px-1 flex items-center justify-between text-[10px] text-[#252525]/50">
              <span>Press Enter to send • Shift+Enter for new line</span>
              <span>
                {input.length}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
          </form>
        </div>
      )}

      {/* Floating Toggle Button + Tooltip when closed */}
      {!isOpen && (
        <div className="flex items-center gap-3">
          {/* Tooltip */}
          <button
            type="button"
            onClick={() => onToggleOpen(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#252525] text-xs font-extrabold shadow-lg border-2 border-[#F4B942] hover:border-[#C62828] transition-all cursor-pointer animate-bounce"
          >
            <span className="w-2 h-2 rounded-full bg-[#C62828]" />
            <span>Need help? Chat with us!</span>
          </button>

          {/* Circular Floating Button */}
          <button
            type="button"
            onClick={() => onToggleOpen(true)}
            aria-label="Need help? Chat with us!"
            className="relative group w-16 h-16 rounded-full bg-gradient-to-tr from-[#C62828] to-[#d93838] text-white shadow-2xl border-4 border-[#F4B942] flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span className="absolute -inset-1 rounded-full bg-[#F4B942]/40 animate-ping pointer-events-none" />
            <Pizza className="w-8 h-8 text-[#F4B942] relative z-10 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}

