'use client';

import Link from 'next/link';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

// Custom Pinterest icon component since lucide-react doesn't have Pinterest
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-.998 2.351-1.485 3.147A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-sage-darkest text-white py-16"
      data-element="site-footer"
      data-name="Site Footer"
    >
      <div
        className="max-w-[1180px] mx-auto px-6"
        data-element="footer-container"
        data-name="Footer Container"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          data-element="footer-content-grid"
          data-name="Footer Content Grid"
        >
          {/* Brand Column */}
          <div
            className="md:col-span-1"
            data-element="footer-brand-column"
            data-name="Footer Brand Column"
          >
            <img
              src="/light-sand-mountain.png"
              alt="Highvale Events"
              className="h-12 w-auto mb-4 brightness-0 invert"
              data-element="footer-logo"
              data-name="Footer Logo"
            />
            <p
              className="text-white/70 text-sm leading-relaxed"
              data-element="footer-brand-description"
              data-name="Footer Brand Description"
            >
              Creating unforgettable moments for Colorado's most cherished celebrations.
            </p>
          </div>

          {/* Quick Links */}
          <div
            data-element="footer-quick-links-column"
            data-name="Footer Quick Links Column"
          >
            <h4
              className="font-cormorant text-xl font-semibold mb-4 text-champagne"
              data-element="footer-section-heading"
              data-name="Quick Links Heading"
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/weddings" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/party-planning" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  Party Planning
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-4 text-champagne">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/say-hi" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-4 text-champagne">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-champagne mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  Colorado Springs, CO
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                <a href="tel:+19703712799" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  (970) 371-2799
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-champagne flex-shrink-0" />
                <a href="mailto:hello@highvaleevents.com" className="text-white/70 hover:text-champagne transition-colors text-sm">
                  hello@highvaleevents.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-champagne transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-champagne transition-colors">
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {currentYear} Highvale Events & Design. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/50 hover:text-champagne text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
