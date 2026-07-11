"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Lazy Initialization ব্যবহার করে স্টার জেনারেট
  const [stars] = useState(() => 
    Array.from({ length: 40 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      delay: Math.random() * 5,
      size: Math.random() * 2 + 1 + "px",
    }))
  );

  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Designs", href: "/allDesign" },
    { 
      label: "About us", 
      isDropdown: true, 
      links: [
        { label: "Company Details", href: "/about/companyDetails" },
        { label: "Owner Details", href: "/about/ownersDetails" },
      ]
    },
  ];

  return (
    // 'overflow-hidden' সরিয়ে দিয়েছি যেন ড্রপডাউন বাইরে বের হতে পারে
    <nav className="sticky top-0 z-50 w-full border-b border-yellow-600/30 bg-black/60 backdrop-blur-md relative">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 5px 1px #d4af37",
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-8 h-full">
            {menuItems.map((item, index) => (
              item.isDropdown ? (
                <div key={index} className="relative h-full flex items-center group">
                  <button className="flex items-center gap-1 text-sm font-semibold text-gray-200 hover:text-yellow-500 transition-colors">
                    {item.label} <FaChevronDown className="text-[10px]" />
                  </button>
                  
                  {/* z-[100] নিশ্চিত করেছে এটি সবার ওপরে থাকবে */}
                  <div className="absolute top-16 left-0 w-48 bg-black border border-yellow-600/30 shadow-2xl py-2 rounded-xl z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.links.map((sub, i) => (
                      <Link key={i} href={sub.href} className="block px-4 py-3 text-sm text-gray-200 hover:text-yellow-500 hover:bg-zinc-900 transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={index} href={item.href} className={`text-sm font-semibold h-full flex items-center border-b-2 ${pathname === item.href ? "text-yellow-500 border-yellow-500" : "text-gray-200 border-transparent hover:text-yellow-500 transition-colors"}`}>
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex flex-1 justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/">
              <Image src="/logo5.png" alt="logo" width={230} height={40} priority />
            </Link>
          </div>

          <Link href="https://wa.me/+971505066411?text=Hello" target="_blank" className="flex gap-2 items-center rounded-full border border-yellow-600/50 px-5 py-2 text-sm font-bold text-yellow-500 hover:bg-yellow-600 hover:text-white transition-all duration-300">
            <FaWhatsapp className="text-lg" /> WhatsApp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;