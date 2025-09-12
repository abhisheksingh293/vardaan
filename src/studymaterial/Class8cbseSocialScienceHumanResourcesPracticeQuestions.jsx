import React from 'react';

const practiceQuestions = [
  { question: 'Who are human resources?', answer: 'People who are able to work and contribute to the economy.' },
  { question: 'Why is education important for human resources?', answer: 'Education improves skills and productivity.' },
  { question: 'What is migration?', answer: 'Movement of people from one place to another.' },
  { question: 'List two factors affecting population distribution.', answer: 'Climate and availability of jobs.' },
  { question: 'How can we improve the quality of human resources?', answer: 'By providing better education and healthcare.' }
];

const Class8cbseSocialScienceHumanResourcesPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Human Resources</h1>
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

export default Class8cbseSocialScienceHumanResourcesPracticeQuestions;
