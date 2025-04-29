'use client';

import Link from 'next/link';

export default function HeroContact() {
  return (
    <section
      className="relative w-full h-[vh-50] bg-cover bg-center bg-no-repeat pt-28 pb-20 text-center text-white"
      style={{
        backgroundImage: "url('/img/hero-about.jpg')",
      }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold leading-tight">
        Have Questions? We're Here to Help
        </h1>
        <p className="mt-6 text-lg text-white">
            We’re ready to bring your ideas to life — reach out today
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/shop" className="px-6 py-3 bg-red-500 text-white text-md md:text-xl font-semibold rounded-lg shadow-md shadow-black hover:shadow-lg hover:text-black transition">
            Check Out Our Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
