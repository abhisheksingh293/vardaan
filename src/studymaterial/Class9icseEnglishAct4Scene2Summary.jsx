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

    // Detailed content for Act IV, Scene 3
    const summaries = {
        'Act IV, Scene 3': {
            English: {
                title: "Scene Summary: The Quarrel and The Ghost",
                content: [
                    { type: 'p', text: "This long, powerful scene inside Brutus's tent features the explosive argument between Brutus and Cassius, their reconciliation, a fatal military decision, and the appearance of Caesar's ghost." },
                    { type: 'h2', text: "1. The Quarrel" },
                    { type: 'p', text: "Cassius is angry that Brutus punished an officer for taking bribes. Brutus fires back, accusing Cassius himself of being corrupt and greedy (having an 'itching palm'), contaminating their 'honorable' cause." },
                    { type: 'quote', speaker: 'Brutus', text: "Did not great Julius bleed for justice' sake?" },
                    { type: 'h2', text: "2. Reconciliation and Tragic News" },
                    { type: 'p', text: "The argument peaks when a heartbroken Cassius offers his dagger to Brutus to kill him. This breaks the tension, and they reconcile. Brutus then reveals the true source of his grief: his wife, Portia, is dead, having killed herself by swallowing fire." },
                    { type: 'h2', text: "3. The Fatal Military Decision" },
                    { type: 'p', text: "They discuss military strategy. Cassius, the experienced soldier, wants to wait for the enemy to come to them (defensive). Brutus, however, insists they must march to Philippi to meet the enemy (offensive)." },
                    { type: 'quote', speaker: 'Brutus', text: "There is a tide in the affairs of men, Which, taken at the flood, leads on to fortune;" },
                    { type: 'p', text: "Once again, the idealistic Brutus overrules the practical Cassius. This decision to march to Philippi is his final, fatal error." },
                    { type: 'h2', text: "4. The Ghost of Caesar" },
                    { type: 'p', text: "Later that night, the Ghost of Caesar appears to Brutus. It identifies itself as Brutus's 'evil spirit' and gives a chilling message." },
                    { type: 'quote', speaker: 'Ghost', text: "To tell thee thou shalt see me at Philippi." },
                    { type: 'p', text: "This event foreshadows the doom that awaits Brutus on the battlefield." }
                ]
            },
            Hinglish: {
                title: "Scene Summary: The Quarrel and The Ghost",
                content: [
                    { type: 'p', text: "Yeh lamba, powerful scene Brutus ke tent ke andar hota hai. Isme Brutus aur Cassius ke beech ka explosive argument, unka reconciliation, ek fatal military decision, aur Caesar ke ghost ka appearance feature hota hai." },
                    { type: 'h2', text: "1. The Quarrel" },
                    { type: 'p', text: "Cassius gussa hai kyunki Brutus ne ek officer ko bribes lene ke liye punish kiya. Brutus bhi gusse se jawab deta hai, Cassius par corrupt aur greedy (jise 'itching palm' kaha gaya hai) hone ka ilzaam lagata hai, jisse unka 'honorable' cause kharab ho raha hai." },
                    { type: 'quote', speaker: 'Brutus', text: "Did not great Julius bleed for justice' sake?" },
                    { type: 'h2', text: "2. Reconciliation and Tragic News" },
                    { type: 'p', text: "Argument tab peak par pahunchta hai jab toote dil wala Cassius apna dagger Brutus ko offer karta hai use maarne ke liye. Isse tension khatam ho jaati hai, aur woh reconcile kar lete hain. Fir Brutus apne dukh ka asli reason batata hai: uski wife, Portia, mar chuki hai, usne aag nigal kar suicide kar liya hai." },
                    { type: 'h2', text: "3. The Fatal Military Decision" },
                    { type: 'p', text: "Woh military strategy discuss karte hain. Cassius, jo ek experienced soldier hai, chahta hai ki woh dushman ka unke paas aane ka wait karein (defensive). Lekin Brutus insist karta hai ki unhe Philippi jaakar dushman se milna chahiye (offensive)." },
                    { type: 'quote', speaker: 'Brutus', text: "There is a tide in the affairs of men, Which, taken at the flood, leads on to fortune;" },
                    { type: 'p', text: "Ek baar fir, idealistic Brutus practical Cassius ki baat nahi maanta. Philippi march karne ka yeh decision uski aakhri aur fatal error hai." },
                    { type: 'h2', text: "4. The Ghost of Caesar" },
                    { type: 'p', text: "Usi raat der gaye, Caesar ka Ghost Brutus ke saamne appear hota hai. Woh khud ko Brutus ki 'evil spirit' batata hai aur ek chilling message deta hai." },
                    { type: 'quote', speaker: 'Ghost', text: "To tell thee thou shalt see me at Philippi." },
                    { type: 'p', text: "Yeh event Brutus ke battlefield par hone wale anjaam ko foreshadow karta hai." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act IV, Scene 3'][activeLang];

    // Inline styles for an improved, beautiful UI
    const styles = {
        container: { backgroundColor: theme.colors.white, border: 'none', borderRadius: theme.borderRadius.lg, padding: '2.5rem', maxWidth: '800px', margin: '2rem auto', fontFamily: theme.fontFamily.body.join(', '), color: theme.colors.textLight, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: 'transform 0.3s ease-in-out', ':hover': { transform: 'translateY(-5px)' } },
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



