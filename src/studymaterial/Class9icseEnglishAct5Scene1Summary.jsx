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

    // Detailed content for Act V, Scene 1
    const summaries = {
        'Act V, Scene 1': {
            English: {
                title: "Act V, Scene 1: The Fields of Philippi",
                content: [
                    { type: 'p', text: "We have now reached the final act of the play. The action has moved from Rome to the battlefields of Philippi in ancient Greece. The two opposing armies—Antony and Octavius versus Brutus and Cassius—are finally meeting for the decisive battle that will determine the future of Rome." },
                    { type: 'h2', text: "1. The Triumvirs Prepare for Battle" },
                    { type: 'p', text: "The scene opens with Antony and Octavius arriving with their army. Antony confidently states that he knows their enemies have come down from the hills only to make a show of bravery. A brief argument occurs between Antony and Octavius over who will command which side of the battlefield, showing the first signs of tension between the new rulers of Rome." },
                    { type: 'h2', text: "2. The 'Parley': A Battle of Words" },
                    { type: 'p', text: "Before the fighting begins, the four generals meet for a 'parley.' Instead of a peaceful talk, it's a bitter battle of words. Antony angrily calls the conspirators 'villains' and 'flatterers,' accusing them of hypocrisy for smiling at Caesar right before they stabbed him." },
                    { type: 'quote', speaker: 'Cassius', text: "This tongue had not offended so today, if Cassius might have ruled." },
                    { type: 'p', text: "Cassius retorts that this verbal abuse is Brutus's fault for not agreeing to kill Antony earlier. Octavius draws his sword and vows not to put it away until he has avenged Caesar's death." },
                    { type: 'h2', text: "3. Cassius and the Bad Omens" },
                    { type: 'p', text: "As Antony and Octavius leave, Cassius reveals to his friend Messala that it is his birthday. He also confesses that he has changed his philosophy. He once followed Epicurus, who did not believe in omens, but now he is worried." },
                    { type: 'p', text: "He describes a terrible omen: two mighty eagles that had followed their army have now flown away. In their place, ravens, crows, and kites—symbols of death—circle over the soldiers as if they were 'sickly prey.'" },
                    { type: 'h2', text: "4. The Final Farewell" },
                    { type: 'p', text: "Brutus and Cassius have a final, touching conversation. Cassius asks what Brutus will do if they lose. Brutus says that while he finds suicide 'cowardly and vile' according to his Stoic philosophy, he would never suffer the shame of being captured and paraded through Rome." },
                    { type: 'p', text: "Realizing this may be the last time they see each other, the two friends say a noble and heartfelt farewell." },
                    { type: 'quote', speaker: 'Brutus', text: "Forever and forever farewell, Cassius. If we do meet again, why, we shall smile. If not, why then this parting was well made." }
                ]
            },
            Hinglish: {
                title: "Act V, Scene 1: Philippi ke Maidan",
                content: [
                    { type: 'p', text: "Ab hum play ke aakhri act mein pahunch gaye hain. Action Rome se purane Greece mein Philippi ke yuddh ke maidanon mein chala gaya hai. Do vipakshi senayein—Antony aur Octavius ek taraf, aur Brutus aur Cassius doosri taraf—aakhirkaar us nirnayak yuddh ke liye mil rahi hain jo Rome ka bhavishya tay karega." },
                    { type: 'h2', text: "1. Triumvirs Yuddh ki Taiyari Karte Hain" },
                    { type: 'p', text: "Scene Antony aur Octavius ke apni sena ke saath aane se shuru hota hai. Antony vishwas ke saath kehta hai ki woh jaanta hai ki unke dushman pahadiyon se neeche sirf bahaduri ka dikhawa karne ke liye aaye hain. Yuddh ke maidan mein kaun si side command karega, is par Antony aur Octavius ke beech ek choti si behes hoti hai, jo Rome ke naye shasakon ke beech tanav ke pehle sanket dikhati hai." },
                    { type: 'h2', text: "2. 'Parley': Shabdon ka Yuddh" },
                    { type: 'p', text: "Ladai shuru hone se pehle, chaaron generals ek 'parley' (baatcheet) ke liye milte hain. Ek shantipoorn baatcheet ke bajaye, yeh shabdon ka ek kadwa yuddh hota hai. Antony gusse mein shadyantrakariyon ko 'khalnayak' aur 'chaaploos' kehta hai, un par dhong ka aarop lagata hai ki unhone Caesar ko chaku maarne se theek pehle muskuraya tha." },
                    { type:- 'quote', speaker: 'Cassius', text: "Yeh zabaan aaj itna apmaan nahi karti, agar Cassius ka kehna maana gaya hota." },
                    { type: 'p', text: "Cassius jawab deta hai ki yeh gaali-galoch Brutus ki galti hai ki usne pehle Antony ko maarne ke liye sahmati nahi di. Octavius apni talwar nikalta hai aur kasam khata hai ki woh ise tab tak vapis nahi rakhega jab tak woh Caesar ki maut ka badla nahi le leta." },
                    { type: 'h2', text: "3. Cassius aur Bure Omens" },
                    { type: 'p', text: "Jaise hi Antony aur Octavius jaate hain, Cassius apne dost Messala ko batata hai ki aaj uska janamdin hai. Woh yeh bhi kabool karta hai ki usne apni philosophy badal di hai. Woh pehle Epicurus ka anuyayi tha, jo omens mein vishwas nahi karte the, lekin ab woh chintit hai." },
                    { type: 'p', text: "Woh ek bhayanak omen ka varnan karta hai: do shaktishali baaz jo unki sena ka peecha kar rahe the, ab udd gaye hain. Unki jagah, kauve, giddh, aur cheel—maut ke prateek—sainikon ke upar mandra rahe hain jaise ki woh 'beemar shikar' hon." },
                    { type: 'h2', text: "4. Antim Vidai" },
                    { type: 'p', text: "Brutus aur Cassius ek aakhri, dil ko chhu lene wali baatcheet karte hain. Cassius poochta hai ki agar woh haar gaye toh Brutus kya karega. Brutus kehta hai ki jabki woh apni Stoic philosophy ke anusaar aatmahatya ko 'kayarta aur neech' maanta hai, woh kabhi bhi pakde jaane aur Rome mein parade karne ki sharm nahi sahega." },
                    { type: 'p', text: "Yeh mehsoos karte hue ki yeh shayad aakhri baar hai jab woh ek doosre ko dekh rahe hain, dono dost ek shaandaar aur dil se vidai lete hain." },
                    { type: 'quote', speaker: 'Brutus', text: "Hamesha aur hamesha ke liye alvida, Cassius. Agar hum dobara mile, toh hum muskurayenge. Agar nahi, toh yeh vidai acchi hui." }
                ]
            }
        }
    };
    
    const currentSummary = summaries['Act V, Scene 1'][activeLang];

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

