'use client';

import { Mail, Phone, MapPin } from 'lucide-react'; // optional: using icons for a nice look

export default function ContactInfo() {
  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Address */}
          <div className="flex flex-col items-center">
            <MapPin size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
            <p className="text-gray-800 px-18">
              1325 Cattle Crossing Dr,<br />
              Fort Worth, TX 76131
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">
                <a href='tel:9794518070'>
                    (979) 451-8070
                </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">
                <a href='mailto:admin@northtexasprint.com'>
                    admin@northtexasprint.com
                </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
