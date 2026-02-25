import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CanvasBackground } from '@/components/ui/CanvasBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artfibre - Premium Tattoo Studio & Japanese Art Gallery',
  description: 'North Lakhimpur\'s premier tattoo studio specializing in Japanese traditional art, tribal designs, and custom tattoos. Book your session today.',
  keywords: ['tattoo', 'japanese art', 'north lakhimpur', 'assam', 'tattoo studio', 'custom tattoos', 'tribal tattoos'],
  openGraph: {
    title: 'Artfibre - Premium Tattoo Studio & Japanese Art Gallery',
    description: 'Specializing in Japanese traditional art, tribal designs, and custom tattoos in North Lakhimpur, Assam.',
    url: 'https://artfibre.in',
    siteName: 'Artfibre Tattoos & Art Studio',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artfibre - Premium Tattoo Studio',
    description: 'Specializing in Japanese traditional art and custom tattoos',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <CanvasBackground />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
