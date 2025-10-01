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

    // Detailed content for Scene 3
    const summaries = {
        'Scene 3': {
            English: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "This scene is all about building suspense and atmosphere. Shakespeare uses a violent storm and supernatural events to reflect the growing political chaos in Rome as Cassius gathers his fellow conspirators." },
                    { type: 'h2', text: "1. The Storm and Strange Omens" },
                    { type: 'p', text: "The scene opens on a Roman street in the middle of a terrifying storm with thunder and lightning. A frightened Casca meets the calm and rational senator, Cicero. Casca is breathless and terrified, believing the gods are either at war or are trying to destroy the world. He lists several 'prodigies' or unnatural sights he has witnessed:" },
                    { type: 'ul', items: [
                        "A slave's hand was on fire but remained unburned.",
                        "A lion was seen walking calmly near the Capitol.",
                        "A hundred terrified women saw men walking the streets covered in flames.",
                        "An owl, a bird of the night, was seen hooting in the marketplace at noon."
                    ] },
                    { type: 'h2', text: "2. Different Interpretations of the Storm" },
                    { type: 'p', text: "This scene is crucial for showing how different characters interpret the same events based on their own beliefs and motives. This is a key point for exams." },
                    { type: 'quote', speaker: 'Cicero', text: "...men may construe things after their fashion, Clean from the purpose of the things themselves." },
                    { type: 'p', text: "Cassius, however, is fearless and opportunistic. He cleverly uses the storm for his own political purpose, interpreting the omens as a sign against Caesar." },
                    { type: 'quote', speaker: 'Cassius', text: `He compares the "monstrous" storm to the "monstrous state" of Rome under the "prodigious grown" Caesar.` },
                    { type: 'h2', text: "3. The Conspiracy Gains Momentum" },
                    { type: 'p', text: "Cassius skillfully manipulates Casca's fear, winning him over to the conspiracy. The plot gains urgency when Casca reveals that the senators plan to make Caesar king the very next day. Hearing this, Cassius declares he would rather kill himself than live under King Caesar." },
                    { type: 'quote', speaker: 'Cassius', text: "I know where I will wear this dagger then; Cassius from bondage will deliver Cassius." },
                    { type: 'p', text: "He blames the Romans themselves for Caesar's rise, calling them weak and submissive." },
                    { type: 'quote', speaker: 'Cassius', text: "I know he would not be a wolf But that he sees the Romans are but sheep; He were no lion, were not Romans hinds (deer)." },
                    { type: 'p', text: "Convinced, Casca gives his hand to Cassius and pledges to join the plot." },
                    { type: 'h2', text: "4. The Final Step: Winning Over Brutus" },
                    { type: 'p', text: "Another conspirator, Cinna, arrives. Cassius gives him the forged letters and instructs him to plant them where Brutus will find them: on his magistrate's chair, through his window, and on the statue of his ancestor. This is the final step to manipulate Brutus into joining them." },
                    { type: 'h2', text: "5. The Importance of Brutus" },
                    { type: 'p', text: "The scene ends with Casca explaining why Brutus is so essential to their enterprise. He is so well-respected that his involvement will make their violent plot seem virtuous and noble." },
                    { type: 'quote', speaker: 'Casca', text: "O, he sits high in all the people's hearts, And that which would appear offence in us, His countenance, like richest alchemy, Will change to virtue and to worthiness." }
                ]
            },
            Hinglish: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "Yeh scene poori tarah se suspense aur atmosphere build karne ke baare mein hai. Shakespeare ek bhayanak toofan aur supernatural events ka istemal Rome mein badhte political chaos ko dikhane ke liye karte hain, jab Cassius apne saathi conspirators ko इकट्ठा kar raha hota hai." },
                    { type: 'h2', text: "1. Toofan aur Ajeeb Omens" },
                    { type: 'p', text: "Scene Rome ki ek gali mein ek darawne toofan ke beech shuru hota hai jisme bijli aur garaj ho rahi hai. Ek dara hua Casca shaant aur rational senator, Cicero, se milta hai. Casca bohot dara hua hai aur maanta hai ki devta ya toh yuddh mein hain ya duniya ko nasht karne ki koshish kar rahe hain. Woh kai 'prodigies' yaani ajeeb ghatnayein batata hai jo usne dekhi hain:" },
                     { type: 'ul', items: [
                        "Ek ghulam ka haath aag mein tha lekin jala nahi.",
                        "Capitol ke paas ek sher ko shaanti se chalte hue dekha gaya.",
                        "Sau dari hui mahilaon ne sadkon par aag mein lipte hue aadmiyon ko chalte dekha.",
                        "Ek ullu, jo raat ka pakshi hai, market mein din ke samay bolta hua dekha gaya."
                    ] },
                    { type: 'h2', text: "2. Toofan ke Alag-Alag Interpretations" },
                    { type: 'p', text: "Yeh scene isliye crucial hai kyunki yeh dikhata hai ki kaise alag-alag characters ek hi event ko apne vishwas aur motives ke hisab se interpret karte hain. Exams ke liye yeh ek key point hai." },
                    { type: 'quote', speaker: 'Cicero', text: "...log cheezon ko apne dhang se samajh sakte hain, jo un cheezon ke asli matlab se bilkul alag ho." },
                    { type: 'p', text: "Lekin Cassius, निडर aur opportunistic hai. Woh chalaaki se toofan ko apne political maksad ke liye istemal karta hai, aur in omens ko Caesar ke khilaf ek ishara samajhta hai." },
                    { type: 'quote', speaker: 'Cassius', text: `Woh is "monstrous" toofan ki tulna Rome ke "monstrous state" se karta hai jo "prodigious grown" Caesar ke under hai.` },
                    { type: 'h2', text: "3. Conspiracy ko Gati Milti Hai" },
                    { type: 'p', text: "Cassius chalaaki se Casca ke darr ko manipulate karta hai, aur use conspiracy mein shaamil kar leta hai. Plot mein tezi tab aati hai jab Casca batata hai ki senators agle hi din Caesar ko raja banane ka plan kar rahe hain. Yeh sunkar, Cassius kehta hai ki woh King Caesar ke under jeene se accha marna pasand karega." },
                    { type: 'quote', speaker: 'Cassius', text: "Mujhe pata hai ki tab main yeh khanjar kahan pehnunga; Cassius, Cassius ko gulami se azaad karega." },
                    { type: 'p', text: "Woh Caesar ke power mein aane ke liye khud Romans ko doshi thehrata hai, unhe kamzor aur dabboo kehta hai." },
                    { type: 'quote', speaker: 'Cassius', text: "Mujhe pata hai woh bhediya nahi hota agar woh yeh na dekhta ki Romans sirf bhed hain; Woh sher na hota, agar Romans hiran na hote." },
                    { type: 'p', text: "Maanne ke baad, Casca, Cassius se haath milata hai aur plot mein shaamil hone ka vaada karta hai." },
                    { type: 'h2', text: "4. Aakhri Kadam: Brutus ko Jeetna" },
                    { type: 'p', text: "Ek aur conspirator, Cinna, aata hai. Cassius use woh jaali letters deta hai aur निर्देश deta hai ki unhe wahan rakhe jahan Brutus unhe dekh sake: uski magistrate ki kursi par, uski khidki se, aur uske purvaj ke statue par. Yeh Brutus ko manipulate karke shaamil karne ka unka aakhri kadam hai." },
                    { type: 'h2', text: "5. Brutus ki Ahmiyat" },
                    { type: 'p', text: "Scene ke end mein Casca samjhata hai ki Brutus unke liye itna zaroori kyun hai. Log uski itni izzat karte hain ki uska is plot mein shaamil hona unke is hinsa bhare kaam ko bhi nek aur achha bana dega." },
                    { type: 'quote', speaker: 'Casca', text: "Oh, woh sabhi logon ke dilon mein bahut uncha basta hai, Aur jo humare mein aparaadh dikhega, Uska saath, jaise sabse ameer alchemy, usse punya aur yogyata mein badal dega." }
                ]
            }
        }
    };

    const currentSummary = summaries['Scene 3'][activeLang];

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



