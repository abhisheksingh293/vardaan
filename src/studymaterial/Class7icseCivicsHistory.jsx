import React, { useState } from 'react';

const Class7icseCivicsHistory = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };
  
  
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
            <span className="block sm:inline">CIVICS & History</span>
            <span className="block sm:inline whitespace-nowrap"> Class 7 ICSE</span>
          </h1>
          <p className="mt-1 text-md sm:text-lg italic text-blue-100">Study material from Vardaan Learning Institute.</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-12 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* ICSE HISTORY CHAPTERS */}
          {[
            {
              num: '01', 
              title: 'The Advent of Christianity',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-01/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-01/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-01/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-01/practice-questions')
            },
            {
              num: '02', 
              title: 'The Emergence of Islam',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-02/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-02/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-02/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-02/practice-questions')
            },
            {
              num: '03', 
              title: 'The Turkish Invasions',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-03/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-03/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-03/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-03/practice-questions')
            },
            {
              num: '04', 
              title: 'The Slave Dynasty',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-04/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-04/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-04/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-04/practice-questions')
            },
            {
              num: '05', 
              title: 'The Khalji Dynasty',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-05/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-05/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-05/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-05/practice-questions')
            },
            {
              num: '06', 
              title: 'The Tughluq and Lodi Dynasties',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-06/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-06/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-06/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-06/practice-questions')
            },
            {
              num: '07', 
              title: 'Vijayanagara and Bahmani Kingdoms',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-07/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-07/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-07/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-07/practice-questions')
            },
            {
              num: '08', 
              title: 'Advent of the Mughals',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-08/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-08/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-08/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-08/practice-questions')
            },
            {
              num: '09', 
              title: 'Akbar',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-09/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-09/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-09/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-09/practice-questions')
            },
            {
              num: '10', 
              title: 'Jahangir and Shah Jahan',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-10/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-10/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-10/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-10/practice-questions')
            },
            {
              num: '11', 
              title: 'Aurangzeb and Shivaji',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-11/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-11/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-11/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-11/practice-questions')
            },
            {
              num: '12', 
              title: 'Social and Cultural Changes',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-12/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-12/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-12/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-12/practice-questions')
            },
            {
              num: '13', 
              title: 'Our Constitution',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-13/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-13/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-13/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-13/practice-questions')
            },
            {
              num: '14', 
              title: 'Fundamental Rights and Duties',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-14/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-14/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-14/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-14/practice-questions')
            },
            {
              num: '15', 
              title: 'Directive Principles of State Policy',
              classNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-15/class-notes'),
              chapterNotes: () => window.open('/studymaterial/class7icse/civics-history/chapter-15/chapter-notes'),
              mindMaps: () => window.open('/studymaterial/class7icse/civics-history/chapter-15/mind-maps'),
              practiceQuestions: () => window.open('/studymaterial/class7icse/civics-history/chapter-15/practice-questions')
            },
          ].map((chapter, idx) => (
            <div key={chapter.num} className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-blue-50 transition-colors duration-200" 
                onClick={() => toggleChapter(chapter.num)}
              >
                <div className="flex items-center">
                  <span className="text-2xl font-semibold text-blue-600 mr-4">{chapter.num}</span>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{chapter.title}</h3>
                  </div>
                </div>
                <svg 
                  className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openChapter === chapter.num ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {openChapter === chapter.num && (
                <div className="p-4 sm:p-5 border-t border-blue-100 bg-blue-50 animate-fade-in">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button 
                      onClick={chapter.classNotes}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor">
                        <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
                      </svg>
                      Class Notes
                    </button>
                    
                    <button 
                      onClick={chapter.chapterNotes}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor">
                        <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
                      </svg>
                      Chapter Notes
                    </button>
                    
                    <button 
                      onClick={chapter.mindMaps}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor">
                        <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
                      </svg>
                      Mind Maps
                    </button>
                    
                    <button 
                      onClick={chapter.practiceQuestions}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8 mb-1 text-blue-800" fill="currentColor">
                        <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
                      </svg>
                      Practice Questions
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Class7icseCivicsHistory;
         