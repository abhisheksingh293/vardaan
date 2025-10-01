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

    // Detailed content for Act III, Scene 3
    const summaries = {
        'Act III, Scene 3': {
            English: {
                title: "Scene Summary: Mob Mentality",
                content: [
                    { type: 'p', text: "This scene shows the immediate and terrifying consequences of Antony's speech, demonstrating the destructive power of an irrational mob." },
                    { type: 'h2', text: "1. The Innocent Victim" },
                    { type: 'p', text: "The angry mob finds a man named Cinna the Poet. This is NOT Cinna the conspirator; he is a completely innocent artist who had a bad dream about feasting with Caesar." },
                    { type: 'h2', text: "2. The Irrationality of the Mob" },
                    { type: 'p', text: "The mob surrounds Cinna and interrogates him with aggressive and illogical questions, showing they are not thinking clearly and are just looking for a target." },
                    { type: 'h2', text: "3. The Murder" },
                    { type: 'p', text: "When the poet says his name is Cinna, the mob immediately assumes he is the conspirator. He desperately tries to explain he is Cinna the poet, not the conspirator." },
                    { type: 'quote', speaker: 'Cinna', text: "I am Cinna the poet! I am Cinna the poet!" },
                    { type: 'p', text: "The mob's chilling response shows they have lost all reason. They decide to kill him anyway, simply for having the same name." },
                    { type: 'quote', speaker: 'The Mob', text: "It is no matter. His name’s Cinna. Pluck but his name out of his heart..." },
                    { type: 'h2', text: "4. Purpose of the Scene" },
                    { type: 'p', text: "This horrifying scene shows the direct result of Antony's speech—his prophecy of 'blood and destruction' has come true. The conspirators wanted 'peace, freedom, and liberty,' but their actions have led to chaos and the murder of an innocent man, proving the failure of their plan. The civil war has begun." }
                ]
            },
            Hinglish: {
                title: "Scene Summary: Mob Mentality",
                content: [
                    { type: 'p', text: "Yeh scene Antony ki speech ke immediate aur terrifying consequences ko dikhata hai, aur ek irrational mob ki destructive power ko demonstrate karta hai." },
                    { type: 'h2', text: "1. The Innocent Victim" },
                    { type: 'p', text: "Gusse mein bhari mob ko Cinna the Poet naam ka ek aadmi milta hai. Yeh Cinna the conspirator NAHI hai; yeh ek poori tarah se innocent artist hai jise Caesar ke saath feast karne ka bura sapna aaya tha." },
                    { type: 'h2', text: "2. The Irrationality of the Mob" },
                    { type: 'p', text: "Mob, Cinna ko gher leti hai aur usse aggressive aur illogical questions poochti hai. Isse pata chalta hai ki woh ajeeb tarah se behave kar rahe hain aur bas ek target dhoondh rahe hain." },
                    { type: 'h2', text: "3. The Murder" },
                    { type: 'p', text: "Jab poet batata hai ki uska naam Cinna hai, to mob immediately assume kar leti hai ki woh hi conspirator hai. Woh desperately samjhane ki koshish karta hai ki woh Cinna the poet hai, conspirator nahi." },
                    { type: 'quote', speaker: 'Cinna', text: "I am Cinna the poet! I am Cinna the poet!" },
                    { type: 'p', text: "Mob ka chilling response dikhata hai ki woh saari reason kho chuke hain. Woh usey phir bhi maarne ka decide karte hain, sirf isliye ki uska naam same hai." },
                    { type: 'quote', speaker: 'The Mob', text: "It is no matter. His name’s Cinna. Pluck but his name out of his heart..." },
                    { type: 'h2', text: "4. Purpose of the Scene" },
                    { type: 'p', text: "Yeh horrifying scene Antony ki speech ka direct result dikhata hai—uski 'blood and destruction' ki prophecy sach ho gayi hai. Conspirators 'peace, freedom, and liberty' chahte the, lekin unke actions se chaos aur ek innocent aadmi ka murder hua hai, jo unke plan ke failure ko prove karta hai. Civil war shuru ho chuki hai." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act III, Scene 3'][activeLang];

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



