"use client";

import React from "react";
import { MessageSquareText, Sparkles, Info } from "lucide-react";
import { OFFICIAL_MENU, MenuItem } from "@/lib/menu-data";

interface MenuProps {
  onAskAboutItem: (item: MenuItem) => void;
}

export default function Menu({ onAskAboutItem }: MenuProps) {
  return (
    <section id="menu" className="py-20 bg-[#FFF8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C62828]/10 text-[#C62828] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Official Restaurant Menu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] tracking-tight">
            Explore Our Menu
          </h2>
          <p className="text-base sm:text-lg text-[#252525]/75">
            Freshly baked to order with generous toppings and melted mozzarella
            cheese. Have a question about an item? Click{" "}
            <span className="font-semibold text-[#C62828]">
              &ldquo;Ask About This Item&rdquo;
            </span>{" "}
            to chat directly with our AI assistant!
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFICIAL_MENU.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#252525]/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Product Photography */}
                <div className="relative h-60 w-full overflow-hidden bg-[#252525]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/60 via-transparent to-transparent" />

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#F4B942] text-[#252525] shadow-sm">
                      {item.badge}
                    </span>
                  )}

                  {/* Size Pill */}
                  {item.size && (
                    <span className="absolute bottom-3 left-4 px-3 py-1 rounded-lg text-xs font-bold bg-white/95 text-[#252525] shadow-xs">
                      Size: {item.size}
                    </span>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-4 px-3.5 py-1 rounded-xl bg-[#C62828] text-white font-black text-xl shadow-md">
                    {item.formattedPrice}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-extrabold text-[#252525] group-hover:text-[#C62828] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#252525]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Interaction */}
              <div className="px-6 pb-6 pt-2">
                <div className="pt-4 border-t border-[#252525]/10 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#252525]/55 block">
                      Price (USD)
                    </span>
                    <span className="text-lg font-extrabold text-[#252525]">
                      {item.formattedPrice}.00
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onAskAboutItem(item)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#C62828] hover:bg-[#a71f1f] shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <MessageSquareText className="w-4 h-4 text-[#F4B942]" />
                    <span>Ask About This Item</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Official Menu Transparency Notice */}
        <div className="mt-10 bg-white/90 border border-[#252525]/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#252525]/80">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-[#C62828] shrink-0" />
            <span>
              <strong>Official Menu Source of Truth:</strong> Our AI chatbot uses
              this exact structured menu data ($15 Large Pepperoni Pizza, $12
              Medium Veggie Pizza, and $5 Garlic Bread) with no hidden fees or
              unlisted promotions.
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#F4B942]/30 text-[#252525] font-bold shrink-0">
            All Prices in USD ($)
          </span>
        </div>
      </div>
    </section>
  );
}

