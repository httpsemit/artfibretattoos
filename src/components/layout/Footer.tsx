import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-gold/5"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dc2626' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M30,5 Q45,20 30,35 Q15,20 30,5'/%3E%3Cpath d='M30,25 Q45,40 30,55 Q15,40 30,25'/%3E%3C/g%3E%3Cg fill='none' stroke='%23fbbf24' stroke-width='0.3' opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Cpath d='M20,30 L40,30 M30,20 L30,40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-accent" />
              <span className="text-xl font-bold">Artfibre</span>
            </div>
            <p className="text-gray-300">
              Premium tattoo studio and Japanese traditional art gallery in North Lakhimpur, Assam.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tattoo/portfolio" className="text-gray-300 hover:text-accent transition-colors">
                  Tattoo Portfolio
                </Link>
              </li>
              <li>
                <Link href="/tattoo/book" className="text-gray-300 hover:text-accent transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link href="/art" className="text-gray-300 hover:text-accent transition-colors">
                  Art Gallery
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-300 hover:text-accent transition-colors">
                  Accessories Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About the Artist
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Freehand Tattoos</span>
              </li>
              <li>
                <span className="text-gray-300">Tribal Tattoos</span>
              </li>
              <li>
                <span className="text-gray-300">Japanese Traditional Art</span>
              </li>
              <li>
                <span className="text-gray-300">Custom Commissions</span>
              </li>
              <li>
                <span className="text-gray-300">Jewelry & Accessories</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-gray-300 text-sm">
                  Thana Rd, Chetia Gaon<br />
                  North Lakhimpur, Assam 787001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+919678449790" className="text-gray-300 hover:text-accent transition-colors">
                  +91 96784 49790
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@artfibre.in" className="text-gray-300 hover:text-accent transition-colors">
                  info@artfibre.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Artfibre Tattoos & Art Studio. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Developed by{' '}
              <a 
                href="https://shivxtech.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                ShivxTech
              </a>
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
