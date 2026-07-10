import Image from 'next/image';
import React from 'react';
import ShopMap from '../component/ShopMap';

const Aboutpage = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            {/* Team Grid */}
            <div className="grid md:grid-cols-3 gap-10 items-start mb-16">
                
                {/* Mehraj Uddin Tanvir */}
                <div className="text-center space-y-3">
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
                        {[...Array(8)].map((_, i) => <div key={i}></div>)}
                    </div>
                    <h3 className="text-xl font-bold pt-4">Mehraj Uddin Tanvir</h3>
                    <p className="text-gray-900 font-medium">Owner</p>
                    <p className="text-gray-900 font-medium">Principal Design Consultant</p>

                    <div className="text-sm text-gray-500 space-y-1">
                        <p>Email: owner1@gmail.com</p>
                        <p>Phone: +971505066411</p>
                    </div>
                </div>

                {/* ABDULRAHMAN FAISAL BIN HAIDER */}
                <div className="text-center space-y-3">
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
                        {[...Array(8)].map((_, i) => <div key={i}></div>)}
                    </div>
                    <h3 className="text-xl font-bold pt-4">ABDULRAHMAN FAISAL BIN HAIDER</h3>
                    <p className="text-gray-900 font-medium">Owner</p>
                    <p className="text-gray-900 font-medium">Head of Operations & Strategy</p>

                    <div className="text-sm text-gray-500 space-y-1">
                        <p>Email: owner2@gmail.com</p>
                        <p>Phone: +971 50 945 2233</p>
                    </div>
                </div>

                {/* Mohammad Rashel */}
                <div className="text-center space-y-3">
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
                        {[...Array(8)].map((_, i) => <div key={i}></div>)}
                    </div>
                    <h3 className="text-xl font-bold pt-4">Mohammad Rashel</h3>
                    <p className="text-gray-900 font-medium">Owner</p>
                    <p className="text-gray-900 font-medium">Technical Solutions & Architecture Specialist</p>

                    <div className="text-sm text-gray-500 space-y-1">
                        <p>Email: owner3@gmail.com</p>
                        <p>Phone: +97152 620 5573</p>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full mt-10">
                <ShopMap />
            </div>
        </div>
    );
};

export default Aboutpage;