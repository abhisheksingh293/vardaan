import React, { useState } from 'react';

// Main App Component
export default function App() {
    return (
        <div>
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

    // Detailed content for Act V, Scene 4
    const summaries = {
        'Act V, Scene 4': {
            English: {
                title: "Scene Summary 4: The Loyalty of Lucilius",
                content: [
                    { type: 'p', text: "This scene takes us back into the heart of the battle, showing the final desperate moments of Brutus's army and the incredible loyalty of his followers." },
                    { type: 'h2', text: "1. The Final Efforts" },
                    { type: 'p', text: "The scene opens with Brutus trying to rally his few remaining men, including Young Cato, before rushing back into the fight. Left on the field, Young Cato fights bravely, proudly shouting his identity before he is killed." },
                    { type: 'quote', speaker: 'Young Cato', text: "I am the son of Marcus Cato, ho! A foe to tyrants, and my country’s friend." },
                    { type: 'p', text: "His death signifies the ongoing destruction of Brutus's forces." },
                    { type: 'h2', text: "2. Lucilius's Great Loyalty" },
                    { type: 'p', text: "To protect Brutus and give him time to escape, his officer Lucilius pretends to be him. He bravely confronts the enemy soldiers, hoping they will kill him instead." },
                    { type: 'quote', speaker: 'Lucilius', text: "And I am Brutus, Marcus Brutus, I! Brutus, my country’s friend. Know me for Brutus!" },
                    { type: 'p', text: "The soldiers capture Lucilius, believing they have caught their most important enemy." },
                    { type: 'h2', text: "3. Antony's Noble Response" },
                    { type: 'p', text: "When Antony arrives, he immediately recognizes that the prisoner is not Brutus. Instead of punishing Lucilius, Antony shows his quality as a leader. He recognizes the value of such loyalty and orders his men to treat Lucilius with kindness." },
                    { type: 'quote', speaker: 'Antony', text: "This is not Brutus, friend, but, I assure you, A prize no less in worth. Keep this man safe... I had rather have Such men my friends than enemies." },
                    { type: 'p', text: "This response shows Antony as a shrewd commander who can appreciate honor, even in an opponent." },
                    { type: 'h2', text: "4. The Scene's Purpose" },
                    { type: 'p', text: "This short scene highlights the theme of loyalty, showing the devotion of Brutus's followers. It also develops Antony's character and builds suspense for the final, tragic scene of the play." },
                ]
            },
            Hinglish: {
                title: "Scene Summary 4: Lucilius ki Wafadari",
                content: [
                    { type: 'p', text: "Yeh scene humein wapas yuddh ke maidan mein le jaata hai, jahan Brutus ki sena ke aakhri nirashajanak pal aur uske anuyayiyon ki adbhut wafadari dikhayi gayi hai." },
                    { type: 'h2', text: "1. Antim Prayas" },
                    { type: 'p', text: "Scene ki shuruaat Brutus ke apne bache hue kuch aadmiyon, jisme Young Cato bhi shamil hai, ko himmat dilane ki koshish se hoti hai, jiske baad woh wapas ladai mein chala jaata hai. Maidan mein akele, Young Cato bahaduri se ladta hai aur apni pehchan garv se batata hai, isse pehle ki woh maara jaaye." },
                    { type: 'quote', speaker: 'Young Cato', text: "Main Marcus Cato ka beta hoon! Atyachariyon ka dushman, aur apne desh ka dost." },
                    { type: 'p', text: "Uski maut Brutus ki sena ke lagatar ho rahe vinash ka prateek hai." },
                    { type: 'h2', text: "2. Lucilius ki Mahaan Wafadari" },
                    { type: 'p', text: "Brutus ko bachane aur use bhaagne ka samay dene ke liye, uska officer Lucilius Brutus hone ka natak karta hai. Woh bahaduri se dushman sainikon ka samna karta hai, is ummeed mein ki woh uske bajaye use maar denge." },
                    { type: 'quote', speaker: 'Lucilius', text: "Aur main Brutus hoon, Marcus Brutus, main! Brutus, mere desh ka dost. Mujhe Brutus ke roop mein jaano!" },
                    { type: 'p', text: "Sainik Lucilius ko pakad lete hain, yeh maankar ki unhone apne sabse mahatvapurna dushman ko pakad liya hai." },
                    { type: 'h2', text: "3. Antony ki Udaar Pratikriya" },
                    { type: 'p', text: "Jab Antony pahunchta hai, to woh turant pehchan jaata hai ki kaidi Brutus nahi hai. Lucilius ko saza dene ke bajaye, Antony ek neta ke roop mein apni gunvatta dikhata hai. Woh aisi wafadari ke mahatva ko pehchanta hai aur apne aadmiyon ko Lucilius ke saath dayalu vyavahar karne ka aadesh deta hai." },
                    { type: 'quote', speaker: 'Antony', text: "Yeh Brutus nahi hai, dost, lekin main tumhe vishwas dilata hoon, yeh bhi utna hi keemti hai. Is aadmi ko surakshit rakho... Main aise logon ko dushman banane ke bajaye dost banana pasand karunga." },
                    { type: 'p', text: "Yeh pratikriya Antony ko ek chatur senapati ke roop mein dikhati hai jo ek virodhi mein bhi samman ki sarahna kar sakta hai." },
                    { type: 'h2', text: "4. Scene ka Uddeshya" },
                    { type: 'p', text: "Yeh chhota sa scene wafadari ke vishay ko ujagar karta hai, Brutus ke anuyayiyon ki bhakti ko darshata hai. Yeh Antony ke charitra ko bhi viksit karta hai aur natak ke antim, dukhant scene ke liye utsukta badhata hai." },
                ]
            }
        }
    };
    
    const currentSummary = summaries['Act V, Scene 4'][activeLang];

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

