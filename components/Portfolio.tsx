import React, { useState } from 'react';

const CATEGORIES = ['All', 'Web Design', 'Graphic Design', 'Video Editing'];

const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Kolkata Coffee House', category: 'Web Design', image: 'https://picsum.photos/600/400?random=21' },
  { id: 2, title: 'TechStart Branding', category: 'Graphic Design', image: 'https://picsum.photos/600/400?random=22' },
  { id: 3, title: 'Fashion Week Reels', category: 'Video Editing', image: 'https://picsum.photos/600/400?random=23' },
  { id: 4, title: 'Restaurant Landing Page', category: 'Web Design', image: 'https://picsum.photos/600/400?random=24' },
  { id: 5, title: 'Product Launch Teaser', category: 'Video Editing', image: 'https://picsum.photos/600/400?random=25' },
  { id: 6, title: 'Festival Sale Banners', category: 'Graphic Design', image: 'https://picsum.photos/600/400?random=26' },
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
          <p className="text-gray-600">A glimpse of our creative journey.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-video animate-in fade-in zoom-in duration-300">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 font-medium text-sm mb-1">{item.category}</span>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};