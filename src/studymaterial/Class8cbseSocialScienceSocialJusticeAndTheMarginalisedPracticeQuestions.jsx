import React from 'react';

const practiceQuestions = [
  { question: 'What is social justice?', answer: 'Social justice means equal rights and opportunities for all sections of society.' },
  { question: 'Who are the marginalised?', answer: 'People who are pushed to the edge of society and denied access to resources.' },
  { question: 'List two government schemes for social justice.', answer: 'Reservation in education/jobs and scholarships for SC/ST/OBC.' },
  { question: 'Why is education important for the marginalised?', answer: 'It empowers them and improves their quality of life.' },
  { question: 'How can we promote social justice?', answer: 'By treating everyone equally and supporting inclusive policies.' }
];

const Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Social Justice and the Marginalised</h1>
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

export default Class8cbseSocialScienceSocialJusticeAndTheMarginalisedPracticeQuestions;
