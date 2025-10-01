import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct2Scene4Summary from './Class9icseEnglishAct2Scene4Summary';
import Class9icseEnglishAct2Scene4Questions from './Class9icseEnglishAct2Scene4Questions';




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
const galleryImages = ["https://placehold.co/400x400/8B0000/FFFFFF?text=Worried+Portia", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Roman+Street", "https://placehold.co/400x400/DAA520/FFFFFF?text=The+Soothsayer", "https://placehold.co/400x400/3B3B3B/FFFFFF?text=Brutus's+House"];
const importantWords = [{ term: "Prithee", definition: "A short form of 'I pray thee'; please." }, { term: "Constancy", definition: "Firmness of mind; self-control." }, { term: "Keep counsel", definition: "To keep a secret." }, { term: "Fray", definition: "A noisy fight or disturbance." }, { term: "Suit", definition: "A formal request or petition to a person in authority." }, { term: "Sooth", definition: "Truth." },];
const sceneQuestions = [{ id: 'mcq1', type: 'mcq', question: "1. Why does Portia first send Lucius to the Senate House?", options: ["To deliver a message to Brutus.", "To spy on Caesar.", "She is anxious and wants to know if Brutus is well."], answer: "She is anxious and wants to know if Brutus is well." }, { id: 'mcq2', type: 'mcq', question: "2. What does the Soothsayer intend to do at the Capitol?", options: ["Ask Caesar for money.", "Warn Caesar to be careful.", "Protest against the senators."], answer: "Warn Caesar to be careful." }, { id: 'qa1', type: 'qa', question: "1. What does Portia mean by 'I have a man’s mind but a woman’s might'?", answer: "She means she has the intelligence and courage to understand the conspiracy, but fears she has the perceived emotional weakness of a woman, which makes it difficult to hide her intense anxiety and keep the secret." }, { id: 'qa2', type: 'qa', question: "2. How does the scene create a sense of suspense and tension?", answer: "The suspense is built through Portia's frantic and agitated behavior, her vague and hurried instructions to Lucius, her imagining noises from the Capitol, and her tense conversation with the Soothsayer, all of which foreshadow that a dangerous event is about to happen." }, { id: 'qa3', type: 'qa', question: "3. What is the Soothsayer's 'suit' to Caesar?", answer: "His 'suit' or request is not for personal gain. He wants to ask Caesar 'to befriend himself,' which is a cryptic way of advising Caesar to take care of himself and be wary of the dangers surrounding him." },];
const workbookQuestions = [{ id: 'wbq1', question: "Analyze Portia's character in this scene. What does her behavior reveal about her state of mind and her relationship with Brutus?", answer: "Portia is portrayed as intelligent and loyal, but also as someone under immense psychological stress. Her scattered thoughts, frantic commands to Lucius, and fearful asides reveal her deep anxiety. She is terrified for her husband's safety and the success of his 'enterprise.' This highlights her deep love and concern for Brutus and shows the heavy emotional burden she carries as a keeper of the dangerous secret." }, { id: 'wbq2', question: "What is the dramatic purpose of the Soothsayer's appearance in this scene?", answer: "The Soothsayer's appearance serves to increase the dramatic irony and suspense. The audience knows his premonitions are correct, which makes his calm determination to warn Caesar even more tense. His interaction with Portia validates her fears, transferring her anxiety onto the audience and heightening the sense of impending doom as Caesar walks closer to his fate." }, { id: 'wbq3', question: "Portia exclaims, 'How weak a thing the heart of woman is!' How does this line reflect the perceived role of women in Roman society and Portia's internal conflict?", answer: "This line reflects the patriarchal view of Roman society, where women were often considered emotionally weaker than men. Portia is in conflict because she has proven her physical and mental strength to Brutus, yet in this moment of overwhelming stress, she feels she is failing. Her exclamation shows her frustration with her own anxiety and the societal expectations placed on women, highlighting her isolation in a dangerous, male-dominated conspiracy." }];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'PORTIA', lines: 'I prithee, boy, run to the senate house.\nStay not to answer me, but get thee gone.\nWhy dost thou stay?' },
        { speaker: 'LUCIUS', lines: 'To know my errand, madam.' },
        { speaker: 'PORTIA', lines: 'I would have had thee there and here again\nEre I can tell thee what thou shouldst do there.\n—O constancy, be strong upon my side,\nSet a huge mountain ’tween my heart and tongue!\nI have a man’s mind but a woman’s might.\nHow hard it is for women to keep counsel!\n—Art thou here yet?' },
        { speaker: 'LUCIUS', lines: 'Madam, what should I do?\nRun to the Capitol, and nothing else?\nAnd so return to you, and nothing else?' },
        { speaker: 'PORTIA', lines: 'Yes, bring me word, boy, if thy lord look well,\nFor he went sickly forth. And take good note\nWhat Caesar doth, what suitors press to him.\nHark, boy! What noise is that?' },
        { speaker: 'LUCIUS', lines: 'I hear none, madam.' },
        { speaker: 'PORTIA', lines: 'Prithee, listen well.\nI heard a bustling rumor like a fray,\nAnd the wind brings it from the Capitol.' },
        { speaker: 'LUCIUS', lines: 'Sooth, madam, I hear nothing.' },
        { speaker: 'PORTIA', lines: 'Come hither, fellow. Which way hast thou been?' },
        { speaker: 'SOOTHSAYER', lines: 'At mine own house, good lady.' },
        { speaker: 'PORTIA', lines: 'What is ’t o\'clock?' },
        { speaker: 'SOOTHSAYER', lines: 'About the ninth hour, lady.' },
        { speaker: 'PORTIA', lines: 'Is Caesar yet gone to the Capitol?' },
        { speaker: 'SOOTHSAYER', lines: 'Madam, not yet. I go to take my stand\nTo see him pass on to the Capitol.' },
        { speaker: 'PORTIA', lines: 'Thou hast some suit to Caesar, hast thou not?' },
        { speaker: 'SOOTHSAYER', lines: 'That I have, lady. If it will please Caesar\nTo be so good to Caesar as to hear me,\nI shall beseech him to befriend himself.' },
        { speaker: 'PORTIA', lines: 'Why, know’st thou any harm’s intended towards him?' },
        { speaker: 'SOOTHSAYER', lines: 'None that I know will be; much that I fear may chance.\nGood morrow to you. Here the street is narrow.\nThe throng that follows Caesar at the heels,\nOf senators, of praetors, common suitors,\nWill crowd a feeble man almost to death.\nI’ll get me to a place more void, and there\nSpeak to great Caesar as he comes along.' },
        { speaker: 'PORTIA', lines: 'I must go in. (aside) Ay me, how weak a thing\nThe heart of woman is! O Brutus,\nThe heavens speed thee in thine enterprise!\nSure, the boy heard me. (to LUCIUS) Brutus hath a suit\nThat Caesar will not grant.—Oh, I grow faint.\n—Run, Lucius, and commend me to my lord.\nSay I am merry. Come to me again,\nAnd bring me word what he doth say to thee.' },
    ],
    'Normal English': [
        { speaker: 'PORTIA', lines: 'Please, boy, run to the senate house.\nDon\'t stop to answer me, just go.\nWhy are you still waiting?' },
        { speaker: 'LUCIUS', lines: 'To find out my task, madam.' },
        { speaker: 'PORTIA', lines: 'I wanted you to be there and back again\nbefore I could even tell you what to do there.\n—Oh, self-control, be my strength now!\nPlace a huge mountain between my heart and my tongue!\nI have a man’s mind but a woman’s physical and emotional strength.\nIt is so hard for women to keep a secret!\n—Are you still here?' },
        { speaker: 'LUCIUS', lines: 'Madam, what should I do?\nRun to the Capitol, and that\'s all?\nAnd then come back to you, and that\'s all?' },
        { speaker: 'PORTIA', lines: 'Yes, bring me news, boy, if your master looks well,\nbecause he was sick when he left.\nAnd pay close attention to what Caesar is doing,\nand what petitioners press around him.\nListen, boy! What is that noise?' },
        { speaker: 'LUCIUS', lines: 'I don\'t hear anything, madam.' },
        { speaker: 'PORTIA', lines: 'Please, listen carefully.\nI heard a commotion, like a fight,\nand the wind is carrying it from the Capitol.' },
        { speaker: 'LUCIUS', lines: 'Truly, madam, I hear nothing.' },
        { speaker: 'PORTIA', lines: 'Come here, friend. Where have you been?' },
        { speaker: 'SOOTHSAYER', lines: 'At my own house, good lady.' },
        { speaker: 'PORTIA', lines: 'What time is it?' },
        { speaker: 'SOOTHSAYER', lines: 'Around nine o\'clock, lady.' },
        { speaker: 'PORTIA', lines: 'Has Caesar gone to the Capitol yet?' },
        { speaker: 'SOOTHSAYER', lines: 'Madam, not yet. I am going to find a spot\nto see him pass on his way to the Capitol.' },
        { speaker: 'PORTIA', lines: 'You have some request for Caesar, don\'t you?' },
        { speaker: 'SOOTHSAYER', lines: 'Yes, I do, lady. If Caesar will please be good enough\nto himself to listen to me,\nI will beg him to protect himself.' },
        { speaker: 'PORTIA', lines: 'Why, do you know of some harm intended toward him?' },
        { speaker: 'SOOTHSAYER', lines: 'None that I know for certain will happen, but much that I fear might happen.\nGood morning to you. This street is narrow.\nThe crowd that follows at Caesar’s heels—\nof senators, officials, and common petitioners—\nwill crush a weak man almost to death.\nI will go to a more open place and speak to the great Caesar as he comes by.' },
        { speaker: 'PORTIA', lines: 'I must go inside.\n(aside) Oh my, how weak a woman’s heart is!\nO Brutus, may the heavens grant you success in your endeavor!\nI’m sure the boy heard me.\n(to LUCIUS) Brutus has a request that Caesar will not grant.\n—Oh, I feel faint.\n—Run, Lucius, and give my greetings to my lord.\nTell him I am happy. Come back to me again,\nand bring me news of what he says to you.' },
    ],
    Hinglish: [
        { speaker: 'PORTIA', lines: 'Ladke, kripya senate house jao.\nMujhe jawab dene ke liye mat ruko, bas jao.\nTum ruke kyun ho?' },
        { speaker: 'LUCIUS', lines: 'Yeh janne ke liye ki mera kaam kya hai, madam.' },
        { speaker: 'PORTIA', lines: 'Main chahti thi ki tum wahan jaakar wapas aa jao,\nisse pehle ki main tumhe bata paati ki wahan kya karna hai.\n—He himmat, mera saath do!\nMere dil aur zubaan ke beech ek bada pahad khada kar do!\nMere paas ek mard ka dimaag hai par ek aurat ki taqat.\nAuraton ke liye raaz rakhna kitna mushkil hai!\n—Tum abhi bhi yahin ho?' },
        { speaker: 'LUCIUS', lines: 'Madam, mujhe kya karna hai?\nCapitol tak daud kar jaun, aur kuch nahi?\nAur phir aapke paas wapas aa jaun, aur kuch nahi?' },
        { speaker: 'PORTIA', lines: 'Haan, mujhe khabar laakar do, ladke, ki tumhare maalik theek dikh rahe hain ya nahi,\nkyunki woh bimaar hi ghar se nikle the.\nAur dhyaan se dekhna ki Caesar kya kar raha hai,\naur kaun log usse milne ki koshish kar rahe hain.\nSuno, ladke! Yeh kaisa shor hai?' },
        { speaker: 'LUCIUS', lines: 'Mujhe kuch sunai nahi de raha, madam.' },
        { speaker: 'PORTIA', lines: 'Kripya dhyaan se suno.\nMujhe ek jhagde jaisi gadbadahat ki afwah sunai di,\naur hawa use Capitol se la rahi hai.' },
        { speaker: 'LUCIUS', lines: 'Sach mein, madam, mujhe kuch sunai nahi de raha.' },
        { speaker: 'PORTIA', lines: 'Idhar aao, bandhu. Kahan se aa rahe ho?' },
        { speaker: 'SOOTHSAYER', lines: 'Apne ghar se, devi.' },
        { speaker: 'PORTIA', lines: 'Kya samay hua hai?' },
        { speaker: 'SOOTHSAYER', lines: 'Lagbhag nau baj rahe hain, devi.' },
        { speaker: 'PORTIA', lines: 'Kya Caesar abhi tak Capitol gaye hain?' },
        { speaker: 'SOOTHSAYER', lines: 'Madam, abhi nahi. Main apni jagah lene ja raha hoon\ntaki unhe Capitol jaate hue dekh sakun.' },
        { speaker: 'PORTIA', lines: 'Tumhari Caesar se koi vinti hai, hai na?' },
        { speaker: 'SOOTHSAYER', lines: 'Haan, hai, devi. Agar Caesar kripya karke khud par itni daya karein ki meri baat sun lein,\ntoh main unse vinti karunga ki woh apni raksha karein.' },
        { speaker: 'PORTIA', lines: 'Kyun, kya tum jaante ho ki koi unhe nuksaan pahunchane wala hai?' },
        { speaker: 'SOOTHSAYER', lines: 'Aisa kuch nahi jo main jaanta hoon ki hoga; par bahut kuch hai jiska mujhe dar hai ki ho sakta hai.\nNamaskar. Yeh gali bahut tang hai.\nCaesar ke peeche jo bheed chalti hai, senators ki, praetors ki, aam yachak-kartao ki,\nwoh ek kamzor aadmi ko kuchalkar maar degi.\nMain ek khuli jagah par jaunga, aur wahan jab mahaan Caesar aayenge toh unse baat karunga.' },
        { speaker: 'PORTIA', lines: 'Mujhe andar jaana hoga.\n(akele mein) Haye, aurat ka dil kitna kamzor hota hai!\nO Brutus, bhagwan tumhare kaam mein tumhe safalta de!\nPakka is ladke ne mujhe sun liya.\n(LUCIUS se) Brutus ki ek aisi vinti hai jise Caesar manzoor nahi karenge.—Oh, mujhe chakkar aa raha hai.\n—Daud, Lucius, aur mere swami ko mera pranaam kehna.\nKehna ki main khush hoon. Phir mere paas aana,\naur batana ki woh tumse kya kehte hain.' },
    ]
};
const descriptionVersions = {
    Shakespearean: "Portia, fraught with anxiety for her lord, Brutus, dispatches her servant Lucius to the Senate House to observe events. She encounters the Soothsayer, who also intends to warn Caesar, further heightening her fears for the great enterprise afoot.",
    'Normal English': "A very worried Portia sends her servant, Lucius, to the Senate House to check on Brutus. She then runs into the Soothsayer, who says he is going to warn Caesar, which makes Portia even more nervous about the assassination plot.",
    Hinglish: "Portia, Brutus ke liye bahut pareshan hai, aur apne servant Lucius ko Senate House bhejti hai. Wahan usse Soothsayer milta hai, jo Caesar ko chetavani dene ja raha hai. Yeh sunkar Portia ki tension aur badh jaati hai."
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
            marginTop:50,
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
                            <h1 style={styles.sceneTitle}>Act II, Scene 4</h1>
                            <p style={styles.sceneSubtitle}>A street in Rome, near Brutus's house</p>
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
                                        const isNoble = ['PORTIA', 'SOOTHSAYER'].includes(entry.speaker);
                                        const lineColor = isNoble ? theme.colors.primary : theme.colors.gray[500];

                                        if (!isLargeScreen) {
                                            return (
                                                <div key={index} style={styles.dialogueEntry}>
                                                    <div style={{ ...styles.dialogueSpeaker, color: lineColor }}>{entry.speaker}</div>
                                                    <div style={{ ...styles.dialogueLines, borderTop: `2px solid ${lineColor}` }}>{entry.lines}</div>
                                                </div>
                                            )
                                        }

                                        return (
                                            <div key={index} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'start' }}>
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
                                <Class9icseEnglishAct2Scene4Summary/>
                            </div>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <Class9icseEnglishAct2Scene4Questions/>
                        

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;


