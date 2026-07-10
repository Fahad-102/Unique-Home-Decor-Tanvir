import React from 'react';

const ShopMap = () => {
    return (
        <div className="w-full h-auto overflow-hidden rounded-lg shadow-lg max-w-5xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-center mb-6">Visit Our Shop </h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7221.73107136386!2d55.41368284313026!3d25.17401776090353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdubai%20dragon%20mart!5e0!3m2!1sen!2sbd!4v1783698943572!5m2!1sen!2sbd"
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