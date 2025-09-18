import React, { useState, useEffect, useRef } from 'react';

// --- THEME DEFINITIONS (As specified in the design document) ---
const themes = {
  sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-text': '#4b5563', '--theme-heading': '#ea580c', '--theme-heading-border': '#f97316', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(249, 115, 22, 0.1)', '--theme-primary': '#f97316', '--theme-primary-hover': '#ea580c', '--theme-primary-light': 'rgba(249, 115, 22, 0.1)', '--theme-hint-bg': '#fffbeb', '--theme-hint-text': '#b45309', '--theme-hint-border': '#fde68a' } },
  oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-text': '#374151', '--theme-heading': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(59, 130, 246, 0.1)', '--theme-primary': '#3b82f6', '--theme-primary-hover': '#2563eb', '--theme-primary-light': 'rgba(59, 130, 246, 0.1)', '--theme-hint-bg': '#e0f2fe', '--theme-hint-text': '#0c4a6e', '--theme-hint-border': '#7dd3fc' } },
  forestGreen: { name: 'Forest Green', previewColor: '#22c55e', cssVars: { '--theme-bg': '#f0fdf4', '--theme-text': '#4b5563', '--theme-heading': '#16a34a', '--theme-heading-border': '#4ade80', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(34, 197, 94, 0.1)', '--theme-primary': '#22c55e', '--theme-primary-hover': '#16a34a', '--theme-primary-light': 'rgba(34, 197, 94, 0.1)', '--theme-hint-bg': '#f7fee7', '--theme-hint-text': '#3f6212', '--theme-hint-border': '#a3e635' } },
  royalPurple: { name: 'Royal Purple', previewColor: '#8b5cf6', cssVars: { '--theme-bg': '#f5f3ff', '--theme-text': '#4b5563', '--theme-heading': '#7c3aed', '--theme-heading-border': '#a78bfa', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(139, 92, 246, 0.1)', '--theme-primary': '#8b5cf6', '--theme-primary-hover': '#7c3aed', '--theme-primary-light': 'rgba(139, 92, 246, 0.1)', '--theme-hint-bg': '#faf5ff', '--theme-hint-text': '#7e22ce', '--theme-hint-border': '#e9d5ff' } },
  midnightBlueD: { name: 'Midnight Blue (D)', previewColor: '#60a5fa', cssVars: { '--theme-bg': '#111827', '--theme-text': '#d1d5db', '--theme-heading': '#60a5fa', '--theme-heading-border': '#3b82f6', '--theme-card-bg': '#1f2937', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#3b82f6', '--theme-primary-hover': '#2563eb', '--theme-primary-light': 'rgba(59, 130, 246, 0.2)', '--theme-hint-bg': '#374151', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#4b5563' } },
  slateGrayD: { name: 'Slate Gray (D)', previewColor: '#94a3b8', cssVars: { '--theme-bg': '#1e293b', '--theme-text': '#e2e8f0', '--theme-heading': '#cbd5e1', '--theme-heading-border': '#94a3b8', '--theme-card-bg': '#334155', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#64748b', '--theme-primary-hover': '#475569', '--theme-primary-light': 'rgba(100, 116, 139, 0.2)', '--theme-hint-bg': '#475569', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#64748b' } },
};

// --- SVG ICONS (As functional components) ---
const HintIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> );
const EyeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg> );
const EyeOffIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg> );
const PaletteIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/><path d="M12 22a7 7 0 1 0-10-10"/><path d="m14.5 4.5-.5 2 .5 2M9.5 17.5l.5-2-.5-2"/></svg> );
const TimerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
const PlayIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>);
const PauseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>);
const ResetIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>);
const ArrowUpIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>);

// --- SOLVED QUESTION PAPER DATA ---
const worksheetData = [
    // Section A: History
    { section: 'A', id: 'a1', type: 'mcq', question: '1. Who was proclaimed the emperor of Germany in 1871 at the Palace of Versailles?', options: ['a) Otto von Bismarck', 'b) Victor Emmanuel II', 'c) Kaiser William I', 'd) Friedrich Wilhelm IV'], answer: 'c) Kaiser William I', hint: 'This happened after the unification of Germany following the Franco-Prussian War.' },
    { section: 'A', id: 'a2', type: 'mcq', question: '2. What was the main objective of the Non-Cooperation Movement?', options: ['a) To gain independence through violent revolt', 'b) To reform the British administration', 'c) To attain self-rule through peaceful means', 'd) To support Simon Commission'], answer: 'c) To attain self-rule through peaceful means', hint: 'Gandhiji advocated for Swaraj through non-violent methods.' },
    { section: 'A', id: 'a3', type: 'mcq', question: '3. Which one of the following was not a feature of the Treaty of Vienna 1815?', options: ['a) Austria got control of northern Italy', 'b) Russia got Polish territories', 'c) France lost its territories', 'd) Germany was unified'], answer: 'd) Germany was unified', hint: 'The Treaty aimed to restore the old monarchies, not create new unified nations. German unification occurred much later.' },
    { section: 'A', id: 'a4', type: 'mcq', question: '4. Which of the following was the reason for calling off the Non-cooperation Movement by Gandhiji?', options: ["a) Pressure from the British Government", "b) Second Round Table Conference", "c) Gandhiji's arrest", "d) Chauri-Chaura incident"], answer: 'd) Chauri-Chaura incident', hint: 'Gandhiji was against violence, and this incident involved a violent clash between protestors and the police.' },
    { section: 'A', id: 'a5', type: 'brief', question: '5. Mention any two effects of the globalisation process till now.', answer: 'Two major effects of globalisation are:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Increased Integration of Markets:</strong> Globalisation has led to greater trade in goods and services between countries and more rapid foreign investment.</li><li><strong>Spread of Technology and Culture:</strong> It has facilitated the rapid dissemination of information, technology, and cultural norms across the world.</li></ul>' },
    { section: 'A', id: 'a6', type: 'brief', question: '6. Why was the Simon Commission boycotted in India?', answer: 'The Simon Commission was boycotted in India because it was an <strong>all-white commission</strong> appointed to decide on constitutional reforms for India. There was <strong>no Indian member</strong> in the commission, which was seen as a grave insult to the self-respect of Indians who felt that only they could determine their own future.' },
    { section: 'A', id: 'a7', type: 'long', question: '7. Describe the explosive conditions prevailing in the Balkans after 1871 in Europe.', answer: 'The Balkans became an area of intense conflict after 1871 due to several factors:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Ethnic Diversity:</strong> The region had a complex mix of ethnicities, and the spread of romantic nationalism made them desire independent nation-states.</li><li><strong>Decline of the Ottoman Empire:</strong> The weakening Ottoman Empire, which controlled the region, created a power vacuum.</li><li><strong>Big Power Rivalry:</strong> Major European powers like Russia, Germany, England, and Austria-Hungary competed for influence and control over the Balkans, further complicating the situation.</li></ul>These factors made the region highly volatile, often referred to as the "powder keg of Europe."' },
    { 
        section: 'A', 
        id: 'source-a8', 
        type: 'source', 
        sourceText: 'On 31st January 1930, Gandhiji sent a letter to Viceroy Irwin stating eleven demands. The most stirring of all was the demand to abolish the salt tax, Salt was something consumed by the rich and the poor alike, and it was one of the most essential items of food. The tax on salt and the government monopoly over its production, revealed the most oppressive side of British rule Mahatma Gandhi declared that if the demands were not fulfilled by 11th March, he would launch a civil disobedience campaign.<br/><br/>On 12th March, Gandhi started his famous salt march accompanied by 78 followers. The march was over 240 miles, from his ashram in Sabarmati to the coastal town of Dandi Thousands joined him on the way. On 6th April, he reached Dandi and ceremonially violated the law, manufacturing salt by boiling seawater. This marked the beginning of the Civil Disobedience Movement.',
        sourceName: 'The Salt March and Civil Disobedience Movement'
    },
    { section: 'A', id: 'a8.1', type: 'brief', question: '8.1 Why did Mahatma Gandhi choose salt as a symbol for launching Civil Disobedience?', answer: 'Mahatma Gandhi chose salt as a symbol because it was a commodity <strong>consumed by everyone</strong>, both rich and poor. The British government\'s monopoly on salt production and the salt tax symbolized the most <strong>oppressive aspect of colonial rule</strong>, making it a powerful and unifying issue for a mass movement.' },
    { section: 'A', id: 'a8.2', type: 'brief', question: '8.2 What was the significance of the Dandi March in the national movement?', answer: 'The Dandi March was highly significant as it <strong>marked the beginning of the Civil Disobedience Movement</strong>. It brought the freedom struggle to the forefront of the world stage, inspired widespread participation from different sections of society, and demonstrated the power of non-violent resistance against British law.' },
    { section: 'A', id: 'a8.3', type: 'brief', question: '8.3 Why was the salt law seen as oppressive by Indians?', answer: 'The salt law was seen as oppressive because it gave the British government a <strong>monopoly over the production and sale of salt</strong>, a basic necessity. It prevented Indians from collecting or manufacturing salt themselves and imposed a tax on it, which placed a heavy burden on the poor.' },
    
    // Section B: Geography
    { section: 'B', id: 'b10', type: 'mcq', question: '10. Which of the following statements accurately describes khadar?<br>I) It is one of the classifications of alluvial soil.<br>II) Khadar is the old alluvium.<br>III) Khadar soil has less kankar nodules than bhangar.<br>IV) Khadar is less fertile than bhangar.', options: ['a) I and II', 'b) I, II and III', 'c) I and III', 'd) I, II, III and IV'], answer: 'c) I and III', hint: 'Khadar is the new, more fertile alluvium, while Bhangar is the old alluvium with more kankar nodules.' },
    { section: 'B', id: 'b11', type: 'mcq', question: '11. Which type of agriculture is practised in north eastern states like Meghalaya, Mizoram and Nagaland?', options: ['a) Jhumming', 'b) plantation', 'c) commercial farming', 'd) subsistence farming'], answer: 'a) Jhumming', hint: 'This is another name for slash-and-burn or shifting cultivation.' },
    { section: 'B', id: 'b12', type: 'mcq', question: '12. Assertion(A): Irrigation is considered to be the major source of agriculture.<br>Reason(R): Dams are well known for their capacity to hold water for agriculture.', options: ['a) Both A and R are true, but R is not the correct explanation of A', 'b) Both A and R are true and R is the correct explanation of A', 'c) Both A and R are incorrect', 'd) A is correct, but R is incorrect'], answer: 'b) Both A and R are true and R is the correct explanation of A', hint: 'Dams provide the stored water necessary for large-scale irrigation, making agriculture possible in many areas.' },
    { section: 'B', id: 'b13', type: 'mcq', question: '13. The success of rabi crops depends on which of the following?', options: ['a) heavy cyclonic rainfall', 'b) intense irrigation', 'c) light winter rainfall', 'd) access to markets'], answer: 'c) light winter rainfall', hint: 'Rabi crops are winter crops, and they benefit from precipitation from western temperate cyclones.' },
    { section: 'B', id: 'b14', type: 'mcq', question: '14. The state having the largest area under permanent forest is-', options: ['a) Andhra Pradesh', 'b) Madhya Pradesh', 'c) Arunachal Pradesh', 'd) Himachal Pradesh'], answer: 'b) Madhya Pradesh', hint: 'This state has the largest forest cover in terms of area in India.' },
    { section: 'B', id: 'b15', type: 'mcq', question: '15. The cultivation of coffee was introduced in which of the following hills in India?', options: ['a) Nilgiri hills', 'b) Palni hills', 'c) Baba Budan hills', 'd) Khasi hills'], answer: 'c) Baba Budan hills', hint: 'This hill range is in Karnataka, a major coffee-producing state.' },
    { section: 'B', id: 'b16', type: 'brief', question: "16. What does the example of the 'Bhairodev Dakav Sonchuri' in Rajasthan illustrate?", answer: 'The \'Bhairodev Dakav Sonchuri\' illustrates the power of <strong>community participation in conservation</strong>. It shows how local communities, using their own rules and regulations, can effectively protect habitats and wildlife, often reviving traditional conservation ethics and methods, without direct government involvement.' },
    { section: 'B', id: 'b17', type: 'long', question: '17. Describe how modern adaptations of traditional rainwater harvesting methods are being carried out to conserve and store water.', answer: 'Modern adaptations of traditional rainwater harvesting are being widely implemented:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Rooftop Rainwater Harvesting:</strong> In urban areas, rainwater from rooftops is collected and directed through pipes to storage tanks or into the ground via percolation pits or recharge wells. This recharges groundwater and reduces urban runoff.</li><li><strong>Check Dams and Johads:</strong> In rural areas, small, simple dams (check dams) and earthen structures (johads) are built across seasonal streams to stop rainwater from flowing away, allowing it to percolate into the ground and raise the water table.</li><li><strong>Tankas:</strong> In arid regions, underground tanks (tankas) are built within homes or communities to store rooftop rainwater for drinking purposes, a modernised version of a centuries-old practice.</li></ul>' },
    { 
        section: 'B', 
        id: 'source-b18', 
        type: 'source', 
        sourceText: 'Planning is the widely accepted strategy for judicious use of resources. It has importance in a country like India, which has enormous diversity in the availability of resources. There are regions which are rich in certain types of resources, but are deficient in some other resources. There are some regions which can be considered self-sufficient in terms of the availability of resources and there are some regions which have acute shortage of some vital resources. For example, the states of Jharkhand, Chhattisgarh and Madhya Pradesh are rich in mineral deposits. Arunachal Pradesh has abundance of water resources, but lacks in infrastructural development.',
    },
    { section: 'B', id: 'b18.1', type: 'brief', question: '18.i) How judicious use of resources can be done by planning?', answer: 'Judicious use of resources through planning involves a three-step process: <strong>(1) identification and inventory</strong> of resources across regions, <strong>(2) evolving a planning structure</strong> with appropriate technology and skills, and <strong>(3) matching the resource development plans</strong> with overall national development goals.' },
    { section: 'B', id: 'b18.2', type: 'brief', question: '18.ii) Why is planning necessary in India?', answer: 'Planning is crucial in India due to the <strong>enormous diversity and uneven distribution</strong> of resources. Some regions are rich in certain resources but poor in others. Planning ensures a balanced and equitable development across all regions, preventing over-exploitation in some areas and neglect in others.' },
    { section: 'B', id: 'b18.3', type: 'brief', question: '18.iii) State two examples of resource availability in India?', answer: 'Two examples are:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li>The states of <strong>Jharkhand, Chhattisgarh, and Madhya Pradesh</strong> are rich in minerals and coal deposits.</li><li>The state of <strong>Arunachal Pradesh</strong> has an abundance of water resources but lacks infrastructural development.</li></ul>' },
    
    // Section C: Political Science
    { section: 'C', id: 'c20', type: 'mcq', question: '20. Which of the following groups is in majority in Sri Lanka?', options: ['a) Tamil', 'b) Sinhala', 'c) Telegu', 'd) English'], answer: 'b) Sinhala', hint: 'The conflict in Sri Lanka has been primarily between the majority Sinhala community and the minority Tamil community.' },
    { section: 'C', id: 'c21', type: 'mcq', question: "21. 'Education' falls under which one of the following lists given in the Indian Constitution?", options: ['a) Union List', 'b) State List', 'c) Concurrent List', 'd) Residuary Subjects'], answer: 'c) Concurrent List', hint: 'This means that both the Union and the State governments can make laws on this subject.' },
    { section: 'C', id: 'c22', type: 'mcq', question: '22. Which one of the following is not a National Political Party in India?', options: ['a) Indian National Congress', 'b) Bhartiya Janata Party', 'c) Bahujan Samaj Party', 'd) Samajwadi Party'], answer: 'd) Samajwadi Party', hint: 'The Samajwadi Party is a regional party with its main influence in Uttar Pradesh.' },
    { section: 'C', id: 'c23', type: 'mcq', question: '23. In which of the following regions is the participation of women in the public life the highest?', options: ['a) Nordic countries', 'b) Arab states', 'c) European countries', 'd) Asian countries'], answer: 'a) Nordic countries', hint: 'Countries like Sweden, Norway, and Finland have very high levels of female representation in politics and the workforce.' },
    { section: 'C', id: 'c24', type: 'brief', question: '24. How is the community government elected in Belgium?', answer: 'In Belgium, the community government is elected by people belonging to <strong>one language community</strong>—Dutch, French, and German-speaking—<strong>regardless of where they live</strong>. This government has power regarding cultural, educational, and language-related issues.' },
    { section: 'C', id: 'c25', type: 'brief', question: '25. What is decentralisation?', answer: 'Decentralisation is the process of <strong>transferring power and authority from the central and state governments to local government bodies</strong>. The basic idea is to involve local people in decision-making and solve problems at the local level.' },
    { section: 'C', id: 'c26', type: 'brief', question: '26. What is Union List? Explain.', answer: 'The Union List is a list of subjects of national importance on which <strong>only the central (Union) government can make laws</strong>. These subjects, such as <strong>defence, foreign affairs, currency, and banking</strong>, require a uniform policy throughout the country.' },
    { section: 'C', id: 'c27', type: 'long', question: '27. "Women still lag much behind men in India, despite some improvement since independence". Analyse the statement.', answer: 'The statement is accurate. Despite progress, women in India still face significant disadvantages compared to men in various spheres:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Political Representation:</strong> The percentage of elected women members in the Lok Sabha is still very low. Their representation in state assemblies is even lower.</li><li><strong>Economic Disparity:</strong> Women are often paid less than men for similar work. A large proportion of women work in the unorganised sector where job security and benefits are absent.</li><li><strong>Literacy Rate:</strong> While female literacy has increased, it is still lower than the male literacy rate. The dropout rate for girls in school is also higher.</li><li><strong>Social Issues:</strong> There is a preference for male children, leading to a skewed sex ratio. Women also face issues of safety and security.</li></ul>These points show that the goal of gender equality is still far from being achieved.' },
    { 
        section: 'C', 
        id: 'source-c28', 
        type: 'source', 
        sourceText: 'Sri Lanka emerged as an independent country in 1948. The leaders of the Sinhala community sought to secure dominance over government by virtue of their majority. As a result, the democratically elected government adopted a series of MAJORITARIAN measures to establish Sinhala supremacy. Over the years, it created feelings of alienation among the Sri Lankan Tamils. They felt that none of the major political parties led by the Buddhist Sinhala leaders was sensitive to their language and culture. As a result, the relations between the Sinhala and Tamil communities strained over time. On the other hand, the Belgian leaders took a different path. They recognised the existence of regional differences and cultural diversities. Between 1970 and 1993, they amended their constitution four times to work out an arrangement that would enable everyone to live together within the same country.',
        sourceName: 'Adapted from Power Sharing, NCERT'
    },
    { section: 'C', id: 'c28.1', type: 'brief', question: '28.1 State any two demands of Tamils in Sri Lanka.', answer: 'Two main demands of the Sri Lankan Tamils were:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li>Recognition of <strong>Tamil as an official language</strong>.</li><li><strong>Regional autonomy</strong> for provinces populated by Tamils.</li></ul>' },
    { section: 'C', id: 'c28.2', type: 'brief', question: '28.2 State the results of the Majoritarian Government in Sri Lanka.', answer: 'The majoritarian measures adopted by the government led to a deep <strong>feeling of alienation among the Sri Lankan Tamils</strong>. This strained the relationship between the Sinhala and Tamil communities, ultimately leading to a prolonged and violent <strong>civil war</strong>.' },
    { section: 'C', id: 'c28.3', type: 'brief', question: '28.3 Explain any two provisions of the Belgian model of power sharing.', answer: 'Two key provisions of the Belgian model are:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Equal Representation:</strong> The central government has an equal number of Dutch and French-speaking ministers, ensuring no single community can make decisions unilaterally.</li><li><strong>Community Government:</strong> A third kind of government, the \'community government\', is elected by people of one language group and has powers related to cultural, educational, and language issues.</li></ul>' },
    
    // Section D: Economics
    { section: 'D', id: 'd29', type: 'mcq', question: "29. Assertion A: Human development Index offers a less comprehensive understanding of a nation's development compared to solely relying on per capita income.<br>Reason R: HDI includes various aspects like education, health, income, poverty levels and environmental conditions for a holistic assessment.", answer: 'd) A is false but R is true.', options: ['a) Both A and R are true and R is the correct explanation of A.', 'b) Both A and R are true and R is not the correct explanation of A.', 'c) A is true but R is false.', 'd) A is false but R is true.'], hint: 'HDI is considered more comprehensive than per capita income precisely because it includes health and education, as stated in the reason.' },
    { section: 'D', id: 'd30', type: 'mcq', question: '30. Assertion A: Different individuals having diverse developmental goals can lead to conflicting notions of development.<br>Reason R: Development varies according to personal aspirations, leading to contrasting perspectives on what constitutes progress and well-being.', answer: 'a) Both A and R are true and R is the correct explanation of A.', options: ['a) Both A and R are true and R is the correct explanation of A.', 'b) Both A and R are true and R is not the correct explanation of A.', 'c) A is true but R is false.', 'd) A is false but R is true.'], hint: 'For example, building a dam is development for an industrialist but may be destructive for the displaced villagers.' },
    { section: 'D', id: 'd31', type: 'mcq', question: '31. The development goal of a girl in a village will be-', options: ['a) to study in a foreign country.', 'b) to be free to choose her career.', 'c) to be given equal opportunities like boys.', 'd) All of the above.'], answer: 'c) to be given equal opportunities like boys.', hint: 'The most fundamental goal is to get the same freedom and opportunity as her brother.' },
    { section: 'D', id: 'd32', type: 'mcq', question: '32. All economic activities that directly involve conversion of natural resources are classified under', options: ['a) Primary sector', 'b) Secondary sector', 'c) Tertiary sector', 'd) Government sector'], answer: 'a) Primary sector', hint: 'This includes activities like agriculture, mining, and fishing.' },
    { section: 'D', id: 'd33', type: 'mcq', question: '33. Which of the following provisions have been made under the Mahatma Gandhi National Rural Employment Guarantee Act 2005?', options: ['a) Government ensures 100 days of employment for all residents.', 'b) Government ensures 200 days of employment for all rural residents.', 'c) Government provides grains in exchange of work in rural areas.', 'd) Government provides unemployment allowance to the beneficiaries in case of failure to provide employment.'], answer: 'd) Government provides unemployment allowance to the beneficiaries in case of failure to provide employment.', hint: 'MGNREGA guarantees 100 days of wage employment. If the government fails to provide it, it must pay an allowance.' },
    { section: 'D', id: 'd34', type: 'mcq', question: '34. The goods that are used as raw materials for further production are known by which name?', options: ['a) Final goods', 'b) Consumer goods', 'c) Material goods', 'd) Intermediate goods'], answer: 'd) Intermediate goods', hint: 'For example, wheat flour used by a bakery to make bread is an intermediate good.' },
    { section: 'D', id: 'd35', type: 'brief', question: '35. Money cannot buy all the goods and services that one needs to live well. Explain.', answer: 'This statement is true because money alone cannot guarantee a good quality of life. For instance, it cannot buy a <strong>pollution-free environment</strong>, protection from infectious diseases, or ensure that you get unadulterated medicines. It also cannot buy intangible things like <strong>respect, freedom, and friendship</strong>. These require collective effort and social well-being.' },
    { section: 'D', id: 'd36', type: 'brief', question: '36. Suggest any three ways to create more employment opportunities in urban areas. <br/>OR<br/> Highlight any three ways to increase employment in India.', answer: 'Three ways to create more urban employment are:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Promoting Small-Scale Industries:</strong> Providing financial support, cheap loans, and infrastructure to small manufacturers and startups.</li><li><strong>Investing in Services Sector:</strong> Developing sectors like IT, tourism, and healthcare which have high employment potential.</li><li><strong>Improving Education and Vocational Training:</strong> Equipping the youth with skills that are in demand in the job market.</li></ul>' },
    { section: 'D', id: 'd37', type: 'brief', question: '37. How is the issue of sustainability important for development? Explain with examples.', answer: 'Sustainability is crucial for development because it ensures that development meets the needs of the <strong>present without compromising the ability of future generations</strong> to meet their needs. It warns against overuse of resources.<br/><br/><strong>Example:</strong> If we overuse groundwater for current agricultural needs, we might deplete it, leaving future generations with water scarcity. Similarly, rapid industrialization without pollution control damages the environment, affecting the health and well-being of people in the long run.' },
    { section: 'D', id: 'd38', type: 'long', question: '38. Why is organised sector preferred by the employees? Explain.', answer: 'Employees prefer the organised sector for several reasons:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Job Security:</strong> Employment is secure, and workers cannot be fired without a proper reason.</li><li><strong>Fixed Working Hours:</strong> They have a fixed number of working hours. If they work more, they are paid overtime.</li><li><strong>Benefits:</strong> They receive several benefits such as paid leave, payment during holidays, provident fund, and gratuity.</li><li><strong>Social Security:</strong> They are entitled to medical benefits and, after retirement, pensions.</li><li><strong>Safe Working Environment:</strong> The sector follows government rules and regulations, ensuring a safe and healthy work environment.</li></ul>' },
     
    // Map Based Questions
    { section: 'Map', id: 'm9', type: 'brief', question: '9. On the given outline map of India, identify them and write their correct names in your answer sheet.<br>A. Indian National Congress session at this place in 1920<br>B. The place where Mahatma Gandhi broke Salt Law', answer: '<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>A. Nagpur (Maharashtra):</strong> The crucial session where the Non-Cooperation programme was adopted.</li><li><strong>B. Dandi (Gujarat):</strong> The coastal town where Gandhiji and his followers manufactured salt, marking the start of the Civil Disobedience Movement.</li></ul>' },
    { section: 'Map', id: 'm19', type: 'brief', question: '19. On the given outline map of India, locate and label the following:<br>a). A major rubber producing state<br>b). Sardar Sarovar dam<br>c). A region having laterite soil', answer: '<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>(a) Kerala:</strong> The southernmost state on the west coast is the largest producer of rubber.</li><li><strong>(b) Sardar Sarovar Dam:</strong> Located on the Narmada River in Gujarat.</li><li><strong>(c) Western Ghats Region:</strong> Laterite soil is found extensively along the crest of the Western Ghats in states like Maharashtra, Karnataka, and Kerala.</li></ul>' },
];

// --- THEME SWITCHER COMPONENT ---
const ThemeSwitcher = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full bg-[var(--theme-card-bg)] text-[var(--theme-text)] shadow-md hover:shadow-lg transition-all"
                title="Change Theme"
            >
                <PaletteIcon />
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-[var(--theme-card-bg)] rounded-lg shadow-2xl p-2 z-10">
                    <div className="grid grid-cols-4 gap-2">
                        {Object.entries(themes).map(([key, theme]) => {
                            const isDark = theme.name.includes('(D)');
                            const style = {
                                background: isDark
                                    ? `linear-gradient(90deg, #2d3748 50%, ${theme.previewColor} 50%)`
                                    : theme.previewColor,
                                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                            };
                            return (
                                <button
                                    key={key}
                                    onClick={() => {
                                        setCurrentTheme(key);
                                        setIsOpen(false);
                                    }}
                                    className="w-8 h-8 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--theme-primary)]"
                                    style={style}
                                    title={theme.name}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

// --- TIMER COMPONENT ---
const Timer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive]);

    const formatTime = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div className="flex items-center gap-2 p-2 rounded-full bg-[var(--theme-card-bg)] shadow-md">
            <TimerIcon />
            <span className="font-mono text-lg w-24 text-center">{formatTime()}</span>
            <button onClick={() => setIsActive(!isActive)} className="p-2 rounded-full bg-[var(--theme-primary-light)] text-[var(--theme-primary)] hover:bg-opacity-50 transition-all" title={isActive ? "Pause" : "Start"}>
                {isActive ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={handleReset} className="p-2 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-all" title="Reset">
                <ResetIcon />
            </button>
        </div>
    );
};

// --- BACK TO TOP BUTTON COMPONENT ---
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <button
            className={`fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ backgroundColor: 'var(--theme-primary)'}}
            onClick={scrollToTop}
            aria-label="Go to top"
        >
            <ArrowUpIcon />
        </button>
    );
};

// --- SOURCE CARD COMPONENT ---
const SourceCard = ({ item }) => (
    <div className="bg-[var(--theme-card-bg)] bg-opacity-50 border-l-4 border-[var(--theme-primary)] rounded-r-lg p-6 mb-6 shadow-md">
        <h3 className="font-bold text-lg mb-2 text-[var(--theme-heading)]">Read the source given below and answer the questions that follow:</h3>
        <p className="italic text-sm text-[var(--theme-text)] opacity-90 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.sourceText }} />
        {item.sourceName && <p className="text-xs text-right mt-4 opacity-70">Source: {item.sourceName}</p>}
    </div>
);

// --- QUESTION CARD COMPONENT ---
const QuestionCard = ({ item, showAll }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectionStatus, setSelectionStatus] = useState(null);

    useEffect(() => {
        setIsAnswerVisible(showAll);
        if (item.options) {
            if (showAll) {
                setSelectedOption(item.answer);
                setSelectionStatus('correct');
            } else {
                setSelectedOption(null);
                setSelectionStatus(null);
            }
        }
    }, [showAll, item.options, item.answer]);

    const handleOptionClick = (option) => {
        if (selectionStatus) return;
        setSelectedOption(option);
        setSelectionStatus(option === item.answer ? 'correct' : 'incorrect');
    };

    const toggleAnswer = () => setIsAnswerVisible(!isAnswerVisible);
    const toggleHint = () => setIsHintVisible(!isHintVisible);

    const getOptionClass = (option) => {
        if (selectionStatus) {
            if (option === item.answer) return 'bg-green-100 border-green-500 text-green-800 animate-pulse';
            if (option === selectedOption) return 'bg-red-100 border-red-500 text-red-800';
            return 'cursor-not-allowed text-slate-500 border-slate-200 bg-slate-50';
        }
        return 'border-slate-300 hover:bg-slate-100/50 hover:border-[var(--theme-primary)]';
    };

    return (
        <div className="bg-[var(--theme-card-bg)] rounded-2xl p-6 sm:p-8 mb-6 shadow-lg transition-all duration-300" style={{boxShadow: '0 10px 15px -3px var(--theme-card-shadow), 0 4px 6px -4px var(--theme-card-shadow)'}}>
            <div className="flex justify-between items-start gap-4">
                <p className="font-semibold text-[var(--theme-text)] flex-1" dangerouslySetInnerHTML={{ __html: item.question }} />
                {item.hint && <button onClick={toggleHint} className="p-2 rounded-full text-yellow-500 hover:text-yellow-600 hover:bg-yellow-100 transition-colors duration-200 flex-shrink-0" title="Show Hint"><HintIcon /></button>}
            </div>
            
            <div className={`transition-all duration-500 ease-in-out grid ${isHintVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="mt-3 p-3 bg-[var(--theme-hint-bg)] border border-dashed rounded-lg text-sm text-[var(--theme-hint-text)]" style={{borderColor: 'var(--theme-hint-border)'}}><strong>Hint:</strong> {item.hint}</div>
                </div>
            </div>

            {item.options && (
                <div className="mt-4 space-y-3">
                    {item.options.map((option, index) => (
                        <button key={index} onClick={() => handleOptionClick(option)} disabled={!!selectionStatus} className={`w-full text-left p-3 border-2 rounded-lg transition-all duration-300 ${getOptionClass(option)}`}>{option}</button>
                    ))}
                </div>
            )}
            
            {!item.options && (
                <>
                    <button onClick={toggleAnswer} className={`mt-4 px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 flex items-center gap-2 ${isAnswerVisible ? 'bg-[var(--theme-primary)] text-white hover:opacity-90' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'}`}>{isAnswerVisible ? <><EyeOffIcon/> Hide Answer</> : <><EyeIcon/> View Answer</>}</button>
                    <div className={`transition-all duration-500 ease-in-out grid ${isAnswerVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="mt-4 p-4 bg-slate-50/50 border border-dashed border-slate-200 rounded-lg">
                                <div className="prose prose-sm max-w-none text-slate-700 prose-strong:text-slate-900">
                                    <strong className="text-slate-900">Answer:</strong>
                                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

// --- MAIN APP COMPONENT ---
export default function App() {
    const [showAllAnswers, setShowAllAnswers] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('sunriseOrange');

    useEffect(() => {
        const theme = themes[currentTheme];
        Object.entries(theme.cssVars).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, [currentTheme]);

    const sections = {
        'A': 'Section A: History',
        'B': 'Section B: Geography',
        'C': 'Section C: Political Science',
        'D': 'Section D: Economics',
        'Map': 'Map Based Questions',
    };
    
    const toggleAllAnswers = () => setShowAllAnswers(!showAllAnswers);

    return (
        <div className="bg-[var(--theme-bg)] min-h-screen font-sans text-[var(--theme-text)] p-4 sm:p-6 md:p-8 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <header className="relative text-center mb-4 mt-20">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[var(--theme-heading)]">Half Yearly Examination 2025-26</h1>
                    <div className="absolute top-0 right-0">
                        <ThemeSwitcher setCurrentTheme={setCurrentTheme} />
                    </div>
                </header>
                
                <div className="text-center mb-10">
                    <p className="inline-block px-4 py-2 mt-4 text-base font-medium rounded-full bg-[var(--theme-primary-light)] text-[var(--theme-primary)]">Social Science (DAV PUBLIC SCHOOL, Bistupur)</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                        <button onClick={toggleAllAnswers} className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--theme-primary)', color: 'white' }}>
                            {showAllAnswers ? <EyeOffIcon /> : <EyeIcon />}
                            {showAllAnswers ? 'Hide All Answers' : 'Show All Answers'}
                        </button>
                        <Timer />
                    </div>
                </div>

                {Object.keys(sections).map(sectionKey => (
                    <section key={sectionKey} className="mb-12">
                        <h2 className="text-3xl font-bold text-[var(--theme-heading)] mb-8 pb-3" style={{ borderBottom: '4px solid var(--theme-heading-border)' }}>
                            {sections[sectionKey]}
                        </h2>
                        <div>
                            {worksheetData
                                .filter(item => item.section === sectionKey)
                                .map(item => {
                                    if (item.type === 'source') {
                                        return <SourceCard key={item.id} item={item} />;
                                    }
                                    return <QuestionCard key={item.id} item={item} showAll={showAllAnswers} />;
                                })}
                        </div>
                    </section>
                ))}
            </div>
            <BackToTopButton />
        </div>
    );
}