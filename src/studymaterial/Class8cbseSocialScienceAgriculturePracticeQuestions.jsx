import React from 'react';

const practiceQuestions = [
  { question: 'What is agriculture?', answer: 'Agriculture is the practice of cultivating the soil, growing crops, and raising animals for food and other products.' },
  { question: 'Name two types of farming.', answer: 'Subsistence farming and commercial farming.' },
  { question: 'Why is irrigation important?', answer: 'Irrigation provides water to crops, especially in areas with low rainfall.' },
  { question: 'List two problems faced by Indian farmers.', answer: 'Small landholdings and lack of modern technology.' },
  { question: 'What are cash crops? Give examples.', answer: 'Crops grown for sale rather than consumption. Examples: Cotton, Sugarcane.' }
];

const Class8cbseSocialScienceAgriculturePracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Agriculture</h1>
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

export default Class8cbseSocialScienceAgriculturePracticeQuestions;
