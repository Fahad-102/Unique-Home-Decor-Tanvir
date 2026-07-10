import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
    return (
        <div>
            <Marquee pauseOnHover gradient={false} speed={50} className="bg-gray-100 text-gray-800 py-2">
  ✨ Welcome to DARNA! Premium Interior Design Services across all over Dubai ✨ Over Years of Excellence & Trustworthy Experience ✨ 5-Star Customer Reviews ✨ Known for Stunning Modern Designs, High-End Luxury Finishes, and Perfect Execution ✨ Transform Your Space with Dubai Most Trusted Interior Experts! ✨ Get in Touch Today! ✨
</Marquee>
        </div>
    );
};

export default MarqueeComponent;