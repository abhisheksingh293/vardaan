import React from 'react';

const practiceQuestions = [
  { question: 'What is meant by the Modern Period?', answer: 'The Modern Period refers to the time in history marked by significant social, political, and economic changes, usually from the 18th century onwards.' },
  { question: 'Name one major event that marked the beginning of the Modern Period in India.', answer: 'The establishment of British rule in India.' },
  { question: 'How did the Modern Period affect Indian society?', answer: 'It brought about changes in administration, education, and social structure.' },
  { question: 'What is the importance of studying the Modern Period?', answer: 'It helps us understand the changes that shaped present-day India.' },
  { question: 'Who were the main European powers in India during the Modern Period?', answer: 'The British, French, Portuguese, and Dutch.' }
];

const Class8cbseSocialScienceTheModernPeriodPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: The Modern Period</h1>
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

export default Class8cbseSocialScienceTheModernPeriodPracticeQuestions;
