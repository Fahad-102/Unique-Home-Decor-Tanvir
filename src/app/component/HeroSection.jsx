import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 px-6 text-center bg-black overflow-hidden">
      {/* ১০০% কাজ করার জন্য Tailwind utility class */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbed?auto=format&fit=crop&w=1920&q=80')" }}
      />
      
      {/* কন্টেন্ট লেয়ার */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-4">
          No. 1 Home Renovation Company in Dubai
        </h1>
        
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          DARNA Renovation elevates Dubai living through bespoke design and expert 
          craftsmanship. As a fully licensed renovation partner, we guarantee premium 
          finishes, full regulatory compliance, and the uncompromising quality you deserve.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;