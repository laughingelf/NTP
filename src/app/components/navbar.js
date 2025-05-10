// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
            <Link href="/" className="flex flex-row items-center space-x-4">
                <Image
                src="/img/print-logo.webp"
                alt="North Texas Print Logo"
                width={80}
                height={80}
                className=""
                />
                <h1>North Texas Print</h1>
            </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-semibold items-center">
          <Link href="/" className="text-black hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-black hover:text-gray-900">About Us</Link>
          <Link href="/services" className="text-black hover:text-gray-900">Services</Link>
          <Link href="/shop" className="text-black hover:text-gray-900">Shop</Link>
          <Link href="/contact" className="text-black hover:text-gray-900">Contact</Link>
          <Link href="/contact" className="text-xl text-white bg-red-500 rounded-xl shadow-md shadow-black px-8 py-2 hover:shadow-lg hover:text-black transition">Get A Free Quote</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} color='#FF0000' /> : <Menu size={28} color='#FF0000' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-200 shadow-md font-semibold">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-black hover:text-gray-900">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-black hover:text-gray-900">About Us</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="text-black hover:text-gray-900">Services</Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)} className="text-black hover:text-gray-900">Shop</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-black hover:text-gray-900">Contact</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white bg-red-500 w-full text-center text-xl py-4 hover:text-gray-900">Get A Free Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
