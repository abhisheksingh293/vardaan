import React, { useEffect, useRef, useState } from 'react';
import useIsMobile from './useIsMobile';

const videos = [
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1752350734/5_txp8t7.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1752350732/2_rnqckf.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1752350729/3_gtmdna.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1752350729/4_lwjb6e.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1752350727/1_nwvquz.png"
];

const mobileImages = [
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363670/5_hxulux.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363668/4_okdsjr.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363667/2_qoi4ey.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363666/3_fcpu8e.png",
  "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363665/1_v6tkvl.png"
];

const AUTO_SLIDE_INTERVAL = 3000;

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const isMobile = useIsMobile();

  const slides = isMobile ? mobileImages : videos;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current, slides.length]);

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white px-4 md:px-12">
      <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff4e3c] mb-8 text-center">What We Offer
      </h3>
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg" style={{ height: isMobile ? '440px' : undefined, bottom: isMobile ? '16px' : undefined }}>
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ minWidth: '100%', height: isMobile ? '440px' : '100%' }}
            />
          ))}
        </div>
      </div>
      {/* Dots below carousel */}
      <div className="flex gap-4 mt-6 justify-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-6 h-6 rounded-full border-4 transition-all duration-300 
              ${current === idx 
                ? '!bg-[#ff4e3c] !border-[#ff4e3c] ring-2 ring-[#ffb200] scale-125 shadow-lg' 
                : '!bg-[#ff4e3c] !border-[#ff4e3c]'}
            `}
            style={{ backgroundColor: '#ff4e3c', }}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
