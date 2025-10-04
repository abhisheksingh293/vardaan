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
  }, [current, slides.length]);

  return (
    <div className="w-full flex flex-col items-center py-4 md:py-8 bg-white px-2 md:px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#ff4e3c] mb-6 md:mb-8 text-center">What We Offer</h2>
      <div className="relative w-full max-w-full mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((src, idx) => (
            <div 
              key={idx} 
              className="w-full h-full flex-shrink-0 flex justify-center items-center p-2 md:p-4"
            >
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-md"
                    alt={`Slide ${idx + 1}`}
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows - Larger and more visible */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#c2410c] w-12 h-24 md:w-16 md:h-32 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 z-10 rounded-r-lg"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((prev) => (prev + 1) % slides.length);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#c2410c] w-12 h-24 md:w-16 md:h-32 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 z-10 rounded-l-lg"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex gap-2 mt-4 justify-center">
        {slides.map((_, idx) => (
          <button
            key={`indicator-${idx}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === idx 
                ? 'bg-[#ff6b35] w-6' 
                : 'bg-[#ffd5c2] w-3 hover:bg-[#ffb088]'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
