import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
          <p className="text-gray-600">A glimpse of our creative journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-video">
              <img 
                src={`https://picsum.photos/600/400?random=${item + 20}`} 
                alt={`Portfolio Item ${item}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 font-medium text-sm mb-1">Branding & Design</span>
                <h3 className="text-white font-bold text-xl">Client Project {item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
