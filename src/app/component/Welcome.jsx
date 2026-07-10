import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Welcome = () => {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden ">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Living_Area.avif"
                    alt="Drana Interior"
                    fill
                    className="object-cover" 
                    priority 
                    suppressHydrationWarning
                /> 
                
                <div className="absolute inset-0 bg-black/50"></div> 
            </div>

            
            <div className="relative z-10 px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 uppercase">
                    Welcome to DARNA
                </h1>
                <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-8">
                    Transforming Spaces. Creating Value.
                </p>
                <Link href={"/allDesign"}>
                <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
                    Explore Our Work
                </button>
                </Link>
            </div>
        </section>
    );
};

export default Welcome;