import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct4Scene2Summary from './Class9icseEnglishAct4Scene2Summary';
import Class9icseEnglishAct4Scene2Questions from './Class9icseEnglishAct4Scene2Questions';
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
const galleryImages = ["https://placehold.co/400x400/3B3B3B/FFFFFF?text=Brutus+Awaiting+Cassius", "https://placehold.co/400x400/8B0000/FFFFFF?text=A+Hot+Friend+Cooling", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Cassius+Confronts+Brutus", "https://placehold.co/400x400/DAA520/FFFFFF?text=Arguing+Before+the+Armies"];
const importantWords = [
    { term: "Ill officers", definition: "Unreliable messengers or subordinates whose actions have caused problems." },
    { term: "Familiar instances", definition: "Signs of close friendship and intimacy, casual and warm interactions." },
    { term: "A hot friend cooling", definition: "Brutus's metaphor for a once-strong friendship that is losing its warmth and passion." },
    { term: "Enforcèd ceremony", definition: "Stiff, forced politeness that replaces genuine friendliness when a relationship is strained." },
    { term: "Deceitful jades", definition: "An insult comparing hollow men to unreliable, worthless horses that fail when put to the test." },
];
const sceneQuestions = [
    { id: 'mcq1', type: 'mcq', question: "1. What does Lucillius report about Cassius's behavior towards him?", options: ["He was openly hostile and angry.", "He was polite but not friendly and familiar like before.", "He refused to see him at all."], answer: "He was polite but not friendly and familiar like before." },
    { id: 'mcq2', type: 'mcq', question: "2. Why does Brutus want to argue with Cassius inside his tent?", options: ["He is afraid Cassius will attack him.", "He doesn't want their armies to see them fighting.", "The tent is the only place they can speak privately."], answer: "He doesn't want their armies to see them fighting." },
    { id: 'qa1', type: 'qa', question: "1. What is Cassius's first line to Brutus when they meet?", answer: "He immediately accuses Brutus, saying, 'Most noble brother, you have done me wrong.'" },
    { id: 'qa2', type: 'qa', question: "2. What metaphor does Brutus use to describe a fading friendship?", answer: "He calls it 'a hot friend cooling,' comparing it to something that was once passionate but is now losing its warmth." },
    { id: 'qa3', type: 'qa', question: "3. Who does Brutus ask to guard the tent door during their conference?", answer: "He asks Lucius and Titinius to guard the door." },
];
const workbookQuestions = [
    { id: 'wbq1', question: "Analyze Brutus's line: 'Thou hast described a hot friend cooling.' What does this reveal about his state of mind and his understanding of human relationships?", answer: "This line shows that Brutus is perceptive and perhaps a bit cynical about human nature. He is not surprised by Lucillius's report and immediately understands the subtle signs of a decaying friendship. It reveals that he is already worried about his alliance with Cassius and sees the 'enforcèd ceremony' as a clear symptom of a deeper problem. He is mentally preparing himself for a confrontation." },
    { id: 'wbq2', question: "The conflict between Brutus and Cassius begins in public. Why is it significant that they move their argument into a private tent? What does this suggest about leadership and the image they must maintain?", answer: "Moving the argument is crucial for maintaining morale and authority. As generals, Brutus and Cassius must present a united front to their armies. A public squabble would create division, uncertainty, and disrespect among the soldiers, weakening their entire cause. Brutus's decision to go inside the tent shows his awareness of this; he understands that leadership requires projecting an image of unwavering unity, even when it's not the reality." },
    { id: 'wbq3', question: "This scene shows the first major crack in the conspirators' alliance. What external pressures and internal character flaws are contributing to this growing conflict between Brutus and Cassius?", answer: "The external pressure of preparing for war against Antony and Octavius is immense, causing stress and short tempers. Internally, Brutus's rigid idealism and honor are clashing with Cassius's more pragmatic and sometimes ethically questionable methods (like raising money). Cassius feels his experience is being disregarded, while Brutus feels their noble cause is being tainted. These fundamental differences in character, amplified by the stress of war, are causing their alliance to fracture." },
];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'BRUTUS', lines: 'Stand, ho!' },
        { speaker: 'LUCILLIUS', lines: 'Give the word, ho, and stand.' },
        { speaker: 'BRUTUS', lines: 'What now, Lucillius? Is Cassius near?' },
        { speaker: 'LUCILLIUS', lines: 'He is at hand, and Pindarus is come\nTo do you salutation from his master.' },
        { speaker: 'BRUTUS', lines: 'He greets me well.—Your master, Pindarus,\nIn his own change or by ill officers,\nHath given me some worthy cause to wish\nThings done, undone. But if he be at hand,\nI shall be satisfied.' },
        { speaker: 'PINDARUS', lines: 'I do not doubt,\nBut that my noble master will appear\nSuch as he is, full of regard and honor.' },
        { speaker: 'BRUTUS', lines: 'He is not doubted.—A word, Lucillius.\n(takes LUCILLIUS aside)\nHow he received you, let me be resolved.' },
        { speaker: 'LUCILLIUS', lines: 'With courtesy and with respect enough,\nBut not with such familiar instances,\nNor with such free and friendly conference,\nAs he hath used of old.' },
        { speaker: 'BRUTUS', lines: 'Thou hast described\nA hot friend cooling. Ever note, Lucillius,\nWhen love begins to sicken and decay,\nIt useth an enforcèd ceremony.\nThere are no tricks in plain and simple faith,\nBut hollow men, like horses hot at hand,\nMake gallant show and promise of their mettle.\nBut when they should endure the bloody spur,\nThey fall their crests and, like deceitful jades,\nSink in the trial. Comes his army on?' },
        { speaker: 'LUCILLIUS', lines: 'They mean this night in Sardis to be quartered.\nThe greater part, the horse in general,\nAre come with Cassius.' },
        { speaker: 'BRUTUS', lines: 'Hark! He is arrived.\nMarch gently on to meet him.' },
        { speaker: 'CASSIUS', lines: 'Stand, ho!' },
        { speaker: 'BRUTUS', lines: 'Stand, ho! Speak the word along.' },
        { speaker: 'FIRST SOLDIER', lines: 'Stand!' },
        { speaker: 'SECOND SOLDIER', lines: 'Stand!' },
        { speaker: 'THIRD SOLDIER', lines: 'Stand!' },
        { speaker: 'CASSIUS', lines: 'Most noble brother, you have done me wrong.' },
        { speaker: 'BRUTUS', lines: 'Judge me, you gods! Wrong I mine enemies?\nAnd if not so, how should I wrong a brother?' },
        { speaker: 'CASSIUS', lines: 'Brutus, this sober form of yours hides wrongs,\nAnd when you do them—' },
        { speaker: 'BRUTUS', lines: 'Cassius, be content.\nSpeak your griefs softly. I do know you well.\nBefore the eyes of both our armies here,\nWhich should perceive nothing but love from us,\nLet us not wrangle. Bid them move away.\nThen in my tent, Cassius, enlarge your griefs,\nAnd I will give you audience.' },
        { speaker: 'CASSIUS', lines: 'Pindarus,\nBid our commanders lead their charges off\nA little from this ground.' },
        { speaker: 'BRUTUS', lines: 'Lucillius, do you the like. And let no man\nCome to our tent till we have done our conference.\nLet Lucius and Titinius guard our door.' }
    ],
    'Normal English': [
        { speaker: 'BRUTUS', lines: 'Halt!' },
        { speaker: 'LUCILLIUS', lines: 'Give the command, and halt.' },
        { speaker: 'BRUTUS', lines: 'What is it, Lucillius? Is Cassius nearby?' },
        { speaker: 'LUCILLIUS', lines: 'He is close, and his servant Pindarus has come to give you greetings from his master.' },
        { speaker: 'BRUTUS', lines: 'He sends a worthy greeting.—Pindarus, your master, either through a change in his own feelings or through the fault of his officers, has given me good reason to wish that certain things he has done were undone. But if he is close by, I will get my answers.' },
        { speaker: 'PINDARUS', lines: 'I have no doubt that my noble master will prove himself to be what he has always been, full of respect and honor.' },
        { speaker: 'BRUTUS', lines: 'I don\'t doubt him.—A word, Lucillius. (pulls LUCILLIUS aside) Tell me, how did he receive you?' },
        { speaker: 'LUCILLIUS', lines: 'With enough courtesy and respect, but not with the same familiar gestures or the same free and friendly conversation as he used to show in the past.' },
        { speaker: 'BRUTUS', lines: 'You have just described a once-warm friend who is now growing cold. Always remember, Lucillius, when friendship begins to weaken and fade, it puts on a display of forced politeness. There are no tricks in plain and simple loyalty. But insincere men, like spirited horses that are eager at the start, make a great show and promise of their abilities. But when they must face the bloody spur of a real challenge, their spirits drop, and like useless old horses, they fail in the test. Is his army approaching?' },
        { speaker: 'LUCILLIUS', lines: 'They plan to set up camp in Sardis tonight. The main part of the army, including the cavalry, has arrived with Cassius.' },
        { speaker: 'BRUTUS', lines: 'Listen! He has arrived. Let\'s march slowly to meet him.' },
        { speaker: 'CASSIUS', lines: 'Halt!' },
        { speaker: 'BRUTUS', lines: 'Halt! Pass the command along.' },
        { speaker: 'FIRST SOLDIER', lines: 'Halt!' },
        { speaker: 'SECOND SOLDIER', lines: 'Halt!' },
        { speaker: 'THIRD SOLDIER', lines: 'Halt!' },
        { speaker: 'CASSIUS', lines: 'Most noble brother, you have done me wrong.' },
        { speaker: 'BRUTUS', lines: 'May the gods be my judge! Do I wrong even my enemies? And if I don\'t, how could I possibly wrong a brother?' },
        { speaker: 'CASSIUS', lines: 'Brutus, this calm appearance of yours hides the wrongs you do. And when you do them—' },
        { speaker: 'BRUTUS', lines: 'Cassius, calm down. Speak about your complaints quietly. I know you well. In front of both our armies, which should see nothing but unity from us, let\'s not argue. Tell them to move away. Then, in my tent, Cassius, you can explain all your complaints, and I will listen to you.' },
        { speaker: 'CASSIUS', lines: 'Pindarus, tell our commanders to lead their troops a short distance away from this spot.' },
        { speaker: 'BRUTUS', lines: 'Lucillius, you do the same. And let no one come to our tent until we have finished our conversation. Have Lucius and Titinius guard our door.' }
    ],
    Hinglish: [
        { speaker: 'BRUTUS', lines: 'Ruko, ho!' },
        { speaker: 'LUCILLIUS', lines: 'Aadesh do, ho, aur ruko.' },
        { speaker: 'BRUTUS', lines: 'Kya hua, Lucillius? Kya Cassius paas hai?' },
        { speaker: 'LUCILLIUS', lines: 'Woh paas hi hai, aur Pindarus apne maalik ki taraf se aapko salaam karne aaya hai.' },
        { speaker: 'BRUTUS', lines: 'Usne aadar se salaam bheja hai.—Pindarus, tumhare maalik ne, ya toh khud badal kar ya apne kharaab afsaron ke kaaran, mujhe kuch aise kaaran diye hain ki main chahta hoon ki kuch kiye hue kaam na kiye hote. Lekin agar woh paas hai, toh mujhe santosh mil jaayega.' },
        { speaker: 'PINDARUS', lines: 'Mujhe koi shak nahi hai ki mere nek maalik waise hi pesh aayenge jaise woh hamesha se hain, samman aur izzat se bhare hue.' },
        { speaker: 'BRUTUS', lines: 'Us par shak nahi hai.—Ek baat, Lucillius. (LUCILLIUS ko ek taraf le jaakar) Usne tumhara swagat kaise kiya, mujhe saaf-saaf batao.' },
        { speaker: 'LUCILLIUS', lines: 'Shishtachar aur kaafi izzat ke saath. Lekin us tarah ke apnepan se nahi, aur na hi us tarah ki khuli aur dostana baatcheet ke saath, jaisa woh pehle karte the.' },
        { speaker: 'BRUTUS', lines: 'Tumne ek garam dost ke thande padne ka haal bataya hai. Hamesha dhyaan rakhna, Lucillius, jab pyaar kamzor aur khatm hone lagta hai, toh woh zabardasti ki rasmein nibhata hai. Saaf aur saral vishwas mein koi dhokha nahi hota. Lekin khokhle log, un garam mijaz ghodo ki tarah, jo shuru mein bahut josh dikhate hain, apni himmat ka bada pradarshan karte hain. Lekin jab unhe asli chunauti ka saamna karna padta hai, toh unka josh thanda pad jaata hai aur, dhokebaaz ghodo ki tarah, imtihaan mein fail ho jaate hain. Kya uski sena aa rahi hai?' },
        { speaker: 'LUCILLIUS', lines: 'Woh aaj raat Sardis mein dera dalne waale hain. Bada hissa, aur saare ghudsawar, Cassius ke saath aa chuke hain.' },
        { speaker: 'BRUTUS', lines: 'Suno! Woh aa gaya hai. Dheere-dheere aage badho usse milne ke liye.' },
        { speaker: 'CASSIUS', lines: 'Ruko, ho!' },
        { speaker: 'BRUTUS', lines: 'Ruko, ho! Aadesh aage pahunchao.' },
        { speaker: 'FIRST SOLDIER', lines: 'Ruko!' },
        { speaker: 'SECOND SOLDIER', lines: 'Ruko!' },
        { speaker: 'THIRD SOLDIER', lines: 'Ruko!' },
        { speaker: 'CASSIUS', lines: 'Sabse nek bhai, tumne mere saath galat kiya hai.' },
        { speaker: 'BRUTUS', lines: 'Devtaon, mera insaaf karo! Kya main apne dushmanon ke saath galat karta hoon? Aur agar nahi, toh main ek bhai ke saath galat kaise kar sakta hoon?' },
        { speaker: 'CASSIUS', lines: 'Brutus, tumhara yeh shaant chehra galatiyon ko chhupata hai. Aur jab tum unhe karte ho—' },
        { speaker: 'BRUTUS', lines: 'Cassius, shaant ho jao. Apni shikayatein dheere se bolo. Main tumhe achhi tarah jaanta hoon. Yahan hamari dono senaon ke saamne, jinhe hamare beech sirf pyaar dikhna chahiye, chalo jhagda na karein. Unhe yahan se jaane ko kaho. Phir mere tent mein, Cassius, apni shikayatein vistar se batana, aur main tumhari baat sunoonga.' },
        { speaker: 'CASSIUS', lines: 'Pindarus, hamare commanders ko kaho ki apni tukdiyon ko is jagah se thoda door le jaayein.' },
        { speaker: 'BRUTUS', lines: 'Lucillius, tum bhi wahi karo. Aur koi bhi aadmi hamare tent mein na aaye jab tak hamari baatcheet poori na ho jaaye. Lucius aur Titinius ko hamare darwaaze par pehra dene do.' }
    ]
};
const descriptionVersions = {
    Shakespearean: "Brutus and Cassius meet before their armies, and the strain in their friendship is immediately apparent, leading them to retire to a tent to argue in private.",
    'Normal English': "Brutus and Cassius meet, but there's clear tension between them. Cassius accuses Brutus of wronging him, and they agree to argue inside Brutus's tent so their soldiers don't see them fight.",
    Hinglish: "Brutus aur Cassius milte hain, lekin unke beech tension saaf dikhti hai. Cassius, Brutus par ilzaam lagata hai ki usne galat kiya hai, aur woh Brutus ke tent ke andar akele mein jhagda karne ke liye taiyar ho jaate hain taaki unke soldiers unhe ladte hue na dekhein."
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
        dialogueEntry: { marginBottom: '2rem' },
        dialogueSpeaker: { fontWeight: '700', fontFamily: theme.fontFamily.display.join(','), fontSize: '0.9rem', marginBottom: '0.5rem' },
        dialogueLines: { lineHeight: 1.7, color: theme.colors.gray[700], whiteSpace: 'pre-line', paddingTop: '0.75rem', marginTop: '0.75rem' },
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

    // Renaming plebeian speakers for clarity in the UI
    const processedDialogue = dialogueContent.map(entry => {
        const newEntry = {...entry};
        if (newEntry.speaker.includes('PLEBEIAN')) {
            newEntry.speaker = newEntry.speaker.replace('PLEBEIAN', 'CITIZEN');
        }
        return newEntry;
    });
    
    const assignSpeakerColor = (speaker) => {
        if (speaker === 'BRUTUS') return theme.colors.primary;
        if (speaker === 'CASSIUS') return theme.colors.secondary;
        return theme.colors.gray[700];
    };

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
                        <img alt="Roman Forum background" style={styles.introCardBg} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBURfa0I53fnPXLusZMM3pKkaMlR39PRFdZSaDztvrVA3GbbSwl-URsK_oaMkyGXouKCkEOOvWpepqz0Vv13lsQcUdQhP4sAgiINxwQ0fsDUbIJ5kHpahdCvVebh9tpVT1AlIp5PIJiP80NA81aBNoDepsIjt3T22ryPuq5t6TCIUgGhyjLC-9sqBW_ofDSrq8GrrtKuUtbYwpiffitDGO7l46yO1Kq1hTToAvxxAu_j5sy2npIMprfT3Zc4TpqBG5AViVyZA6hQoi6" />
                        <div style={styles.introCardContent}>
                        <a style={styles.breadcrumbButton} href="/studymaterial/class9icse/Class9icseEnglish">Julius Caesar</a>
                            <h1 style={styles.sceneTitle}>Act IV, Scene 2</h1>
                            <p style={styles.sceneSubtitle}>Before Brutus's tent in the camp near Sardis</p>
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
                                    {processedDialogue.map((entry, index) => {
                                        const lineColor = assignSpeakerColor(entry.speaker);

                                        if (!isLargeScreen) {
                                            return (
                                                <div key={index} style={styles.dialogueEntry}>
                                                    <div style={{ ...styles.dialogueSpeaker, color: lineColor }}>{entry.speaker}</div>
                                                    <div style={{ ...styles.dialogueLines, borderTop: `2px solid ${lineColor}` }}>{entry.lines}</div>
                                                </div>
                                            )
                                        }

                                        return (
                                            <div key={index} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'start' }}>
                                                <div style={{ textAlign: 'right', fontWeight: '700', fontFamily: theme.fontFamily.display.join(','), fontSize: '0.9rem', paddingTop: '0.125rem', color: lineColor }}>{entry.speaker}</div>
                                                <div style={{ paddingLeft: '1.5rem', lineHeight: 1.7, color: theme.colors.gray[700], whiteSpace: 'pre-line', borderLeft: `3px solid ${lineColor}` }}>{entry.lines}</div>
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
                                <h2 style={{ ...styles.sectionTitle, margin: 0, textAlign: 'center', width: '100%' }}>Scene Summary</h2>
                                <Class9icseEnglishAct4Scene2Summary/>
                            </div>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <Class9icseEnglishAct4Scene2Questions/>
                        

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;
