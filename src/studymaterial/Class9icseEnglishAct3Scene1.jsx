import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct3Scene1Summary from './Class9icseEnglishAct3Scene1Summary';
import Class9icseEnglishAct3Scene1Questions from './Class9icseEnglishAct3Scene1Questions';
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
const galleryImages = ["https://placehold.co/400x400/8B0000/FFFFFF?text=The+Assassination", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Et+Tu,+Brute", "https://placehold.co/400x400/DAA520/FFFFFF?text=Antony's+Grief", "https://placehold.co/400x400/3B3B3B/FFFFFF?text=Roman+Capitol"];
const importantWords = [{ term: "Ides of March", definition: "The 15th of March, a date famous for Caesar's assassination." }, { term: "Constant as the northern star", definition: "Unwavering, fixed in purpose. Caesar uses this to describe his own resolve." }, { term: "Et tu, Bruté?", definition: "Latin for 'And you, Brutus?'. Caesar's last words, expressing his shock at being betrayed by his friend." }, { term: "Pulpits", definition: "The public speaking platforms in the Roman Forum." }, { term: "Enfranchisement", definition: "Restoration of rights and citizenship; freedom." }, { term: "Cry 'Havoc!' and let slip the dogs of war", definition: "A military signal to begin slaughter and chaos. Antony vows to unleash this on Rome." },];
const sceneQuestions = [{ id: 'mcq1', type: 'mcq', question: "1. What reason does Caesar give for not reading Artemidorus's letter first?", options: ["He dislikes Artemidorus.", "He says what concerns himself, he will deal with last.", "Decius's letter is more important."], answer: "He says what concerns himself, he will deal with last." }, { id: 'mcq2', type: 'mcq', question: "2. What are Caesar's final words before he dies?", options: ["'Liberty! Freedom! Tyranny is dead!'", "'I am constant as the northern star.'", "'Et tu, Bruté?—Then fall, Caesar.'"], answer: "'Et tu, Bruté?—Then fall, Caesar.'" }, { id: 'qa1', type: 'qa', question: "1. What is Metellus Cimber's 'suit' to Caesar, and how is it used by the conspirators?", answer: "Metellus Cimber begs Caesar to repeal the banishment of his brother, Publius Cimber. This is a pretense; the conspirators use this moment to gather close to Caesar, kneel before him as if in support, and then draw their weapons to attack." }, { id: 'qa2', type: 'qa', question: "2. What does Cassius fear when Popillius speaks to Caesar?", answer: "Cassius fears that their assassination plot has been discovered. Popillius wishes their 'enterprise' well and then immediately approaches Caesar, leading Cassius to believe he is about to expose them. Brutus calms him by noting that Caesar's expression does not change." }, { id: 'qa3', type: 'qa', question: "3. What is Brutus's reasoning for allowing Antony to speak at Caesar's funeral?", answer: "Brutus believes it will show that the conspirators are honorable. He plans to speak first to explain their reasons, and he makes Antony agree not to blame them. Brutus thinks that allowing Caesar proper rites will make their actions seem more justified to the public, underestimating Antony's power of persuasion." },];
const workbookQuestions = [{ id: 'wbq1', question: "Analyze Caesar's character in his final moments. How does his language and behavior contribute to the justification (or condemnation) of his assassination?", answer: "In his final moments, Caesar is portrayed as arrogant and unyielding. He compares himself to the 'northern star,' declaring himself unshakable and superior to other men. This hubris, where he dismisses pleas and refers to himself in the third person, plays directly into the conspirators' narrative that he is a tyrant who sees himself as a god. While it highlights his strength, it also provides a justification for their belief that his ambition had to be stopped for the good of Rome." }, { id: 'wbq2', question: "Discuss the dramatic and thematic significance of the conspirators bathing their hands in Caesar's blood.", answer: "This is a powerful, ritualistic act. By washing their hands in his blood, they are not hiding from the deed but claiming it as a noble sacrifice for Roman liberty. Brutus reframes the assassination as a cleansing act. Thematically, it symbolizes their shared guilt and bonds them together. Dramatically, it creates a shocking visual that Mark Antony will later use masterfully in his speech to turn the citizens against them, transforming their 'badge of honor' into a symbol of butchery." }, { id: 'wbq3', question: "Examine the first interaction between Antony and the conspirators after the assassination. How does Antony use language and action to navigate this dangerous situation?", answer: "Antony's approach is a masterclass in political maneuvering. He first offers his own life, showing he is not afraid while also making them feel magnanimous for sparing him. He then shakes each of their bloody hands, a gesture that appears to be one of reconciliation but also serves to mark each man as a murderer. His speech is filled with double meanings, praising both Caesar and Brutus. He successfully plays the part of a grieving but reasonable friend, which lulls Brutus into a false sense of security and grants him the crucial opportunity to speak at the funeral, where his true intentions will be revealed." }];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'CAESAR', lines: '(to the SOOTHSAYER) The ides of March are come.' },
        { speaker: 'SOOTHSAYER', lines: 'Ay, Caesar, but not gone.' },
        { speaker: 'ARTEMIDORUS', lines: '(offering his letter) Hail, Caesar! Read this schedule.' },
        { speaker: 'DECIUS', lines: '(offering CAESAR another paper) Trebonius doth desire you to o\'er-read,\nAt your best leisure, this his humble suit.' },
        { speaker: 'ARTEMIDORUS', lines: 'O Caesar, read mine first, for mine’s a suit\nThat touches Caesar nearer. Read it, great Caesar.' },
        { speaker: 'CAESAR', lines: 'What touches us ourself shall be last served.' },
        { speaker: 'ARTEMIDORUS', lines: 'Delay not, Caesar. Read it instantly.' },
        { speaker: 'CAESAR', lines: 'What, is the fellow mad?' },
        { speaker: 'PUBLIUS', lines: '(to ARTEMIDORUS) Sirrah, give place.' },
        { speaker: 'CASSIUS', lines: '(to ARTEMIDORUS) What, urge you your petitions in the street?\nCome to the Capitol.' },
        { speaker: 'POPILLIUS', lines: '(to CASSIUS) I wish your enterprise today may thrive.' },
        { speaker: 'CASSIUS', lines: 'What enterprise, Popillius?' },
        { speaker: 'POPILLIUS', lines: 'Fare you well. (approaches CAESAR)' },
        { speaker: 'BRUTUS', lines: '(to CASSIUS) What said Popillius Lena?' },
        { speaker: 'CASSIUS', lines: '(aside to BRUTUS) He wished today our enterprise might thrive.\nI fear our purpose is discoverèd.' },
        { speaker: 'BRUTUS', lines: 'Look how he makes to Caesar. Mark him.' },
        { speaker: 'CASSIUS', lines: 'Casca, be sudden, for we fear prevention—\nBrutus, what shall be done? If this be known,\nCassius or Caesar never shall turn back,\nFor I will slay myself.' },
        { speaker: 'BRUTUS', lines: 'Cassius, be constant.\nPopillius Lena speaks not of our purposes.\nFor, look, he smiles, and Caesar doth not change.' },
        { speaker: 'CASSIUS', lines: 'Trebonius knows his time. For, look you, Brutus.\nHe draws Mark Antony out of the way.' },
        { speaker: 'DECIUS', lines: 'Where is Metellus Cimber? Let him go\nAnd presently prefer his suit to Caesar.' },
        { speaker: 'BRUTUS', lines: 'He is addressed. Press near and second him.' },
        { speaker: 'CINNA', lines: 'Casca, you are the first that rears your hand.' },
        { speaker: 'CAESAR', lines: 'Are we all ready? What is now amiss\nThat Caesar and his senate must redress?' },
        { speaker: 'METELLUS', lines: '(kneeling) Most high, most mighty, and most puissant Caesar,\nMetellus Cimber throws before thy seat\nAn humble heart—' },
        { speaker: 'CAESAR', lines: 'I must prevent thee, Cimber.\nThese couchings and these lowly courtesies\nMight fire the blood of ordinary men\nAnd turn preordinance and first decree\nInto the law of children. Be not fond,\nTo think that Caesar bears such rebel blood\nThat will be thawed from the true quality\nWith that which melteth fools—I mean, sweet words,\nLow-crookèd curtsies, and base spaniel fawning.\nThy brother by decree is banishèd.\nIf thou dost bend and pray and fawn for him,\nI spurn thee like a cur out of my way.\nKnow, Caesar doth not wrong, nor without cause\nWill he be satisfied.' },
        { speaker: 'METELLUS', lines: 'Is there no voice more worthy than my own\nTo sound more sweetly in great Caesar’s ear\nFor the repealing of my banished brother?' },
        { speaker: 'BRUTUS', lines: '(kneeling) I kiss thy hand, but not in flattery, Caesar,\nDesiring thee that Publius Cimber may\nHave an immediate freedom of repeal.' },
        { speaker: 'CAESAR', lines: 'What, Brutus?' },
        { speaker: 'CASSIUS', lines: '(kneeling) Pardon, Caesar. Caesar, pardon.\nAs low as to thy foot doth Cassius fall\nTo beg enfranchisement for Publius Cimber.' },
        { speaker: 'CAESAR', lines: 'I could be well moved if I were as you.\nIf I could pray to move, prayers would move me.\nBut I am constant as the northern star,\nOf whose true-fixed and resting quality\nThere is no fellow in the firmament.\nThe skies are painted with unnumbered sparks.\nThey are all fire and every one doth shine,\nBut there’s but one in all doth hold his place.\nSo in the world. \'Tis furnished well with men,\nAnd men are flesh and blood, and apprehensive,\nYet in the number I do know but one\nThat unassailable holds on his rank,\nUnshaked of motion. And that I am he\nLet me a little show it even in this:\nThat I was constant Cimber should be banished,\nAnd constant do remain to keep him so.' },
        { speaker: 'CINNA', lines: '(kneeling) O Caesar—' },
        { speaker: 'CAESAR', lines: 'Hence! Wilt thou lift up Olympus?' },
        { speaker: 'DECIUS', lines: '(kneeling) Great Caesar—' },
        { speaker: 'CAESAR', lines: 'Doth not Brutus bootless kneel?' },
        { speaker: 'CASCA', lines: 'Speak, hands, for me!' },
        { speaker: 'CAESAR', lines: 'Et tu, Bruté?—Then fall, Caesar. (dies)' },
        { speaker: 'CINNA', lines: 'Liberty! Freedom! Tyranny is dead!\nRun hence, proclaim, cry it about the streets.' },
        { speaker: 'CASSIUS', lines: 'Some to the common pulpits, and cry out,\n“Liberty, freedom, and enfranchisement!”' },
        { speaker: 'BRUTUS', lines: 'People and senators, be not affrighted.\nFly not. Stand still. Ambition’s debt is paid.' },
        { speaker: 'CASCA', lines: 'Go to the pulpit, Brutus.' },
        { speaker: 'DECIUS', lines: 'And Cassius too.' },
        { speaker: 'BRUTUS', lines: 'Where’s Publius?' },
        { speaker: 'CINNA', lines: 'Here, quite confounded with this mutiny.' },
        { speaker: 'METELLUS', lines: 'Stand fast together, lest some friend of Caesar’s\nShould chance—' },
        { speaker: 'BRUTUS', lines: 'Talk not of standing.—Publius, good cheer.\nThere is no harm intended to your person,\nNor to no Roman else. So tell them, Publius.' },
        { speaker: 'CASSIUS', lines: 'And leave us, Publius, lest that the people,\nRushing on us, should do your age some mischief.' },
        { speaker: 'BRUTUS', lines: 'Do so. And let no man abide this deed\nBut we the doers.' },
        { speaker: 'CASSIUS', lines: 'Where is Antony?' },
        { speaker: 'TREBONIUS', lines: 'Fled to his house amazed.\nMen, wives, and children stare, cry out, and run\nAs it were doomsday.' },
        { speaker: 'BRUTUS', lines: 'Fates, we will know your pleasures.\nThat we shall die, we know. \'Tis but the time,\nAnd drawing days out, that men stand upon.' },
        { speaker: 'CASSIUS', lines: 'Why, he that cuts off twenty years of life\nCuts off so many years of fearing death.' },
        { speaker: 'BRUTUS', lines: 'Grant that, and then is death a benefit.\nSo are we Caesar’s friends, that have abridged\nHis time of fearing death. Stoop, Romans, stoop,\nAnd let us bathe our hands in Caesar’s blood\nUp to the elbows, and besmear our swords.\nThen walk we forth, even to the marketplace,\nAnd waving our red weapons o\'er our heads\nLet’s all cry, “Peace, freedom, and liberty!”' },
        { speaker: 'CASSIUS', lines: 'Stoop, then, and wash. How many ages hence\nShall this our lofty scene be acted over\nIn states unborn and accents yet unknown!' },
        { speaker: 'BRUTUS', lines: 'How many times shall Caesar bleed in sport,\nThat now on Pompey’s basis lies along\nNo worthier than the dust!' },
        { speaker: 'CASSIUS', lines: 'So oft as that shall be,\nSo often shall the knot of us be called\n“The men that gave their country liberty.”' },
        { speaker: 'DECIUS', lines: 'What, shall we forth?' },
        { speaker: 'CASSIUS', lines: 'Ay, every man away.\nBrutus shall lead, and we will grace his heels\nWith the most boldest and best hearts of Rome.' },
        { speaker: 'BRUTUS', lines: 'Soft! Who comes here? A friend of Antony’s.' },
        { speaker: 'ANTONY\'S SERVANT', lines: '(kneeling) Thus, Brutus, did my master bid me kneel.\n(falls prostrate) Thus did Mark Antony bid me fall down,\nAnd, being prostrate, thus he bade me say:\nBrutus is noble, wise, valiant, and honest.\nCaesar was mighty, bold, royal, and loving.\nSay I love Brutus, and I honor him.\nSay I feared Caesar, honored him, and loved him.\nIf Brutus will vouchsafe that Antony\nMay safely come to him and be resolved\nHow Caesar hath deserved to lie in death,\nMark Antony shall not love Caesar dead\nSo well as Brutus living, but will follow\nThe fortunes and affairs of noble Brutus\nThorough the hazards of this untrod state\nWith all true faith. So says my master Antony.' },
        { speaker: 'BRUTUS', lines: 'Thy master is a wise and valiant Roman.\nI never thought him worse.\nTell him, so please him come unto this place,\nHe shall be satisfied and, by my honor,\nDepart untouched.' },
        { speaker: 'ANTONY\'S SERVANT', lines: '(rising) I’ll fetch him presently.' },
        { speaker: 'BRUTUS', lines: 'I know that we shall have him well to friend.' },
        { speaker: 'CASSIUS', lines: 'I wish we may. But yet have I a mind\nThat fears him much, and my misgiving still\nFalls shrewdly to the purpose.' },
        { speaker: 'BRUTUS', lines: 'But here comes Antony.—Welcome, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'O mighty Caesar! Dost thou lie so low?\nAre all thy conquests, glories, triumphs, spoils,\nShrunk to this little measure? Fare thee well.\n—I know not, gentlemen, what you intend,\nWho else must be let blood, who else is rank.\nIf I myself, there is no hour so fit\nAs Caesar’s death’s hour, nor no instrument\nOf half that worth as those your swords, made rich\nWith the most noble blood of all this world.\nI do beseech ye, if you bear me hard,\nNow, whilst your purpled hands do reek and smoke,\nFulfill your pleasure. Live a thousand years,\nI shall not find myself so apt to die.\nNo place will please me so, no mean of death,\nAs here by Caesar, and by you cut off,\nThe choice and master spirits of this age.' },
        { speaker: 'BRUTUS', lines: 'O Antony, beg not your death of us.\nThough now we must appear bloody and cruel—\nAs by our hands and this our present act\nYou see we do—yet see you but our hands\nAnd this the bleeding business they have done.\nOur hearts you see not. They are pitiful.\nAnd pity to the general wrong of Rome—\nAs fire drives out fire, so pity pity—\nHath done this deed on Caesar. For your part,\nTo you our swords have leaden points, Mark Antony.\nOur arms in strength of malice and our hearts\nOf brothers\' temper do receive you in\nWith all kind love, good thoughts, and reverence.' },
        { speaker: 'CASSIUS', lines: 'Your voice shall be as strong as any man’s\nIn the disposing of new dignities.' },
        { speaker: 'BRUTUS', lines: 'Only be patient till we have appeased\nThe multitude, beside themselves with fear,\nAnd then we will deliver you the cause,\nWhy I, that did love Caesar when I struck him,\nHave thus proceeded.' },
        { speaker: 'ANTONY', lines: 'I doubt not of your wisdom.\nLet each man render me his bloody hand.\n(shakes hands with the conspirators) First, Marcus Brutus, will I shake with you.\n—Next, Caius Cassius, do I take your hand.\n—Now, Decius Brutus, yours.—Now yours, Metellus.\n—Yours, Cinna.—And, my valiant Casca, yours.\n—Though last, not last in love, yours, good Trebonius.\n—Gentlemen all, alas, what shall I say?\nMy credit now stands on such slippery ground\nThat one of two bad ways you must conceit me,\nEither a coward or a flatterer\n—That I did love thee, Caesar, O, ’tis true.\nIf then thy spirit look upon us now,\nShall it not grieve thee dearer than thy death\nTo see thy Antony making his peace,\nShaking the bloody fingers of thy foes—\nMost noble!—in the presence of thy corse?\nHad I as many eyes as thou hast wounds,\nWeeping as fast as they stream forth thy blood,\nIt would become me better than to close\nIn terms of friendship with thine enemies.\nPardon me, Julius! Here wast thou bayed, brave hart;\nHere didst thou fall; and here thy hunters stand,\nSigned in thy spoil, and crimsoned in thy lethe.\nO world, thou wast the forest to this hart,\nAnd this indeed, O world, the heart of thee.\nHow like a deer, strucken by many princes,\nDost thou here lie!' },
        { speaker: 'CASSIUS', lines: 'Mark Antony—' },
        { speaker: 'ANTONY', lines: 'Pardon me, Caius Cassius.\nThe enemies of Caesar shall say this;\nThen, in a friend, it is cold modesty.' },
        { speaker: 'CASSIUS', lines: 'I blame you not for praising Caesar so.\nBut what compact mean you to have with us?\nWill you be pricked in number of our friends?\nOr shall we on, and not depend on you?' },
        { speaker: 'ANTONY', lines: 'Therefore I took your hands, but was indeed\nSwayed from the point by looking down on Caesar.\nFriends am I with you all and love you all\nUpon this hope: that you shall give me reasons\nWhy and wherein Caesar was dangerous.' },
        { speaker: 'BRUTUS', lines: 'Or else were this a savage spectacle!\nOur reasons are so full of good regard\nThat were you, Antony, the son of Caesar,\nYou should be satisfied.' },
        { speaker: 'ANTONY', lines: 'That’s all I seek.\nAnd am moreover suitor that I may\nProduce his body to the marketplace,\nAnd in the pulpit, as becomes a friend,\nSpeak in the order of his funeral.' },
        { speaker: 'BRUTUS', lines: 'You shall, Mark Antony.' },
        { speaker: 'CASSIUS', lines: '(aside to BRUTUS) You know not what you do. Do not consent\nThat Antony speak in his funeral.\nKnow you how much the people may be moved\nBy that which he will utter?' },
        { speaker: 'BRUTUS', lines: '(aside to CASSIUS) By your pardon.\nI will myself into the pulpit first,\nAnd show the reason of our Caesar’s death.\nWhat Antony shall speak, I will protest,\nHe speaks by leave and by permission,\nAnd that we are contented Caesar shall\nHave all true rites and lawful ceremonies.\nIt shall advantage more than do us wrong.' },
        { speaker: 'CASSIUS', lines: '(aside to BRUTUS) I know not what may fall. I like it not.' },
        { speaker: 'BRUTUS', lines: 'Mark Antony, here, take you Caesar’s body.\nYou shall not in your funeral speech blame us,\nBut speak all good you can devise of Caesar,\nAnd say you do ’t by our permission.\nElse shall you not have any hand at all\nAbout his funeral. And you shall speak\nIn the same pulpit whereto I am going,\nAfter my speech is ended.' },
        { speaker: 'ANTONY', lines: 'Be it so.\nI do desire no more.' },
        { speaker: 'BRUTUS', lines: 'Prepare the body then, and follow us.' },
        { speaker: 'ANTONY', lines: 'O, pardon me, thou bleeding piece of earth,\nThat I am meek and gentle with these butchers!\nThou art the ruins of the noblest man\nThat ever livèd in the tide of times.\nWoe to the hand that shed this costly blood!\nOver thy wounds now do I prophesy—\nWhich, like dumb mouths, do ope their ruby lips\nTo beg the voice and utterance of my tongue—\nA curse shall light upon the limbs of men.\nDomestic fury and fierce civil strife\nShall cumber all the parts of Italy.\nBlood and destruction shall be so in use,\nAnd dreadful objects so familiar,\nThat mothers shall but smile when they behold\nTheir infants quartered with the hands of war,\nAll pity choked with custom of fell deeds,\nAnd Caesar’s spirit, ranging for revenge,\nWith Ate by his side come hot from hell,\nShall in these confines with a monarch’s voice\nCry “Havoc!” and let slip the dogs of war,\nThat this foul deed shall smell above the earth\nWith carrion men, groaning for burial.' },
        { speaker: 'ANTONY', lines: 'You serve Octavius Caesar, do you not?' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'I do, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'Caesar did write for him to come to Rome.' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'He did receive his letters and is coming.\nAnd bid me say to you by word of mouth—\n(sees CAESAR’s body) O Caesar!—' },
        { speaker: 'ANTONY', lines: 'Thy heart is big. Get thee apart and weep.\nPassion, I see, is catching, for mine eyes,\nSeeing those beads of sorrow stand in thine,\nBegan to water. Is thy master coming?' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'He lies tonight within seven leagues of Rome.' },
        { speaker: 'ANTONY', lines: 'Post back with speed, and tell him what hath chanced.\nHere is a mourning Rome, a dangerous Rome,\nNo Rome of safety for Octavius yet.\nHie hence, and tell him so.—Yet, stay awhile.\nThou shalt not back till I have borne this corse\nInto the marketplace. There shall I try,\nIn my oration, how the people take\nThe cruèl issue of these bloody men.\nAccording to the which, thou shalt discourse\nTo young Octavius of the state of things.\nLend me your hand.' },
    ],
    'Normal English': [
        { speaker: 'CAESAR', lines: '(to the SOOTHSAYER) The fifteenth of March has come.' },
        { speaker: 'SOOTHSAYER', lines: 'Yes, Caesar, but it has not gone.' },
        { speaker: 'ARTEMIDORUS', lines: '(offering his letter) Greetings, Caesar! Read this document.' },
        { speaker: 'DECIUS', lines: '(offering CAESAR another paper) Trebonius wants you to read his humble request at your convenience.' },
        { speaker: 'ARTEMIDORUS', lines: 'O Caesar, read mine first, because mine is a request that concerns Caesar more closely. Read it, great Caesar.' },
        { speaker: 'CAESAR', lines: 'Anything that concerns me personally, I will deal with last.' },
        { speaker: 'ARTEMIDORUS', lines: 'Do not delay, Caesar. Read it right now.' },
        { speaker: 'CAESAR', lines: 'What, is this man insane?' },
        { speaker: 'PUBLIUS', lines: '(to ARTEMIDORUS) You, fellow, get out of the way.' },
        { speaker: 'CASSIUS', lines: '(to ARTEMIDORUS) What, are you pushing your petitions in the street? Come to the Capitol.' },
        { speaker: 'POPILLIUS', lines: '(to CASSIUS) I hope your undertaking succeeds today.' },
        { speaker: 'CASSIUS', lines: 'What undertaking, Popillius?' },
        { speaker: 'POPILLIUS', lines: 'Farewell. (approaches CAESAR)' },
        { speaker: 'BRUTUS', lines: '(to CASSIUS) What did Popillius Lena say?' },
        { speaker: 'CASSIUS', lines: '(aside to BRUTUS) He said he hoped our undertaking would succeed today. I am afraid our plan has been discovered.' },
        { speaker: 'BRUTUS', lines: 'Look how he is approaching Caesar. Watch him.' },
        { speaker: 'CASSIUS', lines: 'Casca, be quick, because we fear being stopped—Brutus, what should we do? If this is known, either Cassius or Caesar will not leave this place alive, for I will kill myself.' },
        { speaker: 'BRUTUS', lines: 'Cassius, be calm. Popillius Lena isn\'t talking about our plans. Look, he is smiling, and Caesar\'s expression hasn\'t changed.' },
        { speaker: 'CASSIUS', lines: 'Trebonius knows his cue. Look, Brutus. He is drawing Mark Antony out of the way.' },
        { speaker: 'DECIUS', lines: 'Where is Metellus Cimber? Let him go and present his request to Caesar now.' },
        { speaker: 'BRUTUS', lines: 'He is ready. Move in and support him.' },
        { speaker: 'CINNA', lines: 'Casca, you are the first to raise your hand.' },
        { speaker: 'CAESAR', lines: 'Are we all ready? What is wrong now that Caesar and his senate must correct?' },
        { speaker: 'METELLUS', lines: '(kneeling) Most high, most mighty, and most powerful Caesar, Metellus Cimber lays a humble heart before your seat—' },
        { speaker: 'CAESAR', lines: 'I must stop you, Cimber. This bowing and scraping might stir the emotions of ordinary men and turn established law into the rules of children. Don\'t be foolish enough to think that Caesar has such rebellious blood that he will be swayed from his true resolve by things that melt fools—I mean, sweet words, low bows, and pathetic, dog-like fawning. Your brother is banished by law. If you bow and pray and flatter for him, I will kick you out of my way like a dog. Know this: Caesar does no wrong, nor will he be satisfied without good reason.' },
        { speaker: 'METELLUS', lines: 'Is there no voice more worthy than my own to sound more sweetly in great Caesar’s ear for the pardoning of my banished brother?' },
        { speaker: 'BRUTUS', lines: '(kneeling) I kiss your hand, Caesar, but not with flattery, asking that Publius Cimber may have his banishment immediately overturned.' },
        { speaker: 'CAESAR', lines: 'What, Brutus?' },
        { speaker: 'CASSIUS', lines: '(kneeling) Forgive me, Caesar. Caesar, forgive me. Cassius falls as low as your foot to beg for freedom for Publius Cimber.' },
        { speaker: 'CAESAR', lines: 'I could be persuaded if I were like you. If I could pray to persuade others, prayers would persuade me. But I am as constant as the northern star, which has no equal in the sky for its fixed and unmoving quality. The skies are painted with countless sparks. They are all fire and every one of them shines, but there’s only one that holds its place. So it is in the world. It is well-filled with men, and men are flesh and blood, and capable of reason, yet among them all I know only one who holds his position, unshakeable. And that I am he, let me show it a little, even in this: I was firm that Cimber should be banished, and I remain firm in keeping him so.' },
        { speaker: 'CINNA', lines: '(kneeling) O Caesar—' },
        { speaker: 'CAESAR', lines: 'Get away! Do you think you can lift Mount Olympus?' },
        { speaker: 'DECIUS', lines: '(kneeling) Great Caesar—' },
        { speaker: 'CAESAR', lines: 'Is Brutus kneeling for nothing?' },
        { speaker: 'CASCA', lines: 'Let my hands speak for me!' },
        { speaker: 'CAESAR', lines: 'And you, Brutus?—Then Caesar falls. (dies)' },
        { speaker: 'CINNA', lines: 'Liberty! Freedom! Tyranny is dead! Run from here, announce it, cry it in the streets.' },
        { speaker: 'CASSIUS', lines: 'Some of you go to the public platforms and cry out, “Liberty, freedom, and citizenship!”' },
        { speaker: 'BRUTUS', lines: 'People and senators, don\'t be frightened. Do not run. Stand still. Ambition has paid its price.' },
        { speaker: 'CASCA', lines: 'Go to the platform, Brutus.' },
        { speaker: 'DECIUS', lines: 'And Cassius too.' },
        { speaker: 'BRUTUS', lines: 'Where is Publius?' },
        { speaker: 'CINNA', lines: 'Here, completely stunned by this uprising.' },
        { speaker: 'METELLUS', lines: 'Stand close together, in case some friend of Caesar’s should happen to—' },
        { speaker: 'BRUTUS', lines: 'Do not talk of standing firm.—Publius, be cheerful. No harm is intended to you, or to any other Roman. Tell them that, Publius.' },
        { speaker: 'CASSIUS', lines: 'And leave us, Publius, so that the people, if they rush at us, don\'t harm you in your old age.' },
        { speaker: 'BRUTUS', lines: 'Do so. And let no one be held responsible for this deed except for us, the doers.' },
        { speaker: 'CASSIUS', lines: 'Where is Antony?' },
        { speaker: 'TREBONIUS', lines: 'He has fled to his house, shocked. Men, wives, and children are staring, crying out, and running as if it were Judgment Day.' },
        { speaker: 'BRUTUS', lines: 'Fates, we will learn what you have in store for us. We know that we will die. It’s only a matter of when, and living longer is what men care about.' },
        { speaker: 'CASSIUS', lines: 'Why, a man who cuts off twenty years of his life also cuts off that many years of fearing death.' },
        { speaker: 'BRUTUS', lines: 'If you accept that, then death is a gift. So we are Caesar’s friends, for we have shortened his time of fearing death. Stoop, Romans, stoop, and let us bathe our hands in Caesar’s blood up to the elbows, and smear our swords. Then let us walk out, even to the marketplace, and waving our red weapons over our heads, let’s all cry, “Peace, freedom, and liberty!”' },
        { speaker: 'CASSIUS', lines: 'Stoop, then, and wash. How many centuries from now shall this grand scene of ours be acted out in countries not yet born and in languages not yet known!' },
        { speaker: 'BRUTUS', lines: 'How many times will Caesar, who now lies at the base of Pompey’s statue no more worthy than dust, bleed for entertainment!' },
        { speaker: 'CASSIUS', lines: 'As often as that happens, so often will our group be called “The men that gave their country liberty.”' },
        { speaker: 'DECIUS', lines: 'What, should we go out?' },
        { speaker: 'CASSIUS', lines: 'Yes, every man, let\'s go. Brutus will lead, and we will follow him with the bravest and best hearts in Rome.' },
        { speaker: 'BRUTUS', lines: 'Wait! Who comes here? A friend of Antony’s.' },
        { speaker: 'ANTONY\'S SERVANT', lines: '(kneeling) Thus, Brutus, my master told me to kneel. (falls flat on the ground) Thus Mark Antony told me to fall down, and, lying flat, he asked me to say: Brutus is noble, wise, brave, and honest. Caesar was mighty, bold, royal, and loving. Say that I love Brutus and I honor him. Say that I feared Caesar, honored him, and loved him. If Brutus will guarantee that Antony can safely come to him and be told how Caesar deserved to die, Mark Antony will not love the dead Caesar as much as the living Brutus, but will follow the fortunes of noble Brutus through the dangers of this new state with all true loyalty. So says my master Antony.' },
        { speaker: 'BRUTUS', lines: 'Your master is a wise and brave Roman. I never thought less of him. Tell him, if he would please come to this place, he will get his answers and, on my honor, will leave unharmed.' },
        { speaker: 'ANTONY\'S SERVANT', lines: '(rising) I’ll fetch him right away.' },
        { speaker: 'BRUTUS', lines: 'I know that he will be a good friend to us.' },
        { speaker: 'CASSIUS', lines: 'I hope we can. But I still have a feeling that fears him greatly, and my suspicions always turn out to be accurate.' },
        { speaker: 'BRUTUS', lines: 'But here comes Antony.—Welcome, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'O mighty Caesar! Do you lie so low? Have all your conquests, glories, triumphs, and treasures shrunk to this small size? Goodbye. —Gentlemen, I don\'t know what you intend, who else you must kill, who else is on your list. If it is me, there is no time as fitting as the hour of Caesar’s death, nor any weapon half as worthy as your swords, made rich with the noblest blood in all this world. I beg you, if you hold a grudge against me, now, while your purple hands stink and smoke, do what you please. If I live a thousand years, I will not find myself so ready to die. No place will please me so much, no method of death, as here by Caesar, and to be cut off by you, the finest and master spirits of this age.' },
        { speaker: 'BRUTUS', lines: 'Oh Antony, do not beg us for your death. Though now we must appear bloody and cruel—as you see we do by our hands and our present action—yet you see only our hands and the bloody business they have done. You do not see our hearts. They are full of pity. And pity for the general wrongs in Rome—as fire drives out fire, so pity drives out pity—has made us do this deed to Caesar. As for you, our swords have blunt points, Mark Antony. Our arms, strong in their hatred of tyranny, and our hearts, full of brotherly feeling, receive you with all kind love, good thoughts, and respect.' },
        { speaker: 'CASSIUS', lines: 'Your vote will be as strong as any man’s in appointing new officials.' },
        { speaker: 'BRUTUS', lines: 'Just be patient until we have calmed the crowd, who are beside themselves with fear, and then we will explain to you the reason why I, who loved Caesar even when I struck him, have done this.' },
        { speaker: 'ANTONY', lines: 'I do not doubt your wisdom. Let each of you give me his bloody hand. (shakes hands with the conspirators) First, Marcus Brutus, I will shake with you. —Next, Caius Cassius, I take your hand. —Now, Decius Brutus, yours.—Now yours, Metellus. —Yours, Cinna.—And, my brave Casca, yours. —Though last, not last in love, yours, good Trebonius. —Gentlemen all, alas, what can I say? My reputation now stands on such slippery ground that you must think of me in one of two bad ways, either as a coward or a flatterer. —That I loved you, Caesar, oh, it is true. If your spirit is looking upon us now, won\'t it grieve you more than your own death to see your Antony making peace, shaking the bloody fingers of your foes—most noble!—in the presence of your corpse? If I had as many eyes as you have wounds, weeping as fast as they stream your blood, it would suit me better than to make terms of friendship with your enemies. Forgive me, Julius! Here you were cornered, brave deer; here you fell; and here your hunters stand, marked by your kill, and crimsoned in your lifeblood. O world, you were the forest for this deer, and this, O world, was indeed the heart of you. How like a deer, struck down by many princes, you lie here!' },
        { speaker: 'CASSIUS', lines: 'Mark Antony—' },
        { speaker: 'ANTONY', lines: 'Forgive me, Caius Cassius. The enemies of Caesar will say this; so, coming from a friend, it is merely modest.' },
        { speaker: 'CASSIUS', lines: 'I don\'t blame you for praising Caesar so. But what agreement do you intend to have with us? Will you be counted among our friends? Or shall we go on without depending on you?' },
        { speaker: 'ANTONY', lines: 'That is why I took your hands, but I was indeed distracted from the point by looking down at Caesar. I am friends with all of you and love you all, on the condition that you will give me reasons why and how Caesar was dangerous.' },
        { speaker: 'BRUTUS', lines: 'Otherwise this would be a savage sight! Our reasons are so sound that if you, Antony, were the son of Caesar, you would be satisfied.' },
        { speaker: 'ANTONY', lines: 'That’s all I ask. And I am also requesting that I may take his body to the marketplace and, on the public platform, as a friend should, speak at his funeral ceremony.' },
        { speaker: 'BRUTUS', lines: 'You shall, Mark Antony.' },
        { speaker: 'CASSIUS', lines: '(aside to BRUTUS) You don\'t know what you are doing. Do not agree that Antony may speak at his funeral. Do you know how much the people may be stirred by what he will say?' },
        { speaker: 'BRUTUS', lines: '(aside to CASSIUS) With your permission, I will go to the platform first and explain the reason for Caesar’s death. Whatever Antony says, I will declare that he speaks with our leave and permission, and that we are agreed that Caesar shall have all proper rites and lawful ceremonies. It will benefit us more than harm us.' },
        { speaker: 'CASSIUS', lines: '(aside to BRUTUS) I don’t know what may happen. I don’t like it.' },
        { speaker: 'BRUTUS', lines: 'Mark Antony, here, take Caesar’s body. You shall not blame us in your funeral speech, but speak all the good you can think of about Caesar, and say you do it with our permission. Otherwise you shall have no part at all in his funeral. And you shall speak from the same platform I am going to, after my speech has ended.' },
        { speaker: 'ANTONY', lines: 'Let it be so. I desire nothing more.' },
        { speaker: 'BRUTUS', lines: 'Prepare the body then, and follow us.' },
        { speaker: 'ANTONY', lines: 'Oh, forgive me, you bleeding piece of earth, that I am being meek and gentle with these butchers! You are the ruins of the noblest man that ever lived in the history of time. Woe to the hand that shed this costly blood! Over your wounds I now prophesy—which, like silent mouths, open their ruby lips to beg for my voice—a curse will fall upon mankind. Civil war and fierce internal conflict will burden all of Italy. Blood and destruction will be so common, and dreadful sights so familiar, that mothers will only smile when they see their infants cut into pieces by the hands of war, all pity choked by the custom of evil deeds. And Caesar’s spirit, seeking revenge, with the goddess of discord by his side, coming hot from hell, shall in this land with a monarch’s voice cry “Havoc!” and unleash the dogs of war, so that this foul deed shall stink above the earth with rotting men, groaning for burial.' },
        { speaker: 'ANTONY', lines: 'You serve Octavius Caesar, do you not?' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'I do, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'Caesar wrote for him to come to Rome.' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'He received his letters and is coming. And he told me to say to you in person— (sees CAESAR’s body) O Caesar!—' },
        { speaker: 'ANTONY', lines: 'Your heart is full. Go aside and weep. Grief, I see, is contagious, for my own eyes, seeing those beads of sorrow in yours, began to water. Is your master coming?' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'He is staying tonight within twenty miles of Rome.' },
        { speaker: 'ANTONY', lines: 'Hurry back and tell him what has happened. This is a mourning Rome, a dangerous Rome, not a safe Rome for Octavius yet. Hurry and tell him so.—Yet, wait a moment. You shall not go back until I have carried this corpse into the marketplace. There, in my speech, I will test how the people react to the cruel outcome of these bloody men. Based on their reaction, you shall report the state of affairs to young Octavius. Lend me your hand.' },
    ],
    Hinglish: [
        { speaker: 'CAESAR', lines: '(SOOTHSAYER se) March ka pandhrawa din aa gaya hai.' },
        { speaker: 'SOOTHSAYER', lines: 'Haan, Caesar, par abhi tak gaya nahi hai.' },
        { speaker: 'ARTEMIDORUS', lines: '(apna letter dete hue) Pranaam, Caesar! Yeh schedule padhiye.' },
        { speaker: 'DECIUS', lines: '(CAESAR ko doosra paper dete hue) Trebonius chahte hain ki aap fursat mein unki yeh vinamra vinti padhein.' },
        { speaker: 'ARTEMIDORUS', lines: 'O Caesar, pehle mera padhiye, kyunki meri vinti Caesar se zyada kareebi hai. Ise padhiye, mahaan Caesar.' },
        { speaker: 'CAESAR', lines: 'Jo cheez humse judi hai, use sabse aakhir mein dekha jaayega.' },
        { speaker: 'ARTEMIDORUS', lines: 'Der mat kijiye, Caesar. Ise turant padhiye.' },
        { speaker: 'CAESAR', lines: 'Kya, yeh aadmi pagal hai?' },
        { speaker: 'PUBLIUS', lines: '(ARTEMIDORUS se) Arre, jagah do.' },
        { speaker: 'CASSIUS', lines: '(ARTEMIDORUS se) Kya, tum apni arziyaan sadak par de rahe ho? Capitol aao.' },
        { speaker: 'POPILLIUS', lines: '(CASSIUS se) Main dua karta hoon ki tumhara aaj ka kaam safal ho.' },
        { speaker: 'CASSIUS', lines: 'Kaisa kaam, Popillius?' },
        { speaker: 'POPILLIUS', lines: 'Alvida. (CAESAR ke paas jaata hai)' },
        { speaker: 'BRUTUS', lines: '(CASSIUS se) Popillius Lena ne kya kaha?' },
        { speaker: 'CASSIUS', lines: '(BRUTUS se dheere se) Usne kaha ki woh dua karta hai ki aaj hamara kaam safal ho. Mujhe darr hai ki hamara plan pata chal gaya hai.' },
        { speaker: 'BRUTUS', lines: 'Dekho woh kaise Caesar ke paas ja raha hai. Us par nazar rakho.' },
        { speaker: 'CASSIUS', lines: 'Casca, jaldi karo, humein roke jaane ka darr hai—Brutus, kya kiya jaaye? Agar yeh baat pata chal gayi, toh Cassius ya Caesar mein se koi wapas nahi lautega, kyunki main khud ko maar lunga.' },
        { speaker: 'BRUTUS', lines: 'Cassius, shaant raho. Popillius Lena hamare plan ke baare mein baat nahi kar raha hai. Dekho, woh muskura raha hai, aur Caesar ka chehra bhi nahi badla.' },
        { speaker: 'CASSIUS', lines: 'Trebonius ko apna samay pata hai. Dekho, Brutus. Woh Mark Antony ko raaste se hata raha hai.' },
        { speaker: 'DECIUS', lines: 'Metellus Cimber kahan hai? Use jaane do aur turant Caesar ke saamne apni vinti pesh karne do.' },
        { speaker: 'BRUTUS', lines: 'Woh taiyaar hai. Paas jaakar uska saath do.' },
        { speaker: 'CINNA', lines: 'Casca, tum apna haath uthane wale pehle ho.' },
        { speaker: 'CAESAR', lines: 'Kya hum sab taiyaar hain? Ab aisi kya gadbad hai jise Caesar aur uske senate ko theek karna hai?' },
        { speaker: 'METELLUS', lines: '(ghutno par) Sabse mahan, sabse shaktishaali Caesar, Metellus Cimber aapke singhasan ke saamne ek vinamra dil rakhta hai—' },
        { speaker: 'CAESAR', lines: 'Mujhe tumhe rokna hoga, Cimber. Yeh jhukna aur yeh vinamra formalities aam aadmiyon ke khoon mein aag laga sakti hai aur sthapit kanoon ko bachchon ka khel bana sakti hai. Yeh sochne ki bhool mat karna ki Caesar ke andar aisi bagawati khoon hai jo bewakoofon ko pighlane wali cheezon se pighal jaayega—mera matlab hai, meethi baatein, neeche jhuk kar salaam karna, aur kutte jaisi chaaploosi. Tumhara bhai kaanoon se desh-nikala hai. Agar tum uske liye jhukte ho, prarthna karte ho, aur chaaploosi karte ho, toh main tumhe ek kutte ki tarah apne raaste se dhutkaar dunga. Jaan lo, Caesar galat nahi karta, aur na hi bina kisi kaaran ke woh santusht hoga.' },
        { speaker: 'METELLUS', lines: 'Kya meri awaaz se zyada laayak koi awaaz nahi hai jo mahaan Caesar ke kaan mein mere nishkasit bhai ki maafi ke liye zyada meethas se goonje?' },
        { speaker: 'BRUTUS', lines: '(ghutno par) Main aapka haath choomta hoon, Caesar, par chaaploosi se nahi, yeh chahte hue ki Publius Cimber ko turant desh-nikale se mukti mile.' },
        { speaker: 'CAESAR', lines: 'Kya, Brutus?' },
        { speaker: 'CASSIUS', lines: '(ghutno par) Maaf kijiye, Caesar. Caesar, maaf kijiye. Cassius aapke pairon tak jhukta hai Publius Cimber ki azaadi maangne ke liye.' },
        { speaker: 'CAESAR', lines: 'Main maan jaata agar main tumhari tarah hota. Agar main manane ke liye prarthna kar sakta, toh prarthnayein mujhe mana leti. Lekin main north star ki tarah sthir hoon, jiski sthir aur atal gunvatta ka aasmaan mein koi saathi nahi hai. Aasmaan anginat taaron se saje hain. Woh sab aag hain aur har ek chamakta hai, lekin sab mein sirf ek hi hai jo apni jagah par tika rehta hai. Duniya mein bhi aisa hi hai. Yeh aadmiyon se bhari hui hai, aur aadmi maans aur khoon ke hain, aur samajhdaar hain, phir bhi un sab mein main sirf ek ko jaanta hoon jo apni jagah par atal hai, hilaya nahi ja sakta. Aur woh main hoon, yeh main ismein thoda sa dikhaata hoon: Main sthir tha ki Cimber ko banish kiya jaana chahiye, aur main use waisa hi rakhne ke liye sthir hoon.' },
        { speaker: 'CINNA', lines: '(ghutno par) O Caesar—' },
        { speaker: 'CAESAR', lines: 'Hato! Kya tum Olympus parvat ko uthaoge?' },
        { speaker: 'DECIUS', lines: '(ghutno par) Mahaan Caesar—' },
        { speaker: 'CAESAR', lines: 'Kya Brutus bekaar mein ghutno par nahi hai?' },
        { speaker: 'CASCA', lines: 'Mere liye, haath bolo!' },
        { speaker: 'CAESAR', lines: 'Aur tum bhi, Brutus?—Toh gir jao, Caesar. (mar jaata hai)' },
        { speaker: 'CINNA', lines: 'Azaadi! Swatantrata! Tanashahi khatm ho gayi! Yahan se daudo, elaan karo, galiyon mein chillaao.' },
        { speaker: 'CASSIUS', lines: 'Kuch log aam manchon par jao, aur chillaao, "Azaadi, swatantrata, aur nagrikta ke adhikar!"' },
        { speaker: 'BRUTUS', lines: 'Logon aur senators, daro mat. Bhaago mat. Khade raho. Mahtvakanksha ka karz chuka diya gaya hai.' },
        { speaker: 'CASCA', lines: 'Manch par jao, Brutus.' },
        { speaker: 'DECIUS', lines: 'Aur Cassius bhi.' },
        { speaker: 'BRUTUS', lines: 'Publius kahan hai?' },
        { speaker: 'CINNA', lines: 'Yahin, is vidroh se bilkul chakraya hua.' },
        { speaker: 'METELLUS', lines: 'Saath khade raho, kahin Caesar ka koi dost mauka dekhkar—' },
        { speaker: 'BRUTUS', lines: 'Khade rehne ki baat mat karo.—Publius, khush raho. Aapko koi nuksaan pahunchane ka irada nahi hai, na hi kisi aur Roman ko. Unhe yeh bata do, Publius.' },
        { speaker: 'CASSIUS', lines: 'Aur hamein chhod do, Publius, kahin aisa na ho ki log, hum par toot padein, aur aapki umar ko kuch nuksaan pahuncha de.' },
        { speaker: 'BRUTUS', lines: 'Aisa hi karo. Aur is kaam ke liye koi aur zimmedar na thehre, siwaye hum karne walon ke.' },
        { speaker: 'CASSIUS', lines: 'Antony kahan hai?' },
        { speaker: 'TREBONIUS', lines: 'Woh apne ghar bhaag gaya, hairaan hokar. Aadmi, auratein, aur bachche ghoor rahe hain, chilla rahe hain, aur aise daud rahe hain jaise pralay ka din ho.' },
        { speaker: 'BRUTUS', lines: 'Kismat, hum tumhari ichha jaanenge. Ki hum marenge, yeh hum jaante hain. Bas samay ki baat hai, aur dinon ko lamba kheenchne ki, jis par log tiki rehte hain.' },
        { speaker: 'CASSIUS', lines: 'Kyun, jo aadmi zindagi ke bees saal kaat deta hai, woh maut ke darr ke utne hi saal kaat deta hai.' },
        { speaker: 'BRUTUS', lines: 'Yeh maan lo, aur tab maut ek fayda hai. Toh hum Caesar ke dost hain, jinhone uske maut se darne ka samay kam kar diya. Jhuko, Romans, jhuko, aur hum apne haathon ko Caesar ke khoon mein kohniyon tak nahlalein, aur apni talwaron par laga lein. Phir hum bahar chalein, bazaar tak, aur apne laal hathiyaar apne sar par lehrate hue, chalo hum sab chillayein, "Shanti, swatantrata, aur azaadi!"' },
        { speaker: 'CASSIUS', lines: 'Toh jhuko, aur dho lo. Aaj se kitne yugon baad, hamara yeh shaandaar drishya anjaan deshon aur anjaan bhashaon mein abhinit kiya jaayega!' },
        { speaker: 'BRUTUS', lines: 'Kitni baar Caesar khel mein khoon bahayega, jo ab Pompey ke statue ke neeche dhool se zyada kuch nahi hai!' },
        { speaker: 'CASSIUS', lines: 'Jab bhi aisa hoga, tab hamare is gut ko "Desh ko azaadi dilane wale log" kaha jayega.' },
        { speaker: 'DECIUS', lines: 'Kya, hum bahar chalein?' },
        { speaker: 'CASSIUS', lines: 'Haan, har aadmi chale. Brutus aage badhega, aur hum Rome ke sabse bahadur aur achhe dilon ke saath uske peeche chalenge.' },
        { speaker: 'BRUTUS', lines: 'Ruko! Yahan kaun aa raha hai? Antony ka ek dost.' },
        { speaker: 'ANTONY\'S SERVANT', lines: '(ghutno par) Is tarah, Brutus, mere maalik ne mujhe ghutne tekne ke liye kaha. (zameen par let jaata hai) Is tarah Mark Antony ne mujhe neeche girne ke liye kaha, aur, letkar, unhone yeh kehne ke liye kaha: Brutus nek, samajhdar, bahadur aur imaandar hai. Caesar shaktishali, sahasi, shaahi aur pyaar karne wala tha. Kaho ki main Brutus se pyaar karta hoon, aur main unka sammaan karta hoon. Kaho ki main Caesar se darta tha, unka sammaan karta tha, aur unse pyaar karta tha. Agar Brutus Antony ko surakshit aane ki anumati de aur yeh samjha de ki Caesar kaise maut ke laayak tha, toh Mark Antony mare hue Caesar se zyada zinda Brutus se pyaar karega, aur is naye anjaan rajya ke khatron mein poori vafadari ke saath nek Brutus ke bhagya aur maamlon ka paalan karega. Aisa mere maalik Antony kehte hain.' },
        { speaker: 'BRUTUS', lines: 'Tumhara maalik ek samajhdar aur bahadur Roman hai. Maine use kabhi isse kam nahi samjha. Use kaho, agar woh yahan aana chahe, toh use santushti milegi aur, meri izzat ki kasam, bina kisi nuksaan ke chala jayega.' },
        { speaker: 'ANTONY\'S SERVANT', lines: '(uthte hue) Main unhe turant le aata hoon.' },
        { speaker: 'BRUTUS', lines: 'Main jaanta hoon ki woh hamara achha dost banega.' },
        { speaker: 'CASSIUS', lines: 'Main ummeed karta hoon. Lekin mere mann mein abhi bhi ek darr hai jo usse bahut darta hai, aur mera shak hamesha sahi saabit hota hai.' },
        { speaker: 'BRUTUS', lines: 'Lekin yahan Antony aa raha hai.—Swagat hai, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'O mahaan Caesar! Kya tum itne neeche pade ho? Tumhari saari jeet, shaan, aur jeet ke saaman, is chhote se daayre mein simat gaye hain? Alvida. —Gentlemen, main nahi jaanta ki aapka kya irada hai, aur kiska khoon bahana hai, aur kaun aapki list mein hai. Agar main hoon, toh Caesar ki maut ke ghante se behtar koi samay nahi hai, na hi is duniya ke sabse nek khoon se rangeen aapki talwaron ke aadhe bhi laayak koi hathiyaar hai. Main aapse vinti karta hoon, agar aap mujhse nafrat karte hain, toh abhi, jabki aapke laal haath badboo aur dhuan chhod rahe hain, apni ichha poori kijiye. Main hazaar saal bhi jee loon, main marne ke liye itna taiyaar nahi paunga. Koi jagah mujhe itni pasand nahi aayegi, na hi maut ka koi tareeka, jaise yahan Caesar ke paas, aur aapke haathon se maara jaana, jo is yug ke sabse achhe aur mahan log hain.' },
        { speaker: 'BRUTUS', lines: 'O Antony, humse apni maut mat maango. Bhale hi ab hum khooni aur kroor dikh rahe honge—jaisa ki aap hamare haathon aur is kaam se dekhte hain—phir bhi aap sirf hamare haath aur unke kiye hue is khooni kaam ko dekhte hain. Aap hamare dil nahi dekhte. Woh dayalu hain. Aur Rome ke aam anyaay ke liye daya ne—jaise aag aag ko bujhati hai, waise hi daya daya ko—Caesar par yeh kaam kiya hai. Aapke liye, Mark Antony, hamari talwaron ki nok kund hai. Hamari baahein, jo atyachar se nafrat karti hain, aur hamare dil, jo bhaiyon jaisa swabhav rakhte hain, aapka poore pyaar, achhe vichaaron, aur sammaan ke saath swagat karte hain.' },
        { speaker: 'CASSIUS', lines: 'Naye padon ke vitran mein aapki awaaz kisi bhi aadmi jitni hi mazboot hogi.' },
        { speaker: 'BRUTUS', lines: 'Bas tab tak dhairya rakhein jab tak hum bheed ko shaant na kar lein, jo darr se paagal ho rahi hai, aur tab hum aapko kaaran batayenge, ki maine, jo Caesar se pyaar karta tha jab maine use maara, aisa kyun kiya.' },
        { speaker: 'ANTONY', lines: 'Mujhe aapki samajhdari par koi shak nahi hai. Har aadmi mujhe apna khooni haath de. (saazishkartaon se haath milata hai) Pehle, Marcus Brutus, main aapse haath milaunga. —Aage, Caius Cassius, main aapka haath leta hoon. —Ab, Decius Brutus, aapka.—Ab aapka, Metellus. —Aapka, Cinna.—Aur, mere bahadur Casca, aapka. —Bhale hi aakhri, par pyaar mein aakhri nahi, aapka, achhe Trebonius. —Sabhi gentlemen, afsos, main kya kahun? Meri saakh ab aisi phislan bhari zameen par khadi hai ki aapko mujhe do bure tareekon mein se ek samajhna hoga, ya toh ek kayar ya ek chaaploos. —Ki maine tumse pyaar kiya, Caesar, oh, yeh sach hai. Agar tumhari aatma ab humein dekh rahi hai, toh kya yeh tumhe tumhari maut se zyada dukh nahi degi ki tumhara Antony apne dushmanon ke khooni ungliyon se haath milakar shaanti kar raha hai—sabse nek!—tumhare shav ke saamne? Agar mere paas utni aankhein hoti jitne tumhare ghaav hain, aur woh utni tezi se roti jitni tezi se tumhara khoon beh raha hai, toh yeh mujhe apne dushmanon se dosti ki sharton mein bandhne se behtar lagta. Maaf karna, Julius! Yahan tumhara shikaar hua, bahadur hiran; yahan tum gire; aur yahan tumhare shikaari khade hain, tumhare shikaar se rangeen, aur tumhare jeevan-rakt mein laal. O duniya, tum is hiran ke liye jungle the, aur yeh, O duniya, sachmuch tumhara dil tha. Kaise ek hiran ki tarah, jise kai rajakumaron ne maara ho, tum yahan pade ho!' },
        { speaker: 'CASSIUS', lines: 'Mark Antony—' },
        { speaker: 'ANTONY', lines: 'Maaf karna, Caius Cassius. Caesar ke dushman yeh kahenge; toh, ek dost ke munh se, yeh toh sirf vinamrata hai.' },
        { speaker: 'CASSIUS', lines: 'Main aapko Caesar ki itni prashansa karne ke liye dosh nahi deta. Lekin aap hamare saath kya samjhauta karna chahte hain? Kya aap hamare doston mein gine jaana chahenge? Ya hum aage badhein, aur aap par nirbhar na rahein?' },
        { speaker: 'ANTONY', lines: 'Isliye maine aapke haath pakde, lekin sachmuch Caesar ko neeche dekh kar main mudde se bhatak gaya tha. Main aap sabke saath dost hoon aur aap sabse pyaar karta hoon is ummeed par: ki aap mujhe kaaran denge ki Caesar kyun aur kaise khatarnak tha.' },
        { speaker: 'BRUTUS', lines: 'Varna yeh ek jungli drishya hota! Hamare kaaran itne achhe vicharon se bhare hain ki agar aap, Antony, Caesar ke bete hote, toh bhi aap santusht ho jaate.' },
        { speaker: 'ANTONY', lines: 'Main bas yahi chahta hoon. Aur iske alawa main yeh vinti karta hoon ki main unke shareer ko marketplace le jaa sakun, aur manch par, jaisa ek dost ko karna chahiye, unke antim sanskar ke kram mein bol sakun.' },
        { speaker: 'BRUTUS', lines: 'Tumhein ijazat hai, Mark Antony.' },
        { speaker: 'CASSIUS', lines: '(BRUTUS se dheere se) Tum nahi jaante tum kya kar rahe ho. Antony ko uske funeral mein bolne ki anumati mat do. Kya tum jaante ho ki log uski baaton se kitne prabhavit ho sakte hain?' },
        { speaker: 'BRUTUS', lines: '(CASSIUS se dheere se) Maaf karna. Main khud pehle manch par jaunga, aur hamare Caesar ki maut ka kaaran bataunga. Antony jo bhi kahega, main yeh elaan karunga ki woh hamari ijazat aur anumati se bol raha hai, aur ki hum is baat se sehmat hain ki Caesar ko sabhi sahi anushthan aur kanooni samaroh milne chahiye. Isse hamein fayda zyada hoga, nuksaan nahi.' },
        { speaker: 'CASSIUS', lines: '(BRUTUS se dheere se) Main nahi jaanta kya ho sakta hai. Mujhe yeh pasand nahi hai.' },
        { speaker: 'BRUTUS', lines: 'Mark Antony, yahan, Caesar ka shareer le jao. Tum apne funeral speech mein hamein dosh nahi doge, balki Caesar ke baare mein jitni achhi baatein soch sakte ho, kahoge, aur kahoge ki tum yeh hamari anumati se kar rahe ho. Varna tumhein uske funeral mein koi hissa nahi milega. Aur tum usi manch se bologe jahan main ja raha hoon, meri speech khatm hone ke baad.' },
        { speaker: 'ANTONY', lines: 'Aisa hi ho. Main aur kuch nahi chahta.' },
        { speaker: 'BRUTUS', lines: 'Toh shareer taiyaar karo, aur hamare peeche aao.' },
        { speaker: 'ANTONY', lines: 'Oh, mujhe maaf karna, khoon behti dharti, ki main in kasaiyon ke saath itna namra aur shaant hoon! Tum us sabse nek insaan ke khandhar ho jo samay ke sagar mein kabhi jiya. Dhikkar hai us haath par jisne yeh keemti khoon bahaya! Tumhare ghaavon par ab main bhavishyavani karta hoon—jo, goonge munh ki tarah, apne laal honth kholte hain meri zubaan ki awaaz maangne ke liye—insaano par ek shraap aayega. Gharelu krodh aur bhayanak gruh yuddh Italy ke har hisse ko pareshan karega. Khoon aur vinash itna aam ho jaayega, aur bhayanak drishya itne parichit ho jaayenge, ki maayein apne bachchon ko yuddh ke haathon se tukde hote dekh kar sirf muskuraayengi, saari daya burai ke riwaaz se dab jaayegi. Aur Caesar ki aatma, badla lene ke liye ghoomti hui, apne saath Ate (vinaash ki devi) ko lekar narak se garam aayegi, aur is desh mein ek raja ki awaaz mein "Havoc!" (vinaash ka aadesh) chillaegi aur yuddh ke kutton ko khula chhod degi, taaki yeh ghinona kaam dharti ke upar sade hue aadmiyon ki badboo failaye, jo dafn hone ke liye tadap rahe honge.' },
        { speaker: 'ANTONY', lines: 'Tum Octavius Caesar ke sevak ho, hai na?' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'Haan, Mark Antony.' },
        { speaker: 'ANTONY', lines: 'Caesar ne use Rome aane ke liye likha tha.' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'Usne unke patra prapt kar liye hain aur aa raha hai. Aur usne mujhe aapse zubani kehne ke liye kaha— (CAESAR ke shareer ko dekhta hai) O Caesar!—' },
        { speaker: 'ANTONY', lines: 'Tumhara dil bhari hai. Alag jaakar ro lo. Dukh, main dekhta hoon, failne wala hai, kyunki meri aankhein, tumhari aankhon mein dukh ke moti dekh kar, paani se bharne lagi hain. Kya tumhara maalik aa raha hai?' },
        { speaker: 'OCTAVIUS\' SERVANT', lines: 'Woh aaj raat Rome se saat league (lagbhag 20-22 मील) door ruke hue hain.' },
        { speaker: 'ANTONY', lines: 'Tezi se wapas jao, aur use batao ki kya hua hai. Yeh ek shokakul Rome hai, ek khatarnak Rome hai, Octavius ke liye abhi surakshit Rome nahi hai. Yahan se jaldi jao, aur use aisa batao.—Phir bhi, thodi der ruko. Tum tab tak wapas nahi jaoge jab tak main is laash ko marketplace nahi le jaata. Wahan, apne bhashan mein, main parakhunga ki log in khooni aadmiyon ke is kroor kaam ko kaise lete hain. Uske anusaar, tum yuva Octavius ko cheezon ki sthiti ke baare mein bataoge. Mujhe apna haath do.' },
    ]
};
const descriptionVersions = {
    Shakespearean: "On the Ides of March, the conspirators enact their deadly enterprise, assassinating Caesar at the Capitol. In the chaotic aftermath, Antony confronts the killers, feigning peace to secure a chance to address the people at Caesar's funeral.",
    'Normal English': "The conspirators kill Caesar on the Ides of March at the Capitol. After the murder, Mark Antony cleverly makes a deal with them so he can speak at Caesar's funeral, all while secretly planning his revenge.",
    Hinglish: "Ides of March ke din, saazish karne wale log Caesar ko Capitol mein maar dete hain. Iske baad, Mark Antony chalaki se unse deal karta hai ki woh Caesar ke funeral mein speech dega, jabki woh chupke se badla lene ka plan bana raha hota hai."
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
            overflow: 'hidden',
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
                        <a style={styles.breadcrumbButton} href="/studymaterial/class9icse/Class9icseEnglish">Julius Caesar</a>
                            <h1 style={styles.sceneTitle}>Act III, Scene 1</h1>
                            <p style={styles.sceneSubtitle}>Rome. Before the Capitol</p>
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
                                        const isServant = ['ANTONY\'S SERVANT', 'OCTAVIUS\' SERVANT'].includes(entry.speaker);
                                        const lineColor = isServant ? theme.colors.gray[500] : theme.colors.primary;

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
                                <Class9icseEnglishAct3Scene1Summary/>
                            </div>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <Class9icseEnglishAct3Scene1Questions/>
                        

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;


