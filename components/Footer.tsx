import React from 'react';
import { Zap, Instagram, Facebook, Linkedin } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded text-white">
                  <Zap size={20} fill="currentColor" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  {COMPANY_NAME}
                </span>
             </div>
             <p className="text-sm leading-relaxed mb-6">
               Your Creative & Digital Growth Partner in Kolkata. Delivering quality designs and measurable growth.
             </p>
             <div className="flex gap-4">
               <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.label}><a href={item.href} className="hover:text-blue-400 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Graphic Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <p className="text-sm mb-2">Kolkata, West Bengal, India</p>
            <p className="text-sm mb-2">hello@flexible.agency</p>
            <p className="text-sm">+91 98765 43210</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Flexible Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
