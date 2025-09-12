import React from 'react';

const practiceQuestions = [
  { question: 'What is urbanization?', answer: 'Urbanization is the growth of cities and towns.' },
  { question: 'List two effects of colonialism on Indian cities.', answer: 'Growth of new cities and decline of traditional towns.' },
  { question: 'How did the British change urban infrastructure?', answer: 'They built railways, roads, and administrative buildings.' },
  { question: 'What is meant by segregation in colonial cities?', answer: 'Separation of areas for Europeans and Indians.' },
  { question: 'Name one major urban center developed by the British.', answer: 'Mumbai (Bombay).' }
];

const Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Colonialism and Urban Change</h1>
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

export default Class8cbseSocialScienceColonialismAndUrbanChangePracticeQuestions;
