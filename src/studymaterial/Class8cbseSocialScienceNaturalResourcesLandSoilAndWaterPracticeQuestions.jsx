import React from 'react';

const practiceQuestions = [
  { question: 'What are the main types of land resources?', answer: 'The main types are forests, pastures, cropland, and wasteland.' },
  { question: 'Explain soil erosion and its causes.', answer: 'Soil erosion is the removal of topsoil by wind, water, or human activity. Causes include deforestation, overgrazing, and improper farming.' },
  { question: 'How can water resources be conserved?', answer: 'By rainwater harvesting, drip irrigation, and avoiding water wastage.' },
  { question: 'What are the effects of over-irrigation?', answer: 'Over-irrigation can lead to waterlogging and soil salinity.' },
  { question: 'Why is land considered an important resource?', answer: 'Land provides space for agriculture, industries, and habitation.' }
];

const Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Natural Resources - Land, Soil and Water</h1>
    <ol>
      {practiceQuestions.map((q, i) => (
        <li key={i} className="mb-4">
          <strong>Q{i + 1}: {q.question}</strong>
          <br />
          <span className="text-gray-700">Ans: {q.answer}</span>
        </li>
      ))}
    </ol>
  </div>
);

export default Class8cbseSocialScienceNaturalResourcesLandSoilAndWaterPracticeQuestions;
