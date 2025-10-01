import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 3, Scene 2 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act III, Scene 2",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "After Brutus' speech at Caesar's funeral, what do the citizens of Rome offer to do?",
        options: ["To take a revenge on the murders", "To crown Brutus as king", "To fight for the freedom of Rome", "To crown Mark Antony as king"],
        answer: "To crown Brutus as king",
        explanation: "The crowd is so completely won over by Brutus's speech that they ironically shout, \"Let him be Caesar,\" and suggest that \"Caesar's better parts shall be crowned in Brutus.\""
    },
    {
        id: 'mcq2',
        question: "According to Antony, what would the people of Rome do if they hear Caesar's will?",
        options: ["They will kiss Caesar's wounds", "They will admire Caesar", "They will start destruction in Rome", "They will curse the best friend of Caesar"],
        answer: "They will kiss Caesar's wounds",
        explanation: "Antony cleverly teases the crowd by saying that if they heard the will, they would \"go and kiss dead Caesar’s wounds and dip their napkins in his sacred blood.\""
    },
    {
        id: 'mcq3',
        question: "Which was the most unkindest cut to Caesar, according to Antony?",
        options: ["Cassius'", "Casca's", "Brutus'", "Decius'"],
        answer: "Brutus'",
        explanation: "When showing Caesar's mantle, Antony points out the hole made by Brutus's dagger and calls it \"the most unkindest cut of all\" because Brutus was Caesar's beloved friend."
    },
    {
        id: 'mcq4',
        question: "How does Antony describe Caesar's wounds?",
        options: ["Naked mouths", "Unholy mouths", "Poor dumb mouths", "None of these"],
        answer: "Poor dumb mouths",
        explanation: "Antony pretends he is a poor speaker and says he will let Caesar's wounds themselves, like \"poor poor dumb mouths,\" speak for him."
    },
    {
        id: 'mcq5',
        question: "Brutus in his funeral speech appealed to:",
        options: ["the Roman citizens' reason, pride", "the Roman citizens' self-respect", "the Roman citizens' judgement", "the Roman citizens' past"],
        answer: "the Roman citizens' judgement",
        explanation: "Brutus's entire speech is an appeal to logic and reason. He asks the citizens to \"Censure me in your wisdom, and awake your senses that you may the better judge.\""
    },
    {
        id: 'mcq6',
        question: "Which of the following reasons did Brutus give for killing Caesar despite being his friend?",
        options: ["He did not like his ways", "He loves his freedom more than anything", "He loved Rome more than Caesar", "None of the above"],
        answer: "He loved Rome more than Caesar",
        explanation: "The core of Brutus's argument is summed up in his famous line: \"Not that I loved Caesar less, but that I loved Rome more.\""
    },
    {
        id: 'mcq7',
        question: "For whom did Antony use the words 'honourable men' in his funeral speech on Caesar?",
        options: ["All the countrymen", "All those present there", "All the people of Rome", "None of the above"],
        answer: "None of the above",
        explanation: "Antony uses the words \"honourable men\" specifically and sarcastically to refer to Brutus and the other conspirators."
    },
    {
        id: 'mcq8',
        question: "Who has been referred to by Mark Antony as Caesar's angel?",
        options: ["Calpurnia", "Octavius", "Brutus", "None of the above"],
        answer: "Brutus",
        explanation: "When describing Brutus's betrayal, Antony highlights their close friendship by saying, \"For Brutus, as you know, was Caesar’s angel.\""
    },
    {
        id: 'mcq9',
        question: "Who said, \"For I have neither wit, nor words, nor worth...\"?",
        options: ["Brutus", "Caesar", "Cassius", "Antony"],
        answer: "Antony",
        explanation: "Antony says this as part of his clever act of pretending to be a \"plain blunt man\" who is not a skilled orator like Brutus, even as he delivers a masterful speech."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Brutus: Be patient till the last.
Romans, countrymen, and lovers! hear me for my
cause, and be silent, that you may hear.`,
      subquestions: `(i) Where is Brutus? Whom does he request to be patient and on what occasion is this speech made? What was the purpose? \n(ii) Brutus was a man committed to 'honour'. Give one example to justify this. \n(iii) "Hear me for my cause." What was his cause? Were his motives selfless? \n(iv) What was the reaction of his listeners in the beginning versus the end of the scene? How did the change come about?`,
      answer: `(i) Brutus is in the public pulpit at the Roman Forum, speaking to the Roman citizens during Caesar's funeral. The purpose is to justify the assassination.\n(ii) An example is his refusal to let the conspirators swear an oath, believing their just cause and their honor as Romans were bond enough.\n(iii) His cause was the preservation of the Roman Republic from the potential tyranny of Caesar. His motives were selfless, as he states he acted "not that I loved Caesar less, but that I loved Rome more."\n(iv) In the beginning, they praise Brutus and offer to crown him. By the end, they are a violent mob calling the conspirators "traitors." This change came about because of Mark Antony's brilliant and manipulative funeral oration.`
    },
    {
      extract: `Extract 2:
Brutus: Good countrymen, let me depart alone,
And, for my sake, stay here with Antony.
Do grace to Caesar's corpse, and grace his speech
Tending to Caesar's glories...`,
      subquestions: `(i) Why does Brutus need to "depart alone"? Which error of judgement is revealed by his instructions? \n(ii) Which two conditions did Brutus impose on Antony before allowing him to make the speech? \n(iii) "Tending to Caesar's glories" - Which two glories of Caesar's life would Antony refer to? \n(iv) What does Antony want to achieve in his speech? Did he succeed?`,
      answer: `(i) Brutus departs to speak to another group of citizens. This reveals his fatal error of judgment: he naively trusts both Antony and the emotional mob, believing they cannot be swayed.\n(ii) The two conditions were that Antony must not blame the conspirators and that he must say he is speaking with their permission.\n(iii) Two glories Antony refers to are: 1) His military victories that brought ransoms to fill Rome's treasury, and 2) His refusal of the crown three times.\n(iv) Antony wants to turn the crowd against the conspirators and incite a riot. He succeeded completely, forcing Brutus and Cassius to flee Rome.`
    },
    {
      extract: `Extract 3:
Antony: Friends, Romans, countrymen, lend me your ears;
I come to bury Caesar, not to praise him.
The evil that men do lives after them,
The good is oft interred with their bones...`,
      subquestions: `(i) What explanation had Brutus given for the murder of Caesar? What was the listeners' reaction? \n(ii) As Antony ascends the platform, what did the citizens say about Caesar and Brutus? \n(iii) Why did the citizens stay to listen to Antony? How does he repel their suspicion at first? \n(iv) Mention three examples of the good done by Caesar that Antony gives.`,
      answer: `(i) Brutus explained he killed Caesar for being ambitious and for the love of Rome. His listeners were completely convinced and praised him.\n(ii) The citizens call Caesar a "tyrant" and praise Brutus as noble, warning Antony not to speak ill of him.\n(iii) They stayed because Brutus asked them to. Antony repels suspicion by saying "I come to bury Caesar, not to praise him," and by initially agreeing with the "honorable" Brutus.\n(iv) Three examples are: 1) He brought ransoms to fill Rome's treasury. 2) He wept with the poor. 3) He refused the crown three times. Antony uses these to contradict Brutus's claim of ambition.`
    },
    {
      extract: `Extract 4:
Antony: Let but the commons hear this testament—
Which, pardon me, I do not mean to read—
And they would go and kiss dead Caesar's wounds,
And dip their napkins in his sacred blood...`,
      subquestions: `(i) What is the "testament"? Why does Antony want to read it? \n(ii) Why would the people "dip their napkins in Caesar's blood"? \n(iii) Why is Caesar's blood called "sacred"? \n(iv) Besides the testament, what other item does Antony show to incite the commons? \n(v) How did Antony cleverly play on the people's emotions?`,
      answer: `(i) The "testament" is Caesar's will. Antony wants to read it because he knows its generous contents will inflame the crowd's anger towards the conspirators.\n(ii) They would do this to have a sacred relic and a memento of the great Caesar.\n(iii) Antony calls it "sacred blood" to portray Caesar as a martyr or a holy figure, making his murder seem more horrific.\n(iv) Antony shows them Caesar's mantle (cloak), pointing out the dagger holes, and then reveals Caesar's wounded body itself, which incites the mob to mutiny.\n(v) He used irony with "honourable men," showed evidence of Caesar's goodness, pretended to be overcome with grief, and teased them with the will, turning them into an enraged mob.`
    },
    {
      extract: `Extract 5:
Antony: I tell you that which you yourselves do know,
Show you sweet Caesar's wounds, poor poor dumb mouths,
And bid them speak for me. But were I Brutus,
And Brutus Antony, there were an Antony
Would ruffle up your spirits...`,
      subquestions: `(i) Give three tactics adopted by Antony to arouse the people's feelings. \n(ii) What are the "poor dumb mouths"? What does Antony say they could do? \n(iii) How does Antony indirectly call for a mutiny? Point out the irony. \n(iv) What are Antony's last words after the mob leaves? \n(v) Where does Antony go at the end of the scene? What happens to Brutus and Cassius?`,
      answer: `(i) Three tactics are: 1) **Sarcasm:** Repeatedly calling the conspirators "honourable men." 2) **Pathos:** Weeping during his speech. 3) **Visual Aids:** Using Caesar's bloody mantle and corpse.\n(ii) The "poor dumb mouths" are Caesar's stab wounds. Antony says if he were a great speaker, he could "put a tongue in every wound" that would make the stones of Rome riot.\n(iii) He indirectly calls for mutiny by describing what a better speaker could do. The irony is that he claims he isn't trying to incite them while doing exactly that.\n(iv) His last words are: "Now let it work. Mischief, thou art afoot. Take thou what course thou wilt!" The mob plans to burn the conspirators' houses.\n(v) Antony goes to Caesar's house to join Octavius and Lepidus. Brutus and Cassius are forced to flee Rome.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Antony: But yesterday the word of Caesar might
Have stood against the world; now lies he there,
And none so poor to do him reverence.`,
        subquestions: `(i) Mention an incident where Caesar's word was powerful, overruling the conspirators. \n(ii) Who are the "honourable men"? Why are they called so in this context? \n(iii) Mention the tactics Antony uses to stir the mob to mutiny. \n(iv) Antony says: "I will not do them wrong." Whom does he say he would rather wrong instead? \n(v) What document does Antony have? Why does he say he won't read it?`,
        answer: `(i) Just before his death, Caesar powerfully overruled the conspirators' request to repeal Publius Cimber's banishment, declaring he was as "constant as the northern star."\n(ii) They are Brutus and the conspirators. They are called "honourable" sarcastically. Antony is pretending to respect them while subtly undermining the idea.\n(iii) He uses reverse psychology, claiming he doesn't want to stir them to mutiny, while appealing to their emotions by showing Caesar's body and mentioning the will.\n(iv) He says he would rather wrong the dead (Caesar), himself, and the crowd than wrong such "honourable men."\n(v) He has Caesar's will. He pretends he won't read it because its contents, showing Caesar's love for them, would "inflame" them and make them "mad."`
    },
    {
        extract: `Extract 2:
Antony: If you have tears, prepare to shed them now.
You all do know this mantle: I remember
The first time ever Caesar put it on;
'Twas on a summer's evening, in his tent,
That day he overcame the Nervii.`,
        subquestions: `(i) What are the feelings of the citizens for Antony at this point? \n(ii) What is the significance of the mantle? Who were the Nervii? \n(iii) Why does Antony name Cassius, Casca, and Brutus as he shows the mantle? \n(iv) Why is Brutus referred to as the "well-beloved"? \n(v) Why was the stabbing by Brutus "the most unkindest cut of all"?`,
        answer: `(i) The citizens feel great sympathy for Antony, remarking on his tear-filled eyes and calling him a noble man.\n(ii) The mantle is significant because it's a personal object connected to Caesar's past glory (victory over the Nervii), making the betrayal seem more tragic. The Nervii were a fierce tribe Caesar defeated.\n(iii) He mentions their names to make the murder concrete and personal, turning the crowd's anger directly against them individually.\n(iv) Brutus is called "well-beloved" to emphasize the depth of his betrayal, as he was Caesar's trusted friend.\n(v) It was the "most unkindest cut" because it was an act of "ingratitude" from a beloved friend, which emotionally destroyed Caesar. Antony says when Caesar saw Brutus stab, "Then burst his mighty heart."`
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

