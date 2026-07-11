import React from "react";
import DesignsCard from "../component/DesignsCard";
import { designs } from "@/data/Designs";

const AllDesignPage = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase tracking-widest">
          Our <span className="text-yellow-600">Designs</span>
        </h2>
        
        {/* গ্রিড লেআউট */}
        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((item) => (
            <div 
              key={item.id} 
              className="transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(202,138,4,0.3)]"
            >
              <DesignsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDesignPage;