import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct3Scene3Summary from './Class9icseEnglishAct3Scene3Summary';
import Class9icseEnglishAct3Scene3Questions from './Class9icseEnglishAct3Scene3Questions';

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
const galleryImages = ["https://placehold.co/400x400/3B3B3B/FFFFFF?text=Cinna's+Foreboding+Dream", "https://placehold.co/400x400/8B0000/FFFFFF?text=The+Mob's+Interrogation", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Mistaken+Identity", "https://placehold.co/400x400/DAA520/FFFFFF?text=Torn+for+Bad+Verses"];
const importantWords = [
    { term: "Feast with Caesar", definition: "Cinna's dream, which he interprets as a bad omen, foreshadowing his unfortunate fate." },
    { term: "Things unlucky charge my fantasy", definition: "A feeling that something bad is about to happen; a sense of foreboding." },
    { term: "You'll bear me a bang for that", definition: "A colloquial phrase meaning 'you'll get a punch from me for saying that'." },
    { term: "Cinna the conspirator", definition: "The man the mob is actually looking for. The poet is killed simply for sharing his name." },
    { term: "Firebrands", definition: "Torches or burning pieces of wood. The mob calls for them to burn the conspirators' houses." },
];
const sceneQuestions = [
    { id: 'mcq1', type: 'mcq', question: "1. Why does Cinna the Poet go out despite having a bad feeling?", options: ["He is looking for the conspirators.", "He is curious about the commotion.", "He feels something is leading him out."], answer: "He feels something is leading him out." },
    { id: 'mcq2', type: 'mcq', question: "2. What is the mob's final, irrational reason for tearing Cinna apart?", options: ["He admits he is a friend of Caesar.", "They decide to kill him for his 'bad verses.'", "He cannot answer their questions wisely enough."], answer: "They decide to kill him for his 'bad verses.'" },
    { id: 'qa1', type: 'qa', question: "1. What four questions does the mob demand Cinna answer?", answer: "The mob aggressively asks him for his name, where he is going, where he lives, and whether he is married or a bachelor." },
    { id: 'qa2', type: 'qa', question: "2. How does Cinna the Poet try to save himself from the mob?", answer: "He repeatedly insists that he is 'Cinna the poet,' trying to distinguish himself from 'Cinna the conspirator' whom the mob is actually seeking." },
    { id: 'qa3', type: 'qa', question: "3. After attacking Cinna, what do the plebeians decide to do next?", answer: "Their rage is not satisfied. They call for firebrands (torches) to go and burn the houses of the main conspirators: Brutus, Cassius, Decius, Casca, and Ligarius." },
];
const workbookQuestions = [
    { id: 'wbq1', question: "Analyze the mob's mentality in this scene. What does their treatment of Cinna the Poet reveal about the state of Rome after Caesar's assassination?", answer: "The mob demonstrates a complete loss of reason and operates on pure, violent emotion. Their interrogation is illogical, and their verdict is instantaneous and brutal. This scene shows that Rome has descended into anarchy and chaos. Antony's speech has unleashed a destructive force that no longer distinguishes between friend and foe, or guilty and innocent. Justice has been replaced by blind fury." },
    { id: 'wbq2', question: "Discuss the theme of mistaken identity and its tragic consequences in this short scene.", answer: "This scene is a stark illustration of how mistaken identity can lead to tragedy in a volatile political climate. Cinna is killed not for any action, but simply for his name. The mob's refusal to listen to his pleas highlights their irrationality. They are not interested in truth, only in finding a target for their anger. This serves as a powerful commentary on the dangers of mob rule and collective hysteria." },
    { id: 'wbq3', question: "Shakespeare uses this scene to show the immediate effects of Antony's speech. How does the mob's violent and irrational behavior fulfill Antony's prophecy to 'let slip the dogs of war'?", answer: "This scene is the direct fulfillment of Antony's prophecy. The 'dogs of war' are the Roman citizens themselves, turned into a mindless, destructive pack. Their savage attack on an innocent man for a superficial reason is exactly the 'domestic fury and fierce civil strife' Antony predicted. The scene proves that Antony was a master manipulator who knew exactly how to turn public grief into a weapon of mass destruction." },
];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'CINNA THE POET', lines: 'I dreamt tonight that I did feast with Caesar,\nAnd things unlucky charge my fantasy.\nI have no will to wander forth of doors,\nYet something leads me forth.' },
        { speaker: 'FIRST PLEBEIAN', lines: 'What is your name?' },
        { speaker: 'SECOND PLEBEIAN', lines: 'Whither are you going?' },
        { speaker: 'THIRD PLEBEIAN', lines: 'Where do you dwell?' },
        { speaker: 'FOURTH PLEBEIAN', lines: 'Are you a married man or a bachelor?' },
        { speaker: 'SECOND PLEBEIAN', lines: 'Answer every man directly.' },
        { speaker: 'FIRST PLEBEIAN', lines: 'Ay, and briefly.' },
        { speaker: 'FOURTH PLEBEIAN', lines: 'Ay, and wisely.' },
        { speaker: 'THIRD PLEBEIAN', lines: 'Ay, and truly, you were best.' },
        { speaker: 'CINNA THE POET', lines: 'What is my name? Whither am I going? Where do I dwell? Am I a married man or a bachelor? Then, to answer every man directly and briefly, wisely and truly—wisely I say, I am a bachelor.' },
        { speaker: 'SECOND PLEBEIAN', lines: 'That’s as much as to say they are fools that marry. You’ll bear me a bang for that, I fear. Proceed, directly.' },
        { speaker: 'CINNA THE POET', lines: 'Directly, I am going to Caesar’s funeral.' },
        { speaker: 'FIRST PLEBEIAN', lines: 'As a friend or an enemy?' },
        { speaker: 'CINNA THE POET', lines: 'As a friend.' },
        { speaker: 'SECOND PLEBEIAN', lines: 'That matter is answered directly.' },
        { speaker: 'FOURTH PLEBEIAN', lines: 'For your dwelling—briefly.' },
        { speaker: 'CINNA THE POET', lines: 'Briefly, I dwell by the Capitol.' },
        { speaker: 'THIRD PLEBEIAN', lines: 'Your name, sir, truly.' },
        { speaker: 'CINNA THE POET', lines: 'Truly, my name is Cinna.' },
        { speaker: 'FIRST PLEBEIAN', lines: 'Tear him to pieces. He’s a conspirator.' },
        { speaker: 'CINNA THE POET', lines: 'I am Cinna the poet. I am Cinna the poet.' },
        { speaker: 'FOURTH PLEBEIAN', lines: 'Tear him for his bad verses! Tear him for his bad verses!' },
        { speaker: 'CINNA THE POET', lines: 'I am not Cinna the conspirator.' },
        { speaker: 'FOURTH PLEBEIAN', lines: 'It is no matter. His name’s Cinna. Pluck but his name out of his heart and turn him going.' },
        { speaker: 'THIRD PLEBEIAN', lines: 'Tear him, tear him!' },
        { speaker: 'ALL', lines: 'Come, brands, ho, firebrands. To Brutus\', to Cassius\', burn all. Some to Decius\' house and some to Casca’s. Some to Ligarius\'. Away, go!' }
    ],
    'Normal English': [
        { speaker: 'CINNA THE POET', lines: 'I dreamed tonight that I was dining with Caesar, and unlucky things are filling my imagination. I have no desire to wander out of my house, yet something is leading me outside.' },
        { speaker: 'FIRST CITIZEN', lines: 'What is your name?' },
        { speaker: 'SECOND CITIZEN', lines: 'Where are you going?' },
        { speaker: 'THIRD CITIZEN', lines: 'Where do you live?' },
        { speaker: 'FOURTH CITIZEN', lines: 'Are you a married man or a bachelor?' },
        { speaker: 'SECOND CITIZEN', lines: 'Answer every man directly.' },
        { speaker: 'FIRST CITIZEN', lines: 'Yes, and briefly.' },
        { speaker: 'FOURTH CITIZEN', lines: 'Yes, and wisely.' },
        { speaker: 'THIRD CITIZEN', lines: 'Yes, and truthfully, that would be best for you.' },
        { speaker: 'CINNA THE POET', lines: 'What is my name? Where am I going? Where do I live? Am I married or a bachelor? Then, to answer everyone directly, briefly, wisely, and truthfully—I will wisely say, I am a bachelor.' },
        { speaker: 'SECOND CITIZEN', lines: 'That’s the same as saying that men who marry are fools. I’m afraid you’ll get a punch from me for that. Continue, directly.' },
        { speaker: 'CINNA THE POET', lines: 'Directly, I am going to Caesar’s funeral.' },
        { speaker: 'FIRST CITIZEN', lines: 'As a friend or an enemy?' },
        { speaker: 'CINNA THE POET', lines: 'As a friend.' },
        { speaker: 'SECOND CITIZEN', lines: 'That question is answered directly.' },
        { speaker: 'FOURTH CITIZEN', lines: 'About where you live—tell us briefly.' },
        { speaker: 'CINNA THE POET', lines: 'Briefly, I live near the Capitol.' },
        { speaker: 'THIRD CITIZEN', lines: 'Your name, sir, truthfully.' },
        { speaker: 'CINNA THE POET', lines: 'Truthfully, my name is Cinna.' },
        { speaker: 'FIRST CITIZEN', lines: 'Tear him to pieces! He’s a conspirator!' },
        { speaker: 'CINNA THE POET', lines: 'I am Cinna the poet! I am Cinna the poet!' },
        { speaker: 'FOURTH CITIZEN', lines: 'Tear him apart for his bad poems! Tear him for his bad poems!' },
        { speaker: 'CINNA THE POET', lines: 'I am not Cinna the conspirator!' },
        { speaker: 'FOURTH CITIZEN', lines: 'It doesn’t matter. His name is Cinna. Just rip his name out of his heart and send him on his way.' },
        { speaker: 'THIRD CITIZEN', lines: 'Tear him, tear him!' },
        { speaker: 'ALL', lines: 'Come on, bring torches, hey, fire-torches! To Brutus\'s house, to Cassius\'s, burn them all! Some go to Decius\'s house and some to Casca’s! Some to Ligarius\'s! Let\'s go!' }
    ],
    Hinglish: [
        { speaker: 'CINNA THE POET', lines: 'Maine aaj raat sapna dekha ki main Caesar ke saath khaana kha raha tha, aur buri cheezein mere dimaag mein aa rahi hain. Mera ghar se bahar nikalne ka koi mann nahi hai, phir bhi kuch mujhe bahar kheench raha hai.' },
        { speaker: 'FIRST CITIZEN', lines: 'Tumhara naam kya hai?' },
        { speaker: 'SECOND CITIZEN', lines: 'Tum kahan ja rahe ho?' },
        { speaker: 'THIRD CITIZEN', lines: 'Tum kahan rehte ho?' },
        { speaker: 'FOURTH CITIZEN', lines: 'Tum shaadi-shuda ho ya kunware?' },
        { speaker: 'SECOND CITIZEN', lines: 'Har aadmi ko seedha jawab do.' },
        { speaker: 'FIRST CITIZEN', lines: 'Haan, aur chhota jawab do.' },
        { speaker: 'FOURTH CITIZEN', lines: 'Haan, aur samajhdari se.' },
        { speaker: 'THIRD CITIZEN', lines: 'Haan, aur sach-sach, tumhare liye yahi behtar hoga.' },
        { speaker: 'CINNA THE POET', lines: 'Mera naam kya hai? Main kahan ja raha hoon? Main kahan rehta hoon? Kya main shaadi-shuda hoon ya kunwara? Toh, har aadmi ko seedha, chhota, samajhdari se aur sachai se jawab dene ke liye—samajhdari se kehta hoon, main kunwara hoon.' },
        { speaker: 'SECOND CITIZEN', lines: 'Iska matlab toh yeh hua ki jo shaadi karte hain woh bewakoof hain. Mujhe darr hai ki iske liye tum mujhse maar khaoge. Aage bolo, seedhe.' },
        { speaker: 'CINNA THE POET', lines: 'Seedhe, main Caesar ke funeral mein ja raha hoon.' },
        { speaker: 'FIRST CITIZEN', lines: 'Ek dost ki tarah ya dushman ki tarah?' },
        { speaker: 'CINNA THE POET', lines: 'Ek dost ki tarah.' },
        { speaker: 'SECOND CITIZEN', lines: 'Is baat ka jawab seedha mil gaya.' },
        { speaker: 'FOURTH CITIZEN', lines: 'Tumhare rehne ki jagah—chhota sa batao.' },
        { speaker: 'CINNA THE POET', lines: 'Chhote mein, main Capitol ke paas rehta hoon.' },
        { speaker: 'THIRD CITIZEN', lines: 'Aapka naam, sir, sach-sach.' },
        { speaker: 'CINNA THE POET', lines: 'Sach mein, mera naam Cinna hai.' },
        { speaker: 'FIRST CITIZEN', lines: 'Iske tukde-tukde kar do! Yeh ek saazishkarta hai!' },
        { speaker: 'CINNA THE POET', lines: 'Main Cinna kavi hoon! Main Cinna kavi hoon!' },
        { speaker: 'FOURTH CITIZEN', lines: 'Ise iski buri kavitaon ke liye phaad do! Ise iski buri kavitaon ke liye phaad do!' },
        { speaker: 'CINNA THE POET', lines: 'Main Cinna saazishkarta nahi hoon!' },
        { speaker: 'FOURTH CITIZEN', lines: 'Koi fark nahi padta. Uska naam Cinna hai. Bas iska naam iske dil se nikaal do aur ise chalta karo.' },
        { speaker: 'THIRD CITIZEN', lines: 'Phaad do ise, phaad do!' },
        { speaker: 'ALL', lines: 'Chalo, mashaalein lao, ho, aag ki mashaalein! Brutus ke ghar, Cassius ke ghar, sab jala do! Kuch Decius ke ghar aur kuch Casca ke ghar jao! Kuch Ligarius ke ghar! Chalo, jao!' }
    ]
};
const descriptionVersions = {
    Shakespearean: "The Roman mob, incensed by Antony's oration, happens upon Cinna the Poet and, in a tragic case of mistaken identity, tear him to pieces for sharing a name with one of the conspirators.",
    'Normal English': "Fueled by Antony's speech, the angry Roman mob finds Cinna the Poet. They confuse him with Cinna the conspirator and kill him simply because he has the same name.",
    Hinglish: "Antony ke speech se gussa bheed ko Cinna the Poet mil jaata hai. Woh usse galti se Cinna the conspirator samajh lete hain aur sirf naam same hone ke kaaran use maar daalte hain."
};
const sceneSummary = { 
    English: "Fresh from Mark Antony's inflammatory funeral speech, a frenzied mob of Roman citizens roams the streets, hungry for revenge. They encounter Cinna the Poet, who is walking out despite a bad feeling from a dream. The mob aggressively interrogates him. When he reveals his name is Cinna, they immediately assume he is Cinna the conspirator. Despite his protests that he is a poet, the mob's blind rage takes over. They call him out for his 'bad verses' and ultimately decide his name alone is reason enough to kill him, dragging him off to be torn to pieces. Their fury unabated, they then call for firebrands to go and burn the houses of Brutus, Cassius, and the other conspirators, showing the city has descended into violent chaos.", 
    Hinglish: "Mark Antony ke bhadkau funeral speech ke turant baad, Roman logon ki ek pagal bheed badla lene ke liye sadkon par ghoom rahi hai. Unhe Cinna the Poet milta hai, jo ek bure sapne ke bawajood bahar nikla hai. Bheed usse gusse mein sawaal-jawab karti hai. Jab woh apna naam Cinna batata hai, toh woh turant maan lete hain ki woh Cinna the conspirator hai. Uske baar-baar kehne ke bawajood ki woh ek kavi hai, bheed ka andha gussa kabu se bahar ho jaata hai. Woh uske 'bure kavitaon' ke liye uspar chillate hain aur aakhir mein faisla karte hain ki sirf uska naam hi use maarne ke liye kaafi hai, aur use tukde-tukde karne ke liye kheench kar le jaate hain. Unka gussa shaant nahi hota, aur woh phir Brutus, Cassius, aur doosre saazishkartaon ke gharon ko jalane ke liye mashaalein maangte hain, yeh dikhate hue ki sheher hinsa aur avyavastha mein doob gaya hai." 
};

// Main App Component
const App = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [answersVisible, setAnswersVisible] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [activeVersion, setActiveVersion] = useState('Shakespearean');
    const [activeTab, setActiveTab] = useState('dialogue');
    const [qaTab,] = useState('additional');
    const [summaryLanguage, setSummaryLanguage] = useState('English');
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
                            <h1 style={styles.sceneTitle}>Act III, Scene 3</h1>
                            <p style={styles.sceneSubtitle}>A street in Rome</p>
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
                                        const isPoet = entry.speaker === 'CINNA THE POET';
                                        const lineColor = isPoet ? theme.colors.gray[700] : theme.colors.primary;

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
                            <Class9icseEnglishAct3Scene3Summary/>

                            </div>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <Class9icseEnglishAct3Scene3Questions/>
                        

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;

