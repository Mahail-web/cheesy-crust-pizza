import React from "react";
import { Pizza, MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS_DATA } from "@/lib/business-data";

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-[#FFF8EF] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#C62828] flex items-center justify-center text-white shadow-sm">
                <Pizza className="w-5 h-5 text-[#F4B942]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Cheesy Crust <span className="text-[#F4B942]">Pizza</span>
              </span>
            </div>
            <p className="text-sm text-[#FFF8EF]/75 leading-relaxed">
              {BUSINESS_DATA.tagline} Friendly, family-welcoming pizza shop
              serving freshly baked pizzas and golden garlic bread.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4B942] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FFF8EF]/80">
              <li>
                <a href="#home" className="hover:text-[#F4B942] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F4B942] transition-colors">
                  Our Menu ($5 – $15)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F4B942] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[#F4B942] transition-colors">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#ai-demo" className="hover:text-[#F4B942] transition-colors">
                  How Our AI Chatbot Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F4B942] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F4B942] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4B942] mb-4">
              Contact Info (Demo)
            </h3>
            <ul className="space-y-3 text-sm text-[#FFF8EF]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C62828] shrink-0 mt-1" />
                <span>{BUSINESS_DATA.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C62828] shrink-0" />
                <span>{BUSINESS_DATA.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C62828] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_DATA.email}`}
                  className="hover:text-[#F4B942] transition-colors"
                >
                  {BUSINESS_DATA.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Opening Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4B942] mb-4">
              Opening Hours
            </h3>
            <div className="space-y-3 text-sm text-[#FFF8EF]/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F4B942] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Monday – Sunday</p>
                  <p>11:00 AM – 10:00 PM</p>
                </div>
              </div>
              <p className="text-xs text-[#FFF8EF]/65 pt-2">
                Estimated Delivery Time: {BUSINESS_DATA.deliveryTime}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Fictional Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8EF]/60">
          <p>
            © {new Date().getFullYear()} {BUSINESS_DATA.name}. All rights
            reserved.
          </p>
          <p className="text-center sm:text-right max-w-xl">
            {BUSINESS_DATA.fictionalNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}

