import React, { useState } from 'react';
import Lottie from 'lottie-react';
import pdfAnimation from '../assets/Animation - 1745004813314.json';
import solutionAnimation from '../assets/Animation JSON/book solution.json';

const Class10icseCivics = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };


 
const goToNcertPdf01 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/Class10icseCivicsTheUnionParliament`; };
const goToNcertSolution01 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/ncertbooks01`; };
const goToPreviousYearQuestions01 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/previous-year-questions01`; };
const goToChapterNotes01 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/notes01`; };
const goToMindMap01 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/mind-map01`; };

const goToNcertPdf02 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/Class10icseCivicsTheUnionExecutivePresidentVicePresident`; };
const goToNcertSolution02 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/ncertbooks02`; };
const goToPreviousYearQuestions02 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/previous-year-questions02`; };
const goToChapterNotes02 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/notes02`; };
const goToMindMap02 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/mind-map02`; };

const goToNcertPdf03 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/Class10icseCivicsTheUnionExecutivePrimeMinisterCabinetCouncil`; };
const goToNcertSolution03 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/ncertbooks03`; };
const goToPreviousYearQuestions03 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/previous-year-questions03`; };
const goToChapterNotes03 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/notes03`; };
const goToMindMap03 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/mind-map03`; };

const goToNcertPdf04 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/Class10icseCivicsTheUnionJudiciarySupremeCourt`; };
const goToNcertSolution04 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/ncertbooks04`; };
const goToPreviousYearQuestions04 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/previous-year-questions04`; };
const goToChapterNotes04 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/notes04`; };
const goToMindMap04 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/mind-map04`; };

const goToNcertPdf05 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/Class10icseCivicsTheStateJudiciaryHighCourts`; };
const goToNcertSolution05 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/ncertbooks05`; };
const goToPreviousYearQuestions05 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/previous-year-questions05`; };
const goToChapterNotes05 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/notes05`; };
const goToMindMap05 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/mind-map05`; };

const goToNcertPdf06 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/Class10icseCivicsTheSubordinateCourts`; };
const goToNcertSolution06 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/ncertbooks06`; };
const goToPreviousYearQuestions06 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/previous-year-questions06`; };
const goToChapterNotes06 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/notes06`; };
const goToMindMap06 = () => { window.location.href = `/Studymaterial/class10icse/class10icsecivics/mind-map06`; };

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
            <span className="block sm:inline">Civics</span>
            <span className="block sm:inline whitespace-nowrap"> Class 10 ICSE</span>
          </h1>
          <p className="mt-1 text-md sm:text-lg italic text-orange-100">Study material by Ankit Bhaiya.</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-12 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('01')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">01</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Union Parliament</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '01' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '01' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Chapter Notes</button>
        <button onClick={goToMindMap01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('02')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">02</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Union Executive: The President and the Vice-President</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '02' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '02' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={pdfAnimation} loop={true} className="w-16 h-16 mb-1" />NCERT PDF</button>
        <button onClick={goToNcertSolution02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={solutionAnimation} loop={true} className="w-16 h-16 mb-1" />NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Chapter Notes</button>
        <button onClick={goToMindMap02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('03')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">03</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Union Executive: The Prime Minister, the Union Cabinet and the Council of Ministers</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '03' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '03' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Chapter Notes</button>
        <button onClick={goToMindMap03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('04')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">04</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Union Judiciary: The Supreme Court</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '04' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '04' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>NCERT PDF</button>
        <button onClick={goToNcertSolution04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Previous Year Questions</button>
        <button onClick={goToChapterNotes04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Chapter Notes</button>
        <button onClick={goToMindMap04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mb-1 text-orange-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75v4.5c0 .621.504 1.125 1.125 1.125h4.5M15.75 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V8.25L15.75 3.75z" /></svg>Mind Map</button>
      </div>
    </div>
  )}
</div>

<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('05')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">05</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The State Judiciary: The High Courts</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '05' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '05' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">NCERT PDF</button>
        <button onClick={goToNcertSolution05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">Previous Year Questions</button>
        <button onClick={goToChapterNotes05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">Chapter Notes</button>
        <button onClick={goToMindMap05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">Mind Map</button>
      </div>
    </div>
  )}
</div>

<div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
  <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('06')}>
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-orange-600 mr-4">06</span>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Subordinate Courts</h3>
      </div>
    </div>
    <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '06' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
  {openChapter === '06' && (
    <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button onClick={goToNcertPdf06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">NCERT PDF</button>
        <button onClick={goToNcertSolution06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">NCERT Solution</button>
        <button onClick={goToPreviousYearQuestions06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">Previous Year Questions</button>
        <button onClick={goToChapterNotes06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">Chapter Notes</button>
        <button onClick={goToMindMap06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium">Mind Map</button>
      </div>
    </div>
  )}
</div>
        </div>
      </section>
    </div>
  );
};

export default Class10icseCivics;
