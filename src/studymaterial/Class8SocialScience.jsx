import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Class8SocialScience = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  // ✅ All chapter links stored in one place
  const chapters = [
    // UNIT-I RESOURCES AND DEVELOPMENT
    { id: "01", title: "Resources: Utilisation and Development", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions" } },
    { id: "02", title: "Natural Resources: Land, Soil and Water", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions" } },
    { id: "03", title: "Natural Resources: Vegetation and Wildlife", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions" } },
    { id: "04", title: "Mineral and Energy Resources", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions" } },
    { id: "05", title: "Agriculture", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgricultureChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgricultureClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgriculturePracticeQuestions" } },
    { id: "06", title: "Manufacturing Industries", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions" } },
    { id: "07", title: "Human Resources", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesPracticeQuestions" } },
    // UNIT-II OUR PAST-III (People & Society in Modern Period)
    { id: "08", title: "The Modern Period", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodPracticeQuestions" } },
    { id: "09", title: "Establishment of Company Rule in India", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaClassNotes", mindMap: "", practiceQuestions: "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions" } },
    { id: "10", title: "Colonialism: Rural and Tribal Societies", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesPracticeQuestions" } },
    { id: "11", title: "The First War of Independence—1857", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857ClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857PracticeQuestions" } },
    { id: "12", title: "Impact of British Rule on India", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaPracticeQuestions" } },
    { id: "13", title: "Colonialism and Urban Change", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangeChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangeClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions" } },
    { id: "14", title: "The Nationalist Movement (1870 to 1947)", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementPracticeQuestions" } },
    { id: "15", title: "India Marches Ahead", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions" } },
    // UNIT-III RULE OF LAW AND SOCIAL JUSTICE
    { id: "16", title: "Our Constitution", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionPracticeQuestions" } },
    { id: "17", title: "Fundamental Rights, Fundamental Duties and Directive Principles of State Policy", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyChapterNotes", classNotes: "", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions" } },
    { id: "18", title: "The Union Government: The Legislature", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheLegislatureChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheLegislatureClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions" } },
    { id: "19", title: "The Union Government: The Executive", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheExecutiveChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheExecutiveClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions" } },
    { id: "20", title: "The Union Government: The Judiciary", links: { chapterNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryChapterNotes", classNotes: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryClassNotes", mindMap: "", practiceQuestions: "/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions" } },
    { id: "21", title: "Social Justice and the Marginalised", links: { chapterNotes: "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedChapterNotes", classNotes: "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedClassNotes", mindMap: "", practiceQuestions: "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions" } },
    { id: "22", title: "Safeguarding the Marginalised", links: { chapterNotes: "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedChapterNotes", classNotes: "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedClassNotes", mindMap: "", practiceQuestions: "/studymmaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions" } },
  ];

  // ✅ Reusable button component
  const ActionButton = ({ label, link }) => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => (link ? navigate(link) : alert("Link not added yet"))}
        className="flex flex-col items-center justify-center p-3 rounded-lg bg-orange-200 text-orange-800 hover:bg-orange-300 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="w-8 h-8 mb-1 text-orange-800"
          fill="currentColor"
        >
          <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
        </svg>
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20 font-inter text-gray-800">
      {/* Header */}
      <header className="relative isolate overflow-hidden rounded-3xl mb-10">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400 opacity-90"></div>
        <div className="relative p-8 sm:p-12 text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg">
            Science <span className="whitespace-nowrap">Class 8</span>
          </h1>
          <p className="mt-1 text-md sm:text-lg italic text-orange-100">
            Study material from Vardaan Learning Institute.
          </p>
        </div>
      </header>

      {/* Chapters */}
      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          {chapters.map((chapter) => (
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
                    <ActionButton label="Chapter Notes" link={chapter.links.chapterNotes} />
                    <ActionButton label="Class Notes" link={chapter.links.classNotes} />
                    <ActionButton label="Mind Map" link={chapter.links.mindMap} />
                    <ActionButton label="Practice Questions" link={chapter.links.practiceQuestions} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Class8SocialScience;
