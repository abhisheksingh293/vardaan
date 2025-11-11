import React from 'react';
import { useNavigate } from 'react-router-dom';

const Class7icseCurrentAffairs = () => {
  const navigate = useNavigate();
  const handleCurrentAffairsjulyAugustClick = () => navigate('/studymaterial/class7icse/Class7icseCurrentAffairs/Class7icseCurrentAffairsjulyAugust2025');

  return (
    <div className="mt-17 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 font-inter text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .marquee-container { overflow: hidden; white-space: nowrap; box-sizing: border-box; }
        .marquee-content { display: inline-flex; padding-left: 100%; animation: marquee 30s linear infinite; }
        .marquee-item { display: inline-block; margin-right: 2rem; cursor: pointer; text-align: center; flex-shrink: 0; }
        .marquee-item img { border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out; }
        .marquee-item:hover img { transform: scale(1.05); }
        .marquee-item span { display: block; margin-top: 0.5rem; font-size: 0.9rem; color: #4a5568; white-space: normal; max-width: 150px; }
        @media (max-width: 640px) { .marquee-content { animation: marquee 20s linear infinite; } }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
      `}</style>
      <header className="relative flex flex-col items-center justify-center mb-10 py-12 px-6 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300 rounded-3xl shadow-2xl border-2 border-orange-200 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
        <div className="relative z-10 text-2xl sm:text-5xl md:text-7xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-3 text-center whitespace-nowrap" style={{whiteSpace: 'nowrap'}}>
          Class 7 ICSE Current Affairs
        </div>
        <p className="relative z-10 text-base sm:text-lg text-white/80 mb-4 text-center">
          Choose your Current Affairs and start learning!
        </p>
        <button
          className="relative z-10 mt-2 px-6 py-2 bg-white text-orange-600 font-semibold rounded-full shadow hover:bg-orange-50 transition"
          onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
        >
          Explore Subjects
        </button>
      </header>
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="sr-only">Choose a Subject</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <button onClick={handleCurrentAffairsjulyAugustClick} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-75">
            <img src="https://res.cloudinary.com/dxwszplz7/image/upload/v1759763329/current_affairs_q12cip.png" alt="Current Affairs" className="w-36 h-36 mb-4 rounded-lg shadow-md" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-2">July - August 2025</h3>
          </button>


        </div>
      </section>
    </div>
  );
};

export default Class7icseCurrentAffairs;

