"use client"
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';

const Banner = () => {
    return (
        <div>

           <Swiper navigation pagination={true} autoplay={{delay:3000}} modules={[Pagination,Navigation,Autoplay]} className="mySwiper mt-1 ">

        
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://spazio.ae/wp-content/uploads/2023/02/1-2-min_1_11zon-scaled.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-semibold">
                  <span className="text-red-700 font-bold">DARNA</span> – Luxury Interior Design
                </h1>
                <p className="mb-5">
                  Transform your home into a modern aesthetic space with expert interior design solutions,
                  blending comfort, elegance, and creativity.
                </p>
                <Link href="https://wa.me/8801830480102" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline text-green-400">Connect WhatsApp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1484154218962-a197022b5858)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-semibold">
                  <span className="text-red-700 font-bold">DARNA</span> – Modern Kitchen
                </h1>
                <p className="mb-5">
                  Stylish kitchen interiors with smart storage, premium finishes,
                  and functional layouts for daily comfort.
                </p>
                <Link href="https://wa.me/8801830480102" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline text-green-400">Connect WhatsApp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

    
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-semibold">
                  <span className="text-red-700 font-bold">DARNA</span> – Living Room
                </h1>
                <p className="mb-5">
                  Contemporary living room designs with cozy ambiance,
                  natural lighting, and elegant furniture styling.
                </p>
                <Link href="https://wa.me/8801830480102" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline text-green-400">Connect WhatsApp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

  
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1513694203232-719a280e022f)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-semibold">
                  <span className="text-red-700 font-bold">DARNA</span> - Office Space
                </h1>
                <p className="mb-5">
                  Professional office interiors designed for productivity,
                  creativity, and modern work lifestyle.
                </p>
                <Link href="https://wa.me/8801830480102" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline text-green-400">Connect WhatsApp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Banner;