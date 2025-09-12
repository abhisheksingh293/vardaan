import React from 'react';

const practiceQuestions = [
  { question: 'Who is the head of the Union Executive?', answer: 'The President of India.' },
  { question: 'Name two main functions of the Prime Minister.', answer: 'Heads the government and leads the Cabinet.' },
  { question: 'What is the Council of Ministers?', answer: 'A body of ministers headed by the Prime Minister to assist in administration.' },
  { question: 'How is the President elected?', answer: 'By an electoral college consisting of elected members of Parliament and State Legislatures.' },
  { question: 'What is the tenure of the President?', answer: 'Five years.' }
];

const Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: The Union Government - The Executive</h1>
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

export default Class8cbseSocialScienceTheUnionGovernmentTheExecutivePracticeQuestions;
