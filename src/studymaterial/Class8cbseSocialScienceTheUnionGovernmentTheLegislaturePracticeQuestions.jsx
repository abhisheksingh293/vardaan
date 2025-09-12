import React from 'react';

const practiceQuestions = [
  { question: 'What is the function of the Legislature?', answer: 'The Legislature makes laws for the country.' },
  { question: 'Name the two houses of the Indian Parliament.', answer: 'Lok Sabha and Rajya Sabha.' },
  { question: 'Who presides over the Lok Sabha?', answer: 'The Speaker.' },
  { question: 'What is a bill?', answer: 'A bill is a proposed law presented in Parliament.' },
  { question: 'How are members of the Lok Sabha elected?', answer: 'They are directly elected by the people.' }
];

const Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: The Union Government - The Legislature</h1>
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

export default Class8cbseSocialScienceTheUnionGovernmentTheLegislaturePracticeQuestions;
