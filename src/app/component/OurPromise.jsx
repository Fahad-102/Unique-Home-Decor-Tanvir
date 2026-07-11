import React from 'react';
import { 
  IoPersonOutline, 
  IoCalendarOutline, 
  IoShieldCheckmarkOutline, 
  IoCashOutline, 
  IoGiftOutline 
} from 'react-icons/io5';

const promises = [
  { 
    icon: IoPersonOutline, 
    title: "Experienced Planners", 
    description: "Work with experienced planners to receive a custom proposal tailored to your renovation goals." 
  },
  { 
    icon: IoCalendarOutline, 
    title: "Planned Installation", 
    description: "5-6 Weeks installation for kitchens and cabinets. Average 8-10 Weeks timeline for full renovation." 
  },
  { 
    icon: IoShieldCheckmarkOutline, 
    title: "Warranty", 
    description: "Upto 10 years warranty on kitchen and cabinet work. 1 Year workmanship warranty for other works." 
  },
  { 
    icon: IoCashOutline, 
    title: "Best Price Guarantee", 
    description: "Best price guarantee for sanitaryware, tiles and kitchen appliances with no hidden costs." 
  },
  { 
    icon: IoGiftOutline, 
    title: "Free Design Services", 
    description: "Basic Design & Drawings provided free of charge for all confirmed projects." 
  }
];

export default function OurPromise() {
  return (
    <section className="bg-neutral-900 py-16 px-8 text-neutral-content">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-500 mb-12 text-left">
          Our Promise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {promises.map((item, index) => (
            <div 
              key={index} 
              className="card bg-neutral-800 p-6 shadow-xl border border-amber-500/20 hover:border-amber-500 transition-all duration-300"
            >
              <div className="text-amber-500 mb-4">
                <item.icon size={40} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}