import React, { useState } from 'react';
import Lottie from 'lottie-react';
import ChapterNotesAnim from '../assets/Animation JSON/Chapter_Notes.json';
import ClassNotesAnim from '../assets/Animation JSON/Class_Notes.json';
import MindMapAnim from '../assets/Animation JSON/Mind_Map.json';
import QuizAnim from '../assets/Animation JSON/Quiz.json';
import PrevYearAnim from '../assets/Animation JSON/Previous_year_Questions.json';
import NcertPdfAnim from '../assets/Animation JSON/NCERT PDF.json';
import NcertSolutionAnim from '../assets/Animation JSON/Ncert_Solution.json';

const Class10Science = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  // ===== Navigation functions (Chapter 01) =====
  const goToChapterNotes01 = () => { window.location.href = ``; };
  const goToClassNotes01 = () => { window.location.href = ``; };
  const goToMindMap01 = () => { window.location.href = `/`; };
  const goToPreviousYearQuestions01 = () => { window.location.href = `/`; };
  const goToNcertPdf01 = () => { window.location.href = `/`; };
  const goToNcertSolution01 = () => { window.location.href = `/`; };

  const goToQuiz01 = () => { window.location.href = `/`; };

  


  // ===== Navigation functions (Chapter 02) =====
  const goToPreviousYearQuestions02 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes02 = () => { window.location.href = ``; };
  const goToMindMap02 = () => { window.location.href = `/`; };
  const goToClassNotes02 = () => { window.location.href = ``; };
  const goToNcertPdf02 = () => { window.location.href = `/`; };
  const goToNcertSolution02 = () => { window.location.href = `/`; };

  const goToQuiz02 = () => { window.location.href = `/`; };


  // ===== Navigation functions (Chapter 03) =====
  const goToPreviousYearQuestions03 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes03 = () => { window.location.href = ``; };
  const goToMindMap03 = () => { window.location.href = `/`; };
  const goToClassNotes03 = () => { window.location.href = ``; };
  const goToNcertPdf03 = () => { window.location.href = `/`; };
  const goToNcertSolution03 = () => { window.location.href = `/`; };

  const goToQuiz03 = () => { window.location.href = `/`; };


  // ===== Navigation functions (Chapter 04) =====
  const goToPreviousYearQuestions04 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes04 = () => { window.location.href = ``; };
  const goToMindMap04 = () => { window.location.href = `/`; };
  const goToClassNotes04 = () => { window.location.href = ``; };
  const goToNcertPdf04 = () => { window.location.href = `/`; };
  const goToNcertSolution04 = () => { window.location.href = `/`; };

  const goToQuiz04 = () => { window.location.href = `/`; };

  // ===== Navigation functions (Chapter 05) =====
  const goToPreviousYearQuestions05 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes05 = () => { window.location.href = ``; };
  const goToMindMap05 = () => { window.location.href = `/`; };
  const goToClassNotes05 = () => { window.location.href = ``; };
  const goToNcertPdf05 = () => { window.location.href = `/`; };
  const goToNcertSolution05 = () => { window.location.href = `/`; };

  const goToQuiz05 = () => { window.location.href = `/`; };


  // ===== Navigation functions (Chapter 06) =====
  const goToPreviousYearQuestions06 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes06 = () => { window.location.href = ``; };
  const goToMindMap06 = () => { window.location.href = `/`; };
  const goToClassNotes06 = () => { window.location.href = ``; };
  const goToNcertPdf06 = () => { window.location.href = `/`; };
  const goToNcertSolution06 = () => { window.location.href = `/`; };

  const goToQuiz06 = () => { window.location.href = `/`; };


  // ===== Navigation functions (Chapter 07) =====
  const goToPreviousYearQuestions07 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes07 = () => { window.location.href = ``; };
  const goToMindMap07 = () => { window.location.href = `/`; };
  const goToClassNotes07 = () => { window.location.href = ``; };
  const goToNcertPdf07 = () => { window.location.href = `/`; };
  const goToNcertSolution07 = () => { window.location.href = `/`; };

  const goToQuiz07 = () => { window.location.href = `/`; };

  // ===== Navigation functions (Chapter 08) =====
    const goToPreviousYearQuestions08 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes08 = () => { window.location.href = ``; };
  const goToMindMap08 = () => { window.location.href = `/`; };
  const goToClassNotes08 = () => { window.location.href = ``; };
  const goToNcertPdf08 = () => { window.location.href = `/`; };
  const goToNcertSolution08 = () => { window.location.href = `/`; };

  const goToQuiz08 = () => { window.location.href = `/`; };

  // ===== Navigation functions (Chapter 09) =====
  const goToPreviousYearQuestions09 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes09 = () => { window.location.href = ``; };
  const goToMindMap09 = () => { window.location.href = `/`; };
  const goToClassNotes09 = () => { window.location.href = ``; };
  const goToNcertPdf09 = () => { window.location.href = `/`; };
  const goToNcertSolution09 = () => { window.location.href = `/`; };

  const goToQuiz09 = () => { window.location.href = `/`; };

  // ===== Navigation functions (Chapter 10) =====
  const goToPreviousYearQuestions10 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`;};
  const goToChapterNotes10 = () => { window.location.href = ``; };
  const goToMindMap10 = () => { window.location.href = `/`; };
  const goToClassNotes10 = () => { window.location.href = ``; };
  const goToNcertPdf10 = () => { window.location.href = `/`; };
  const goToNcertSolution10 = () => { window.location.href = `/`; };

  const goToQuiz10 = () => { window.location.href = `/`; };

  // ===== Navigation functions (Chapter 11) =====
  const goToPreviousYearQuestions11 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes11 = () => { window.location.href = ``; };
  const goToMindMap11 = () => { window.location.href = `/`; };
  const goToClassNotes11 = () => { window.location.href = ``; };
  const goToNcertPdf11 = () => { window.location.href = `/`; };
  const goToNcertSolution11 = () => { window.location.href = `/`; };

  const goToQuiz11 = () => { window.location.href = `/`; };

  // ===== Navigation functions (Chapter 12) =====
  const goToPreviousYearQuestions12 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes12 = () => { window.location.href = ``; };
  const goToMindMap12 = () => { window.location.href = `/`; };
  const goToClassNotes12 = () => { window.location.href = ``; };
  const goToNcertPdf12 = () => { window.location.href = `/`; };
  const goToNcertSolution12 = () => { window.location.href = `/`; };

  const goToQuiz12 = () => { window.location.href = `/`; };

  // ===== Navigation functions (Chapter 13) =====
  const goToPreviousYearQuestions13 = () => { window.location.href = `/studymaterial/class10/Class10Science/Class10ScienceElectricityPreviousYearQuestion`; };
  const goToChapterNotes13 = () => { window.location.href = ``; };
  const goToMindMap13 = () => { window.location.href = `/`; };
  const goToClassNotes13 = () => { window.location.href = ``; };
  const goToNcertPdf13 = () => { window.location.href = `/`; };
  const goToNcertSolution13 = () => { window.location.href = `/`; };

  const goToQuiz13 = () => { window.location.href = `/`; };




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
            <span className="block sm:inline whitespace-nowrap"> Class 10 CBSE</span>
          </h1>
          <p className="mt-1 text-md sm:text-lg italic text-orange-100">Study material by Ankit Bhaiya.</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-12 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">

          {/* Chapter 01 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('01')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">01</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Chemical Reactions and Equations</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '01' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openChapter === '01' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button onClick={goToChapterNotes01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution01} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
              </div>
            </div>
            )}
          </div>

          {/* Chapter 02 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('02')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">02</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Acids, Bases and Salts </h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '02' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '02' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution02} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>

          {/* Chapter 03 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('03')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">03</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Metals and Non-metals</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '03' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '03' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution03} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
              
              </div>
            </div>
            )}
          </div>

          {/* Chapter 04 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('04')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">04</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Carbon and its Compounds</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '04' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '04' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution04} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>

          {/* Chapter 05 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('05')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">05</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Life Processes </h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '05' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '05' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button onClick={goToChapterNotes05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution05} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>

          {/* Chapter 06 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('06')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">06</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Control and Coordination</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '06' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '06' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button onClick={goToChapterNotes06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution06} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>

          {/* Chapter 07 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('07')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">07</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">How do Organisms Reproduce?</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '07' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '07' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button onClick={goToChapterNotes07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution07} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>

          {/* Chapter 08 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('08')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">08</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Heredity</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '08' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '08' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution08} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>

          {/* Chapter 09 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('09')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">09</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Light – Reflection and Refraction</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '09' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '09' && (
             <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button onClick={goToChapterNotes09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution09} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
           </div>
            )}
          </div>

          {/* Chapter 10 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('10')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">10</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Human Eye and the Colourful World</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '10' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '10' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution10} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>
          {/* Chapter 11 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('11')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">11</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Electricity</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '11' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '11' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution11} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>
          {/* Chapter 12 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('12')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">12</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Magnetic Effects of Electric Current</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '12' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '12' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution12} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>
          {/* Chapter 13 */}
          <div className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200" onClick={() => toggleChapter('13')}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">13</span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Our Environment</h3>
                </div>
              </div>
              <svg className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openChapter === '13' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            {openChapter === '13' && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button onClick={goToChapterNotes13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ChapterNotesAnim} loop={true} className="w-8 h-8 mb-1" />Chapter Notes</button>
              <button onClick={goToClassNotes13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={ClassNotesAnim} loop={true} className="w-8 h-8 mb-1" />Class Notes</button>
              <button onClick={goToMindMap13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={MindMapAnim} loop={true} className="w-8 h-8 mb-1" />Mind Map</button>
              <button onClick={goToQuiz13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={QuizAnim} loop={true} className="w-8 h-8 mb-1" />Quiz</button>
              <button onClick={goToPreviousYearQuestions13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={PrevYearAnim} loop={true} className="w-8 h-8 mb-1" />Previous Year Questions</button>
              <button onClick={goToNcertPdf13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertPdfAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Pdf</button>
              <button onClick={goToNcertSolution13} className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"><Lottie animationData={NcertSolutionAnim} loop={true} className="w-8 h-8 mb-1" />Ncert Solution</button>
             
              </div>
            </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Class10Science;
