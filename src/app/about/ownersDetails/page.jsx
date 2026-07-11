import Image from 'next/image';
import React from 'react';
import ShopMap from '../../component/ShopMap';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const OwnersPage = () => {
    return (
        <div className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-10 items-start mb-16">
                    
                    {/* কার্ডের থিম: bg-zinc-900, border-yellow-600/30, text-white/gray */}
                    
                    {/* ABDULRAHMAN FAISAL BIN HAIDER */}
                    <div className="text-center space-y-1 bg-zinc-900 p-6 rounded-3xl border border-yellow-600/30 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-3 shadow-xl">
                        <div className="hover-3d">
                            <figure className="rounded-2xl overflow-hidden">
                                <Image
                                    src="/owner2.png"
                                    alt="Abdulrahman Faisal Bin Haider"
                                    width={600}
                                    height={800}
                                    className="rounded-xl shadow-lg object-cover h-80 w-full"
                                    suppressHydrationWarning
                                />
                            </figure>
                        </div>
                        <h3 className="text-xl font-bold pt-4 text-white">ABDULRAHMAN FAISAL BIN HAIDER</h3>
                        <p className="text-yellow-500 font-medium">Owner</p>
                        <p className="text-gray-400 font-medium">Head of Operations & Strategy</p>

                        <div className="text-sm text-gray-500 space-y-1 pt-2">
                            <p className="text-gray-500">Email: owner2@gmail.com</p>
                            <Link
                                href="https://wa.me/+971509452233"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-600 px-4 py-1.5 text-sm font-bold text-yellow-500 transition-all duration-500 hover:bg-yellow-600 hover:text-black"
                            >
                                <p className='flex gap-1'><FaWhatsapp className="text-lg md:text-xl" /> +971 50 945 2233</p>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Mehraj Uddin Tanvir */}
                    <div className="text-center space-y-3 bg-zinc-900 p-6 rounded-3xl border border-yellow-600/30 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-3 shadow-xl">
                        <div className="hover-3d">
                            <figure className="rounded-2xl overflow-hidden">
                                <Image
                                    src="/Tanvir.jpg"
                                    alt="Mehraj Uddin Tanvir"
                                    width={600}
                                    height={800}
                                    className="rounded-xl shadow-lg object-cover h-80 w-full"
                                    suppressHydrationWarning
                                />
                            </figure>
                        </div>
                        <h3 className="text-xl font-bold pt-4 text-white">Mehraj Uddin Tanvir</h3>
                        <p className="text-yellow-500 font-medium">Owner</p>
                        <p className="text-gray-400 font-medium">Principal Design Consultant</p>

                        <div className="text-sm text-gray-500 space-y-1 pt-2">
                            <p className="text-gray-500">Email: owner1@gmail.com</p>
                            <Link
                                href="https://wa.me/+971505066411"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-600 px-4 py-1.5 text-sm font-bold text-yellow-500 transition-all duration-500 hover:bg-yellow-600 hover:text-black"
                            >
                                <p className='flex gap-1'><FaWhatsapp className="text-lg md:text-xl" /> +971 50 506 6411</p>
                            </Link>
                        </div>
                    </div>

                    {/* Mohammad Rashel */}
                    <div className="text-center space-y-3 bg-zinc-900 p-6 rounded-3xl border border-yellow-600/30 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-3 shadow-xl">
                        <div className="hover-3d">
                            <figure className="rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80"
                                    alt="Mohammad Rashel"
                                    width={600}
                                    height={800}
                                    className="rounded-xl shadow-lg object-cover h-80 w-full"
                                    suppressHydrationWarning
                                />
                            </figure>
                        </div>
                        <h3 className="text-xl font-bold pt-4 text-white">Mohammad Rashel</h3>
                        <p className="text-yellow-500 font-medium">Owner</p>
                        <p className="text-gray-400 font-medium">Technical Solutions & Architecture Specialist</p>

                        <div className="text-sm text-gray-500 space-y-1 pt-2">
                            <p className="text-gray-500">Email: owner3@gmail.com</p>
                            <Link
                                href="https://wa.me/+971526205573"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-600 px-4 py-1.5 text-sm font-bold text-yellow-500 transition-all duration-500 hover:bg-yellow-600 hover:text-black"
                            >
                                <p className='flex gap-1'><FaWhatsapp className="text-lg md:text-xl" /> +971 52 620 5573</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full mt-10 border border-yellow-600/30 rounded-2xl overflow-hidden">
                    <ShopMap />
                </div>
            </div>
        </div>
    );
};

export default OwnersPage;