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
            backgroundLight: "#FDF6E3", // Parchment-like color
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

    // Detailed content for Act II, Scene 1
    const summaries = {
        'Act II, Scene 1': {
            English: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "The action now moves from the public streets into the private home and mind of Brutus. This scene shows us the internal struggle, final decision, and fatal mistakes of the play's tragic hero." },
                    { type: 'h2', text: "1. Brutus's Soliloquy: The \"Serpent's Egg\"" },
                    { type: 'p', text: "The scene opens in Brutus's orchard late at night. In a powerful soliloquy, he convinces himself that Caesar must die for the 'general good' of Rome. He reasons that power could turn Caesar into a tyrant." },
                    { type: 'quote', speaker: 'Brutus', text: "And therefore think him as a serpent's egg— Which, hatched, would as his kind grow mischievous— And kill him in the shell." },
                    { type: 'h2', text: "2. The Forged Letter and The Promise" },
                    { type: 'p', text: "Brutus's servant finds one of the anonymous letters from Cassius. Brutus interprets it as a plea from the Roman people, asking him to save them from a king, and he fully commits himself to the cause." },
                    { type: 'quote', speaker: 'The Letter', text: "Brutus, thou sleep’st. Awake, and see thyself. Shall Rome, etc. Speak, strike, redress!" },
                    { type: 'h2', text: "3. The Conspiracy Meeting: Brutus Takes Charge" },
                    { type: 'p', text: "The conspirators arrive, and Brutus becomes their leader. He makes three critical—and ultimately fatal—decisions:" },
                    { type: 'ul', items: [
                        "No Oath: He rejects an oath, saying their honorable cause is bond enough.",
                        "Rejecting Cicero: He refuses to include the wise senator Cicero.",
                        "Sparing Mark Antony: He argues against killing Antony, tragically underestimating him as a mere 'limb of Caesar.'"
                    ] },
                    { type: 'quote', speaker: 'Brutus', text: "Let us be sacrificers, but not butchers, Caius... For he can do no more than Caesar’s arm When Caesar’s head is off." },
                    { type: 'h2', text: "4. The Plan to Fetch Caesar" },
                    { type: 'p', text: "The conspirators worry the superstitious Caesar won't go to the Capitol. Decius Brutus boasts that he can flatter Caesar and persuade him to go." },
                    { type: 'h2', text: "5. The Private World: Brutus and Portia" },
                    { type: 'p', text: "After the others leave, Brutus's wife, Portia, begs him to share his troubles. To prove her strength and loyalty, she reveals she has given herself a voluntary wound in the thigh. Moved, Brutus promises to tell her everything." },
                    { type: 'quote', speaker: 'Portia', text: "Dwell I but in the suburbs Of your good pleasure? If it be no more, Portia is Brutus' harlot, not his wife." }
                ]
            },
            Hinglish: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "Ab action public streets se Brutus ke private ghar aur dimaag mein chala jaata hai. Yeh scene humein is play ke tragic hero ka internal struggle, final decision, aur ghaatak galtiyan dikhata hai." },
                    { type: 'h2', text: "1. Brutus ki Soliloquy: 'Saanp ka Anda'" },
                    { type: 'p', text: "Scene Brutus ke orchard mein der raat ko shuru hota hai. Ek powerful soliloquy mein, woh khud ko convince karta hai ki Caesar ko Rome ke 'general good' ke liye marna hi hoga. Woh yeh reason deta hai ki power Caesar ko ek atyachari (tyrant) bana sakti hai." },
                    { type: 'quote', speaker: 'Brutus', text: "Isliye use ek saanp ka anda samjho— Jise, agar seya gaya, toh woh apni prajati ki tarah hi shararati banega— Aur use shell mein hi maar do." },
                    { type: 'h2', text: "2. Jaali Letter aur Vaada" },
                    { type: 'p', text: "Brutus ka servant Cassius ke bheje hue anonymous letters mein se ek dhoondh leta hai. Brutus iska matlab yeh nikalta hai ki Roman log usse ek raja se bachane ke liye pukaar rahe hain, aur woh is kaam ke liye khud ko poori tarah se samarpit kar deta hai." },
                    { type: 'quote', speaker: 'The Letter', text: "Brutus, tum so rahe ho. Jaago, aur apne aap ko dekho. Kya Rome, etc. Bolo, maaro, sudharo!" },
                    { type: 'h2', text: "3. Conspirators ki Meeting: Brutus Charge Leta Hai" },
                    { type: 'p', text: "Conspirators aate hain, aur Brutus unka leader ban jaata hai. Woh teen ahem—aur aakhir mein ghaatak—faisle leta hai:" },
                     { type: 'ul', items: [
                        "Koi Shapath Nahi: Woh shapath lene se mana kar deta hai, kehta hai ki unka nek kaam hi kaafi bandhan hai.",
                        "Cicero ko Mana Karna: Woh samajhdar senator Cicero ko shaamil karne se inkaar kar deta hai.",
                        "Mark Antony ko Chhod Dena: Woh Antony ko maarne ke khilaf daleel deta hai, aur use 'Caesar ka ek ang' samajhkar galti se kam aankta hai."
                    ] },
                    { type: 'quote', speaker: 'Brutus', text: "Humein balidaan karne wala banna chahiye, na ki kasaai, Caius... Kyunki woh Caesar ke haath se zyada kuch nahi kar sakta jab Caesar ka sar kat jaayega." },
                    { type: 'h2', text: "4. Caesar ko Laane ka Plan" },
                    { type: 'p', text: "Conspirators ko chinta hai ki superstitious Caesar Capitol nahi aayega. Decius Brutus garv se kehta hai ki woh Caesar ki chaaploosi karke use aane ke liye mana sakta hai." },
                    { type: 'h2', text: "5. Private Duniya: Brutus aur Portia" },
                    { type: 'p', text: "Baaki sabke jaane ke baad, Brutus ki wife, Portia, usse apni pareshaniyan batane ke liye minnat karti hai. Apni taakat aur vafadari saabit karne ke liye, woh batati hai ki usne khud ko jaangh par ek ghaav diya hai. Isse prabhavit hokar, Brutus use sab kuch batane ka vaada karta hai." },
                    { type: 'quote', speaker: 'Portia', text: "Kya main sirf tumhari khushi ke bahari ilake mein rehti hoon? Agar isse zyada kuch nahi, toh Portia Brutus ki premika hai, uski patni nahi." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act II, Scene 1'][activeLang];

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



