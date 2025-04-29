'use client';

import Link from 'next/link';

export default function HomeServices() {
  return (
    <section className="w-full bg-black bg-[url('/img/services-bg.png')] bg-cover bg-[center_top_-90px] bg-no-repeat py-16">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-black text-shadow-md mb-12">
        <span className="bg-white px-8 py-4 rounded-lg">
            Our Services
        </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3D Printing */}
          <div className="bg-[#916128] p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-white underline mb-4">
              3D Printing
            </h3>
            <p className="text-white mb-6">
              High-quality 3D printing using a wide range of advanced materials for prototypes, custom designs, and manufacturing solutions.
            </p>
            <Link href="/services" className="inline-block bg-red-500 text-white font-medium shadow-md shadow-black py-2 px-4 rounded hover:text-black hover:shadow-lg hover:scale-110 transition-transform duration-300">
              Learn More
            </Link>
          </div>

          {/* 3D Mapping and Reverse Engineering */}
          <div className="bg-[#916128] p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-white underline mb-4">
              3D Mapping & Reverse Engineering
            </h3>
            <p className="text-white mb-6">
              Using advanced 3D scanning to replicate or modify existing parts, and offering custom design and engineering services from scratch.
            </p>
            <Link href="/services" className="inline-block bg-red-500 text-white font-medium shadow-md shadow-black py-2 px-4 rounded hover:text-black hover:shadow-lg hover:scale-110 transition-transform duration-300">
              Learn More
            </Link>
          </div>

          {/* Laser Cutting and Engraving */}
          <div className="bg-[#916128] p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-white underline mb-4">
              Professional Laser Cutting & Engraving
            </h3>
            <p className="text-white mb-6">
              Precision laser cutting and engraving services for wood, acrylic, glass, metal, and more, customized to your project needs.
            </p>
            <Link href="/services" className="inline-block md:mt-8 bg-red-500 text-white font-medium shadow-md shadow-black py-2 px-4 rounded hover:text-black hover:shadow-lg hover:scale-110 transition-transform duration-300">
              Learn More
            </Link>
          </div>

          {/* Prototyping & Invention Assistance */}
          <div className="bg-[#916128] p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-white underline mb-4">
              Proof of Concept, Prototypes, & Invention Assistance
            </h3>
            <p className="text-white mb-6">
              Helping bring your ideas to life with professional prototyping, product development, and custom creation services.
            </p>
            <Link href="/services" className="inline-block bg-red-500 text-white font-medium shadow-md shadow-black py-2 px-4 rounded hover:text-black hover:shadow-lg hover:scale-110 transition-transform duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
