import React, { useState, useEffect } from 'react';

// --- Workbook Data for Act 1, Scene 2 ---
const workbookData = {
  topic: "Julius Caesar",
  chapter: "Act I, Scene 2",
  multipleChoiceQuestions: [
    {
        id: 'mcq1',
        question: "Caesar dismissed the soothsayer when he warned him of the \"ides of March\" as:",
        options: ["a daydreamer", "an ignorant", "a superstitious", "a feeble creature"],
        answer: "a daydreamer",
        explanation: "Caesar shuns the Soothsayer's warning about his potential danger. His vanity leads him to believe he is secure from any attack, so he does not take the warning seriously."
    },
    {
        id: 'mcq2',
        question: "What would happen when Antony would touch Calpurnia during the traditional footrace?",
        options: ["She would be cured of insomnia", "She would be cured of epilepsy", "She would be cured of infertility", "She would be cured of timidity"],
        answer: "She would be cured of infertility",
        explanation: "Caesar, being superstitious, believes in the omen that if Antony touches Calpurnia during the sacred race, it will cure her barrenness since he has no child."
    },
    {
        id: 'mcq3',
        question: "In this scene who has been compared to a rider of a stubborn horse?",
        options: ["Caesar", "Cassius", "Brutus", "Casca"],
        answer: "Brutus",
        explanation: "This is a common interpretation of Cassius's effort to guide the reluctant Brutus, who is slow to join the conspiracy. Cassius is pleased when he has managed to strike some \"fire\" from Brutus."
    },
    {
        id: 'mcq4',
        question: "According to Brutus, which trait of Antony does he lack?",
        options: ["Bravery", "Liveliness", "Tactfulness", "None of these"],
        answer: "Liveliness",
        explanation: "Brutus states in the play that he lacks Antony's \"quick spirit.\" This contrasts his own \"reserved and thoughtful\" nature with Antony's more playful and energetic one."
    },
    {
        id: 'mcq5',
        question: "What did Cassius accuse Brutus of in this scene?",
        options: ["Being unfriendly towards him", "Being too selfish", "Being too busy", "Being irrational"],
        answer: "Being unfriendly towards him",
        explanation: "At the beginning of their private conversation, Cassius tells Brutus that he has seen less affection and friendliness from him lately."
    },
    {
        id: 'mcq6',
        question: "What reason did Brutus give for being unfriendly towards Cassius?",
        options: ["Triumphant return of Caesar", "Fear of losing his freedom", "His own conflicting emotions", "None of the above"],
        answer: "His own conflicting emotions",
        explanation: "Brutus explains that his mood is not because of Cassius but is due to an internal struggle, saying the trouble is turned \"merely upon myself.\""
    },
    {
        id: 'mcq7',
        question: "What is meant by 'age's yoke' as spoken by Cassius?",
        options: ["Oppression under Caesar's rule", "The age of burden under monarchists", "The era of end of republicanism", "None of the above"],
        answer: "Oppression under Caesar's rule",
        explanation: "Cassius refers to the \"yoke which is fastened upon Rome,\" implying the oppressive burden of Caesar's dictatorship that threatens the freedom of Roman citizens."
    },
    {
        id: 'mcq8',
        question: "What does Cassius say to manipulate Brutus to his side?",
        options: ["Brutus is God-like", "Brutus cannot see his own worthiness", "Brutus is more noble than Caesar", "None of the above"],
        answer: "Brutus cannot see his own worthiness",
        explanation: "Cassius asks Brutus if he can see his own face and then offers to be his \"mirror\" to show him his own worth, which Cassius claims others in Rome greatly admire."
    },
    {
        id: 'mcq9',
        question: "To all the rout, then hold me dangerous. What is meant by rout and whom does it hold dangerous?",
        options: ["Group; Caesar", "Enemy; Brutus", "Mob; Cassius", "Tribunes; Cassius"],
        answer: "Mob; Cassius",
        explanation: "In this line from the play, Cassius tells Brutus that if he were the type of person to make promises to the whole mob (\"rout\"), then Brutus should consider him (Cassius) to be dangerous."
    },
    {
        id: 'mcq10',
        question: "For whom does Brutus say, I love him well?",
        options: ["Antony", "Casca", "Cassius", "Caesar"],
        answer: "Caesar",
        explanation: "Brutus admits his personal affection for Caesar, even while expressing his fear that Caesar might become king, which highlights his internal conflict."
    },
    {
        id: 'mcq11',
        question: "Which 'virtue' of Brutus is Cassius talking about in this scene?",
        options: ["He loves Caesar more than himself", "He loves honour more than he fears of death", "He prefers death more than money", "None of the above."],
        answer: "He loves honour more than he fears of death",
        explanation: "This refers to the line where Brutus declares his personal code of conduct, which shows his deep commitment to personal honour and nobility."
    },
    {
        id: 'mcq12',
        question: "Cassius compares himself to which ancestor of his when he talks about saving Caesar from drowning?",
        options: ["Aeneas", "Prometheus", "Achilles", "Aphrodite"],
        answer: "Aeneas",
        explanation: "Cassius compares his act of saving Caesar from the Tiber River to the mythical hero Aeneas saving his father from Troy, a comparison meant to emphasize Caesar's weakness."
    },
    {
        id: 'mcq13',
        question: "According to Cassius, Caesar is mortal because he is subject to:",
        options: ["drowning and fever", "sickness and death", "temptation and fear", "superstition and fate"],
        answer: "sickness and death",
        explanation: "Cassius argues that Caesar is just a normal man, subject to sickness and death like anyone else, using examples of his physical struggles to prove his point."
    },
    {
        id: 'mcq14',
        question: "What does Cassius convince Brutus of by giving examples of Caesar's drowning and sickness episodes?",
        options: ["Caesar is brave and sturdy", "Caesar is prone to diseases", "Caesar is not liked by people", "Caesar is weak and vulnerable"],
        answer: "Caesar is weak and vulnerable",
        explanation: "Cassius tells these stories to prove that Caesar is not a god but a fragile human. He wants Brutus to see that such a weak man is unworthy of absolute power."
    },
    {
        id: 'mcq15',
        question: "Which trait of Cassius personality is revealed in this scene?",
        options: ["Clever opportunistic", "Clever Manipulator", "Fair idealistic", "Passionate politician"],
        answer: "Clever Manipulator",
        explanation: "Cassius is shown to be a clever manipulator who skillfully incites Brutus. His soliloquy at the end of the scene confirms him as a cold-blooded schemer."
    },
    {
        id: 'mcq16',
        question: "Which characteristic trait of Brutus is revealed when he is confronted with making moral choices?",
        options: ["Slow, confused idealist", "Quick, active thinker", "Slow, deliberate thinker", "None of the above."],
        answer: "Slow, deliberate thinker",
        explanation: "Brutus shows that he is a slow and thoughtful person when faced with moral decisions. He wants to consider Cassius's ideas further in private before committing to anything."
    },
    {
        id: 'mcq17',
        question: "Cassius says that Rome has space only for one great man. Who is the man Cassius is referring to?",
        options: ["Brutus", "Caesar", "Antony", "Octavius"],
        answer: "Caesar",
        explanation: "Cassius complains that Caesar has become a giant who is the only man who matters in Rome, overshadowing everyone else."
    },
    {
        id: 'mcq18',
        question: "What does Caesar think about Cassius in this scene?",
        options: ["He thinks too much and is dangerous", "He is too thin to be a capable warrior", "He is too passive to be given a task", "He is too passive to be a warrior"],
        answer: "He thinks too much and is dangerous",
        explanation: "Caesar reveals to Antony that he is suspicious of Cassius, accurately judging him as a man who thinks too much and is therefore a threat."
    },
    {
        id: 'mcq19',
        question: "For whom does Caesar say that 'Seldom he smiles'?",
        options: ["Antony", "Brutus", "Cassius", "None of the above."],
        answer: "Cassius",
        explanation: "This is part of Caesar's description of Cassius to Antony, explaining why he finds men like Cassius to be dangerous."
    },
    {
        id: 'mcq20',
        question: "Casca's description of Caesar declining the crown thrice, tells us which characteristic trait of Casca?",
        options: ["He was a gossip-monger", "He had an irrational prejudice against Caesar", "He had a favourable impression about Caesar", "None of the above"],
        answer: "He had an irrational prejudice against Caesar",
        explanation: "Casca's description is very cynical, implying that Caesar is a complete hypocrite. This shows Casca's own bias and prejudice against him."
    },
    {
        id: 'mcq21',
        question: "What does Cassius' soliloquy at the end of this scene predict?",
        options: ["Brutus' will not join them", "Caesar would quell their conspiracy", "Troublesome times ahead", "None of the above."],
        answer: "Troublesome times ahead",
        explanation: "Cassius's final speech, where he outlines his plan to forge letters, sets the conspiracy in motion and predicts the conflict and trouble that is to come."
    }
  ],
  contextualQuestions: [
    {
      extract: `Extract 1:
Caesar: Forget not, in your speed, Antonius,
To touch Calpurnia; for our elders say,
The barren, touched in this holy chase,
Shake off their sterile curse.`,
      subquestions: `(i) Where does the scene take place? Why have the characters gone there? \n(ii) What is the "holy chase"? Who is assigned to take it? \n(iii) What instructions did Caesar give to Calpurnia earlier? Which trait of Caesar is revealed? \n(iv) Give the meaning of: a) Shake off their sterile curse, b) "Do this", it is perform'd \n(v) Explain the relationship between Caesar and Antony.`,
      answer: `(i) The scene is in a public area in Rome. The characters are there for the triumphal procession and the Feast of the Lupercalia.\n(ii) The "holy chase" is the sacred race of Lupercalia. Mark Antony is assigned to run in it.\n(iii) The text doesn't state his instructions to Calpurnia, but he tells Antony to touch her. This reveals Caesar is superstitious.\n(iv) **Shake off their sterile curse:** This means to be cured of infertility. **"Do this", it is perform'd:** This highlights Caesar's absolute power, meaning his orders are carried out immediately.\n(v) Their relationship is that of a powerful master (Caesar) and a completely loyal servant (Antony). Antony's response shows his total devotion.`
    },
    {
      extract: `Extract 2:
Soothsayer: Beware the ides of March.
Caesar: What man is that?
Brutus: A soothsayer bids you beware the ides of March.`,
      subquestions: `(i) What is meant by "Beware the ides of March"? What is its significance? \n(ii) What was Caesar's reaction to the warning? What does it show about his character? \n(iii) What is the soothsayer's motive? Which theme is revealed? \n(iv) Why does Caesar want the soothsayer to look at him? What does he think of him? \n(v) Give two other examples of warnings Caesar receives.`,
      answer: `(i) It's a warning to be careful on March 15th. Its significance is that it's a direct prophecy of the day Caesar will be assassinated.\n(ii) Caesar dismisses the warning. This shows he is arrogant, proud, and has extreme vanity, believing he is invulnerable.\n(iii) The soothsayer's motive is to genuinely warn Caesar. The theme revealed is pride and blindness, as Caesar's vanity causes him to ignore clear warnings.\n(iv) Caesar wants to see his face to assert authority. After hearing the warning again, he calls the soothsayer a "dreamer," showing he thinks the man is not credible.\n(v) Other warnings include his wife Calpurnia's dreams, bad omens from his priests, and a letter from Artemidorus.`
    },
    {
      extract: `Extract 3:
Cassius: Brutus, I do observe you now of late:
I have not from your eyes that gentleness
And show of love as I was wont to have.
[...]
Brutus: Vexed I am
Of late with passions of some difference...`,
      subquestions: `(i) Where are Brutus and Cassius? What does Cassius observe? \n(ii) Why does Brutus not go to the games? Who does he contrast himself with? \n(iii) What does Cassius accuse Brutus of? What is Brutus's reply? \n(iv) Give the meaning of: a) You bear too stubborn and too strange a hand, b) Vexed I am... with passions of some difference. \n(v) What is Cassius's motive in professing friendship? What type of person is he?`,
      answer: `(i) They are in a public place in Rome, talking privately. Cassius observes that Brutus has been acting distant and unfriendly.\n(ii) Brutus doesn't go because he's troubled by internal conflicts. He contrasts himself with Antony, saying he lacks Antony's "quick spirit."\n(iii) Cassius accuses Brutus of being harsh and distant. Brutus replies that his troubled look is a result of his own internal conflicts, not directed at friends.\n(iv) **You bear too stubborn and too strange a hand:** You are acting in a harsh, cold, and unfamiliar way. **Vexed I am... with passions of some difference:** Lately, I have been troubled by conflicting emotions.\n(v) Cassius's motive is to manipulate Brutus by pretending to be a concerned friend, so he can turn him against Caesar. This shows Cassius is a clever and manipulative schemer.`
    },
    {
      extract: `Extract 4:
Brutus: ...I do fear, the people
Choose Caesar for their king.
Cassius: Ay, do you fear it?
Then must I think you would not have it so.
Brutus: I would not, Cassius, yet I love him well.`,
      subquestions: `(i) Where are Brutus and Cassius? Who are shouting? \n(ii) What reason does Brutus give for the shouting? What was the real reason? \n(iii) Why was Brutus afraid of Caesar becoming king? \n(iv) What two conflicting emotions is Brutus undergoing? \n(v) How did Cassius finally convince Brutus that Caesar should be killed?`,
      answer: `(i) They are in a public place. The people are shouting at the games offstage.\n(ii) Brutus fears they are shouting because they are making Caesar king. The real reason is that Antony offered Caesar a crown, which he refused.\n(iii) Brutus valued the Roman Republic and its laws. He would rather be a poor villager than a citizen of Rome under a dictatorship.\n(iv) He is conflicted between his personal love and friendship for Caesar and his public duty to protect the liberty of Rome.\n(v) Cassius convinces him by highlighting Caesar's weaknesses, reminding Brutus of his noble, king-hating ancestor, and using forged letters to suggest the public wants Brutus to act.`
    },
    {
      extract: `Extract 5:
Cassius: I, as Aeneas, our great ancestor,
Did from the flames of Troy upon his shoulder
The old Anchises bear, so from the waves of Tiber
Did I the tired Caesar.`,
      subquestions: `(i) Who was Aeneas? What legendary incident is referred to? \n(ii) Why does Cassius compare himself to Aeneas? \n(iii) Who is "this man"? What is Cassius's grudge against him? \n(iv) What three aspects of equality between himself and Caesar does Cassius state? \n(v) Narrate the incident Cassius refers to. What was his conclusion?`,
      answer: `(i) Aeneas was a mythical hero of Troy and Rome. The incident is when Aeneas carried his father, Anchises, on his shoulders to save him from the burning city of Troy.\n(ii) He makes the comparison to emphasize Caesar's weakness, whom he had to save from the river, making his own actions seem heroic in contrast.\n(iii) "This man" is Caesar. Cassius's grudge is that this physically weak man is now so powerful that Cassius must bow to him.\n(iv) The three aspects are: 1) being "born free," 2) having "fed as well," and 3) being able to "endure the winter's cold."\n(v) Cassius saved Caesar from drowning in the Tiber during a swimming challenge. Cassius concluded that Caesar was not a god but a fragile human, unworthy of such power.`
    },
    {
      extract: `Extract 6:
Cassius: When went there by an age since the great flood,
But it was fam'd with more than with one man?
[...]
There was a Brutus once that would have brook'd
Th' eternal devil to keep his state in Rome
As easily as a king.`,
      subquestions: `(i) What is "the great flood"? \n(ii) Who is "one only man"? \n(iii) What arguments does Cassius give to show Caesar is not superior to Brutus? \n(iv) Who was the "Brutus" of the past? What would he have done? \n(v) How was Cassius a shrewd manipulator in this instance?`,
      answer: `(i) It refers to the mythical great flood from ancient times, used to ask if there has ever been an age in history where only one man was famous.\n(ii) The "one only man" is Caesar, who Cassius feels has overshadowed everyone else in Rome.\n(iii) Cassius argues that the name "Brutus" is just as powerful and respected as "Caesar."\n(iv) This refers to Lucius Junius Brutus, an ancestor of Marcus Brutus, who was famous for driving the ancient kings from Rome.\n(v) Cassius is shrewd by reminding Brutus of his famous ancestor, appealing to his family pride and planting the idea that Brutus has a duty to act against Caesar.`
    },
    {
      extract: `Extract 7:
Caesar: He reads much;
He is a great observer, and he looks
Quite through the deeds of men; he loves no plays...
Such men as he be never at heart's ease
Whiles they behold a greater than themselves...`,
      subquestions: `(i) Of whom is Caesar speaking? What two traits does he mention? \n(ii) Has Caesar judged this person's character accurately? Explain. \n(iii) What type of man has Caesar said he prefers? How is this person different? \n(iv) What physical weakness does Caesar reveal about himself? \n(v) Give two other examples of Caesar's physical weakness.`,
      answer: `(i) Caesar is speaking of Cassius. Two traits are that he is a great observer who can see through people's actions, and that he seldom smiles.\n(ii) Yes, his judgment is very accurate. Earlier, Cassius proved he is a "great observer" by skillfully analyzing and manipulating Brutus.\n(iii) Caesar prefers men who are "fat" and content. Cassius is the opposite, with a "lean and hungry look," and is never at ease.\n(iv) Caesar reveals that he is deaf in one ear, which contrasts with his proclamation of being fearless.\n(v) Two other weaknesses are his near-drowning in the Tiber and his "falling sickness" (epilepsy).`
    }
  ],
  testAndEvaluation: [
    {
        extract: `Extract 1:
Brutus: No, Cassius; for the eye sees not itself
But by reflection, by some other things.`,
        subquestions: `(i) How did Cassius mistake Brutus' feelings? How was it cleared? \n(ii) What was the consequence of this misunderstanding on Cassius? \n(iii) Give the meaning of the quote in the extract. \n(iv) Who volunteers to be a mirror to Brutus and why? \n(v) According to Cassius, what do people in Rome say about Brutus?`,
        answer: `(i) Cassius mistook Brutus's reserved mood as unfriendliness. Brutus cleared it up by explaining his troubled look was due to his own internal conflicts.\n(ii) Cassius had kept silent and "buried" his important thoughts instead of sharing them with Brutus.\n(iii) It means a person cannot see their own qualities directly; they need a reflection, like a mirror or the words of another person, to understand themselves.\n(iv) Cassius volunteers to be a "mirror" to manipulate Brutus by flattering him, promising to show him the "hidden worthiness" that he claims all of Rome sees in him.\n(v) Cassius claims that many respected Romans, suffering under Caesar's rule, have been speaking of Brutus and wishing he would open his eyes to the situation.`
    },
    {
        extract: `Extract 2:
Cassius: I know that virtue to be in you, Brutus,
As well as I do know your outward favour.
Well, honour is the subject of my story.`,
        subquestions: `(i) Where are Brutus and Cassius? What virtue is Cassius referring to? \n(ii) Give the meaning of: "I had as lief not be, as live to be / In awe of such a thing as I myself." \n(iii) Give two incidents Cassius uses to show Caesar is weak. \n(iv) What happens after Cassius' speech that helps his cause? \n(v) What stand does Brutus take that makes Cassius glad?`,
        answer: `(i) They are in a public place in Rome. The virtue is Brutus's love of honour. Cassius's purpose is to appeal to this honour to draw Brutus into the conspiracy.\n(ii) It means: "I would rather not exist than live in fear and awe of another man who is merely my equal."\n(iii) He uses the stories of rescuing Caesar from drowning in the Tiber and of Caesar having a fever in Spain.\n(iv) The shouts from the crowd help Cassius, as they make Brutus voice his fear of Caesar becoming king, allowing Cassius to build on that fear.\n(v) Brutus says he will consider what Cassius has said and that he would rather be a villager than live under a dictatorship. This reveals Brutus's trait as a slow, deliberate thinker.`
    },
    {
        extract: `Extract 3:
Cassius: As they pass by, pluck Casca by the sleeve,
And he will, after his sour fashion, tell you
What hath proceeded worthy note today.`,
        subquestions: `(i) What are the "games" being referred to? \n(ii) Explain why Cassius says, "after his sour fashion"? \n(iii) What is the meaning of "worthy of note"? What did Casca relate? \n(iv) To whom is Brutus drawing Cassius' attention as they return? \n(v) What information does Casca give about Marullus and Flavius?`,
        answer: `(i) The "games" are the celebrations for the Feast of the Lupercalia. Caesar spoke of them earlier.\n(ii) Cassius says this because Casca has a blunt, cynical, and contemptuous way of speaking.\n(iii) "Worthy of note" means anything important that happened. Casca related that Antony offered the crown to Caesar three times and Caesar refused it, describing it all as a cynical act.\n(iv) Brutus draws Cassius's attention to Caesar and his followers, noting Caesar looks angry, Calpurnia pale, and Cicero has fiery eyes.\n(v) Casca reports that Marullus and Flavius have been "put to silence" for removing decorations from Caesar's statues, showing Caesar's ruthless side.`
    },
    {
        extract: `Extract 4:
Cassius: I will this night,
In several hands, in at his windows throw,
As if they came from several citizens,
Writings all tending to the great opinion
That Rome holds of his name...`,
        subquestions: `(i) When does Cassius speak these words? Whom is he referring to? \n(ii) Where are these writings to be thrown? What is the intended effect? \n(iii) Explain "several hands" and "obscurely". \n(iv) What aspect of Cassius' character do these words illustrate? \n(v) Give two methods Cassius uses to win over Brutus.`,
        answer: `(i) Cassius speaks these words in a soliloquy after Brutus has left. He is referring to Brutus.\n(ii) They are to be thrown into Brutus's house. The intended effect is to make Brutus think the public wants him to act against Caesar.\n(iii) **several hands:** in different styles of handwriting to look like they came from many people. **obscurely:** indirectly or subtly.\n(iv) These words illustrate that Cassius is a vindictive, cold-blooded schemer and a clever manipulator.\n(v) Two methods are: 1) appealing to Brutus's sense of honour and his noble ancestry, and 2) using forged letters to create a false sense of public support.`
    },
    {
        extract: `Extract 5:
Casca: I could tell you more news too; Marullus and
Flavius, for pulling scarfs off Caesar's images, are
put to silence. Fare you well...`,
        subquestions: `(i) When does Casca say this and to whom? \n(ii) What "news" has Casca already related? \n(iii) Explain "pulling scarfs off Caesar's images" and "put to silence". \n(iv) What does "put to silence" reveal about Caesar's character? \n(v) What reason did Flavius give for this action in Scene 1?`,
        answer: `(i) Casca says this at the end of his conversation with Brutus and Cassius.\n(ii) He has already related the story of Antony offering the crown to Caesar three times and Caesar's subsequent epileptic fit.\n(iii) **pulling scarfs off Caesar's images:** removing the victory decorations from Caesar's statues. **put to silence:** a euphemism meaning they have been stripped of their positions, possibly imprisoned or executed.\n(iv) It reveals that Caesar can be ruthless and unforgiving towards those who publicly oppose him.\n(v) In Scene 1, Flavius's reason was to prevent Caesar from becoming a tyrant. They were punished by being "put to silence."`
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

