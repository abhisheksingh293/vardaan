import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 5, Scene 3 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act V, Scene 3",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "In what condition were Cassius' troops in this scene?",
        options: ["Defeated by Antony's forces they surrendered", "They were celebrating their victory over Antony's forces", "Defeated by Antony's forces they were retreating", "None of the above."],
        answer: "Defeated by Antony's forces they were retreating",
        explanation: "The scene opens on a part of the battlefield where Antony's forces have defeated the army led by Cassius, and Cassius and Titinius are seen following their retreating troops."
    },
    {
        id: 'mcq2',
        question: "What were Brutus' troops doing after their victory over Octavius?",
        options: ["They became indisciplined and started looting", "They got too engrossed in celebration", "They ran to help Cassius' troops", "None of the above."],
        answer: "They became indisciplined and started looting",
        explanation: "The battle plans went wrong because Brutus's troops, after being victorious over Octavius, lost discipline and started looting instead of coming to help Cassius's men. This is also an example of the irony in the scene, as the soldiers of the honest Brutus dishonestly \"fall to spoil,\" looting and plundering."
    },
    {
        id: 'mcq3',
        question: "Who says that he has to act as enemy to his own soldiers?",
        options: ["Brutus", "Cassius", "Mark Antony", "Octavius Caesar"],
        answer: "Cassius",
        explanation: "This refers to the line in the play, \"Myself have to mine own turn'd enemy.\" Cassius is in a desperate rage because his own soldiers are retreating, and he has even killed one of his own standard-bearers for running away."
    },
    {
        id: 'mcq4',
        question: "Cassius tells Pindarus to observe Titinius from a hill because of which deformity of his (Cassius')?",
        options: ["Weak eyesight", "Weak legs", "Weak heart", "None of the above"],
        answer: "Weak eyesight",
        explanation: "This refers to the line in the play, \"My sight was ever thick.\" Cassius needs Pindarus to watch Titinius for him because his own vision is poor."
    },
    {
        id: 'mcq5',
        question: "According to Cassius, his birthday would also be a day of his:",
        options: ["victory over the enemy", "death", "retreat", "surrender"],
        answer: "death",
        explanation: "This refers to the lines in the play, \"This day I breathed first; time is come round, And where I did begin, there shall I end.\" Cassius feels his life has come full circle and he will die on his birthday."
    },
    {
        id: 'mcq6',
        question: "To whom does Cassius refer to in this scene as his \"best friend\"?",
        options: ["Brutus", "Pindarus", "Lepidus", "Titinius"],
        answer: "Titinius",
        explanation: "When Cassius mistakenly believes Titinius has been captured, he cries out in despair at having to \"see my best friend ta'en before my face!\""
    },
    {
        id: 'mcq7',
        question: "Who says the following sentence: \"Caesar thou art revenged?\"",
        options: ["Cassius", "Brutus", "Antony", "Ocatvius"],
        answer: "Cassius",
        explanation: "Cassius dies with the words, \"Caesar, thou art revenged!\" on his lips. This shows that he, and later Brutus, understand that Caesar's spirit is still active and seeking revenge."
    },
    {
        id: 'mcq8',
        question: "Who has been referred to in this scene as, \"The sun of Rome is set\"?",
        options: ["Ocatvius", "Cassius", "Brutus", "Pindarus"],
        answer: "Cassius",
        explanation: "After finding Cassius dead, the grieving Titinius places a garland on his brow and says, \"The sun of Rome is set. Our day is gone...\"."
    },
    {
        id: 'mcq9',
        question: "How does Titinius decide to prove himself as a brave Roman?",
        options: ["By fighting Octavius and Antony", "By killing Antony", "By killing himself with Cassius' sword", "None of the above"],
        answer: "By killing himself with Cassius' sword",
        explanation: "Left alone after discovering Cassius's body, Titinius decides to take up Cassius's sword and kill himself, an act of great loyalty to his commander."
    },
    {
        id: 'mcq10',
        question: "Who is NOT among the \"last of the brave Romans who have ever lived\" described by Brutus?",
        options: ["Cassius", "Titinius", "Pindarus", "All of the above"],
        answer: "Pindarus",
        explanation: "Brutus uses this phrase to describe the noble dead Romans, Cassius and Titinius. Pindarus was Cassius's bondman who fled after assisting in his master's suicide."
    },
    {
        id: 'mcq11',
        question: "Which of the following made Cassius commit suicide?",
        options: ["Error of Judgement", "Cowardice", "Overconfidence", "Pride and Arrogance"],
        answer: "Error of Judgement",
        explanation: "Cassius commits suicide because he misjudges the situation. He mistakenly concludes that Titinius has been captured by the enemy based on a mistaken report from Pindarus."
    },
    {
        id: 'mcq12',
        question: "Cassius' suicide is in keeping with his desire to:",
        options: ["achieve victory over his enemies", "live or die as a free man", "die for his friend Titinius", "None of the above"],
        answer: "live or die as a free man",
        explanation: "Cassius's suicide is consistent with his character's desire either to live or to die as a free man, rather than be captured."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Cassius: O look, Titinius, look, the villains fly!
Myself have to mine own turn'd enemy;
This ensign here of mine was turning back;
I slew the coward, and did take it from him.`,
      subquestions: `(i) Where does this scene take place? Who was the coward? Why did Cassius slay the coward?\n(ii) What did Titinius say about the error committed by Brutus? What were the immediate consequences of the error?\n(iii) On what errand does Cassius now send Titinius? What does Cassius tell Pindarus to do for him?\n(iv) Pindarus, Cassius' slave enters. What does he say? How does his information seem to confirm Cassius' fears?\n(v) What does Cassius think aloud while Pindarus is away? Why is the day significant to Cassius, in more ways than one?`,
      answer: `(i) This scene takes place on another part of the battlefield at Philippi. The coward was a fleeing ensign-bearer (a standard-bearer) from Cassius's own army. Cassius slew him for running away from the battle.\n(ii) Titinius explained that "Brutus gave the word too early". The immediate consequences were that while Brutus's troops were victorious over Octavius, they fell to looting instead of helping Cassius's men. This allowed Antony's army to encircle and defeat Cassius's troops.\n(iii) Cassius sends Titinius on an errand to ride towards the distant soldiers and find out if they are friends or enemies. He tells Pindarus to mount the hill and watch what happens to Titinius.\n(iv) Pindarus enters and urges Cassius to flee because Mark Antony is in his tents. This information confirms Cassius's fears that his army has been completely overthrown.\n(v) While Pindarus is away on the hill, Cassius thinks aloud that his life has come full circle. The day is significant because it is his birthday, and he now feels it will also be his death day.`
    },
    {
      extract: `Extract 2:
Titinius: I will be here again, even with a thought. [Exit]
Cassius: Go, Pindarus, get higher on that hill;
My sight was ever thick; regard Titinius,
And tell me what thou not'st about the field.`,
      subquestions: `(i) Who are Titinius and Pindarus? Where are they at the moment? Why?\n(ii) Explain the meaning of "even with a thought". Why has Titinius to go?\n(iii) What report did Pindarus now give about Titinius? How did Cassius interpret this report?\n(iv) What action did Cassius now take? How did the outcome of this action affect Pindarus?\n(v) How did (a) Titinius and (b) Brutus react to what Cassius did?`,
      answer: `(i) Titinius is a friend and officer of Cassius. Pindarus is Cassius's bondman. They are on a hill on the battlefield at Philippi. They are there because Cassius's forces have been defeated and are retreating.\n(ii) "Even with a thought" means he will return as quickly as a thought, or instantly. Titinius has to go because Cassius has sent him to identify the troops they see in the distance.\n(iii) Pindarus reported that he saw Titinius surrounded by horsemen who were shouting with joy. Cassius mistakenly interpreted this report to mean that his best friend Titinius had been captured by the enemy.\n(iv) Cassius, believing Titinius was captured, took the action of killing himself with Pindarus's help. The outcome for Pindarus was that he was now a free man, but he fled the country, wishing he had not been freed in this way.\n(v) (a) Titinius was greatly agitated, placed a victory garland on Cassius's head, and then killed himself out of loyalty.\n(b) Brutus found Cassius dead but could not weep yet for him. He made arrangements for the funeral and ordered his troops back into battle.`
    },
    {
      extract: `Extract 3:
Cassius: Come hither.
In Parthia did I take thee prisoner;
And then I swore thee, saving of thy life,
That whatsoever I did bid thee do
Thou shouldst attempt it. Come now, keep thine oath;`,
      subquestions: `(i) What had Pindarus been looking at? What did he report on what he thought he saw?\n(ii) What is meant by "I swore thee"? What had Pindarus promised to do? What is he asked to do now?\n(iii) Narrate what has happened a few minutes earlier which makes Cassius desperate. Was Cassius noble in taking the final decision about himself? Give a reason to justify your answer.\n(iv) What makes it difficult for Pindarus to keep his oath now?\n(v) What is the evil influence which drives Cassius towards self-destruction? Should one believe in such influences? Why?`,
      answer: `(i) Pindarus had been looking at Titinius from a hill. He reported that he saw Titinius surrounded by joyful soldiers, and mistakenly concluded that Titinius had been captured.\n(ii) "I swore thee" means "I made you take an oath." Pindarus had promised that in return for Cassius saving his life, he would do whatever Cassius commanded him to do. He is now asked to take Cassius's sword and kill him.\n(iii) A few minutes earlier, Cassius's army was defeated by Antony, and he mistakenly believes he has just witnessed the capture of his best friend, Titinius. One could argue his decision was noble in that his suicide was in keeping with his desire to die as a free man, rather than be captured.\n(iv) It is difficult for Pindarus to keep his oath because it requires him to kill his own master, a man who saved his life.\n(v) The evil influence is the spirit of Caesar, which is restless for revenge. Cassius himself dies with Caesar's name on his lips. Whether one should believe in such influences is a matter of interpretation, but in the play, the ghost is treated as a real force that ensures the murderers are brought to justice.`
    },
    {
      extract: `Extract 4:
Titinius: What, Pindarus! Where art thou, Pindarus?
Messala: Seek him, Titinius, whilst I go to meet
The noble Brutus, thrusting this report
Into his ears: I may say, thrusting it;
For piercing steel and darts envenomed
Shall be as welcome to the ears of Brutus
As tidings of this sight.`,
      subquestions: `(i) Where does this scene take place? Who are Titinius and Messala? Why have they come to the scene?\n(ii) Where has Pindarus gone? What has made him go away?\n(iii) What report is Messala going to give to Brutus? Why would the report be like "thrusting" something into Brutus' ear?\n(iv) Titinius recollects that Brutus has sent a wreath of victory to be given to Cassius. What victory is referred to? What does Titinius do with the wreath? How did Cassius misinterpret the signs of victory?\n(v) State briefly how Titinius pays his respects to Cassius, his dead friend.`,
      answer: `(i) The scene takes place on a hill on the battlefield at Philippi. Titinius and Messala are officers in the conspirators' army. They have come to find Cassius and tell him the good news that Brutus has been victorious over Octavius.\n(ii) Pindarus has fled from the country. He has gone away because he has just fulfilled his oath by helping Cassius kill himself and is now a free man.\n(iii) Messala is going to report the death of Cassius. It would be like "thrusting" because the news is as painful and unwelcome as being stabbed with "piercing steel and darts envenomed".\n(iv) The victory referred to is Brutus's defeat of Octavius's forces. Titinius places the wreath on the dead Cassius's brow. Cassius misinterpreted the signs of victory—the joyful shouts of Brutus's men—as the enemy celebrating the capture of Titinius.\n(v) Titinius pays his respects by placing the victory garland on Cassius's head and then, out of great loyalty and sorrow, takes Cassius's sword and kills himself.`
    },
    {
      extract: `Extract 5:
Titinius: Alas, thou hast misconstru'd every thing!
But, hold thee, take this garland on thy brow;
Thy Brutus bid me give it thee, and I
Will do his bidding. Brutus, come apace,
And see how I regarded Caius Cassius.`,
      subquestions: `(i) Where is Titinius at this moment? Whom is he talking to? Why?\n(ii) Explain the meaning of "misconstrued." What are the things that had been misconstrued? For what reason?\n(iii) What was the "garland" a sign of? Why did Brutus send it?\n(iv) Explain the meaning of "regarded." How did Titinius now show his regard? What did Brutus say about Titinius and Cassius when he arrived?\n(v) This scene shows the beginning of the end for the conspirators. What reason does Brutus give for what he saw? Explain how his reason is proved to be true in his own case later.`,
      answer: `(i) Titinius is on the battlefield, standing over the body of Cassius. He is talking to the dead Cassius because he is overcome with grief at finding his commander has killed himself over a mistake.\n(ii) "Misconstrued" means misinterpreted or misunderstood. Cassius had misconstrued the joyful shouts of Brutus's troops, believing they were the enemy celebrating the capture of Titinius. The reason was Pindarus's mistaken report.\n(iii) The garland was a wreath of victory. Brutus sent it to Cassius to share the good news that his forces had been victorious over Octavius.\n(iv) "Regarded" means how much he respected or honored him. Titinius showed his regard by taking Cassius's sword and killing himself out of loyalty. When Brutus arrived and found them both dead, he mourned them as "The last of all the Romans".\n(v) Brutus gives the reason that Caesar's spirit is still mighty and is turning their swords against themselves. His reason is proved true later when he also takes his own life after seeing Caesar's ghost a second time.`
    },
    {
      extract: `Extract 6:
Brutus: Are yet two Romans living such as these?
The last of all the Romans, fare thee well!
It is impossible that ever Rome
Should breed thy fellow.`,
      subquestions: `(i) Where is Brutus? About whom is he speaking?\n(ii) To whom does he refer to as "The last of all the Romans"? Why?\n(iii) Give a brief but clear account of the events which immediately precede this speech and give rise to it.\n(iv) This event combined with another factor caused the death of Brutus a little later. Explain briefly.\n(v) What instructions does Brutus now give his friends?`,
      answer: `(i) Brutus is on the battlefield at Philippi. He is speaking about the dead bodies of Cassius and Titinius.\n(ii) He refers to Cassius as "The last of all the Romans". He says this as a tribute to his friend, whom he respected as a great Roman, even after their quarrels.\n(iii) Immediately before this, Brutus has arrived on the scene to find both Cassius and Titinius dead. He has just learned from Messala how Cassius died due to a misunderstanding and how Titinius killed himself in grief.\n(iv) This event—the death of his best friend and partner—combined with the appearance of Caesar's ghost for a second time, leads Brutus to believe he is doomed and causes him to take his own life in the final scene.\n(v) Brutus gives instructions for Cassius's funeral to be held away from the camp so it does not demoralize the soldiers. He then orders his remaining troops into battle again for a second fight.`
    }
  ],
  testAndEvaluation: [
      {
      extract: `Extract 1:
Cassius: This day I breathed first; time is come round,
And where I did begin, there shall I end;
My life is run his compass. Sirrah, what news?
Pindarus: O my lord!
Cassius: What news?
Pindarus: Titinius is enclosed round about
With horsemen...`,
      subquestions: `(i) What attitude of mind do you think Cassius shows in his first speech?\n(ii) Why did Cassius send Pindarus up the hill to watch the happenings, instead of going himself?\n(iii) Explain clearly and fully what exactly has happened to Titinius.\n(iv) Explain the meaning of "Now some light" in the last line of the extract?\n(v) What does Pindarus do after descending? Why does he do it?`,
      answer: `(i) Cassius shows a fatalistic and resigned attitude. He believes that his life has come full circle and that he is destined to die on his birthday.\n(ii) Cassius sent Pindarus up the hill because his own eyesight was poor ("My sight was ever thick").\n(iii) Titinius was not captured. He had met with Brutus's friendly troops, who were shouting for joy because they had been victorious over Octavius. They gave Titinius a wreath of victory to give to Cassius.\n(iv) "Now some light" means "Now some of them are getting off their horses." The verb "to light" means to dismount.\n(v) After descending, Pindarus kills Cassius with Cassius's own sword. He does it because Cassius commands him to, and Pindarus is bound by an oath he swore to Cassius to obey any command.`
    },
    {
      extract: `Extract 2:
Brutus: Are yet two Romans living such as these?
The last of all the Romans, fare thee well!
It is impossible that ever Rome
Should breed thy fellow. Friends, I owe more tears
To this dead man than you shall see me pay—
I shall find time, Cassius, I shall find time.`,
      subquestions: `(i) Name the two Romans who have recently been dead. Give the meaning of "The Last of all the Romans."\n(ii) Mention the most eloquent tribute paid by Brutus to Cassius at his death. Do you think it to be correct. Justify your answer.\n(iii) Show, in spite of his sorrow, Brutus gives instructions for the burial and for the battle. What light does this throw on the character of Brutus?\n(iv) Where is Cassius' body to be buried? Why couldn't Brutus have his funeral in his army camp?\n(v) With reference to this scene show in what way the spirit of Caesar walks around and turns republican swords in their own "proper entrails"?`,
      answer: `(i) The two Romans who have recently died are Cassius and Titinius. "The Last of all the Romans" is a tribute from Brutus, meaning he considers Cassius to be the last of the great, noble Romans of the old Republic.\n(ii) The most eloquent tribute is calling him "The last of all the Romans, fare thee well!". One could argue it is correct from Brutus's perspective, as Cassius, despite his flaws, did fight and die to preserve the old Roman Republic.\n(iii) Despite his personal grief, Brutus practically orders Cassius's body to be sent to Thasos for burial so it doesn't "discomfort" the army. He then immediately rallies his men for a second fight. This shows that Brutus is a Stoic who prioritizes his duty as a general over his personal feelings.\n(iv) Cassius's body is to be sent to the island of Thasos for burial. Brutus could not have the funeral in the camp because he feared the sight would demoralize his soldiers and "discomfort us".\n(v) Caesar's spirit is shown to be at work when Cassius uses the same sword that killed Caesar to take his own life. Brutus recognizes this himself when he finds the bodies and exclaims, "O Julius Caesar, thou art mighty yet! Thy spirit walks abroad and turns our swords in our own proper entrails". Titinius also uses Cassius's sword to kill himself, further proving the point.`
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

