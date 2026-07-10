import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
           <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-7">
            
            <div>
               <Link href="/" className="flex items-center gap-2">
              <Image
              src="/Logo2.png"
              alt="logo"
              width={100}
              height={60}
              className="w-70 h-25"
              suppressHydrationWarning
              />
            </Link>
            </div>
  <nav className="grid grid-flow-col gap-4">
    <Link href="/about" className="link link-hover">About us</Link>
    <Link href="/contact" className="link link-hover">Contact</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-5 ">
      <Link className="text-4xl scale-100 hover:scale-125 hover: transition-transform duration-500" href="https://www.tiktok.com/@uniquehomedecor11" target="_blank">
      <FaTiktok />
      </Link>
      <Link className="text-4xl scale-100 hover:scale-125 transition-transform duration-500 text-red-600" href="https://www.instagram.com/uniquehomedecor2025?igsh=MW5jenB0bWZsaDIzaw" target="_blank">
      <AiFillInstagram />
      </Link>
      <Link className="text-4xl scale-100 hover:scale-125 transition-transform duration-500 text-blue-950" href="https://www.facebook.com/share/1JTAAeVbDE/" target="_blank">
      <FaFacebookSquare />
      </Link>
      <Link className="text-4xl scale-100 hover:scale-125 transition-transform duration-500 text-red-700" href="https://youtube.com/@uniquehomedecor7?si=izJPg1I4uKZ6UJVk" target="_blank">
      <FaYoutube />
      </Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by DARNA</p>
    <p>Developed By Muhammad Fahad Bin Jamal</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;