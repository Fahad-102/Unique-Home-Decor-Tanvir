import React from 'react';
import { 
  FaCalculator, 
  FaFileSignature, 
  FaPaintBrush, 
  FaRulerCombined, 
  FaHardHat, 
  FaShieldAlt 
} from 'react-icons/fa';

const features = [
  { title: "STANDARD PRICING", desc: "Quotations are detailed with standard pricing through Microsoft Dynamics ERP System.", icon: <FaCalculator /> },
  { title: "NOC'S & AUTHORITY APPROVALS", desc: "In-house team for obtaining any and all community/building management NOC's and Authority Approvals.", icon: <FaFileSignature /> },
  { title: "FREE DESIGNS", desc: "Use our in-house designers to bring your space to life with free 2D and 3D basic designs.", icon: <FaPaintBrush /> },
  { title: "MATERIAL SELECTION", desc: "Visit our Experience center to see examples of kitchen, wardrobes, tiles, sanitaryware, flooring materials etc.", icon: <FaRulerCombined /> },
  { title: "BUILD WITH THE BEST", desc: "100% licensed and skilled team of 150+ technicians and engineers to execute and update throughout.", icon: <FaHardHat /> },
  { title: "WARRANTY", desc: "Upto 10 years warranty on kitchens, wardrobes and cabinets. MDF from Egger (Germany)/ AGT (Turkey).", icon: <FaShieldAlt /> },
];

export default function TrustSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">A Name you Can Trust</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Work with Dubai’s leading renovation experts to plan and build your dream home or villa — all within budget and to the highest industry standards. From concept to completion, we’ve got your full home renovation covered!
          </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
              {/* আইকন সেকশন */}
              <div className="text-3xl text-purple-900 mb-6 bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}