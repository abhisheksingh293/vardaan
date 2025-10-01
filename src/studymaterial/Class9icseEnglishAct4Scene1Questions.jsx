import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 4, Scene 1 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act IV, Scene 1",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "The raging passion of the mob in the earlier scene is replaced by which of the following in this scene?",
        options: ["Hot-headedness of the conspirators", "Cold-hearted ruthlessness of the anarchists", "Peace and calm on the battlefield", "None of the above"],
        answer: "Cold-hearted ruthlessness of the anarchists",
        explanation: "The scene opens with a mood that is a direct contrast to the previous ones; the \"raging passion of the mob is now replaced by the cold-hearted ruthlessness of those who have profited by anarchy.\""
    },
    {
        id: 'mcq2',
        question: "Who among the following is NOT a part of the Second Triumvirate?",
        options: ["Antony", "Brutus", "Octavius", "Lepidus"],
        answer: "Brutus",
        explanation: "The Second Triumvirate was the name used by historians to refer to the joint rule of Antony, Octavius, and Lepidus. Brutus was their enemy."
    },
    {
        id: 'mcq3',
        question: "What does the list that Antony and Octavius are reading together contain?",
        options: ["The names of Brutus' friends", "The names of Caesar's friends", "The names of people to be executed", "None of the above"],
        answer: "The names of people to be executed",
        explanation: "Antony, Octavius, and Lepidus are reading a list of those condemned to die as they purge Rome of their enemies."
    },
    {
        id: 'mcq4',
        question: "\"Your brother too must die.\" Whose brother is referred to?",
        options: ["Antony's", "Lepidus'", "Octavius'", "Brutus'"],
        answer: "Lepidus'",
        explanation: "This line is spoken by Octavius to Lepidus. The scene shows the Triumvirs \"trading their own relations,\" and Lepidus consents to his brother's death."
    },
    {
        id: 'mcq5',
        question: "On what condition does Lepidus agree that his brother should be executed?",
        options: ["Mark Antony's sister's son should also be executed", "All the leaders of the coup should be executed", "All of Brutus' friends should be executed", "None of the above"],
        answer: "Mark Antony's sister's son should also be executed",
        explanation: "After agreeing to his brother's death, Lepidus makes the condition that Publius, who is Mark Antony's nephew, must also not live. Antony agrees to have his nephew killed."
    },
    {
        id: 'mcq6',
        question: "What does Antony ask Lepidus to do?",
        options: ["To execute all those who supported the coup", "To arrest all those who supported the coup", "To get Caesar's sword from his house", "To get Caesar's will from his house"],
        answer: "To get Caesar's will from his house",
        explanation: "After agreeing to the proscriptions, Antony sends Lepidus to Caesar's house to \"fetch the will hither.\""
    },
    {
        id: 'mcq7',
        question: "What does Antony intend to do after getting Caesar's will?",
        options: ["Change Caesar's will to fund the civil war", "Read it publicly", "Cut down the amount of money bequeathed by Caesar", "Replace it with a fake will"],
        answer: "Cut down the amount of money bequeathed by Caesar",
        explanation: "Antony sends for the will so they can determine \"how to cut down the payment of some of the monies bequeathed by Caesar.\" This shows he is now cheating the mob he had previously won over."
    },
    {
        id: 'mcq8',
        question: "To whom does Antony refer to as \"unmeritable man\"?",
        options: ["Lepidus", "Cassius", "Octavius", "Brutus"],
        answer: "Lepidus",
        explanation: "As soon as Lepidus leaves, Antony describes him to Octavius as \"a slight unmeritable man.\""
    },
    {
        id: 'mcq9',
        question: "According to Antony, what is this \"unmeritable man\" fit for?",
        options: ["To run here and there", "To do odd jobs", "To act as a messenger", "None of the above"],
        answer: "To act as a messenger",
        explanation: "Antony believes Lepidus is only \"fit only to be their instrument\" and is \"Meet to be sent on errands.\""
    },
    {
        id: 'mcq10',
        question: "To whom does Antony compare Lepidus in this scene?",
        options: ["A horse who runs away from the master", "A donkey who carries a load of gold", "A poor man who does not know the value of gold", "None of the above"],
        answer: "A donkey who carries a load of gold",
        explanation: "Antony compares Lepidus to an \"ass\" (donkey) that bears a load of gold, groaning and sweating under the business, only to have its load taken away later."
    },
    {
        id: 'mcq11',
        question: "Which of the following adjectives is NOT used by Mark Antony for Lepidus?",
        options: ["\"Store of provender\"", "\"Unmeritable man\"", "\"a property\"", "\"barren-spirited fellow\""],
        answer: "\"Store of provender\"",
        explanation: "\"Store of provender\" refers to the food Antony gives his horse. He calls Lepidus an \"unmeritable man,\" a \"barren-spirited fellow,\" and says he should not be talked of \"but as a property.\""
    },
    {
        id: 'mcq12',
        question: "What does Octavius say about Lepidus in this scene?",
        options: ["He is good for nothing", "He is a good task-master", "He is a good soldier", "He is a good organiser"],
        answer: "He is a good soldier",
        explanation: "Octavius defends Lepidus against Antony's criticism, saying that he is a \"tried and valiant soldier.\""
    },
    {
        id: 'mcq13',
        question: "Which of the following is hinted in this scene?",
        options: ["Tensions within the Second Triumvirate", "Tensions between Brutus and Cassius", "Mob fury", "None of the above"],
        answer: "Tensions within the Second Triumvirate",
        explanation: "Shakespeare hints at the \"tensions of the triumvirate\" when Octavius defends Lepidus against Antony's harsh criticism."
    },
    {
        id: 'mcq14',
        question: "Which characteristic trait of Mark Antony is highlighted in this scene?",
        options: ["Passionate and patriotic", "Ruthless and hypocritical", "Faithful and loyal", "None of the above."],
        answer: "Ruthless and hypocritical",
        explanation: "In this scene, Antony is shown to be \"ruthless and hypocritical,\" as he calmly plays with the lives of his friends and relatives and plans to cheat the people."
    },
    {
        id: 'mcq15',
        question: "Mark Antony's dismissal of Lepidus reflect which of the following traits of personality?",
        options: ["Shrewd manipulator", "Power hungry", "Betrayer of friendship", "Both (b) and (c)."],
        answer: "Both (b) and (c).",
        explanation: "Antony's dismissal of Lepidus shows he has no regard for friendship or principles and reveals his \"appetite for a naked struggle for power.\" He sees Lepidus as a tool to be used and discarded."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Antony: These many, then, shall die; their names are prick'd.
Octavius: Your brother too must die; consent you, Lepidus?
Lepidus: I do consent—
Octavius: Prick him down, Antony.
Lepidus: Upon condition Publius shall not live,
Who is your sister's son, Mark Antony.`,
      subquestions: `(i) What is meant by "their names are prick'd"? Why are these names pricked? \n(ii) What was Antony's reply to Lepidus's condition? What does he ask Lepidus to do next? \n(iii) What trait of Antony's nature does this scene reveal? Refer to two statements. \n(iv) What does Octavius say in defence of Lepidus to Antony? \n(v) State three things Antony says about Lepidus after his departure. What does this show about Antony?`,
      answer: `(i) It means their names have been marked down on a list for execution as the Triumvirs purge Rome of their enemies.\n(ii) Antony immediately agrees, saying "He shall not live." He then asks Lepidus to fetch Caesar's will so they can reduce the money paid to the people.\n(iii) It reveals his ruthless and hypocritical nature. **His statement,** "He shall not live," about his own nephew shows his ruthlessness. **His plan** to "cut off some charge in legacies" shows his hypocrisy.\n(iv) Octavius defends Lepidus by stating that he is a "tried and valiant soldier."\n(v) Antony says Lepidus is: 1) A "slight unmeritable man," 2) Fit only to be "sent on errands," and 3) A "barren-spirited fellow." This shows Antony is dismissive, manipulative, and disloyal to his allies.`
    },
    {
      extract: `Extract 2:
Antony: He shall not live; look, with a spot I damn him.
But, Lepidus, go you to Caesar's house;
Fetch the will hither, and we shall determine
How to cut off some charge in legacies.`,
      subquestions: `(i) Where are the three persons? What have they formed? Who "shall not live"? \n(ii) Show the contrast between Antony's reference to Caesar's will here and on a previous occasion. \n(iii) Explain "determine" and "charge." What trait of Antony's character is shown here? \n(iv) Why did Antony send Lepidus to Caesar's house? Which trait is revealed? \n(v) State briefly the comparison hinted at between Brutus and Antony in this scene.`,
      answer: `(i) They are in Antony's house. They have formed the Second Triumvirate. Antony's nephew, Publius, "shall not live."\n(ii) Previously, Antony used the will to show Caesar's love for the people. Now, he intends to alter it to deny them money, showing his hypocrisy.\n(iii) **Determine:** to decide. **Charge:** a cost. The trait shown is Antony's lack of moral principles and his hypocrisy.\n(iv) He sent Lepidus to fetch the will. This reveals that Antony is manipulative; he sends him away to talk about him behind his back.\n(v) There is a sharp contrast. Brutus insisted only Caesar must die as a clean sacrifice. Antony is shown to be cold-blooded and ruthless, easily sacrificing friends and relatives for power.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Octavius: You may do your will;
But he's a tried and valiant soldier.
Antony: So is my horse, Octavius, and for that
I do appoint him store of provender.`,
        subquestions: `(i) When does this conversation take place? Why does Octavius say, "You may do your will"? \n(ii) Who is the "tried and valiant soldier"? What has Antony just said about him? \n(iii) How does Antony continue to compare him with his horse? \n(iv) What is Antony's opinion of Lepidus? What does he propose to do with him? \n(v) State an occasion later when Octavius again disagrees with Antony. Mention two traits of Octavius.`,
        answer: `(i) This is in Antony's house after Lepidus leaves to fetch the will. Octavius says this because while he disagrees with Antony's assessment of Lepidus, he is not yet in a position to overrule him.\n(ii) The soldier is Lepidus. Antony has just described him as a "slight unmeritable man" fit only for errands and compared him to a donkey.\n(iii) He says his horse is also a good soldier, and for that, he gives it food. He implies Lepidus is no better than an animal to be trained and commanded.\n(iv) He sees Lepidus as a "barren-spirited fellow" to be used as a tool. He proposes that after they use him for their "mean work," they will force him into "unrewarded retirement."\n(v) Later, before the battle of Philippi, Octavius disagrees with Antony's military strategy. Two traits of Octavius here are: 1) **Alert and Apprehensive,** and 2) **Assertive.**`
    },
    {
        extract: `Extract 2:
Antony: He must be taught, and train'd, and bid go forth;
A barren-spirited fellow; one that feeds
On abjects, orts and imitations...
Do not talk of him But as a property.`,
        subquestions: `(i) Who is the speaker? Who is 'he'? What was he compared to just before this? \n(ii) On what errand has the speaker sent the "barren-spirited fellow"? \n(iii) Give the meaning of: "On abjects, orts and imitations... But as a property." \n(iv) What are Brutus and Cassius up to at this moment? \n(v) How does this scene reveal dark politics in action?`,
        answer: `(i) The speaker is Antony. 'He' is Lepidus. Just before this, Antony compared Lepidus to his horse.\n(ii) Antony has sent Lepidus on an errand to Caesar's house to fetch his will.\n(iii) It means Lepidus has no original thoughts and only picks up on outdated ideas others have discarded. Antony is saying Lepidus should be considered a tool or an object ("a property"), not a person.\n(iv) At this moment, Brutus and Cassius are gathering armies ("levying powers") for a civil war.\n(v) The scene reveals dark politics by showing the new rulers engaging in a cold-blooded purge, betraying family, and plotting to cheat the public and discard an ally for their own gain.`
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

