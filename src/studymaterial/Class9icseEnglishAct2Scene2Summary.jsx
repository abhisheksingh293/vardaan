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

    // Detailed content for Act II, Scene 2
    const summaries = {
        'Act II, Scene 2': {
            English: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "The scene shifts to Caesar's house on the morning of the Ides of March. The terrible storm continues, and the atmosphere is heavy with a sense of doom. This scene shows the final opportunity for Caesar to save himself and how his own flaws lead him to his death." },
                    { type: 'h2', text: "1. Calpurnia's Fear and the Bad Omens" },
                    { type: 'p', text: "Caesar has been kept awake by the storm and his wife, Calpurnia, crying out in her sleep, \"Help, ho! They murder Caesar!\" She begs him not to go to the Senate, reporting terrifying omens:" },
                    { type: 'ul', items: [
                        "A lioness giving birth in the streets.",
                        "Graves opening and revealing their dead.",
                        "Fiery warriors fighting in the clouds, drizzling blood on the Capitol.",
                        "Ghosts shrieking in the streets."
                    ] },
                     { type: 'quote', speaker: 'Calpurnia', text: "When beggars die there are no comets seen; The heavens themselves blaze forth the death of princes." },
                    { type: 'h2', text: "2. Caesar's Philosophy and a Final Warning" },
                    { type: 'p', text: "Caesar responds with one of the most famous speeches in the play, expressing his belief that one should not fear death." },
                    { type: 'quote', speaker: 'Caesar', text: "Cowards die many times before their deaths; The valiant never taste of death but once." },
                    { type: 'p', text: "A servant returns from the priests who performed a sacrifice. They warn Caesar to stay home because they \"could not find a heart within the beast.\" Caesar proudly interprets this to mean that he would be a beast without a heart if he stayed home in fear." },
                    { type: 'h2', text: "3. Decius the Manipulator" },
                    { type: 'p', text: "Calpurnia's pleas work, and Caesar agrees to stay home. Just then, the conspirator Decius Brutus arrives. Hearing Caesar will not go, Decius skillfully reverses the decision using three arguments:" },
                    { type: 'ul', items: [
                        "He Reinterprets the Dream: He twists Calpurnia's dream of Caesar's statue spouting blood into a positive sign that Caesar provides 'reviving blood' to Rome.",
                        "He Appeals to Caesar's Ambition: He tells Caesar the Senate plans to offer him a crown that day and might change their minds if he is absent.",
                        "He Attacks Caesar's Pride: He suggests senators will mock Caesar for being afraid and listening to his wife's dreams."
                    ] },
                    { type: 'h2', text: "4. Caesar's Fatal Decision" },
                    { type: 'p', text: "Decius's flattery works perfectly. Ashamed, Caesar changes his mind." },
                    { type: 'quote', speaker: 'Caesar', text: "How foolish do your fears seem now, Calpurnia! I am ashamèd I did yield to them. Give me my robe, for I will go." },
                    { type: 'p', text: "The scene ends with heavy dramatic irony as the other conspirators arrive to escort Caesar. He greets them as \"friends,\" unaware they will murder him in less than an hour." }
                ]
            },
            Hinglish: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "Scene ab Caesar ke ghar Ides of March ki subah shift ho jaata hai. Bhayanak toofan jaari hai, aur mahaul mein ek anisht ki bhavna hai. Yeh scene Caesar ke paas khud ko bachane ka aakhri mauka dikhata hai aur kaise uski apni kamiyan use uski maut tak le jaati hain." },
                    { type: 'h2', text: "1. Calpurnia ka Darr aur Bure Omens" },
                    { type: 'p', text: "Caesar toofan aur apni patni, Calpurnia, ke neend mein chillane se jaagta raha hai, \"Bachao, ho! Woh Caesar ko maar rahe hain!\" Woh usse us din Senate na jaane ki vinti karti hai, aur darawne omens batati hai:" },
                     { type: 'ul', items: [
                        "Ek sherni sadkon par bachche ko janam de rahi hai.",
                        "Kabre khul rahi hain aur unke murde dikha rahi hain.",
                        "Aasman mein aag ke yoddha lad rahe hain, Capitol par khoon ki boondein gira rahe hain.",
                        "Sadkon par bhoot cheekh rahe hain."
                    ] },
                    { type: 'quote', speaker: 'Calpurnia', text: "Jab bhikari marte hain toh koi dhumketu nahi dikhte; Aasman khud rajakumaron ki maut par chamakta hai." },
                    { type: 'h2', text: "2. Caesar ki Philosophy aur Aakhri Warning" },
                    { type: 'p', text: "Caesar iska jawab play ki sabse famous speeches mein se ek ke saath deta hai, jisme woh maut se na darne ka apna vishwas vyakt karta hai." },
                    { type: 'quote', speaker: 'Caesar', text: "Kaayar apni maut se pehle kai baar marte hain; Bahadur maut ka swaad sirf ek baar chakhte hain." },
                    { type: 'p', text: "Ek sevak balidaan karne wale pujariyon se lautता hai. Woh bhi Caesar ko ghar par rehne ki chetavani dete hain, kyunki jab unhonne janwar ki jaanch ki, toh unhe 'janwar ke andar dil nahi mila.' Yeh ek bohot bura omen hai. Lekin, Caesar garv se iska matlab yeh nikalta hai ki agar woh darr se ghar par raha toh woh bina dil ka janwar hoga." },
                    { type: 'h2', text: "3. Decius the Manipulator" },
                    { type: 'p', text: "Calpurnia ki minnaton ke aage, Caesar ghar par rukne ke liye maan jaata hai. Yeh ek crucial turning point hai. Jaise hi Caesar surakshit rehne ka faisla karta hai, conspirator Decius Brutus use Senate le jaane ke liye aa jaata hai. Yeh sunkar ki Caesar nahi jayega, Decius chalaaki se teen dalilon ka istemal karke uska faisla badal deta hai:" },
                     { type: 'ul', items: [
                        "Sapne ko Reinterpret karta hai: Woh Calpurnia ke sapne ko ek positive sign mein badal deta hai, kehta hai ki iska matlab hai ki Caesar Rome ko 'reviving blood' dega.",
                        "Caesar ke Ambition ko Appeal karta hai: Woh batata hai ki Senate use us din crown offer karne ka plan bana raha hai, aur agar woh nahi aaya, toh woh apna mann badal sakte hain.",
                        "Caesar ke Pride par Hamla karta hai: Woh sujhav deta hai ki senators uska mazak udayenge agar woh ghar par ruk gaya, kahenge, 'Dekho, Caesar darr gaya?'"
                    ] },
                    { type: 'h2', text: "4. Caesar ka Ghaatak Faisla" },
                    { type: 'p', text: "Decius ki chaaploosi aur uske garv par hamla bilkul kaam kar jaata hai. Apne 'bewakoofana' darron ke aage jhukne par sharminda hokar, Caesar apna mann poori tarah badal leta hai." },
                    { type: 'quote', speaker: 'Caesar', text: "Tumhare darr ab kitne bewakoofana lag rahe hain, Calpurnia! Mujhe sharm aa rahi hai ki main unke aage jhuk gaya. Mujhe mera choga do, kyunki main jaunga." },
                    { type: 'p', text: "Scene bhaari dramatic irony ke saath khatam hota hai. Dusre conspirators, Brutus sahit, Caesar ko Capitol tak le jaane ke liye aate hain. Caesar un sabhi ka 'doston' ke roop mein swagat karta hai. Use yeh nahi pata ki yeh wahi log hain jo ek ghante se bhi kam samay mein uski hatya kar denge." }
                ]
            }
        }
    };

    const currentSummary = summaries['Act II, Scene 2'][activeLang];

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



