import React, { useState, useEffect, useRef } from "react";
import Class9icseEnglishAct1Scene2Summary from "./Class9icseEnglishAct1Scene2Summary";
import Class9icseEnglishAct1Scene2Questions from "./Class9icseEnglishAct1Scene2Questions";

// Theme object for consistent styling
const theme = {
  colors: {
    primary: "#8B0000", // Dark Red
    secondary: "#DAA520", // Goldenrod
    backgroundLight: "#FDF6E3", // Parchment-like color
    textLight: "#3B3B3B",
    white: "#FFFFFF",
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
    },
    green: { 100: "rgba(22, 163, 74, 0.05)", 600: "#16a34a", 700: "#15803d" },
    red: { 100: "rgba(220, 38, 38, 0.05)", 600: "#dc2626", 700: "#b91c1c" },
  },
  fontFamily: {
    display: ["Merriweather", "serif"],
    body: ["Lato", "sans-serif"],
  },
  borderRadius: {
    DEFAULT: "0.375rem",
    lg: "0.5rem",
    xl: "1rem",
    full: "9999px",
  },
};

// Data for the scene
const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmFTapXsDo83ljkc9RhBPj6tJ18UJ7zEIahvxSWenLEt8-86HPYtIPDSt0Jr54g8evu581g3_bs0CVi36KQR4iT7j6lq80JZKwrFBUx-k-xMzJBV0MTegsV-ne8KRgDF6elCGfc_0i-qm-ZB1siZhdh010-hFDN59e1Qh_uGF17JupYy12gd36WAZM2v-XdyoqFDFCjQ_p89C_Li1u_Psm7O44j0yGfqBmqSbGuCo__xBIXA_VwXT8K4QyFNLoVi1MHzvkf2G2J3FR",
  "https://placehold.co/400x400/A52A2A/FFFFFF?text=Caesar's+Return",
  "https://placehold.co/400x400/DAA520/FFFFFF?text=Roman+Crowd",
  "https://placehold.co/400x400/3B3B3B/FFFFFF?text=The+Forum",
];
const importantWords = [
  { term: "Idle creatures", definition: "Lazy people." },
  {
    term: "Mechanical",
    definition: "Belonging to the working class; manual laborers.",
  },
  {
    term: "Sign of your profession",
    definition: "Your work clothes and tools.",
  },
  {
    term: "Cobbler",
    definition: "A shoemaker (also a playful term for a clumsy worker).",
  },
  {
    term: "Mender of bad soles",
    definition: "A pun on 'soles' of shoes and 'souls' of people.",
  },
];
const sceneQuestions = [
  {
    id: "mcq1",
    type: "mcq",
    question: "1. Why are the commoners not at work?",
    options: [
      "It's a public holiday.",
      "They are celebrating Caesar's triumph.",
      "They are on strike.",
    ],
    answer: "They are celebrating Caesar's triumph.",
  },
  {
    id: "mcq2",
    type: "mcq",
    question: "2. What is the Cobbler's witty response to Marullus?",
    options: [
      "He says he is a surgeon for old shoes.",
      "He calls himself a 'mender of bad soles'.",
      "He claims to be a professional waiter.",
    ],
    answer: "He calls himself a 'mender of bad soles'.",
  },
  {
    id: "qa1",
    type: "qa",
    question:
      "1. Why are Flavius and Marullus angry with the commoners at the beginning of the scene?",
    answer:
      "Flavius and Marullus are angry because the citizens are celebrating Caesar's triumph over the sons of Pompey, a former Roman hero whom these same citizens once celebrated with equal passion. The tribunes see this as a sign of disloyalty and fickleness.",
  },
  {
    id: "qa2",
    type: "qa",
    question:
      "2. What instructions does Flavius give to Marullus at the end of the scene?",
    answer:
      "Flavius instructs Marullus to go down the other way towards the Capitol and remove any crowns or decorations placed on Caesar's statues, in an effort to curb the celebration and Caesar's growing popularity.",
  },
  {
    id: "qa3",
    type: "qa",
    question:
      "3. How does the Cobbler's use of puns characterize the commoners in this scene?",
    answer:
      "The Cobbler's witty puns show that the commoners are not unintelligent or submissive. They are clever, can use language humorously to get the better of their superiors, and possess a spirit of their own, even when being reprimanded by officials like Marullus.",
  },
];
const workbookQuestions = [
  {
    id: "wbq1",
    question:
      "Who are Marullus and Flavius? What is their role in Roman society and why are they upset?",
    answer:
      "Marullus and Flavius are tribunes of the people in Rome. Their role is to protect the rights and interests of the common citizens (plebeians). They are upset because the same citizens who once loved and supported Pompey are now celebrating his defeater, Julius Caesar. They see this as hypocrisy and a dangerous sign of Caesar's growing, unchecked power, which they fear will lead to tyranny and the loss of Roman liberty.",
  },
  {
    id: "wbq2",
    question:
      "Analyze the use of puns by the Second Commoner (the Cobbler). What does it reveal about his character and the social dynamics of the scene?",
    answer:
      "The Cobbler's puns, such as being a 'mender of bad soles' (a play on shoes' soles and human souls), serve multiple purposes. Firstly, it shows his wit and intelligence, challenging the tribunes' assumption that commoners are simple-minded. Secondly, it is a form of passive resistance; he avoids answering Marullus directly, frustrating the official and subtly mocking his authority. This wordplay highlights the class tension between the powerful tribunes and the clever, resilient commoners.",
  },
  {
    id: "wbq3",
    question:
      "What is the 'Feast of Lupercal'? What instruction does Flavius give regarding it?",
    answer:
      "The Feast of Lupercal was an ancient Roman festival of purification and fertility, celebrated on February 15th. Flavius instructs the commoners to go home and pray for forgiveness for their ingratitude towards Pompey. He also tells Marullus to help him 'disrobe the images'—that is, to remove the decorations placed on Caesar's statues. His goal is to mute the celebration and remind Caesar that he is just a man, not a god, thereby checking his ambition.",
  },
];
const dialogueVersions = {
  Shakespearean: [
    { speaker: "CAESAR", lines: "Calphurnia!" },
    { speaker: "CASCA", lines: "Peace, ho! Caesar speaks." },
    { speaker: "CAESAR", lines: "Calphurnia!" },
    { speaker: "CALPHURNIA", lines: "Here, my lord." },
    {
      speaker: "CAESAR",
      lines:
        "Stand you directly in Antonius' way\nWhen he doth run his course.—Antonius!",
    },
    { speaker: "ANTONY", lines: "Caesar, my lord." },
    {
      speaker: "CAESAR",
      lines:
        "Forget not in your speed, Antonius,\nTo touch Calphurnia, for our elders say\nThe barren, touchèd in this holy chase,\nShake off their sterile curse.",
    },
    {
      speaker: "ANTONY",
      lines: "I shall remember.\nWhen Caesar says, “do this,” it is performed.",
    },
    { speaker: "CAESAR", lines: "Set on, and leave no ceremony out." },
    { speaker: "SOOTHSAYER", lines: "Caesar!" },
    { speaker: "CAESAR", lines: "Ha! Who calls?" },
    { speaker: "CASCA", lines: "Bid every noise be still. Peace yet again." },
    {
      speaker: "CAESAR",
      lines:
        "Who is it in the press that calls on me?\nI hear a tongue, shriller than all the music,\nCry “Caesar!”—Speak. Caesar is turned to hear.",
    },
    { speaker: "SOOTHSAYER", lines: "Beware the ides of March." },
    { speaker: "CAESAR", lines: "What man is that?" },
    {
      speaker: "BRUTUS",
      lines: "A soothsayer bids you beware the ides of March.",
    },
    { speaker: "CAESAR", lines: "Set him before me. Let me see his face." },
    {
      speaker: "CASSIUS",
      lines: "Fellow, come from the throng. Look upon Caesar.",
    },
    {
      speaker: "CAESAR",
      lines: "What sayst thou to me now? Speak once again.",
    },
    { speaker: "SOOTHSAYER", lines: "Beware the ides of March." },
    { speaker: "CAESAR", lines: "He is a dreamer. Let us leave him. Pass!" },
    { speaker: "CASSIUS", lines: "Will you go see the order of the course?" },
    { speaker: "BRUTUS", lines: "Not I." },
    { speaker: "CASSIUS", lines: "I pray you, do." },
    {
      speaker: "BRUTUS",
      lines:
        "I am not gamesome. I do lack some part\nOf that quick spirit that is in Antony.\nLet me not hinder, Cassius, your desires.\nI’ll leave you.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Brutus, I do observe you now of late\nI have not from your eyes that gentleness\nAnd show of love as I was wont to have.\nYou bear too stubborn and too strange a hand\nOver your friend that loves you.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Cassius,\nBe not deceived. If I have veiled my look,\nI turn the trouble of my countenance\nMerely upon myself. Vexèd I am\nOf late with passions of some difference,\nConceptions only proper to myself,\nWhich give some soil perhaps to my behaviors.\nBut let not therefore, my good friends, be grieved—\nAmong which number, Cassius, be you one—\nNor construe any further my neglect\nThan that poor Brutus, with himself at war,\nForgets the shows of love to other men.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Then, Brutus, I have much mistook your passion,\nBy means whereof this breast of mine hath buried\nThoughts of great value, worthy cogitations.\nTell me, good Brutus, can you see your face?",
    },
    {
      speaker: "BRUTUS",
      lines:
        "No, Cassius, for the eye sees not itself\nBut by reflection, by some other things.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "'Tis just.\nAnd it is very much lamented, Brutus,\nThat you have no such mirrors as will turn\nYour hidden worthiness into your eye\nThat you might see your shadow. I have heard\nWhere many of the best respect in Rome,\nExcept immortal Caesar, speaking of Brutus\nAnd groaning underneath this age’s yoke,\nHave wished that noble Brutus had his eyes.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Into what dangers would you lead me, Cassius,\nThat you would have me seek into myself\nFor that which is not in me?",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Therefore, good Brutus, be prepared to hear.\nAnd since you know you cannot see yourself\nSo well as by reflection, I, your glass,\nWill modestly discover to yourself\nThat of yourself which you yet know not of.\nAnd be not jealous on me, gentle Brutus.\nWere I a common laugher, or did use\nTo stale with ordinary oaths my love\nTo every new protester, if you know\nThat I do fawn on men and hug them hard\nAnd, after, scandal them, or if you know\nThat I profess myself in banqueting\nTo all the rout, then hold me dangerous.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "What means this shouting? I do fear, the people\nChoose Caesar for their king.",
    },
    {
      speaker: "CASSIUS",
      lines: "Ay, do you fear it?\nThen must I think you would not have it so.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "I would not, Cassius. Yet I love him well.\nBut wherefore do you hold me here so long?\nWhat is it that you would impart to me?\nIf it be aught toward the general good,\nSet honor in one eye and death i' th' other,\nAnd I will look on both indifferently,\nFor let the gods so speed me as I love\nThe name of honor more than I fear death.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "I know that virtue to be in you, Brutus,\nAs well as I do know your outward favor.\nWell, honor is the subject of my story.\nI cannot tell what you and other men\nThink of this life, but, for my single self,\nI had as lief not be as live to be\nIn awe of such a thing as I myself.\nI was born free as Caesar. So were you.\nWe both have fed as well, and we can both\nEndure the winter’s cold as well as he.\nFor once upon a raw and gusty day,\nThe troubled Tiber chafing with her shores,\nCaesar said to me, “Darest thou, Cassius, now\nLeap in with me into this angry flood\nAnd swim to yonder point?” Upon the word,\nAccoutred as I was, I plungèd in\nAnd bade him follow. So indeed he did.\nThe torrent roared, and we did buffet it\nWith lusty sinews, throwing it aside\nAnd stemming it with hearts of controversy.\nBut ere we could arrive the point proposed,\nCaesar cried, “Help me, Cassius, or I sink!”\nI, as Aeneas, our great ancestor,\nDid from the flames of Troy upon his shoulder\nThe old Anchises bear, so from the waves of Tiber\nDid I the tired Caesar. And this man\nIs now become a god, and Cassius is\nA wretched creature and must bend his body\nIf Caesar carelessly but nod on him.\nHe had a fever when he was in Spain,\nAnd when the fit was on him, I did mark\nHow he did shake. 'Tis true, this god did shake!\nHis coward lips did from their color fly,\nAnd that same eye whose bend doth awe the world\nDid lose his luster. I did hear him groan,\nAy, and that tongue of his that bade the Romans\nMark him and write his speeches in their books—\n“Alas,” it cried, “give me some drink, Titinius,”\nAs a sick girl. Ye gods, it doth amaze me\nA man of such a feeble temper should\nSo get the start of the majestic world\nAnd bear the palm alone.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Another general shout!\nI do believe that these applauses are\nFor some new honors that are heaped on Caesar.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Why, man, he doth bestride the narrow world\nLike a Colossus, and we petty men\nWalk under his huge legs and peep about\nTo find ourselves dishonorable graves.\nMen at some time are masters of their fates.\nThe fault, dear Brutus, is not in our stars\nBut in ourselves, that we are underlings.\nBrutus and Caesar—what should be in that “Caesar”?\nWhy should that name be sounded more than yours?\nWrite them together, yours is as fair a name.\nSound them, it doth become the mouth as well.\nWeigh them, it is as heavy. Conjure with 'em,\n“Brutus” will start a spirit as soon as “Caesar.”\nNow in the names of all the gods at once,\nUpon what meat doth this our Caesar feed\nThat he is grown so great? Age, thou art shamed!\nRome, thou hast lost the breed of noble bloods!\nWhen went there by an age, since the great flood,\nBut it was famed with more than with one man?\nWhen could they say till now, that talked of Rome,\nThat her wide walks encompassed but one man?\nNow is it Rome indeed, and room enough,\nWhen there is in it but one only man.\nOh, you and I have heard our fathers say,\nThere was a Brutus once that would have brooked\nTh' eternal devil to keep his state in Rome\nAs easily as a king.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "That you do love me, I am nothing jealous.\nWhat you would work me to, I have some aim.\nHow I have thought of this and of these times\nI shall recount hereafter. For this present,\nI would not, so with love I might entreat you,\nBe any further moved. What you have said\nI will consider, what you have to say\nI will with patience hear, and find a time\nBoth meet to hear and answer such high things.\nTill then, my noble friend, chew upon this:\nBrutus had rather be a villager\nThan to repute himself a son of Rome\nUnder these hard conditions as this time\nIs like to lay upon us.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "I am glad that my weak words\nHave struck but thus much show of fire from Brutus.",
    },
    { speaker: "BRUTUS", lines: "The games are done and Caesar is returning." },
    {
      speaker: "CASSIUS",
      lines:
        "As they pass by, pluck Casca by the sleeve,\nAnd he will, after his sour fashion, tell you\nWhat hath proceeded worthy note today.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "I will do so. But, look you, Cassius,\nThe angry spot doth glow on Caesar’s brow,\nAnd all the rest look like a chidden train.\nCalphurnia’s cheek is pale, and Cicero\nLooks with such ferret and such fiery eyes\nAs we have seen him in the Capitol\nBeing crossed in conference by some senators.",
    },
    { speaker: "CASSIUS", lines: "Casca will tell us what the matter is." },
    { speaker: "CAESAR", lines: "Antonio." },
    { speaker: "ANTONY", lines: "Caesar." },
    {
      speaker: "CAESAR",
      lines:
        "(aside to ANTONY) Let me have men about me that are fat,\nSleek-headed men and such as sleep a-nights.\nYond Cassius has a lean and hungry look.\nHe thinks too much. Such men are dangerous.",
    },
    {
      speaker: "ANTONY",
      lines:
        "(aside to CAESAR) Fear him not, Caesar. He’s not dangerous.\nHe is a noble Roman and well given.",
    },
    {
      speaker: "CAESAR",
      lines:
        "(aside to ANTONY) Would he were fatter! But I fear him not.\nYet if my name were liable to fear,\nI do not know the man I should avoid\nSo soon as that spare Cassius. He reads much.\nHe is a great observer, and he looks\nQuite through the deeds of men. He loves no plays,\nAs thou dost, Antony. He hears no music.\nSeldom he smiles, and smiles in such a sort\nAs if he mocked himself and scorned his spirit\nThat could be moved to smile at anything.\nSuch men as he be never at heart’s ease\nWhiles they behold a greater than themselves,\nAnd therefore are they very dangerous.\nI rather tell thee what is to be feared\nThan what I fear, for always I am Caesar.\nCome on my right hand, for this ear is deaf,\nAnd tell me truly what thou think’st of him.",
    },
    {
      speaker: "CASCA",
      lines: "(to BRUTUS) You pulled me by the cloak. Would you speak with me?",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Ay, Casca. Tell us what hath chanced today\nThat Caesar looks so sad.",
    },
    { speaker: "CASCA", lines: "Why, you were with him, were you not?" },
    {
      speaker: "BRUTUS",
      lines: "I should not then ask Casca what had chanced.",
    },
    {
      speaker: "CASCA",
      lines:
        "Why, there was a crown offered him; and, being offered him, he put it by with the back of his hand, thus; and then the people fell a-shouting.",
    },
    { speaker: "BRUTUS", lines: "What was the second noise for?" },
    { speaker: "CASCA", lines: "Why, for that too." },
    {
      speaker: "CASSIUS",
      lines: "They shouted thrice. What was the last cry for?",
    },
    { speaker: "CASCA", lines: "Why, for that too." },
    { speaker: "BRUTUS", lines: "Was the crown offered him thrice?" },
    {
      speaker: "CASCA",
      lines:
        "Ay, marry, was ’t, and he put it by thrice, every time gentler than other, and at every putting-by mine honest neighbors shouted.",
    },
    { speaker: "CASSIUS", lines: "Who offered him the crown?" },
    { speaker: "CASCA", lines: "Why, Antony." },
    { speaker: "BRUTUS", lines: "Tell us the manner of it, gentle Casca." },
    {
      speaker: "CASCA",
      lines:
        "I can as well be hanged as tell the manner of it. It was mere foolery. I did not mark it. I saw Mark Antony offer him a crown (yet ’twas not a crown neither, ’twas one of these coronets) and, as I told you, he put it by once—but, for all that, to my thinking, he would fain have had it. Then he offered it to him again, then he put it by again—but, to my thinking, he was very loath to lay his fingers off it. And then he offered it the third time. He put it the third time by. And still, as he refused it, the rabblement hooted and clapped their chapped hands and threw up their sweaty night-caps and uttered such a deal of stinking breath because Caesar refused the crown that it had almost choked Caesar—for he swooned and fell down at it. And for mine own part, I durst not laugh for fear of opening my lips and receiving the bad air.",
    },
    {
      speaker: "CASSIUS",
      lines: "But soft, I pray you. What, did Caesar swoon?",
    },
    {
      speaker: "CASCA",
      lines:
        "He fell down in the marketplace, and foamed at mouth, and was speechless.",
    },
    {
      speaker: "BRUTUS",
      lines: "'Tis very like. He hath the falling sickness.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "No, Caesar hath it not. But you and I\nAnd honest Casca, we have the falling sickness.",
    },
    {
      speaker: "CASCA",
      lines:
        "I know not what you mean by that, but I am sure Caesar fell down. If the tag-rag people did not clap him and hiss him according as he pleased and displeased them, as they use to do the players in the theatre, I am no true man.",
    },
    { speaker: "BRUTUS", lines: "What said he when he came unto himself?" },
    {
      speaker: "CASCA",
      lines:
        "Marry, before he fell down, when he perceived the common herd was glad he refused the crown, he plucked me ope his doublet and offered them his throat to cut. An I had been a man of any occupation, if I would not have taken him at a word, I would I might go to hell among the rogues. And so he fell. When he came to himself again, he said, if he had done or said anything amiss, he desired their worships to think it was his infirmity. Three or four wenches where I stood cried, “Alas, good soul!” and forgave him with all their hearts. But there’s no heed to be taken of them. If Caesar had stabbed their mothers they would have done no less.",
    },
    { speaker: "BRUTUS", lines: "And after that he came thus sad away?" },
    { speaker: "CASCA", lines: "Ay." },
    { speaker: "CASSIUS", lines: "Did Cicero say anything?" },
    { speaker: "CASCA", lines: "Ay, he spoke Greek." },
    { speaker: "CASSIUS", lines: "To what effect?" },
    {
      speaker: "CASCA",
      lines:
        "Nay, an I tell you that, I’ll ne'er look you i' th' face again. But those that understood him smiled at one another and shook their heads. But, for mine own part, it was Greek to me. I could tell you more news too. Murellus and Flavius, for pulling scarfs off Caesar’s images, are put to silence. Fare you well. There was more foolery yet, if I could remember it.",
    },
    { speaker: "CASSIUS", lines: "Will you sup with me tonight, Casca?" },
    { speaker: "CASCA", lines: "No, I am promised forth." },
    { speaker: "CASSIUS", lines: "Will you dine with me tomorrow?" },
    {
      speaker: "CASCA",
      lines:
        "Ay, if I be alive and your mind hold and your dinner worth the eating.",
    },
    { speaker: "CASSIUS", lines: "Good. I will expect you." },
    { speaker: "CASCA", lines: "Do so. Farewell both." },
    {
      speaker: "BRUTUS",
      lines:
        "What a blunt fellow is this grown to be!\nHe was quick mettle when he went to school.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "So is he now in execution\nOf any bold or noble enterprise,\nHowever he puts on this tardy form.\nThis rudeness is a sauce to his good wit,\nWhich gives men stomach to digest his words\nWith better appetite.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "And so it is. For this time I will leave you.\nTomorrow, if you please to speak with me,\nI will come home to you. Or, if you will,\nCome home to me, and I will wait for you.",
    },
    {
      speaker: "CASSIUS",
      lines: "I will do so. Till then, think of the world.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Well, Brutus, thou art noble. Yet I see\nThy honorable mettle may be wrought\nFrom that it is disposed. Therefore it is meet\nThat noble minds keep ever with their likes,\nFor who so firm that cannot be seduced?\nCaesar doth bear me hard, but he loves Brutus.\nIf I were Brutus now and he were Cassius,\nHe should not humor me. I will this night,\nIn several hands, in at his windows throw,\nAs if they came from several citizens,\nWritings all tending to the great opinion\nThat Rome holds of his name, wherein obscurely\nCaesar’s ambition shall be glancèd at.\nAnd after this let Caesar seat him sure,\nFor we will shake him, or worse days endure.",
    },
  ],
  "Normal English": [
    { speaker: "CAESAR", lines: "Calphurnia!" },
    { speaker: "CASCA", lines: "Quiet, hey! Caesar is speaking." },
    { speaker: "CAESAR", lines: "Calphurnia!" },
    { speaker: "CALPHURNIA", lines: "Here, my lord." },
    {
      speaker: "CAESAR",
      lines: "Stand directly in Antony's way\nWhen he runs his race.—Antony!",
    },
    { speaker: "ANTONY", lines: "Caesar, my lord." },
    {
      speaker: "CAESAR",
      lines:
        "Don't forget in your speed, Antony,\nTo touch Calphurnia, for our elders say\nThat infertile women, when touched in this holy race,\nAre cured of their sterile curse.",
    },
    {
      speaker: "ANTONY",
      lines: "I will remember.\nWhen Caesar says, “do this,” it is done.",
    },
    { speaker: "CAESAR", lines: "Proceed, and leave out no ceremony." },
    { speaker: "SOOTHSAYER", lines: "Caesar!" },
    { speaker: "CAESAR", lines: "Ha! Who calls?" },
    {
      speaker: "CASCA",
      lines: "Tell every noise to be still. Quiet once more.",
    },
    {
      speaker: "CAESAR",
      lines:
        "Who is it in the crowd that calls on me?\nI hear a voice, sharper than all the music,\nCry “Caesar!”—Speak. Caesar has turned to listen.",
    },
    { speaker: "SOOTHSAYER", lines: "Beware the ides of March." },
    { speaker: "CAESAR", lines: "What man is that?" },
    {
      speaker: "BRUTUS",
      lines: "A soothsayer tells you to beware the ides of March.",
    },
    { speaker: "CAESAR", lines: "Bring him before me. Let me see his face." },
    {
      speaker: "CASSIUS",
      lines: "Fellow, come out of the crowd. Look at Caesar.",
    },
    {
      speaker: "CAESAR",
      lines: "What do you say to me now? Speak once again.",
    },
    { speaker: "SOOTHSAYER", lines: "Beware the ides of March." },
    { speaker: "CAESAR", lines: "He is a dreamer. Let's leave him. Pass!" },
    { speaker: "CASSIUS", lines: "Will you go see the order of the race?" },
    { speaker: "BRUTUS", lines: "Not I." },
    { speaker: "CASSIUS", lines: "I ask you, please do." },
    {
      speaker: "BRUTUS",
      lines:
        "I am not in a sporting mood. I lack some of\nThat quick spirit that is in Antony.\nLet me not hold you back, Cassius, from your desires.\nI’ll leave you.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Brutus, I have been observing you lately.\nI have not seen in your eyes the gentleness\nAnd show of love that I was used to seeing.\nYou treat your friend who loves you\nIn too stubborn and too distant a manner.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Cassius,\nDon't be deceived. If I have hidden my true feelings,\nI turn the trouble of my expression\nMerely upon myself. I am troubled\nLately with conflicting emotions,\nIdeas that are personal to me,\nWhich perhaps add some tarnish to my behaviors.\nBut do not let my good friends be saddened by this—\nAmong whom, Cassius, you are one—\nNor interpret my neglect any further\nThan that poor Brutus, at war with himself,\nForgets to show affection to other men.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Then, Brutus, I have greatly misunderstood your feelings,\nBecause of which this heart of mine has buried\nThoughts of great value, worthy ideas.\nTell me, good Brutus, can you see your face?",
    },
    {
      speaker: "BRUTUS",
      lines:
        "No, Cassius, for the eye does not see itself\nExcept by reflection, from some other things.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "That's right.\nAnd it is a great shame, Brutus,\nThat you have no mirrors that will show\nYour hidden worthiness to your own eye\nSo that you might see your own reflection. I have heard\nThat many of the most respected men in Rome,\n(Excluding immortal Caesar), speaking of Brutus\nAnd groaning under the burden of this age,\nHave wished that noble Brutus had his eyes open.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Into what dangers would you lead me, Cassius,\nThat you would have me search within myself\nFor that which is not in me?",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Therefore, good Brutus, be prepared to listen.\nAnd since you know you cannot see yourself\nAs well as by reflection, I, your mirror,\nWill modestly reveal to you\nThat part of yourself which you do not yet know of.\nAnd do not be suspicious of me, gentle Brutus.\nIf I were a common jester, or used to\nCheapen my love with ordinary oaths\nTo every new acquaintance, if you know\nThat I flatter men and embrace them tightly\nAnd, afterward, slander them, or if you know\nThat I declare friendship at banquets\nTo everyone, then consider me dangerous.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "What does this shouting mean? I am afraid the people\nAre choosing Caesar for their king.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Yes, you fear it?\nThen I must think you would not want it to happen.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "I would not, Cassius. Yet I love him well.\nBut why do you keep me here so long?\nWhat is it that you want to tell me?\nIf it is something for the general good,\nSet honor in one eye and death in the other,\nAnd I will look on both impartially,\nFor may the gods help me as much as I love\nThe name of honor more than I fear death.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "I know that virtue is in you, Brutus,\nAs well as I know your outward appearance.\nWell, honor is the subject of my story.\nI cannot tell what you and other men\nThink of this life, but, for myself alone,\nI would just as soon not exist as to live\nIn awe of something that is just like me.\nI was born as free as Caesar. So were you.\nWe both have eaten as well, and we can both\nEndure the winter’s cold as well as he can.\nFor once, on a raw and gusty day,\nWhen the troubled Tiber was rough against its shores,\nCaesar said to me, “Do you dare, Cassius, now\nTo leap with me into this angry river\nAnd swim to that point over there?” Upon his word,\nDressed as I was, I plunged in\nAnd told him to follow. And so he did.\nThe torrent roared, and we fought against it\nWith strong muscles, throwing it aside\nAnd pushing through it with determined hearts.\nBut before we could reach the proposed point,\nCaesar cried, “Help me, Cassius, or I will sink!”\nI, like Aeneas, our great ancestor,\nWho carried from the flames of Troy on his shoulder\nThe old Anchises, so from the waves of the Tiber\nDid I carry the tired Caesar. And this man\nHas now become a god, and Cassius is\nA wretched creature who must bow his body\nIf Caesar carelessly just nods at him.\nHe had a fever when he was in Spain,\nAnd when the fit was upon him, I noticed\nHow he shook. It's true, this god shook!\nHis cowardly lips lost their color,\nAnd that same eye whose gaze awes the world\nLost its brightness. I heard him groan,\nYes, and that tongue of his that ordered the Romans\nTo take note of him and write his speeches in their books—\n“Alas,” it cried, “give me some drink, Titinius,”\nLike a sick girl. By the gods, it amazes me\nThat a man of such a feeble constitution should\nGet ahead of the majestic world\nAnd hold the victory alone.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Another general shout!\nI do believe that this applause is\nFor some new honors that are being piled on Caesar.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Why, man, he bestrides the narrow world\nLike a Colossus, and we petty men\nWalk under his huge legs and peep about\nTo find ourselves dishonorable graves.\nMen at some point are masters of their fates.\nThe fault, dear Brutus, is not in our stars\nBut in ourselves, that we are subordinates.\nBrutus and Caesar—what should be special in that “Caesar”?\nWhy should that name be spoken more than yours?\nWrite them together, yours is as fair a name.\nSound them, it fits the mouth just as well.\nWeigh them, it is as heavy. Conjure with them,\n“Brutus” will summon a spirit as soon as “Caesar.”\nNow in the names of all the gods at once,\nUpon what food does this Caesar of ours feed\nThat he has grown so great? Oh, this age should be ashamed!\nRome, you have lost the line of noble men!\nWhen has an age passed, since the great flood,\nThat was famous for more than just one man?\nWhen could they say until now, when talking of Rome,\nThat her wide walls enclosed only one man?\nNow it is truly Rome, and there's room enough,\nWhen there is only one man in it.\nOh, you and I have heard our fathers say,\nThere was a Brutus once who would have tolerated\nThe eternal devil to keep his state in Rome\nAs easily as he would have tolerated a king.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "That you love me, I am not at all suspicious.\nWhat you want me to do, I have some idea.\nHow I have thought of this and of these times\nI will tell you later. For now,\nI would not, if I may entreat you with love,\nBe moved any further. What you have said\nI will consider; what you have to say\nI will listen to with patience, and find a time\nBoth suitable to hear and answer such important things.\nUntil then, my noble friend, think about this:\nBrutus would rather be a common villager\nThan call himself a son of Rome\nUnder the hard conditions that this time\nIs likely to impose upon us.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "I am glad that my weak words\nHave struck this much of a spark from Brutus.",
    },
    { speaker: "BRUTUS", lines: "The games are over and Caesar is returning." },
    {
      speaker: "CASSIUS",
      lines:
        "As they pass by, pluck Casca by the sleeve,\nAnd he will, in his sour way, tell you\nWhat noteworthy things have happened today.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "I will do so. But, look, Cassius,\nThe angry spot glows on Caesar’s brow,\nAnd all the rest look like a scolded group.\nCalphurnia’s cheek is pale, and Cicero\nLooks with such ferret-like and fiery eyes\nAs we have seen him in the Capitol\nWhen he is contradicted in a debate by some senators.",
    },
    { speaker: "CASSIUS", lines: "Casca will tell us what the matter is." },
    { speaker: "CAESAR", lines: "Antonio." },
    { speaker: "ANTONY", lines: "Caesar." },
    {
      speaker: "CAESAR",
      lines:
        "(aside to ANTONY) Let me have men around me who are fat,\nSleek-headed men and those who sleep at night.\nThat Cassius over there has a lean and hungry look.\nHe thinks too much. Such men are dangerous.",
    },
    {
      speaker: "ANTONY",
      lines:
        "(aside to CAESAR) Do not fear him, Caesar. He’s not dangerous.\nHe is a noble Roman and of good character.",
    },
    {
      speaker: "CAESAR",
      lines:
        "(aside to ANTONY) I wish he were fatter! But I do not fear him.\nYet if my name were capable of fear,\nI do not know the man I should avoid\nAs soon as that lean Cassius. He reads a lot.\nHe is a great observer, and he sees\nRight through the deeds of men. He loves no plays,\nAs you do, Antony. He hears no music.\nHe seldom smiles, and smiles in such a way\nAs if he mocked himself and scorned his own spirit\nThat could be moved to smile at anything.\nMen like him are never at ease in their hearts\nWhile they see someone greater than themselves,\nAnd therefore they are very dangerous.\nI am telling you what is to be feared\nRather than what I fear, for I am always Caesar.\nCome to my right side, for this ear is deaf,\nAnd tell me truly what you think of him.",
    },
    {
      speaker: "CASCA",
      lines:
        "(to BRUTUS) You pulled me by the cloak. Did you want to speak with me?",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Yes, Casca. Tell us what happened today\nThat makes Caesar look so sad.",
    },
    { speaker: "CASCA", lines: "Why, you were with him, weren't you?" },
    {
      speaker: "BRUTUS",
      lines: "I would not then be asking Casca what had happened.",
    },
    {
      speaker: "CASCA",
      lines:
        "Well, a crown was offered to him; and when it was offered, he pushed it away with the back of his hand, like this; and then the people started shouting.",
    },
    { speaker: "BRUTUS", lines: "What was the second noise for?" },
    { speaker: "CASCA", lines: "Why, for that too." },
    {
      speaker: "CASSIUS",
      lines: "They shouted three times. What was the last cry for?",
    },
    { speaker: "CASCA", lines: "Why, for that too." },
    { speaker: "BRUTUS", lines: "Was the crown offered to him three times?" },
    {
      speaker: "CASCA",
      lines:
        "Yes, indeed, it was, and he pushed it away three times, each time more gently than the last, and at every refusal my honest neighbors shouted.",
    },
    { speaker: "CASSIUS", lines: "Who offered him the crown?" },
    { speaker: "CASCA", lines: "Why, Antony." },
    { speaker: "BRUTUS", lines: "Tell us how it happened, gentle Casca." },
    {
      speaker: "CASCA",
      lines:
        "I might as well be hanged as tell you how it happened. It was utter foolishness. I didn't pay much attention. I saw Mark Antony offer him a crown (though it wasn't a real crown, it was one of those small coronets) and, as I told you, he pushed it away once—but, despite that, in my opinion, he would have gladly taken it. Then he offered it to him again, then he pushed it away again—but, in my opinion, he was very reluctant to take his fingers off it. And then he offered it the third time. He pushed it away the third time. And still, as he refused it, the crowd hooted and clapped their chapped hands and threw up their sweaty night-caps and let out such a great deal of stinking breath because Caesar refused the crown that it almost choked Caesar—for he fainted and fell down at it. And as for me, I dared not laugh for fear of opening my lips and breathing in the bad air.",
    },
    { speaker: "CASSIUS", lines: "But wait, please. What, did Caesar faint?" },
    {
      speaker: "CASCA",
      lines:
        "He fell down in the marketplace, and foamed at the mouth, and was speechless.",
    },
    {
      speaker: "BRUTUS",
      lines: "That's very likely. He has the falling sickness (epilepsy).",
    },
    {
      speaker: "CASSIUS",
      lines:
        "No, Caesar doesn't have it. But you and I,\nAnd honest Casca, we have the falling sickness (we are falling under Caesar's power).",
    },
    {
      speaker: "CASCA",
      lines:
        "I don't know what you mean by that, but I am sure Caesar fell down. If the common people didn't clap and hiss him according to whether he pleased or displeased them, as they usually do to the actors in the theatre, then I'm not an honest man.",
    },
    { speaker: "BRUTUS", lines: "What did he say when he came to his senses?" },
    {
      speaker: "CASCA",
      lines:
        "Well, before he fell down, when he noticed the common crowd was glad he refused the crown, he opened up his jacket and offered them his throat to cut. If I had been a working man, if I hadn't taken him at his word, I wish I'd go to hell with the rogues. And so he fell. When he came to himself again, he said, if he had done or said anything wrong, he wanted them to think it was because of his illness. Three or four women where I stood cried, “Alas, good soul!” and forgave him with all their hearts. But no attention should be paid to them. If Caesar had stabbed their mothers, they would have done no less.",
    },
    { speaker: "BRUTUS", lines: "And after that he came away looking so sad?" },
    { speaker: "CASCA", lines: "Yes." },
    { speaker: "CASSIUS", lines: "Did Cicero say anything?" },
    { speaker: "CASCA", lines: "Yes, he spoke Greek." },
    { speaker: "CASSIUS", lines: "To what effect?" },
    {
      speaker: "CASCA",
      lines:
        "No, if I tell you that, I'll never be able to look you in the face again. But those that understood him smiled at one another and shook their heads. But, for my own part, it was all Greek to me. I can tell you more news too. Murellus and Flavius, for pulling scarves off Caesar’s statues, have been silenced (executed or exiled). Farewell. There was more foolishness yet, if I could remember it.",
    },
    {
      speaker: "CASSIUS",
      lines: "Will you have supper with me tonight, Casca?",
    },
    { speaker: "CASCA", lines: "No, I have other plans." },
    { speaker: "CASSIUS", lines: "Will you dine with me tomorrow?" },
    {
      speaker: "CASCA",
      lines:
        "Yes, if I am alive and you don't change your mind and your dinner is worth eating.",
    },
    { speaker: "CASSIUS", lines: "Good. I will expect you." },
    { speaker: "CASCA", lines: "Do so. Farewell to you both." },
    {
      speaker: "BRUTUS",
      lines:
        "What a blunt fellow this has become!\nHe was sharp-witted when he went to school.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "He is still so now in the execution\nOf any bold or noble undertaking,\nHowever he puts on this slow appearance.\nThis rudeness is a sauce to his sharp wit,\nWhich gives men the stomach to digest his words\nWith a better appetite.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "And so it is. For this time I will leave you.\nTomorrow, if you would like to speak with me,\nI will come to your home. Or, if you prefer,\nCome to my home, and I will wait for you.",
    },
    {
      speaker: "CASSIUS",
      lines: "I will do so. Until then, think of the world.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Well, Brutus, you are noble. Yet I see\nYour honorable character can be manipulated\nFrom its natural disposition. Therefore it is fitting\nThat noble minds should always keep with their own kind,\nFor who is so firm that they cannot be seduced?\nCaesar dislikes me, but he loves Brutus.\nIf I were Brutus now and he were Cassius,\nHe would not influence me. Tonight, I will,\nIn several different handwritings, throw into his windows,\nAs if they came from several citizens,\nWritings all alluding to the great opinion\nThat Rome holds of his name, in which Caesar's\nambition will be subtly hinted at.\nAnd after this, let Caesar watch his position carefully,\nFor we will shake him, or endure worse days.",
    },
  ],
  Hinglish: [
    { speaker: "CAESAR", lines: "Calphurnia!" },
    { speaker: "CASCA", lines: "Shaant, ho! Caesar bol rahe hain." },
    { speaker: "CAESAR", lines: "Calphurnia!" },
    { speaker: "CALPHURNIA", lines: "Yahan, mere swami." },
    {
      speaker: "CAESAR",
      lines:
        "Tum sidhe Antonius ke raaste mein khadi ho jao\nJab woh apni daud lagaye.—Antonius!",
    },
    { speaker: "ANTONY", lines: "Caesar, mere swami." },
    {
      speaker: "CAESAR",
      lines:
        "Apni raftaar mein bhulna mat, Antonius,\nCalphurnia ko sparsh karna, kyunki hamare buzurg kehte hain\nKi is pavitra daud mein sparsh ki gayi banjh mahila,\nApne banjhpan ke shraap se mukt ho jaati hai.",
    },
    {
      speaker: "ANTONY",
      lines:
        "Mujhe yaad rahega.\nJab Caesar kehte hain, “yeh karo,” toh woh ho jaata hai.",
    },
    { speaker: "CAESAR", lines: "Aage badho, aur koi rasm mat chhodna." },
    { speaker: "SOOTHSAYER", lines: "Caesar!" },
    { speaker: "CAESAR", lines: "Hain! Kaun bula raha hai?" },
    { speaker: "CASCA", lines: "Har shor ko shaant karo. Phir se shaanti." },
    {
      speaker: "CAESAR",
      lines:
        "Bheed mein kaun hai jo mujhe pukaar raha hai?\nMujhe sangeet se bhi teekhi ek awaaz sunai de rahi hai,\nJo “Caesar!” chilla rahi hai.—Bolo. Caesar sunne ke liye taiyaar hai.",
    },
    { speaker: "SOOTHSAYER", lines: "March ke ides se savdhan rehna." },
    { speaker: "CAESAR", lines: "Kaun hai woh aadmi?" },
    {
      speaker: "BRUTUS",
      lines:
        "Ek jyotishi aapse March ke ides se savdhan rehne ko keh raha hai.",
    },
    {
      speaker: "CAESAR",
      lines: "Use mere saamne laao. Mujhe uska chehra dekhne do.",
    },
    { speaker: "CASSIUS", lines: "Dost, bheed se niklo. Caesar ko dekho." },
    {
      speaker: "CAESAR",
      lines: "Ab tum mujhse kya kehte ho? Ek baar phir bolo.",
    },
    { speaker: "SOOTHSAYER", lines: "March ke ides se savdhan rehna." },
    {
      speaker: "CAESAR",
      lines: "Woh ek sapne dekhne wala hai. Chalo use chhod de. Aage badho!",
    },
    { speaker: "CASSIUS", lines: "Kya tum daud ka aayojan dekhne jaoge?" },
    { speaker: "BRUTUS", lines: "Main nahi." },
    { speaker: "CASSIUS", lines: "Main vinti karta hoon, jao." },
    {
      speaker: "BRUTUS",
      lines:
        "Mera khel-kood ka mann nahi hai. Mujhme us\ntez jazbe ka kuch hissa nahi hai jo Antony mein hai.\nMujhe rokne mat do, Cassius, tumhari ichhaon ko.\nMain chalta hoon.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Brutus, main haal hi mein tumhe dekh raha hoon\nTumhari aankhon se mujhe woh naramdili\nAur pyaar ka izhaar nahi mil raha jo mujhe pehle milta tha.\nTum apne dost par jo tumhe pyaar karta hai,\nbahut ziddi aur ajnabi haath rakhte ho.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Cassius,\nDhokhe mein mat raho. Agar maine apna chehra dhak liya hai,\nToh main apne chehre ki pareshani ko\nSirf apne upar hi mod deta hoon. Main pareshan hoon\nHaal hi mein kuch alag tarah ke jazbaaton se,\nKalpanayein jo sirf mere liye hain,\nJo shayad mere bartaav ko kuch kharab karti hain.\nLekin isliye, mere achhe dost, dukhi na ho—\nJinmein se, Cassius, tum bhi ek ho—\nAur meri is laaparwahi ko aur kuch na samjho\nIske alawa ki bechara Brutus, khud se jung mein,\nDusre aadmiyon ko pyaar dikhana bhool jaata hai.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Toh, Brutus, maine tumhare jazbaat ko bahut galat samjha,\nJiske kaaran mere is seene ne dafna diye hain\nBade keemti vichaar, laayak soch.\nMujhe batao, achhe Brutus, kya tum apna chehra dekh sakte ho?",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Nahi, Cassius, kyunki aankh khud ko nahi dekhti\nSivaye reflection se, kuch dusri cheezon se.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Yeh theek hai.\nAur iska bahut afsos hai, Brutus,\nKi tumhare paas aise aaine nahi hain jo\nTumhari chhipi hui yogyata ko tumhari aankhon mein dikha de\nTaaki tum apni parchhai dekh sako. Maine suna hai\nKi Rome mein kai behtareen samman wale log,\nAmar Caesar ko chhodkar, Brutus ke baare mein baat karte hue\nAur is yug ke bojh tale karahte hue,\nChahte hain ki kaash us mahan Brutus ki aankhein khuli hoti.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Tum mujhe kin khatron mein le jaa rahe ho, Cassius,\nKi tum chahte ho ki main apne andar\nUs cheez ko dhoondhoon jo mujhme nahi hai?",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Isliye, achhe Brutus, sunne ke liye taiyaar raho.\nAur kyunki tum jaante ho ki tum khud ko nahi dekh sakte\nUtni achhi tarah jitna reflection se, main, tumhara aaina,\nVinamrata se tumhe woh dikhaunga\nJo tum apne baare mein abhi tak nahi jaante.\nAur mujh par shak mat karna, bhole Brutus.\nAgar main ek aam hasne wala hota, ya apni mohabbat ko\nMamuli kasmon se har naye pradarshankari ke liye bekaar karta,\nAgar tum jaante ho ki main logon ki chaaplusi karta hoon aur unhe zor se gale lagata hoon\nAur baad mein unki badnaami karta hoon, ya agar tum jaante ho\nKi main daawaton mein khud ko sabke saamne pesh karta hoon,\nToh mujhe khatarnak samjho.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Is chillaane ka kya matlab hai? Mujhe dar hai, log\nCaesar ko apna raja chun rahe hain.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Haan, kya tumhe iska dar hai?\nToh mujhe sochna hoga ki tum aisa nahi chahte.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Main nahi chahunga, Cassius. Phir bhi main usse pyaar karta hoon.\nLekin tum mujhe yahan itni der tak kyun roke hue ho?\nTum mujhe kya batana chahte ho?\nAgar yeh aam bhalai ke liye kuch hai,\nToh ek aankh mein izzat aur dusri mein maut rakho,\nAur main dono ko ek samaan dekhunga,\nKyunki bhagwan meri utni hi madad kare jitna main\nIzzat ke naam se pyaar karta hoon, maut ke darr se zyada.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Main jaanta hoon ki woh neki tum mein hai, Brutus,\nJitna ki main tumhare chehre ko jaanta hoon.\nKhair, izzat hi meri kahani ka vishay hai.\nMain nahi keh sakta ki tum aur dusre log\nIs zindagi ke baare mein kya sochte hain, lekin, apne liye,\nMain na hona pasand karunga, bajaye iske ki main\nApne jaise hi kisi cheez ke darr mein jiyun.\nMain Caesar ki tarah azaad paida hua tha. Tum bhi.\nHum dono ne achha khaya hai, aur hum dono\nSardi ki thand ko uski tarah seh sakte hain.\nEk baar, ek sard aur havadar din par,\nJab pareshan Tiber apne kinaron se takra rahi thi,\nCaesar ne mujhse kaha, “Cassius, kya tumhari himmat hai ab\nMere saath is gusse wali nadi mein koodne ki\nAur us paar tak tairne ki?” Uske kehne par,\nJaisa main taiyaar tha, maine chhalang laga di\nAur use peeche aane ko kaha. Aur usne waisa hi kiya.\nNadi dahad rahi thi, aur humne uska muqabla kiya\nMazboot maanspeshiyon se, use ek taraf fekte hue\nAur vivaad bhare dilon se uska saamna karte hue.\nLekin isse pehle ki hum prastavit jagah par pahunch paate,\nCaesar chillaya, “Meri madad karo, Cassius, warna main doob jaunga!”\nMain, Aeneas ki tarah, hamare mahan purvaj,\nJisne Troy ki aag se apne kandhe par\nBoodhe Anchises ko uthaya tha, usi tarah Tiber ki lehron se\nMaine thake hue Caesar ko uthaya. Aur yeh aadmi\nAb ek devta ban gaya hai, aur Cassius ek\nAdna sa prani hai aur use apna shareer jhukana padega\nAgar Caesar laaparwahi se us par sar hila de.\nUse Spain mein bukhar tha,\nAur jab use daura pada, maine dekha\nWoh kaise kaanp raha tha. Yeh sach hai, yeh devta kaanp raha tha!\nUske kayar honth apne rang se ud gaye,\nAur wahi aankh jiska jhukna duniya ko daraata hai\nApni chamak kho baithi. Maine use karahte suna,\nHaan, aur uski woh zubaan jisne Romiyon ko\nUs par dhyan dene aur uske bhashan apni kitabon mein likhne ka aadesh diya—\n“Afsoos,” woh chillaya, “mujhe kuch peene ko do, Titinius,”\nEk bimar ladki ki tarah. Hey bhagwan, mujhe hairani hoti hai\nItne kamzor mizaaj ka aadmi kaise\nIs shaandaar duniya se aage nikal gaya\nAur akele hi jeet haasil kar li.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Ek aur zor ki awaaz!\nMujhe lagta hai ki yeh taaliyan\nCaesar par laade gaye kuch naye sammaano ke liye hain.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Kyun, dost, woh is sankari duniya par aise khada hai\nJaise koi Colossus, aur hum chote log\nUske vishal pairo ke neeche chalte hain aur jhaankte hain\nApne liye apmanjanak kabrein dhoondhne ke liye.\nAadmi kabhi kabhi apni kismat ke maalik hote hain.\nGalti, mere priya Brutus, hamare sitaron mein nahi hai\nBalki hum mein hai, ki hum adheen hain.\nBrutus aur Caesar—us “Caesar” mein kya hona chahiye?\nUs naam ko tumhare naam se zyada kyun bola jaana chahiye?\nUnhe ek saath likho, tumhara naam bhi utna hi sundar hai.\nUnhe bolo, yeh munh ko utna hi achha lagta hai.\nUnhe tolo, yeh utna hi bhari hai. Inse jaadu karo,\n“Brutus” “Caesar” ki tarah hi ek aatma ko bula lega.\nAb sabhi devtaon ke naam par ek saath,\nHamara yeh Caesar kis maans par palta hai\nKi woh itna mahan ho gaya hai? Yug, tum sharminda ho!\nRome, tumne mahan khoon ki nasal kho di hai!\nBadi baad ke baad, kab koi yug guzra,\nJab usme ek se zyada aadmi prasiddh na ho?\nKab tak woh keh sakte the, Rome ke baare mein baat karte hue,\nKi uski chaudi sadkein sirf ek aadmi ko ghere hue thi?\nAb yeh wakai Rome hai, aur kaafi jagah hai,\nJab isme sirf ek hi aadmi hai.\nOh, tumne aur maine apne baap-dada se suna hai,\nEk Brutus hua karta tha jo\nRome mein apna rajya banaye rakhne ke liye shashwat shaitan ko\nUtni hi aasani se bardaasht kar leta jitna ek raja ko.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Ki tum mujhe pyaar karte ho, is par mujhe koi shak nahi.\nTum mujhse kya karwana chahte ho, iska mujhe kuch andaza hai.\nMaine is baare mein aur is samay ke baare mein kaise socha hai\nYeh main baad mein bataunga. Abhi ke liye,\nMain nahi chahunga, pyaar se main tumse vinti kar sakta hoon,\nKi aur aage badho. Jo tumne kaha hai\nMain us par vichar karunga, jo tumhe kehna hai\nMain use dhairya se sununga, aur ek samay nikalunga\nJo aisi oonchi baaton ko sunne aur jawab dene ke liye upyukt ho.\nTab tak, mere mahan dost, is par vichar karo:\nBrutus ek gaonwala banna pasand karega\nBajaye iske ki woh khud ko Rome ka beta maane\nIn kathin paristhitiyon mein jaisa ki yeh samay\nHam par laadne wala hai.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Main khush hoon ki mere kamzor shabdon ne\nBrutus se itni aag paida kar di hai.",
    },
    {
      speaker: "BRUTUS",
      lines: "Khel khatam ho gaye hain aur Caesar laut raha hai.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Jab woh paas se guzre, Casca ko baanh se pakad lena,\nAur woh, apne kadwe andaaz mein, tumhe batayega\nKi aaj kya gaur karne layak hua hai.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Main aisa hi karunga. Lekin, dekho, Cassius,\nCaesar ke maathe par gusse ka nishan chamak raha hai,\nAur baaki sab ek daante hue juloos ki tarah lag rahe hain.\nCalphurnia ka chehra peela hai, aur Cicero\nAisi nevele jaisi aur aag jaisi aankhon se dekh raha hai\nJaisa humne use Capitol mein dekha hai\nJab kuch senatoron dwara charcha mein uska virodh kiya jaata hai.",
    },
    { speaker: "CASSIUS", lines: "Casca hamein batayega ki kya maamla hai." },
    { speaker: "CAESAR", lines: "Antonio." },
    { speaker: "ANTONY", lines: "Caesar." },
    {
      speaker: "CAESAR",
      lines:
        "(ANTONY se akele mein) Mere aas-paas mote aadmi rakho,\nChikne-sir wale aadmi aur jo raaton ko sote hain.\nWoh Cassius patla aur bhookha dikhta hai.\nWoh bahut zyada sochta hai. Aise aadmi khatarnak hote hain.",
    },
    {
      speaker: "ANTONY",
      lines:
        "(CAESAR se akele mein) Usse mat daro, Caesar. Woh khatarnak nahi hai.\nWoh ek mahan Roman hai aur achhe charitra ka hai.",
    },
    {
      speaker: "CAESAR",
      lines:
        "(ANTONY se akele mein) Kaash woh aur mota hota! Lekin main usse darta nahi.\nPhir bhi agar mera naam darr ke laayak hota,\nToh main nahi jaanta ki main kis aadmi se bachunga\nJitni jaldi us duble Cassius se. Woh bahut padhta hai.\nWoh ek mahaan nirikshak hai, aur woh\nLogon ke karmon ke aar-paar dekh leta hai. Use naatak pasand nahi hain,\nJaisa tumhe hai, Antony. Woh sangeet nahi sunta.\nWoh shayad hi kabhi muskurata hai, aur is tarah muskurata hai\nJaise ki woh khud ka mazak uda raha ho aur apni aatma ka tiraskar kar raha ho\nJo kisi bhi baat par muskurane ke liye prerit ho sakti hai.\nUs jaise aadmi kabhi dil se shaant nahi hote\nJab tak woh apne se mahaan kisi ko dekhte hain,\nAur isliye woh bahut khatarnak hain.\nMain tumhe yeh bata raha hoon ki kis se darna chahiye\nBajaye iske ki main kis se darta hoon, kyunki main hamesha Caesar hoon.\nMeri daahini taraf aao, kyunki yeh kaan behra hai,\nAur mujhe sach-sach batao ki tum uske baare mein kya sochte ho.",
    },
    {
      speaker: "CASCA",
      lines:
        "(BRUTUS se) Tumne mujhe choge se kheencha. Kya tum mujhse baat karna chahte ho?",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Haan, Casca. Hamein batao ki aaj kya hua hai\nKi Caesar itna udaas dikh raha hai.",
    },
    { speaker: "CASCA", lines: "Kyun, tum uske saath the, nahi the kya?" },
    {
      speaker: "BRUTUS",
      lines: "Toh main Casca se nahi poochta ki kya hua tha.",
    },
    {
      speaker: "CASCA",
      lines:
        "Kyun, use ek taj pesh kiya gaya tha; aur, jab use pesh kiya gaya, toh usne use apne haath ke pichhle hisse se is tarah hata diya; aur phir log chillaane lage.",
    },
    { speaker: "BRUTUS", lines: "Dusra shor kis liye tha?" },
    { speaker: "CASCA", lines: "Kyun, usi ke liye bhi." },
    {
      speaker: "CASSIUS",
      lines: "Woh teen baar chillaye. Aakhiri cheekh kis liye thi?",
    },
    { speaker: "CASCA", lines: "Kyun, usi ke liye bhi." },
    { speaker: "BRUTUS", lines: "Kya use teen baar taj pesh kiya gaya tha?" },
    {
      speaker: "CASCA",
      lines:
        "Haan, bilkul, kiya gaya tha, aur usne use teen baar hataya, har baar pehle se naram, aur har hatane par mere imaandar padosi chillaye.",
    },
    { speaker: "CASSIUS", lines: "Use taj kisne pesh kiya?" },
    { speaker: "CASCA", lines: "Kyun, Antony ne." },
    { speaker: "BRUTUS", lines: "Hamein iska tareeka batao, bhole Casca." },
    {
      speaker: "CASCA",
      lines:
        "Main iska tareeka batane ke bajaye faansi par latakna pasand karunga. Yeh sirf ek mazaak tha. Maine is par dhyan nahi diya. Maine Mark Antony ko use ek taj (lekin woh taj bhi nahi tha, yeh un chote mukuton mein se ek tha) pesh karte dekha aur, jaisa ki maine tumhe bataya, usne use ek baar hata diya—lekin, iske bawajood, mere khayal se, woh use paana chahta tha. Phir usne use phir se pesh kiya, phir usne use phir se hata diya—lekin, mere khayal se, woh apni ungliyan usse hatane mein bahut anichchhuk tha. Aur phir usne use teesri baar pesh kiya. Usne use teesri baar hata diya. Aur phir bhi, jaise hi usne mana kiya, bheed ne hooting ki aur apne phate haathon se taaliyan bajayi aur apni pasine wali raat ki topiyan uchhali aur itni badbudar saans chhodi kyunki Caesar ne taj se inkaar kar diya tha ki isne Caesar ka gala ghont diya tha—kyunki woh behosh ho gaya aur gir pada. Aur apni taraf se, main honth kholne aur kharab hawa lene ke darr se hasne ki himmat nahi kar saka.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Lekin ruko, main vinti karta hoon. Kya, Caesar behosh ho gaya tha?",
    },
    {
      speaker: "CASCA",
      lines:
        "Woh bazaar mein gir pada, aur munh se jhaag nikalne laga, aur behosh ho gaya.",
    },
    {
      speaker: "BRUTUS",
      lines: "Yeh bahut mumkin hai. Use girne ki bimari (mirgi) hai.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Nahi, Caesar ko yeh nahi hai. Lekin tumhe aur mujhe\nAur imaandar Casca ko, hamein girne ki bimari hai (hum Caesar ke adheen ho rahe hain).",
    },
    {
      speaker: "CASCA",
      lines:
        "Main nahi jaanta ki tumhara isse kya matlab hai, lekin mujhe yakeen hai ki Caesar gir pada. Agar aam logon ne use taaliyan aur seeti nahi bajayi hoti jaisa ki woh unhe khush aur naraz karta tha, jaisa ki woh theatre mein kalakaron ke saath karte hain, toh main sacha aadmi nahi hoon.",
    },
    { speaker: "BRUTUS", lines: "Jab woh hosh mein aaya toh usne kya kaha?" },
    {
      speaker: "CASCA",
      lines:
        "Suno, girne se pehle, jab usne dekha ki aam bheed khush thi ki usne taj se inkaar kar diya, usne apna doublet khol diya aur unhe apna gala kaatne ki peshkash ki. Agar main koi kaam-dhandhe wala aadmi hota, agar main use uski baat par nahi pakadta, toh main chahta hoon ki main badmashon ke saath narak mein jaun. Aur is tarah woh gir pada. Jab woh phir se hosh mein aaya, usne kaha, agar usne kuch galat kiya ya kaha ho, toh woh chahta tha ki unki pujya log ise uski kamzori samjhein. Jaha main khada tha waha teen-chaar ladkiyan royi, “Afsoos, bechari aatma!” aur use pure dil se maaf kar diya. Lekin un par dhyan dene ki zaroorat nahi hai. Agar Caesar ne unki maaon ko chaku maar diya hota toh bhi woh isse kam nahi karti.",
    },
    {
      speaker: "BRUTUS",
      lines: "Aur uske baad woh itna udaas hokar chala gaya?",
    },
    { speaker: "CASCA", lines: "Haan." },
    { speaker: "CASSIUS", lines: "Kya Cicero ne kuch kaha?" },
    { speaker: "CASCA", lines: "Haan, usne Greek mein baat ki." },
    { speaker: "CASSIUS", lines: "Kis prabhav ke liye?" },
    {
      speaker: "CASCA",
      lines:
        "Nahi, agar main tumhe woh bata doon, toh main phir kabhi tumhara saamna nahi kar paunga. Lekin jo samjhe woh ek dusre par muskuraye aur sir hilaya. Lekin, meri taraf se, yeh mere liye Greek tha. Main tumhe aur bhi khabrein de sakta hoon. Murellus aur Flavius, Caesar ki murtiyon se patke utaarne ke liye, shaant kar diye gaye hain (maar diye gaye ya desh nikala de diya gaya). Alvida. Aur bhi mazaakiya baatein thi, agar mujhe yaad aa jati.",
    },
    {
      speaker: "CASSIUS",
      lines: "Kya tum aaj raat mere saath khaana khaoge, Casca?",
    },
    { speaker: "CASCA", lines: "Nahi, mera kahin aur ka wada hai." },
    { speaker: "CASSIUS", lines: "Kya tum kal mere saath lunch karoge?" },
    {
      speaker: "CASCA",
      lines:
        "Haan, agar main zinda raha aur tumhara mann bana raha aur tumhara khana khane layak hua.",
    },
    { speaker: "CASSIUS", lines: "Theek hai. Main tumhara intezar karunga." },
    { speaker: "CASCA", lines: "Aisa hi karna. Alvida dono ko." },
    {
      speaker: "BRUTUS",
      lines:
        "Yeh kitna muhfat aadmi ho gaya hai!\nJab woh school jaata tha toh tez dimaag ka tha.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Woh abhi bhi waisa hi hai, kisi bhi\nbahadur ya nek kaam ko anjaam dene mein,\nChahe woh yeh sust roop hi kyun na dikhaye.\nYeh rude-pan uski achhi buddhi ke liye ek chatni hai,\nJo logon ko uske shabdon ko behtar bhookh se\nhazam karne ki himmat deti hai.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Aur aisa hi hai. Is baar ke liye main tumhe chhodta hoon.\nKal, agar tum mujhse baat karna chaho,\nToh main tumhare ghar aaunga. Ya, agar tum chaho,\nMere ghar aao, aur main tumhara intezar karunga.",
    },
    {
      speaker: "CASSIUS",
      lines: "Main aisa hi karunga. Tab tak, duniya ke baare mein socho.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Khair, Brutus, tum nek ho. Phir bhi main dekhta hoon\nTumhara sammanjanak charitra usse bigada ja sakta hai\nJaisa ki woh bana hai. Isliye yeh uchit hai\nKi nek dimaag hamesha apne jaison ke saath rahein,\nKyunki kaun itna mazboot hai jise behkaya nahi ja sakta?\nCaesar mujhe pasand nahi karta, lekin woh Brutus se pyaar karta hai.\nAgar main ab Brutus hota aur woh Cassius hota,\nToh woh mujhe behka nahi paata. Main aaj raat,\nKai haathon se, uski khidkiyon mein fekunga,\nJaise ki woh kai nagrikon se aaye hon,\nLikhawat jo us mahan raay ki taraf ishara karti hai\nJo Rome uske naam ke baare mein rakhta hai, jismein aspasht roop se\nCaesar ki mahatvakanksha par ishara kiya jayega.\nAur iske baad Caesar ko apni kursi pakki kar lene do,\nKyunki hum use hila denge, ya bure din sahenge.",
    },
  ],
};
const descriptionVersions = {
  Shakespearean:
    "Caesar, celebrating the feast of Lupercal, is publicly warned by a Soothsayer to 'beware the ides of March.' After Caesar dismisses the warning and exits, Cassius begins a conversation with Brutus, probing his friend's discontent and attempting to turn him against Caesar by appealing to his honor and expressing fear of Caesar's rising ambition. The scene culminates with Casca's cynical report of Antony offering Caesar a crown three times, which he refused, all while the crowd cheered.",
  "Normal English":
    "During the Lupercal festival, a fortune-teller warns Caesar to be careful on March 15th. Caesar ignores him. Afterwards, Cassius talks to Brutus, trying to convince him that Caesar is becoming too ambitious. This is intercut with cheers from the crowd, making Brutus fearful that Caesar has been made king. Casca later joins them and scornfully describes how Antony offered Caesar a crown three times, and how Caesar refused it each time to the crowd's delight before fainting.",
  Hinglish:
    "Lupercal tyohar ke dauran, ek jyotishi Caesar ko 'March ki 15 tareekh se savdhan' rehne ki chetavani deta hai. Caesar uski baat ansuni kar deta hai. Uske baad, Cassius Brutus se baat karke use Caesar ke khilaaf karne ki koshish karta hai. Beech-beech mein bheed ke chillaane ki awaaz aati hai, jisse Brutus ko dar lagta hai ki Caesar ko raja banaya jaa raha hai. Baad mein Casca unhe batata hai ki kaise Antony ne Caesar ko teen baar taj pehnane ki koshish ki, aur har baar Caesar ne mana kar diya, jis par bheed ne khush hokar shor machaya.",
};

// Main App Component
const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [answersVisible, setAnswersVisible] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [activeVersion, setActiveVersion] = useState("Shakespearean");
  const [activeTab, setActiveTab] = useState("dialogue");
  const [qaTab, setQaTab] = useState("additional");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentScrolledIndex, setCurrentScrolledIndex] = useState(0);
  const versionButtonRef = useRef(null);
  const galleryScrollerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    const updateSlider = () => {
      if (versionButtonRef.current) {
        const activeButton = versionButtonRef.current.querySelector(
          `button[data-version="${activeVersion}"]`
        );
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
    window.addEventListener("resize", handleResizeSlider);
    return () => {
      window.removeEventListener("resize", handleResizeSlider);
      clearTimeout(timeoutId);
    };
  }, [activeVersion]);

  useEffect(() => {
    if (isGalleryOpen && galleryScrollerRef.current) {
      const imageWidth = galleryScrollerRef.current.offsetWidth;
      galleryScrollerRef.current.scrollTo({
        left: imageWidth * selectedImageIndex,
        behavior: "auto",
      });
      setCurrentScrolledIndex(selectedImageIndex);
    }
    document.body.style.overflow = isGalleryOpen ? "hidden" : "auto";
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
        behavior: "smooth",
      });
    }
  };

  const toggleAnswer = (id) =>
    setAnswersVisible((p) => ({ ...p, [id]: !p[id] }));
  const handleMcqSelect = (qId, option) => {
    if (!selectedAnswers[qId])
      setSelectedAnswers((p) => ({ ...p, [qId]: option }));
  };

  const styles = {
    body: {
      backgroundColor: theme.colors.backgroundLight,
      fontFamily: theme.fontFamily.body.join(","),
      color: theme.colors.textLight,
      margin: 0,
      minHeight: "100vh",
      position: "relative",
    },
    backgroundGrid: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(${theme.colors.gray[200]} 1px, transparent 1px), linear-gradient(to right, ${theme.colors.gray[200]} 1px, transparent 1px)`,
      backgroundSize: "2rem 2rem",
      maskImage: "linear-gradient(to bottom, transparent 5%, black 40%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 5%, black 40%)",
      zIndex: 0,
    },
    main: {
      flexGrow: 1,
      padding: isLargeScreen ? "2rem 1rem" : "1rem 0.75rem",
      position: "relative",
      marginTop: "50px",

      zIndex: 1,
    },
    mainContentContainer: { maxWidth: "64rem", margin: "0 auto" },
    card: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      padding: isLargeScreen ? "2rem" : "1.5rem",
      marginBottom: "1rem",
      border: `1px solid ${theme.colors.gray[200]}`,
      position: "relative",
      overflow: "hidden",
    },
    introCardBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.1,
    },
    introCardContent: { position: "relative", zIndex: 10 },
    breadcrumbButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.875rem",
      fontWeight: "600",
      color: theme.colors.primary,
      backgroundColor: "rgba(139, 0, 0, 0.05)",
      border: `1px solid rgba(139, 0, 0, 0.1)`,
      padding: "0.5rem 1rem",
      borderRadius: theme.borderRadius.full,
      textDecoration: "none",
      transition: "background-color 0.2s, color 0.2s",
      cursor: "pointer",
      marginBottom: "1rem",
    },
    sceneTitle: {
      fontSize: isLargeScreen ? "3rem" : "2.25rem",
      fontWeight: "900",
      color: theme.colors.primary,
      marginBottom: "0.5rem",
      fontFamily: theme.fontFamily.display.join(","),
    },
    sceneSubtitle: {
      fontSize: "1.125rem",
      color: theme.colors.textLight,
      lineHeight: 1.6,
      marginBottom: "1.5rem",
      fontFamily: theme.fontFamily.display.join(","),
      fontStyle: "italic",
    },
    sceneDescription: {
      fontSize: "1rem",
      color: theme.colors.gray[600],
      lineHeight: 1.6,
      marginBottom: "2rem",
      maxWidth: "48rem",
    },
    navigationContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.5rem",
    },
    versionButtonGroup: {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.gray[100],
      padding: "0.25rem",
      borderRadius: theme.borderRadius.full,
      border: isLargeScreen
        ? `2px solid ${theme.colors.gray[200]}`
        : `1px solid ${theme.colors.gray[200]}`,
    },
    versionSlider: {
      position: "absolute",
      top: "0.25rem",
      bottom: "0.25rem",
      borderRadius: theme.borderRadius.full,
      backgroundColor: theme.colors.primary,
      transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
      zIndex: 1,
    },
    versionButton: {
      padding: isLargeScreen ? "0.6rem 2rem" : "0.5rem 1rem",
      fontSize: isLargeScreen ? "0.875rem" : "0.8rem",
      fontWeight: "700",
      color: theme.colors.gray[600],
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      transition: "color 0.4s ease",
      zIndex: 2,
      whiteSpace: "nowrap",
    },
    activeVersionButton: { color: theme.colors.white },
    mainNavButtonGroup: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      gap: "0.5rem",
    },
    mainNavButton: {
      flex: 1,
      padding: "0.6rem 0.25rem",
      fontSize: "0.8rem",
      fontWeight: "600",
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`,
      borderRadius: theme.borderRadius.full,
      cursor: "pointer",
      backgroundColor: "transparent",
      transition: "all 0.3s ease",
    },
    activeMainNavButton: {
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
    },
    mainGrid: {
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: isLargeScreen ? "repeat(3, 1fr)" : "1fr",
    },
    dialogueColumn: { gridColumn: isLargeScreen ? "span 2" : "span 1" },
    sidebarColumn: {
      gridColumn: "span 1",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    dialogueCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      padding: isLargeScreen ? "2.5rem" : "1.5rem",
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    dialogueEntry: { marginBottom: "2rem" },
    dialogueSpeaker: {
      fontWeight: "700",
      fontFamily: theme.fontFamily.display.join(","),
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
    },
    dialogueLines: {
      lineHeight: 1.7,
      color: theme.colors.gray[700],
      whiteSpace: "pre-line",
      paddingTop: "0.75rem",
      marginTop: "0.75rem",
    },
    sidebarCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      padding: "1.5rem",
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    sidebarHeader: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1rem",
    },
    sidebarTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: theme.colors.primary,
      fontFamily: theme.fontFamily.display.join(","),
    },
    galleryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "0.75rem",
    },
    galleryImage: {
      borderRadius: theme.borderRadius.lg,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      cursor: "pointer",
    },
    wordList: { listStyle: "none", paddingLeft: "0" },
    wordListItem: { marginBottom: "0.75rem" },
    wordTerm: { fontWeight: "700", color: theme.colors.textLight },
    questionSection: {
      marginTop: "1rem",
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    sectionTitle: {
      fontSize: isLargeScreen ? "2rem" : "1.5rem",
      fontWeight: "800",
      color: theme.colors.primary,
      fontFamily: theme.fontFamily.display.join(","),
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    subSectionTitle: {
      fontSize: isLargeScreen ? "1.5rem" : "1.25rem",
      fontWeight: "700",
      color: theme.colors.gray[800],
      fontFamily: theme.fontFamily.display.join(","),
      marginTop: "2rem",
      marginBottom: "1.5rem",
    },
    mcqItem: { marginBottom: "1.5rem" },
    mcqQuestion: {
      fontWeight: "600",
      color: theme.colors.gray[800],
      marginBottom: "1rem",
      fontSize: "1rem",
    },
    mcqOptionsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    mcqOption: {
      padding: "0.75rem 1rem",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme.colors.gray[200],
      borderRadius: theme.borderRadius.lg,
      cursor: "pointer",
      transition: "all 0.2s",
      backgroundColor: theme.colors.gray[50],
      textAlign: "left",
      fontFamily: theme.fontFamily.body.join(","),
      fontSize: "0.9rem",
      color: theme.colors.gray[800],
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    correctMcqOption: {
      borderColor: theme.colors.green[600],
      backgroundColor: theme.colors.green[100],
      fontWeight: "600",
      color: theme.colors.green[700],
    },
    incorrectMcqOption: {
      borderColor: theme.colors.red[600],
      backgroundColor: theme.colors.red[100],
      fontWeight: "600",
      color: theme.colors.red[700],
    },
    qaContainer: {
      padding: "1.5rem 0",
      borderBottom: `1px solid ${theme.colors.gray[200]}`,
    },
    qaQuestion: {
      fontWeight: "600",
      color: theme.colors.gray[800],
      fontSize: "1rem",
      marginBottom: "0.5rem",
    },
    answerLink: {
      fontSize: "0.875rem",
      fontWeight: "600",
      color: theme.colors.primary,
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
    },
    answerText: {
      marginTop: "1rem",
      color: theme.colors.gray[700],
      lineHeight: 1.6,
      fontSize: "0.9rem",
      backgroundColor: theme.colors.gray[50],
      padding: "1rem",
      borderRadius: theme.borderRadius.lg,
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    summaryCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      padding: isLargeScreen ? "2.5rem" : "1.5rem",
      border: `1px solid ${theme.colors.gray[200]}`,
      marginTop: "1rem",
    },
    summaryHeader: {
      display: "flex",
      flexDirection: isLargeScreen ? "row" : "column",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
      flexWrap: "wrap",
      gap: "1rem",
    },
    summaryToggleGroup: {
      display: "flex",
      width: isLargeScreen ? "auto" : "100%",
      backgroundColor: theme.colors.gray[100],
      borderRadius: theme.borderRadius.full,
      padding: "0.25rem",
    },
    summaryToggleButton: {
      flex: 1,
      padding: "0.5rem 1rem",
      border: "none",
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius.full,
      cursor: "pointer",
      fontWeight: "600",
      color: theme.colors.gray[500],
      transition: "all 0.2s",
      fontSize: isLargeScreen ? "0.9rem" : "0.8rem",
    },
    qaToggleButton: {
      flex: 1,
      padding: isLargeScreen ? "0.5rem 2rem" : "0.5rem 0.5rem",
      border: "none",
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius.full,
      cursor: "pointer",
      fontWeight: "600",
      color: theme.colors.gray[500],
      transition: "all 0.2s",
      fontSize: isLargeScreen ? "0.9rem" : "0.75rem",
      whiteSpace: "nowrap",
    },
    activeSummaryToggleButton: {
      backgroundColor: theme.colors.white,
      color: theme.colors.primary,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    summaryContent: {
      lineHeight: 1.8,
      color: theme.colors.gray[700],
      fontSize: "1.05rem",
    },
    galleryModalBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      opacity: isGalleryOpen ? 1 : 0,
      transition: "opacity 0.3s ease",
      pointerEvents: isGalleryOpen ? "auto" : "none",
    },
    galleryModalContent: {
      position: "relative",
      width: "90%",
      maxWidth: "800px",
      height: "70vh",
      maxHeight: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transform: isGalleryOpen ? "scale(1)" : "scale(0.95)",
      transition: "transform 0.3s ease",
    },
    galleryModalCloseButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      color: theme.colors.textLight,
      border: "none",
      borderRadius: theme.borderRadius.full,
      width: "2.5rem",
      height: "2.5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 1011,
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    },
    galleryModalImageScroller: {
      display: "flex",
      overflowX: "scroll",
      scrollSnapType: "x mandatory",
      width: "100%",
      height: "100%",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    galleryModalImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      flexShrink: 0,
      scrollSnapAlign: "center",
    },
    galleryDotsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      marginTop: "1rem",
    },
    galleryDot: {
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: theme.borderRadius.full,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    activeGalleryDot: { backgroundColor: theme.colors.white },
    mobileGalleryContainer: {
      display: "flex",
      overflowX: "auto",
      gap: "0.75rem",
      padding: "0.5rem 0",
      scrollSnapType: "x mandatory",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    mobileGalleryImage: {
      height: "120px",
      width: "120px",
      objectFit: "cover",
      borderRadius: theme.borderRadius.lg,
      flexShrink: 0,
      scrollSnapAlign: "start",
    },
    mobileButtonCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      padding: "1rem",
      marginBottom: "1rem",
      border: `1px solid ${theme.colors.gray[200]}`,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  };

  const dialogueContent = dialogueVersions[activeVersion];

  return (
    <div style={styles.body}>
      <div style={styles.backgroundGrid} />
      <div
        style={{
          ...styles.galleryModalBackdrop,
          opacity: isGalleryOpen ? 1 : 0,
          pointerEvents: isGalleryOpen ? "auto" : "none",
        }}
        onClick={closeGallery}
      >
        <div
          style={{
            ...styles.galleryModalContent,
            transform: isGalleryOpen ? "scale(1)" : "scale(0.95)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button style={styles.galleryModalCloseButton} onClick={closeGallery}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div
            ref={galleryScrollerRef}
            onScroll={handleGalleryScroll}
            style={styles.galleryModalImageScroller}
          >
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                style={styles.galleryModalImage}
              />
            ))}
          </div>
          <div style={styles.galleryDotsContainer}>
            {galleryImages.map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToImage(index)}
                style={
                  index === currentScrolledIndex
                    ? { ...styles.galleryDot, ...styles.activeGalleryDot }
                    : styles.galleryDot
                }
              />
            ))}
          </div>
        </div>
      </div>

      <main style={styles.main}>
        <div style={styles.mainContentContainer}>
          <div style={styles.card}>
            <img
              alt="Roman Forum background"
              style={styles.introCardBg}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBURfa0I53fnPXLusZMM3pKkaMlR39PRFdZSaDztvrVA3GbbSwl-URsK_oaMkyGXouKCkEOOvWpepqz0Vv13lsQcUdQhP4sAgiINxwQ0fsDUbIJ5kHpahdCvVebh9tpVT1AlIp5PIJiP80NA81aBNoDepsIjt3T22ryPuq5t6TCIUgGhyjLC-9sqBW_ofDSrq8GrrtKuUtbYwpiffitDGO7l46yO1Kq1hTToAvxxAu_j5sy2npIMprfT3Zc4TpqBG5AViVyZA6hQoi6"
            />
            <div style={styles.introCardContent}>
              <a
                style={styles.breadcrumbButton}
                href="/studymaterial/class9icse/Class9icseEnglish"
              >
                Julius Caesar
              </a>
              <h1 style={styles.sceneTitle}>Act I, Scene 2</h1>
              <p style={styles.sceneSubtitle}>A public place in Rome</p>
              <p style={styles.sceneDescription}>
                {descriptionVersions[activeVersion] ||
                  descriptionVersions["Shakespearean"]}
              </p>

              {isLargeScreen ? (
                <div style={styles.navigationContainer}>
                  <div style={styles.mainNavButtonGroup}>
                    <button
                      onClick={() => setActiveTab("dialogue")}
                      style={
                        activeTab === "dialogue"
                          ? {
                              ...styles.mainNavButton,
                              ...styles.activeMainNavButton,
                            }
                          : styles.mainNavButton
                      }
                    >
                      Dialogue
                    </button>
                    <button
                      onClick={() => setActiveTab("summary")}
                      style={
                        activeTab === "summary"
                          ? {
                              ...styles.mainNavButton,
                              ...styles.activeMainNavButton,
                            }
                          : styles.mainNavButton
                      }
                    >
                      Summary
                    </button>
                    <button
                      onClick={() => setActiveTab("qa")}
                      style={
                        activeTab === "qa"
                          ? {
                              ...styles.mainNavButton,
                              ...styles.activeMainNavButton,
                            }
                          : styles.mainNavButton
                      }
                    >
                      Q&A
                    </button>
                  </div>
                  {activeTab === "dialogue" && (
                    <div
                      ref={versionButtonRef}
                      style={{
                        ...styles.versionButtonGroup,
                        opacity: activeTab === "dialogue" ? 1 : 0,
                        pointerEvents:
                          activeTab === "dialogue" ? "auto" : "none",
                        transition: "opacity 0.3s",
                      }}
                    >
                      <div
                        style={{ ...styles.versionSlider, ...sliderStyle }}
                      ></div>
                      {Object.keys(dialogueVersions).map((version) => (
                        <button
                          key={version}
                          data-version={version}
                          onClick={() => setActiveVersion(version)}
                          style={
                            activeVersion === version
                              ? {
                                  ...styles.versionButton,
                                  ...styles.activeVersionButton,
                                }
                              : styles.versionButton
                          }
                        >
                          {version}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    ...styles.mobileGalleryContainer,
                    scrollbarWidth: "none",
                  }}
                >
                  {galleryImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Gallery thumbnail ${i + 1}`}
                      style={styles.mobileGalleryImage}
                      onClick={() => openGallery(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {!isLargeScreen && (
            <div style={styles.mobileButtonCard}>
              <div style={styles.mainNavButtonGroup}>
                <button
                  onClick={() => setActiveTab("dialogue")}
                  style={
                    activeTab === "dialogue"
                      ? {
                          ...styles.mainNavButton,
                          ...styles.activeMainNavButton,
                        }
                      : styles.mainNavButton
                  }
                >
                  Dialogue
                </button>
                <button
                  onClick={() => setActiveTab("summary")}
                  style={
                    activeTab === "summary"
                      ? {
                          ...styles.mainNavButton,
                          ...styles.activeMainNavButton,
                        }
                      : styles.mainNavButton
                  }
                >
                  Summary
                </button>
                <button
                  onClick={() => setActiveTab("qa")}
                  style={
                    activeTab === "qa"
                      ? {
                          ...styles.mainNavButton,
                          ...styles.activeMainNavButton,
                        }
                      : styles.mainNavButton
                  }
                >
                  Q&A
                </button>
              </div>
              {activeTab === "dialogue" && (
                <div
                  ref={versionButtonRef}
                  style={{ ...styles.versionButtonGroup, width: "100%" }}
                >
                  <div
                    style={{ ...styles.versionSlider, ...sliderStyle }}
                  ></div>
                  {Object.keys(dialogueVersions).map((version) => (
                    <button
                      key={version}
                      data-version={version}
                      onClick={() => setActiveVersion(version)}
                      style={
                        activeVersion === version
                          ? {
                              ...styles.versionButton,
                              ...styles.activeVersionButton,
                              flex: 1,
                            }
                          : { ...styles.versionButton, flex: 1 }
                      }
                    >
                      {version}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "dialogue" && (
            <div style={styles.mainGrid}>
              <div style={styles.dialogueColumn}>
                <div style={styles.dialogueCard}>
                  {dialogueContent.map((entry, index) => {
                    const isNoble = [
                      "CAESAR",
                      "CASSIUS",
                      "BRUTUS",
                      "ANTONY",
                      "CASCA",
                      "CALPHURNIA",
                    ].includes(entry.speaker);
                    const lineColor = isNoble
                      ? theme.colors.primary
                      : theme.colors.gray[500];

                    if (!isLargeScreen) {
                      return (
                        <div key={index} style={styles.dialogueEntry}>
                          <div
                            style={{
                              ...styles.dialogueSpeaker,
                              color: lineColor,
                            }}
                          >
                            {entry.speaker}
                          </div>
                          <div
                            style={{
                              ...styles.dialogueLines,
                              borderTop: `2px solid ${lineColor}`,
                            }}
                          >
                            {entry.lines}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "100px 1fr",
                          gap: "1.5rem",
                          marginBottom: "1.5rem",
                          alignItems: "start",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "right",
                            fontWeight: "700",
                            fontFamily: theme.fontFamily.display.join(","),
                            fontSize: "0.9rem",
                            paddingTop: "0.125rem",
                            color: lineColor,
                          }}
                        >
                          {entry.speaker}
                        </div>
                        <div
                          style={{
                            paddingLeft: "1.5rem",
                            lineHeight: 1.7,
                            color: theme.colors.gray[700],
                            whiteSpace: "pre-line",
                            borderLeft: `3px solid ${lineColor}`,
                          }}
                        >
                          {entry.lines}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {isLargeScreen && (
                <div style={styles.sidebarColumn}>
                  <div style={styles.sidebarCard}>
                    <div style={styles.sidebarHeader}>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "2rem",
                          color: theme.colors.secondary,
                        }}
                      >
                        gallery_thumbnail
                      </span>
                      <h3 style={styles.sidebarTitle}>Image Gallery</h3>
                    </div>
                    <div style={styles.galleryGrid}>
                      {galleryImages.map((src, i) => (
                        <img
                          key={i}
                          alt={`Scene image ${i + 1}`}
                          style={styles.galleryImage}
                          src={src}
                          onClick={() => openGallery(i)}
                        />
                      ))}
                    </div>
                  </div>
                  <div style={styles.sidebarCard}>
                    {" "}
                    <div style={styles.sidebarHeader}>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "2rem",
                          color: theme.colors.secondary,
                        }}
                      >
                        school
                      </span>
                      <h3 style={styles.sidebarTitle}>Important Words</h3>
                    </div>{" "}
                    <ul style={styles.wordList}>
                      {importantWords.map((word, i) => (
                        <li key={i} style={styles.wordListItem}>
                          <span style={styles.wordTerm}>{word.term}:</span>{" "}
                          {word.definition}
                        </li>
                      ))}
                    </ul>{" "}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "summary" && (
            <div style={styles.summaryCard}>
              <div style={styles.summaryHeader}>
                <Class9icseEnglishAct1Scene2Summary />
              </div>
            </div>
          )}

          {activeTab === "qa" && (
            <div style={styles.questionSection}>
                <Class9icseEnglishAct1Scene2Questions />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
