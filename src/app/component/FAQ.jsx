import React from 'react';

const FAQ = () => {
 const faqs = [
  {
    question: "What is the typical timeline for a luxury villa renovation?",
    answer: "A complete villa transformation typically takes 12-20 weeks, depending on the complexity of the design, material sourcing, and authority approvals."
  },
  {
    question: "Do you handle the authority approvals and NOCs?",
    answer: "Yes, our in-house team manages all community management NOCs and official building authority approvals so you have a stress-free experience."
  },
  {
    question: "Is your pricing transparent?",
    answer: "Absolutely. All quotations are detailed through the Microsoft Dynamics ERP System, ensuring you know exactly where your investment is going."
  },
  {
    question: "Can you help with custom furniture design?",
    answer: "Yes, we offer bespoke furniture design services, ensuring every piece fits your space perfectly and matches the overall luxury aesthetic."
  },
  {
    question: "Do you provide warranties on your work?",
    answer: "We offer up to 10 years of warranty on kitchens, wardrobes, and cabinets, using premium materials like Egger (Germany) and AGT (Turkey)."
  },
  {
    question: "Can I visit an experience center?",
    answer: "Yes, we encourage you to visit our Experience Center to see firsthand the quality of our tiles, sanitaryware, flooring, and kitchen materials."
  },
  {
    question: "Do you offer interior design services for commercial offices?",
    answer: "Yes, we design productive, high-end office spaces that balance luxury aesthetics with functionality for corporate professionals."
  },
  {
    question: "How do you ensure budget control?",
    answer: "We work strictly within your defined budget while maintaining the highest quality standards, providing detailed breakdowns before any work begins."
  },
  {
    question: "Do you provide 3D visualisations before starting?",
    answer: "Yes, we provide free 2D and 3D basic designs to help you visualize the finished space before construction starts."
  },
  {
    question: "How many technicians will work on my site?",
    answer: "We have a dedicated team of over 150+ licensed and skilled technicians and engineers to ensure high-quality execution throughout your project."
  }
];

  return (
    <div className="max-w-6xl mx-auto my-16 px-6 mt-30">
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