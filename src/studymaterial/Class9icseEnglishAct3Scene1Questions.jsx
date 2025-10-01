import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 3, Scene 1 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act III, Scene 1",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "Who among the following is NOT waiting on the road for Caesar to pass?",
        options: ["Soothsayer", "Artemidorus", "Lucius", "Popilius"],
        answer: "Lucius",
        explanation: "The Soothsayer and Artemidorus are waiting on the street to warn Caesar. Popilius Lena is also present. Lucius, Brutus's servant, is not in this scene."
    },
    {
        id: 'mcq2',
        question: "Why does Artemidorus urge Caesar to go through his letter first?",
        options: ["It is concerned with the conspiracy against Caesar", "It is concerning Rome", "It is concerns a matter of national importance", "It is he who came first to Caesar"],
        answer: "It is concerned with the conspiracy against Caesar",
        explanation: "Artemidorus knows his letter contains a direct warning about the plot and names the conspirators. He tells Caesar it \"touches Caesar nearer,\" meaning it is of vital personal importance."
    },
    {
        id: 'mcq3',
        question: "Cassius says that he fears their \"purpose is discovered.\" What is the \"purpose\"?",
        options: ["To form a group of conspirators", "To murder Caesar", "To save Rome from Caesar", "To rope in Brutus for their conspiracy"],
        answer: "To murder Caesar",
        explanation: "Their \"purpose\" or \"enterprise\" is the secret plan to assassinate Caesar at the Capitol."
    },
    {
        id: 'mcq4',
        question: "What does Cassius say he would do if their purpose is revealed?",
        options: ["Make another plan", "Kill the one who revealed it", "Kill Casca", "Kill himself"],
        answer: "Kill himself",
        explanation: "In a moment of panic, Cassius tells Brutus that if their plan is discovered, \"Cassius or Caesar never shall turn back, For I will slay myself.\""
    },
    {
        id: 'mcq5',
        question: "According to Caesar, what will be the effect of Metellus Cimber's stooping and cringing on ordinary men?",
        options: ["Incite others to stoop so low", "Inflame the pride of ordinary men", "Invoke the ordinary men to rebel", "None of the above"],
        answer: "Inflame the pride of ordinary men",
        explanation: "This question refers to the line, \"Might fire the blood of ordinary men.\" Caesar is saying that such fawning behavior might work on regular people, but not on him."
    },
    {
        id: 'mcq6',
        question: "What would Caesar do with Metellus Cimber if he would pray on his brother's behalf using humble flattery?",
        options: ["Change the sentence of banishment", "Banish him too like his brother", "Will not change the sentence of banishment", "Reduce his sentence of banishment"],
        answer: "Will not change the sentence of banishment",
        explanation: "Caesar makes it clear that he will not be swayed by flattery, saying he will \"spurn thee like a cur out of my way\" and that he is constant in his decision."
    },
    {
        id: 'mcq7',
        question: "With whom does Caesar compare himself in this scene of the play?",
        options: ["Lion", "Sun", "Pole Star", "Moon"],
        answer: "Pole Star",
        explanation: "In his most arrogant speech, Caesar declares, \"But I am constant as the northern star,\" to show how unmovable and singular his decisions are."
    },
    {
        id: 'mcq8',
        question: "How do the conspirators make requests to Caesar regarding Publius Cimber?",
        options: ["Appealing to his divine right", "Appealing to his supreme self", "Feigned servility", "None of the above"],
        answer: "Feigned servility",
        explanation: "The conspirators kneel, bow, and use flattering language. This show of humility (\"lowly courtesies\") is faked (\"feigned\") to hide their true, violent intentions."
    },
    {
        id: 'mcq9',
        question: "Which attitude of Caesar is seen in his act of denying Metellus Cimber's petition?",
        options: ["Arrogance", "Pride", "Honesty", "Modesty"],
        answer: "Arrogance",
        explanation: "Caesar's refusal is filled with arrogant statements about his own superiority and constancy, comparing himself to the North Star and even the gods on Mount Olympus."
    },
    {
        id: 'mcq10',
        question: "How do the people of Rome run after Caesar's murderers?",
        options: ["As if an earthquake had occurred", "As if doomsday had come", "As if a large building had collapsed.", "As if a mountain had fallen on them."],
        answer: "As if doomsday had come",
        explanation: "After the assassination, Trebonius reports that the people are running in chaos \"As it were doomsday,\" meaning as if it were the end of the world."
    },
    {
        id: 'mcq11',
        question: "How according to Brutus, have they helped Caesar by murdering him?",
        options: ["By preventing him from becoming a ruthless dictator", "By preventing him from the agony of losing kingship", "By saving Rome from being ruined.", "By preventing him from living in fear of death."],
        answer: "By preventing him from living in fear of death.",
        explanation: "In an ironic attempt to justify the murder, Brutus reasons that by cutting Caesar's life short, they have spared him many years of fearing death."
    },
    {
        id: 'mcq12',
        question: "According to Cassius, how would the people describe the group of Caesar's murderers in future?",
        options: ["Liberators of their country", "Butchers who slayed Caesar", "Savage of the first order", "Noble men of Rome"],
        answer: "Liberators of their country",
        explanation: "Cassius predicts that in the future, their group (\"the knot of us\") will be called \"The men that gave their country liberty.\""
    },
    {
        id: 'mcq13',
        question: "How does Brutus seem to see the murder of Caesar?",
        options: ["As a solemn act of purification of Rome", "As an act of great justice to him", "As an act of friendship", "All of the above"],
        answer: "As a solemn act of purification of Rome",
        explanation: "Brutus's idealism leads him to view the assassination not as a bloody murder but as a symbolic act of ritual sacrifice to purify Rome from the threat of tyranny."
    },
    {
        id: 'mcq14',
        question: "According to Antony, how was Caesar brought by?",
        options: ["Like a stag by hounds", "Like a dog by hunters", "Like a goat by butchers", "None of the above."],
        answer: "Like a stag by hounds",
        explanation: "This question refers to Antony's speech where he compares Caesar to a noble deer (\"brave hart\" or stag) cornered and killed (\"bay'd\") by his hunters (the conspirators)."
    },
    {
        id: 'mcq15',
        question: "What appears as the main cause of Brutus' failure in this scene of the play?",
        options: ["Lack of experience", "Lack of brutality", "Error of judgement", "None of the above."],
        answer: "Error of judgement",
        explanation: "Brutus's main cause of failure is his poor judgment. He makes several fatal mistakes, most notably underestimating Antony and allowing him to speak at Caesar's funeral."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Caesar: [To the Soothsayer] The ides of March are come.
Soothsayer: Ay, Caesar, but not gone.
Artemidorus: Hail, Caesar! read this schedule.`,
      subquestions: `(i) Where does this conversation take place? Why did Caesar tell the Soothsayer "The ides of March are come"? \n(ii) Who is Artemidorus? What is the importance of his "schedule"? \n(iii) Why does Artemidorus request Caesar to read his "schedule" first? \n(iv) Mention the two reasons given by Caesar for not reading the "schedule". \n(v) Name two people trying to warn Caesar and two who defeat their efforts. Which theme is highlighted?`,
      answer: `(i) This is on a street outside the Capitol. Caesar speaks to the Soothsayer in a mocking tone, pointing out that the day he was warned about has arrived and nothing has happened.\n(ii) Artemidorus is a teacher and supporter of Caesar. His "schedule" (letter) is important because it contains a direct warning, naming all the conspirators.\n(iii) He requests Caesar to read it first because he knows it is a matter of life and death, telling Caesar it "touches Caesar nearer."\n(iv) First, Decius interrupts with another petition. Second, Caesar declares that anything concerning himself personally will be dealt with last. This reveals his immense pride.\n(v) The Soothsayer and Artemidorus try to warn Caesar. Decius and Cassius defeat their efforts. The theme is **fate versus free will**: Caesar is given multiple chances (free will) to save himself, but his own pride and others' interventions seal his tragic fate.`
    },
    {
      extract: `Extract 2:
Cassius: Casca, be sudden, for we fear prevention.
Brutus, what shall be done? If this be known,
Cassius or Caesar never shall turn back,
For I will slay myself.`,
      subquestions: `(i) "If this be known" - What does "this" refer to? \n(ii) What duty is assigned to Casca? Why should he be "sudden"? \n(iii) What has Popilius Lena said to make Cassius fear? How does Brutus calm him? \n(iv) What was Trebonius's task? What petition did Metellus Cimber present? \n(v) Give two arguments Caesar gives to reject the petition. Which trait is highlighted?`,
      answer: `(i) "This" refers to their secret plan to assassinate Caesar. If it were known, the plot could be stopped.\n(ii) Casca is assigned to strike the first blow. He should be "sudden" (quick) because Cassius fears their plot has been discovered.\n(iii) Popilius Lena wished Cassius success in his "enterprise," making Cassius fear discovery. Brutus calms him by pointing out that Popilius is smiling and Caesar's expression is unchanged.\n(iv) Trebonius's task was to draw Mark Antony out of the way. Metellus Cimber presented a petition to repeal his brother's banishment, flattering Caesar by kneeling.\n(v) Two arguments are: 1) He will not be swayed by flattery. 2) He is as "constant as the northern star." These highlight Caesar's immense arrogance.`
    },
    {
      extract: `Extract 3:
Caesar: But I am constant as the northern star,
Of whose true-fix'd and resting quality
There is no fellow in the firmament.`,
      subquestions: `(i) What is the "northern star"? Give the meaning of the last two lines. \n(ii) Why does Caesar compare himself to the northern star? \n(iii) State the comparison Caesar makes between the firmament and the world of men. \n(iv) Why is Caesar so stubborn? What is the dramatic effectiveness of this? \n(v) What horrible event is about to happen? Who strikes first? Why is Antony absent?`,
      answer: `(i) The "northern star" is the Pole Star. The lines mean its fixed and unchanging quality is unique among all other stars in the sky.\n(ii) He compares himself to it to express his belief that he is unique, unmovable, and superior to all other men, while refusing the petition for Publius Cimber.\n(iii) He compares the sky of countless stars to the world of men. Just as only one star is fixed, he is the only man who is unmovable in his decisions.\n(iv) He is stubborn because he is consumed by pride. This is dramatically ironic: at the moment he declares himself an unmovable god, he is about to be struck down by mortals.\n(v) The assassination of Caesar is about to happen. Casca strikes first. Antony is absent because Trebonius was assigned to lure him away.`
    },
    {
      extract: `Extract 4:
Brutus: Fates, we will know your pleasures.
That we shall die, we know; 'tis but the time
And drawing days out, that men stand upon.`,
      subquestions: `(i) When does this conversation take place? What is the state of mind of Brutus and Cassius? \n(ii) What are the "Fates"? What do men know and what do they fear? \n(iii) What positive note does Cassius strike in Caesar's death? What does Brutus feel about it? \n(iv) What does Brutus ask the Romans to do after this? How does this fulfill Calpurnia's dream? \n(v) What is the role of the assassination in the story-line?`,
      answer: `(i) This is immediately after Caesar's assassination. Brutus is in a calm, philosophical state of mind, and Cassius is trying to rationalize their deed.\n(ii) The "Fates" are mythical goddesses who control human destiny. Men know they will die; they only concern themselves with the timing.\n(iii) Cassius suggests they have done Caesar a favor by shortening the time he would have spent fearing death. Brutus agrees, saying, "then is death a benefit."\n(iv) Brutus asks the conspirators to stoop and bathe their hands in Caesar's blood. This is a chilling fulfillment of Calpurnia's dream of Romans bathing their hands in the blood from his statue.\n(v) The assassination is the climax and central turning point of the play. The first half leads up to it, and the second half is a direct consequence of it.`
    },
    {
      extract: `Extract 5:
Cassius: Stoop, then, and wash. How many ages hence
Shall this our lofty scene be acted over,
In states unborn and accents yet unknown!`,
      subquestions: `(i) To whom is Cassius speaking? What does he mean? Who suggested it? \n(ii) Explain "states unborn", "accents", and "Pompey's basis." \n(iii) What does Brutus mean by, "How many times shall Caesar bleed in sport"? \n(iv) What does Cassius believe "the knot of us" will be called? \n(v) Why is the entry of Antony's servant a turning point?`,
      answer: `(i) He is speaking to the conspirators, telling them to follow Brutus's instruction to wash their hands in Caesar's blood. Brutus suggested it.\n(ii) **states unborn:** Future countries. **accents:** Future languages. **Pompey's basis:** The base of Pompey's statue.\n(iii) He means that this historic event will be re-enacted as a play ("in sport") for entertainment in the future.\n(iv) He believes their group will be famously known as "The men that gave their country liberty," seeing their act as heroic.\n(v) The servant's entry is the turning point because it signals the beginning of the counter-action against the conspirators, announcing the arrival of Antony, who will bring about their downfall.`
    },
    {
      extract: `Extract 6:
Antony: O mighty Caesar! dost thou lie so low?
Are all thy conquests, glories, triumphs, spoils,
Shrunk to this little measure? Fare thee well.`,
      subquestions: `(i) Where does Caesar lie? What is "this little measure"? Give an example of his conquests and glories. \n(ii) Who are the "gentlemen" he addresses? What does he implore them to do? \n(iii) Give the meaning of: "Who else must be let blood, who else is rank." \n(iv) What does Antony's expression, "the most noble blood of all this world" indicate? \n(v) What did Brutus tell Antony about the conspirators' feelings for Caesar?`,
      answer: `(i) Caesar lies dead at the base of Pompey's statue. "This little measure" is his small, lifeless body. A conquest was his victory in Gaul; a glory was his triumphal procession.\n(ii) The "gentlemen" are the conspirators. He implores them to kill him now if they plan to. This shows his bravery but is also a clever test of their intentions.\n(iii) It means "Who else must be killed, who else is considered overgrown and needs cutting down?" Antony is trying to find out if he is also a target.\n(iv) It indicates his immense love, admiration, and respect for Caesar.\n(v) The workbook does not state Brutus's answer, but later he tells Antony, "I, that did love Caesar when I struck him," showing he was honest about his personal affection.`
    },
    {
      extract: `Extract 7:
Antony: My credit now stands on such slippery ground,
That one of two bad ways you must conceit me,
Either a coward or a flatterer.`,
      subquestions: `(i) What is "credit"? Why is it on "slippery ground"? \n(ii) Explain: "That one of two bad ways you must conceit me, / Either a coward or a flatterer". \n(iii) What effect do Antony's words have on his listeners? \n(iv) What mistake did Brutus make by granting Antony's request? What did Cassius warn him? \n(v) Did Antony prove to be a coward or a flatterer?`,
      answer: `(i) "Credit" is his reputation. It's on "slippery ground" because he is seen shaking hands with his friend's murderers, making his loyalties seem uncertain.\n(ii) He means the conspirators must now judge him in one of two negative ways: as a coward for not fighting them, or as a flatterer for trying to make peace.\n(iii) His words succeed in deceiving Brutus, making him believe Antony can be won over to their side.\n(iv) Brutus made the fatal mistake of letting Antony speak at the funeral. Cassius warned him, "You know not what you do." The consequence was a civil war that led to their defeat.\n(v) No, he was being strategic. He put on a mask of meekness to manipulate Brutus and get the chance to speak at the funeral for revenge.`
    },
    {
      extract: `Extract 8:
Pardon me, Julius! Here wast thou bay'd, brave hart;
Here did'st thou fall; and here thy hunters stand,
Sign'd in thy spoil, and crimson'd in thy lethe.`,
      subquestions: `(i) Who speaks these words? What comparison is implied? \n(ii) Explain the double meaning in "brave hart." \n(iii) Who are the hunters? Give the meaning of: "Sign'd in thy spoil, and crimson'd in thy lethe." \n(iv) How was the world "the forest to this hart," and "this indeed, "the world, the heart of thee"? \n(v) What action of the speaker has just aroused Cassius' suspicion?`,
      answer: `(i) Mark Antony speaks. The comparison is of Caesar to a noble deer ("hart") and the conspirators to hunting dogs ("hounds") that have cornered ("bay'd") their prey.\n(ii) "Hart" means a noble male deer, but it also sounds like "heart," implying Caesar was the brave heart of Rome.\n(iii) The "hunters" are the conspirators. The phrase means they are marked ("Sign'd") by the evidence of their kill ("spoil") and reddened ("crimson'd") in his death-blood ("lethe").\n(iv) The world was the "forest" for this noble deer (Caesar). The second part is a pun: Caesar, the "hart," was also the "heart" of the world.\n(v) Antony's long, emotional speech praising Caesar arouses Cassius's suspicion, leading him to ask Antony directly if he will join them.`
    },
    {
      extract: `Extract 9:
Antony: And Caesar's spirit, ranging for revenge,
With Ate by his side come hot from hell,
Shall in these confines with a monarch's voice
Cry "Havoc!" and let slip the dogs of war...`,
      subquestions: `(i) Why is Caesar's spirit "raging for revenge"? Where does it appear later? \n(ii) Who is Ate? Why is her name used? What are "confines"? \n(iii) What does "Cry 'Havoc!'" foretell? \n(iv) Who are "the dogs of war"? What is the "foul deed"? \n(v) What would be the consequences for the conspirators and Antony?`,
      answer: `(i) Caesar's spirit seeks revenge because he was brutally murdered by his friends. It appears later to Brutus at Sardis and Philippi.\n(ii) Ate is the Greek goddess of mischief and revenge, used here to personify the destructive spirit to be unleashed. "Confines" means the regions of Italy.\n(iii) It foretells a period of brutal, merciless warfare. "Cry Havoc!" was a military command to give no quarter and kill indiscriminately.\n(iv) "The dogs of war" are the destructive forces of civil war. The "foul deed" is Caesar's assassination. It will "smell" because of the thousands of rotting corpses.\n(v) The consequence would be a terrible civil war, leading to the conspirators' defeat and death, and Antony's rise as one of the new rulers of Rome.`
    },
    {
      extract: `Extract 10:
Antony: Yet, stay awhile;
Thou shalt not back till I have borne the corpse
Into the market-place: there shall I try,
In my oration, how the people take
The cruel issue of these bloody men...`,
      subquestions: `(i) To whom is Antony speaking? Why is this person here? \n(ii) What had Antony just said to this person? \n(iii) Explain "oration". What does this passage reveal about Antony's plan? \n(iv) Mention three points of Antony's earlier prophecy over Caesar's wounds. \n(v) Which trait of Antony's nature is shown here?`,
      answer: `(i) Antony is speaking to Octavius Caesar's servant, who has brought a message that Octavius is coming to Rome.\n(ii) He had just told the servant to go back quickly and tell Octavius that Rome is now too dangerous for him.\n(iii) An "oration" is a formal public speech. The passage reveals Antony's plan to use his funeral speech to test how he can sway public opinion against the conspirators.\n(iv) Three points of his prophecy were: 1) A curse will fall on men. 2) "Domestic fury and fierce civil strife" will spread through Italy. 3) Caesar's spirit will seek revenge and "let slip the dogs of war."\n(v) This passage shows Antony's nature as a shrewd and calculating political strategist, a contrast to his earlier portrayal as a playful person.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Caesar: If thou dost bend and pray and fawn for him,
I spurn thee like a cur out of my way.
Know, Caesar doth not wrong, nor without cause
Will he be satisfied.`,
        subquestions: `(i) Where does this scene take place? What is Metellus begging for? \n(ii) What is Caesar's attitude towards Metellus? What evidence is in the extract? \n(iii) Give the meaning of: "If thou dost bend and pray and fawn for him, / I spurn thee like a cur out of my way." \n(iv) What has Caesar already said about petitions presented with humility? \n(v) How does Metellus's question serve as a cue for the conspirators?`,
        answer: `(i) The scene is at the Capitol. Metellus is begging for his banished brother to be allowed to return. Caesar is disgusted by his begging.\n(ii) Caesar's attitude is one of contempt and arrogance. The evidence is his threat to "spurn thee like a cur out of my way," comparing Metellus to a dog.\n(iii) It means: "If you keep bowing and begging for your brother, I will kick you out of my path like a worthless dog."\n(iv) Caesar has said that such "lowly courtesies" and fawning might work on ordinary men, but not on him.\n(v) His question, "Is there no voice more worthy than my own...?" serves as the cue for the other conspirators, starting with Brutus, to step forward and kneel, surrounding Caesar before they attack.`
    },
    {
        extract: `Extract 2:
Servant: Thus, Brutus, did my master bid me kneel;
Thus did Mark Antony bid me fall down;
And, being prostrate, thus he bade me say:
Brutus is noble, wise, valiant, and honest...`,
        subquestions: `(i) Why was Antony absent? Why was the servant sent? \n(ii) Give examples of three qualities of Brutus that Antony speaks of. \n(iii) Did Antony really love and honour Brutus? What does he say later? \n(iv) Give examples to prove that Antony fear'd, honour'd and loved Caesar. \n(v) Antony mentions four qualities of Caesar. How far do you agree with each?`,
        answer: `(i) Trebonius had drawn Antony out of the way. The servant was sent to test the situation and deliver a message to win Brutus's trust.\n(ii) **Noble:** His motive for killing Caesar was for the "general good." **Wise:** He is a respected senator and thinker. **Honest:** He refuses to let the conspirators swear an oath.\n(iii) No, he was being deceptive. Later, in his soliloquy, he calls them "butchers." At the very end of the play, however, he does praise the dead Brutus as "the noblest Roman of them all."\n(iv) **Loved:** He is overcome with grief at Caesar's body. **Honour'd:** He calls Caesar "mighty" and "the noblest man." **Fear'd:** This likely refers to a respectful awe of Caesar's power.\n(v) **Mighty:** Agree, he was a great general. **Bold:** Agree, he was known for courage. **Royal:** Disagree, he was not officially royalty. **Loving:** Agree, he is shown to be loving to Calpurnia and calls the conspirators "friends."`
    },
    {
        extract: `Extract 3:
Brutus: Thy master is a wise and valiant Roman;
I never thought him worse.
Tell him, so please him come unto this place,
He shall be satisfied...`,
        subquestions: `(i) Who is the "master"? Why is he wise? Why is he not present? \n(ii) Why has the master sent his servant? What condition did he set? \n(iii) What is the meaning of: "He shall be satisfied"? How is Brutus's statement "We shall have him well to friend" ironic? \n(iv) Who else is present? How is there a disagreement about "the master"? \n(v) How does the master show he is shrewd and intelligent?`,
        answer: `(i) The "master" is Mark Antony. He is wise in sending a servant first. He is not present because Trebonius led him away and he fled in shock.\n(ii) Antony sent his servant to see if he could safely approach. The condition was that Brutus guarantee his safety and give reasons for the murder.\n(iii) It means Brutus will give Antony a convincing explanation. Brutus's statement is deeply ironic because Antony is only pretending and will soon become their most dangerous enemy.\n(iv) Cassius is present. Brutus is trustful of Antony, while Cassius immediately expresses his fear and misgivings.\n(v) Antony shows he is shrewd by sending a servant with a flattering message that appeals to Brutus's sense of honour, securing his own safety.`
    },
    {
        extract: `Extract 4:
Brutus: O Antony, beg not your death of us.
Though now we must appear bloody and cruel,
As, by our hands, and this our present act,
You see we do...`,
        subquestions: `(i) In what manner has Antony just spoken? How do you explain his attitude? \n(ii) What do the statements of Brutus and Cassius reveal about their natures? \n(iii) What difference of opinion is there between Brutus and Cassius later? \n(iv) What role does Antony play in this scene? \n(v) Explain "bleeding business" and "disposing of new dignities."`,
        answer: `(i) Antony has spoken with grief and vulnerability, offering his own life. His attitude is a strategic mask to gain their trust.\n(ii) **Brutus's statement:** Reveals his idealistic nature, concerned with appearances and noble intentions. **Cassius's statement:** Reveals his practical, political nature, offering power to win Antony over.\n(iii) They disagree on whether to allow Antony to speak at Caesar's funeral. Brutus agrees, while Cassius strongly objects.\n(iv) Antony plays the role of a shrewd, deceptive politician. He fools Brutus, securing his life and the opportunity to deliver a funeral oration for revenge.\n(v) **bleeding business:** A euphemism for the assassination. **disposing of new dignities:** Distributing government offices and positions of power.`
    }
  ]
};


// --- Helper Component to format answers with bold text ---
const FormattedAnswer = ({ text, style }) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <p style={style}>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                }
                return part;
            })}
        </p>
    );
};


// --- The Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('mcq');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [visibleAnswers, setVisibleAnswers] = useState({});

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedAnswers({});
    setVisibleAnswers({});
  };

  const handleMcqSelect = (questionId, selectedOption) => {
    if (!selectedAnswers[questionId]) {
        setSelectedAnswers(previousState => ({ ...previousState, [questionId]: selectedOption }));
    }
  };

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };
  
  // --- Inline CSS Styles ---
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f9f5f0',
      minHeight: '100vh',
      color: '#333',
    },
    mainContent: {
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
      background: '#fff'
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1.25rem 1.5rem',
      backgroundColor: '#fdfbfa',
      borderBottom: '1px solid #eee',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    // Styles for buttons are now handled by classes for hover effects
    contentArea: {
      padding: '2rem',
    },
    qaCard: {
      marginBottom: '1.5rem',
      padding: '1.5rem',
      backgroundColor: '#fdfbfa',
      borderRadius: '8px',
      border: '1px solid #eee',
      transition: 'box-shadow 0.3s ease',
    },
    questionContainer: {
      marginBottom: '1rem',
      color: '#8c1f1f',
      lineHeight: '1.6',
    },
    extractText: {
        fontStyle: 'italic',
        fontWeight: 'normal',
        whiteSpace: 'pre-wrap',
        marginBottom: '1rem',
        fontSize: '1rem',
        padding: '1rem',
        backgroundColor: '#fcf8f4',
        borderRadius: '6px',
        borderLeft: '3px solid #d9a6a6'
    },
    subquestionsText: {
        fontWeight: '600',
        whiteSpace: 'pre-wrap',
        fontSize: '1rem',
    },
    answer: {
      fontSize: '1rem',
      lineHeight: '1.7',
      margin: 0,
      whiteSpace: 'pre-wrap',
    },
    mcqCard: {
      marginBottom: '2rem',
      borderBottom: `1px solid #E5E7EB`,
      paddingBottom: '2rem',
    },
    mcqQuestion: {
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#8c1f1f',
      lineHeight: '1.6',
    },
    lastMcqCard: {
      borderBottom: 'none',
      marginBottom: 0,
      paddingBottom: 0,
    },
    optionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginTop: '1rem',
    },
    correctOption: {
      borderColor: '#16a34a',
      backgroundColor: 'rgba(22, 163, 74, 0.1)',
      fontWeight: '600',
      color: '#15803d',
    },
    incorrectOption: {
      borderColor: '#dc2626',
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
      fontWeight: '600',
      color: '#b91c1c',
    },
    disabledOption: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    explanationContainer: {
      marginTop: '0.5rem',
      padding: '0.75rem 1rem',
      backgroundColor: 'rgba(22, 163, 74, 0.05)',
      borderRadius: '8px',
      borderLeft: '4px solid #16a34a',
    },
    explanationText: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#15803d',
      margin: 0,
    },
    buttonIcon: {
        fontSize: '1.1rem',
        transition: 'transform 0.3s ease',
    },
    answerWrapper: {
        // Combined visible/hidden styles here for transition
        maxHeight: '500px', // Set high enough for content
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, margin-top 0.5s ease-in-out',
        opacity: 1,
        marginTop: '1.5rem',
    },
    answerWrapperHidden: {
        maxHeight: '0',
        opacity: 0,
        marginTop: '0',
    },
    answerContent: {
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        borderLeft: '4px solid #8c1f1f',
    }
  };

  return (
    <div style={styles.container}>
        <style>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Georgia&display=swap');
                body { margin: 0; }

                /* --- Animation Keyframes --- */
                @keyframes contentFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes iconScaleIn {
                    from { transform: scale(0.5); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                /* --- Class-based Styles for Hover & Animations --- */
                .content-area-animated {
                    animation: contentFadeIn 0.5s ease-out forwards;
                }
                .icon-animated {
                    animation: iconScaleIn 0.3s ease-out forwards;
                }
                
                .tab-button {
                    padding: 0.6rem 1.2rem;
                    margin: 0 0.25rem;
                    border-radius: 25px;
                    border: 2px solid #8c1f1f;
                    background-color: transparent;
                    color: #8c1f1f;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .tab-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 10px rgba(140, 31, 31, 0.2);
                }
                .tab-button.active {
                    background-color: #8c1f1f;
                    color: #fff;
                }

                .option-button {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.65rem 1rem;
                    border: 1px solid #E5E7EB;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    background-color: #F9FAFB;
                    text-align: left;
                    font-size: 0.9rem;
                    color: #1F2937;
                }
                .option-button:not(:disabled):hover {
                    transform: translateY(-2px);
                    border-color: #8c1f1f;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                }

                .view-answer-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    border: 1px solid #8c1f1f;
                    background-color: #fff;
                    color: #8c1f1f;
                    font-size: 0.8rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .view-answer-button:hover {
                    background-color: #fdfbfa;
                    transform: scale(1.05);
                }

                /* Basic responsiveness */
                @media (max-width: 600px) {
                  .tab-button { padding: 0.5rem 1rem !important; font-size: 0.85rem !important;}
                  .content-area { padding: 1.5rem !important; }
                  .question-style { font-size: 0.95rem !important; }
                }
            `}
        </style>
      <main style={styles.mainContent}>
        {/* --- Tab Navigation --- */}
        <div style={styles.tabContainer}>
          <button
            className={`tab-button ${activeTab === 'mcq' ? 'active' : ''}`}
            onClick={() => handleTabClick('mcq')}
          >
            MCQs
          </button>
          <button
            className={`tab-button ${activeTab === 'contextual' ? 'active' : ''}`}
            onClick={() => handleTabClick('contextual')}
          >
            Contextual Questions
          </button>
           <button
            className={`tab-button ${activeTab === 'test' ? 'active' : ''}`}
            onClick={() => handleTabClick('test')}
          >
            Test and Evaluation
          </button>
        </div>

        {/* --- Content Display Area --- */}
        <div key={activeTab} style={styles.contentArea} className="content-area content-area-animated">
          {activeTab === 'mcq' && (
             <div>
              {workbookData.multipleChoiceQuestions.map((item, index, arr) => {
                  const hasAnswered = selectedAnswers[item.id];
                  return (
                    <div key={item.id} style={ index === arr.length - 1 ? {...styles.mcqCard, ...styles.lastMcqCard} : styles.mcqCard }>
                      <h2 style={styles.mcqQuestion} className="question-style">{`${index + 1}. ${item.question}`}</h2>
                      <div style={styles.optionsContainer}>
                        {item.options.map((option, oIndex) => {
                          const isSelected = selectedAnswers[item.id] === option;
                          const isCorrect = item.answer === option;
    
                          let optionStyle = {};
                          if (hasAnswered) {
                            if (isCorrect) optionStyle = styles.correctOption;
                            else if (isSelected) optionStyle = styles.incorrectOption;
                            else optionStyle = styles.disabledOption;
                          }
    
                          return (
                            <React.Fragment key={oIndex}>
                                <button
                                  className="option-button"
                                  style={optionStyle}
                                  onClick={() => handleMcqSelect(item.id, option)}
                                  disabled={!!hasAnswered}
                                >
                                  <span className="material-symbols-outlined" style={{ fill: 1 }}>
                                    {hasAnswered && (isCorrect || isSelected) ?
                                        <span className="icon-animated" style={{display: 'inline-block'}}>
                                            {isCorrect ? 'check_circle' : 'cancel'}
                                        </span>
                                        : 'radio_button_unchecked'
                                    }
                                  </span>
                                  <span>{option}</span>
                                </button>
                                {hasAnswered && isCorrect && (
                                    <div style={styles.explanationContainer}>
                                        <p style={styles.explanationText}>
                                            <strong>Explanation:</strong> {item.explanation}
                                        </p>
                                    </div>
                                )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  )
              })}
            </div>
          )}

          {activeTab === 'contextual' && (
            <div>
              {workbookData.contextualQuestions.map((item, index) => {
                const isVisible = visibleAnswers[`contextual-${index}`];
                return(
                <div key={index} style={styles.qaCard}>
                  <div style={styles.questionContainer} className="question-style">
                    <p style={styles.extractText}>{item.extract}</p>
                    <p style={styles.subquestionsText}>{item.subquestions}</p>
                  </div>
                  <button
                    className="view-answer-button"
                    onClick={() => toggleAnswerVisibility(`contextual-${index}`)}
                  >
                     <span className="material-symbols-outlined" style={{...styles.buttonIcon, transform: isVisible ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                        {isVisible ? 'visibility_off' : 'visibility'}
                    </span>
                    {isVisible ? 'Hide Answer' : 'View Answer'}
                  </button>
                  
                  <div style={isVisible ? styles.answerWrapper : {...styles.answerWrapper, ...styles.answerWrapperHidden}}>
                    <div style={styles.answerContent}>
                      <FormattedAnswer text={item.answer} style={styles.answer} />
                    </div>
                  </div>
                </div>
              )})}
            </div>
          )}

          {activeTab === 'test' && (
             <div>
              {workbookData.testAndEvaluation.length > 0 ? workbookData.testAndEvaluation.map((item, index) => {
                const isVisible = visibleAnswers[`test-${index}`];
                return(
                <div key={index} style={styles.qaCard}>
                  <div style={styles.questionContainer} className="question-style">
                    <p style={styles.extractText}>{item.extract}</p>
                    <p style={styles.subquestionsText}>{item.subquestions}</p>
                  </div>
                  <button
                    className="view-answer-button"
                    onClick={() => toggleAnswerVisibility(`test-${index}`)}
                  >
                     <span className="material-symbols-outlined" style={{...styles.buttonIcon, transform: isVisible ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                        {isVisible ? 'visibility_off' : 'visibility'}
                    </span>
                    {isVisible ? 'Hide Answer' : 'View Answer'}
                  </button>
                  
                  <div style={isVisible ? styles.answerWrapper : {...styles.answerWrapper, ...styles.answerWrapperHidden}}>
                    <div style={styles.answerContent}>
                      <FormattedAnswer text={item.answer} style={styles.answer} />
                    </div>
                  </div>
                </div>
              )}) : (
                <div style={styles.qaCard}>
                    <h2 style={styles.mcqQuestion}>Test and Evaluation</h2>
                    <p style={styles.answer}>NO QUESTIONS FROM THIS SCENE</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

