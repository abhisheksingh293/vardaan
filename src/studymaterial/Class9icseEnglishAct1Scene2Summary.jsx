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

    // Detailed content for Scene 2
    const summaries = {
        'Scene 2': {
            English: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "This is a long and incredibly important scene where the conspiracy against Caesar truly begins. We are introduced to the main characters, and Cassius begins his clever manipulation of the noble Brutus." },
                    { type: 'h2', text: "1. The Triumphal Procession and a Chilling Warning" },
                    { type: 'p', text: "The scene opens in a public square for the Feast of Lupercal. Caesar enters with absolute authority. He shows his superstitious side by asking Antony to touch his wife, Calpurnia, during the ceremonial race to cure her infertility." },
                    { type: 'quote', speaker: 'Antony', text: "When Caesar says, 'Do this,' it is performed." },
                    { type: 'p', text: "A Soothsayer calls out with a famous warning:" },
                    { type: 'quote', speaker: 'Soothsayer', text: "Beware the ides of March." },
                    { type: 'p', text: "Caesar dismisses him as a 'dreamer,' showing his pride. This is the first of many warnings Caesar will ignore." },
                    { type: 'h2', text: "2. Cassius Begins to Manipulate Brutus" },
                    { type: 'p', text: "As the procession leaves, Brutus and Cassius stay behind. Cassius, a 'master plotter,' begins his subtle plan to turn the honourable Brutus against Caesar. Brutus admits he is at war with himself and reveals his deepest concern:" },
                    { type: 'quote', speaker: 'Brutus', text: "I do fear the people choose Caesar for their king." },
                    { type: 'h2', text: "3. Cassius's Argument: Caesar is a Weak Man, Not a God" },
                    { type: 'p', text: "Cassius tries to tear down Caesar's god-like image by showing him as a weak mortal. He tells two stories: one of saving Caesar from drowning in the Tiber River, and another of Caesar being weak with a fever in Spain, crying 'like a sick girl.'" },
                    { type: 'quote', speaker: 'Cassius', text: "[He] doth bestride the narrow world Like a Colossus, and we petty men Walk under his huge legs..." },
                    { type: 'h2', text: "4. Caesar's Suspicion and Casca's News" },
                    { type: 'p', text: "Caesar returns and shows he is a shrewd judge of character, pointing out Cassius as dangerous." },
                    { type: 'quote', speaker: 'Caesar', text: "Yond Cassius has a lean and hungry look; He thinks too much: such men are dangerous." },
                    { type: 'p', text: "After Caesar leaves, Casca reports that Antony offered Caesar a crown three times, and Caesar refused it each time. Then, Caesar fainted and had an epileptic fit." },
                    { type: 'h2', text: "5. Cassius's Soliloquy: The Plan is Revealed" },
                    { type: 'p', text: "Alone, Cassius delivers a soliloquy, revealing his true intentions. He plans to forge letters from 'concerned citizens' praising Brutus and hinting at Caesar's ambition. He will throw them into Brutus's house to push him into joining the conspiracy." }
                ]
            },
            Hinglish: {
                title: "Scene Summary",
                content: [
                    { type: 'p', text: "Yeh ek lamba aur bohot important scene hai jahan Caesar ke khilaf conspiracy sach mein shuru hoti hai. Humein main characters se introduce karaya jaata hai, aur Cassius, noble Brutus ko chalaaki se manipulate karna shuru karta hai." },
                    { type: 'h2', text: "1. Shaandaar Juloos aur ek Daraney wali Warning" },
                    { type: 'p', text: "Scene ek public square mein Lupercal ke festival ke saath shuru hota hai. Caesar poori authority ke saath enter karte hain. Woh apna superstitious side dikhate hain jab woh Antony se kehte hain ki woh unki wife Calpurnia ko ceremonial race ke dauraan touch karein taaki unki infertility theek ho jaye." },
                    { type: 'quote', speaker: 'Antony', text: "Jab Caesar kehte hain, 'Yeh karo,' toh woh ho jaata hai." },
                    { type: 'p', text: "Ek Soothsayer (bhavishyavakta) bheed se ek famous warning deta hai:" },
                    { type: 'quote', speaker: 'Soothsayer', text: "March ke ides se savdhaan raho." },
                    { type: 'p', text: "Caesar usko 'dreamer' keh kar dismiss kar dete hain, jo unka pride dikhata hai. Yeh un kai warnings mein se pehli hai jise Caesar ignore karenge." },
                    { type: 'h2', text: "2. Cassius, Brutus ko Manipulate Karna Shuru Karta Hai" },
                    { type: 'p', text: "Jaise hi juloos jaata hai, Brutus aur Cassius peeche ruk jaate hain. Cassius, ek 'master plotter', aadarneeya Brutus ko Caesar ke khilaf karne ka apna subtle plan shuru karta hai. Brutus maante hain ki woh apne aap se hi jung लड़ rahe hain aur apni sabse gehri chinta batate hain:" },
                    { type: 'quote', speaker: 'Brutus', text: "Mujhe darr hai ki log Caesar ko apna raja chun lenge." },
                    { type: 'h2', text: "3. Cassius ka Argument: Caesar ek Kamzor Insaan hai, Bhagwan Nahi" },
                    { type: 'p', text: "Cassius, Caesar ki bhagwan jaisi image ko todne ki koshish karta hai, use ek kamzor insaan dikha kar. Woh do kahaniyan sunata hai: ek baar Caesar ko Tiber नदी mein doobne se bachane ki, aur doosri jab Spain mein Caesar bukhar se kamzor ho kar 'ek bimar ladki ki tarah' ro rahe the." },
                    { type: 'quote', speaker: 'Cassius', text: "Woh is sankari duniya par ek Colossus ki tarah khada hai, aur hum chote log uske bade pairo ke neeche chalte hain..." },
                    { type: 'h2', text: "4. Caesar ka Shak aur Casca ki Khabar" },
                    { type: 'p', text: "Caesar laut te hain aur dikhate hain ki woh character ko pehchanne mein maahir hain, aur Cassius ko khatarnak batate hain." },
                    { type: 'quote', speaker: 'Caesar', text: "Woh Cassius patla aur bhookha dikhta hai; Woh bohot sochta hai: aise log khatarnak hote hain." },
                    { type: 'p', text: "Caesar ke jaane ke baad, Casca batata hai ki Antony ne Caesar ko teen baar crown offer kiya, aur Caesar ne har baar mana kar diya. Phir, Caesar behosh ho gaye aur unhe epileptic fit (mirgi ka daura) pada." },
                    { type: 'h2', text: "5. Cassius ki Soliloquy: Plan ka Khulasa" },
                    { type: 'p', text: "Akele mein, Cassius ek soliloquy bolta hai, jisse uske asli iraade pata chalte hain. Woh 'chintit nagrikon' ki taraf se jaali letters likhne ka plan banata hai jisme Brutus ki tareef hogi aur Caesar ke ambition par hint hoga. Woh un letters ko Brutus ke ghar mein phenk dega taaki woh conspiracy join kar lein." }
                ]
            }
        }
    };

    const currentSummary = summaries['Scene 2'][activeLang];

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


