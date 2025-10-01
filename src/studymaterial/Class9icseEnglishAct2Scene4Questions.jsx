import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 2, Scene 4 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act II, Scene 4",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "On which errand does Portia send Lucius?",
        options: ["To see if Calpurnia is there with Caesar", "To see how his master Brutus is.", "To observe what suitors are pressing about Caesar.", "Both (b) and (c)."],
        answer: "Both (b) and (c).",
        explanation: "Portia is frantic and gives Lucius a vague errand to check on Brutus and see who is near Caesar at the Senate."
    },
    {
        id: 'mcq2',
        question: "In what condition is Portia in this scene of the play?",
        options: ["Scared and angry", "Nervous and anxious", "Excited and fearless", "None of the above"],
        answer: "Nervous and anxious",
        explanation: "Portia is extremely agitated and anxious because she knows the secret of the conspiracy and fears for her husband's safety."
    },
    {
        id: 'mcq3',
        question: "How does Portia react when she hears a noise coming from the Capitol?",
        options: ["Cries out in terror", "Goes inside her house", "Portia pretends that she has not heard the noise.", "None of the above"],
        answer: "Cries out in terror",
        explanation: "Her anxiety is so high that she imagines hearing a noise like a fight ('a bustling rumor like a fray') and cries out in fear."
    },
    {
        id: 'mcq4',
        question: "Why does Portia wish to have a mountain placed between her heart and her tongue?",
        options: ["She cannot cry on hearing the noise", "She cannot shriek out of fear", "She cannot reveal the secret", "She cannot shout at her servant."],
        answer: "She cannot reveal the secret",
        explanation: "She is desperate for self-control, wishing for an impassable barrier to prevent her from accidentally speaking the terrible secret she carries."
    },
    {
        id: 'mcq5',
        question: "Who says, \"I have a man's mind, but a woman's might\"?",
        options: ["Brutus", "Portia", "Caesar", "Lucius"],
        answer: "Portia",
        explanation: "Portia says this, lamenting that while she has the intelligence to understand the plot, she fears she only has a woman's emotional endurance to handle the stress."
    },
    {
        id: 'mcq6',
        question: "What does Portia feel is her weakness?",
        options: ["To easily get excited", "To feel stressed at a small difficulty", "To keep Brutus' secret to herself", "None of the above"],
        answer: "To keep Brutus' secret to herself",
        explanation: "She finds the burden of keeping such a dangerous secret incredibly difficult, which she perceives as a weakness."
    },
    {
        id: 'mcq7',
        question: "What does the Soothsayer want to tell Caesar by saying \"befriend himself\"?",
        options: ["Be true to himself", "Be his own friend", "Take care of himself", "Behave friendly with all"],
        answer: "Take care of himself",
        explanation: "It's a cryptic way of warning Caesar that he is in danger and needs to protect himself from harm."
    },
    {
        id: 'mcq8',
        question: "What is the Soothsayer's fear about himself?",
        options: ["He would be crushed by the crowd that follows Caesar", "He would not be able to present his petition to Caesar.", "He would not be able to see Caesar in the crowd", "None of the above."],
        answer: "He would be crushed by the crowd that follows Caesar",
        explanation: "He tells Portia he is a 'feeble man' and fears the dense crowd ('throng') will crush him before he can get close enough to speak to Caesar."
    },
    {
        id: 'mcq9',
        question: "What is meant by \"throng that follows Caesar at the heels\"?",
        options: ["His robe", "The crowd", "The conspirators", "The Senators"],
        answer: "The crowd",
        explanation: "The 'throng' refers to the large crowd of senators, officials, and citizens following Caesar through the streets."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Portia: I prithee, boy, run to the Senate House;
Stay not to answer me, but get thee gone:
Why dost thou stay?
Lucius: To know my errand, madam.`,
      subquestions: `(i) Where does this scene take place? Give two examples to show that Portia is agitated. \n(ii) What is the errand on which Portia is sending Lucius? What has motivated her? \n(iii) Whom does she meet a little later, which increases her tension? \n(iv) Give two arguments Portia put forward earlier to Brutus to know his secrets. \n(v) What noise does Portia claim to hear? Does Lucius hear it? What can you conclude?`,
      answer: `(i) The scene is in a street in front of Brutus's house. Portia's agitation is clear when she tells Lucius to run without explanation, then immediately questions him for not leaving.\n(ii) She invents an errand for Lucius to go to the Senate, see if Brutus looks well, and observe who is near Caesar. She is motivated by her terrible anxiety over the conspiracy.\n(iii) She meets the Soothsayer, whose ominous statement that he intends to warn Caesar increases her tension.\n(iv) 1) She reminded him of their marriage vows, stating she was his wife, not his harlot. 2) She proved her strength by showing him a voluntary wound she had given herself in the thigh.\n(v) Portia claims to hear a 'bustling rumor like a fray' (a fight). Lucius hears nothing. We can conclude her fear is so intense she is imagining the sounds of the assassination.`
    },
    {
      extract: `Extract 2:
Portia: I would have had thee there, and here again,
Ere I can tell thee what thou shouldst do there.
(Aside) O constancy, be strong upon my side,
Set a huge mountain 'tween my heart and tongue!`,
      subquestions: `(i) Where is Portia sending Lucius? What does she tell him to find out? \n(ii) Why is Portia externally distracted and internally anxious? \n(iii) Give the meaning of: "Set a huge mountain 'tween my heart and tongue!" \n(iv) State in your own words what Portia means by "a man's mind but a woman's might." \n(v) In what way is a sense of urgency indicated in the first two lines?`,
      answer: `(i) She is sending Lucius to the Capitol. She tells him to check if Brutus looks well and to observe Caesar and the people around him.\n(ii) She is externally distracted because she is internally overwhelmed with anxiety about the secret of the conspiracy and her husband's safety.\n(iii) It is a desperate plea for self-control, wishing for a barrier to be placed between what she knows in her heart and her ability to speak with her tongue.\n(iv) She means she has the intelligence of a man to understand the plot, but fears she only has the emotional endurance of a woman to cope with the stress.\n(v) The urgency is shown in her impossible demand that Lucius should have already gone and returned before she has even told him his task, revealing her frantic state of mind.`
    },
    {
      extract: `Extract 3:
Soothsayer: None that I know will be, much that I fear may chance.
Good morrow to you. Here the street is narrow;
The throng that follows Caesar at the heels,
Of senators, of praetors, common suitors,
Will crowd a feeble man almost to death...`,
      subquestions: `(i) What role does the soothsayer play here? What effect does his presence have? \n(ii) To whom does the soothsayer speak? Explain the first sentence. \n(iii) What is meant by "The throng"? What would the throng witness shortly? \n(iv) What does the soothsayer want to tell Caesar? Why does he want a "place more void"? \n(v) Who else is waiting to communicate with Caesar? What does he want to tell him?`,
      answer: `(i) The Soothsayer's role is to heighten the dramatic tension. His presence increases Portia's panic and creates suspense for the audience, making them wonder if the plot will be foiled.\n(ii) He is addressing Portia. The first sentence is his reply to her question about harm to Caesar, meaning: "I have no certain knowledge of a plot, but I have a strong feeling that something bad might happen."\n(iii) "The throng" is the large crowd following Caesar. This throng will witness the public assassination of Julius Caesar.\n(iv) He wants to warn Caesar "to befriend himself" (to be careful). He wants a "place more void" (a less crowded area) because he is feeble and fears being crushed by the crowd.\n(v) The other person waiting is Artemidorus. He has a letter that he wants to give Caesar, which contains a direct warning naming all the conspirators.`
    }
  ],
  testAndEvaluation: [
    // No Test and Evaluation questions were provided for this scene.
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

