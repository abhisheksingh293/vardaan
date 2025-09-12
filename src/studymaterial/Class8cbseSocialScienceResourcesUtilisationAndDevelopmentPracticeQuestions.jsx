import React from 'react';

const practiceQuestions = [
  {
    question: 'Define resources. Give examples of natural and human-made resources.',
    answer: 'Resources are anything that can be used to satisfy human needs. Natural resources are obtained from nature (e.g., water, soil, minerals), while human-made resources are created by humans (e.g., buildings, machines).'
  },
  {
    question: 'What is sustainable development?',
    answer: 'Sustainable development is using resources in such a way that they meet the needs of the present without compromising the ability of future generations to meet their own needs.'
  },
  {
    question: 'Explain the importance of resource conservation.',
    answer: 'Resource conservation ensures that resources are used efficiently and responsibly, helping to preserve them for future generations.'
  },
  {
    question: 'Differentiate between renewable and non-renewable resources.',
    answer: 'Renewable resources can be replenished naturally (e.g., sunlight, wind), while non-renewable resources are finite and cannot be replaced easily (e.g., coal, petroleum).'
  },
  {
    question: 'List two ways to conserve resources at home.',
    answer: 'Examples: Turning off lights when not in use, recycling waste, using water judiciously.'
  }
];

const Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions = () => (
  <div className="practice-questions">
    <h1>Practice Questions: Resources - Utilisation and Development</h1>
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

export default Class8cbseSocialScienceResourcesUtilisationAndDevelopmentPracticeQuestions;
