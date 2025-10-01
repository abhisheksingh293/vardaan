import React, { useState, useEffect } from 'react';

// --- Workbook Data from the provided document ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act I, Scene 1",
  multipleChoiceQuestions: [
    {
      id: 'mcq1',
      question: "What is the rule that Marullus refers to?",
      options: ["Workers ought to wear signs of their trade", "A carpenter's foot rule", "Citizens should bow before officials", "All of the above"],
      answer: "Workers ought to wear signs of their trade",
      explanation: "Flavius and Marullus are annoyed because the workers are dressed for a holiday on a workday and aren't carrying their tools or wearing their work clothes."
    },
    {
      id: 'mcq2',
      question: "What sarcastic reason does the cobbler give Flavius for leading citizens on the street?",
      options: ["To get himself more work", "To rejoice in Caesar's Triumph", "To celebrate the feast", "Both (b) and (c)"],
      answer: "To get himself more work",
      explanation: "The cobbler jokes that he is leading the men around to wear out their shoes so that they will give him more business. His real reason is to celebrate Caesar."
    },
    {
      id: 'mcq3',
      question: "What does the cobbler say to show that he is a master craftsman?",
      options: ["He is a surgeon of old shoes", "He mends soles", "Every shoe-wearing gentleman has worn his handiwork", "He needed more work"],
      answer: "He is a surgeon of old shoes",
      explanation: "By calling himself a 'surgeon' for shoes, he uses a metaphor to imply that he is highly skilled at 'saving' them when they are in bad shape."
    },
    {
      id: 'mcq4',
      question: "Why, according to Marullus, would there be a plague?",
      options: ["Due to the crowding in the sheets", "Due to the ingratitude of citizens", "Due to the hollow banks of the Tiber", "Due to the flowers strewn on the way."],
      answer: "Due to the ingratitude of citizens",
      explanation: "Marullus tells the people to pray to the gods to prevent the plague that he feels they deserve for being so ungrateful to Pompey."
    },
    {
      id: 'mcq5',
      question: "Why did Flavius consider it necessary to remove all the decorations with Caesar's statues?",
      options: ["To turn the people against him", "To replace them with new decorations", "To quell Caesar's ego and popularity", "None of the above"],
      answer: "To quell Caesar's ego and popularity",
      explanation: "Flavius believes that taking away these signs of support will help keep Caesar humble and prevent him from becoming too powerful."
    },
    {
        id: 'mcq6',
        question: "According to Marullus for whom had the citizens of Rome waited patiently earlier?",
        options: ["Caesar", "Brutus", "Pompey", "Antony"],
        answer: "Pompey",
        explanation: "Marullus reminds the crowd how they used to climb walls and wait all day to see 'great Pompey' pass through the streets."
    },
    {
        id: 'mcq7',
        question: "What did Marullus ask the commoners of Rome to do?",
        options: ["To pray for Caesar's well-being", "To run away to their houses", "To pray to God to avert their punishment", "Both (b) and (c)"],
        answer: "Both (b) and (c)",
        explanation: "He commands them to go home ('Be gone! Run to your houses') and then pray to the gods for forgiveness for their ingratitude."
    },
    {
        id: 'mcq8',
        question: "Why did Flavius ask the commoners to shed tears of remorse?",
        options: ["For the dishonour shown to Pompey", "For the rise of a dictator", "For the loss of their liberty", "For making Caesar too powerful"],
        answer: "For the dishonour shown to Pompey",
        explanation: "He tells them to weep into the Tiber river to show they are sorry for forgetting Pompey and celebrating his conqueror."
    },
    {
        id: 'mcq9',
        question: "Which quality of the common man is reflected in this scene?",
        options: ["Admiration for Caesar", "Fickleness", "Hatred for Caesar", "Fear of Caesar"],
        answer: "Fickleness",
        explanation: "This means they change their minds and loyalties very easily. They quickly switch from loving Pompey to celebrating Caesar."
    },
    {
        id: 'mcq10',
        question: "Which type of atmosphere in Rome is seen in Act I, Scene 1 of the play?",
        options: ["Peace and happiness", "Confusion and Chaos", "Strife and disunity", "None of the above"],
        answer: "Strife and disunity",
        explanation: "The scene immediately shows a major conflict between those who support Caesar and those who are against him."
    },
    {
        id: 'mcq11',
        question: "What is the central theme of the play reflected in this scene?",
        options: ["Conflict between monarchists and republicans", "Conflict between anarchy and democracy", "Conflict between dictatorship and democracy", "None of the above"],
        answer: "Conflict between monarchists and republicans",
        explanation: "The scene shows the struggle between those who support one-man rule (monarchists, for Caesar) and those who want to keep the old government run by representatives (republicans, like the tribunes)."
    },
    {
        id: 'mcq12',
        question: "The opening scene of the play reflects on which of the following causes that led to the development of the play?",
        options: ["Caesar's triumph over Pompey's sons", "Caesar's suspicions", "Mounting hostilities to Caesar's rule", "Fear of Caesar"],
        answer: "Mounting hostilities to Caesar's rule",
        explanation: "The anger and actions of Flavius and Marullus are a perfect example of the growing opposition ('hostilities') to Caesar becoming too powerful."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Flavius: Hence! home, you idle creatures, get you home:
Is this a holiday? What, know you not,
Being mechanical, you ought not walk
Upon a labouring day without the sign
Of your profession? Speak, what trade art thou?`,
      subquestions: `(i) Who are Flavius and Marullus? Where are they and what are they doing there? Why? \n(ii) Who are the "Idle creatures"? Why are they called so? \n(iii) Give the meaning of: Being mechanical, a labouring day, sign of your profession. \n(iv) Whom does Marullus address in the last line of the extract? What reply does he get? \n(v) Show how Flavius and Marullus are men in authority. Who exercises greater authority?`,
      answer: `(i) Flavius and Marullus are Roman tribunes (officials). They are on a public street, angrily stopping commoners from celebrating because they are unhappy about the celebration of Caesar's victory over Pompey.\n(ii) The "idle creatures" are the common workers of Rome. Flavius calls them "idle" because they are not at their jobs.\n(iii) **Being mechanical:** Being a laborer. **a labouring day:** A normal workday. **sign of your profession:** The special clothes or tools of a trade.\n(iv) Marullus addresses the second citizen (the cobbler), who gives witty, pun-filled replies. Marullus reacts with anger and confusion.\n(v) Flavius shows authority by commanding, "Hence! home, you idle creatures." Marullus shows authority by interrogating them. Flavius seems to have greater authority as he gives the final orders at the end of the scene.`
    },
    {
      extract: `Extract 2:
Second Citizen: A trade, sir, that I hope I may use with a safe conscience; which is, indeed, sir, a mender of bad soles.`,
      subquestions: `(i) What is meant by a "trade"? What is the pun involved with the word "soles"? \n(ii) Why does the Second Citizen think that he "may use" the trade with a safe conscience? \n(iii) What is meant by "naughty knave"? \n(iv) Give the double meaning in: "...be not out with me: yet, if you be out, sir, I can mend you." \n(v) Give two characteristic traits of the common people in this scene.`,
      answer: `(i) A "trade" is a person's job. The pun is on "soles" (of shoes) which sounds like "souls" (of people).\n(ii) He feels his trade is honest and simple, and doesn't meddle in important or controversial matters.\n(iii) "Naughty knave" is an insult meaning a mischievous or worthless rascal.\n(iv) First meaning: "Don't be angry with me, but if your shoes are worn out, I can fix them." Second meaning: "Don't be angry with me, but if you are, I can improve your temper."\n(v) 1. **Witty and Humorous:** The cobbler cleverly confuses Marullus with puns. 2. **Fickle:** They celebrate Caesar, then quickly feel guilty when reminded of Pompey.`
    },
    {
      extract: `Extract 3:
Wherefore rejoice? What conquest brings he home?
What tributaries follow him to Rome,
To grace in captive bonds his chariot wheels?`,
      subquestions: `(i) Who speaks these lines and to whom? \n(ii) Who is "he" referred to? What message is being conveyed? \n(iii) What is the conquest referred to? \n(iv) Give the meaning of: "What tributaries follow him to Rome..." \n(v) Who are referred to as "the cruel men of Rome" and why?`,
      answer: `(i) Marullus speaks these lines to the common people of Rome.\n(ii) "He" is Julius Caesar. Marullus wants them to realize Caesar's victory is over other Romans, not a foreign enemy.\n(iii) The conquest is Caesar's victory over Pompey's sons in a civil war.\n(iv) It means: "What captured princes from foreign lands is he bringing back to Rome, chained to his chariot wheels as a sign of victory?"\n(v) The common people are called "cruel" because Marullus feels they are being disloyal by celebrating the downfall of Pompey, whom they once loved.`
    },
    {
      extract: `Extract 4:
And when you saw his chariot but appear,
Have you not made an universal shout,
That Tiber trembled underneath her banks...?`,
      subquestions: `(i) Whose chariot was seen? \n(ii) What is meant by "universal shout"? \n(iii) What is meant by "Pompey's blood"? \n(iv) How do the people now prepare for Caesar's entry? \n(v) What does the speaker want to achieve with this speech?`,
      answer: `(i) It was Pompey's chariot, in the past.\n(ii) A huge, loud cheer from everyone at once, so powerful it seemed to make the River Tiber tremble.\n(iii) "Pompey's blood" refers to Pompey's sons, whom Caesar has defeated.\n(iv) They put on their best clothes, take a holiday, and plan to throw flowers in his path.\n(v) Marullus wants to make the people feel guilty and ashamed to turn them against Caesar.`
    },
    {
      extract: `Extract 5:
Flavius: It is no matter; let no images
Be hung with Caesar's trophies. I'll about,
And drive away the vulgar from the streets.`,
      subquestions: `(i) What was Marullus supposed to do? \n(ii) What was the feast of Lupercal? \n(iii) What is meant by "trophies"? \n(iv) Who are "the vulgar"? \n(v) How does this scene reflect the changing fortunes of men in power?`,
      answer: `(i) Marullus was supposed to take down all the decorations ("trophies") on Caesar's statues.\n(ii) The Feast of Lupercal was an ancient Roman festival of fertility celebrated on February 15th.\n(iii) "Trophies" are decorations celebrating a victory.\n(iv) "The vulgar" refers to the common people, viewed as unrefined by the upper class.\n(v) It shows that fortunes change quickly (Pompey is forgotten, Caesar is the new hero) and that the common people are fickle, shifting their loyalty to whoever is currently powerful.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Second Citizen: Truly, sir, all that I live by is with the awl:
I meddle with no tradesman's matters, nor women's matters;
but withal I am, indeed, sir, a surgeon to old shoes...`,
        subquestions: `(i) To which question does the Second Citizen give his reply? \n(ii) Give the meaning of: "All that I live by is with the awl." \n(iii) Why does the speaker call himself a surgeon? \n(iv) Give the meaning of: "As proper men as ever trod upon neat's leather..." \n(v) What answer does the Second Citizen give to Flavius's question about leading men in the streets?`,
        answer: `(i) He is replying to Flavius's question, "Thou art a cobbler, art thou?"\n(ii) The literal meaning is: "The only way I make a living is by using my shoemaker's tool, the awl." There is a pun on "awl" and "all."\n(iii) He compares himself to a surgeon "saving" old, damaged shoes, just as a doctor saves a patient's life.\n(iv) It means: "The finest gentlemen who have ever walked in shoes made of cow's leather have walked in shoes that I have made or repaired." This indicates he is a skilled craftsman.\n(v) His humorous, sarcastic answer is to wear out their shoes to get more business for himself. The real answer is to celebrate Caesar's triumph.`
    },
    {
        extract: `Extract 2:
Go, go, good countrymen, and, for this fault,
Assemble all the poor men of your sort;
Draw them to Tiber banks, and weep your tears
Into the channel...`,
        subquestions: `(i) Who is speaking and to whom? \n(ii) What advice was given earlier to show remorse? \n(iii) Explain: "Draw them to Tiber banks, and weep your tears..." \n(iv) Give the meaning of: their basest metal, vanish tongue-tied, deck'd with ceremonies. \n(v) Why are the images decorated? Why does the speaker want to "disrobe" them?`,
        answer: `(i) Flavius is speaking. First to the commoners, then to Marullus.\n(ii) Marullus had advised them to go home, fall on their knees, and pray to avoid a plague for their ingratitude.\n(iii) It means: "Lead the people to the river and cry so many tears of guilt that the river overflows its banks." It's an exaggeration (hyperbole).\n(iv) **their basest metal:** Their common or coarse nature. **vanish tongue-tied:** To leave silently out of guilt. **deck'd with ceremonies:** Decorated with ornaments for celebration.\n(v) The statues of Caesar are decorated to celebrate his triumph and the Feast of Lupercal. Flavius wants to "disrobe" them to lessen Caesar's public support and prevent him from becoming too powerful.`
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

