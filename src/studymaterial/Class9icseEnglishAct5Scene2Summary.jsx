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

    // Enhanced theme for a rich, academic UI
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

    // Detailed content for Act V, Scene 2
    const summaries = {
        'Act V, Scene 2': {
            English: {
                title: "Scene Summary: The Battle of Philippi",
                content: [
                    { type: 'p', text: "This scene is a quick snapshot from the middle of the battle at Philippi. Its main purpose is to show Brutus making his final, fatal military error." },
                    { type: 'h2', text: "1. The Battle is Underway" },
                    { type: 'p', text: "The scene opens with the sounds of battle. Brutus enters with his officer, Messala, in the thick of the fighting. This short scene gives the audience a sense of action and excitement after the sad farewells of the previous one." },
                    { type: 'h2', text: "2. Brutus's Impulsive Order" },
                    { type: 'p', text: "Brutus believes he has spotted a weakness in the enemy lines, thinking that Octavius's soldiers are losing their spirit. Based on this, he gives an urgent order to Messala to deliver to Cassius's troops." },
                    { type: 'quote', speaker: 'Brutus', text: "Ride, ride, Messala, ride, and give these bills Unto the legions on the other side... Let them set on at once..." },
                    { type: 'p', text: "He orders Cassius's army to attack immediately, believing this 'sudden push' will win them the battle." },
                    { type: 'h2', text: "3. Brutus's Final Blunder" },
                    { type: 'p', text: "While Brutus's order seems like a decisive military move, it is actually his last great blunder. He gives the order too soon, acting on his own intuition without properly coordinating with Cassius." },
                    { type: 'p', text: "He misjudges the situation, and this premature attack will have disastrous consequences for Cassius's army. This brief scene provides a moment of false hope, as Shakespeare is cleverly setting the stage for the tragedy that will result from this final error of judgment." }
                ]
            },
            Hinglish: {
                title: "Scene Summary 2: Philippi ki Ladai",
                content: [
                    { type: 'p', text: "Yeh scene Philippi ki ladai ke beech ka ek chhota sa snapshot hai. Iska mukhya uddeshya Brutus ko apni aakhri, ghaatak military galti karte hue dikhana hai." },
                    { type: 'h2', text: "1. Ladai Jaari Hai" },
                    { type: 'p', text: "Scene yuddh ki aawazon ke saath shuru hota hai. Brutus apne officer, Messala, ke saath ladai ke beech mein pravesh karta hai. Yeh chhota scene pichle scene ki udaas vidai ke baad darshakon ko action aur utsaah ka anubhav karata hai." },
                    { type: 'h2', text: "2. Brutus ka Aaveshi Aadesh" },
                    { type: 'p', text: "Brutus ko lagta hai ki usne dushman ki panktiyon mein ek kamzori dekhi hai, use lagta hai ki Octavius ke sainik himmat haar rahe hain. Iske aadhar par, woh Messala ko Cassius ke sainikon tak pahunchane ke liye ek jaroori aadesh deta hai." },
                    { type: 'quote', speaker: 'Brutus', text: "Jaao, jaao, Messala, jaao, aur yeh sandesh doosri taraf ke sainikon ko do... Unhein turant hamla karne do..." },
                    { type: 'p', text: "Woh Cassius ki sena ko turant hamla karne ka aadesh deta hai, yeh maankar ki is 'achanak hamle' se woh yuddh jeet jayenge." },
                    { type: 'h2', text: "3. Brutus ki Antim Bhool" },
                    { type: 'p', text: "Jabki Brutus ka aadesh ek nirnayak military kadam lagta hai, yeh vastav mein uski aakhri badi bhool hai. Woh bahut jaldi aadesh de deta hai, Cassius ke saath theek se coordinate kiye bina apne antarjñāna par kaam karta hai." },
                    { type: 'p', text: "Woh sthiti ka galat anumaan lagata hai, aur is samay se pehle kiye gaye hamle ka Cassius ki sena par vinashkari parinaam hoga. Yeh chhota scene jhoothi aasha ka ek pal pradaan karta hai, kyunki Shakespeare chaturai se us trasadi ke liye manch taiyar kar raha hai jo is aakhri galat nirnay ke parinaamswaroop hogi." }
                ]
            }
        }
    };
    
    const currentSummary = summaries['Act V, Scene 2'][activeLang];

    // Inline styles for a beautiful, readable UI
    const styles = {
        header: { fontFamily: theme.fontFamily.display.join(', '), color: theme.colors.primary, fontSize: '2rem', marginBottom: '1.5rem', borderBottom: `2px solid ${theme.colors.gray[200]}`, paddingBottom: '1rem' },
        navContainer: { display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem'},
        tabContainer: { display: 'inline-flex', backgroundColor: theme.colors.gray[200], borderRadius: theme.borderRadius.full, padding: '0.3rem' },
        tab: { padding: '0.6rem 1.5rem', border: 'none', borderRadius: theme.borderRadius.full, cursor: 'pointer', backgroundColor: 'transparent', color: theme.colors.gray[600], transition: 'all 0.3s ease', fontWeight: 'bold', fontSize: '0.95rem' },
        activeTab: { backgroundColor: theme.colors.white, color: theme.colors.primary, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
        content: { fontSize: '1.05rem', lineHeight: '1.8' },
        subheading: { fontFamily: theme.fontFamily.display.join(', '), color: theme.colors.primary, fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '0.75rem' },
        quote: { borderLeft: `4px solid ${theme.colors.secondary}`, padding: '1rem 1.5rem', margin: '1.5rem 0', fontStyle: 'italic', color: theme.colors.gray[700], backgroundColor: theme.colors.gray[50], borderRadius: `0 ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0` },
        quoteSpeaker: { fontWeight: 'bold', fontStyle: 'normal', color: theme.colors.primary },
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
                            default: return null;
                        }
                    })}
                </div>
            </div>
        </>
    );
};



