"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Designs", href: "/allDesign" },
    { label: "About us", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-6 h-full">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-200 h-full flex items-center border-b-2 px-1 ${
                    isActive
                      ? "text-red-600 border-red-600 font-bold"
                      : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-1 justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/" className="flex items-center gap-2">
              <Image
              src="/Aerenalogo.jpeg"
              alt="logo"
              width={100}
              height={50}
              className="w-70 h-20 p-3"
              suppressHydrationWarning
              priority
              />
            </Link>
          </div>

          <div className="flex items-center">
             

              <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.1 , repeat: 1, ease: "linear" }}
            className="flex items-center"
              >
        <Link
        href="https://wa.me/8801830480102"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 px-4 py-1.5 text-sm font-bold text-green-500 transition-all duration-1000 hover:bg-green-500 hover:text-white"
        >
      <FaWhatsapp className="text-lg md:text-xl" />
      <span className="hidden sm:inline">WhatsApp</span>
      </Link>
      </motion.div>
          </div>

        </div>
      </div>

      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0 overflow-hidden"
        }`} 
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-3 bg-white">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-red-50 text-red-600 font-bold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;