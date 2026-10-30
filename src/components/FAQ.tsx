"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/business-data";

interface FAQProps {
  onOpenChat: (initialQuestion?: string) => void;
}

export default function FAQ({ onOpenChat }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-[#FFF8EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C62828]/10 text-[#C62828] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#252525]/75">
            Quick answers to common questions about our official menu, prices,
            delivery window, and shop policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="rounded-2xl bg-white border border-[#252525]/10 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FFF8EF]/50 transition-colors cursor-pointer"
                >
                  <span className="text-base font-bold text-[#252525]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C62828] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#252525]/80 border-t border-[#252525]/5 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions callout */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-[#F4B942] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold text-[#252525]">
              Still have a question about our pizzas?
            </h3>
            <p className="text-xs sm:text-sm text-[#252525]/75">
              Our cheerful AI assistant is ready 24/7 in the bottom-right corner!
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenChat()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#C62828] hover:bg-[#a71f1f] transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#F4B942]" />
            <span>Ask Cheesy Crust Assistant</span>
          </button>
        </div>
      </div>
    </section>
  );
}

