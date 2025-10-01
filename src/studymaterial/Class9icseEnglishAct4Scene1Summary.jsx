import React, { useState } from 'react';

// Main App Component
export default function App() {
    return (
        <div>
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

    // Detailed content for Act IV, Scene 1
    const summaries = {
        'Act IV, Scene 1': {
            English: {
                title: "Scene Summary: The Proscription",
                content: [
                    { type: 'p', text: "This short, unpleasant scene reveals the cold, ruthless nature of the men now in power in Rome, a sharp contrast to Brutus's high-minded ideals." },
                    { type: 'h2', text: "1. The New Rulers: The Second Triumvirate" },
                    { type: 'p', text: "The scene opens in a house in Rome, now controlled by the Second Triumvirate: Mark Antony, Octavius (Caesar's heir), and Lepidus. The mob's passion is replaced by their cold-hearted ruthlessness." },
                    { type: 'h2', text: "2. The Merciless Purge" },
                    { type: 'p', text: "The three men are calmly making a death list (a proscription) of powerful Romans who must be killed. They show no emotion as they trade the lives of their own family members to secure their power." },
                     { type: 'quote', speaker: 'Antony', text: "These many, then, shall die. Their names are pricked... He shall not live. Look, with a spot I damn him." },
                    { type: 'h2', text: "3. Antony's True Character Revealed" },
                    { type: 'p', text: "Antony's character has changed. He is now a cynical and power-hungry politician. He plans to cheat the Roman people by reducing the money left to them in Caesar's will. He also shows contempt for his ally, Lepidus, calling him a 'slight, unmeritable man' and a 'barren-spirited fellow' fit only to be used and then discarded like a donkey." },
                    { type: 'h2', text: "4. Cracks in the New Alliance" },
                    { type: 'p', text: "Young Octavius shows more integrity, defending Lepidus as a 'tried and valiant soldier.' This brief disagreement shows the first signs of tension within the Triumvirate, hinting at the future power struggle between Antony and Octavius. The scene ends with them preparing for civil war against Brutus and Cassius." }
                ]
            },
            Hinglish: {
                title: "Scene Summary: The Proscription",
                content: [
                    { type: 'p', text: "Yeh short aur unpleasant scene Rome mein ab power mein aaye logon ke cold aur ruthless nature ko reveal karta hai, jo Brutus ke high-minded ideals se ek sharp contrast hai." },
                    { type: 'h2', text: "1. The New Rulers: The Second Triumvirate" },
                    { type: 'p', text: "Scene Rome ke ek ghar mein open hota hai, jise ab Second Triumvirate control kar raha hai: Mark Antony, Octavius (Caesar ka heir), aur Lepidus. Mob ka passion ab unki cold-hearted ruthlessness se replace ho gaya hai." },
                    { type: 'h2', text: "2. The Merciless Purge" },
                    { type: 'p', text: "Teeno aadmi calmly ek death list (ek proscription) bana rahe hain un powerful Romans ki jinhe maara jaana zaroori hai. Woh apni power secure karne ke liye apne hi family members ki life ko trade karte waqt koi emotion nahi dikhate." },
                    { type: 'quote', speaker: 'Antony', text: "These many, then, shall die. Their names are pricked... He shall not live. Look, with a spot I damn him." },
                    { type: 'h2', text: "3. Antony's True Character Revealed" },
                    { type: 'p', text: "Antony ka character change ho gaya hai. Woh ab ek cynical aur power-hungry politician hai. Woh Roman logon ko Caesar ki will mein chhode gaye paise ko kam karke cheat karne ka plan banata hai. Woh apne ally, Lepidus, ke liye bhi contempt dikhata hai, use ek 'slight, unmeritable man' aur 'barren-spirited fellow' kehta hai jo sirf use hone aur fir ek gadhe ki tarah discard kiye jaane ke layak hai." },
                    { type: 'h2', text: "4. Cracks in the New Alliance" },
                    { type: 'p', text: "Young Octavius zyada integrity dikhata hai, Lepidus ko ek 'tried and valiant soldier' keh kar defend karte hue. Yeh brief disagreement Triumvirate ke andar tension ke pehle signs dikhata hai, jo Antony aur Octavius ke beech future power struggle ka hint deta hai. Scene unke Brutus aur Cassius ke against civil war ki taiyari ke saath end hota hai." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act IV, Scene 1'][activeLang];

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



