import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 5, Scene 1 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act V, Scene 1",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "Which hopes of Octavius are \"answered\"?",
        options: ["The conflict between Brutus and Cassius", "The armies of the conspirators' advance towards Philippi", "The surrender by the armies of the conspirators", "None of the above"],
        answer: "The armies of the conspirators' advance towards Philippi",
        explanation: "The scene opens with Octavius expressing surprise that his hopes have been answered, as Brutus and Cassius have decided to openly challenge them on the plains of Philippi rather than waiting on the hills."
    },
    {
        id: 'mcq2',
        question: "What reason does Antony give for the enemy's advance towards Philippi?",
        options: ["To hide their fears and show their unity", "To hide their conflict and show their unity", "To show their patriotism and friendship", "None of the above."],
        answer: "To hide their fears and show their unity",
        explanation: "This question refers to the line in the play, \"With fearful bravery, thinking by this face to fasten in our thoughts that they have courage.\" Antony believes they are putting on a false show of bravery."
    },
    {
        id: 'mcq3',
        question: "Cassius compares Antony's sweet words with which of the following?",
        options: ["Honey made by Sybla bees", "Honey made by Olypus bees", "Honey made by Hybla bees", "None of the above"],
        answer: "Honey made by Hybla bees",
        explanation: "During the verbal duel, Cassius accuses Antony of having stolen his sweet words from Hybla bees, a reference to a place in ancient Sicily famous for its honey."
    },
    {
        id: 'mcq4',
        question: "When does Octavius say his sword will go back into its sheath?",
        options: ["When Caesar's ghost will disappear", "When thirty-three wounds of Caesar have been avenged", "When another Caesar will appear", "When he becomes Caesar"],
        answer: "When thirty-three wounds of Caesar have been avenged",
        explanation: "This question refers to the line in the play where Octavius, with a primary objective of revenge, vows that his sword will not be put away until Caesar's multiple wounds are avenged or he himself is killed. The number of wounds in the play text is different from what is stated in the workbook."
    },
    {
        id: 'mcq5',
        question: "Who has been described by Cassius as \"A peevish schoolboy\"?",
        options: ["Marcus Brutus", "Mark Antony", "Lucius", "Octavius Caesar"],
        answer: "Octavius Caesar",
        explanation: "As part of the personal abuse during the confrontation, Cassius dismisses the young Octavius as a \"peevish schoolboy\"."
    },
    {
        id: 'mcq6',
        question: "With whom has Cassius compared himself in this scene?",
        options: ["Brutus", "Pompey", "Caesar", "Lucius"],
        answer: "Pompey",
        explanation: "This question refers to the line in the play, \"As Pompey was, am I compell'd to set upon one battle all our liberties.\" Cassius compares his situation to that of Pompey, who was forced into a decisive, risky battle."
    },
    {
        id: 'mcq7',
        question: "Cassius has changed his mind about the doctrine of Epicurus regarding which of the following?",
        options: ["Superstitions", "Ghosts", "Republicanism", "Omens and Premonitions"],
        answer: "Omens and Premonitions",
        explanation: "Cassius tells Messala that despite his previous belief in the philosophy of Epicurus, who had no time for such things, he has now changed his mind and takes notice of signs of ill omen."
    },
    {
        id: 'mcq8',
        question: "Who according to Cassius has formed a \"canopy most fatal\" over their heads?",
        options: ["Two huge eagles", "Crows and kites", "Enemy soldiers", "None of the above"],
        answer: "Crows and kites",
        explanation: "Cassius describes the ill omen where the eagles that followed them from Sardis have been replaced by \"ravens, crows and kites,\" whose shadows seem to form a \"canopy most fatal\" over the army."
    },
    {
        id: 'mcq9',
        question: "How does Brutus define Cato's act of committing suicide?",
        options: ["Mean and short-sighted", "Sensible and timely", "Low and cowardly", "None of the above"],
        answer: "Low and cowardly",
        explanation: "This question refers to the line in the play where Brutus, expressing his Stoic philosophy, says he finds the act of committing suicide to avoid potential future suffering to be \"cowardly and vile\"."
    },
    {
        id: 'mcq10',
        question: "Why would Cassius and Brutus smile at each other if they meet again?",
        options: ["It will be after their victory over their enemies", "It will be their farewell meeting", "It will mark an end of their differences", "It will be in front of their armies."],
        answer: "It will be after their victory over their enemies",
        explanation: "This question refers to their farewell dialogue in the play. The smile would signify that they have survived the battle and been victorious."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Octavius: They mean to warn us at Philippi here,
Answering before we do demand of them.
Antony: Tut, I am in their bosoms, and I know
Wherefore they do it: they could be content
To visit other places; and come down
With fearful bravery, thinking by this face
To fasten in our thoughts that they have courage;
But 'tis not so.`,
      subquestions: `(i) Who are "they" referred to in line 1? What warning would they give? From where would they come to Philippi?\n(ii) Give the meaning of:\n(a) Answering before we do demand of them.\n(b) I am in their bosoms.\n(iii) Whose military strategy has dictated that the battle should take place at Philippi? What had Brutus argued regarding this strategy?\n(iv) What did Octavius hope that the enemy would do? What according to him is the intention of the enemy?\n(v) What, according to Antony, is the planning of the enemy? Why does Antony feel so confident that he knows what the enemy intends to show?`,
      answer: `(i) "They" refers to the armies of Brutus and Cassius. They would give a "sign of battle" as a warning. They have come from their camp in Sardis.\n(ii) (a) This means they are making a show of challenging us before we even have to call them out to fight.\n(b) This means, "I know their secret thoughts and intentions."\n(iii) Brutus's military strategy dictated that the battle should take place at Philippi. His argument was that they must march to Philippi before the local population, who had no goodwill towards them, could join the enemy's side.\n(iv) Octavius hoped and expected the enemy to wait on the hills. According to him, their intention in coming down is to "warn" them, or make a show of challenging them to battle.\n(v) According to Antony, the enemy's plan is to put on a show of "fearful bravery" to trick them into thinking they have courage when they do not. He feels confident because he believes he is "in their bosoms," meaning he understands their true motivations.`
    },
    {
      extract: `Extract 2:
Cassius: Now, Brutus, thank yourself:
This tongue had not offended so today,
If Cassius might have rul'd.
Octavius: Come, come, the cause: If arguing make us sweat,
The proof of it will turn to redder drops.
Look,
I draw a sword against conspirators;
When think you that the sword goes up again?
Never, till Caesar's three-and-thirty wounds
Be well aveng'd; or till another Caesar
Have added slaughter to the sword of traitors.`,
      subquestions: `(i) Whose is the "tongue" of which Cassius speaks? Give the substances of what the tongue had said which so "offended" Cassius.\n(ii) Give a brief explanation of the earlier episode that Cassius is referring to when he reminds Brutus that he has only himself to thank for the present situation.\n(iii) Give the comments made by Cassius, in his next speech, when he scornfully describes Octavius.\n(iv) What does Octavius mean by "the cause"? State in your own words the meaning of the last two lines of the passage-"or till another Caesar / ...sword of traitors."\n(v) Was Octavius successful in his task of vengeance? How does the play end?`,
      answer: `(i) The "tongue" belongs to Antony. Antony had just accused the conspirators of being flatterers who stabbed Caesar from behind, comparing their sweet words to honey stolen from Hybla bees, but without the sting.\n(ii) Cassius is referring to the episode after Caesar's assassination when he argued that they should kill Mark Antony along with Caesar. Brutus, in his idealism, overruled him, a mistake that allowed Antony to turn the people against them and lead to this war.\n(iii) In his next speech, Cassius scornfully describes Octavius as a "peevish schoolboy" who is unworthy of honor and is partnered with a "masker and a reveler" (Antony).\n(iv) By "the cause," Octavius means the reason for their fight, which is to get down to the actual battle. The last two lines mean that his sword will not be put away until either Caesar's death is avenged or he himself ("another Caesar") has also been killed by the same traitors' swords.\n(v) Yes, Octavius was successful. The play ends after the defeat and deaths of Brutus and Cassius, with Octavius taking command and making plans for the new government of Rome.`
    },
    {
      extract: `Extract 3:
Cassius: Coming from Sardis, on our former ensign
Two mighty eagles fell; and there they perch'd,
Gorging and feeding from our soldiers' hands;
Who to Philippi here consorted us:
This morning are they fled away and gone;
And in their stead do ravens, crows, and kites
Fly o'er our heads, and downward look on us,
As we were sickly prey: their shadows seem
A canopy most fatal, under which
Our army lies, ready to give up the ghost.`,
      subquestions: `(i) In this extract, Cassius narrates something he has seen. What is it? Did he believe in the significance of such things earlier in his life? Why?\n(ii) Give the meaning of: "As we were sickly prey: their shadows seem/ A canopy most fatal." What do these lines signify?\n(iii) What did Cassius see on the previous day and on that particular morning? What do these signs signify?\n(iv) How can you conclude from what Cassius says, a little later, that he was prepared for a possible defeat?\n(v) How does Brutus console him?`,
      answer: `(i) Cassius narrates seeing an ill omen: the two eagles that followed his army have been replaced by ravens, crows, and kites, which are birds of death. No, he did not believe in such things earlier. He followed the philosophy of Epicurus, which taught that there was no place for superstition and omens.\n(ii) This means the birds of prey are looking down on the army as if they were weak and dying animals, and their shadows covering the army feel like a deadly covering. These lines signify that Cassius fears these birds foretell defeat and death for his army.\n(iii) On the previous days, Cassius saw two mighty eagles accompanying his army from Sardis, which was a good sign. On that particular morning, he saw that the eagles were gone and had been replaced by birds of prey, which he takes as a sign that the gods now see his army as prey, signifying death.\n(iv) A little later, Cassius asks Brutus what he will do if they lose the battle. He and Brutus then bid each other a touching, "everlasting farewell," which shows they are both preparing for the possibility of defeat and death.\n(v) The provided workbook text does not state how Brutus consoles him regarding the omens. Messala tells him, "Believe not so".`
    },
    {
      extract: `Extract 4:
Cassius: Then, if we lose this battle,
You are contented to be led in triumph
Thorough the streets of Rome?
Brutus: No, Cassius, no: think not, thou noble Roman,
That ever Brutus will go bound to Rome;
He bears too great a mind. But this same day
Must end that work the ides of March begun...`,
      subquestions: `(i) What has Brutus just said which makes Cassius say the words given in the extract? Which Roman practice is referred to in Cassius' speech?\n(ii) State briefly to what extent Brutus bears a great mind.\n(iii) What was begun on the ides of March? How will the words of Brutus be prophetic?\n(iv) Do Cassius and Brutus meet again? Why?\n(v) Brutus and Cassius are affected by the latest events. This makes them act in a different way than their normal behaviour. Give one incident to illustrate this.`,
      answer: `(i) Brutus has just said that, following his philosophy, he finds suicide to be "cowardly and vile". Cassius's speech refers to the Roman practice of leading a defeated enemy general in chains through the streets of Rome as part of a victory parade ("led in triumph").\n(ii) Brutus bears a "great mind" in the sense that his pride and Roman sense of honour are too great to ever allow himself to suffer the humiliation of being captured and paraded as a prisoner.\n(iii) The assassination of Caesar was begun on the ides of March. Brutus's words are prophetic because this day will indeed "end that work," as both he and Cassius will die, bringing the conflict started by the assassination to its conclusion.\n(iv) No, they do not meet again. They both die in the ensuing battle, making this their final, everlasting farewell.\n(v) Cassius, who previously followed the philosophy of Epicurus and did not believe in omens, is now so affected that he has changed his mind and sees bad omens in the birds overhead.`
    }
  ],
  testAndEvaluation: [
      {
      extract: `Extract 1:
Cassius: This is my birthday; as this very day
Was Cassius born. Give me thy hand, Messala:
Be thou my witness that against my will,
As Pompey was, am I compell'd to set
Upon one battle all our liberties.
You know that I held Epicurus strong,
And his opinion: now I change my mind,
And partly credit things that do presage.`,
      subquestions: `(i) Who was Pompey? Why is he referred to in the extract?\n(ii) What is Cassius compelled to do? Who has compelled him? How?\n(iii) Who is Epicurus? What was his view? If Cassius held the viewpoint of Epicurus, what makes him now to change his mind?\n(iv) Give the meaning of:\nBe thou my witness that against my will...\nAnd partly credit things that do presage.\n(v) Comment briefly on the uncertainty which Cassius feels about the outcome of the battle that day. How do Brutus and Cassius wish each other farewell at the end of the scene?`,
      answer: `(i) Pompey was a great Roman general who was defeated by Julius Caesar in a civil war. He is referred to here because Cassius feels he is in a similar situation, being forced against his will to risk everything on a single, decisive battle.\n(ii) Cassius is compelled to fight the battle at Philippi. Brutus has compelled him. He did this in the previous act by overruling Cassius's sound military advice to wait at Sardis.\n(iii) Epicurus was a Greek philosopher. His view emphasized man's freedom of action and did not believe in omens or superstition. The stress of the battle and the sight of the ill-omened birds have made Cassius change his mind and begin to believe in things that foretell the future.\n(iv) This means: "I want you to bear witness to the fact that it is not my choice..."\nThis means: "And now I partially believe in things that foretell future events (omens)."\n(v) Cassius feels a strong sense of defeat and uncertainty, noting that it is his birthday and he fears it will also be his death day. He sees ill omens in the sky. Brutus and Cassius bid a touching and "everlasting farewell" to each other, in case they are defeated and do not meet again.`
    },
    {
      extract: `Extract 2:
Brutus: Even by the rule of that philosophy
By which I did blame Cato for the death
Which he did give himself: I know not how,
But I do find it cowardly and vile,
For fear of what might fall, so to prevent
The time of life, arming myself with patience,
To stay the providence of some high powers
That govern us below.`,
      subquestions: `(i) Who is Cato? Give details of his philosophy.\n(ii) Why didn't Cato follow that philosophy till the end of his life? Name two characters in the play who were the followers of that philosophy.\n(iii) How did Brutus and Cassius bid farewell to each other? Why were their words at the farewell prophetic?\n(iv) Give the meaning of: For fear of what might fall, so to prevent / The time of life.\n(v) What does Brutus say to indicate that he was a true Roman soldier? Do you think he proved himself? Give reasons to justify your answer.`,
      answer: `(i) Cato was a famous Roman statesman and Portia's father. The philosophy referred to is Stoicism, which preached that suffering should be endured with patience and that self-control is a major virtue.\n(ii) The workbook does not state why Cato did not follow the philosophy, but historically he committed suicide rather than submit to Caesar. Brutus and Portia are two characters in the play who are followers of this philosophy.\n(iii) They bid an "everlasting farewell" to each other, acknowledging that if they lose, it will be the last time they speak. Their words were prophetic because they were indeed defeated and never met again.\n(iv) This means: Committing suicide simply out of fear of what bad things might happen in the future, in order to cut short one's natural lifespan.\n(v) Brutus says that he will never allow himself to be "led in triumph" as a captive through Rome, declaring "He bears too great a mind" for such a shame. Yes, he proved himself, as he ultimately chooses to take his own life rather than be captured by the enemy.`
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

