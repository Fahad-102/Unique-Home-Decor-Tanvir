import Image from "next/image";
import React from "react";
import { designs } from "@/data/Designs";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const DesignDetails = async ({ params }) => {
  const { id } = await params;
  
  const design = designs.find((item) => item.id == id);

  if (!design) {
    return (
      <div className="text-center py-20 text-yellow-500 bg-black min-h-screen">
        Design Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-gray-300 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* মেইন ইমেজ */}
        <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(202,138,4,0.2)] border border-yellow-600/30">
          <Image
            src={design.image}
            width={1200}
            height={800}
            alt={design.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* টাইটেল এবং ডেসক্রিপশন */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-white mb-4">{design.title}</h1>
          <p className="text-gray-400 leading-relaxed text-lg border-l-2 border-yellow-600 pl-4">
            {design.desc}
          </p>
        </div>

        {/* ইনফো সেকশন */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-900 rounded-2xl border border-yellow-600/30">
            <h2 className="text-xl font-bold text-white mb-4">Design Highlights</h2>
            <ul className="list-none space-y-2 text-gray-400">
              <li className="flex items-center gap-2">✔ Premium interior finishing</li>
              <li className="flex items-center gap-2">✔ Modern furniture setup</li>
              <li className="flex items-center gap-2">✔ Space optimized layout</li>
              <li className="flex items-center gap-2">✔ Luxury aesthetic design</li>
            </ul>
          </div>
          <div className="p-6 bg-zinc-900 rounded-2xl border border-yellow-600/30">
            <h2 className="text-xl font-bold text-white mb-4">Why Choose Us</h2>
            <ul className="list-none space-y-2 text-gray-400">
              <li className="flex items-center gap-2">✔ Experienced interior designers</li>
              <li className="flex items-center gap-2">✔ Dubai projects expertise</li>
              <li className="flex items-center gap-2">✔ High quality materials</li>
              <li className="flex items-center gap-2">✔ Customer satisfaction priority</li>
            </ul>
          </div>
        </div>

        {/* হোয়াটসঅ্যাপ বাটন */}
        <div className="mt-10 flex justify-end">
          <Link 
            href={`https://wa.me/+971505066411?text=Hello,%20I%20am%20interested%20in%20this%20design:%20${design.title}`} 
            target="_blank" 
            className="rounded-full border border-yellow-600 flex items-center gap-3 px-8 py-3 text-sm font-bold text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-500"
          >
            <FaWhatsapp className="text-xl" /> Contact for This Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignDetails;