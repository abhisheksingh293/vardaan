import React from "react";

const SocialScienceChapter = ({ chapterTitle, type }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 p-6">
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-yellow-600 mb-6">{chapterTitle} {type}</h1>
      <p className="text-lg text-gray-700 mb-4">This is a placeholder for {chapterTitle} {type}.</p>
    </div>
  </div>
);

export default SocialScienceChapter;
