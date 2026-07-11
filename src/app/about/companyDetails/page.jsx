import ShopMap from '@/app/component/ShopMap';
import React from 'react';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const CompanyDetailsPage = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden border border-yellow-600/30">
        
        {/* Header Section */}
        <div className="bg-black p-10 text-center border-b border-yellow-600/30">
          <h1 className="text-4xl font-bold text-white mb-2">DARNA Renovation LLC</h1>
          <p className="text-yellow-500 font-medium tracking-widest uppercase">Premium Quality | Professional Craftsmanship</p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          
          {/* Main Philosophy */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quality Over Everything</h2>
            <p className="text-lg text-gray-400 italic">
              "Price is secondary; the standard of our work is our priority. We believe in crafting perfection in every detail."
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black p-6 rounded-xl border border-yellow-600/20">
              <h4 className="font-bold text-lg text-yellow-500 mb-2">Expert Gypsum Works</h4>
              <p className="text-gray-400">Specializing in high-end gypsum board installations, ceiling designs, and wall finishes that add architectural elegance to any room.</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-yellow-600/20">
              <h4 className="font-bold text-lg text-yellow-500 mb-2">Complete Interior Solutions</h4>
              <p className="text-gray-400">From custom-designed sofas and premium furniture to elegant curtains and home decor—we provide end-to-end interior styling.</p>
            </div>
          </div>

          {/* Complete A-Z Services */}
          <div className="mb-12 mt-10">
            <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-4">Our A-Z Interior Services</h3>
            <p className="text-gray-400 mb-8">We provide complete interior turnkey solutions. From basic construction to the final finishing touches, we handle everything under one roof.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Gypsum Work", icon: "🏗️" },
                { name: "Tiles Fitting", icon: "✨" },
                { name: "Furniture Design", icon: "🪑" },
                { name: "Professional Painting", icon: "🎨" },
                { name: "Curtains & Blinds", icon: "🪟" },
                { name: "Chandelier & Lights", icon: "💡" },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-black border border-yellow-600/20 rounded-xl shadow-sm hover:border-yellow-500 transition-all">
                  <span className="text-3xl mb-2">{service.icon}</span>
                  <span className="font-semibold text-gray-200 text-center">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Factors */}
          <div className="bg-black p-8 rounded-2xl text-white border border-yellow-600/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-500">Why Trust DARNA Interior?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "2+ Years of Experience in Dubai",
                "Physical Shop at Dragon Mart",
                "Extreme Attention to Detail",
                "High Customer Satisfaction",
                "Repeat Client Base",
                "Premium Material Quality"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-yellow-500" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Location Highlight */}
          <div className="flex flex-col items-center justify-center bg-black p-6 rounded-xl mb-12 mt-10 border border-yellow-600/30">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-2" />
            <p className="text-white">Located at <strong>Dubai Dragon Mart</strong></p>
            <p className="text-sm text-gray-400 mt-2">Come visit us to see the quality of our work firsthand!</p>
          </div>

          <ShopMap/>

        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;