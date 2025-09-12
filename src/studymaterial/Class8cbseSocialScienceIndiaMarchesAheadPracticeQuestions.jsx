import React from 'react';

const practiceQuestions = [
  { question: 'What major changes did India experience after independence?', answer: 'Economic development, social reforms, and political stability.' },
  { question: 'Name one major program launched for rural development.', answer: 'Green Revolution.' },
  { question: 'How did India promote unity after independence?', answer: 'By adopting a secular constitution and promoting national integration.' },
  { question: 'List two challenges faced by India after independence.', answer: 'Poverty and illiteracy.' },
  { question: 'What is the significance of the Constitution of India?', answer: 'It provides the framework for governance and rights.' }
];

const Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: India Marches Ahead</h1>
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

export default Class8cbseSocialScienceIndiaMarchesAheadPracticeQuestions;
