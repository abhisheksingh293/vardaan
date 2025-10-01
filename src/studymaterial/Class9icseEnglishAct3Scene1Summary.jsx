import React, { useState } from 'react';

// Main App Component
export default function App() {
    return (
        <div >
            <SceneSummary />
        </div>
    );
}

// Scene Summary Component
const SceneSummary = () => {
    // State to manage the active language tab
    const [activeLang, setActiveLang] = useState('English');

    // Enhanced theme for a richer UI
    const theme = {
        colors: {
            primary: "#8B0000", // Dark Red
            secondary: "#DAA520", // Goldenrod
            textLight: "#3B3B3B",
            white: "#FFFFFF",
            gray: { 50: "#F9FAFB", 200: "#E5E7EB", 600: "#4B5563", 700: "#374151" },
        },
        fontFamily: {
            display: ["Merriweather", "serif"],
            body: ["Lato", "sans-serif"],
        },
        borderRadius: { lg: "0.5rem", full: "9999px" },
    };

    // Detailed content for Act III, Scene 1
    const summaries = {
        'Act III, Scene 1': {
            English: {
                title: "Scene Summary: The Climax",
                content: [
                    { type: 'p', text: "This long and action-packed scene is the most important in the play. It contains the climax (the assassination) and the turning point (Antony's rise)." },
                    { type: 'h2', text: "1. The Final Warnings & Caesar's Arrogance" },
                    { type: 'p', text: "Outside the Capitol, Caesar is given two last chances. He dismisses the Soothsayer's warning ('Ay, Caesar, but not gone.') and refuses to read Artemidorus's letter, declaring that matters concerning himself will be dealt with last. This arrogance seals his fate." },
                    { type: 'h2', text: "2. The Assassination" },
                    { type: 'p', text: "The conspirators use Metellus Cimber's petition as a pretext to surround Caesar. Refusing to change his mind, Caesar compares himself to the 'constant as the northern star'. As he boasts, the conspirators strike." },
                    { type: 'p', text: "Casca stabs first, and Brutus is the last. Seeing his friend, Caesar utters his heartbreaking last words." },
                    { type: 'quote', speaker: 'Caesar', text: "Et tu, Bruté? —Then fall, Caesar." },
                    { type: 'p', text: "Caesar dies at the base of Pompey's statue, an act of powerful dramatic irony. The conspirators shout, 'Liberty! Freedom! Tyranny is dead!'" },
                    { type: 'h2', text: "3. The Aftermath & Antony's Arrival" },
                    { type: 'p', text: "As chaos erupts, Brutus suggests a ritual: they bathe their hands in Caesar's blood to show it was a noble sacrifice. At this point, Mark Antony's servant arrives, marking the turning point of the play." },
                    { type: 'h2', text: "4. Brutus's Fatal Mistake" },
                    { type: 'p', text: "Against Cassius's shrewd warnings, the idealistic Brutus allows Antony to speak at Caesar's funeral. Cassius fears Antony will sway the people." },
                    { type: 'quote', speaker: 'Cassius', text: "You know not what you do. Do not consent That Antony speak in his funeral." },
                    { type: 'p', text: "Brutus overrules him, believing he can control the situation. This is his greatest error in judgment." },
                    { type: 'h2', text: "5. Antony's Soliloquy: The Vow of Revenge" },
                    { type: 'p', text: "Left alone with Caesar's body, Antony's true feelings emerge in a terrifying soliloquy. He calls the conspirators 'butchers' and vows revenge." },
                    { type: 'quote', speaker: 'Antony', text: "Cry 'Havoc!' and let slip the dogs of war." },
                    { type: 'p', text: "He prophesies a horrific civil war. The scene ends as he sends a message to Octavius, Caesar's heir, to stay away from the now-dangerous Rome. The battle for control has begun." }
                ]
            },
            Hinglish: {
                title: "Scene Summary: The Climax",
                content: [
                    { type: 'p', text: "Yeh lamba aur action-packed scene play mein sabse important hai. Ismein climax (assassination) aur turning point (Antony ka rise) dono hain." },
                    { type: 'h2', text: "1. The Final Warnings & Caesar's Arrogance" },
                    { type: 'p', text: "Capitol ke bahar, Caesar ko do last chances milte hain. Woh Soothsayer ki warning ('Ay, Caesar, but not gone.') ko dismiss kar deta hai aur Artemidorus ka letter padhne se mana kar deta hai, kehte hue ki uske personal matters sabse last mein deal honge. Yeh arrogance uski kismat seal kar deta hai." },
                    { type: 'h2', text: "2. The Assassination" },
                    { type: 'p', text: "Conspirators, Metellus Cimber ke petition ko ek pretext ki tarah use karke Caesar ko gher lete hain. Apna mind change karne se mana karte hue, Caesar khud ko 'constant as the northern star' se compare karta hai. Jaise hi woh boast karta hai, conspirators strike karte hain." },
                    { type: 'p', text: "Casca pehle stab karta hai, aur Brutus sabse last mein. Apne dost ko dekhkar, Caesar apne heartbreaking last words bolta hai." },
                    { type: 'quote', speaker: 'Caesar', text: "Et tu, Bruté? —Then fall, Caesar." },
                    { type: 'p', text: "Caesar, Pompey ke statue ke base par marta hai, jo ek powerful dramatic irony hai. Conspirators chillaate hain, 'Liberty! Freedom! Tyranny is dead!'" },
                    { type: 'h2', text: "3. The Aftermath & Antony's Arrival" },
                    { type: 'p', text: "Jaise hi chaos failta hai, Brutus ek ritual suggest karta hai: woh Caesar ke blood mein apne haath dhoenge yeh dikhane ke liye ki yeh ek noble sacrifice tha. Isi point par, Mark Antony ka servant aata hai, jo play ka turning point mark karta hai." },
                    { type: 'h2', text: "4. Brutus's Fatal Mistake" },
                    { type: 'p', text: "Cassius ki shrewd warnings ke against, idealistic Brutus, Antony ko Caesar ke funeral mein bolne ke liye allow kar deta hai. Cassius ko darr hai ki Antony logon ko influence kar lega." },
                    { type: 'quote', speaker: 'Cassius', text: "You know not what you do. Do not consent That Antony speak in his funeral." },
                    { type: 'p', text: "Brutus usey overrule kar deta hai, yeh sochte hue ki woh situation ko control kar sakta hai. Yeh uske judgment ki sabse badi error hai." },
                    { type: 'h2', text: "5. Antony's Soliloquy: The Vow of Revenge" },
                    { type: 'p', text: "Jab Antony, Caesar ki body ke saath akela reh jaata hai, uski asli feelings ek terrifying soliloquy mein bahar aati hain. Woh conspirators ko 'butchers' kehta hai aur revenge ki kasam khata hai." },
                    { type: 'quote', speaker: 'Antony', text: "Cry 'Havoc!' and let slip the dogs of war." },
                    { type: 'p', text: "Woh ek horrific civil war ki prophecy karta hai. Scene end hota hai jab woh Caesar ke heir, Octavius ko message bhejta hai ki ab dangerous Rome se door rahe. Control ke liye battle shuru ho chuki hai." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act III, Scene 1'][activeLang];

    // Inline styles for an improved, beautiful UI
    const styles = {
        // container: { backgroundColor: theme.colors.white, border: 'none', borderRadius: theme.borderRadius.lg, padding: '2.5rem', maxWidth: '800px', margin: '2rem auto', fontFamily: theme.fontFamily.body.join(', '), color: theme.colors.textLight, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: 'transform 0.3s ease-in-out', ':hover': { transform: 'translateY(-5px)' } },
        header: { fontFamily: theme.fontFamily.display.join(', '), color: theme.colors.primary, fontSize: '2rem', marginBottom: '1.5rem', borderBottom: `2px solid ${theme.colors.gray[200]}`, paddingBottom: '1rem' },
        navContainer: { display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem'},
        tabContainer: { display: 'inline-flex', backgroundColor: theme.colors.gray[200], borderRadius: theme.borderRadius.full, padding: '0.3rem' },
        tab: { padding: '0.6rem 1.5rem', border: 'none', borderRadius: theme.borderRadius.full, cursor: 'pointer', backgroundColor: 'transparent', color: theme.colors.gray[600], transition: 'all 0.3s ease', fontWeight: 'bold', fontSize: '0.95rem' },
        activeTab: { backgroundColor: theme.colors.white, color: theme.colors.primary, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
        content: { fontSize: '1.05rem', lineHeight: '1.8' },
        subheading: { fontFamily: theme.fontFamily.display.join(', '), color: theme.colors.primary, fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' },
        quote: { borderLeft: `4px solid ${theme.colors.secondary}`, padding: '1rem 1.5rem', margin: '1.5rem 0', fontStyle: 'italic', color: theme.colors.gray[700], backgroundColor: theme.colors.gray[50], borderRadius: `0 ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0` },
        quoteSpeaker: { fontWeight: 'bold', fontStyle: 'normal', color: theme.colors.primary },
        list: { listStyle: 'none', paddingLeft: '0', margin: '1rem 0' },
        listItem: { paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.5rem' },
        listIcon: { content: '""', position: 'absolute', left: 0, top: '0.5em', width: '0.5em', height: '0.5em', backgroundColor: theme.colors.secondary, borderRadius: '50%' },
    };

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@700&display=swap" rel="stylesheet" />
        
            <div style={styles.container}>
                <h1 style={styles.header}>{currentSummary.title}</h1>
                
                <div style={styles.navContainer}>
                     <div style={styles.tabContainer}>
                        <button style={{ ...styles.tab, ...(activeLang === 'English' ? styles.activeTab : {}) }} onClick={() => setActiveLang('English')}>English</button>
                        <button style={{ ...styles.tab, ...(activeLang === 'Hinglish' ? styles.activeTab : {}) }} onClick={() => setActiveLang('Hinglish')}>Hinglish</button>
                    </div>
                </div>

                <div style={styles.content}>
                    {currentSummary.content.map((item, index) => {
                        switch (item.type) {
                            case 'h2': return <h2 key={index} style={styles.subheading}>{item.text}</h2>;
                            case 'p': return <p key={index}>{item.text}</p>;
                            case 'quote': return (
                                <blockquote key={index} style={styles.quote}>
                                    <span style={styles.quoteSpeaker}>{item.speaker}:</span> "{item.text}"
                                </blockquote>
                            );
                            case 'ul': return (
                                <ul key={index} style={styles.list}>
                                    {item.items.map((li, i) => (
                                        <li key={i} style={styles.listItem}>
                                            <span style={styles.listIcon}></span>
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            );
                            default: return null;
                        }
                    })}
                </div>
            </div>
        </>
    );
};



