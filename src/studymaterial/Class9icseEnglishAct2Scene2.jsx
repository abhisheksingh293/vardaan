import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct2Scene2Summary from './Class9icseEnglishAct2Scene2Summary';
import Class9icseEnglishAct2Scene2Questions from './Class9icseEnglishAct2Scene2Questions';

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
        { speaker: 'CAESAR', lines: 'Nor heaven nor earth have been at peace tonight.\nThrice hath Calphurnia in her sleep cried out,\n“Help, ho! They murder Caesar!”—Who’s within?' },
        { speaker: 'SERVANT', lines: 'My lord.' },
        { speaker: 'CAESAR', lines: 'Go bid the priests do present sacrifice\nAnd bring me their opinions of success.' },
        { speaker: 'SERVANT', lines: 'I will, my lord.' },
        { speaker: 'CALPHURNIA', lines: 'What mean you, Caesar? Think you to walk forth?\nYou shall not stir out of your house today.' },
        { speaker: 'CAESAR', lines: 'Caesar shall forth. The things that threatened me\nNe\'er looked but on my back. When they shall see\nThe face of Caesar, they are vanishèd.' },
        { speaker: 'CALPHURNIA', lines: 'Caesar, I never stood on ceremonies,\nYet now they fright me. There is one within,\nBesides the things that we have heard and seen,\nRecounts most horrid sights seen by the watch.\nA lioness hath whelpèd in the streets,\nAnd graves have yawned and yielded up their dead.\nFierce fiery warriors fought upon the clouds\nIn ranks and squadrons and right form of war,\nWhich drizzled blood upon the Capitol.\nThe noise of battle hurtled in the air.\nHorses did neigh, and dying men did groan,\nAnd ghosts did shriek and squeal about the streets.\nO Caesar! These things are beyond all use,\nAnd I do fear them.' },
        { speaker: 'CAESAR', lines: 'What can be avoided\nWhose end is purposed by the mighty gods?\nYet Caesar shall go forth, for these predictions\nAre to the world in general as to Caesar.' },
        { speaker: 'CALPHURNIA', lines: 'When beggars die there are no comets seen.\nThe heavens themselves blaze forth the death of princes.' },
        { speaker: 'CAESAR', lines: 'Cowards die many times before their deaths.\nThe valiant never taste of death but once.\nOf all the wonders that I yet have heard,\nIt seems to me most strange that men should fear,\nSeeing that death, a necessary end,\nWill come when it will come.' },
        { speaker: 'SERVANT', lines: 'They would not have you to stir forth today.\nPlucking the entrails of an offering forth,\nThey could not find a heart within the beast.' },
        { speaker: 'CAESAR', lines: 'The gods do this in shame of cowardice.\nCaesar should be a beast without a heart\nIf he should stay at home today for fear.\nNo, Caesar shall not. Danger knows full well\nThat Caesar is more dangerous than he.\nWe are two lions littered in one day,\nAnd I the elder and more terrible.\nAnd Caesar shall go forth.' },
        { speaker: 'CALPHURNIA', lines: 'Alas, my lord,\nYour wisdom is consumed in confidence.\nDo not go forth today. Call it my fear\nThat keeps you in the house, and not your own.\nWe’ll send Mark Antony to the senate house,\nAnd he shall say you are not well today.\n(kneels) Let me, upon my knee, prevail in this.' },
        { speaker: 'CAESAR', lines: 'Mark Antony shall say I am not well,\nAnd for thy humor I will stay at home.\nHere’s Decius Brutus. He shall tell them so.' },
        { speaker: 'DECIUS', lines: 'Caesar, all hail! Good morrow, worthy Caesar.\nI come to fetch you to the senate house.' },
        { speaker: 'CAESAR', lines: 'And you are come in very happy time\nTo bear my greeting to the senators\nAnd tell them that I will not come today.\n“Cannot” is false, and that I dare not, falser.\nI will not come today. Tell them so, Decius.' },
        { speaker: 'CALPHURNIA', lines: 'Say he is sick.' },
        { speaker: 'CAESAR', lines: 'Shall Caesar send a lie?\nHave I in conquest stretched mine arm so far\nTo be afraid to tell graybeards the truth?\nDecius, go tell them Caesar will not come.' },
        { speaker: 'DECIUS', lines: 'Most mighty Caesar, let me know some cause,\nLest I be laughed at when I tell them so.' },
        { speaker: 'CAESAR', lines: 'The cause is in my will. I will not come.\nThat is enough to satisfy the senate.\nBut for your private satisfaction,\nBecause I love you, I will let you know.\nCalphurnia here, my wife, stays me at home.\nShe dreamt tonight she saw my statue,\nWhich, like a fountain with an hundred spouts,\nDid run pure blood. And many lusty Romans\nCame smiling and did bathe their hands in it.\nAnd these does she apply for warnings and portents\nAnd evils imminent, and on her knee\nHath begged that I will stay at home today.' },
        { speaker: 'DECIUS', lines: 'This dream is all amiss interpreted.\nIt was a vision fair and fortunate.\nYour statue spouting blood in many pipes,\nIn which so many smiling Romans bathed,\nSignifies that from you great Rome shall suck\nReviving blood, and that great men shall press\nFor tinctures, stains, relics, and cognizance.\nThis by Calphurnia’s dream is signified.' },
        { speaker: 'CAESAR', lines: 'And this way have you well expounded it.' },
        { speaker: 'DECIUS', lines: 'I have, when you have heard what I can say.\nAnd know it now: the senate have concluded\nTo give this day a crown to mighty Caesar.\nIf you shall send them word you will not come,\nTheir minds may change. Besides, it were a mock\nApt to be rendered for someone to say,\n“Break up the senate till another time\nWhen Caesar’s wife shall meet with better dreams.”\nIf Caesar hide himself, shall they not whisper,\n“Lo, Caesar is afraid”?\nPardon me, Caesar. For my dear, dear love\nTo your proceeding bids me tell you this,\nAnd reason to my love is liable.' },
        { speaker: 'CAESAR', lines: 'How foolish do your fears seem now, Calphurnia!\nI am ashamèd I did yield to them.\nGive me my robe, for I will go.\nAnd look, where Publius is come to fetch me.' },
        { speaker: 'PUBLIUS', lines: 'Good morrow, Caesar.' },
        { speaker: 'CAESAR', lines: 'Welcome, Publius.\n—What, Brutus, are you stirred so early too?\n—Good morrow, Casca.—Caius Ligarius,\nCaesar was ne\'er so much your enemy\nAs that same ague which hath made you lean.\n—What is ’t o\'clock?' },
        { speaker: 'BRUTUS', lines: 'Caesar, ’tis strucken eight.' },
        { speaker: 'CAESAR', lines: 'I thank you for your pains and courtesy.\nSee, Antony, that revels long a-nights,\nIs notwithstanding up.—Good morrow, Antony.' },
        { speaker: 'ANTONY', lines: 'So to most noble Caesar.' },
        { speaker: 'CAESAR', lines: 'Bid them prepare within.\nI am to blame to be thus waited for.\n—Now, Cinna.—Now, Metellus.—What, Trebonius,\nI have an hour’s talk in store for you.\nRemember that you call on me today.\nBe near me, that I may remember you.' },
        { speaker: 'TREBONIUS', lines: 'Caesar, I will.\n(aside) And so near will I be\nThat your best friends shall wish I had been further.' },
        { speaker: 'CAESAR', lines: 'Good friends, go in and taste some wine with me.\nAnd we, like friends, will straightway go together.' },
        { speaker: 'BRUTUS', lines: '(aside) That every “like” is not the same, O Caesar,\nThe heart of Brutus earns to think upon.' }
    ],
    'Normal English': [
        { speaker: 'CAESAR', lines: 'Neither heaven nor earth has been at peace tonight.\nThree times Calphurnia has cried out in her sleep,\n“Help, hey! They’re murdering Caesar!”—Who’s inside?' },
        { speaker: 'SERVANT', lines: 'My lord.' },
        { speaker: 'CAESAR', lines: 'Go tell the priests to perform a sacrifice right now\nAnd bring me their opinions on the outcome.' },
        { speaker: 'SERVANT', lines: 'I will, my lord.' },
        { speaker: 'CALPHURNIA', lines: 'What are you doing, Caesar? Are you thinking of going out?\nYou shall not leave your house today.' },
        { speaker: 'CAESAR', lines: 'Caesar will go. The things that threatened me\nHave never looked at me except from behind. When they see\nThe face of Caesar, they will vanish.' },
        { speaker: 'CALPHURNIA', lines: 'Caesar, I never used to believe in omens,\nBut now they frighten me. There is someone inside,\nBesides the things we have heard and seen,\nWho tells of most horrid sights seen by the night watch.\nA lioness has given birth in the streets,\nAnd graves have opened and given up their dead.\nFierce, fiery warriors fought in the clouds\nIn ranks and squadrons and in proper battle formation,\nWhich drizzled blood upon the Capitol.\nThe noise of battle rushed through the air.\nHorses neighed, and dying men groaned,\nAnd ghosts shrieked and squealed in the streets.\nOh Caesar! These things are beyond all normal experience,\nAnd I am afraid of them.' },
        { speaker: 'CAESAR', lines: 'What can be avoided\nWhose end is determined by the mighty gods?\nYet Caesar will go, because these predictions\nApply to the world in general as much as to Caesar.' },
        { speaker: 'CALPHURNIA', lines: 'When beggars die, no comets are seen.\nThe heavens themselves announce the death of princes.' },
        { speaker: 'CAESAR', lines: 'Cowards die many times before their actual deaths.\nThe brave never taste death but once.\nOf all the wonders that I have ever heard of,\nIt seems most strange to me that men should be afraid,\nSeeing that death, a necessary end,\nWill come when it is destined to come.' },
        { speaker: 'SERVANT', lines: 'They do not want you to go out today.\nPulling the entrails out of an offering,\nThey could not find a heart inside the beast.' },
        { speaker: 'CAESAR', lines: 'The gods do this to shame cowardice.\nCaesar would be a beast without a heart\nIf he were to stay home today out of fear.\nNo, Caesar will not. Danger knows very well\nThat Caesar is more dangerous than he is.\nWe are two lions born on the same day,\nAnd I am the elder and more terrible.\nAnd Caesar will go.' },
        { speaker: 'CALPHURNIA', lines: 'Alas, my lord,\nYour wisdom is being consumed by your confidence.\nDo not go out today. Say that it is my fear\nThat keeps you in the house, and not your own.\nWe’ll send Mark Antony to the senate house,\nAnd he will say you are not well today.\n(kneels) Let me, on my knee, win this argument.' },
        { speaker: 'CAESAR', lines: 'Mark Antony will say I am not well,\nAnd to humor you, I will stay at home.\nHere’s Decius Brutus. He will tell them so.' },
        { speaker: 'DECIUS', lines: 'Caesar, all hail! Good morning, worthy Caesar.\nI have come to escort you to the senate house.' },
        { speaker: 'CAESAR', lines: 'And you have come at a very good time\nTo bring my greetings to the senators\nAnd tell them that I will not come today.\nTo say I "cannot" is false, and to say I "dare not" is even more false.\nI will not come today. Tell them that, Decius.' },
        { speaker: 'CALPHURNIA', lines: 'Say he is sick.' },
        { speaker: 'CAESAR', lines: 'Should Caesar send a lie?\nHave I extended my arm so far in conquest\nOnly to be afraid to tell old men the truth?\nDecius, go tell them Caesar will not come.' },
        { speaker: 'DECIUS', lines: 'Most mighty Caesar, let me know a reason,\nSo I won’t be laughed at when I tell them.' },
        { speaker: 'CAESAR', lines: 'The reason is my will. I will not come.\nThat is enough to satisfy the senate.\nBut for your own private satisfaction,\nBecause I love you, I will let you know.\nCalphurnia here, my wife, is making me stay home.\nShe dreamt tonight she saw my statue,\nWhich, like a fountain with a hundred spouts,\nWas running with pure blood. And many strong Romans\nCame smiling and bathed their hands in it.\nAnd she interprets these as warnings and omens\nOf imminent evils, and on her knee\nHas begged that I stay home today.' },
        { speaker: 'DECIUS', lines: 'This dream has been completely misinterpreted.\nIt was a fair and fortunate vision.\nYour statue spouting blood from many pipes,\nIn which so many smiling Romans bathed,\nSignifies that from you great Rome will drink\nReviving blood, and that great men will press to get\nTinctures, stains, relics, and souvenirs.\nThis is what Calphurnia’s dream signifies.' },
        { speaker: 'CAESAR', lines: 'And you have explained it well in this way.' },
        { speaker: 'DECIUS', lines: 'I have, once you have heard what else I can say.\nAnd know this now: the senate has decided\nTo give a crown to mighty Caesar today.\nIf you send them word that you will not come,\nTheir minds may change. Besides, it would be a mockery\nLikely to be made if someone were to say,\n“Dismiss the senate until another time\nWhen Caesar’s wife has better dreams.”\nIf Caesar hides himself, won’t they whisper,\n“Look, Caesar is afraid”?\nPardon me, Caesar. For my deep, deep love\nFor your advancement makes me tell you this,\nAnd my reason is subject to my love.' },
        { speaker: 'CAESAR', lines: 'How foolish your fears seem now, Calphurnia!\nI am ashamed that I gave in to them.\nGive me my robe, for I will go.\nAnd look, Publius has come to fetch me.' },
        { speaker: 'PUBLIUS', lines: 'Good morning, Caesar.' },
        { speaker: 'CAESAR', lines: 'Welcome, Publius.\n—What, Brutus, are you up so early too?\n—Good morning, Casca.—Caius Ligarius,\nCaesar was never as much your enemy\nAs that fever which has made you thin.\n—What time is it?' },
        { speaker: 'BRUTUS', lines: 'Caesar, it has struck eight.' },
        { speaker: 'CAESAR', lines: 'I thank you for your trouble and courtesy.\nLook, Antony, who parties late into the night,\nIs up nevertheless.—Good morning, Antony.' },
        { speaker: 'ANTONY', lines: 'The same to the most noble Caesar.' },
        { speaker: 'CAESAR', lines: 'Tell them to prepare inside.\nI am to blame for being waited for like this.\n—Now, Cinna.—Now, Metellus.—What, Trebonius,\nI have an hour’s talk planned for you.\nRemember to call on me today.\nStay near me, so that I may remember you.' },
        { speaker: 'TREBONIUS', lines: 'Caesar, I will.\n(aside) And I will be so near\nThat your best friends will wish I had been further away.' },
        { speaker: 'CAESAR', lines: 'Good friends, go inside and have some wine with me.\nAnd we, like friends, will go together right away.' },
        { speaker: 'BRUTUS', lines: '(aside) That every “like” is not the same thing, O Caesar,\nThe heart of Brutus aches to think about.' }
    ],
    Hinglish: [
        { speaker: 'CAESAR', lines: 'Na toh swarg aur na hi dharti aaj raat shaant rahe hain.\nTeen baar Calphurnia neend mein chillayi hai,\n“Madad karo, ho! Woh Caesar ko maar rahe hain!”—Andar kaun hai?' },
        { speaker: 'SERVANT', lines: 'My lord.' },
        { speaker: 'CAESAR', lines: 'Jaao priests (pujariyon) se kaho ki abhi sacrifice (bali) karein\nAur success (safalta) par unki opinions (raay) lekar aao.' },
        { speaker: 'SERVANT', lines: 'Ji, my lord.' },
        { speaker: 'CALPHURNIA', lines: 'Aapka kya matlab hai, Caesar? Kya aap bahar jaane ki soch rahe hain?\nAap aaj apne ghar se bahar kadam nahi rakhenge.' },
        { speaker: 'CAESAR', lines: 'Caesar jayega. Jin cheezon ne mujhe dhamki di\nWoh sirf meri peeth par hi dekhti hain. Jab woh\nCaesar ka chehra dekhengi, toh woh gayab ho jayengi.' },
        { speaker: 'CALPHURNIA', lines: 'Caesar, main kabhi ceremonies (rasmon) par vishwas nahi karti thi,\nLekin ab woh mujhe daraati hain. Andar ek hai,\nUn cheezon ke alawa jo humne suni aur dekhi hain,\nJo watch (pehredaar) dwara dekhe gaye sabse horrid sights (bhayanak drishya) batata hai.\nEk sherni ne galiyon mein bachche diye hain,\nAur kabrein khul gayi hain aur unhone apne murde ugal diye hain.\nFierce fiery warriors (prayogdha yoddha) baadalon par lade\nRanks aur squadrons mein aur yuddh ke sahi roop mein,\nJisse Capitol par khoon ki boondein giri.\nYuddh ka shor hawa mein goonj raha tha.\nGhode hinhina rahe the, aur marte hue aadmi karah rahe the,\nAur bhoot galiyon mein cheekh aur chilla rahe the.\nO Caesar! Yeh cheezein sabhi use (samanya anubhav) se pare hain,\nAur main unse darti hoon.' },
        { speaker: 'CAESAR', lines: 'Kya taala ja sakta hai\nJiska ant mighty gods (shaktishali devtaon) ne tay kiya ho?\nPhir bhi Caesar jayega, kyunki yeh predictions (bhavishyavaniyan)\nDuniya ke liye utni hi aam hain jitni Caesar ke liye.' },
        { speaker: 'CALPHURNIA', lines: 'Jab bhikari marte hain toh koi comets (dhumketu) nahi dikhte.\nSwarg khud shehzadon ki maut ka elaan karta hai.' },
        { speaker: 'CAESAR', lines: 'Cowards (kayar) apni maut se pehle kai baar marte hain.\nValiant (bahadur) kabhi maut ka swaad ek baar se zyada nahi chakhte.\nMaine abhi tak jitne bhi wonders (chamatkar) sune hain,\nUnmein se mujhe sabse ajeeb lagta hai ki aadmi darte hain,\nYeh dekhte hue ki maut, ek zaroori ant,\nJab aani hogi tab aayegi.' },
        { speaker: 'SERVANT', lines: 'Woh nahi chahte ki aap aaj bahar niklein.\nEk offer (prasad) ki entrails (aanten) nikalte waqt,\nUnhe us janwar ke andar dil nahi mila.' },
        { speaker: 'CAESAR', lines: 'Devta yeh cowardice (kayarta) ki sharam mein karte hain.\nCaesar bina dil ka janwar hoga\n agar woh darr se aaj ghar par ruk gaya.\nNahi, Caesar nahi rukega. Danger (khatra) achhi tarah jaanta hai\nKi Caesar usse zyada dangerous hai.\nHum ek hi din paida hue do sher hain,\nAur main bada aur zyada bhayanak hoon.\nAur Caesar bahar jayega.' },
        { speaker: 'CALPHURNIA', lines: 'Afsoos, mere swami,\nAapki wisdom (buddhi) aapke confidence (atmavishwas) mein kho gayi hai.\nAaj bahar mat jaiye. Ise mera darr kahiye\nJo aapko ghar mein rakhta hai, aapka apna nahi.\nHum Mark Antony ko senate house bhej denge,\nAur woh kahega ki aap aaj theek nahi hain.\n(ghutne tekti hai) Mujhe, apne ghutno par, isme jeetne dijiye.' },
        { speaker: 'CAESAR', lines: 'Mark Antony kahega ki main theek nahi hoon,\nAur tumhari khatir main ghar par rahunga.\nYahan Decius Brutus hai. Woh unhe bata dega.' },
        { speaker: 'DECIUS', lines: 'Caesar, all hail! Good morrow, worthy Caesar.\nMain aapko senate house le jaane aaya hoon.' },
        { speaker: 'CAESAR', lines: 'Aur tum bahut sahi samay par aaye ho\nMera greeting (abhivadan) senators tak le jaane ke liye\nAur unhe yeh batane ke liye ki main aaj nahi aaunga.\n“Cannot” (nahi aa sakta) jhoot hai, aur yeh ki main “dare not” (himmat nahi karta), aur bhi jhoot hai.\nMain aaj nahi aaunga. Unhe aisa bata do, Decius.' },
        { speaker: 'CALPHURNIA', lines: 'Kaho ki woh bimar hai.' },
        { speaker: 'CAESAR', lines: 'Kya Caesar jhoot bhejega?\nKya maine conquest (vijay) mein apni baah itni door tak failayi hai\nKi boodhe logon ko sach batane se darun?\nDecius, jaao unhe batao Caesar nahi aayega.' },
        { speaker: 'DECIUS', lines: 'Sabse shaktishali Caesar, mujhe koi kaaran bataiye,\nKahin aisa na ho ki jab main unhe yeh bataun toh mujh par hasa jaaye.' },
        { speaker: 'CAESAR', lines: 'Kaaran meri will (ichha) mein hai. Main nahi aaunga.\nYeh senate ko santusht karne ke liye kaafi hai.\nLekin tumhari private satisfaction (nij santushti) ke liye,\nKyunki main tumse pyaar karta hoon, main tumhe bataunga.\nCalphurnia yahan, meri patni, mujhe ghar par rok rahi hai.\nUsne aaj raat sapna dekha ki usne meri statue (murti) dekhi,\nJo, sau fuwaaron wale ek fountain (fawware) ki tarah,\nShuddh khoon baha rahi thi. Aur kai lusty (swasth) Romans\nMuskurate hue aaye aur usmein apne haath dhoye.\nAur inhein woh warnings aur portents (chetavaniyon aur ashubh sanketon)\nAur evils imminent (aasan buraiyon) ke liye apply (vyakhya) karti hai, aur apne ghutno par\nUsne vinti ki hai ki main aaj ghar par rahun.' },
        { speaker: 'DECIUS', lines: 'Is dream ko bilkul galat interpret (vyakhya) kiya gaya hai.\nYeh ek fair (sundar) aur fortunate (bhagyashali) vision (drishti) tha.\nAapki statue jo kai pipes se khoon baha rahi thi,\nJismein itne saare muskurate hue Romans naha rahe the,\nYeh signify (sanket) karta hai ki aapse mahaan Rome\nReviving blood (punarjivit karne wala khoon) choomega, aur mahaan log\nTinctures, stains, relics, aur cognizance (pehchanचिह्न) ke liye aage badhenge.\nYeh Calphurnia ke dream se signify hota hai.' },
        { speaker: 'CAESAR', lines: 'Aur is tarah tumne ise achhe se expound (vyakhya) kiya hai.' },
        { speaker: 'DECIUS', lines: 'Maine kiya hai, jab aap sun lenge ki main kya keh sakta hoon.\nAur ab yeh jaan lijiye: senate ne conclude (nishkarsh) kiya hai\nKi aaj mahaan Caesar ko ek crown (taaj) diya jayega.\n agar aap unhe yeh sandesh bhejenge ki aap nahi aayenge,\nToh unke mann badal sakte hain. Iske alawa, yeh ek mock (mazaak) hoga\nJo kisi ke kehne par kiya ja sakta hai,\n“Senate ko kisi aur samay tak bhang kar do\nJab Caesar ki patni ke sapne behtar honge.”\n agar Caesar khud ko chhupata hai, toh kya woh fufusaenge nahi,\n“Dekho, Caesar dar gaya hai”?\nMujhe maaf kijiye, Caesar. Kyunki mera gehra, gehra pyaar\nAapke proceeding (pragati) ke liye mujhe yeh kehne par majboor karta hai,\nAur reason (tark) mere pyaar ke adheen hai.' },
        { speaker: 'CAESAR', lines: 'Tumhare darr ab kitne foolish (moorkh) lag rahe hain, Calphurnia!\nMujhe sharam aa rahi hai ki main unke aage jhuk gaya.\nMujhe mera robe (choga) do, kyunki main jaaunga.\nAur dekho, Publius mujhe lene aa gaya hai.' },
        { speaker: 'PUBLIUS', lines: 'Good morrow, Caesar.' },
        { speaker: 'CAESAR', lines: 'Swagat hai, Publius.\n—Kya, Brutus, tum bhi itni jaldi uth gaye?\n—Good morrow, Casca.—Caius Ligarius,\nCaesar kabhi tumhara itna dushman nahi tha\nJitna ki woh ague (bukhar) jisne tumhe patla kar diya hai.\n—Kya baja hai?' },
        { speaker: 'BRUTUS', lines: 'Caesar, aath baj gaye hain.' },
        { speaker: 'CAESAR', lines: 'Tumhari pains (takleef) aur courtesy (shishtata) ke liye dhanyavaad.\nDekho, Antony, jo raaton ko der tak revels (jashn) manata hai,\nPhir bhi uth gaya hai.—Good morrow, Antony.' },
        { speaker: 'ANTONY', lines: 'Aapko bhi, sabse nek Caesar.' },
        { speaker: 'CAESAR', lines: 'Unse kaho ki andar taiyari karein.\nMujhe is tarah intezar karwane ke liye doshi hoon.\n—Ab, Cinna.—Ab, Metellus.—Kya, Trebonius,\nMere paas tumhare liye ek ghante ki baat hai.\nYaad rakhna ki aaj mujhse milna.\nMere paas rehna, taaki main tumhe yaad rakh sakun.' },
        { speaker: 'TREBONIUS', lines: 'Caesar, main rahunga.\n(akele mein) Aur itna paas rahunga\nKi tumhare sabse achhe dost chahenge ki main aur door hota.' },
        { speaker: 'CAESAR', lines: 'Achhe dosto, andar jaao aur mere saath thodi wine (sharab) piyo.\nAur hum, dosto ki tarah, seedhe saath chalenge.' },
        { speaker: 'BRUTUS', lines: '(akele mein) Ki har “like” (jaisa) wahi nahi hota, O Caesar,\nBrutus ka dil yeh soch kar dukhi hota hai.' }
    ]
};
const descriptionVersions = { 
    Shakespearean: "Caesar, spurred by Calphurnia's fearful dreams and many dire portents, is persuaded to stay home from the Senate. However, Decius Brutus arrives and reinterprets the omens favorably, flattering Caesar and warning that the Senate may rescind their offer of a crown. Ashamed, Caesar reverses his decision and prepares to go, greeting the other conspirators who have come to fetch him.",
    'Normal English': "After his wife Calphurnia has nightmares about his murder and reports scary omens, Caesar decides to stay home from the Senate. But Decius Brutus shows up and cleverly twists the meaning of the dreams to be positive. He flatters Caesar and tells him he'll miss being crowned king if he stays away. Feeling foolish, Caesar changes his mind and agrees to go, welcoming the group of conspirators who arrive to walk with him.",
    Hinglish: "Apni wife Calphurnia ke darawne sapno aur ajeeb bad omens ke kaaran, Caesar Senate na jaane ka faisla karta hai. Lekin Decius Brutus aakar un sapno ka matlab positive bata deta hai. Woh Caesar ki tareef karta hai aur kehta hai ki agar woh nahi gaya toh Senate use king banane ka plan cancel kar sakti hai. Apni beizzati mehsoos karke, Caesar apna mann badal leta hai aur jaane ke liye taiyaar ho jaata hai."
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
                        <h1 style={styles.sceneTitle}>Act II, Scene 2</h1>
                            <p style={styles.sceneSubtitle}>Caesar's house</p>
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
                                        const isNoble = ['CAESAR', 'CALPHURNIA', 'DECIUS', 'PUBLIUS', 'BRUTUS', 'ANTONY', 'TREBONIUS'].includes(entry.speaker);
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
                            <Class9icseEnglishAct2Scene2Summary/>
                            </div>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <div >
                            <Class9icseEnglishAct2Scene2Questions/>
                        
                            </div>

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;

