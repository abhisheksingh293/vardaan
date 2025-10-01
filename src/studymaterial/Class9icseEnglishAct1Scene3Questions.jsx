import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 1, Scene 3 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act I, Scene 3",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "How does Casca interpret the nature's fury of a storm showering fire?",
        options: ["An attempt to punish Caesar", "God's rage with insolent world below", "A sign of something strange likely to happen", "None of the above"],
        answer: "God's rage with insolent world below",
        explanation: "Casca believes the storm is a sign that the gods are enraged with the world's insolence and are sending destruction upon it."
    },
    {
        id: 'mcq2',
        question: "What is meant by prodigies in this scene?",
        options: ["Unnatural events", "Storms", "Fire", "Accidents"],
        answer: "Unnatural events",
        explanation: "Prodigies refer to the strange, unnatural, and ominous events that Casca witnesses, which are seen as bad omens."
    },
    {
        id: 'mcq3',
        question: "Who, according to Cassius, is a source of as much fear as the strange outbreaks of nature?",
        options: ["Antony", "Brutus", "Casca", "Caesar"],
        answer: "Caesar",
        explanation: "Cassius cleverly equates the unnatural horror of the storm with the unnatural and monstrous rise of Caesar's power."
    },
    {
        id: 'mcq4',
        question: "What would Cassius do if Caesar would be crowned as the king?",
        options: ["Leave Rome forever", "Start a rebellion against him", "Would never go to the Senate", "Stab himself with a dagger"],
        answer: "Stab himself with a dagger",
        explanation: "Cassius declares he would rather commit suicide than live in 'bondage' under a king, showing his extreme opposition to tyranny."
    },
    {
        id: 'mcq5',
        question: "According to Cassius, Caesar would not have become a ruthless dictator if…",
        options: ["Romans were not on the streets to welcome him.", "his powers had been curbed earlier.", "Romans were not so submissive.", "None of the above."],
        answer: "Romans were not so submissive.",
        explanation: "Cassius argues that Caesar is only a 'wolf' because he sees the Romans acting like 'sheep'."
    },
    {
        id: 'mcq6',
        question: "How does Cassius interpret the storm in this scene?",
        options: ["He equates it with Caesar", "He equates with his inner turmoil", "He contrasts it with his peaceful inner self", "None of the above."],
        answer: "He equates it with Caesar",
        explanation: "Cassius uses the storm as a metaphor for Caesar's 'monstrous' rise to power, manipulating Casca's fear."
    },
    {
        id: 'mcq7',
        question: "How would Cassius deliver Cassius from bondage?",
        options: ["By running away from Rome", "By inciting himself to rebel", "By provoking Brutus to rebel", "By committing suicide"],
        answer: "By committing suicide",
        explanation: "Cassius states that he has the power to free himself from the slavery ('bondage') of living under a king by taking his own life."
    },
    {
        id: 'mcq8',
        question: "In what condition is Casca in a state of servitude, according to Cassius?",
        options: ["Cheerful", "Fearful", "Remorseful", "None of the above."],
        answer: "Fearful",
        explanation: "Cassius implies that living under Caesar's tyranny has made strong men like Casca live in a fearful state of servitude."
    },
    {
        id: 'mcq9',
        question: "For whom does Casca say that \"he sits high in all the people's heart\"?",
        options: ["Antony", "Brutus", "Caesar", "Cassius"],
        answer: "Brutus",
        explanation: "Casca highlights Brutus's importance to the conspiracy, noting that he is highly respected and loved by the Roman people."
    },
    {
        id: 'mcq10',
        question: "How would Brutus joining the conspirators change their crime?",
        options: ["It will give them moral support", "It will make their group strong", "It will convert their crime into a noble act", "None of the above"],
        answer: "It will convert their crime into a noble act",
        explanation: "Casca believes Brutus's noble reputation will act like 'richest alchemy,' turning their offense into something that appears virtuous."
    },
    {
        id: 'mcq11',
        question: "What was the effect of the storm on Cassius in this scene?",
        options: ["it filled him with boldness to become master of his fate", "It subdued his confidence and made him restless", "It made him overconfident to carry out his conspiracy", "None of the above."],
        answer: "it filled him with boldness to become master of his fate",
        explanation: "Unlike Casca who is terrified, Cassius is energized by the storm, seeing it as a validation of his cause and feeling bold."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Casca: Are not you mov'd, when all the sway of earth
Shakes like a thing unfirm? O Cicero,
I have seen tempests, when the scolding winds
Have riv'd the knotty oaks...
But never till tonight, never till now,
Did I go through a tempest dropping fire.`,
      subquestions: `(i) Where is Casca at this time? In what state has he come there? To whom is he speaking? \n(ii) Give the meaning of: a) all the sway of earth / Shakes like a thing unfirm?, b) The ambitious ocean swell and rage and foam... \n(iii) What are the "scolding winds"? What did they do? \n(iv) What did Casca see which he had never seen before? What does he conclude from this? \n(v) What is the next day supposed to be? Why will it be a fatal day? Who had warned about it?`,
      answer: `(i) Casca is on a street in Rome during a violent thunderstorm. He is in a state of terror and agitation. He is speaking to Cicero.\n(ii) **all the sway of earth...:** The very foundation of the earth is shaking as if it is unstable. **The ambitious ocean swell...:** The powerful ocean rises up angrily, as if wanting to reach the storm clouds.\n(iii) The "scolding winds" are furious, punishing winds that were so powerful they split strong oak trees.\n(iv) Casca saw a storm that dropped fire from the sky. He concludes the gods are either at war or are enraged with the world and sending destruction.\n(v) The next day is the Ides of March (March 15th). It will be a fatal day because Caesar may be crowned, and the conspirators plan to assassinate him. A soothsayer had warned Caesar about this day.`
    },
    {
      extract: `Extract 2:
Casca: A common slave—you know him well by sight—
Held up his left hand, which did flame and burn
Like twenty torches join'd; and yet his hand,
Not sensible of fire, remain'd unscorch'd.`,
      subquestions: `(i) Narrate in your own words the "wonderful" sight seen by Casca. \n(ii) Describe three other unnatural sights Casca narrates. \n(iii) What does Casca believe about these events? How does Cassius use this belief? \n(iv) How does Casca's belief contrast with Cicero's? \n(v) What impact do these strange things have on Caesar and the audience?`,
      answer: `(i) Casca saw a slave hold up his left hand, which burned as brightly as twenty torches but was completely unharmed by the flames.\n(ii) Three other sights were: a lion walking peacefully near the Capitol; a hundred ghostly women who saw men on fire walking the streets; and an owl hooting in the marketplace at noon.\n(iii) Casca believes they are omens sent by the gods as a warning. Cassius manipulates this fear by interpreting them as warnings specifically against Caesar.\n(iv) Casca is superstitious and certain they are divine warnings. Cicero is rational and skeptical, suggesting people interpret events according to their own biases.\n(v) The events make Caesar fearful, which might cause him to stay home. For the audience, they build an atmosphere of suspense and impending doom.`
    },
    {
      extract: `Extract 3:
Cassius: I know where I will wear this dagger, then;
Cassius from bondage will deliver Cassius.
Therein, ye gods, you make the weak most strong;
Therein, ye gods, you tyrants do defeat...`,
      subquestions: `(i) What were people planning the next day that makes Cassius say this? \n(ii) Why did Cassius say earlier that Romans lack manly courage? \n(iii) Give the meaning of: a) Cassius from bondage will deliver Cassius, b) Therein, ye gods, you tyrants do defeat \n(iv) What does Cassius say about the "strength of the spirit"? \n(v) How does Cassius show he is a zealous lover of freedom?`,
      answer: `(i) The senators were planning to establish Caesar as king. This makes Cassius declare he would use his dagger on himself rather than live under a king.\n(ii) He said this because he believes Romans have become weak and submissive, "governed with our mothers' spirits," by tolerating Caesar's tyranny.\n(iii) **Cassius from bondage will deliver Cassius:** Cassius will free himself from the slavery of living under King Caesar by committing suicide. **Therein, ye gods, you tyrants do defeat:** By giving people the power to take their own lives, the gods have provided a way to defeat any tyrant.\n(iv) Cassius says the human spirit is so powerful that no physical prison can contain it.\n(v) He shows his love for freedom by declaring he would rather die by his own hand than live in "bondage" to a king.`
    },
    {
      extract: `Extract 4:
Cassius: And why should Caesar be a tyrant, then?
Poor man! I know he would not be a wolf
But that he sees the Romans are but sheep;
He were no lion, were not Romans hinds.`,
      subquestions: `(i) Who is "poor man"? On what condition would he not be a wolf or lion? \n(ii) Explain the line "Those that... weak straws". How is Caesar "vile" to Cassius? \n(iii) Does Cassius blame Caesar or Rome? Give three reasons for Caesar's greatness. \n(iv) What does Casca do as a sign of fellowship? What does he say he is willing to do? \n(v) What appointment must Cassius and Casca keep? Where and why?`,
      answer: `(i) Caesar is sarcastically called "poor man." He would not be a predatory "wolf" if Romans were not timid "sheep," and not a powerful "lion" if Romans were not cowardly "hinds" (deer).\n(ii) It means Caesar's great power (the "mighty fire") has been fueled by the weak Roman people (the "weak straws"). Caesar is "vile" to Cassius because he sees him as a tyrant who rose to power by exploiting Rome's weakness.\n(iii) Cassius blames the Roman people. His reasons for Caesar's greatness are: 1) The Romans are weak like "sheep." 2) The Romans are cowardly like "hinds." 3) Rome has become "trash" and "rubbish" to fuel Caesar's rise.\n(iv) Casca offers Cassius his hand. He says he is willing to join the cause and will go as far as anyone else.\n(v) They must meet the other conspirators at Pompey's porch to finalize their plans to assassinate Caesar.`
    },
    {
      extract: `Extract 5:
Cinna: O Cassius, if you could
But win the noble Brutus to our party—
Cassius: Be you content: Good Cinna, take this paper...`,
      subquestions: `(i) Where are Cinna and Cassius? Who else is with them? \n(ii) Why does Cinna say, "I am glad on't"? Why was he there? \n(iii) Who else described the "fearful night"? Mention two strange sights. \n(iv) Explain "stay'd for". Why does Cassius ask this question? \n(v) Why was Cinna eager for Brutus to join? What does Cassius instruct Cinna to do?`,
      answer: `(i) They are on a street in Rome during the storm. Casca is also with Cassius, having just joined the conspiracy.\n(ii) Cinna is glad because Cassius told him Casca has joined their plot. Cinna was out in the storm looking for Cassius.\n(iii) Casca also described the "fearful night." Two sights he saw were a slave's hand burning unharmed and a lion at the Capitol.\n(iv) "Stay'd for" means "waited for." Cassius asks because he knows the conspirators have a scheduled meeting and wants to confirm the others are waiting for him.\n(v) Cinna wants Brutus to join because his noble reputation would make their cause seem legitimate. Cassius instructs Cinna to plant the forged letters where Brutus will find them: on his magistrate's chair, through his window, and on his ancestor's statue.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Cassius: Now could I, Casca, name to thee a man
Most like this dreadful night,
That thunders, lightens, opens graves, and roars
As doth the lion in the Capitol;`,
        subquestions: `(i) Who is the man "Most like this dreadful night"? Why is he compared to a lion? \n(ii) How does Cassius describe the night? What has he done during it? \n(iii) How does Cassius interpret the unnatural occurrences? \n(iv) Give the meaning of: "In personal action, yet prodigious grown, / And fearful, as these strange eruptions are." \n(v) Give two incidents Cassius used earlier to show this man was not mightier.`,
        answer: `(i) The man is Julius Caesar. He is compared to the lion because both are unnatural and frightening presences in Rome; Caesar's king-like status is a terrible political omen.\n(ii) Cassius describes it as a "dreadful night." He says he has walked about unprotected, baring his chest to the storm.\n(iii) Cassius interprets them as divine warnings about a "monstrous state," claiming they are signs of anger against Caesar's overgrown power.\n(iv) This means that Caesar, in his own physical abilities, is no stronger than they are, yet he has grown monstrously powerful and as frightening as the violent storms.\n(v) In Act I, Scene 2, Cassius told Brutus of two incidents: 1) When he had to save Caesar from drowning in the Tiber. 2) When Caesar had a fever in Spain and acted like a "sick girl."`
    },
    {
        extract: `Extract 2:
Cassius: Be you content: Good Cinna, take this paper,
And look you lay it in the praetor's chair,
Where Brutus may but find it; and throw this
In at his window; set this up with wax
Upon old Brutus' statue...`,
        subquestions: `(i) To whom does Cassius speak? Why does he say, "Be you content"? \n(ii) What paper is referred to? What impact would it have? \n(iii) Who is 'old Brutus'? Why is he famous? \n(iv) Why should Cinna go to Pompey's porch? Who might be there? \n(v) Why is Brutus important to the conspiracy?`,
        answer: `(i) Cassius speaks to Cinna. He says, "Be you content" to reassure Cinna that the plan to recruit the "noble Brutus" is already in motion.\n(ii) The paper refers to the forged letters Cassius wrote to seem as if they are from concerned citizens. They are designed to manipulate Brutus by making him think the public wants him to act against Caesar.\n(iii) "Old Brutus" is Lucius Junius Brutus, an ancestor of Marcus Brutus, famous for driving the last king from Rome and establishing the Republic.\n(iv) Cinna should go to Pompey's porch because it is the secret meeting place for the conspirators. Cassius, Casca, Decius Brutus, and Trebonius are likely to be there.\n(v) Brutus is important because he is deeply respected by the people. His involvement would act like "richest alchemy," making their assassination plot appear virtuous and noble.`
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


