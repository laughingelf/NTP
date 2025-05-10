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
            <li><a href='tel:9794518070'>📞 Text Us (979) 451-8070</a></li>
            <li><a href='mailto:admin@northtexasprint.com'>📧 admin@northtexasprint.com</a></li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Find Us</h3>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.429805352931!2d-97.35537048481726!3d32.92325438092253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd8bb56f4c813%3A0xd5199e2efadf2fb9!2s1325%20Cattle%20Crossing%20Dr%2C%20Fort%20Worth%2C%20TX%2076131!5e0!3m2!1sen!2sus!4v1714428845678!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="North Texas Print Location"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} North Texas Print. All rights reserved.
      </div>
    </footer>
  );
}
