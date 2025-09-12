import React, { useState } from "react";

const Class8Science = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  // ✅ All chapter links stored in one place
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

  // ✅ Reusable button component
  const ActionButton = ({ label, link }) => (
    <button
      onClick={() => (link ? (window.location.href = link) : alert("Link not added yet"))}
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
                    <ActionButton label="Previous Year Questions" link={chapter.links.pyq} />
                    <ActionButton label="Chapter Notes" link={chapter.links.chapterNotes} />
                    <ActionButton label="Class Notes" link={chapter.links.classNotes} />
                    <ActionButton label="Mind Map" link={chapter.links.mindMap} />
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

export default Class8Science;
