import React, { useState, useEffect } from 'react';

// --- THEME DEFINITIONS (Converted to JS objects for inline styles) ---
const themes = {
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', styles: { bg: '#fff7ed', text: '#4b5563', heading: '#ea580c', headingBorder: '#f97316', cardBg: '#ffffff', cardShadow: 'rgba(249, 115, 22, 0.1)', primary: '#f97316', primaryHover: '#ea580c', primaryLight: 'rgba(249, 115, 22, 0.1)', hintBg: '#fffbeb', hintText: '#b45309', hintBorder: '#fde68a' } },
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', styles: { bg: '#eff6ff', text: '#374151', heading: '#2563eb', headingBorder: '#60a5fa', cardBg: '#ffffff', cardShadow: 'rgba(59, 130, 246, 0.1)', primary: '#3b82f6', primaryHover: '#2563eb', primaryLight: 'rgba(59, 130, 246, 0.1)', hintBg: '#e0f2fe', hintText: '#0c4a6e', hintBorder: '#7dd3fc' } },
    forestGreen: { name: 'Forest Green', previewColor: '#22c55e', styles: { bg: '#f0fdf4', text: '#4b5563', heading: '#16a34a', headingBorder: '#4ade80', cardBg: '#ffffff', cardShadow: 'rgba(34, 197, 94, 0.1)', primary: '#22c55e', primaryHover: '#16a34a', primaryLight: 'rgba(34, 197, 94, 0.1)', hintBg: '#f7fee7', hintText: '#3f6212', hintBorder: '#a3e635' } },
    royalPurple: { name: 'Royal Purple', previewColor: '#8b5cf6', styles: { bg: '#f5f3ff', text: '#4b5563', heading: '#7c3aed', headingBorder: '#a78bfa', cardBg: '#ffffff', cardShadow: 'rgba(139, 92, 246, 0.1)', primary: '#8b5cf6', primaryHover: '#7c3aed', primaryLight: 'rgba(139, 92, 246, 0.1)', hintBg: '#faf5ff', hintText: '#7e22ce', hintBorder: '#e9d5ff' } },
    midnightBlueD: { name: 'Midnight Blue (D)', previewColor: '#60a5fa', styles: { bg: '#111827', text: '#d1d5db', heading: '#60a5fa', headingBorder: '#3b82f6', cardBg: '#1f2937', cardShadow: 'rgba(0, 0, 0, 0.2)', primary: '#3b82f6', primaryHover: '#2563eb', primaryLight: 'rgba(59, 130, 246, 0.2)', hintBg: '#374151', hintText: '#e5e7eb', hintBorder: '#4b5563' } },
    slateGrayD: { name: 'Slate Gray (D)', previewColor: '#94a3b8', styles: { bg: '#1e293b', text: '#e2e8f0', heading: '#cbd5e1', headingBorder: '#94a3b8', cardBg: '#334155', cardShadow: 'rgba(0, 0, 0, 0.2)', primary: '#64748b', primaryHover: '#475569', primaryLight: 'rgba(100, 116, 139, 0.2)', hintBg: '#475569', hintText: '#e5e7eb', hintBorder: '#64748b' } },
};

// --- SVG ICONS ---
const HintIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> );
const EyeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg> );
const EyeOffIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg> );
const PaletteIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/><path d="M12 22a7 7 0 1 0-10-10"/><path d="m14.5 4.5-.5 2 .5 2M9.5 17.5l.5-2-.5-2"/></svg> );
const TimerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
const PlayIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>);
const PauseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>);
const ResetIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>);
const ArrowUpIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>);
const HistoryIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 9l4 4-2 4" /><path d="M11 9l4 4-2 4" /></svg>);
const GeographyIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>);
const EconomicsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="1" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>);
const ArrowRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);

// --- WORKSHEET DATA ---
const worksheetData = [
    // Chapter 1: The Rise of Nationalism in Europe
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_mcq_1',
        type: 'mcq',
        question: '1. Who among the following was the architect of the unification of Germany?',
        options: ['(a) Otto von Bismarck', '(b) Napoleon Bonaparte', '(c) Giuseppe Mazzini', '(d) Duke Metternich'],
        answer: '(a) Otto von Bismarck',
        hint: 'This Prussian Chief Minister masterminded unification through a policy of "blood and iron".'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_mcq_2',
        type: 'mcq',
        question: '2. What did the crown of oak leaves worn by Germania signify?',
        options: ['(a) Heroism', '(b) Freedom', '(c) Unity', '(d) Revolution'],
        answer: '(a) Heroism',
        hint: 'In German tradition, the oak leaf is a symbol of strength and bravery.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_mcq_3',
        type: 'mcq',
        question: "3. The 'Civil Code of 1804' is also known as:",
        options: ['(a) The Napoleonic Code', '(b) The Bismarck Code', '(c) The Metternich Code', '(d) The French Code'],
        answer: '(a) The Napoleonic Code',
        hint: 'This set of laws was introduced by Napoleon Bonaparte in 1804.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_mcq_4',
        type: 'mcq',
        question: '4. Which treaty recognized Greece as an independent nation?',
        options: ['(a) Treaty of Versailles', '(b) Treaty of Vienna', '(c) Treaty of Constantinople', '(d) Treaty of Lausanne'],
        answer: '(c) Treaty of Constantinople',
        hint: 'Signed in 1832, this treaty formally ended the Greek War of Independence.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_mcq_5',
        type: 'mcq',
        question: '5. Who was proclaimed the emperor of a unified Germany in 1871?',
        options: ['(a) Wilhelm I', '(b) Wilhelm II', '(c) Frederick William IV', '(d) Otto von Bismarck'],
        answer: '(a) Wilhelm I',
        hint: 'The King of Prussia was proclaimed the German Emperor at Versailles.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_sa_6',
        type: 'brief',
        question: '6. Explain any three features of the Napoleonic Code.',
        answer: 'The three main features of the Napoleonic Code of 1804 were: <ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Equality before the law:</strong> It abolished all privileges based on birth, establishing that all citizens were equal in the eyes of the law.</li><li><strong>Right to property:</strong> It firmly secured the right to own and enjoy private property.</li><li><strong>Abolition of the feudal system:</strong> It dismantled the old feudal structure, freeing peasants from serfdom and manorial dues, and removed guild restrictions in towns.</li></ul>',
        hint: 'Think about legal equality, property, and the old social structure.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_sa_7',
        type: 'brief',
        question: '7. What steps did the French revolutionaries take to create a sense of collective identity among the French people?',
        answer: 'The French revolutionaries introduced several measures:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>They promoted the ideas of <strong>la patrie</strong> (the fatherland) and <strong>le citoyen</strong> (the citizen) to emphasize a community enjoying equal rights.</li><li>A new <strong>tricolor flag</strong> was adopted to replace the royal standard, symbolizing the new republic.</li><li>A centralized administrative system with uniform laws was established, and internal customs duties were abolished to create economic unity.</li></ul>',
        hint: 'Consider symbols, ideas, and administrative changes.'
    },
     {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_sa_8',
        type: 'brief',
        question: '8. Write a short note on the Greek War of Independence.',
        answer: 'The Greek War of Independence (1821-1829) was a nationalist rebellion by the Greeks against the Ottoman Empire. Inspired by revolutionary ideals in Europe, the struggle gained widespread support from West Europeans who admired ancient Greek culture. The war ultimately led to the signing of the <strong>Treaty of Constantinople in 1832</strong>, which officially recognized Greece as an independent nation.',
        hint: 'Think about who fought whom and what the final outcome was.'
    },
     {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_sa_9',
        type: 'brief',
        question: '9. Explain the role of culture (romanticism, folk songs, language) in the development of nationalism in Europe.',
        answer: 'Culture was instrumental in shaping nationalism:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Romanticism</strong>, a cultural movement, emphasized emotion and a shared collective heritage to foster national sentiment.</li><li><strong>Folk culture</strong>, including folk songs, poetry, and dances, was seen as the true expression of the nation\'s spirit (<em>volksgeist</em>).</li><li><strong>Language</strong> became a powerful symbol of national identity and resistance, as seen in Poland against Russian rule.</li></ul>',
        hint: 'How do art, music, and language create a sense of "us"?'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_sa_10',
        type: 'brief',
        question: '10. "The 1830s were years of great economic hardship in Europe." Support this statement with three arguments.',
        answer: 'The 1830s were a period of severe economic hardship in Europe because:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>A significant <strong>increase in population</strong> across the continent led to widespread unemployment.</li><li>Small producers faced intense <strong>competition from cheap, machine-made imports</strong> from industrial England.</li><li>Peasants struggled under the burden of <strong>feudal dues</strong>, and poor harvests led to widespread poverty.</li></ul>',
        hint: 'Consider population, industry, and agriculture.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_sa_11',
        type: 'brief',
        question: '11. Differentiate between the concept of a modern state and a nation-state.',
        answer: '<div style="line-height: 1.6;"><p style="margin-bottom: 1rem;">A <strong>modern state</strong> is characterized by a centralized government that holds sovereign control over a clearly defined territory.</p><p>A <strong>nation-state</strong>, on the other hand, is one where the majority of its citizens, not just its rulers, have developed a common identity, a shared history, and a sense of collective belonging.</p></div>',
        hint: 'One is about government control, the other is about people\'s identity.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_la_12',
        type: 'long',
        question: '12. Explain the process of the unification of Germany.',
        answer: 'The unification of Germany was a strategic process led by Prussia and its chief minister, Otto von Bismarck.<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Prussian Leadership:</strong> After the failure of the liberal 1848 revolution, Prussia took charge of the movement for national unification.</li><li><strong>Bismarck\'s Policy:</strong> Otto von Bismarck, a proponent of <em>Realpolitik</em>, rejected diplomacy in favor of a "blood and iron" policy, using Prussia\'s military strength to achieve his goals.</li><li><strong>Wars of Unification:</strong> Bismarck orchestrated three decisive wars over seven years:<ul style="list-style-type: circle; margin-top: 4px; padding-left: 20px;"><li >War with Denmark (1864)</li><li>Austro-Prussian War (1866)</li><li>Franco-Prussian War (1870-71)</li></ul></li><li><strong>Proclamation of the Empire:</strong> Following the victory over France, in January 1871, the Prussian king, <strong>Kaiser Wilhelm I</strong>, was proclaimed the German Emperor in a ceremony held at the Hall of Mirrors in Versailles, marking the completion of German unification.</li></ol>',
        hint: 'Focus on the roles of Prussia, Bismarck, and the three key wars.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_la_13',
        type: 'long',
        question: '13. Describe the process of the unification of Italy. Who were the key figures involved?',
        answer: 'The unification of Italy was achieved through the efforts of three main figures, led by the kingdom of Sardinia-Piedmont.<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Giuseppe Mazzini:</strong> As a revolutionary, he laid the ideological groundwork. He formed the secret society \'Young Italy\' to instill the idea of a united Italian republic.</li><li><strong>Count Cavour:</strong> As the Chief Minister of Sardinia-Piedmont, he was the diplomatic mastermind. He forged a tactical alliance with France to defeat Austria in 1859, unifying northern Italy.</li><li><strong>Giuseppe Garibaldi:</strong> He was the military hero. With his army of "Red Shirts," he liberated the Kingdom of the Two Sicilies in southern Italy.</li><li><strong>King Victor Emmanuel II:</strong> As the King of Sardinia-Piedmont, he became the political head and was proclaimed King of a united Italy in 1861.</li></ol>',
        hint: 'Remember the "soul" (Mazzini), the "brain" (Cavour), and the "sword" (Garibaldi).'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_la_14',
        type: 'long',
        question: '14. How did nationalism develop through culture in Europe? Explain with examples.',
        answer: 'Culture played a crucial role in creating and spreading nationalist ideas in Europe.<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Romanticism:</strong> This cultural movement focused on emotions and shared heritage. For example, artists and poets helped create a sense of a common cultural past as the basis for a nation.</li><li><strong>Folk Traditions:</strong> Figures like Johann Herder argued that true national culture (<em>volksgeist</em>) was found in folk songs, poetry, and dances.</li><li><strong>Music and Opera:</strong> In Poland, Karol Kurpinski used his operas and music to celebrate the national struggle, turning folk dances into patriotic symbols.</li><li><strong>Language:</strong> Language was used as a tool of national resistance. In Russian-occupied Poland, the clergy used the Polish language in church services as a form of defiance.</li><li><strong>Art and Allegory:</strong> Artists created allegories of the nation, such as <strong>Marianne</strong> in France and <strong>Germania</strong> in Germany, to give the abstract idea of the nation a visual form.</li></ul>',
        hint: 'Think about art, music, language, and folklore.'
    },
    {
        chapter: 'The Rise of Nationalism in Europe',
        id: 'c1_la_15',
        type: 'long',
        question: '15. What were the main objectives of the Treaty of Vienna in 1815? Describe its main provisions.',
        answer: 'The Treaty of Vienna was convened by European powers after defeating Napoleon.<br/><br/><strong>Main Objectives:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>To reverse most of the changes made during the Napoleonic wars.</li><li>To restore the monarchies that Napoleon had overthrown and re-establish a conservative order.</li><li>To create a new balance of power in Europe to prevent future conflicts.</li></ul><strong>Main Provisions:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>The <strong>Bourbon dynasty</strong> was restored to the throne of France.</li><li>A series of states were established on the <strong>borders of France</strong> to contain its future expansion.</li><li>Territories were redistributed among the victors: Austria gained control of northern Italy, Prussia received new territories, and Russia was given part of Poland.</li></ul>',
        hint: 'The goal was to turn back the clock and prevent another Napoleon.'
    },

    // Chapter 2: Nationalism in India
    {
        chapter: 'Nationalism in India',
        id: 'c2_mcq_1',
        type: 'mcq',
        question: '1. Why was the Simon Commission boycotted by Indians?',
        options: ['(a) It had no Indian member.', '(b) It supported the Muslim League.', '(c) It was against the idea of independence.', '(d) It proposed the partition of India.'],
        answer: '(a) It had no Indian member.',
        hint: 'The all-British composition of the commission was seen as a deep insult to the Indian people.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_mcq_2',
        type: 'mcq',
        question: '2. The Poona Pact was signed between Mahatma Gandhi and:',
        options: ['(a) Lord Irwin', '(b) B.R. Ambedkar', '(c) Muhammad Ali Jinnah', '(d) Subhas Chandra Bose'],
        answer: '(b) B.R. Ambedkar',
        hint: 'This pact was an agreement regarding electoral seats for the depressed classes.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_mcq_3',
        type: 'mcq',
        question: "3. Who wrote the book 'Hind Swaraj'?",
        options: ['(a) Jawaharlal Nehru', '(b) Mahatma Gandhi', '(c) Sardar Patel', '(d) Abanindranath Tagore'],
        answer: '(b) Mahatma Gandhi',
        hint: 'In this 1909 book, the author critiqued modern civilization and outlined his vision for a free India.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_mcq_4',
        type: 'mcq',
        question: '4. The Non-Cooperation-Khilafat Movement began in:',
        options: ['(a) January 1921', '(b) February 1922', '(c) December 1929', '(d) April 1919'],
        answer: '(a) January 1921',
        hint: 'This movement marked a new phase of the freedom struggle, uniting Hindus and Muslims.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_mcq_5',
        type: 'mcq',
        question: '5. Under which act were the provincial elections held in 1937?',
        options: ['(a) The Rowlatt Act', '(b) The Government of India Act of 1919', '(c) The Government of India Act of 1935', '(d) The Indian Independence Act of 1947'],
        answer: '(c) The Government of India Act of 1935',
        hint: 'This act granted a significant degree of provincial autonomy.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_sa_6',
        type: 'brief',
        question: '6. Why did Gandhiji decide to withdraw the Non-Cooperation Movement in 1922?',
        answer: 'Gandhiji withdrew the Non-Cooperation Movement primarily due to the <strong>Chauri Chaura incident</strong> in February 1922. A mob of protestors attacked and set fire to a police station, killing 22 policemen. Since the movement was founded on the principle of <strong>non-violence (ahimsa)</strong>, Gandhiji felt it was turning violent and decided to call it off.',
        hint: 'Think about a specific incident of violence that went against the movement\'s core principle.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_sa_7',
        type: 'brief',
        question: '7. Explain the idea of \'Satyagraha\' according to Gandhiji.',
        answer: 'Satyagraha was Mahatma Gandhi\'s philosophy of non-violent resistance. It was based on the principles of <strong>truth (satya)</strong> and <strong>non-violence (ahimsa)</strong>. The core idea was that if a cause was just, physical force was unnecessary. A satyagrahi could win over the oppressor by appealing to their conscience through patient suffering.',
        hint: 'It means "truth-force" or "soul-force".'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_sa_8',
        type: 'brief',
        question: '8. Explain the significance of the Jallianwala Bagh incident.',
        answer: 'The Jallianwala Bagh massacre of 1919 was a turning point. General Dyer\'s troops fired on a peaceful crowd, killing hundreds. This act of brutality <strong>shattered the faith of Indians in British justice</strong>. It led to widespread protests and solidified the resolve of leaders like Gandhi to launch a more widespread, nationwide movement like the Non-Cooperation Movement.',
        hint: 'This event in Amritsar shocked the nation.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_sa_9',
        type: 'brief',
        question: '9. Why was the Salt March an effective symbol of resistance against colonialism?',
        answer: 'The Salt March was highly effective because <strong>salt</strong> was a commodity used by every Indian. The British tax on salt and monopoly over its production was a universally understood symbol of oppression. By breaking the salt law, Gandhiji chose an issue that could <strong>unite the entire nation</strong> and directly challenge British authority.',
        hint: 'It targeted something every single person, rich or poor, needed.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_sa_10',
        type: 'brief',
        question: '10. How did the First World War help in the growth of the National Movement in India?',
        answer: 'The First World War fueled the national movement by:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>Creating severe <strong>economic hardship</strong> for Indians through heavy taxes and high prices.</li><li>Causing widespread anger due to the <strong>forced recruitment</strong> of villagers into the army.</li><li>Spreading ideas of democracy and <strong>self-determination</strong>, which Indian nationalists used to demand greater freedom.</li></ul>',
        hint: 'Consider economic, social, and political impacts.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_la_11',
        type: 'long',
        question: '11. Explain the course and main events of the Civil Disobedience Movement.',
        answer: 'The Civil Disobedience Movement was a pivotal phase of India\'s freedom struggle.<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>The Salt March:</strong> The movement began on March 12, 1930, with Gandhiji\'s historic <strong>Dandi March</strong> from Sabarmati Ashram to the sea.</li><li><strong>Breaking the Salt Law:</strong> On April 6, 1930, he ceremonially violated the law by manufacturing salt, marking the beginning of the movement.</li><li><strong>Nationwide Participation:</strong> The movement spread across the country. People broke the salt law, boycotted foreign cloth, and picketed liquor shops.</li><li><strong>Refusal to Pay Taxes:</strong> Peasants refused to pay revenue and chaukidari taxes, and people violated forest laws.</li><li><strong>Government Repression and Gandhi-Irwin Pact:</strong> The colonial government began arresting leaders, leading to violent clashes. The movement was called off in 1931 when Gandhiji signed the <strong>Gandhi-Irwin Pact</strong> to attend the Second Round Table Conference.</li></ol>',
        hint: 'Start with the Salt March and trace the events.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_la_12',
        type: 'long',
        question: '12. How did different social groups participate in the Civil Disobedience Movement? Why did they join?',
        answer: 'Different social groups joined the movement with their own specific aspirations:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Rich Peasants:</strong> They were hard hit by the trade depression and joined to fight against high revenue demands.</li><li><strong>Poor Peasants:</strong> They wanted unpaid rent to the landlord to be remitted.</li><li><strong>Business Classes:</strong> They wanted protection against imports and colonial restrictions on business.</li><li><strong>Industrial Working Classes:</strong> Their participation was limited, but some joined, boycotting foreign goods.</li><li><strong>Women:</strong> They participated in large numbers in protest marches, seeing service to the nation as a sacred duty.</li></ul>',
        hint: 'Think about the specific goals of peasants, business owners, workers, and women.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_la_13',
        type: 'long',
        question: '13. "The sense of collective belonging came partly through the experience of united struggles." Support the statement with suitable examples.',
        answer: 'A sense of national identity in India was forged through both united struggles and cultural processes.<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>United Struggles:</strong> The shared experience of fighting against British colonialism brought diverse communities together.</li><li><strong>Symbolism in Art:</strong> The image of <strong>Bharat Mata</strong> (Mother India) provided a visual identity for the nation.</li><li><strong>National Flag:</strong> The <strong>Swaraj flag</strong> became a symbol of defiance and national unity during protest marches.</li><li><strong>Revival of Folklore:</strong> Nationalists collected Indian folk tales and songs to instill pride in the nation\'s past.</li><li><strong>Reinterpretation of History:</strong> Indian historians wrote about India\'s glorious past achievements to create a sense of national pride and self-worth.</li></ol>',
        hint: 'Consider how symbols, history, folklore, and shared struggles create unity.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_la_14',
        type: 'long',
        question: '14. Explain the role of women in the Civil Disobedience Movement. What were its limitations?',
        answer: '<strong>Role of Women:</strong><br/>Women\'s participation was remarkable. Thousands came out of their homes to join the struggle. They participated in protest marches, manufactured salt, and picketed shops. Many women, inspired by Gandhiji\'s call, viewed service to the nation as a sacred duty and even went to jail.<br/><br/><strong>Limitations:</strong><br/>Despite this increased public role, their participation did not lead to a radical change in their social position. Gandhiji believed a woman\'s primary duty was to be a good mother and wife. For a long time, the Congress party was reluctant to give women positions of authority, limiting their role to a largely symbolic one.',
        hint: 'Describe their active participation and the social constraints they still faced.'
    },
    {
        chapter: 'Nationalism in India',
        id: 'c2_la_15',
        type: 'long',
        question: '15. Why did the Non-Cooperation Movement gradually slow down in the cities? Explain any three reasons.',
        answer: 'The movement slowed down in cities for several practical reasons:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Khadi was expensive:</strong> Khadi cloth was much more expensive than mass-produced British mill cloth, making it unaffordable for the urban poor to sustain the boycott.</li><li><strong>Lack of Indian institutions:</strong> The boycott of British institutions posed a problem. Alternative Indian schools, colleges, and courts were slow to come up, forcing people to return.</li><li><strong>Waning Enthusiasm:</strong> The initial excitement could not be sustained indefinitely, especially without concrete alternatives and as economic hardships mounted for participants.</li></ul>',
        hint: 'Focus on economic and practical difficulties.'
    },

    // Chapter 3: The Making of a Global World
    {
        chapter: 'The Making of a Global World',
        id: 'c3_mcq_1',
        type: 'mcq',
        question: '1. The main destination of Indian indentured labourers in the 19th century was:',
        options: ['(a) The Caribbean islands', '(b) Europe', '(c) Australia', '(d) North America'],
        answer: '(a) The Caribbean islands',
        hint: 'Many laborers were sent to places like Trinidad, Guyana, and Fiji to work on plantations.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_mcq_2',
        type: 'mcq',
        question: '2. The Bretton Woods Conference established which of the following institutions?',
        options: ['(a) United Nations', '(b) International Labour Organization', '(c) International Monetary Fund (IMF)', '(d) World Health Organization'],
        answer: '(c) International Monetary Fund (IMF)',
        hint: 'This 1944 conference also established the World Bank to shape the post-war global economy.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_mcq_3',
        type: 'mcq',
        question: '3. The Great Depression began around which year?',
        options: ['(a) 1929', '(b) 1919', '(c) 1939', '(d) 1914'],
        answer: '(a) 1929',
        hint: 'It started with the US stock market crash.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_mcq_4',
        type: 'mcq',
        question: "4. What were the 'Corn Laws'?",
        options: ['(a) Laws allowing the import of corn into Britain.', '(b) Laws restricting the import of corn into Britain.', '(c) Laws promoting the export of corn from Britain.', '(d) Laws taxing corn grown in Britain.'],
        answer: '(b) Laws restricting the import of corn into Britain.',
        hint: 'These laws protected British landowners by keeping grain prices high.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_mcq_5',
        type: 'mcq',
        question: '5. What is G-77?',
        options: ['(a) A group of developed nations.', '(b) A group of developing nations.', '(c) An international military organization.', '(d) An international trade agreement.'],
        answer: '(b) A group of developing nations.',
        hint: 'They organized to demand a New International Economic Order (NIEO).'
    },
     {
        chapter: 'The Making of a Global World',
        id: 'c3_sa_6',
        type: 'brief',
        question: "6. Explain the three types of 'flows' within international economic exchanges.",
        answer: 'Economists identify three key types of flows:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>The <strong>flow of trade</strong> (e.g., goods like cloth or wheat).</li><li>The <strong>flow of labor</strong> (e.g., migration of people for work).</li><li>The <strong>flow of capital</strong> (e.g., investments over long distances).</li></ul>',
        hint: 'Think about goods, people, and money.'
    },
     {
        chapter: 'The Making of a Global World',
        id: 'c3_sa_7',
        type: 'brief',
        question: "7. What was the impact of the abolition of the Corn Laws in Britain?",
        answer: 'The abolition of the Corn Laws led to cheaper food imports. As a result, British farmers could not compete, vast areas of land were left uncultivated, and thousands of people lost their jobs and were forced to migrate to cities or overseas.',
        hint: 'Consider the effect on local farmers and food prices.'
    },
     {
        chapter: 'The Making of a Global World',
        id: 'c3_sa_8',
        type: 'brief',
        question: "8. Explain the global transfer of disease in the pre-modern world, with the example of smallpox in America.",
        answer: 'Before its "discovery" by Europeans, America was isolated and its inhabitants had no immunity to European diseases. The conquerors brought germs like <strong>smallpox</strong>, which proved deadly to the native population, wiping out entire communities. This biological warfare made the European conquest much easier.',
        hint: 'Lack of immunity was the key factor.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_sa_9',
        type: 'brief',
        question: "9. What were the main reasons for the Great Depression (1929-1930s)?",
        answer: 'The main reasons were:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Agricultural Overproduction:</strong> This led to falling farm prices and incomes.</li><li><strong>Withdrawal of US Loans:</strong> Many countries depended on US loans. When the US faced a crisis, it stopped lending, causing a global credit crisis.</li><li><strong>Stock Market Crash:</strong> The Wall Street crash of 1929 created panic and led to the failure of banks and businesses.</li></ul>',
        hint: 'It involved farms, banks, and the stock market.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_sa_10',
        type: 'brief',
        question: "10. Why did the Bretton Woods system collapse?",
        answer: 'The Bretton Woods system collapsed because the <strong>US could no longer maintain its currency\'s value</strong>. The rising cost of its overseas involvements (like the Vietnam War) weakened its financial position. It could not maintain the dollar’s convertibility to gold at a fixed price, leading to the collapse of the fixed exchange rate system.',
        hint: 'The US dollar was at the center of the system.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_la_11',
        type: 'long',
        question: '11. Explain how the Silk Routes are a good example of vibrant pre-modern trade and cultural links between distant parts of the world.',
        answer: 'The Silk Routes are an excellent example of pre-modern global connectivity.<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Trade Connection:</strong> They linked Asia with Europe and northern Africa. Chinese silk and pottery, and Indian spices traveled west, while precious metals flowed from Europe to Asia.</li><li><strong>Cultural Exchange:</strong> Christian missionaries, Muslim preachers, and Buddhist monks traveled these routes, spreading their faiths.</li><li><strong>Spread of Religions:</strong> Buddhism spread from India to Central and East Asia this way.</li><li><strong>Spread of Ideas and Technology:</strong> Knowledge and innovations like papermaking journeyed from China to the rest of the world.</li><li><strong>Spread of Food:</strong> Foods like noodles are believed to have traveled from China to become spaghetti in the West.</li></ul>',
        hint: 'They carried more than just silk.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_la_12',
        type: 'long',
        question: '12. "The First World War was a turning point for the world economy." Explain this statement.',
        answer: 'The First World War was a turning point because:<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Shift in Economic Power:</strong> The war weakened Britain\'s economy and shifted global economic power to the United States, which became a major international creditor.</li><li><strong>Disruption of Trade:</strong> It disrupted established trade networks, allowing industries in countries like India and Japan to grow.</li><li><strong>End of British Dominance:</strong> After the war, Britain found it difficult to recapture its earlier position of dominance in global markets.</li><li><strong>Rise of Mass Production:</strong> The US led the post-war recovery, driven by the adoption of mass production techniques.</li><li><strong>Agricultural Crisis:</strong> The war led to agricultural overproduction, causing prices to fall and rural incomes to decline globally after the war.</li></ol>',
        hint: 'Consider the economic impact on Britain, the US, and global trade.'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_la_13',
        type: 'long',
        question: '13. What is meant by indentured labour? Describe the main features of this system.',
        answer: 'Indentured labor was a system of bonded labor instituted after the abolition of slavery. Laborers were hired under a contract to work for an employer for a specific number of years.<br/><br/><strong>Main Features:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Contract System:</strong> Laborers worked under a strict contract which they often did not understand.</li><li><strong>False Promises:</strong> Agents often tempted poor people with false information about the destination, work, and living conditions.</li><li><strong>Harsh Living Conditions:</strong> Conditions on the plantations were miserable, and laborers had few legal rights.</li><li><strong>Restricted Freedom:</strong> The contract did not allow them to return home before the five-year period was over.</li></ul>',
        hint: 'It was often described as a "new system of slavery".'
    },
    {
        chapter: 'The Making of a Global World',
        id: 'c3_la_14',
        type: 'long',
        question: '14. Explain the causes and effects of the Great Depression on the Indian economy.',
        answer: 'The Great Depression deeply impacted India\'s economy.<br/><br/><strong>Effects on the Indian Economy:</strong><ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Collapse of Agricultural Prices:</strong> Between 1928 and 1934, Indian agricultural prices fell by half. Peasants and farmers suffered the most.</li><li><strong>Increased Indebtedness of Peasants:</strong> The colonial government refused to reduce revenue demands despite falling prices. Peasants fell deeper into debt.</li><li><strong>Decline in Exports and Imports:</strong> India’s exports and imports nearly halved.</li><li><strong>Bengal Jute Producers:</strong> The price of raw jute crashed by more than 60 percent, ruining the jute growers.</li><li><strong>Limited Impact on Urban India:</strong> Those with fixed incomes, like salaried employees, found themselves better off due to falling prices.</li></ol>',
        hint: 'Focus on the impact on farmers and trade.'
    },
    
    // Chapter 4: Agriculture
    {
        chapter: 'Agriculture',
        id: 'c4_mcq_1',
        type: 'mcq',
        question: '1. Which of the following is a Rabi crop?',
        options: ['(a) Rice', '(b) Millets', '(c) Wheat', '(d) Cotton'],
        answer: '(c) Wheat',
        hint: 'Rabi crops are sown in winter and harvested in summer.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_mcq_2',
        type: 'mcq',
        question: "2. 'Slash and burn' agriculture is also known as:",
        options: ['(a) Intensive subsistence farming', '(b) Commercial farming', '(c) Primitive subsistence farming', '(d) Plantation agriculture'],
        answer: '(c) Primitive subsistence farming',
        hint: 'This method involves clearing land by burning vegetation.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_mcq_3',
        type: 'mcq',
        question: '3. Which one of the following is a leguminous crop?',
        options: ['(a) Pulses', '(b) Jowar', '(c) Millets', '(d) Sesame'],
        answer: '(a) Pulses',
        hint: 'These crops fix nitrogen in the soil.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_mcq_4',
        type: 'mcq',
        question: '4. The Green Revolution primarily benefited the production of:',
        options: ['(a) Rice and Jute', '(b) Wheat and Rice', '(c) Tea and Coffee', '(d) Millets and Maize'],
        answer: '(b) Wheat and Rice',
        hint: 'It focused on increasing the yield of staple food grains.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_mcq_5',
        type: 'mcq',
        question: '5. Which state is the largest producer of rubber in India?',
        options: ['(a) Karnataka', '(b) Tamil Nadu', '(c) Kerala', '(d) Assam'],
        answer: '(c) Kerala',
        hint: 'This state has a suitable tropical climate for rubber cultivation.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_sa_6',
        type: 'brief',
        question: '6. Differentiate between Rabi and Kharif crops with examples.',
        answer: '<div style="line-height: 1.6;"><p style="margin-bottom: 1rem;"><strong>Kharif Crops:</strong> Sown with the onset of monsoon (June-July) and harvested in September-October. They require more water. <strong>Examples:</strong> Rice, Maize, Cotton.</p><p><strong>Rabi Crops:</strong> Sown in winter (October-December) and harvested in summer (April-June). They require less water. <strong>Examples:</strong> Wheat, Barley, Gram, Mustard.</p></div>',
        hint: 'Think about the seasons they are grown in.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_sa_7',
        type: 'brief',
        question: '7. What is plantation agriculture? Mention any four of its characteristics.',
        answer: 'Plantation agriculture is a type of commercial farming where a single crop is grown over a very large area. <br/><br/><strong>Characteristics:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>A <strong>single crop</strong> is grown on a large scale.</li><li>It is <strong>capital-intensive</strong>, requiring large investments.</li><li>It uses a lot of <strong>migrant labor</strong>.</li><li>The produce is used as <strong>raw material in industries</strong> (e.g., tea, coffee, rubber).</li></ul>',
        hint: 'Think large-scale, single crop, and for profit.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_sa_8',
        type: 'brief',
        question: '8. Describe the geographical conditions required for the growth of rice.',
        answer: 'Rice is a Kharif crop that requires:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Temperature:</strong> High temperature (above 25°C).</li><li><strong>Rainfall:</strong> High humidity with annual rainfall above 100 cm. It needs irrigation in areas with less rain.</li><li><strong>Soil:</strong> Alluvial clayey soil, which can retain water, is ideal for its growth.</li></ul>',
        hint: 'It needs hot and wet conditions.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_sa_9',
        type: 'brief',
        question: '9. What is the importance of the agriculture sector in the Indian economy?',
        answer: 'Agriculture is the backbone of the Indian economy:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Employment:</strong> It provides a livelihood for more than half of India\'s population.</li><li><strong>Food Security:</strong> It produces food grains to feed the country\'s vast population.</li><li><strong>Raw Materials:</strong> It supplies raw materials for major industries like cotton textiles and sugar.</li></ul>',
        hint: 'Consider jobs, food, and industry.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_sa_10',
        type: 'brief',
        question: '10. Describe any three institutional and technological reforms initiated by the government in the interest of farmers.',
        answer: 'Reforms include:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Institutional Reform (Land Reform):</strong> The government abolished the zamindari system and consolidated fragmented land holdings.</li><li><strong>Technological Reform (Green Revolution):</strong> The government introduced High Yielding Variety (HYV) seeds, fertilizers, and irrigation.</li><li><strong>Institutional Reform (Credit Facilities):</strong> Schemes like the <strong>Kisan Credit Card (KCC)</strong> and Grameen Banks were introduced to provide cheap credit.</li></ul>',
        hint: 'Think about land ownership, technology, and money.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_la_11',
        type: 'long',
        question: '11. Distinguish between Primitive Subsistence Farming and Intensive Subsistence Farming.',
        answer: '<div style="line-height: 1.6;"><p style="margin-bottom: 1rem;"><strong>Primitive Subsistence Farming:</strong></p><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px;"><li>This is \'slash and burn\' agriculture, using simple tools like hoes.</li><li>It relies on monsoon and natural soil fertility.</li><li>Productivity is low as it\'s mainly for the farmer\'s family.</li></ul><p><strong>Intensive Subsistence Farming:</strong></p><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px;"><li>This is practiced on a fixed plot of land in areas with high population pressure.</li><li>It uses high doses of biochemical inputs and irrigation.</li><li>Productivity is high to feed a large population from a small plot of land.</li></ul></div>',
        hint: 'Compare tools, inputs, and population pressure.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_la_12',
        type: 'long',
        question: '12. Explain any five major challenges faced by Indian farmers today.',
        answer: 'Indian farmers face several major challenges:<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Dependence on Monsoon:</strong> A large part of Indian agriculture is still rain-fed and vulnerable to the uncertainties of the monsoon.</li><li><strong>Fragmented Landholdings:</strong> Landholdings are small and scattered, which prevents the use of modern farm machinery.</li><li><strong>Indebtedness:</strong> Small farmers often take loans from informal sources at high interest rates, trapping them in a cycle of debt.</li><li><strong>Lack of Storage and Marketing:</strong> A significant portion of produce is wasted due to a lack of proper storage and farmers often don\'t get a fair price.</li><li><strong>International Competition:</strong> Farmers face stiff competition from subsidized agriculture in developed countries.</li></ol>',
        hint: 'Think about water, land size, money, and markets.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_la_13',
        type: 'long',
        question: '13. Name a major beverage crop and specify the geographical conditions required for its growth. Name two major producing states.',
        answer: '<strong>Beverage Crop:</strong> Tea ☕<br/><br/><strong>Geographical Conditions:</strong> Tea grows well in tropical and sub-tropical climates. It requires:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>Deep, fertile, well-drained soil, rich in humus.</li><li>Warm and moist, frost-free climate throughout the year.</li><li>Frequent showers, evenly distributed over the year.</li></ul><strong>Major Producing States:</strong> <strong>Assam</strong> and <strong>West Bengal</strong> (Darjeeling).',
        hint: 'This drink is very popular in India and Britain.'
    },
    {
        chapter: 'Agriculture',
        id: 'c4_la_14',
        type: 'long',
        question: '14. What is the impact of globalization on Indian agriculture?',
        answer: 'Globalization has had both positive and negative impacts.<br/><br/><strong>Positive Impacts:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>It has provided farmers access to new markets and technologies.</li><li>There has been an increase in the export of high-value crops like spices and fruits.</li></ul><strong>Negative Impacts:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>Indian farmers have to compete with highly subsidized agriculture in developed countries.</li><li>It has led to a focus on cash crops over food crops, affecting food security.</li><li>It has exposed small farmers to price fluctuations in the world market.</li></ul>',
        hint: 'Consider both opportunities and challenges.'
    },

    // Chapter 5: Water Resources
    {
        chapter: 'Water Resources',
        id: 'c5_q_1',
        type: 'brief',
        question: '1. What is water scarcity and what are its main causes?',
        answer: 'Water scarcity is the lack of sufficient available water resources to meet the demands of water usage within a region.<br/><br/><strong>Main Causes:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Over-exploitation:</strong> Excessive use and unequal access to water.</li><li><strong>Growing Population:</strong> A large population needs more water for domestic use and to produce food.</li><li><strong>Industrialization and Urbanization:</strong> Industries use large amounts of water and also pollute existing water sources.</li></ul>',
        hint: 'It\'s not just about lack of rain.'
    },
    {
        chapter: 'Water Resources',
        id: 'c5_q_2',
        type: 'brief',
        question: "2. Why did Jawaharlal Nehru proclaim the dams as the 'temples of modern India'?",
        answer: 'Jawaharlal Nehru called dams the \'temples of modern India\' because he saw them as multi-purpose projects that would solve many of India\'s problems by providing <strong>irrigation for agriculture</strong>, generating <strong>electricity for industries</strong>, and offering <strong>flood control</strong>, all of which were crucial for the progress of a newly independent nation.',
        hint: 'They served many purposes for a developing nation.'
    },
    {
        chapter: 'Water Resources',
        id: 'c5_q_3',
        type: 'brief',
        question: '3. Explain how dams have come under great scrutiny and opposition in recent years.',
        answer: 'Dams have faced opposition for several reasons:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Ecological Damage:</strong> They fragment rivers, harm aquatic life, and submerge forests and soil.</li><li><strong>Displacement of People:</strong> The construction of large dams displaces large numbers of local people, who lose their homes and livelihoods.</li><li><strong>Inter-state Water Disputes:</strong> Dams can create conflicts between states over the sharing of river water.</li></ul>',
        hint: 'Consider the impact on nature, people, and politics.'
    },
    {
        chapter: 'Water Resources',
        id: 'c5_q_4',
        type: 'brief',
        question: '4. Describe how modern adaptations of traditional rainwater harvesting methods are being carried out to conserve and store water.',
        answer: 'Today, traditional methods are being adapted to modern needs. A common adaptation is <strong>Rooftop Rainwater Harvesting</strong>. In this method, rainwater from rooftops is collected using PVC pipes and then either stored in tanks for immediate use or directed into the ground to recharge underground water tables. This is now a common practice in many states to combat water scarcity.',
        hint: 'Think about how you can collect rain from your own house.'
    },
    {
        chapter: 'Water Resources',
        id: 'c5_q_5',
        type: 'brief',
        question: '5. Map Work: Locate and label major dams like Salal, Bhakra Nangal, Tehri, etc.',
        answer: 'You should practice locating the following dams on an outline map of India:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Salal Dam:</strong> Jammu and Kashmir (on Chenab River)</li><li><strong>Bhakra Nangal Dam:</strong> Punjab/Himachal Pradesh border (on Sutlej River)</li><li><strong>Tehri Dam:</strong> Uttarakhand (on Bhagirathi River)</li><li><strong>Rana Pratap Sagar Dam:</strong> Rajasthan (on Chambal River)</li><li><strong>Sardar Sarovar Dam:</strong> Gujarat (on Narmada River)</li><li><strong>Hirakud Dam:</strong> Odisha (on Mahanadi River)</li><li><strong>Nagarjuna Sagar Dam:</strong> Telangana/Andhra Pradesh border (on Krishna River)</li><li><strong>Tungabhadra Dam:</strong> Karnataka (on Tungabhadra River)</li></ul>',
        hint: 'Refer to the map in your textbook for practice.'
    },

    // Chapter 6: Forest and Wildlife Resources
    {
        chapter: 'Forest and Wildlife Resources',
        id: 'c6_q_1',
        type: 'brief',
        question: '1. Differentiate between Reserved, Protected, and Unclassed forests.',
        answer: '<div style="line-height: 1.6;"><p style="margin-bottom: 1rem;"><strong>Reserved Forests:</strong> These are the most valuable forests where rights to activities like grazing and cultivation are banned.</p><p style="margin-bottom: 1rem;"><strong>Protected Forests:</strong> In these lands, rights to activities like grazing and cultivation are allowed subject to certain restrictions.</p><p><strong>Unclassed Forests:</strong> These are other forests and wastelands belonging to both government and private individuals and communities.</p></div>',
        hint: 'The difference is in the level of restriction.'
    },
    {
        chapter: 'Forest and Wildlife Resources',
        id: 'c6_q_2',
        type: 'brief',
        question: '2. "Conservation projects are now focusing on biodiversity rather than on a few of its components." Explain this statement.',
        answer: 'This statement means the focus of conservation has shifted from protecting a single species (like the tiger) to protecting the <strong>entire ecosystem</strong>. Conservationists now understand that to save a species, you must save its entire habitat—the forest, insects, water sources, and all other forms of life. This broader approach is more effective for long-term conservation.',
        hint: 'It\'s about saving the whole house, not just one resident.'
    },
    {
        chapter: 'Forest and Wildlife Resources',
        id: 'c6_q_3',
        type: 'brief',
        question: '3. Describe the role of the community in the conservation of forests and wildlife in India, with examples like the Chipko Movement and Beej Bachao Andolan.',
        answer: 'Local communities are vital for conservation.<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>The famous <strong>Chipko Movement</strong> in the Himalayas, led by local women, successfully resisted deforestation by hugging trees.</li><li>The <strong>Beej Bachao Andolan</strong> in Tehri has promoted biodiversity in agriculture by showing that traditional crop varieties can be grown without synthetic chemicals.</li><li>In Sariska Tiger Reserve, villagers have fought against mining by citing the Wildlife Protection Act.</li></ul>',
        hint: 'Local people are often the best guardians.'
    },
    {
        chapter: 'Forest and Wildlife Resources',
        id: 'c6_q_4',
        type: 'brief',
        question: '4. What steps has the government of India taken to conserve its flora and fauna?',
        answer: 'The Government of India has taken several steps:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>The <strong>Indian Wildlife (Protection) Act</strong> was implemented in 1972.</li><li>It has banned hunting and given legal protection to the habitats of endangered species.</li><li>Specific projects were launched, such as <strong>Project Tiger</strong>, Project Rhino, and Project Elephant.</li><li>A network of <strong>National Parks</strong> and <strong>Wildlife Sanctuaries</strong> has been established.</li></ul>',
        hint: 'Think about laws, specific projects, and protected areas.'
    },
    {
        chapter: 'Forest and Wildlife Resources',
        id: 'c6_q_5',
        type: 'brief',
        question: '5. Explain how human activities have been the major factor in the depletion of forests and wildlife.',
        answer: 'Human activities are the primary cause of depletion:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Expansion of Agriculture:</strong> Clearing forests for farming has been a major cause of deforestation.</li><li><strong>Development Projects:</strong> Large-scale projects like dams and mining have destroyed vast forest areas.</li><li><strong>Grazing and Fuelwood Collection:</strong> Overgrazing and fuelwood collection contribute to forest degradation.</li><li><strong>Hunting and Poaching:</strong> Illegal hunting for commercial purposes has endangered many species.</li></ul>',
        hint: 'Consider farming, building, and direct exploitation.'
    },

    // Chapter 7: Development
    {
        chapter: 'Development',
        id: 'c7_mcq_1',
        type: 'mcq',
        question: '1. Which of the following criteria is used by the World Bank to classify different countries?',
        options: ['(a) Per Capita Income', '(b) Human Development Index', '(c) Literacy Rate', '(d) Gross Domestic Product'],
        answer: '(a) Per Capita Income',
        hint: 'This organization primarily uses an economic measure.'
    },
    {
        chapter: 'Development',
        id: 'c7_mcq_2',
        type: 'mcq',
        question: '2. Development of a country can generally be determined by:',
        options: ['(a) its per capita income', '(b) its average literacy level', '(c) health status of its people', '(d) all of the above'],
        answer: '(d) all of the above',
        hint: 'True development is a broad concept that includes more than just money.'
    },
    {
        chapter: 'Development',
        id: 'c7_mcq_3',
        type: 'mcq',
        question: '3. Which of the following neighbouring countries has a better performance in terms of human development than India?',
        options: ['(a) Bangladesh', '(b) Sri Lanka', '(c) Nepal', '(d) Pakistan'],
        answer: '(b) Sri Lanka',
        hint: 'This island nation has consistently ranked higher on the Human Development Index (HDI).'
    },
    {
        chapter: 'Development',
        id: 'c7_mcq_4',
        type: 'mcq',
        question: '4. What does BMI (Body Mass Index) calculate?',
        options: ['(a) Economic development', '(b) Health and nutrition status', '(c) Literacy level', '(d) Infant mortality rate'],
        answer: '(b) Health and nutrition status',
        hint: 'It is a measure of whether an adult is undernourished or overweight.'
    },
    {
        chapter: 'Development',
        id: 'c7_mcq_5',
        type: 'mcq',
        question: "5. 'Sustainable Development' focuses on:",
        options: ['(a) Present development at the cost of the future.', '(b) Economic development only.', '(c) Meeting the needs of the present without compromising the ability of future generations to meet their needs.', '(d) Industrial growth.'],
        answer: '(c) Meeting the needs of the present without compromising the ability of future generations to meet their needs.',
        hint: 'It is about balancing the present and the future.'
    },
    {
        chapter: 'Development',
        id: 'c7_sa_6',
        type: 'brief',
        question: '6. Why is per capita income not a useful criterion at all to measure the developmental progress of a country? State any three reasons.',
        answer: 'Per capita income is not a completely useful criterion because:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>It hides disparities:</strong> It is an average and does not show how income is distributed.</li><li><strong>It ignores other important aspects:</strong> Development also includes health, education, and security, which are not measured by income alone.</li><li><strong>It does not reflect the quality of life:</strong> A high income may not guarantee a better quality of life (e.g., a pollution-free environment).</li></ul>',
        hint: 'Averages can be misleading.'
    },
    {
        chapter: 'Development',
        id: 'c7_sa_7',
        type: 'brief',
        question: '7. "Different people can have different developmental goals." Support this statement with two examples.',
        answer: 'This statement is true as the notion of development varies.<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li>For a <strong>landless rural labourer</strong>, development might mean more days of work and better wages.</li><li>For an <strong>industrialist</strong>, development might mean building a new dam for electricity. However, this dam might displace the labourer, making it destructive for them.</li></ul>',
        hint: 'What is good for one person might be bad for another.'
    },
    {
        chapter: 'Development',
        id: 'c7_sa_8',
        type: 'brief',
        question: '8. What is the Human Development Index (HDI)? Which organization measures it, and what are its three main components?',
        answer: 'The <strong>Human Development Index (HDI)</strong> is a composite index used to rank countries based on their level of human development.<br/><br/>It is published by the <strong>United Nations Development Programme (UNDP)</strong>.<br/><br/>Its three main components are:<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Health</strong> (Life expectancy at birth).</li><li><strong>Education</strong> (Literacy rate and school enrolment).</li><li><strong>Standard of Living</strong> (Per Capita Income).</li></ol>',
        hint: 'It is a broader measure than just income.'
    },
    {
        chapter: 'Development',
        id: 'c7_sa_9',
        type: 'brief',
        question: '9. Why is the issue of sustainability important for development?',
        answer: 'Sustainability is crucial because it ensures that our current development activities do not harm the environment or deplete resources for future generations. If we overuse non-renewable resources like groundwater or petroleum now, future generations will face a severe crisis. Development must be balanced to meet present needs without compromising the future.',
        hint: 'We have not inherited the Earth from our parents, we have borrowed it from our children.'
    },
    {
        chapter: 'Development',
        id: 'c7_sa_10',
        type: 'brief',
        question: '10. Explain the meaning of public facilities. Why are they important?',
        answer: '<strong>Public facilities</strong> are essential services like schools, hospitals, and public transport that are provided collectively by the government.<br/><br/>They are important because money alone cannot buy everything needed for a good life. For instance, an individual cannot purchase a pollution-free environment or ensure protection from infectious diseases. These must be provided for the collective good, especially for the poor who cannot afford private alternatives.',
        hint: 'Think about things we all need that money can\'t buy individually.'
    },
    {
        chapter: 'Development',
        id: 'c7_la_11',
        type: 'long',
        question: '11. "Money in your pocket cannot buy all the goods and services that you may need to live well." Explain the statement with suitable examples.',
        answer: 'This statement is true because income is not a complete indicator of a good quality of life. Many essential things cannot be bought with money.<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Pollution-free environment:</strong> Money cannot buy clean air and water.</li><li><strong>Protection from diseases:</strong> Money cannot guarantee protection from infectious diseases unless the whole community is protected.</li><li><strong>Peace and Security:</strong> You cannot purchase a peaceful society or protection from crime with money.</li><li><strong>Social Equality:</strong> Money cannot buy a society free from discrimination.</li><li><strong>Access to Unadulterated Goods:</strong> Your money may not be able to protect you from things like adulterated medicines unless there are strong laws.</li></ul>',
        hint: 'Think beyond material goods.'
    },
    {
        chapter: 'Development',
        id: 'c7_la_12',
        type: 'long',
        question: '12. Apart from income, what are the other six things people look for in development?',
        answer: 'Besides seeking more income, people also look for other important non-material goals for a better quality of life. These are:<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Equal Treatment:</strong> People desire to be treated equally, without any discrimination.</li><li><strong>Freedom:</strong> People want freedom of expression, belief, and occupation.</li><li><strong>Security:</strong> People look for a secure environment and job security.</li><li><strong>Respect:</strong> People desire respect from others in their family and community.</li><li><strong>Health Facilities:</strong> Access to proper and affordable healthcare.</li><li><strong>Education:</strong> People aspire to get a good education for themselves and their children.</li></ol>',
        hint: 'What makes life good besides money?'
    },
    {
        chapter: 'Development',
        id: 'c7_la_13',
        type: 'long',
        question: '13. Explain the importance of sustainable development by giving the example of groundwater.',
        answer: 'Sustainable development is crucial because it ensures we can meet our current needs without harming the ability of future generations to meet theirs. The example of groundwater clearly illustrates this.<br/><br/>Groundwater is a renewable resource, but in many parts of India, we are <strong>overusing</strong> it, extracting more water than is being replenished. This is an example of <strong>unsustainable development</strong>. We are fulfilling our current need for water at a high cost to the future. Future generations may face a severe water crisis, affecting their food security and survival.<br/><br/>Therefore, it is essential to use groundwater sustainably by practicing rainwater harvesting and adopting less water-intensive farming methods.',
        hint: 'How does our current water use affect the future?'
    },

    // Chapter 8: Sectors of the Indian Economy
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_mcq_1',
        type: 'mcq',
        question: '1. Which of the following sectors is the largest employer in India?',
        options: ['(a) Primary Sector', '(b) Secondary Sector', '(c) Tertiary Sector', '(d) Public Sector'],
        answer: '(a) Primary Sector',
        hint: 'While its GDP contribution has fallen, this sector (mainly agriculture) still employs the most people.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_mcq_2',
        type: 'mcq',
        question: '2. The task of measuring GDP is undertaken by the:',
        options: ['(a) Central government', '(b) State governments', '(c) Reserve Bank of India', '(d) All of the above'],
        answer: '(a) Central government',
        hint: 'A central ministry is responsible for this huge task.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_mcq_3',
        type: 'mcq',
        question: '3. Which of the following is an example of an activity in the unorganized sector?',
        options: ['(a) A teacher in a government school.', '(b) A clerk in a multinational company.', '(c) A daily wage labourer working for a contractor.', '(d) A doctor in a government hospital.'],
        answer: '(c) A daily wage labourer working for a contractor.',
        hint: 'This sector lacks job security and government regulation.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_mcq_4',
        type: 'mcq',
        question: '4. Underemployment occurs when people:',
        options: ['(a) do not want to work.', '(b) are working less than what they are capable of doing.', '(c) are not paid for their work.', '(d) are working in a lazy manner.'],
        answer: '(b) are working less than what they are capable of doing.',
        hint: 'This is also known as disguised unemployment.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_mcq_5',
        type: 'mcq',
        question: "5. Which act is also known as the 'Right to Work'?",
        options: ['(a) Consumer Protection Act', '(b) Information Technology Act', '(c) MGNREGA 2005', '(d) Right to Information Act'],
        answer: '(c) MGNREGA 2005',
        hint: 'This act provides a legal guarantee of at least 100 days of wage employment in rural areas.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_sa_6',
        type: 'brief',
        question: '6. Distinguish between the organized and unorganized sectors of the economy.',
        answer: '<div style="line-height: 1.6;"><p style="margin-bottom: 1rem;"><strong>Organized Sector:</strong> Registered by the government, follows rules, and offers job security and benefits like paid leave and provident fund.</p><p><strong>Unorganized Sector:</strong> Largely outside government control, with no job security, irregular work, and no benefits.</p></div>',
        hint: 'Think about rules, job security, and benefits.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_sa_7',
        type: 'brief',
        question: '7. Explain the objective of implementing the MGNREGA 2005.',
        answer: 'The main objective of MGNREGA 2005 is to enhance the livelihood security of people in rural areas by <strong>guaranteeing at least 100 days of wage employment</strong> in a financial year to a rural household. It aims to create durable assets (like roads and ponds) and reduce poverty.',
        hint: 'It provides a legal guarantee for employment.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_sa_8',
        type: 'brief',
        question: '8. Why is the tertiary sector becoming so important in India? Give three reasons.',
        answer: 'The tertiary (service) sector is gaining importance because:<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Demand for Basic Services:</strong> The government must provide essential services like hospitals, schools, and transport.</li><li><strong>Development of Other Sectors:</strong> Growth of the primary and secondary sectors increases the demand for services like transport, banking, and trade.</li><li><strong>Rise in Income:</strong> As incomes rise, people demand more services like tourism and private schools.</li></ol>',
        hint: 'Consider basic needs, economic growth, and rising incomes.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_sa_9',
        type: 'brief',
        question: '9. What is disguised unemployment? Explain with an example from the urban or rural areas.',
        answer: 'Disguised unemployment is a situation where more people are employed in a job than are actually needed.<br/><br/><strong>Example:</strong> On a small family farm, five members might be working, but the work only requires two people. The extra three people are disguisedly unemployed because if they were removed, the farm\'s output would not decrease.',
        hint: 'People are working, but not to their full potential.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_sa_10',
        type: 'brief',
        question: '10. How can we create more employment in the rural sector? Suggest any three ways.',
        answer: 'More employment can be created in rural areas by:<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Investing in Rural Infrastructure:</strong> The government can build roads, dams, and canals.</li><li><strong>Promoting Agro-based Industries:</strong> Setting up industries like dal mills or food processing units.</li><li><strong>Improving Services:</strong> Investing in services like education, health, and tourism.</li></ol>',
        hint: 'Think about construction, industry, and services.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_la_11',
        type: 'long',
        question: '11. Compare and contrast the three sectors of the economy (Primary, Secondary, Tertiary) with suitable examples.',
        answer: 'The economy is classified into three interdependent sectors:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Primary Sector:</strong> Involves activities that directly exploit <strong>natural resources</strong>. It is also called the agriculture and related sector. <strong>Examples:</strong> Farming, fishing, mining.</li><li><strong>Secondary Sector:</strong> Transforms natural products into other forms through <strong>manufacturing</strong>. It is also called the industrial sector. <strong>Examples:</strong> A factory making cloth from cotton.</li><li><strong>Tertiary Sector:</strong> Provides <strong>services</strong> that support the other two sectors. It is also called the service sector. <strong>Examples:</strong> Banking, transportation, teaching.</li></ul>',
        hint: 'Nature, Manufacturing, and Services.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_la_12',
        type: 'long',
        question: '12. "The problem of underemployment is not confined only to the agriculture sector in India." Support the statement with examples.',
        answer: 'This statement is correct. While common in agriculture, underemployment is also widespread in the urban unorganized sector.<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Casual Workers:</strong> In cities, there are thousands of casual workers like painters and plumbers who do not find work every day.</li><li><strong>Street Vendors:</strong> People selling goods on carts may spend the entire day working but earn very little, meaning their time is not fully utilized.</li><li><strong>Overstaffed Shops:</strong> In small family-run shops, you might see several family members working when the work could be handled by just one or two.</li></ol>In all these cases, people are working, but they are working less than their potential.',
        hint: 'Think about irregular work in cities.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_la_13',
        type: 'long',
        question: '13. Distinguish between the Public Sector and the Private Sector. Explain the role and importance of the public sector.',
        answer: '<strong>Distinction:</strong><br/><div style="line-height: 1.6;"><p style="margin-bottom: 1rem;"><strong>Public Sector:</strong> Assets are owned by the <strong>government</strong> and the main motive is <strong>public welfare</strong>. <strong>Examples:</strong> Indian Railways, Post Office.</p><p><strong>Private Sector:</strong> Assets are owned by <strong>private individuals or companies</strong> and the main motive is to <strong>earn profit</strong>. <strong>Examples:</strong> Reliance Industries, TISCO.</p></div><br/><strong>Role and Importance of the Public Sector:</strong><br/>The public sector is crucial for a country\'s development because it provides essential infrastructure like roads and electricity, undertakes projects that require huge investments, and ensures the availability of essential services like healthcare and education to all citizens at an affordable cost.',
        hint: 'Government vs. Private ownership and motive.'
    },
    {
        chapter: 'Sectors of the Indian Economy',
        id: 'c8_la_14',
        type: 'long',
        question: '14. Explain how to protect workers in the unorganized sector.',
        answer: 'Workers in the unorganized sector are vulnerable and need protection, which can be provided in several ways:<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.6;"><li><strong>Strict Enforcement of Laws:</strong> The government must enforce laws regarding minimum wages, working hours, and safe working conditions.</li><li><strong>Social Security:</strong> The government can provide social security schemes like pensions, health insurance, and provident funds.</li><li><strong>Affordable Credit:</strong> Providing access to cheap loans can help small-scale producers and workers start their own businesses.</li><li><strong>Support for Small Producers:</strong> The government can help small artisans and farmers by providing raw materials and helping them market their products.</li><li><strong>Promoting Cooperatives:</strong> Encouraging workers to form cooperatives can give them better bargaining power.</li></ol>',
        hint: 'Think about legal, financial, and social safety nets.'
    }
];

// --- THEME SWITCHER COMPONENT ---
const ThemeSwitcher = ({ currentTheme, setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const styles = {
        container: {
            position: 'relative',
        },
        button: {
            padding: '12px',
            borderRadius: '9999px',
            backgroundColor: currentTheme.cardBg,
            color: currentTheme.text,
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            border: 'none',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s',
        },
        panel: {
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '8px',
            width: '192px',
            backgroundColor: currentTheme.cardBg,
            borderRadius: '8px',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
            padding: '8px',
            zIndex: 20, // Increased z-index
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
        },
        themeButton: {
            width: '32px',
            height: '32px',
            borderRadius: '9999px',
            transition: 'transform 0.2s',
            border: 'none',
            cursor: 'pointer',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        }
    };

    return (
        <div style={styles.container}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={styles.button}
                title="Change Theme"
            >
                <PaletteIcon />
            </button>
            {isOpen && (
                <div style={styles.panel}>
                    {Object.entries(themes).map(([key, theme]) => {
                        const isDark = theme.name.includes('(D)');
                        const themeButtonStyle = {
                            ...styles.themeButton,
                            background: isDark
                                ? `linear-gradient(90deg, #2d3748 50%, ${theme.previewColor} 50%)`
                                : theme.previewColor,
                        };
                        return (
                            <button
                                key={key}
                                onClick={() => {
                                    setCurrentTheme(themes[key].styles);
                                    setIsOpen(false);
                                }}
                                style={themeButtonStyle}
                                title={theme.name}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// --- TIMER COMPONENT ---
const Timer = ({ currentTheme }) => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = () => {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
            borderRadius: '9999px',
            backgroundColor: currentTheme.cardBg,
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            color: currentTheme.text
        },
        timeText: {
            fontFamily: 'monospace',
            fontSize: '1.125rem',
        },
        button: {
            padding: '8px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
        }
    };

    return (
        <div style={styles.container}>
            <TimerIcon />
            <span style={styles.timeText}>{formatTime()}</span>
            <button 
                onClick={() => setIsActive(!isActive)} 
                style={{...styles.button, backgroundColor: currentTheme.primaryLight, color: currentTheme.primary}}
            >
                {isActive ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button 
                onClick={() => { setTime(0); setIsActive(false); }} 
                style={{...styles.button, backgroundColor: '#e5e7eb', color: '#4b5563'}}
            >
                <ResetIcon />
            </button>
        </div>
    );
};


// --- BACK TO TOP BUTTON COMPONENT ---
const BackToTopButton = ({ currentTheme }) => {
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
    
    const style = {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        padding: '12px',
        borderRadius: '9999px',
        color: 'white',
        backgroundColor: currentTheme.primary,
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <button
            style={style}
            onClick={scrollToTop}
            aria-label="Go to top"
        >
            <ArrowUpIcon />
        </button>
    );
};


// --- QUESTION CARD COMPONENT ---
const QuestionCard = ({ item, showAll, currentTheme }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectionStatus, setSelectionStatus] = useState(null);

    useEffect(() => {
        setIsAnswerVisible(showAll);
        if (item.type === 'mcq') {
            if (showAll) {
                setSelectedOption(item.answer);
                setSelectionStatus('correct');
            } else {
                setSelectedOption(null);
                setSelectionStatus(null);
            }
        }
    }, [showAll, item.type, item.answer]);

    const handleOptionClick = (option) => {
        if (selectionStatus) return;
        setSelectedOption(option);
        setSelectionStatus(option === item.answer ? 'correct' : 'incorrect');
    };

    const getOptionStyle = (option) => {
        const baseStyle = {
            width: '100%',
            textAlign: 'left',
            padding: '12px',
            border: `2px solid ${currentTheme.text}20`,
            borderRadius: '8px',
            transition: 'all 0.3s',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: currentTheme.text
        };

        if (selectionStatus) {
            baseStyle.cursor = 'not-allowed';
            if (option === item.answer) {
                return { ...baseStyle, backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#166534' };
            }
            if (option === selectedOption) {
                return { ...baseStyle, backgroundColor: '#fee2e2', borderColor: '#ef4444', color: '#991b1b' };
            }
            return { ...baseStyle, color: '#6b7280', borderColor: '#e5e7eb' };
        }
        return baseStyle;
    };
    
    const cardStyle = {
        backgroundColor: currentTheme.cardBg,
        borderRadius: '16px',
        padding: '32px',
        marginBottom: '24px',
        boxShadow: `0 10px 15px -3px ${currentTheme.cardShadow}, 0 4px 6px -4px ${currentTheme.cardShadow}`,
        transition: 'all 0.3s'
    };

    const questionTextStyle = {
        fontWeight: '600',
        color: currentTheme.text,
        flex: 1,
        lineHeight: '1.6'
    };

    const hintButtonStyle = {
        padding: '8px',
        borderRadius: '9999px',
        color: '#f59e0b',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        flexShrink: 0
    };
    
    const hintBoxStyle = {
        padding: '12px',
        backgroundColor: currentTheme.hintBg,
        border: `1px dashed ${currentTheme.hintBorder}`,
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: currentTheme.hintText,
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, margin-top 0.3s',
        maxHeight: isHintVisible ? '100px' : '0',
        opacity: isHintVisible ? 1 : 0,
        marginTop: isHintVisible ? '12px' : '0'
    };
    
     const answerBoxStyle = {
        padding: '16px',
        backgroundColor: `${currentTheme.text}08`,
        border: `1px dashed ${currentTheme.text}20`,
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, margin-top 0.3s',
        maxHeight: isAnswerVisible ? '500px' : '0',
        opacity: isAnswerVisible ? 1 : 0,
        marginTop: isAnswerVisible ? '16px': '0'
    };


    return (
        <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                <p style={questionTextStyle} dangerouslySetInnerHTML={{ __html: item.question }} />
                {item.hint && 
                    <button 
                        onClick={() => setIsHintVisible(!isHintVisible)} 
                        style={hintButtonStyle} 
                        title="Show Hint"
                    >
                        <HintIcon />
                    </button>
                }
            </div>
            
            <div style={hintBoxStyle}>
                <strong>Hint:</strong> {item.hint}
            </div>

            {item.type === 'mcq' && (
                <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {item.options.map((option, index) => (
                        <button key={index} onClick={() => handleOptionClick(option)} disabled={!!selectionStatus} style={getOptionStyle(option)}>{option}</button>
                    ))}
                </div>
            )}

            {item.type !== 'mcq' && (
                <>
                    <button 
                        onClick={() => setIsAnswerVisible(!isAnswerVisible)} 
                        style={{
                            marginTop: '16px',
                            padding: '8px 20px',
                            borderRadius: '9999px',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            transition: 'all 0.2s',
                            border: 'none',
                            cursor: 'pointer',
                            backgroundColor: isAnswerVisible ? '#4b5563' : currentTheme.primaryLight,
                            color: isAnswerVisible ? 'white' : currentTheme.primary
                        }}
                    >
                        {isAnswerVisible ? 'Hide Answer' : 'View Answer'}
                    </button>
                    <div style={answerBoxStyle}>
                        <div style={{lineHeight: 1.6, color: currentTheme.text}}>
                            <strong style={{color: currentTheme.text}}>Answer:</strong>
                            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};


// --- MAIN APP COMPONENT (Refactored for Inline Styles & Page Navigation) ---
export default function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.sunriseOrange.styles);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [showAllAnswers, setShowAllAnswers] = useState(false);
    
    useEffect(() => {
        document.body.style.backgroundColor = currentTheme.bg;
        document.body.style.color = currentTheme.text;
        document.body.style.fontFamily = 'sans-serif';
        document.body.style.transition = 'background-color 0.5s, color 0.5s';
    }, [currentTheme]);

    const chapters = [...new Set(worksheetData.map(item => item.chapter))];

    const getChapterIcon = (chapterName) => {
        if (chapterName.toLowerCase().includes('nationalism') || chapterName.toLowerCase().includes('global world')) return <HistoryIcon />;
        if (chapterName.toLowerCase().includes('resource') || chapterName.toLowerCase().includes('agriculture')) return <GeographyIcon />;
        if (chapterName.toLowerCase().includes('development') || chapterName.toLowerCase().includes('sectors')) return <EconomicsIcon />;
        return null;
    };
    
    const styles = {
        appContainer: {
            minHeight: '100vh',
            padding: '16px',
        },
        mainContent: {
            maxWidth: '896px',
            margin: '0 auto',
        },
        header: {
            position: 'relative',
            textAlign: 'center',
            marginBottom: '40px',
            marginTop: '70px'
        },
        h1: {
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: currentTheme.heading,
        },
        subheading: {
            display: 'inline-block',
            padding: '8px 16px',
            marginTop: '16px',
            fontSize: '1rem',
            fontWeight: '500',
            borderRadius: '9999px',
            backgroundColor: currentTheme.primaryLight,
            color: currentTheme.primary,
        },
        themeSwitcherContainer: {
            position: 'absolute',
            top: 0,
            right: 0,
        },
        chapterGrid: {
            marginTop: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
        },
        chapterCard: {
            backgroundColor: currentTheme.cardBg,
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: `0 10px 15px -3px ${currentTheme.cardShadow}, 0 4px 6px -4px ${currentTheme.cardShadow}`,
            transition: 'transform 0.3s, box-shadow 0.3s',
        },
        chapterCardContent: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        chapterIcon: {
            color: currentTheme.primary
        },
        chapterTitle: {
            fontSize: '1.125rem',
            fontWeight: '600',
            color: currentTheme.text
        },
        arrowIcon: {
             color: '#9ca3af',
        },
         worksheetHeader: {
            position: 'relative',
            textAlign: 'center',
            marginBottom: '40px',
            marginTop: '70px'                           
        },
        backButton: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: currentTheme.primary,
            textDecoration: 'none',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
        },
        controlsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            margin: '32px 0',
        },
        showAnswersButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '9999px',
            fontWeight: '600',
            color: 'white',
            backgroundColor: currentTheme.primary,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s, box-shadow 0.3s',
        }
    };


    if (!selectedChapter) {
        return (
             <div style={styles.appContainer}>
                <div style={styles.mainContent}>
                    <header style={styles.header}>
                        <h1 style={{...styles.h1, fontSize: '3rem'}}>Important Questions</h1>
                         <p style={styles.subheading}>CBSE Class 10 Social Science</p>
                        <div style={styles.themeSwitcherContainer}>
                            <ThemeSwitcher currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
                        </div>
                    </header>
                    <main style={styles.chapterGrid}>
                        {chapters.map(chapter => (
                            <div key={chapter} onClick={() => setSelectedChapter(chapter)} style={styles.chapterCard}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 25px 50px -12px ${currentTheme.cardShadow}`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 10px 15px -3px ${currentTheme.cardShadow}, 0 4px 6px -4px ${currentTheme.cardShadow}`; }}
                            >
                                <div style={styles.chapterCardContent}>
                                    <div style={styles.chapterIcon}>
                                        {getChapterIcon(chapter)}
                                    </div>
                                    <h3 style={styles.chapterTitle}>{chapter}</h3>
                                </div>
                                <div style={styles.arrowIcon}>
                                    <ArrowRightIcon />
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        )
    }

    return (
        <div style={styles.appContainer}>
            <div style={styles.mainContent}>
                 <header style={ styles.worksheetHeader}>
                     <button onClick={() => setSelectedChapter(null)} style={styles.backButton}>
                        &larr; Back
                     </button>
                    <h1 style={styles.h1}>{selectedChapter}</h1>
                    <div style={styles.themeSwitcherContainer}>
                        <ThemeSwitcher currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
                    </div>
                </header>
                
                <div style={styles.controlsContainer}>
                    <button onClick={() => setShowAllAnswers(!showAllAnswers)} style={styles.showAnswersButton}>
                        {showAllAnswers ? <EyeOffIcon /> : <EyeIcon />}
                        {showAllAnswers ? 'Hide All Answers' : 'Show All Answers'}
                    </button>
                    <Timer currentTheme={currentTheme} />
                </div>

                <div>
                    {worksheetData
                        .filter(item => item.chapter === selectedChapter)
                        .map(item => (
                            <QuestionCard 
                                key={item.id} 
                                item={item} 
                                showAll={showAllAnswers} 
                                currentTheme={currentTheme} 
                            />
                        ))
                    }
                </div>
            </div>
            <BackToTopButton currentTheme={currentTheme}/>
        </div>
    );
}

