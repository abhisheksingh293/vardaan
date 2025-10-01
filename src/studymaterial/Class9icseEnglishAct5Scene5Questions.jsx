import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 5, Scene 5 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act V, Scene 5",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "How did Clitus, Dardanius and Volumnius refuse to oblige Brutus?",
        options: ["To help Brutus flee from there", "To change sides with enemy", "To help Brutus end his life", "None of the above"],
        answer: "To help Brutus end his life",
        explanation: "Brutus believes he is doomed and seeks someone to help him commit suicide, but Clitus, Dardanius, and Volumnius all refuse to do so."
    },
    {
        id: 'mcq2',
        question: "Who among the following was NOT among the \"poor remains of friends\" as referred to by Brutus?",
        options: ["Dardanius", "Clitus", "Statilius", "Strato"],
        answer: "Statilius",
        explanation: "In the play, Clitus reports that Statilius has either been captured or killed. The \"poor remains of friends\" resting with Brutus are Clitus, Dardanius, Volumnius, and Strato."
    },
    {
        id: 'mcq3',
        question: "Who is referred to by Clitus as \"noble vessel full of grief\"?",
        options: ["Brutus", "Cassius", "Antony", "Lepidus"],
        answer: "Brutus",
        explanation: "This line from the play is Clitus's sad observation of Brutus, who is so overcome with grief that it seems to be running over, even at his eyes."
    },
    {
        id: 'mcq4',
        question: "To whom does Brutus refer to as his school fellow?",
        options: ["Strato", "Volumnius", "Dardanius", "Cato"],
        answer: "Volumnius",
        explanation: "This question refers to the line in the play, \"Thou know’st that we two went to school together.\" Brutus uses this old friendship to ask Volumnius to help him die."
    },
    {
        id: 'mcq5',
        question: "Brutus says that he would attain greater glory than the \"vile conquest\" of whom?",
        options: ["Octavius and Antony", "Caesar and Pompey", "Old Cato and his son", "None of the above"],
        answer: "Octavius and Antony",
        explanation: "Brutus takes solace in his moral victory, believing he will have more glory in defeat than Octavius and Antony will gain from their \"vile conquest\"."
    },
    {
        id: 'mcq6',
        question: "Who says, \"I kill'd not thee with half so good a will\"?",
        options: ["Cassius", "Casca", "Cicero", "Brutus"],
        answer: "Brutus",
        explanation: "These are part of Brutus's last words, which he speaks as he falls on his sword."
    },
    {
        id: 'mcq7',
        question: "What does Octavius say he would do with all those who were serving Brutus?",
        options: ["Kill them", "Make them prisoner of war", "Make them his slaves", "Take them in his service"],
        answer: "Take them in his service",
        explanation: "Showing generosity as a victor, Octavius offers service to all who have served Brutus."
    },
    {
        id: 'mcq8',
        question: "Whom does Octavius take to serve him into his household?",
        options: ["Lucilius", "Strato", "Messala", "None of the above"],
        answer: "Strato",
        explanation: "After the battle, Octavius takes Strato into his household on the recommendation of Messala."
    },
    {
        id: 'mcq9',
        question: "What tribute does Antony pay to Brutus?",
        options: ["As a true gentleman", "As a true Roman", "As the noblest Roman", "As an honourable man."],
        answer: "As the noblest Roman",
        explanation: "After Brutus is dead, Antony pays a final tribute to him by referring to him as \"the noblest Roman of them all\"."
    },
    {
        id: 'mcq10',
        question: "According to Antony, how would Nature describe Brutus?",
        options: ["Noble man", "Perfect man", "Gentleman", "True Roman"],
        answer: "Perfect man",
        explanation: "Antony's tribute ends with the ultimate praise, saying that Nature could stand up and declare about Brutus, \"This was a man!\", meaning he was a perfect man in every way."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Brutus: Nay, I am sure it is, Volumnius.
Thou seest the world, Volumnius, how it goes;
Our enemies have beat us to the pit:
It is more worthy to leap in ourselves,
Than tarry till they push us.`,
      subquestions: `(i) Who is Volumnius? Why does Brutus show intimacy to him? What favour does Brutus expect from him?\n(ii) The ghost of Caesar appeared to Brutus twice. What did the ghost tell Brutus in Sardis? What does it indicate here in Philippi?\n(iii) Name two of Brutus' friends who have already refused to kill him. What does Volumnius say for not agreeing to carry out Brutus' wish?\n(iv) Give the meaning of "Thou seest the world, Volumnius, how it goes; Our enemies have beat us to the pit."\n(v) Briefly state the misfortunes enumerated by Brutus to Volumnius.`,
      answer: `(i) Volumnius is one of the last of Brutus's soldiers remaining with him on the battlefield. Brutus shows intimacy by reminding Volumnius that they went to school together. The favor Brutus expects is for Volumnius to hold his sword so that he can kill himself.\n(ii) In Sardis, the ghost told Brutus that he would see him at Philippi. The ghost's second appearance here at Philippi indicates to Brutus that his "hour is come" and that he is doomed.\n(iii) Two friends who have already refused are Clitus and Dardanius. Volumnius says, "That’s not an office for a friend, my lord," indicating that helping his friend commit suicide is not something he can do.\n(iv) This means: "You can see the situation, Volumnius, and how things have turned out; our enemies have defeated us and cornered us like animals in a hunting pit."\n(v) The workbook does not specify what misfortunes Brutus enumerates to Volumnius in this particular conversation. However, throughout the last two acts, Brutus has suffered the death of his wife, the defeat of his friend Cassius, and now the defeat of his own army.`
    },
    {
      extract: `Extract 2:
Brutus: Countrymen,
My heart doth joy that yet in all my life,
I found no man but he was true to me.
I shall have glory by this losing day,
More than Octavius and Mark Antony
By this vile conquest shall attain unto.`,
      subquestions: `(i) Where and when is Brutus speaking? About whom is he speaking and to whom?\n(ii) What recent events have prompted Brutus to say, "I found no man but he was true to me"?\n(iii) Would you include Cassius among those who were "true" to Brutus? Give your reasons briefly.\n(iv) Who finally serves Brutus before Octavius and Mark Antony arrive on the scene?\n(v) Do the speeches of Antony and Octavius which end the play prove Brutus' words to be true as quoted in the last three lines of the above extract?`,
      answer: `(i) Brutus is speaking on the battlefield at Philippi, just before he takes his own life. He is speaking about his followers. He is speaking to his last remaining friends, Volumnius, Clitus, Dardanius, and Strato.\n(ii) The recent events are the refusals of his friends Clitus, Dardanius, and Volumnius to help him commit suicide out of love and loyalty. Lucilius also showed his loyalty by impersonating Brutus to protect him.\n(iii) Yes. While Cassius used Brutus at the beginning of the play, he later developed a genuine friendship with him. He abided by Brutus's decisions even when he disagreed and was loyal to their cause until his death.\n(iv) Strato finally agrees to serve Brutus by holding the sword upon which Brutus runs.\n(v) Yes, in a way they do. Antony's final speech praises Brutus as "the noblest Roman of them all," admitting his motives were for the "common good to all". This tribute grants Brutus a moral victory and "glory by this losing day" that transcends the military victory of his enemies.`
    },
    {
      extract: `Extract 3:
Antony: This was the noblest Roman of them all,
All the conspirators, save only he,
Did that they did in envy of great Caesar;
He only, in a general honest thought,
And common good to all, made one of them.
His life was gentle, and the elements
So mix'd in him, that Nature might stand up
And say to all the world, "This was a man!"`,
      subquestions: `(i) When does Antony speak these words? Who was "the noblest Roman of them all"? Which people are included in the word, "all"?\n(ii) Give the meaning of: "He only, in a general honest thought, / And common good to all, made one of them."\n(iii) By referring to the Elizabethan way of thinking, state in what way was the "noblest Roman" a perfect human being.\n(iv) What does Octavius order with regard to the funeral of the noblest Roman? Does he deserve such a burial? Give a reason to justify your answer.\n(v) Briefly state how the play propagates the idea that disloyalty and conspiracy do not succeed.`,
      answer: `(i) Antony speaks these words at the very end of the play, after the battle is over and he is standing over the dead body of Brutus. "The noblest Roman of them all" is Brutus. The word "all" refers to all the conspirators who killed Caesar.\n(ii) This means: Brutus was the only one of the conspirators who acted based on an honestly held belief and for the good of the public.\n(iii) The workbook does not contain this specific information about Elizabethan thinking. However, Antony's final line, "This was a man!", implies that Brutus had a perfectly balanced mixture of the "elements" (earth, air, fire, water), which in Elizabethan belief would make him a perfect and complete human being.\n(iv) Octavius orders that Brutus's body shall lie in state in his tent for the night with all the respects and rites of an honorable burial. Yes, he deserves such a burial because, as even his enemy Antony admits, his motives for killing Caesar were honorable and for the good of Rome, not for personal gain.\n(v) The play shows that the conspiracy, which began with the disloyal act of murdering Caesar, ultimately fails. It plunges Rome into a ruinous civil war and results in the deaths of all the conspirators, proving that their actions did not achieve their desired outcome.`
    }
  ],
  testAndEvaluation: [
      {
      extract: `Extract 1:
Strato: Give me your hand first: fare you well, my lord.
Brutus: Farewell, good Strato.—Caesar, now be still;
I kill'd not thee with half so good a will. [He runs on his sword and dies]`,
      subquestions: `(i) Referring to the ghost of Caesar and the battles, state the significance of the words, "Caesar, now be still."\n(ii) Give the meaning of "I kill'd not thee with half so good a will." For whom does Brutus use these words?\n(iii) How does Brutus die? Who all reach the site immediately after Brutus' death?\n(iv) Caesar triumphs over the death of Brutus. Comment how the play ends with this message.\n(v) What sort of burial will Brutus get? What does this show about Brutus' status in the society?`,
      answer: `(i) The significance is that Brutus believes his own death will finally appease the vengeful spirit of Caesar. He recognizes that Caesar's ghost has been a powerful force throughout the battles, and now that Brutus, the main assassin, is dead, Caesar's spirit can finally be at peace.\n(ii) This means: "I did not kill you (Caesar) with half the willingness that I now kill myself." Brutus is using these words for Caesar.\n(iii) Brutus dies by running on his own sword, which Strato holds for him. Immediately after his death, Octavius, Antony, Messala, Lucilius, and their army arrive on the scene.\n(iv) The play ends with this message because Brutus's final words acknowledge Caesar's ultimate victory. The spirit of Caesar has been successful in getting its revenge. Furthermore, the new order in Rome will be led by Caesar's heir, Octavius, ensuring that "Caesarism" has triumphed.\n(v) Brutus will be given an honorable burial with all the respect due to a noble soldier; his body will lie in state in Octavius's tent for the night. This shows that even in death and defeat, his high status as a noble and respected Roman is recognized by his enemies.`
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

