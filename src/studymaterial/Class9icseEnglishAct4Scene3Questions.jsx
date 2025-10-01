import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 4, Scene 3 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act IV, Scene 3",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "According to Cassius, how has Brutus done wrong to him?",
        options: ["By calling him untrustworthy of Caesar", "By condemning Lucius Pella for taking bribes", "By brushing aside his letters in defence of Lucius Pella", "Both (b) and (c)."],
        answer: "Both (b) and (c).",
        explanation: "Cassius is angry because Brutus condemned Lucius Pella for taking bribes and ignored Cassius's letters defending him."
    },
    {
        id: 'mcq2',
        question: "Why does Brutus remind Cassius of the month of March?",
        options: ["To remind him of his cruelty", "To remind him that Caesar was murdered for the sake of justice", "To remind him of the similar fate awaiting him", "None of the above."],
        answer: "To remind him that Caesar was murdered for the sake of justice",
        explanation: "Brutus reminds Cassius of the Ides of March to emphasize that they killed Caesar for justice, so they must not now become corrupt themselves."
    },
    {
        id: 'mcq3',
        question: "What does Brutus say he would like to be rather than be a Roman with a low character?",
        options: ["An ass", "A horse", "A dog", "None of the above"],
        answer: "A dog",
        explanation: "Brutus declares he would rather be a dog howling at the moon than a Roman who contaminates his fingers with bribes."
    },
    {
        id: 'mcq4',
        question: "With whom has Brutus compared Cassius' irritable mood?",
        options: ["A wasp", "A snake", "A dog", "A lion"],
        answer: "A wasp",
        explanation: "During their argument, Brutus mocks Cassius's quick temper by telling him he will use him for his amusement when he is 'waspish'."
    },
    {
        id: 'mcq5',
        question: "In which trait does Cassius say he is better than Brutus?",
        options: ["Soldier", "Orator", "Planner", "Organiser"],
        answer: "Soldier",
        explanation: "Cassius claims he is an 'elder soldier' and 'abler' to make decisions, asserting his superior experience in military matters."
    },
    {
        id: 'mcq6',
        question: "Why does Brutus ask Cassius for certain sum of money?",
        options: ["He cannot ask anybody else", "He cannot take it from Caesar's legacy", "He cannot raise it himself by foul means", "All of the above"],
        answer: "He cannot raise it himself by foul means",
        explanation: "Brutus, priding himself on his honesty, cannot bring himself to raise money through corrupt methods, so he must ask Cassius for it."
    },
    {
        id: 'mcq7',
        question: "What would Brutus do to raise money rather than using foul means?",
        options: ["Convert his property into money", "Convert his enemies into his friends", "Convert his heart into pieces of money", "None of the above"],
        answer: "Convert his heart into pieces of money",
        explanation: "Brutus uses a powerful metaphor, saying he would rather turn his heart into coins ('drachmas') than use corrupt means to get gold."
    },
    {
        id: 'mcq8',
        question: "Who would overlook a friend's fault, according to Brutus?",
        options: ["A selfish man", "A flatterer's eye", "An arrogant man", "An evil man"],
        answer: "A flatterer's eye",
        explanation: "Brutus suggests that a true friend should see his friend's faults but pretend not to, just as a flatterer would."
    },
    {
        id: 'mcq9',
        question: "With whom has Brutus compared his gentle nature?",
        options: ["A goat", "A mule", "A lamb", "None of the above"],
        answer: "A lamb",
        explanation: "After their fight, Cassius says that Brutus has a temper like a lamb when he is crossed, acknowledging his generally gentle nature."
    },
    {
        id: 'mcq10',
        question: "How does Brutus carry anger within his nature?",
        options: ["As a flint carries fire", "As a drop of water", "As a match stick", "As a wick of a candle"],
        answer: "As a flint carries fire",
        explanation: "Cassius describes Brutus's anger as being like a flint, which when struck, shows a brief, hasty spark of fire and then is cold again."
    },
    {
        id: 'mcq11',
        question: "What reason does Brutus give for his anger?",
        options: ["His misfortune", "His griefs", "His failures", "None of the above"],
        answer: "His griefs",
        explanation: "Brutus admits that his ill temper is partly due to the 'many griefs' he is suffering, most notably the news of Portia's death."
    },
    {
        id: 'mcq12',
        question: "How did Portia die?",
        options: ["By jumping from Mount Olympus", "By drowning in the sea", "By swallowing poison", "By swallowing burning coals"],
        answer: "By swallowing burning coals",
        explanation: "Brutus reveals the shocking news that Portia, distracted with grief and worry, took her own life by swallowing fire, or hot coals."
    },
    {
        id: 'mcq13',
        question: "What was Brutus' fear in waiting for the enemy at Sardis?",
        options: ["Local population would attack them", "Local population would join the enemy", "The enemy would approach them from other side", "All of the above."],
        answer: "Local population would join the enemy",
        explanation: "Brutus argues for marching to Philippi, fearing that the people between their camp and Philippi are not loyal and will join Antony's army."
    },
    {
        id: 'mcq14',
        question: "Messala brings the news of killing of which of the following senators by Antony and Octavius?",
        options: ["Lucilius", "Titinius", "Cicero", "Cassius"],
        answer: "Cicero",
        explanation: "Messala confirms the news that the Triumvirate has put a hundred senators to death, including the famous orator, Cicero."
    },
    {
        id: 'mcq15',
        question: "What does the ghost of Caesar stand for?",
        options: ["Spirit of Caesar, restless for revenge", "Spirit of Caesar, restless for saving Roman Republic", "Spirit of Caesar, restless for being betrayed by Brutus", "None of the above."],
        answer: "Spirit of Caesar, restless for revenge",
        explanation: "The Ghost of Caesar represents the powerful, lingering consequences of the assassination and the spirit of revenge that now haunts Brutus."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Brutus: You wrong'd yourself to write in such a case.
Cassius: In such a time as this it is not meet
That every nice offence should bear his comment.`,
      subquestions: `(i) Where are Brutus and Cassius? What charge does Brutus lay against Cassius? \n(ii) What had Cassius just complained of to make Brutus say this? \n(iii) What advice is Cassius giving Brutus? Was he being practical? \n(iv) What did Brutus accuse Cassius of when he said, "Let me tell you yourself..."? \n(v) Brutus accuses Cassius of other faults. Point out two and say how Cassius reacted.`,
      answer: `(i) They are inside Brutus's tent at the military camp in Sardis. Brutus charges Cassius with being corrupt, having an "itching palm" (being greedy).\n(ii) Cassius had complained that Brutus condemned Lucius Pella for taking bribes, despite Cassius sending letters in his defense. Brutus means Cassius did himself a disservice by defending a corrupt man.\n(iii) Cassius advises that during a military crisis, it is not appropriate to criticize every minor offense. Yes, he was being practical, understanding they needed to focus on the war.\n(iv) Brutus accused Cassius himself of having an "itching palm" and selling offices for gold. Cassius reacted with shock and anger.\n(v) Brutus also accuses Cassius of having a quick temper ("rash choler") and denying him gold. Cassius reacted with despair, offering his dagger to Brutus to kill him. Brutus was not being fair, letting his own grief make him harsh.`
    },
    {
      extract: `Extract 2:
Brutus: Remember March, the ides of March remember:
Did not great Julius bleed for justice' sake?
What villain touch'd his body, that did stab,
And not for justice?`,
      subquestions: `(i) What sort of corruption is referred to? What was Cassius's reaction just before this? \n(ii) What does the ides of March signify to them? Why did Julius bleed "for justice sake"? \n(iii) Give two examples from this scene to indicate Brutus was really angry. \n(iv) Explain the bitter irony in the quarrel over money between Brutus and Cassius. \n(v) How was the disagreement between them resolved?`,
      answer: `(i) The corruption is Cassius's alleged practice of taking bribes. Cassius reacted with outrage to the accusation.\n(ii) The Ides of March signifies the day they assassinated Caesar. Brutus says he bled "for justice' sake" to remind Cassius of their noble reason for the act—to save Rome from tyranny, not for personal gain.\n(iii) 1) Brutus dismisses Cassius insultingly as a "slight man." 2) He mocks Cassius's temper, saying he will use his "waspish" moods for his own amusement.\n(iv) The irony is that Brutus, who prides himself on honesty, condemns Cassius for raising money corruptly but then gets angry at Cassius for not sharing that same ill-gotten money with him.\n(v) It was resolved when Cassius, in an emotional gesture, offered his bare chest and dagger to Brutus, telling him to kill him. This broke the tension, and they reconciled.`
    },
    {
      extract: `Extract 3:
Brutus: By the gods,
You shall digest the venom of your spleen,
Though it do split you; for, from this day forth,
I'll use you for my mirth, yea, for my laughter,
When you are waspish.`,
      subquestions: `(i) Give the meaning of: "You shall digest the venom of your spleen..." \n(ii) Give two examples of taunts Brutus had used earlier. \n(iii) Under what conditions had Cassius said he was a better soldier? How accurate is his assessment? \n(iv) What is meant by "vaunting"? How could Cassius prove it? \n(v) Who is the strange visitor that enters? What is his purpose?`,
      answer: `(i) It means, "You will have to swallow your own anger, even if it destroys you." Brutus says he will use Cassius's irritable moods for his own amusement.\n(ii) 1) Brutus called Cassius a "slight man!" 2) He taunted him by asking if he should be frightened when a "madman stares."\n(iii) Cassius had claimed he was an "elder soldier" and more experienced. His assessment is accurate; he is a more practical military strategist, and his plan to wait at Sardis was strategically sound.\n(iv) "Vaunting" means boasting. Cassius could prove his boasting by demonstrating superior military skill in the upcoming battle.\n(v) The visitor is a poet. His purpose is to urge the generals to stop fighting and be friends. Brutus reacts with annoyance.`
    },
    {
      extract: `Extract 4:
Cassius: There is my dagger,
And here my naked breast; within, a heart
Dearer than Pluto's mine, richer than gold:
If that thou be'st a Roman, take it forth.`,
      subquestions: `(i) In what state is Cassius? Why is his heart richer than gold? \n(ii) Who is Pluto? Why is Cassius's heart compared to his mine? \n(iii) When did Cassius deny gold to Brutus? Why did Brutus need it? \n(iv) What explanation did Cassius give for not giving the gold? \n(v) What is the dramatic importance of this dialogue?`,
      answer: `(i) Cassius is in a state of extreme emotional distress and despair. His heart is richer than gold because it contains his deep, loyal love for Brutus.\n(ii) Pluto is the god of the underworld and of wealth. Cassius's heart is compared to his mine to emphasize that his love is more valuable than all the riches on earth.\n(iii) Brutus had recently sent a messenger to Cassius asking for gold to pay his soldiers.\n(iv) Cassius explained that he did not deny the gold, but that the messenger was a "fool" who must have misrepresented his answer. Brutus's anger breaks, and they reconcile.\n(v) This is the emotional climax of the argument. Cassius's dramatic gesture breaks through Brutus's anger and allows for their reconciliation, which is crucial for reuniting them before their final battle.`
    },
    {
      extract: `Extract 5:
Cassius: Portia, art thou gone?
Brutus: No more, I pray you.
Messala, I have here received letters,
That young Octavius and Mark Antony
Come down upon us with a mighty power...`,
      subquestions: `(i) Where has Portia gone? Why is Brutus so abrupt? \n(ii) Who is Messala? What is the "self-same tenor" he speaks of? \n(iii) What other news does Messala give just after this? \n(iv) What does Brutus know about Octavius and Antony from his letters? \n(v) How strong had Octavius and Antony become? What was Cicero's fate?`,
      answer: `(i) Portia is dead. Brutus is abrupt because as a Stoic, he believes in enduring hardship without showing emotion and wants to focus on military matters.\n(ii) Messala is a high-ranking officer. The "self-same tenor" means his letters contain the exact same information as Brutus's: that Antony and Octavius are marching toward Philippi.\n(iii) Messala gives the news that Antony, Octavius, and Lepidus have put one hundred senators to death.\n(iv) Brutus knows they have a powerful army, are marching to Philippi, and have executed seventy senators, including Cicero.\n(v) They had become so strong their power was one reason Portia fell into despair. Cicero was one of the senators they executed.`
    },
    {
      extract: `Extract 6:
Brutus: The enemy increaseth every day;
We, at the height, are ready to decline.
There is a tide in the affairs of men,
Which, taken at the flood, leads on to fortune...`,
      subquestions: `(i) To whom is Brutus speaking? What is meant by "Our legions are brim-full, our cause is ripe"? \n(ii) Give two arguments Brutus gives for his army's advantageous position. \n(iii) Brutus says, "The enemy increaseth every day." How does it increase? \n(iv) "There is a tide in the affairs of men." What comparison is made? \n(v) According to Brutus, "On such a full sea are we now afloat." How is this statement valid?`,
      answer: `(i) He is speaking to Cassius, Titinius, and Messala. The phrase means their armies are at maximum strength and their cause is at its peak moment for action.\n(ii) 1) They have gathered all possible support from their friends. 2) Their armies are at full strength.\n(iii) The enemy's forces increase as they march because they can recruit soldiers from the local population, who are not loyal to Brutus and Cassius.\n(iv) The comparison is between life and a sea voyage. Life has moments of high tide (opportunity) and low tide. If you act at high tide, you succeed; if you miss it, you fail.\n(v) The statement is valid in Brutus's view because he believes their army is at its absolute peak. He feels this is their "high tide"—their single best opportunity to strike.`
    },
    {
      extract: `Extract 7:
Brutus: How ill this taper burns!—Ha! who comes here?
I think it is the weakness of mine eyes
That shapes this monstrous apparition.
It comes upon me. Art thou any thing?`,
      subquestions: `(i) To whom does Brutus speak? What is the setting? \n(ii) What is the "monstrous apparition"? \n(iii) What does Brutus wonder about the apparition? What is its effect on him? \n(iv) What does the apparition say? What is its significance? \n(v) Who else was present? Did they see it? Was it real or imagined?`,
      answer: `(i) Brutus is speaking to the Ghost of Caesar. The setting is late at night inside Brutus's tent; he is alone and reading.\n(ii) The apparition is the Ghost of Caesar. It is "monstrous" because it is an unnatural and terrifying sight.\n(iii) Brutus wonders if it is real or a trick of his tired eyes. The effect is terror; it makes his "blood cold" and his "hair to stare" (stand on end).\n(iv) The apparition identifies itself as his "evil spirit" and says, "thou shalt see me at Philippi." This is a chilling prophecy of doom, foreshadowing Brutus's death.\n(v) His servants were present but asleep. They did not see it. While it could be a product of his guilty conscience, the play presents it as a real supernatural event, representing Caesar's spirit seeking revenge.`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Cassius: You know that you are Brutus that speaks this,
Or, by the gods, this speech were else your last.
Brutus: The name of Cassius honours this corruption,
And chastisement doth therefore hide his head.`,
        subquestions: `(i) Where are the speakers? What has Brutus just said to make Cassius so aggressive? \n(ii) Explain "this corruption" and "chastisement doth therefore hide his head." \n(iii) Why has Cassius come to meet Brutus in this scene? \n(iv) What information is the cause of Brutus's bad temper? \n(v) How does Brutus accuse Cassius further? How does Cassius reply?`,
        answer: `(i) They are in Brutus's tent at Sardis. Brutus has just accused Cassius of having an "itching palm" (being greedy and taking bribes).\n(ii) "This corruption" is the bribery Brutus has accused Cassius of. "Chastisement doth therefore hide his head" means that because a respected man like Cassius is involved, punishment is afraid to show itself.\n(iii) He has come to confront Brutus angrily for publicly condemning one of his officers for taking bribes, ignoring Cassius's letters on the matter.\n(iv) The true cause is his immense grief. He later reveals that his wife, Portia, is dead.\n(v) Brutus further accuses Cassius of denying him gold to pay his soldiers. Cassius replies that he did not deny him and the messenger must have been a "fool" who delivered the wrong message.`
    },
    {
        extract: `Extract 2:
Brutus: Good reasons must, of force, give place to better.
The people 'twixt Philippi and this ground
Do stand but in a forc'd affection;
For they have grudg'd us contribution...`,
        subquestions: `(i) What good reasons are given by Cassius against marching to Philippi? \n(ii) Briefly state the better reasons put forward by Brutus. Whose reasoning proved right? \n(iii) Give the meaning of: a) Do stand but in a forc'd affection, b) For they have grudged us contribution. \n(iv) How does this scene create suspicion in the minds of the audience? \n(v) What have Brutus and his friends been doing to make themselves unpopular?`,
        answer: `(i) Cassius argues it is better for the enemy to seek them out, so Antony's army will waste resources and tire out its soldiers, while their own army remains rested.\n(ii) Brutus argues that the people between their camp and Philippi are not loyal and will join the enemy, making them stronger. He believes they must march to prevent this. Cassius's reasoning proved right; Brutus's decision was a fatal military error.\n(iii) **Do stand but in a forc'd affection:** The local people are only pretending to be loyal. **For they have grudged us contribution:** They have reluctantly and resentfully given supplies to our army.\n(iv) The scene creates suspicion by showing deep divisions in leadership. The previous scene showed tension between Antony and Octavius, and this scene reveals a bitter quarrel between Brutus and Cassius, suggesting both alliances are unstable.\n(v) They have been forcing the local population to give them "contribution" (supplies and money). The danger is that these disloyal people are likely to join Antony's army, increasing its strength.`
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

