import React from 'react';

const practiceQuestions = [
  { question: 'When was the Company rule established in India?', answer: 'After the Battle of Plassey in 1757.' },
  { question: 'Who was the first Governor-General of India?', answer: 'Warren Hastings.' },
  { question: 'What was the Doctrine of Lapse?', answer: 'A policy by which Indian kingdoms without a male heir were annexed by the British.' },
  { question: 'List two effects of Company rule on Indian society.', answer: 'Loss of traditional rulers and changes in land revenue systems.' },
  { question: 'Name one major revolt against Company rule.', answer: 'The Revolt of 1857.' }
];

const Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Establishment of Company Rule in India</h1>
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

export default Class8cbseSocialScienceEstablishmentOfCompanyRuleInIndiaPracticeQuestions;
