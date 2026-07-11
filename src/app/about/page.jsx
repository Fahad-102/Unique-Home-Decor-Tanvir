import Image from 'next/image';
import React from 'react';
import ShopMap from '../component/ShopMap';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const OwnerPage = () => {
    return (
        // ব্যাকগ্রাউন্ডে পুরোপুরি গাঢ় ব্ল্যাক দিয়েছি যাতে পার্থক্য বোঝা যায়
        <div className="bg-[#050505] min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-700 mb-20 uppercase tracking-[0.2em]">
                    Our Leadership
                </h2>
                
                {/* কার্ডের স্ট্রাকচার একদম বদলে দিয়েছি */}
                <div className="grid md:grid-cols-3 gap-12">
                    
                    {/* ওনার ১ */}
                    <div className="relative group p-px bg-linear-to-b from-yellow-600 to-transparent rounded-3xl">
                        <div className="bg-black p-8 rounded-[22px] h-full transition-all duration-500 group-hover:bg-[#0a0a0a]">
                            <div className="overflow-hidden rounded-2xl mb-6">
                                <Image src="/owner2.png" alt="Owner" width={600} height={800} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">ABDULRAHMAN</h3>
                            <p className="text-yellow-600 font-medium mb-4 uppercase text-xs tracking-widest">Operations & Strategy</p>
                            <Link href="https://wa.me/+971509452233" className="flex items-center justify-center gap-3 w-full py-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                                <FaWhatsapp className="text-xl" /> CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* ওনার ২ */}
                    <div className="relative group p-px bg-linear-to-b from-yellow-600 to-transparent rounded-3xl">
                        <div className="bg-black p-8 rounded-[22px] h-full transition-all duration-500 group-hover:bg-[#0a0a0a]">
                            <div className="overflow-hidden rounded-2xl mb-6">
                                <Image src="/Tanvir.jpg" alt="Tanvir" width={600} height={800} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">TANVIR</h3>
                            <p className="text-yellow-600 font-medium mb-4 uppercase text-xs tracking-widest">Design Consultant</p>
                            <Link href="https://wa.me/+971505066411" className="flex items-center justify-center gap-3 w-full py-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                                <FaWhatsapp className="text-xl" /> CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* ওনার ৩ */}
                    <div className="relative group p-px bg-linear-to-b from-yellow-600 to-transparent rounded-3xl">
                        <div className="bg-black p-8 rounded-[22px] h-full transition-all duration-500 group-hover:bg-[#0a0a0a]">
                            <div className="overflow-hidden rounded-2xl mb-6">
                                <Image src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39" alt="Rashel" width={600} height={800} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">RASHEL</h3>
                            <p className="text-yellow-600 font-medium mb-4 uppercase text-xs tracking-widest">Architecture Specialist</p>
                            <Link href="https://wa.me/+971526205573" className="flex items-center justify-center gap-3 w-full py-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                                <FaWhatsapp className="text-xl" /> CONTACT
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 border border-yellow-600/30 rounded-3xl overflow-hidden">
                    <ShopMap />
                </div>
            </div>
        </div>
    );
};

export default OwnerPage;