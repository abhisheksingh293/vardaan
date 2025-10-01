import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 2, Scene 2 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act II, Scene 2",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "Which of the following was NOT one of the horrid sights reported from the streets of Rome?",
        options: ["Groans of dying men", "Graves yielding up their dead", "Blood dripping from the roof", "Ghosts squealing"],
        answer: "Blood dripping from the roof",
        explanation: "Calpurnia reports seeing many horrid sights, including graves opening, ghosts squealing, dying men groaning, and blood dripping on the walls of the Capitol, but not from the roof."
    },
    {
        id: 'mcq2',
        question: "What reply does Calpurnia give when Caesar said that the portents concerned mankind in general, not him alone?",
        options: ["The heavens drop tears of blood when princes die.", "The heavens themselves blaze forth the death of princes.", "The heavens themselves bring forth clouds of blood.", "The heavens themselves let forth fire when princes die."],
        answer: "The heavens themselves blaze forth the death of princes.",
        explanation: "When Caesar says the omens are for everyone, Calpurnia replies that such signs are not seen for the death of beggars, but that \"The heavens themselves blaze forth the death of princes.\""
    },
    {
        id: 'mcq3',
        question: "Why does Caesar initially agree to Calpurnia's suggestion to not move out of his house?",
        options: ["Out of fear of portents", "For Calpurnia's sake", "For losing his crown", "None of the above"],
        answer: "For Calpurnia's sake",
        explanation: "Although Caesar rejects the interpretation of the priests, Calpurnia finally persuades him to stay home. He agrees to her suggestion not because he is afraid, but for her sake."
    },
    {
        id: 'mcq4',
        question: "How does Decius interpret the meaning of Calpurnia's dream?",
        options: ["Caesar shall give life to all Rome", "Caesar will end all the evils from Rome", "Caesar will become the king despite the portents", "Caesar will put to an end all conspiracies against him."],
        answer: "Caesar shall give life to all Rome",
        explanation: "Decius, a skilled flatterer, reinterprets the dream of the bleeding statue to mean that Caesar will provide new life and strength to all of Rome."
    },
    {
        id: 'mcq5',
        question: "How does Caesar compare himself with the beast sacrificed by the priests?",
        options: ["He would be as heartless as the beast", "He would be coward like the beast", "He would be sacrificed like the beast", "None of the above."],
        answer: "He would be as heartless as the beast",
        explanation: "After hearing the beast had no heart, Caesar says that he himself \"should be a beast without a heart\" if he stayed home out of fear."
    },
    {
        id: 'mcq6',
        question: "Which characteristic trait of Caesar is revealed through his denial of the omens and portents?",
        options: ["Bravery", "Cowardice", "Ignorance", "Vanity"],
        answer: "Vanity",
        explanation: "Caesar's pride and vanity are highlighted in this scene. He rejects the warnings because he believes he is more terrible than danger itself and is doomed by his pride."
    },
    {
        id: 'mcq7',
        question: "Which method was used by Decius to dupe Caesar and persuade him to go to Senate?",
        options: ["Falsehoods", "Appeal to Caesar's vanity", "Flattery", "All of the above."],
        answer: "All of the above.",
        explanation: "Decius is a crafty manipulator. He uses flattery by reinterpreting the dream, appeals to Caesar's vanity by suggesting he will be mocked, and uses falsehoods about the Senate's plans to offer a crown."
    },
    {
        id: 'mcq8',
        question: "What does this scene suggest about Caesar's flaw that led to his doom?",
        options: ["Overconfidence", "Pride", "Lack of trust", "Lack of vision"],
        answer: "Pride",
        explanation: "The scene shows that Caesar is led by his pride and vanity to disregard his wife's warning. His pride makes him believe he is not subject to the same fears or dangers as other men."
    },
    {
        id: 'mcq9',
        question: "Which of the following is NOT a reason for Caesar to disregard his wife's warning?",
        options: ["Pride", "Humility", "Vanity", "Fate"],
        answer: "Humility",
        explanation: "Caesar's decision is driven by his pride and vanity, and a sense that he cannot escape his fate. Humility is the opposite of the traits he displays in this scene."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Calpurnia: What mean you, Caesar? Think you to walk forth?
You shall not stir out of your house today.
Caesar: Caesar shall forth the things that threaten'd me
Ne'er look'd but on my back when they shall see
The face of Caesar, they are vanished.`,
      subquestions: `(i) In what mood does Calpurnia speak to Caesar? Why does she warn him? When earlier had he been warned of this day? \n(ii) What has Caesar noticed about the night? What did he ask his servant to do then? \n(iii) On what are Calpurnia's fears based? State two unusual things she has heard. \n(iv) What does Caesar say later about cowards? What does he say in the extract to show he is not threatened? \n(v) What aspect of Calpurnia's and Caesar's characters is hinted at in the extract?`,
      answer: `(i) Calpurnia is in a frightened mood. She warns him because of her frightening dream and horrid sights reported in the streets. He was warned earlier by the Soothsayer to "Beware the ides of March."\n(ii) Caesar noticed Calpurnia crying out in her sleep about his murder. He asked his servant to have the priests perform a sacrifice.\n(iii) Her fears are based on her dream and reports of horrid sights. Two unusual things are that "graves have yielded up their dead" and "blood has been seen dripping on the walls of the Capitol".\n(iv) Caesar later says that cowards die many times before their actual death. In the extract, he shows he isn't threatened by saying dangers have only seen his back and will vanish when they see his face.\n(v) Calpurnia is shown to be frightened and concerned. Caesar is shown to be proud and overconfident, believing his presence alone is enough to make threats disappear.`
    },
    {
      extract: `Extract 2:
Calpurnia: Caesar, I never stood on ceremonies,
Yet now they fright me. There is one within,
Besides the things that we have heard and seen,
Recounts most horrid sights seen by the watch.`,
      subquestions: `(i) What is meant by "I never stood on ceremonies"? What is Caesar's normal opinion on such things? \n(ii) Why does Calpurnia give importance to such sights at this time? \n(iii) What is Caesar's reaction to Calpurnia's fears? What does he decide to do? \n(iv) Does Caesar die in the end? What does he say about death's inevitability? \n(v) Which characteristic trait of Caesar is highlighted by his action?`,
      answer: `(i) It means Calpurnia never used to pay attention to omens. Caesar is also superstitious, yet proud.\n(ii) She gives them importance because she had a frightening dream about his statue spouting blood and believes they are warnings of danger to his life.\n(iii) His initial reaction is to dismiss her fears. However, he eventually agrees to stay home for her sake.\n(iv) Yes, Caesar dies. He says death is a "necessary end" that cannot be avoided if "purposed by the mighty gods."\n(v) His willingness to face danger highlights his pride and vanity.`
    },
    {
      extract: `Extract 3:
Calpurnia: Alas, my lord,
Your wisdom is consumed in confidence.
Do not go forth today. Call it my fear
That keeps you in the house, and not your own.`,
      subquestions: `(i) Where are Caesar and Calpurnia? Why has Caesar decided to stay at home? \n(ii) What did Caesar tell Decius to do? \n(iii) Explain "Your wisdom is consumed in confidence." Was Calpurnia correct? \n(iv) In what way did Decius interpret Calpurnia's dream? \n(v) What is revealed of Calpurnia's character? How is she contrasted with Portia?`,
      answer: `(i) They are in Caesar's house. He has decided to stay home not because he is afraid, but to please Calpurnia.\n(ii) Caesar asked Decius to go to the Senate and tell them simply that he will not come that day.\n(iii) It means "Your good sense is being overpowered by your overconfidence." Yes, she was correct, as his pride ultimately leads him to his death.\n(iv) Decius reinterpreted the dream to mean that Caesar would provide new life and strength to all of Rome.\n(v) Calpurnia is revealed as a caring, practical wife willing to take responsibility ("Call it my fear") to protect him. This contrasts with Portia, who focuses on her right to share problems but offers no practical solution.`
    },
    {
      extract: `Extract 4:
Decius: Most mighty Caesar, let me know some cause,
Lest I be laugh'd at when I tell them so.
Caesar: The cause is in my will: I will not come;
That is enough to satisfy the Senate...`,
      subquestions: `(i) Where are the speakers? What day is this and what is its significance? \n(ii) What did Calpurnia dream? How did she interpret it versus how Decius did? \n(iii) What other reasons did Calpurnia state for not wanting Caesar to go? \n(iv) What other statements did Decius make to convince Caesar? \n(v) What is your opinion of Caesar at this point in the play?`,
      answer: `(i) They are in Caesar's house. The day is March 15th, the Ides of March, the day the Soothsayer warned him about.\n(ii) She dreamt of his statue bleeding while Romans bathed their hands in the blood, which she saw as a warning of his murder. Decius interpreted it as a positive sign that Caesar would give new life to Rome.\n(iii) Calpurnia was also frightened by reports of horrid sights in the streets of Rome, like graves opening.\n(iv) Decius told Caesar the Senate planned to offer him a crown and might change their minds. He also suggested Caesar would be mocked for being afraid of his wife's dreams.\n(v) At this point, Caesar appears overly proud and arrogant. His vanity makes him easy to manipulate. One might feel his death is tragic because his own flaws lead directly to his downfall.`
    },
    {
      extract: `Extract 5:
Decius: If you shall send them word you will not come,
Their minds may change. Besides, it were a mock
Apt to be render'd, for some one to say,
"Break up the Senate till another time,
When Caesar's wife shall meet with better dreams."`,
      subquestions: `(i) What had Decius assured Caesar the Senate were proposing to do? \n(ii) When was a similar thing offered and what was Caesar's reaction? \n(iii) What interpretation had Decius offered for Calpurnia's dream? What was his motive? \n(iv) What has Caesar said earlier in the play about fear? \n(v) Explain the phrase "it were a mock/Apt to be render'd." What does this reveal about Decius?`,
      answer: `(i) Decius assured Caesar that the Senate had resolved to offer him a crown that very day to appeal to his ambition.\n(ii) A crown was offered during the Feast of Lupercalia, which Caesar refused three times.\n(iii) Decius offered the flattering interpretation that the dream meant Caesar would give reviving blood to Rome. His motive was to trick Caesar into going to the Senate for his assassination.\n(iv) Caesar told Calpurnia it is strange that men fear death, since it is a necessary end that will come when destined.\n(v) It means "it would be a joke likely to be made at your expense." It reveals Decius is a crafty manipulator who knows how to exploit Caesar's fear of ridicule and his vanity.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Caesar: What say the augurers?
Servant: They would not have you to stir forth today.
Plucking the entrails of an offering forth,
They could not find a heart within the beast.`,
        subquestions: `(i) Who were the augurers? Why was "today" noteworthy? \n(ii) Where was Caesar planning to go? Who had asked the augurers to perform the sacrifice? \n(iii) What did it signify that the beast had no heart? What was Caesar's interpretation? \n(iv) What did Caesar say about danger and himself? \n(v) Was Caesar courageous to go out? Give two reasons.`,
        answer: `(i) The augurers were priests who interpreted the will of the gods by examining animal entrails. "Today" was the Ides of March, the day the Soothsayer had warned Caesar about.\n(ii) Caesar was planning to go to the Senate House. Caesar himself had asked the augurers to perform the sacrifice.\n(iii) A beast without a heart was a terrible omen. Caesar's interpretation was that the gods were shaming cowardice, and he would be a "beast without a heart" if he stayed home out of fear.\n(iv) Caesar said he and Danger are like two lions born on the same day, and that he is the "elder and more terrible."\n(v) No, his action was arrogance, not courage. 1) He was "consumed in confidence," believing himself invincible. 2) He was more afraid of being mocked than of the actual danger.`
    },
    {
        extract: `Extract 2:
Brutus: Caesar, 'tis strucken eight.
Caesar: I thank you for your pains and courtesy.
Enter Antony
See! Antony, that revels long O' nights,
Is notwithstanding up.`,
        subquestions: `(i) Where are these three? Name the others present. Why had they come? \n(ii) Explain why Caesar says, "pains and courtesy." Do they deserve his thanks? \n(iii) What trait of Antony's character is mentioned? How do Brutus and Cassius refer to this trait? \n(iv) Which word best describes Caesar's behaviour here: generous, friendly, or humble? \n(v) How did Brutus's and Cassius's reasons for killing Caesar differ?`,
        answer: `(i) They are at Caesar's house. The other conspirators are also present. They had come to escort Caesar to the Capitol.\n(ii) He thanks them for the effort ("pains") and politeness ("courtesy"). They do not deserve his thanks because their courtesy is false; they are there to lead him to his death.\n(iii) Caesar mentions Antony's love for parties ("revels long o' nights"). Brutus used this to argue Antony wasn't a threat, while Cassius still feared Antony's loyalty to Caesar would make him dangerous.\n(iv) The best word is **friendly**. He welcomes them, thanks them, and calls them "good friends," which contrasts with his earlier arrogant behavior.\n(v) **Brutus's reason:** For the "general good" of Rome, fearing tyranny. **Cassius's reason:** Based on personal jealousy and resentment. Brutus's reason is more justifiable as it is based on principle, even if misguided, while Cassius's is based on envy.`
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

