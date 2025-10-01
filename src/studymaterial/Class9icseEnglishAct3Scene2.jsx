import React, { useState, useEffect, useRef } from 'react';
import Class9icseEnglishAct3Scene2Summary from './Class9icseEnglishAct3Scene2Summary';
import Class9icseEnglishAct3Scene2Questions from './Class9icseEnglishAct3Scene2Questions';
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
const galleryImages = ["https://placehold.co/400x400/8B0000/FFFFFF?text=Brutus'+Oration", "https://placehold.co/400x400/A52A2A/FFFFFF?text=Antony's+Oration", "https://placehold.co/400x400/DAA520/FFFFFF?text=Caesar's+Will", "https://placehold.co/400x400/3B3B3B/FFFFFF?text=Roman+Mob"];
const importantWords = [{ term: "Censure", definition: "To judge or criticize formally." }, { term: "Bondman", definition: "A slave." }, { term: "Commons", definition: "The common people of Rome." }, { term: "Mantle", definition: "A loose, sleeveless cloak or robe." }, { term: "Marred", definition: "Damaged, disfigured, or spoiled." }, { term: "Drachmas", definition: "Silver coins used in ancient Greece and Rome." },];
const dialogueVersions = {
    Shakespearean: [
        { speaker: 'Citizens', lines: 'We will be satisfied! Let us be satisfied!' },
        { speaker: 'BRUTUS', lines: 'Then follow me and give me audience, friends.\n—Cassius, go you into the other street\nAnd part the numbers.\n—Those that will hear me speak, let \'em stay here.\nThose that will follow Cassius, go with him,\nAnd public reasons shall be renderèd\nOf Caesar’s death.' },
        { speaker: 'First Citizen', lines: 'I will hear Brutus speak.' },
        { speaker: 'Second Citizen', lines: 'I will hear Cassius and compare their reasons\nWhen severally we hear them renderèd.' },
        { speaker: 'Third Citizen', lines: 'The noble Brutus is ascended. Silence!' },
        { speaker: 'BRUTUS', lines: 'Be patient till the last. Romans, countrymen, and lovers! Hear me for my cause, and be silent that you may hear. Believe me for mine honor, and have respect to mine honor that you may believe. Censure me in your wisdom, and awake your senses that you may the better judge. If there be any in this assembly, any dear friend of Caesar’s, to him I say that Brutus\' love to Caesar was no less than his. If then that friend demand why Brutus rose against Caesar, this is my answer: not that I loved Caesar less, but that I loved Rome more. Had you rather Caesar were living and die all slaves, than that Caesar were dead, to live all free men? As Caesar loved me, I weep for him. As he was fortunate, I rejoice at it. As he was valiant, I honor him. But, as he was ambitious, I slew him. There is tears for his love, joy for his fortune, honor for his valor, and death for his ambition. Who is here so base that would be a bondman? If any, speak—for him have I offended. Who is here so rude that would not be a Roman? If any, speak—for him have I offended. Who is here so vile that will not love his country? If any, speak—for him have I offended. I pause for a reply.' },
        { speaker: 'Citizens', lines: 'None, Brutus, none.' },
        { speaker: 'BRUTUS', lines: 'Then none have I offended. I have done no more to Caesar than you shall do to Brutus. The question of his death is enrolled in the Capitol. His glory not extenuated wherein he was worthy, nor his offenses enforced for which he suffered death.\nHere comes his body, mourned by Mark Antony, who, though he had no hand in his death, shall receive the benefit of his dying—a place in the commonwealth—as which of you shall not? With this I depart: that, as I slew my best lover for the good of Rome, I have the same dagger for myself when it shall please my country to need my death.' },
        { speaker: 'Citizens', lines: 'Live, Brutus! Live, live!' },
        { speaker: 'First Citizen', lines: 'Bring him with triumph home unto his house!' },
        { speaker: 'Second Citizen', lines: 'Give him a statue with his ancestors!' },
        { speaker: 'Third Citizen', lines: 'Let him be Caesar!' },
        { speaker: 'Fourth Citizen', lines: 'Caesar’s better parts\nShall be crowned in Brutus!' },
        { speaker: 'First Citizen', lines: 'We’ll bring him to his house with shouts and clamors.' },
        { speaker: 'BRUTUS', lines: 'My countrymen—' },
        { speaker: 'Second Citizen', lines: 'Peace, silence! Brutus speaks.' },
        { speaker: 'First Citizen', lines: 'Peace, ho!' },
        { speaker: 'BRUTUS', lines: 'Good countrymen, let me depart alone.\nAnd, for my sake, stay here with Antony.\nDo grace to Caesar’s corpse, and grace his speech\nTending to Caesar’s glories, which Mark Antony\nBy our permission is allowed to make.\nI do entreat you, not a man depart,\nSave I alone, till Antony have spoke.' },
        { speaker: 'First Citizen', lines: 'Stay, ho! And let us hear Mark Antony.' },
        { speaker: 'Third Citizen', lines: 'Let him go up into the public chair.\nWe’ll hear him.—Noble Antony, go up.' },
        { speaker: 'ANTONY', lines: 'For Brutus\' sake, I am beholding to you.'},
        { speaker: 'Fourth Citizen', lines: 'What does he say of Brutus?' },
        { speaker: 'Third Citizen', lines: 'He says for Brutus\' sake\nHe finds himself beholding to us all.' },
        { speaker: 'Fourth Citizen', lines: '\'Twere best he speak no harm of Brutus here.' },
        { speaker: 'First Citizen', lines: 'This Caesar was a tyrant.' },
        { speaker: 'Third Citizen', lines: 'Nay, that’s certain.\nWe are blest that Rome is rid of him.' },
        { speaker: 'Fourth Citizen', lines: 'Peace! Let us hear what Antony can say.' },
        { speaker: 'ANTONY', lines: 'You gentle Romans—' },
        { speaker: 'Citizens', lines: 'Peace, ho! Let us hear him.' },
        { speaker: 'ANTONY', lines: 'Friends, Romans, countrymen, lend me your ears.\nI come to bury Caesar, not to praise him.\nThe evil that men do lives after them;\nThe good is oft interrèd with their bones.\nSo let it be with Caesar. The noble Brutus\nHath told you Caesar was ambitious.\nIf it were so, it was a grievous fault,\nAnd grievously hath Caesar answered it.\nHere, under leave of Brutus and the rest—\nFor Brutus is an honourable man;\nSo are they all, all honourable men—\nCome I to speak in Caesar’s funeral.\nHe was my friend, faithful and just to me.\nBut Brutus says he was ambitious,\nAnd Brutus is an honourable man.\nHe hath brought many captives home to Rome\nWhose ransoms did the general coffers fill.\nDid this in Caesar seem ambitious?\nWhen that the poor have cried, Caesar hath wept.\nAmbition should be made of sterner stuff.\nYet Brutus says he was ambitious,\nAnd Brutus is an honourable man.\nYou all did see that on the Lupercal\nI thrice presented him a kingly crown,\nWhich he did thrice refuse. Was this ambition?\nYet Brutus says he was ambitious,\nAnd, sure, he is an honourable man.\nI speak not to disprove what Brutus spoke,\nBut here I am to speak what I do know.\nYou all did love him once, not without cause.\nWhat cause withholds you then to mourn for him?\nO judgment! Thou art fled to brutish beasts,\nAnd men have lost their reason. Bear with me.\nMy heart is in the coffin there with Caesar,\nAnd I must pause till it come back to me.' },
        { speaker: 'First Citizen', lines: 'Methinks there is much reason in his sayings.' },
        { speaker: 'Second Citizen', lines: 'If thou consider rightly of the matter,\nCaesar has had great wrong.' },
        { speaker: 'Third Citizen', lines: 'Has he, masters?\nI fear there will a worse come in his place.' },
        { speaker: 'Fourth Citizen', lines: 'Marked ye his words? He would not take the crown.\nTherefore ’tis certain he was not ambitious.' },
        { speaker: 'First Citizen', lines: 'If it be found so, some will dear abide it.' },
        { speaker: 'Second Citizen', lines: 'Poor soul! His eyes are red as fire with weeping.' },
        { speaker: 'Third Citizen', lines: 'There’s not a nobler man in Rome than Antony.' },
        { speaker: 'Fourth Citizen', lines: 'Now mark him. He begins again to speak.' },
        { speaker: 'ANTONY', lines: 'But yesterday the word of Caesar might\nHave stood against the world. Now lies he there,\nAnd none so poor to do him reverence.\nO masters, if I were disposed to stir\nYour hearts and minds to mutiny and rage,\nI should do Brutus wrong, and Cassius wrong—\nWho, you all know, are honourable men.\nI will not do them wrong. I rather choose\nTo wrong the dead, to wrong myself and you,\nThan I will wrong such honourable men.\nBut here’s a parchment with the seal of Caesar.\nI found it in his closet. \'Tis his will.\nLet but the commons hear this testament—\nWhich, pardon me, I do not mean to read—\nAnd they would go and kiss dead Caesar’s wounds\nAnd dip their napkins in his sacred blood,\nYea, beg a hair of him for memory,\nAnd, dying, mention it within their wills,\nBequeathing it as a rich legacy\nUnto their issue.' },
        { speaker: 'Fourth Citizen', lines: 'We’ll hear the will. Read it, Mark Antony!' },
        { speaker: 'Citizens', lines: 'The will, the will! We will hear Caesar’s will.' },
        { speaker: 'ANTONY', lines: 'Have patience, gentle friends. I must not read it.\nIt is not meet you know how Caesar loved you.\nYou are not wood, you are not stones, but men.\nAnd, being men, hearing the will of Caesar,\nIt will inflame you, it will make you mad.\n\'Tis good you know not that you are his heirs.\nFor, if you should—Oh, what would come of it!' },
        { speaker: 'Fourth Citizen', lines: 'Read the will. We’ll hear it, Antony.\nYou shall read us the will, Caesar’s will.' },
        { speaker: 'ANTONY', lines: 'Will you be patient? Will you stay awhile?\nI have o\'ershot myself to tell you of it.\nI fear I wrong the honourable men\nWhose daggers have stabbed Caesar. I do fear it.' },
        { speaker: 'Fourth Citizen', lines: 'They were traitors, honourable men!' },
        { speaker: 'Citizens', lines: 'The will! The testament!' },
        { speaker: 'Second Citizen', lines: 'They were villains, murderers. The will! Read the will!' },
        { speaker: 'ANTONY', lines: 'You will compel me, then, to read the will?\nThen make a ring about the corpse of Caesar,\nAnd let me show you him that made the will.\nShall I descend? And will you give me leave?' },
        { speaker: 'Citizens', lines: 'Come down.' },
        { speaker: 'Second Citizen', lines: 'Descend.' },
        { speaker: 'Third Citizen', lines: 'You shall have leave.' },
        { speaker: 'Fourth Citizen', lines: 'A ring! Stand round.' },
        { speaker: 'First Citizen', lines: 'Stand from the hearse. Stand from the body.' },
        { speaker: 'Second Citizen', lines: 'Room for Antony, most noble Antony!' },
        { speaker: 'ANTONY', lines: 'Nay, press not so upon me. Stand far off.' },
        { speaker: 'Citizens', lines: 'Stand back. Room! Bear back.' },
        { speaker: 'ANTONY', lines: 'If you have tears, prepare to shed them now.\nYou all do know this mantle. I remember\nThe first time ever Caesar put it on.\n\'Twas on a summer’s evening in his tent,\nThat day he overcame the Nervii.\nLook, in this place ran Cassius\' dagger through.\nSee what a rent the envious Casca made.\nThrough this the well-belovèd Brutus stabbed.\nAnd as he plucked his cursèd steel away,\nMark how the blood of Caesar followed it,\nAs rushing out of doors, to be resolved\nIf Brutus so unkindly knocked, or no.\nFor Brutus, as you know, was Caesar’s angel.\nJudge, O you gods, how dearly Caesar loved him!\nThis was the most unkindest cut of all.\nFor when the noble Caesar saw him stab,\nIngratitude, more strong than traitors\' arms,\nQuite vanquished him. Then burst his mighty heart,\nAnd, in his mantle muffling up his face,\nEven at the base of Pompey’s statue,\nWhich all the while ran blood, great Caesar fell.\nO, what a fall was there, my countrymen!\nThen I, and you, and all of us fell down,\nWhilst bloody treason flourished over us.\nOh, now you weep, and, I perceive, you feel\nThe dint of pity. These are gracious drops.\nKind souls, what, weep you when you but behold\nOur Caesar’s vesture wounded? Look you here,\nHere is himself, marred, as you see, with traitors.' },
        { speaker: 'First Citizen', lines: 'O piteous spectacle!' },
        { speaker: 'Second Citizen', lines: 'O noble Caesar!' },
        { speaker: 'Third Citizen', lines: 'O woeful day!' },
        { speaker: 'Fourth Citizen', lines: 'O traitors, villains!' },
        { speaker: 'First Citizen', lines: 'O most bloody sight!' },
        { speaker: 'Second Citizen', lines: 'We will be revenged.' },
        { speaker: 'Citizens', lines: 'Revenge! About! Seek! Burn! Fire! Kill! Slay!\nLet not a traitor live!' },
        { speaker: 'ANTONY', lines: 'Stay, countrymen!' },
        { speaker: 'First Citizen', lines: 'Peace there! Hear the noble Antony.' },
        { speaker: 'Second Citizen', lines: 'We’ll hear him. We’ll follow him. We’ll die with him.' },
        { speaker: 'ANTONY', lines: 'Good friends, sweet friends! Let me not stir you up\nTo such a sudden flood of mutiny.\nThey that have done this deed are honourable.\nWhat private griefs they have, alas, I know not,\nThat made them do it. They are wise and honourable,\nAnd will, no doubt, with reasons answer you.\nI come not, friends, to steal away your hearts.\nI am no orator, as Brutus is,\nBut, as you know me all, a plain blunt man\nThat love my friend. And that they know full well\nThat gave me public leave to speak of him.\nFor I have neither wit nor words nor worth,\nAction nor utterance nor the power of speech,\nTo stir men’s blood. I only speak right on.\nI tell you that which you yourselves do know,\nShow you sweet Caesar’s wounds, poor poor dumb mouths,\nAnd bid them speak for me. But were I Brutus,\nAnd Brutus Antony, there were an Antony\nWould ruffle up your spirits and put a tongue\nIn every wound of Caesar that should move\nThe stones of Rome to rise and mutiny.' },
        { speaker: 'Citizens', lines: 'We’ll mutiny.' },
        { speaker: 'First Citizen', lines: 'We’ll burn the house of Brutus.' },
        { speaker: 'Third Citizen', lines: 'Away, then! Come, seek the conspirators.' },
        { speaker: 'ANTONY', lines: 'Yet hear me, countrymen. Yet hear me speak.' },
        { speaker: 'Citizens', lines: 'Peace, ho! Hear Antony. Most noble Antony!' },
        { speaker: 'ANTONY', lines: 'Why, friends, you go to do you know not what.\nWherein hath Caesar thus deserved your loves?\nAlas, you know not. I must tell you then.\nYou have forgot the will I told you of.' },
        { speaker: 'Citizens', lines: 'Most true. The will! Let’s stay and hear the will.' },
        { speaker: 'ANTONY', lines: 'Here is the will, and under Caesar’s seal.\nTo every Roman citizen he gives—\nTo every several man—seventy-five drachmas.' },
        { speaker: 'Second Citizen', lines: 'Most noble Caesar! We’ll revenge his death.' },
        { speaker: 'Third Citizen', lines: 'O royal Caesar!' },
        { speaker: 'ANTONY', lines: 'Hear me with patience.' },
        { speaker: 'Citizens', lines: 'Peace, ho!' },
        { speaker: 'ANTONY', lines: 'Moreover, he hath left you all his walks,\nHis private arbors and new-planted orchards,\nOn this side Tiber. He hath left them you\nAnd to your heirs forever—common pleasures,\nTo walk abroad and recreate yourselves.\nHere was a Caesar! When comes such another?' },
        { speaker: 'First Citizen', lines: 'Never, never.—Come, away, away!\nWe’ll burn his body in the holy place,\nAnd with the brands fire the traitors\' houses.\nTake up the body.' },
        { speaker: 'Second Citizen', lines: 'Go fetch fire.' },
        { speaker: 'Third Citizen', lines: 'Pluck down benches.' },
        { speaker: 'Fourth Citizen', lines: 'Pluck down forms, windows, anything.' },
        { speaker: 'ANTONY', lines: 'Now let it work. Mischief, thou art afoot.\nTake thou what course thou wilt! How now, fellow?' },
        { speaker: 'Servant', lines: 'Sir, Octavius is already come to Rome.' },
        { speaker: 'ANTONY', lines: 'Where is he?' },
        { speaker: 'Servant', lines: 'He and Lepidus are at Caesar’s house.' },
        { speaker: 'ANTONY', lines: 'And thither will I straight to visit him.\nHe comes upon a wish. Fortune is merry,\nAnd in this mood will give us anything.' },
        { speaker: 'Servant', lines: 'I heard him say, Brutus and Cassius\nAre rid like madmen through the gates of Rome.' },
        { speaker: 'ANTONY', lines: 'Belike they had some notice of the people\nHow I had moved them. Bring me to Octavius.' },
    ],
    'Normal English': [
        { speaker: 'Citizens', lines: 'We want answers! Give us answers!' },
        { speaker: 'BRUTUS', lines: 'Then follow me and listen, my friends. —Cassius, you go to the other street and divide the crowd. —Those who want to hear me speak, stay here. Those who want to follow Cassius, go with him. Public reasons will be given for Caesar’s death.' },
        { speaker: 'First Citizen', lines: 'I will listen to Brutus speak.' },
        { speaker: 'Second Citizen', lines: 'I will listen to Cassius and then compare their reasons after we\'ve heard them separately.' },
        { speaker: 'Third Citizen', lines: 'The noble Brutus has gone up. Silence!' },
        { speaker: 'BRUTUS', lines: 'Be patient until the end. Romans, countrymen, and friends! Listen to me for my cause, and be silent so you can hear. Trust in my honor, and respect my honor so you can trust me. Judge me with your wisdom, and use your senses so you can judge better. If there is anyone in this crowd, any dear friend of Caesar’s, I say to him that Brutus\' love for Caesar was as great as his. If that friend then asks why Brutus rose against Caesar, this is my answer: it’s not that I loved Caesar less, but that I loved Rome more. Would you rather have Caesar living and you all die as slaves, or have Caesar dead, so you can all live as free men? Because Caesar was my friend, I weep for him. Because he was fortunate, I am happy for him. Because he was brave, I honor him. But, because he was ambitious, I killed him. There are tears for his friendship, joy for his good fortune, honor for his bravery, and death for his ambition. Who here is so lowly that he would want to be a slave? If there is one, let him speak—for I have offended him. Who here is so uncivilized that he would not want to be a Roman? If there is one, let him speak—for I have offended him. Who here is so vile that he does not love his country? If there is one, let him speak—for I have offended him. I will pause for a reply.' },
        { speaker: 'Citizens', lines: 'No one, Brutus, no one.' },
        { speaker: 'BRUTUS', lines: 'Then I have offended no one. I have done nothing more to Caesar than you might do to Brutus. The official record of his death is filed in the Capitol. His glory has not been diminished where he was worthy, nor have his offenses been exaggerated for which he was killed. Here comes his body, mourned by Mark Antony, who, although he had no part in his death, will receive the benefits of his dying—a position in the government—as which of you will not? I will leave you with this: just as I killed my best friend for the good of Rome, I have the same dagger for myself when my country decides it needs my death.' },
        { speaker: 'Citizens', lines: 'Long live Brutus! Live, live!' },
        { speaker: 'First Citizen', lines: 'Carry him in triumph to his house!' },
        { speaker: 'Second Citizen', lines: 'Give him a statue like his ancestors!' },
        { speaker: 'Third Citizen', lines: 'Let him be the new Caesar!' },
        { speaker: 'Fourth Citizen', lines: 'Caesar’s best qualities will be crowned in Brutus!' },
        { speaker: 'First Citizen', lines: 'We’ll take him to his house with shouts and cheers.' },
        { speaker: 'BRUTUS', lines: 'My countrymen—' },
        { speaker: 'Second Citizen', lines: 'Quiet, silence! Brutus is speaking.' },
        { speaker: 'First Citizen', lines: 'Quiet, hey!' },
        { speaker: 'BRUTUS', lines: 'Good countrymen, let me leave alone. And for my sake, stay here with Antony. Pay respect to Caesar’s corpse and to his speech about Caesar’s glories, which Mark Antony is allowed to give by our permission. I beg you, let no man leave, except for me, until Antony has spoken.' },
        { speaker: 'First Citizen', lines: 'Stay, hey! And let\'s hear Mark Antony.' },
        { speaker: 'Third Citizen', lines: 'Let him go up to the public platform. We’ll listen to him.—Noble Antony, go up.' },
        { speaker: 'ANTONY', lines: 'For Brutus\'s sake, I am grateful to you.' },
        { speaker: 'Fourth Citizen', lines: 'What is he saying about Brutus?' },
        { speaker: 'Third Citizen', lines: 'He says that for Brutus’s sake, he feels grateful to us all.' },
        { speaker: 'Fourth Citizen', lines: 'It would be best if he doesn’t speak badly of Brutus here.' },
        { speaker: 'First Citizen', lines: 'This Caesar was a tyrant.' },
        { speaker: 'Third Citizen', lines: 'Yes, that’s certain. We are blessed that Rome is rid of him.' },
        { speaker: 'Fourth Citizen', lines: 'Quiet! Let us hear what Antony has to say.' },
        { speaker: 'ANTONY', lines: 'You gentle Romans—' },
        { speaker: 'Citizens', lines: 'Quiet, hey! Let us hear him.' },
        { speaker: 'ANTONY', lines: 'Friends, Romans, countrymen, lend me your ears. I have come to bury Caesar, not to praise him. The evil that men do continues after they die; the good is often buried with their bones. Let it be this way with Caesar. The noble Brutus has told you that Caesar was ambitious. If that is true, it was a serious flaw, and Caesar has seriously paid for it. Here, with the permission of Brutus and the others—for Brutus is an honourable man; they are all honourable men—I have come to speak at Caesar’s funeral. He was my friend, faithful and fair to me. But Brutus says he was ambitious, and Brutus is an honourable man. He brought many prisoners home to Rome whose ransoms filled the public treasury. Did this seem ambitious in Caesar? When the poor have cried, Caesar has wept. Ambition should be made of tougher stuff. Yet Brutus says he was ambitious, and Brutus is an honourable man. You all saw that at the festival of Lupercal, I offered him a king’s crown three times, and he refused it three times. Was this ambition? Yet Brutus says he was ambitious, and, certainly, he is an honourable man. I am not speaking to disprove what Brutus said, but I am here to speak what I know. You all loved him once, and for good reason. What reason holds you back from mourning for him now? Oh, judgment! You have fled to wild animals, and men have lost their reason. Bear with me. My heart is in the coffin there with Caesar, and I must pause until it comes back to me.' },
        { speaker: 'First Citizen', lines: 'I think there is a lot of reason in what he says.' },
        { speaker: 'Second Citizen', lines: 'If you think about it correctly, Caesar has been greatly wronged.' },
        { speaker: 'Third Citizen', lines: 'Has he, sirs? I fear someone worse will come in his place.' },
        { speaker: 'Fourth Citizen', lines: 'Did you notice his words? He wouldn\'t take the crown. Therefore, it’s certain he wasn\'t ambitious.' },
        { speaker: 'First Citizen', lines: 'If that turns out to be true, some will pay dearly for this.' },
        { speaker: 'Second Citizen', lines: 'Poor man! His eyes are as red as fire from weeping.' },
        { speaker: 'Third Citizen', lines: 'There isn’t a nobler man in Rome than Antony.' },
        { speaker: 'Fourth Citizen', lines: 'Now watch him. He is starting to speak again.' },
        { speaker: 'ANTONY', lines: 'Just yesterday, Caesar\'s word could have challenged the world. Now he lies there, and there is no one so humble as to pay him respect. Oh sirs, if I were inclined to stir your hearts and minds to rebellion and rage, I would be wronging Brutus, and wronging Cassius—who, as you all know, are honourable men. I will not wrong them. I would rather choose to wrong the dead, to wrong myself and you, than to wrong such honourable men. But here is a document with Caesar’s seal. I found it in his study. It is his will. If the common people just hear this testament—which, forgive me, I do not intend to read—they would go and kiss dead Caesar’s wounds and dip their handkerchiefs in his sacred blood, yes, beg for a lock of his hair to remember him by, and, when they die, mention it in their own wills, leaving it as a rich inheritance to their children.' },
        { speaker: 'Fourth Citizen', lines: 'We want to hear the will! Read it, Mark Antony!' },
        { speaker: 'Citizens', lines: 'The will, the will! We will hear Caesar’s will!' },
        { speaker: 'ANTONY', lines: 'Be patient, gentle friends. I must not read it. It is not right for you to know how much Caesar loved you. You are not wood, you are not stones, but men. And, being men, hearing the will of Caesar would inflame you, it would make you crazy. It’s good that you don’t know you are his heirs. Because if you did—oh, what would come of it!' },
        { speaker: 'Fourth Citizen', lines: 'Read the will! We want to hear it, Antony! You must read us the will, Caesar’s will!' },
        { speaker: 'ANTONY', lines: 'Will you be patient? Will you wait a moment? I have gone too far in telling you about it. I fear I am wronging the honourable men whose daggers have stabbed Caesar. I do fear it.' },
        { speaker: 'Fourth Citizen', lines: 'They were traitors, honourable men!' },
        { speaker: 'Citizens', lines: 'The will! The testament!' },
        { speaker: 'Second Citizen', lines: 'They were villains, murderers! The will! Read the will!' },
        { speaker: 'ANTONY', lines: 'You will force me, then, to read the will? Then form a circle around Caesar’s corpse, and let me show you the man who made the will. Shall I come down? And will you give me permission?' },
        { speaker: 'Citizens', lines: 'Come down.' },
        { speaker: 'Second Citizen', lines: 'Descend.' },
        { speaker: 'Third Citizen', lines: 'You shall have leave.' },
        { speaker: 'Fourth Citizen', lines: 'A ring! Stand round.' },
        { speaker: 'First Citizen', lines: 'Stand away from the coffin. Stand away from the body.' },
        { speaker: 'Second Citizen', lines: 'Make room for Antony, most noble Antony!' },
        { speaker: 'ANTONY', lines: 'No, don\'t press on me so much. Stand far back.' },
        { speaker: 'Citizens', lines: 'Stand back. Room! Move back.' },
        { speaker: 'ANTONY', lines: 'If you have tears, prepare to shed them now. You all know this cloak. I remember the first time Caesar ever put it on. It was on a summer evening in his tent, the day he conquered the Nervii tribe. Look, in this place Cassius\' dagger ran through. See what a tear the envious Casca made. Through this, the well-loved Brutus stabbed. And as he pulled his cursed blade away, notice how Caesar’s blood followed it, as if rushing outside to find out if it was Brutus who knocked so unkindly. For Brutus, as you know, was Caesar’s angel. Judge, O you gods, how dearly Caesar loved him! This was the most unkindest cut of all. For when the noble Caesar saw him stab, ingratitude, stronger than traitors\' arms, completely defeated him. Then his mighty heart burst, and, covering his face with his cloak, right at the base of Pompey’s statue, which was spattered with blood, great Caesar fell. Oh, what a fall that was, my countrymen! Then I, and you, and all of us fell down, while bloody treason triumphed over us. Oh, now you weep, and I see you feel the sting of pity. These are gracious tears. Kind souls, why do you weep when you only see our Caesar’s wounded clothing? Look here, here is the man himself, mangled, as you see, by traitors.' },
        { speaker: 'First Citizen', lines: 'Oh, what a pitiful sight!' },
        { speaker: 'Second Citizen', lines: 'Oh, noble Caesar!' },
        { speaker: 'Third Citizen', lines: 'Oh, what a sad day!' },
        { speaker: 'Fourth Citizen', lines: 'Oh, traitors, villains!' },
        { speaker: 'First Citizen', lines: 'Oh, what a bloody sight!' },
        { speaker: 'Second Citizen', lines: 'We will get revenge.' },
        { speaker: 'Citizens', lines: 'Revenge! Go on! Seek! Burn! Fire! Kill! Slay! Let no traitor live!' },
        { speaker: 'ANTONY', lines: 'Wait, countrymen!' },
        { speaker: 'First Citizen', lines: 'Quiet there! Hear the noble Antony.' },
        { speaker: 'Second Citizen', lines: 'We’ll listen to him. We’ll follow him. We’ll die with him.' },
        { speaker: 'ANTONY', lines: 'Good friends, sweet friends! Don\'t let me stir you up to such a sudden flood of rebellion. The men who have done this deed are honourable. What private grievances they have, alas, I don’t know, that made them do it. They are wise and honourable, and will, no doubt, answer you with reasons. I haven\'t come, friends, to steal your hearts. I am not a great speaker, as Brutus is, but, as you all know me, just a plain, blunt man who loves his friend. And those who gave me public permission to speak of him know that full well. For I have neither the cleverness, nor the words, nor the prestige, nor the gestures, nor the eloquence, nor the power of speech to stir men’s emotions. I only speak directly. I tell you what you yourselves already know, show you sweet Caesar’s wounds, poor, poor silent mouths, and ask them to speak for me. But if I were Brutus, and Brutus were Antony, there would be an Antony who would stir up your spirits and put a tongue in every wound of Caesar that would move the very stones of Rome to rise and rebel.' },
        { speaker: 'Citizens', lines: 'We’ll rebel!' },
        { speaker: 'First Citizen', lines: 'We’ll burn Brutus\'s house!' },
        { speaker: 'Third Citizen', lines: 'Let\'s go, then! Come, find the conspirators!' },
        { speaker: 'ANTONY', lines: 'Listen to me still, countrymen. Listen to me speak.' },
        { speaker: 'Citizens', lines: 'Quiet, hey! Listen to Antony. Most noble Antony!' },
        { speaker: 'ANTONY', lines: 'Why, friends, you are going to do something without knowing what it is. In what way has Caesar deserved your love? Alas, you do not know. Then I must tell you. You have forgotten the will I told you about.' },
        { speaker: 'Citizens', lines: 'That\'s right! The will! Let’s stay and hear the will.' },
        { speaker: 'ANTONY', lines: 'Here is the will, and under Caesar’s seal. To every Roman citizen he gives—to each individual man—seventy-five drachmas.' },
        { speaker: 'Second Citizen', lines: 'Most noble Caesar! We’ll get revenge for his death.' },
        { speaker: 'Third Citizen', lines: 'Oh royal Caesar!' },
        { speaker: 'ANTONY', lines: 'Hear me with patience.' },
        { speaker: 'Citizens', lines: 'Quiet, ho!' },
        { speaker: 'ANTONY', lines: 'Furthermore, he has left you all his parks, his private gardens, and newly planted orchards on this side of the Tiber river. He has left them to you and to your heirs forever—public pleasures, to walk around and enjoy yourselves. This was a Caesar! When will another one like him come?' },
        { speaker: 'First Citizen', lines: 'Never, never!—Come on, let’s go, let’s go! We’ll burn his body in the holy place, and with the burning timbers, set fire to the traitors\' houses. Pick up the body.' },
        { speaker: 'Second Citizen', lines: 'Go get fire.' },
        { speaker: 'Third Citizen', lines: 'Pull down benches.' },
        { speaker: 'Fourth Citizen', lines: 'Pull down seats, windows, anything.' },
        { speaker: 'ANTONY', lines: 'Now let it happen. Mischief, you are loose. Take whatever course you want! What is it, fellow?' },
        { speaker: 'Servant', lines: 'Sir, Octavius has already arrived in Rome.' },
        { speaker: 'ANTONY', lines: 'Where is he?' },
        { speaker: 'Servant', lines: 'He and Lepidus are at Caesar’s house.' },
        { speaker: 'ANTONY', lines: 'And I will go there at once to visit him. He has come at the perfect time. Fortune is in a good mood, and will give us anything we want.' },
        { speaker: 'Servant', lines: 'I heard him say that Brutus and Cassius have fled like madmen through the gates of Rome.' },
        { speaker: 'ANTONY', lines: 'It seems they got word of how I had stirred up the people. Take me to Octavius.' },
    ],
    Hinglish: [
        { speaker: 'Citizens', lines: 'Humein jawab chahiye! Humein santusht karo!' },
        { speaker: 'BRUTUS', lines: 'Toh mere peeche aao aur meri baat suno, doston. —Cassius, tum doosri gali mein jao aur logon ko baant lo. —Jo mujhe sunna chahte hain, woh yahin rukein. Jo Cassius ke peeche jaana chahte hain, uske saath jaayein. Caesar ki maut ke saarvajanik kaaran bataye jaayenge.' },
        { speaker: 'First Citizen', lines: 'Main Brutus ko sununga.' },
        { speaker: 'Second Citizen', lines: 'Main Cassius ko sununga aur phir jab hum unhe alag-alag sun lenge, toh unke kaaranon ki tulna karunga.' },
        { speaker: 'Third Citizen', lines: 'Mahan Brutus manch par chadh gaye hain. Shaanti!' },
        { speaker: 'BRUTUS', lines: 'Aakhir tak dhairya rakhein. Romans, deshwasiyon, aur premiyon! Mere maksad ke liye mujhe suno, aur shaant raho taaki tum sun sako. Meri izzat ke liye mujh par vishwas karo, aur meri izzat ka sammaan karo taaki tum vishwas kar sako. Apni samajhdari se mujhe parkho, aur apni indriyon ko jagao taaki tum behtar faisla kar sako. Agar is sabha mein koi hai, Caesar ka koi priya mitra, toh usse main kehta hoon ki Brutus ka Caesar ke liye pyaar uske pyaar se kam nahi tha. Agar phir woh dost poochta hai ki Brutus Caesar ke khilaaf kyun utha, toh yeh mera jawab hai: isliye nahi ki main Caesar se kam pyaar karta tha, balki isliye ki main Rome se zyada pyaar karta tha. Kya tum chahoge ki Caesar zinda rahe aur tum sab gulam bankar maro, ya yeh ki Caesar mar jaaye, taaki tum sab azaad aadmiyon ki tarah jiyo? Kyunki Caesar mujhse pyaar karta tha, main uske liye rota hoon. Kyunki woh bhagyashaali tha, main is par khush hota hoon. Kyunki woh bahadur tha, main uska sammaan karta hoon. Lekin, kyunki woh mahtvakankshi tha, maine use maar daala. Uske pyaar ke liye aansu hain, uske bhagya ke liye khushi, uski bahaduri ke liye sammaan, aur uski mahtvakanksha ke liye maut. Yahan kaun itna neech hai jo gulam banna chahega? Agar koi hai, toh bolo—kyunki maine use aahat kiya hai. Yahan kaun itna asabhya hai jo Roman nahi banna chahega? Agar koi hai, toh bolo—kyunki maine use aahat kiya hai. Yahan kaun itna ghinona hai jo apne desh se pyaar nahi karega? Agar koi hai, toh bolo—kyunki maine use aahat kiya hai. Main jawab ke liye rukta hoon.' },
        { speaker: 'Citizens', lines: 'Koi nahi, Brutus, koi nahi.' },
        { speaker: 'BRUTUS', lines: 'Toh maine kisi ko aahat nahi kiya. Maine Caesar ke saath usse zyada kuch nahi kiya jo tum Brutus ke saath karoge. Uski maut ka sawal Capitol mein darj hai. Uski shaan kam nahi ki gayi jahan woh laayak tha, na hi uske aparadhon ko badhaya gaya jinke liye usne maut bhogi. Yahan uska shareer aa raha hai, jiska shok Mark Antony mana raha hai, jo, bhale hi uski maut mein uska koi haath nahi tha, uske marne ka fayda uthayega—commonwealth mein ek jagah—jaisa ki tum mein se kaun nahi uthayega? Iske saath main jaata hoon: ki, jaise maine apne sabse achhe dost ko Rome ki bhalai ke liye maar daala, mere paas wahi khanjar apne liye hai jab mere desh ko meri maut ki zaroorat hogi.' },
        { speaker: 'Citizens', lines: 'Jiyo, Brutus! Jiyo, jiyo!' },
        { speaker: 'First Citizen', lines: 'Use jeet ke saath uske ghar tak le chalo!' },
        { speaker: 'Second Citizen', lines: 'Use uske purvajon ke saath ek murti do!' },
        { speaker: 'Third Citizen', lines: 'Use Caesar bana do!' },
        { speaker: 'Fourth Citizen', lines: 'Caesar ke behtar gun Brutus mein taaj pehnenge!' },
        { speaker: 'First Citizen', lines: 'Hum use naaron aur shor ke saath uske ghar le jayenge.' },
        { speaker: 'BRUTUS', lines: 'Mere deshwasiyon—' },
        { speaker: 'Second Citizen', lines: 'Shaanti, chup raho! Brutus bol raha hai.' },
        { speaker: 'First Citizen', lines: 'Shaant, ho!' },
        { speaker: 'BRUTUS', lines: 'Achhe deshwasiyon, mujhe akele jaane do. Aur, mere liye, Antony ke saath yahan ruko. Caesar ke shav ko sammaan do, aur uske bhashan ko sammaan do jo Caesar ki shaan ke baare mein hai, jise Mark Antony ko hamari anumati se bolne diya gaya hai. Main aapse vinti karta hoon, koi aadmi na jaaye, siwaye mere, jab tak Antony bol na le.' },
        { speaker: 'First Citizen', lines: 'Ruko, ho! Aur Mark Antony ko sunte hain.' },
        { speaker: 'Third Citizen', lines: 'Use saarvajanik manch par chadhne do. Hum use sunenge.—Mahan Antony, upar jaao.' },
        { speaker: 'ANTONY', lines: 'Brutus ke liye, main aapka aabhari hoon.' },
        { speaker: 'Fourth Citizen', lines: 'Woh Brutus ke baare mein kya kehta hai?' },
        { speaker: 'Third Citizen', lines: 'Woh kehta hai ki Brutus ke liye woh hum sabka aabhari hai.' },
        { speaker: 'Fourth Citizen', lines: 'Behtar hoga ki woh yahan Brutus ke baare mein kuch bura na bolein.' },
        { speaker: 'First Citizen', lines: 'Yeh Caesar ek tanashah tha.' },
        { speaker: 'Third Citizen', lines: 'Haan, yeh toh pakka hai. Hum khushkismat hain ki Rome usse chhutkara pa gaya.' },
        { speaker: 'Fourth Citizen', lines: 'Shaant! Chalo sunte hain ki Antony kya keh sakta hai.' },
        { speaker: 'ANTONY', lines: 'Aap bhale Romans—' },
        { speaker: 'Citizens', lines: 'Shaant, ho! Humein use sunne do.' },
        { speaker: 'ANTONY', lines: 'Doston, Romans, deshwasiyon, mujhe apne kaan do. Main Caesar ko dafnane aaya hoon, uski prashansa karne nahi. Aadmi jo buraai karte hain, woh unke baad zinda rehti hai; achhai aksar unki haddiyon ke saath dafan ho jaati hai. Caesar ke saath bhi aisa hi hone do. Mahan Brutus ne aapko bataya hai ki Caesar mahtvakankshi tha. Agar aisa tha, toh yeh ek gambhir galti thi, aur Caesar ne iska gambhir parinaam bhugta hai. Yahan, Brutus aur baakiyon ki ijazat se—kyunki Brutus ek sammaanit aadmi hai; woh sabhi sammaanit aadmi hain—main Caesar ke antim sanskar mein bolne aaya hoon. Woh mera dost tha, mere prati vafadaar aur nyaayi. Lekin Brutus kehta hai ki woh mahtvakankshi tha, aur Brutus ek sammaanit aadmi hai. Usne Rome mein kai kaidi laaye jinke firauti se sarkaari khazane bhar gaye. Kya yeh Caesar mein mahtvakankshi laga? Jab gareeb roye hain, Caesar roya hai. Mahtvakanksha ko isse kathor cheez se bana hona chahiye. Phir bhi Brutus kehta hai ki woh mahtvakankshi tha, aur Brutus ek sammaanit aadmi hai. Aap sabne dekha ki Lupercal ke tyohar par maine use teen baar raja ka taaj pesh kiya, jise usne teen baar thukra diya. Kya yeh mahtvakanksha thi? Phir bhi Brutus kehta hai ki woh mahtvakankshi tha, aur, nishchit roop se, woh ek sammaanit aadmi hai. Main Brutus ki kahi baat ko galat saabit karne ke liye nahi bol raha, lekin main yahan woh bolne aaya hoon jo main jaanta hoon. Aap sab kabhi usse pyaar karte the, bina kisi kaaran ke nahi. Toh ab kaun sa kaaran aapko uske liye shok manane se rokta hai? O nyaay! Tum jungli janwaron ke paas bhaag gaye ho, aur aadmiyon ne apni samajh kho di hai. Mere saath sahan kijiye. Mera dil wahan Caesar ke saath taboot mein hai, aur mujhe rukna hoga jab tak yeh mere paas wapas na aa jaaye.' },
        { speaker: 'First Citizen', lines: 'Mujhe lagta hai ki uski baaton mein bahut dam hai.' },
        { speaker: 'Second Citizen', lines: 'Agar tum is maamle par aaram se socho, toh Caesar ke saath bahut galat hua hai.' },
        { speaker: 'Third Citizen', lines: 'Kya aisa hai, sahab? Mujhe darr hai ki uski jagah koi aur bura aadmi aa jaayega.' },
        { speaker: 'Fourth Citizen', lines: 'Uske shabdon par dhyaan diya? Usne taaj nahi liya. Isliye yeh pakka hai ki woh mahtvakankshi nahi tha.' },
        { speaker: 'First Citizen', lines: 'Agar yeh sach paaya gaya, toh kuch logon ko iski bhaari keemat chukani padegi.' },
        { speaker: 'Second Citizen', lines: 'Bechara! Rone se uski aankhein aag ki tarah laal hain.' },
        { speaker: 'Third Citizen', lines: 'Rome mein Antony se zyada mahan koi aadmi nahi hai.' },
        { speaker: 'Fourth Citizen', lines: 'Ab use dekho. Woh phir se bolna shuru kar raha hai.' },
        { speaker: 'ANTONY', lines: 'Kal hi Caesar ka ek shabd duniya ke khilaaf khada ho sakta tha. Ab woh wahan pada hai, aur koi itna gareeb nahi hai jo use sammaan de. O maalik, agar main aapke dilon aur dimaagon ko vidroh aur krodh ke liye bhadkane ka irada rakhta, toh main Brutus ke saath galat karta, aur Cassius ke saath galat karta—jo, aap sab jaante hain, sammaanit aadmi hain. Main unke saath galat nahi karunga. Main iske bajaye mare hue ko galat thehrana, khud ko aur aapko galat thehrana pasand karunga, bajaye iske ki main aise sammaanit aadmiyon ke saath galat karun. Lekin yahan Caesar ki mohar wala ek kagaz hai. Maine ise uske kamre mein paaya. Yeh uski vasiyat hai. Bas aam logon ko yeh vasiyat sunne do—jiske liye, mujhe maaf karna, main padhne ka irada nahi rakhta—aur woh jaakar mare hue Caesar ke ghaavon ko choom lenge aur apne rumal uske pavitra khoon mein dubo lenge, haan, uski yaad ke liye usse ek baal maangenge, aur, marte waqt, apni vasiyat mein iska zikr karenge, ise apne bachchon ke liye ek ameer virasat ke roop mein chhod jayenge.' },
        { speaker: 'Fourth Citizen', lines: 'Hum vasiyat sunenge. Ise padho, Mark Antony!' },
        { speaker: 'Citizens', lines: 'Vasiyat, vasiyat! Hum Caesar ki vasiyat sunenge.' },
        { speaker: 'ANTONY', lines: 'Dhairya rakhein, bhale doston. Main ise nahi padh sakta. Yeh theek nahi hai ki aap jaanein ki Caesar aapse kitna pyaar karta tha. Aap lakdi nahi hain, aap patthar nahi hain, balki aadmi hain. Aur, aadmi hone ke naate, Caesar ki vasiyat sunkar, yeh aapko josh dila degi, yeh aapko pagal kar degi. Yeh achha hai ki aap nahi jaante ki aap uske waris hain. Kyunki, agar aap jaan gaye—Oh, toh iska kya anjaam hoga!' },
        { speaker: 'Fourth Citizen', lines: 'Vasiyat padho. Hum ise sunenge, Antony. Tum hamein vasiyat padhoge, Caesar ki vasiyat.' },
        { speaker: 'ANTONY', lines: 'Kya aap dhairya rakhenge? Kya aap thodi der rukenge? Maine aapko iske baare mein batakar hadd paar kar di hai. Mujhe darr hai ki main un sammaanit aadmiyon ke saath galat kar raha hoon jinke khanjaron ne Caesar ko maara hai. Mujhe iska darr hai.' },
        { speaker: 'Fourth Citizen', lines: 'Woh deshdrohi the, sammaanit aadmi!' },
        { speaker: 'Citizens', lines: 'Vasiyat! Vasiyatnama!' },
        { speaker: 'Second Citizen', lines: 'Woh gunde the, hatyare. Vasiyat! Vasiyat padho!' },
        { speaker: 'ANTONY', lines: 'Toh aap mujhe majboor karenge ki main vasiyat padhun? Toh Caesar ke shav ke chaaron or ek ghera banao, aur mujhe use dikhane do jisne yeh vasiyat banayi. Kya main neeche utroon? Aur kya aap mujhe ijazat denge?' },
        { speaker: 'Citizens', lines: 'Neeche aao.' },
        { speaker: 'Second Citizen', lines: 'Utaro.' },
        { speaker: 'Third Citizen', lines: 'Aapko ijazat hai.' },
        { speaker: 'Fourth Citizen', lines: 'Ek ghera banao! Aas paas khade ho jao.' },
        { speaker: 'First Citizen', lines: 'Arthi se door raho. Shareer se door raho.' },
        { speaker: 'Second Citizen', lines: 'Antony ke liye jagah banao, sabse mahan Antony!' },
        { speaker: 'ANTONY', lines: 'Nahi, mujh par itna dabav mat dalo. Door khade raho.' },
        { speaker: 'Citizens', lines: 'Peeche hato. Jagah! Peeche sarko.' },
        { speaker: 'ANTONY', lines: 'Agar aapke paas aansu hain, toh ab unhe bahane ke liye taiyaar ho jao. Aap sab is choge ko jaante hain. Mujhe yaad hai jab Caesar ne ise pehli baar pehna tha. Yeh ek garmi ki shaam thi uske tent mein, jis din usne Nervii kabeele ko haraya tha. Dekho, is jagah se Cassius ka khanjar guzra. Dekho irshyaalu Casca ne kitna bada chhed kiya. Iske beech se sabse priya Brutus ne waar kiya. Aur jab usne apna shapit khanjar kheench liya, dekho kaise Caesar ka khoon uske peeche aaya, jaise darwaze se bahar nikal raha ho, yeh janne ke liye ki kya Brutus ne itni berahmi se dastak di thi, ya nahi. Kyunki Brutus, jaisa ki aap jaante hain, Caesar ka farishta tha. Faisla karo, O devtaon, Caesar usse kitna pyaar karta tha! Yeh sabse behrahmi ka waar tha. Kyunki jab mahan Caesar ne use waar karte dekha, toh ahsaan-faramoshi, gaddaron ke hathiyaron se zyada mazboot, ne use poori tarah hara diya. Tab uska mahan dil toot gaya, aur, apne choge mein apna chehra chhupakar, Pompey ki murti ke theek neeche, jahan se khoon beh raha tha, mahaan Caesar gir pade. O, woh kya giravat thi, mere deshwasiyon! Tab main, aur aap, aur hum sab gir gaye, jabki khooni deshdroh hamare upar fal-fool raha tha. Oh, ab aap ro rahe hain, aur, main mehsoos karta hoon, aapko daya ka dard ho raha hai. Yeh kripa ki boondein hain. Nek aatmaon, kya, aap tab rote hain jab aap sirf hamare Caesar ke ghayal kapde dekhte hain? Yahan dekho, yahan woh khud hai, bigda hua, jaisa ki aap dekh rahe hain, gaddaron se.' },
        { speaker: 'First Citizen', lines: 'O daya-janak drishya!' },
        { speaker: 'Second Citizen', lines: 'O mahan Caesar!' },
        { speaker: 'Third Citizen', lines: 'O dukh bhara din!' },
        { speaker: 'Fourth Citizen', lines: 'O gaddaron, gundo!' },
        { speaker: 'First Citizen', lines: 'O sabse khooni nazara!' },
        { speaker: 'Second Citizen', lines: 'Hum badla lenge.' },
        { speaker: 'Citizens', lines: 'Badla! Aage badho! Dhoondo! Jalao! Aag lagao! Maaro! Katl karo! Ek bhi gaddar zinda na bache!' },
        { speaker: 'ANTONY', lines: 'Ruko, deshwasiyon!' },
        { speaker: 'First Citizen', lines: 'Shaant raho! Mahan Antony ko suno.' },
        { speaker: 'Second Citizen', lines: 'Hum use sunenge. Hum uske peeche jayenge. Hum uske saath marenge.' },
        { speaker: 'ANTONY', lines: 'Achhe doston, pyaare doston! Mujhe aapko aisi achanak vidroh ki baadh mein na uttejit karne do. Jinhone yeh kaam kiya hai woh sammaanit hain. Unke kya niji dukh hain, afsos, main nahi jaanta, jiske kaaran unhone yeh kiya. Woh samajhdar aur sammaanit hain, aur, bina shak, aapko kaaranon ke saath jawab denge. Main nahi aaya, doston, aapke dil churane. Main Brutus jaisa vakta nahi hoon, lekin, jaisa ki aap sab mujhe jaante hain, ek seedha-sadha, saaf bolne wala aadmi jo apne dost se pyaar karta hai. Aur yeh woh log achhi tarah jaante hain jinhone mujhe uske baare mein saarvajanik roop se bolne ki ijazat di. Kyunki mere paas na toh buddhi hai, na shabd, na haisiyat, na abhinay, na vani, na bolne ki shakti, logon ke khoon mein josh bharne ke liye. Main sirf seedhi baat karta hoon. Main aapko woh batata hoon jo aap khud jaante hain, aapko pyaare Caesar ke ghaav dikhata hoon, bechare, bechare goonge munh, aur unse kehta hoon ki meri taraf se bolein. Lekin agar main Brutus hota, aur Brutus Antony, toh ek aisa Antony hota jo aapki aatmaon ko jhanjhod deta aur Caesar ke har ghaav mein ek aisi zubaan daal deta jo Rome ke pattharon ko uthkar vidroh karne ke liye majboor kar deti.' },
        { speaker: 'Citizens', lines: 'Hum vidroh karenge.' },
        { speaker: 'First Citizen', lines: 'Hum Brutus ka ghar jala denge.' },
        { speaker: 'Third Citizen', lines: 'Toh chalo! Aao, saazishkartaon ko dhoondo.' },
        { speaker: 'ANTONY', lines: 'Phir bhi mujhe suno, deshwasiyon. Phir bhi mujhe bolne do.' },
        { speaker: 'Citizens', lines: 'Shaant, ho! Antony ko suno. Sabse mahan Antony!' },
        { speaker: 'ANTONY', lines: 'Kyun, doston, aap woh karne ja rahe hain jiske baare mein aap nahi jaante. Caesar ne aapke pyaar ke laayak aisa kya kiya tha? Afsos, aap nahi jaante. Toh mujhe aapko batana hoga. Aap us vasiyat ko bhool gaye hain jiske baare mein maine aapko bataya tha.' },
        { speaker: 'Citizens', lines: 'Bilkul sach. Vasiyat! Chalo rukte hain aur vasiyat sunte hain.' },
        { speaker: 'ANTONY', lines: 'Yeh rahi vasiyat, aur Caesar ki mohar ke neeche. Har Roman nagrik ko woh deta hai—har ek aadmi ko—pachhattar drachma.' },
        { speaker: 'Second Citizen', lines: 'Sabse mahan Caesar! Hum uski maut ka badla lenge.' },
        { speaker: 'Third Citizen', lines: 'O shahi Caesar!' },
        { speaker: 'ANTONY', lines: 'Dhairya se mujhe suno.' },
        { speaker: 'Citizens', lines: 'Shaant, ho!' },
        { speaker: 'ANTONY', lines: 'Iske alawa, usne aapke liye apne sabhi baag, apne niji upvan aur naye lagaye gaye bageeche, Tiber nadi ke is paar, chhod diye hain. Usne woh aapke liye aur aapke vanshajon ke liye hamesha ke liye chhod diye hain—saarvajanik anand, bahar ghoomne aur manoranjan karne ke liye. Yeh tha ek Caesar! Aisa doosra kab aayega?' },
        { speaker: 'First Citizen', lines: 'Kabhi nahi, kabhi nahi.—Chalo, chalo, chalo! Hum uske shareer ko pavitra sthan par jalayenge, aur unhi lakdiyon se gaddaron ke gharon mein aag laga denge. Shareer uthao.' },
        { speaker: 'Second Citizen', lines: 'Aag le aao.' },
        { speaker: 'Third Citizen', lines: 'Benchen ukhad do.' },
        { speaker: 'Fourth Citizen', lines: 'Kursiyan, khidkiyan, kuch bhi ukhad do.' },
        { speaker: 'ANTONY', lines: 'Ab ise kaam karne do. Shararat, tum chal padi ho. Tum jo bhi raasta chaho, apnao! Kya haal hai, sathi?' },
        { speaker: 'Servant', lines: 'Sir, Octavius pehle hi Rome aa chuke hain.' },
        { speaker: 'ANTONY', lines: 'Woh kahan hai?' },
        { speaker: 'Servant', lines: 'Woh aur Lepidus Caesar ke ghar par hain.' },
        { speaker: 'ANTONY', lines: 'Aur main seedha wahan usse milne jaunga. Woh bilkul sahi samay par aaya hai. Kismat khush hai, aur is mood mein hamein kuch bhi degi.' },
        { speaker: 'Servant', lines: 'Maine use kehte suna, Brutus aur Cassius pagal aadmiyon ki tarah Rome ke darwazon se bhaag gaye hain.' },
        { speaker: 'ANTONY', lines: 'Lagta hai unhe logon ke baare mein kuch khabar mil gayi thi ki maine unhe kaise bhadkaya hai. Mujhe Octavius ke paas le chalo.' },
    ]
};
const descriptionVersions = {
    Shakespearean: "Brutus justifies the assassination with appeals to logic and honour, but Antony, with masterful emotion and irony, sways the Plebeians to violent mutiny.",
    'Normal English': "Brutus explains why he killed Caesar using logic, temporarily winning over the crowd. But then Antony gives a powerful, emotional speech that turns the people against the conspirators.",
    Hinglish: "Brutus apni speech se logon ko shaant karta hai, lekin phir Antony ek aisi emotional speech deta hai jisse poori bheed saazish karne walon ke khilaaf ho jaati hai aur danga shuru kar deti hai."
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
            marginTop:'50px'
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
                            <h1 style={styles.sceneTitle}>Act III, Scene 2</h1>
                            <p style={styles.sceneSubtitle}>The Roman Forum</p>
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
                                        const isNoble = ['BRUTUS', 'ANTONY'].includes(entry.speaker);
                                        const speakerColor = isNoble ? theme.colors.primary : theme.colors.gray[700];

                                        // This universal style replaces the separate mobile/desktop logic to match the script format
                                        const scriptEntryStyle = {
                                            display: 'grid',
                                            gridTemplateColumns: isLargeScreen ? '110px 1fr' : '80px 1fr',
                                            gap: '1rem',
                                            marginBottom: '1.5rem',
                                            alignItems: 'start'
                                        };
                                        const speakerStyle = {
                                            fontWeight: '700',
                                            fontFamily: theme.fontFamily.display.join(','),
                                            fontSize: '0.9rem',
                                            color: speakerColor,
                                            textTransform: 'uppercase',
                                            paddingTop: '0.125rem'
                                        };
                                        const lineStyle = {
                                            lineHeight: 1.7,
                                            color: theme.colors.gray[800],
                                            whiteSpace: 'pre-line',
                                            paddingLeft: '1rem',
                                            borderLeft: `1px solid ${theme.colors.gray[300]}`
                                        };

                                        return (
                                            <div key={index} style={scriptEntryStyle}>
                                                <div style={speakerStyle}>{entry.speaker}</div>
                                                <div style={lineStyle}>{entry.lines}</div>
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
                                <Class9icseEnglishAct3Scene2Summary/>
                            </div>
                        </div>
                    )}

{activeTab === 'qa' && (
                        <div style={styles.questionSection}>
                            <Class9icseEnglishAct3Scene2Questions/>
                        

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;



