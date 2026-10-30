"use client";

import React from "react";
import { Truck, Clock, MapPin, PhoneCall, Info, MessageCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/lib/business-data";

interface DeliveryProps {
  onOpenChat: (initialQuestion?: string) => void;
}

export default function Delivery({ onOpenChat }: DeliveryProps) {
  return (
    <section
      id="delivery"
      className="py-20 bg-[#252525] text-[#FFF8EF] relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#C62828]/20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Delivery Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/40 text-[#F4B942] text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              Delivery Information
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Hot Pizza, Delivered To Your Door.
            </h2>

            <p className="text-base sm:text-lg text-[#FFF8EF]/80 leading-relaxed max-w-2xl">
              Craving a fresh slice at home? Our delivery service is available
              daily during opening hours. Customers can contact the shop or ask
              our AI assistant for any order-related inquiries.
            </p>

            {/* Key Delivery Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#C62828] flex items-center justify-center text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FFF8EF]/60 block">
                      Estimated Delivery Time
                    </span>
                    <span className="text-lg font-extrabold text-[#F4B942]">
                      {BUSINESS_DATA.deliveryTime}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#FFF8EF]/70">
                  Freshly baked and delivered hot within our standard 30–45
                  minute window.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F4B942] flex items-center justify-center text-[#252525]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FFF8EF]/60 block">
                      Delivery Service Status
                    </span>
                    <span className="text-lg font-extrabold text-white">
                      Available Daily
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#FFF8EF]/70">
                  Available Monday–Sunday from 11:00 AM to 10:00 PM.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F4B942]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FFF8EF]/60 block">
                      Restaurant Address
                    </span>
                    <span className="text-base font-bold text-white">
                      {BUSINESS_DATA.location}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#FFF8EF]/70">
                  Fictional demonstration location in New York, NY.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F4B942]">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FFF8EF]/60 block">
                      Order Inquiries
                    </span>
                    <span className="text-base font-bold text-white">
                      {BUSINESS_DATA.phone}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#FFF8EF]/70">
                  Contact our shop for any order or menu-related questions.
                </p>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  onOpenChat("How long does delivery take and what are your opening hours?")
                }
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-[#252525] bg-[#F4B942] hover:bg-[#e5aa32] shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C62828]" />
                <span>Ask Chatbot About Delivery</span>
              </button>
            </div>
          </div>

          {/* Right Column: Demonstration Disclaimer Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#FFF8EF] text-[#252525] p-7 sm:p-8 shadow-2xl border-4 border-[#F4B942]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#C62828] text-white flex items-center justify-center shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C62828]">
                    Important Demonstration Notice
                  </span>
                  <h3 className="text-xl font-extrabold text-[#252525]">
                    Educational Demo Storefront
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#252525]/80 leading-relaxed mb-5">
                This website is an educational full-stack demonstration built to
                showcase <strong>System Prompts vs. User Prompts</strong> in an
                AI customer support chatbot.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#252525]/85 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C62828] font-bold">•</span>
                  <span>
                    <strong>No Real Orders Dispatched:</strong> Actual food
                    orders are not processed, billed, or dispatched from this
                    site.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C62828] font-bold">•</span>
                  <span>
                    <strong>Honest AI Guardrails:</strong> Our chatbot will
                    never pretend to track a live driver or process a payment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C62828] font-bold">•</span>
                  <span>
                    <strong>Fictional Contact Details:</strong> Address (123
                    Main Street, New York, NY), phone ({BUSINESS_DATA.phone}),
                    and email ({BUSINESS_DATA.email}) are fictional.
                  </span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-[#F4B942]/20 border border-[#F4B942] text-xs font-semibold text-[#252525]">
                💡 Try asking the chatbot: &ldquo;Where is my delivery driver
                right now?&rdquo; to see how its System Prompt guardrails
                respond honestly!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

