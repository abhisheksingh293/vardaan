import { X } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
  body: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#fdf8f0",
    overflow: "hidden",

    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
  },
  h_font: {
    fontFamily: "'Cinzel', serif",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  heroSection: {
    position: "relative",
    marginTop: "4.7rem",
    color: "white",

    padding: "8rem 1.5rem",
    textAlign: "center",
    overflow: "hidden",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  videoBackground: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(10, 0, 0, 0.7)",
    zIndex: 2,
  },
  heroContent: {
    position: "relative",
    zIndex: 3,
    maxWidth: "48rem",
    margin: "0 auto",
  },
  section: {
    padding: "5rem 0",
  },
  whiteBg: {
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)",
    backgroundSize: "25px 25px",
  },
  parchmentBg: { backgroundColor: "transparent" },
  card: {
    backgroundColor: "#fffcf7",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    border: "1px solid #e5e7eb",
  },
  footer: {
    backgroundColor: "#1e293b",
    color: "white",
    padding: "2rem 0",
    textAlign: "center",
  },
};

// DATA
const characterData = [
  { 
      name: "Julius Caesar", 
      description: "Rome's powerful general whose ambition sparks a conspiracy against him.", 
      color: "#b91c1c", 
      image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209540/Julius_caesar_pic_tqb22q.jpg",
      detailedAnalysis: [
          { heading: "Physical Infirmities", text: "Shakespeare laid great stress on Caesar's physical infirmities. When he is offered the crown, he swoons in a fit of epilepsy. Cassius describes how Caesar's strength failed him in the Tiber and how he shook with fever in Spain. Caesar himself admits that he is deaf." },
          { heading: "Superstitious Nature", text: "Caesar is presented as being highly superstitious and a believer in magic rites. At the Lupercal he tells his wife, Calpurnia to 'stand directly in Antonius' way'. He impressed on Antony the observance of the ritual. When his wife cries in her sleep, he consults the oracles." },
          { heading: "Fearlessness & Stoicism", text: "Caesar's arrogance and pride offset his ability to reason. He expresses a stoic acceptance of the inevitability of death, declaring that fear is the most unaccountable thing in all experiences." },
          { heading: "Resolute & Unmovable", text: "Caesar believes that he is beyond the reach of mere humans. He says, 'for always I am Caesar.' He prides himself on his immovability, claiming he cannot be moved by 'couchings' and 'lowly courtesies'." },
          { heading: "Inconsistency", text: "Caesar's sense of superiority, coupled with his overriding ambition, prevents him from reasoning clearly. He boasts of his constancy, yet vacillates between Calpurnia's dream and Decius' interpretation. He refers to the senators as 'greybeards' but fears their ridicule." }
      ]
  },
  { 
      name: "Brutus", 
      description: "A noble Roman torn between his loyalty to Caesar and his love for Rome.", 
      color: "#1e3a8a", 
      image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209540/Brutus_profile_pic_v2uonj.jpg",
      detailedAnalysis: [
          { heading: "Unimpeachable Integrity", text: "Brutus directs his life by reason and demands the same virtue in other men. He has an unshakable conviction of his own honesty." },
          { heading: "Personal Philosophy", text: "Brutus joins the conspirators not for personal reasons, but for the good of the state. He is devoted to the welfare of his country and the republican principles." },
          { heading: "Nobility of Character", text: "Shakespeare invents the character of the servant Lucius to show how attentive and considerate Brutus is as a master, highlighting his noble nature." },
          { heading: "A Poor Judge of Character", text: "He completely misjudges the crowd, addressing them as if each individual were a trained philosopher. It was a fatal error to allow Antony to address the crowd in his absence." },
          { heading: "Practical Errors", text: "It is a cruel irony that the rational Brutus is influenced by the Ghost of Caesar to take his life at Philippi. Despite his complete personal integrity, he lacked the wisdom necessary for political success." }
      ]
  },
  { 
      name: "Cassius", 
      description: "The shrewd, manipulative mastermind behind the conspiracy.", 
      color: "#4d7c0f", 
      image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209540/Gaius_Cassius_profile_pic_vupesn.jpg",
      detailedAnalysis: [
          { heading: "Personal Traits", text: "He is described by Caesar as lean, gaunt, and hungry. A follower of the Epicurean philosophy, he is free from superstition and does not fear death." },
          { heading: "Jealousy and Envy", text: "Cassius takes pleasure in detecting the weakness of his fellows. He is jealous of excellence in others and stands out as bold, self-reliant, and confident in his own worth." },
          { heading: "Practical Efficiency", text: "Cassius is thoroughly efficient. He knows the right thing to do and does it. He recognizes that the conspiracy cannot succeed without Brutus' aid and sets out to win him over with shrewd manipulation." }
      ]
  },
  { 
      name: "Mark Antony", 
      description: "Caesar's loyal friend and a skilled orator who sways the public will.", 
      color: "#ca8a04", 
      image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209540/Mark_Antony_profile_pic_cagow6.jpg",
      detailedAnalysis: [
          { heading: "First Impressions", text: "References by other characters suggest that Antony is a luxury-loving Roman soldier and a loyal friend of Caesar, perhaps underestimating his depth." },
          { heading: "Devotion to Caesar", text: "Antony's devotion to Caesar is proved not only by his public utterances but by his anguish when he is alone with Caesar's body, revealing his genuine grief and loyalty." },
          { heading: "A Shrewd and Scheming Intellect", text: "Antony is a man of policy. After the conspirators flee, he plans to cut down legacies and shift blame onto Lepidus, showing his ruthless and calculating nature." },
          { heading: "Master of Oratory", text: "During the funeral oration, Antony masterfully plays on the mob's emotions. His show of personal grief, his appeal to their curiosity, and his final appeal to their hatred of ingratitude whip the crowd into a furious mob." }
      ]
  },
  { name: "Portia", description: "The strong and devoted wife of Brutus, concerned about his inner turmoil.", color: "#86198f", image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209541/Portia_profile_pi_mu7upv.jpg" },
  { name: "Calpurnia", description: "Caesar's wife, who has premonitions of the tragedy to come.", color: "#166534", image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209540/Calpurnia_profile_pic_fdjxol.jpg" },
  { name: "Octavius Caesar", description: "Caesar's adopted son and heir, who forms a triumvirate with Antony.", color: "#1e3a8a", image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209541/Octavious_profile_pic_ozrfu8.jpg" },
  { name: "Casca", description: "A cynical conspirator who is the first to stab Caesar.", color: "#4a5568", image: "https://res.cloudinary.com/dxwszplz7/image/upload/v1759209540/Casca_profile_pic_ewhs7w.jpg" },
];
const summariesData = {
  1: {
    summary:
      "The play begins with the commoners of Rome celebrating Caesar's triumphant return after defeating the sons of his rival, Pompey. The tribunes Flavius and Marullus condemn the crowd for their fickle loyalty. Meanwhile, Cassius, a nobleman resentful of Caesar's power, begins to sow seeds of conspiracy in the mind of the honorable Brutus, suggesting Caesar is a threat to the Roman Republic.",
    image:
      "https://res.cloudinary.com/dxwszplz7/image/upload/v1759149103/c6a2e9f5-221e-45ea-843e-2fd501f5f285.png",
    scenes: [
      {
        title: "Scene 1: A Street in Rome",
        description:
          "Tribunes Marullus and Flavius berate the citizens for celebrating Caesar.",
      },
      {
        title: "Scene 2: A Public Place",
        description:
          "Caesar is warned by a Soothsayer. Cassius begins his manipulation of Brutus.",
      },
      {
        title: "Scene 3: A Street with Thunder",
        description:
          "Amidst a terrible storm, Cassius recruits a frightened Casca into the conspiracy.",
      },
    ],
    themes: [
      {
        icon: "🏛️",
        title: "Fickleness of the Public",
        description:
          "The Roman citizens quickly shift their allegiances, a theme that becomes crucial later in the play.",
        color: "#1e40af",
      },
      {
        icon: "🤔",
        title: "Envy and Manipulation",
        description:
          "Cassius’s envy of Caesar fuels his clever manipulation of the noble Brutus.",
        color: "#8b5cf6",
      },
      {
        icon: "⚡",
        title: "Omens and Fate",
        description:
          "The play is filled with supernatural warnings, questioning whether fate can be altered.",
        color: "#be185d",
      },
    ],
    quotes: [
      {
        text: "Beware the ides of March.",
        speaker: "Soothsayer",
        color: "#6d28d9",
      },
      {
        text: "The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings.",
        speaker: "Cassius",
        color: "#4d7c0f",
      },
    ],
  },
  2: {
    summary:
      "Convinced by Cassius and forged letters, Brutus concludes that Caesar must be assassinated to preserve the Republic. He meets with the other conspirators and takes leadership, but makes a critical error in sparing Mark Antony's life. Meanwhile, both Portia, Brutus's wife, and Calpurnia, Caesar's wife, have premonitions of the impending violence.",
    image:
      "https://res.cloudinary.com/dxwszplz7/image/upload/v1759228881/ACT_2_my9n1s.jpg",
    scenes: [
      {
        title: "Scene 1: Brutus's Orchard",
        description:
          "Brutus resolves to kill Caesar and the conspirators meet at his home.",
      },
      {
        title: "Scene 2: Caesar's House",
        description:
          "Calpurnia, terrified by a dream, begs Caesar to stay home, but Decius persuades him to go to the Capitol.",
      },
      {
        title: "Scene 3: A Street near the Capitol",
        description:
          "Artemidorus reads a letter he has written to warn Caesar.",
      },
      {
        title: "Scene 4: Before Brutus's House",
        description:
          "A frantic Portia sends a servant to the Senate to check on Brutus.",
      },
    ],
    themes: [
      {
        icon: "⚖️",
        title: "Honor vs. Friendship",
        description:
          "Brutus’s internal conflict between his love for Caesar and his sense of duty to Rome is central.",
        color: "#0e7490",
      },
      {
        icon: "💔",
        title: "Marital Concern",
        description:
          "The anxieties of Portia and Calpurnia highlight the personal toll of political conspiracy.",
        color: "#9f1239",
      },
      {
        icon: " persuad",
        title: "Persuasion and Flattery",
        description:
          "Decius Brutus expertly re-interprets Calpurnia’s dream to flatter Caesar and lead him to his doom.",
        color: "#a16207",
      },
    ],
    quotes: [
      {
        text: "Cowards die many times before their deaths; The valiant never taste of death but once.",
        speaker: "Caesar",
        color: "#b91c1c",
      },
      {
        text: "It is the bright day that brings forth the adder, And that craves wary walking.",
        speaker: "Brutus",
        color: "#1e3a8a",
      },
    ],
  },
  3: {
    summary:
      "The conspirators carry out their plan, assassinating Caesar in the Senate. Brutus addresses the Roman public, justifying the murder, and for a moment, he has their support. However, Mark Antony, under the guise of mourning, delivers a masterful funeral oration that incites the crowd into a violent mob, forcing the conspirators to flee Rome.",
    image:
      "https://res.cloudinary.com/dxwszplz7/image/upload/v1759228880/ACT_3_MAIN_kasmz8.jpg",
    scenes: [
      {
        title: "Scene 1: The Capitol",
        description: "The conspirators stab Caesar to death.",
      },
      {
        title: "Scene 2: The Forum",
        description:
          "Brutus speaks, followed by Antony’s game-changing funeral oration.",
      },
      {
        title: "Scene 3: A Street",
        description:
          "The angry mob murders Cinna the poet, mistaking him for a conspirator.",
      },
    ],
    themes: [
      {
        icon: "🗣️",
        title: "Rhetoric and Power",
        description:
          "Antony's speech masterfully uses irony and emotion to turn public opinion against the conspirators.",
        color: "#b45309",
      },
      {
        icon: "🔥",
        title: "Mob Mentality",
        description:
          "The citizens of Rome are easily swayed, and their passion quickly turns to mindless violence.",
        color: "#dc2626",
      },
      {
        icon: "🎭",
        title: "Revenge",
        description:
          "Antony's grief is genuine, but he channels it into a calculated plot for revenge.",
        color: "#581c87",
      },
    ],
    quotes: [
      {
        text: "Et tu, Brute? — Then fall, Caesar!",
        speaker: "Caesar",
        color: "#b91c1c",
      },
      {
        text: "Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him.",
        speaker: "Mark Antony",
        color: "#ca8a04",
      },
    ],
  },
  4: {
    summary:
      "Antony, Octavius, and Lepidus form a new ruling Triumvirate and begin a ruthless purge of their political enemies. Far from Rome, the bond between Brutus and Cassius begins to break under the pressure of war, leading to a bitter quarrel over honor and finances. The act concludes with the haunting appearance of Caesar's ghost to Brutus, ominously promising to meet him at Philippi.",
    image:
      "https://res.cloudinary.com/dxwszplz7/image/upload/v1759228878/ACT_4_MAIN_dmp8bf.jpg",
    scenes: [
      {
        title: "Scene 1: A House in Rome",
        description:
          "Antony, Octavius, and Lepidus make a cold-blooded list of those who must die.",
      },
      {
        title: "Scene 2: Camp near Sardis",
        description:
          "Brutus and Cassius meet with their armies, showing signs of tension.",
      },
      {
        title: "Scene 3: Brutus's Tent",
        description:
          "The two generals have a heated argument but eventually reconcile. Caesar's ghost appears to Brutus.",
      },
    ],
    themes: [
      {
        icon: "🤝",
        title: "Corrupting Influence of Power",
        description:
          "The new Triumvirate proves to be just as ruthless as Caesar was feared to become.",
        color: "#4a5568",
      },
      {
        icon: "👻",
        title: "Guilt and Foreboding",
        description:
          "Caesar's ghost symbolizes Brutus's guilty conscience and the inevitable consequences of his actions.",
        color: "#4338ca",
      },
      {
        icon: "💸",
        title: "Pragmatism vs. Idealism",
        description:
          "The quarrel between Cassius and Brutus highlights their differing philosophies on how to conduct the war.",
        color: "#854d0e",
      },
    ],
    quotes: [
      {
        text: "There is a tide in the affairs of men Which, taken at the flood, leads on to fortune;",
        speaker: "Brutus",
        color: "#1e3a8a",
      },
      {
        text: "Thou shalt see me at Philippi.",
        speaker: "Ghost of Caesar",
        color: "#6d28d9",
      },
    ],
  },
  5: {
    summary:
      "The war concludes on the plains of Philippi. In the heat of battle, Cassius, mistakenly believing his friend Titinius has been captured, has his servant kill him. Later, seeing his army defeated, Brutus runs on his own sword. Antony finds Brutus's body and, in a moment of respect, declares him the 'noblest Roman of them all,' as he alone acted for the good of Rome.",
    image:
      "https://res.cloudinary.com/dxwszplz7/image/upload/v1759228877/ACT_5_MAIN_vsa628.jpg",
    scenes: [
      {
        title: "Scene 1: The Plains of Philippi",
        description:
          "The opposing generals exchange insults before the battle begins.",
      },
      {
        title: "Scene 2: The Field of Battle",
        description: "Brutus sends a message for his legions to advance.",
      },
      {
        title: "Scene 3: Another Part of the Field",
        description:
          "Driven by a misunderstanding, Cassius commits suicide. Titinius follows suit.",
      },
      {
        title: "Scene 4: Another Part of the Field",
        description: "Young Cato is killed in battle.",
      },
      {
        title: "Scene 5: Another Part of the Field",
        description: "Facing defeat, Brutus runs on his own sword and dies.",
      },
    ],
    themes: [
      {
        icon: "⚔️",
        title: "Tragedy and Misjudgment",
        description:
          "The downfall of the conspirators is sealed by battlefield errors and tragic misunderstandings.",
        color: "#7f1d1d",
      },
      {
        icon: "🕊️",
        title: "Honor in Death",
        description:
          "Brutus and Cassius choose suicide over the dishonor of being captured, a Roman ideal.",
        color: "#64748b",
      },
      {
        icon: "🏆",
        title: "Victory and Respect",
        description:
          "Antony’s final words over Brutus show a return to order and a recognition of his noble intentions.",
        color: "#166534",
      },
    ],
    quotes: [
      {
        text: "Caesar, now be still; I killed not thee with half so good a will.",
        speaker: "Brutus",
        color: "#1e3a8a",
      },
      {
        text: "This was the noblest Roman of them all.",
        speaker: "Mark Antony",
        color: "#ca8a04",
      },
    ],
  },
};

// Reusable Components
const Section = ({ id, style, children }) => (
  <section id={id} style={{ ...styles.section, ...style }}>
    <div style={styles.container}>{children}</div>
  </section>
);

const SectionTitle = ({ children, style }) => (
  <h3
    style={{
      ...styles.h_font,
      fontSize: "2.25rem",
      fontWeight: "bold",
      textAlign: "center",
      color: "#1e293b",
      marginBottom: "3rem",
      ...style,
    }}
  >
    {children}
  </h3>
);

// Page Sections as Components
const HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const getButtonStyle = (btnName) => {
    const isHovered = hoveredBtn === btnName;
    const baseStyle = {
      backgroundColor: "transparent",
      color: "#FFD700", // Gold color
      fontWeight: "bold",
      padding: "0.75rem 2rem",
      borderRadius: "9999px", // Capsule shape
      textDecoration: "none",
      border: "2px solid #FFD700",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      backdropFilter: "blur(5px)",
    };

    if (isHovered) {
      return {
        ...baseStyle,
        backgroundColor: "#FFD700",
        color: "#1e293b",
        transform: "translateY(-3px)",
        boxShadow: "0 8px 15px rgba(255, 215, 0, 0.3)",
      };
    }
    return baseStyle;
  };

  return (
    <section id="home" style={styles.heroSection}>
      <video autoPlay loop muted style={styles.videoBackground}>
        <source
          src="https://res.cloudinary.com/dxwszplz7/video/upload/v1759203399/Julius_Caesar_hero_section_video_iswedw.mp4"
          type="video/mp4"
        />
      </video>
      <div style={styles.videoOverlay}></div>
      <div style={styles.heroContent}>
        <p
          style={{
            ...styles.h_font,
            fontSize: "1.25rem",
            color: "#d1d5db",
            marginBottom: "1rem",
          }}
        >
          Shakespeare's Timeless Tragedy
        </p>
        <h1
          style={{
            ...styles.h_font,
            fontSize: "clamp(3rem, 10vw, 5rem)",
            fontWeight: "bold",
            lineHeight: 1.1,
            textShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          Julius Caesar
        </h1>
        <p style={{ marginTop: "1.5rem", fontSize: "1.25rem" }}>
          A definitive study guide for ICSE Class 9. Unravel the schemes,
          speeches, and swords of ancient Rome.
        </p>
        <p
          style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#d1d5db" }}
        >
          Made with ❤️ by Team Vardaan
        </p>
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <a
            href={`#analysis`}
            style={getButtonStyle("analysis")}
            onMouseEnter={() => setHoveredBtn("analysis")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Explore the Play
          </a>
          <a
            href={`#characters`}
            style={getButtonStyle("characters")}
            onMouseEnter={() => setHoveredBtn("characters")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Meet the Characters
          </a>
        </div>
      </div>
    </section>
  );
};

const CharacterGuideContent = ({ onCardClick }) => {
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);
  const loopedCharacters = [...characterData, ...characterData];

  const stopAutoScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const { scrollLeft, scrollWidth } = scrollContainer;
      const card = scrollContainer.querySelector(".character-scroll-card");
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 24;
      const totalCardWidth = cardWidth + gap;

      if (scrollLeft >= scrollWidth / 2) {
        scrollContainer.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollContainer.scrollBy({ left: totalCardWidth, behavior: "smooth" });
      }
    }, 3000);
  }, [stopAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  return (
    <>
      <SectionTitle>Key Characters</SectionTitle>
      <div
        className="character-scrollport"
        ref={scrollContainerRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        onTouchStart={stopAutoScroll}
        onTouchEnd={startAutoScroll}
      >
        {loopedCharacters.map((char, index) => (
          <div
            key={`${char.name}-${index}`}
            className="character-scroll-card"
            style={{
              ...styles.card,
              cursor: char.detailedAnalysis ? "pointer" : "default",
              position: "relative",
            }}
            onClick={() => char.detailedAnalysis && onCardClick(char)}
          >
            {char.detailedAnalysis && <div className="pulse-dot"></div>}
            <img
              src={char.image}
              alt={`Portrait of ${char.name}`}
              style={{
                width: "150px",
                height: "150px",
                margin: "0 auto",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h4
              style={{
                ...styles.h_font,
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: char.color,
                marginTop: "1rem",
              }}
            >
              {char.name}
            </h4>
            <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
              {char.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

const CharacterGuide = ({ onCardClick }) => (
  <Section id="characters" style={styles.whiteBg}>
    <CharacterGuideContent onCardClick={onCardClick} />
  </Section>
);

const ActAnalysis = ({ characterGuideForMobile }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredScene, setHoveredScene] = useState(null);
  const [hoveredAct, setHoveredAct] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#act-')) {
      const actNum = parseInt(hash.substring(5), 10);
      if (!isNaN(actNum) && actNum >= 1 && actNum <= 5) {
        setActiveTab(actNum);
      }
    }
  }, []);

  const handleTabClick = (actNum) => {
    setActiveTab(actNum);
    window.location.hash = `act-${actNum}`;
  };

  const activeData = summariesData[activeTab];
  const romanNumerals = ["I", "II", "III", "IV", "V"];

  const summaryCardStyle = {
    maxWidth: "64rem",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    overflow: "hidden",
    border: "2px solid #d4af37",
  };
  const summaryFlexContainer = { display: "flex", flexWrap: "wrap" };
  const imagePanel = { flex: "1 1 300px" };
  const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };
  const summaryTextPanel = {
    flex: "2 1 400px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const scenesContainer = {
    padding: "2rem",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
  };

  const getSceneButtonStyle = (index) => {
    const baseStyle = {
      textDecoration: "none",
      width: "100%",
      textAlign: "left",
      padding: "1rem",
      borderRadius: "0.5rem",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      border: "1px solid #e5e7eb",
      cursor: "pointer",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    };
    if (hoveredScene === index) {
      return {
        ...baseStyle,
        backgroundColor: "rgba(212, 175, 55, 0.15)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      };
    }
    return baseStyle;
  };

  const getActButtonStyle = (actNum) => {
    const isActive = activeTab === actNum;
    const isHovered = hoveredAct === actNum;

    const baseStyle = {
      padding: "0.6rem 1.75rem",
      fontWeight: "bold",
      border: "1px solid #d1c7b3", // Subtle border for inactive buttons
      borderRadius: "9999px", // Pill shape
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      backgroundColor: "white", // White background for better contrast
      color: "#4b5563", // A soft, dark gray
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    };

    if (isActive) {
      return {
        ...baseStyle,
        backgroundColor: "#d4af37",
        color: "#1e293b",
        border: "1px solid #d4af37",
        boxShadow: "0 4px 10px rgba(212, 175, 55, 0.3)",
        transform: "translateY(-3px)",
      };
    }

    if (isHovered) {
      return {
        ...baseStyle,
        backgroundColor: "rgba(212, 175, 55, 0.1)",
        color: "#1e293b",
        borderColor: "#c0b28a",
        boxShadow: "0 3px 6px rgba(0,0,0,0.08)",
        transform: "translateY(-2px)",
      };
    }

    return baseStyle;
  };

  return (
    <Section id="analysis" style={styles.parchmentBg}>
      <SectionTitle>Act-by-Act Analysis</SectionTitle>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "3rem",
          gap: "1rem",
        }}
      >
        {[1, 2, 3, 4, 5].map((actNum) => (
          <button
            key={actNum}
            onClick={() => handleTabClick(actNum)}
            style={getActButtonStyle(actNum)}
            onMouseEnter={() => setHoveredAct(actNum)}
            onMouseLeave={() => setHoveredAct(null)}
          >
            Act {romanNumerals[actNum - 1]}
          </button>
        ))}
      </div>
      <div style={summaryCardStyle}>
        <div style={summaryFlexContainer}>
          <div style={imagePanel}>
            <img
              src={activeData.image}
              alt={`Visual for Act ${romanNumerals[activeTab - 1]}`}
              style={imageStyle}
            />
          </div>
          <div style={summaryTextPanel}>
            <h4
              style={{
                ...styles.h_font,
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#8B0000",
                marginBottom: "1rem",
              }}
            >
              Julius Caesar: Act {romanNumerals[activeTab - 1]}
            </h4>
            <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
              {activeData.summary}
            </p>
          </div>
        </div>
        <div style={scenesContainer}>
          <h5
            style={{
              ...styles.h_font,
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              color: "#1e293b",
            }}
          >
            Key Scenes
          </h5>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {activeTab === 1 && (
              <>
                {activeData.scenes.map((scene, index) => {
                  const sceneLinks = [
                    "/studymaterial/class9icseEnglish/act1/scene1",
                    "/studymaterial/class9icseEnglish/act1/scene2",
                    "/studymaterial/class9icseEnglish/act1/scene3",
                  ];
                  return (
                    <Link
                      key={scene.title}
                      to={sceneLinks[index]}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={getSceneButtonStyle(index)}
                        onMouseEnter={() => setHoveredScene(index)}
                        onMouseLeave={() => setHoveredScene(null)}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            backgroundColor: "rgba(30, 41, 59, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                              color: "#1e293b",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: 600,
                              color: "#8B0000",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {scene.title}
                          </p>
                          <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                            {scene.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
            {activeTab === 2 && (
              <>
                {activeData.scenes.map((scene, index) => {
                  const sceneLinks = [
                    "/studymaterial/class9icseEnglish/act2/scene1",
                    "/studymaterial/class9icseEnglish/act2/scene2",
                    "/studymaterial/class9icseEnglish/act2/scene3",
                    "/studymaterial/class9icseEnglish/act2/scene4",
                  ];
                  return (
                    <Link
                      key={scene.title}
                      to={sceneLinks[index]}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={getSceneButtonStyle(index)}
                        onMouseEnter={() => setHoveredScene(index)}
                        onMouseLeave={() => setHoveredScene(null)}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            backgroundColor: "rgba(30, 41, 59, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                              color: "#1e293b",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: 600,
                              color: "#8B0000",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {scene.title}
                          </p>
                          <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                            {scene.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
            {activeTab === 3 && (
              <>
                {activeData.scenes.map((scene, index) => {
                  const sceneLinks = [
                    "/studymaterial/class9icseEnglish/act3/scene1",
                    "/studymaterial/class9icseEnglish/act3/scene2",
                    "/studymaterial/class9icseEnglish/act3/scene3",
                  ];
                  return (
                    <Link
                      key={scene.title}
                      to={sceneLinks[index]}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={getSceneButtonStyle(index)}
                        onMouseEnter={() => setHoveredScene(index)}
                        onMouseLeave={() => setHoveredScene(null)}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            backgroundColor: "rgba(30, 41, 59, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                              color: "#1e293b",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: 600,
                              color: "#8B0000",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {scene.title}
                          </p>
                          <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                            {scene.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
            {activeTab === 4 && (
              <>
                {activeData.scenes.map((scene, index) => {
                  const sceneLinks = [
                    "/studymaterial/class9icseEnglish/act4/scene1",
                    "/studymaterial/class9icseEnglish/act4/scene2",
                    "/studymaterial/class9icseEnglish/act4/scene3",
                  ];
                  return (
                    <Link
                      key={scene.title}
                      to={sceneLinks[index]}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={getSceneButtonStyle(index)}
                        onMouseEnter={() => setHoveredScene(index)}
                        onMouseLeave={() => setHoveredScene(null)}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            backgroundColor: "rgba(30, 41, 59, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                              color: "#1e293b",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: 600,
                              color: "#8B0000",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {scene.title}
                          </p>
                          <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                            {scene.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
            {activeTab === 5 && (
              <>
                {activeData.scenes.map((scene, index) => {
                  const sceneLinks = [
                    "/studymaterial/class9icseEnglish/act5/scene1",
                    "/studymaterial/class9icseEnglish/act5/scene2",
                    "/studymaterial/class9icseEnglish/act5/scene3",
                    "/studymaterial/class9icseEnglish/act5/scene4",
                    "/studymaterial/class9icseEnglish/act5/scene5",
                  ];
                  return (
                    <Link
                      key={scene.title}
                      to={sceneLinks[index]}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={getSceneButtonStyle(index)}
                        onMouseEnter={() => setHoveredScene(index)}
                        onMouseLeave={() => setHoveredScene(null)}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            backgroundColor: "rgba(30, 41, 59, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                              color: "#1e293b",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: 600,
                              color: "#8B0000",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {scene.title}
                          </p>
                          <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                            {scene.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="small-screen-characters">{characterGuideForMobile}</div>

      <div style={{ maxWidth: "64rem", margin: "4rem auto 0" }}>
        <ActThemes
          themes={activeData.themes}
          act={romanNumerals[activeTab - 1]}
        />
        <ActQuotes
          quotes={activeData.quotes}
          act={romanNumerals[activeTab - 1]}
        />
      </div>
    </Section>
  );
};

const ActThemes = ({ themes, act }) => {
  const [hoveredTheme, setHoveredTheme] = useState(null);

  const getThemeCardStyle = (theme) => {
    const isHovered = hoveredTheme === theme.title;
    const baseStyle = {
      backgroundColor: "white",
      borderRadius: "0.75rem",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.07)",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      padding: "2rem 1.5rem",
      border: "1px solid #f0e9dc",
    };

    if (isHovered) {
      return {
        ...baseStyle,
        transform: "translateY(-10px)",
        boxShadow: `0 20px 30px -10px ${theme.color}40`,
      };
    }
    return baseStyle;
  };

  const iconContainerStyle = (color) => ({
    backgroundColor: `${color}1A`,
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.5rem",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon
  });

  const iconStyle = (color) => ({
    fontSize: "2.5rem",
    color: color,
  });

  return (
    <div style={{ marginBottom: "4rem" }}>
      <SectionTitle style={{ marginBottom: "2rem" }}>
        Themes in Act {act}
      </SectionTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {themes.map((theme) => (
          <div
            key={theme.title}
            style={getThemeCardStyle(theme)}
            onMouseEnter={() => setHoveredTheme(theme.title)}
            onMouseLeave={() => setHoveredTheme(null)}
          >
            <div style={iconContainerStyle(theme.color)}>
              <span style={iconStyle(theme.color)}>{theme.icon}</span>
            </div>
            <h4
              style={{
                ...styles.h_font,
                fontSize: "1.375rem",
                fontWeight: "bold",
                marginBottom: "0.75rem",
                color: "#1e293b",
              }}
            >
              {theme.title}
            </h4>
            <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
              {theme.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActQuotes = ({ quotes, act }) => (
  <div style={{ marginBottom: "4rem" }}>
    <SectionTitle style={{ marginBottom: "2rem" }}>
      Key Quotes from Act {act}
    </SectionTitle>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
      }}
    >
      {quotes.map((quote) => (
        <blockquote
          key={quote.text}
          style={{
            backgroundColor: `${quote.color}15`,
            padding: "1.5rem",
            borderRadius: "0.5rem",
            borderLeft: `5px solid ${quote.color}`,
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              color: "#1f2937",
              fontSize: "1.125rem",
              marginBottom: "1rem",
            }}
          >
            "{quote.text}"
          </p>
          <footer
            style={{ textAlign: "right", fontWeight: 600, color: quote.color }}
          >
            — {quote.speaker}
          </footer>
        </blockquote>
      ))}
    </div>
  </div>
);

const CharacterModal = ({ character, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(5px)',
    };

    const modalContentStyle = {
        backgroundColor: '#fffcf7',
        padding: '2rem',
        borderRadius: '0.75rem',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        border: `2px solid ${character.color}`,
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'transparent',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: '#4b5563',
    };

    return (
        <div style={modalOverlayStyle} onClick={onClose}>
            <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={closeButtonStyle}>&times;</button>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1.5rem' }}>
                    <img src={character.image} alt={character.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '1.5rem', border: `3px solid ${character.color}` }} />
                    <div>
                        <h2 style={{ ...styles.h_font, color: character.color, fontSize: '2rem', margin: 0 }}>{character.name}</h2>
                        <p style={{ color: '#4b5563', fontStyle: 'italic', marginTop: '0.25rem' }}>{character.description}</p>
                    </div>
                </div>
                <div>
                    <h3 style={{...styles.h_font, color: '#1e293b', marginBottom: '1rem'}}>Character Analysis</h3>
                    {character.detailedAnalysis.map((point, index) => (
                        <div key={index} style={{ marginBottom: '1rem' }}>
                            <h4 style={{ fontWeight: 'bold', color: character.color, marginBottom: '0.25rem' }}>{point.heading}</h4>
                            <p style={{ color: '#374151', lineHeight: 1.6 }}>{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// MAIN APP COMPONENT
export default function JuliusCaesarGuide() {
  const [selectedChar, setSelectedChar] = useState(null);

  // Save and restore scroll position
  useEffect(() => {
    // Restore scroll position when component mounts
    const savedScrollPosition = sessionStorage.getItem('juliusCaesarScrollPosition');
    if (savedScrollPosition) {
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollPosition, 10),
          behavior: 'instant'
        });
        sessionStorage.removeItem('juliusCaesarScrollPosition');
      }, 0);
    }

    // Save scroll position when navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem('juliusCaesarScrollPosition', window.scrollY.toString());
    };

    // Listen for route changes (when clicking links)
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Save scroll position before unmounting
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      sessionStorage.setItem('juliusCaesarScrollPosition', window.scrollY.toString());
    };
  }, []);

  return (
    <div style={styles.body}>
      <style>{`
              .large-screen-characters {
                  display: block;
              }
              .small-screen-characters {
                  display: none;
              }

              @media (max-width: 768px) {
                  .large-screen-characters {
                      display: none;
                  }
                  .small-screen-characters {
                      display: block;
                      padding-top: 5rem;
                      background-color: white;
                      background-image: linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px);
                      background-size: 25px 25px;
                  }
              }
              
              .character-scrollport {
                  position: relative; /* Needed for pseudo-elements */
                  overflow-x: auto;
                  overscroll-behavior-x: contain;
                  scroll-snap-type: x mandatory;
                  display: flex;
                  gap: 1.5rem;
                  align-items: stretch;
                  padding: 1.5rem;
                  scrollbar-width: none; /* Hide scrollbar for Firefox */
              }

              .character-scrollport::-webkit-scrollbar {
                  display: none; /* Hide scrollbar for Chrome, Safari, etc. */
              }

              /* The fade effect using a mask */
              .character-scrollport {
                  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
              }
              
              /* Darkish inner shadow for vignette effect */
              .character-scrollport {
                  box-shadow: inset 60px 0 50px -50px rgba(0,0,0,0.25), inset -60px 0 50px -50px rgba(0,0,0,0.25);
              }

              .character-scroll-card {
                  flex: 0 0 280px;
                  scroll-snap-align: center;
                  display: flex;
                  flex-direction: column;
                  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
              }
              .character-scroll-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 8px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
              }

              .pulse-dot {
                  position: absolute;
                  top: 1rem;
                  right: 1rem;
                  width: 12px;
                  height: 12px;
              }

              .pulse-dot::before {
                  content: '';
                  position: relative;
                  display: block;
                  width: 300%;
                  height: 300%;
                  box-sizing: border-box;
                  margin-left: -100%;
                  margin-top: -100%;
                  border-radius: 45px;
                  background-color: #22c55e;
                  animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
              }

              .pulse-dot::after {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0;
                  display: block;
                  width: 100%;
                  height: 100%;
                  background-color: white;
                  border-radius: 15px;
                  box-shadow: inset 0 0 4px 1px #22c55e;
                  animation: pulse-dot 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
              }

              @keyframes pulse-ring {
                  0% { transform: scale(.33); }
                  80%, 100% { opacity: 0; }
              }

              @keyframes pulse-dot {
                  0% { transform: scale(.8); }
                  50% { transform: scale(1); }
                  100% { transform: scale(.8); }
              }
            `}</style>
      <main>
        <HeroSection />
        <div className="large-screen-characters">
          <CharacterGuide onCardClick={setSelectedChar} />
        </div>
        <ActAnalysis characterGuideForMobile={<CharacterGuideContent onCardClick={setSelectedChar} />} />
        {selectedChar && <CharacterModal character={selectedChar} onClose={() => setSelectedChar(null)} />}
      </main>
    </div>
  );
}

