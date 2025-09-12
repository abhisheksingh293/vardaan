import React, { useState, useEffect } from 'react';

// --- THEME DEFINITIONS (As specified in the design document) ---
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

// --- WORKSHEET DATA (with inline styles in HTML answers) ---
const worksheetData = [
    { section: 'A', id: 'a1', question: '1. Under the Mahalwari System, the word mahal means—', options: ['(a) a group of cities', '(b) a group of villages', '(c) a group of districts', '(d) a group of towns'], answer: '(b) a group of villages', hint: 'This system treated the village as a single unit for revenue collection.' },
    { section: 'A', id: 'a2', question: '2. The Ryotwari System was introduced by—', options: ['(a) Lord Cornwallis', '(b) Holt Mackenzie', '(c) Thomas Munro', '(d) Lord Wellesley'], answer: '(c) Thomas Munro', hint: 'He implemented this system in the southern parts of India.' },
    { section: 'A', id: 'a3', question: '3. The other name for Zamindari Bandobast was—', options: ['(a) Permanent Revenue System', '(b) Ryotwari System', '(c) Mahalwari System', '(d) Kisandari System'], answer: '(a) Permanent Revenue System', hint: 'This system fixed the revenue amount permanently.' },
    { section: 'A', id: 'a4', question: "4. Who was the leader of the Santhals' revolt?", options: ['(a) Bar Manik and Tirut Singh', '(b) Sidhu and Kanhu Murmu', '(c) Birsa Munda', '(d) Bhuwan'], answer: '(b) Sidhu and Kanhu Murmu', hint: 'These two brothers led the Santhal rebellion in 1855.' },
    { section: 'A', id: 'a5', question: '5. Where did industrial Revolution begin first?', options: ['(a) England', '(b) France', '(c) Holland', '(d) Spain'], answer: '(a) England', hint: 'This country was the birthplace of the factory system and modern industry in the 18th century.' },
    { section: 'B', id: 'b1', type: 'fill', question: '1. English shattered the self-sufficient ________ economy.', answer: 'village', hint: 'Before the British, Indian villages were largely independent economic units.' },
    { section: 'B', id: 'b2', type: 'fill', question: '2. Many tribals left forests in search of ________.', answer: 'livelihood', hint: 'When their traditional rights were taken away, they had to find new ways to survive.' },
    { section: 'B', id: 'b3', type: 'fill', question: '3. Zamindari System was introduced in Bengal by ________.', answer: 'Lord Cornwallis', hint: 'He was the Governor-General who introduced the Permanent Settlement in 1793.' },
    { section: 'B', id: 'b4', type: 'fill', question: '4. ________ revenue was the biggest source of income for the Company.', answer: 'Land', hint: 'The British East India Company collected most of its money from taxes on agriculture.' },
    { section: 'B', id: 'b5', type: 'fill', question: '5. Basic or ________ industry started in India after independence.', answer: 'heavy', hint: 'This refers to industries like steel and machinery, which form the foundation of an industrial economy.' },
    { section: 'C', id: 'c1', type: 'tf', question: '1. Before the advent of East India Company, the rural life in India was simple and self-sufficient.', answer: 'True', hint: 'Villages produced most of what they needed and had their own systems of governance.' },
    { section: 'C', id: 'c2', type: 'tf', question: '2. The British wanted to smuggle and sell opium in Spain to earn profit.', answer: 'False', hint: 'The British illegally sold opium to China, not Spain, which led to the Opium Wars.' },
    { section: 'C', id: 'c3', type: 'tf', question: '3. Kisan Sabhas were formed in 1930 to support the cause of peasants.', answer: 'True', hint: 'These were peasant organizations created to fight for their rights against landlords and the British.' },
    { section: 'C', id: 'c4', type: 'tf', question: '4. The Khonds of Orissa practised shifting agriculture.', answer: 'True', hint: 'This was their traditional method of farming, which involved clearing and cultivating forest land for a few years before moving to a new area.' },
    { section: 'C', id: 'c5', type: 'tf', question: '5. The tribal chiefs lost all their powers and were forced to follow the laws made by the British officers in India.', answer: 'True', hint: 'British policies severely undermined the authority and autonomy of tribal leaders.' },
    { section: 'D', id: 'd1', type: 'brief', question: '1. Highlight the main features of Mahalwari System.', answer: 'The main features of the Mahalwari System were: <ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;">The <strong>village (mahal)</strong> was treated as a single unit for revenue assessment.</li><li style="margin-bottom: 4px;">The <strong>village headman</strong> was responsible for collecting the revenue.</li><li style="margin-bottom: 4px;">The revenue demand was <strong>revised periodically</strong> and not fixed permanently.</li></ul>' },
    { section: 'D', id: 'd2', type: 'brief', question: '2. Why did the British force Indian farmers to grow commercial crops?', answer: 'The British forced Indian farmers to grow <strong>commercial crops</strong> (like indigo, cotton, opium) because these were highly profitable and in great demand as <strong>raw materials for factories in England</strong>. This policy benefited British industries at the expense of Indian farmers\' food security.' },
    { section: 'D', id: 'd3', type: 'brief', question: '3. What was the impact of colonial rule on the tribals of India. Mention any three.', answer: 'The impact of colonial rule on tribals was devastating: <ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;"><strong>Loss of Forest Rights:</strong> New forest laws declared forests as state property, preventing tribals from accessing resources essential for their survival.</li><li style="margin-bottom: 4px;"><strong>Loss of Authority:</strong> The power of traditional tribal chiefs was severely undermined.</li><li style="margin-bottom: 4px;"><strong>Exploitation:</strong> They were forced into low-wage labor and fell into debt traps with moneylenders and contractors.</li></ul>' },
    { section: 'D', id: 'd4', type: 'brief', question: '4. Write short notes on the Birsa Movement.', answer: 'The Birsa Movement was a major tribal uprising led by <strong>Birsa Munda</strong> in the Chotanagpur region (late 19th century). Its goal was to fight against the exploitation by outsiders (dikus) and establish <strong>Munda Raj</strong> (the rule of the Mundas). Birsa became a revered figure who also encouraged social reform among his people. Though suppressed, the movement led to laws protecting tribal land.' },
    { section: 'D', id: 'd5', type: 'brief', question: '5. Highlight any three changes that took place in modern industries in the nineteenth century.', answer: 'Three major changes in modern industries during the 19th century were:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;"><strong>Shift to Factory System:</strong> Production moved from homes (cottage industry) to large <strong>factories</strong> with machinery.</li><li style="margin-bottom: 4px;"><strong>New Power Sources:</strong> The invention of the <strong>steam engine</strong> provided a new source of power, replacing manual labor and animal power.</li><li style="margin-bottom: 4px;"><strong>Mass Production:</strong> Machines allowed for the <strong>mass production</strong> of goods, making them cheaper and more widely available.</li></ul>' },
    { section: 'E', id: 'e1', type: 'long', question: '1. List the main features of Permanent Settlement. How did the production of opium, indigo and sugar shot up the profit margins of the East India Company?', answer: '<strong>Main features of Permanent Settlement:</strong><ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;">Revenue was <strong>fixed permanently</strong> and could not be increased.</li><li style="margin-bottom: 4px;">Local rajas and talukdars were made <strong>zamindars</strong>.</li><li style="margin-bottom: 4px;">Zamindars were responsible for collecting rent and paying the fixed revenue to the Company.</li></ul><strong style="display: block; margin-top: 12px;">Impact on Profits:</strong> The production of cash crops like <strong>opium, indigo, and sugar</strong> massively increased Company profits. They forced farmers to grow these instead of food, bought them at extremely low prices, and sold them for huge profits in Europe and China.' },
    { section: 'E', id: 'e2', type: 'long', question: '2. Differentiate between Ryotwari and Mahalwari system.', answer: '<div style="display: flex; flex-direction: column; gap: 12px;"><p><strong>Ryotwari System:</strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li style="margin-bottom: 4px;">The revenue settlement was made <strong>directly with the ryots</strong> (cultivators).</li><li style="margin-bottom: 4px;">The ryot was recognized as the <strong>owner of the land</strong>.</li><li style="margin-bottom: 4px;">Revenue rates were high and <strong>revised every 20-30 years</strong>.</li></ul><p><strong>Mahalwari System:</strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li style="margin-bottom: 4px;">The settlement was made with the <strong>entire village (mahal)</strong> as a unit.</li><li style="margin-bottom: 4px;">The <strong>village headman</strong> collected and paid the revenue.</li><li style="margin-bottom: 4px;">Revenue was also <strong>revised periodically</strong>.</li></ul></div>' },
    { section: 'E', id: 'e3', type: 'long', question: '3. How did colonialism systematically destroy Indian crafts and industries? Explain.', answer: 'Colonialism systematically destroyed Indian industries through several policies:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;"><strong>De-industrialization:</strong> Flooding Indian markets with <strong>cheap, machine-made British goods</strong> destroyed local artisans, especially in the textile industry.</li><li style="margin-bottom: 4px;"><strong>Unfair Trade Policies:</strong> Heavy taxes were placed on the export of Indian goods, while British goods were imported with little to no tax.</li><li style="margin-bottom: 4px;"><strong>Loss of Patronage:</strong> The decline of Indian rulers and nobility meant artisans lost their primary customers.</li><li style="margin-bottom: 4px;"><strong>Raw Material Drain:</strong> India was converted into a mere supplier of cheap raw materials for British factories.</li></ul>' },
    { section: 'E', id: 'e4', type: 'long', question: '4. How far were British agrarian and tribal policies responsible for widespread discontentment in India? Explain with the help of examples.', answer: "British policies were the primary cause of widespread discontentment:<br/><br/><strong>Agrarian Policies:</strong> Extremely high revenue demands under all systems (Permanent, Ryotwari, Mahalwari) forced peasants into crippling debt. They had to borrow from moneylenders, often losing their land. The <strong>Deccan Riots of 1875</strong>, for instance, were a direct protest against this cycle of debt and exploitation.<br/><br/><strong>Tribal Policies:</strong> The British declared forests as state property, which was a direct assault on the tribal way of life. Tribals lost access to their homes and livelihoods. The <strong>Santhal Rebellion (1855-56)</strong> was a fierce uprising against the takeover of their lands by outsiders (zamindars, moneylenders) under the protection of British laws." },
    { section: 'E', id: 'e5', type: 'long', question: '5. Describe any five revolts by the tribals against the British.', answer: 'Five major tribal revolts against the British were:<ol style="list-style-type: decimal; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 8px;"><strong>The Santhal Rebellion (1855-56):</strong> A massive revolt in present-day Jharkhand led by <strong>Sidhu and Kanhu Murmu</strong> against zamindars and British exploitation.</li><li style="margin-bottom: 8px;"><strong>The Munda Uprising (1899-1900):</strong> Led by the charismatic <strong>Birsa Munda</strong> in the Chotanagpur region, aiming to establish Munda rule.</li><li style="margin-bottom: 8px;"><strong>The Kol Rebellion (1831-32):</strong> An uprising by the Kols of Chotanagpur against the transfer of their traditional lands to outsiders.</li><li style="margin-bottom: 8px;"><strong>The Khond Uprising (1837-1856):</strong> A prolonged revolt in Orissa by the Khonds against British interference in their customs and territory.</li><li style="margin-bottom: 8px;"><strong>The Bhil Uprising (1818-1831):</strong> A series of revolts by the Bhil tribe in the Western Ghats against British occupation and agrarian hardships.</li></ol>' }
];

// --- THEME SWITCHER COMPONENT ---
const ThemeSwitcher = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const paletteButtonStyle = {
        padding: '0.75rem',
        borderRadius: '9999px',
        backgroundColor: 'var(--theme-card-bg)',
        color: 'var(--theme-text)',
        border: 'none',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease-in-out',
        boxShadow: isButtonHovered ? '0 10px 15px -3px var(--theme-card-shadow)' : '0 4px 6px -1px var(--theme-card-shadow)',
    };
    
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
        <div style={{ position: 'relative' }}>
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
                <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '0.5rem', width: '12rem', backgroundColor: 'var(--theme-card-bg)', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', padding: '0.5rem', zIndex: 10 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
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
    const [isPlayHovered, setIsPlayHovered] = useState(false);
    const [isResetHovered, setIsResetHovered] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((t) => t + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

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
        lineHeight: 0,
    };
    if (isPlayHovered) playPauseStyle.color = '#ffffff';

    const resetStyle = {
        padding: '0.5rem',
        borderRadius: '9999px',
        backgroundColor: isResetHovered ? '#cbd5e1' : '#e2e8f0',
        color: '#475569',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out',
        lineHeight: 0,
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', borderRadius: '9999px', backgroundColor: 'var(--theme-card-bg)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
            <TimerIcon />
            <span style={{ fontFamily: 'monospace', fontSize: '1.125rem' }}>{formatTime()}</span>
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

// --- BACK TO TOP BUTTON COMPONENT ---
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) setIsVisible(true);
        else setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const buttonStyle = {
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        padding: '0.75rem',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: isHovered ? 'var(--theme-primary-hover)' : 'var(--theme-primary)',
        color: '#ffffff',
        boxShadow: '0 10px 15px -3px var(--theme-card-shadow), 0 4px 6px -4px var(--theme-card-shadow)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.2s',
        zIndex: 50,
    };

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

// --- QUESTION CARD COMPONENT ---
const QuestionCard = ({ item, showAll }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectionStatus, setSelectionStatus] = useState(null);
    const [isHintHovered, setIsHintHovered] = useState(false);
    const [isAnswerBtnHovered, setIsAnswerBtnHovered] = useState(false);

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

            if (selectionStatus) {
                style.cursor = 'not-allowed';
                if (option === item.answer) {
                    style.backgroundColor = '#dcfce7';
                    style.borderColor = '#22c55e';
                    style.color = '#166534';
                } else if (option === selectedOption) {
                    style.backgroundColor = '#fee2e2';
                    style.borderColor = '#ef4444';
                    style.color = '#991b1b';
                } else {
                    style.color = '#6b7280';
                }
            } else if (isHovered) {
                style.backgroundColor = 'rgba(243, 244, 246, 0.5)';
                style.borderColor = '#9ca3af';
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
        color: '#f59e0b',
        backgroundColor: isHintHovered ? 'rgba(253, 230, 138, 0.5)' : 'transparent',
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
        backgroundColor: isAnswerVisible ? '#4b5563' : '#e5e7eb',
        color: isAnswerVisible ? '#ffffff' : '#1f2937',
    };
    if (isAnswerBtnHovered) {
        answerButtonStyle.backgroundColor = isAnswerVisible ? '#374151' : '#d1d5db';
    }

    return (
        <div style={{ backgroundColor: 'var(--theme-card-bg)', borderRadius: '1rem', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 10px 15px -3px var(--theme-card-shadow), 0 4px 6px -4px var(--theme-card-shadow)', transition: 'all 0.3s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <p style={{ fontWeight: '600', color: 'var(--theme-text)', flex: 1 }}>{item.question}</p>
                {item.hint && <button onClick={() => setIsHintVisible(!isHintVisible)} style={hintButtonStyle} onMouseEnter={() => setIsHintHovered(true)} onMouseLeave={() => setIsHintHovered(false)} title="Show Hint"><HintIcon /></button>}
            </div>
            
            <div style={{ transition: 'all 0.5s ease-in-out', display: 'grid', gridTemplateRows: isHintVisible ? '1fr' : '0fr', opacity: isHintVisible ? 1 : 0 }}>
                <div style={{ overflow: 'hidden' }}>
                    <div style={{ marginTop: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--theme-hint-bg)', border: '1px dashed var(--theme-hint-border)', borderRadius: '0.5rem', fontSize: '0.875rem', color: 'var(--theme-hint-text)' }}><strong>Hint:</strong> {item.hint}</div>
                </div>
            </div>

            {item.options && (
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {item.options.map((option, index) => <OptionButton key={index} option={option} />)}
                </div>
            )}

            {!item.options && (
                <>
                    <button onClick={() => setIsAnswerVisible(!isAnswerVisible)} style={answerButtonStyle} onMouseEnter={() => setIsAnswerBtnHovered(true)} onMouseLeave={() => setIsAnswerBtnHovered(false)}>{isAnswerVisible ? 'Hide Answer' : 'View Answer'}</button>
                    <div style={{ transition: 'all 0.5s ease-in-out', display: 'grid', gridTemplateRows: isAnswerVisible ? '1fr' : '0fr', opacity: isAnswerVisible ? 1 : 0 }}>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(249, 250, 251, 0.5)', border: '1px dashed #e5e7eb', borderRadius: '0.5rem', color: '#374151' }}>
                                <strong style={{ color: 'var(--theme-text)' }}>Answer:</strong>
                                <div style={{ marginTop: '4px', color: 'var(--theme-text)' }} dangerouslySetInnerHTML={{ __html: item.answer }} />
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
    const [isToggleHovered, setIsToggleHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const theme = themes[currentTheme];
        Object.entries(theme.cssVars).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, [currentTheme]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sections = {
        'A': 'A. Tick (✓) the correct option.',
        'B': 'B. Fill in the blanks.',
        'C': 'C. Write True or False for the following statements.',
        'D': 'D. Answer the following questions in brief.',
        'E': 'E. Answer the following questions.'
    };
    
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
        boxShadow: isToggleHovered ? '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)' : '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        transform: isToggleHovered ? 'translateY(-2px)' : 'translateY(0)',
    };

    const isMobile = windowWidth < 640;

    return (
        <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)', padding: isMobile ? '1rem' : '2rem', transition: 'background-color 0.5s' }}>
            <div style={{ maxWidth: '896px', margin: '0 auto' }}>
                <header style={{ position: 'relative', textAlign: 'center', marginBottom: '1rem', marginTop: '2.5rem' }}>
                    <h1 style={{ fontSize: isMobile ? '2.25rem' : '3rem', fontWeight: 'bold', color: 'var(--theme-heading)' }}>Practice Questions</h1>
                    <div style={{ position: 'absolute', top: 0, right: 0 }}>
                        <ThemeSwitcher setCurrentTheme={setCurrentTheme} />
                    </div>
                </header>
                
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                     <p style={{ display: 'inline-block', padding: '0.5rem 1rem', marginTop: '1rem', fontSize: '1rem', fontWeight: '500', borderRadius: '9999px', backgroundColor: 'var(--theme-primary-light)', color: 'var(--theme-primary)' }}>Chapter: Colonialism: Rural and Tribal Societies</p>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                        <button onClick={() => setShowAllAnswers(!showAllAnswers)} style={toggleAllAnswersButtonStyle} onMouseEnter={() => setIsToggleHovered(true)} onMouseLeave={() => setIsToggleHovered(false)}>
                            {showAllAnswers ? <EyeOffIcon /> : <EyeIcon />}
                            {showAllAnswers ? 'Hide All Answers' : 'Show All Answers'}
                        </button>
                        <Timer />
                    </div>
                </div>

                {Object.keys(sections).map(sectionKey => (
                    <section key={sectionKey} style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--theme-heading)', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '4px solid var(--theme-heading-border)' }}>
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
