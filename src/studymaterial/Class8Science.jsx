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

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto w-full">
        {contentIcon}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {contentText}
        </h2>
        <p className="text-gray-600 mb-6">
          for "
          <span className="font-semibold text-orange-600">{chapterTitle}</span>"
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

// The main component, renamed to "App" as per the single-file React app convention.
const App = () => {
  // State for managing which chapter is open
  const [openChapter, setOpenChapter] = useState(null);
  // State for managing the current view/page within the single file
  const [currentView, setCurrentView] = useState("chapters");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedContentType, setSelectedContentType] = useState(null);

  const navigate = useNavigate();

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  // Updated navigation: Use router navigation for valid links
  const navigateTo = (link, chapter) => {
    if (!link) {
      // Handle unavailable links with a specific view
      setSelectedChapter(chapter);
      setSelectedContentType("mindMap");
      setCurrentView("content");
      return;
    }
    // Use React Router navigation
    navigate(link);
  };

  const chapters = [
    {
      id: "01",
      title: "The Cell - Its Structure and Functions",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "02",
      title: "Microorganisms: Friends or Foes",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "03",
      title: "Metals and Non-Metals",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "/studymaterial/Class8/Class8Science/Class8ScienceMetalandNonmetal", classNotes: "", mindMap: "" },
    },
    {
      id: "04",
      title: "Force and Pressure",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "05",
      title: "Friction",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "06",
      title: "Sources of Energy",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "07",
      title: "Combustion",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "08",
      title: "Conservation of Plants and Animals",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "09",
      title: "Crop Production and Its Management",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "10",
      title: "Refraction and Dispersion of Light",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "11",
      title: "The Human Eye",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "12",
      title: "Sound",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "13",
      title: "Synthetic Fibres and Plastics",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "14",
      title: "Reproduction in Animals",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "15",
      title: "Reaching the Age of Adolescence",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "16",
      title: "Electric Current and Its Chemical Effects",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "17",
      title: "Stars and Solar System",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "18",
      title: "Earthquakes",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "19",
      title: "Pollution of Air",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
    {
      id: "20",
      title: "Pollution of Water",
      links: { pdf: "", solution: "", pyq: "", chapterNotes: "", classNotes: "", mindMap: "" },
    },
  ];

  const seeMoreContent = [
    {
      id: "S1",
      title: "History: Key Dates & Events",
      links: {
        notes: "",
      },
    },
    {
      id: "S2",
      title: "Geography: Map-based Questions",
      links: {
        notes: "",
      },
    },
    {
      id: "S3",
      title: "Civics: Important Amendments",
      links: {
        notes: "",
      },
    },
  ];

  const renderChapters = (chapterList) => (
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
                    onClick={() =>
                      navigateTo(chapter.links.chapterNotes, chapter)
                    }
                    hasContent={!!chapter.links.chapterNotes}
                  />
                  <ActionButton
                    label="Class Notes"
                    onClick={() =>
                      navigateTo(chapter.links.classNotes, chapter)
                    }
                    hasContent={!!chapter.links.classNotes}
                  />
                  <ActionButton
                    label="Mind Map"
                    onClick={() => navigateTo(chapter.links.mindMap, chapter)}
                    hasContent={!!chapter.links.mindMap}
                  />
                  <ActionButton
                    label="Practice Questions"
                    onClick={() =>
                      navigateTo(chapter.links.practiceQuestions, chapter)
                    }
                    hasContent={!!chapter.links.practiceQuestions}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

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
      {/* Header */}
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
            <span className="block sm:inline whitespace-nowrap"> Class 8 CBSE</span>
          </h1>
          <p className="mt-1 text-md sm:text-lg italic text-orange-100">Study material by Ankit Bhaiya.</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-12 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </header>

      {/* Button tabs for switching views */}
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

      {/* Chapters or "See More" content based on state */}
      {currentView === "chapters" && renderChapters(chapters)}
      {currentView === "seeMore" && renderChapters(seeMoreContent)}
    </div>
  );
};

export default App;
