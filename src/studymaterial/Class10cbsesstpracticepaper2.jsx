import React, { useState, useEffect } from 'react';

// --- THEME DEFINITIONS ---
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

// --- WORKSHEET DATA FOR SET 2 ---
const worksheetData = [
    { section: 'A', id: 'a1', question: '1. Who among the following was the architect of the unification of Germany?', options: ['(a) Giuseppe Mazzini', '(b) Otto von Bismarck', '(c) Napoleon Bonaparte', '(d) King Victor Emmanuel II'], answer: '(b) Otto von Bismarck', hint: 'He was the Chancellor of Prussia known for his "Blood and Iron" policy.' },
    { section: 'A', id: 'a2', question: '2. Which type of soil is ideal for growing cotton?', options: ['(a) Alluvial Soil', '(b) Laterite Soil', '(c) Red Soil', '(d) Black Soil (Regur Soil)'], answer: '(d) Black Soil (Regur Soil)', hint: 'This soil is also known as Regur soil and is found in the Deccan Plateau.' },
    { section: 'A', id: 'a3', question: "3. Which of the following is an example of a 'Coming Together' federation?", options: ['(a) India', '(b) Spain', '(c) USA', '(d) Belgium'], answer: '(c) USA', hint: 'In this type of federation, independent states join to form a larger unit.' },
    { section: 'A', id: 'a4', question: '4. Which of the following is NOT a feature of the unorganized sector?', options: ['(a) Small and scattered units', '(b) Rules and regulations are not followed', '(c) Paid leave and job security', '(d) Low and irregular wages'], answer: '(c) Paid leave and job security', hint: 'Think about the benefits that are typically associated with formal, registered jobs.' },
    { section: 'A', id: 'a5', question: '5. What is the formal term for the money that a borrower pays to a lender for using their funds?', options: ['(a) Principal', '(b) Collateral', '(c) Interest', '(d) Deposit'], answer: '(c) Interest', hint: 'It is the cost of borrowing money, usually expressed as a percentage.' },
    { section: 'B', id: 'b1', type: 'brief', question: '6. Mention any two factors that have led to the growth of the Tertiary sector in India.', answer: '<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li>The development of the <strong>Primary and Secondary sectors</strong> leads to a greater demand for services like transport, storage, and trade.</li><li><strong>Increased income levels</strong> have led to a rising demand for consumer services like tourism, private schools, professional training, and restaurants.</li></ul>', hint: 'Consider how development in farming/industry and rising personal wealth affect the need for services.' },
    { section: 'B', id: 'b2', type: 'brief', question: '7. What was the main reason for the Khilafat Movement?', answer: 'The Khilafat Movement (1919-1924) was launched by Indian Muslims to protest against the harsh treatment meted out to the <strong>Caliph (Khalifa)</strong> of the Ottoman Empire by Britain after the First World War. The Caliph was seen as the spiritual head of the Islamic world.', hint: 'The movement was related to a religious leader in Turkey after World War I.' },
    { section: 'B', id: 'b3', type: 'brief', question: "8. Define the term 'water scarcity'. Give one reason for it.", answer: '<strong>Definition:</strong> Water scarcity is the lack of sufficient available water resources to meet the demands of water usage within a region.<br><strong>Reason:</strong> Over-exploitation and mismanagement of water resources due to a <strong>large and growing population</strong> and consequent greater demand for water.', hint: 'Think about the balance between available water and the number of people who need it.' },
    { section: 'B', id: 'b4', type: 'brief', question: '9. State any two provisions of the Indian Wildlife (Protection) Act, 1972.', answer: '<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li>It <strong>banned hunting</strong> of endangered species and gave legal protection to their habitats.</li><li>It established a list of <strong>protected species</strong> and made the trade of these species and their products illegal.</li></ul>', hint: 'The act focused on protecting animals and the places they live.' },
    { section: 'C', id: 'c1', type: 'brief', question: '10. Explain any three reasons why the multi-purpose river valley projects have come under great scrutiny and opposition.', answer: 'Three reasons for opposition to multi-purpose projects are:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Displacement of People:</strong> The construction of large dams leads to the submergence of vast areas of land, displacing local communities and causing loss of livelihoods.</li><li><strong>Ecological Damage:</strong> Dams fragment rivers, affect the aquatic fauna (especially their migration), and lead to excessive sedimentation.</li><li><strong>Inter-state Water Disputes:</strong> Sharing of dam water often becomes a source of conflict between different states.</li></ul>', hint: 'Consider the impact on people, nature, and politics between states.' },
    { section: 'C', id: 'c2', type: 'brief', question: '11. How does religion influence politics in India? Explain three points.', answer: 'Religion influences politics in the following ways:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Moral Values:</strong> Religious ideas and values often inform political discourse, like Mahatma Gandhi\'s belief that politics must be guided by ethics from all religions.</li><li><strong>Communalism:</strong> Religion can be used to mobilize one community against another, which can cause political conflict.</li><li><strong>Electoral Politics:</strong> Political parties often use religious symbols and appeal to religious sentiments to woo voters during elections.</li></ul>', hint: 'Think about how leaders use it for guidance, division, and votes.' },
    { section: 'C', id: 'c3', type: 'brief', question: '12. "Nationalism spreads when people begin to believe that they are all part of the same nation." Justify the statement with reference to the emergence of collective belonging in India.', answer: 'The sense of collective belonging was crucial for the spread of nationalism in India. This was achieved through:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Shared Symbols:</strong> The image of Bharat Mata and the tricolour flag provided a visual identity for the nation.</li><li><strong>Revival of Folklore:</strong> Nationalists recorded folk tales and songs to revive a sense of national pride.</li><li><strong>Reinterpretation of History:</strong> Nationalists wrote about India\'s glorious past to counter the British narrative and instill self-confidence.</li></ul>', hint: 'How did symbols, stories, and history unite people against the British?' },
    { section: 'C', id: 'c4', type: 'brief', question: "13. Describe the role of 'Silk Routes' in the pre-modern world.", answer: 'The Silk Routes were a vibrant network of trade and cultural links in the pre-modern world:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li>They connected Asia with Europe and North Africa, facilitating long-distance <strong>trade</strong> in goods like Chinese silk and Indian spices.</li><li>They served as conduits for <strong>cultural exchange</strong>, as ideas, religions (like Buddhism), and knowledge traveled along these routes.</li><li>They also facilitated the spread of diseases and pathogens, contributing to global pandemics.</li></ul>', hint: 'They were more than just trade routes for silk; they moved ideas and beliefs too.' },
    { section: 'C', id: 'c5', type: 'brief', question: '14. What are the two main types of credit sources? Give one advantage of each.', answer: 'The two main types of credit sources are:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Formal Sector Credit:</strong> Includes loans from banks and cooperatives. <strong>Advantage:</strong> They charge a lower rate of interest and are regulated by the RBI.</li><li><strong>Informal Sector Credit:</strong> Includes loans from moneylenders, traders, friends, etc. <strong>Advantage:</strong> It is easily accessible without much paperwork or collateral.</li></ul>', hint: 'One is official (banks), the other is unofficial (moneylenders).' },
    { section: 'D', id: 'd1', type: 'long', question: '15. Describe the role of culture (language, music, folklore) in creating the idea of the nation in Europe. OR Explain the circumstances that led to the Jallianwala Bagh incident. What were its consequences?', answer: '<strong>Option 1: Role of culture in creating the nation in Europe:</strong><br/>Culture played a vital role in shaping the idea of the nation, a phenomenon known as Romanticism. <ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Language:</strong> In places like Poland, the Polish language became a symbol of resistance against Russian dominance.</li><li><strong>Folklore:</strong> Philosophers like Johann Gottfried Herder argued that true German culture was found in folk songs, poetry, and dances, which helped build a national spirit.</li><li><strong>Music & Art:</strong> Composers and artists celebrated national struggles and focused on emotions to create a sense of a shared collective heritage.</li></ul><br/><strong>Option 2: Jallianwala Bagh Incident:</strong><br/><strong>Circumstances:</strong> The incident was a result of the repressive <strong>Rowlatt Act of 1919</strong>, against which Mahatma Gandhi had called for a hartal. The British imposed martial law in Amritsar to suppress the protests.<br/><strong>Incident:</strong> On April 13, 1919, a peaceful crowd gathered in Jallianwala Bagh. General Dyer blocked the only exit and ordered his troops to fire on the unarmed civilians, killing hundreds.<br/><strong>Consequences:</strong> The massacre led to widespread protests, strikes, and brutal repression by the British. It was a turning point that destroyed faith in British justice and strengthened the nationalist movement.', hint: 'For Europe, think about art and stories. For India, think about the repressive British law that led to the tragedy.' },
    { section: 'D', id: 'd2', type: 'long', question: '16. What is power-sharing? Why is it desirable in a democracy? Explain with two reasons. OR Distinguish between the Primary, Secondary, and Tertiary sectors of the economy, giving one example of each. Why is the Tertiary sector becoming so important in India?', answer: '<strong>Option 1: Power-Sharing:</strong><br/><strong>Meaning:</strong> Power-sharing is a system where political power is distributed among different organs of government, levels of government, or social groups.<br/><strong>Desirability:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Prudential Reason:</strong> It helps reduce conflict between social groups, ensuring political stability.</li><li><strong>Moral Reason:</strong> It is the very spirit of democracy, ensuring that citizens have a stake in the system.</li></ul><br/><strong>Option 2: Economic Sectors:</strong><ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Primary Sector:</strong> Directly uses natural resources. <strong>Example:</strong> Agriculture.</li><li><strong>Secondary Sector:</strong> Manufacturing and industry. <strong>Example:</strong> Making cloth from cotton.</li><li><strong>Tertiary Sector:</strong> Provides services. <strong>Example:</strong> Banking, transport.</li></ul><strong>Importance of Tertiary Sector:</strong> It is growing in India due to rising incomes, demand for services from other sectors, and the growth of IT services. It is now the largest contributor to India\'s GDP.', hint: 'For power-sharing, think stability vs. rights. For sectors, think farming, factories, and services.' },
    { section: 'D', id: 'd3', type: 'long', question: '17. What is resource planning? Explain the three stages involved in the process of resource planning in India.', answer: '<strong>Resource planning</strong> is the technique for the proper and judicious utilisation of resources. It is essential for a country like India with diverse resource availability.<br/><strong>Three Stages of Resource Planning:</strong><ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Identification and Inventory:</strong> This involves surveying, mapping, and measuring the quality and quantity of resources across the country.</li><li><strong>Evolving a Planning Structure:</strong> This involves creating a plan with the right technology, skills, and institutional setup to implement resource development.</li><li><strong>Matching with National Development:</strong> This involves aligning the resource development plans with the overall national development plans for a balanced approach.</li></ol>', hint: 'The three stages are: find what you have, make a plan to use it, and match that plan with the country\'s goals.' },
    { section: 'E', id: 'e1', type: 'brief', question: '18. Case-Based Question: (i) What is the core idea of \'sustainable development\'? (ii) Give an example of unsustainable development mentioned in the passage. (iii) Why is it essential to integrate economic, social, and environmental objectives for development?', answer: '<ol style="list-style-type: decimal; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>Core Idea:</strong> The core idea is to meet the needs of the present without compromising the ability of future generations to meet their own needs.</li><li><strong>Example:</strong> The rapid extraction of groundwater for agriculture and industry.</li><li><strong>Reason for Integration:</strong> It is essential because development that focuses only on economic growth at the expense of the environment and social equity is not durable or long-lasting.</li></ol>', hint: 'The case is about balancing today\'s needs with the future, and not damaging the environment for profit.' },
    { section: 'F', id: 'f1', type: 'brief', question: '19. On an outline map of India, locate and label the following: (a) A major wheat-producing state. (b) The place associated with the calling off of the Non-Cooperation Movement. (c) A state with a significant presence of laterite soil.', answer: 'The solution requires marking on a physical map:<ul style="list-style-type: disc; list-style-position: outside; padding-left: 20px; margin-top: 8px; line-height: 1.5;"><li><strong>(a) A major wheat-producing state:</strong> Punjab or Uttar Pradesh.</li><li><strong>(b) The place associated with the calling off of the Non-Cooperation Movement:</strong> Chauri Chaura (in Uttar Pradesh).</li><li><strong>(c) A state with a significant presence of laterite soil:</strong> Kerala, Karnataka or parts of Odisha.</li></ul>', hint: 'Recall key agricultural regions, historical locations from the nationalist movement, and soil distribution.' },
];


// --- STYLESHEET COMPONENT ---
// This component injects a <style> tag with all necessary CSS.
const StyleSheet = () => (
    <style>{`
        @keyframes pulse {
            50% { opacity: .5; }
        }
        body {
            font-family: sans-serif;
            background-color: var(--theme-bg);
            color: var(--theme-text);
            transition: background-color 0.5s, color 0.5s;
        }
        .prose strong {
            color: var(--theme-text);
        }
        .container {
            max-width: 896px;
            margin: 0 auto;
            padding: 1rem;
        }
        @media (min-width: 640px) { .container { padding: 1.5rem; } }
        @media (min-width: 768px) { .container { padding: 2rem; } }
        
        .header {
            position: relative;
            text-align: center;
            margin-bottom: 1rem;
            margin-top: 3rem;
        }
        .main-title {
            font-size: 2.25rem;
            font-weight: bold;
            color: var(--theme-heading);
        }
        @media (min-width: 640px) { .main-title { font-size: 3rem; } }

        .theme-switcher-container {
            position: absolute;
            top: 0;
            right: 0;
        }

        .controls-container {
            text-align: center;
            margin-bottom: 2.5rem;
        }
        .chapter-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            margin-top: 1rem;
            font-size: 1rem;
            font-weight: 500;
            border-radius: 9999px;
            background-color: var(--theme-primary-light);
            color: var(--theme-primary);
        }
        .buttons-panel {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        @media (min-width: 640px) { .buttons-panel { flex-direction: row; } }

        .show-all-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            color: white;
            background-color: var(--theme-primary);
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
            transition: all 0.3s;
        }
        .show-all-btn:hover {
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
            transform: translateY(-2px);
        }

        .section-title {
            font-size: 1.875rem;
            font-weight: bold;
            color: var(--theme-heading);
            margin-bottom: 2rem;
            padding-bottom: 0.75rem;
            border-bottom: 4px solid var(--theme-heading-border);
        }

        .back-to-top-btn {
            position: fixed;
            bottom: 1.5rem;
            right: 1.5rem;
            padding: 0.75rem;
            border-radius: 9999px;
            color: white;
            background-color: var(--theme-primary);
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
            transition: opacity 0.3s;
        }
    `}</style>
);


// --- THEME SWITCHER COMPONENT ---
const ThemeSwitcher = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const containerStyle = { position: 'relative' };
    const buttonStyle = {
        padding: '0.75rem',
        borderRadius: '9999px',
        backgroundColor: 'var(--theme-card-bg)',
        color: 'var(--theme-text)',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        transition: 'all 0.3s'
    };
    const panelStyle = {
        position: 'absolute',
        top: '100%',
        right: 0,
        marginTop: '0.5rem',
        width: '12rem',
        backgroundColor: 'var(--theme-card-bg)',
        borderRadius: '0.5rem',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        padding: '0.5rem',
        zIndex: 10
    };

    return (
        <div style={containerStyle}>
            <button onClick={() => setIsOpen(!isOpen)} style={buttonStyle} title="Change Theme">
                <PaletteIcon />
            </button>
            {isOpen && (
                <div style={panelStyle}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                        {Object.entries(themes).map(([key, theme]) => {
                             const isDark = theme.name.includes('(D)');
                             const themeButtonStyle = {
                                 width: '2rem',
                                 height: '2rem',
                                 borderRadius: '9999px',
                                 transition: 'transform 0.2s',
                                 cursor: 'pointer',
                                 border: 'none',
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
                                    style={themeButtonStyle}
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
    
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => { setTime((t) => t + 1); }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = () => {
        const h = Math.floor(time / 3600).toString().padStart(2, '0');
        const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const s = (time % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const timerContainerStyle = { display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', borderRadius: '9999px', backgroundColor: 'var(--theme-card-bg)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)'};
    const timeDisplayStyle = { fontFamily: 'monospace', fontSize: '1.125rem' };
    const controlButtonStyle = { padding: '0.5rem', borderRadius: '9999px', transition: 'all 0.3s', border: 'none', cursor: 'pointer', display: 'flex' };
    const playPauseStyle = { ...controlButtonStyle, backgroundColor: 'var(--theme-primary-light)', color: 'var(--theme-primary)' };
    const resetStyle = { ...controlButtonStyle, backgroundColor: '#e5e7eb', color: '#4b5563' };

    return (
        <div style={timerContainerStyle}>
            <TimerIcon />
            <span style={timeDisplayStyle}>{formatTime()}</span>
            <button onClick={() => setIsActive(!isActive)} style={playPauseStyle}>
                {isActive ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={() => { setTime(0); setIsActive(false); }} style={resetStyle}>
                <ResetIcon />
            </button>
        </div>
    );
};

// --- BACK TO TOP BUTTON COMPONENT ---
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            className="back-to-top-btn"
            style={{ opacity: isVisible ? 1 : 0, cursor: 'pointer', border: 'none' }}
            onClick={scrollToTop}
            aria-label="Go to top"
        >
            <ArrowUpIcon />
        </button>
    );
};


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

    // Base Styles
    const cardStyle = { backgroundColor: 'var(--theme-card-bg)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 10px 15px -3px var(--theme-card-shadow), 0 4px 6px -4px var(--theme-card-shadow)', transition: 'all 0.3s' };
    const questionHeaderStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' };
    const questionTextStyle = { fontWeight: 600, color: 'var(--theme-text)', flex: '1 1 0%' };
    const hintButtonStyle = { padding: '0.5rem', borderRadius: '9999px', color: '#f59e0b', transition: 'background-color 0.2s', flexShrink: 0, border: 'none', background: 'transparent', cursor: 'pointer' };
    const hintBoxStyle = { marginTop: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--theme-hint-bg)', border: '1px dashed var(--theme-hint-border)', borderRadius: '0.5rem', fontSize: '0.875rem', color: 'var(--theme-hint-text)' };
    const answerToggleButtonStyle = { marginTop: '1rem', padding: '0.5rem 1.25rem', borderRadius: '9999px', fontWeight: 500, fontSize: '0.875rem', transition: 'all 0.2s', border: 'none', cursor: 'pointer', backgroundColor: isAnswerVisible ? '#4b5563' : '#e5e7eb', color: isAnswerVisible ? 'white' : '#1f2937' };
    const answerContainerStyle = { marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(248, 250, 252, 0.5)', border: '1px dashed #e5e7eb', borderRadius: '0.5rem' };
    const answerLabelStyle = { fontWeight: 'bold', color: 'var(--theme-text)' };
    const mcqContainerStyle = { marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' };

    const getOptionStyle = (option) => {
        const base = { width: '100%', textAlign: 'left', padding: '0.75rem', border: '2px solid', borderRadius: '0.5rem', transition: 'all 0.3s', cursor: 'pointer', background: 'transparent' };
        if (selectionStatus) {
            base.cursor = 'not-allowed';
            if (option === item.answer) return { ...base, backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#166534', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' };
            if (option === selectedOption) return { ...base, backgroundColor: '#fee2e2', borderColor: '#ef4444', color: '#991b1b' };
            return { ...base, color: '#64748b', borderColor: '#e2e8f0' };
        }
        return { ...base, borderColor: '#cbd5e1' };
    };
    
    return (
        <div style={cardStyle}>
            <div style={questionHeaderStyle}>
                <p style={questionTextStyle} dangerouslySetInnerHTML={{__html: item.question}}/>
                {item.hint && <button onClick={() => setIsHintVisible(!isHintVisible)} style={hintButtonStyle} title="Show Hint"><HintIcon /></button>}
            </div>
            
            <div style={{ transition: 'all 0.5s ease-in-out', display: 'grid', gridTemplateRows: isHintVisible ? '1fr' : '0fr', opacity: isHintVisible ? 1 : 0 }}>
                <div style={{ overflow: 'hidden' }}>
                    <div style={hintBoxStyle}><strong>Hint:</strong> {item.hint}</div>
                </div>
            </div>

            {item.options && (
                <div style={mcqContainerStyle}>
                    {item.options.map((option, index) => (
                        <button key={index} onClick={() => handleOptionClick(option)} disabled={!!selectionStatus} style={getOptionStyle(option)}>{option}</button>
                    ))}
                </div>
            )}

            {!item.options && (
                <>
                    <button onClick={toggleAnswer} style={answerToggleButtonStyle}>{isAnswerVisible ? 'Hide Answer' : 'View Answer'}</button>
                    <div style={{ transition: 'all 0.5s ease-in-out', display: 'grid', gridTemplateRows: isAnswerVisible ? '1fr' : '0fr', opacity: isAnswerVisible ? 1 : 0 }}>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={answerContainerStyle}>
                                <div className="prose">
                                    <strong style={answerLabelStyle}>Answer:</strong>
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

    const sections = { 'A': 'Section A: Multiple Choice Questions', 'B': 'Section B: Very Short Answer Questions', 'C': 'Section C: Short Answer Questions', 'D': 'Section D: Long Answer Questions', 'E': 'Section E: Case-Based Question', 'F': 'Section F: Map Skill Based Question' };
    
    return (
        <>
            <StyleSheet />
            <div className="container">
                <header className="header">
                    <h1 className="main-title">SST Practice Paper - Set 2</h1>
                    <div className="theme-switcher-container">
                        <ThemeSwitcher setCurrentTheme={setCurrentTheme} />
                    </div>
                </header>
                
                <div className="controls-container">
                     <p className="chapter-badge">CBSE Class 10 Board Exam Practice</p>
                    <div className="buttons-panel">
                        <button onClick={() => setShowAllAnswers(!showAllAnswers)} className="show-all-btn">
                            {showAllAnswers ? <EyeOffIcon /> : <EyeIcon />}
                            {showAllAnswers ? 'Hide All Answers' : 'Show All Answers'}
                        </button>
                        <Timer />
                    </div>
                </div>

                {Object.keys(sections).map(sectionKey => (
                    <section key={sectionKey} style={{ marginBottom: '3rem' }}>
                        <h2 className="section-title">
                            {sections[sectionKey]}
                        </h2>
                        <div>
                            {worksheetData
                                .filter(item => item.section === sectionKey)
                                .map(item => <QuestionCard key={item.id} item={item} showAll={showAllAnswers} />)}
                        </div>
                    </section>
                ))}
            </div>
            <BackToTopButton />
        </>
    );
}

