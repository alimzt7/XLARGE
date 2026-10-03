import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const yekan = localFont({
  src: "../public/fonts/Yekan.ttf",
  variable: "--font-yekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ایکس‌لارج | پوشیدنی‌های ماندگار",
    template: "%s | ایکس‌لارج",
  },
  description: "مجموعه‌ای منتخب از پوشیدنی‌های مدرن، دقیق و ماندگار ایکس‌لارج.",
  keywords: ["مد لوکس", "پوشاک مدرن", "ایکس‌لارج", "XLARGE"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning>
      <body className={`${yekan.variable} antialiased`}>{children}</body>
    </html>
  );
}
