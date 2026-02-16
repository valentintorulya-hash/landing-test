import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulseboard AI | Запускайте проекты без хаоса",
  description:
    "Pulseboard AI помогает продуктовым командам планировать, синхронизироваться и выпускать продукты быстрее с помощью умных рабочих процессов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="dark">
      <body className={`${sora.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
