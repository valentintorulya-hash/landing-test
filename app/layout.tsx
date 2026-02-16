import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";

import "./globals.css";

const sora = Sora({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulseboard AI | Ship Projects Without Chaos",
  description:
    "Pulseboard AI helps product teams plan, align, and deliver faster with intelligent project workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${sora.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
