import React, { useState } from 'react';

const Class9Science = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };


  // Individual navigation functions for each button
// --- Explicit handlers for every button of every chapter ---
// Chapter 01: Matter in Our Surroundings
const goToNcertPdf01 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`; };
const goToNcertSolution01 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`; };
const goToPreviousYearQuestions01 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`; };
const goToChapterNotes01 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`; };
const goToMindMap01 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`; };

// Chapter 02: Is Matter Around Us Pure?
const goToNcertPdf02 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`; };
const goToNcertSolution02 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`; };
const goToPreviousYearQuestions02 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`; };
const goToChapterNotes02 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`; };
const goToMindMap02 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`; };

// Chapter 03: Atoms and Molecules
const goToNcertPdf03 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`; };
const goToNcertSolution03 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`; };
const goToPreviousYearQuestions03 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`; };
const goToChapterNotes03 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`; };
const goToMindMap03 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`; };

// Chapter 04: Structure of the Atom
const goToNcertPdf04 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`; };
const goToNcertSolution04 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`; };
const goToPreviousYearQuestions04 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`; };
const goToChapterNotes04 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`; };
const goToMindMap04 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`; };

// Chapter 05: The Fundamental Unit of Life
const goToNcertPdf05 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`; };
const goToNcertSolution05 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`; };
const goToPreviousYearQuestions05 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`; };
const goToChapterNotes05 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`; };
const goToMindMap05 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`; };

// Chapter 06: Tissues
const goToNcertPdf06 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTissues`; };
const goToNcertSolution06 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTissues`; };
const goToPreviousYearQuestions06 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTissues`; };
const goToChapterNotes06 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTissues`; };
const goToMindMap06 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceTissues`; };

// Chapter 07: Motion
const goToNcertPdf07 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMotion`; };
const goToNcertSolution07 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMotion`; };
const goToPreviousYearQuestions07 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMotion`; };
const goToChapterNotes07 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMotion`; };
const goToMindMap07 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceMotion`; };

// Chapter 08: Force and Laws of Motion
const goToNcertPdf08 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`; };
const goToNcertSolution08 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`; };
const goToPreviousYearQuestions08 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`; };
const goToChapterNotes08 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`; };
const goToMindMap08 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`; };

// Chapter 09: Gravitation
const goToNcertPdf09 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`; };
const goToNcertSolution09 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`; };
const goToPreviousYearQuestions09 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`; };
const goToChapterNotes09 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`; };
const goToMindMap09 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`; };

// Chapter 10: Work and Energy
const goToNcertPdf10 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`; };
const goToNcertSolution10 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`; };
const goToPreviousYearQuestions10 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`; };
const goToChapterNotes10 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`; };
const goToMindMap10 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`; };

// Chapter 11: Sound
const goToNcertPdf11 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceSound`; };
const goToNcertSolution11 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceSound`; };
const goToPreviousYearQuestions11 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceSound`; };
const goToChapterNotes11 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceSound`; };
const goToMindMap11 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceSound`; };

// Chapter 12: Improvement in Food Resources
const goToNcertPdf12 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`; };
const goToNcertSolution12 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`; };
const goToPreviousYearQuestions12 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`; };
const goToChapterNotes12 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`; };
const goToMindMap12 = () => { window.location.href = `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`; };
// --- End explicit handlers ---

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20 font-inter text-gray-800">
      <header className="relative isolate overflow-hidden rounded-3xl mb-10">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400 opacity-90"></div>
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
            <span className="block sm:inline">Science</span>
            <span className="block sm:inline whitespace-nowrap"> Class 9 CBSE</span>
          </h1>
          <p className="mt-1 text-md sm:text-lg italic text-orange-100">Study material by Ankit Bhaiya.</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-12 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* Chapter 01: Matter in Our Surroundings */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('01')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">01</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Matter in Our Surroundings</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '01' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '01' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Chapter Notes</button>
        <button onClick={goToMindMap01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

{/* Chapter 02: Is Matter Around Us Pure? */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('02')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">02</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Is Matter Around Us Pure?</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '02' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '02' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Chapter Notes</button>
        <button onClick={goToMindMap02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

{/* Chapter 03: Atoms and Molecules */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('03')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">03</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Atoms and Molecules</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '03' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '03' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Chapter Notes</button>
        <button onClick={goToMindMap03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

{/* Chapter 04: Structure of the Atom */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('04')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">04</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Structure of the Atom</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '04' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '04' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Chapter Notes</button>
        <button onClick={goToMindMap04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

{/* Chapter 05: The Fundamental Unit of Life */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('05')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">05</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Fundamental Unit of Life</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '05' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '05' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Chapter Notes</button>
        <button onClick={goToMindMap05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-orange-800" fill="currentColor"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

{/* Chapter 06: Tissues */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('06')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">06</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Tissues</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '06' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '06' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT PDF
        </button>
        <button onClick={goToNcertSolution06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT Solution
        </button>
        <button onClick={goToPreviousYearQuestions06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Previous Year Questions
        </button>
        <button onClick={goToChapterNotes06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Chapter Notes
        </button>
        <button onClick={goToMindMap06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Mind Map
        </button>
      </div>
    </div>
  )}
</div>

{/* Chapter 07: Motion */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('07')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">07</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Motion</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '07' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '07' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT PDF
        </button>
        <button onClick={goToNcertSolution07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT Solution
        </button>
        <button onClick={goToPreviousYearQuestions07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Previous Year Questions
        </button>
        <button onClick={goToChapterNotes07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Chapter Notes
        </button>
        <button onClick={goToMindMap07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Mind Map
        </button>
      </div>
    </div>
  )}
</div>

{/* Chapter 08: Force and Laws of Motion */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('08')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">08</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Force and Laws of Motion</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '08' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '08' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT PDF
        </button>
        <button onClick={goToNcertSolution08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT Solution
        </button>
        <button onClick={goToPreviousYearQuestions08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Previous Year Questions
        </button>
        <button onClick={goToChapterNotes08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Chapter Notes
        </button>
        <button onClick={goToMindMap08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Mind Map
        </button>
      </div>
    </div>
  )}
</div>

{/* Chapter 09: Gravitation */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('09')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">09</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Gravitation</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '09' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '09' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT PDF
        </button>
        <button onClick={goToNcertSolution09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT Solution
        </button>
        <button onClick={goToPreviousYearQuestions09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Previous Year Questions
        </button>
        <button onClick={goToChapterNotes09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Chapter Notes
        </button>
        <button onClick={goToMindMap09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Mind Map
        </button>
      </div>
    </div>
  )}
</div>

{/* Chapter 10: Work and Energy */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('10')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">10</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Work and Energy</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '10' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '10' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT PDF
        </button>
        <button onClick={goToNcertSolution10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT Solution
        </button>
        <button onClick={goToPreviousYearQuestions10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Previous Year Questions
        </button>
        <button onClick={goToChapterNotes10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Chapter Notes
        </button>
        <button onClick={goToMindMap10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Mind Map
        </button>
      </div>
    </div>
  )}
</div>

{/* Chapter 11: Sound */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('11')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">11</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Sound</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '11' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '11' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT PDF
        </button>
        <button onClick={goToNcertSolution11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT Solution
        </button>
        <button onClick={goToPreviousYearQuestions11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Previous Year Questions
        </button>
        <button onClick={goToChapterNotes11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Chapter Notes
        </button>
        <button onClick={goToMindMap11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Mind Map
        </button>
      </div>
    </div>
  )}
</div>

{/* Chapter 12: Improvement in Food Resources */}
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('12')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">12</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Improvement in Food Resources</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '12' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '12' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT PDF
        </button>
        <button onClick={goToNcertSolution12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          NCERT Solution
        </button>
        <button onClick={goToPreviousYearQuestions12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Previous Year Questions
        </button>
        <button onClick={goToChapterNotes12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Chapter Notes
        </button>
        <button onClick={goToMindMap12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Mind Map
        </button>
      </div>
    </div>
  )}
</div>
        </div>
      </section>
    </div>
  );
};

export default Class9Science;