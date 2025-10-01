import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct5Scene5Summary from './Class9icseEnglishAct5Scene5Summary';
import Class9icseEnglishAct5Scene5Questions from './Class9icseEnglishAct5Scene5Questions';

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
const galleryImages = ["https://placehold.co/400x400/8B0000/FFFFFF?text=The+Death+of+Brutus", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Brutus'+Farewell", "https://placehold.co/400x400/DAA520/FFFFFF?text=Caesar,+Now+Be+Still", "https://placehold.co/400x400/3B3B3B/FFFFFF?text=Antony's+Tribute"];
const importantWords = [
    { term: "Remains", definition: "What is left over; in this case, the surviving friends." },
    { term: "Tarry", definition: "To delay or linger." },
    { term: "Prithee", definition: "An old-fashioned way of saying 'please' (short for 'I pray thee')." },
    { term: "Smatch", definition: "A taste or touch of something." },
    { term: "Vile", definition: "Extremely unpleasant; morally bad; wicked." },
    { term: "Entertain", definition: "In this context, it means to take into one's service." },
];


const dialogueVersions = {
    Shakespearean: [
        { speaker: 'BRUTUS', lines: 'Come, poor remains of friends, rest on this rock.' },
        { speaker: 'CLITUS', lines: 'Statilius showed the torchlight but, my lord,\nHe came not back. He is or ta\'en or slain.' },
        { speaker: 'BRUTUS', lines: 'Sit thee down, Clitus. Slaying is the word.\nIt is a deed in fashion. Hark thee, Clitus.' },
        { speaker: 'CLITUS', lines: 'What, I, my lord? No, not for all the world.' },
        { speaker: 'BRUTUS', lines: 'Peace then! No words.' },
        { speaker: 'CLITUS', lines: 'I’ll rather kill myself.' },
        { speaker: 'BRUTUS', lines: 'Hark thee, Dardanius.' },
        { speaker: 'DARDANIUS', lines: 'Shall I do such a deed?' },
        { speaker: 'CLITUS', lines: 'O Dardanius!' },
        { speaker: 'DARDANIUS', lines: 'O Clitus!' },
        { speaker: 'DARDANIUS', lines: '(aside to CLITUS) To kill him, Clitus. Look, he meditates.' },
        { speaker: 'CLITUS', lines: '(aside to DARDANIUS) Now is that noble vessel full of grief,\nThat it runs over even at his eyes.' },
        { speaker: 'BRUTUS', lines: 'Come hither, good Volumnius. List a word.' },
        { speaker: 'VOLUMNIUS', lines: 'What says my lord?' },
        { speaker: 'BRUTUS', lines: 'Why this, Volumnius:\nThe ghost of Caesar hath appeared to me\nTwo several times by night. At Sardis once,\nAnd this last night here in Philippi fields.\nI know my hour is come.' },
        { speaker: 'VOLUMNIUS', lines: 'Not so, my lord.' },
        { speaker: 'BRUTUS', lines: 'Nay, I am sure it is, Volumnius.\nThou seest the world, Volumnius, how it goes.\nOur enemies have beat us to the pit.\nIt is more worthy to leap in ourselves\nThan tarry till they push us. Good Volumnius,\nThou know’st that we two went to school together.\nEven for that our love of old, I prithee,\nHold thou my sword hilts, whilst I run on it.' },
        { speaker: 'VOLUMNIUS', lines: 'That’s not an office for a friend, my lord.' },
        { speaker: 'CLITUS', lines: 'Fly, fly, my lord. There is no tarrying here.' },
        { speaker: 'BRUTUS', lines: 'Farewell to you.—And you.—And you, Volumnius.\n—Strato, thou hast been all this while asleep.\nFarewell to thee too, Strato.—Countrymen,\nMy heart doth joy that yet in all my life,\nI found no man but he was true to me.\nI shall have glory by this losing day,\nMore than Octavius and Mark Antony,\nBy this vile conquest shall attain unto.\nSo fare you well at once, for Brutus\' tongue\nHath almost ended his life’s history.\nNight hangs upon mine eyes. My bones would rest,\nThat have but labored to attain this hour.' },
        { speaker: 'CLITUS', lines: 'Fly, my lord, fly.' },
        { speaker: 'BRUTUS', lines: 'Hence. I will follow.' },
        { speaker: 'BRUTUS', lines: 'I prithee, Strato, stay thou by thy lord.\nThou art a fellow of a good respect.\nThy life hath had some smatch of honor in it.\nHold then my sword and turn away thy face\nWhile I do run upon it. Wilt thou, Strato?' },
        { speaker: 'STRATO', lines: 'Give me your hand first. Fare you well, my lord.' },
        { speaker: 'BRUTUS', lines: 'Farewell, good Strato. Caesar, now be still.\nI killed not thee with half so good a will.' },
        { speaker: 'OCTAVIUS', lines: 'What man is that?' },
        { speaker: 'MESSALA', lines: 'My master’s man.—Strato, where is thy master?' },
        { speaker: 'STRATO', lines: 'Free from the bondage you are in, Messala.\nThe conquerors can but make a fire of him.\nFor Brutus only overcame himself,\nAnd no man else hath honor by his death.' },
        { speaker: 'LUCILLIUS', lines: 'So Brutus should be found.—I thank thee, Brutus,\nThat thou hast proved Lucillius\' saying true.' },
        { speaker: 'OCTAVIUS', lines: 'All that served Brutus, I will entertain them.\n—Fellow, wilt thou bestow thy time with me?' },
        { speaker: 'STRATO', lines: 'Ay, if Messala will prefer me to you.' },
        { speaker: 'OCTAVIUS', lines: 'Do so, good Messala.' },
        { speaker: 'ANTONY', lines: 'This was the noblest Roman of them all.\nAll the conspirators save only he\nDid that they did in envy of great Caesar.\nHe only, in a general honest thought\nAnd common good to all, made one of them.\nHis life was gentle, and the elements\nSo mixed in him that Nature might stand up\nAnd say to all the world, “This was a man!”' },
        { speaker: 'OCTAVIUS', lines: 'According to his virtue let us use him,\nWith all respect and rites of burial.\nWithin my tent his bones tonight shall lie,\nMost like a soldier, ordered honorably.\nSo call the field to rest, and let’s away\nTo part the glories of this happy day.' }
    ],
    'Normal English': [
        { speaker: 'BRUTUS', lines: 'Come, my few remaining friends, rest on this rock.' },
        { speaker: 'CLITUS', lines: 'Statilius signaled with the torchlight, my lord, but he did not come back. He has been either captured or killed.' },
        { speaker: 'BRUTUS', lines: 'Sit down, Clitus. Killing is what is happening now. It is a fashionable thing to do. Listen to me, Clitus.' },
        { speaker: 'CLITUS', lines: 'What, me, my lord? No, not for anything in the world.' },
        { speaker: 'BRUTUS', lines: 'Be quiet then! No more words.' },
        { speaker: 'CLITUS', lines: 'I would rather kill myself.' },
        { speaker: 'BRUTUS', lines: 'Listen to me, Dardanius.' },
        { speaker: 'DARDANIUS', lines: 'Should I do such a thing?' },
        { speaker: 'CLITUS', lines: 'Oh, Dardanius!' },
        { speaker: 'DARDANIUS', lines: 'Oh, Clitus!' },
        { speaker: 'DARDANIUS', lines: '(aside to CLITUS) To kill him, Clitus. Look, he is thinking deeply.' },
        { speaker: 'CLITUS', lines: '(aside to DARDANIUS) Now that noble man is so full of grief that it is overflowing from his eyes as tears.' },
        { speaker: 'BRUTUS', lines: 'Come here, good Volumnius. Listen to a word.' },
        { speaker: 'VOLUMNIUS', lines: 'What does my lord say?' },
        { speaker: 'BRUTUS', lines: 'This, Volumnius: The ghost of Caesar has appeared to me on two different nights. Once at Sardis, and last night here in the fields of Philippi. I know my time has come.' },
        { speaker: 'VOLUMNIUS', lines: 'That is not so, my lord.' },
        { speaker: 'BRUTUS', lines: 'No, I am sure it is, Volumnius. You see the world, Volumnius, how it is going. Our enemies have cornered us. It is more honorable to leap into the pit ourselves than to wait until they push us. Good Volumnius, you know that we went to school together. For the sake of our old friendship, please, hold my sword’s hilt while I run onto it.' },
        { speaker: 'VOLUMNIUS', lines: 'That is not a job for a friend, my lord.' },
        { speaker: 'CLITUS', lines: 'Run, run, my lord. There is no time to wait here.' },
        { speaker: 'BRUTUS', lines: 'Farewell to you. And you. And you, Volumnius. Strato, you have been asleep this whole time. Farewell to you too, Strato. My countrymen, my heart is joyful that in all my life, I have never found a man who was not true to me. I will have more glory from this losing day than Octavius and Mark Antony will gain from this wicked victory. So farewell to you all at once, for Brutus\'s tongue has almost finished his life’s story. Darkness hangs over my eyes. My bones wish to rest, which have worked only to reach this hour.' },
        { speaker: 'CLITUS', lines: 'Run, my lord, run!' },
        { speaker: 'BRUTUS', lines: 'Go. I will follow.' },
        { speaker: 'BRUTUS', lines: 'Please, Strato, stay by your lord. You are a man of good reputation. Your life has had a touch of honor in it. Hold my sword, then, and turn your face away while I run onto it. Will you, Strato?' },
        { speaker: 'STRATO', lines: 'Give me your hand first. Farewell, my lord.' },
        { speaker: 'BRUTUS', lines: 'Farewell, good Strato. Caesar, now be at peace. I did not kill you with half so much willingness.' },
        { speaker: 'OCTAVIUS', lines: 'Who is that man?' },
        { speaker: 'MESSALA', lines: 'My master’s servant. Strato, where is your master?' },
        { speaker: 'STRATO', lines: 'Free from the slavery that you are in, Messala. The conquerors can only burn his body, for Brutus alone defeated himself, and no other man will have honor from his death.' },
        { speaker: 'LUCILLIUS', lines: 'This is how Brutus should be found. I thank you, Brutus, that you have proven what I said to be true.' },
        { speaker: 'OCTAVIUS', lines: 'All who served Brutus, I will take them into my service. Fellow, will you spend your time with me?' },
        { speaker: 'STRATO', lines: 'Yes, if Messala will recommend me to you.' },
        { speaker: 'OCTAVIUS', lines: 'Do so, good Messala.' },
        { speaker: 'ANTONY', lines: 'This was the noblest Roman of them all. All the conspirators, except for him, did what they did out of envy for great Caesar. He alone, with honest thoughts for the general good of all, joined them. His life was gentle, and the elements were so well mixed in him that Nature could stand up and say to the whole world, "This was a man!"' },
        { speaker: 'OCTAVIUS', lines: 'Let us treat him according to his virtue, with all respect and the rites of burial. His body will lie in my tent tonight, treated with honor like a soldier. So let the battle end, and let’s go to share the glories of this happy day.' }
    ],
    Hinglish: [
        { speaker: 'BRUTUS', lines: 'Aao, mere dosto ke bache hue avshesh, is chattan par aaram karo.' },
        { speaker: 'CLITUS', lines: 'Statilius ne mashaal dikhayi thi, mere maalik, lekin woh waapis nahi aaya. Woh ya toh pakda gaya hai ya maar diya gaya hai.' },
        { speaker: 'BRUTUS', lines: 'Baith jao, Clitus. Marna hi ab shabd hai. Yeh aajkal ka fashion hai. Suno, Clitus.' },
        { speaker: 'CLITUS', lines: 'Kya, main, mere maalik? Nahi, poori duniya ke liye bhi nahi.' },
        { speaker: 'BRUTUS', lines: 'Toh shaant raho! Koi baat nahi.' },
        { speaker: 'CLITUS', lines: 'Main isse achha khud ko maar loonga.' },
        { speaker: 'BRUTUS', lines: 'Suno, Dardanius.' },
        { speaker: 'DARDANIUS', lines: 'Kya main aisa kaam karoon?' },
        { speaker: 'CLITUS', lines: 'Oh Dardanius!' },
        { speaker: 'DARDANIUS', lines: 'Oh Clitus!' },
        { speaker: 'DARDANIUS', lines: '(CLITUS se) Use maarne ke liye, Clitus. Dekho, woh soch mein dooba hai.' },
        { speaker: 'CLITUS', lines: '(DARDANIUS se) Ab woh mahan insaan dukh se itna bhar gaya hai, ki uski aankhon se bhi beh raha hai.' },
        { speaker: 'BRUTUS', lines: 'Yahan aao, achhe Volumnius. Ek baat suno.' },
        { speaker: 'VOLUMNIUS', lines: 'Mere maalik kya kehte hain?' },
        { speaker: 'BRUTUS', lines: 'Yeh, Volumnius: Caesar ka bhoot mujhe do alag-alag baar raat mein dikha hai. Ek baar Sardis mein, aur pichli raat yahan Philippi ke maidanon mein. Main jaanta hoon ki mera samay aa gaya hai.' },
        { speaker: 'VOLUMNIUS', lines: 'Aisa nahi hai, mere maalik.' },
        { speaker: 'BRUTUS', lines: 'Nahi, mujhe yakeen hai, Volumnius. Tum duniya ko dekhte ho, Volumnius, yeh kaise chal rahi hai. Hamare dushmanon ne humein maut ke kuye tak pahuncha diya hai. Yeh zyada sammaanjanak hai ki hum khud usmein kood jaayein, bajaye iske ki intezaar karein ki woh humein dhakka dein. Achhe Volumnius, tum jaante ho ki hum dono saath school jaate the. Hamari uss purani dosti ke liye, main tumse vinti karta hoon, meri talwar ki mooth pakdo, jabki main us par daudun.' },
        { speaker: 'VOLUMNIUS', lines: 'Yeh ek dost ka kaam nahi hai, mere maalik.' },
        { speaker: 'CLITUS', lines: 'Bhaago, bhaago, mere maalik. Yahan rukne ka samay nahi hai.' },
        { speaker: 'BRUTUS', lines: 'Alvida tum sabko. Aur tumhe. Aur tumhe, Volumnius. Strato, tum itni der se so rahe the. Tumhe bhi alvida, Strato. Deshwasiyon, mera dil khush hai ki poore jeevan mein, mujhe koi aisa aadmi nahi mila jo mere liye sachha na ho. Mujhe is haar ke din se zyada yash milega, jitna Octavius aur Mark Antony is ghinoni jeet se hasil karenge. Toh ek saath alvida, kyunki Brutus ki zabaan ne apni zindagi ki kahani lagbhag khatam kar di hai. Raat meri aankhon par chha rahi hai. Meri haddiyan aaram karna chahti hain, jinhone is ghadi ko paane ke liye mehnat ki hai.' },
        { speaker: 'CLITUS', lines: 'Bhaago, mere maalik, bhaago!' },
        { speaker: 'BRUTUS', lines: 'Jaao. Main peeche aaunga.' },
        { speaker: 'BRUTUS', lines: 'Main tumse vinti karta hoon, Strato, apne maalik ke paas ruko. Tum ek achhe sammaan ke saathi ho. Tumhare jeevan mein thoda sammaan ka swaad raha hai. Toh meri talwar pakdo aur apna chehra ghuma lo jab main ispar daudun. Kya tum karoge, Strato?' },
        { speaker: 'STRATO', lines: 'Pehle apna haath dijiye. Alvida, mere maalik.' },
        { speaker: 'BRUTUS', lines: 'Alvida, achhe Strato. Caesar, ab shaant ho jao. Maine tumhe aadhe mann se bhi nahi maara tha.' },
        { speaker: 'OCTAVIUS', lines: 'Woh kaun aadmi hai?' },
        { speaker: 'MESSALA', lines: 'Mere maalik ka aadmi. Strato, tumhara maalik kahan hai?' },
        { speaker: 'STRATO', lines: 'Jis bandhan mein tum ho, usse azaad, Messala. Vijeta sirf use jala sakte hain. Kyunki Brutus ne sirf khud ko haraya, aur kisi aur ko uski maut se sammaan nahi mila.' },
        { speaker: 'LUCILLIUS', lines: 'Toh Brutus aise hi milna chahiye. Shukriya, Brutus, ki tumne Lucillius ki baat sach saabit kar di.' },
        { speaker: 'OCTAVIUS', lines: 'Brutus ki seva karne wale sabhi logon ko, main apni seva mein lunga. Saathi, kya tum apna samay mere saath bitaoge?' },
        { speaker: 'STRATO', lines: 'Haan, agar Messala aapko meri sifarish karega.' },
        { speaker: 'OCTAVIUS', lines: 'Aisa karo, achhe Messala.' },
        { speaker: 'ANTONY', lines: 'Yeh un sab mein sabse nek Roman tha. Uske alawa sabhi shadyantrakariyon ne jo kiya, woh mahan Caesar se irshya ke kaaran kiya. Sirf usne, ek samanya imandaar vichar aur sabke bhale ke liye, unme se ek bana. Uska jeevan saumya tha, aur tatva usmein itne mishrit the ki Prakriti khadi hokar poori duniya se keh sakti thi, "Yeh ek aadmi tha!"' },
        { speaker: 'OCTAVIUS', lines: 'Uske guno ke anusaar hum uska sammaan karein, poore aadar aur dafan ke sanskaron ke saath. Aaj raat uski haddiyan mere tent mein rahengi, ek sainik ki tarah, sammaan se. Toh maidan ko shaant karo, aur chalo is khushi ke din ke gaurav ko baantein.' }
    ]
};
const descriptionVersions = {
    Shakespearean: "Defeated and cornered, Brutus confronts his final moments. He seeks an honorable end from his last remaining friends, culminating in a noble death that even his enemies must respect.",
    'Normal English': "With his army defeated, Brutus faces the end. He asks his loyal followers to help him take his own life, believing it a more honorable death than capture. His final act earns him praise even from his conquerors.",
Hinglish: "Apni sena ke haarne ke baad, Brutus ant ka saamna karta hai. Woh apne wafadaar anuyayiyon se apni jaan lene mein madad maangta hai, yeh maankar ki pakde jaane se yeh ek zyada sammanjanak maut hai. Uska aakhri kaam use uske vijetaon se bhi prashansa dilata hai."
};

// Main App Component
const App = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [activeVersion, setActiveVersion] = useState('Shakespearean');
    const [activeTab, setActiveTab] = useState('dialogue');
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
                            <button style={styles.breadcrumbButton}>Julius Caesar</button>
                            <h1 style={styles.sceneTitle}>Act V, Scene 5</h1>
                            <p style={styles.sceneSubtitle}>Another part of the field</p>
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
                                        const isNoble = ['BRUTUS', 'ANTONY', 'OCTAVIUS', 'MESSALA', 'LUCILLIUS'].includes(entry.speaker);
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

{activeTab === "summary" && (
            <div style={styles.summaryCard}>
              <div style={styles.summaryHeader}>
                <Class9icseEnglishAct5Scene5Summary />
              </div>
            </div>
          )}

          {activeTab === "qa" && (
            <div style={styles.questionSection}>
              <Class9icseEnglishAct5Scene5Questions />
            </div>
          )}
                </div>
            </main>
        </div>
    );
};

export default App;

