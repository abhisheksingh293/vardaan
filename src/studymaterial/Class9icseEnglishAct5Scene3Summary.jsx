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

    // Detailed content for Act V, Scene 3
    const summaries = {
        'Act V, Scene 3': {
            English: {
                title: "Scene Summary: The Death of Cassius",
                content: [
                    { type: 'p', text: "This pivotal scene shows the death of Cassius, which happens not because of the enemy, but because of a terrible mistake. The central themes are misinterpretation, irony, and the continuing power of Caesar's spirit." },
                    { type: 'h2', text: "1. Cassius's Defeat" },
                    { type: 'p', text: "The scene opens on a desperate situation for Cassius. His forces have been defeated by Antony's army, and his soldiers are fleeing. The reason for this defeat is Brutus's premature order to attack in the previous scene. Brutus's soldiers began looting instead of helping Cassius's troops, who were then surrounded." },
                    { type: 'h2', text: "2. A Fatal Misunderstanding" },
                    { type: 'p', text: "Cassius sees troops in the distance and sends his best friend, Titinius, to identify them. Because Cassius has poor eyesight, he sends his servant Pindarus to a hilltop to watch. Pindarus sees Titinius surrounded by horsemen who shout for joy. He makes a terrible mistake, believing Titinius has been captured by the enemy." },
                    { type: 'h2', text: "3. The Death of Cassius" },
                    { type: 'p', text: "Believing he has sent his best friend to his death, Cassius is overcome with despair. He asks Pindarus to kill him with the same sword that was used to kill Caesar." },
                    { type: 'quote', speaker: 'Cassius', text: "Caesar, thou art revenged, Even with the sword that killed thee." },
                     { type: 'p', text: "He dies with Caesar's name on his lips, a moody and passionate end caused by his own mistaken feelings." },
                    { type: 'h2', text: "4. The Tragic Irony Revealed" },
                    { type: 'p', text: "Immediately after, Titinius returns with Messala, revealing the tragic irony. The troops were Brutus's soldiers, shouting for joy because Brutus had been victorious. They had given Titinius a victory wreath for Cassius. Heartbroken, Titinius kills himself with Cassius's sword." },
                    { type: 'quote', speaker: 'Titinius', text: "Alas, thou hast misconstrued every thing!" },
                    { type: 'h2', text: "5. Brutus's Reaction" },
                    { type: 'p', text: "Brutus arrives to find the bodies of his friends. He is deeply grieved but, as a Stoic, controls his emotions. He understands that Caesar's spirit is still at work, causing the conspirators to turn their swords on themselves." },
                     { type: 'quote', speaker: 'Brutus', text: "O Julius Caesar, thou art mighty yet!" },
                    { type: 'p', text: "He calls Cassius 'The last of all the Romans' and orders his body to be sent away so it will not demoralize the army before they fight a second battle." }
                ]
            },
            Hinglish: {
                title: "Scene Summary 3: Cassius ki Maut",
                content: [
                    { type: 'p', text: "Yeh mahatvapurna scene Cassius ki maut ko dikhata hai, jo dushman ke kaaran nahi, balki ek bhayanak galti ke kaaran hoti hai. Iske mukhya vishay galatfehmi, vidambana (irony), aur Caesar ki aatma ki lagatar shakti hain." },
                    { type: 'h2', text: "1. Cassius ki Haar" },
                    { type: 'p', text: "Scene Cassius ke liye ek nirashajanak sthiti mein khulta hai. Uski sena Antony ki sena se haar gayi hai, aur uske sainik bhaag rahe hain. Is haar ka kaaran pichle scene mein Brutus ka samay se pehle hamla karne ka aadesh tha. Brutus ke sainik Cassius ke sainikon ki madad karne ke bajaye loot-paat karne lage, jiske baad unhein gher liya gaya." },
                    { type: 'h2', text: "2. Ek Ghaatak Galatfehmi" },
                    { type: 'p', text: "Cassius door se sainikon ko dekhta hai aur apne sabse achhe dost, Titinius, ko unki pehchan karne ke liye bhejta hai. Kyunki Cassius ki nazar kamzor hai, woh apne sevak Pindarus ko ek pahadi ki choti par dekhne ke liye bhejta hai. Pindarus dekhta hai ki Titinius ko ghudsawar gher lete hain jo khushi se chillaate hain. Woh ek bhayanak galti karta hai, yeh maankar ki Titinius ko dushman ne pakad liya hai." },
                    { type: 'h2', text: "3. Cassius ki Maut" },
                    { type: 'p', text: "Yeh maankar ki usne apne sabse achhe dost ko uski maut ke paas bhej diya hai, Cassius nirasha se bhar jaata hai. Woh Pindarus se kehta hai ki woh use usi talwar se maar de jisse Caesar ko maara gaya tha." },
                    { type: 'quote', speaker: 'Cassius', text: "Caesar, tera badla poora hua, Usi talwar se jisne tujhe maara tha." },
                    { type: 'p', text: "Woh Caesar ka naam apne honthon par lekar marta hai, ek mood-bhara aur bhavuk ant jo uski apni galat bhavnaon ke kaaran hua." },
                    { type: 'h2', text: "4. Dukhant Vidambana ka Khulasa" },
                    { type: 'p', text: "Turant baad, Titinius Messala ke saath lautata hai, jisse dukhant vidambana ka khulasa hota hai. Ve sainik Brutus ke the, jo isliye khushi se chilla rahe the kyunki Brutus jeet gaya tha. Unhone Cassius ke liye Titinius ko ek jeet ka haar diya tha. Dil toota hua, Titinius Cassius ki talwar se khud ko maar leta hai." },
                    { type: 'quote', speaker: 'Titinius', text: "Afsos, tumne sab kuch galat samjha!" },
                    { type: 'h2', text: "5. Brutus ki Pratikriya" },
                    { type: 'p', text: "Brutus apne doston ke shavon ko paane ke liye pahunchta hai. Woh gehre dukh mein hai, lekin ek Stoic ke roop mein, apni bhavnaon ko niyantrit karta hai. Woh samajhta hai ki Caesar ki aatma abhi bhi kaam kar rahi hai, shadyantrakariyon ko apni talwarein apne hi khilaf karne par majboor kar rahi hai." },
                    { type: 'quote', speaker: 'Brutus', text: "O Julius Caesar, tum abhi bhi shaktishaali ho!" },
                    { type: 'p', text: "Woh Cassius ko 'sab Romans mein aakhri' kehta hai aur uske sharir ko door bhejne ka aadesh deta hai taaki sena ka manobal na gire, isse pehle ki woh ek doosri ladai ladein." }
                ]
            }
        }
    };
    
    const currentSummary = summaries['Act V, Scene 3'][activeLang];

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

