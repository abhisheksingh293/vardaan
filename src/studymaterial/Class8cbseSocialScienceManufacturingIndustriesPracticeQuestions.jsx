import React from 'react';

const practiceQuestions = [
  { question: 'What are manufacturing industries?', answer: 'Industries that process raw materials into finished goods.' },
  { question: 'Give two examples of manufacturing industries.', answer: 'Textile industry and automobile industry.' },
  { question: 'What is the importance of small-scale industries?', answer: 'They provide employment and utilize local resources.' },
  { question: 'List two problems faced by Indian industries.', answer: 'Power shortage and outdated technology.' },
  { question: 'How can pollution from industries be controlled?', answer: 'By using cleaner technologies and proper waste management.' }
];

const Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Manufacturing Industries</h1>
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

export default Class8cbseSocialScienceManufacturingIndustriesPracticeQuestions;
