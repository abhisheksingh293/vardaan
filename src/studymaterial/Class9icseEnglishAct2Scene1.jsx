import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct2Scene1Summary from './Class9icseEnglishAct2Scene1Summary';
import Class9icseEnglishAct2Scene1Questions from './Class9icseEnglishAct2Scene1Questions';

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
        { speaker: 'BRUTUS', lines: 'What, Lucius, ho!—\nI cannot by the progress of the stars\nGive guess how near to day.—Lucius, I say!—\nI would it were my fault to sleep so soundly.—\nWhen, Lucius, when? Awake, I say! What, Lucius!' },
        { speaker: 'LUCIUS', lines: 'Called you, my lord?' },
        { speaker: 'BRUTUS', lines: 'Get me a taper in my study, Lucius.\nWhen it is lighted, come and call me here.' },
        { speaker: 'LUCIUS', lines: 'I will, my lord.' },
        { speaker: 'BRUTUS', lines: 'It must be by his death, and for my part\nI know no personal cause to spurn at him\nBut for the general. He would be crowned.\nHow that might change his nature, there’s the question.\nIt is the bright day that brings forth the adder\nAnd that craves wary walking. Crown him that,\nAnd then I grant we put a sting in him\nThat at his will he may do danger with.\nTh\' abuse of greatness is when it disjoins\nRemorse from power. And, to speak truth of Caesar,\nI have not known when his affections swayed\nMore than his reason. But ’tis a common proof\nThat lowliness is young ambition’s ladder,\nWhereto the climber upward turns his face.\nBut when he once attains the upmost round,\nHe then unto the ladder turns his back,\nLooks in the clouds, scorning the base degrees\nBy which he did ascend. So Caesar may.\nThen, lest he may, prevent. And since the quarrel\nWill bear no color for the thing he is,\nFashion it thus: that what he is, augmented,\nWould run to these and these extremities.\nAnd therefore think him as a serpent’s egg—\nWhich, hatched, would as his kind grow mischievous—\nAnd kill him in the shell.' },
        { speaker: 'LUCIUS', lines: 'The taper burneth in your closet, sir.\nSearching the window for a flint, I found\nThis paper, thus sealed up, and I am sure\nIt did not lie there when I went to bed.' },
        { speaker: 'BRUTUS', lines: 'Get you to bed again. It is not day.\nIs not tomorrow, boy, the ides of March?' },
        { speaker: 'LUCIUS', lines: 'I know not, sir.' },
        { speaker: 'BRUTUS', lines: 'Look in the calendar and bring me word.' },
        { speaker: 'LUCIUS', lines: 'I will, sir.' },
        { speaker: 'BRUTUS', lines: 'The exhalations whizzing in the air\nGive so much light that I may read by them.\n“Brutus, thou sleep’st. Awake, and see thyself.\nShall Rome, etc. Speak, strike, redress!”\n“Brutus, thou sleep’st. Awake.”\nSuch instigations have been often dropped\nWhere I have took them up.\n—“Shall Rome, etc.” Thus must I piece it out:\n“Shall Rome stand under one man’s awe?” What, Rome?\nMy ancestors did from the streets of Rome\nThe Tarquin drive when he was called a king.\n—“Speak, strike, redress!” Am I entreated\nTo speak and strike? O Rome, I make thee promise,\nIf the redress will follow, thou receivest\nThy full petition at the hand of Brutus!' },
        { speaker: 'LUCIUS', lines: 'Sir, March is wasted fifteen days.' },
        { speaker: 'BRUTUS', lines: '\'Tis good. Go to the gate. Somebody knocks.' },
        { speaker: 'BRUTUS', lines: 'Since Cassius first did whet me against Caesar,\nI have not slept.\nBetween the acting of a dreadful thing\nAnd the first motion, all the interim is\nLike a phantasma or a hideous dream.\nThe genius and the mortal instruments\nAre then in council, and the state of man,\nLike to a little kingdom, suffers then\nThe nature of an insurrection.' },
        { speaker: 'LUCIUS', lines: 'Sir, ’tis your brother Cassius at the door,\nWho doth desire to see you.' },
        { speaker: 'BRUTUS', lines: 'Is he alone?' },
        { speaker: 'LUCIUS', lines: 'No, sir, there are more with him.' },
        { speaker: 'BRUTUS', lines: 'Do you know them?' },
        { speaker: 'LUCIUS', lines: 'No, sir. Their hats are plucked about their ears,\nAnd half their faces buried in their cloaks,\nThat by no means I may discover them\nBy any mark of favor.' },
        { speaker: 'BRUTUS', lines: 'Let \'em enter.\nThey are the faction.\nO conspiracy,\nShamest thou to show thy dangerous brow by night\nWhen evils are most free? O, then by day\nWhere wilt thou find a cavern dark enough\nTo mask thy monstrous visage? Seek none, conspiracy.\nHide it in smiles and affability.\nFor if thou path, thy native semblance on,\nNot Erebus itself were dim enough\nTo hide thee from prevention.' },
        { speaker: 'CASSIUS', lines: 'I think we are too bold upon your rest.\nGood morrow, Brutus. Do we trouble you?' },
        { speaker: 'BRUTUS', lines: 'I have been up this hour, awake all night.\nKnow I these men that come along with you?' },
        { speaker: 'CASSIUS', lines: 'Yes, every man of them, and no man here\nBut honors you, and every one doth wish\nYou had but that opinion of yourself\nWhich every noble Roman bears of you.\nThis is Trebonius.' },
        { speaker: 'BRUTUS', lines: 'He is welcome hither.' },
        { speaker: 'CASSIUS', lines: 'This, Decius Brutus.' },
        { speaker: 'BRUTUS', lines: 'He is welcome too.' },
        { speaker: 'CASSIUS', lines: 'This, Casca. This, Cinna. And this, Metellus Cimber.' },
        { speaker: 'BRUTUS', lines: 'They are all welcome.\nWhat watchful cares do interpose themselves\nBetwixt your eyes and night?' },
        { speaker: 'CASSIUS', lines: 'Shall I entreat a word?' },
        { speaker: 'DECIUS', lines: 'Here lies the east. Doth not the day break here?' },
        { speaker: 'CASCA', lines: 'No.' },
        { speaker: 'CINNA', lines: 'O, pardon, sir, it doth, and yon gray lines\nThat fret the clouds are messengers of day.' },
        { speaker: 'CASCA', lines: 'You shall confess that you are both deceived.\nHere, as I point my sword, the sun arises,\nWhich is a great way growing on the south,\nWeighing the youthful season of the year.\nSome two months hence up higher toward the north\nHe first presents his fire, and the high east\nStands, as the Capitol, directly here.' },
        { speaker: 'BRUTUS', lines: 'Give me your hands all over, one by one.' },
        { speaker: 'CASSIUS', lines: 'And let us swear our resolution.' },
        { speaker: 'BRUTUS', lines: 'No, not an oath. If not the face of men,\nThe sufferance of our souls, the time’s abuse—\nIf these be motives weak, break off betimes,\nAnd every man hence to his idle bed.\nSo let high-sighted tyranny range on\nTill each man drop by lottery. But if these—\nAs I am sure they do—bear fire enough\nTo kindle cowards and to steel with valor\nThe melting spirits of women, then, countrymen,\nWhat need we any spur but our own cause\nTo prick us to redress? What other bond\nThan secret Romans that have spoke the word\nAnd will not palter? And what other oath\nThan honesty to honesty engaged,\nThat this shall be, or we will fall for it?\nSwear priests and cowards and men cautelous,\nOld feeble carrions and such suffering souls\nThat welcome wrongs. Unto bad causes swear\nSuch creatures as men doubt. But do not stain\nThe even virtue of our enterprise,\nNor th\' insuppressive mettle of our spirits,\nTo think that or our cause or our performance\nDid need an oath, when every drop of blood\nThat every Roman bears—and nobly bears—\nIs guilty of a several bastardy\nIf he do break the smallest particle\nOf any promise that hath passed from him.' },
        { speaker: 'CASSIUS', lines: 'But what of Cicero? Shall we sound him?\nI think he will stand very strong with us.' },
        { speaker: 'CASCA', lines: 'Let us not leave him out.' },
        { speaker: 'CINNA', lines: 'No, by no means.' },
        { speaker: 'METELLUS', lines: 'O, let us have him, for his silver hairs\nWill purchase us a good opinion\nAnd buy men’s voices to commend our deeds.\nIt shall be said his judgment ruled our hands.\nOur youths and wildness shall no whit appear,\nBut all be buried in his gravity.' },
        { speaker: 'BRUTUS', lines: 'O, name him not. Let us not break with him,\nFor he will never follow anything\nThat other men begin.' },
        { speaker: 'CASSIUS', lines: 'Then leave him out.' },
        { speaker: 'CASCA', lines: 'Indeed he is not fit.' },
        { speaker: 'DECIUS', lines: 'Shall no man else be touched but only Caesar?' },
        { speaker: 'CASSIUS', lines: 'Decius, well urged. I think it is not meet\nMark Antony, so well beloved of Caesar,\nShould outlive Caesar. We shall find of him\nA shrewd contriver. And, you know, his means,\nIf he improve them, may well stretch so far\nAs to annoy us all; which to prevent,\nLet Antony and Caesar fall together.' },
        { speaker: 'BRUTUS', lines: 'Our course will seem too bloody, Caius Cassius,\nTo cut the head off and then hack the limbs,\nLike wrath in death and envy afterwards,\nFor Antony is but a limb of Caesar.\nLet us be sacrificers but not butchers, Caius.\nWe all stand up against the spirit of Caesar,\nAnd in the spirit of men there is no blood.\nOh, that we then could come by Caesar’s spirit\nAnd not dismember Caesar! But, alas,\nCaesar must bleed for it. And, gentle friends,\nLet’s kill him boldly but not wrathfully.\nLet’s carve him as a dish fit for the gods,\nNot hew him as a carcass fit for hounds.\nAnd let our hearts, as subtle masters do,\nStir up their servants to an act of rage\nAnd after seem to chide \'em. This shall make\nOur purpose necessary and not envious,\nWhich so appearing to the common eyes,\nWe shall be called purgers, not murderers.\nAnd for Mark Antony, think not of him,\nFor he can do no more than Caesar’s arm\nWhen Caesar’s head is off.' },
        { speaker: 'CASSIUS', lines: 'Yet I fear him.\nFor in the engrafted love he bears to Caesar—' },
        { speaker: 'BRUTUS', lines: 'Alas, good Cassius, do not think of him.\nIf he love Caesar, all that he can do\nIs to himself: take thought and die for Caesar.\nAnd that were much he should, for he is given\nTo sports, to wildness and much company.' },
        { speaker: 'TREBONIUS', lines: 'There is no fear in him. Let him not die,\nFor he will live and laugh at this hereafter.' },
        { speaker: 'BRUTUS', lines: 'Peace! Count the clock.' },
        { speaker: 'CASSIUS', lines: 'The clock hath stricken three.' },
        { speaker: 'TREBONIUS', lines: '\'Tis time to part.' },
        { speaker: 'CASSIUS', lines: 'But it is doubtful yet\nWhether Caesar will come forth today or no.\nFor he is superstitious grown of late,\nQuite from the main opinion he held once\nOf fantasy, of dreams and ceremonies.\nIt may be, these apparent prodigies,\nThe unaccustomed terror of this night,\nAnd the persuasion of his augurers\nMay hold him from the Capitol today.' },
        { speaker: 'DECIUS', lines: 'Never fear that. If he be so resolved,\nI can o\'ersway him. For he loves to hear\nThat unicorns may be betrayed with trees,\nAnd bears with glasses, elephants with holes,\nLions with toils, and men with flatterers.\nBut when I tell him he hates flatterers,\nHe says he does, being then most flatterèd.\nLet me work.\nFor I can give his humor the true bent,\nAnd I will bring him to the Capitol.' },
        { speaker: 'CASSIUS', lines: 'Nay, we will all of us be there to fetch him.' },
        { speaker: 'BRUTUS', lines: 'By the eighth hour. Is that the uttermost?' },
        { speaker: 'CINNA', lines: 'Be that the uttermost, and fail not then.' },
        { speaker: 'METELLUS', lines: 'Caius Ligarius doth bear Caesar hard,\nWho rated him for speaking well of Pompey.\nI wonder none of you have thought of him.' },
        { speaker: 'BRUTUS', lines: 'Now, good Metellus, go along by him.\nHe loves me well, and I have given him reasons.\nSend him but hither and I’ll fashion him.' },
        { speaker: 'CASSIUS', lines: 'The morning comes upon ’s. We’ll leave you, Brutus.\n—And, friends, disperse yourselves. But all remember\nWhat you have said, and show yourselves true Romans.' },
        { speaker: 'BRUTUS', lines: 'Good gentlemen, look fresh and merrily.\nLet not our looks put on our purposes,\nBut bear it as our Roman actors do,\nWith untired spirits and formal constancy.\nAnd so good morrow to you every one.' },
        { speaker: 'BRUTUS', lines: 'Boy! Lucius!—Fast asleep? It is no matter.\nEnjoy the honey-heavy dew of slumber.\nThou hast no figures nor no fantasies,\nWhich busy care draws in the brains of men.\nTherefore thou sleep’st so sound.' },
        { speaker: 'PORTIA', lines: 'Brutus, my lord.' },
        { speaker: 'BRUTUS', lines: 'Portia, what mean you? Wherefore rise you now?\nIt is not for your health thus to commit\nYour weak condition to the raw, cold morning.' },
        { speaker: 'PORTIA', lines: 'Nor for yours neither. Y\' have ungently, Brutus,\nStole from my bed. And yesternight, at supper,\nYou suddenly arose and walked about,\nMusing and sighing, with your arms across,\nAnd when I asked you what the matter was,\nYou stared upon me with ungentle looks.\nI urged you further, then you scratched your head\nAnd too impatiently stamped with your foot.\nYet I insisted; yet you answered not,\nBut with an angry wafture of your hand\nGave sign for me to leave you. So I did,\nFearing to strengthen that impatience\nWhich seemed too much enkindled, and withal\nHoping it was but an effect of humor,\nWhich sometime hath his hour with every man.\nIt will not let you eat nor talk nor sleep,\nAnd could it work so much upon your shape\nAs it hath much prevailed on your condition,\nI should not know you, Brutus. Dear my lord,\nMake me acquainted with your cause of grief.' },
        { speaker: 'BRUTUS', lines: 'I am not well in health, and that is all.' },
        { speaker: 'PORTIA', lines: 'Brutus is wise, and were he not in health,\nHe would embrace the means to come by it.' },
        { speaker: 'BRUTUS', lines: 'Why, so I do. Good Portia, go to bed.' },
        { speaker: 'PORTIA', lines: 'Is Brutus sick? And is it physical\nTo walk unbracèd and suck up the humors\nOf the dank morning? What, is Brutus sick,\nAnd will he steal out of his wholesome bed,\nTo dare the vile contagion of the night\nAnd tempt the rheumy and unpurgèd air\nTo add unto his sickness? No, my Brutus.\nYou have some sick offense within your mind,\nWhich by the right and virtue of my place\nI ought to know of. (kneels) And upon my knees\nI charm you, by my once-commended beauty,\nBy all your vows of love and that great vow\nWhich did incorporate and make us one\nThat you unfold to me, your self, your half,\nWhy you are heavy, and what men tonight\nHave had to resort to you. For here have been\nSome six or seven who did hide their faces\nEven from darkness.' },
        { speaker: 'BRUTUS', lines: 'Kneel not, gentle Portia.' },
        { speaker: 'PORTIA', lines: '(rising) I should not need if you were gentle, Brutus.\nWithin the bond of marriage, tell me, Brutus,\nIs it excepted I should know no secrets\nThat appertain to you? Am I yourself\nBut, as it were, in sort or limitation,\nTo keep with you at meals, comfort your bed,\nAnd talk to you sometimes? Dwell I but in the suburbs\nOf your good pleasure? If it be no more,\nPortia is Brutus\' harlot, not his wife.' },
        { speaker: 'BRUTUS', lines: 'You are my true and honorable wife,\nAs dear to me as are the ruddy drops\nThat visit my sad heart.' },
        { speaker: 'PORTIA', lines: 'If this were true, then should I know this secret.\nI grant I am a woman, but withal\nA woman that Lord Brutus took to wife.\nI grant I am a woman, but withal\nA woman well-reputed, Cato’s daughter.\nThink you I am no stronger than my sex,\nBeing so fathered and so husbanded?\nTell me your counsels. I will not disclose \'em.\nI have made strong proof of my constancy,\nGiving myself a voluntary wound\nHere in the thigh. Can I bear that with patience,\nAnd not my husband’s secrets?' },
        { speaker: 'BRUTUS', lines: 'O ye gods,\nRender me worthy of this noble wife!' },
        { speaker: 'BRUTUS', lines: 'Hark, hark! One knocks. Portia, go in awhile.\nAnd by and by thy bosom shall partake\nThe secrets of my heart.\nAll my engagements I will construe to thee,\nAll the charactery of my sad brows.\nLeave me with haste.' },
        { speaker: 'BRUTUS', lines: 'Lucius, who’s that knocking?' },
        { speaker: 'LUCIUS', lines: 'He is a sick man that would speak with you.' },
        { speaker: 'BRUTUS', lines: 'Caius Ligarius, that Metellus spake of.—\nBoy, stand aside.—Caius Ligarius, how?' },
        { speaker: 'LIGARIUS', lines: 'Vouchsafe good morrow from a feeble tongue.' },
        { speaker: 'BRUTUS', lines: 'O, what a time have you chose out, brave Caius,\nTo wear a kerchief! Would you were not sick!' },
        { speaker: 'LIGARIUS', lines: 'I am not sick if Brutus have in hand\nAny exploit worthy the name of honor.' },
        { speaker: 'BRUTUS', lines: 'Such an exploit have I in hand, Ligarius,\nHad you a healthful ear to hear of it.' },
        { speaker: 'LIGARIUS', lines: '(removes his kerchief) By all the gods that Romans bow before,\nI here discard my sickness! Soul of Rome,\nBrave son derived from honorable loins,\nThou, like an exorcist, hast conjured up\nMy mortifièd spirit. Now bid me run,\nAnd I will strive with things impossible,\nYea, get the better of them. What’s to do?' },
        { speaker: 'BRUTUS', lines: 'A piece of work that will make sick men whole.' },
        { speaker: 'LIGARIUS', lines: 'But are not some whole that we must make sick?' },
        { speaker: 'BRUTUS', lines: 'That must we also. What it is, my Caius,\nI shall unfold to thee as we are going\nTo whom it must be done.' },
        { speaker: 'LIGARIUS', lines: 'Set on your foot,\nAnd with a heart new-fired I follow you,\nTo do I know not what. But it sufficeth\nThat Brutus leads me on.' },
        { speaker: 'BRUTUS', lines: 'Follow me, then.' }
    ],
    'Normal English': [
        { speaker: 'BRUTUS', lines: 'Hey, Lucius!—\nI can\'t tell by the stars\nHow close to morning it is.—Lucius, I said!—\nI wish it were my fault that I sleep so soundly.—\nLucius, when are you coming? Wake up, I say! Hey, Lucius!' },
        { speaker: 'LUCIUS', lines: 'Did you call, my lord?' },
        { speaker: 'BRUTUS', lines: 'Get me a candle for my study, Lucius.\nWhen it\'s lit, come and call me here.' },
        { speaker: 'LUCIUS', lines: 'I will, my lord.' },
        { speaker: 'BRUTUS', lines: 'It must be through his death, and for my part,\nI have no personal reason to act against him,\nOnly for the public good. He wants to be crowned.\nHow that might change his nature, that’s the question.\nIt’s the bright day that brings out the viper,\nAnd that requires careful walking. Crown him,\nAnd then I admit we give him a sting\nThat he can use to do harm whenever he wants.\nThe abuse of greatness happens when it separates\nConscience from power. And, to be honest about Caesar,\nI have never known his emotions to overpower\nHis reason. But it\'s a common fact\nThat humility is the ladder for a young ambitious man,\nWhich the climber looks up to.\nBut once he reaches the top rung,\nHe then turns his back on the ladder,\nLooks to the clouds, and scorns the lower steps\nBy which he climbed. Caesar might do the same.\nSo, to prevent that, we must act. And since our argument\nHas no basis in what he is now,\nLet’s frame it this way: that what he is, if magnified,\nWould lead to such and such extremes.\nAnd therefore, let’s think of him as a serpent’s egg—\nWhich, once hatched, would, like its kind, become dangerous—\nAnd kill him while he\'s still in the shell.' },
        { speaker: 'LUCIUS', lines: 'The candle is burning in your study, sir.\nWhile searching the window for a flint, I found\nThis paper, sealed like this, and I am sure\nIt wasn’t there when I went to bed.' },
        { speaker: 'BRUTUS', lines: 'Go back to bed. It is not daytime yet.\nIsn\'t tomorrow, boy, the Ides of March?' },
        { speaker: 'LUCIUS', lines: 'I don\'t know, sir.' },
        { speaker: 'BRUTUS', lines: 'Look in the calendar and let me know.' },
        { speaker: 'LUCIUS', lines: 'I will, sir.' },
        { speaker: 'BRUTUS', lines: 'The meteors whizzing in the air\nGive so much light that I can read by them.\n"Brutus, you are sleeping. Wake up, and see yourself.\nShall Rome, etc. Speak, strike, correct!"\n"Brutus, you are sleeping. Wake up."\nSuch suggestions have often been left\nWhere I have found them.\n—"Shall Rome, etc." I must figure it out:\n"Shall Rome live in awe of one man?" What, Rome?\nMy ancestors drove the Tarquin from the streets of Rome\nWhen he was called a king.\n—"Speak, strike, correct!" Am I being asked\nTo speak and strike? O Rome, I promise you,\nIf correction will follow, you will receive\nYour full request from the hand of Brutus!' },
        { speaker: 'LUCIUS', lines: 'Sir, fifteen days of March have passed.' },
        { speaker: 'BRUTUS', lines: 'That\'s good. Go to the gate. Somebody is knocking.' },
        { speaker: 'BRUTUS', lines: 'Since Cassius first incited me against Caesar,\nI have not slept.\nBetween the acting of a dreadful thing\nAnd the first thought of it, the whole interval is\nLike a hallucination or a hideous dream.\nThe mind and the body’s instruments\nAre then in a council, and the state of a man,\nLike a small kingdom, then suffers\nThe nature of an insurrection.' },
        { speaker: 'LUCIUS', lines: 'Sir, it is your brother-in-law Cassius at the door,\nWho wishes to see you.' },
        { speaker: 'BRUTUS', lines: 'Is he alone?' },
        { speaker: 'LUCIUS', lines: 'No, sir, there are more people with him.' },
        { speaker: 'BRUTUS', lines: 'Do you know them?' },
        { speaker: 'LUCIUS', lines: 'No, sir. Their hats are pulled down over their ears,\nAnd half their faces are buried in their cloaks,\nSo that there is no way I can identify them\nBy any feature.' },
        { speaker: 'BRUTUS', lines: 'Let them enter.\nThey are the conspirators.\nOh, conspiracy,\nAre you ashamed to show your dangerous face by night\nWhen evil things are most free? Oh, then by day\nWhere will you find a cave dark enough\nTo mask your monstrous face? Don\'t look for one, conspiracy.\nHide it in smiles and friendliness.\nFor if you walk in your true form,\nNot even hell itself would be dim enough\nTo hide you from being prevented.' },
        { speaker: 'CASSIUS', lines: 'I think we are being too bold by disturbing your rest.\nGood morning, Brutus. Are we troubling you?' },
        { speaker: 'BRUTUS', lines: 'I have been up for an hour, awake all night.\nDo I know these men who have come with you?' },
        { speaker: 'CASSIUS', lines: 'Yes, every one of them, and there is no man here\nWho does not honor you, and every one wishes\nYou had the same opinion of yourself\nThat every noble Roman has of you.\nThis is Trebonius.' },
        { speaker: 'BRUTUS', lines: 'He is welcome here.' },
        { speaker: 'CASSIUS', lines: 'This is Decius Brutus.' },
        { speaker: 'BRUTUS', lines: 'He is welcome too.' },
        { speaker: 'CASSIUS', lines: 'This is Casca. This is Cinna. And this is Metellus Cimber.' },
        { speaker: 'BRUTUS', lines: 'They are all welcome.\nWhat watchful worries are keeping you\nFrom sleeping at night?' },
        { speaker: 'CASSIUS', lines: 'May I have a word with you?' },
        { speaker: 'DECIUS', lines: 'The east is over here. Isn\'t the day breaking here?' },
        { speaker: 'CASCA', lines: 'No.' },
        { speaker: 'CINNA', lines: 'Oh, pardon me, sir, it is, and those gray lines\nThat streak the clouds are messengers of day.' },
        { speaker: 'CASCA', lines: 'You will have to admit that you are both mistaken.\nHere, where I point my sword, the sun rises,\nWhich is a good way south,\nConsidering the youthful season of the year.\nIn about two months, it will rise higher toward the north,\nAnd the high east\nStands directly here, just like the Capitol.' },
        { speaker: 'BRUTUS', lines: 'Give me your hands, all of you, one by one.' },
        { speaker: 'CASSIUS', lines: 'And let us swear an oath for our resolution.' },
        { speaker: 'BRUTUS', lines: 'No, not an oath. If the honest faces of men,\nThe suffering of our souls, the corruption of our time—\nIf these motives are weak, then let\'s stop right now,\nAnd every man go home to his idle bed.\nSo let high-and-mighty tyranny continue\nUntil each man dies by chance. But if these—\nAs I am sure they do—carry enough fire\nTo ignite cowards and to steel with courage\nThe melting spirits of women, then, my countrymen,\nWhat other motivation do we need but our own cause\nTo push us to action? What other bond\nThan secret Romans who have given their word\nAnd will not back out? And what other oath\nThan honesty pledged to honesty,\nThat this will happen, or we will die for it?\nLet priests and cowards and cautious men swear oaths,\nOld feeble corpses and such suffering souls\nThat welcome injustice. Let such creatures that men doubt\nSwear to bad causes. But do not stain\nThe pure virtue of our enterprise,\nNor the irrepressible spirit of our souls,\nTo think that either our cause or our actions\nNeeded an oath, when every drop of blood\nThat every Roman carries—and carries nobly—\nIs guilty of a separate act of betrayal\nIf he breaks the smallest part\nOf any promise that he has made.' },
        { speaker: 'CASSIUS', lines: 'But what about Cicero? Should we ask him?\nI think he will stand very strong with us.' },
        { speaker: 'CASCA', lines: 'Let\'s not leave him out.' },
        { speaker: 'CINNA', lines: 'No, by no means.' },
        { speaker: 'METELLUS', lines: 'Oh, let\'s have him, for his silver hair\nWill win us a good opinion\nAnd buy men\'s support to praise our deeds.\nIt will be said his judgment guided our hands.\nOur youth and wildness will not be apparent,\nBut all will be buried in his seriousness.' },
        { speaker: 'BRUTUS', lines: 'Oh, do not mention him. Let us not involve him,\nFor he will never follow anything\nThat other men begin.' },
        { speaker: 'CASSIUS', lines: 'Then leave him out.' },
        { speaker: 'CASCA', lines: 'Indeed, he is not suitable.' },
        { speaker: 'DECIUS', lines: 'Should no one else be targeted but only Caesar?' },
        { speaker: 'CASSIUS', lines: 'Decius, that\'s a good point. I don\'t think it\'s right\nThat Mark Antony, so well-loved by Caesar,\nShould outlive Caesar. We will find that he is\nA shrewd plotter. And, you know, his resources,\nIf he uses them well, may stretch so far\nAs to harm us all; to prevent that,\nLet Antony and Caesar fall together.' },
        { speaker: 'BRUTUS', lines: 'Our course of action will seem too bloody, Caius Cassius,\nTo cut off the head and then hack the limbs,\nLike showing wrath in death and envy afterwards,\nFor Antony is just a limb of Caesar.\nLet us be sacrificers, not butchers, Caius.\nWe all stand up against the spirit of Caesar,\nAnd in the spirit of men there is no blood.\nOh, if only we could get to Caesar’s spirit\nAnd not dismember Caesar! But, alas,\nCaesar must bleed for it. And, gentle friends,\nLet’s kill him boldly, but not wrathfully.\nLet’s carve him as a dish fit for the gods,\nNot chop him up like a carcass fit for hounds.\nAnd let our hearts, as subtle masters do,\nStir up their servants to an act of rage\nAnd then seem to scold them. This will make\nOur purpose seem necessary and not envious,\nAnd when it appears so to the common people,\nWe shall be called purifiers, not murderers.\nAnd as for Mark Antony, don\'t think about him,\nFor he can do no more than Caesar’s arm can\nWhen Caesar’s head is off.' },
        { speaker: 'CASSIUS', lines: 'Yet I fear him.\nFor in the deep-rooted love he has for Caesar—' },
        { speaker: 'BRUTUS', lines: 'Alas, good Cassius, do not think about him.\nIf he loves Caesar, all he can do\nIs to himself: grieve and die for Caesar.\nAnd it would be a great thing if he did, for he is given\nTo sports, to wildness, and much socializing.' },
        { speaker: 'TREBONIUS', lines: 'There is nothing to fear in him. Let him not die,\nFor he will live and laugh at this later.' },
        { speaker: 'BRUTUS', lines: 'Quiet! Count the clock.' },
        { speaker: 'CASSIUS', lines: 'The clock has struck three.' },
        { speaker: 'TREBONIUS', lines: 'It\'s time to leave.' },
        { speaker: 'CASSIUS', lines: 'But it is still doubtful\nWhether Caesar will come out today or not.\nFor he has grown superstitious lately,\nCompletely different from the strong opinion he once held\nAgainst fantasy, dreams, and ceremonies.\nIt may be that these obvious omens,\nThe unusual terror of this night,\nAnd the persuasion of his fortune-tellers\nMay keep him from the Capitol today.' },
        { speaker: 'DECIUS', lines: 'Never fear that. If he is so resolved,\nI can persuade him. For he loves to hear\nThat unicorns can be betrayed with trees,\nAnd bears with mirrors, elephants with holes,\nLions with nets, and men with flatterers.\nBut when I tell him he hates flatterers,\nHe says he does, while being most flattered.\nLet me handle it.\nFor I can shape his mood in the right way,\nAnd I will bring him to the Capitol.' },
        { speaker: 'CASSIUS', lines: 'No, all of us will be there to fetch him.' },
        { speaker: 'BRUTUS', lines: 'By the eighth hour. Is that the latest?' },
        { speaker: 'CINNA', lines: 'Let that be the latest, and don\'t be late then.' },
        { speaker: 'METELLUS', lines: 'Caius Ligarius dislikes Caesar,\nWho scolded him for speaking well of Pompey.\nI wonder why none of you have thought of him.' },
        { speaker: 'BRUTUS', lines: 'Now, good Metellus, go to him.\nHe likes me well, and I have given him reasons.\nJust send him here and I will persuade him.' },
        { speaker: 'CASSIUS', lines: 'The morning is coming. We’ll leave you, Brutus.\n—And, friends, go your separate ways. But all remember\nWhat you have said, and show yourselves to be true Romans.' },
        { speaker: 'BRUTUS', lines: 'Good gentlemen, look fresh and cheerful.\nLet not our expressions reveal our intentions,\nBut carry it as our Roman actors do,\nWith untired spirits and formal composure.\nAnd so good morning to every one of you.' },
        { speaker: 'BRUTUS', lines: 'Boy! Lucius!—Sound asleep? It doesn\'t matter.\nEnjoy the heavy, sweet dew of slumber.\nYou have no worries or anxieties,\nWhich busy care creates in the minds of men.\nThat is why you sleep so soundly.' },
        { speaker: 'PORTIA', lines: 'Brutus, my lord.' },
        { speaker: 'BRUTUS', lines: 'Portia, what are you doing? Why are you up now?\nIt is not good for your health to expose\nYour weak condition to the raw, cold morning.' },
        { speaker: 'PORTIA', lines: 'Nor for yours either. You have unkindly, Brutus,\nStolen from my bed. And last night, at supper,\nYou suddenly got up and walked about,\nMusing and sighing, with your arms crossed,\nAnd when I asked you what the matter was,\nYou stared at me with an unkind look.\nI urged you further, then you scratched your head\nAnd stamped your foot too impatiently.\nYet I insisted; yet you did not answer,\nBut with an angry wave of your hand\nGave me a sign to leave you. So I did,\nFearing to strengthen that impatience\nWhich seemed too much ignited, and at the same time\nHoping it was just an effect of a bad mood,\nWhich every man has from time to time.\nIt will not let you eat, or talk, or sleep,\nAnd if it could affect your appearance\nAs much as it has affected your mood,\nI would not recognize you, Brutus. Dear my lord,\nTell me the cause of your grief.' },
        { speaker: 'BRUTUS', lines: 'I am not in good health, and that is all.' },
        { speaker: 'PORTIA', lines: 'Brutus is wise, and if he were not in good health,\nHe would take the means to get better.' },
        { speaker: 'BRUTUS', lines: 'Why, so I do. Good Portia, go to bed.' },
        { speaker: 'PORTIA', lines: 'Is Brutus sick? And is it healthy\nTo walk without a coat and breathe in the vapors\nOf the damp morning? What, is Brutus sick,\nAnd will he sneak out of his wholesome bed,\nTo dare the vile contagion of the night\nAnd tempt the damp and impure air\nTo add to his sickness? No, my Brutus.\nYou have some sickness of the mind,\nWhich by the right and virtue of my position\nI ought to know about. (kneels) And on my knees\nI implore you, by my once-praised beauty,\nBy all your vows of love and that great vow\nWhich incorporated and made us one,\nThat you reveal to me, your other half,\nWhy you are so sad, and what men tonight\nHave had to come to you. For there have been\nSome six or seven here who hid their faces\nEven from the darkness.' },
        { speaker: 'BRUTUS', lines: 'Do not kneel, gentle Portia.' },
        { speaker: 'PORTIA', lines: '(rising) I should not need to if you were gentle, Brutus.\nWithin the bond of marriage, tell me, Brutus,\nIs it an exception that I should know no secrets\nThat concern you? Am I your self\nOnly in a limited way,\nTo eat with you, comfort your bed,\nAnd talk to you sometimes? Do I live only in the outskirts\nOf your good pleasure? If it is no more,\nPortia is Brutus\' prostitute, not his wife.' },
        { speaker: 'BRUTUS', lines: 'You are my true and honorable wife,\nAs dear to me as the red drops of blood\nThat visit my sad heart.' },
        { speaker: 'PORTIA', lines: 'If this were true, then I should know this secret.\nI admit I am a woman, but at the same time\nA woman that Lord Brutus took as his wife.\nI admit I am a woman, but at the same time\nA well-respected woman, Cato’s daughter.\nDo you think I am no stronger than my sex,\nBeing so fathered and so husbanded?\nTell me your plans. I will not disclose them.\nI have given strong proof of my loyalty,\nBy giving myself a voluntary wound\nHere in the thigh. Can I bear that with patience,\nAnd not my husband’s secrets?' },
        { speaker: 'BRUTUS', lines: 'Oh, you gods,\nMake me worthy of this noble wife!' },
        { speaker: 'BRUTUS', lines: 'Listen, listen! Someone is knocking. Portia, go inside for a while.\nAnd soon your heart shall share\nThe secrets of my heart.\nAll my commitments I will explain to you,\nAll the meaning of my sad expressions.\nLeave me quickly.' },
        { speaker: 'BRUTUS', lines: 'Lucius, who’s that knocking?' },
        { speaker: 'LUCIUS', lines: 'It is a sick man who wants to speak with you.' },
        { speaker: 'BRUTUS', lines: 'Caius Ligarius, the one Metellus spoke of.—\nBoy, stand aside.—Caius Ligarius, how are you?' },
        { speaker: 'LIGARIUS', lines: 'Accept a good morning from a feeble tongue.' },
        { speaker: 'BRUTUS', lines: 'Oh, what a time you have chosen, brave Caius,\nTo wear a scarf! I wish you were not sick!' },
        { speaker: 'LIGARIUS', lines: 'I am not sick if Brutus has in hand\nAny undertaking worthy of the name of honor.' },
        { speaker: 'BRUTUS', lines: 'I have such an undertaking in hand, Ligarius,\nIf you had a healthy ear to hear of it.' },
        { speaker: 'LIGARIUS', lines: '(removes his scarf) By all the gods that Romans bow before,\nI hereby discard my sickness! Soul of Rome,\nBrave son descended from honorable ancestors,\nYou, like an exorcist, have summoned up\nMy deadened spirit. Now tell me to run,\nAnd I will strive against impossible things,\nYes, get the better of them. What’s to be done?' },
        { speaker: 'BRUTUS', lines: 'A piece of work that will make sick men healthy.' },
        { speaker: 'LIGARIUS', lines: 'But are there not some healthy men that we must make sick?' },
        { speaker: 'BRUTUS', lines: 'We must do that also. What it is, my Caius,\nI will reveal to you as we are going\nTo the one to whom it must be done.' },
        { speaker: 'LIGARIUS', lines: 'Lead the way,\nAnd with a newly-fired heart I follow you,\nTo do I know not what. But it is enough\nThat Brutus leads me on.' },
        { speaker: 'BRUTUS', lines: 'Follow me, then.' }
    ],
    Hinglish: [
        { speaker: 'BRUTUS', lines: 'Kaha ho, Lucius!—\nMain sitaron ki progress se andaza nahi laga sakta\nKi din nikalne ke kitna kareeb hai.—Lucius, maine kaha!—\nKaash yeh meri galti hoti ki main itni gehri neend sota hoon.—\nKab, Lucius, kab? Jaag jao, maine kaha! Kaha ho, Lucius!' },
        { speaker: 'LUCIUS', lines: 'Aapne bulaya, my lord?' },
        { speaker: 'BRUTUS', lines: 'Mere study mein ek taper (mombatti) le aao, Lucius.\nJab woh jal jaaye, toh yahan aakar mujhe bulana.' },
        { speaker: 'LUCIUS', lines: 'Ji, my lord.' },
        { speaker: 'BRUTUS', lines: 'Yeh uski maut se hi hona chahiye, aur meri taraf se\nMujhe usse nafrat karne ka koi personal reason nahi pata\nSirf general (aam janta) ke liye. Woh crowned (raja) banna chahta hai.\nIsse uska nature kaise badal sakta hai, yahi question hai.\nYeh bright day hi hai jo adder (saamp) ko bahar nikalta hai\nAur iske liye wary walking (savdhani se chalna) zaroori hai. Use crown pehnao,\nAur phir main maanta hoon ki hum usmein ek sting (dank) daal denge\nJisse woh apni marzi se danger (khatra) paida kar sakta hai.\nGreatness ka abuse tab hota hai jab woh\nPower se remorse (pachtawa) ko alag kar deti hai. Aur, Caesar ka sach kahun toh,\nMaine nahi jaana ki kab uske affections (bhavnayein) uske reason (tark) se zyada haavi hui hain.\nLekin yeh ek common proof hai\nKi lowliness (vinamrata) young ambition ki ladder (seedhi) hai,\nJiski taraf upar chadhne wala apna chehra karta hai.\nLekin jab woh ek baar sabse upar pahunch jaata hai,\nToh woh ladder ki taraf peeth kar leta hai,\nClouds (badalon) mein dekhta hai, un base degrees (nichle padon) ko scorn (tiraskar) karta hai\nJinse woh upar chadha tha. Caesar bhi aisa kar sakta hai.\nToh, kahin woh aisa na kare, use roko. Aur kyunki is quarrel (jhagde) ka\nUske abhi ke roop ke liye koi color (aadhaar) nahi hoga,\nIse is tarah fashion (roop) do: ki woh jo hai, agar badh gaya,\nToh in aur in extremities (charam seemaon) tak pahunch jayega.\nAur isliye use ek serpent’s egg (saamp ka anda) samjho—\nJo, hatch hone ke baad, apni prajati ki tarah mischievous (shararati) ho jayega—\nAur use shell (kavach) mein hi maar do.' },
        { speaker: 'LUCIUS', lines: 'Taper aapke closet (kamre) mein jal raha hai, sir.\nKhidki mein flint (pathar) dhoondhte hue, mujhe yeh paper mila,\nIs tarah se seal kiya hua, aur mujhe yakeen hai\nYeh wahan nahi pada tha jab main sone gaya tha.' },
        { speaker: 'BRUTUS', lines: 'Tum phir se sone jao. Abhi din nahi hua hai.\nKya kal, ladke, ides of March nahi hai?' },
        { speaker: 'LUCIUS', lines: 'Mujhe nahi pata, sir.' },
        { speaker: 'BRUTUS', lines: 'Calendar mein dekho aur mujhe batao.' },
        { speaker: 'LUCIUS', lines: 'Ji, sir.' },
        { speaker: 'BRUTUS', lines: 'Hawa mein sarsarati hui exhalations (ulka) itni roshni de rahi hain ki main unse padh sakta hoon.\n“Brutus, tu so raha hai. Jaag, aur apne aap ko dekh.\nKya Rome, etc. Bol, maar, sudhar!”\n“Brutus, tu so raha hai. Jaag.”\nAise instigations (uksahaton) ko aksar giraya gaya hai\nJahan maine unhe uthaya hai.\n—“Kya Rome, etc.” Isse mujhe is tarah jodna hoga:\n“Kya Rome ek aadmi ke awe (darr) ke neeche rahega?” Kya, Rome?\nMere purvajon ne Rome ki galiyon se\nTarquin ko bhagaya tha jab use raja kaha jaata tha.\n—“Bol, maar, sudhar!” Kya mujhse request ki jaa rahi hai\nBolne aur maarne ki? O Rome, main tumse promise karta hoon,\nAgar sudhar hoga, toh tum apni poori petition\nBrutus ke haathon se prapt karogi!' },
        { speaker: 'LUCIUS', lines: 'Sir, March ke pandrah din waste ho chuke hain.' },
        { speaker: 'BRUTUS', lines: 'Yeh achha hai. Gate par jao. Koi knock kar raha hai.' },
        { speaker: 'BRUTUS', lines: 'Jabse Cassius ne mujhe Caesar ke khilaaf whet (bharkaya) kiya hai,\nMain soya nahi hoon.\nEk dreadful thing (bhayank) ke acting (karne)\nAur first motion (pehli soch) ke beech, saara interim (samay)\nEk phantasma (bhram) ya ek hideous dream (darawne sapne) jaisa hota hai.\nGenius (aatma) aur mortal instruments (sharirik ang)\nTab council (salah) mein hote hain, aur man ka state (stithi),\nEk chote se kingdom (rajya) ki tarah, tab\nEk insurrection (vidroh) ki nature (prakriti) se guzarta hai.' },
        { speaker: 'LUCIUS', lines: 'Sir, aapke brother (saale) Cassius darwaze par hain,\nJo aapse milna chahte hain.' },
        { speaker: 'BRUTUS', lines: 'Kya woh akele hain?' },
        { speaker: 'LUCIUS', lines: 'Nahi, sir, unke saath aur bhi log hain.' },
        { speaker: 'BRUTUS', lines: 'Kya tum unhe jaante ho?' },
        { speaker: 'LUCIUS', lines: 'Nahi, sir. Unke hats unke kaano par jhuke hue hain,\nAur unke aadhe chehre unke cloaks (chogon) mein chipe hain,\nKi main unhe kisi bhi tarah se\nKisi bhi mark of favor (pehchan) se discover (pehchan) nahi sakta.' },
        { speaker: 'BRUTUS', lines: 'Unhe andar aane do.\nYeh wahi faction (guth) hai.\nO conspiracy (shadyantra),\nKya tumhe raat mein apna dangerous brow (chehra) dikhane mein sharam aati hai\nJab evils (buraiyan) sabse free hoti hain? O, toh din mein\nTumhe kahan itni andheri cavern (gufa) milegi\nApne monstrous visage (bhayanak chehre) ko chhupane ke liye? Koi mat dhoondo, conspiracy.\nIse smiles (muskan) aur affability (milansari) mein chhupao.\nKyunki agar tum apne native semblance (asli roop) mein chalte ho,\nToh Erebus (narak) bhi itna andhera nahi hoga\nKi tumhe prevention (roktham) se chupa sake.' },
        { speaker: 'CASSIUS', lines: 'Mujhe lagta hai ki humne aapke rest (aaram) mein zyada hi boldness dikha di.\nGood morrow, Brutus. Kya hum aapko trouble kar rahe hain?' },
        { speaker: 'BRUTUS', lines: 'Main is ghante se jaag raha hoon, poori raat jaaga hoon.\nKya main in aadmiyon ko jaanta hoon jo aapke saath aaye hain?' },
        { speaker: 'CASSIUS', lines: 'Haan, unmein se har ek, aur yahan koi aisa nahi hai\nJo aapka samman na karta ho, aur har koi chahta hai\nKi aapki khud ke baare mein wahi opinion ho\nJo har noble Roman aapke baare mein rakhta hai.\nYeh Trebonius hain.' },
        { speaker: 'BRUTUS', lines: 'Unka yahan swagat hai.' },
        { speaker: 'CASSIUS', lines: 'Yeh, Decius Brutus.' },
        { speaker: 'BRUTUS', lines: 'Unka bhi swagat hai.' },
        { speaker: 'CASSIUS', lines: 'Yeh, Casca. Yeh, Cinna. Aur yeh, Metellus Cimber.' },
        { speaker: 'BRUTUS', lines: 'Un sabka swagat hai.\nKaun si watchful cares (chintayein) aapki aankhon aur raat ke beech\nDakhal de rahi hain?' },
        { speaker: 'CASSIUS', lines: 'Kya main ek word (baat) kar sakta hoon?' },
        { speaker: 'DECIUS', lines: 'Yahan east (purab) hai. Kya din yahan nahi nikalta?' },
        { speaker: 'CASCA', lines: 'Nahi.' },
        { speaker: 'CINNA', lines: 'O, pardon, sir, nikalta hai, aur woh gray lines\nJo clouds (badalon) ko fret (sajati) karti hain, din ke messengers (sandeshवाहक) hain.' },
        { speaker: 'CASCA', lines: 'Aapko confess (kabul) karna hoga ki aap dono deceived (dhokhe mein) hain.\nYahan, jahan main apni sword point karta hoon, suraj ugta hai,\nJo south ki taraf kaafi badh raha hai,\nSaal ke youthful season ko dekhte hue.\nKuch do mahine baad, north ki taraf aur upar\nWoh pehle apni fire (aag) pesh karta hai, aur high east\nYahin, Capitol ki tarah, sidha khada hai.' },
        { speaker: 'BRUTUS', lines: 'Ek ek karke, mujhe apne haath do.' },
        { speaker: 'CASSIUS', lines: 'Aur aao hum apne resolution (sankalp) ki kasam khayein.' },
        { speaker: 'BRUTUS', lines: 'Nahi, koi oath (kasam) nahi. Agar aadmiyon ke chehre nahi,\nHamari aatmaon ka sufferance (kasht), samay ka abuse—\nAgar yeh motives kamzor hain, toh turant ruk jao,\nAur har aadmi yahan se apne aalsi bed par chala jaye.\nToh high-sighted tyranny (crूर shasan) ko chalne do\nJab tak har aadmi lottery se na gir jaye. Lekin agar yeh—\nJaisa ki mujhe yakeen hai—kaafi aag rakhte hain\nCowards (kaayaron) ko jalane aur valor (bahaduri) se steel (mazboot) karne ke liye\nWomen (auraton) ki pighalti spirits (aatmaon) ko, toh, countrymen (deshwasiyon),\nHamein apni cause ke alawa aur kis spur (prerna) ki zaroorat hai\nHamein redress (sudhar) ke liye prick (uksane) ki? Kaun sa doosra bond\nSecret Romans ke alawa jinhone shabd kaha hai\nAur palter (dagabaazi) nahi karenge? Aur kaun si doosri oath\nHonesty (imandari) se honesty se judi hui ke alawa,\nKi yeh hoga, ya hum iske liye gir jayenge?\nPriests (pujari) aur cowards (kayar) aur cautelous (satark) logon ko kasam khane do,\nBoodhe kamzor carrions (lashon) aur aisi peedit aatmaon ko\nJo galat ka swagat karti hain. Bure kaamon ke liye aisi\nCreatures (praniyon) ko kasam khane do jin par log shak karte hain. Lekin\nHamare enterprise (udyog) ki even virtue (nirmal sadgun) ko stain (daag) mat lagao,\nNa hi hamari spirits ki insuppressive mettle (adamy sahas) ko,\nYeh sochkar ki hamare cause ya hamare performance ko\nEk oath ki zaroorat thi, jab har boond khoon\nJo har Roman ke paas hai—aur shaan se hai—\nEk alag bastardy (haramipan) ka doshi hai\nAgar woh uske diye gaye kisi bhi vaade ke\nSabse chote particle (kan) ko bhi todta hai.' },
        { speaker: 'CASSIUS', lines: 'Lekin Cicero ka kya? Kya hum unhe sound (pata lagayein) karein?\nMujhe lagta hai woh hamare saath bahut strong khade rahenge.' },
        { speaker: 'CASCA', lines: 'Hamein unhe chhodna nahi chahiye.' },
        { speaker: 'CINNA', lines: 'Nahi, bilkul nahi.' },
        { speaker: 'METELLUS', lines: 'O, hamein unhe shaamil karna chahiye, kyunki unke silver hairs (safed baal)\nHamein ek achhi opinion dilayenge\nAur logon ki voices (samarthan) kharidenge hamare deeds (kaamon) ki tareef karne ke liye.\nYeh kaha jayega ki unke judgment (nirnay) ne hamare haathon ko rule (niyantrit) kiya.\nHamari youth (jawani) aur wildness (pagalpan) bilkul nahi dikhegi,\nBalki sab unki gravity (gambhirta) mein dafan ho jayega.' },
        { speaker: 'BRUTUS', lines: 'O, unka naam mat lo. Hamein unse break (sambandh todna) nahi karna chahiye,\nKyunki woh kabhi bhi aisi cheez follow nahi karenge\nJo doosre log shuru karte hain.' },
        { speaker: 'CASSIUS', lines: 'Toh unhe chhod do.' },
        { speaker: 'CASCA', lines: 'Beshak woh fit nahi hain.' },
        { speaker: 'DECIUS', lines: 'Kya sirf Caesar ko hi touch (chhua) jayega, kisi aur ko nahi?' },
        { speaker: 'CASSIUS', lines: 'Decius, achha point uthaya. Mujhe nahi lagta yeh meet (uchit) hai\nKi Mark Antony, jo Caesar ka itna priya hai,\nCaesar ke baad zinda rahe. Hum usmein ek\nShrewd contriver (chalaak shadyantrakari) payenge. Aur, aap jaante hain, uske means (sadhan),\nAgar woh unhe improve (sudhare) karta hai, toh kaafi aage tak ja sakte hain\nKi hum sabko annoy (pareshan) kar sakein; jise prevent (rokne) ke liye,\nAntony aur Caesar ko ek saath girne do.' },
        { speaker: 'BRUTUS', lines: 'Hamara course (raasta) bahut bloody (khooni) lagega, Caius Cassius,\nSar kaat kar phir limbs (ango) ko hack (kaatna),\nJaise maut mein krodh aur baad mein irshya,\nKyunki Antony sirf Caesar ka ek limb (ang) hai.\nAao hum sacrificers (balidaan karne wale) banein, butchers (kasai) nahi, Caius.\nHum sab Caesar ki spirit (aatma) ke khilaaf khade hain,\nAur aadmiyon ki spirit mein koi blood (khoon) nahi hota.\nOh, kaash hum Caesar ki spirit tak pahunch sakte\nAur Caesar ko dismember (ang-bhang) na karte! Lekin, afsos,\nCaesar ko iske liye bleed (khoon bahana) karna padega. Aur, gentle friends,\nAao use boldly (bahaduri se) maarein, wrathfully (krodh se) nahi.\nAao use ek dish ki tarah carve (tarashe) karein jo devtaon ke liye fit ho,\nUse ek carcass (lash) ki tarah na kaatein jo kutton ke liye fit ho.\nAur hamare dil, jaise subtle masters (chatur malik) karte hain,\nApne servants (naukar) ko ek krodh ke kaam ke liye bhadkayein\nAur baad mein unhe daantne ka natak karein. Isse hamara\nPurpose (uddeshya) zaroori lagega, envious (irshyapurn) nahi,\nJo aam aankhon ko aisa dikhne par,\nHamein purgers (shuddhi karne wale) kaha jayega, murderers (hatyare) nahi.\nAur Mark Antony ke baare mein mat socho,\nKyunki woh Caesar ke haath se zyada kuch nahi kar sakta\nJab Caesar ka sar kat jayega.' },
        { speaker: 'CASSIUS', lines: 'Phir bhi mujhe usse darr lagta hai.\nKyunki uske andar Caesar ke prati jo engrafted love (gehra pyaar) hai—' },
        { speaker: 'BRUTUS', lines: 'Afsoos, achhe Cassius, uske baare mein mat socho.\n agar woh Caesar se pyaar karta hai, toh woh jo kuch bhi kar sakta hai\nWoh khud se hai: soch mein padkar Caesar ke liye mar jaye.\nAur yeh bahut badi baat hogi, kyunki woh\nSports, wildness aur bahut company (sangat) ka shaukeen hai.' },
        { speaker: 'TREBONIUS', lines: 'Usmein koi darr nahi hai. Use marne mat do,\nKyunki woh zinda rahega aur is par baad mein hasega.' },
        { speaker: 'BRUTUS', lines: 'Shaant! Ghadi gino.' },
        { speaker: 'CASSIUS', lines: 'Ghadi ne teen bajaye hain.' },
        { speaker: 'TREBONIUS', lines: 'Alag hone ka samay ho gaya hai.' },
        { speaker: 'CASSIUS', lines: 'Lekin abhi bhi yeh doubtful (sandehpurn) hai\nKi Caesar aaj bahar aayega ya nahi.\nKyunki woh haal hi mein superstitious (andhvishwasi) ho gaya hai,\nApni us main opinion (mukhya rai) se bilkul alag jo woh kabhi rakhta tha\nFantasy, dreams aur ceremonies (rasmon) ke baare mein.\nHo sakta hai, yeh apparent prodigies (spasht ashubh sanket),\nIs raat ka an-accustomed terror (apratyashit aatank),\nAur uske augurers (bhavishyavaktaon) ka persuasion (manana)\nUse aaj Capitol se door rakhe.' },
        { speaker: 'DECIUS', lines: 'Is baat se kabhi mat daro. Agar woh itna hi resolved (dridh nishchayi) hai,\nToh main use o\'ersway (mana) kar sakta hoon. Kyunki use yeh sunna pasand hai\nKi unicorns (ek sing wale ghode) pedon se dhokha kha sakte hain,\nAur bears (bhalu) sheeshon se, elephants (haathi) gaddhon se,\nLions (sher) jaalon se, aur aadmi flatterers (chaaplooso) se.\nLekin jab main use kehta hoon ki woh flatterers se nafrat karta hai,\nToh woh kehta hai ki haan, jabki woh tab sabse zyada flattered (khushamad) hota hai.\nMujhe kaam karne do.\nKyunki main uske humor (mizaj) ko sahi disha de sakta hoon,\nAur main use Capitol le aaunga.' },
        { speaker: 'CASSIUS', lines: 'Nahi, hum sab wahan use lene jayenge.' },
        { speaker: 'BRUTUS', lines: 'Aathvein ghante tak. Kya yeh uttermost (antim seema) hai?' },
        { speaker: 'CINNA', lines: 'Wahi uttermost ho, aur tab fail mat hona.' },
        { speaker: 'METELLUS', lines: 'Caius Ligarius Caesar se sakht nafrat karta hai,\nJisne use Pompey ki tareef karne par daanta tha.\nMujhe hairani hai ki aap mein se kisi ne uske baare mein nahi socha.' },
        { speaker: 'BRUTUS', lines: 'Ab, achhe Metellus, uske paas jao.\nWoh mujhe bahut chahta hai, aur maine use reasons diye hain.\nUse bas yahan bhej do aur main use fashion (tayyar) kar lunga.' },
        { speaker: 'CASSIUS', lines: 'Subah ho rahi hai. Hum aapko chhodte hain, Brutus.\n—Aur, dosto, alag ho jao. Lekin sab yaad rakhna\nJo tumne kaha hai, aur khud ko sachhe Romans saabit karo.' },
        { speaker: 'BRUTUS', lines: 'Achhe gentlemen, fresh aur khush dikho.\nHamare looks ko hamare purposes (iradon) ko zahir na karne do,\nBalki ise hamare Roman actors ki tarah nibhao,\nBina thake spirits aur formal constancy (sthirta) ke saath.\nAur isliye aap sabko good morrow.' },
        { speaker: 'BRUTUS', lines: 'Ladke! Lucius!—Gehri neend mein soye ho? Koi baat nahi.\nNeend ki honey-heavy dew (madhur oss) ka anand lo.\nTumhare paas na koi figures (chintayein) hain na fantasies (kalpanayein),\nJo busy care (vyast chinta) aadmiyon ke dimaag mein laati hai.\nIsliye tum itni gehri neend so rahe ho.' },
        { speaker: 'PORTIA', lines: 'Brutus, mere swami.' },
        { speaker: 'BRUTUS', lines: 'Portia, tumhara kya matlab hai? Tum ab kyun uth gayi ho?\nApni kamzor condition ko is kachchi, thandi subah ke hawale karna\nTumhari health ke liye theek nahi hai.' },
        { speaker: 'PORTIA', lines: 'Na hi aapke liye. Aapne berahmi se, Brutus,\nMere bed se churaya hai. Aur kal raat, supper par,\nAap achanak uth gaye aur ghoomne lage,\nSochte hue aur aahein bharte hue, apne haath bandhe hue,\nAur jab maine aapse poocha ki kya baat hai,\nToh aapne mujhe berukhi se dekha.\nMaine aapse aur poocha, toh aapne apna sar khujaya\nAur bahut impatiently apne pair patke.\nPhir bhi maine zidd ki; phir bhi aapne jawab nahi diya,\nBalki apne haath ke ek gusse bhare ishare se\nMujhe jaane ka ishara kiya. Toh main chali gayi,\nUs impatience ko aur badhane se darte hue\nJo bahut zyada bhadki hui lag rahi thi, aur saath hi\nYeh ummeed karte hue ki yeh sirf ek humor (mizaj) ka prabhav tha,\nJo kabhi kabhi har aadmi ke saath hota hai.\nYeh aapko na khane dega, na baat karne dega, na sone dega,\nAur agar yeh aapke shape (roop) par utna hi kaam kar sakta\nJitna isne aapki condition (stithi) par kiya hai,\nToh main aapko pehchan nahi paati, Brutus. Mere priya swami,\nMujhe apni grief (dukh) ka kaaran bataiye.' },
        { speaker: 'BRUTUS', lines: 'Meri health theek nahi hai, bas itna hi hai.' },
        { speaker: 'PORTIA', lines: 'Brutus samajhdar hai, aur agar uski health theek nahi hoti,\nToh woh use theek karne ke sadhan apnata.' },
        { speaker: 'BRUTUS', lines: 'Kyun, main wahi kar raha hoon. Achhi Portia, sone jao.' },
        { speaker: 'PORTIA', lines: 'Kya Brutus bimar hai? Aur kya yeh physical (sharirik) hai\nKi bina kapdon ke ghoomna aur subah ki nami ko soखna?\nKya, Brutus bimar hai,\nAur kya woh apne swasth bed se nikal jayega,\nRaat ke gande contagion (sankraman) ka samna karne ke liye\nAur rheumy (nam) aur unpurgèd (ashuddh) hawa ko lalchane ke liye\nApni bimari mein इजाफा karne ke liye? Nahi, mere Brutus.\nAapke mann mein koi bimar offense (apradh) hai,\nJise meri jagah ke adhikar aur sadgun se\nMujhe jaanna chahiye. (ghutne tekti hai) Aur apne ghutno par\nMain aapse anurodh karti hoon, meri kabhi-prashansit sundarta se,\nAapke pyaar ke sabhi vachano se aur us mahan vachan se\nJisne hamein ek kiya aur ek banaya\nKi aap mujhe, apne aap ko, apne aadhe hisse ko batayein,\nKi aap kyun bhari hain, aur aaj raat kaun se log\nAapse milne aaye the. Kyunki yahan\nKuch chhe ya saat log the jinhone apne chehre\nAndhere se bhi chhupaye the.' },
        { speaker: 'BRUTUS', lines: 'Ghutne mat teko, bholi Portia.' },
        { speaker: 'PORTIA', lines: '(uthte hue) Mujhe zaroorat nahi padti agar aap bhole hote, Brutus.\nShaadi ke bandhan mein, mujhe batao, Brutus,\nKya yeh excepted (apvad) hai ki mujhe woh secrets nahi pata hone chahiye\nJo aapse sambandhit hain? Kya main aapki khud\nSirf ek tarah se, ya seema mein,\nAapke saath khana khane, aapke bed ko aaram dene,\nAur aapse kabhi kabhi baat karne ke liye hoon? Kya main sirf aapke\nGood pleasure (khushi) ke suburbs (upnagaron) mein rehti hoon? Agar isse zyada kuch nahi hai,\nToh Portia Brutus ki harlot (veshya) hai, uski patni nahi.' },
        { speaker: 'BRUTUS', lines: 'Tum meri sachchi aur sammanit patni ho,\nUtni hi priya ho mujhe jitni ki woh ruddy drops (lal boondein)\nJo mere dukhi dil mein aati hain.' },
        { speaker: 'PORTIA', lines: 'Agar yeh sach hota, toh mujhe yeh secret pata hota.\nMain maanti hoon ki main ek aurat hoon, lekin saath hi\nEk aurat jise Lord Brutus ne patni banaya.\nMain maanti hoon ki main ek aurat hoon, lekin saath hi\nEk well-reputed (pratishthit) aurat, Cato ki beti.\nKya aapko lagta hai ki main apne sex (ling) se zyada strong nahi hoon,\nItne achhe pita aur itne achhe pati ke hote hue?\nMujhe apni counsels (salah) batao. Main unhe disclose nahi karungi.\nMaine apni constancy (sthirta) ka mazboot proof diya hai,\nKhud ko ek voluntary wound (swૈच्छिक ghav) dekar\nYahan jaangh mein. Kya main yeh patience ke saath seh sakti hoon,\nAur apne pati ke secrets nahi?' },
        { speaker: 'BRUTUS', lines: 'O devtaon,\nMujhe is nek patni ke laayak banao!' },
        { speaker: 'BRUTUS', lines: 'Suno, suno! Koi knock kar raha hai. Portia, thodi der andar jao.\nAur thodi der mein tumhara seena bhi\nMere dil ke secrets ka hissa banega.\nMain apne saare engagements (vayde) tumhe samjhaunga,\nApne dukhi maathe ki saari charactery (likhawat).\nMujhe jaldi se chhod do.' },
        { speaker: 'BRUTUS', lines: 'Lucius, kaun knock kar raha hai?' },
        { speaker: 'LUCIUS', lines: 'Woh ek bimar aadmi hai jo aapse baat karna chahta hai.' },
        { speaker: 'BRUTUS', lines: 'Caius Ligarius, jiske baare mein Metellus ne kaha tha.—\nLadke, ek taraf ho jao.—Caius Ligarius, kaise ho?' },
        { speaker: 'LIGARIUS', lines: 'Ek kamzor zabaan se good morrow sweekar karein.' },
        { speaker: 'BRUTUS', lines: 'O, tumne kya samay chuna hai, bahadur Caius,\nEk kerchief (rumal) pehenne ke liye! Kaash tum bimar na hote!' },
        { speaker: 'LIGARIUS', lines: 'Main bimar nahi hoon agar Brutus ke haath mein\nKoi aisa exploit (karnama) hai jo samman ke naam ke laayak ho.' },
        { speaker: 'BRUTUS', lines: 'Aisa hi ek exploit mere haath mein hai, Ligarius,\nAgar tumhare paas use sunne ke liye swasth kaan hote.' },
        { speaker: 'LIGARIUS', lines: '(apna rumal hatata hai) Un sabhi devtaon ki kasam jinke aage Romans jhukte hain,\nMain yahan apni bimari ko tyagta hoon! Rome ki aatma,\nSammanit kul se utpann bahadur putra,\nTumne, ek exorcist (ojha) ki tarah, meri\nMortifièd (mari hui) spirit (aatma) ko jaga diya hai. Ab mujhe daudne ko kaho,\nAur main asambhav cheezon se sangharsh karunga,\nHaan, un par vijay prapt karunga. Kya karna hai?' },
        { speaker: 'BRUTUS', lines: 'Ek aisa kaam jo bimar aadmiyon ko theek kar dega.' },
        { speaker: 'LIGARIUS', lines: 'Lekin kya kuch theek nahi hain jinhe hamein bimar karna hai?' },
        { speaker: 'BRUTUS', lines: 'Woh bhi hamein karna hoga. Yeh kya hai, mere Caius,\nMain tumhe batata jaunga jaise hum ja rahe hain\nUske paas jise yeh karna hai.' },
        { speaker: 'LIGARIUS', lines: 'Aage badho,\nAur ek naye josh bhare dil se main tumhara peecha karta hoon,\nYeh nahi jaanta ki kya karna hai. Lekin itna hi kaafi hai\nKi Brutus mujhe le ja raha hai.' },
        { speaker: 'BRUTUS', lines: 'Toh mere peeche aao.' }
    ]
};
const descriptionVersions = { 
    Shakespearean: "In the early hours of the morning, a troubled Brutus contemplates the plot against Caesar, reasoning that he must be killed for the good of Rome. He receives an anonymous letter urging him to act. The conspirators arrive, and Brutus persuades them against swearing an oath and against killing Mark Antony. After they leave, his wife, Portia, confronts him, begging to know the cause of his distress.",
    'Normal English': "Early in the morning, a conflicted Brutus decides that Caesar must be killed to prevent him from becoming a tyrant. After reading a mysterious letter urging him to take action, the conspirators visit him. Brutus agrees to join but argues against killing Mark Antony. Later, his wife Portia pleads with him to share the secret that is troubling him so deeply.",
    Hinglish: "Subah-subah, pareshan Brutus faisla karta hai ki Caesar ko marna hi hoga taaki woh ek zaalim na ban sake. Ek anjaan letter padhne ke baad, conspirators usse milne aate hain. Brutus unke saath shaamil ho jaata hai lekin Mark Antony ko maarne se mana kar deta hai. Baad mein, uski wife Portia usse request karti hai ki woh apni pareshani ka kaaran bataye."
};
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
                            <h1 style={styles.sceneTitle}>Act II, Scene 1</h1>
                            <p style={styles.sceneSubtitle}>Brutus's orchard in Rome</p>
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
                                        const isNoble = ['BRUTUS', 'CASSIUS', 'CASCA', 'DECIUS', 'CINNA', 'METELLUS', 'TREBONIUS', 'PORTIA', 'LIGARIUS'].includes(entry.speaker);
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
                           < Class9icseEnglishAct2Scene1Summary   />                         </div>
                            <p style={styles.summaryContent}>{sceneSummary[summaryLanguage]}</p>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <div >
                            <Class9icseEnglishAct2Scene1Questions/>
                        
                            </div>

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;

