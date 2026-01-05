import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS, LOCATION } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Grow Your Business?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact Flexible today. Whether you need a new website, better social media presence, or a complete rebrand, we are here to help.
            </p>

            <div className="space-y-6">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 hover:text-green-700 transition-colors group">
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-200">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp Us</p>
                  <p className="text-lg font-bold">Chat on WhatsApp</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold">{EMAIL_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                  <p className="text-lg font-bold">{LOCATION}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h4>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600">
                <option>Select Service Needed</option>
                <option>Website Design</option>
                <option>Social Media Marketing</option>
                <option>Video Editing</option>
                <option>Graphic Design</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                Get a Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
