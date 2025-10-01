import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 5, Scene 4 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act V, Scene 4",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "Who refers to himself as \"A foe to tyrants\" in this scene?",
        options: ["Brutus", "Cato", "Lucilius", "Antony"],
        answer: "Cato",
        explanation: "During the battle, Young Cato shouts his name and confirms his loyalty to Rome before he is killed."
    },
    {
        id: 'mcq2',
        question: "Young Cato died following which of the following ideals proclaimed by his father?",
        options: ["Stoicism", "Republicanism", "Epicureanism", "None of the above"],
        answer: "Stoicism",
        explanation: "Young Cato's death reminds the audience of his famous father, who lived and died by the ideals of Stoicism, which included showing courage in the face of suffering."
    },
    {
        id: 'mcq3',
        question: "Who among the following impersonates Brutus to give him (Brutus) time to flee?",
        options: ["Cato", "Cassius", "Lucilius", "None of the above"],
        answer: "Lucilius",
        explanation: "The young man Lucilius impersonates Brutus in an effort to give Brutus time to re-group or to flee from the enemy."
    },
    {
        id: 'mcq4',
        question: "Which theme of the play is reflected by Lucilius' act of risking his life by pretending as Brutus?",
        options: ["Deception", "Sin and Suffering", "Wrong Moral Choices", "Loyalty"],
        answer: "Loyalty",
        explanation: "This scene is significant for highlighting the theme of loyalty. Lucilius risks his life by pretending to be Brutus, showing his devotion to his master."
    },
    {
        id: 'mcq5',
        question: "Lucilius says, \"The gods defend him from so great a shame.\" What is the shame Lucilius is referring to?",
        options: ["Being taken as a prisoner", "Being killed by the enemy", "Being defeated by the enemy", "Being defeated by the tyrants"],
        answer: "Being taken as a prisoner",
        explanation: "Lucilius, pretending to be Brutus, tells Antony's soldiers that the real Brutus is alive and will never be taken prisoner. This refers to the great shame a noble Roman would feel if captured and paraded in chains."
    },
    {
        id: 'mcq6',
        question: "Whom does Antony describe as \"a prize no less in worth\"?",
        options: ["Brutus", "Cassius", "Lucilius", "Cato"],
        answer: "Lucilius",
        explanation: "When Antony discovers the deception, he recognizes the value of having such loyal followers and orders that Lucilius be protected, calling him \"a prize no less in worth\" than Brutus."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Lucilius: O young and noble Cato, art thou down?
Why, now thou diest as bravely as Titinius,
And mayst be honour'd, being Cato's son.
First Soldier: Yield, or thou diest.
Lucilius: Only I yield to die:
There is so much that thou wilt kill me straight;
[Offering money]
Kill Brutus, and be honour'd in his death.`,
      subquestions: `(i) Who is young Cato? What reference was made in the play earlier about his father?\n(ii) In what respect, the death of young Cato is similar to that of Titinius?\n(iii) Why would the enemy soldiers not wish to kill Lucilius? Why would Lucilius want to be killed? How does Lucilius escape death?\n(iv) What is meant by "Only I yield to die: There is so much that thou wilt kill me straight"?\n(v) Who discovers that Lucilius was pretending to be Brutus? What does that person think of Lucilius?`,
      answer: `(i) Young Cato is Brutus's brother-in-law (Portia's brother). Earlier in the play, reference was made to his father as the famous Cato who lived and died by the ideals of Stoicism.\n(ii) The death of young Cato is similar to that of Titinius in that both men died bravely in battle, loyal to their cause and their commanders.\n(iii) The enemy soldiers would not wish to kill Lucilius because they believe he is Brutus, and capturing the main leader of the conspiracy alive is a great prize. Lucilius wants to be killed to protect the real Brutus. He escapes death because Antony recognizes him and, respecting his loyalty, orders his soldiers to keep him safe.\n(iv) This means "I am only surrendering so that you will kill me." Lucilius is offering the soldier money as a great reward for the honor of killing the man they believe to be Brutus.\n(v) Antony discovers that Lucilius was pretending. Antony thinks highly of Lucilius, recognizing his loyalty as something valuable. He orders him to be treated well and says he would "rather have such men my friends than enemies".`
    },
    {
      extract: `Extract 2:
Lucilius: Safe, Antony; Brutus is safe enough:
I dare assure thee that no enemy
Shall ever take alive the noble Brutus:
The gods defend him from so great a shame!
When you do find him, or alive or dead,
He will be found like Brutus, like himself.`,
      subquestions: `(i) In what sense is Brutus safe enough? How are the second and the third lines of the extract prophetic, i.e., indicative of what is going to take place?\n(ii) Who has just been killed when Lucilius is captured? Who has captured Lucilius? What have they done with him?\n(iii) "The gods defend him from so great a shame!" What was considered shameful according to the Roman custom?\n(iv) What is happening on the battlefield? Who is emerging victorious?\n(v) There seems to be two objectives in Lucilius' impersonating Brutus. What do you think are these objectives?`,
      answer: `(i) Brutus is "safe" in the sense that he is still free and has not been captured. The lines are prophetic because they predict Brutus's fate: he will indeed never be taken alive by the enemy, as he chooses to take his own life in the next scene to avoid such a shame.\n(ii) Young Cato has just been killed. Antony's soldiers have captured Lucilius, thinking he is Brutus. They have brought him before Antony as a "noble prisoner".\n(iii) According to Roman custom, it was considered a great shame for a noble leader to be captured and led in chains through the streets of Rome as part of an enemy's victory parade.\n(iv) The battle is turning against the conspirators' forces. Fate is closing in on Brutus, and his forces are facing final destruction. Antony and Octavius are emerging victorious.\n(v) The two objectives are:\n1. To draw the enemy's attention to himself, giving the real Brutus time to regroup or escape.\n2. To ensure that if he is killed, his death will be honorable, as the enemy will believe they have killed the great Brutus.`
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

