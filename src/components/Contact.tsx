"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/lib/business-data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setError("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setError("Please enter a message of at least 10 characters.");
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C62828]/10 text-[#C62828] text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
              Contact Cheesy Crust Pizza
            </h2>

            <p className="text-base text-[#252525]/75 leading-relaxed">
              Have a question about our pizzas, ingredients, or delivery
              window? Reach out using our contact details below or send a
              demonstration inquiry using the form.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8EF] border border-[#252525]/10">
                <div className="w-10 h-10 rounded-xl bg-[#C62828] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#252525]">
                    Business Address (Fictional Demo)
                  </h3>
                  <p className="text-sm text-[#252525]/80 mt-0.5">
                    {BUSINESS_DATA.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8EF] border border-[#252525]/10">
                <div className="w-10 h-10 rounded-xl bg-[#C62828] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#252525]">
                    Phone Number (Fictional Demo)
                  </h3>
                  <p className="text-sm text-[#252525]/80 mt-0.5">
                    {BUSINESS_DATA.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8EF] border border-[#252525]/10">
                <div className="w-10 h-10 rounded-xl bg-[#C62828] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#252525]">
                    Email Address (Fictional Demo)
                  </h3>
                  <p className="text-sm text-[#252525]/80 mt-0.5">
                    <a
                      href={`mailto:${BUSINESS_DATA.email}`}
                      className="text-[#C62828] font-semibold hover:underline"
                    >
                      {BUSINESS_DATA.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8EF] border border-[#252525]/10">
                <div className="w-10 h-10 rounded-xl bg-[#F4B942] text-[#252525] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#252525]">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-[#252525]/80 mt-0.5">
                    {BUSINESS_DATA.openingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Demonstration Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FFF8EF] border border-[#252525]/15 p-7 sm:p-10 shadow-md">
              <h3 className="text-2xl font-extrabold text-[#252525] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#252525]/70 mb-6">
                Demonstration form: validates your inputs client-side and shows
                a demo confirmation without sending an actual external email.
              </p>

              {submitted && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm space-y-1">
                    <p className="font-bold">
                      Demonstration Form Validated Successfully!
                    </p>
                    <p>
                      Thank you for testing the Cheesy Crust Pizza contact form.
                      Because this is an educational demonstration website, no
                      actual email was transmitted. For instant interactive
                      answers, try our AI Chatbot in the bottom-right corner!
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-300 text-red-900 flex items-center gap-3 text-xs sm:text-sm font-semibold"
                >
                  <AlertCircle className="w-5 h-5 text-[#C62828] shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (submitted) setSubmitted(false);
                    }}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#252525]/20 text-sm text-[#252525] focus:outline-none focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/20"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submitted) setSubmitted(false);
                    }}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#252525]/20 text-sm text-[#252525] focus:outline-none focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/20"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (submitted) setSubmitted(false);
                    }}
                    placeholder="Ask us about our Large Pepperoni Pizza, Medium Veggie Pizza, or Garlic Bread..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#252525]/20 text-sm text-[#252525] focus:outline-none focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/20 resize-y"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#C62828] hover:bg-[#a71f1f] shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#F4B942]" />
                  <span>Submit Demonstration Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

