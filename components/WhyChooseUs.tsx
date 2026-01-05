import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    "Kolkata-based creative agency",
    "Fast delivery & professional service",
    "Affordable pricing",
    "Custom designs for every brand",
    "Long-term client support"
  ];

  return (
    <section id="why-us" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-800 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Flexible?</h2>
               <p className="text-blue-100 text-lg mb-8 max-w-xl">
                 We focus on quality, design & business growth — not just decoration. We are partners in your success story.
               </p>
               <div className="space-y-4">
                 {reasons.map((reason, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                     <span className="text-xl font-medium">{reason}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl relative">
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-6">
                  Top Rated
                </div>
                <h3 className="text-2xl font-bold mb-4">Start Your Project Today</h3>
                <p className="text-blue-100 mb-6">
                  Don't settle for average. Let's create something that makes your brand stand out in Kolkata and beyond.
                </p>
                <a href="#contact" className="inline-block w-full text-center bg-white text-blue-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
