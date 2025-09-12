import React from 'react';

const practiceQuestions = [
  { question: 'Who are the marginalised?', answer: 'Marginalised are those who are denied equal opportunities and rights.' },
  { question: 'List two ways to safeguard the marginalised.', answer: 'Legal protection and reservation policies.' },
  { question: 'What is the role of the government in safeguarding the marginalised?', answer: 'To implement laws and schemes for their welfare.' },
  { question: 'Name one marginalised group in India.', answer: 'Scheduled Castes (SC).' },
  { question: 'Why is awareness important for safeguarding the marginalised?', answer: 'Awareness helps them claim their rights and benefits.' }
];

const Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Safeguarding the Marginalised</h1>
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

export default Class8cbseSocialScienceSafeguardingTheMarginalisedPracticeQuestions;
