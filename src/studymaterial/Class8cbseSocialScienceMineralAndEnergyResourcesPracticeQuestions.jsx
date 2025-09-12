import React from 'react';

const practiceQuestions = [
  { question: 'What are minerals? Give two examples.', answer: 'Minerals are naturally occurring substances found in the earth. Examples: Iron, Coal.' },
  { question: 'State two uses of energy resources.', answer: 'Energy resources are used for electricity generation and running vehicles.' },
  { question: 'How can we conserve mineral resources?', answer: 'By recycling, using substitutes, and reducing wastage.' },
  { question: 'What is the difference between metallic and non-metallic minerals?', answer: 'Metallic minerals contain metals (e.g., iron), non-metallic do not (e.g., limestone).' },
  { question: 'Why is coal called a fossil fuel?', answer: 'Coal is formed from the remains of plants over millions of years.' }
];

const Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Mineral and Energy Resources</h1>
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

export default Class8cbseSocialScienceMineralAndEnergyResourcesPracticeQuestions;
