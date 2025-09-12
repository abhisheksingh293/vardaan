import React from 'react';

const practiceQuestions = [
  { question: 'What is the importance of forests?', answer: 'Forests provide oxygen, habitat for wildlife, raw materials, and prevent soil erosion.' },
  { question: 'List two causes of deforestation.', answer: 'Expansion of agriculture and urbanization.' },
  { question: 'What are the main threats to wildlife?', answer: 'Habitat destruction, poaching, and pollution.' },
  { question: 'How can wildlife be protected?', answer: 'By creating protected areas and enforcing laws against poaching.' },
  { question: 'What is afforestation?', answer: 'Planting new trees to increase forest area.' }
];

const Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Natural Resources - Vegetation and Wildlife</h1>
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

export default Class8cbseSocialScienceNaturalResourcesVegetationAndWildlifePracticeQuestions;
