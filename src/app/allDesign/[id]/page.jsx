import Image from "next/image";
import React from "react";
import { designs } from "@/data/Designs";


const DesignDetails = async ({ params }) => {
  const { id } = await params;
  
  const design = designs.find((item) => item.id == id);

  if (!design) {
    return (
      <div className="text-center py-20 text-red-500">
        Design Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src={design.image}
          width={1200}
          height={800}
          alt={design.title}
          className="w-full h-125 object-cover"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{design.title}</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {design.desc}
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-5 border rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Design Highlights</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Premium interior finishing</li>
            <li>Modern furniture setup</li>
            <li>Space optimized layout</li>
            <li>Luxury aesthetic design</li>
          </ul>
        </div>
        <div className="p-5 border rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Experienced interior designers</li>
            <li>Dubai + Bangladesh projects</li>
            <li>High quality materials</li>
            <li>Customer satisfaction priority</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="btn btn-primary">
          Contact for This Design
        </button>
      </div>
    </div>
  );
};

export default DesignDetails;