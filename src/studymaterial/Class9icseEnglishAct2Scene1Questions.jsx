import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 2, Scene 1 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act II, Scene 1",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "Why is Brutus having sleepless nights?",
        options: ["Because of the stormy weather outside", "Because of his inner turmoil", "He is suffering from insomnia", "Because of his fear of being a co-conspirator against Caesar"],
        answer: "Because of his inner turmoil",
        explanation: "Brutus is awake all night because he is struggling with the decision of whether or not to join the conspiracy and kill Caesar. The stormy night reflects this internal conflict."
    },
    {
        id: 'mcq2',
        question: "Which of the following is NOT true about Brutus' feelings for Caesar?",
        options: ["He loves Caesar", "Caesar's death will be for the good of Rome", "He has a personal grudge against Caesar", "None of the above"],
        answer: "He has a personal grudge against Caesar",
        explanation: "Brutus makes it very clear in his soliloquy that he has \"no personal cause to spurn at him.\" His motive is purely for the \"general good\" of Rome."
    },
    {
        id: 'mcq3',
        question: "Brutus does not agree with Cassius on the issue of taking mutual oath because he considers:",
        options: ["they are true Romans fighting for a just cause", "they are true Romans fighting for an unjust cause", "their cause is weak", "the conspirators are untrustworthy"],
        answer: "they are true Romans fighting for a just cause",
        explanation: "Brutus believes that their honorable cause and their identity as Romans are bond enough. He feels that only dishonest men involved in bad causes need to swear oaths."
    },
    {
        id: 'mcq4',
        question: "Why does Brutus not want Cicero to be a part of the conspiracy?",
        options: ["Cicero is Caesar's trustworthy", "Cicero is known for shifting loyalties", "Cicero is indecisive", "Cicero is irresolute"],
        answer: "Cicero is irresolute",
        explanation: "Brutus argues that Cicero should be left out because \"he will never follow anything that other men begin.\" He believes Cicero is too independent and will not join a plan he didn't start himself."
    },
    {
        id: 'mcq5',
        question: "Why is Brutus against killing Antony after the murder of Caesar?",
        options: ["Antony will be powerless after Caesar's death", "Antony devoted his life to sports and wildness", "They must not appear as butchers to the people", "All of the above"],
        answer: "All of the above",
        explanation: "Brutus makes all three arguments: that killing Antony would be too bloody (\"butchers\"), that Antony is just a \"limb\" who will be powerless without Caesar (\"the head\"), and that Antony is not a serious threat because he loves sports and socializing."
    },
    {
        id: 'mcq6',
        question: "How does Decius Brutus say he will persuade Caesar to come to the Senate?",
        options: ["By flattery", "By persuasion", "By deceit", "By showing fear"],
        answer: "By flattery",
        explanation: "Decius knows Caesar's weakness for flattery. He plans to tell Caesar that he hates flatterers, which ironically makes Caesar feel proud and thus more susceptible to Decius's influence."
    },
    {
        id: 'mcq7',
        question: "According to Cassius, what would prevent Caesar from coming to the Senate?",
        options: ["The signs and portents given by the storm", "The warning given by the Soothsayer", "The report given by his loyal friends", "All of the above"],
        answer: "The signs and portents given by the storm",
        explanation: "Cassius worries that Caesar, who has \"grown superstitious of late,\" might be frightened by the terrible storm and the bad omens and decide to stay home."
    },
    {
        id: 'mcq8',
        question: "What is Portia's complaint against Brutus?",
        options: ["He has been ignoring her", "He has been talking to strangers", "He has been behaving unnaturally", "He has been sleepwalking"],
        answer: "He has been behaving unnaturally",
        explanation: "Portia complains that Brutus has been acting strangely for some days: not eating, sleeping, or talking, and sighing and walking about in the middle of the night."
    },
    {
        id: 'mcq9',
        question: "With whom does Portia compare herself?",
        options: ["Her uncle, Brutus", "Her father, Cato", "Her legendary mother", "None of the above"],
        answer: "Her father, Cato",
        explanation: "Portia reminds Brutus that she is the daughter of the highly respected Cato, arguing that she has inherited his strength and is worthy of his trust."
    },
    {
        id: 'mcq10',
        question: "Portia pleads with Brutus to share his secret with her claiming which of the following?",
        options: ["Equal rights of wifehood", "Being his childhood friend", "Being his well-wisher", "Being his close confidant"],
        answer: "Equal rights of wifehood",
        explanation: "Portia argues passionately that as his wife, she is his other half and should not be excluded from his life or secrets. She asks if she is only his wife in a limited sense, or his true partner."
    },
    {
        id: 'mcq11',
        question: "What does darkness signify in this scene?",
        options: ["Fear in Brutus' mind", "Suspicion in Brutus' mind", "Confusion in Brutus' mind", "Calmness in Brutus' mind"],
        answer: "Confusion in Brutus' mind",
        explanation: "The darkness and the storm outside symbolize the evil plot and the internal conflict, anxiety, and confusion (\"inner turmoil\") that Brutus is experiencing."
    },
    {
        id: 'mcq17',
        question: "When persuading Brutus, Portia appeals to which of his traits?",
        options: ["His love for her", "His sense of pride", "His need for a confidant", "His sense of loyalty"],
        answer: "His sense of pride",
        explanation: "Portia appeals to Brutus's sense of honor and his pride in her as his noble wife and as the daughter of Cato, arguing that such a man should trust his worthy wife."
    },
    {
        id: 'mcq18',
        question: "Why do the conspirators want Brutus to their side?",
        options: ["His integrity and personal reputation", "His method of planning", "His sharp knowledge of Republicanism", "His hatred for Caesar"],
        answer: "His integrity and personal reputation",
        explanation: "The conspirators need Brutus because he is highly respected by the people. His involvement will make their assassination plot seem like a noble and necessary act for the good of Rome."
    },
    {
        id: 'mcq19',
        question: "Which characteristic trait of Caesar does Decius Brutus' character reveal in this scene?",
        options: ["Patriotism", "Loyal friend", "Betrayal of friendship", "Irritable vanity"],
        answer: "Irritable vanity",
        explanation: "Decius boasts he can get Caesar to the Capitol by flattering him. He knows Caesar's ego can be easily manipulated, appealing directly to his vanity."
    },
    {
        id: 'mcq20',
        question: "In his mind how does Brutus justify killing Caesar?",
        options: ["Spiritual and Purifying", "A necessary evil", "Vanquishing Rome's foe", "Both (a) and (b)"],
        answer: "Both (a) and (b)",
        explanation: "Brutus sees it as a necessary evil for the \"general good\" of Rome and wants the act to be spiritual and purifying, like a religious sacrifice, not a bloody murder."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Brutus: It must be by his death: and for my part,
I know no personal cause to spurn at him,
But for the general. He would be crown'd:
How that might change his nature, there's the question.`,
      subquestions: `(i) Where does the scene take place? When? What has he just asked his servant to do? \n(ii) What is the mood of Brutus? What has he decided to do? \n(iii) What is the motive of Brutus for taking such a decision? What does he say about his personal feelings? \n(iv) What danger does Brutus foresee? How is this danger expressed by referring to the bright day and the adder? \n(v) What are your feelings for Brutus at this juncture? Give two reasons.`,
      answer: `(i) The scene is in Brutus's orchard in the middle of the night. He has just asked his servant, Lucius, to light a candle in his study.\n(ii) Brutus is in extreme inner turmoil and has not slept. He has decided that Caesar must be killed.\n(iii) His motive is for the "general good" of Rome. He explicitly states he has no personal grudge against Caesar.\n(iv) He foresees the danger that being crowned will corrupt Caesar. He compares this to a bright day (power) bringing out a venomous snake (tyranny).\n(v) One might feel sympathy for Brutus because he is undergoing a great internal struggle for what he believes is his country's good, and his motives are honorable, not based on personal hatred.`
    },
    {
      extract: `Extract 2:
Brutus: And therefore think him as a serpent's egg,
Which, hatch'd, would, as his kind, grow mischievous,
And kill him in the shell.`,
      subquestions: `(i) "So Caesar may." What may Caesar do, according to the metaphor of the ladder? \n(ii) Give the meaning "And, since the quarrel / Will bear no colour for the thing he is / Fashion it thus." \n(iii) What is meant by "augmented"? How can Caesar be augmented? \n(iv) To whom is the person compared? What does Brutus want to communicate with this comparison? \n(v) What price would Brutus pay later for this decision?`,
      answer: `(i) Caesar may use humility as a ladder to gain power, but once at the top, turn his back on those below. Brutus intends to prevent this by killing him first.\n(ii) It means: "Since our argument has no justification based on his current behavior, we must shape it this way..." It shows Brutus knows he's acting based on what Caesar might do.\n(iii) "Augmented" means increased in power. Caesar can be augmented by being crowned king, as was attempted by Mark Antony.\n(iv) Caesar is compared to a serpent's egg. Brutus means that Caesar, while seemingly harmless now, has the potential to become a dangerous tyrant once "hatched" (crowned) and must be destroyed now.\n(v) Brutus will pay a terrible price: his action leads to civil war, the death of his wife, the destruction of the Republic, and his own death.`
    },
    {
      extract: `Extract 3:
Brutus: Since Cassius first did whet me against Caesar,
I have not slept.
Between the acting of a dreadful thing
And the first motion, all the interim is
Like a phantasma, or a hideous dream...`,
      subquestions: `(i) To what does Brutus reply, "'Tis good"? Who is knocking at the gate and why? \n(ii) What has been the impact of Cassius's earlier discussion on Brutus? \n(iii) In what mental turmoil is Brutus? Why does he compare it to a nightmare? \n(iv) Give the meaning of: a) all the interim is like a phantasma, b) the genius and the mortal instruments / Are then in council. \n(v) How is Brutus's mental condition compared to a civil war?`,
      answer: `(i) Brutus is replying "'Tis good" to Lucius confirming the day is the Ides of March. Cassius and the conspirators are knocking to finalize their plans.\n(ii) Cassius's words have sharpened Brutus's resolve to the point where he is in constant mental anguish and cannot sleep.\n(iii) Brutus is in a state of extreme anxiety. He compares it to a nightmare because his mind and body are at war, creating an "insurrection" within him.\n(iv) **all the interim is like a phantasma:** The entire period of waiting is like a nightmare. **the genius and the mortal instruments...:** A person's mind/soul and their body/passions are debating and conflicting.\n(v) Brutus compares his own mind and body to a "little kingdom" suffering a civil war between his rational mind and his physical passions.`
    },
    {
      extract: `Extract 4:
Brutus: O conspiracy,
Sham'st thou to show thy dangerous brow by night,
When evils are most free? O, then, by day
Where wilt thou find a cavern dark enough
To mask thy monstrous visage?`,
      subquestions: `(i) Who comes after this extract? How are they dressed? \n(ii) What is meant by "the faction" and "thy dangerous brow"? \n(iii) How does conspiracy disguise itself at night and during the day? \n(iv) What is "Erebus"? What would happen if the conspiracy showed its true face? \n(v) Why is it necessary to disguise the conspiracy? Give two precautions taken.`,
      answer: `(i) Cassius and the other conspirators arrive. They have their hats pulled down and faces half-hidden in their cloaks.\n(ii) **the faction:** The group of conspirators. **thy dangerous brow:** The threatening and evil appearance of the conspiracy itself.\n(iii) At night, they hide their faces in cloaks. Brutus advises that during the day, it must hide its "monstrous visage" behind "smiles and affability" (friendliness).\n(iv) "Erebus" is a dark region of the underworld. If the conspiracy appeared in its true form, not even the darkness of Erebus could hide it from being discovered.\n(v) It is necessary to avoid being discovered. Two precautions they take are meeting in the middle of the night and wearing cloaks and hats to hide their faces.`
    },
    {
      extract: `Extract 5:
Brutus: What need we any spur but our own cause,
To prick us to redress? what other bond
Than secret Romans, that have spoke the word,
And will not palter?`,
      subquestions: `(i) Who are "we"? What is "our own cause"? \n(ii) Who suggested taking an oath? Why did Brutus dismiss the idea? Was it wise? \n(iii) Explain what is meant by "honesty to honesty engag'd". \n(iv) Give the meaning of: "That this shall be, or we will fall for it." \n(v) According to Brutus, who normally takes an oath?`,
      answer: `(i) "We" are the conspirators. "Our own cause" is their goal of killing Caesar to save the Republic. The cause itself is a motivation because its justness should be enough to drive them.\n(ii) Cassius suggested it. Brutus dismissed it because he believed they were all honorable Romans united by a just cause. It was not a wise decision, as it was based on his naive belief that everyone shared his noble motives.\n(iii) It means a promise made between honest men, which Brutus believes is the foundation of their enterprise.\n(iv) It means: "We will either succeed in our mission, or we will die trying."\n(v) According to Brutus, only priests, cowards, deceitful men, and the feeble take oaths. He believes their Roman blood is a stronger bond.`
    },
    {
      extract: `Extract 6:
Brutus: O, name him not: let us not break with him,
For he will never follow any thing
That other men begin.`,
      subquestions: `(i) Who is 'him'? Why did Brutus want to leave him out? What reason was given in his favour? \n(ii) Explain "let us not break with him." \n(iii) What is the meaning of "touch'd"? Who else does Cassius mention should be "touch'd"? \n(iv) Why does Brutus override Cassius? What does it reveal about him? \n(v) What was Cassius's objection, and how was it later justified?`,
      answer: `(i) 'Him' is Cicero. Brutus wants to leave him out of the conspiracy. The reason given in his favour was that his age and respected reputation would legitimize their actions.\n(ii) It means let us not confide in him or reveal our plan, as Brutus is certain Cicero would refuse to join a plot he didn't start himself.\n(iii) "Touch'd" means killed. Cassius mentions that Mark Antony should also be killed because he is loyal to Caesar and may seek revenge.\n(iv) Brutus overrides Cassius because he fears their "course will seem too bloody." This reveals that Brutus is an idealist, concerned more with perception than practical dangers.\n(v) Cassius's objection was his fear of Antony. It was later justified when Antony's funeral oration turned the mob against the conspirators, leading to civil war.`
    },
    {
      extract: `Extract 7:
Brutus: Alas, good Cassius, do not think of him.
If he love Caesar, all that he can do
Is to himself, take thought and die for Caesar:
And that were much he should, for he is given
To sports, to wildness, and much company.`,
      subquestions: `(i) What is the occasion? What is "ingrafted love"? Who is being discussed? \n(ii) How does Brutus dismiss Cassius' fear of that person? \n(iii) Why does Trebonius say there is no cause to fear that man? \n(iv) Give the meaning of "For he will live, and laugh at this hereafter." \n(v) Which of the three men proves to be right and how?`,
      answer: `(i) The occasion is the conspirators' meeting in Brutus's orchard. "Ingrafted love" means a deep-seated love. The person is Mark Antony.\n(ii) Brutus dismisses the fear by underestimating Antony, arguing he is powerless without Caesar and too dedicated to partying to be a threat.\n(iii) Trebonius agrees with Brutus, saying Antony is not a threat and will eventually just laugh about the situation.\n(iv) It means Antony will not seek revenge; he will just get on with his life and treat the assassination as a joke later on.\n(v) Cassius proves to be right. His fear is justified when Antony's funeral speech starts a civil war that leads to the conspirators' defeat and death.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Brutus: "Shall Rome, etc." Thus must I piece it out;
Shall Rome stand under one man's awe? What, Rome?
My ancestors did from the streets of Rome
The Tarquin drive, when he was call'd a king.`,
        subquestions: `(i) What has just been read by Brutus? Who placed it and why? \n(ii) What message was being conveyed to Brutus? How did he react? \n(iii) Who was the Tarquin? What reference is made to Brutus's ancestors? \n(iv) State in your own words the promise Brutus makes to Rome. \n(v) What aspect of Brutus's character is highlighted? Give two reasons.`,
        answer: `(i) Brutus has just read an anonymous letter. Cinna placed it, but it was written by Cassius to manipulate Brutus into joining the conspiracy.\n(ii) The message was that Rome was in danger and Brutus needed to "awake" and take action. Brutus reacted by accepting the message as the will of the people and promising to act.\n(iii) Tarquin was the last, tyrannical king of Rome. The extract refers to Brutus's famous ancestor, Lucius Junius Brutus, who drove Tarquin out of Rome.\n(iv) Brutus promises that if taking action will fix Rome's problems, then Rome will receive everything it is asking for from his hand.\n(v) His idealism and sense of honour are highlighted. 1) He immediately connects the letter to his family's legacy of protecting Rome. 2) He naively accepts the forged letter as the genuine voice of the Roman people.`
    },
    {
        extract: `Extract 2:
Brutus: Let us be sacrificers, but not butchers, Caius.
We all stand up against the spirit of Caesar,
And in the spirit of men there is no blood...`,
        subquestions: `(i) What is the "course" referred to? When will it look bloody? \n(ii) Who is "the head" and "the limbs"? What is meant by "Like wrath in death and envy afterwards"? \n(iii) What arguments does Cassius give to justify killing Antony? \n(iv) What is meant by: "Let us be sacrificers, but not butchers"? \n(v) What is the spirit of Caesar? What act is inevitable to stop it?`,
        answer: `(i) The "course" is their assassination plan. It will look bloody if they also kill Mark Antony.\n(ii) "The head" is Caesar; "the limbs" is Mark Antony. The phrase means killing Antony would look like savage anger and spiteful jealousy, not a noble act.\n(iii) Cassius argues that Antony is a "shrewd contriver" and so well-loved by Caesar that he is likely to have enough power to harm them all in revenge.\n(iv) It means they should conduct the assassination as a clean, religious sacrifice for Rome, not a savage murder. Brutus's ideal is to kill Caesar "boldly but not wrathfully."\n(v) The "spirit of Caesar" is his ambition for absolute power. To stop it, the inevitable act of physically killing him ("Caesar must bleed for it") must be done.`
    },
    {
        extract: `Extract 3:
Cassius: But it is doubtful yet
Whether Caesar will come forth today or no.
For he is superstitious grown of late...`,
        subquestions: `(i) What day and time is it? What is "doubtful yet"? \n(ii) Where is Caesar supposed to go? Why is this important? \n(iii) What three things could hold Caesar back? \n(iv) What opinion had Caesar held before? \n(v) Who offers a solution to this problem? What does he say?`,
        answer: `(i) The day is the Ides of March (March 15th), just after 3 a.m. It is "doubtful yet" whether Caesar will go to the Capitol.\n(ii) Caesar is supposed to go to the Capitol (the Senate House). This was important because it's where the conspirators planned to assassinate him.\n(iii) Three things are: 1) The strange omens and bad weather, 2) The terror of the night, 3) The advice of his priests.\n(iv) Caesar previously held the opinion that dreams and ceremonies were meaningless.\n(v) Decius Brutus offers a solution. He says he can persuade Caesar by flattering him, as Caesar loves to hear that he hates flatterers.`
    },
    {
        extract: `Extract 4:
Brutus: O ye gods,
Render me worthy of this noble wife!
(Knocking within)
Hark, hark! one knocks. Portia, go in awhile...`,
        subquestions: `(i) Who is "this noble wife"? Show how she is noble. \n(ii) What are the secrets of Brutus's heart? Why are they to be known by Portia? \n(iii) What is meant by "All the charactery of my sad brows"? \n(iv) Whom does Lucius bring in? Describe the visitor and his purpose. \n(v) What does the visitor say about Brutus's personality?`,
        answer: `(i) "This noble wife" is Portia. She is noble as the daughter of the revered Cato, and she proves her endurance by giving herself a voluntary wound in the thigh.\n(ii) The secrets are his turmoil and involvement in the conspiracy. They are to be known by Portia because she has successfully argued her right as his wife to share his burdens.\n(iii) It means "all the worry and trouble written on my face." His brows are sad because he is weighed down by the cares of the conspiracy.\n(iv) Lucius brings in Caius Ligarius, who is sick and wearing a kerchief. He has come to join Brutus after hearing he is involved in an honorable enterprise.\n(v) Ligarius shows immense admiration for Brutus, saying he will discard his sickness to follow Brutus on any task "worthy the name of honor."`
    },
    {
        extract: `Extract 5:
Brutus: You are my true and honourable wife,
As dear to me as are the ruddy drops
That visit my sad heart.`,
        subquestions: `(i) Why does Portia not believe Brutus when he claims he is unwell? \n(ii) Explain why Portia thinks Brutus is worried. \n(iii) What has Portia just said to indicate she belongs to his inner circle? \n(iv) What does Brutus mean by "the ruddy drops" and his "sad heart"? \n(v) Whose daughter was Portia? What proof of her strength does she give?`,
        answer: `(i) She doesn't believe him because a wise man, if truly sick, would try to get better, not wander in the cold, damp morning air.\n(ii) She thinks he is worried because of his unnatural behavior: not eating or sleeping, sighing, walking around restlessly, and being impatient with her.\n(iii) She has just argued that if she cannot share his secrets, she is his "harlot, not his wife," claiming her right as his true partner.\n(iv) "The ruddy drops" refers to his lifeblood; he is saying Portia is as precious to him as his own life. His heart is "sad" because of the sorrow he feels over the decision to kill Caesar.\n(v) Portia was the daughter of Cato. As proof of her strength, she reveals she has given herself a voluntary wound in the thigh and has borne the pain with patience.`
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
              {workbookData.testAndEvaluation.map((item, index) => {
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
              )})}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

