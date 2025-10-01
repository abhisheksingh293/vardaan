import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct1Scene3Summary from './Class9icseEnglishAct1Scene3Summary';
import Class9icseEnglishAct1Scene3Questions from './Class9icseEnglishAct1Scene3Questions';
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
const sceneQuestions = [{ id: 'mcq1', type: 'mcq', question: "1. Why are the commoners not at work?", options: ["It's a public holiday.", "They are celebrating Caesar's triumph.", "They are on strike."], answer: "They are celebrating Caesar's triumph." }, { id: 'mcq2', type: 'mcq', question: "2. What is the Cobbler's witty response to Marullus?", options: ["He says he is a surgeon for old shoes.", "He calls himself a 'mender of bad soles'.", "He claims to be a professional waiter."], answer: "He calls himself a 'mender of bad soles'." }, { id: 'qa1', type: 'qa', question: "1. Why are Flavius and Marullus angry with the commoners at the beginning of the scene?", answer: "Flavius and Marullus are angry because the citizens are celebrating Caesar's triumph over the sons of Pompey, a former Roman hero whom these same citizens once celebrated with equal passion. The tribunes see this as a sign of disloyalty and fickleness." }, { id: 'qa2', type: 'qa', question: "2. What instructions does Flavius give to Marullus at the end of the scene?", answer: "Flavius instructs Marullus to go down the other way towards the Capitol and remove any crowns or decorations placed on Caesar's statues, in an effort to curb the celebration and Caesar's growing popularity." }, { id: 'qa3', type: 'qa', question: "3. How does the Cobbler's use of puns characterize the commoners in this scene?", answer: "The Cobbler's witty puns show that the commoners are not unintelligent or submissive. They are clever, can use language humorously to get the better of their superiors, and possess a spirit of their own, even when being reprimanded by officials like Marullus." },];
const workbookQuestions = [{ id: 'wbq1', question: "Who are Marullus and Flavius? What is their role in Roman society and why are they upset?", answer: "Marullus and Flavius are tribunes of the people in Rome. Their role is to protect the rights and interests of the common citizens (plebeians). They are upset because the same citizens who once loved and supported Pompey are now celebrating his defeater, Julius Caesar. They see this as hypocrisy and a dangerous sign of Caesar's growing, unchecked power, which they fear will lead to tyranny and the loss of Roman liberty." }, { id: 'wbq2', question: "Analyze the use of puns by the Second Commoner (the Cobbler). What does it reveal about his character and the social dynamics of the scene?", answer: "The Cobbler's puns, such as being a 'mender of bad soles' (a play on shoes' soles and human souls), serve multiple purposes. Firstly, it shows his wit and intelligence, challenging the tribunes' assumption that commoners are simple-minded. Secondly, it is a form of passive resistance; he avoids answering Marullus directly, frustrating the official and subtly mocking his authority. This wordplay highlights the class tension between the powerful tribunes and the clever, resilient commoners." }, { id: 'wbq3', question: "What is the 'Feast of Lupercal'? What instruction does Flavius give regarding it?", answer: "The Feast of Lupercal was an ancient Roman festival of purification and fertility, celebrated on February 15th. Flavius instructs the commoners to go home and pray for forgiveness for their ingratitude towards Pompey. He also tells Marullus to help him 'disrobe the images'—that is, to remove the decorations placed on Caesar's statues. His goal is to mute the celebration and remind Caesar that he is just a man, not a god, thereby checking his ambition." }];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'CICERO', lines: 'Good even, Casca. Brought you Caesar home?\nWhy are you breathless? And why stare you so?' },
        { speaker: 'CASCA', lines: 'Are not you moved when all the sway of earth\nShakes like a thing unfirm? O Cicero,\nI have seen tempests when the scolding winds\nHave rived the knotty oaks, and I have seen\nTh\' ambitious ocean swell and rage and foam\nTo be exalted with the threatening clouds,\nBut never till tonight, never till now,\nDid I go through a tempest dropping fire.\nEither there is a civil strife in heaven,\nOr else the world, too saucy with the gods,\nIncenses them to send destruction.' },
        { speaker: 'CICERO', lines: 'Why, saw you anything more wonderful?' },
        { speaker: 'CASCA', lines: 'A common slave—you know him well by sight—\nHeld up his left hand, which did flame and burn\nLike twenty torches joined, and yet his hand,\nNot sensible of fire, remained unscorched.\nBesides—I ha\' not since put up my sword—\nAgainst the Capitol I met a lion,\nWho glared upon me and went surly by,\nWithout annoying me. And there were drawn\nUpon a heap a hundred ghastly women,\nTransformèd with their fear, who swore they saw\nMen all in fire walk up and down the streets.\nAnd yesterday the bird of night did sit\nEven at noon-day upon the marketplace,\nHooting and shrieking. When these prodigies\nDo so conjointly meet, let not men say,\n“These are their reasons. They are natural.”\nFor I believe they are portentous things\nUnto the climate that they point upon.' },
        { speaker: 'CICERO', lines: 'Indeed, it is a strange-disposèd time.\nBut men may construe things after their fashion,\nClean from the purpose of the things themselves.\nComes Caesar to the Capitol tomorrow?' },
        { speaker: 'CASCA', lines: 'He doth, for he did bid Antonius\nSend word to you he would be there tomorrow.' },
        { speaker: 'CICERO', lines: 'Good night then, Casca. This disturbèd sky\nIs not to walk in.' },
        { speaker: 'CASCA', lines: 'Farewell, Cicero.' },
        { speaker: 'CASSIUS', lines: 'Who’s there?' },
        { speaker: 'CASCA', lines: 'A Roman.' },
        { speaker: 'CASSIUS', lines: 'Casca, by your voice.' },
        { speaker: 'CASCA', lines: 'Your ear is good. Cassius, what night is this!' },
        { speaker: 'CASSIUS', lines: 'A very pleasing night to honest men.' },
        { speaker: 'CASCA', lines: 'Who ever knew the heavens menace so?' },
        { speaker: 'CASSIUS', lines: 'Those that have known the earth so full of faults.\nFor my part, I have walked about the streets,\nSubmitting me unto the perilous night,\nAnd, thus unbracèd, Casca, as you see,\nHave bared my bosom to the thunder-stone.\nAnd when the cross blue lightning seemed to open\nThe breast of heaven, I did present myself\nEven in the aim and very flash of it.' },
        { speaker: 'CASCA', lines: 'But wherefore did you so much tempt the heavens?\nIt is the part of men to fear and tremble\nWhen the most mighty gods by tokens send\nSuch dreadful heralds to astonish us.' },
        { speaker: 'CASSIUS', lines: 'You are dull, Casca, and those sparks of life\nThat should be in a Roman you do want,\nOr else you use not. You look pale, and gaze,\nAnd put on fear, and cast yourself in wonder\nTo see the strange impatience of the heavens.\nBut if you would consider the true cause\nWhy all these fires, why all these gliding ghosts,\nWhy birds and beasts from quality and kind,\nWhy old men fool and children calculate,\nWhy all these things change from their ordinance\nTheir natures and preformèd faculties\nTo monstrous quality—why, you shall find\nThat heaven hath infused them with these spirits\nTo make them instruments of fear and warning\nUnto some monstrous state.\nNow could I, Casca, name to thee a man\nMost like this dreadful night,\nThat thunders, lightens, opens graves, and roars\nAs doth the lion in the Capitol—\nA man no mightier than thyself or me\nIn personal action, yet prodigious grown,\nAnd fearful as these strange eruptions are.' },
        { speaker: 'CASCA', lines: '\'Tis Caesar that you mean. Is it not, Cassius?' },
        { speaker: 'CASSIUS', lines: 'Let it be who it is. For Romans now\nHave thews and limbs like to their ancestors,\nBut—woe the while!—our fathers\' minds are dead,\nAnd we are governed with our mothers\' spirits.\nOur yoke and sufferance show us womanish.' },
        { speaker: 'CASCA', lines: 'Indeed, they say the senators tomorrow\nMean to establish Caesar as a king,\nAnd he shall wear his crown by sea and land\nIn every place save here in Italy.' },
        { speaker: 'CASSIUS', lines: 'I know where I will wear this dagger then.\nCassius from bondage will deliver Cassius.\nTherein, ye gods, you make the weak most strong.\nTherein, ye gods, you tyrants do defeat.\nNor stony tower, nor walls of beaten brass,\nNor airless dungeon, nor strong links of iron\nCan be retentive to the strength of spirit.\nBut life, being weary of these worldly bars,\nNever lacks power to dismiss itself.\nIf I know this, know all the world besides,\nThat part of tyranny that I do bear\nI can shake off at pleasure.' },
        { speaker: 'CASCA', lines: 'So can I. So every bondman in his own hand bears\nThe power to cancel his captivity.' },
        { speaker: 'CASSIUS', lines: 'And why should Caesar be a tyrant then?\nPoor man! I know he would not be a wolf\nBut that he sees the Romans are but sheep.\nHe were no lion were not Romans hinds.\nThose that with haste will make a mighty fire\nBegin it with weak straws. What trash is Rome,\nWhat rubbish and what offal, when it serves\nFor the base matter to illuminate\nSo vile a thing as Caesar! But, O grief,\nWhere hast thou led me? I perhaps speak this\nBefore a willing bondman. Then I know\nMy answer must be made. But I am armed,\nAnd dangers are to me indifferent.' },
        { speaker: 'CASCA', lines: 'You speak to Casca, and to such a man\nThat is no fleering telltale. Hold, my hand.\nBe factious for redress of all these griefs,\nAnd I will set this foot of mine as far\nAs who goes farthest.' },
        { speaker: 'CASSIUS', lines: 'There’s a bargain made.\nNow know you, Casca, I have moved already\nSome certain of the noblest-minded Romans\nTo undergo with me an enterprise\nOf honorable-dangerous consequence.\nAnd I do know by this they stay for me\nIn Pompey’s porch. For now, this fearful night,\nThere is no stir or walking in the streets,\nAnd the complexion of the element\nIn favor’s like the work we have in hand,\nMost bloody, fiery, and most terrible.' },
        { speaker: 'CASCA', lines: 'Stand close awhile, for here comes one in haste.' },
        { speaker: 'CASSIUS', lines: '\'Tis Cinna. I do know him by his gait.\nHe is a friend.—Cinna, where haste you so?' },
        { speaker: 'CINNA', lines: 'To find out you. Who’s that? Metellus Cimber?' },
        { speaker: 'CASSIUS', lines: 'No, it is Casca, one incorporate\nTo our attempts. Am I not stayed for, Cinna?' },
        { speaker: 'CINNA', lines: 'I am glad on ’t. What a fearful night is this!\nThere’s two or three of us have seen strange sights.' },
        { speaker: 'CASSIUS', lines: 'Am I not stayed for? Tell me.' },
        { speaker: 'CINNA', lines: 'Yes, you are.\nO Cassius, if you could\nBut win the noble Brutus to our party—' },
        { speaker: 'CASSIUS', lines: 'Be you content. Good Cinna, take this paper,\nAnd look you lay it in the praetor’s chair\nWhere Brutus may but find it. And throw this\nIn at his window. Set this up with wax\nUpon old Brutus\' statue. All this done,\nRepair to Pompey’s porch, where you shall find us.\nIs Decius Brutus and Trebonius there?' },
        { speaker: 'CINNA', lines: 'All but Metellus Cimber, and he’s gone\nTo seek you at your house. Well, I will hie,\nAnd so bestow these papers as you bade me.' },
        { speaker: 'CASSIUS', lines: 'That done, repair to Pompey’s theatre.' },
        { speaker: 'CASSIUS', lines: 'Come, Casca, you and I will yet ere day\nSee Brutus at his house. Three parts of him\nIs ours already, and the man entire\nUpon the next encounter yields him ours.' },
        { speaker: 'CASCA', lines: 'Oh, he sits high in all the people’s hearts,\nAnd that which would appear offense in us,\nHis countenance, like richest alchemy,\nWill change to virtue and to worthiness.' },
        { speaker: 'CASSIUS', lines: 'Him and his worth and our great need of him\nYou have right well conceited. Let us go,\nFor it is after midnight, and ere day\nWe will awake him and be sure of him.' }
    ],
    'Normal English': [
        { speaker: 'CICERO', lines: 'Good evening, Casca. Did you escort Caesar home?\nWhy are you out of breath? And why do you stare like that?' },
        { speaker: 'CASCA', lines: 'Aren\'t you moved when the whole foundation of the earth\nShakes like an unstable thing? Oh, Cicero,\nI have seen storms where the scolding winds\nHave split the gnarled oak trees, and I have seen\nThe ambitious ocean swell and rage and foam\nTo rise up to the threatening clouds,\nBut never until tonight, never until now,\nHave I been through a storm that drops fire.\nEither there is a civil war in heaven,\nOr else the world, too disrespectful to the gods,\nIs angering them into sending destruction.' },
        { speaker: 'CICERO', lines: 'Why, did you see anything more amazing?' },
        { speaker: 'CASCA', lines: 'A common slave—you know him well by sight—\nHeld up his left hand, which flamed and burned\nLike twenty torches joined together, and yet his hand,\nNot feeling the fire, remained unburned.\nBesides—I haven’t put my sword away since—\nNear the Capitol I met a lion,\nWho glared at me and then passed by sullenly,\nWithout bothering me. And there were gathered\nIn a group a hundred ghostly women,\nTransformed by their fear, who swore they saw\nMen made entirely of fire walk up and down the streets.\nAnd yesterday the owl sat\nEven at noon in the marketplace,\nHooting and shrieking. When these strange signs\nHappen all together, don\'t let people say,\n“These are the reasons for them. They are natural.”\nFor I believe they are warning signs\nFor the country they point to.' },
        { speaker: 'CICERO', lines: 'Indeed, it is a strangely disposed time.\nBut people can interpret things in their own way,\nCompletely missing the real purpose of the things themselves.\nIs Caesar coming to the Capitol tomorrow?' },
        { speaker: 'CASCA', lines: 'He is, because he told Antony\nTo send word to you that he would be there tomorrow.' },
        { speaker: 'CICERO', lines: 'Good night then, Casca. This disturbed sky\nIs not one to be walking in.' },
        { speaker: 'CASCA', lines: 'Farewell, Cicero.' },
        { speaker: 'CASSIUS', lines: 'Who’s there?' },
        { speaker: 'CASCA', lines: 'A Roman.' },
        { speaker: 'CASSIUS', lines: 'Casca, I know by your voice.' },
        { speaker: 'CASCA', lines: 'You have a good ear. Cassius, what a night this is!' },
        { speaker: 'CASSIUS', lines: 'A very pleasing night for honest men.' },
        { speaker: 'CASCA', lines: 'Who has ever seen the heavens so threatening?' },
        { speaker: 'CASSIUS', lines: 'Those who have known the earth to be so full of faults.\nFor my part, I have walked about the streets,\nSubmitting myself to the perilous night,\nAnd, without a coat, Casca, as you see,\nHave bared my chest to the thunderbolt.\nAnd when the jagged blue lightning seemed to open\nThe breast of heaven, I presented myself\nRight in its path and in its very flash.' },
        { speaker: 'CASCA', lines: 'But why did you tempt the heavens so much?\nIt is the duty of men to fear and tremble\nWhen the most mighty gods send by signs\nSuch dreadful messengers to astonish us.' },
        { speaker: 'CASSIUS', lines: 'You are slow-witted, Casca, and you lack those sparks of life\nThat should be in a Roman, or else you don\'t use them.\nYou look pale, and you stare,\nAnd you show fear, and you act amazed\nTo see the strange impatience of the heavens.\nBut if you would consider the true reason\nWhy all these fires, why all these gliding ghosts,\nWhy birds and beasts act against their nature,\nWhy old men act like fools and children prophesy,\nWhy all these things change from their natural order,\nTheir natures and their given abilities\nTo something monstrous—why, you will find\nThat heaven has filled them with these spirits\nTo make them instruments of fear and warning\nAbout some monstrous state of affairs.\nNow I could, Casca, name a man to you\nMost like this dreadful night,\nWho thunders, lightens, opens graves, and roars\nAs the lion does in the Capitol—\nA man no mightier than yourself or me\nIn his personal actions, yet has grown enormous,\nAnd is as fearful as these strange eruptions are.' },
        { speaker: 'CASCA', lines: 'You mean Caesar, don\'t you, Cassius?' },
        { speaker: 'CASSIUS', lines: 'Let it be whoever it is. For Romans now\nHave muscles and limbs like their ancestors,\nBut—alas!—our fathers\' minds are dead,\nAnd we are governed with our mothers\' spirits.\nOur submission and suffering show that we are womanish.' },
        { speaker: 'CASCA', lines: 'Indeed, they say the senators tomorrow\nIntend to establish Caesar as a king,\nAnd he shall wear his crown by sea and land\nIn every place except here in Italy.' },
        { speaker: 'CASSIUS', lines: 'I know where I will wear this dagger then.\nCassius will deliver Cassius from slavery.\nIn this, you gods, you make the weak most strong.\nIn this, you gods, you defeat tyrants.\nNeither a stone tower, nor walls of beaten brass,\nNor an airless dungeon, nor strong chains of iron\nCan hold back the strength of the spirit.\nBut life, being tired of these worldly restraints,\nNever lacks the power to dismiss itself.\nIf I know this, let all the world know as well,\nThat the part of tyranny that I bear\nI can shake off whenever I please.' },
        { speaker: 'CASCA', lines: 'So can I. So every slave holds in his own hand\nThe power to cancel his own captivity.' },
        { speaker: 'CASSIUS', lines: 'And why should Caesar be a tyrant then?\nPoor man! I know he would not be a wolf\nExcept that he sees the Romans are only sheep.\nHe would be no lion if the Romans were not deer.\nThose who want to make a mighty fire quickly\nBegin it with weak straws. What trash is Rome,\nWhat rubbish and what garbage, when it serves\nAs the base material to illuminate\nSo vile a thing as Caesar! But, oh, sadness,\nWhere have you led me? I am perhaps speaking this\nBefore a willing slave. Then I know\nI will have to answer for my words. But I am armed,\nAnd dangers are of no concern to me.' },
        { speaker: 'CASCA', lines: 'You are speaking to Casca, and to a man\nThat is no sneering tattletale. Here, take my hand.\nJoin a faction to fix all these grievances,\nAnd I will go as far\nAs whoever goes farthest.' },
        { speaker: 'CASSIUS', lines: 'We have a bargain.\nNow you should know, Casca, I have already persuaded\nSome of the noblest-minded Romans\nTo undertake with me an enterprise\nOf honorable but dangerous consequence.\nAnd I know that by now they are waiting for me\nIn Pompey’s theater entrance. For now, on this fearful night,\nThere is no movement or walking in the streets,\nAnd the appearance of the sky\nIs like the work we have to do:\nMost bloody, fiery, and most terrible.' },
        { speaker: 'CASCA', lines: 'Stand back for a moment, for someone is coming in a hurry.' },
        { speaker: 'CASSIUS', lines: 'It\'s Cinna. I know him by his walk.\nHe is a friend.—Cinna, where are you hurrying to?' },
        { speaker: 'CINNA', lines: 'To find you. Who’s that? Metellus Cimber?' },
        { speaker: 'CASSIUS', lines: 'No, it is Casca, one who is joined\nTo our attempts. Are they not waiting for me, Cinna?' },
        { speaker: 'CINNA', lines: 'I am glad of it. What a fearful night this is!\nTwo or three of us have seen strange sights.' },
        { speaker: 'CASSIUS', lines: 'Are they not waiting for me? Tell me.' },
        { speaker: 'CINNA', lines: 'Yes, they are.\nOh, Cassius, if you could\nOnly win the noble Brutus to our side—' },
        { speaker: 'CASSIUS', lines: 'Don\'t worry. Good Cinna, take this paper,\nAnd make sure you place it in the praetor’s chair\nWhere only Brutus can find it. And throw this one\nIn at his window. And set this one up with wax\nUpon old Brutus\' statue. When all this is done,\nGo to Pompey’s theater entrance, where you will find us.\nAre Decius Brutus and Trebonius there?' },
        { speaker: 'CINNA', lines: 'All but Metellus Cimber, and he has gone\nTo look for you at your house. Well, I will hurry,\nAnd place these papers as you have ordered me.' },
        { speaker: 'CASSIUS', lines: 'Once that is done, go to Pompey’s theatre.' },
        { speaker: 'CASSIUS', lines: 'Come, Casca, you and I will, before daybreak,\nSee Brutus at his house. Three-quarters of him\nIs ours already, and the whole man\nWill be ours at the next encounter.' },
        { speaker: 'CASCA', lines: 'Oh, he is held in high esteem by all the people,\nAnd what would seem like an offense in us,\nHis support, like the richest alchemy,\nWill change to virtue and to worthiness.' },
        { speaker: 'CASSIUS', lines: 'Him and his worth and our great need of him\nYou have understood very well. Let us go,\nFor it is after midnight, and before day\nWe will wake him and make sure he is with us.' }
    ],
    Hinglish: [
        { speaker: 'CICERO', lines: 'Good evening, Casca. Kya tum Caesar ko ghar chhod kar aaye ho?\nTumhari saans kyun phooli hui hai? Aur tum aise kyun ghoor rahe ho?' },
        { speaker: 'CASCA', lines: 'Kya aapko fark nahi padta jab poori dharti\nEk kamzor cheez ki tarah hil rahi hai? O Cicero,\nMaine toofan dekhe hain jab daantne wali hawayein\nKathor baloot ke pedon ko cheer deti hain, aur maine dekha hai\nKi samudra ufan kar, gusse mein aur jhaag ke saath\nBadlon ko dhamki dene ke liye uthta hai,\nLekin aaj raat tak kabhi nahi, abhi tak kabhi nahi,\nMaine aag barsane wale toofan ka anubhav kiya.\nYa toh swarg mein koi civil war chal rahi hai,\nYa phir yeh duniya, devtaon ke saath bahut badtameezi kar rahi hai,\nAur unhe tabahi bhejne ke liye uksa rahi hai.' },
        { speaker: 'CICERO', lines: 'Kyun, kya tumne kuch aur adbhut dekha?' },
        { speaker: 'CASCA', lines: 'Ek aam ghulam—aap use achhi tarah se jaante hain—\nUsne apna baayan haath uthaya, jo aag se jal raha tha\nJaise bees mashaalein ek saath, aur phir bhi uska haath,\nAag ko mehsoos na karte hue, bina jale aagya.\nIske alawa—maine tabse apni talwar nahi rakhi hai—\nCapitol ke saamne mujhe ek sher mila,\nJo mujh par ghoora aur gusse se chala gaya,\nMujhe pareshan kiye bina. Aur wahan ek dher par\nSau bhayanak auratein ikattha thin,\nApne darr se badal gayi, jinhone kasam khayi ki unhone dekha\nKi aag mein liptay hue aadmi galiyon mein ghoom rahe the.\nAur kal raat ka panchi baitha tha\nDopahar mein hi marketplace par,\nHooting aur cheekh raha tha. Jab yeh saare prodigies\nEk saath milte hain, toh logon ko yeh na kehne dein,\n“Yeh unke reasons hain. Yeh natural hai.”\nKyunki mujhe vishwas hai ki yeh portentous cheezein hain\nUs jagah ke liye jahan yeh ishara kar rahe hain.' },
        { speaker: 'CICERO', lines: 'Beshak, yeh ek ajeeb samay hai.\nLekin log cheezon ko apne dhang se samajh sakte hain,\nCheezon ke asli matlab se bilkul alag.\nKya Caesar kal Capitol aa raha hai?' },
        { speaker: 'CASCA', lines: 'Haan, kyunki usne Antonius ko aadesh diya tha\nAapko yeh batane ke liye ki woh kal wahan hoga.' },
        { speaker: 'CICERO', lines: 'Toh theek hai, good night, Casca. Is toofani aasmaan mein\nChalna theek nahi hai.' },
        { speaker: 'CASCA', lines: 'Alvida, Cicero.' },
        { speaker: 'CASSIUS', lines: 'Kaun hai wahan?' },
        { speaker: 'CASCA', lines: 'Ek Roman.' },
        { speaker: 'CASSIUS', lines: 'Casca, tumhari awaaz se lagta hai.' },
        { speaker: 'CASCA', lines: 'Aapke kaan tez hain. Cassius, yeh kaisi raat hai!' },
        { speaker: 'CASSIUS', lines: 'Imaandar logon ke liye ek bahut hi suhavni raat.' },
        { speaker: 'CASCA', lines: 'Aasman ko itna khatarnak kisne dekha hai?' },
        { speaker: 'CASSIUS', lines: 'Jinhone is dharti ko itne doshon se bhara hua jaana hai.\nMain toh, galiyon mein ghoomta raha hoon,\nApne aap ko is khatarnak raat ke hawale karte hue,\nAur, is tarah bina protection ke, Casca, jaisa tum dekh rahe ho,\nApne seene ko toofan ke patthar ke saamne khol diya hai.\nAur jab neeli bijli ne aasmaan ka seena\nKholne ka ehsaas dilaya, toh maine khud ko pesh kiya\nUske nishane aur uski chamak mein hi.' },
        { speaker: 'CASCA', lines: 'Lekin tumne devtaon ko itna kyun uksaya?\nYeh manushyon ka kaam hai ki woh daren aur kaanpen\nJab sabse shaktishaali devta sanketon se\nHamein hairan karne ke liye aise bhayanak sandeshwaahak bhejte hain.' },
        { speaker: 'CASSIUS', lines: 'Tum sust ho, Casca, aur woh zindagi ki chingaariyan\nJo ek Roman mein honi chahiye, woh tum mein nahi hain,\nYa phir tum unka istemaal nahi karte. Tum peele dikh rahe ho, aur ghoor rahe ho,\nAur darr odh liya hai, aur khud ko ashcharya mein daal diya hai\nAasman ki ajeeb bechaini ko dekhkar.\nLekin agar tum asli kaaran par vichaar karo\nKi yeh saari aag kyun, yeh saare behte hue bhoot kyun,\nKyun pakshi aur janwar apne swabhav ke khilaf hain,\nKyun boodhe log moorkhta karte hain aur bachche bhavishyavani karte hain,\nKyun yeh saari cheezein apne niyam se badal gayi hain\nUnke swabhav aur pehle se tay ki gayi shamtaayein\nEk ajeeb gunvatta mein—kyun, tum paoge\nKi swarg ne unmein yeh aatmayein daal di hain\nUnhe darr aur chetavani ka saadhan banane ke liye\nKisi ajeeb rajya ke prati.\nAb main, Casca, tumhe ek aise aadmi ka naam bata sakta hoon\nJo is bhayanak raat jaisa hai,\nJo garajta hai, bijli chamkata hai, kabrein kholta hai, aur dahadta hai\nJaise sher Capitol mein—\nEk aadmi jo tumse ya mujhse zyada shaktishaali nahi hai\nPersonal action mein, phir bhi bahut bada ho gaya hai,\nAur utna hi bhayanak hai jitne yeh ajeeb visfot hain.' },
        { speaker: 'CASCA', lines: 'Tumhara matlab Caesar hai. Hai na, Cassius?' },
        { speaker: 'CASSIUS', lines: 'Jo bhi hai, wahi sahi. Kyunki ab Romans ke paas\nUnke purvajon jaise hi muscles aur limbs hain,\nLekin—afsos!—hamare baap-dada ka dimaag mar chuka hai,\nAur hum apni maaon ki aatmaon se shaasit hain.\nHamara bojh aur dukh hamein auraton jaisa dikhata hai.' },
        { speaker: 'CASCA', lines: 'Haan, woh kehte hain ki kal senators\nCaesar ko raja banane ka plan kar rahe hain,\nAur woh apna taaj samudra aur zameen par pehnega\nHar jagah sivaye yahan Italy mein.' },
        { speaker: 'CASSIUS', lines: 'Mujhe pata hai ki tab main yeh khanjar kahan pehnunga.\nCassius, Cassius ko gulami se azaad karayega.\nIsmein, hey devtaon, tum kamzor ko sabse mazboot banate ho.\nIsmein, hey devtaon, tum zaalimon ko harate ho.\nNa patthar ka tower, na peetal ki deewarein,\nNa havasiz dungeon, na lohe ki mazboot kadiyan\nAatma ki shakti ko rok sakti hain.\nLekin zindagi, in duniyaavi bandishon se thak kar,\nApne aap ko khatam karne ki shakti kabhi nahi khoti.\nAgar main yeh jaanta hoon, toh poori duniya yeh jaan le,\nKi main jo zulm seh raha hoon\nUse main jab chaahe tab utaar sakta hoon.' },
        { speaker: 'CASCA', lines: 'Main bhi kar sakta hoon. Is tarah har ghulam apne haath mein\nApni kaid ko radd karne ki shakti rakhta hai.' },
        { speaker: 'CASSIUS', lines: 'Toh phir Caesar ek zaalim kyun hona chahiye?\nBechara aadmi! Main jaanta hoon woh bhediya nahi banta\nAgar woh yeh na dekhta ki Romans bas bhedein hain.\nWoh sher nahi hota agar Romans hiran na hote.\nJo log jaldi se aag lagana chahte hain\nWoh kamzor tinke se shuru karte hain. Rome kya kachra hai,\nKya kooda aur kya gandagi, jab yeh kaam aata hai\nEk neech cheez ko roshan karne ke liye\nJaise ki Caesar! Lekin, O dukh,\nTumne mujhe kahan la diya? Shayad main yeh\nEk ichhuk ghulam ke saamne bol raha hoon. Toh main jaanta hoon\nMujhe jawab dena padega. Lekin main taiyaar hoon,\nAur khatre mere liye koi mayne nahi rakhte.' },
        { speaker: 'CASCA', lines: 'Tum Casca se baat kar rahe ho, aur ek aise aadmi se\nJo koi mazaak udane wala chugalkhor nahi hai. Lo, mera haath.\nIn sabhi dukhon ke nivaran ke liye ekjut ho jao,\nAur main apna yeh kadam utni hi door rakhunga\nJitni door sabse aage jaane wala rakhta hai.' },
        { speaker: 'CASSIUS', lines: 'Yeh sauda pakka hua.\nAb jaan lo, Casca, maine pehle hi kuch\nSabse nek soch wale Romans ko mana liya hai\nMere saath ek aise kaam mein shaamil hone ke liye\nJo sammanjanak-khatarnak parinaam wala hai.\nAur main jaanta hoon ki is waqt woh mera intezaar kar rahe hain\nPompey ke porch mein. Kyunki ab, is darawni raat mein,\nGaliyon mein koi halchal ya chalna-phirna nahi hai,\nAur mahaul ka rang\nHamare kaam jaisa hi hai,\nBahut khooni, aag wala, aur bahut bhayanak.' },
        { speaker: 'CASCA', lines: 'Thodi der peeche hato, kyunki koi tezi se aa raha hai.' },
        { speaker: 'CASSIUS', lines: 'Yeh Cinna hai. Main use uski chaal se pehchanta hoon.\nWoh ek dost hai.—Cinna, itni jaldi mein kahan ja rahe ho?' },
        { speaker: 'CINNA', lines: 'Tumhe dhoondhne. Woh kaun hai? Metellus Cimber?' },
        { speaker: 'CASSIUS', lines: 'Nahi, yeh Casca hai, hamare prayason mein\nShaamil ek sadasya. Kya mera intezaar nahi ho raha, Cinna?' },
        { speaker: 'CINNA', lines: 'Main is par khush hoon. Yeh kitni darawni raat hai!\nHum mein se do-teen ne ajeeb nazare dekhe hain.' },
        { speaker: 'CASSIUS', lines: 'Kya mera intezaar nahi ho raha? Batao mujhe.' },
        { speaker: 'CINNA', lines: 'Haan, ho raha hai.\nO Cassius, agar tum bas\nMahan Brutus ko hamari party mein shaamil kar sako—' },
        { speaker: 'CASSIUS', lines: 'Tum chinta mat karo. Achhe Cinna, yeh kaagaz lo,\nAur dhyaan se ise praetor ki kursi par rakh do\nJahan Brutus ise dhoond sake. Aur ise\nUski khidki se andar phenk do. Ise mom se\nBoodhe Brutus ki murti par laga do. Yeh sab karne ke baad,\nPompey ke porch par jaana, wahan tum hamein paoge.\nKya Decius Brutus aur Trebonius wahan hain?' },
        { speaker: 'CINNA', lines: 'Sab hain sivaye Metellus Cimber ke, aur woh gaya hai\nTumhe tumhare ghar dhoondhne. Khair, main jaldi karunga,\nAur in kaagazon ko waise hi baant dunga jaise tumne kaha hai.' },
        { speaker: 'CASSIUS', lines: 'Woh karne ke baad, Pompey ke theatre par jaana.' },
        { speaker: 'CASSIUS', lines: 'Chalo, Casca, tum aur main din nikalne se pehle\nBrutus se uske ghar par milenge. Uska teen hissa\nPehle se hi hamara hai, aur poora aadmi\nAgli mulakat par hamara ho jayega.' },
        { speaker: 'CASCA', lines: 'Oh, woh sabhi logon ke dilon mein bahut ooncha baitha hai,\nAur jo hamare liye apmaanजनक lagega,\nUska samarthan, sabse ameer alchemy ki tarah,\nUse sadgun aur yogyata mein badal dega.' },
        { speaker: 'CASSIUS', lines: 'Use aur uski keemat aur uski hamein zaroorat ko\nTumne bilkul theek samjha hai. Chalo,\nKyunki aadhe raat se zyada ho chuki hai, aur din nikalne se pehle\nHum use jagayenge aur use apne saath mila lenge.' }
    ]
};
const descriptionVersions = { 
    Shakespearean: "On a stormy night filled with supernatural omens, Cassius meets Casca and interprets the chaotic weather as a sign from the heavens against Caesar's rise to power. He reveals a growing conspiracy and enlists a frightened Casca into the plot, before dispatching Cinna to leave anonymous letters that will manipulate the honorable Brutus into joining them.",
    'Normal English': "On a stormy night full of strange signs, Cassius finds Casca and claims the wild weather is a divine protest against Caesar becoming too powerful. He tells Casca about a conspiracy he is building and convinces him to join. He then gives another conspirator, Cinna, fake letters to plant for Brutus, hoping to trick the noble Roman into joining their cause.",
    Hinglish: "Ek toofani raat mein, jab ajeeb-o-gareeb ghatnayein ho rahi hain, Cassius Casca se milta hai aur kehta hai ki yeh toofan devtaon ka Caesar ke khilaaf ek ishara hai. Woh Casca ko apni conspiracy ke baare mein batata hai aur use shaamil kar leta hai. Phir woh Cinna ko kuch farzi letters deta hai taaki woh unhe Brutus ke paas chhod aaye, jisse Brutus dhoke se unke saath shaamil ho jaaye."
};

// Main App Component
const App = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [ setAnswersVisible] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState({});
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
        questionSection: { marginTop: '1rem', backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.xl, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)', },
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
                        <h1 style={styles.sceneTitle}>Act I, Scene 3</h1>
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
                                        const isNoble = ['CICERO', 'CASSIUS', 'CASCA', 'CINNA'].includes(entry.speaker);
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
                            <Class9icseEnglishAct1Scene3Summary/>
                            </div>
                        </div>
                    )}

                    {activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <Class9icseEnglishAct1Scene3Questions/>

                        

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;

