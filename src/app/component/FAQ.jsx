import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes interior design 'Dubai style'?",
      answer: "Dubai-style interior design is defined by a blend of ultra-modern minimalism, high-quality materials like Italian marble, gold/brass accent finishes, and floor-to-ceiling lighting that creates a sense of grand luxury."
    },
    {
      question: "Do you use premium materials for these designs?",
      answer: "Yes, we focus on high-end finishes, including bespoke marble surfaces, velvet upholstery, and professional-grade metal accents to ensure your home reflects that signature Dubai elegance."
    },
    {
      question: "Can I achieve a luxury look in a small space?",
      answer: "Absolutely. We specialize in space optimization, using reflective surfaces, smart lighting, and multi-functional high-end furniture to make even smaller apartments feel expansive and grand."
    },
    {
      question: "How do you incorporate lighting in luxury interiors?",
      answer: "We use a layered lighting approach: warm cove lighting for ambiance, bold sculptural chandeliers as focal points, and automated smart controls to create the perfect mood."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-500 italic">Discover the essence of luxury living.</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-100 border border-gray-200 rounded-none shadow-sm">
            <input type="radio" name="luxury-accordion" defaultChecked={index === 0} /> 
            <div className="collapse-title text-xl font-medium text-gray-700">
              {faq.question}
            </div>
            <div className="collapse-content bg-gray-50/50">
              <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;