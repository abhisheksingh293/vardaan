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

import Lottie from 'lottie-react';
import ChapterNotesAnim from '../assets/Animation JSON/Chapter_Notes.json';
import ClassNotesAnim from '../assets/Animation JSON/Class_Notes.json';
import MindMapAnim from '../assets/Animation JSON/Mind_Map.json';
import QuizAnim from '../assets/Animation JSON/Quiz.json';
import PrevYearAnim from '../assets/Animation JSON/Previous_year_Questions.json';
import NcertPdfAnim from '../assets/Animation JSON/NCERT PDF.json';
import NcertSolutionAnim from '../assets/Animation JSON/Ncert_Solution.json';

const ActionButton = ({ label, onClick, hasContent, animationData }) => {
  const buttonClass = hasContent
    ? "bg-orange-200 text-orange-800 hover:bg-orange-300"
    : "bg-gray-200 text-gray-500 cursor-not-allowed";
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium min-h-[100px] ${buttonClass}`}
      disabled={!hasContent}
    >
      <div className="w-8 h-8 mb-1 pointer-events-none">
        {animationData && <Lottie animationData={animationData} loop={true} className="w-8 h-8 mb-1" />}
      </div>
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

  // ✅ All chapter links stored in one place
  const chapters = [
    // UNIT-I RESOURCES AND DEVELOPMENT
    {
      id: "01",
      title: "Resources: Utilisation and Development",
      links: {
        chapterNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentChapterNotes",
        classNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentClassNotes",
        mindMap: "",
        practiceQuestions: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions",
      },
    },
    {
      id: "02",
      title: "Natural Resources: Land, Soil and Water",
      links: {
        chapterNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterChapterNotes",
        classNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterClassNotes",
        mindMap: "",
        practiceQuestions: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions",
      },
    },
    {
      id: "03",
      title: "Natural Resources: Vegetation and Wildlife",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeChapterNotes",
        classNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions",
      },
    },
    {
      id: "04",
      title: "Mineral and Energy Resources",
      links: {
        chapterNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesChapterNotes",
        classNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesClassNotes",
        mindMap: "",
        practiceQuestions: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions",
      },
    },
    {
      id: "05",
      title: "Agriculture",
      links: {
        chapterNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgricultureChapterNotes",
        classNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgricultureClassNotes",
        mindMap: "",
        practiceQuestions: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgriculturePracticeQuestions",
      },
    },
    {
      id: "06",
      title: "Manufacturing Industries",
      links: {
        chapterNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesChapterNotes",
        classNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesClassNotes",
        mindMap: "",
        practiceQuestions: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions",
      },
    },
    {
      id: "07",
      title: "Human Resources",
      links: {
        chapterNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesChapterNotes",
        classNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesClassNotes",
        mindMap: "",
        practiceQuestions: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesPracticeQuestions",
      },
    },
    // UNIT-II OUR PAST-III (People & Society in Modern Period)
    {
      id: "08",
      title: "The Modern Period",
      links: {
        chapterNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodChapterNotes",
        classNotes: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodClassNotes",
        mindMap: "",
        practiceQuestions: "",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodPracticeQuestions",
      },
    },
    {
      id: "09",
      title: "Establishment of Company Rule in India",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaChapterNotes",
        classNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions",
      },
    },
    {
      id: "10",
      title: "Colonialism: Rural and Tribal Societies",
      links: {
        chapterNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesChapterNotes",
        classNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes",
        mindMap: "",
        practiceQuestions:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesPracticeQuestions",
      },
    },
    {
      id: "11",
      title: "The First War of Independence—1857",
      links: {
        chapterNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes",
        classNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857ClassNotes",
        mindMap: "",
        practiceQuestions:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857PracticeQuestions",
      },
    },
    {
      id: "12",
      title: "Impact of British Rule on India",
      links: {
        chapterNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaChapterNotes",
        classNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaClassNotes",
        mindMap: "",
        practiceQuestions:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaPracticeQuestions",
      },
    },
    {
      id: "13",
      title: "Colonialism and Urban Change",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangeChapterNotes",
        classNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangeClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions",
      },
    },
    {
      id: "14",
      title: "The Nationalist Movement (1870 to 1947)",
      links: {
        chapterNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementChapterNotes",
        classNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementPracticeQuestions",
      },
    },
    {
      id: "15",
      title: "India Marches Ahead",
      links: {
        chapterNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadChapterNotes",
        classNotes:
          "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions",
      },
    },
    // UNIT-III RULE OF LAW AND SOCIAL JUSTICE
    {
      id: "16",
      title: "Our Constitution",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionChapterNotes",
        classNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionPracticeQuestions",
      },
    },
    {
      id: "17",
      title:
        "Fundamental Rights, Fundamental Duties and Directive Principles of State Policy",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyChapterNotes",
        classNotes: "",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions",
      },
    },
    {
      id: "18",
      title: "The Union Government: The Legislature",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheLegislatureChapterNotes",
        classNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheLegislatureClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions",
      },
    },
    {
      id: "19",
      title: "The Union Government: The Executive",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheExecutiveChapterNotes",
        classNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheExecutiveClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions",
      },
    },
    {
      id: "20",
      title: "The Union Government: The Judiciary",
      links: {
        chapterNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryChapterNotes",
        classNotes:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions",
      },
    },
    {
      id: "21",
      title: "Social Justice and the Marginalised",
      links: {
        chapterNotes:"",
          // "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedChapterNotes",
        classNotes:"",
          // "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions",
      },
    },
    {
      id: "22",
      title: "Safeguarding the Marginalised",
      links: {
        chapterNotes:"",
          // "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedChapterNotes",
        classNotes:"",
          // "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedClassNotes",
        mindMap: "",
        practiceQuestions:"",
          // "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions",
      },
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
              <div className="p-3 sm:p-5 border-t border-orange-100 bg-orange-50 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <ActionButton
                    label="Chapter Notes"
                    onClick={() =>
                      navigateTo(chapter.links.chapterNotes, chapter)
                    }
                    hasContent={!!chapter.links.chapterNotes}
                    animationData={ChapterNotesAnim}
                  />
                  <ActionButton
                    label="Class Notes"
                    onClick={() =>
                      navigateTo(chapter.links.classNotes, chapter)
                    }
                    hasContent={!!chapter.links.classNotes}
                    animationData={ClassNotesAnim}
                  />
                  <ActionButton
                    label="Mind Map"
                    onClick={() => navigateTo(chapter.links.mindMap, chapter)}
                    hasContent={!!chapter.links.mindMap}
                    animationData={MindMapAnim}
                  />
                  <ActionButton
                    label="Practice Questions"
                    onClick={() =>
                      navigateTo(chapter.links.practiceQuestions, chapter)
                    }
                    hasContent={!!chapter.links.practiceQuestions}
                    animationData={PrevYearAnim}
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
            <span className="block sm:inline">Social Science</span>
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
