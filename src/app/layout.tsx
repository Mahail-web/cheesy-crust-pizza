import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheesy Crust Pizza | Freshly Baked. Perfectly Cheesy. Always Delicious.",
  description:
    "Welcome to Cheesy Crust Pizza in New York! Explore our freshly baked Large Pepperoni Pizza, Medium Veggie Pizza, and Garlic Bread, or chat with our AI pizza assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FFF8EF] text-[#252525] antialiased selection:bg-[#C62828] selection:text-white">
        {children}
      </body>
    </html>
  );
}
