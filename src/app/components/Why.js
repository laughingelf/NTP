'use client';

import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 underline">
          Why Choose North Texas Print
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* High-Quality Printers Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-black mb-6">
            High-Quality Printers
        </h3>
        <Image
            src="/img/3d-printer-icon.svg"
            alt="High-Quality 3D Printers"
            width={175}
            height={175}
            className="mx-auto rounded-md shadow-md shadow-gray-800 hover:shadow-lg transition"
        />
        </div>

        {/* Durable Materials Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Durable Materials
        </h3>
        <Image
            src="/img/3d-materials-icon.svg"
            alt="Durable 3D Materials"
            width={175}
            height={175}
            className="mx-auto rounded-md shadow-md shadow-gray-800 hover:shadow-lg transition"
        />
        </div>

        {/* Bespoke Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Bespoke Service
        </h3>
        <Image
            src="/img/bespoke-icon.svg"
            alt="Bespoke 3D Printing Services"
            width={175}
            height={175}
            className="mx-auto rounded-md shadow-md shadow-gray-800 hover:shadow-lg transition"
        />
        </div>

        {/* Experienced Team Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Experienced Team
        </h3>
        <Image
            src="/img/worker-icon.svg"
            alt="Experienced 3D Printing Team"
            width={175}
            height={175}
            className="mx-auto rounded-md shadow-md shadow-gray-800 hover:shadow-lg transition"
        />
        </div>

        </div>
      </div>
      <div className='text-center mt-18 text-black flex justify-center'>
        {/* <h2>test</h2> */}
        <iframe src="https://northtexasprint.autodesk360.com/shares/public/SH286ddQT78850c0d8a41feedbd0ba58c3c8?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> 
      </div>
    </section>
  );
}
