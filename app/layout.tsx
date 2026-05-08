import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "McBeanie - Authentic Designer Beanies | Luxury Resale",
  description: "Shop authenticated Louis Vuitton and premium designer beanies. Sustainably sourced, verified authentic, fast shipping. Gen Z approved.",
  keywords: ['Louis Vuitton', 'beanies', 'designer', 'authentic', 'resale', 'sustainable fashion'],
  openGraph: {
    title: 'McBeanie - Authentic Designer Beanies',
    description: 'Luxury authenticated beanies for the culture',
    url: 'https://mcbeanie.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
