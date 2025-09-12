import React, { useState } from 'react';

const Class7CbseSst = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };
  
  const goToClassNotes01 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstComponentsOfEnvironmentClassNotes`; };
  const goToMindMap01 = () => { window.location.href = ``; };


  
  const goToClassNotes02 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstTheEarthAndTheChangesOnItClassNotes`; };
  const goToMindMap02 = () => { window.location.href = ``; };

  
  const goToClassNotes03 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstTheSurfaceAndInteriorOfTheEarthClassNotes`; };
  const goToMindMap03 = () => { window.location.href = ``; };

  
  const goToClassNotes04 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstAirAroundUsClassNotes`; };
  const goToMindMap04 = () => { window.location.href = ``; };

  
  const goToClassNotes05 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstWaterSurroundingTheEarthClassNotes`; };
  const goToMindMap05 = () => { window.location.href = ``; };

  
  const goToClassNotes06 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstLifeOnTheEarthClassNotes`; };
  const goToMindMap06 = () => { window.location.href = ``; };

  
  const goToClassNotes07 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationClassNotes`; };
  const goToMindMap07 = () => { window.location.href = ``; };

  
  const goToClassNotes08 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstLandAndThePeopleClassNotes`; };
  const goToMindMap08 = () => { window.location.href = ``; };
  
  
  const goToClassNotes09 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstMedievalPeriodClassNotes`; };
  const goToMindMap09 = () => { window.location.href = ``; };

  
  const goToClassNotes10 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaClassNotes`; };
  const goToMindMap10 = () => { window.location.href = ``; };
  
  
  const goToClassNotes11 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaClassNotes`; };
  const goToMindMap11 = () => { window.location.href = ``; };
  
  
  const goToClassNotes12 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstTurkishInvasionsInNorthIndiaClassNotes`; };
  const goToMindMap12 = () => { window.location.href = ``; };

  
  const goToClassNotes13 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstDelhiSultanateClassNotes`; };
  const goToMindMap13 = () => { window.location.href = ``; };
  
  
  const goToClassNotes14 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstRegionalPowersClassNotes`; };
  const goToMindMap14 = () => { window.location.href = ``; };
  
  
  const goToClassNotes15 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstTheMughalEmpireClassNotes`; };
  const goToMindMap15 = () => { window.location.href = ``; };
  
  
  const goToClassNotes16 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstEmergenceOfIndependentStatesClassNotes`; };
  const goToMindMap16 = () => { window.location.href = ``; };
  
  
  const goToClassNotes17 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstMajorReligionsClassNotes`; };
  const goToMindMap17 = () => { window.location.href = ``; };
  
  
  const goToClassNotes18 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstDemocracyAndEqualityClassNotes`; };
  const goToMindMap18 = () => { window.location.href = ``; };
  
  
  const goToClassNotes19 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstOurStateGovernmentsClassNotes`; };
  const goToMindMap19 = () => { window.location.href = ``; };
  
  
  const goToClassNotes20 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstMediaTheMainstayOfDemocracyClassNotes`; };
  const goToMindMap20 = () => { window.location.href = ``; };

  
  const goToClassNotes21 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstAdvertisingAndDemocracyClassNotes`; };
  const goToMindMap21 = () => { window.location.href = ``; };
  
  
  const goToClassNotes22 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstUnpackingGenderClassNotes`; };
  const goToMindMap22 = () => { window.location.href = ``; };
  
  
  const goToClassNotes23 = () => { window.location.href = `/studymaterial/class7/Class7CbseSstMarketsAroundUsClassNotes`; };
  const goToMindMap23 = () => { window.location.href = ``; };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20 font-inter text-gray-800">
      <header className="relative isolate overflow-hidden rounded-3xl mb-10">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-90"></div>
        <svg className="absolute inset-0 -z-10 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="relative p-8 sm:p-12 text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg">
            <span className="block sm:inline">Social Science</span>
            <span className="block sm:inline whitespace-nowrap"> Class 7 CBSE</span>
          </h1>
          <p className="mt-1 text-md sm:text-lg italic text-blue-100">Study material from Vardaan Learning Institute.</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-12 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">

          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('01')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">01</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Components of Environment</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '01' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '01' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button> 
                  <button onClick={goToMindMap01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('02')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">02</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Earth and the Changes on It</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '02' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '02' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>

                  <button onClick={goToMindMap02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('03')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">03</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Surface and Interior of the Earth</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '03' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '03' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>

                  <button onClick={goToMindMap03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('04')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">04</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Air Around Us</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '04' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '04' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>

                  <button onClick={goToMindMap04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('05')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">05</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Water Surrounding the Earth</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '05' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '05' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('06')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">06</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Life on the Earth</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '06' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '06' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('07')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">07</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Human Environment (Settlement, Transport and Communication)</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '07' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '07' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('08')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">08</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Land and the People</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '08' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '08' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 09 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('09')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">09</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Medieval Period</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '09' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '09' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 10 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('10')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">10</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Rise of Small Kingdoms in North India</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '10' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '10' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 11 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('11')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">11</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Rise of Small Kingdoms in South India</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '11' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '11' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 12 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('12')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">12</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Turkish Invasions in North India</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '12' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '12' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 13 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('13')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">13</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Delhi Sultanate</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '13' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '13' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 14 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('14')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">14</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Regional Powers</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '14' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '14' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes14} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap14} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 15 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('15')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">15</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Mughal Empire</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '15' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '15' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes15} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap15} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 16 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('16')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">16</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Emergence of Independent States</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '16' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '16' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes16} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap16} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 17 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('17')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">17</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Major Religions</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '17' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '17' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes17} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap17} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 18 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('18')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">18</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Democracy and Equality</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '18' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '18' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes18} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap18} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 19 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('19')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">19</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Our State Governments</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '19' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '19' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes19} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap19} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 20 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('20')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">20</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Media—The Mainstay of Democracy</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '20' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '20' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes20} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap20} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 21 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('21')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">21</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Advertising and Democracy</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '21' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '21' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes21} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap21} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 22 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('22')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">22</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Unpacking Gender</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '22' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '22' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes22} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap22} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 23 */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" onClick={() => toggleChapter('23')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-blue-600 mr-4">23</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Markets Around Us</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === '23' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '23' && (
              <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button onClick={goToClassNotes23} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Class Notes</button>
                  <button onClick={goToMindMap23} className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Class7CbseSst;