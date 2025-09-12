import React from 'react';

const practiceQuestions = [
  { question: 'When did the Nationalist Movement in India begin?', answer: 'Around 1870.' },
  { question: 'Name two leaders of the Indian National Movement.', answer: 'Mahatma Gandhi and Jawaharlal Nehru.' },
  { question: 'What was the main aim of the Nationalist Movement?', answer: 'To gain independence from British rule.' },
  { question: 'List two methods used by nationalists.', answer: 'Non-violent protests and boycotts.' },
  { question: 'What is the significance of the Quit India Movement?', answer: 'It was a mass protest demanding an end to British rule in 1942.' }
];

const Class8cbseSocialScienceTheNationalistMovementPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: The Nationalist Movement (1870 to 1947)</h1>
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

export default Class8cbseSocialScienceTheNationalistMovementPracticeQuestions;
