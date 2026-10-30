"use client";

import React from "react";
import { MessageCircle, ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_DATA } from "@/lib/business-data";

interface HeroProps {
  onOpenChat: (initialQuestion?: string) => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#FFF8EF] via-[#FFF8EF] to-[#F4B942]/10"
    >
      {/* Decorative subtle background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F4B942]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#C62828]/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B942]/25 border border-[#F4B942] text-[#252525] text-xs sm:text-sm font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#C62828]" />
              <span>{BUSINESS_DATA.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#252525] leading-[1.1]">
              Life Is Better With{" "}
              <span className="text-[#C62828] underline decoration-[#F4B942] decoration-wavy decoration-4 underline-offset-8">
                Pizza.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#252525]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Freshly baked pizzas, delicious toppings, and perfectly melted cheese.
              Your next favourite slice is just a click away.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-white bg-[#C62828] hover:bg-[#a71f1f] shadow-lg shadow-[#C62828]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => onOpenChat()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-[#252525] bg-white hover:bg-[#F4B942]/20 border-2 border-[#252525]/15 hover:border-[#F4B942] shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#C62828]" />
                <span>Chat With Us</span>
              </button>
            </div>

            {/* Quick Info Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-[#252525]/10 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#C62828]/10 flex items-center justify-center text-[#C62828] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#252525]/60 uppercase">
                    Delivery Estimate
                  </p>
                  <p className="text-sm font-bold text-[#252525]">
                    {BUSINESS_DATA.deliveryTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-[#252525]/10 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#F4B942]/25 flex items-center justify-center text-[#252525] shrink-0">
                  <MapPin className="w-5 h-5 text-[#C62828]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#252525]/60 uppercase">
                    Demo Location
                  </p>
                  <p className="text-sm font-bold text-[#252525] truncate">
                    123 Main St, New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appetizing Cheese-Loaded Pizza Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Background accent frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C62828] to-[#F4B942] opacity-20 blur-xl" />

              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#252525]">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
                  alt="Delicious freshly baked cheese-loaded pizza from Cheesy Crust Pizza"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 via-transparent to-transparent" />

                {/* Floating Menu Highlight Pill inside image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#252525]/10">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C62828] text-white uppercase tracking-wider">
                      Customer Favourite
                    </span>
                    <p className="text-base font-extrabold text-[#252525] mt-1">
                      Large Pepperoni Pizza
                    </p>
                    <p className="text-xs text-[#252525]/70">
                      Classic pepperoni, melted mozzarella & rich tomato sauce
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#252525]/60 block">
                      Official Price
                    </span>
                    <span className="text-2xl font-black text-[#C62828]">
                      $15
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

