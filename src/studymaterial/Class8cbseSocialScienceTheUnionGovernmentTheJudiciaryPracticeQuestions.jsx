import React from 'react';

const practiceQuestions = [
  { question: 'Who is the head of the Indian Judiciary?', answer: 'The Chief Justice of India.' },
  { question: 'Name the highest court in India.', answer: 'The Supreme Court of India.' },
  { question: 'What is the main function of the Judiciary?', answer: 'To interpret laws and deliver justice.' },
  { question: 'List two types of courts in India.', answer: 'Supreme Court and High Courts.' },
  { question: 'Why is independence of Judiciary important?', answer: 'To ensure fair and unbiased justice.' }
];

const Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: The Union Government - The Judiciary</h1>
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

export default Class8cbseSocialScienceTheUnionGovernmentTheJudiciaryPracticeQuestions;
