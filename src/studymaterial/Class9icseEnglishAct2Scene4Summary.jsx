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

    // Detailed content for Act II, Scene 4
    const summaries = {
        'Act II, Scene 4': {
            English: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "This scene shifts the focus to Brutus's wife, Portia, and its main purpose is to build dramatic tension to an almost unbearable level just before the assassination takes place." },
                    { type: 'h2', text: "1. Portia's Extreme Anxiety" },
                    { type: 'p', text: "The scene opens near Brutus's house at nine in the morning on the Ides of March. Portia is in a state of extreme panic. We can assume Brutus has told her about the conspiracy, and she is struggling with the weight of this dangerous secret." },
                    { type: 'p', text: "She frantically orders her servant, Lucius, to run to the Senate House, but is so flustered she forgets to tell him why." },
                    { type: 'quote', speaker: 'Portia', text: "I prithee, boy, run to the senate house. Stay not to answer me, but get thee gone." },
                    { type: 'h2', text: "2. Portia's Inner Conflict" },
                    { type: 'p', text: "Portia is terrified she will accidentally reveal the secret. She speaks to herself, highlighting her inner conflict between her knowledge and her perceived emotional weakness." },
                    { type: 'quote', speaker: 'Portia', text: "O constancy, be strong upon my side... I have a man’s mind but a woman’s might. How hard it is for women to keep counsel!" },
                     { type: 'p', text: "She fears her emotional strength ('a woman's might') is not enough to keep the secret, even though she has the intelligence to understand it ('a man's mind')." },
                    { type: 'h2', text: "3. Building Suspense with the Soothsayer" },
                    { type: 'p', text: "The tension increases when the Soothsayer enters, on his way to the Capitol to try and warn Caesar one last time. This confirms for Portia that the danger is real and widely feared, increasing her panic." },
                     { type: 'quote', speaker: 'Soothsayer', text: "I shall beseech him to befriend himself." },
                    { type: 'h2', text: "4. Foreshadowing and a Near Slip-Up" },
                    { type: 'p', text: "Overwhelmed, Portia almost gives the secret away, whispering a prayer for Brutus's success. Realizing Lucius might have heard, she quickly covers her mistake." },
                    { type: 'quote', speaker: 'Portia', text: "O Brutus, The heavens speed thee in thine enterprise!" },
                    { type: 'p', text: "The scene ends with Portia telling Lucius to say she is 'merry'—a brave lie to hide her terror. Her extreme nervousness acts as foreshadowing for the tragic news about her later in the play." }
                ]
            },
            Hinglish: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "Is scene ka focus Brutus ki wife, Portia, par shift hota hai. Iska main purpose dramatic tension ko assassination se theek pehle ek unbearable level tak build karna hai." },
                    { type: 'h2', text: "1. Portia's Extreme Anxiety" },
                    { type: 'p', text: "Scene Brutus ke ghar ke paas Ides of March ki subah 9 baje shuru hota hai. Portia extreme panic ki state mein hai. Hum assume kar sakte hain ki Brutus ne usey conspiracy ke baare mein bata diya hai, aur ab woh is dangerous secret ke weight se struggle kar rahi hai." },
                    { type: 'p', text: "Woh pareshani mein apne servant, Lucius, ko Senate House bhaagne ka order deti hai, lekin itni ghabrayi hui hai ki yeh batana bhool jaati hai ki kyun jaana hai." },
                    { type: 'quote', speaker: 'Portia', text: "I prithee, boy, run to the senate house. Stay not to answer me, but get thee gone." },
                    { type: 'h2', text: "2. Portia's Inner Conflict" },
                    { type: 'p', text: "Portia ko darr hai ki woh galti se secret reveal kar degi. Woh khud se baat karti hai, jo uske inner conflict ko highlight karta hai—uski knowledge aur uski perceived emotional weakness ke beech." },
                    { type: 'quote', speaker: 'Portia', text: "O constancy, be strong upon my side... I have a man’s mind but a woman’s might. How hard it is for women to keep counsel!" },
                    { type: 'p', text: "Use darr hai ki uski emotional strength ('a woman's might') is secret ko rakhne ke liye kaafi nahi hai, bhale hi uske paas isey samajhne ki intelligence ('a man's mind') hai." },
                    { type: 'h2', text: "3. Building Suspense with the Soothsayer" },
                    { type: 'p', text: "Tension aur badh jaati hai jab Soothsayer enter karta hai. Woh Capitol ke raaste mein hai taaki Caesar ko ek aakhri baar warn karne ki koshish kar sake. Yeh Portia ke liye confirm kar deta hai ki danger real hai aur bohot se logon ko iska darr hai, jis se uska panic aur badh jaata hai." },
                    { type: 'quote', speaker: 'Soothsayer', text: "I shall beseech him to befriend himself." },
                    { type: 'h2', text: "4. Foreshadowing and a Near Slip-Up" },
                    { type: 'p', text: "Darr se overcome hokar, Portia lagbhag secret bata hi deti hai, jab woh Brutus ki success ke liye ek prayer bolti hai. Jab usey realize hota hai ki Lucius ne sun liya hoga, woh jaldi se apni mistake ko cover karti hai." },
                    { type: 'quote', speaker: 'Portia', text: "O Brutus, The heavens speed thee in thine enterprise!" },
                    { type: 'p', text: "Scene end hota hai jab Portia Lucius se kehti hai ki woh Brutus ko bataye ki woh 'merry' hai—apne darr ko chhupane ke liye ek bahadur jhooth. Uski extreme nervousness play mein aage uske baare mein aane wali tragic news ka foreshadowing karti hai." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act II, Scene 4'][activeLang];

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



