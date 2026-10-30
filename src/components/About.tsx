import React from "react";
import { Leaf, Flame, Sparkles, CheckCircle2, HeartHandshake } from "lucide-react";
import { BRAND_HIGHLIGHTS, WHY_CHOOSE_US } from "@/lib/business-data";

export default function About() {
  const renderHighlightIcon = (iconName: "leaf" | "flame" | "sparkles") => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-6 h-6 text-[#C62828]" />;
      case "flame":
        return <Flame className="w-6 h-6 text-[#C62828]" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6 text-[#C62828]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-y border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Collage */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFF8EF]">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
                alt="Freshly baked cheesy pizza slices on a wooden board"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#252525]/90 backdrop-blur-xs text-[#FFF8EF] p-4 rounded-2xl">
                <p className="text-sm font-bold text-[#F4B942]">
                  Cheesy Crust Pizza • New York
                </p>
                <p className="text-xs text-[#FFF8EF]/85 mt-0.5">
                  Freshly baked daily from 11:00 AM to 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Text & 3 Brand Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/10 text-[#C62828] text-xs font-bold uppercase tracking-wider">
              About Cheesy Crust Pizza
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
              Made With Love. Baked To Perfection.
            </h2>

            <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
              At Cheesy Crust Pizza, we believe great pizza starts with fresh
              ingredients, generous toppings, and a perfectly baked crust.
              Whether you&apos;re craving a classic pepperoni pizza or a
              delicious vegetarian option, we&apos;re here to make every bite
              special.
            </p>

            {/* Three Short Brand Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {BRAND_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-[#FFF8EF] border border-[#252525]/10 hover:border-[#F4B942] transition-all shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F4B942]/25 flex items-center justify-center mb-3">
                    {renderHighlightIcon(item.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-[#252525]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#252525]/75 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 2: Why Choose Us Section */}
        <div className="rounded-3xl bg-[#FFF8EF] border border-[#252525]/10 p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4B942]/30 text-[#252525] text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-[#C62828]" />
              Why Choose Us
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#252525]">
              What Makes Every Slice Special
            </h3>
            <p className="text-sm sm:text-base text-[#252525]/75">
              We focus on straightforward quality, generous toppings, and
              cheerful customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHY_CHOOSE_US.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-5 rounded-2xl border border-[#252525]/10 hover:border-[#C62828]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#C62828]/10 text-[#C62828] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-[#252525]">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-[#252525]/70 mt-1.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

