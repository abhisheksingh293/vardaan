import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct5Scene1Questions from './Class9icseEnglishAct5Scene1Questions';
import Class9icseEnglishAct5Scene1Summary from './Class9icseEnglishAct5Scene1Summary';

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
const galleryImages = ["https://placehold.co/400x400/8B0000/FFFFFF?text=Confrontation+at+Philippi", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Antony+and+Octavius", "https://placehold.co/400x400/DAA520/FFFFFF?text=Brutus+and+Cassius", "https://placehold.co/400x400/3B3B3B/FFFFFF?text=Ravens+and+Crows"];
const importantWords = [
    { term: "Parley", definition: "A conference between opposing sides in a dispute, especially a discussion of terms for an armistice." },
    { term: "Exigent", definition: "A demanding or urgent situation." },
    { term: "Presage", definition: "To be a sign or warning that something, typically something bad, will happen; an omen." },
    { term: "Stomachs", definition: "In this context, it means courage or the inclination to fight." },
    { term: "Ensign", definition: "A flag or standard, especially a military one." },
    { term: "Fatal", definition: "Fateful; relating to or proceeding from fate." },
];


const dialogueVersions = {
    Shakespearean: [
        { speaker: 'OCTAVIUS', lines: 'Now, Antony, our hopes are answerèd.\nYou said the enemy would not come down,\nBut keep the hills and upper regions.\nIt proves not so. Their battles are at hand;\nThey mean to warn us at Philippi here,\nAnswering before we do demand of them.' },
        { speaker: 'ANTONY', lines: 'Tut, I am in their bosoms, and I know\nWherefore they do it. They could be content\nTo visit other places, and come down\nWith fearful bravery, thinking by this face\nTo fasten in our thoughts that they have courage.\nBut ’tis not so.' },
        { speaker: 'MESSENGER', lines: 'Prepare you, generals.\nThe enemy comes on in gallant show.\nTheir bloody sign of battle is hung out,\nAnd something to be done immediately.' },
        { speaker: 'ANTONY', lines: 'Octavius, lead your battle softly on,\nUpon the left hand of the even field.' },
        { speaker: 'OCTAVIUS', lines: 'Upon the right hand I. Keep thou the left.' },
        { speaker: 'ANTONY', lines: 'Why do you cross me in this exigent?' },
        { speaker: 'OCTAVIUS', lines: 'I do not cross you. But I will do so.' },
        { speaker: 'BRUTUS', lines: 'They stand and would have parley.' },
        { speaker: 'CASSIUS', lines: 'Stand fast, Titinius. We must out and talk.' },
        { speaker: 'OCTAVIUS', lines: 'Mark Antony, shall we give sign of battle?' },
        { speaker: 'ANTONY', lines: 'No, Caesar, we will answer on their charge.\nMake forth. The generals would have some words.' },
        { speaker: 'OCTAVIUS', lines: '(to his army) Stir not until the signal.' },
        { speaker: 'BRUTUS', lines: 'Words before blows. Is it so, countrymen?' },
        { speaker: 'OCTAVIUS', lines: 'Not that we love words better, as you do.' },
        { speaker: 'BRUTUS', lines: 'Good words are better than bad strokes, Octavius.' },
        { speaker: 'ANTONY', lines: 'In your bad strokes, Brutus, you give good words.\nWitness the hole you made in Caesar’s heart,\nCrying “Long live, hail, Caesar!”' },
        { speaker: 'CASSIUS', lines: 'Antony,\nThe posture of your blows are yet unknown.\nBut for your words, they rob the Hybla bees\nAnd leave them honeyless.' },
        { speaker: 'ANTONY', lines: 'Not stingless too?' },
        { speaker: 'BRUTUS', lines: 'Oh, yes, and soundless too.\nFor you have stol\'n their buzzing, Antony,\nAnd very wisely threat before you sting.' },
        { speaker: 'ANTONY', lines: 'Villains, you did not so when your vile daggers\nHacked one another in the sides of Caesar.\nYou showed your teeth like apes, and fawned like hounds,\nAnd bowed like bondmen, kissing Caesar’s feet,\nWhilst damnèd Casca, like a cur, behind\nStruck Caesar on the neck. O you flatterers!' },
        { speaker: 'CASSIUS', lines: 'Flatterers?—Now, Brutus, thank yourself.\nThis tongue had not offended so today,\nIf Cassius might have ruled.' },
        { speaker: 'OCTAVIUS', lines: 'Come, come, the cause. If arguing make us sweat,\nThe proof of it will turn to redder drops.\n(draws his sword) Look, I draw a sword against conspirators.\nWhen think you that the sword goes up again?\nNever, till Caesar’s three and thirty wounds\nBe well avenged, or till another Caesar\nHave added slaughter to the sword of traitors.' },
        { speaker: 'BRUTUS', lines: 'Caesar, thou canst not die by traitors\' hands\nUnless thou bring’st them with thee.' },
        { speaker: 'OCTAVIUS', lines: 'So I hope.\nI was not born to die on Brutus\' sword.' },
        { speaker: 'BRUTUS', lines: 'O, if thou wert the noblest of thy strain,\nYoung man, thou couldst not die more honorable.' },
        { speaker: 'CASSIUS', lines: 'A peevish schoolboy, worthless of such honor,\nJoined with a masker and a reveler!' },
        { speaker: 'ANTONY', lines: 'Old Cassius still.' },
        { speaker: 'OCTAVIUS', lines: 'Come, Antony, away.—\nDefiance, traitors, hurl we in your teeth.\nIf you dare fight today, come to the field.\nIf not, when you have stomachs.' },
        { speaker: 'CASSIUS', lines: 'Why, now, blow wind, swell billow, and swim bark!\nThe storm is up and all is on the hazard.' },
        { speaker: 'BRUTUS', lines: 'Ho, Lucillius, hark, a word with you.' },
        { speaker: 'LUCILLIUS', lines: 'My lord?' },
        { speaker: 'CASSIUS', lines: 'Messala!' },
        { speaker: 'MESSALA', lines: 'What says my general?' },
        { speaker: 'CASSIUS', lines: 'Messala,\nThis is my birthday, as this very day\nWas Cassius born. Give me thy hand, Messala.\nBe thou my witness that against my will,\nAs Pompey was, am I compelled to set\nUpon one battle all our liberties.\nYou know that I held Epicurus strong\nAnd his opinion. Now I change my mind,\nAnd partly credit things that do presage.\nComing from Sardis, on our former ensign\nTwo mighty eagles fell, and there they perched,\nGorging and feeding from our soldiers\' hands,\nWho to Philippi here consorted us.\nThis morning are they fled away and gone,\nAnd in their steads do ravens, crows, and kites\nFly o\'er our heads and downward look on us\nAs we were sickly prey. Their shadows seem\nA canopy most fatal, under which\nOur army lies, ready to give up the ghost.' },
        { speaker: 'MESSALA', lines: 'Believe not so.' },
        { speaker: 'CASSIUS', lines: 'I but believe it partly,\nFor I am fresh of spirit and resolved,\nTo meet all perils very constantly.' },
        { speaker: 'BRUTUS', lines: 'Even so, Lucillius.' },
        { speaker: 'CASSIUS', lines: 'Now, most noble Brutus,\nThe gods today stand friendly that we may,\nLovers in peace, lead on our days to age.\nBut since the affairs of men rest still incertain,\nLet’s reason with the worst that may befall.\nIf we do lose this battle, then is this\nThe very last time we shall speak together.\nWhat are you then determinèd to do?' },
        { speaker: 'BRUTUS', lines: 'Even by the rule of that philosophy,\nBy which I did blame Cato for the death\nWhich he did give himself (I know not how,\nBut I do find it cowardly and vile,\nFor fear of what might fall, so to prevent\nThe time of life), arming myself with patience\nTo stay the providence of some high powers,\nThat govern us below.' },
        { speaker: 'CASSIUS', lines: 'Then if we lose this battle,\nYou are contented to be led in triumph,\nThorough the streets of Rome?' },
        { speaker: 'BRUTUS', lines: 'No, Cassius, no. Think not, thou noble Roman,\nThat ever Brutus will go bound to Rome.\nHe bears too great a mind. But this same day,\nMust end that work the ides of March begun.\nAnd whether we shall meet again I know not.\nTherefore our everlasting farewell take.\nForever and forever farewell, Cassius.\nIf we do meet again, why, we shall smile.\nIf not, why then this parting was well made.' },
        { speaker: 'CASSIUS', lines: 'Forever and forever farewell, Brutus.\nIf we do meet again, we’ll smile indeed.\nIf not, ’tis true this parting was well made.' },
        { speaker: 'BRUTUS', lines: 'Why then, lead on. Oh, that a man might know\nThe end of this day’s business ere it come!\nBut it sufficeth that the day will end,\nAnd then the end is known.—Come, ho! Away!' },
    ],
    'Normal English': [
        { speaker: 'OCTAVIUS', lines: 'Well, Antony, our wishes have been answered.\nYou said the enemy would stay in the hills,\nbut that’s not what happened. Their armies are nearby.\nThey plan to challenge us here at Philippi,\nmeeting us before we can even challenge them.' },
        { speaker: 'ANTONY', lines: 'Don\'t worry, I know their secrets, and I know why they are doing this.\nThey would prefer to be somewhere else,\nand have come down with a show of false courage,\ntrying to make us think they are brave.\nBut they are not.' },
        { speaker: 'MESSENGER', lines: 'Get ready, generals.\nThe enemy is approaching with a great display.\nTheir red flag of battle is flying,\nand something is about to happen.' },
        { speaker: 'ANTONY', lines: 'Octavius, lead your army forward slowly,\non the left side of the field.' },
        { speaker: 'OCTAVIUS', lines: 'I will take the right side. You keep the left.' },
        { speaker: 'ANTONY', lines: 'Why are you arguing with me at this critical moment?' },
        { speaker: 'OCTAVIUS', lines: 'I am not arguing with you. But I will do what I said.' },
        { speaker: 'BRUTUS', lines: 'They have stopped and want to talk.' },
        { speaker: 'CASSIUS', lines: 'Hold your ground, Titinius. We must go forward and speak with them.' },
        { speaker: 'OCTAVIUS', lines: 'Mark Antony, should we signal for the battle to start?' },
        { speaker: 'ANTONY', lines: 'No, Caesar, let’s respond to their charge first.\nGo forward. Their generals want to speak.' },
        { speaker: 'OCTAVIUS', lines: '(to his army) Don\'t move until you get the signal.' },
        { speaker: 'BRUTUS', lines: 'We talk before we fight. Is that right, my countrymen?' },
        { speaker: 'OCTAVIUS', lines: 'It’s not because we prefer words to fighting, like you do.' },
        { speaker: 'BRUTUS', lines: 'Good words are better than bad sword-strokes, Octavius.' },
        { speaker: 'ANTONY', lines: 'With your bad strokes, Brutus, you use good words.\nRemember the hole you made in Caesar’s heart,\nwhile crying “Long live Caesar! Hail, Caesar!”' },
        { speaker: 'CASSIUS', lines: 'Antony,\nwe don\'t know yet how you will fight.\nBut as for your words, they are so sweet\nthey could rob the bees of Hybla of their honey.' },
        { speaker: 'ANTONY', lines: 'But not of their stings?' },
        { speaker: 'BRUTUS', lines: 'Oh, yes, and of their buzzing too.\nBecause you have stolen their buzzing sound, Antony,\nand very wisely, you make threats before you sting.' },
        { speaker: 'ANTONY', lines: 'You villains, you didn\'t do that when your vile daggers\nhacked at each other in Caesar’s sides.\nYou grinned like apes and were as fawning as hounds,\nand you bowed like slaves, kissing Caesar’s feet;\nwhile the damned Casca, like a dog, from behind\nstruck Caesar on the neck. Oh, you flatterers!' },
        { speaker: 'CASSIUS', lines: 'Flatterers? Now, Brutus, you have only yourself to thank.\nThis man’s tongue would not be offending us today,\nif Cassius had had his way.' },
        { speaker: 'OCTAVIUS', lines: 'Come on, let\'s get to the point. If arguing makes us sweat,\nthe actual fight will make us bleed.\n(draws his sword) Look, I draw my sword against the conspirators.\nWhen do you think this sword will be put away again?\nNever, until Caesar’s thirty-three wounds\nare fully avenged, or until another Caesar\nis killed by the sword of traitors.' },
        { speaker: 'BRUTUS', lines: 'Caesar, you cannot be killed by traitors\' hands,\nunless you bring the traitors with you.' },
        { speaker: 'OCTAVIUS', lines: 'I hope so.\nI was not born to die on Brutus\'s sword.' },
        { speaker: 'BRUTUS', lines: 'Oh, even if you were the noblest of your family,\nyoung man, you could not die in a more honorable way.' },
        { speaker: 'CASSIUS', lines: 'A whining schoolboy, not worthy of such an honor,\npartnered with a party-goer and a playboy!' },
        { speaker: 'ANTONY', lines: 'Same old Cassius.' },
        { speaker: 'OCTAVIUS', lines: 'Come, Antony, let’s go.—\nWe throw defiance in your face, traitors.\nIf you dare to fight today, come to the battlefield.\nIf not, come when you have the courage.' },
        { speaker: 'CASSIUS', lines: 'Well, let the wind blow, the waves swell, and the ship sail!\nThe storm has arrived, and everything is at risk.' },
        { speaker: 'BRUTUS', lines: 'Hey, Lucillius, listen, I need a word with you.' },
        { speaker: 'LUCILLIUS', lines: 'My lord?' },
        { speaker: 'CASSIUS', lines: 'Messala!' },
        { speaker: 'MESSALA', lines: 'What says my general?' },
        { speaker: 'CASSIUS', lines: 'Messala,\nToday is my birthday; on this very day\nCassius was born. Give me your hand, Messala.\nBe my witness that against my will,\njust as Pompey was, I am forced to risk\nall our freedoms on a single battle.\nYou know that I used to be a firm believer in Epicurus and his opinions.\nBut now I am changing my mind and partly believe in things that are omens.\nComing from Sardis, two mighty eagles landed on our foremost flag, and there they perched,\neating from our soldiers\' hands, who accompanied us here to Philippi.\nThis morning they have fled and are gone.\nAnd in their place, ravens, crows, and kites fly over our heads and look down on us\nas if we were sick prey. Their shadows seem like a fatal canopy,\nunder which our army lies, ready to die.' },
        { speaker: 'MESSALA', lines: 'Don\'t believe that.' },
        { speaker: 'CASSIUS', lines: 'I only partly believe it,\nfor my spirit is strong, and I am determined\nto face all dangers with resolve.' },
        { speaker: 'BRUTUS', lines: 'Just as we discussed, Lucillius.' },
        { speaker: 'CASSIUS', lines: 'Now, most noble Brutus,\nMay the gods be on our side today, so that we,\nas friends in peace, may live to an old age.\nBut since men’s affairs are always uncertain,\nlet’s consider the worst that could happen.\nIf we lose this battle, then this is\nthe very last time we will speak to each other.\nWhat have you decided to do then?' },
        { speaker: 'BRUTUS', lines: 'I will follow the same philosophy\nfor which I blamed Cato for taking his own life.\nI find it cowardly and vile\nto cut life short just to avoid possible future suffering.\nInstead, I will arm myself with patience\nto wait for whatever the gods have planned for us.' },
        { speaker: 'CASSIUS', lines: 'So, if we lose this battle,\nyou are willing to be led in a victory parade\nthrough the streets of Rome?' },
        { speaker: 'BRUTUS', lines: 'No, Cassius, no. Don\'t think, you noble Roman,\nthat Brutus will ever return to Rome in chains.\nHe has too much pride. This very day\nmust end the work that the Ides of March began.\nAnd I do not know if we will meet again.\nTherefore, let us take our final farewell.\nForever and ever, farewell, Cassius.\nIf we meet again, well, we will smile.\nIf not, then this parting was well done.' },
        { speaker: 'CASSIUS', lines: 'Forever and ever, farewell, Brutus.\nIf we do meet again, we will indeed smile.\nIf not, it’s true this parting was well done.' },
        { speaker: 'BRUTUS', lines: 'Well then, lead on. Oh, if only a man could know\nthe outcome of this day’s events before they happen!\nBut it is enough to know that the day will end,\nand then the outcome will be known.—Come on! Let\'s go!' },
    ],
    Hinglish: [
        { speaker: 'OCTAVIUS', lines: 'Lo, Antony, hamari ummeedein puri ho gayin.\nTumne kaha tha ki dushman neeche nahi aayega,\nbalki pahadon aur upari ilakon mein rahega.\nPar aisa nahi hua. Unki senaayein paas mein hain;\nWoh humein yahan Philippi mein hi chetavni dena chahte hain,\nhamare maangne se pehle hi jawab de rahe hain.' },
        { speaker: 'ANTONY', lines: 'Arre, main unke dil ki baat jaanta hoon, aur mujhe pata hai\nwoh aisa kyun kar rahe hain. Woh kahin aur jaana pasand karte,\naur yahan ek daravani bahaduri ke saath neeche aaye hain,\nis chehre se yeh sochkar ki hamare mann mein yeh baitha dein ki unmein himmat hai.\nPar aisa hai nahi.' },
        { speaker: 'MESSENGER', lines: 'Taiyaar ho jaiye, senapatiyon.\nDushman shaan se aage badh raha hai.\nUnka khooni jhanda, jo yuddh ka sanket hai, lehera diya gaya hai,\naur kuch turant karna hoga.' },
        { speaker: 'ANTONY', lines: 'Octavius, apni sena ko dheere se aage badhao,\nkhule maidan ke baayein haath par.' },
        { speaker: 'OCTAVIUS', lines: 'Main daayein haath par. Tum baayein rakho.' },
        { speaker: 'ANTONY', lines: 'Is zaroori waqt par tum meri baat kyun kaat rahe ho?' },
        { speaker: 'OCTAVIUS', lines: 'Main tumhari baat nahi kaat raha. Par main wahi karunga jo maine kaha.' },
        { speaker: 'BRUTUS', lines: 'Woh khade hain aur sulah-safai karna chahte hain.' },
        { speaker: 'CASSIUS', lines: 'Dridh raho, Titinius. Humein aage badhkar baat karni hogi.' },
        { speaker: 'OCTAVIUS', lines: 'Mark Antony, kya hum yuddh ka sanket dein?' },
        { speaker: 'ANTONY', lines: 'Nahi, Caesar, hum unke hamle ka jawab denge.\nAage badho. Senapati kuch baat karna chahte hain.' },
        { speaker: 'OCTAVIUS', lines: '(apni sena se) Jab tak sanket na mile, hilna mat.' },
        { speaker: 'BRUTUS', lines: 'Vaar se pehle vaani. Kyun, deshwasiyon?' },
        { speaker: 'OCTAVIUS', lines: 'Isliye nahi ki humein tumhari tarah baatein zyada pasand hain.' },
        { speaker: 'BRUTUS', lines: 'Achhe shabd bure prahar se behtar hain, Octavius.' },
        { speaker: 'ANTONY', lines: 'Tumhare bure praharon mein, Brutus, tum achhe shabd istemal karte ho.\nGawah hai woh chhed jo tumne Caesar ke dil mein kiya tha,\nchillate hue "Caesar zindabad, Caesar ki jai ho!"' },
        { speaker: 'CASSIUS', lines: 'Antony,\ntumhare praharon ka andaaz abhi tak pata nahi hai.\nPar tumhari baaton ke liye, woh Hybla ki madhumakkhiyon ko loot leti hain\naur unhe shehad ke bina chhod deti hain.' },
        { speaker: 'ANTONY', lines: 'Bina dunk ke nahi?' },
        { speaker: 'BRUTUS', lines: 'Oh, haan, aur bina aawaz ke bhi.\nKyunki tumne unki bhinbhinahat chura li hai, Antony,\naur badi samajhdari se dunk maarne se pehle dhamki dete ho.' },
        { speaker: 'ANTONY', lines: 'Dushton, tumne aisa nahi kiya jab tumhare neech khanjar\nCaesar ke pehlu mein ek doosre ko kaat rahe the.\nTumne bandaron ki tarah apne daant dikhaye, aur kutton ki tarah chaaplusi ki,\naur ghulamon ki tarah jhuke, Caesar ke pair choomte hue;\njabki woh neech Casca, ek kutte ki tarah, peeche se\nCaesar ki gardan par vaar kiya. Arre O chaaploos logon!' },
        { speaker: 'CASSIUS', lines: 'Chaaploos?—Ab, Brutus, khud ko shukriya kaho.\nYeh zubaan aaj itna apmaan nahi karti,\nagar Cassius ki chalti.' },
        { speaker: 'OCTAVIUS', lines: 'Chalo, chalo, mudde par aao. Agar behas se humein paseena aata hai,\ntoh iska saboot aur laal boondon mein badal jayega.\n(apni talwar nikalta hai) Dekho, main saazishkartaon ke khilaf talwar nikalta hoon.\nTumhe kya lagta hai yeh talwar wapas kab jayegi?\nKabhi nahi, jab tak Caesar ke taintis ghaav\nka aache se badla na le liya jaye, ya jab tak koi doosra Caesar\ngaddaron ki talwar se na maara jaye.' },
        { speaker: 'BRUTUS', lines: 'Caesar, tum gaddaron ke haathon nahi mar sakte\njab tak tum unhe apne saath na lao.' },
        { speaker: 'OCTAVIUS', lines: 'Mujhe bhi yahi ummeed hai.\nMain Brutus ki talwar par marne ke liye paida nahi hua.' },
        { speaker: 'BRUTUS', lines: 'Oh, agar tum apne vansh ke sabse shreshth hote,\nnau-jawan, to tum isse zyada samman se nahi mar sakte the.' },
        { speaker: 'CASSIUS', lines: 'Ek ziddi school ka ladka, aise samman ke laayak nahi,\nek naqaabposh aur ek aish karne wale ke saath jud gaya hai!' },
        { speaker: 'ANTONY', lines: 'Budha Cassius waisa ka waisa hi hai.' },
        { speaker: 'OCTAVIUS', lines: 'Chalo, Antony, chalen.—\nGaddaron, hum tumhare mooh par chunauti phenkte hain.\n agar aaj ladne ki himmat hai, toh maidan mein aao.\nNahi toh, jab tumhara mann kare.' },
        { speaker: 'CASSIUS', lines: 'Kyun, ab, hawa chale, lehar uthe, aur naav taire!\nToofan aa gaya hai aur sab kuch daav par hai.' },
        { speaker: 'BRUTUS', lines: 'Ho, Lucillius, suno, tumse ek baat karni hai.' },
        { speaker: 'LUCILLIUS', lines: 'Mere swami?' },
        { speaker: 'CASSIUS', lines: 'Messala!' },
        { speaker: 'MESSALA', lines: 'Mera senapati kya kehta hai?' },
        { speaker: 'CASSIUS', lines: 'Messala,\naaj mera janamdin hai, theek aaj hi ke din\nCassius paida hua tha. Apna haath do, Messala.\nTum mere gawah bano ki apni ichha ke viruddh,\njaise Pompey tha, mujhe majboor kiya gaya hai ki main\nek hi yuddh par hamari saari aazadiyan daav par laga doon.\nTum jaante ho ki main Epicurus aur uske vicharon ko maanta tha.\nPar ab main apna mann badal raha hoon, aur kuch had tak ashubh sanketon par vishwas karne laga hoon.\nSardis se aate hue, hamare jhande par do bade baaz aa baithe,\naur wahi par hamare sainikon ke haathon se khaane lage, jo hamare saath yahan Philippi tak aaye.\n' +
            'Aaj subah woh udkar chale gaye hain.\n' +
            'Aur unki jagah ab kauve, cheel aur giddh hamare siron par mandra rahe hain\n' +
            'aur humein aise dekh rahe hain jaise hum bimaar shikaar hon. Unki parchhai ek ghatak chandni jaisi lagti hai,\n' +
            'jiske neeche hamari sena leti hai, marne ke liye taiyaar.' },
        { speaker: 'MESSALA', lines: 'Aisa mat maano.' },
        { speaker: 'CASSIUS', lines: 'Main ise bas aadha hi maanta hoon,\nkyunki main josh se bhara hoon aur dridh nishchayi hoon,\nsabhi khatron ka saamna bahut himmat se karne ke liye.' },
        { speaker: 'BRUTUS', lines: 'Theek waisa hi, Lucillius.' },
        { speaker: 'CASSIUS', lines: 'Ab, sabse mahaan Brutus,\naaj devta hum par meherban rahein taaki hum,\nshanti mein premi, apne din budhape tak le ja sakein.\nPar kyunki insaano ke maamle hamesha anishchit rehte hain,\nchalo sabse bure anjaam ke baare mein sochte hain.\nAgar hum yeh yuddh haar jaate hain, toh yeh\naakhiri baar hoga jab hum ek saath baat karenge.\nTab tumne kya karne ka nishchay kiya hai?' },
        { speaker: 'BRUTUS', lines: 'Usi darshan ke niyam se,\njiske dwara maine Cato ko uski maut ke liye doshi thehraya tha\njo usne khud ko di thi (mujhe nahi pata kaise,\npar mujhe yeh kayarta aur neech lagta hai,\nis darr se ki kya ho sakta hai, isliye jeevan ke samay ko rok dena),\nmain dhairya se khud ko sashastra kar raha hoon\nuchch shaktiyon ke vidhan ka intezar karne ke liye,\njo humein neeche shaasit karti hain.' },
        { speaker: 'CASSIUS', lines: 'Toh agar hum yeh yuddh haar jaate hain,\ntoh kya tum Rome ki sadkon par\nvijay juloos mein le jaye jaane se santusht ho?' },
        { speaker: 'BRUTUS', lines: 'Nahi, Cassius, nahi. Yeh mat socho, hey mahaan Roman,\nki Brutus kabhi Rome bandhkar jayega.\nUska mann bahut bada hai. Par aaj hi ke din,\nus kaam ka ant hona chahiye jo March ki 15 tarikh ko shuru hua tha.\nAur kya hum dobara milenge, mujhe nahi pata.\nIsliye hamara antim vidaai le lo.\nHamesha aur hamesha ke liye alvida, Cassius.\nAgar hum dobara milte hain, toh, hum muskuraenge.\nAgar nahi, toh yeh vidaai achhi tarah se hui.' },
        { speaker: 'CASSIUS', lines: 'Hamesha aur hamesha ke liye alvida, Brutus.\nAgar hum dobara milte hain, hum sach mein muskuraenge.\nAgar nahi, toh yeh sach hai ki yeh vidaai achhi tarah se hui.' },
        { speaker: 'BRUTUS', lines: 'Toh phir, aage badho. Oh, kaash koi aadmi jaan paata\nis din ke kaam ka anjaam uske aane se pehle!\nPar itna kaafi hai ki din khatam ho jayega,\naur tab anjaam pata chal jayega.—Chalo, ho! Chalo!' },
    ]
};
const descriptionVersions = {
    Shakespearean: "On the plains of Philippi, the rival armies of Octavius and Antony confront those of Brutus and Cassius. Before the battle, the four generals meet for a parley, which quickly descends into a bitter exchange of accusations and insults, sealing their resolve to fight.",
    'Normal English': "The two armies meet on the battlefield at Philippi. The leaders—Octavius, Antony, Brutus, and Cassius—have a tense conversation before the fight, trading insults and blaming each other. This argument makes it clear that a bloody battle is the only way to settle their differences.",
    Hinglish: "Philippi ke maidan par, Octavius aur Antony ki sena Brutus aur Cassius ki sena se takrati hai. Ladai se pehle, chaaron senapati baat-cheet ke liye milte hain, jo jald hi ek doosre par ilzaam lagane aur apmaan karne mein badal jaati hai, jisse unka ladne ka irada aur pakka ho jaata hai."
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
            marginTop:"50px",
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
                            <h1 style={styles.sceneTitle}>Act V, Scene 1</h1>
                            <p style={styles.sceneSubtitle}>The plains of Philippi</p>
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
                                        const isNoble = ['BRUTUS', 'CASSIUS', 'ANTONY', 'OCTAVIUS'].includes(entry.speaker);
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
                                    <Class9icseEnglishAct5Scene1Summary />
                                  </div>
                                </div>
                              )}
                    
                              {activeTab === "qa" && (
                                <div style={styles.questionSection}>
                                  <Class9icseEnglishAct5Scene1Questions />
                                </div>
                              )}
                </div>
            </main>
        </div>
    );
};

export default App;


