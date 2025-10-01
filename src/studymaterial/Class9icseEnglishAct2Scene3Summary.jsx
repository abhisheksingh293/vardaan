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

    // Detailed content for Act II, Scene 3
    const summaries = {
        'Act II, Scene 3': {
            English: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "This very brief scene provides a moment of intense suspense before Caesar reaches the Capitol. It shows that the conspiracy is not entirely secret and presents one last, desperate chance for Caesar to be saved." },
                    { type: 'h2', text: "1. A Desperate Warning" },
                    { type: 'p', text: "The scene opens on a street near the Capitol, where a teacher named Artemidorus is reading aloud a letter he has written to Caesar. His goal is to intercept Caesar and warn him." },
                    { type: 'h2', text: "2. The Letter's Chilling Content" },
                    { type: 'p', text: "Unlike the vague omens in the previous scene, this letter is direct and specific. It explicitly names the key conspirators and exposes their plot:" },
                    { type: 'quote', speaker: 'Artemidorus (reading)', text: "Caesar, beware of Brutus. Take heed of Cassius. Come not near Casca... There is but one mind in all these men, and it is bent against Caesar. If thou beest not immortal, look about you." },
                    { type: 'h2', text: "3. A Final, Fateful Chance" },
                    { type: 'p', text: "Artemidorus plans to stand in the street and hand the letter to Caesar as if he were a humble petitioner ('suitor'). The scene, and Caesar's fate, hangs on a simple question: will Caesar read the letter? Artemidorus concludes with a rhyming couplet that highlights the life-or-death stakes:" },
                    { type: 'quote', speaker: 'Artemidorus', text: "If thou read this, O Caesar, thou mayst live. If not, the Fates with traitors do contrive." }
                ]
            },
            Hinglish: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "Yeh ek bohot chhota scene hai jo Caesar ke Capitol pahunchne se pehle intense suspense create karta hai. Yeh dikhata hai ki conspiracy poori tarah se secret nahi hai aur Caesar ke paas bachne ka ek last, desperate chance hai." },
                    { type: 'h2', text: "1. A Desperate Warning" },
                    { type: 'p', text: "Scene Capitol ke paas ek street par shuru hota hai, jahan Artemidorus naam ka ek teacher ek letter zor se padh raha hai jo usne Caesar ke liye likha hai. Uska goal Caesar ko rokna aur use warn karna hai." },
                    { type: 'h2', text: "2. The Letter's Chilling Content" },
                    { type: 'p', text: "Pichhle scene ke unclear omens se alag, yeh letter bohot direct aur specific hai. Ismein saaf-saaf main conspirators ke naam likhe hain aur unke plot ko expose kiya gaya hai:" },
                    { type: 'quote', speaker: 'Artemidorus (reading)', text: "Caesar, Brutus se beware raho. Cassius ka dhyaan rakho. Casca ke paas mat aana... In sabhi logon ka ek hi mind hai, aur yeh Caesar ke against hai. Agar tum immortal nahi ho, toh apne aas-paas dekho." },
                    { type: 'h2', text: "3. A Final, Fateful Chance" },
                    { type: 'p', text: "Artemidorus plan banata hai ki woh street par khada rahega aur Caesar ko yeh letter dega, jaise ki woh ek humble petitioner ('suitor') ho. Poora scene, aur Caesar ki kismat, ek simple question par depend karti hai: kya Caesar letter padhega? Artemidorus ek rhyming couplet ke saath end karta hai jo life-or-death ke stakes ko highlight karta hai:" },
                    { type: 'quote', speaker: 'Artemidorus', text: "Agar tum yeh padhoge, O Caesar, toh tum zinda reh sakte ho. Agar nahi, toh Fates traitors ke saath milkar conspire karengi." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act II, Scene 3'][activeLang];

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

// Styles for the main app container


