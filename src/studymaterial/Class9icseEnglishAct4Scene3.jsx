import React, { useState, useEffect, useRef } from "react";
import Class9icseEnglishAct4Scene3Summary from "./Class9icseEnglishAct4Scene3Summary";
import Class9icseEnglishAct4Scene3Questions from "./Class9icseEnglishAct4Scene3Questions";

// Theme object for consistent styling
const theme = {
  colors: {
    primary: "#8B0000", // Dark Red
    secondary: "#DAA520", // Goldenrod
    backgroundLight: "#FDF6E3", // Parchment-like color
    textLight: "#3B3B3B",
    white: "#FFFFFF",
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
    },
    green: { 100: "rgba(22, 163, 74, 0.05)", 600: "#16a34a", 700: "#15803d" },
    red: { 100: "rgba(220, 38, 38, 0.05)", 600: "#dc2626", 700: "#b91c1c" },
  },
  fontFamily: {
    display: ["Merriweather", "serif"],
    body: ["Lato", "sans-serif"],
  },
  borderRadius: {
    DEFAULT: "0.375rem",
    lg: "0.5rem",
    xl: "1rem",
    full: "9999px",
  },
};

// Data for the scene
const galleryImages = [
  "https://placehold.co/400x400/8B0000/FFFFFF?text=The+Heated+Argument",
  "https://placehold.co/400x400/DAA520/FFFFFF?text=Cassius+Offers+His+Dagger",
  "https://placehold.co/400x400/3B3B3B/FFFFFF?text=The+Ghost+of+Caesar",
  "https://placehold.co/400x400/A52A2A/FFFFFF?text=Brutus+Mourns+Portia",
];
const importantWords = [
  {
    term: "Itching palm",
    definition:
      "A metaphor for greed; Cassius is accused of being eager to accept bribes.",
  },
  {
    term: "Rash choler",
    definition:
      "A quick, fiery temper. Brutus calls out Cassius's tendency to get angry easily.",
  },
  {
    term: "Bay the moon",
    definition:
      "To bark uselessly at the moon. Brutus says he'd rather be a dog doing this than a corrupt Roman.",
  },
  {
    term: "Swallowed fire",
    definition:
      "The reported, and historically debated, manner of Portia's death, likely by swallowing hot coals.",
  },
  {
    term: "Thy evil spirit",
    definition:
      "What the Ghost of Caesar calls itself, suggesting it is a manifestation of Brutus's own guilt and looming doom.",
  },
];

const dialogueVersions = {
  Shakespearean: [
    {
      speaker: "CASSIUS",
      lines: `That you have wronged me doth appear in this:\nYou have condemned and noted Lucius Pella\nFor taking bribes here of the Sardians,\nWherein my letters, praying on his side,\nBecause I knew the man, were slighted off.`,
    },
    {
      speaker: "BRUTUS",
      lines: "You wronged yourself to write in such a case.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "In such a time as this it is not meet\nThat every nice offense should bear his comment.",
    },
    {
      speaker: "BRUTUS",
      lines: `Let me tell you, Cassius, you yourself\nAre much condemned to have an itching palm,\nTo sell and mart your offices for gold\nTo undeservers.`,
    },
    {
      speaker: "CASSIUS",
      lines: `I “an itching palm”!\nYou know that you are Brutus that speak this,\nOr, by the gods, this speech were else your last.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "The name of Cassius honors this corruption,\nAnd chastisement doth therefore hide his head.",
    },
    { speaker: "CASSIUS", lines: "Chastisement!" },
    {
      speaker: "BRUTUS",
      lines: `Remember March, the ides of March remember.\nDid not great Julius bleed for justice’ sake?\nWhat villain touched his body, that did stab,\nAnd not for justice? What, shall one of us,\nThat struck the foremost man of all this world\nBut for supporting robbers, shall we now\nContaminate our fingers with base bribes,\nAnd sell the mighty space of our large honors\nFor so much trash as may be graspèd thus?\nI had rather be a dog and bay the moon,\nThan such a Roman.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Brutus, bait not me.\nI’ll not endure it. You forget yourself\nTo hedge me in. I am a soldier, I,\nOlder in practice, abler than yourself\nTo make conditions.`,
    },
    { speaker: "BRUTUS", lines: "Go to. You are not, Cassius." },
    { speaker: "CASSIUS", lines: "I am." },
    { speaker: "BRUTUS", lines: "I say you are not." },
    {
      speaker: "CASSIUS",
      lines:
        "Urge me no more, I shall forget myself.\nHave mind upon your health, tempt me no further.",
    },
    { speaker: "BRUTUS", lines: "Away, slight man!" },
    { speaker: "CASSIUS", lines: "Is ’t possible?" },
    {
      speaker: "BRUTUS",
      lines: `Hear me, for I will speak.\nMust I give way and room to your rash choler?\nShall I be frighted when a madman stares?`,
    },
    {
      speaker: "CASSIUS",
      lines: "O ye gods, ye gods, must I endure all this?",
    },
    {
      speaker: "BRUTUS",
      lines: `“All this”? Ay, more. Fret till your proud heart break.\nGo show your slaves how choleric you are,\nAnd make your bondmen tremble. Must I budge?\nMust I observe you? Must I stand and crouch\nUnder your testy humor? By the gods,\nYou shall digest the venom of your spleen,\nThough it do split you. For from this day forth,\nI’ll use you for my mirth, yea, for my laughter,\nWhen you are waspish.`,
    },
    { speaker: "CASSIUS", lines: "Is it come to this?" },
    {
      speaker: "BRUTUS",
      lines: `You say you are a better soldier.\nLet it appear so. Make your vaunting true,\nAnd it shall please me well. For mine own part,\nI shall be glad to learn of noble men.`,
    },
    {
      speaker: "CASSIUS",
      lines: `You wrong me every way. You wrong me, Brutus.\nI said an elder soldier, not a better.\nDid I say “better”?`,
    },
    { speaker: "BRUTUS", lines: "If you did, I care not." },
    {
      speaker: "CASSIUS",
      lines: "When Caesar lived, he durst not thus have moved me.",
    },
    {
      speaker: "BRUTUS",
      lines: "Peace, peace! You durst not so have tempted him.",
    },
    { speaker: "CASSIUS", lines: "I durst not!" },
    { speaker: "BRUTUS", lines: "No." },
    { speaker: "CASSIUS", lines: "What, durst not tempt him?" },
    { speaker: "BRUTUS", lines: "For your life you durst not." },
    {
      speaker: "CASSIUS",
      lines:
        "Do not presume too much upon my love.\nI may do that I shall be sorry for.",
    },
    {
      speaker: "BRUTUS",
      lines: `You have done that you should be sorry for.\nThere is no terror, Cassius, in your threats,\nFor I am armed so strong in honesty\nThat they pass by me as the idle wind,\nWhich I respect not. I did send to you\nFor certain sums of gold, which you denied me,\nFor I can raise no money by vile means.\nBy heaven, I had rather coin my heart\nAnd drop my blood for drachmas than to wring\nFrom the hard hands of peasants their vile trash\nBy any indirection. I did send\nTo you for gold to pay my legions,\nWhich you denied me. Was that done like Cassius?\nShould I have answered Caius Cassius so?\nWhen Marcus Brutus grows so covetous\nTo lock such rascal counters from his friends,\nBe ready, gods, with all your thunderbolts.\nDash him to pieces!`,
    },
    { speaker: "CASSIUS", lines: "I denied you not." },
    { speaker: "BRUTUS", lines: "You did." },
    {
      speaker: "CASSIUS",
      lines: `I did not. He was but a fool that brought\nMy answer back. Brutus hath rived my heart.\nA friend should bear his friend’s infirmities,\nBut Brutus makes mine greater than they are.`,
    },
    { speaker: "BRUTUS", lines: "I do not, till you practice them on me." },
    { speaker: "CASSIUS", lines: "You love me not." },
    { speaker: "BRUTUS", lines: "I do not like your faults." },
    {
      speaker: "CASSIUS",
      lines: "A friendly eye could never see such faults.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "A flatterer’s would not, though they do appear\nAs huge as high Olympus.",
    },
    {
      speaker: "CASSIUS",
      lines: `Come, Antony, and young Octavius, come,\nRevenge yourselves alone on Cassius,\nFor Cassius is aweary of the world—\nHated by one he loves; braved by his brother;\nChecked like a bondman, all his faults observed,\nSet in a notebook, learned, and conned by rote\nTo cast into my teeth. Oh, I could weep\nMy spirit from mine eyes.\nThere is my dagger,\nAnd here my naked breast. Within, a heart\nDearer than Plutus' mine, richer than gold.\nIf that thou beest a Roman, take it forth.\nI, that denied thee gold, will give my heart.\nStrike, as thou didst at Caesar. For I know\nWhen thou didst hate him worst, thou lovedst him better\nThan ever thou lovedst Cassius.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Sheathe your dagger.\nBe angry when you will, it shall have scope.\nDo what you will, dishonor shall be humor.\nO Cassius, you are yokèd with a lamb\nThat carries anger as the flint bears fire,\nWho, much enforcèd, shows a hasty spark\nAnd straight is cold again.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Hath Cassius lived\nTo be but mirth and laughter to his Brutus,\nWhen grief and blood ill-tempered vexeth him?`,
    },
    { speaker: "BRUTUS", lines: "When I spoke that, I was ill-tempered too." },
    { speaker: "CASSIUS", lines: "Do you confess so much? Give me your hand." },
    { speaker: "BRUTUS", lines: "And my heart too." },
    { speaker: "CASSIUS", lines: "O Brutus!" },
    { speaker: "BRUTUS", lines: "What’s the matter?" },
    {
      speaker: "CASSIUS",
      lines: `Have not you love enough to bear with me,\nWhen that rash humor which my mother gave me\nMakes me forgetful?`,
    },
    {
      speaker: "BRUTUS",
      lines: `Yes, Cassius. And from henceforth,\nWhen you are over-earnest with your Brutus,\nHe’ll think your mother chides and leave you so.`,
    },
    {
      speaker: "POET",
      lines: `(within) Let me go in to see the generals.\nThere is some grudge between 'em. 'Tis not meet\nThey be alone.`,
    },
    { speaker: "LUCILLIUS", lines: "(within) You shall not come to them." },
    { speaker: "POET", lines: "(within) Nothing but death shall stay me." },
    { speaker: "CASSIUS", lines: "How now? What’s the matter?" },
    {
      speaker: "POET",
      lines: `For shame, you generals! What do you mean?\nLove, and be friends as two such men should be.\nFor I have seen more years, I’m sure, than ye.`,
    },
    { speaker: "CASSIUS", lines: "Ha, ha, how vilely doth this cynic rhyme!" },
    { speaker: "BRUTUS", lines: "Get you hence, sirrah. Saucy fellow, hence!" },
    { speaker: "CASSIUS", lines: `Bear with him, Brutus. 'Tis his fashion.` },
    {
      speaker: "BRUTUS",
      lines: `I’ll know his humor when he knows his time.\nWhat should the wars do with these jigging fools?\n—Companion, hence!`,
    },
    { speaker: "CASSIUS", lines: "Away, away, be gone." },
    {
      speaker: "BRUTUS",
      lines:
        "Lucillius and Titinius, bid the commanders\nPrepare to lodge their companies tonight.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "And come yourselves, and bring Messala with you,\nImmediately to us.",
    },
    { speaker: "BRUTUS", lines: "Lucius, a bowl of wine!" },
    {
      speaker: "CASSIUS",
      lines: "I did not think you could have been so angry.",
    },
    { speaker: "BRUTUS", lines: "O Cassius, I am sick of many griefs." },
    {
      speaker: "CASSIUS",
      lines:
        "Of your philosophy you make no use,\nIf you give place to accidental evils.",
    },
    { speaker: "BRUTUS", lines: "No man bears sorrow better. Portia is dead." },
    { speaker: "CASSIUS", lines: "Ha, Portia?" },
    { speaker: "BRUTUS", lines: "She is dead." },
    {
      speaker: "CASSIUS",
      lines: `How ’scaped I killing when I crossed you so?\nO insupportable and touching loss!\nUpon what sickness?`,
    },
    {
      speaker: "BRUTUS",
      lines: `Impatient of my absence,\nAnd grief that young Octavius with Mark Antony\nHave made themselves so strong—for with her death\nThat tidings came—with this she fell distract\nAnd, her attendants absent, swallowed fire.`,
    },
    { speaker: "CASSIUS", lines: "And died so?" },
    { speaker: "BRUTUS", lines: "Even so." },
    { speaker: "CASSIUS", lines: "O ye immortal gods!" },
    {
      speaker: "BRUTUS",
      lines:
        "Speak no more of her.—Give me a bowl of wine.—\nIn this I bury all unkindness, Cassius.",
    },
    {
      speaker: "CASSIUS",
      lines: `My heart is thirsty for that noble pledge.\nFill, Lucius, till the wine o'erswell the cup.\nI cannot drink too much of Brutus' love.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "Come in, Titinius.—Welcome, good Messala!\nNow sit we close about this taper here,\nAnd call in question our necessities.",
    },
    { speaker: "CASSIUS", lines: "Portia, art thou gone?" },
    {
      speaker: "BRUTUS",
      lines: `No more, I pray you.\n—Messala, I have here receivèd letters\nThat young Octavius and Mark Antony\nCome down upon us with a mighty power,\nBending their expedition toward Philippi.`,
    },
    { speaker: "MESSALA", lines: "Myself have letters of the selfsame tenor." },
    { speaker: "BRUTUS", lines: "With what addition?" },
    {
      speaker: "MESSALA",
      lines: `That by proscription and bills of outlawry,\nOctavius, Antony, and Lepidus\nHave put to death an hundred senators.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "Therein our letters do not well agree.\nMine speak of seventy senators that died\nBy their proscriptions, Cicero being one.",
    },
    { speaker: "CASSIUS", lines: "Cicero one?" },
    {
      speaker: "MESSALA",
      lines:
        "Cicero is dead,\nAnd by that order of proscription.\nHad you your letters from your wife, my lord?",
    },
    { speaker: "BRUTUS", lines: "No, Messala." },
    { speaker: "MESSALA", lines: "Nor nothing in your letters writ of her?" },
    { speaker: "BRUTUS", lines: "Nothing, Messala." },
    { speaker: "MESSALA", lines: "That methinks is strange." },
    {
      speaker: "BRUTUS",
      lines: "Why ask you? Hear you aught of her in yours?",
    },
    { speaker: "MESSALA", lines: "No, my lord." },
    { speaker: "BRUTUS", lines: "Now, as you are a Roman, tell me true." },
    {
      speaker: "MESSALA",
      lines:
        "Then like a Roman bear the truth I tell.\nFor certain she is dead, and by strange manner.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Why, farewell, Portia. We must die, Messala.\nWith meditating that she must die once,\nI have the patience to endure it now.",
    },
    {
      speaker: "MESSALA",
      lines: "Even so great men great losses should endure.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "I have as much of this in art as you,\nBut yet my nature could not bear it so.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Well, to our work alive. What do you think\nOf marching to Philippi presently?",
    },
    { speaker: "CASSIUS", lines: "I do not think it good." },
    { speaker: "BRUTUS", lines: "Your reason?" },
    {
      speaker: "CASSIUS",
      lines: `This it is:\n'Tis better that the enemy seek us.\nSo shall he waste his means, weary his soldiers,\nDoing himself offense, whilst we, lying still,\nAre full of rest, defense, and nimbleness.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Good reasons must of force give place to better.\nThe people ’twixt Philippi and this ground\nDo stand but in a forced affection,\nFor they have grudged us contribution.\nThe enemy, marching along by them,\nBy them shall make a fuller number up,\nCome on refreshed, new-added, and encouraged,\nFrom which advantage shall we cut him off\nIf at Philippi we do face him there,\nThese people at our back.`,
    },
    { speaker: "CASSIUS", lines: "Hear me, good brother—" },
    {
      speaker: "BRUTUS",
      lines: `Under your pardon. You must note beside,\nThat we have tried the utmost of our friends,\nOur legions are brim-full, our cause is ripe.\nThe enemy increaseth every day.\nWe, at the height, are ready to decline.\nThere is a tide in the affairs of men,\nWhich, taken at the flood, leads on to fortune;\nOmitted, all the voyage of their life\nIs bound in shallows and in miseries.\nOn such a full sea are we now afloat,\nAnd we must take the current when it serves,\nOr lose our ventures.`,
    },
    {
      speaker: "CASSIUS",
      lines:
        "Then, with your will, go on.\nWe’ll along ourselves, and meet them at Philippi.",
    },
    {
      speaker: "BRUTUS",
      lines: `The deep of night is crept upon our talk,\nAnd nature must obey necessity,\nWhich we will niggard with a little rest.\nThere is no more to say?`,
    },
    {
      speaker: "CASSIUS",
      lines: "No more. Good night.\nEarly tomorrow will we rise and hence.",
    },
    {
      speaker: "BRUTUS",
      lines: `Lucius!\nMy gown.\nFarewell, good Messala.—\nGood night, Titinius.—Noble, noble Cassius,\nGood night and good repose.`,
    },
    {
      speaker: "CASSIUS",
      lines: `O my dear brother,\nThis was an ill beginning of the night.\nNever come such division ’tween our souls.\nLet it not, Brutus.`,
    },
    { speaker: "BRUTUS", lines: "Everything is well." },
    { speaker: "CASSIUS", lines: "Good night, my lord." },
    { speaker: "BRUTUS", lines: "Good night, good brother." },
    { speaker: "TITINIUS, MESSALA", lines: "Good night, Lord Brutus." },
    {
      speaker: "BRUTUS",
      lines: `Farewell, everyone.\nGive me the gown. Where is thy instrument?`,
    },
    { speaker: "LUCIUS", lines: "Here in the tent." },
    {
      speaker: "BRUTUS",
      lines: `What, thou speak’st drowsily?\nPoor knave, I blame thee not. Thou art o'erwatched.\nCall Claudio and some other of my men.\nI’ll have them sleep on cushions in my tent.`,
    },
    { speaker: "LUCIUS", lines: "Varrus and Claudio!" },
    { speaker: "VARRUS", lines: "Calls my lord?" },
    {
      speaker: "BRUTUS",
      lines: `I pray you, sirs, lie in my tent and sleep.\nIt may be I shall raise you by and by,\nOn business to my brother Cassius.`,
    },
    {
      speaker: "VARRUS",
      lines: "So please you, we will stand and watch your pleasure.",
    },
    {
      speaker: "BRUTUS",
      lines: `I will not have it so. Lie down, good sirs.\nIt may be I shall otherwise bethink me.\n—Look, Lucius, here’s the book I sought for so.\nI put it in the pocket of my gown.`,
    },
    {
      speaker: "LUCIUS",
      lines: "I was sure your lordship did not give it me.",
    },
    {
      speaker: "BRUTUS",
      lines: `Bear with me, good boy, I am much forgetful.\nCanst thou hold up thy heavy eyes awhile,\nAnd touch thy instrument a strain or two?`,
    },
    { speaker: "LUCIUS", lines: "Ay, my lord, an ’t please you." },
    {
      speaker: "BRUTUS",
      lines: "It does, my boy.\nI trouble thee too much, but thou art willing.",
    },
    { speaker: "LUCIUS", lines: "It is my duty, sir." },
    {
      speaker: "BRUTUS",
      lines: `I should not urge thy duty past thy might.\nI know young bloods look for a time of rest.`,
    },
    { speaker: "LUCIUS", lines: "I have slept, my lord, already." },
    {
      speaker: "BRUTUS",
      lines: `It was well done, and thou shalt sleep again.\nI will not hold thee long. If I do live,\nI will be good to thee.`,
    },
    {
      speaker: "BRUTUS",
      lines: `This is a sleepy tune. O murderous slumber,\nLayst thou thy leaden mace upon my boy\nThat plays thee music?—Gentle knave, good night.\nI will not do thee so much wrong to wake thee.\nIf thou dost nod, thou break’st thy instrument.\nI’ll take it from thee. And, good boy, good night.\n—Let me see, let me see. Is not the leaf turned down\nWhere I left reading? Here it is, I think.`,
    },
    {
      speaker: "GHOST OF CAESAR",
      lines: `How ill this taper burns!—Ha, who comes here?\nI think it is the weakness of mine eyes\nThat shapes this monstrous apparition.\nIt comes upon me.—Art thou any thing?\nArt thou some god, some angel, or some devil\nThat makest my blood cold and my hair to stare?\nSpeak to me what thou art.`,
    },
    { speaker: "GHOST", lines: "Thy evil spirit, Brutus." },
    { speaker: "BRUTUS", lines: "Why comest thou?" },
    { speaker: "GHOST", lines: "To tell thee thou shalt see me at Philippi." },
    { speaker: "BRUTUS", lines: "Well, then I shall see thee again?" },
    { speaker: "GHOST", lines: "Ay, at Philippi." },
    {
      speaker: "BRUTUS",
      lines: `Why, I will see thee at Philippi, then.\nNow I have taken heart thou vanishest.\nIll spirit, I would hold more talk with thee.\n—Boy, Lucius!—Varrus!—Claudio!—Sirs, awake!\n—Claudio!`,
    },
    { speaker: "LUCIUS", lines: "The strings, my lord, are false." },
    {
      speaker: "BRUTUS",
      lines: "He thinks he still is at his instrument.\nLucius, awake.",
    },
    { speaker: "LUCIUS", lines: "My lord?" },
    {
      speaker: "BRUTUS",
      lines: "Didst thou dream, Lucius, that thou so criedst out?",
    },
    { speaker: "LUCIUS", lines: "My lord, I do not know that I did cry." },
    {
      speaker: "BRUTUS",
      lines: "Yes, that thou didst. Didst thou see any thing?",
    },
    { speaker: "LUCIUS", lines: "Nothing, my lord." },
    {
      speaker: "BRUTUS",
      lines: "Sleep again, Lucius.—Sirrah Claudio!\nFellow thou, awake!",
    },
    { speaker: "VARRUS", lines: "My lord?" },
    { speaker: "CLAUDIO", lines: "My lord?" },
    {
      speaker: "BRUTUS",
      lines: "Why did you so cry out, sirs, in your sleep?",
    },
    { speaker: "VARRUS, CLAUDIO", lines: "Did we, my lord?" },
    { speaker: "BRUTUS", lines: "Ay. Saw you anything?" },
    { speaker: "VARRUS", lines: "No, my lord, I saw nothing." },
    { speaker: "CLAUDIO", lines: "Nor I, my lord." },
    {
      speaker: "BRUTUS",
      lines:
        "Go and commend me to my brother Cassius.\nBid him set on his powers betimes before,\nAnd we will follow.",
    },
    { speaker: "VARRUS, CLAUDIO", lines: "It shall be done, my lord." },
  ],
  "Normal English": [
    // This will be a long translation, I will do it chunk by chunk
    {
      speaker: "CASSIUS",
      lines: `The way you've wronged me is clear: you have publicly condemned and disgraced Lucius Pella for taking bribes from the people here in Sardis, and in the process, you ignored my letters which asked for leniency on his behalf, because I knew him.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "You wronged yourself by writing on behalf of such a man in the first place.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "In a critical time like this, it’s not appropriate to criticize every small offense.",
    },
    {
      speaker: "BRUTUS",
      lines: `Let me tell you, Cassius, you yourself are widely accused of having a greedy hand, of selling positions in your army for gold to men who don't deserve them.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Me, a greedy hand! You only say this because you know you are Brutus. By the gods, if you were anyone else, that would be the last thing you ever said.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "The respected name of Cassius gives cover to this corruption, so punishment is afraid to show its face.",
    },
    { speaker: "CASSIUS", lines: "Punishment!" },
    {
      speaker: "BRUTUS",
      lines: `Remember March, remember the Ides of March! Didn't the great Julius Caesar bleed for the sake of justice? What villain touched his body, who stabbed him for any reason other than justice? What? Shall one of us, who struck down the most powerful man in the world only for supporting criminals, now dirty our own hands with filthy bribes? Shall we sell the great honor we have for as much trash as one can hold in his hand? I would rather be a dog and bark at the moon than be such a Roman.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Brutus, don't provoke me. I will not stand for it. You are forgetting your place to try and control me. I am a soldier, I am more experienced in practice, and more able than you to manage affairs.`,
    },
    { speaker: "BRUTUS", lines: "Get out. You are not, Cassius." },
    { speaker: "CASSIUS", lines: "I am." },
    { speaker: "BRUTUS", lines: "I say you are not." },
    {
      speaker: "CASSIUS",
      lines:
        "Don’t push me anymore, or I will lose control of myself. Think of your own safety, don’t test me any further.",
    },
    { speaker: "BRUTUS", lines: "Go away, you insignificant man!" },
    { speaker: "CASSIUS", lines: "Is this possible?" },
    {
      speaker: "BRUTUS",
      lines: `Listen to me, because I am going to speak. Must I give in to your sudden bursts of anger? Should I be frightened when a madman glares?`,
    },
    {
      speaker: "CASSIUS",
      lines: "Oh you gods, you gods, must I endure all of this?",
    },
    {
      speaker: "BRUTUS",
      lines: `“All this”? Yes, and more. Go ahead and fret until your proud heart breaks. Go show your slaves how angry you can be, and make your servants tremble. Must I move? Must I respect you? Must I stand and bow to your irritable moods? By the gods, you will have to swallow the poison of your own anger, even if it tears you apart. Because from this day on, I will use your temper for my own amusement, yes, for my laughter, when you are being waspish.`,
    },
    { speaker: "CASSIUS", lines: "Has it come to this?" },
    {
      speaker: "BRUTUS",
      lines: `You say you are a better soldier. Prove it. Make your boasting true, and I will be very pleased. For my own part, I am always happy to learn from noble men.`,
    },
    {
      speaker: "CASSIUS",
      lines: `You wrong me in every way. You wrong me, Brutus. I said an older soldier, not a better one. Did I say “better”?`,
    },
    { speaker: "BRUTUS", lines: "If you did, I don’t care." },
    {
      speaker: "CASSIUS",
      lines:
        "When Caesar was alive, he would not have dared to provoke me like this.",
    },
    {
      speaker: "BRUTUS",
      lines: "Quiet, quiet! You would not have dared to test him like this.",
    },
    { speaker: "CASSIUS", lines: "I wouldn’t have dared?" },
    { speaker: "BRUTUS", lines: "No." },
    { speaker: "CASSIUS", lines: "What, not dared to test him?" },
    { speaker: "BRUTUS", lines: "You wouldn’t have dared for your life." },
    {
      speaker: "CASSIUS",
      lines:
        "Don’t take my love for you for granted. I might do something I will regret.",
    },
    {
      speaker: "BRUTUS",
      lines: `You have already done something you should regret. There is no terror, Cassius, in your threats, because I am so strongly armed with honesty that they pass by me like a gentle wind, which I don’t even notice. I sent to you for certain sums of gold, which you denied me, because I cannot raise money by dishonest means. By heaven, I would rather turn my heart into coins and my blood into drachmas than to squeeze peasants’ worthless money from their hardworking hands by any corrupt method. I sent to you for gold to pay my soldiers, and you denied me. Was that an act worthy of Cassius? Should I have treated Caius Cassius that way? When Marcus Brutus becomes so greedy that he would keep such pathetic coins from his friends, be ready, gods, with all your thunderbolts. Smash him to pieces!`,
    },
    { speaker: "CASSIUS", lines: "I did not deny you." },
    { speaker: "BRUTUS", lines: "You did." },
    {
      speaker: "CASSIUS",
      lines: `I did not. The messenger who brought my answer back was a fool. Brutus, you have broken my heart. A friend should tolerate his friend’s weaknesses, but Brutus, you make mine seem greater than they are.`,
    },
    { speaker: "BRUTUS", lines: "I don’t, until you use them against me." },
    { speaker: "CASSIUS", lines: "You don’t love me." },
    { speaker: "BRUTUS", lines: "I don’t like your faults." },
    {
      speaker: "CASSIUS",
      lines: "A friendly eye would never see such faults.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "A flatterer’s eye wouldn’t, even if they appeared as huge as Mount Olympus.",
    },
    {
      speaker: "CASSIUS",
      lines: `Come, Antony, and young Octavius, come! Take your revenge on Cassius alone, for Cassius is tired of the world—hated by the one he loves, challenged by his brother, scolded like a slave, with all his faults watched, written in a notebook, memorized, just to be thrown in my face. Oh, I could weep my very soul out of my eyes! Here is my dagger, and here is my bare chest. Inside is a heart more valuable than Pluto’s mine, richer than gold. If you are a Roman, take it out. I, who denied you gold, will give you my heart. Strike, as you struck Caesar. For I know, even when you hated him the most, you loved him more than you ever loved me.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Put your dagger away. Be angry when you want to, your anger will be given space. Do what you want, your dishonor will be seen as just a mood. O Cassius, you are partnered with a man who carries anger the way a flint carries fire; who, when struck hard, shows a brief spark and then is immediately cold again.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Has Cassius lived only to be the subject of his Brutus's jokes and laughter, when he is troubled by grief and a bad temper?`,
    },
    {
      speaker: "BRUTUS",
      lines: "When I said that, I was in a bad temper too.",
    },
    { speaker: "CASSIUS", lines: "You admit that? Give me your hand." },
    { speaker: "BRUTUS", lines: "And my heart as well." },
    { speaker: "CASSIUS", lines: "O Brutus!" },
    { speaker: "BRUTUS", lines: "What is the matter?" },
    {
      speaker: "CASSIUS",
      lines: `Don’t you have enough love for me to be patient with me, when that quick temper I inherited from my mother makes me forget myself?`,
    },
    {
      speaker: "BRUTUS",
      lines: `Yes, Cassius. And from now on, when you are being too intense with me, I’ll just imagine it’s your mother scolding and leave you be.`,
    },
    {
      speaker: "POET",
      lines: `(from outside) Let me in to see the generals. There is some disagreement between them. It isn’t right for them to be alone.`,
    },
    {
      speaker: "LUCILLIUS",
      lines: "(from outside) You are not coming in to see them.",
    },
    { speaker: "POET", lines: "(from outside) Only death will stop me." },
    { speaker: "CASSIUS", lines: "What’s happening? What’s the matter?" },
    {
      speaker: "POET",
      lines: `For shame, you generals! What are you doing? You should love each other and be friends, as two such men should be. For I have seen more years, I’m sure, than you have.`,
    },
    { speaker: "CASSIUS", lines: "Ha, ha, how terribly this fool rhymes!" },
    {
      speaker: "BRUTUS",
      lines: "Get out of here, sir. You rude fellow, get out!",
    },
    {
      speaker: "CASSIUS",
      lines: `Be patient with him, Brutus. It’s just his way.`,
    },
    {
      speaker: "BRUTUS",
      lines: `I’ll tolerate his personality when he learns the right time for it. What use do wars have for these rhyming fools? Get out, my man!`,
    },
    { speaker: "CASSIUS", lines: "Go on, go on, be gone." },
    {
      speaker: "BRUTUS",
      lines:
        "Lucillius and Titinius, tell the commanders to prepare to set up camp for their companies tonight.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "And you come yourselves, and bring Messala with you, immediately to us.",
    },
    { speaker: "BRUTUS", lines: "Lucius, a bowl of wine!" },
    { speaker: "CASSIUS", lines: "I didn’t think you could be so angry." },
    { speaker: "BRUTUS", lines: "O Cassius, I am sick with many sorrows." },
    {
      speaker: "CASSIUS",
      lines:
        "You are not making use of your philosophy if you give in to unfortunate accidents.",
    },
    {
      speaker: "BRUTUS",
      lines: "No man bears sorrow better than I do. Portia is dead.",
    },
    { speaker: "CASSIUS", lines: "What, Portia?" },
    { speaker: "BRUTUS", lines: "She is dead." },
    {
      speaker: "CASSIUS",
      lines: `How did I escape being killed when I angered you so much? Oh, what an unbearable and painful loss! What sickness did she have?`,
    },
    {
      speaker: "BRUTUS",
      lines: `She was impatient because of my absence, and grieving that young Octavius and Mark Antony have become so strong—because news of that came with the news of her death. With all this, she lost her mind and, when her attendants were away, swallowed fire.`,
    },
    { speaker: "CASSIUS", lines: "And died that way?" },
    { speaker: "BRUTUS", lines: "Just so." },
    { speaker: "CASSIUS", lines: "Oh, you immortal gods!" },
    {
      speaker: "BRUTUS",
      lines:
        "Speak no more of her. Give me a bowl of wine. In this, I bury all unkindness, Cassius.",
    },
    {
      speaker: "CASSIUS",
      lines: `My heart is thirsty for that noble promise. Fill the cup, Lucius, until the wine overflows. I cannot drink too much of Brutus's love.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "Come in, Titinius. Welcome, good Messala! Now let’s sit closely around this candle here and discuss what we need to do.",
    },
    { speaker: "CASSIUS", lines: "Portia, are you gone?" },
    {
      speaker: "BRUTUS",
      lines: `No more, please. Messala, I have received letters here that young Octavius and Mark Antony are coming down on us with a mighty army, heading toward Philippi.`,
    },
    { speaker: "MESSALA", lines: "I have letters with the same information." },
    { speaker: "BRUTUS", lines: "With what additional news?" },
    {
      speaker: "MESSALA",
      lines: `That by official orders and bills of execution, Octavius, Antony, and Lepidus have put one hundred senators to death.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "On that point our letters do not agree. Mine speak of seventy senators who died by their orders, with Cicero being one of them.",
    },
    { speaker: "CASSIUS", lines: "Cicero is one?" },
    {
      speaker: "MESSALA",
      lines:
        "Cicero is dead, by that same order of execution. Did you receive your letters from your wife, my lord?",
    },
    { speaker: "BRUTUS", lines: "No, Messala." },
    {
      speaker: "MESSALA",
      lines: "Nor was anything written about her in your letters?",
    },
    { speaker: "BRUTUS", lines: "Nothing, Messala." },
    { speaker: "MESSALA", lines: "That seems strange to me." },
    {
      speaker: "BRUTUS",
      lines: "Why do you ask? Did you hear anything about her in your letters?",
    },
    { speaker: "MESSALA", lines: "No, my lord." },
    { speaker: "BRUTUS", lines: "Now, as you are a Roman, tell me the truth." },
    {
      speaker: "MESSALA",
      lines:
        "Then like a Roman, bear the truth I tell you. It is certain she is dead, and in a strange way.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Well, farewell, Portia. We must all die, Messala. By meditating on the fact that she had to die eventually, I have the patience to endure it now.",
    },
    {
      speaker: "MESSALA",
      lines: "This is how great men should endure great losses.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "I understand this philosophy as much as you do, but my nature could not bear it so well.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Well, let’s get to our work among the living. What do you think of marching to Philippi immediately?",
    },
    { speaker: "CASSIUS", lines: "I do not think it is a good idea." },
    { speaker: "BRUTUS", lines: "Your reason?" },
    {
      speaker: "CASSIUS",
      lines: `This is it: It's better that the enemy comes to us. That way he will waste his resources and tire out his soldiers, doing damage to himself, while we, by staying still, are fully rested, defended, and ready.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Good reasons must give way to better ones. The people between Philippi and here are only loyal to us by force, because they resentfully gave us supplies. The enemy, by marching through their lands, will be able to recruit them, arriving refreshed, with new soldiers, and encouraged. We will cut him off from this advantage if we face him at Philippi, with these people at our backs.`,
    },
    { speaker: "CASSIUS", lines: "Hear me, good brother—" },
    {
      speaker: "BRUTUS",
      lines: `Forgive me. You must also note that we have gathered all the support we can from our friends, our armies are at full strength, and our cause is at its peak. The enemy grows stronger every day. We, at our peak, are about to decline. There is a tide in the affairs of men which, if taken at its highest point, leads to fortune; if missed, the entire voyage of their life is stuck in shallows and miseries. We are now floating on such a full sea, and we must take the current while it is in our favor, or lose our chance.`,
    },
    {
      speaker: "CASSIUS",
      lines: "Then, as you wish, go on. We will go and meet them at Philippi.",
    },
    {
      speaker: "BRUTUS",
      lines: `The deep of night has crept up on our conversation, and we must give in to nature's need for a little rest. Is there nothing more to say?`,
    },
    {
      speaker: "CASSIUS",
      lines: "No more. Good night. Early tomorrow we will rise and leave.",
    },
    {
      speaker: "BRUTUS",
      lines: `Lucius! My robe. Farewell, good Messala. Good night, Titinius. Noble, noble Cassius, good night and rest well.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Oh my dear brother, this was a bad start to the night. May such a division never come between our souls again. Let it not, Brutus.`,
    },
    { speaker: "BRUTUS", lines: "Everything is well." },
    { speaker: "CASSIUS", lines: "Good night, my lord." },
    { speaker: "BRUTUS", lines: "Good night, good brother." },
    { speaker: "TITINIUS, MESSALA", lines: "Good night, Lord Brutus." },
    {
      speaker: "BRUTUS",
      lines: `Farewell, everyone. Give me the robe. Where is your musical instrument?`,
    },
    { speaker: "LUCIUS", lines: "Here in the tent." },
    {
      speaker: "BRUTUS",
      lines: `What, you speak drowsily? Poor boy, I don’t blame you. You have been awake too long. Call Claudio and some of my other men. I’ll have them sleep on cushions in my tent.`,
    },
    { speaker: "LUCIUS", lines: "Varrus and Claudio!" },
    { speaker: "VARRUS", lines: "Does my lord call?" },
    {
      speaker: "BRUTUS",
      lines: `I ask you, sirs, to lie down in my tent and sleep. I might wake you later for an errand to my brother Cassius.`,
    },
    {
      speaker: "VARRUS",
      lines: "If you please, we will stand and wait for your orders.",
    },
    {
      speaker: "BRUTUS",
      lines: `I will not have it that way. Lie down, good sirs. I might change my mind. Look, Lucius, here is the book I was looking for. I put it in the pocket of my robe.`,
    },
    {
      speaker: "LUCIUS",
      lines: "I was sure your lordship did not give it to me.",
    },
    {
      speaker: "BRUTUS",
      lines: `Be patient with me, good boy, I am very forgetful. Can you keep your heavy eyes open a little while longer and play a tune or two on your instrument?`,
    },
    { speaker: "LUCIUS", lines: "Yes, my lord, if it pleases you." },
    {
      speaker: "BRUTUS",
      lines: "It does, my boy. I trouble you too much, but you are willing.",
    },
    { speaker: "LUCIUS", lines: "It is my duty, sir." },
    {
      speaker: "BRUTUS",
      lines: `I should not push your duty beyond your strength. I know young people need their rest.`,
    },
    { speaker: "LUCIUS", lines: "I have slept already, my lord." },
    {
      speaker: "BRUTUS",
      lines: `That was good, and you shall sleep again. I will not keep you long. If I live, I will be good to you.`,
    },
    {
      speaker: "BRUTUS",
      lines: `This is a sleepy tune. Oh, murderous sleep, do you lay your heavy club upon my boy who plays music for you? Gentle boy, good night. I will not do you the wrong of waking you. If you nod off, you’ll break your instrument. I’ll take it from you. And, good boy, good night. Let me see, let me see. Isn't the page folded where I stopped reading? Here it is, I think.`,
    },
    {
      speaker: "GHOST OF CAESAR",
      lines: `How poorly this candle burns! Ha, who comes here? I think it is the weakness of my eyes that is creating this monstrous vision. It is coming towards me. Are you a real thing? Are you a god, an angel, or a devil that makes my blood run cold and my hair stand on end? Tell me what you are.`,
    },
    { speaker: "GHOST", lines: "Your evil spirit, Brutus." },
    { speaker: "BRUTUS", lines: "Why have you come?" },
    {
      speaker: "GHOST",
      lines: "To tell you that you will see me at Philippi.",
    },
    { speaker: "BRUTUS", lines: "Well, then I will see you again?" },
    { speaker: "GHOST", lines: "Yes, at Philippi." },
    {
      speaker: "BRUTUS",
      lines: `Well, I will see you at Philippi, then. Now that I have gathered my courage, you vanish. Evil spirit, I wish I could talk more with you. Boy, Lucius! Varrus! Claudio! Sirs, wake up! Claudio!`,
    },
    { speaker: "LUCIUS", lines: "The strings are out of tune, my lord." },
    {
      speaker: "BRUTUS",
      lines: "He thinks he is still playing his instrument. Lucius, wake up.",
    },
    { speaker: "LUCIUS", lines: "My lord?" },
    {
      speaker: "BRUTUS",
      lines: "Did you dream, Lucius, that you cried out like that?",
    },
    { speaker: "LUCIUS", lines: "My lord, I don’t know that I cried out." },
    { speaker: "BRUTUS", lines: "Yes, you did. Did you see anything?" },
    { speaker: "LUCIUS", lines: "Nothing, my lord." },
    {
      speaker: "BRUTUS",
      lines: "Sleep again, Lucius. Sir Claudio! You there, fellow, wake up!",
    },
    { speaker: "VARRUS", lines: "My lord?" },
    { speaker: "CLAUDIO", lines: "My lord?" },
    {
      speaker: "BRUTUS",
      lines: "Why did you cry out like that in your sleep?",
    },
    { speaker: "VARRUS, CLAUDIO", lines: "Did we, my lord?" },
    { speaker: "BRUTUS", lines: "Yes. Did you see anything?" },
    { speaker: "VARRUS", lines: "No, my lord, I saw nothing." },
    { speaker: "CLAUDIO", lines: "Nor did I, my lord." },
    {
      speaker: "BRUTUS",
      lines:
        "Go and give my greetings to my brother Cassius. Tell him to set out with his forces early, and we will follow.",
    },
    { speaker: "VARRUS, CLAUDIO", lines: "It will be done, my lord." },
  ],
  Hinglish: [
    // This will also be a long translation
    {
      speaker: "CASSIUS",
      lines: `Ki tumne mere saath galat kiya hai, yeh is baat se saaf hai: Tumne Lucius Pella ko Sardis ke logon se rishwat lene ke liye saza di aur badnaam kiya, jabki mere letters, jo uski taraf se request kar rahe the, kyunki main us aadmi ko jaanta tha, unhe nazarandaaz kar diya gaya.`,
    },
    {
      speaker: "BRUTUS",
      lines: "Tumne aise maamle mein likhkar khud ke saath galat kiya.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Is tarah ke samay mein yeh theek nahi hai ki har chhoti si galti par tippani ki jaaye.",
    },
    {
      speaker: "BRUTUS",
      lines: `Mujhe kehne do, Cassius, tum par khud rishwatkhori ka bahut bada aarop hai, ki tum apne पद gold ke liye un logon ko bechte ho jo iske laayak nahi.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Main, ek rishwatkhor! Tum jaante ho ki tum Brutus ho jo yeh bol raha hai, warna, bhagwan ki kasam, yeh tumhara aakhri bhashan hota.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "Cassius ka naam is bhrashtachar ko izzat deta hai, isiliye saza apna sar chhupa leti hai.",
    },
    { speaker: "CASSIUS", lines: "Saza!" },
    {
      speaker: "BRUTUS",
      lines: `March yaad karo, March ki 15 tareekh yaad karo. Kya mahaan Julius insaaf ke liye nahi maare gaye? Kis badmaash ne unke shareer ko chhua, jisne unhe mara, aur insaaf ke liye nahi? Kya, hum mein se ek, jisne is duniya ke sabse bade aadmi ko sirf isliye maara kyunki woh luteron ka saath de raha tha, kya ab hum apne haath gandi rishwat se maila karenge, aur apni badi izzat ko itne se kachre ke liye bech denge jitna mutthi mein aa sakta hai? Main isse behtar ek kutta banna pasand karunga jo chaand par bhokta hai, na ki aisa Roman.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Brutus, mujhe mat uksao. Main yeh bardaasht nahi karunga. Tum apni seema bhool rahe ho mujhe dabane ki koshish karke. Main ek sipahi hoon, tumse zyada anubhavi, aur maamlon ko sambhalne mein tumse zyada kaabil.`,
    },
    { speaker: "BRUTUS", lines: "Chup raho. Tum nahi ho, Cassius." },
    { speaker: "CASSIUS", lines: "Main hoon." },
    { speaker: "BRUTUS", lines: "Main kehta hoon tum nahi ho." },
    {
      speaker: "CASSIUS",
      lines:
        "Mujhe aur mat uksao, main aapna aapa kho dunga. Apni sehat ka khayal rakho, mujhe aur mat aazmao.",
    },
    { speaker: "BRUTUS", lines: "Door hato, tum maamuli aadmi!" },
    { speaker: "CASSIUS", lines: "Kya yeh mumkin hai?" },
    {
      speaker: "BRUTUS",
      lines: `Meri baat suno, kyunki main bolunga. Kya mujhe tumhare gusse ke aage jhukna padega? Kya main ek pagal ke ghoorne se darr jaunga?`,
    },
    {
      speaker: "CASSIUS",
      lines: "Hey devtaon, hey devtaon, kya mujhe yeh sab sehna padega?",
    },
    {
      speaker: "BRUTUS",
      lines: `“Yeh sab”? Haan, aur bhi. Chidhte raho jab tak tumhara ghamandi dil toot na jaaye. Jao apne ghulamon ko dikhao ki tum kitne gusse mein ho, aur apne bandiyon ko kapkapao. Kya mujhe hilna chahiye? Kya mujhe tumhe dekhna chahiye? Kya mujhe tumhare chidchidepan ke aage jhukna chahiye? Bhagwan ki kasam, tum apne gusse ka zehar pachaoge, bhale hi woh tumhe faad de. Kyunki aaj se, main tumhara mazak udaunga, haan, tum par hasunga, jab tum gusse mein hoge.`,
    },
    { speaker: "CASSIUS", lines: "Yeh din aa gaya hai?" },
    {
      speaker: "BRUTUS",
      lines: `Tum kehte ho ki tum behtar sipahi ho. Toh saabit karo. Apni shekhi ko sach karo, aur mujhe bahut khushi hogi. Meri taraf se, mujhe hamesha nek logon se seekhne mein khushi hogi.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Tum har tarah se mere saath galat kar rahe ho. Tum mere saath galat kar rahe ho, Brutus. Maine kaha tha ek zyada anubhavi sipahi, behtar nahi. Kya maine “behtar” kaha?`,
    },
    { speaker: "BRUTUS", lines: "Agar kaha bhi, toh mujhe parwah nahi." },
    {
      speaker: "CASSIUS",
      lines:
        "Jab Caesar zinda tha, usne mujhe is tarah uksane ki himmat nahi ki thi.",
    },
    {
      speaker: "BRUTUS",
      lines: "Shaant, shaant! Tumne use is tarah uksane ki himmat nahi ki thi.",
    },
    { speaker: "CASSIUS", lines: "Maine himmat nahi ki!" },
    { speaker: "BRUTUS", lines: "Nahi." },
    { speaker: "CASSIUS", lines: "Kya, use uksane ki himmat nahi ki?" },
    { speaker: "BRUTUS", lines: "Apni jaan ke liye tumne himmat nahi ki." },
    {
      speaker: "CASSIUS",
      lines:
        "Mere pyaar ka zyada faayda mat uthao. Main woh kar sakta hoon jiske liye mujhe baad mein pachtana pade.",
    },
    {
      speaker: "BRUTUS",
      lines: `Tum woh kar chuke ho jiske liye tumhe pachtana chahiye. Tumhari dhamkiyon mein koi darr nahi hai, Cassius, kyunki main imaandari se itna mazboot hoon ki woh mere paas se ek bekaar hawa ki tarah guzar jaati hain, jise main anadekha kar deta hoon. Maine tumse kuch gold maanga tha, jo tumne mujhe mana kar diya, kyunki main galat tareekon se paise nahi juta sakta. Bhagwan ki kasam, main apna dil sikke bana kar aur apna khoon drachmas ke liye baha dunga, iske bajaye ki main kisanon ke kathor haathon se unka ganda paisa kisi bhi galat tareeke se nichodun. Maine tumse apni sena ko paise dene ke liye gold maanga tha, jo tumne mujhe mana kar diya. Kya yeh Cassius jaisa kaam tha? Kya mujhe Caius Cassius ko aise jawab dena chahiye tha? Jab Marcus Brutus itna laalchi ho jaaye ki woh apne doston se aise bekaar sikke chhupaye, toh hey devtaon, apne saare bijliyon ke saath taiyar rehna. Uske tukde-tukde kar dena!`,
    },
    { speaker: "CASSIUS", lines: "Maine tumhe mana nahi kiya." },
    { speaker: "BRUTUS", lines: "Tumne kiya." },
    {
      speaker: "CASSIUS",
      lines: `Maine nahi kiya. Jisne mera jawab laaya woh ek bewakoof tha. Brutus ne mera dil tod diya hai. Ek dost ko apne dost ki kamzoriyon ko sehna chahiye, lekin Brutus meri kamzoriyon ko unse bada bana deta hai.`,
    },
    {
      speaker: "BRUTUS",
      lines: "Main nahi karta, jab tak tum unhe mujh par nahi aazmate.",
    },
    { speaker: "CASSIUS", lines: "Tum mujhse pyaar nahi karte." },
    { speaker: "BRUTUS", lines: "Mujhe tumhari galtiyaan pasand nahi hain." },
    {
      speaker: "CASSIUS",
      lines: "Ek dost ki aankh aisi galtiyon ko kabhi nahi dekh sakti.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Ek chaaploos ki aankh nahi dekhegi, bhale hi woh Olympus parvat jitni badi kyun na ho.",
    },
    {
      speaker: "CASSIUS",
      lines: `Aao, Antony, aur naujawan Octavius, aao! Apna badla sirf Cassius se lo, kyunki Cassius is duniya se thak chuka hai—jisse woh pyaar karta hai, woh usse nafrat karta hai; uska bhai usko dhamkata hai; ek ghulam ki tarah uspar nazar rakhi jaati hai, uski saari galtiyan dekhi jaati hain, ek notebook mein likhi jaati hain, seekhi jaati hain, aur rat-rat kar yaad ki jaati hain, taaki mere muh par maari jaayein. Oh, main ro-ro kar apni aatma aankhon se baha sakta hoon! Yeh rahi meri khanjar, aur yeh raha mera nanga seena. Iske andar ek dil hai, jo Plutus ki khadan se bhi keemti hai, sone se bhi zyada ameer. Agar tum ek Roman ho, toh ise nikaal lo. Main, jisne tumhe gold dene se mana kiya, apna dil dunga. Waar karo, jaise tumne Caesar par kiya tha. Kyunki main jaanta hoon, jab tum usse sabse zyada nafrat karte the, tab tum usse usse zyada pyaar karte the jitna tumne kabhi mujhse kiya.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Apna khanjar andar rakho. Jab chaaho gussa ho jao, uske liye jagah hogi. Jo chaaho karo, beizzati ko sirf tumhara mijaz samjha jayega. O Cassius, tum ek aise memne ke saath jude ho jo gussa aise rakhta hai jaise pathar aag rakhta hai; jo, bahut zor dene par, ek chhoti si chingari dikhata hai aur phir turant thanda ho jaata hai.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Kya Cassius isliye zinda raha hai ki woh apne Brutus ke liye sirf hasi-mazak ka paatr bane, jab woh dukh aur gusse se pareshan ho?`,
    },
    {
      speaker: "BRUTUS",
      lines: "Jab maine woh kaha, main bhi gusse mein tha.",
    },
    { speaker: "CASSIUS", lines: "Tum itna maante ho? Apna haath do." },
    { speaker: "BRUTUS", lines: "Aur mera dil bhi." },
    { speaker: "CASSIUS", lines: "O Brutus!" },
    { speaker: "BRUTUS", lines: "Kya baat hai?" },
    {
      speaker: "CASSIUS",
      lines: `Kya tumhare paas itna pyaar nahi hai ki tum mere saath sabr kar sako, jab woh gusse wala mijaz jo mujhe meri maa se mila hai, mujhe bhulakkad bana deta hai?`,
    },
    {
      speaker: "BRUTUS",
      lines: `Haan, Cassius. Aur aaj se, jab tum apne Brutus ke saath zyada gusse mein hoge, toh woh sochega ki tumhari maa daant rahi hai aur tumhe waise hi chhod dega.`,
    },
    {
      speaker: "POET",
      lines: `(bahar se) Mujhe generals se milne andar jaane do. Unke beech kuch jhagda hai. Unka akela rehna theek nahi hai.`,
    },
    { speaker: "LUCILLIUS", lines: "(bahar se) Tum unke paas nahi jaoge." },
    { speaker: "POET", lines: "(bahar se) Sirf maut mujhe rok sakti hai." },
    { speaker: "CASSIUS", lines: "Ab kya? Kya baat hai?" },
    {
      speaker: "POET",
      lines: `Sharam karo, generals! Tumhara kya matlab hai? Pyaar karo, aur dost bano jaise do aise aadmiyon ko hona chahiye. Kyunki maine tumse zyada saal dekhe hain, yeh pakka hai.`,
    },
    {
      speaker: "CASSIUS",
      lines: "Ha, ha, yeh bewakoof kitni buri kavita karta hai!",
    },
    {
      speaker: "BRUTUS",
      lines: "Yahan se jao, sir. Badtameez aadmi, yahan se jao!",
    },
    {
      speaker: "CASSIUS",
      lines: `Uske saath sabr karo, Brutus. Yeh uska tareeka hai.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Main uska mijaz tab samjhunga jab woh apna samay samjhega. Yudh mein in naachne-gaane wale bewakoofon ka kya kaam? —Saathi, yahan se jao!`,
    },
    { speaker: "CASSIUS", lines: "Jaao, jaao, chale jaao." },
    {
      speaker: "BRUTUS",
      lines:
        "Lucillius aur Titinius, commanders ko kaho ki aaj raat apni companies ko thehrane ki taiyari karein.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Aur tum log khud bhi aao, aur Messala ko apne saath lao, turant hamare paas.",
    },
    { speaker: "BRUTUS", lines: "Lucius, ek pyaala sharab!" },
    {
      speaker: "CASSIUS",
      lines: "Maine nahi socha tha ki tum itne gusse mein ho sakte ho.",
    },
    {
      speaker: "BRUTUS",
      lines: "O Cassius, main bahut dukhon se beemar hoon.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Tum apne darshan ka istemal nahi karte, agar tum achanak aayi musibaton ke aage haar maan jaate ho.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Koi aadmi dukh ko mujhse behtar nahi sehta. Portia mar chuki hai.",
    },
    { speaker: "CASSIUS", lines: "Kya, Portia?" },
    { speaker: "BRUTUS", lines: "Woh mar chuki hai." },
    {
      speaker: "CASSIUS",
      lines: `Main maarne se kaise bach gaya jab maine tumhe itna gussa dilaya? Oh, kitna asahaniya aur dardnaak nuksaan! Kis beemari se?`,
    },
    {
      speaker: "BRUTUS",
      lines: `Meri anupasthiti se bechain hokar, aur is dukh se ki naujawan Octavius aur Mark Antony itne mazboot ho gaye hain—kyunki uski maut ke saath hi yeh khabar aayi—iske saath woh paagal ho gayi aur, jab uske sevak wahan nahi the, usne aag nigal li.`,
    },
    { speaker: "CASSIUS", lines: "Aur aise mar gayi?" },
    { speaker: "BRUTUS", lines: "Haan, aise hi." },
    { speaker: "CASSIUS", lines: "Hey amar devtaon!" },
    {
      speaker: "BRUTUS",
      lines:
        "Uske baare mein aur baat mat karo. Mujhe ek pyaala sharab do. Ismein main saari narazgi dafan karta hoon, Cassius.",
    },
    {
      speaker: "CASSIUS",
      lines: `Mera dil us nek vachan ke liye pyaasa hai. Bharo, Lucius, jab tak sharab pyaale se bahar na aa jaaye. Main Brutus ke pyaar ka zyada sevan nahi kar sakta.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "Andar aao, Titinius. Swagat hai, achhe Messala! Ab is mombatti ke paas baithkar apni zarooraton par charcha karte hain.",
    },
    { speaker: "CASSIUS", lines: "Portia, kya tum chali gayi?" },
    {
      speaker: "BRUTUS",
      lines: `Aur nahi, kripya. Messala, mujhe yahan letters mile hain ki naujawan Octavius aur Mark Antony ek badi sena ke saath hum par hamla karne aa rahe hain, aur unka abhiyan Philippi ki taraf hai.`,
    },
    { speaker: "MESSALA", lines: "Mere paas bhi usi tarah ke letters hain." },
    { speaker: "BRUTUS", lines: "Aur kya khabar hai?" },
    {
      speaker: "MESSALA",
      lines: `Ki sarkari aadesh aur maut ke farmaan se, Octavius, Antony, aur Lepidus ne sau senators ko maar daala hai.`,
    },
    {
      speaker: "BRUTUS",
      lines:
        "Is maamle mein hamare letters aapas mein mel nahi khaate. Mere letters mein sattar senators ke marne ki baat hai, jinmein se ek Cicero hai.",
    },
    { speaker: "CASSIUS", lines: "Cicero bhi?" },
    {
      speaker: "MESSALA",
      lines:
        "Cicero mar chuka hai, usi maut ke farmaan se. Kya aapko apni patni se letters mile the, my lord?",
    },
    { speaker: "BRUTUS", lines: "Nahi, Messala." },
    {
      speaker: "MESSALA",
      lines: "Aur kya aapke letters mein uske baare mein kuch nahi likha tha?",
    },
    { speaker: "BRUTUS", lines: "Kuch nahi, Messala." },
    { speaker: "MESSALA", lines: "Yeh mujhe ajeeb lagta hai." },
    {
      speaker: "BRUTUS",
      lines:
        "Tum kyun poochhte ho? Kya tumne apne letters mein uske baare mein kuch suna hai?",
    },
    { speaker: "MESSALA", lines: "Nahi, my lord." },
    {
      speaker: "BRUTUS",
      lines: "Ab, jaise ki tum ek Roman ho, mujhe sach batao.",
    },
    {
      speaker: "MESSALA",
      lines:
        "Toh ek Roman ki tarah sach ko sahan karo jo main batata hoon. Yeh nishchit hai ki woh mar chuki hai, aur ajeeb tareeke se.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Theek hai, alvida, Portia. Humein marna hi hai, Messala. Is baat par dhyan karke ki use ek din marna hi tha, ab mujh mein ise sehne ka dhairya hai.",
    },
    {
      speaker: "MESSALA",
      lines: "Isi tarah mahaan logon ko bade nuksaan sehne chahiye.",
    },
    {
      speaker: "CASSIUS",
      lines:
        "Mujhe is darshan ki samajh tum jitni hi hai, lekin mera swabhav ise aise nahi seh sakta.",
    },
    {
      speaker: "BRUTUS",
      lines:
        "Theek hai, ab zinda logon ke kaam par lagte hain. Tumhara kya khayal hai, abhi Philippi ki taraf march karne ke baare mein?",
    },
    { speaker: "CASSIUS", lines: "Mujhe nahi lagta yeh achha hai." },
    { speaker: "BRUTUS", lines: "Tumhara kaaran?" },
    {
      speaker: "CASSIUS",
      lines: `Yeh hai: Behtar hai ki dushman humein dhoondhe. Is tarah woh apne saadhan barbaad karega, apne sipahiyon ko thaka dega, khud ka nuksaan karega, jabki hum, shaant baithe hue, aaram, suraksha, aur furti se bhare honge.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Achhe kaaranon ko behtar kaaranon ke liye jagah deni padti hai. Philippi aur is jagah ke beech ke log humse sirf zabardasti ki vafadari rakhte hain, kyunki unhone humein yogdaan dene mein anaakani ki hai. Dushman, unke paas se guzarte hue, unse apni sena ko aur bada kar lega, taaza dam hokar aayega, naye sipahiyon ke saath, aur himmat se bhara hua. Is faayde se hum use kaat denge agar hum Philippi mein uska saamna karte hain, yeh log hamare peeche honge.`,
    },
    { speaker: "CASSIUS", lines: "Suno meri baat, achhe bhai—" },
    {
      speaker: "BRUTUS",
      lines: `Maaf karna. Tumhe yeh bhi dhyaan dena hoga ki humne apne doston ki poori madad le li hai, hamari senaayein poori tarah se bhari hui hain, hamara maksad pak chuka hai. Dushman har din badh raha hai. Hum, apni charam seema par, ab girne ke liye taiyar hain. Insaan ke maamlon mein ek lehar aati hai, jo, agar sahi samay par pakad li jaaye, toh kismat tak le jaati hai; agar chhod di jaaye, toh unki zindagi ki poori yatra uthli paaniyon aur dukhon mein fans jaati hai. Aise hi bhare samudra par hum abhi tair rahe hain, aur humein dhaara ka laabh uthana hoga jab woh hamare paksh mein ho, warna hum apna mauka kho denge.`,
    },
    {
      speaker: "CASSIUS",
      lines:
        "Toh, tumhari marzi se, aage badho. Hum khud saath chalenge, aur unse Philippi mein milenge.",
    },
    {
      speaker: "BRUTUS",
      lines: `Raat ki gehrai hamari baatcheet par chha gayi hai, aur prakriti ko zaroorat ka paalan karna hoga, jise hum thode aaram se poora karenge. Aur kuch kehna hai?`,
    },
    {
      speaker: "CASSIUS",
      lines:
        "Aur kuch nahi. Shubh ratri. Kal subah jaldi uthkar yahan se chalenge.",
    },
    {
      speaker: "BRUTUS",
      lines: `Lucius! Mera choga. Alvida, achhe Messala. Shubh ratri, Titinius. Nek, nek Cassius, shubh ratri aur aaram karo.`,
    },
    {
      speaker: "CASSIUS",
      lines: `Oh mere pyaare bhai, yeh raat ki buri shuruat thi. Hamari aatmaon ke beech aisi daraar kabhi na aaye. Aisa mat hone dena, Brutus.`,
    },
    { speaker: "BRUTUS", lines: "Sab theek hai." },
    { speaker: "CASSIUS", lines: "Shubh ratri, my lord." },
    { speaker: "BRUTUS", lines: "Shubh ratri, achhe bhai." },
    { speaker: "TITINIUS, MESSALA", lines: "Shubh ratri, Lord Brutus." },
    {
      speaker: "BRUTUS",
      lines: `Alvida, sabko. Mujhe choga do. Tumhara baja kahan hai?`,
    },
    { speaker: "LUCIUS", lines: "Yahan tent mein hai." },
    {
      speaker: "BRUTUS",
      lines: `Kya, tum neend mein bol rahe ho? Bechare ladke, main tumhe dosh nahi deta. Tum bahut der tak jaage ho. Claudio aur mere kuch aur aadmiyon ko bulao. Main unhe mere tent mein gaddon par sulaunga.`,
    },
    { speaker: "LUCIUS", lines: "Varrus aur Claudio!" },
    { speaker: "VARRUS", lines: "Kya mere lord ne bulaya?" },
    {
      speaker: "BRUTUS",
      lines: `Main aapse vinti karta hoon, sirs, mere tent mein let kar so jao. Ho sakta hai main aapko thodi der mein, apne bhai Cassius ke kisi kaam se uthaun.`,
    },
    {
      speaker: "VARRUS",
      lines:
        "Agar aap chahein, toh hum khade hokar aapke aadesh ka intezaar karenge.",
    },
    {
      speaker: "BRUTUS",
      lines: `Main aisa nahi chahta. Let jao, achhe sirs. Ho sakta hai main apna mann badal loon. Dekho, Lucius, yeh rahi woh kitaab jise main dhoondh raha tha. Maine ise apne choge ki jeb mein rakha tha.`,
    },
    {
      speaker: "LUCIUS",
      lines: "Mujhe yakeen tha ki aapne yeh mujhe nahi di thi.",
    },
    {
      speaker: "BRUTUS",
      lines: `Mere saath sabr karo, achhe ladke, main bahut bhulakkad ho gaya hoon. Kya tum thodi der apni bhaari aankhein khuli rakh sakte ho, aur apne baja par ek do dhun baja sakte ho?`,
    },
    { speaker: "LUCIUS", lines: "Haan, my lord, agar aap chahein." },
    {
      speaker: "BRUTUS",
      lines:
        "Haan, mere bachche. Main tumhe bahut pareshan karta hoon, lekin tum taiyar ho.",
    },
    { speaker: "LUCIUS", lines: "Yeh mera farz hai, sir." },
    {
      speaker: "BRUTUS",
      lines: `Mujhe tumhare farz ko tumhari taakat se zyada nahi aazmana chahiye. Main jaanta hoon naujawan khoon aaram ka samay dhoondhta hai.`,
    },
    { speaker: "LUCIUS", lines: "Main so chuka hoon, my lord, pehle hi." },
    {
      speaker: "BRUTUS",
      lines: `Yeh achha kiya, aur tum phir se sooge. Main tumhe der tak nahi rokunga. Agar main zinda raha, toh main tumhare liye achha rahunga.`,
    },
    {
      speaker: "BRUTUS",
      lines: `Yeh ek neend wali dhun hai. Oh, kaatil neend, kya tum apna bhaari gada mere uss ladke par rakhte ho jo tumhare liye sangeet baja raha hai? Bhole bachche, shubh ratri. Main tumhe utha kar tumhare saath itna galat nahi karunga. Agar tum jhapki lete ho, toh tum apna baja tod doge. Main ise tumse le leta hoon. Aur, achhe ladke, shubh ratri. Dekhne do, dekhne do. Kya woh panna muda hua nahi hai jahan maine padhna chhoda tha? Yeh raha, mujhe lagta hai.`,
    },
    {
      speaker: "GHOST OF CAESAR",
      lines: `Yeh mombatti kitni dheemi jal rahi hai! Ha, yahan kaun aata hai? Mujhe lagta hai yeh meri aankhon ki kamzori hai jo is bhayanak parchhayi ko bana rahi hai. Yeh meri taraf aa rahi hai. Kya tum kuch ho? Kya tum koi devta, koi farishta, ya koi shaitan ho jo mera khoon thanda kar raha hai aur mere baal khade kar raha hai? Mujhse bolo tum kya ho.`,
    },
    { speaker: "GHOST", lines: "Tumhari buri aatma, Brutus." },
    { speaker: "BRUTUS", lines: "Tum kyun aaye ho?" },
    {
      speaker: "GHOST",
      lines: "Tumhe yeh batane ke liye ki tum mujhe Philippi mein dekhoge.",
    },
    { speaker: "BRUTUS", lines: "Toh, main tumhe phir se dekhunga?" },
    { speaker: "GHOST", lines: "Haan, Philippi mein." },
    {
      speaker: "BRUTUS",
      lines: `Theek hai, main tumhe Philippi mein dekhunga, phir. Ab jab maine himmat juta li hai, tum gayab ho jaate ho. Buri aatma, main tumse aur baat karna chahta tha. Ladke, Lucius! Varrus! Claudio! Sirs, jaago! Claudio!`,
    },
    { speaker: "LUCIUS", lines: "Taar, my lord, galat hain." },
    {
      speaker: "BRUTUS",
      lines: "Woh sochta hai ki woh abhi bhi apne baja par hai. Lucius, jaago.",
    },
    { speaker: "LUCIUS", lines: "My lord?" },
    {
      speaker: "BRUTUS",
      lines: "Kya tumne sapna dekha, Lucius, ki tum aise chillaaye?",
    },
    { speaker: "LUCIUS", lines: "My lord, mujhe nahi pata ki main chillaya." },
    {
      speaker: "BRUTUS",
      lines: "Haan, tum chillaye the. Kya tumne kuch dekha?",
    },
    { speaker: "LUCIUS", lines: "Kuch nahi, my lord." },
    {
      speaker: "BRUTUS",
      lines: "Phir se so jao, Lucius. Sirrah Claudio! Saathi, tum, jaago!",
    },
    { speaker: "VARRUS", lines: "My lord?" },
    { speaker: "CLAUDIO", lines: "My lord?" },
    {
      speaker: "BRUTUS",
      lines: "Tum log apni neend mein aise kyun chillaaye?",
    },
    { speaker: "VARRUS, CLAUDIO", lines: "Kya hum chillaye, my lord?" },
    { speaker: "BRUTUS", lines: "Haan. Kya tumne kuch dekha?" },
    { speaker: "VARRUS", lines: "Nahi, my lord, maine kuch nahi dekha." },
    { speaker: "CLAUDIO", lines: "Na hi maine, my lord." },
    {
      speaker: "BRUTUS",
      lines:
        "Jao aur mere bhai Cassius ko mera salaam do. Use kaho ki woh apni sena ko samay se pehle aage badhaye, aur hum peeche aayenge.",
    },
    { speaker: "VARRUS, CLAUDIO", lines: "Aisa hi hoga, my lord." },
  ],
};
const descriptionVersions = {
  Shakespearean:
    "Within the tent, the quarrel between Brutus and Cassius explodes over matters of honor and gold, leading to a raw, emotional confrontation that ends with a surprising reconciliation and a haunting visitor.",
  "Normal English":
    "Inside the tent, Brutus and Cassius have an intense argument about bribery and honor. After a dramatic emotional breakdown and reconciliation, Brutus reveals Portia is dead and is then visited by the Ghost of Caesar.",
  Hinglish:
    "Tent ke andar, Brutus aur Cassius ke beech rishwatkhori aur izzat ko lekar ek bada jhagda hota hai. Ek dramatic emotional breakdown aur sulah ke baad, Brutus batata hai ki Portia mar chuki hai aur phir usse Caesar ka Bhoot milne aata hai.",
};

// Main App Component
const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [activeVersion, setActiveVersion] = useState("Shakespearean");
  const [activeTab, setActiveTab] = useState("dialogue");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentScrolledIndex, setCurrentScrolledIndex] = useState(0);
  const versionButtonRef = useRef(null);
  const galleryScrollerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    const updateSlider = () => {
      if (versionButtonRef.current) {
        const activeButton = versionButtonRef.current.querySelector(
          `button[data-version="${activeVersion}"]`
        );
        if (activeButton) {
          setSliderStyle({
            left: `${activeButton.offsetLeft}px`,
            width: `${activeButton.offsetWidth}px`,
          });
        }
      }
    };
    updateSlider();
    const handleResizeSlider = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateSlider, 100);
    };
    window.addEventListener("resize", handleResizeSlider);
    return () => {
      window.removeEventListener("resize", handleResizeSlider);
      clearTimeout(timeoutId);
    };
  }, [activeVersion]);

  useEffect(() => {
    if (isGalleryOpen && galleryScrollerRef.current) {
      const imageWidth = galleryScrollerRef.current.offsetWidth;
      galleryScrollerRef.current.scrollTo({
        left: imageWidth * selectedImageIndex,
        behavior: "auto",
      });
      setCurrentScrolledIndex(selectedImageIndex);
    }
    document.body.style.overflow = isGalleryOpen ? "hidden" : "auto";
  }, [isGalleryOpen, selectedImageIndex]);

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const handleGalleryScroll = (e) => {
    const scrollIndex = Math.round(e.target.scrollLeft / e.target.offsetWidth);
    setCurrentScrolledIndex(scrollIndex);
  };

  const scrollToImage = (index) => {
    if (galleryScrollerRef.current) {
      galleryScrollerRef.current.scrollTo({
        left: galleryScrollerRef.current.offsetWidth * index,
        behavior: "smooth",
      });
    }
  };



  const styles = {
    body: {
      backgroundColor: theme.colors.backgroundLight,
      fontFamily: theme.fontFamily.body.join(","),
      color: theme.colors.textLight,
      margin: 0,
      minHeight: "100vh",
      position: "relative",
    },
    backgroundGrid: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(${theme.colors.gray[200]} 1px, transparent 1px), linear-gradient(to right, ${theme.colors.gray[200]} 1px, transparent 1px)`,
      backgroundSize: "2rem 2rem",
      maskImage: "linear-gradient(to bottom, transparent 5%, black 40%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 5%, black 40%)",
      zIndex: 0,
    },
    main: {
      flexGrow: 1,
      padding: isLargeScreen ? "2rem 1rem" : "1rem 0.75rem",
      position: "relative",
      zIndex: 1,
      marginTop: "50px",
    },
    mainContentContainer: { maxWidth: "64rem", margin: "0 auto" },
    card: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      padding: isLargeScreen ? "2rem" : "1.5rem",
      marginBottom: "1rem",
      border: `1px solid ${theme.colors.gray[200]}`,
      position: "relative",
      overflow: "hidden",
    },
    introCardBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.1,
    },
    introCardContent: { position: "relative", zIndex: 10 },
    breadcrumbButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.875rem",
      fontWeight: "600",
      color: theme.colors.primary,
      backgroundColor: "rgba(139, 0, 0, 0.05)",
      border: `1px solid rgba(139, 0, 0, 0.1)`,
      padding: "0.5rem 1rem",
      borderRadius: theme.borderRadius.full,
      textDecoration: "none",
      transition: "background-color 0.2s, color 0.2s",
      cursor: "pointer",
      marginBottom: "1rem",
    },
    sceneTitle: {
      fontSize: isLargeScreen ? "3rem" : "2.25rem",
      fontWeight: "900",
      color: theme.colors.primary,
      marginBottom: "0.5rem",
      fontFamily: theme.fontFamily.display.join(","),
    },
    sceneSubtitle: {
      fontSize: "1.125rem",
      color: theme.colors.textLight,
      lineHeight: 1.6,
      marginBottom: "1.5rem",
      fontFamily: theme.fontFamily.display.join(","),
      fontStyle: "italic",
    },
    sceneDescription: {
      fontSize: "1rem",
      color: theme.colors.gray[600],
      lineHeight: 1.6,
      marginBottom: "2rem",
      maxWidth: "48rem",
    },
    navigationContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.5rem",
    },
    versionButtonGroup: {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.gray[100],
      padding: "0.25rem",
      borderRadius: theme.borderRadius.full,
      border: isLargeScreen
        ? `2px solid ${theme.colors.gray[200]}`
        : `1px solid ${theme.colors.gray[200]}`,
    },
    versionSlider: {
      position: "absolute",
      top: "0.25rem",
      bottom: "0.25rem",
      borderRadius: theme.borderRadius.full,
      backgroundColor: theme.colors.primary,
      transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
      zIndex: 1,
    },
    versionButton: {
      padding: isLargeScreen ? "0.6rem 2rem" : "0.5rem 1rem",
      fontSize: isLargeScreen ? "0.875rem" : "0.8rem",
      fontWeight: "700",
      color: theme.colors.gray[600],
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      transition: "color 0.4s ease",
      zIndex: 2,
      whiteSpace: "nowrap",
    },
    activeVersionButton: { color: theme.colors.white },
    mainNavButtonGroup: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      gap: "0.5rem",
    },
    mainNavButton: {
      flex: 1,
      padding: "0.6rem 0.25rem",
      fontSize: "0.8rem",
      fontWeight: "600",
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`,
      borderRadius: theme.borderRadius.full,
      cursor: "pointer",
      backgroundColor: "transparent",
      transition: "all 0.3s ease",
    },
    activeMainNavButton: {
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
    },
    mainGrid: {
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: isLargeScreen ? "repeat(3, 1fr)" : "1fr",
    },
    dialogueColumn: { gridColumn: isLargeScreen ? "span 2" : "span 1" },
    sidebarColumn: {
      gridColumn: "span 1",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    dialogueCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      padding: isLargeScreen ? "2.5rem" : "1.5rem",
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    dialogueEntry: { marginBottom: "2rem" },
    dialogueSpeaker: {
      fontWeight: "700",
      fontFamily: theme.fontFamily.display.join(","),
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
    },
    dialogueLines: {
      lineHeight: 1.7,
      color: theme.colors.gray[700],
      whiteSpace: "pre-line",
      paddingTop: "0.75rem",
      marginTop: "0.75rem",
    },
    sidebarCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      padding: "1.5rem",
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    sidebarHeader: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1rem",
    },
    sidebarTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: theme.colors.primary,
      fontFamily: theme.fontFamily.display.join(","),
    },
    galleryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "0.75rem",
    },
    galleryImage: {
      borderRadius: theme.borderRadius.lg,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      cursor: "pointer",
    },
    wordList: { listStyle: "none", paddingLeft: "0" },
    wordListItem: { marginBottom: "0.75rem" },
    wordTerm: { fontWeight: "700", color: theme.colors.textLight },
    questionSection: {
      marginTop: "1rem",
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    sectionTitle: {
      fontSize: isLargeScreen ? "2rem" : "1.5rem",
      fontWeight: "800",
      color: theme.colors.primary,
      fontFamily: theme.fontFamily.display.join(","),
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    subSectionTitle: {
      fontSize: isLargeScreen ? "1.5rem" : "1.25rem",
      fontWeight: "700",
      color: theme.colors.gray[800],
      fontFamily: theme.fontFamily.display.join(","),
      marginTop: "2rem",
      marginBottom: "1.5rem",
    },
    mcqItem: { marginBottom: "1.5rem" },
    mcqQuestion: {
      fontWeight: "600",
      color: theme.colors.gray[800],
      marginBottom: "1rem",
      fontSize: "1rem",
    },
    mcqOptionsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    mcqOption: {
      padding: "0.75rem 1rem",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme.colors.gray[200],
      borderRadius: theme.borderRadius.lg,
      cursor: "pointer",
      transition: "all 0.2s",
      backgroundColor: theme.colors.gray[50],
      textAlign: "left",
      fontFamily: theme.fontFamily.body.join(","),
      fontSize: "0.9rem",
      color: theme.colors.gray[800],
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    correctMcqOption: {
      borderColor: theme.colors.green[600],
      backgroundColor: theme.colors.green[100],
      fontWeight: "600",
      color: theme.colors.green[700],
    },
    incorrectMcqOption: {
      borderColor: theme.colors.red[600],
      backgroundColor: theme.colors.red[100],
      fontWeight: "600",
      color: theme.colors.red[700],
    },
    qaContainer: {
      padding: "1.5rem 0",
      borderBottom: `1px solid ${theme.colors.gray[200]}`,
    },
    qaQuestion: {
      fontWeight: "600",
      color: theme.colors.gray[800],
      fontSize: "1rem",
      marginBottom: "0.5rem",
    },
    answerLink: {
      fontSize: "0.875rem",
      fontWeight: "600",
      color: theme.colors.primary,
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
    },
    answerText: {
      marginTop: "1rem",
      color: theme.colors.gray[700],
      lineHeight: 1.6,
      fontSize: "0.9rem",
      backgroundColor: theme.colors.gray[50],
      padding: "1rem",
      borderRadius: theme.borderRadius.lg,
      border: `1px solid ${theme.colors.gray[200]}`,
    },
    summaryCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      padding: isLargeScreen ? "2.5rem" : "1.5rem",
      border: `1px solid ${theme.colors.gray[200]}`,
      marginTop: "1rem",
    },
    summaryHeader: {
      display: "flex",
      flexDirection: isLargeScreen ? "row" : "column",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
      flexWrap: "wrap",
      gap: "1rem",
    },
    summaryToggleGroup: {
      display: "flex",
      width: isLargeScreen ? "auto" : "100%",
      backgroundColor: theme.colors.gray[100],
      borderRadius: theme.borderRadius.full,
      padding: "0.25rem",
    },
    summaryToggleButton: {
      flex: 1,
      padding: "0.5rem 1rem",
      border: "none",
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius.full,
      cursor: "pointer",
      fontWeight: "600",
      color: theme.colors.gray[500],
      transition: "all 0.2s",
      fontSize: isLargeScreen ? "0.9rem" : "0.8rem",
    },
    qaToggleButton: {
      flex: 1,
      padding: isLargeScreen ? "0.5rem 2rem" : "0.5rem 0.5rem",
      border: "none",
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius.full,
      cursor: "pointer",
      fontWeight: "600",
      color: theme.colors.gray[500],
      transition: "all 0.2s",
      fontSize: isLargeScreen ? "0.9rem" : "0.75rem",
      whiteSpace: "nowrap",
    },
    activeSummaryToggleButton: {
      backgroundColor: theme.colors.white,
      color: theme.colors.primary,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    summaryContent: {
      lineHeight: 1.8,
      color: theme.colors.gray[700],
      fontSize: "1.05rem",
    },
    galleryModalBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      opacity: isGalleryOpen ? 1 : 0,
      transition: "opacity 0.3s ease",
      pointerEvents: isGalleryOpen ? "auto" : "none",
    },
    galleryModalContent: {
      position: "relative",
      width: "90%",
      maxWidth: "800px",
      height: "70vh",
      maxHeight: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transform: isGalleryOpen ? "scale(1)" : "scale(0.95)",
      transition: "transform 0.3s ease",
    },
    galleryModalCloseButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      color: theme.colors.textLight,
      border: "none",
      borderRadius: theme.borderRadius.full,
      width: "2.5rem",
      height: "2.5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 1011,
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    },
    galleryModalImageScroller: {
      display: "flex",
      overflowX: "scroll",
      scrollSnapType: "x mandatory",
      width: "100%",
      height: "100%",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    galleryModalImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      flexShrink: 0,
      scrollSnapAlign: "center",
    },
    galleryDotsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      marginTop: "1rem",
    },
    galleryDot: {
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: theme.borderRadius.full,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    activeGalleryDot: { backgroundColor: theme.colors.white },
    mobileGalleryContainer: {
      display: "flex",
      overflowX: "auto",
      gap: "0.75rem",
      padding: "0.5rem 0",
      scrollSnapType: "x mandatory",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    mobileGalleryImage: {
      height: "120px",
      width: "120px",
      objectFit: "cover",
      borderRadius: theme.borderRadius.lg,
      flexShrink: 0,
      scrollSnapAlign: "start",
    },
    mobileButtonCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.xl,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      padding: "1rem",
      marginBottom: "1rem",
      border: `1px solid ${theme.colors.gray[200]}`,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  };

  const dialogueContent = dialogueVersions[activeVersion];

  // Renaming plebeian speakers for clarity in the UI
  const processedDialogue = dialogueContent.map((entry) => {
    const newEntry = { ...entry };
    if (newEntry.speaker.includes("PLEBEIAN")) {
      newEntry.speaker = newEntry.speaker.replace("PLEBEIAN", "CITIZEN");
    } else if (entry.speaker === "GHOST") {
      newEntry.speaker = "GHOST OF CAESAR"; // Clarify which ghost
    }
    return newEntry;
  });

  const assignSpeakerColor = (speaker) => {
    if (speaker === "BRUTUS") return theme.colors.primary;
    if (speaker === "CASSIUS") return theme.colors.secondary;
    if (speaker === "GHOST OF CAESAR") return theme.colors.gray[800];
    return theme.colors.gray[700];
  };

  return (
    <div style={styles.body}>
      <div style={styles.backgroundGrid} />
      <div
        style={{
          ...styles.galleryModalBackdrop,
          opacity: isGalleryOpen ? 1 : 0,
          pointerEvents: isGalleryOpen ? "auto" : "none",
        }}
        onClick={closeGallery}
      >
        <div
          style={{
            ...styles.galleryModalContent,
            transform: isGalleryOpen ? "scale(1)" : "scale(0.95)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button style={styles.galleryModalCloseButton} onClick={closeGallery}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div
            ref={galleryScrollerRef}
            onScroll={handleGalleryScroll}
            style={styles.galleryModalImageScroller}
          >
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                style={styles.galleryModalImage}
              />
            ))}
          </div>
          <div style={styles.galleryDotsContainer}>
            {galleryImages.map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToImage(index)}
                style={
                  index === currentScrolledIndex
                    ? { ...styles.galleryDot, ...styles.activeGalleryDot }
                    : styles.galleryDot
                }
              />
            ))}
          </div>
        </div>
      </div>

      <main style={styles.main}>
        <div style={styles.mainContentContainer}>
          <div style={styles.card}>
            <img
              alt="Roman Forum background"
              style={styles.introCardBg}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBURfa0I53fnPXLusZMM3pKkaMlR39PRFdZSaDztvrVA3GbbSwl-URsK_oaMkyGXouKCkEOOvWpepqz0Vv13lsQcUdQhP4sAgiINxwQ0fsDUbIJ5kHpahdCvVebh9tpVT1AlIp5PIJiP80NA81aBNoDepsIjt3T22ryPuq5t6TCIUgGhyjLC-9sqBW_ofDSrq8GrrtKuUtbYwpiffitDGO7l46yO1Kq1hTToAvxxAu_j5sy2npIMprfT3Zc4TpqBG5AViVyZA6hQoi6"
            />
            <div style={styles.introCardContent}>
              <a
                style={styles.breadcrumbButton}
                href="/studymaterial/class9icse/Class9icseEnglish"
              >
                Julius Caesar
              </a>
              <h1 style={styles.sceneTitle}>Act IV, Scene 3</h1>
              <p style={styles.sceneSubtitle}>Within the tent of Brutus</p>
              <p style={styles.sceneDescription}>
                {descriptionVersions[activeVersion] ||
                  descriptionVersions["Shakespearean"]}
              </p>

              {isLargeScreen ? (
                <div style={styles.navigationContainer}>
                  <div style={styles.mainNavButtonGroup}>
                    <button
                      onClick={() => setActiveTab("dialogue")}
                      style={
                        activeTab === "dialogue"
                          ? {
                              ...styles.mainNavButton,
                              ...styles.activeMainNavButton,
                            }
                          : styles.mainNavButton
                      }
                    >
                      Dialogue
                    </button>
                    <button
                      onClick={() => setActiveTab("summary")}
                      style={
                        activeTab === "summary"
                          ? {
                              ...styles.mainNavButton,
                              ...styles.activeMainNavButton,
                            }
                          : styles.mainNavButton
                      }
                    >
                      Summary
                    </button>
                    <button
                      onClick={() => setActiveTab("qa")}
                      style={
                        activeTab === "qa"
                          ? {
                              ...styles.mainNavButton,
                              ...styles.activeMainNavButton,
                            }
                          : styles.mainNavButton
                      }
                    >
                      Q&A
                    </button>
                  </div>
                  {activeTab === "dialogue" && (
                    <div
                      ref={versionButtonRef}
                      style={{
                        ...styles.versionButtonGroup,
                        opacity: activeTab === "dialogue" ? 1 : 0,
                        pointerEvents:
                          activeTab === "dialogue" ? "auto" : "none",
                        transition: "opacity 0.3s",
                      }}
                    >
                      <div
                        style={{ ...styles.versionSlider, ...sliderStyle }}
                      ></div>
                      {Object.keys(dialogueVersions).map((version) => (
                        <button
                          key={version}
                          data-version={version}
                          onClick={() => setActiveVersion(version)}
                          style={
                            activeVersion === version
                              ? {
                                  ...styles.versionButton,
                                  ...styles.activeVersionButton,
                                }
                              : styles.versionButton
                          }
                        >
                          {version}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    ...styles.mobileGalleryContainer,
                    scrollbarWidth: "none",
                  }}
                >
                  {galleryImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Gallery thumbnail ${i + 1}`}
                      style={styles.mobileGalleryImage}
                      onClick={() => openGallery(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {!isLargeScreen && (
            <div style={styles.mobileButtonCard}>
              <div style={styles.mainNavButtonGroup}>
                <button
                  onClick={() => setActiveTab("dialogue")}
                  style={
                    activeTab === "dialogue"
                      ? {
                          ...styles.mainNavButton,
                          ...styles.activeMainNavButton,
                        }
                      : styles.mainNavButton
                  }
                >
                  Dialogue
                </button>
                <button
                  onClick={() => setActiveTab("summary")}
                  style={
                    activeTab === "summary"
                      ? {
                          ...styles.mainNavButton,
                          ...styles.activeMainNavButton,
                        }
                      : styles.mainNavButton
                  }
                >
                  Summary
                </button>
                <button
                  onClick={() => setActiveTab("qa")}
                  style={
                    activeTab === "qa"
                      ? {
                          ...styles.mainNavButton,
                          ...styles.activeMainNavButton,
                        }
                      : styles.mainNavButton
                  }
                >
                  Q&A
                </button>
              </div>
              {activeTab === "dialogue" && (
                <div
                  ref={versionButtonRef}
                  style={{ ...styles.versionButtonGroup, width: "100%" }}
                >
                  <div
                    style={{ ...styles.versionSlider, ...sliderStyle }}
                  ></div>
                  {Object.keys(dialogueVersions).map((version) => (
                    <button
                      key={version}
                      data-version={version}
                      onClick={() => setActiveVersion(version)}
                      style={
                        activeVersion === version
                          ? {
                              ...styles.versionButton,
                              ...styles.activeVersionButton,
                              flex: 1,
                            }
                          : { ...styles.versionButton, flex: 1 }
                      }
                    >
                      {version}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "dialogue" && (
            <div style={styles.mainGrid}>
              <div style={styles.dialogueColumn}>
                <div style={styles.dialogueCard}>
                  {processedDialogue.map((entry, index) => {
                    const lineColor = assignSpeakerColor(entry.speaker);

                    if (!isLargeScreen) {
                      return (
                        <div key={index} style={styles.dialogueEntry}>
                          <div
                            style={{
                              ...styles.dialogueSpeaker,
                              color: lineColor,
                            }}
                          >
                            {entry.speaker}
                          </div>
                          <div
                            style={{
                              ...styles.dialogueLines,
                              borderTop: `2px solid ${lineColor}`,
                            }}
                          >
                            {entry.lines}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "120px 1fr",
                          gap: "1.5rem",
                          marginBottom: "1.5rem",
                          alignItems: "start",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "right",
                            fontWeight: "700",
                            fontFamily: theme.fontFamily.display.join(","),
                            fontSize: "0.9rem",
                            paddingTop: "0.125rem",
                            color: lineColor,
                          }}
                        >
                          {entry.speaker}
                        </div>
                        <div
                          style={{
                            paddingLeft: "1.5rem",
                            lineHeight: 1.7,
                            color: theme.colors.gray[700],
                            whiteSpace: "pre-line",
                            borderLeft: `3px solid ${lineColor}`,
                          }}
                        >
                          {entry.lines}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {isLargeScreen && (
                <div style={styles.sidebarColumn}>
                  <div style={styles.sidebarCard}>
                    <div style={styles.sidebarHeader}>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "2rem",
                          color: theme.colors.secondary,
                        }}
                      >
                        gallery_thumbnail
                      </span>
                      <h3 style={styles.sidebarTitle}>Image Gallery</h3>
                    </div>
                    <div style={styles.galleryGrid}>
                      {galleryImages.map((src, i) => (
                        <img
                          key={i}
                          alt={`Scene image ${i + 1}`}
                          style={styles.galleryImage}
                          src={src}
                          onClick={() => openGallery(i)}
                        />
                      ))}
                    </div>
                  </div>
                  <div style={styles.sidebarCard}>
                    {" "}
                    <div style={styles.sidebarHeader}>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "2rem",
                          color: theme.colors.secondary,
                        }}
                      >
                        school
                      </span>
                      <h3 style={styles.sidebarTitle}>Important Words</h3>
                    </div>{" "}
                    <ul style={styles.wordList}>
                      {importantWords.map((word, i) => (
                        <li key={i} style={styles.wordListItem}>
                          <span style={styles.wordTerm}>{word.term}:</span>{" "}
                          {word.definition}
                        </li>
                      ))}
                    </ul>{" "}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "summary" && (
            <div style={styles.summaryCard}>
              <div style={styles.summaryHeader}>
                <Class9icseEnglishAct4Scene3Summary />
              </div>
            </div>
          )}

          {activeTab === "qa" && (
            <div style={styles.questionSection}>
              <Class9icseEnglishAct4Scene3Questions />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
