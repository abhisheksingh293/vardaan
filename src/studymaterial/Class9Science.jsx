import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// A component to display content for a specific chapter link.
const ChapterContent = ({ chapterTitle, contentType, goBack }) => {
  let contentText = "";
  let contentIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-16 h-16 mb-4 text-orange-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M12 7.5h-1.5m1.5 3h-1.5m7.5-3h-3.375c-.621 0-1.125-.504-1.125-1.125V6.75C17.25 6.129 16.746 5.625 16.125 5.625H12a2.25 2.25 0 0 0-2.25 2.25v10.5M15 18H9a2.25 2.25 0 0 1-2.25-2.25V6.75C6.75 6.129 7.254 5.625 7.875 5.625H12.75"
      />
    </svg>
  );

  switch (contentType) {
    case "ncertPdf":
      contentText = "NCERT PDF";
      break;
    case "ncertSolution":
      contentText = "NCERT Solution";
      break;
    case "previousYearQuestions":
      contentText = "Previous Year Questions";
      break;
    case "chapterNotes":
      contentText = "Chapter Notes";
      break;
    case "mindMap":
    default:
      contentText = "Mind Map not available yet";
      contentIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 mb-4 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      );
      break;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto w-full">
        {contentIcon}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {contentText}
        </h2>
        <p className="text-gray-600 mb-6">
          for "
          <span className="font-semibold text-orange-600">
            {chapterTitle}
          </span>
          "
        </p>
        <button
          onClick={goBack}
          className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            Go Back
          </div>
        </button>
      </div>
    </div>
  );
};

// A reusable button component for the links
const ActionButton = ({ label, onClick, hasContent }) => {
  const buttonClass = hasContent
    ? "bg-orange-200 text-orange-800 hover:bg-orange-300"
    : "bg-gray-200 text-gray-500 cursor-not-allowed";
  const iconClass = hasContent ? "text-orange-800" : "text-gray-400";
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium min-h-[100px] ${buttonClass}`}
      disabled={!hasContent}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className={`w-8 h-8 mb-1 ${iconClass}`}
        fill="currentColor"
      >
        <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
      </svg>
      {label}
    </button>
  );
};

// The main component
const App = () => {
  const [openChapter, setOpenChapter] = useState(null);
  const [currentView, setCurrentView] = useState("chapters");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedContentType, setSelectedContentType] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  const navigate = useNavigate();
  const handleNavigation = (link, chapter, contentType) => {
    if (link) {
      navigate(link);
    } else {
      setSelectedChapter(chapter);
      setSelectedContentType(contentType);
      setCurrentView("content");
    }
  };


  const chapters = [
    {
      id: "01",
      title: "Matter in Our Surroundings",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceMatterInOurSurroundings`,
      },
    },
    {
      id: "02",
      title: "Is Matter Around Us Pure?",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure`,
      },
    },
    {
      id: "03",
      title: "Atoms and Molecules",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceAtomsAndMolecules`,
      },
    },
    {
      id: "04",
      title: "Structure of the Atom",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceStructureOfTheAtom`,
      },
    },
    {
      id: "05",
      title: "The Fundamental Unit of Life",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceTheFundamentalUnitOfLife`,
      },
    },
    {
      id: "06",
      title: "Tissues",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceTissues`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceTissues`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceTissues`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceTissues`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceTissues`,
      },
    },
    {
      id: "07",
      title: "Motion",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceMotion`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceMotion`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceMotion`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceMotion`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceMotion`,
      },
    },
    {
      id: "08",
      title: "Force and Laws of Motion",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceForceAndLawsOfMotion`,
      },
    },
    {
      id: "09",
      title: "Gravitation",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceGravitation`,
      },
    },
    {
      id: "10",
      title: "Work and Energy",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceWorkAndEnergy`,
      },
    },
    {
      id: "11",
      title: "Sound",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceSound`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceSound`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceSound`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceSound`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceSound`,
      },
    },
    {
      id: "12",
      title: "Improvement in Food Resources",
      links: {
        ncertPdf: `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`,
        ncertSolution: `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`,
        previousYearQuestions: `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`,
        chapterNotes: `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`,
        mindMap: `/studymaterial/Class9/Class9Science/Class9ScienceImprovementInFoodResources`,
      },
    },
  ];

  const renderChapterList = (chapterList) => (
    <section className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-4">
        {chapterList.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden"
          >
            {/* Chapter title */}
            <button
              className="w-full flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-orange-50 transition-colors duration-200"
              onClick={() => toggleChapter(chapter.id)}
            >
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-orange-600 mr-4">
                  {chapter.id}
                </span>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {chapter.title}
                  </h3>
                </div>
              </div>
              <svg
                className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${
                  openChapter === chapter.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Action buttons */}
            {openChapter === chapter.id && (
              <div className="p-4 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                <ActionButton
                    label="Chapter Notes"
                    onClick={() => handleNavigation(chapter.links.chapterNotes, chapter, "chapterNotes")}
                    hasContent={!!chapter.links.chapterNotes}
                  />
                  <ActionButton
                    label="Class Notes"
                    onClick={() => handleNavigation(chapter.links.classNotes, chapter, "classNotes")}
                    hasContent={!!chapter.links.classNotes}
                  />
                  <ActionButton
                    label="Mind Map"
                    onClick={() => handleNavigation(chapter.links.mindMap, chapter, "mindMap")}
                    hasContent={!!chapter.links.mindMap}
                  />
                  <ActionButton
                    label="Practice Questions"
                    onClick={() => handleNavigation(chapter.links.practiceQuestions, chapter, "practiceQuestions")}
                    hasContent={!!chapter.links.practiceQuestions}
                  />
                  <ActionButton
                    label="NCERT PDF"
                    onClick={() => handleNavigation(chapter.links.ncertPdf, chapter, "ncertPdf")}
                    hasContent={!!chapter.links.ncertPdf}
                  />
                  <ActionButton
                    label="NCERT Solution"
                    onClick={() => handleNavigation(chapter.links.ncertSolution, chapter, "ncertSolution")}
                    hasContent={!!chapter.links.ncertSolution}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  // A temporary set of data for the "See More" section
  const seeMoreContent = [
    {
      id: "S1",
      title: "Science Glossary",
      links: {
        ncertPdf: "",
        ncertSolution: "",
        previousYearQuestions: "",
        chapterNotes: "",
        mindMap: "",
      },
    },
    {
      id: "S2",
      title: "Important Diagrams",
      links: {
        ncertPdf: "",
        ncertSolution: "",
        previousYearQuestions: "",
        chapterNotes: "",
        mindMap: "",
      },
    },
  ];

  if (currentView === "content") {
    return (
      <ChapterContent
        chapterTitle={selectedChapter.title}
        contentType={selectedContentType}
        goBack={() => setCurrentView("chapters")}
      />
    );
  }

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
      
      {/* Toggle buttons for Chapter and See More */}
      <div
        className="relative max-w-sm mx-auto flex items-center justify-center rounded-full p-1 mb-6"
        style={{
          height: "40px",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          zIndex: 1,
        }}
      >
        <div className="flex w-full h-full relative z-10">
          <button
            onClick={() => setCurrentView("chapters")}
            className={`w-1/2 text-center font-semibold text-sm cursor-pointer rounded-full transition-colors duration-200 ${
              currentView === "chapters"
                ? "bg-white text-orange-600 shadow"
                : "text-gray-500"
            }`}
          >
            Chapter
          </button>
          <button
            onClick={() => setCurrentView("seeMore")}
            className={`w-1/2 text-center font-semibold text-sm cursor-pointer rounded-full transition-colors duration-200 ${
              currentView === "seeMore"
                ? "bg-white text-orange-600 shadow"
                : "text-gray-500"
            }`}
          >
            See More
          </button>
        </div>
      </div>
      
      {currentView === "chapters" && renderChapterList(chapters)}
      {currentView === "seeMore" && renderChapterList(seeMoreContent)}
    </div>
  );
};

export default App;
