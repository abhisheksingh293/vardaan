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

    // Detailed content for Act V, Scene 5
    const summaries = {
        'Act V, Scene 5': {
            English: {
                title: "Scene Summary: The Death of Brutus",
                content: [
                    { type: 'p', text: "This final scene marks the end of the battle and the tragic death of Brutus. It resolves the main conflict of the play and ends with a noble tribute to the tragic hero." },
                    { type: 'h2', text: "1. Brutus's Final Moments" },
                    { type: 'p', text: "A defeated and exhausted Brutus rests with his last few loyal followers. He tells them that Caesar's ghost has appeared to him for a second time, which he takes as a sign that his hour has come. Believing it is more honorable to die by his own hand than be captured, he decides to take his own life. He asks three of his friends to hold his sword so he can run on it, but they all refuse." },
                    { type: 'h2', text: "2. The Death of Brutus" },
                    { type: 'p', text: "As the enemy approaches, Brutus persuades his servant, Strato, to hold the sword. Strato holds it, and Brutus runs upon it. His last words are a message to the spirit of the man he killed, suggesting he dies more willingly than he killed Caesar." },
                    { type: 'quote', speaker: 'Brutus', text: "Caesar, now be still; I kill'd not thee with half so good a will." },
                    { type: 'p', text: "With his death, Caesar's spirit can finally rest, and the revenge for his murder is complete." },
                    { type: 'h2', text: "3. Antony's Tribute" },
                    { type: 'p', text: "Antony and Octavius arrive to find Brutus's body. Antony pays a noble tribute to his fallen enemy, recognizing that Brutus was the only conspirator who acted from a genuine desire to do good for Rome." },
                    { type: 'quote', speaker: 'Antony', text: "This was the noblest Roman of them all... He only, in a general honest thought, And common good to all, made one of them." },
                    { type: 'p', text: "Antony ends with the highest possible praise:" },
                    { type: 'quote', speaker: 'Antony', text: "His life was gentle, and the elements So mix'd in him, that Nature might stand up And say to all the world, 'This was a man!'" },
                    { type: 'h2', text: "4. The End of the Play" },
                    { type: 'p', text: "Octavius, now the clear leader, takes command. He orders that Brutus be given an honorable burial with full military rites. His final words bring the tragic civil war to a close. Caesar has been avenged, and a new order is beginning in Rome." },
                ]
            },
            Hinglish: {
                title: "Scene Summary 5: Brutus ki Maut",
                content: [
                    { type: 'p', text: "Yeh antim scene yuddh ke ant aur Brutus ki dukhant maut ka prateek hai. Yeh natak ke mukhya sangharsh ko samapt karta hai aur is dukhant nayak ko ek shreshth shraddhanjali ke saath samapt hota hai." },
                    { type: 'h2', text: "1. Brutus ke Antim Pal" },
                    { type: 'p', text: "Ek haara hua aur thaka hua Brutus apne antim kuch wafadar anuyayiyon ke saath aaram kar raha hai. Woh unhein batata hai ki Caesar ka bhoot use doosri baar dikha hai, jise woh is baat ka sanket maanta hai ki uska samay aa gaya hai. Yeh maankar ki pakde jaane se behtar hai ki woh apne haathon mare, woh apni jaan lene ka faisla karta hai. Woh apne teen doston se apni talwar pakadne ke liye kehta hai taaki woh uspe daud sake, lekin sab mana kar dete hain." },
                    { type: 'h2', text: "2. Brutus ki Maut" },
                    { type: 'p', text: "Jaise hi dushman nazdeek aata hai, Brutus apne sevak Strato ko talwar pakadne ke liye mana leta hai. Strato use pakadta hai, aur Brutus uspar daud jaata hai. Uske antim shabd us aadmi ki aatma ke liye ek sandesh hain jise usne maara tha, yeh batate hue ki woh Caesar ko maarne se zyada ichchha se mar raha hai." },
                    { type: 'quote', speaker: 'Brutus', text: "Caesar, ab shaant ho jao; Maine tumhein iske aadhe achhe iraade se bhi nahi maara tha." },
                    { type: 'p', text: "Uski maut ke saath, Caesar ki aatma ko aakhirkar shanti mil sakti hai, aur uski hatya ka badla poora ho gaya hai." },
                    { type: 'h2', text: "3. Antony ki Shraddhanjali" },
                    { type: 'p', text: "Antony aur Octavius Brutus ke shav ko paane ke liye pahunchte hain. Antony apne gire hue dushman ko ek shreshth shraddhanjali deta hai, yeh maante hue ki Brutus hi ekmatra shadyantrakari tha jisne Rome ke liye sachmuch bhala karne ki ichchha se kaam kiya tha." },
                    { type: 'quote', speaker: 'Antony', text: "Yeh un sab mein sabse shreshth Roman tha... Sirf wahi, ek samanya imandar soch mein, aur sabke bhale ke liye, unme se ek bana." },
                    { type: 'p', text: "Antony sarvottam prashansa ke saath samapt karta hai:" },
                    { type: 'quote', speaker: 'Antony', text: "Uska jeevan saumya tha, aur tatva usme is tarah se mile hue the, ki Prakriti khadi hokar saari duniya se keh sakti, 'Yeh ek aadmi tha!'" },
                    { type: 'h2', text: "4. Natak ka Ant" },
                    { type: 'p', text: "Octavius, ab spasht neta, kaman sambhalta hai. Woh aadesh deta hai ki Brutus ko poore sainik samman ke saath ek sammanजनक dafan kiya jaaye. Uske antim shabd is dukhant gruh yuddh ko samapt karte hain. Caesar ka badla le liya gaya hai, aur Rome mein ek naya shasan shuru ho raha hai." },
                ]
            }
        }
    };
    
    const currentSummary = summaries['Act V, Scene 5'][activeLang];

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

