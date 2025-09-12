import React from 'react';

const practiceQuestions = [
  { question: 'What are Fundamental Rights?', answer: 'Basic human rights guaranteed to all citizens by the Constitution.' },
  { question: 'List two Fundamental Duties.', answer: 'Respect the Constitution and cherish the noble ideals of the freedom struggle.' },
  { question: 'What are Directive Principles of State Policy?', answer: 'Guidelines for the government to establish a just society.' },
  { question: 'Why are Fundamental Rights important?', answer: 'They protect the liberty and dignity of individuals.' },
  { question: 'Who can enforce Fundamental Rights?', answer: 'The Supreme Court and High Courts.' }
];

const Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Fundamental Rights, Duties and Directive Principles</h1>
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

export default Class8cbseSocialScienceFundamentalRightsDutiesAndDirectivePrinciplesOfStatePolicyPracticeQuestions;
