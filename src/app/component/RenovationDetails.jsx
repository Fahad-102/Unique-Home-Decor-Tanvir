import React from 'react';

export default function RenovationDetails() {
  return (
    <div className="bg-slate-50 py-16 px-6 md:px-20 text-slate-800 max-w-6xl mx-auto mb-10 mt-10">
      
      {/* 1. Government Approvals */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Government Approvals</h2>
          <ul className="list-disc ml-5 space-y-2 text-slate-600">
            <li>We understand the importance of compliance.</li>
            <li>Our experienced team assists in obtaining necessary government approvals, ensuring a smooth and hassle-free renovation process.</li>
          </ul>
        </div>
        <div className="text-blue-900 border-4 border-blue-900 px-6 py-2 rotate-12 font-bold text-2xl uppercase tracking-widest">
          Approved
        </div>
      </section>

      {/* 2. Why Choose Yalla Renovation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose DARNA Renovation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-slate-600">Our team comprises skilled professionals with a proven track record in  renovations.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Customer-Centric Approach</h3>
            <p className="text-slate-600">Your satisfaction is our priority, and we work closely with you to bring your vision to life.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
            <p className="text-slate-600">We believe in transparency, providing detailed quotes and timelines before commencing any project.</p>
          </div>
        </div>
      </section>


      {/* 4. Our  Renovation Process */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Our Renovation Process</h2>
        <div className="space-y-4">
          {[
            "Step 1: Consultation & Site Assessment - We understand your requirements.",
            "Step 2: Design & 3D Visualization - We create layouts and realistic renders.",
            "Step 3: Approvals & Permits - We manage all required documentation.",
            "Step 4: Construction & Execution - Our team handles civil work and finishes.",
            "Step 5: Quality Inspection & Handover - We conduct detailed checks."
          ].map((step, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white border-l-4 border-blue-900 shadow-sm">
              <p className="text-slate-700 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}