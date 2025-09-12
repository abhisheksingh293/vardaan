import React, { useState, useEffect } from 'react';

// --- THEME DEFINITIONS ---
// An object containing various color themes for the application.
const themes = {
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-text': '#374151', '--theme-heading': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(59, 130, 246, 0.1)', '--theme-primary': '#3b82f6', '--theme-primary-hover': '#2563eb', '--theme-primary-light': 'rgba(59, 130, 246, 0.1)', '--theme-hint-bg': '#e0f2fe', '--theme-hint-text': '#0c4a6e', '--theme-hint-border': '#7dd3fc' } },
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-text': '#4b5563', '--theme-heading': '#ea580c', '--theme-heading-border': '#f97316', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(249, 115, 22, 0.1)', '--theme-primary': '#f97316', '--theme-primary-hover': '#ea580c', '--theme-primary-light': 'rgba(249, 115, 22, 0.1)', '--theme-hint-bg': '#fffbeb', '--theme-hint-text': '#b45309', '--theme-hint-border': '#fde68a' } },
    forestGreen: { name: 'Forest Green', previewColor: '#22c55e', cssVars: { '--theme-bg': '#f0fdf4', '--theme-text': '#4b5563', '--theme-heading': '#16a34a', '--theme-heading-border': '#4ade80', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(34, 197, 94, 0.1)', '--theme-primary': '#22c55e', '--theme-primary-hover': '#16a34a', '--theme-primary-light': 'rgba(34, 197, 94, 0.1)', '--theme-hint-bg': '#f7fee7', '--theme-hint-text': '#3f6212', '--theme-hint-border': '#a3e635' } },
    amber: { name: 'Amber', previewColor: '#f59e0b', cssVars: { '--theme-bg': '#fefce8', '--theme-text': '#4b5563', '--theme-heading': '#d97706', '--theme-heading-border': '#facc15', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(245, 158, 11, 0.1)', '--theme-primary': '#f59e0b', '--theme-primary-hover': '#d97706', '--theme-primary-light': 'rgba(245, 158, 11, 0.1)', '--theme-hint-bg': '#fffbeb', '--theme-hint-text': '#b45309', '--theme-hint-border': '#fde68a' } },
    royalPurple: { name: 'Royal Purple', previewColor: '#8b5cf6', cssVars: { '--theme-bg': '#f5f3ff', '--theme-text': '#4b5563', '--theme-heading': '#7c3aed', '--theme-heading-border': '#a78bfa', '--theme-card-bg': '#ffffff', '--theme-card-shadow': 'rgba(139, 92, 246, 0.1)', '--theme-primary': '#8b5cf6', '--theme-primary-hover': '#7c3aed', '--theme-primary-light': 'rgba(139, 92, 246, 0.1)', '--theme-hint-bg': '#faf5ff', '--theme-hint-text': '#7e22ce', '--theme-hint-border': '#e9d5ff' } },
    midnightBlueD: { name: 'Midnight Blue (D)', previewColor: '#60a5fa', cssVars: { '--theme-bg': '#111827', '--theme-text': '#d1d5db', '--theme-heading': '#60a5fa', '--theme-heading-border': '#3b82f6', '--theme-card-bg': '#1f2937', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#3b82f6', '--theme-primary-hover': '#2563eb', '--theme-primary-light': 'rgba(59, 130, 246, 0.2)', '--theme-hint-bg': '#374151', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#4b5563' } },
    slateGrayD: { name: 'Slate Gray (D)', previewColor: '#94a3b8', cssVars: { '--theme-bg': '#1e293b', '--theme-text': '#e2e8f0', '--theme-heading': '#cbd5e1', '--theme-heading-border': '#94a3b8', '--theme-card-bg': '#334155', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#64748b', '--theme-primary-hover': '#475569', '--theme-primary-light': 'rgba(100, 116, 139, 0.2)', '--theme-hint-bg': '#475569', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#64748b' } },
    tangerineD: { name: 'Tangerine (D)', previewColor: '#fb923c', cssVars: { '--theme-bg': '#1f2937', '--theme-text': '#d1d5db', '--theme-heading': '#fb923c', '--theme-heading-border': '#f97316', '--theme-card-bg': '#334155', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#f97316', '--theme-primary-hover': '#ea580c', '--theme-primary-light': 'rgba(249, 115, 22, 0.2)', '--theme-hint-bg': '#475569', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#52525b' } },
    crimsonD: { name: 'Crimson (D)', previewColor: '#f87171', cssVars: { '--theme-bg': '#1f2937', '--theme-text': '#d1d5db', '--theme-heading': '#f87171', '--theme-heading-border': '#ef4444', '--theme-card-bg': '#334155', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#ef4444', '--theme-primary-hover': '#dc2626', '--theme-primary-light': 'rgba(239, 68, 68, 0.2)', '--theme-hint-bg': '#475569', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#52525b' } },
    roseD: { name: 'Rose (D)', previewColor: '#f472b6', cssVars: { '--theme-bg': '#1f2937', '--theme-text': '#d1d5db', '--theme-heading': '#f472b6', '--theme-heading-border': '#ec4899', '--theme-card-bg': '#334155', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#ec4899', '--theme-primary-hover': '#db2777', '--theme-primary-light': 'rgba(236, 72, 153, 0.2)', '--theme-hint-bg': '#475569', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#52525b' } },
    violetD: { name: 'Violet (D)', previewColor: '#a78bfa', cssVars: { '--theme-bg': '#1f2937', '--theme-text': '#d1d5db', '--theme-heading': '#a78bfa', '--theme-heading-border': '#8b5cf6', '--theme-card-bg': '#334155', '--theme-card-shadow': 'rgba(0, 0, 0, 0.2)', '--theme-primary': '#8b5cf6', '--theme-primary-hover': '#7c3aed', '--theme-primary-light': 'rgba(139, 92, 246, 0.2)', '--theme-hint-bg': '#475569', '--theme-hint-text': '#e5e7eb', '--theme-hint-border': '#52525b' } },
};


// --- SVG ICONS ---
// A collection of SVG icon components used throughout the UI.
const HintIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> );
const EyeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg> );
const EyeOffIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg> );
const PaletteIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/><path d="M12 22a7 7 0 1 0-10-10"/><path d="m14.5 4.5-.5 2 .5 2M9.5 17.5l.5-2-.5-2"/></svg> );
const TimerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
const PlayIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>);
const PauseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>);
const ResetIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>);
const ArrowUpIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>);


// --- WORKSHEET DATA ---
// An array of objects, each representing a question in the worksheet.
const worksheetData = [
    { section: 'A', id: 'a1', question: '1. The Revolt of 1857 started on—', options: ['(a) May 10, 1857', '(b) May 11, 1857', '(c) May 12, 1857', '(d) May 13, 1857'], answer: '(a) May 10, 1857', hint: 'The sepoys in Meerut revolted on this day, marking the beginning of the uprising.' },
    { section: 'A', id: 'a2', question: '2. Mangal Pandey belonged to which one of the following places?', options: ['(a) Jhansi', '(b) Hyderabad', '(c) Barrackpore', '(d) Gwalior'], answer: '(c) Barrackpore', hint: 'This is where the incident with the greased cartridges involving him took place, near Calcutta.' },
    { section: 'A', id: 'a3', question: '3. Who took over the governance of India from the East India Company after the 1857 revolt?', options: ['(a) The British Parliament', '(b) The Queen', '(c) The Viceroy', '(d) The Governor-General'], answer: '(b) The Queen', hint: 'The rule of the Company ended, and India came under the direct rule of the British monarch.' },
    { section: 'A', id: 'a4', question: '4. The British army was reorganised after the Revolt of 1857 to—', options: ['(a) annex the Indian states.', '(b) ruthlessly conquer Indian rulers.', '(c) give more powers to East India Company.', '(d) prevent future revolts.'], answer: '(d) prevent future revolts.', hint: 'The British wanted to ensure such a large-scale rebellion would not happen again.' },
    { section: 'A', id: 'a5', question: '5. The practice of looking down upon the Blacks is known as—', options: ['(a) religions', '(b) racial law', '(c) racial discrimination', '(d) imperialism'], answer: '(c) racial discrimination', hint: 'This term describes unfair treatment based on a person\'s race.' },
    { section: 'B', id: 'b1', type: 'fill', question: '1. The First War of Independence is also known as the __________ Mutiny of 1857.', answer: 'Sepoy', hint: 'The revolt was started by Indian soldiers, who were called...' },
    { section: 'B', id: 'b2', type: 'fill', question: '2. The British considered themselves __________.', answer: 'superior', hint: 'They believed their race and culture were better than others.' },
    { section: 'B', id: 'b3', type: 'fill', question: '3. Bahadur Shah Zafar was exiled to __________.', answer: 'Rangoon', hint: 'After the revolt was crushed, the last Mughal Emperor was sent to a city in modern-day Myanmar.' },
    { section: 'B', id: 'b4', type: 'fill', question: '4. Rani Lakshmi Bai wanted her lost __________.', answer: 'kingdom', hint: 'She was the queen of Jhansi and fought to regain control of her state.' },
    { section: 'B', id: 'b5', type: 'fill', question: '5. The Doctrine of __________ created resentment among Indian rulers.', answer: 'Lapse', hint: 'This policy by Lord Dalhousie dealt with the issue of succession in princely states.' },
    { section: 'C', id: 'c1', type: 'tf', question: '1. Bahadur Shah Zafar was proclaimed the Shahenshah-e-Hindustan.', answer: 'True', hint: 'The sepoys who marched to Delhi declared him the Emperor of Hindustan.' },
    { section: 'C', id: 'c2', type: 'tf', question: '2. At Kanpur, the Revolt was led by Begum Hazrat Mahal.', answer: 'False', hint: 'The revolt in Kanpur was led by Nana Saheb. Begum Hazrat Mahal led the revolt in Awadh.' },
    { section: 'C', id: 'c3', type: 'tf', question: '3. The British followed a policy of racial discrimination.', answer: 'True', hint: 'They treated Indians as inferiors, which was a major cause of resentment.' },
    { section: 'C', id: 'c4', type: 'tf', question: '4. The regiment in Meerut revolted on May 10, 1857.', answer: 'True', hint: 'This event is considered the starting point of the revolt.' },
    { section: 'C', id: 'c5', type: 'tf', question: '5. A Secretary of State was appointed to look after the governance of England.', answer: 'False', hint: 'The Secretary of State was appointed to look after the governance of India, not England.' },
    { section: 'D', id: 'd1', type: 'brief', question: "1. The revolt of 1857 was the landmark in the history of India's struggle for independence. Justify the statement with any three arguments.", answer: "The Revolt of 1857 was a landmark because: \n1. It was the first time that different sections of Indian society (soldiers, peasants, rulers) united to fight against foreign rule. \n2. It showed remarkable Hindu-Muslim unity against a common enemy. \n3. It became a major source of inspiration for future freedom struggles and is considered the First War of Independence.", hint: 'Think about who participated and what the revolt inspired.' },
    { section: 'D', id: 'd2', type: 'brief', question: '2. What was the Doctrine of Lapse and how did it affect the rulers of India?', answer: 'The Doctrine of Lapse was a policy by which the British annexed any princely state if the ruler died without a natural male heir. It deeply affected Indian rulers by creating insecurity, denying their right to adopt successors, and leading to the loss of their kingdoms, which fueled widespread resentment.' },
    { section: 'D', id: 'd3', type: 'brief', question: '3. Explain subsidiary alliances with the help of examples.', answer: 'A subsidiary alliance was a treaty that forced an Indian ruler to accept British military forces within their territory and pay for their maintenance. This made the ruler dependent on the British. For example, the Nawab of Awadh signed this alliance in 1801, which ultimately led to the British taking over his kingdom.' },
    { section: 'D', id: 'd4', type: 'brief', question: '4. How did the economic policies of the British adversely affect the Indian economy?', answer: 'The British economic policies devastated the Indian economy by imposing high taxes on peasants, destroying traditional industries like textiles with cheap imported goods, and systematically draining India\'s wealth to Britain.' },
    { section: 'D', id: 'd5', type: 'brief', question: '5. Why is the revolt of 1857 called the First War of Independence? What were its immediate causes?', answer: 'It is called the First War of Independence because it was the first large-scale, collective uprising of various sections of Indian society against British rule. The immediate cause was the introduction of new rifle cartridges greased with cow and pig fat, which offended the religious sentiments of both Hindu and Muslim sepoys.' },
    { section: 'E', id: 'e1', type: 'long', question: '1. Describe the course of the Revolt of 1857.', answer: 'The Revolt began on May 10, 1857, in Meerut, where sepoys rebelled and marched to Delhi. They declared Bahadur Shah Zafar their leader. The rebellion quickly spread to key centers like Kanpur (led by Nana Saheb), Lucknow (led by Begum Hazrat Mahal), and Jhansi (led by Rani Lakshmi Bai). Though the rebels achieved initial success, the British responded with superior military force, recapturing Delhi in September 1857 and gradually crushing the revolt across all centers by 1858.' },
    { section: 'E', id: 'e2', type: 'long', question: '2. Describe five main causes of the First War of Independence.', answer: 'The five main causes were:\n1. Political: Policies like the Doctrine of Lapse and Subsidiary Alliance angered Indian rulers.\n2. Economic: British exploitation ruined Indian industries and impoverished peasants.\n3. Social & Religious: Interference in Indian customs and fears of forced conversion to Christianity.\n4. Military: Discrimination against Indian sepoys in pay and promotions.\n5. Immediate: The introduction of greased rifle cartridges that offended religious beliefs.' },
    { section: 'E', id: 'e3', type: 'long', question: '3. What steps did the British take to suppress the Revolt?', answer: 'The British took ruthless steps to suppress the revolt. They used their superior military to recapture key cities like Delhi, which involved brutal massacres. They executed many rebels and leaders, such as hanging Tantya Tope. Key figures like Bahadur Shah Zafar were exiled, and the British re-established control with overwhelming force.' },
    { section: 'E', id: 'e4', type: 'long', question: '4. Why did the First War of Independence fail in spite of the participation of different sections of Indian Society? Explain.', answer: 'The revolt failed for several reasons:\n1. Lack of Unity and Coordination: There was no central leadership or unified plan.\n2. Limited Spread: The rebellion was mainly confined to North and Central India.\n3. Superior British Resources: The British had better weapons, communication (like the telegraph), and a more organized army.\n4. Lack of Widespread Support: Many powerful Indian rulers and the educated class did not join the revolt.' },
    { section: 'E', id: 'e5', type: 'long', question: "5. What changes were made in the administration of India after the revolt was suppressed?", answer: "After the revolt, the rule of the East India Company was abolished, and India came under the direct rule of the British Crown. The title of the Governor-General was changed to Viceroy, who acted as the Queen's representative. A Secretary of State for India was appointed in the British government, and the British promised to respect the rights of Indian princes to prevent future uprisings.", hint: 'Consider the end of the East India Company\'s rule and the new titles created.' }
];

// --- THEME SWITCHER COMPONENT ---
const ThemeSwitcher = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    // State to manage hover effect for the main palette button
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const paletteButtonStyle = {
        padding: '0.75rem',
        borderRadius: '9999px',
        backgroundColor: 'var(--theme-card-bg)',
        color: 'var(--theme-text)',
        border: 'none',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease-in-out',
        // Apply different shadow on hover
        boxShadow: isButtonHovered 
            ? '0 10px 15px -3px var(--theme-card-shadow)' 
            : '0 4px 6px -1px var(--theme-card-shadow)',
    };

    // A sub-component to handle individual theme button logic and state
    const ThemeButton = ({ themeKey, theme }) => {
        const [isHovered, setIsHovered] = useState(false);
        const isDark = theme.name.includes('(D)');
        
        const style = {
            width: '2rem',
            height: '2rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',
            // Apply scale effect on hover
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            background: isDark
                ? `linear-gradient(90deg, #2d3748 50%, ${theme.previewColor} 50%)`
                : theme.previewColor,
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
        };

        return (
            <button
                style={style}
                title={theme.name}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    setCurrentTheme(themeKey);
                    setIsOpen(false);
                }}
            />
        );
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={paletteButtonStyle}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                title="Change Theme"
            >
                <PaletteIcon />
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-[var(--theme-card-bg)] rounded-lg shadow-2xl p-2 z-10">
                    <div className="grid grid-cols-4 gap-2">
                        {Object.entries(themes).map(([key, theme]) => (
                            <ThemeButton key={key} themeKey={key} theme={theme} />
                        ))}
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
    // State to manage hover effects for timer buttons
    const [isPlayHovered, setIsPlayHovered] = useState(false);
    const [isResetHovered, setIsResetHovered] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const formatTime = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const playPauseStyle = {
        padding: '0.5rem',
        borderRadius: '9999px',
        color: 'var(--theme-primary)',
        backgroundColor: isPlayHovered ? 'var(--theme-primary-hover)' : 'var(--theme-primary-light)',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out',
        lineHeight: 0, // Aligns icon properly
    };
    // Change icon color on hover for better contrast
    if (isPlayHovered) {
        playPauseStyle.color = '#ffffff';
    }

    const resetStyle = {
        padding: '0.5rem',
        borderRadius: '9999px',
        backgroundColor: isResetHovered ? '#cbd5e1' : '#e2e8f0', // slate-300 on hover, else slate-200
        color: '#475569', // slate-600
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out',
        lineHeight: 0,
    };

    return (
        <div className="flex items-center gap-2 p-2 rounded-full bg-[var(--theme-card-bg)] shadow-md">
            <TimerIcon />
            <span className="font-mono text-lg">{formatTime()}</span>
            <button 
                onClick={() => setIsActive(!isActive)} 
                style={playPauseStyle}
                onMouseEnter={() => setIsPlayHovered(true)}
                onMouseLeave={() => setIsPlayHovered(false)}
            >
                {isActive ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button 
                onClick={() => { setTime(0); setIsActive(false); }} 
                style={resetStyle}
                onMouseEnter={() => setIsResetHovered(true)}
                onMouseLeave={() => setIsResetHovered(false)}
            >
                <ResetIcon />
            </button>
        </div>
    );
};


// --- QUESTION CARD COMPONENT ---
const QuestionCard = ({ item, showAll }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectionStatus, setSelectionStatus] = useState(null);
    
    // States for button hover effects
    const [isHintHovered, setIsHintHovered] = useState(false);
    const [isAnswerBtnHovered, setIsAnswerBtnHovered] = useState(false);

    useEffect(() => {
        setIsAnswerVisible(showAll);
        if (item.options) {
            if (showAll) {
                setSelectionStatus('correct');
            } else {
                setSelectedOption(null);
                setSelectionStatus(null);
            }
        }
    }, [showAll, item.options]);

    const handleOptionClick = (option) => {
        if (selectionStatus) return;
        setSelectedOption(option);
        setSelectionStatus(option === item.answer ? 'correct' : 'incorrect');
    };

    const toggleAnswer = () => setIsAnswerVisible(!isAnswerVisible);
    const toggleHint = () => setIsHintVisible(!isHintVisible);

    // Sub-component for MCQ option buttons to manage their own hover state
    const OptionButton = ({ option }) => {
        const [isHovered, setIsHovered] = useState(false);

        const getStyle = () => {
            let style = {
                width: '100%',
                textAlign: 'left',
                padding: '0.75rem',
                border: '2px solid #d1d5db',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                backgroundColor: 'var(--theme-card-bg)',
            };

            if (!selectionStatus) {
                if (isHovered) {
                    style.backgroundColor = 'rgba(243, 244, 246, 0.5)';
                    style.borderColor = '#9ca3af';
                }
            } else {
                style.cursor = 'not-allowed';
                style.color = '#6b7280';
                if (option === item.answer) {
                    style.backgroundColor = '#dcfce7';
                    style.borderColor = '#22c55e';
                    style.color = '#166534';
                } else if (option === selectedOption) {
                    style.backgroundColor = '#fee2e2';
                    style.borderColor = '#ef4444';
                    style.color = '#991b1b';
                }
            }
            return style;
        };

        return (
            <button
                onClick={() => handleOptionClick(option)}
                disabled={!!selectionStatus}
                style={getStyle()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {option}
            </button>
        );
    };
    
    const hintButtonStyle = {
        padding: '0.5rem',
        borderRadius: '9999px',
        color: '#f59e0b', // yellow-500
        backgroundColor: isHintHovered ? 'rgba(253, 230, 138, 0.5)' : 'transparent', // yellow-100 on hover
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        flexShrink: 0,
    };
    
    const answerButtonStyle = {
        marginTop: '1rem',
        padding: '0.5rem 1.25rem',
        borderRadius: '9999px',
        fontWeight: '500',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease-in-out',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: isAnswerVisible ? '#334155' : '#e2e8f0', // slate-700 or slate-200
        color: isAnswerVisible ? '#ffffff' : '#1e293b', // white or slate-800
    };
    if (isAnswerBtnHovered) {
        answerButtonStyle.backgroundColor = isAnswerVisible ? '#1e293b' : '#cbd5e1'; // slate-800 or slate-300
    }

    return (
        <div className="bg-[var(--theme-card-bg)] rounded-2xl p-6 sm:p-8 mb-6 shadow-lg transition-all duration-300" style={{boxShadow: '0 10px 15px -3px var(--theme-card-shadow), 0 4px 6px -4px var(--theme-card-shadow)'}}>
            <div className="flex justify-between items-start gap-4">
                <p className="font-semibold text-[var(--theme-text)] flex-1">{item.question}</p>
                {item.hint && 
                    <button 
                        onClick={toggleHint} 
                        style={hintButtonStyle}
                        onMouseEnter={() => setIsHintHovered(true)}
                        onMouseLeave={() => setIsHintHovered(false)}
                        title="Show Hint"
                    >
                        <HintIcon />
                    </button>
                }
            </div>
            
            <div className={`transition-all duration-500 ease-in-out grid ${isHintVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="mt-3 p-3 bg-[var(--theme-hint-bg)] border border-dashed rounded-lg text-sm text-[var(--theme-hint-text)]" style={{borderColor: 'var(--theme-hint-border)'}}><strong>Hint:</strong> {item.hint}</div>
                </div>
            </div>

            {item.options && (
                <div className="mt-4 space-y-3">
                    {item.options.map((option, index) => (
                        <OptionButton key={index} option={option} />
                    ))}
                </div>
            )}

            {!item.options && (
                <>
                    <button 
                        onClick={toggleAnswer} 
                        style={answerButtonStyle}
                        onMouseEnter={() => setIsAnswerBtnHovered(true)}
                        onMouseLeave={() => setIsAnswerBtnHovered(false)}
                    >
                        {isAnswerVisible ? 'Hide Answer' : 'View Answer'}
                    </button>
                    <div className={`transition-all duration-500 ease-in-out grid ${isAnswerVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="mt-4 p-4 bg-slate-50/50 dark:bg-slate-800/50 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg"><p className="text-slate-700 dark:text-slate-300 whitespace-pre-line"><strong>Answer:</strong> {item.answer}</p></div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

// --- BACK TO TOP BUTTON COMPONENT ---
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '0.75rem',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'var(--theme-primary)',
        color: '#ffffff',
        boxShadow: '0 10px 15px -3px var(--theme-card-shadow), 0 4px 6px -4px var(--theme-card-shadow)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.2s',
        zIndex: 50,
    };
    
    if (isHovered) {
        buttonStyle.backgroundColor = 'var(--theme-primary-hover)';
    }

    return (
        <button
            onClick={scrollToTop}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Back to Top"
        >
            <ArrowUpIcon />
        </button>
    );
};


// --- MAIN APP COMPONENT ---
export default function App() {
    const [showAllAnswers, setShowAllAnswers] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('sunriseOrange');
    // State to manage hover effect for the main toggle button
    const [isToggleHovered, setIsToggleHovered] = useState(false);

    // Effect to apply theme CSS variables to the root element
    useEffect(() => {
        const theme = themes[currentTheme];
        Object.entries(theme.cssVars).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, [currentTheme]);

    const sections = {
        'A': 'A. Tick (✓) the correct option.',
        'B': 'B. Fill in the blanks.',
        'C': 'C. Write True or False for the following statements.',
        'D': 'D. Answer the following questions in brief.',
        'E': 'E. Answer the following questions.'
    };
    
    const toggleAllAnswers = () => setShowAllAnswers(!showAllAnswers);

    // Style object for the "Show/Hide All Answers" button
    const toggleAllAnswersButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.5rem',
        borderRadius: '9999px',
        fontWeight: '600',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'var(--theme-primary)',
        transition: 'all 0.3s ease-in-out',
        // Apply hover effects conditionally
        boxShadow: isToggleHovered 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transform: isToggleHovered ? 'translateY(-2px)' : 'translateY(0)',
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8" style={{fontFamily: 'sans-serif', backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)', transition: 'background-color 0.5s'}}>
            <div className="max-w-4xl mx-auto">
                <header className="relative text-center mb-10 mt-15">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[var(--theme-heading)]">Practice Questions</h1>
                    <p className="inline-block px-4 py-2 mt-4 text-base font-medium rounded-full bg-[var(--theme-primary-light)] text-[var(--theme-primary)]">Chapter 11: The First War of Independence—1857</p>
                    <div className="absolute top-0 right-0">
                        <ThemeSwitcher setCurrentTheme={setCurrentTheme} />
                    </div>
                </header>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                    <button 
                        onClick={toggleAllAnswers} 
                        style={toggleAllAnswersButtonStyle}
                        onMouseEnter={() => setIsToggleHovered(true)}
                        onMouseLeave={() => setIsToggleHovered(false)}
                    >
                        {showAllAnswers ? <EyeOffIcon /> : <EyeIcon />}
                        {showAllAnswers ? 'Hide All Answers' : 'Show All Answers'}
                    </button>
                    <Timer />
                </div>

                {Object.keys(sections).map(sectionKey => (
                    <section key={sectionKey} className="mb-12">
                        <h2 className="text-3xl font-bold text-[var(--theme-heading)] mb-8 pb-3" style={{ borderBottom: '4px solid var(--theme-heading-border)' }}>
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
        </div>
    );
}
