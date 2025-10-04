import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct5Scene3Questions from './Class9icseEnglishAct5Scene3Questions';
import Class9icseEnglishAct5Scene3Summary from './Class9icseEnglishAct5Scene3Summary';

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
const galleryImages = ["https://placehold.co/400x400/8B0000/FFFFFF?text=The+Death+of+Cassius", "https://placehold.co/400x400/A52A2A/FFFFFF?text=A+Fatal+Misunderstanding", "https://placehold.co/400x400/DAA520/FFFFFF?text=Titinius+with+Victory+Wreath", "https://placehold.co/400x400/3B3B3B/FFFFFF?text=Brutus+Mourns+Cassius"];
const importantWords = [
    { term: "Ensign", definition: "A standard-bearer; also, the flag or standard itself." },
    { term: "Spoil", definition: "To plunder or loot." },
    { term: "Thick", definition: "In this context, it means dim or poor, referring to Cassius's eyesight." },
    { term: "Disconsolate", definition: "Very unhappy and unable to be comforted." },
    { term: "Misconstrued", definition: "To have misunderstood or misinterpreted something." },
];


const dialogueVersions = {
    Shakespearean: [
        { speaker: 'CASSIUS', lines: 'O, look, Titinius, look, the villains fly!\nMyself have to mine own turned enemy.\nThis ensign here of mine was turning back.\nI slew the coward and did take it from him.' },
        { speaker: 'TITINIUS', lines: 'O Cassius, Brutus gave the word too early,\nWho, having some advantage on Octavius,\nTook it too eagerly. His soldiers fell to spoil,\nWhilst we by Antony are all enclosed.' },
        { speaker: 'PINDARUS', lines: 'Fly further off, my lord, fly further off.\nMark Antony is in your tents, my lord.\nFly, therefore, noble Cassius, fly far off.' },
        { speaker: 'CASSIUS', lines: 'This hill is far enough.—Look, look, Titinius.\nAre those my tents where I perceive the fire?' },
        { speaker: 'TITINIUS', lines: 'They are, my lord.' },
        { speaker: 'CASSIUS', lines: 'Titinius, if thou lovest me,\nMount thou my horse, and hide thy spurs in him\nTill he have brought thee up to yonder troops\nAnd here again, that I may rest assured\nWhether yond troops are friend or enemy.' },
        { speaker: 'TITINIUS', lines: 'I will be here again, even with a thought.' },
        { speaker: 'CASSIUS', lines: 'Go, Pindarus, get higher on that hill.\nMy sight was ever thick. Regard Titinius,\nAnd tell me what thou notest about the field.' },
        { speaker: 'CASSIUS', lines: 'This day I breathed first. Time is come round,\nAnd where I did begin, there shall I end.\nMy life is run his compass. Sirrah, what news?' },
        { speaker: 'PINDARUS', lines: '(above) O my lord!' },
        { speaker: 'CASSIUS', lines: 'What news?' },
        { speaker: 'PINDARUS', lines: '(above) Titinius is enclosèd round about\nWith horsemen, that make to him on the spur.\nYet he spurs on. Now they are almost on him.\nNow, Titinius. Now some light. Oh, he lights too.\nHe’s ta\'en. And, hark! They shout for joy.' },
        { speaker: 'CASSIUS', lines: 'Come down, behold no more.\nOh, coward that I am, to live so long\nTo see my best friend ta\'en before my face!' },
        { speaker: 'CASSIUS', lines: 'Come hither, sirrah.\nIn Parthia did I take thee prisoner.\nAnd then I swore thee, saving of thy life,\nThat whatsoever I did bid thee do,\nThou shouldst attempt it. Come now, keep thine oath.\nNow be a free man, and with this good sword\nThat ran through Caesar’s bowels, search this bosom.\nStand not to answer. Here take thou the hilts\nAnd, when my face is covered, as ’tis now,\nGuide thou the sword. Caesar, thou art revenged,\nEven with the sword that killed thee.' },
        { speaker: 'PINDARUS', lines: 'So I am free. Yet would not so have been,\nDurst I have done my will. O Cassius,\nFar from this country Pindarus shall run,\nWhere never Roman shall take note of him.' },
        { speaker: 'MESSALA', lines: 'It is but change, Titinius, for Octavius\nIs overthrown by noble Brutus\' power,\nAs Cassius\' legions are by Antony.' },
        { speaker: 'TITINIUS', lines: 'These tidings will well comfort Cassius.' },
        { speaker: 'MESSALA', lines: 'Where did you leave him?' },
        { speaker: 'TITINIUS', lines: 'All disconsolate,\nWith Pindarus his bondman on this hill.' },
        { speaker: 'MESSALA', lines: 'Is not that he that lies upon the ground?' },
        { speaker: 'TITINIUS', lines: 'He lies not like the living. O my heart!' },
        { speaker: 'MESSALA', lines: 'Is not that he?' },
        { speaker: 'TITINIUS', lines: 'No, this was he, Messala,\nBut Cassius is no more. O setting sun,\nAs in thy red rays thou dost sink tonight,\nSo in his red blood Cassius\' day is set.\nThe sun of Rome is set. Our day is gone.\nClouds, dews, and dangers come! Our deeds are done.\nMistrust of my success hath done this deed.' },
        { speaker: 'MESSALA', lines: 'Mistrust of good success hath done this deed.\nO hateful error, melancholy’s child,\nWhy dost thou show to the apt thoughts of men\nThe things that are not? O error, soon conceived,\nThou never comest unto a happy birth,\nBut kill’st the mother that engendered thee!' },
        { speaker: 'TITINIUS', lines: 'What, Pindarus! Where art thou, Pindarus?' },
        { speaker: 'MESSALA', lines: 'Seek him, Titinius, whilst I go to meet\nThe noble Brutus, thrusting this report\nInto his ears. I may say “thrusting” it,\nFor piercing steel and darts envenomèd,\nShall be as welcome to the ears of Brutus,\nAs tidings of this sight.' },
        { speaker: 'TITINIUS', lines: 'Hie you, Messala,\nAnd I will seek for Pindarus the while.\nWhy didst thou send me forth, brave Cassius?\nDid I not meet thy friends? And did not they,\nPut on my brows this wreath of victory,\nAnd bid me give it thee? Didst thou not hear their shouts?\nAlas, thou hast misconstrued everything!\nBut, hold thee, take this garland on thy brow.\nThy Brutus bid me give it thee, and I\nWill do his bidding. Brutus, come apace,\nAnd see how I regarded Caius Cassius.\n—By your leave, gods, this is a Roman’s part.\nCome, Cassius\' sword, and find Titinius\' heart.' },
        { speaker: 'BRUTUS', lines: 'Where, where, Messala, doth his body lie?' },
        { speaker: 'MESSALA', lines: 'Lo, yonder, and Titinius mourning it.' },
        { speaker: 'BRUTUS', lines: 'Titinius\' face is upward.' },
        { speaker: 'CATO', lines: 'He is slain.' },
        { speaker: 'BRUTUS', lines: 'O Julius Caesar, thou art mighty yet!\nThy spirit walks abroad and turns our swords\nIn our own proper entrails.' },
        { speaker: 'CATO', lines: 'Brave Titinius!—\nLook whe\'er he have not crowned dead Cassius.' },
        { speaker: 'BRUTUS', lines: 'Are yet two Romans living such as these?\n—The last of all the Romans, fare thee well!\nIt is impossible that ever Rome\nShould breed thy fellow.—Friends, I owe more tears\nTo this dead man than you shall see me pay.\n—I shall find time, Cassius, I shall find time.\n—Come, therefore, and to Thasos send his body.\nHis funerals shall not be in our camp,\nLest it discomfort us.—Lucillius, come.—\nAnd come, young Cato. Let us to the field.\n—\'Tis three o\'clock, and, Romans, yet ere night\nWe shall try fortune in a second fight.' }
    ],
    'Normal English': [
        { speaker: 'CASSIUS', lines: 'Oh look, Titinius, look! The villains are running away!\nI have become an enemy to my own men.\nThis standard-bearer of mine was turning back.\nI killed the coward and took the standard from him.' },
        { speaker: 'TITINIUS', lines: 'Oh Cassius, Brutus gave the order to attack too early.\nHe had some advantage over Octavius,\nand he acted on it too eagerly. His soldiers started looting,\nwhile we have been completely surrounded by Antony\'s men.' },
        { speaker: 'PINDARUS', lines: 'Get farther away, my lord, get farther away!\nMark Antony is in your tents, my lord.\nTherefore, fly, noble Cassius, fly far away!' },
        { speaker: 'CASSIUS', lines: 'This hill is far enough. Look, look, Titinius.\nAre those my tents over there where I see fire?' },
        { speaker: 'TITINIUS', lines: 'Yes, they are, my lord.' },
        { speaker: 'CASSIUS', lines: 'Titinius, if you love me,\nget on my horse and ride him hard\nuntil you reach those troops over there\nand come back again, so that I can be sure\nwhether those troops are friends or enemies.' },
        { speaker: 'TITINIUS', lines: 'I will be back in a flash.' },
        { speaker: 'CASSIUS', lines: 'Go, Pindarus, get higher on that hill.\nMy eyesight has always been poor. Watch Titinius,\nand tell me what you see happening on the field.' },
        { speaker: 'CASSIUS', lines: 'Today is my birthday; my time has come full circle.\nWhere I began, there I shall end.\nMy life has run its course. Sir, what is the news?' },
        { speaker: 'PINDARUS', lines: '(from above) Oh, my lord!' },
        { speaker: 'CASSIUS', lines: 'What is the news?' },
        { speaker: 'PINDARUS', lines: '(from above) Titinius is surrounded\nby horsemen who are riding toward him at full speed.\nYet he keeps riding on. Now they are almost upon him.\nNow, Titinius! Now some are dismounting. Oh, he is dismounting too.\nHe has been captured! And listen! They are shouting for joy.' },
        { speaker: 'CASSIUS', lines: 'Come down; watch no more.\nOh, what a coward I am, to live this long\nonly to see my best friend captured right before my eyes!' },
        { speaker: 'CASSIUS', lines: 'Come here, sir.\nI took you as a prisoner in Parthia,\nand I made you swear an oath, in exchange for your life,\nthat you would do whatever I ordered you to do.\nCome now, keep your oath.\nNow you can be a free man; and with this good sword,\nthat ran through Caesar’s insides, pierce my chest.\nDon’t hesitate to answer. Here, take the hilt,\nand when my face is covered, as it is now,\nguide the sword. Caesar, you are avenged,\neven with the sword that killed you.' },
        { speaker: 'PINDARUS', lines: 'So I am free. But I would not have done this\nif I had dared to do what I wanted. Oh, Cassius,\nPindarus will run far from this country,\nwhere no Roman will ever see him again.' },
        { speaker: 'MESSALA', lines: 'It is an exchange, Titinius; for Octavius\nis defeated by the noble Brutus\'s power,\njust as Cassius\'s legions are defeated by Antony.' },
        { speaker: 'TITINIUS', lines: 'This news will comfort Cassius.' },
        { speaker: 'MESSALA', lines: 'Where did you leave him?' },
        { speaker: 'TITINIUS', lines: 'Completely heartbroken,\nwith his servant Pindarus on this hill.' },
        { speaker: 'MESSALA', lines: 'Isn\'t that him lying on the ground?' },
        { speaker: 'TITINIUS', lines: 'He does not look like he is alive. Oh, my heart!' },
        { speaker: 'MESSALA', lines: 'Isn\'t that him?' },
        { speaker: 'TITINIUS', lines: 'No, this was him, Messala,\nbut Cassius is no more. Oh, setting sun,\njust as you sink tonight in your red rays,\nso in his red blood Cassius\'s day has ended.\nThe sun of Rome has set. Our day is over.\nClouds, sorrow, and dangers are coming! Our work is done.\nHis mistrust in my success caused this.' },
        { speaker: 'MESSALA', lines: 'Mistrust in good success has caused this.\nOh, hateful error, child of sadness,\nwhy do you show men things that are not real?\nOh, error, so quickly formed,\nyou are never born happily,\nbut you kill the mother that created you!' },
        { speaker: 'TITINIUS', lines: 'What, Pindarus! Where are you, Pindarus?' },
        { speaker: 'MESSALA', lines: 'Look for him, Titinius, while I go to meet\nthe noble Brutus, and thrust this news\ninto his ears. I say "thrusting" because\npiercing steel and poisoned darts\nwill be as welcome to Brutus\'s ears\nas the news of this sight.' },
        { speaker: 'TITINIUS', lines: 'Hurry, Messala,\nand I will look for Pindarus in the meantime.\nWhy did you send me, brave Cassius?\nDid I not meet your friends? And did they not\nput this wreath of victory on my head\nand ask me to give it to you? Did you not hear their shouts?\nAlas, you have misunderstood everything!\nBut wait, take this garland on your brow.\nYour Brutus asked me to give it to you, and I\nwill do as he asked. Brutus, come quickly\nand see how much I cared for Caius Cassius.\n—By your leave, gods, this is a Roman’s duty.\nCome, Cassius\' sword, and find Titinius\' heart.' },
        { speaker: 'BRUTUS', lines: 'Where, where, Messala, does his body lie?' },
        { speaker: 'MESSALA', lines: 'Over there, and Titinius is mourning him.' },
        { speaker: 'BRUTUS', lines: 'Titinius\'s face is turned upward.' },
        { speaker: 'CATO', lines: 'He has been killed.' },
        { speaker: 'BRUTUS', lines: 'Oh, Julius Caesar, you are still mighty!\nYour spirit wanders about and turns our swords\ninto our own stomachs.' },
        { speaker: 'CATO', lines: 'Brave Titinius!—\nLook, he has crowned the dead Cassius.' },
        { speaker: 'BRUTUS', lines: 'Are there still two Romans living like these?\n—The last of all the Romans, farewell!\nIt is impossible that Rome\nshould ever produce your equal.—Friends, I owe more tears\nto this dead man than you will see me pay.\n—I will find time, Cassius, I will find time.\n—Come, therefore, and send his body to Thasos.\nHis funeral will not be held in our camp,\nin case it disheartens us.—Lucillius, come.—\nAnd come, young Cato. Let us go to the field.\n—\'Tis three o’clock, and, Romans, before nightfall,\nwe will try our luck in a second fight.' }
    ],
    Hinglish: [
        { speaker: 'CASSIUS', lines: 'Oh, dekho, Titinius, dekho, yeh darpok bhaag rahe hain!\nMain khud apne hi logon ka dushman ban gaya hoon.\nMera yeh jhanda uthane wala peeche mud raha tha.\nMaine uss kaayar ko maar dala aur usse yeh le liya.' },
        { speaker: 'TITINIUS', lines: 'Oh Cassius, Brutus ne hamla karne ka aadesh bahut jaldi de diya.\nUse Octavius par thodi badhat mil gayi thi,\nmagar usne iska fayda bahut jaldi mein uthaya. Uske sainik loot-paat mein lag gaye,\njabki humein Antony ne chaaron taraf se gher liya hai.' },
        { speaker: 'PINDARUS', lines: 'Aur door bhaagiye, mere maalik, aur door bhaagiye!\nMark Antony aapke tent mein hai, mere maalik.\nIsliye bhaagiye, mahan Cassius, door bhaagiye!' },
        { speaker: 'CASSIUS', lines: 'Yeh pahadi kaafi door hai. Dekho, dekho, Titinius.\nKya woh mere tents hain jahan mujhe aag dikh rahi hai?' },
        { speaker: 'TITINIUS', lines: 'Haan, mere maalik, wahi hain.' },
        { speaker: 'CASSIUS', lines: 'Titinius, agar tum mujhse pyaar karte ho,\nto mere ghode par sawaar ho jao aur use tez daudao\njab tak woh tumhe un sainikon tak na le jaaye\naur phir waapis yahan, taaki mujhe yakeen ho sake\nki woh sainik dost hain ya dushman.' },
        { speaker: 'TITINIUS', lines: 'Main palak jhapkte hi waapis aa jaunga.' },
        { speaker: 'CASSIUS', lines: 'Jao, Pindarus, uss pahadi par aur upar jao.\nMeri nazar hamesha se kamzor rahi hai. Titinius par nazar rakho,\naur mujhe batao ki maidan mein kya dikhta hai.' },
        { speaker: 'CASSIUS', lines: 'Aaj hi ke din maine pehli saans li thi. Waqt ghoom kar wahin aa gaya hai.\nJahan se maine shuru kiya tha, wahin mera ant hoga.\nMeri zindagi ka chakra poora ho gaya hai. Are, kya khabar hai?' },
        { speaker: 'PINDARUS', lines: '(upar se) Oh mere maalik!' },
        { speaker: 'CASSIUS', lines: 'Kya khabar hai?' },
        { speaker: 'PINDARUS', lines: '(upar se) Titinius ko chaaron taraf se gher liya gaya hai\nghudsawaaron ne, jo uski taraf tezi se badh rahe hain.\nPhir bhi woh aage badh raha hai. Ab woh uske bahut paas hain.\nAb, Titinius. Ab kuch log utar rahe hain. Oh, woh bhi utar gaya.\nUse pakad liya gaya hai! Aur, suno! Woh khushi se chilla rahe hain.' },
        { speaker: 'CASSIUS', lines: 'Neeche aa jao, aur mat dekho.\nOh, main kitna bada kaayar hoon, jo itna zinda raha\nki apne sabse achhe dost ko apni aankhon ke saamne pakde jaate dekhun!' },
        { speaker: 'CASSIUS', lines: 'Yahan aao, suno.\nParthia mein maine tumhe kaidi banaya tha.\nAur tab maine tumhe kasam khilayi thi, tumhari jaan baksh kar,\nki main jo bhi tumhe karne ka aadesh doonga,\ntum woh karoge. Chalo ab, apni kasam nibhao.\nAb tum ek azaad aadmi ho, aur is achhi talwar se\njo Caesar ke pet mein ghusi thi, is seene ko chedo.\nJawab dene ke liye khade mat raho. Yahan iski mooth pakdo\naur, jab mera chehra dhaka ho, jaisa abhi hai,\ntum talwar ko raasta dikhana. Caesar, tumhara badla le liya gaya hai,\nusi talwar se jisne tumhe maara tha.' },
        { speaker: 'PINDARUS', lines: 'Toh main azaad hoon. Lekin main aisa nahi karta\nagar meri himmat hoti. Oh Cassius,\nPindarus is desh se bahut door bhaag jayega,\njahan koi Roman use kabhi dekh nahi payega.' },
        { speaker: 'MESSALA', lines: 'Yeh toh bas adla-badli hai, Titinius, kyunki Octavius\nmahan Brutus ki shakti se haar gaya hai,\njaise Cassius ki sena Antony se haar gayi hai.' },
        { speaker: 'TITINIUS', lines: 'Yeh khabar Cassius ko zaroor tasalli degi.' },
        { speaker: 'MESSALA', lines: 'Tumne use kahan chhoda tha?' },
        { speaker: 'TITINIUS', lines: 'Bilkul udaas,\napne gulam Pindarus ke saath is pahadi par.' },
        { speaker: 'MESSALA', lines: 'Kya woh wahi nahi hai jo zameen par pada hai?' },
        { speaker: 'TITINIUS', lines: 'Woh zinda nahi lag raha. Oh mera dil!' },
        { speaker: 'MESSALA', lines: 'Kya yeh wahi nahi hai?' },
        { speaker: 'TITINIUS', lines: 'Nahi, yeh wahi tha, Messala,\nlekin Cassius ab nahi raha. Oh doobte suraj,\njaise tum aaj raat apni laal kirnon mein doob rahe ho,\nwaise hi uske laal khoon mein Cassius ka din doob gaya hai.\nRome ka suraj doob gaya hai. Hamara din khatam ho gaya hai.\nBaadal, oss, aur khatre aate hain! Hamare kaam ho chuke hain.\nMeri safalta par vishwas na karne ne yeh kaam kiya hai.' },
        { speaker: 'MESSALA', lines: 'Achhi safalta par vishwas na karne ne yeh kaam kiya hai.\nOh nafrat bhari galti, udaasi ki beti,\ntum insaano ke dimaag mein woh cheezein kyun dikhati ho\njo hain hi nahi? Oh galti, jaldi paida hone wali,\ntum kabhi khushaal janam nahi leti,\nbalki apni hi paida karne wali maa ko maar deti ho!' },
        { speaker: 'TITINIUS', lines: 'Kya, Pindarus! Kahan ho tum, Pindarus?' },
        { speaker: 'MESSALA', lines: 'Use dhoondo, Titinius, jab tak main jaakar milta hoon\nmahan Brutus se, aur yeh khabar uske kaanon mein\ndaalta hoon. Main "daalna" keh sakta hoon,\nkyunki chubhne wala loha aur zehreele teer\nBrutus ke kaanon ko utne hi achhe lagenge,\njitna is drishya ki khabar.' },
        { speaker: 'TITINIUS', lines: 'Jaldi jao, Messala,\naur main tab tak Pindarus ko dhoondta hoon.\nTumne mujhe kyun bheja tha, bahadur Cassius?\nKya main tumhare doston se nahi mila? Aur kya unhone\nmere maathe par yeh jeet ka sehra nahi rakha\naur mujhe yeh tumhe dene ko nahi kaha? Kya tumne unki chillahtein nahi suni?\nAfsos, tumne sab kuch galat samajh liya!\nLekin ruko, yeh mala apne maathe par rakho.\nTumhare Brutus ne mujhe yeh tumhe dene ko kaha tha, aur main\nuska aadesh poora karunga. Brutus, jaldi aao,\naur dekho maine Caius Cassius ka kitna sammaan kiya.\n—Devtaon ki anumati se, yeh ek Roman ka kartavya hai.\nAao, Cassius ki talwar, aur Titinius ka dil dhoondo.' },
        { speaker: 'BRUTUS', lines: 'Kahan, kahan, Messala, uska sharir pada hai?' },
        { speaker: 'MESSALA', lines: 'Wahan, aur Titinius uspar shok mana raha hai.' },
        { speaker: 'BRUTUS', lines: 'Titinius ka chehra upar ki taraf hai.' },
        { speaker: 'CATO', lines: 'Woh maara gaya hai.' },
        { speaker: 'BRUTUS', lines: 'Oh Julius Caesar, tum ab bhi shaktishaali ho!\nTumhari aatma ghoomti hai aur hamari talwaron ko\nhamare hi pet mein ghuma deti hai.' },
        { speaker: 'CATO', lines: 'Bahadur Titinius!—\nDekho, usne mare hue Cassius ko taaj pehnaya hai.' },
        { speaker: 'BRUTUS', lines: 'Kya ab bhi in jaise do Roman zinda hain?\n—Sabhi Romans mein se aakhiri, alvida!\nYeh asambhav hai ki Rome kabhi\ntumhare jaisa doosra paida kare.—Dosto, mujhe is mare hue aadmi ke liye\naur aansu bahane hain jo tum mujhe bahate hue nahi dekhoge.\n—Main samay nikalunga, Cassius, main samay nikalunga.\n—Isliye aao, aur iske sharir ko Thasos bhej do.\nUska antim sanskar hamare camp mein nahi hoga,\nkahin isse hamara manobal na toot jaye.—Lucillius, aao.—\nAur aao, naujawan Cato. Chalo maidan ki taraf.\n—\'Tis three o\'clock, and, Romans, yet ere night\nWe shall try fortune in a second fight.' }
    ]
};
const descriptionVersions = {
    Shakespearean: "Through the thick of battle, a fatal misconstruction of events leads Cassius to despair. Believing his friend captured and the battle lost, he meets his end, setting in motion another tragedy.",
    'Normal English': "A misunderstanding on the battlefield leads to disaster. Cassius believes his best friend has been captured by the enemy, and in his grief, he takes his own life. This rash decision triggers another tragic death.",
    Hinglish: "Yuddh ke maidan mein ek galatfehmi ek badi aafat ka kaaran banti hai. Cassius ko lagta hai ki uska sabse achha dost dushman dwara pakad liya gaya hai, aur dukh mein woh apni jaan le leta hai. Yeh jaldbaazi ka faisla ek aur dukhद mrityu ko janm deta hai."
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
            marginTop:"50px"
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
                            <h1 style={styles.sceneTitle}>Act V, Scene 3</h1>
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
                                        const isNoble = ['BRUTUS', 'CASSIUS', 'ANTONY', 'OCTAVIUS', 'TITINIUS', 'MESSALA', 'CATO'].includes(entry.speaker);
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
                <Class9icseEnglishAct5Scene3Summary />
              </div>
            </div>
          )}

          {activeTab === "qa" && (
            <div style={styles.questionSection}>
              <Class9icseEnglishAct5Scene3Questions />
            </div>
          )}
                </div>
            </main>
        </div>
    );
};

export default App;

