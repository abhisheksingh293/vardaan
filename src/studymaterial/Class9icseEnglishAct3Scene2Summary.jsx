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

    // Detailed content for Act III, Scene 2
    const summaries = {
        'Act III, Scene 2': {
            English: {
                title: "Scene Summary: The Funeral Orations",
                content: [
                    { type: 'p', text: "This scene takes place at Caesar's funeral and is structured around two powerful speeches. It focuses on the power of rhetoric and the fickle nature of the Roman people." },
                    { type: 'h2', text: "1. Brutus's Speech: An Appeal to Reason" },
                    { type: 'p', text: "Brutus speaks first, using calm, logical prose. His argument is that his love for Rome was greater than his love for Caesar. He asks the crowd to choose between Caesar alive as slaves, or Caesar dead as free men." },
                    { type: 'quote', speaker: 'Brutus', text: "Not that I loved Caesar less, but that I loved Rome more." },
                    { type: 'p', text: "Initially, he wins the crowd over. But in a moment of great irony, they shout, 'Let him be Caesar!', completely missing his anti-monarchy point. Confident, Brutus leaves the crowd with Antony." },
                    { type: 'h2', text: "2. Antony's Speech: Emotional Manipulation" },
                    { type: 'p', text: "Antony delivers a masterclass in persuasion, speaking in emotional verse. He uses several tactics to sway the crowd:" },
                    { type: 'ul', items: [
                        "Sarcasm: He repeatedly calls the conspirators 'honourable men' until the phrase becomes an insult.",
                        "Emotional Evidence: He reminds them Caesar refused the crown three times.",
                        "Pathos: He pauses, overwhelmed with grief, to make the crowd pity him.",
                        "Suspense: He mentions Caesar's will but refuses to read it, making them desperate to hear it.",
                        "Visual Aids: He uses Caesar's bloody cloak and mutilated body to incite rage and horror."
                    ]},
                    { type: 'quote', speaker: 'Antony', text: "For Brutus is an honourable man; So are they all, all honourable men." },
                     { type: 'quote', speaker: 'Antony', text: "This was the most unkindest cut of all." },
                    { type: 'h2', text: "3. The Result: Mutiny and Chaos" },
                    { type: 'p', text: "Antony's speech works perfectly. The crowd turns into a furious mob, crying for revenge. After he reads the will—leaving money and parks to every citizen—their rage is sealed." },
                    { type: 'p', text: "They march off to burn the conspirators' houses. Antony, satisfied, notes that 'Mischief' is afoot. He learns Brutus and Cassius have fled Rome, and the civil war he predicted is now beginning." }
                ]
            },
            Hinglish: {
                title: "Scene Summary: The Funeral Orations",
                content: [
                    { type: 'p', text: "Yeh scene Caesar ke funeral par hota hai aur do powerful speeches ke around structured hai. Iska focus rhetoric ki power aur Roman logon ke fickle nature par hai." },
                    { type: 'h2', text: "1. Brutus's Speech: An Appeal to Reason" },
                    { type: 'p', text: "Brutus pehle bolta hai, calm aur logical prose use karte hue. Uska argument yeh hai ki uska Rome ke liye pyaar Caesar ke liye pyaar se bada tha. Woh crowd se poochta hai ki woh Caesar ko zinda dekhkar slaves banna chahte hain, ya Caesar ko murda dekhkar free men." },
                    { type: 'quote', speaker: 'Brutus', text: "Not that I loved Caesar less, but that I loved Rome more." },
                    { type: 'p', text: "Shuru mein, woh crowd ko jeet leta hai. Lekin ek great irony ke moment mein, woh chillaate hain, 'Isey Caesar bana do!', uske anti-monarchy point ko poori tarah miss karte hue. Confident hokar, Brutus crowd ko Antony ke saath chhod jaata hai." },
                    { type: 'h2', text: "2. Antony's Speech: Emotional Manipulation" },
                    { type: 'p', text: "Antony persuasion mein ek masterclass deta hai, emotional verse mein bolte hue. Woh crowd ko influence karne ke liye kai tactics use karta hai:" },
                    { type: 'ul', items: [
                        "Sarcasm: Woh baar-baar conspirators ko 'honourable men' kehta hai jab tak ki yeh phrase ek insult na ban jaaye.",
                        "Emotional Evidence: Woh unhe yaad dilata hai ki Caesar ne teen baar crown refuse kiya tha.",
                        "Pathos: Woh dukh se itna pareshan hone ka natak karta hai ki usey rukna padta hai, taaki crowd uspar daya kare.",
                        "Suspense: Woh Caesar ki will ka zikr karta hai lekin usey padhne se mana kar deta hai, jisse woh usey sunne ke liye desperate ho jaate hain.",
                        "Visual Aids: Woh gussa aur darr paida karne ke liye Caesar ka khooni choga aur uski body ka use karta hai."
                    ]},
                    { type: 'quote', speaker: 'Antony', text: "For Brutus is an honourable man; So are they all, all honourable men." },
                    { type: 'quote', speaker: 'Antony', text: "This was the most unkindest cut of all." },
                    { type: 'h2', text: "3. The Result: Mutiny and Chaos" },
                    { type: 'p', text: "Antony ki speech perfect kaam karti hai. Crowd ek gusse wali mob mein badal jaati hai, jo revenge ke liye chilla rahi hai. Jab woh will padhta hai—jismein har citizen ke liye paise aur parks chhode gaye hain—unka gussa seal ho jaata hai." },
                    { type: 'p', text: "Woh conspirators ke ghar jalane ke liye nikal padte hain. Antony, satisfied hokar, note karta hai ki 'Mischief' ab shuru ho chuki hai. Usey pata chalta hai ki Brutus aur Cassius Rome se bhaag gaye hain, aur usne jo civil war predict ki thi, ab shuru ho rahi hai." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act III, Scene 2'][activeLang];

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



