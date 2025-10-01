import React, { useState } from 'react';

// Main App Component
export default function Class9icseEnglishAct1Scene1Summary() {
    return (
        <div >
            <SceneSummary />
        </div>
    );
}

// Scene Summary Component
const SceneSummary = () => {
    // State to manage the active language tab
    const [activeTab, setActiveTab] = useState('English');

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

    // Detailed content with improved Hinglish translation
    const summaries = {
        English: {
            title: "Scene Summary",
            content: [
                { type: 'p', text: "This opening scene is crucial. Shakespeare uses it to establish Rome's political climate, introduce key ideas, and set the stage for the conflict that follows." },
                { type: 'h2', text: "1. Setting the Scene: A Tense Celebration" },
                { type: 'p', text: "The play begins on a Roman street on February 15th, 44 B.C., during the Feast of Lupercal. Commoners are celebrating Julius Caesar's return after defeating the sons of his great rival, Pompey, in a civil war. Caesar is now the undisputed master of Rome, but the atmosphere is tense, showing a city divided against itself." },
                { type: 'h2', text: "2. The Main Conflict: Republicans vs. Caesar's Supporters" },
                { type: 'p', text: "The scene immediately displays the play's central conflict: the struggle between those who support Caesar's rise to absolute power and those who wish to preserve the Roman Republic. This is shown through the tribunes, Flavius and Marullus (representing the republicans), who angrily confront the commoners for celebrating Caesar." },
                { type: 'quote', speaker: 'Flavius', text: "Hence! home, you idle creatures, get you home: Is this a holiday?" },
                { type: 'h2', text: "3. Character Analysis: The Common People (The Mob)" },
                { type: 'p', text: "The Roman mob is a key 'character'. We learn they are witty, disrespectful of authority, and most importantly, fickle and easily manipulated. Marullus reminds them how they once adored Pompey with the same passion they now show for Caesar." },
                { type: 'quote', speaker: 'Marullus', text: "You blocks, you stones, you worse than senseless things! O you hard hearts, you cruel men of Rome, Knew you not Pompey?" },
                { type: 'p', text: "As soon as Marullus shames them, they hurry away, showing how unstable their loyalty is. This foreshadows how easily they will be swayed by speeches later in the play." },
                { type: 'h2', text: "4. The Tribunes' Plan and The Scene's Purpose" },
                { type: 'p', text: "Marullus points out the hypocrisy of celebrating a victory that came from Roman bloodshed. After the crowd leaves, Flavius reveals their plan: to remove all festive decorations from Caesar's statues to weaken his support. He explains this with a powerful metaphor:" },
                { type: 'quote', speaker: 'Flavius', text: "These growing feathers pluck'd from Caesar's wing Will make him fly an ordinary pitch..." },
                { type: 'p', text: "This powerful opening scene successfully:" },
                { type: 'ul', items: ["Summarizes recent events (the civil war).", "Shows Caesar's growing power and the opposition to it.", "Introduces the fickle nature of the Roman people.", "Establishes the central theme: the conflict between monarchy and the republic."] },
            ]
        },
        Hinglish: {
            title: "Scene Summary",
            content: [
                { type: 'p', text: "Yeh opening scene bahut important hai. Shakespeare isey Rome ka poora political climate establish karne, key ideas introduce karne, aur aage aane wale conflict ka stage set karne ke liye use karte hain." },
                { type: 'h2', text: "1. Scene Kaisa Hai: Ek Tense Celebration" },
                { type: 'p', text: "Play Rome ki ek sadak par 15 February, 44 B.C. ko Lupercal ke festival ke din shuru hota hai. Commoners Julius Caesar ki vapasi ka jashn mana rahe hain, jo apne sabse bade rival, Pompey, ke beton ko ek brutal civil war mein harakar laute hain. Caesar ab Rome ke undisputed master hain, lekin atmosphere kaafi tense hai, jo dikhata hai ki sheher aapas mein hi divided hai." },
                { type: 'h2', text: "2. Main Conflict: Republicans vs. Caesar's Supporters" },
                { type: 'p', text: "Scene shuru hote hi play ka central conflict saamne aa jaata hai: yeh struggle un logon ke beech hai jo Caesar ke absolute power mein aane ko support karte hain, aur unke beech jo traditional Roman Republic ko bachana chahte hain. Yeh conflict tribunes, Flavius aur Marullus (jo republicans hain) ke zariye dikhaya gaya hai, jab woh Caesar ko celebrate kar rahe commoners se gusse mein baat karte hain." },
                { type: 'quote', speaker: 'Flavius', text: "Chalo yahan se! Ghar jao, tum idle creatures: Kya yeh koi holiday hai?" },
                { type: 'h2', text: "3. Character Analysis: Common People (The Mob)" },
                { type: 'p', text: "Roman mob is play ka ek key 'character' hai. Humein unke baare mein teen important cheezein pata chalti hain: Woh witty hain, authority ki disrespect karte hain, aur sabse important, woh fickle hain (yani unka man badalta rehta hai) aur unhe aasani se manipulate kiya ja sakta hai. Marullus unhe yaad dilate hain ki kaise woh pehle Pompey ko usi passion se adore karte the jaise ab Caesar ko kar rahe hain." },
                { type: 'quote', speaker: 'Marullus', text: "Tum blocks, tum stones, tum aisi cheezein jinmein koi sense nahi! O kathor dil wale, Rome ke kroor logon, Kya tum Pompey ko nahi jaante the?" },
                { type: 'p', text: "Jaise hi Marullus unhe shame karte hain, woh wahan se guilt mein chup-chaap chale jaate hain. Yeh unki unstable loyalty ko dikhata hai aur aage ke liye foreshadow karta hai ki play mein speeches ke through unhe kitni aasani se manipulate kiya jayega." },
                { type: 'h2', text: "4. Tribunes Ka Plan aur Scene Ka Purpose" },
                { type: 'p', text: "Marullus is hypocrisy par point out karte hain ki aisi victory ko celebrate kiya ja raha hai jo Romans ke khoon se mili hai. Crowd ke jaane ke baad, Flavius apna plan batate hain: woh Caesar ke support ko kamzor karne ke liye sheher se uske statues par lagi saari decorations hata denge. Woh isey ek powerful metaphor se explain karte hain:" },
                { type: 'quote', speaker: 'Flavius', text: "Caesar ke wing se yeh badhte hue feathers nochne se woh ek ordinary pitch par hi fly karega..." },
                { type: 'p', text: "Yeh powerful opening scene safaltapoorvak:" },
                { type: 'ul', items: ["Recent events (civil war) ko summarize karta hai.", "Caesar ki badhti power aur uske opposition ko dikhata hai.", "Roman people ke fickle nature ko introduce karta hai.", "Play ki central theme (monarchy vs. republic) ko establish karta hai."] },
            ]
        }
    };

    // Inline styles for an improved, beautiful UI
    const styles = {
        // container: { backgroundColor: theme.colors.white, border: 'none', borderRadius: theme.borderRadius.lg, padding: '2.5rem', maxWidth: '800px', margin: '2rem auto', fontFamily: theme.fontFamily.body.join(', '), color: theme.colors.textLight, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: 'transform 0.3s ease-in-out', ':hover': { transform: 'translateY(-5px)' } },
        header: { fontFamily: theme.fontFamily.display.join(', '), color: theme.colors.primary, fontSize: '2rem', marginBottom: '1.5rem', borderBottom: `2px solid ${theme.colors.gray[200]}`, paddingBottom: '1rem' },
        tabContainer: { display: 'inline-flex', backgroundColor: theme.colors.gray[200], borderRadius: theme.borderRadius.full, padding: '0.3rem', marginBottom: '2rem' },
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
                <h1 style={styles.header}>{summaries[activeTab].title}</h1>
                <div style={styles.tabContainer}>
                    <button style={{ ...styles.tab, ...(activeTab === 'English' ? styles.activeTab : {}) }} onClick={() => setActiveTab('English')}>English</button>
                    <button style={{ ...styles.tab, ...(activeTab === 'Hinglish' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Hinglish')}>Hinglish</button>
                </div>
                <div style={styles.content}>
                    {summaries[activeTab].content.map((item, index) => {
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



