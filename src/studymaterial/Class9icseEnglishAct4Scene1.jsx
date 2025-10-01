import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct4Scene1Summary from './Class9icseEnglishAct4Scene1Summary';
import Class9icseEnglishAct4Scene1Questions from './Class9icseEnglishAct4Scene1Questions';
// Theme object for consistent styling
const theme = {
    colors: {
        primary: "#8B0000", // Dark Red
        secondary: "#DAA520", // Goldenrod
        backgroundLight: "#FDF6E3", // Parchment-like color
        textLight: "#3B3B3B",
        white: "#FFFFFF",
        gray: {
            50: "#F9FAFB", 100: "#F3F4F6", 200: "#E5E7EB", 300: "#D1D5DB",
            400: "#9CA3AF", 500: "#6B7280", 600: "#4B5563", 700: "#374151", 800: "#1F2937",
        },
        green: { 100: 'rgba(22, 163, 74, 0.05)', 600: '#16a34a', 700: '#15803d' },
        red: { 100: 'rgba(220, 38, 38, 0.05)', 600: '#dc2626', 700: '#b91c1c' }
    },
    fontFamily: { display: ["Merriweather", "serif"], body: ["Lato", "sans-serif"] },
    borderRadius: { DEFAULT: "0.375rem", lg: "0.5rem", xl: "1rem", full: "9999px" },
};

// Data for the scene
const galleryImages = ["https://placehold.co/400x400/1F2937/FFFFFF?text=The+Triumvirate", "https://placehold.co/400x400/8B0000/FFFFFF?text=Proscription+List", "https://placehold.co/400x400/6B7280/FFFFFF?text=Dividing+the+World", "https://placehold.co/400x400/DAA520/FFFFFF?text=Antony's+Ambition"];
const importantWords = [{ term: "Pricked", definition: "Marked down on a list, typically for death." }, { term: "Damn", definition: "Condemn to death." }, { term: "Proscription", definition: "The posting of a list of names of people who are condemned to death without a trial." }, { term: "Provender", definition: "Food for livestock, like hay or oats." }, { term: "Property", definition: "A tool or an object to be used, not a person to be respected." }, { term: "Levying powers", definition: "Raising armies." }];
const sceneQuestions = [{ id: 'mcq1', type: 'mcq', question: "1. What are Antony, Octavius, and Lepidus doing at the beginning of the scene?", options: ["Celebrating their victory.", "Writing a new constitution for Rome.", "Making a list of Romans to be killed."], answer: "Making a list of Romans to be killed." }, { id: 'mcq2', type: 'mcq', question: "2. How does Antony view Lepidus?", options: ["As a respected and equal partner.", "As a brave and valiant soldier.", "As a useless man, only fit for running errands."], answer: "As a useless man, only fit for running errands." }, { id: 'qa1', type: 'qa', question: "1. Who does Antony agree to sacrifice in exchange for Lepidus's brother?", answer: "Antony agrees to add his own nephew, Publius (his sister's son), to the death list in a cold-hearted political trade." }, { id: 'qa2', type: 'qa', question: "2. To what animal does Antony compare Lepidus? What does this comparison reveal?", answer: "Antony compares Lepidus to his horse and to a donkey (an ass). This reveals that Antony sees Lepidus not as a man or an equal partner, but as a beast of burden—something to be used for carrying loads and following orders, and then to be discarded when no longer useful." }, { id: 'qa3', type: 'qa', question: "3. What military threat are the triumvirs preparing to face?", answer: "They are preparing to face the armies being raised by Brutus and Cassius, who have fled from Rome and are gathering forces." },];
const workbookQuestions = [{ id: 'wbq1', question: "Compare the Antony in this scene with the Antony from Act III. How has his character changed or been revealed differently?", answer: "In Act III, Antony presented himself as a loyal, grieving friend to Caesar and a man of the people. He seemed driven by personal sorrow and a sense of justice. In this scene, the mask is off. We see a cold, ruthless, and calculating politician, willing to sacrifice his own family for power. He is not a grieving friend but a power-hungry strategist. This scene reveals that his emotional speech at the funeral was likely a calculated performance to gain the power he now wields so brutally." }, { id: 'wbq2', question: "What does the triumvirate's 'proscription' list signify about the new political order in Rome?", answer: "The proscription list signifies a complete descent into tyranny, the very thing Brutus claimed he killed Caesar to prevent. The new order is not based on law, debate, or justice, but on murder and political convenience. The casual way they trade family members for execution shows a chilling lack of morality. Power is absolute, and anyone deemed an obstacle is simply marked for death without trial. Rome has traded one potential tyrant for three actual ones." }, { id: 'wbq3', question: "Analyze the power dynamic between Antony and Octavius in this scene. Who seems to be in charge?", answer: "Antony is clearly the dominant figure in this scene. He makes the decisions, dismisses Lepidus, and lectures Octavius, citing his greater experience ('I have seen more days than you'). Octavius seems to be the junior partner for now; he questions Antony's judgment about Lepidus but ultimately defers to his will. However, Octavius's final lines, where he speaks of being 'bayed about with many enemies,' show his own strategic mind at work. While Antony is the senior partner now, there's a hint of the future power struggle between them." }];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'ANTONY', lines: 'These many, then, shall die. Their names are pricked.' },
        { speaker: 'OCTAVIUS', lines: 'Your brother too must die. Consent you, Lepidus?' },
        { speaker: 'LEPIDUS', lines: 'I do consent—' },
        { speaker: 'OCTAVIUS', lines: 'Prick him down, Antony.' },
        { speaker: 'LEPIDUS', lines: 'Upon condition Publius shall not live,\nWho is your sister’s son, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'He shall not live. Look, with a spot I damn him.\nBut, Lepidus, go you to Caesar’s house.\nFetch the will hither, and we shall determine\nHow to cut off some charge in legacies.' },
        { speaker: 'LEPIDUS', lines: 'What, shall I find you here?' },
        { speaker: 'OCTAVIUS', lines: 'Or here, or at the Capitol.' },
        { speaker: 'ANTONY', lines: 'This is a slight, unmeritable man,\nMeet to be sent on errands. Is it fit,\nThe threefold world divided, he should stand\nOne of the three to share it?' },
        { speaker: 'OCTAVIUS', lines: 'So you thought him,\nAnd took his voice who should be pricked to die,\nIn our black sentence and proscription.' },
        { speaker: 'ANTONY', lines: 'Octavius, I have seen more days than you.\nAnd though we lay these honors on this man,\nTo ease ourselves of divers slanderous loads,\nHe shall but bear them as the ass bears gold,\nTo groan and sweat under the business,\nEither led or driven, as we point the way.\nAnd having brought our treasure where we will,\nThen take we down his load and turn him off,\nLike to the empty ass, to shake his ears\nAnd graze in commons.' },
        { speaker: 'OCTAVIUS', lines: 'You may do your will,\nBut he’s a tried and valiant soldier.' },
        { speaker: 'ANTONY', lines: 'So is my horse, Octavius, and for that\nI do appoint him store of provender.\nIt is a creature that I teach to fight,\nTo wind, to stop, to run directly on,\nHis corporal motion governed by my spirit,\nAnd, in some taste, is Lepidus but so.\nHe must be taught and trained and bid go forth,\nA barren-spirited fellow, one that feeds\nOn objects, arts, and imitations,\nWhich, out of use and staled by other men,\nBegin his fashion. Do not talk of him\nBut as a property. And now, Octavius,\nListen great things. Brutus and Cassius\nAre levying powers. We must straight make head.\nTherefore let our alliance be combined,\nOur best friends made, our means stretched.\nAnd let us presently go sit in council,\nHow covert matters may be best disclosed,\nAnd open perils surest answered.' },
        { speaker: 'OCTAVIUS', lines: 'Let us do so. For we are at the stake,\nAnd bayed about with many enemies,\nAnd some that smile have in their hearts, I fear,\nMillions of mischiefs.' }
    ],
    'Normal English': [
        { speaker: 'ANTONY', lines: 'All these people, then, will die. Their names have been marked.' },
        { speaker: 'OCTAVIUS', lines: 'Your brother must die too. Do you agree, Lepidus?' },
        { speaker: 'LEPIDUS', lines: 'I agree—' },
        { speaker: 'OCTAVIUS', lines: 'Mark him down, Antony.' },
        { speaker: 'LEPIDUS', lines: 'On the condition that Publius will not be allowed to live—the one who is your sister’s son, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'He will not live. Look, with this mark, I condemn him.\nBut, Lepidus, you go to Caesar’s house.\nBring the will here, and we will figure out\nHow to reduce some of the expenses in the bequests.' },
        { speaker: 'LEPIDUS', lines: 'So, will I find you here when I return?' },
        { speaker: 'OCTAVIUS', lines: 'Either here, or at the Capitol.' },
        { speaker: 'ANTONY', lines: 'This is an insignificant, worthless man,\nFit only to be sent on errands. Is it right,\nWith the world divided in three parts, that he should be\nOne of the three to share it?' },
        { speaker: 'OCTAVIUS', lines: 'That\'s what you thought of him,\nAnd yet you accepted his vote on who should be marked to die\nIn our grim death sentence and proscription.' },
        { speaker: 'ANTONY', lines: 'Octavius, I am older and more experienced than you.\nAnd though we give this man these honors\nTo relieve ourselves of various slanderous burdens,\nHe will carry them just as a donkey carries gold,\nGroaning and sweating under the work,\nEither led or driven, whichever way we point.\nAnd after he has brought our treasure where we want it,\nThen we will take his load off and get rid of him,\nLike an unburdened donkey, to shake his ears\nAnd graze on public land.' },
        { speaker: 'OCTAVIUS', lines: 'You can do as you wish,\nBut he is a proven and brave soldier.' },
        { speaker: 'ANTONY', lines: 'So is my horse, Octavius, and for that reason\nI provide him with plenty of food.\nIt is a creature I teach to fight,\nTo turn, to stop, to run straight ahead,\nIts physical movement governed by my will.\nAnd, in some ways, Lepidus is just the same.\nHe must be taught and trained and told where to go—\nA man with no original thoughts, one who thrives\nOn trivial things, trends, and imitations,\nThat are already outdated and cast off by other men\nWhen he starts to adopt them. Do not speak of him\nAs anything but a tool. And now, Octavius,\nListen to important matters. Brutus and Cassius\nAre raising armies. We must immediately prepare to face them.\nTherefore, let’s combine our forces,\nSecure our most powerful allies, and stretch our resources.\nAnd let’s go at once and sit in council\nTo decide how secret threats can be best uncovered\nAnd how open dangers can be most safely dealt with.' },
        { speaker: 'OCTAVIUS', lines: 'Let’s do that. For we are like bears tied to a stake,\nSurrounded and cornered by many enemies.\nAnd I fear that some of those who smile at us\nHave millions of evil plots in their hearts.' }
    ],
    Hinglish: [
        { speaker: 'ANTONY', lines: 'To phir, itne saare log marenge. Unke naam par nishaan laga diya gaya hai.' },
        { speaker: 'OCTAVIUS', lines: 'Tumhare bhai ko bhi marna hoga. Kya tum sehmat ho, Lepidus?' },
        { speaker: 'LEPIDUS', lines: 'Main sehmat hoon—' },
        { speaker: 'OCTAVIUS', lines: 'Uska naam likh do, Antony.' },
        { speaker: 'LEPIDUS', lines: 'Is shart par ki Publius zinda nahi rahega,\nJo tumhari behen ka beta hai, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'Woh zinda nahi rahega. Dekho, ek nishaan se main use maut ki saza deta hoon.\nLekin, Lepidus, tum Caesar ke ghar jao.\nWahan se vasiyat le aao, aur hum tay karenge\nKi virasat mein se kuch kharch kaise kam kiya jaaye.' },
        { speaker: 'LEPIDUS', lines: 'Kya, main tum logon ko yahin milunga?' },
        { speaker: 'OCTAVIUS', lines: 'Yahin, ya phir Capitol mein.' },
        { speaker: 'ANTONY', lines: 'Yeh ek mamuli, na-kabil aadmi hai,\nSirf chhote-mote kaam par bhejne ke laayak. Kya yeh theek hai,\nJab duniya teen hisson mein bati ho, toh woh\nUn teen hisse-daron mein se ek ho?' },
        { speaker: 'OCTAVIUS', lines: 'Tumne bhi toh yahi socha tha,\nAur uski bhi rai li thi ki kise maut ke liye chuna jaana chahiye,\nHamari is kaali saza aur maut ki soochi mein.' },
        { speaker: 'ANTONY', lines: 'Octavius, maine tumse zyada duniya dekhi hai.\nAur bhale hi hum is aadmi ko yeh samman de rahe hain,\nTaaki hum khud ko kai tarah ke badnami ke bojh se bacha sakein,\nWoh unhe aise hi uthayega jaise gadha sona uthata hai,\nKaam ke bojh tale karaahne aur paseena bahane ke liye,\nChahe use le jaya jaaye ya dhakela jaaye, jidhar hum ishara karein.\nAur jab woh hamara khazana wahan le aayega jahan hum chahte hain,\nTab hum uska bojh utaar denge aur use bhaga denge,\nJaise ek khaali gadhe ko, apne kaan hilane\nAur aam zameen par charne ke liye.' },
        { speaker: 'OCTAVIUS', lines: 'Tum apni marzi kar sakte ho,\nLekin woh ek aazmaya hua aur bahadur sipahi hai.' },
        { speaker: 'ANTONY', lines: 'Mera ghoda bhi waisa hi hai, Octavius, aur isliye\nMain uske liye dher saara chara muqarrar karta hoon.\nYeh ek aisa prani hai jise main ladna sikhata hoon,\nGhूमna, rukna, seedha aage daudna,\nUske sharirik hareket meri aatma se niyantrit hoti hai.\nAur, kuch maamlon mein, Lepidus bhi bas waisa hi hai.\nUse sikhana, train karna aur aage badhne ke liye kehna hoga—\nEk banjar-dimaag wala saathi, jo aisi cheezon par jeeta hai\nJaise ki vastu, kala, aur nakal,\nJo doosre logon dwara istemal se bahar aur purani ho chuki hoti hain,\nTab woh unhe apnata hai. Uske baare mein baat mat karo\nSivaye ek saaman ke. Aur ab, Octavius,\nBadi baatein suno. Brutus aur Cassius\nSenae juta rahe hain. Humein turant unka samna karna hoga.\nIsliye hamare gathbandhan ko milaya jaaye,\nHamare sabse achhe dost banaye jaayein, hamare saadhan badhaye jaayein.\nAur chalo abhi parishad mein baithein,\nKi kaise gupt maamlon ka sabse achha khulasa kiya jaaye,\nAur khule khatron ka sabse surakshit jawab diya jaaye.' },
        { speaker: 'OCTAVIUS', lines: 'Chalo aisa hi karte hain. Kyunki hum khatre mein hain,\nAur kai dushmanon se ghire hue hain.\nAur kuch jo muskurate hain, unke dilon mein, mujhe darr hai,\nLakhon shararatein hain.' }
    ]
};
const descriptionVersions = {
    Shakespearean: "The new triumvirate—Antony, Octavius, and Lepidus—meet to prorogue their enemies, trading lives with cold calculus. Antony reveals his contempt for Lepidus and plans for war against Brutus and Cassius.",
    'Normal English': "The new leaders, Antony, Octavius, and Lepidus, make a death list that includes their own family members. After sending Lepidus on an errand, Antony reveals he thinks Lepidus is useless and plans to discard him once he's no longer needed, as they prepare for war.",
    Hinglish: "Naye neta, Antony, Octavius, aur Lepidus, ek maut ki soochi banate hain jismein unke apne parivar ke sadasya bhi shamil hain. Lepidus ko ek kaam se bhej kar, Antony batata hai ki woh Lepidus ko bekar samajhta hai aur zaroorat khatm hone par use chhod dega, jabki woh sab jung ki taiyari kar rahe hain."
};

// Main App Component
const App = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [answersVisible, setAnswersVisible] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [activeVersion, setActiveVersion] = useState('Shakespearean');
    const [activeTab, setActiveTab] = useState('dialogue');
    const [qaTab, setQaTab] = useState('additional');
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [currentScrolledIndex, setCurrentScrolledIndex] = useState(0);
    const versionButtonRef = useRef(null);
    const galleryScrollerRef = useRef(null);
    const [sliderStyle, setSliderStyle] = useState({});

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
        document.head.appendChild(link);
        return () => { document.head.removeChild(link); };
    }, []);

    useEffect(() => {
        let timeoutId;
        const updateSlider = () => {
            if (versionButtonRef.current) {
                const activeButton = versionButtonRef.current.querySelector(`button[data-version="${activeVersion}"]`);
                if (activeButton) {
                    setSliderStyle({
                        left: `${activeButton.offsetLeft}px`,
                        width: `${activeButton.offsetWidth}px`,
                    });
                }
            }
        };
        updateSlider();
        const handleResizeSlider = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateSlider, 100);
        };
        window.addEventListener('resize', handleResizeSlider);
        return () => {
            window.removeEventListener('resize', handleResizeSlider);
            clearTimeout(timeoutId);
        }
    }, [activeVersion]);

    useEffect(() => {
        if (isGalleryOpen && galleryScrollerRef.current) {
            const imageWidth = galleryScrollerRef.current.offsetWidth;
            galleryScrollerRef.current.scrollTo({
                left: imageWidth * selectedImageIndex,
                behavior: 'auto'
            });
            setCurrentScrolledIndex(selectedImageIndex);
        }
        document.body.style.overflow = isGalleryOpen ? 'hidden' : 'auto';
    }, [isGalleryOpen, selectedImageIndex]);

    const openGallery = (index) => {
        setSelectedImageIndex(index);
        setIsGalleryOpen(true);
    };

    const closeGallery = () => setIsGalleryOpen(false);

    const handleGalleryScroll = (e) => {
        const scrollIndex = Math.round(e.target.scrollLeft / e.target.offsetWidth);
        setCurrentScrolledIndex(scrollIndex);
    };

    const scrollToImage = (index) => {
        if (galleryScrollerRef.current) {
            galleryScrollerRef.current.scrollTo({
                left: galleryScrollerRef.current.offsetWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const toggleAnswer = (id) => setAnswersVisible(p => ({ ...p, [id]: !p[id] }));
    const handleMcqSelect = (qId, option) => { if (!selectedAnswers[qId]) setSelectedAnswers(p => ({ ...p, [qId]: option })); };

    const styles = {
        body: { 
            backgroundColor: theme.colors.backgroundLight, 
            fontFamily: theme.fontFamily.body.join(','), 
            color: theme.colors.textLight, 
            margin: 0, 
            minHeight: '100vh',
            position: 'relative',
        },
        backgroundGrid: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(${theme.colors.gray[200]} 1px, transparent 1px), linear-gradient(to right, ${theme.colors.gray[200]} 1px, transparent 1px)`,
            backgroundSize: '2rem 2rem',
            maskImage: 'linear-gradient(to bottom, transparent 5%, black 40%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 5%, black 40%)',
            zIndex: 0,
        },
        main: { 
            flexGrow: 1, 
            padding: isLargeScreen ? '2rem 1rem' : '1rem 0.75rem',
            position: 'relative',
            zIndex: 1,
            marginTop: '50px',
        },
        mainContentContainer: { maxWidth: '64rem', margin: '0 auto' },
        card: { backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: isLargeScreen ? '2rem' : '1.5rem', marginBottom: '1rem', border: `1px solid ${theme.colors.gray[200]}`, position: 'relative', overflow: 'hidden' },
        introCardBg: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 },
        introCardContent: { position: 'relative', zIndex: 10 },
        breadcrumbButton: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', color: theme.colors.primary, backgroundColor: 'rgba(139, 0, 0, 0.05)', border: `1px solid rgba(139, 0, 0, 0.1)`, padding: '0.5rem 1rem', borderRadius: theme.borderRadius.full, textDecoration: 'none', transition: 'background-color 0.2s, color 0.2s', cursor: 'pointer', marginBottom: '1rem' },
        sceneTitle: { fontSize: isLargeScreen ? '3rem' : '2.25rem', fontWeight: '900', color: theme.colors.primary, marginBottom: '0.5rem', fontFamily: theme.fontFamily.display.join(',') },
        sceneSubtitle: { fontSize: '1.125rem', color: theme.colors.textLight, lineHeight: 1.6, marginBottom: '1.5rem', fontFamily: theme.fontFamily.display.join(','), fontStyle: 'italic' },
        sceneDescription: { fontSize: '1rem', color: theme.colors.gray[600], lineHeight: 1.6, marginBottom: '2rem', maxWidth: '48rem' },
        navigationContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' },
        versionButtonGroup: { position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.gray[100], padding: '0.25rem', borderRadius: theme.borderRadius.full, border: isLargeScreen ? `2px solid ${theme.colors.gray[200]}` : `1px solid ${theme.colors.gray[200]}` },
        versionSlider: { position: 'absolute', top: '0.25rem', bottom: '0.25rem', borderRadius: theme.borderRadius.full, backgroundColor: theme.colors.primary, transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', zIndex: 1 },
        versionButton: { padding: isLargeScreen ? '0.6rem 2rem' : '0.5rem 1rem', fontSize: isLargeScreen ? '0.875rem' : '0.8rem', fontWeight: '700', color: theme.colors.gray[600], border: 'none', cursor: 'pointer', backgroundColor: 'transparent', transition: 'color 0.4s ease', zIndex: 2, whiteSpace: 'nowrap' },
        activeVersionButton: { color: theme.colors.white },
        mainNavButtonGroup: { display: 'flex', width: '100%', alignItems: 'center', gap: '0.5rem' },
        mainNavButton: { flex: 1, padding: '0.6rem 0.25rem', fontSize: '0.8rem', fontWeight: '600', color: theme.colors.primary, border: `2px solid ${theme.colors.primary}`, borderRadius: theme.borderRadius.full, cursor: 'pointer', backgroundColor: 'transparent', transition: 'all 0.3s ease' },
        activeMainNavButton: { color: theme.colors.white, backgroundColor: theme.colors.primary },
        mainGrid: { display: 'grid', gap: '2rem', gridTemplateColumns: isLargeScreen ? 'repeat(3, 1fr)' : '1fr' },
        dialogueColumn: { gridColumn: isLargeScreen ? 'span 2' : 'span 1' },
        sidebarColumn: { gridColumn: 'span 1', display: 'flex', flexDirection: 'column', gap: '2rem' },
        dialogueCard: { backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)', padding: isLargeScreen ? '2.5rem' : '1.5rem', border: `1px solid ${theme.colors.gray[200]}` },
        sidebarCard: { backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)', padding: '1.5rem', border: `1px solid ${theme.colors.gray[200]}` },
        sidebarHeader: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' },
        sidebarTitle: { fontSize: '1.5rem', fontWeight: '700', color: theme.colors.primary, fontFamily: theme.fontFamily.display.join(',') },
        galleryGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' },
        galleryImage: { borderRadius: theme.borderRadius.lg, width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' },
        wordList: { listStyle: 'none', paddingLeft: '0' },
        wordListItem: { marginBottom: '0.75rem' },
        wordTerm: { fontWeight: '700', color: theme.colors.textLight },
        questionSection: { marginTop: '1rem', backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',  border: `1px solid ${theme.colors.gray[200]}` },
        sectionTitle: { fontSize: isLargeScreen ? '2rem' : '1.5rem', fontWeight: '800', color: theme.colors.primary, fontFamily: theme.fontFamily.display.join(','), marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' },
        subSectionTitle: { fontSize: isLargeScreen ? '1.5rem' : '1.25rem', fontWeight: '700', color: theme.colors.gray[800], fontFamily: theme.fontFamily.display.join(','), marginTop: '2rem', marginBottom: '1.5rem' },
        mcqItem: { marginBottom: '1.5rem' },
        mcqQuestion: { fontWeight: '600', color: theme.colors.gray[800], marginBottom: '1rem', fontSize: '1rem' },
        mcqOptionsContainer: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
        mcqOption: { padding: '0.75rem 1rem', borderWidth: '1px', borderStyle: 'solid', borderColor: theme.colors.gray[200], borderRadius: theme.borderRadius.lg, cursor: 'pointer', transition: 'all 0.2s', backgroundColor: theme.colors.gray[50], textAlign: 'left', fontFamily: theme.fontFamily.body.join(','), fontSize: '0.9rem', color: theme.colors.gray[800], display: 'flex', alignItems: 'center', gap: '0.5rem' },
        correctMcqOption: { borderColor: theme.colors.green[600], backgroundColor: theme.colors.green[100], fontWeight: '600', color: theme.colors.green[700] },
        incorrectMcqOption: { borderColor: theme.colors.red[600], backgroundColor: theme.colors.red[100], fontWeight: '600', color: theme.colors.red[700] },
        qaContainer: { padding: '1.5rem 0', borderBottom: `1px solid ${theme.colors.gray[200]}` },
        qaQuestion: { fontWeight: '600', color: theme.colors.gray[800], fontSize: '1rem', marginBottom: '0.5rem' },
        answerLink: { fontSize: '0.875rem', fontWeight: '600', color: theme.colors.primary, cursor: 'pointer', border: 'none', backgroundColor: 'transparent', padding: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' },
        answerText: { marginTop: '1rem', color: theme.colors.gray[700], lineHeight: 1.6, fontSize: '0.9rem', backgroundColor: theme.colors.gray[50], padding: '1rem', borderRadius: theme.borderRadius.lg, border: `1px solid ${theme.colors.gray[200]}` },
        summaryCard: { backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: isLargeScreen ? '2.5rem' : '1.5rem', border: `1px solid ${theme.colors.gray[200]}`, marginTop: '1rem' },
        summaryHeader: { display: 'flex', flexDirection: isLargeScreen ? 'row' : 'column', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' },
        summaryToggleGroup: { display: 'flex', width: isLargeScreen ? 'auto' : '100%', backgroundColor: theme.colors.gray[100], borderRadius: theme.borderRadius.full, padding: '0.25rem' },
        summaryToggleButton: { flex: 1, padding: '0.5rem 1rem', border: 'none', backgroundColor: 'transparent', borderRadius: theme.borderRadius.full, cursor: 'pointer', fontWeight: '600', color: theme.colors.gray[500], transition: 'all 0.2s', fontSize: isLargeScreen ? '0.9rem' : '0.8rem' },
        qaToggleButton: { flex: 1, padding: isLargeScreen ? '0.5rem 2rem' : '0.5rem 0.5rem', border: 'none', backgroundColor: 'transparent', borderRadius: theme.borderRadius.full, cursor: 'pointer', fontWeight: '600', color: theme.colors.gray[500], transition: 'all 0.2s', fontSize: isLargeScreen ? '0.9rem' : '0.75rem', whiteSpace: 'nowrap' },
        activeSummaryToggleButton: { backgroundColor: theme.colors.white, color: theme.colors.primary, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
        summaryContent: { lineHeight: 1.8, color: theme.colors.gray[700], fontSize: '1.05rem' },
        galleryModalBackdrop: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, opacity: isGalleryOpen ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: isGalleryOpen ? 'auto' : 'none' },
        galleryModalContent: { position: 'relative', width: '90%', maxWidth: '800px', height: '70vh', maxHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', transform: isGalleryOpen ? 'scale(1)' : 'scale(0.95)', transition: 'transform 0.3s ease' },
        galleryModalCloseButton: { position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: theme.colors.textLight, border: 'none', borderRadius: theme.borderRadius.full, width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 1011, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
        galleryModalImageScroller: { display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory', width: '100%', height: '100%', scrollbarWidth: 'none', msOverflowStyle: 'none', },
        galleryModalImage: { width: '100%', height: '100%', objectFit: 'contain', flexShrink: 0, scrollSnapAlign: 'center', },
        galleryDotsContainer: { display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' },
        galleryDot: { width: '0.75rem', height: '0.75rem', borderRadius: theme.borderRadius.full, backgroundColor: 'rgba(255, 255, 255, 0.5)', cursor: 'pointer', transition: 'background-color 0.3s' },
        activeGalleryDot: { backgroundColor: theme.colors.white },
        mobileGalleryContainer: { display: 'flex', overflowX: 'auto', gap: '0.75rem', padding: '0.5rem 0', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' },
        mobileGalleryImage: { height: '120px', width: '120px', objectFit: 'cover', borderRadius: theme.borderRadius.lg, flexShrink: 0, scrollSnapAlign: 'start' },
        mobileButtonCard: { backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: '1rem', marginBottom: '1rem', border: `1px solid ${theme.colors.gray[200]}`, display: 'flex', flexDirection: 'column', gap: '1rem' },
    };

    const dialogueContent = dialogueVersions[activeVersion];

    return (
        <div style={styles.body}>
            <div style={styles.backgroundGrid} />
            <div style={{ ...styles.galleryModalBackdrop, opacity: isGalleryOpen ? 1 : 0, pointerEvents: isGalleryOpen ? 'auto' : 'none' }} onClick={closeGallery}>
                <div style={{ ...styles.galleryModalContent, transform: isGalleryOpen ? 'scale(1)' : 'scale(0.95)' }} onClick={(e) => e.stopPropagation()}>
                    <button style={styles.galleryModalCloseButton} onClick={closeGallery}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                    <div ref={galleryScrollerRef} onScroll={handleGalleryScroll} style={styles.galleryModalImageScroller}>
                        {galleryImages.map((src, index) => (
                            <img key={index} src={src} alt={`Gallery image ${index + 1}`} style={styles.galleryModalImage} />
                        ))}
                    </div>
                    <div style={styles.galleryDotsContainer}>
                        {galleryImages.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => scrollToImage(index)}
                                style={index === currentScrolledIndex ? { ...styles.galleryDot, ...styles.activeGalleryDot } : styles.galleryDot}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <main style={styles.main}>
                <div style={styles.mainContentContainer}>
                    <div style={styles.card}>
                        <img alt="Roman Triumvirate background" style={styles.introCardBg} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBURfa0I53fnPXLusZMM3pKkaMlR39PRFdZSaDztvrVA3GbbSwl-URsK_oaMkyGXouKCkEOOvWpepqz0Vv13lsQcUdQhP4sAgiINxwQ0fsDUbIJ5kHpahdCvVebh9tpVT1AlIp5PIJiP80NA81aBNoDepsIjt3T22ryPuq5t6TCIUgGhyjLC-9sqBW_ofDSrq8GrrtKuUtbYwpiffitDGO7l46yO1Kq1hTToAvxxAu_j5sy2npIMprfT3Zc4TpqBG5AViVyZA6hQoi6" />
                        <div style={styles.introCardContent}>
                        <a style={styles.breadcrumbButton} href="/studymaterial/class9icse/Class9icseEnglish">Julius Caesar</a>
                            <h1 style={styles.sceneTitle}>Act IV, Scene 1</h1>
                            <p style={styles.sceneSubtitle}>A house in Rome</p>
                            <p style={styles.sceneDescription}>{descriptionVersions[activeVersion] || descriptionVersions['Shakespearean']}</p>

                            {isLargeScreen ? (
                                <div style={styles.navigationContainer}>
                                    <div style={styles.mainNavButtonGroup}>
                                        <button onClick={() => setActiveTab('dialogue')} style={activeTab === 'dialogue' ? { ...styles.mainNavButton, ...styles.activeMainNavButton } : styles.mainNavButton}>Dialogue</button>
                                        <button onClick={() => setActiveTab('summary')} style={activeTab === 'summary' ? { ...styles.mainNavButton, ...styles.activeMainNavButton } : styles.mainNavButton}>Summary</button>
                                        <button onClick={() => setActiveTab('qa')} style={activeTab === 'qa' ? { ...styles.mainNavButton, ...styles.activeMainNavButton } : styles.mainNavButton}>Q&A</button>
                                    </div>
                                    {activeTab === 'dialogue' && (
                                        <div ref={versionButtonRef} style={{ ...styles.versionButtonGroup, opacity: activeTab === 'dialogue' ? 1 : 0, pointerEvents: activeTab === 'dialogue' ? 'auto' : 'none', transition: 'opacity 0.3s' }}>
                                            <div style={{ ...styles.versionSlider, ...sliderStyle }}></div>
                                            {Object.keys(dialogueVersions).map(version => (
                                                <button key={version} data-version={version} onClick={() => setActiveVersion(version)} style={activeVersion === version ? { ...styles.versionButton, ...styles.activeVersionButton } : styles.versionButton}>
                                                    {version}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div style={{ ...styles.mobileGalleryContainer, scrollbarWidth: 'none' }}>
                                    {galleryImages.map((src, i) => (
                                        <img key={i} src={src} alt={`Gallery thumbnail ${i + 1}`} style={styles.mobileGalleryImage} onClick={() => openGallery(i)} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {!isLargeScreen && (
                        <div style={styles.mobileButtonCard}>
                            <div style={styles.mainNavButtonGroup}>
                                <button onClick={() => setActiveTab('dialogue')} style={activeTab === 'dialogue' ? { ...styles.mainNavButton, ...styles.activeMainNavButton } : styles.mainNavButton}>Dialogue</button>
                                <button onClick={() => setActiveTab('summary')} style={activeTab === 'summary' ? { ...styles.mainNavButton, ...styles.activeMainNavButton } : styles.mainNavButton}>Summary</button>
                                <button onClick={() => setActiveTab('qa')} style={activeTab === 'qa' ? { ...styles.mainNavButton, ...styles.activeMainNavButton } : styles.mainNavButton}>Q&A</button>
                            </div>
                            {activeTab === 'dialogue' && (
                                <div ref={versionButtonRef} style={{ ...styles.versionButtonGroup, width: '100%' }}>
                                    <div style={{ ...styles.versionSlider, ...sliderStyle }}></div>
                                    {Object.keys(dialogueVersions).map(version => (
                                        <button key={version} data-version={version} onClick={() => setActiveVersion(version)} style={activeVersion === version ? { ...styles.versionButton, ...styles.activeVersionButton, flex: 1 } : { ...styles.versionButton, flex: 1 }}>
                                            {version}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}


                    {activeTab === 'dialogue' && (
                        <div style={styles.mainGrid}>
                            <div style={styles.dialogueColumn}>
                                <div style={styles.dialogueCard}>
                                    {dialogueContent.map((entry, index) => {
                                        const isTriumvir = ['ANTONY', 'OCTAVIUS', 'LEPIDUS'].includes(entry.speaker);
                                        const speakerColor = isTriumvir ? theme.colors.primary : theme.colors.gray[700];

                                        const scriptEntryStyle = {
                                            display: 'grid',
                                            gridTemplateColumns: isLargeScreen ? '110px 1fr' : '80px 1fr',
                                            gap: '1rem',
                                            marginBottom: '1.5rem',
                                            alignItems: 'start'
                                        };
                                        const speakerStyle = {
                                            fontWeight: '700',
                                            fontFamily: theme.fontFamily.display.join(','),
                                            fontSize: '0.9rem',
                                            color: speakerColor,
                                            textTransform: 'uppercase',
                                            paddingTop: '0.125rem'
                                        };
                                        const lineStyle = {
                                            lineHeight: 1.7,
                                            color: theme.colors.gray[800],
                                            whiteSpace: 'pre-line',
                                            paddingLeft: '1rem',
                                            borderLeft: `1px solid ${theme.colors.gray[300]}`
                                        };

                                        return (
                                            <div key={index} style={scriptEntryStyle}>
                                                <div style={speakerStyle}>{entry.speaker}</div>
                                                <div style={lineStyle}>{entry.lines}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {isLargeScreen && (
                                <div style={styles.sidebarColumn}>
                                    <div style={styles.sidebarCard}>
                                        <div style={styles.sidebarHeader}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: theme.colors.secondary }}>gallery_thumbnail</span>
                                            <h3 style={styles.sidebarTitle}>Image Gallery</h3>
                                        </div>
                                        <div style={styles.galleryGrid}>
                                            {galleryImages.map((src, i) => (<img key={i} alt={`Scene image ${i + 1}`} style={styles.galleryImage} src={src} onClick={() => openGallery(i)} />))}
                                        </div>
                                    </div>
                                    <div style={styles.sidebarCard}> <div style={styles.sidebarHeader}><span className="material-symbols-outlined" style={{ fontSize: '2rem', color: theme.colors.secondary }}>school</span><h3 style={styles.sidebarTitle}>Important Words</h3></div> <ul style={styles.wordList}>{importantWords.map((word, i) => (<li key={i} style={styles.wordListItem}><span style={styles.wordTerm}>{word.term}:</span> {word.definition}</li>))}</ul> </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'summary' && (
                        <div style={styles.summaryCard}>
                            <div style={styles.summaryHeader}>
                                <Class9icseEnglishAct4Scene1Summary/>
                            </div>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <Class9icseEnglishAct4Scene1Questions/>
                        

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;

