import React from 'react';

const stats = [
  { count: "4+", label: "Trusted Years" },
  { count: "50+", label: "Employees" },
  { count: "500+", label: "Residential Projects" },
  { count: "60+", label: "Commercial Fit-Outs" }
];

export default function RenovationStats() {
  return (
    <section className="bg-neutral-900 py-20 px-8 text-neutral-content">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-2">
            Get Renovation Done by
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-500 mb-8">
            Professionals
          </h2>
          <button className="btn bg-black text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-black transition-all">
            More Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <h3 className="text-5xl font-bold text-amber-500 mb-2">
                {stat.count}
              </h3>
              <p className="text-neutral-400 text-lg mb-6">{stat.label}</p>
              <div className="w-full h-1 bg-amber-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}