import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct1Scene1Summary from './Class9icseEnglishAct1Scene1Summary';
import Class9icseEnglishAct1Scene1Questions from './Class9icseEnglishAct1Scene1Questions';
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
const galleryImages = ["https://lh3.googleusercontent.com/aida-public/AB6AXuBmFTapXsDo83ljkc9RhBPj6tJ18UJ7zEIahvxSWenLEt8-86HPYtIPDSt0Jr54g8evu581g3_bs0CVi36KQR4iT7j6lq80JZKwrFBUx-k-xMzJBV0MTegsV-ne8KRgDF6elCGfc_0i-qm-ZB1siZhdh010-hFDN59e1Qh_uGF17JupYy12gd36WAZM2v-XdyoqFDFCjQ_p89C_Li1u_Psm7O44j0yGfqBmqSbGuCo__xBIXA_VwXT8K4QyFNLoVi1MHzvkf2G2J3FR", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Caesar's+Return", "https://placehold.co/400x400/DAA520/FFFFFF?text=Roman+Crowd", "https://placehold.co/400x400/3B3B3B/FFFFFF?text=The+Forum"];
const importantWords = [{ term: "Idle creatures", definition: "Lazy people." }, { term: "Mechanical", definition: "Belonging to the working class; manual laborers." }, { term: "Sign of your profession", definition: "Your work clothes and tools." }, { term: "Cobbler", definition: "A shoemaker (also a playful term for a clumsy worker)." }, { term: "Mender of bad soles", definition: "A pun on 'soles' of shoes and 'souls' of people." },];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'FLAVIUS', lines: "Hence! Home, you idle creatures get you home!\nIs this a holiday? What, know you not,\nBeing mechanical, you ought not walk\nUpon a laboring day without the sign\nOf your profession?—Speak, what trade art thou?" },
        { speaker: 'CARPENTER', lines: "Why, sir, a carpenter." },
        { speaker: 'MURELLUS', lines: "Where is thy leather apron and thy rule?\nWhat dost thou with thy best apparel on?\n—You, sir, what trade are you?" },
        { speaker: 'COBBLER', lines: "Truly, sir, in respect of a fine workman, I am but, as you would say, a cobbler." },
        { speaker: 'MURELLUS', lines: "But what trade art thou? Answer me directly." },
        { speaker: 'COBBLER', lines: "A trade, sir, that I hope I may use with a safe conscience, which is, indeed, sir, a mender of bad soles." },
        { speaker: 'MURELLUS', lines: "What trade, thou knave? Thou naughty knave, what trade?" },
        { speaker: 'COBBLER', lines: "Nay, I beseech you, sir, be not out with me. Yet, if you be out, sir, I can mend you." },
        { speaker: 'MURELLUS', lines: "What mean’st thou by that? “Mend” me, thou saucy fellow?" },
        { speaker: 'COBBLER', lines: "Why, sir, cobble you." },
        { speaker: 'FLAVIUS', lines: "Thou art a cobbler, art thou?" },
        { speaker: 'COBBLER', lines: "Truly, sir, all that I live by is with the awl. I meddle with no tradesman’s matters nor women’s matters, but withal I am indeed, sir, a surgeon to old shoes. When they are in great danger, I recover them. As proper men as ever trod upon neat’s leather have gone upon my handiwork." },
        { speaker: 'FLAVIUS', lines: "But wherefore art not in thy shop today?\nWhy dost thou lead these men about the streets?" },
        { speaker: 'COBBLER', lines: "Truly, sir, to wear out their shoes to get myself into more work. But indeed, sir, we make holiday to see Caesar and to rejoice in his triumph." },
        { speaker: 'MURELLUS', lines: `Wherefore rejoice? What conquest brings he home?\nWhat tributaries follow him to Rome,\nTo grace in captive bonds his chariot wheels?\nYou blocks, you stones, you worse than senseless things!\nO you hard hearts, you cruèl men of Rome,\nKnew you not Pompey? Many a time and oft\nHave you climbed up to walls and battlements,\nTo towers and windows, yea, to chimney tops,\nYour infants in your arms, and there have sat\nThe livelong day, with patient expectation,\nTo see great Pompey pass the streets of Rome.\nAnd when you saw his chariot but appear,\nHave you not made an universal shout\nThat Tiber trembled underneath her banks,\nTo hear the replication of your sounds\nMade in her concave shores?\nAnd do you now put on your best attire?\nAnd do you now cull out a holiday?\nAnd do you now strew flowers in his way\nThat comes in triumph over Pompey’s blood?\nBe gone!\nRun to your houses, fall upon your knees,\nPray to the gods to intermit the plague\nThat needs must light on this ingratitude.` },
        { speaker: 'FLAVIUS', lines: "Go, go, good countrymen, and for this fault,\nAssemble all the poor men of your sort,\nDraw them to Tiber banks, and weep your tears\nInto the channel till the lowest stream\nDo kiss the most exalted shores of all." },
        { speaker: 'FLAVIUS', lines: "See whether their basest metal be not moved.\nThey vanish tongue-tied in their guiltiness.\nGo you down that way towards the Capitol.\nThis way will I. Disrobe the images\nIf you do find them decked with ceremonies." },
        { speaker: 'MURELLUS', lines: "May we do so?\nYou know it is the feast of Lupercal." },
        { speaker: 'FLAVIUS', lines: "It is no matter. Let no images\nBe hung with Caesar’s trophies. I’ll about\nAnd drive away the vulgar from the streets.\nSo do you too, where you perceive them thick.\nThese growing feathers plucked from Caesar’s wing\nWill make him fly an ordinary pitch,\nWho else would soar above the view of men\nAnd keep us all in servile fearfulness." }
    ],
    'Normal English': [
        { speaker: 'FLAVIUS', lines: "Go! Go home, you lazy people, get home!\nIs this a holiday? Don't you know,\nSince you are workers, you shouldn't be walking around\nOn a workday without the tools\nOf your trade?—Tell me, what is your job?" },
        { speaker: 'CARPENTER', lines: "Well, sir, I'm a carpenter." },
        { speaker: 'MURELLUS', lines: "Where is your leather apron and your ruler?\nWhy are you wearing your best clothes?\n—You, sir, what is your job?" },
        { speaker: 'COBBLER', lines: "Honestly, sir, compared to a skilled worker, I am just, as you might say, a shoemaker." },
        { speaker: 'MURELLUS', lines: "But what is your job? Answer me straight." },
        { speaker: 'COBBLER', lines: "A job, sir, that I hope I can do with a clear conscience; it is, in fact, sir, a fixer of bad 'souls'." },
        { speaker: 'MURELLUS', lines: "What job, you scoundrel? You wicked scoundrel, what job?" },
        { speaker: 'COBBLER', lines: "No, I beg you, sir, don't be angry with me. But if you are worn out, sir, I can 'mend' you." },
        { speaker: 'MURELLUS', lines: "What do you mean by that? 'Mend' me, you cheeky fellow?" },
        { speaker: 'COBBLER', lines: "Why, sir, I'll patch you up." },
        { speaker: 'FLAVIUS', lines: "You are a shoemaker, are you?" },
        { speaker: 'COBBLER', lines: "Truly, sir, my whole living is by the awl. I don't get involved in other tradesmen's business, or women's business, but I am, indeed, sir, a surgeon for old shoes. When they are in great danger, I save them. Men as fine as any who have ever walked on leather have worn my handiwork." },
        { speaker: 'FLAVIUS', lines: "But why aren't you in your shop today?\nWhy are you leading these men around the streets?" },
        { speaker: 'COBBLER', lines: "Honestly, sir, to wear out their shoes to get myself more work. But really, sir, we're taking a holiday to see Caesar and celebrate his victory." },
        { speaker: 'MURELLUS', lines: `Why celebrate? What victory does he bring home?\nWhat conquered people follow him to Rome,\nTo decorate his chariot wheels in chains?\nYou blockheads, you stones, you worse than senseless things!\nOh, you hard-hearted, cruel men of Rome,\nDidn't you know Pompey? Many times\nyou have climbed up to walls and battlements,\nto towers and windows, even to rooftops,\nwith your babies in your arms, and sat there\nall day long, waiting patiently\nto see the great Pompey pass through the streets of Rome.\nAnd when you just saw his chariot appear,\ndidn't you all let out a universal shout\nthat the Tiber river trembled under its banks\nto hear the echo of your voices\nfrom its shores?\nAnd now you put on your best clothes?\nAnd now you declare a holiday?\nAnd now you throw flowers in his path,\nfor the one who comes in triumph over Pompey’s blood?\nGo away!\nRun to your homes, fall on your knees,\nand pray to the gods to prevent the plague\nthat must surely come for this disloyalty.` },
        { speaker: 'FLAVIUS', lines: "Go, go, good countrymen, and for this mistake,\nGather all the poor men of your kind,\nTake them to the Tiber river banks, and cry your tears\nInto the water until the river overflows." },
        { speaker: 'FLAVIUS', lines: "See if their worthless hearts haven't been touched.\nThey've left, speechless in their guilt.\nYou go down that way towards the Capitol. I'll go this way.\nTake down the decorations from the statues\nIf you find them adorned with ceremonial ornaments." },
        { speaker: 'MURELLUS', lines: "Can we do that?\nYou know it's the festival of Lupercal." },
        { speaker: 'FLAVIUS', lines: "It doesn't matter. Don't let any statues be hung\nWith Caesar's victory prizes. I'll go about\nAnd drive the common people from the streets.\nYou do the same, wherever you see them gathered.\nPlucking these growing feathers from Caesar's wing\nWill keep him from flying too high,\nOtherwise he would soar above the sight of men\nAnd keep us all in fearful submission." }
    ],
    Hinglish: [
        { speaker: 'FLAVIUS', lines: "Chalo! Ghar jao, tum sab kaamchor log, ghar jao!\nKya aaj chutti hai? Kya, tumhe pata nahi,\nKi tum mazdoor log ho, tumhe kaam ke din\nApne kaam ke auzaar ke bina nahi ghumna chahiye?\nBolo, tumhara kya kaam hai?" },
        { speaker: 'CARPENTER', lines: "Kyun, sir, main ek badhai (carpenter) hoon." },
        { speaker: 'MURELLUS', lines: "Tumhara chamde ka apron aur tumhara ruler kahan hai?\nTumne apne sabse achhe kapde kyun pehne hain?\n—Aur aap, sir, aapka kya kaam hai?" },
        { speaker: 'COBBLER', lines: "Sach kahun, sir, ek achhe karigar ke saamne, main bas, jaisa aap kahenge, ek mochi (cobbler) hoon." },
        { speaker: 'MURELLUS', lines: "Lekin tumhara kaam kya hai? Seedhe jawab do." },
        { speaker: 'COBBLER', lines: "Ek kaam, sir, jise main umeed karta hoon ki saaf neeyat se kar sakta hoon; jo hai, sir, kharab 'soles' (aatmaon) ko theek karne wala." },
        { speaker: 'MURELLUS', lines: "Kya kaam, badmash? Tu dusht badmash, kya kaam hai tera?" },
        { speaker: 'COBBLER', lines: "Nahi, main aapse vinti karta hoon, sir, mujhse gussa na ho. Phir bhi, agar aapka joota phat gaya hai, sir, to main aapko theek kar sakta hoon." },
        { speaker: 'MURELLUS', lines: "Iska kya matlab hai? 'Mujhe theek karoge', tu badtameez aadmi?" },
        { speaker: 'COBBLER', lines: "Kyun, sir, aapki marammat kar dunga." },
        { speaker: 'FLAVIUS', lines: "Tu ek mochi hai, hai na?" },
        { speaker: 'COBBLER', lines: "Sachmuch, sir, main bas suae (awl) se hi jeeta hoon. Main kisi dusre vyapari ke mamlon mein ya auraton ke mamlon mein dakhal nahi deta, lekin main, sach mein, sir, purane jooton ka surgeon hoon. Jab ve bade khatre mein hote hain, to main unhe bacha leta hoon. Jitne bhi achhe log kabhi bhi chamde par chale hain, unhone mera kaam pehna hai." },
        { speaker: 'FLAVIUS', lines: "Lekin aaj tum apni dukaan mein kyun nahi ho?\nTum in aadmiyon ko galiyon mein kyun ghuma rahe ho?" },
        { speaker: 'COBBLER', lines: "Sachmuch, sir, unke joote ghisane ke liye taaki mujhe aur kaam mil sake. Lekin sach mein, sir, hum Caesar ko dekhne aur uski jeet ka jashn manane ke liye chutti kar rahe hain." },
        { speaker: 'MURELLUS', lines: `Jashn kyun? Vah kaun si jeet ghar laya hai?\nKaun se kaidi uske peeche Rome aaye hain,\nUske rath ke pahiyon ko bandi banakar shobha badhane ke liye?\nYou blocks, you stones, you worse than senseless things!\nO kathor dil wale, Rome ke kroor logon,\nKya tum Pompey ko nahi jaante the? Kitni hi baar\ntum deewaron aur minaron par chadh jaate the,\nkhidkiyon aur chhaton tak,\napne bachchon ko god mein lekar, aur wahan baithe rehte the\npoore din, sabr ke saath,\nmahan Pompey ko Rome ki sadkon se guzarte dekhne ke liye.\nAur jab tum uska rath dekhte the,\nkya tumne itna bada jayghosh nahi kiya tha\nki Tiber nadi bhi apne kinaron ke neeche kaanp uthi thi\ntumhari awaaz ki goonj sunkar\njo uske kinaron se takrati thi?\nAur ab tum apne sabse achhe kapde pehen rahe ho?\nAur ab tum chhutti mana rahe ho?\nAur ab tum uske raaste mein phool bichha rahe ho\njo Pompey ke khoon par jeet haasil karke aaya hai?\nChale jao!\nApne gharon ko bhago, ghutnon par jhuko,\naur devtaon se prarthna karo ki vah us mahamari ko rok dein\njo is ahsaan-faramoshi ke liye zaroor aayegi.` },
        { speaker: 'FLAVIUS', lines: "Jao, jao, achhe deshwasiyon, aur is galti ke liye,\nApni tarah ke sabhi gareeb aadmiyon ko ikattha karo,\nUnhein Tiber nadi ke kinare le jao, aur apne aansu nadi mein tab tak bahao\nJab tak ki sabse neechi dhara sabse unche kinaron ko na choom le." },
        { speaker: 'FLAVIUS', lines: "Dekho unke neecha dil pighla ya nahi.\nWoh apne dosh mein chupchap gayab ho gaye.\nTum us raaste se Capitol ki taraf jao. Main is taraf jaunga.\nAgar murtiyan saji hui milen to unke sajavat utaar do." },
        { speaker: 'MURELLUS', lines: "Kya hum aisa kar sakte hain?\nAap jaante hain ki yeh Lupercal ka tyohar hai." },
        { speaker: 'FLAVIUS', lines: "Koi baat nahi. Kisi bhi murti par Caesar ke jeet ke chinh na latkaye jayen.\nMain jaakar aam logon ko galiyon se hataunga.\nTum bhi wahi karo, jahan bhi unhe bheed mein dekho.\nCaesar ke pankh se in badhte hue pankhon ko nochne se\nvah ek sadharan unchai par udega,\nNahi to vah manushyon ki drishti se upar ud jaata\nAur hum sabko daas ke bhay mein rakhta." },
    ]
};
const descriptionVersions = { Shakespearean: "The tribunes, Flavius and Marullus, confront a crowd of jubilant commoners celebrating Julius Caesar's triumphant return after defeating the sons of his rival, Pompey. The officials scold the citizens for their fickle loyalty, reminding them of their previous devotion to Pompey.", 'Normal English': "The officials, Flavius and Marullus, face a crowd of happy commoners who are celebrating Julius Caesar's victory. Caesar has returned after defeating the sons of his rival, Pompey. The officials criticize the citizens for changing their loyalty so easily, reminding them how they used to cheer for Pompey.", Hinglish: "Do officials, Flavius aur Marullus, khushaal aam logon ki bheed ka saamna karte hain jo Julius Caesar ki jeet ka jashn mana rahe hain. Caesar apne dushman, Pompey ke beton ko harakar lauta hai. Officials logon ko unki badalti wafadari ke liye daantate hain, aur unhe yaad dilate hain ki pehle woh Pompey ke liye bhi aise hi jashn manate the." };
const sceneSummary = { English: "In this opening scene, two Roman officials, Flavius and Marullus, are upset with a crowd of commoners who are celebrating Julius Caesar's victory over Pompey's sons. They scold the workers for being fickle, as they once celebrated Pompey with the same enthusiasm. The officials decide to disperse the crowds and remove any decorations honoring Caesar to reduce his growing popularity and power.", Hinglish: "Is pehle scene mein, do Roman officials, Flavius aur Marullus, aam logon ki bheed se naraz hain jo Julius Caesar ki jeet ka jashn mana rahe hain. Caesar ne Pompey ke beton ko haraya hai. Woh kaarigaron ko unki badalti wafadari ke liye daantate hain, kyunki pehle yahi log Pompey ke liye jashn manate the. Officials bheed ko hatane aur Caesar ke samman mein lage sajavaton ko nikalne ka faisla karte hain, taaki uski badhti lokpriyata aur shakti ko kam kiya ja sake." };

// Main App Component
const App = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [answersVisible, setAnswersVisible] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [activeVersion, setActiveVersion] = useState('Shakespearean');
    const [activeTab, setActiveTab] = useState('dialogue');
    const [qaTab, setQaTab] = useState('additional');
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
            overflowX: 'hidden',
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
            marginTop:'50px',

            zIndex: 1,
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
        questionSection: { marginTop: '1rem', backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)', border: `1px solid ${theme.colors.gray[200]}` },
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
                            <h1 style={styles.sceneTitle}>Act I, Scene 1</h1>
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
                                    {dialogueContent.map((entry, index) => {
                                        const isNoble = entry.speaker === 'FLAVIUS' || entry.speaker === 'MURELLUS';
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
                            <Class9icseEnglishAct1Scene1Summary/>

                        </div>
                    )}

                    {activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                               <Class9icseEnglishAct1Scene1Questions/>
                        

                            

                            
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;






