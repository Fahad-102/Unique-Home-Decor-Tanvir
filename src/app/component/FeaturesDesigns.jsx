"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";


const cardImageClasses = "w-full h-56 sm:h-64 object-cover"; 
const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const FeaturesDesigns = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-4 grid grid-cols-1 gap-5">

      {/* 1st Card */}
      <motion.div variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} className="card lg:card-side lg:flex-row-reverse bg-base-100 shadow-sm w-full  overflow-hidden">
        <figure className="w-full lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format"
            width={600}
            height={400}
            alt="Luxury Bedroom"
            className={cardImageClasses} 
            suppressHydrationWarning={true}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Luxury Bedroom Design</h2>
          <p>Experience a luxurious bedroom interior featuring premium furnishings, sophisticated color palettes, custom lighting solutions, and a relaxing atmosphere designed for ultimate comfort and elegance.</p>
        </div>
      </motion.div>

      {/* 2nd Card */}
      <motion.div variants={slideFromRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} className="card lg:card-side bg-base-100 shadow-sm w-full  overflow-hidden">
        <figure className="w-full lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
            width={600}
            height={400}
            alt="Modern Kitchen"
            className={cardImageClasses} 
            suppressHydrationWarning={true}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Modern Kitchen Interior</h2>
          <p>A modern kitchen design that combines functionality and style with high-quality cabinetry, smart storage solutions, elegant countertops, and a seamless layout for everyday living.</p>
        </div>
      </motion.div>

      {/* 3rd Card */}
      <motion.div variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} className="card lg:card-side lg:flex-row-reverse bg-base-100 shadow-sm w-full  overflow-hidden">
        <figure className="w-full lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            width={600}
            height={400}
            alt="Living Room"
            className={cardImageClasses}  
            suppressHydrationWarning={true}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Contemporary Living Room</h2>
          <p>Discover a contemporary living room crafted with carefully selected furniture, decorative accents, natural lighting, and open-space planning to create a welcoming and stylish environment.</p>
        </div>
      </motion.div>

      {/* 4th Card */}
      <motion.div variants={slideFromRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} className="card lg:card-side bg-base-100 shadow-sm w-full  overflow-hidden">
        <figure className="w-full lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f"
            width={600}
            height={400}
            alt="Office Interior"
            className={cardImageClasses} 
            suppressHydrationWarning={true}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Professional Office Space</h2>
          <p>Enhance productivity with a professionally designed office space featuring ergonomic furniture, efficient layouts, modern aesthetics, and a balanced work environment tailored to your business needs.</p>
        </div>
      </motion.div>

    </div>
  );
};

export default FeaturesDesigns;