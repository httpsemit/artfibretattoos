import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artfibre Tattoos & Art Studio | North Lakhimpur, Assam",
  description: "Premium tattoo studio and Japanese traditional art gallery in North Lakhimpur, Assam. Specializing in freehand tattoos, tribal designs, and original Japanese paintings.",
  keywords: ["tattoo studio", "North Lakhimpur", "Assam", "Japanese art", "freehand tattoos", "tribal tattoos"],
  openGraph: {
    title: "Artfibre Tattoos & Art Studio",
    description: "Premium tattoo studio and Japanese traditional art gallery in North Lakhimpur, Assam",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
