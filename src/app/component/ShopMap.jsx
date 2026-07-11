import React from 'react';

const ShopMap = () => {
    return (
        <div className="w-full h-auto overflow-hidden rounded-lg shadow-lg max-w-5xl mx-auto mb-10">
            <h2 className="text-3xl text-amber-600 font-bold text-center mb-6">Visit Our Shop </h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8548206216224!2d55.4138837!3d25.1743795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f619eecc07b0b%3A0x32224644b8d73786!2sDragon%20mart!5e0!3m2!1sen!2sbd!4v1783755485621!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                suppressHydrationWarning
            ></iframe>
        </div>
    );
};

export default ShopMap;
