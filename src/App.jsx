
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopResults from './components/TopResults';
import ResultCheck from './pages/ResultCheck.jsx';
import RegisterStudent from './pages/RegisterStudent.jsx';
import TestResults from './components/TestResults.jsx';
const NcertPdf = React.lazy(() => import('./pages/NcertPdf.jsx'));
const NcertNotes = React.lazy(() => import('./pages/NcertNotes.jsx'));
const ReferenceBook = React.lazy(() => import('./pages/ReferenceBook.jsx'));
const NcertSolution = React.lazy(() => import('./pages/NcertSolution.jsx'));
const VardaanJunior = React.lazy(() => import('./pages/VardaanJunior.jsx'));
const VardaanSenior = React.lazy(() => import('./pages/VardaanSenior.jsx'));
const ArticlePage = React.lazy(() => import('./pages/ArticlePage.jsx'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage.jsx'));
const SubcategoryPage = React.lazy(() => import('./pages/SubcategoryPage.jsx'));
const SubcategoryListPage = React.lazy(() => import('./pages/SubcategoryListPage.jsx'));
const TestPaper = React.lazy(() => import('./pages/TestPaper.jsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
import Admin from './pages/Admin.jsx';
import Abhishek from './studymaterial/Abhishek.jsx';
import Login from './pages/Login.jsx';
import AuthCallback from './pages/AuthCallback.jsx';
import BookSolutions from './pages/BookSolutions.jsx';
import NcertBooks from './pages/NcertBooks.jsx';
import Syllabus from './pages/Syllabus.jsx';
import Notes from './pages/Notes.jsx';
import Class10 from './studymaterial/Class10.jsx';
import StudyMaterial from './studymaterial/StudyMaterial.jsx';
import Class10Science from './studymaterial/Class10Science.jsx';
import Class10ScienceCbsePYQ from './studymaterial/Class10ScienceCbsePYQ.jsx';
import Class10Mathematics from './studymaterial/Class10Mathematics.jsx';
import Class10SocialScience from './studymaterial/Class10SocialScience.jsx';
import Class10English from './studymaterial/Class10English.jsx';
import Class10EnglishGrammar from './studymaterial/Class10EnglishGrammar.jsx';
import Class6 from './studymaterial/Class6.jsx';
import Class6Science from './studymaterial/Class6Science.jsx';
import Class6Mathematics from './studymaterial/Class6Mathematics.jsx';
import Class6SocialScience from './studymaterial/Class6SocialScience.jsx';
import Class6English from './studymaterial/Class6English.jsx';
import Class6EnglishGrammar from './studymaterial/Class6EnglishGrammar.jsx';
import Class7 from './studymaterial/Class7.jsx';
import Class8 from './studymaterial/Class8.jsx';
import Class7Science from './studymaterial/Class7Science.jsx';
import Class7Mathematics from './studymaterial/Class7Mathematics.jsx';
import Class7SocialScience from './studymaterial/Class7SocialScience.jsx';
import Class7English from './studymaterial/Class7English.jsx';
import Class7EnglishGrammar from './studymaterial/Class7EnglishGrammar.jsx';
import Class7CbseSst from './studymaterial/Class7CbseSst.jsx';
import Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationClassNotes from './studymaterial/Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationClassNotes.jsx';
import Class7CbseSstLifeOnTheEarthDetailedNotes from './studymaterial/Class7CbseSstLifeOnTheEarthDetailedNotes.jsx';
import Class7CbseSstMajorReligionsClassNotes from "./studymaterial/Class7CbseSstMajorReligionsClassNotes.jsx";
import Class7CbseSstComponentsOfEnvironmentDetailedNotes from './studymaterial/Class7CbseSstComponentsOfEnvironmentDetailedNotes.jsx';
import Class7CbseSstComponentsOfEnvironmentClassNotes from './studymaterial/Class7CbseSstComponentsOfEnvironmentClassNotes.jsx';
import Class7CbseSstMajorReligionsDetailedNotes from './studymaterial/Class7CbseSstMajorReligionsDetailedNotes.jsx';
import Class7CbseSstLandAndThePeopleDetailedNotes from './studymaterial/Class7CbseSstLandAndThePeopleDetailedNotes.jsx';
import Class7CbseSstLandAndThePeopleClassNotes from './studymaterial/Class7CbseSstLandAndThePeopleClassNotes.jsx';
import Class7CbseSstAirAroundUsDetailedNotes from './studymaterial/Class7CbseSstAirAroundUsDetailedNotes.jsx';
import Class7CbseSstAirAroundUsClassNotes from './studymaterial/Class7CbseSstAirAroundUsClassNotes.jsx';
import Class7CbseSstAdvertisingAndDemocracyClassNotes from './studymaterial/Class7CbseSstAdvertisingAndDemocracyClassNotes.jsx';
import Class7CbseSstAdvertisingAndDemocracyDetailedNotes from './studymaterial/Class7CbseSstAdvertisingAndDemocracyDetailedNotes.jsx';
import Class7CbseSstLifeOnTheEarthClassNotes from './studymaterial/Class7CbseSstLifeOnTheEarthClassNotes.jsx';
import Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationDetailedNotes from './studymaterial/Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationDetailedNotes.jsx';
import Class7CbseSstDelhiSultanateDetailedNotes from './studymaterial/Class7CbseSstDelhiSultanateDetailedNotes.jsx';
import Class7CbseSstDelhiSultanateClassNotes from './studymaterial/Class7CbseSstDelhiSultanateClassNotes.jsx';
import Class7CbseSstEmergenceOfIndependentStatesDetailedNotes from './studymaterial/Class7CbseSstEmergenceOfIndependentStatesDetailedNotes.jsx';
import Class7CbseSstEmergenceOfIndependentStatesClassNotes from './studymaterial/Class7CbseSstEmergenceOfIndependentStatesClassNotes.jsx';
import Class7CbseSstDemocracyAndEqualityDetailedNotes from './studymaterial/Class7CbseSstDemocracyAndEqualityDetailedNotes.jsx';
import Class7CbseSstDemocracyAndEqualityClassNotes from './studymaterial/Class7CbseSstDemocracyAndEqualityClassNotes.jsx';
import Class7CbseSstMarketsAroundUsDetailedNotes from './studymaterial/Class7CbseSstMarketsAroundUsDetailedNotes.jsx';
import Class7CbseSstMarketsAroundUsClassNotes from './studymaterial/Class7CbseSstMarketsAroundUsClassNotes.jsx';
import Class7CbseSstMediaTheMainstayOfDemocracyDetailedNotes from './studymaterial/Class7CbseSstMediaTheMainstayOfDemocracyDetailedNotes.jsx';
import Class7CbseSstMediaTheMainstayOfDemocracyClassNotes from './studymaterial/Class7CbseSstMediaTheMainstayOfDemocracyClassNotes.jsx';
import Class7CbseSstMedievalPeriodDetailedNotes from './studymaterial/Class7CbseSstMedievalPeriodDetailedNotes.jsx';
import Class7CbseSstMedievalPeriodClassNotes from './studymaterial/Class7CbseSstMedievalPeriodClassNotes.jsx';
import Class7CbseSstOurStateGovernmentsDetailedNotes from './studymaterial/Class7CbseSstOurStateGovernmentsDetailedNotes.jsx';
import Class7CbseSstOurStateGovernmentsClassNotes from './studymaterial/Class7CbseSstOurStateGovernmentsClassNotes.jsx';
import Class7CbseSstRegionalPowersDetailedNotes from './studymaterial/Class7CbseSstRegionalPowersDetailedNotes.jsx';
import Class7CbseSstRegionalPowersClassNotes from './studymaterial/Class7CbseSstRegionalPowersClassNotes.jsx';
import Class7CbseSstTheEarthAndTheChangesOnItDetailedNotes from './studymaterial/Class7CbseSstTheEarthAndTheChangesOnItDetailedNotes.jsx';
import Class7CbseSstTheEarthAndTheChangesOnItClassNotes from './studymaterial/Class7CbseSstTheEarthAndTheChangesOnItClassNotes.jsx';
import Class7CbseSstTheMughalEmpireDetailedNotes from './studymaterial/Class7CbseSstTheMughalEmpireDetailedNotes.jsx';
import Class7CbseSstTheMughalEmpireClassNotes from './studymaterial/Class7CbseSstTheMughalEmpireClassNotes.jsx';
import Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaDetailedNotes from './studymaterial/Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaDetailedNotes.jsx';
import Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaClassNotes from './studymaterial/Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaClassNotes.jsx';
import Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaDetailedNotes from './studymaterial/Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaDetailedNotes.jsx';
import Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaClassNotes from './studymaterial/Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaClassNotes.jsx';
import Class7CbseSstTheSurfaceAndInteriorOfTheEarthDetailedNotes from './studymaterial/Class7CbseSstTheSurfaceAndInteriorOfTheEarthDetailedNotes.jsx';
import Class7CbseSstTheSurfaceAndInteriorOfTheEarthClassNotes from './studymaterial/Class7CbseSstTheSurfaceAndInteriorOfTheEarthClassNotes.jsx';
import Class7CbseSstTurkishInvasionsInNorthIndiaDetailedNotes from './studymaterial/Class7CbseSstTurkishInvasionsInNorthIndiaDetailedNotes.jsx';
import Class7CbseSstTurkishInvasionsInNorthIndiaClassNotes from './studymaterial/Class7CbseSstTurkishInvasionsInNorthIndiaClassNotes.jsx';
import Class7CbseSstUnpackingGenderDetailedNotes from './studymaterial/Class7CbseSstUnpackingGenderDetailedNotes.jsx';
import Class7CbseSstUnpackingGenderClassNotes from './studymaterial/Class7CbseSstUnpackingGenderClassNotes.jsx';
import Class7CbseSstWaterSurroundingTheEarthDetailedNotes from './studymaterial/Class7CbseSstWaterSurroundingTheEarthDetailedNotes.jsx';
import Class7CbseSstWaterSurroundingTheEarthClassNotes from './studymaterial/Class7CbseSstWaterSurroundingTheEarthClassNotes.jsx';

import Class8Science from './studymaterial/Class8Science.jsx';
import Class8Mathematics from './studymaterial/Class8Mathematics.jsx';
import Class8SocialScience from './studymaterial/Class8SocialScience.jsx';
import Class8cbseSocialScienceAgricultureChapterNotes from './studymaterial/Class8cbseSocialScienceAgricultureChapterNotes.jsx';
import Class8cbseSocialScienceAgricultureClassNotes from './studymaterial/Class8cbseSocialScienceAgricultureClassNotes.jsx';
import Class8cbseSocialScienceColonialismAndUrbanChangeChapterNotes from './studymaterial/Class8cbseSocialScienceColonialismAndUrbanChangeChapterNotes.jsx';
import Class8cbseSocialScienceColonialismAndUrbanChangeClassNotes from './studymaterial/Class8cbseSocialScienceColonialismAndUrbanChangeClassNotes.jsx';
import Class8cbseSocialScienceColonialismRuralAndTribalSocietiesChapterNotes from './studymaterial/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesChapterNotes.jsx';
import Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes from './studymaterial/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes.jsx';
import Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaChapterNotes from './studymaterial/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaChapterNotes.jsx';
import Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaClassNotes from './studymaterial/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaClassNotes.jsx';
import Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyChapterNotes from './studymaterial/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyChapterNotes.jsx';
import Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyClassNotes from './studymaterial/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyClassNotes.jsx';
import Class8cbseSocialScienceHumanResourcesChapterNotes from './studymaterial/Class8cbseSocialScienceHumanResourcesChapterNotes.jsx';
import Class8cbseSocialScienceHumanResourcesClassNotes from './studymaterial/Class8cbseSocialScienceHumanResourcesClassNotes.jsx';
import Class8cbseSocialScienceImpactOfBritishRuleOnIndiaChapterNotes from './studymaterial/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaChapterNotes.jsx';
import Class8cbseSocialScienceImpactOfBritishRuleOnIndiaClassNotes from './studymaterial/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaClassNotes.jsx';
import Class8cbseSocialScienceIndiaMarchesAheadChapterNotes from './studymaterial/Class8cbseSocialScienceIndiaMarchesAheadChapterNotes.jsx';
import Class8cbseSocialScienceIndiaMarchesAheadClassNotes from './studymaterial/Class8cbseSocialScienceIndiaMarchesAheadClassNotes.jsx';
import Class8cbseSocialScienceManufacturingIndustriesChapterNotes from './studymaterial/Class8cbseSocialScienceManufacturingIndustriesChapterNotes.jsx';
import Class8cbseSocialScienceManufacturingIndustriesClassNotes from './studymaterial/Class8cbseSocialScienceManufacturingIndustriesClassNotes.jsx';
import Class8cbseSocialScienceMineralAndEnergyResourcesChapterNotes from './studymaterial/Class8cbseSocialScienceMineralAndEnergyResourcesChapterNotes.jsx';
import Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes from './studymaterial/Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes.jsx';
import Class8cbseSocialScienceMineralAndEnergyResourcesClassNotes from './studymaterial/Class8cbseSocialScienceMineralAndEnergyResourcesClassNotes.jsx';
import Class8cbseSocialScienceTheFirstWarOfIndependence1857ClassNotes from './studymaterial/Class8cbseSocialScienceTheFirstWarOfIndependence1857ClassNotes.jsx';
import Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterChapterNotes from './studymaterial/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterChapterNotes.jsx';
import Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterClassNotes from './studymaterial/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterClassNotes.jsx';
import Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeChapterNotes from './studymaterial/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeChapterNotes.jsx';
import Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeClassNotes from './studymaterial/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeClassNotes.jsx';
import Class8cbseSocialScienceOurConstitutionChapterNotes from './studymaterial/Class8cbseSocialScienceOurConstitutionChapterNotes.jsx';
import Class8cbseSocialScienceOurConstitutionClassNotes from './studymaterial/Class8cbseSocialScienceOurConstitutionClassNotes.jsx';
import Class8cbseSocialScienceResourcesUtilisationAndDevelopmentChapterNotes from './studymaterial/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentChapterNotes.jsx';
import Class8cbseSocialScienceResourcesUtilisationAndDevelopmentClassNotes from './studymaterial/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentClassNotes.jsx';
import Class8cbseSocialScienceSafeguardingTheMarginalisedChapterNotes from './studymaterial/Class8cbseSocialScienceSafeguardingTheMarginalisedChapterNotes.jsx';
import Class8cbseSocialScienceSafeguardingTheMarginalisedClassNotes from './studymaterial/Class8cbseSocialScienceSafeguardingTheMarginalisedClassNotes.jsx';
import Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions from './studymaterial/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions.jsx';
import Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions from './studymaterial/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions.jsx';
import Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions from './studymaterial/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions.jsx';
import Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions from './studymaterial/Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions.jsx';
import Class8cbseSocialScienceAgriculturePracticeQuestions from './studymaterial/Class8cbseSocialScienceAgriculturePracticeQuestions.jsx';
import Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions from './studymaterial/Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions.jsx';
import Class8cbseSocialScienceHumanResourcesPracticeQuestions from './studymaterial/Class8cbseSocialScienceHumanResourcesPracticeQuestions.jsx';
import Class8cbseSocialScienceTheModernPeriodPracticeQuestions from './studymaterial/Class8cbseSocialScienceTheModernPeriodPracticeQuestions.jsx';
import Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions from './studymaterial/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions.jsx';
import Class8cbseSocialScienceColonialismRuralAndTribalSocietiesPracticeQuestions from './studymaterial/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesPracticeQuestions.jsx';
import Class8cbseSocialScienceTheFirstWarOfIndependence1857PracticeQuestions from './studymaterial/Class8cbseSocialScienceTheFirstWarOfIndependence1857PracticeQuestions.jsx';
import Class8cbseSocialScienceImpactOfBritishRuleOnIndiaPracticeQuestions from './studymaterial/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaPracticeQuestions.jsx';
import Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions from './studymaterial/Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions.jsx';
import Class8cbseSocialScienceTheNationalistMovementPracticeQuestions from './studymaterial/Class8cbseSocialScienceTheNationalistMovementPracticeQuestions.jsx';
import Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions from './studymaterial/Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions.jsx';
import Class8cbseSocialScienceOurConstitutionPracticeQuestions from './studymaterial/Class8cbseSocialScienceOurConstitutionPracticeQuestions.jsx';
import Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions from './studymaterial/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions.jsx';
import Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions from './studymaterial/Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions.jsx';
import Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions from './studymaterial/Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions.jsx';
import Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions from './studymaterial/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions.jsx';
import Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions from './studymaterial/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions.jsx';
import Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions from './studymaterial/Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions.jsx';
import Class8cbseSocialScienceSocialJusticeAndTheMarginalisedChapterNotes from './studymaterial/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedChapterNotes.jsx';
import Class8cbseSocialScienceSocialJusticeAndTheMarginalisedClassNotes from './studymaterial/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedClassNotes.jsx';
import Class8cbseSocialScienceTheModernPeriodChapterNotes from './studymaterial/Class8cbseSocialScienceTheModernPeriodChapterNotes.jsx';
import Class8cbseSocialScienceTheModernPeriodClassNotes from './studymaterial/Class8cbseSocialScienceTheModernPeriodClassNotes.jsx';

import Class8English from './studymaterial/Class8English.jsx';
import Class8EnglishGrammar from './studymaterial/Class8EnglishGrammar.jsx';
import Class6icse from './studymaterial/Class6icse.jsx';
import Class6icseScience from './studymaterial/Class6icseScience.jsx';
import Class6icseMathematics from './studymaterial/Class6icseMathematics.jsx';
import Class6icseSocialScience from './studymaterial/Class6icseSocialScience.jsx';
import Class6icseEnglish from './studymaterial/Class6icseEnglish.jsx';
import Class6icseEnglishGrammar from './studymaterial/Class6icseEnglishGrammar.jsx';
import Class7icse from './studymaterial/Class7icse.jsx';
import Class8icse from './studymaterial/Class8icse.jsx';
import Class7icseScience from './studymaterial/Class7icseScience.jsx';
import Class7icseMathematics from './studymaterial/Class7icseMathematics.jsx';
import Class7icseSocialScience from './studymaterial/Class7icseSocialScience.jsx';
import Class7icseEnglish from './studymaterial/Class7icseEnglish.jsx';
import Class7icseEnglishGrammar from './studymaterial/Class7icseEnglishGrammar.jsx';
import Class7icseCivicsHistory from './studymaterial/Class7icseCivicsHistory.jsx';
import Class8icseScience from './studymaterial/Class8icseScience.jsx';
import Class10EconomicsSectorsOfTheIndianEconomy from './studymaterial/Class10EconomicsSectorsOfTheIndianEconomy.jsx';
import SstImportQuestionHalfYearly from './studymaterial/SstImportQuestionHalfYearly.jsx';





import Class8icseMathematics from './studymaterial/Class8icseMathematics.jsx';
import Class8icseSocialScience from './studymaterial/Class8icseSocialScience.jsx';
import Class8icseEnglish from './studymaterial/Class8icseEnglish.jsx';
import Class8icseEnglishGrammar from './studymaterial/Class8icseEnglishGrammar.jsx';
import Class9 from './studymaterial/Class9.jsx';
import Class9Science from './studymaterial/Class9Science.jsx';
import Class9Mathematics from './studymaterial/Class9Mathematics.jsx';
import Class9English from './studymaterial/Class9English.jsx';
import Class9EnglishGrammar from './studymaterial/Class9EnglishGrammar.jsx';
import Class9icse from './studymaterial/Class9icse.jsx';
import Class9icseScience from './studymaterial/Class9icseScience.jsx';
import Class9icseMathematics from './studymaterial/Class9icseMathematics.jsx';
import Class9icseSocialScience from './studymaterial/Class9icseSocialScience.jsx';
import Class9icseEnglish from './studymaterial/Class9icseEnglish.jsx';
import Class9icseEnglishGrammar from './studymaterial/Class9icseEnglishGrammar.jsx';
import Class11 from './studymaterial/Class11.jsx';
import Class11Science from './studymaterial/Class11Science.jsx';
import Class11Mathematics from './studymaterial/Class11Mathematics.jsx';
import Class11SocialScience from './studymaterial/Class11SocialScience.jsx';
import Class11English from './studymaterial/Class11English.jsx';
import Class11EnglishGrammar from './studymaterial/Class11EnglishGrammar.jsx';
import Class12 from './studymaterial/Class12.jsx';
import Class12Science from './studymaterial/Class12Science.jsx';
import Class12Mathematics from './studymaterial/Class12Mathematics.jsx';
import Class12SocialScience from './studymaterial/Class12SocialScience.jsx';
import Class12English from './studymaterial/Class12English.jsx';
import Class12EnglishGrammar from './studymaterial/Class12EnglishGrammar.jsx';
import Class10icse from './studymaterial/Class10icse.jsx';
import Class10icseScience from './studymaterial/Class10icseScience.jsx';
import Class10icseMathematics from './studymaterial/Class10icseMathematics.jsx';
import Class10icseEnglish from './studymaterial/Class10icseEnglish.jsx';
import Class10icseEnglishGrammar from './studymaterial/Class10icseEnglishGrammar.jsx';
import Class10icseHistory from './studymaterial/Class10icseHistory.jsx';
import Class10icseGeography from './studymaterial/Class10icseGeography.jsx';
import Class10icseCivics from './studymaterial/Class10icseCivics.jsx';
import Class10Civics from './studymaterial/Class10Civics.jsx';
import Class10CivicsGenderReligionandCaste from './studymaterial/Class10CivicsGenderReligionandCaste.jsx';

import Class10icseCivicsTheUnionParliament from './studymaterial/Class10icseCivicsTheUnionParliament.jsx';
// Class 10 ICSE History Imports
import Class10IcseHistoryTheFirstWarOfIndependence1857Notes from './studymaterial/Class10IcseHistoryTheFirstWarOfIndependence1857Notes.jsx';
import Class10IcseHistoryTheFirstWarOfIndependence1857ClassNotes from './studymaterial/Class10IcseHistoryTheFirstWarOfIndependence1857ClassNotes.jsx';
import Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressNotes from './studymaterial/Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressNotes.jsx';
import Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressClassNotes from './studymaterial/Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressClassNotes.jsx';
import Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsNotes from './studymaterial/Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsNotes.jsx';
import Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsClassNotes from './studymaterial/Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsClassNotes.jsx';
import Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsNotes from './studymaterial/Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsNotes.jsx';
import Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsClassNotes from './studymaterial/Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsClassNotes.jsx';
import Class10IcseHistoryMuslimLeagueAndItsObjectivesNotes from './studymaterial/Class10IcseHistoryMuslimLeagueAndItsObjectivesNotes.jsx';
import Class10IcseHistoryMuslimLeagueAndItsObjectivesClassNotes from './studymaterial/Class10IcseHistoryMuslimLeagueAndItsObjectivesClassNotes.jsx';
import Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsNotes from './studymaterial/Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsNotes.jsx';
import Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsClassNotes from './studymaterial/Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsClassNotes.jsx';
import Class10IcseHistoryNationalMovement1919To1934Notes from './studymaterial/Class10IcseHistoryNationalMovement1919To1934Notes.jsx';
import Class10IcseHistoryNationalMovement1919To1934ClassNotes from './studymaterial/Class10IcseHistoryNationalMovement1919To1934ClassNotes.jsx';
import Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementNotes from './studymaterial/Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementNotes.jsx';
import Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementClassNotes from './studymaterial/Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementClassNotes.jsx';
import Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyNotes from './studymaterial/Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyNotes.jsx';
import Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyClassNotes from './studymaterial/Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyClassNotes.jsx';
import Class10IcseHistoryIndependenceAndThePartitionOfIndiaNotes from './studymaterial/Class10IcseHistoryIndependenceAndThePartitionOfIndiaNotes.jsx';
import Class10IcseHistoryIndependenceAndThePartitionOfIndiaClassNotes from './studymaterial/Class10IcseHistoryIndependenceAndThePartitionOfIndiaClassNotes.jsx';
import Class11icse from './studymaterial/Class11icse.jsx';
import Class11icseScience from './studymaterial/Class11icseScience.jsx';
import Class11icseMathematics from './studymaterial/Class11icseMathematics.jsx';
import Class11icseSocialScience from './studymaterial/Class11icseSocialScience.jsx';
import Class11icseEnglish from './studymaterial/Class11icseEnglish.jsx';
import Class11icseEnglishGrammar from './studymaterial/Class11icseEnglishGrammar.jsx';
import Class12icse from './studymaterial/Class12icse.jsx';
import Class12icseScience from './studymaterial/Class12icseScience.jsx';
import Class12icseMathematics from './studymaterial/Class12icseMathematics.jsx';
import Class12icseSocialScience from './studymaterial/Class12icseSocialScience.jsx';
import Class12icseEnglish from './studymaterial/Class12icseEnglish.jsx';
import Class12icseEnglishGrammar from './studymaterial/Class12icseEnglishGrammar.jsx';
import Class9ScienceIsMatterAroundUsPure from './studymaterial/Class9ScienceIsMatterAroundUsPure.jsx';
import Class8ScienceMetalandNonmetal from './studymaterial/Class8ScienceMetalandNonmetal.jsx';

import Class10GeographyResourcesAndDevelopment from './studymaterial/Class10GeographyResourcesAndDevelopment.jsx';
import Class10GeographyForestandWildlifeResources from './studymaterial/Class10GeographyForestandWildlifeResources.jsx';
import Class10GeographyWaterResources from './studymaterial/Class10GeographyWaterResources.jsx';
import Class10GeographyAgriculture from './studymaterial/Class10GeographyAgriculture.jsx';
import Class10GeographyMineralsAndEnergyResources from './studymaterial/Class10GeographyMineralsAndEnergyResources.jsx';
import Class10GeographyManufacturingIndustries from './studymaterial/Class10GeographyManufacturingIndustries.jsx';
import Class10GeographyLifelinesOfNationalEconomy from './studymaterial/Class10GeographyLifelinesOfNationalEconomy.jsx';
import Class10Geography from './studymaterial/Class10Geography.jsx';
import Map from './components/Map.jsx';


const AdminDashboard = React.lazy(() => import('./pages/admindashboard.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'));
const WriteArticle = React.lazy(() => import('./pages/WriteArticle.jsx'));
const LandingPage = React.lazy(() => import('./pages/LandingPage.jsx'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword.jsx'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword.jsx'));
import './App.css';
import supabase from './supabaseClient';
import { ToastContainer } from 'react-toastify';
import Class10Economics from './studymaterial/Class10Economics.jsx';
import Class10EconomicsDevelopment from './studymaterial/Class10EconomicsDevelopment.jsx';
import Class10EconomicsMoneyAndCredit from './studymaterial/Class10EconomicsMoneyAndCredit.jsx';
import Class10EconomicsGlobalisationAndTheIndianEconomy from './studymaterial/Class10EconomicsGlobalisationAndTheIndianEconomy.jsx';
import Class10EconomicsConsumerRights from './studymaterial/Class10EconomicsConsumerRights.jsx';



import Class10GeographyForestandWildlifeResourcesClassNotes from './studymaterial/Class10GeographyForestandWildlifeResourcesClassNotes.jsx';
import Class10GeographyWaterResourcesClassNotes from './studymaterial/Class10GeographyWaterResourcesClassNotes.jsx';
import Class10GeographyMineralsAndEnergyResourcesClassNotes from './studymaterial/Class10GeographyMineralsAndEnergyResourcesClassNotes.jsx';
import Class10GeographyManufacturingIndustriesClassNotes from './studymaterial/Class10GeographyManufacturingIndustriesClassNotes.jsx';
import Class10GeographyLifelinesOfNationalEconomyClassNotes from './studymaterial/Class10GeographyLifelinesOfNationalEconomyClassNotes.jsx';
import Class10GeographyResourcesAndDevelopmentClassNotes from './studymaterial/Class10GeographyResourcesAndDevelopmentClassNotes.jsx';
import Class10GeographyAgricultureClassNotes from './studymaterial/Class10GeographyAgricultureClassNotes.jsx';


import Class10EconomicsDevelopmentClassNotes from './studymaterial/Class10EconomicsDevelopmentClassNotes.jsx';
import Class10EconomicsSectorsOfTheIndianEconomyClassNotes from './studymaterial/Class10EconomicsSectorsOfTheIndianEconomyClassNotes.jsx';
import GlobalisationAndTheIndianEconomyChapter from './studymaterial/Class10EconomicsGlobalisationAndTheIndianEconomyClassNotes.jsx';
import MoneyAndCreditChapter from './studymaterial/Class10EconomicsMoneyAndCreditClassNotes.jsx';
import ConsumerRightsChapter from './studymaterial/Class10EconomicsConsumerRightsClassNotes.jsx';

import Results from './components/Results.jsx';
import HallOfFame from './components/HallOfFame.jsx';

import Class8cbseSocialScienceTheNationalistMovement1870To1947ClassNotes from './studymaterial/Class8cbseSocialScienceTheNationalistMovement1870To1947ClassNotes.jsx';
import Class8cbseSocialScienceTheNationalistMovement1870To1947ChapterNotes from './studymaterial/Class8cbseSocialScienceTheNationalistMovement1870To1947ChapterNotes.jsx';


function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LogoutSyncHandler() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace('#', '?'));
    if (params.get('logout')) {
      window.location.hash = '';
      navigate('/Login');
    }
  }, [navigate]);
  return null;
}

function PasswordRecoveryRedirect() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace('#', '?'));
    if (params.get('password_recovery')) {
      window.location.hash = '';
      navigate('/forgot-password');
    }
  }, [navigate]);
  return null;
}

function OAuthRedirectHandler() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace('#', '?'));
    if (params.get('access_token')) {
      window.location.hash = '';
      navigate('/dashboard');
    }
  }, [navigate]);
  return null;
}

function App() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    // Initialize auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user && location.pathname === '/Login') {
        navigate('/dashboard');
      }
    }, [navigate, location.pathname]);

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  if (loading) {
    return <div className="w-screen h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {!['/dashboard','/admindashboard'].includes(location.pathname) && (
        <Navbar user={user} />
      )}
      <ScrollToTop />
      <LogoutSyncHandler />
      <PasswordRecoveryRedirect />
      <OAuthRedirectHandler />
      <Routes>
          <Route Path="/Map" element={<Map />} />
          <Route path="/" element={<LandingPage />} />
<Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/testresults" element={<TestResults />} />
          <Route path="/top-results" element={<TopResults />} />
          <Route path="/resultcheck" element={<ResultCheck />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/results" element={<Results />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/studymaterial" element={<StudyMaterial />} />
          <Route path="/studymaterial/class10" element={<Class10 />} />
          <Route path="/studymaterial/:class10science/:class10Science" element={<Class10Science />} />
          <Route path="/studymaterial/:class10/:class10science/:class10SciencecbsePYQ" element={<Class10ScienceCbsePYQ />} />
          <Route path="/class10science" element={<Class10Science />} />
          <Route path="/studymaterial/class8" element={<Class8 />} />
          <Route path="/studymaterial/class8" element={<Class8 />} />
          <Route path="/studymaterial/class8/Class8Science" element={<Class8Science />} />
          <Route path="/studymaterial/class8/Class8Mathematics" element={<Class8Mathematics />} />
          <Route path="/studymaterial/class8/Class8SocialScience" element={<Class8SocialScience />} />

          <Route path="/studymaterial/class10/extraresources" element={<SstImportQuestionHalfYearly />} />




          {/* Class 8 CBSE Social Science Chapters - Notes & Class Notes */}
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgricultureChapterNotes" element={<Class8cbseSocialScienceAgricultureChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgricultureClassNotes" element={<Class8cbseSocialScienceAgricultureClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangeChapterNotes" element={<Class8cbseSocialScienceColonialismAndUrbanChangeChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangeClassNotes" element={<Class8cbseSocialScienceColonialismAndUrbanChangeClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesChapterNotes" element={<Class8cbseSocialScienceColonialismRuralAndTribalSocietiesChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes" element={<Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaChapterNotes" element={<Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaClassNotes" element={<Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyChapterNotes" element={<Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyClassNotes" element={<Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesChapterNotes" element={<Class8cbseSocialScienceHumanResourcesChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesClassNotes" element={<Class8cbseSocialScienceHumanResourcesClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaChapterNotes" element={<Class8cbseSocialScienceImpactOfBritishRuleOnIndiaChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaClassNotes" element={<Class8cbseSocialScienceImpactOfBritishRuleOnIndiaClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadChapterNotes" element={<Class8cbseSocialScienceIndiaMarchesAheadChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadClassNotes" element={<Class8cbseSocialScienceIndiaMarchesAheadClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesChapterNotes" element={<Class8cbseSocialScienceManufacturingIndustriesChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesClassNotes" element={<Class8cbseSocialScienceManufacturingIndustriesClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesChapterNotes" element={<Class8cbseSocialScienceMineralAndEnergyResourcesChapterNotes />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes" element={<Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesClassNotes" element={<Class8cbseSocialScienceMineralAndEnergyResourcesClassNotes />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857ClassNotes" element={<Class8cbseSocialScienceTheFirstWarOfIndependence1857ClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterChapterNotes" element={<Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterClassNotes" element={<Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeChapterNotes" element={<Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeClassNotes" element={<Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifeClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionChapterNotes" element={<Class8cbseSocialScienceOurConstitutionChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionClassNotes" element={<Class8cbseSocialScienceOurConstitutionClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentChapterNotes" element={<Class8cbseSocialScienceResourcesUtilisationAndDevelopmentChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentClassNotes" element={<Class8cbseSocialScienceResourcesUtilisationAndDevelopmentClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedChapterNotes" element={<Class8cbseSocialScienceSafeguardingTheMarginalisedChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedClassNotes" element={<Class8cbseSocialScienceSafeguardingTheMarginalisedClassNotes />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions" element={<Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions" element={<Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions" element={<Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions" element={<Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceAgriculturePracticeQuestions" element={<Class8cbseSocialScienceAgriculturePracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions" element={<Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceHumanResourcesPracticeQuestions" element={<Class8cbseSocialScienceHumanResourcesPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodPracticeQuestions" element={<Class8cbseSocialScienceTheModernPeriodPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions" element={<Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismRuralAndTribalSocietiesPracticeQuestions" element={<Class8cbseSocialScienceColonialismRuralAndTribalSocietiesPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheFirstWarOfIndependence1857PracticeQuestions" element={<Class8cbseSocialScienceTheFirstWarOfIndependence1857PracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceImpactOfBritishRuleOnIndiaPracticeQuestions" element={<Class8cbseSocialScienceImpactOfBritishRuleOnIndiaPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions" element={<Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementPracticeQuestions" element={<Class8cbseSocialScienceTheNationalistMovementPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions" element={<Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceOurConstitutionPracticeQuestions" element={<Class8cbseSocialScienceOurConstitutionPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions" element={<Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions" element={<Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions" element={<Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions" element={<Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions" element={<Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions" element={<Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedChapterNotes" element={<Class8cbseSocialScienceSocialJusticeAndTheMarginalisedChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceSocialJusticeAndTheMarginalisedClassNotes" element={<Class8cbseSocialScienceSocialJusticeAndTheMarginalisedClassNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodChapterNotes" element={<Class8cbseSocialScienceTheModernPeriodChapterNotes />} />
          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheModernPeriodClassNotes" element={<Class8cbseSocialScienceTheModernPeriodClassNotes />} />
      



          <Route path="/studymaterial/class8/Class8English" element={<Class8English />} />
          <Route path="/studymaterial/class8/Class8EnglishGrammar" element={<Class8EnglishGrammar />} />
          <Route path="/studymaterial/class7icse" element={<Class7icse />} />
          <Route path="/studymaterial/class7icse/Class7icseScience" element={<Class7icseScience />} />
          <Route path="/studymaterial/class7icse/Class7icseMathematics" element={<Class7icseMathematics />} />
          <Route path="/studymaterial/class7icse/Class7icseSocialScience" element={<Class7icseSocialScience />} />
          <Route path="/studymaterial/class7icse/Class7icseEnglish" element={<Class7icseEnglish />} />
          <Route path="/studymaterial/class7icse/Class7icseEnglishGrammar" element={<Class7icseEnglishGrammar />} />
          <Route path="/studymaterial/class7icse/Class7icseCivicsHistory" element={<Class7icseCivicsHistory />} />
<Route path="/studymaterial/class6icse/Class6icseSocialScience" element={<Class6icseSocialScience />} />
<Route path="/studymaterial/class6icse/Class6icseEnglish" element={<Class6icseEnglish />} />
<Route path="/studymaterial/class6icse/Class6icseEnglishGrammar" element={<Class6icseEnglishGrammar />} />
<Route path="/studymaterial/class7icse" element={<Class7icse />} />
<Route path="/studymaterial/class7icse/Class7icseScience" element={<Class7icseScience />} />
<Route path="/studymaterial/class7icse/Class7icseMathematics" element={<Class7icseMathematics />} />
<Route path="/studymaterial/class7icse/Class7icseSocialScience" element={<Class7icseSocialScience />} />
<Route path="/studymaterial/class7icse/Class7icseEnglish" element={<Class7icseEnglish />} />
<Route path="/studymaterial/class7icse/Class7icseEnglishGrammar" element={<Class7icseEnglishGrammar />} />
<Route path="/studymaterial/class10/Class10Geography" element={<Class10Geography />} />
<Route path="/studymaterial/class10/Class10Geography/Class10GeographyResourcesAndDevelopment" element={<Class10GeographyResourcesAndDevelopment />} />
<Route path="/studymaterial/class10/Class10Geography/Class10GeographyForestandWildlifeResources" element={<Class10GeographyForestandWildlifeResources />} />
<Route path="/studymaterial/class10/Class10Geography/Class10GeographyWaterResources" element={<Class10GeographyWaterResources />} />
<Route path="/studymaterial/class10/Class10Geography/Class10GeographyAgriculture" element={<Class10GeographyAgriculture />} />
<Route path="/studymaterial/class10/Class10Geography/Class10GeographyMineralsAndEnergyResources" element={<Class10GeographyMineralsAndEnergyResources />} />
<Route path="/studymaterial/class10/Class10Geography/Class10GeographyManufacturingIndustries" element={<Class10GeographyManufacturingIndustries />} />
<Route path="/studymaterial/class10/Class10Geography/Class10GeographyLifelinesOfNationalEconomy" element={<Class10GeographyLifelinesOfNationalEconomy />} />


          {/* Class 8 ICSE Subject Pages */}
          <Route path="/studymaterial/class8icse" element={<Class8icse />} />
<Route path="/studymaterial/class8icse/Class8icseScience" element={<Class8icseScience />} />
<Route path="/studymaterial/class8icse/Class8icseMathematics" element={<Class8icseMathematics />} />
<Route path="/studymaterial/class8icse/Class8icseSocialScience" element={<Class8icseSocialScience />} />
<Route path="/studymaterial/class8icse/Class8icseEnglish" element={<Class8icseEnglish />} />
<Route path="/studymaterial/class8icse/Class8icseEnglishGrammar" element={<Class8icseEnglishGrammar />} />

          {/* Class 9 CBSE Subject Pages */}
          <Route path="/studymaterial/class9" element={<Class9 />} />
<Route path="/studymaterial/class9/Class9Science" element={<Class9Science />} />
<Route path="/studymaterial/class9/Class9Mathematics" element={<Class9Mathematics />} />
<Route path="/studymaterial/class9/Class9English" element={<Class9English />} />
<Route path="/studymaterial/class9/Class9EnglishGrammar" element={<Class9EnglishGrammar />} />
<Route path="/Studymaterial/Class9/Class9Science/Class9ScienceIsMatterAroundUsPure" element={<Class9ScienceIsMatterAroundUsPure />} />

          {/* Class 9 ICSE Subject Pages */}
          <Route path="/studymaterial/class9icse" element={<Class9icse />} />
<Route path="/studymaterial/class9icse/Class9icseScience" element={<Class9icseScience />} />
<Route path="/studymaterial/class9icse/Class9icseMathematics" element={<Class9icseMathematics />} />
<Route path="/studymaterial/class9icse/Class9icseSocialScience" element={<Class9icseSocialScience />} />
<Route path="/studymaterial/class9icse/Class9icseEnglish" element={<Class9icseEnglish />} />
<Route path="/studymaterial/class9icse/Class9icseEnglishGrammar" element={<Class9icseEnglishGrammar />} />
<Route path="/studymaterial/class10icse" element={<Class10icse />} />
<Route path="/studymaterial/class10icse/Class10icseScience" element={<Class10icseScience />} />
<Route path="/studymaterial/class10icse/Class10icseMathematics" element={<Class10icseMathematics />} />
<Route path="/studymaterial/class10icse/Class10icseEnglish" element={<Class10icseEnglish />} />
<Route path="/studymaterial/class10icse/Class10icseEnglishGrammar" element={<Class10icseEnglishGrammar />} />
<Route path="/studymaterial/class10icse/Class10icseHistory" element={<Class10icseHistory />} />

          {/* Class 10 ICSE History Chapters - Notes & Class Notes */}
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryTheFirstWarOfIndependence1857Notes" element={<Class10IcseHistoryTheFirstWarOfIndependence1857Notes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryTheFirstWarOfIndependence1857ClassNotes" element={<Class10IcseHistoryTheFirstWarOfIndependence1857ClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressNotes" element={<Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressClassNotes" element={<Class10IcseHistoryFactorsLeadingToTheGrowthOfNationalismAndFoundationOfTheIndianNationalCongressClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsNotes" element={<Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsClassNotes" element={<Class10IcseHistoryObjectivesAndMethodsOfStruggleOfTheEarlyNationalistsClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsNotes" element={<Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsClassNotes" element={<Class10IcseHistorySecondPhaseOfTheIndianNationalMovementPartitionOfBengalAndOtherDevelopmentsClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryMuslimLeagueAndItsObjectivesNotes" element={<Class10IcseHistoryMuslimLeagueAndItsObjectivesNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryMuslimLeagueAndItsObjectivesClassNotes" element={<Class10IcseHistoryMuslimLeagueAndItsObjectivesClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsNotes" element={<Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsClassNotes" element={<Class10IcseHistoryNationalMovementDuringTheFirstWorldWarLucknowPactAndOtherDevelopmentsClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryNationalMovement1919To1934Notes" element={<Class10IcseHistoryNationalMovement1919To1934Notes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryNationalMovement1919To1934ClassNotes" element={<Class10IcseHistoryNationalMovement1919To1934ClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementNotes" element={<Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementClassNotes" element={<Class10IcseHistoryTheCrippsMissionAndTheQuitIndiaMovementClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyNotes" element={<Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyClassNotes" element={<Class10IcseHistorySubhasChandraBoseForwardBlocAndTheIndianNationalArmyClassNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryIndependenceAndThePartitionOfIndiaNotes" element={<Class10IcseHistoryIndependenceAndThePartitionOfIndiaNotes />} />
          <Route path="/studymaterial/class10icse/Class10icseHistory/Class10IcseHistoryIndependenceAndThePartitionOfIndiaClassNotes" element={<Class10IcseHistoryIndependenceAndThePartitionOfIndiaClassNotes />} />
<Route path="/studymaterial/class10icse/Class10icseGeography" element={<Class10icseGeography />} />
<Route path="/studymaterial/class10icse/Class10icseCivics" element={<Class10icseCivics />} />
<Route path="/studymaterial/class10/Class10Civics" element={<Class10Civics />} />
<Route path="/Studymaterial/class10/Class10Civics/Class10CivicsGenderReligionandCaste" element={<Class10CivicsGenderReligionandCaste />} />



<Route path="/Studymaterial/class10icse/class10icsecivics/Class10icseCivicsTheUnionParliament" element={<Class10icseCivicsTheUnionParliament />} />

          {/* Class 11 CBSE Subject Pages */}
          <Route path="/studymaterial/class11" element={<Class11 />} />
<Route path="/studymaterial/class11/Class11Science" element={<Class11Science />} />
<Route path="/studymaterial/class11/Class11Mathematics" element={<Class11Mathematics />} />
<Route path="/studymaterial/class11/Class11SocialScience" element={<Class11SocialScience />} />
<Route path="/studymaterial/class11/Class11English" element={<Class11English />} />
<Route path="/studymaterial/class11/Class11EnglishGrammar" element={<Class11EnglishGrammar />} />

          {/* Class 12 CBSE Subject Pages */}
          <Route path="/studymaterial/class12" element={<Class12 />} />
<Route path="/studymaterial/class12/Class12Science" element={<Class12Science />} />
<Route path="/studymaterial/class12/Class12Mathematics" element={<Class12Mathematics />} />
          <Route path="/studymaterial/class11icse" element={<Class11icse />} />
          <Route path="/studymaterial/class11icse/Class11icseScience" element={<Class11icseScience />} />
          <Route path="/studymaterial/class11icse/Class11icseMathematics" element={<Class11icseMathematics />} />
          <Route path="/studymaterial/class11icse/Class11icseSocialScience" element={<Class11icseSocialScience />} />
          <Route path="/studymaterial/class11icse/Class11icseEnglish" element={<Class11icseEnglish />} />
          <Route path="/studymaterial/class11icse/Class11icseEnglishGrammar" element={<Class11icseEnglishGrammar />} />
          {/* Class 12 ICSE Subject Pages */}
          <Route path="/studymaterial/class12icse" element={<Class12icse />} />
<Route path="/studymaterial/class12icse/Class12icseScience" element={<Class12icseScience />} />
<Route path="/studymaterial/class12icse/Class12icseMathematics" element={<Class12icseMathematics />} />
<Route path="/studymaterial/class12icse/Class12icseSocialScience" element={<Class12icseSocialScience />} />
<Route path="/studymaterial/class12icse/Class12icseEnglish" element={<Class12icseEnglish />} />
<Route path="/studymaterial/class12icse/Class12icseEnglishGrammar" element={<Class12icseEnglishGrammar />} />

          <Route path="/vardaan-junior" element={<VardaanJunior />} />
          <Route path="/vardaan-senior" element={<VardaanSenior />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/testpaper" element={<TestPaper />} />
          <Route path="/book-solutions" element={<BookSolutions />} />
          <Route path="/ncertbooks" element={<NcertBooks />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/studymaterial" element={<StudyMaterial />} />
          <Route path="/studymaterial/class10" element={<Class10 />} />
          <Route path="/studymaterial/:class10science/:class10Science" element={<Class10Science />} />
          <Route path="/studymaterial/:class10/:class10science/:class10SciencecbsePYQ" element={<Class10ScienceCbsePYQ />} />

          <Route path="/class10science" element={<Class10Science />} />
          <Route path="/studymaterial/Class8/Class8Science/Class8ScienceMetalandNonmetal" element={<Class8ScienceMetalandNonmetal />} />
          <Route path="/studymaterial/class10/Class10Economics" element={<Class10Economics />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsDevelopment" element={<Class10EconomicsDevelopment />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsSectorsOfTheIndianEconomy" element={<Class10EconomicsSectorsOfTheIndianEconomy />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsMoneyAndCredit" element={<Class10EconomicsMoneyAndCredit />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsGlobalisationAndTheIndianEconomy" element={<Class10EconomicsGlobalisationAndTheIndianEconomy />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsConsumerRights" element={<Class10EconomicsConsumerRights />} />

          <Route path="/studymaterial/class10/Class10Geography/Class10GeographyResourcesAndDevelopmentClassNotes" element={<Class10GeographyResourcesAndDevelopmentClassNotes />} />
          <Route path="/studymaterial/class10/Class10Geography/Class10GeographyForestandWildlifeResourcesClassNotes" element={<Class10GeographyForestandWildlifeResourcesClassNotes />} />
          <Route path="/studymaterial/class10/Class10Geography/Class10GeographyWaterResourcesClassNotes" element={<Class10GeographyWaterResourcesClassNotes />} />
          <Route path="/studymaterial/class10/Class10Geography/Class10GeographyMineralsAndEnergyResourcesClassNotes" element={<Class10GeographyMineralsAndEnergyResourcesClassNotes />} />
          <Route path="/studymaterial/class10/Class10Geography/Class10GeographyManufacturingIndustriesClassNotes" element={<Class10GeographyManufacturingIndustriesClassNotes />} />
          <Route path="/studymaterial/class10/Class10Geography/Class10GeographyLifelinesOfNationalEconomyClassNotes" element={<Class10GeographyLifelinesOfNationalEconomyClassNotes />} />
          <Route path="/studymaterial/class10/Class10Geography/Class10GeographyAgricultureClassNotes" element={<Class10GeographyAgricultureClassNotes />} />
        
        
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsDevelopmentClassNotes" element={<Class10EconomicsDevelopmentClassNotes />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsSectorsOfTheIndianEconomyClassNotes" element={<Class10EconomicsSectorsOfTheIndianEconomyClassNotes />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsMoneyAndCreditClassNotes" element={<MoneyAndCreditChapter />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsGlobalisationAndTheIndianEconomyClassNotes" element={<GlobalisationAndTheIndianEconomyChapter />} />
          <Route path="/studymaterial/class10/Class10Economics/Class10EconomicsConsumerRightsClassNotes" element={<ConsumerRightsChapter />} /> 
                

          <Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementClassNotes" element={<Class8cbseSocialScienceTheNationalistMovement1870To1947ClassNotes />} />
<Route path="/studymaterial/class8/Class8SocialScience/Class8cbseSocialScienceTheNationalistMovementChapterNotes" element={<Class8cbseSocialScienceTheNationalistMovement1870To1947ChapterNotes />} />
<Route path="/studymaterial/class7" element={<Class7 />} />
<Route path="/studymaterial/class7/Class7CbseSst" element={<Class7CbseSst />} />
<Route path="/studymaterial/class7/Class7CbseSstComponentsOfEnvironmentDetailedNotes" element={<Class7CbseSstComponentsOfEnvironmentDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstComponentsOfEnvironmentClassNotes" element={<Class7CbseSstComponentsOfEnvironmentClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstAirAroundUsDetailedNotes" element={<Class7CbseSstAirAroundUsDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstAirAroundUsClassNotes" element={<Class7CbseSstAirAroundUsClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationDetailedNotes" element={<Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationClassNotes" element={<Class7CbseSstHumanEnvironmentSettlementTransportAndCommunicationClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstLandAndThePeopleDetailedNotes" element={<Class7CbseSstLandAndThePeopleDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstLandAndThePeopleClassNotes" element={<Class7CbseSstLandAndThePeopleClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstLifeOnTheEarthDetailedNotes" element={<Class7CbseSstLifeOnTheEarthDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstLifeOnTheEarthClassNotes" element={<Class7CbseSstLifeOnTheEarthClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMajorReligionsDetailedNotes" element={<Class7CbseSstMajorReligionsDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMajorReligionsClassNotes" element={<Class7CbseSstMajorReligionsClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstDelhiSultanateDetailedNotes" element={<Class7CbseSstDelhiSultanateDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstDelhiSultanateClassNotes" element={<Class7CbseSstDelhiSultanateClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMarketsAroundUsDetailedNotes" element={<Class7CbseSstMarketsAroundUsDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMarketsAroundUsClassNotes" element={<Class7CbseSstMarketsAroundUsClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMediaTheMainstayOfDemocracyDetailedNotes" element={<Class7CbseSstMediaTheMainstayOfDemocracyDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMediaTheMainstayOfDemocracyClassNotes" element={<Class7CbseSstMediaTheMainstayOfDemocracyClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstAdvertisingAndDemocracyDetailedNotes" element={<Class7CbseSstAdvertisingAndDemocracyDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstAdvertisingAndDemocracyClassNotes" element={<Class7CbseSstAdvertisingAndDemocracyClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMedievalPeriodDetailedNotes" element={<Class7CbseSstMedievalPeriodDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstMedievalPeriodClassNotes" element={<Class7CbseSstMedievalPeriodClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstDemocracyAndEqualityDetailedNotes" element={<Class7CbseSstDemocracyAndEqualityDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstDemocracyAndEqualityClassNotes" element={<Class7CbseSstDemocracyAndEqualityClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstOurStateGovernmentsDetailedNotes" element={<Class7CbseSstOurStateGovernmentsDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstOurStateGovernmentsClassNotes" element={<Class7CbseSstOurStateGovernmentsClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstEmergenceOfIndependentStatesDetailedNotes" element={<Class7CbseSstEmergenceOfIndependentStatesDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstEmergenceOfIndependentStatesClassNotes" element={<Class7CbseSstEmergenceOfIndependentStatesClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstRegionalPowersDetailedNotes" element={<Class7CbseSstRegionalPowersDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstRegionalPowersClassNotes" element={<Class7CbseSstRegionalPowersClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheEarthAndTheChangesOnItDetailedNotes" element={<Class7CbseSstTheEarthAndTheChangesOnItDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheEarthAndTheChangesOnItClassNotes" element={<Class7CbseSstTheEarthAndTheChangesOnItClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheMughalEmpireDetailedNotes" element={<Class7CbseSstTheMughalEmpireDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheMughalEmpireClassNotes" element={<Class7CbseSstTheMughalEmpireClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaDetailedNotes" element={<Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaClassNotes" element={<Class7CbseSstTheRiseOfSmallKingdomsInNorthIndiaClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaDetailedNotes" element={<Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaClassNotes" element={<Class7CbseSstTheRiseOfSmallKingdomsInSouthIndiaClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheSurfaceAndInteriorOfTheEarthDetailedNotes" element={<Class7CbseSstTheSurfaceAndInteriorOfTheEarthDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTheSurfaceAndInteriorOfTheEarthClassNotes" element={<Class7CbseSstTheSurfaceAndInteriorOfTheEarthClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTurkishInvasionsInNorthIndiaDetailedNotes" element={<Class7CbseSstTurkishInvasionsInNorthIndiaDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstTurkishInvasionsInNorthIndiaClassNotes" element={<Class7CbseSstTurkishInvasionsInNorthIndiaClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstUnpackingGenderDetailedNotes" element={<Class7CbseSstUnpackingGenderDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstUnpackingGenderClassNotes" element={<Class7CbseSstUnpackingGenderClassNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstWaterSurroundingTheEarthDetailedNotes" element={<Class7CbseSstWaterSurroundingTheEarthDetailedNotes />} />
<Route path="/studymaterial/class7/Class7CbseSstWaterSurroundingTheEarthClassNotes" element={<Class7CbseSstWaterSurroundingTheEarthClassNotes />} />
        </Routes> 
        <ToastContainer />
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router
      future={{
        // Enable the new behavior for v7
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </Router>
  );
}


function RedirectToCategory() {
  const { category } = useParams();
  return <Navigate to={`/studymaterial/${category}`} replace />;
}
