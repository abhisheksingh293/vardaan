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

// --- WORKSHEET DATA (CLASS 10 SST) ---
const worksheetData = [
  // Section A
  { section: 'A', id: 'a1', question: '1. Which of the following was the result of the Act of Union, 1707?', options: ['(a) Unification of Germany', '(b) Unification of Italy', '(c) Unification of Great Britain', '(d) Unification of Vietnam'], answer: '(c) Unification of Great Britain', hint: 'This Act led to the creation of the United Kingdom of Great Britain.' },
  { section: 'A', id: 'a2', question: '2. Which of the following is an example of a renewable resource?', options: ['(a) Coal', '(b) Petroleum', '(c) Solar energy', '(d) Natural gas'], answer: '(c) Solar energy', hint: 'Renewable resources can be replenished naturally over time. Solar energy is derived from the sun.' },
  { section: 'A', id: 'a3', question: "3. The system of 'checks and balances' is another name for which one of the following power-sharing arrangements?", options: ['(a) Power sharing among different social groups.', '(b) Vertical division of power or power shared among different levels of government.', '(c) Horizontal division of power or power shared among different organs of the government.', '(d) Power sharing in the form of political parties, pressure groups and movements.'], answer: '(c) Horizontal division of power or power shared among different organs of the government.', hint: 'This system ensures that no single organ of government (like the executive, legislature, or judiciary) can exercise unlimited power.' },
  { section: 'A', id: 'a4', question: '4. Which of the following sectors is the largest employer in India?', options: ['(a) Primary Sector', '(b) Secondary Sector', '(c) Tertiary Sector', '(d) IT Sector'], answer: '(a) Primary Sector', hint: 'The primary sector, which includes agriculture, is the largest employer in India, though its contribution to GDP has decreased.' },
  { section: 'A', id: 'a5', question: '5. What is the main function of the Reserve Bank of India?', options: ['(a) To print currency notes', '(b) To provide loans to the public', '(c) To issue loans to business houses', '(d) To give loans to the farmers'], answer: '(a) To print currency notes', hint: 'On behalf of the central government, the RBI issues currency. It also acts as a banker to the government and regulates banks.' },

  // Section B
  { section: 'B', id: 'b1', type: 'brief', question: '6. State any two reasons for the depletion of forest resources in India.', answer: 'Two key reasons for the depletion of forest resources are: <ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Expansion of agriculture:</strong> A significant portion of forest land has been cleared for agricultural activities to feed a growing population.</li><li><strong>Large-scale development projects:</strong> Activities like mining, river valley projects (dams), and infrastructure development (roads, railways) have led to massive deforestation.</li></ul>' },
  { section: 'B', id: 'b2', type: 'brief', question: '7. What is federalism?', answer: '<strong>Federalism</strong> is a system of government in which power is divided between a <strong>central authority</strong> and various <strong>constituent units</strong> of the country. Both these levels of government enjoy their power independent of the other.' },
  { section: 'B', id: 'b3', type: 'brief', question: '8. Mention two developmental goals of a landless rural laborer.', answer: 'Two developmental goals for a landless rural laborer would be: <ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>More days of work and better wages:</strong> To ensure a stable and higher income.</li><li><strong>Social equality:</strong> To receive respect and equal treatment, and face no social discrimination in the village.</li></ul>' },
  { section: 'B', id: 'b4', type: 'brief', question: '9. Why did Mahatma Gandhi decide to launch a nationwide Satyagraha against the proposed Rowlatt Act, 1919?', answer: 'Mahatma Gandhi launched the Satyagraha because the <strong>Rowlatt Act (1919)</strong> was an unjust law. It gave the government enormous powers to <strong>repress political activities</strong> and allowed for the <strong>detention of political prisoners without trial for two years</strong>. He saw it as a violation of fundamental rights.' },

  // Section C
  { section: 'C', id: 'c1', type: 'brief', question: '10. Explain the role of women in the nationalist struggles of Europe.', answer: 'Women played an active role in the nationalist struggles of Europe in several ways: <ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li>They formed their own <strong>political associations</strong> and founded <strong>newspapers</strong>.</li><li>They took part in <strong>political meetings and demonstrations</strong>.</li><li>Despite their active participation, they were denied <strong>suffrage rights</strong> during the election of the Assemblies.</li></ul>' },
  { section: 'C', id: 'c2', type: 'brief', question: "11. Describe any three features of the 'Jhum' or 'slash and burn' agriculture.", answer: 'Three key features of Jhum cultivation are: <ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li>A patch of forest land is <strong>cleared and the vegetation is burned</strong> to create ash that fertilizes the soil.</li><li>Crops are grown for a few years until the <strong>soil loses its fertility</strong>.</li><li>The farmer then <strong>abandons the land</strong> and moves to a new patch, allowing the old one to regenerate naturally.</li></ul>' },
  { section: 'C', id: 'c3', type: 'brief', question: '12. How is the issue of sustainability important for development? Explain with examples.', answer: 'Sustainability is crucial for development because it ensures that the needs of the <strong>present generation are met without compromising the ability of future generations</strong> to meet their own needs. It means development should not damage the environment or deplete natural resources. <br><strong>Example:</strong> Overusing groundwater for agriculture can lead to a good harvest now but will deplete the water table, causing severe water scarcity in the future. Sustainable development would involve using methods like rainwater harvesting and drip irrigation.' },
  { section: 'C', id: 'c4', type: 'brief', question: '13. "The credit activities of the informal sector should be discouraged." Support the statement with arguments.', answer: 'The credit activities of the informal sector should be discouraged for the following reasons: <ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>High Interest Rates:</strong> Informal lenders (like moneylenders) charge very high interest rates, which increases the cost of borrowing.</li><li><strong>Debt Trap:</strong> The high interest rates can lead to a situation where the borrower is unable to repay the loan and falls into a debt trap.</li><li><strong>Unfair Means:</strong> Informal lenders often use unfair means to get their money back, harassing the borrower.</li></ul>' },
  { section: 'C', id: 'c5', type: 'brief', question: "14. Explain the three major problems faced by the weavers in the 19th century. (from the first unit of 'The Making of a Global World')", answer: 'In the 19th century, Indian weavers faced several major problems due to the influx of British machine-made goods: <ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Collapse of the local market:</strong> Cheap, machine-made textiles from Manchester flooded the Indian market, making it impossible for Indian handloom products to compete.</li><li><strong>Shortage of raw material:</strong> As raw cotton exports from India to Britain increased, Indian weavers found it difficult to get sufficient raw material at affordable prices.</li><li><strong>Loss of export market:</strong> High tariffs were imposed on Indian textiles in Britain, which destroyed their international market.</li></ul>' },
  
  // Section D
  { section: 'D', id: 'd1', type: 'long', question: '15. Describe the process of unification of Germany. OR Explain the significance of the Non-Cooperation Movement in India\'s freedom struggle.', answer: '<strong>Process of Unification of Germany:</strong><br/>The unification of Germany was led by the Chancellor of Prussia, <strong>Otto von Bismarck</strong>, with the help of the Prussian army and bureaucracy. The process involved three wars over seven years:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>War with Denmark (1864):</strong> Prussia and Austria jointly defeated Denmark to annex Schleswig-Holstein.</li><li><strong>Austro-Prussian War (1866):</strong> Prussia defeated Austria, removing it as a rival for German unification.</li><li><strong>Franco-Prussian War (1870-71):</strong> Prussia defeated France, which led to the southern German states joining the confederation.</li></ul>In January 1871, the Prussian King, <strong>William I</strong>, was proclaimed the German Emperor in a ceremony held at Versailles.<br/><br/><strong class="block mt-4">OR</strong><br/><br/><strong>Significance of the Non-Cooperation Movement (1920-22):</strong><br/>The Non-Cooperation Movement, led by Mahatma Gandhi, was a landmark in India\'s freedom struggle for several reasons:<ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>Mass Participation:</strong> It was the first truly mass-based movement, with participation from peasants, workers, students, and women across the country.</li><li><strong>Economic Impact:</strong> The boycott of foreign goods, especially cloth, hit British economic interests hard. The value of imported cloth dropped dramatically.</li><li><strong>Instilled Self-Reliance:</strong> It promoted the use of Khadi and Swadeshi (Indian-made) goods, fostering a sense of self-reliance and national pride.</li><li><strong>Hindu-Muslim Unity:</strong> The movement saw remarkable unity between Hindus and Muslims, especially with the Khilafat issue being merged with it.</li><li><strong>Showcased the Power of Satyagraha:</strong> It demonstrated the effectiveness of non-violent resistance on a national scale, shaking the foundations of the British Raj.</li></ul>' },
  { section: 'D', id: 'd2', type: 'long', question: '16. How are industries responsible for environmental degradation in India? Explain with five examples. OR Describe any five steps taken by the government for the conservation of wildlife in India.', answer: '<strong>Industries as a cause for Environmental Degradation:</strong><br/>Industries contribute significantly to environmental degradation in four major ways: air, water, land, and noise pollution.<ol class="list-decimal list-outside pl-5 mt-2 space-y-2"><li><strong>Air Pollution:</strong> The release of undesirable gases like sulphur dioxide and carbon monoxide from chemical plants, paper factories, and refineries pollutes the air.</li><li><strong>Water Pollution:</strong> Industrial effluents, both organic and inorganic, are often discharged into rivers without proper treatment. This pollutes water bodies, affecting aquatic life.</li><li><strong>Thermal Pollution:</strong> Hot water from factories and thermal plants is drained into rivers and ponds before cooling, which can kill aquatic life.</li><li><strong>Land Degradation:</strong> Dumping of industrial wastes, especially solid waste like fly ash and industrial slag, makes the soil barren and infertile.</li><li><strong>Noise Pollution:</strong> Industrial machinery and construction activities create a lot of noise, which can cause hearing impairment, increased heart rate, and other physiological effects.</li></ol><br/><strong class="block mt-4">OR</strong><br/><br/><strong>Government Steps for Wildlife Conservation:</strong><br/>The Indian government has taken several steps to conserve wildlife:<ol class="list-decimal list-outside pl-5 mt-2 space-y-2"><li><strong>The Indian Wildlife (Protection) Act, 1972:</strong> This act was implemented to provide a legal framework for protecting wildlife habitats. It included a ban on hunting and gave legal protection to endangered species.</li><li><strong>Establishment of National Parks and Sanctuaries:</strong> The government has set up numerous national parks, wildlife sanctuaries, and biosphere reserves across the country to protect natural habitats.</li><li><strong>Project Tiger:</strong> Launched in 1973, this is one of the most successful conservation projects aimed at protecting the endangered tiger population.</li><li><strong>Ban on Trade:</strong> A complete ban has been imposed on the trade of endangered species.</li><li><strong>Awareness Programs:</strong> Various awareness programs, like "Vanamahotsava," have been launched to encourage public participation in conservation efforts.</li></ol>' },
  { section: 'D', id: 'd3', type: 'long', question: '17. What are the different forms of power-sharing in modern democracies? Give an example of each of these.', answer: 'In modern democracies, power is shared in the following forms:<ol class="list-decimal list-outside pl-5 mt-2 space-y-2"><li><strong>Horizontal Division of Power:</strong> Power is shared among different organs of the government, such as the <strong>legislature, executive, and judiciary</strong>. This is also called a system of "checks and balances."<br/><strong>Example:</strong> In India, the judiciary can declare laws passed by the legislature unconstitutional if they violate the constitution.</li><li><strong>Vertical Division of Power:</strong> Power is shared among governments at different levels – a general government for the entire country and governments at the provincial or regional level.<br/><strong>Example:</strong> In India, power is divided between the Central Government, State Governments, and Local Governments (Panchayats and Municipalities).</li><li><strong>Power Sharing among different Social Groups:</strong> Power may also be shared among different social groups, such as religious and linguistic groups.<br/><strong>Example:</strong> "Community Government" in Belgium is a good example where different linguistic communities have power regarding cultural, educational, and language-related issues.</li><li><strong>Power Sharing among Political Parties, Pressure Groups, and Movements:</strong> In a democracy, power is also shared among different political parties that contest elections. When a coalition government is formed, different parties share power. Pressure groups also influence decision-making.<br/><strong>Example:</strong> The formation of coalition governments in India, like the National Democratic Alliance (NDA), where multiple parties share power.</li></ol>' },
  
  // Section E
  { section: 'E', id: 'e1', type: 'long', question: '18. Read the source given below and answer the questions that follow:<br/><br/><p class="p-4 bg-slate-100/50 dark:bg-slate-800/50 border-l-4 border-[var(--theme-primary)] rounded">In a federal system, the central government cannot order the state government to do something. The state government has powers of its own for which it is not answerable to the central government. Both these governments are separately answerable to the people. There are two or more levels (or tiers) of government. Different tiers of government govern the same citizens, but each tier has its own jurisdiction in specific matters of legislation, taxation and administration. The jurisdictions of the respective levels or tiers of government are specified in the constitution. So the existence and authority of each tier of government is constitutionally guaranteed.</p><br/>(i) What is the basic principle of a federal system of government? (1 mark)<br/>(ii) How is the jurisdiction of different tiers of government decided? (1 mark)<br/>(iii) Explain the term \'jurisdiction\'. (2 marks)', answer: '<strong class="block mt-2">(i)</strong> The basic principle of a federal system is the <strong>division of power</strong> between a central authority and various constituent units (like states), where each level of government is not subordinate to the other.<br/><br/><strong class="block mt-2">(ii)</strong> The jurisdiction of different tiers of government is <strong>specified in the constitution</strong>, ensuring that the existence and authority of each tier are constitutionally guaranteed.<br/><br/><strong class="block mt-2">(iii)</strong> <strong>Jurisdiction</strong> refers to the legal authority or the official power to make legal decisions and judgments over a specific area. In the context of federalism, it defines the specific matters (like legislation, taxation, administration) on which each level of government has the power to make laws and decisions.' },
  
  // Section F
  { section: 'F', id: 'f1', type: 'brief', question: '19. On an outline map of India, locate and label the following:<br/>(a) A major rice-producing state.<br/>(b) The place where the Indian National Congress session of September 1920 was held.<br/>(c) A state with black soil.', answer: 'The solution for this question requires marking on an outline map of India:<br/><ul class="list-disc list-outside pl-5 mt-2 space-y-1"><li><strong>(a) A major rice-producing state:</strong> West Bengal, Punjab, or Uttar Pradesh can be marked.</li><li><strong>(b) The place of the INC session (Sept 1920):</strong> Calcutta (now Kolkata) in West Bengal.</li><li><strong>(c) A state with black soil:</strong> Maharashtra, Gujarat, or Madhya Pradesh can be marked.</li></ul>' },
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
                setTime((time) => time + 1);
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

    return (
        <div className="flex items-center gap-2 p-2 rounded-full bg-[var(--theme-card-bg)] shadow-md">
            <TimerIcon />
            <span className="font-mono text-lg text-[var(--theme-text)]">{formatTime()}</span>
            <button onClick={() => setIsActive(!isActive)} className="p-2 rounded-full bg-[var(--theme-primary-light)] text-[var(--theme-primary)] hover:bg-opacity-50 transition-all">
                {isActive ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={() => { setTime(0); setIsActive(false); }} className="p-2 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-500 transition-all">
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
            className={`fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundColor: 'var(--theme-primary)'}}
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
    const toggleHint = () => setIsHintVisible(!isHintVisible);

    const getOptionClass = (option) => {
        if (selectionStatus) {
            if (option === item.answer) return 'bg-green-100 border-green-500 text-green-800 animate-pulse';
            if (option === selectedOption) return 'bg-red-100 border-red-500 text-red-800';
            return 'cursor-not-allowed text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700';
        }
        return 'border-slate-300 dark:border-slate-600 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 hover:border-slate-400 dark:hover:border-slate-500';
    };

    return (
        <div className="bg-[var(--theme-card-bg)] rounded-2xl p-6 sm:p-8 mb-6 shadow-lg transition-all duration-300" style={{boxShadow: '0 10px 15px -3px var(--theme-card-shadow), 0 4px 6px -4px var(--theme-card-shadow)'}}>
            <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-[var(--theme-text)] flex-1 prose prose-sm max-w-none prose-p:my-1 text-[var(--theme-text)] prose-strong:text-[var(--theme-text)] prose-headings:text-[var(--theme-text)]" dangerouslySetInnerHTML={{ __html: item.question }} />
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
                    <button onClick={toggleAnswer} className={`mt-4 px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isAnswerVisible ? 'bg-slate-600 text-white hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-400' : 'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'}`}>{isAnswerVisible ? 'Hide Answer' : 'View Answer'}</button>
                    <div className={`transition-all duration-500 ease-in-out grid ${isAnswerVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="mt-4 p-4 bg-slate-50/50 dark:bg-slate-800/50 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg">
                                <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 text-slate-700 dark:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-slate-100">
                                    <strong className="text-slate-900 dark:text-slate-100">Answer:</strong>
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
        'A': 'Section A: Multiple Choice Questions',
        'B': 'Section B: Very Short Answer Questions',
        'C': 'Section C: Short Answer Questions',
        'D': 'Section D: Long Answer Questions',
        'E': 'Section E: Case-Based Question',
        'F': 'Section F: Map Skill Based Question',
    };
    
    const toggleAllAnswers = () => setShowAllAnswers(!showAllAnswers);

    return (
        <div className="bg-[var(--theme-bg)] min-h-screen font-sans text-[var(--theme-text)] p-4 sm:p-6 md:p-8 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <header className="relative text-center mb-4 mt-20">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[var(--theme-heading)]">SST Practice Paper - Set 1</h1>
                    <div className="absolute top-0 right-0">
                        <ThemeSwitcher setCurrentTheme={setCurrentTheme} />
                    </div>
                </header>
                
                <div className="text-center mb-10">
                    <p className="inline-block px-4 py-2 mt-4 text-base font-medium rounded-full bg-[var(--theme-primary-light)] text-[var(--theme-primary)]">CBSE Class 10: Social Science</p>
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
                                .map(item => <QuestionCard key={item.id} item={item} showAll={showAllAnswers} />)}
                        </div>
                    </section>
                ))}
            </div>
            <BackToTopButton />
        </div>
    );
}
