"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DesignsCard = ({ item }) => {
    return (
        <div className="bg-zinc-900 border border-yellow-600/30 rounded-2xl overflow-hidden shadow-lg hover:border-yellow-500 transition-all duration-500 hover:shadow-[0_0_20px_rgba(202,138,4,0.2)]">
            {/* Image Section */}
            <figure className="h-64 overflow-hidden">
                <Image
                    src={item.image}
                    width={600}
                    height={400}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
            </figure>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white tracking-wide">{item.title}</h2>
                <p className="text-gray-400 text-sm line-clamp-2">{item.desc}</p>

                <div className="pt-4 flex justify-end">
                    <Link href={`/allDesign/${item.id}`}>
                        <button className="px-6 py-2 border border-yellow-600 text-yellow-600 rounded-full text-sm font-bold hover:bg-yellow-600 hover:text-black transition-all duration-300">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DesignsCard;