import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 4, Scene 2 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act IV, Scene 2",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "Who is referred to as Pindarus' master?",
        options: ["Brutus", "Cassius", "Antony", "Octavius"],
        answer: "Cassius",
        explanation: "Pindarus arrives at Brutus's tent from Cassius's camp, representing Cassius and bringing greetings from him."
    },
    {
        id: 'mcq2',
        question: "According to Brutus, what does a friend begin to do when his love begins to decline and diminish?",
        options: ["He tries to part ways", "He uses corrupt means", "He uses forced formalities", "He does not bother for anything"],
        answer: "He uses forced formalities",
        explanation: "This refers to the line in the play, \"When love begins to sicken and decay, It useth an enforced ceremony.\" Brutus observes that a cooling friendship leads to artificial politeness."
    },
    {
        id: 'mcq3',
        question: "With whom has Brutus compared an insincere man?",
        options: ["Worthless horse", "Worthless runner", "Worthless friend", "None of the above"],
        answer: "Worthless horse",
        explanation: "This question refers to the lines in the play where Brutus compares \"hollow men\" to \"horses hot at hand\" that make a big show but fail when put to the test."
    },
    {
        id: 'mcq4',
        question: "Which allegation is made by Cassius against Brutus?",
        options: ["He has forgotten him", "He has wronged him", "He has betrayed him", "He has unnecessarily blamed him"],
        answer: "He has wronged him",
        explanation: "When Cassius enters, his very first words to Brutus are a \"blunt reproach\": \"Most noble brother, you have done me wrong.\""
    },
    {
        id: 'mcq5',
        question: "What reply does Brutus give for Cassius' accusation against him?",
        options: ["He has returned what Cassius gave him", "He cannot do any wrong with his relatives", "He cannot do any wrong even to his enemies.", "None of the above"],
        answer: "He cannot do any wrong even to his enemies.",
        explanation: "Brutus denies the allegation that he has wronged Cassius, which sets the stage for their private quarrel."
    },
    {
        id: 'mcq6',
        question: "According to Cassius, what hides the wrong done by Brutus?",
        options: ["Dignified appearance", "His fear", "His outer personality", "None of the above"],
        answer: "Dignified appearance",
        explanation: "This question refers to the line in the play, \"Brutus, this sober form of yours hides wrongs.\" Cassius is accusing Brutus's calm and dignified appearance of hiding his unfair actions."
    },
    {
        id: 'mcq7',
        question: "Why does Brutus tell Cassius to discuss his grievances in private?",
        options: ["Their dispute should not reach their wives' ears.", "The morale of their armies does not diminish.", "Their dispute is no dispute at all.", "None of the above."],
        answer: "The morale of their armies does not diminish.",
        explanation: "Brutus urges Cassius to keep calm and not argue in front of their soldiers so that the morale of their armies is not affected."
    },
    {
        id: 'mcq8',
        question: "What change is noticed in Brutus' behaviour from the earlier scenes?",
        options: ["He has become more relaxed and organised", "He has became drastically serious", "He has became impatient and suspicious", "None of the above"],
        answer: "He has became impatient and suspicious",
        explanation: "A change is noted in Brutus's behavior; though usually calm, he is now becoming impatient and suspicious, likely due to the considerable strain he is under."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Lucilius: He is at hand: and Pindarus is come
To do you salutation from his master.
(Pindarus gives a letter to Brutus)
Brutus: (Reading the letter) He greets me well. Your master, Pindarus,
In his own change, or by ill officers,
Hath given me some worthy cause to wish
Things done undone. But, if he be at hand,
I shall be satisfied.`,
      subquestions: `(i) Who is Pindarus? Name his master. What message does he convey to Brutus?\n(ii) Give two reasons to explain why the master of Pindarus did some things or did not do other things?\n(iii) Render the following lines in your own words: "In his own change, or by ill officers, / Hath given me some worthy cause to wish / Things done undone."\n(iv) What does Pindarus say about his master to Brutus after the extract? How did the master receive Lucilius?\n(v) Where does this scene take place? Why are Brutus and Cassius here?`,
      answer: `(i) Pindarus has just arrived from Cassius's camp. His master is Cassius. He conveys a salutation (a greeting) from his master to Brutus.\n(ii) The extract suggests two possible reasons for Cassius's actions that have upset Brutus: either Cassius himself has changed ("In his own change"), or he has been influenced by corrupt advisors ("by ill officers").\n(iii) This means: "Either because his own feelings have changed, or because of bad advice from his subordinates, your master has done something that has given me good reason to wish certain actions had never happened."\n(iv) The workbook text does not state what Pindarus says after the extract. It does, however, state that Lucilius, another of Brutus's men, reported that Cassius was not as friendly as he used to be.\n(v) This scene takes place in Sardis, in front of Brutus's tent. Brutus and Cassius are there because their armies are joining together on their way to meet the armies of Antony and Octavius.`
    },
    {
      extract: `Extract 2:
Brutus: Thou hast describ'd
A hot friend cooling; ever note, Lucilius,
When love begins to sicken and decay,
It useth an enforced ceremony.
There are no tricks in plain and simple faith:
But hollow men, like horses hot at hand,
Make gallant show and promise of their mettle;
But when they should endure the bloody spur,
They fall their crests, and, like deceitful jades,
Sink in the trial. Comes his army on?`,
      subquestions: `(i) Who has just described whom? What is meant by "A hot friend cooling"?\n(ii) When love begins to decline, what happens? What is said in the extract about sincere friendship?\n(iii) Explain how men who are insincere in their friendship may be compared to a horse.\n(iv) Whom is Brutus referring to as an insincere friend? What has happened to their relationship now? Why?\n(v) Compare the relationship between Brutus and Cassius to that between Antony and Octavius.`,
      answer: `(i) Lucilius has just described Cassius's behavior to Brutus. "A hot friend cooling" means a once-warm and affectionate friendship that is now becoming distant and less friendly.\n(ii) When love (friendship) begins to decline, it "useth an enforced ceremony," meaning people become artificially formal and polite. The extract says that sincere friendship ("plain and simple faith") has "no tricks" in it.\n(iii) Insincere ("hollow") men are compared to spirited horses ("horses hot at hand") that look impressive and energetic at the start but fail when they face a real challenge ("endure the bloody spur"), just like bad horses ("deceitful jades") that collapse during a race.\n(iv) Brutus is referring to Cassius as an insincere friend. A misunderstanding has taken place between them, causing their relationship to become less friendly. The scene serves as a preparation for the "Quarrel Scene" where the reasons will be fully explored.\n(v) Both relationships are showing signs of tension. In the previous scene, a rift began to open between Antony and Octavius over the value of Lepidus. This scene parallels that situation by showing a bitter feud is also developing between Brutus and Cassius.`
    },
    {
      extract: `Extract 3:
Cassius: Brutus, this sober form of yours hides wrongs;
And when you do them—
Brutus: Cassius, be content,
Speak your griefs softly; I do know you well.
Before the eyes of both our armies here,
Which should perceive nothing but love from us,
Let us not wrangle: Bid them move away;
Then in my tent, Cassius, enlarge your griefs,
And I will give you audience.`,
      subquestions: `(i) Which "sober form" of Brutus is referred to by Cassius? What are the wrongs? How does the sober form hide wrongs?\n(ii) What does Brutus say before this extract about the wrongs done by him? How is it an irony?\n(iii) Which two armies are referred to? Why should they perceive nothing but love?\n(iv) What is meant by "enlarge your griefs, / And I will give you audience"? Why does the speaker want to give audience to Cassius in the privacy of his tent?\n(v) How does this extract compare the fortunes of Brutus and Cassius with that of Antony and Octavius in the earlier scene?`,
      answer: `(i) The "sober form" refers to Brutus's calm and dignified appearance. The "wrongs" are what Cassius believes Brutus has done to him, which will be detailed in the next scene. Cassius is implying that Brutus's calm exterior is hiding his unfair actions.\n(ii) Just before this, Brutus denies Cassius's allegation that he has wronged him. The workbook does not specify the irony in this statement.\n(iii) The armies of Brutus and Cassius are referred to. They should perceive nothing but love from their generals because seeing their leaders quarrel would diminish the morale of the soldiers.\n(iv) This means "explain your complaints in full, and I will listen to you." Brutus wants to do this in the privacy of his tent so their soldiers will not see them arguing, which could harm the armies' morale.\n(v) This extract highlights the declining fortunes of Brutus and Cassius by showing the bitter feud developing between them. This parallels the earlier scene, which showed the beginnings of a rift between Antony and Octavius, suggesting that all political groupings are threatened by internal tensions.`
    }
  ],
  testAndEvaluation: []
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


