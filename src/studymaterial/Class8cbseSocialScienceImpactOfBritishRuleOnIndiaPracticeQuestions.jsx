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
    { section: 'A', id: 'a1', question: '1. The main objective of the East India Company was—', options: ['(a) to provide education', '(b) to civilise the Indian people', '(c) to earn profit', '(d) to develop India'], answer: '(c) to earn profit', hint: 'The Company was primarily a trading organization focused on economic gain.' },
    { section: 'A', id: 'a2', question: '2. Who initiated the Wardha Education Scheme in 1937?', options: ['(a) Mahatma Gandhi', '(b) Raja Ram Mohan Roy', '(c) Dr. B. R. Ambedkar', '(d) Swami Vivekanand'], answer: '(a) Mahatma Gandhi', hint: 'This scheme, also known as Nai Talim, emphasized learning through practical skills.' },
    { section: 'A', id: 'a3', question: '3. The reformer who fought against the Brahmin dominance and discrimination against the lower castes was—', options: ['(a) Raja Ram Mohan Roy', '(b) Shri Narayana Guru', '(c) Jyotiba Phule', '(d) E.V. Ramaswamy'], answer: '(b) Shri Narayana Guru', hint: 'He was a key figure from Kerala who gave the slogan "One Caste, One Religion, One God for All".' },
    { section: 'A', id: 'a4', question: '4. Arya Samaj was established by—', options: ['(a) Dayanand Saraswati', '(b) Vivekananda', '(c) Periyar Ramaswamy', '(d) Jyotiba Phule'], answer: '(a) Dayanand Saraswati', hint: 'He founded this reform movement in Bombay in 1875.' },
    { section: 'A', id: 'a5', question: '5. Who is known as the Architect of Indian Constitution?', options: ['(a) Mahatma Gandhi', '(b) Jawaharlal Nehru', '(c) Sir Syed Ahmed Khan', '(d) Dr. B. R. Ambedkar'], answer: '(d) Dr. B. R. Ambedkar', hint: 'He was the chairman of the Drafting Committee of the Constituent Assembly.' },
    { section: 'B', id: 'b1', type: 'fill', question: '1. A number of pathshalas and maktabs provided elementary ________.', answer: 'education', hint: 'These were traditional places of learning in India.' },
    { section: 'B', id: 'b2', type: 'fill', question: '2. Charter Act of 1813 sanctioned one lakh rupees for ________ in India.', answer: 'education', hint: 'This was the first time the British government officially allocated funds for this purpose.' },
    { section: 'B', id: 'b3', type: 'fill', question: '3. ________ of 1854 gave a plan for a separate department of education.', answer: 'Wood\'s Despatch', hint: 'This is often called the "Magna Carta" of English Education in India.' },
    { section: 'B', id: 'b4', type: 'fill', question: '4. Swami Dayanand wanted to eradicate the ________ from Indian Society.', answer: 'caste system', hint: 'He was a strong critic of social evils and superstitions.' },
    { section: 'B', id: 'b5', type: 'fill', question: '5. The ________ played a pivotal role in mobilising public opinion.', answer: 'printing press', hint: 'This technology helped reformers spread their ideas to a wider audience through newspapers and books.' },
    { section: 'C', id: 'c1', type: 'tf', question: '1. Orientalists favoured English as a medium of instruction.', answer: 'False', hint: 'Orientalists favored traditional Indian languages like Sanskrit and Persian, while Anglicists favored English.' },
    { section: 'C', id: 'c2', type: 'tf', question: '2. Child marriage was banned in India in 1891.', answer: 'True', hint: 'The Age of Consent Act of 1891 raised the marriageable age for girls.' },
    { section: 'C', id: 'c3', type: 'tf', question: '3. Sati was an inhuman practice.', answer: 'True', hint: 'It was a practice where a widow was forced to burn herself on her husband\'s funeral pyre.' },
    { section: 'C', id: 'c4', type: 'tf', question: '4. Kochi and Travancore denied governmental positions to lower castes.', answer: 'True', hint: 'This was a major issue in the princely states of Kerala, which led to social reform movements.' },
    { section: 'C', id: 'c5', type: 'tf', question: '5. Gandhi considered untouchables as Harijans—people of God.', answer: 'True', hint: 'He worked tirelessly for their upliftment and to eradicate the practice of untouchability.' },
    { section: 'D', id: 'd1', type: 'brief', question: "1. What were the proposals of Wood's Despatch of 1854?", answer: 'The main proposals of <strong>Wood\'s Despatch</strong> were:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;">To set up an <strong>education department</strong> in each province.</li><li style="margin-bottom: 4px;">To establish <strong>universities</strong> in the presidency towns of Calcutta, Bombay, and Madras.</li><li style="margin-bottom: 4px;">To set up a system of <strong>graded schools</strong> (primary, middle, high school) across the country.</li><li style="margin-bottom: 4px;">It promoted teaching in both <strong>English and vernacular languages</strong>.</li></ul>', hint: 'This was considered the "Magna Carta" of English education in India.' },
    { section: 'D', id: 'd2', type: 'brief', question: '2. Highlight any three social evils of Indian society related to women.', answer: 'Three major social evils related to women were:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;"><strong>Sati:</strong> The practice of a widow immolating herself on her husband\'s funeral pyre.</li><li style="margin-bottom: 4px;"><strong>Female Infanticide:</strong> The intentional killing of newborn female infants.</li><li style="margin-bottom: 4px;"><strong>Child Marriage:</strong> The practice of marrying girls at a very young age, denying them education and a healthy childhood.</li></ul>', hint: 'Think about harmful practices from birth to widowhood.' },
    { section: 'D', id: 'd3', type: 'brief', question: '3. Describe any three main contributions of Swami Dayanand Saraswati as a social reformer.', answer: 'Three main contributions of <strong>Swami Dayanand Saraswati</strong> were:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;">He founded the <strong>Arya Samaj</strong> in 1875 to reform Hindu society.</li><li style="margin-bottom: 4px;">He strongly opposed social evils like idol worship, caste system, and child marriage.</li><li style="margin-bottom: 4px;">He was a great advocate for <strong>women\'s education and widow remarriage</strong>.</li></ul>', hint: 'He gave the call to "Go back to the Vedas".' },
    { section: 'D', id: 'd4', type: 'brief', question: '4. Differentiate between the Anglicist and the Orientalist.', answer: 'The main difference was about the medium of education for Indians:<br/><br/><strong>Anglicists</strong>, like Lord Macaulay, believed that education should be taught in <strong>English</strong> and focus on Western science and literature.<br/><br/><strong>Orientalists</strong> believed that education should be in <strong>vernacular languages</strong> (like Sanskrit, Persian, Arabic) and should promote traditional Indian learning.', hint: 'The debate was about language: English vs. local languages.' },
    { section: 'D', id: 'd5', type: 'brief', question: '5. Evaluate the efforts made by Indian leaders to improve Indian education.', answer: 'Indian leaders made significant efforts to create an alternative to the British system. <ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;"><strong>Raja Ram Mohan Roy</strong> championed modern Western education.</li><li style="margin-bottom: 4px;"><strong>Sir Syed Ahmed Khan</strong> founded the Aligarh Muslim University for modern education among Muslims.</li><li style="margin-bottom: 4px;"><strong>Mahatma Gandhi</strong> proposed "Nai Talim," focusing on practical skills in the mother tongue.</li><li style="margin-bottom: 4px;"><strong>Rabindranath Tagore</strong> established Visva-Bharati to blend Indian and Western learning.</li></ul>These efforts were crucial in promoting education relevant to Indian needs and culture.' },
    { section: 'E', id: 'e1', type: 'long', question: '1. Do you think that the British system of Education had a negative impact on the people of India? Support your answer with suitable arguments.', answer: 'Yes, the British system of education had significant negative impacts:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;">It created a small class of English-educated Indians who were <strong>alienated from the masses</strong>, creating a cultural divide.</li><li style="margin-bottom: 4px;">It largely <strong>neglected mass education</strong>, leading to widespread illiteracy.</li><li style="margin-bottom: 4px;">The curriculum glorified British rule and culture while often belittling Indian traditions, leading to a loss of national self-esteem.</li><li style="margin-bottom: 4px;">It focused on theoretical knowledge to produce clerks for the British administration, rather than promoting <strong>scientific and technical skills</strong>.</li></ul>' },
    { section: 'E', id: 'e2', type: 'long', question: '2. State the major landmarks in the field of education in the nineteenth and the twentieth century.', answer: 'Major landmarks in education were:<ol style="list-style-type: decimal; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 8px;"><strong>Charter Act of 1813:</strong> The first step where the British government allocated funds for education in India.</li><li style="margin-bottom: 8px;"><strong>Macaulay\'s Minute (1835):</strong> Made English the official medium of instruction, a decisive moment for Indian education.</li><li style="margin-bottom: 8px;"><strong>Wood\'s Despatch (1854):</strong> A comprehensive plan for education, recommending a graded school system and universities.</li><li style="margin-bottom: 8px;"><strong>Hunter Commission (1882):</strong> Reviewed the progress of education and emphasized the importance of primary education.</li><li style="margin-bottom: 8px;"><strong>Gandhiji\'s "Nai Talim" (1937):</strong> A proposal for a new system of basic education focused on learning through practical work and crafts.</li></ol>' },
    { section: 'E', id: 'e3', type: 'long', question: '3. Describe the main contributions of any three social reformers in improving the Indian Society.', answer: 'Three key social reformers and their contributions:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 8px;"><strong>Raja Ram Mohan Roy:</strong> Known as the "Father of the Indian Renaissance," he campaigned against Sati, leading to its abolition in 1829. He also fought against the caste system and advocated for women\'s rights and modern education.</li><li style="margin-bottom: 8px;"><strong>Ishwar Chandra Vidyasagar:</strong> A great scholar and reformer from Bengal, his biggest contribution was his relentless campaign for <strong>widow remarriage</strong>, which led to the Widow Remarriage Act of 1856. He also championed women\'s education.</li><li style="margin-bottom: 8px;"><strong>Jyotiba Phule:</strong> A reformer from Maharashtra who worked for the upliftment of lower castes and women. He and his wife, Savitribai Phule, started the <strong>first school for girls in India</strong> in 1848 and fought against caste discrimination.</li></ul>' },
    { section: 'E', id: 'e4', type: 'long', question: '4. State the impact of the reform movements on India.', answer: 'The reform movements had a profound impact on Indian society:<ul style="list-style-type: disc; padding-left: 20px; margin-top: 8px;"><li style="margin-bottom: 4px;"><strong>Laws against Social Evils:</strong> They led to the legal abolition of inhuman practices like Sati and child marriage and enabled widow remarriage.</li><li style="margin-bottom: 4px;"><strong>Promotion of Education:</strong> They emphasized the importance of modern education, especially for women, leading to the opening of many schools and colleges.</li><li style="margin-bottom: 4px;"><strong>Rise of National Consciousness:</strong> By removing social evils and promoting a sense of equality and justice, these movements helped foster a sense of national unity and pride, which laid the groundwork for the freedom struggle.</li><li style="margin-bottom: 4px;"><strong>Improved Status of Women:</strong> The movements challenged patriarchal norms and significantly contributed to improving the status of women in society.</li></ul>' },
    { section: 'E', id: 'e5', type: 'long', question: "5. 'Although the British and the Indian Parliament brought many laws to end social evils, yet they continue to exist in the Indian society.' Justify the statement.", answer: "This statement is true. Despite numerous laws, many social evils persist due to deep-rooted patriarchal attitudes, traditions, and a lack of effective implementation of laws.<br/><br/>For example, the <strong>Child Marriage Restraint Act</strong> and the later <strong>Prohibition of Child Marriage Act</strong> exist, yet child marriages still occur, especially in rural areas. Similarly, the <strong>Dowry Prohibition Act</strong> has been in place for decades, but the practice of dowry is still widespread. Caste-based discrimination, though illegal and punishable, continues to be a reality for many. This shows that simply passing laws is not enough; changing societal mindsets and ensuring strict enforcement are equally important." }
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
                <header style={{ position: 'relative', textAlign: 'center', marginBottom: '1rem',  marginTop: '2.5rem' }}>
                    <h1 style={{ fontSize: isMobile ? '2.25rem' : '3rem', fontWeight: 'bold', color: 'var(--theme-heading)' }}>Practice Questions</h1>
                    <div style={{ position: 'absolute', top: 0, right: 0 }}>
                        <ThemeSwitcher setCurrentTheme={setCurrentTheme} />
                    </div>
                </header>
                
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                     <p style={{ display: 'inline-block', padding: '0.5rem 1rem', marginTop: '1rem', fontSize: '1rem', fontWeight: '500', borderRadius: '9999px', backgroundColor: 'var(--theme-primary-light)', color: 'var(--theme-primary)' }}>Chapter: Impact of British Rule on India</p>
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
