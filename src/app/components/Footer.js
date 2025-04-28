'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Socials */}
        <div className="flex flex-col items-start space-y-4">
          <Link href="/">
            <Image
              src="/img/print-logo.webp"
              alt="North Texas Print Logo"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.instagram.com/north_texas_print/" target="_blank" aria-label="Instagram">
              <FaInstagram size={28} className="hover:text-[#916128] hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/company/north-texas-print/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin size={28} className="hover:text-[#916128] hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://www.facebook.com/NorthTexasPrint" target="_blank" aria-label="Facebook">
              <FaFacebook size={28} className="hover:text-[#916128] hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline hover:text-[#916128]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-[#916128]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-[#916128]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline hover:text-[#916128]">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📍 1325 Cattle Crossing Dr, Fort Worth, Texas 76131</li>
            <li><a href='tel:9794518070'>📞 (979) 451-8070</a></li>
            <li><a href='mailto:admin@northtexasprint.com'>📧 admin@northtexasprint.com</a></li>
          </ul>
        </div>

        {/* Extra (optional) */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Hours</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Mon-Fri: 9am - 6pm</li>
            <li>Sat: 10am - 4pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} North Texas Print. All rights reserved.
      </div>
    </footer>
  );
}
