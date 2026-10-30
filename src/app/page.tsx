"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Delivery from "@/components/Delivery";
import SystemPromptDemo from "@/components/SystemPromptDemo";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { MenuItem } from "@/lib/menu-data";

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [externalPromptTrigger, setExternalPromptTrigger] = useState<{
    text: string;
    id: number;
  } | null>(null);

  const handleOpenChat = (initialQuestion?: string) => {
    setIsChatOpen(true);
    if (initialQuestion && initialQuestion.trim()) {
      setExternalPromptTrigger({
        text: initialQuestion.trim(),
        id: Date.now(),
      });
    }
  };

  const handleAskAboutMenuItem = (item: MenuItem) => {
    handleOpenChat(`Tell me about your ${item.name} and how much it costs.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EF] text-[#252525]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenChat={handleOpenChat} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenChat={handleOpenChat} />

        {/* Pizza Menu Section */}
        <Menu onAskAboutItem={handleAskAboutMenuItem} />

        {/* About Us & Why Choose Us Section */}
        <About />

        {/* Delivery Information Section */}
        <Delivery onOpenChat={handleOpenChat} />

        {/* System Prompt vs User Prompt Educational Demo Section */}
        <SystemPromptDemo onTestPromptInChat={handleOpenChat} />

        {/* Frequently Asked Questions Section */}
        <FAQ onOpenChat={handleOpenChat} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Customer Support Chatbot */}
      <ChatWidget
        isOpen={isChatOpen}
        onToggleOpen={setIsChatOpen}
        externalPromptTrigger={externalPromptTrigger}
      />
    </div>
  );
}

