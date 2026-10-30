"use client";

import React, { useState } from "react";
import { Pizza, Menu as MenuIcon, X, MessageCircle, PhoneCall } from "lucide-react";
import { BUSINESS_DATA } from "@/lib/business-data";

interface NavbarProps {
  onOpenChat: (initialQuestion?: string) => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Menu", href: "#menu" },
    { label: "About Us", href: "#about" },
    { label: "Delivery", href: "#delivery" },
    { label: "AI Demo", href: "#ai-demo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF8EF]/95 backdrop-blur-md border-b border-[#252525]/10 shadow-xs">
      {/* Top fictional demo banner */}
      <div className="bg-[#252525] text-[#FFF8EF] text-xs py-1.5 px-4 text-center">
        <span className="inline-block font-semibold text-[#F4B942] mr-1.5">
          🍕 Demo Storefront:
        </span>
        <span>
          Open Daily 11:00 AM–10:00 PM • 30–45 Min Delivery • Fictional Demo Info ({BUSINESS_DATA.location})
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#C62828] flex items-center justify-center text-white shadow-md group-hover:bg-[#a71f1f] transition-colors">
              <Pizza className="w-6 h-6 text-[#F4B942] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#252525] leading-none">
                Cheesy Crust <span className="text-[#C62828]">Pizza</span>
              </span>
              <span className="text-[11px] font-medium text-[#252525]/70 mt-1">
                Freshly Baked • Perfectly Cheesy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#252525]/85 hover:text-[#C62828] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenChat()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-[#252525] bg-[#F4B942]/25 hover:bg-[#F4B942]/45 border border-[#F4B942] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C62828]" />
              Ask Assistant
            </button>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#C62828] hover:bg-[#a71f1f] shadow-md hover:shadow-lg transition-all"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl text-[#252525] hover:bg-[#252525]/5 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C62828]" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8EF] border-b border-[#252525]/15 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-xl text-base font-semibold text-[#252525] hover:bg-[#C62828]/10 hover:text-[#C62828] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#252525]/10 flex flex-col sm:flex-row gap-3">
            <a
              href="#menu"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#C62828] hover:bg-[#a71f1f] shadow-sm text-center"
            >
              Order Now (Explore Menu)
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[#252525] bg-[#F4B942] hover:bg-[#e5aa32] shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Chat With Us
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#252525]/70">
            <PhoneCall className="w-3.5 h-3.5 text-[#C62828]" />
            <span>Demo Inquiries: {BUSINESS_DATA.phone}</span>
          </div>
        </div>
      )}
    </header>
  );
}

