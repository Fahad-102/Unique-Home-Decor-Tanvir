'use client';

import React from 'react';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

// আপনার ইমেজগুলো অবশ্যই public/images/ ফোল্ডারে রাখতে হবে
const renovations = [
  { title: "Villa Renovation", img: "/vila.avif" },
  { title: "Apartment Renovation", img: "/appertment.avif" },
  { title: "Office Renovation", img: "/Office.avif" },
  { title: "Kitchens", img: "/kitchen.avif" },
  { title: "Bathrooms", img: "/bathroom.webp" },
  { title: "Flooring", img: "/flooring.png" },
  { title: "Wardrobes & Cabinets", img: "/Wardrobes.avif" },
  { title: "Villa Extension", img: "/VilaEx.avif" },
  { title: "Landscape", img: "/Landscape.avif" },
  { title: "Painting", img: "/painting.avif" },
  { title: "Windows & Doors", img: "/windows.avif" },
];

export default function RenovationGallery() {
  return (
    <section className="bg-neutral-900 py-16 px-4">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Renovations</h2>
      
      {/* গ্রিড লেআউট */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {renovations.map((item, index) => (
          <div key={index} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
            {/* ইমেজ সেকশন */}
            <Image 
              src={item.img} 
              alt={item.title} 
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
            
            {/* নিচের ব্ল্যাক ওভারলে এবং টেক্সট */}
            <div className="absolute bottom-0 left-0 w-full bg-black/80 p-3 flex justify-between items-center z-10">
              <span className="text-white text-[10px] md:text-xs font-medium uppercase tracking-wider">
                {item.title}
              </span>
              <IoArrowForward className="text-white" size={14} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}