import React from 'react';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="Creative Team in Kolkata" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px] lg:h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-gray-100 max-w-xs">
              <p className="font-bold text-4xl text-blue-600 mb-1">100%</p>
              <p className="text-gray-600 font-medium">Growth-Oriented Designs</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We are Flexible — Your Creative & Digital Growth Partner in Kolkata
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We help startups, businesses and brands build a strong online presence through modern website design, engaging visuals and result-driven digital marketing creatives.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is simple — <span className="text-gray-900 font-semibold">Deliver quality designs, fast service, and measurable growth.</span>
            </p>

            <div className="grid gap-6">
              {[
                { icon: ShieldCheck, text: "Professional brand identity" },
                { icon: Monitor, text: "Strong online presence" }, // Used Monitor locally here, needs import or standard svg
                { icon: TrendingUp, text: "Creative digital communication" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 transition-colors hover:border-blue-200 hover:bg-blue-50">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600">
                    <item.icon size={24} />
                  </div>
                  <span className="font-semibold text-gray-800 text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quick fix for the missing icon import
import { Monitor } from 'lucide-react';
