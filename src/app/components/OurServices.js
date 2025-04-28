'use client';

import Image from 'next/image';

const services = [
  {
    title: "3D Printing",
    description: "We provide a wide variety of 3D printing materials and solutions for all your prototyping and manufacturing needs. Our selection of high-quality thermoplastics includes PLA, PETG, ASA, ABS, Polycarbonate (PC), Nylon, Carbon-Filled, and Woodfill, offering versatile options for different applications. Whether you're working on prototypes, custom designs, or low-volume production, we have the right material for your project. We also offer 3D metal printing services for producing durable parts.",
    image: "/images/prototyping.jpg",
  },
  {
    title: "3D Mapping and Reverse Engineering",
    description: "At North Texas Print, we utilize advanced 3D mapping technology to scan and replicate existing parts with precision. Whether you need to modify an existing component or replicate it exactly, our state-of-the-art scanning technology ensures accurate results every time. If you have a part you'd like to replicate or modify, our team is ready to assist. We also offer custom 3D design and engineering services, enabling us to create new parts from scratch tailored to your exact specifications.",
    image: "/images/custom-manufacturing.jpg",
  },
  {
    title: "Professional Laser Cutting & Engraving Services",
    description: "At North Texas Print, we offer laser cutting and laser engraving services using three different types of high-precision lasers. Our lasers can handle a wide variety of materials, allowing us to tackle almost any laser engraving or laser cutting task you can think of. We specialize in cutting and engraving on materials such as jewelry, wood, acrylic, glass, brass, guns, tumblers, and much more. Whether you need to engrave a custom design on a piece of jewelry or cut intricate shapes out of wood or acrylic, we have the tools and expertise to get the job done.",
    image: "/images/design-support.jpg",
  },
  {
    title: "Proof of Concept, Prototypes, & Invention Assistance Services",
    description: "At North Texas Print, we specialize in helping you transform your ideas into tangible assets. Whether you're looking to create a custom 3D printed part, a unique laser-engraved design, or a fully developed prototype, we have the tools and expertise to make it happen. Our team works closely with you to bring your creative concepts to life, turning them into high-quality, functional products. No idea is too big or small—if you can imagine it, we can create it.",
    image: "/images/3d-scanning.jpg",
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center py-6 rounded-lg shadow-md shadow-gray-300 font-extrabold text-shadow-md/60 text-shadow-gray-500 bg-white align-center justify-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="space-y-16 ">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 mx-4 max-w-xs shadow-md shadow-white hover:shadow-lg transition">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={450}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-2 py-2 md:px-8 md:py-4 rounded-lg shadow-md shadow-white hover:shadow-lg transition bg-[#916128]">
                <h3 className="text-2xl text-center font-semibold text-white underline mb-4">
                  {service.title}
                </h3>
                <p className="text-white text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
