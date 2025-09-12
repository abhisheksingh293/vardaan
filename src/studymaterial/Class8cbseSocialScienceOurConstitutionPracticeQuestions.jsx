import React from 'react';

const practiceQuestions = [
  { question: 'What is a constitution?', answer: 'A constitution is a set of fundamental principles or established precedents according to which a state is governed.' },
  { question: 'Why is the Indian Constitution called the longest written constitution?', answer: 'Because it contains detailed provisions and is the lengthiest in the world.' },
  { question: 'List two features of the Indian Constitution.', answer: 'Federal structure and parliamentary form of government.' },
  { question: 'Who is known as the Father of the Indian Constitution?', answer: 'Dr. B. R. Ambedkar.' },
  { question: 'What is the importance of the Preamble?', answer: 'It states the objectives and philosophy of the Constitution.' }
];

const Class8cbseSocialScienceOurConstitutionPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Our Constitution</h1>
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

export default Class8cbseSocialScienceOurConstitutionPracticeQuestions;
