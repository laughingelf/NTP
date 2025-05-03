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
          <h2 className="text-4xl font-bold text-black mb-6 underline">
            Our Story
          </h2>
          <p className="text-lg text-gray-800 mb-4">
          North Texas Print began in 2021 as a one-person workshop in Fort Worth, Texas—fueled by a passion for precision, 
          creativity, and practical problem-solving. With a background as an Advanced Services Ultrasound Specialist in the 
          industrial sector, I developed a deep appreciation for the mechanics of systems working across X, Y, and Z axes. 
          That technical curiosity led me into the world of 3D printing, where building, designing, and re-engineering parts 
          felt like a natural fit. What started as a side project quickly grew into a business—and now, a team-driven creative 
          tech studio. Today, North Texas Print is expanding into new disciplines, new technologies, and new possibilities.
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 underline">
            What We Do
          </h2>
          <p className="text-lg text-gray-800">
          We provide creative, technical, and fabrication services to individuals, businesses, and inventors looking to bring ideas to life. 
          Our offerings include:
          </p>
          <br/>
          <ul className="list-disc pl-6 space-y-4 text-black">
            <li>
              <strong>3D Printing:</strong> Durable, functional components using PLA, PETG, ABS, Nylon, and metal materials.
            </li>
            <li>
              <strong>3D Mapping &amp; Reverse Engineering:</strong> Scan, replicate, or modify physical parts with precision.
            </li>
            <li>
              <strong>Robotic &amp; Automated Solutions:</strong> Custom-designed automation tools and robotic systems to optimize workflows and boost productivity.
            </li>
            <li>
              <strong>Laser Engraving:</strong> Precision engraving on wood, acrylic, glass, brass, and more for gifts, branding, or manufacturing.
            </li>
            <li>
              <strong>Custom Apparel &amp; Branding:</strong> Unique clothing, merchandise, and promotional items tailored to your vision.
            </li>
            <li>
              <strong>Product Prototyping &amp; Proof of Concept:</strong> From napkin sketch to functional prototype—we help innovators validate and refine ideas.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}
