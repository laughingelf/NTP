'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle form submission here (e.g., send to API)
    console.log(formData);
  };

  return (
    <section className="w-full bg-gray-300 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side Image */}
          <div className="md:w-1/2">
            <Image
              src="/img/contact.jpg"
              alt="Contact Us"
              width={600}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-3xl font-bold text-black underline mb-6">Get A Free Estimate</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block mb-2 text-lg text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#916128]"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-lg text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#916128]"
                  placeholder="Your email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-lg text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#916128]"
                  placeholder="Write your message"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block mb-2 text-lg text-black">
                  Attach a file (optional)
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#916128] text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
