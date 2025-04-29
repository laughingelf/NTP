'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/img/about-img.jpg" 
            alt="About North Texas Print"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About North Texas Print
          </h2>
          <p className="text-lg text-gray-600 mb-4">
          North Texas Print was founded by Jamie and me in May 2021. My journey with 3D printing started a few years 
          earlier, and I quickly developed a passion for creating custom designs and reverse engineering parts to 
          improve functionality or adapt them for new purposes. With a professional background in Non-Destructive 
          Testing as an Advanced Services Ultrasound Specialist in the industrial and infrastructure sectors, I gained 
          valuable experience working with robotics and machines operating on the X, Y, and Z axes—skills that naturally 
          transitioned into the world of 3D printing.
          </p>
          <p className="text-lg text-gray-600">
          At North Texas Print, I focus on operating the machinery and handling the design and engineering aspects of our 
          services. My wife, Jamie, brings her creativity and expertise from her background in nursing and years of experience 
          crafting custom swag, apparel, and personalized items. Together, we combine technical innovation with creative design 
          to deliver high-quality 3D printing, laser engraving, and custom product solutions to individuals and businesses 
          throughout Texas and beyond.
          </p>
        </div>

      </div>
    </section>
  );
}
