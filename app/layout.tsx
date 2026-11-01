import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexorian AI Language Tutor",
  description: "AI-enhanced conversational language practice. Nexorian sovereign tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}