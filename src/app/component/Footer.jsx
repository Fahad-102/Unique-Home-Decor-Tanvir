"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const [stars] = useState(() => 
        Array.from({ length: 150 }).map(() => ({
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            size: Math.random() * 3 + 1 + "px",
            opacity: Math.random() * 0.7 + 0.3,
            delay: Math.random() * 5
        }))
    );

    return (
        <footer className="relative w-full overflow-hidden border-t border-yellow-600/50 bg-[#000000]">
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-pulse"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                            opacity: star.opacity,
                            boxShadow: "0 0 8px 2px #d4af37",
                            animationDelay: `${star.delay}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 bg-black/60 backdrop-blur-sm p-10 flex flex-col items-center">
                <div className="mb-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo5.png" alt="logo" width={250} height={50} />
                    </Link>
                </div>
                
                <nav className="grid grid-flow-col gap-8 font-medium mb-6 text-yellow-500">
                    <Link href="/about/companyDetails" className="hover:text-yellow-300 transition-colors">Company Details</Link>
                    <Link href="/about/ownersDetails" className="hover:text-yellow-300 transition-colors">Contact</Link>
                    <Link href="/allDesign" className="hover:text-yellow-300 transition-colors">Designs</Link>
                </nav>

                <nav className="mb-6">
                    <div className="grid grid-flow-col gap-6 text-3xl text-yellow-500">
                        <Link href="https://www.tiktok.com/@uniquehomedecor11" target="_blank" className="hover:text-white transition-colors"><FaTiktok /></Link>
                        <Link href="https://www.instagram.com/uniquehomedecor2025" target="_blank" className="hover:text-[#E1306C] transition-colors"><AiFillInstagram /></Link>
                        <Link href="https://www.facebook.com/share/1JTAAeVbDE/" target="_blank" className="hover:text-[#4267B2] transition-colors"><FaFacebookSquare /></Link>
                        <Link href="https://youtube.com/@uniquehomedecor7" target="_blank" className="hover:text-[#FF0000] transition-colors"><FaYoutube /></Link>
                    </div>
                </nav>

                <aside className="border-t border-yellow-600/30 w-full pt-6 mt-4 text-center text-yellow-600/80 text-sm">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by <strong>DARNA Interior</strong></p>
                    <p>Developed By <span className="text-yellow-500 font-semibold">Muhammad Fahad Bin Jamal</span></p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;