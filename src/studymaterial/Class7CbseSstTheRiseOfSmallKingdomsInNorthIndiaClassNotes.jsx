import React, { useState, useEffect, useRef } from 'react';

// In a real project, you would install react-helmet-async: npm install react-helmet-async
// This is a simulated Helmet component for this environment to demonstrate SEO features.
const Helmet = ({ children }) => {
  useEffect(() => {
    // This effect manages the document's head section for SEO.
    const titleElement = document.querySelector('title');
    
    // Clean up previously added meta tags and scripts to avoid duplicates on re-render.
    document.querySelectorAll('meta[data-managed-by-helmet]').forEach(el => el.remove());
    document.querySelectorAll('script[data-managed-by-helmet]').forEach(el => el.remove());

    React.Children.forEach(children, child => {
      if (!child) return;

      if (child.type === 'title') {
        if (titleElement) {
            titleElement.innerText = child.props.children;
        }
      }

      if (child.type === 'meta') {
        const meta = document.createElement('meta');
        meta.setAttribute('name', child.props.name);
        meta.setAttribute('content', child.props.content);
        meta.setAttribute('data-managed-by-helmet', 'true'); // Mark as managed
        document.head.appendChild(meta);
      }
      
      if (child.type === 'script' && child.props.type === 'application/ld+json') {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.innerHTML = child.props.children;
          script.setAttribute('data-managed-by-helmet', 'true'); // Mark as managed
          document.head.appendChild(script);
      }
    });
  }, [children]);

  return null;
};


// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 10: The Rise of Small Kingdoms in North India",
    tocTitle: "Table of Contents",
    metaDescription: "Detailed Class 7 notes on the rise of small kingdoms in North India after Harshvardhan, focusing on the Rashtrakutas, Palas, Pratiharas, Rajputs, and the Tripartite Struggle. For CBSE students.",
    sections: [
      { id: '1', title: "The Age of Three Empires", content: [
          { type: 'paragraph', text: "After the death of Harshvardhan, his empire disintegrated due to a weak economy and poor administration." },
          { type: 'paragraph', text: "This led to political instability in north India." },
          { type: 'paragraph', text: "Between 750 CE and 1000 CE, three major powers rose: the Rashtrakutas, the Palas, and the Pratiharas. This period is called the Age of Three Empires." }
      ]},
      { id: '2', title: "The Rashtrakutas", content: [
          { type: 'list', items: [
              "<strong>Founder:</strong> Dantidurga (established the empire in 753 CE in the northern Deccan).",
              "<strong>Famous Rulers:</strong> Govinda III and Amoghavarsha."
          ]},
          { type: 'heading', text: "Key Features" },
          { type: 'list', items: [
              "They were great warriors, administrators, and patrons of art.",
              "Took grand titles like <em>Maharajadhiraj</em> and <em>Chakravarti</em>.",
              "Religiously tolerant, supporting Hinduism, Buddhism, Jainism, and Islam.",
              "Built the famous rock-cut temples of Ellora.",
              "King Amoghavarsha wrote <em>Kavirajamarga</em> in Kannada."
          ]},
          { type: 'paragraph', text: "<strong>Decline:</strong> Defeated by the Chalukyas by the end of the 10th century." }
      ]},
      { id: '3', title: "The Palas", content: [
          { type: 'list', items: [
              "<strong>Founder:</strong> Gopala, who was elected by the people of Bengal to restore order.",
              "<strong>Greatest Ruler:</strong> Dharamapala."
          ]},
          { type: 'heading', text: "Key Features" },
          { type: 'list', items: [
              "Dharamapala founded the Vikramshila Vihar, a center for Buddhist education.",
              "They were followers of Buddhism and helped spread it.",
              "They revived the famous Nalanda University.",
              "They were great patrons of art and education."
          ]},
          { type: 'paragraph', text: "<strong>Decline:</strong> The dynasty weakened after the death of Dharamapala's son, Devapala." }
      ]},
      { id: '4', title: "The Pratiharas", content: [
          { type: 'list', items: [
              "<strong>Also Known As:</strong> Gurjara-Pratiharas (originated from Gujarat and Rajasthan).",
              "<strong>Founder:</strong> Nagabhatta-I.",
              "<strong>Greatest Ruler:</strong> Mihir Bhoj."
          ]},
           { type: 'heading', text: "Key Features" },
           { type: 'list', items: [
              "Mihir Bhoj captured the important city of Kanauj.",
              "They were great warriors who stopped Arab invasions for nearly 300 years.",
              "They were great patrons of art and architecture, responsible for temples in Khajuraho, Konark, and Puri.",
              "Regional languages like Gujarati and Marathi developed during their rule."
          ]},
          { type: 'paragraph', text: "<strong>Decline:</strong> Constant wars with the Palas and Rashtrakutas weakened them, and their empire broke into smaller kingdoms." }
      ]},
      { id: '5', title: "Tripartite Struggle", content: [
          { type: 'paragraph', text: "This was a long war between the Rashtrakutas, Palas, and Pratiharas." },
          { type: 'list', items: [
            "<strong>Main Goal:</strong> To capture the city of Kanauj, which was a symbol of power.",
            "<strong>Result:</strong> The constant fighting weakened all three empires and led to their eventual collapse."
          ]}
      ]},
      { id: '6', title: "The Rajputs", content: [
          { type: 'paragraph', text: "After the decline of the three empires, north India was divided among many Rajput kingdoms. They were brave but constantly fought each other." },
          { type: 'heading', text: "Origin" },
          { type: 'paragraph', text: "The word ‘Rajput’ means ‘son of a king’. Their exact origin is debated." },
          { type: 'list', items: [
              "Some claim to be <em>Suryavanshi</em> (from the sun god) or <em>Chandravanshi</em> (from the moon god).",
              "Another theory states that the four main clans were <em>Agnikulas</em> (born from a sacred fire): Pratiharas, Chauhans, Malwas, and Chalukyas."
          ]},
          { type: 'heading', text: "The Chauhans" },
          { type: 'list', items: [
              "A powerful Rajput clan. Their greatest ruler was Prithviraj Chauhan.",
              "He defeated Muhammad Ghori in the first battle of Tarain.",
              "His court poet Chand Bardai wrote the epic poem <em>Prithviraj Raso</em>."
          ]},
          { type: 'paragraph', text: "<strong>Disunity:</strong> The failure of Rajput rulers to unite against common enemies allowed foreign invaders to succeed." }
      ]},
       { id: '7', title: "Governance and Society", content: [
          { type: 'list', items: [
              "<strong>Administration:</strong> The king was the supreme head of the military and judiciary.",
              "<strong>Economy:</strong> There was a huge gap between the rich (royals, traders) and the poor (villagers).",
              "<strong>Feudal System:</strong> Kings granted land to lords (Thakurs or Rais) in exchange for military help. This system weakened the kings' power over time."
          ]},
          { type: 'heading', text: "Society"},
          { type: 'list', items: [
              "The caste system was rigid.",
              "The condition of women was poor. They were denied education, and evil practices like <em>sati</em>, child marriage, and <em>Jauhar</em> (mass self-immolation) existed."
          ]},
           { type: 'list', items: [
                "<strong>Religion:</strong> Most Rajputs worshipped Hindu gods like Vishnu and Shiva. During this time, Bhakti saints emerged, preaching devotion and equality.",
                "<strong>Education:</strong> Centered around temples and monasteries. Nalanda and Vikramshila were famous universities."
           ]},
           { type: 'heading', text: "Art and Architecture"},
           { type: 'list', items: [
               "Famous for mural paintings (on walls) and miniature paintings (in books).",
               "Built magnificent temples like the Lingaraj Temple (Bhubaneswar), Sun Temple (Konark), and the Khajuraho temples."
           ]}
      ]}
    ]
  },
  hi: {
    chapterTitle: "Chapter 10: The Rise of Small Kingdoms in North India",
    tocTitle: "Table of Contents",
    metaDescription: "सीबीएसई कक्षा 7 के छात्रों के लिए उत्तर भारत में छोटे राज्यों के उदय पर विस्तृत हिंग्लिश नोट्स।",
    sections: [
      { id: '1', title: "The Age of Three Empires", content: [
          { type: 'paragraph', text: "Harshvardhan ki death ke baad, unka empire ek weak economy aur kharab administration ke kaaran toot gaya." },
          { type: 'paragraph', text: "Isse north India mein political instability aa gayi." },
          { type: 'paragraph', text: "750 CE aur 1000 CE ke beech, teen major powers ubhri: Rashtrakutas, Palas, aur Pratiharas. Is period ko Age of Three Empires kaha jaata hai." }
      ]},
      { id: '2', title: "The Rashtrakutas", content: [
          { type: 'list', items: [
              "<strong>Founder:</strong> Dantidurga (unhone 753 CE mein northern Deccan mein empire establish kiya).",
              "<strong>Famous Rulers:</strong> Govinda III aur Amoghavarsha."
          ]},
          { type: 'heading', text: "Key Features" },
          { type: 'list', items: [
              "Ve mahaan warriors, administrators, aur art ke patrons the.",
              "Unhone <em>Maharajadhiraj</em> aur <em>Chakravarti</em> jaise grand titles liye.",
              "Dharmik roop se tolerant the, Hinduism, Buddhism, Jainism, aur Islam ko support karte the.",
              "Unhone Ellora ke famous rock-cut temples banwaye.",
              "Raja Amoghavarsha ne Kannada mein <em>Kavirajamarga</em> likhi."
          ]},
          { type: 'paragraph', text: "<strong>Decline:</strong> 10th century ke end tak Chalukyas se haar gaye." }
      ]},
      { id: '3', title: "The Palas", content: [
          { type: 'list', items: [
              "<strong>Founder:</strong> Gopala, jinhe Bengal ke logon ne order restore karne ke liye chuna tha.",
              "<strong>Greatest Ruler:</strong> Dharamapala."
          ]},
          { type: 'heading', text: "Key Features" },
          { type: 'list', items: [
              "Dharamapala ne Vikramshila Vihar ki sthapna ki, jo Buddhist education ka center tha.",
              "Ve Buddhism ke followers the aur use failane mein madad ki.",
              "Unhone famous Nalanda University ko revive kiya.",
              "Ve art aur education ke mahaan patrons the."
          ]},
          { type: 'paragraph', text: "<strong>Decline:</strong> Dharamapala ke bete, Devapala, ki death ke baad dynasty kamzor ho gayi." }
      ]},
      { id: '4', title: "The Pratiharas", content: [
          { type: 'list', items: [
              "<strong>Also Known As:</strong> Gurjara-Pratiharas (Gujarat aur Rajasthan se originate hue).",
              "<strong>Founder:</strong> Nagabhatta-I.",
              "<strong>Greatest Ruler:</strong> Mihir Bhoj."
          ]},
           { type: 'heading', text: "Key Features" },
           { type: 'list', items: [
              "Mihir Bhoj ne important city Kanauj par kabza kar liya.",
              "Ve mahaan yoddha the jinhone lagbhag 300 saal tak Arab hamlon ko roka.",
              "Ve art aur architecture ke mahaan patrons the, Khajuraho, Konark, aur Puri ke mandiron ke liye responsible the.",
              "Unke shasan kaal mein Gujarati aur Marathi jaise regional languages develop hui."
          ]},
          { type: 'paragraph', text: "<strong>Decline:</strong> Palas aur Rashtrakutas ke saath lagatar yudhon ne unhe kamzor kar diya, aur unka samrajya chhote rajyon mein toot gaya." }
      ]},
      { id: '5', title: "Tripartite Struggle", content: [
          { type: 'paragraph', text: "Yeh Rashtrakutas, Palas, aur Pratiharas ke beech ek lamba yudh tha." },
          { type: 'list', items: [
            "<strong>Main Goal:</strong> Kanauj sheher par kabza karna, jo power ka symbol tha.",
            "<strong>Result:</strong> Lagatar ladai ne teeno empires ko kamzor kar diya aur unke patan ka kaaran bani."
          ]}
      ]},
      { id: '6', title: "The Rajputs", content: [
          { type: 'paragraph', text: "Teen empires ke decline ke baad, north India kai Rajput kingdoms mein bant gaya. Ve bahadur the lekin aapas mein lagatar ladte rehte the." },
          { type: 'heading', text: "Origin" },
          { type: 'paragraph', text: "‘Rajput’ shabd ka matlab hai ‘raja ka beta’. Unka aasal origin debated hai." },
          { type: 'list', items: [
              "Kuch <em>Suryavanshi</em> (surya dev se) ya <em>Chandravanshi</em> (chandra dev se) hone ka daawa karte hain.",
              "Ek aur theory kehti hai ki chaar main clans <em>Agnikulas</em> (ek pavitra aag se paida hue) the: Pratiharas, Chauhans, Malwas, aur Chalukyas."
          ]},
          { type: 'heading', text: "The Chauhans" },
          { type: 'list', items: [
              "Ek shaktishali Rajput clan. Unke sabse mahaan shasak Prithviraj Chauhan the.",
              "Unhone Tarain ki pehli ladai mein Muhammad Ghori ko haraya.",
              "Unke darbari kavi Chand Bardai ne mahakavya <em>Prithviraj Raso</em> likha."
          ]},
          { type: 'paragraph', text: "<strong>Disunity:</strong> Rajput shasakon ka common enemies ke khilaaf ekjut na ho paana videshi aakramankariyon ko safal hone diya." }
      ]},
       { id: '7', title: "Governance and Society", content: [
          { type: 'list', items: [
              "<strong>Administration:</strong> Raja military aur judiciary ka supreme head tha.",
              "<strong>Economy:</strong> Ameer (royals, traders) aur gareeb (gaon wale) ke beech ek bada gap tha.",
              "<strong>Feudal System:</strong> Raja military help ke badle mein lords (Thakurs ya Rais) ko zameen dete the. Is system ne samay ke saath rajaon ki power ko kamzor kar diya."
          ]},
          { type: 'heading', text: "Society"},
          { type: 'list', items: [
              "Jaati vyavastha (caste system) kathor thi.",
              "Mahilaon ki sthiti kharab thi. Unhe education se vanchit rakha gaya, aur <em>sati</em>, baal vivaah (child marriage), aur <em>Jauhar</em> (saamuhik aatmadaah) jaisi buri prathayein maujood thi."
          ]},
           { type: 'list', items: [
                "<strong>Religion:</strong> Zyadaatar Rajput Hindu devtaon jaise Vishnu aur Shiva ki pooja karte the. Is dauraan, Bhakti sant ubhre, jinhone bhakti aur samaanta ka prachaar kiya.",
                "<strong>Education:</strong> Mandiron aur mathon ke aas-paas centered tha. Nalanda aur Vikramshila famous universities thi."
           ]},
           { type: 'heading', text: "Art and Architecture"},
           { type: 'list', items: [
               "Mural paintings (deewaron par) aur miniature paintings (kitabon mein) ke liye famous the.",
               "Lingaraj Temple (Bhubaneswar), Sun Temple (Konark), aur Khajuraho temples jaise shaandaar mandir banwaye."
           ]}
      ]}
    ]
  }
};


// Theme definitions
const themes = {
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-header-bg': '#f97316', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f97316', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#ea580c', '--theme-heading-border': '#f97316', '--theme-check': '#f97316', '--theme-switch-lang-active': '#ea580c', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-header-bg': '#3b82f6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#3b82f6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-check': '#3b82f6', '--theme-switch-lang-active': '#2563eb', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
    forestGreen: { name: 'Forest Green', previewColor: '#22c55e', cssVars: { '--theme-bg': '#f0fdf4', '--theme-header-bg': '#22c55e', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#22c55e', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#16a34a', '--theme-heading-border': '#4ade80', '--theme-check': '#22c55e', '--theme-switch-lang-active': '#16a34a', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
    amber: { name: 'Amber', previewColor: '#f59e0b', cssVars: { '--theme-bg': '#fefce8', '--theme-header-bg': '#f59e0b', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f59e0b', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#d97706', '--theme-heading-border': '#facc15', '--theme-check': '#f59e0b', '--theme-switch-lang-active': '#d97706', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
    royalPurple: { name: 'Royal Purple', previewColor: '#8b5cf6', cssVars: { '--theme-bg': '#f5f3ff', '--theme-header-bg': '#8b5cf6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#8b5cf6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#7c3aed', '--theme-heading-border': '#a78bfa', '--theme-check': '#8b5cf6', '--theme-switch-lang-active': '#7c3aed', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
    midnightBlueD: { name: 'Midnight Blue (D)', previewColor: '#60a5fa', cssVars: { '--theme-bg': '#111827', '--theme-header-bg': '#2563eb', '--theme-toc-bg': '#1f2937', '--theme-toc-text': '#9ca3af', '--theme-toc-active-bg': '#3b82f6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(31, 41, 55, 0.7)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#60a5fa', '--theme-heading-border': '#3b82f6', '--theme-check': '#60a5fa', '--theme-switch-lang-active': '#ffffff', '--theme-equation-bg': '#374151', '--theme-equation-text': '#e5e7eb' } },
    slateGrayD: { name: 'Slate Gray (D)', previewColor: '#94a3b8', cssVars: { '--theme-bg': '#1e293b', '--theme-header-bg': '#475569', '--theme-toc-bg': '#334155', '--theme-toc-text': '#94a3b8', '--theme-toc-active-bg': '#64748b', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(51, 65, 85, 0.7)', '--theme-text-color': '#e2e8f0', '--theme-heading-color': '#cbd5e1', '--theme-heading-border': '#94a3b8', '--theme-check': '#94a3b8', '--theme-switch-lang-active': '#ffffff', '--theme-equation-bg': '#475569', '--theme-equation-text': '#e5e7eb' } },
    tangerineD: { name: 'Tangerine (D)', previewColor: '#fb923c', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#ea580c', '--theme-toc-bg': '#334155', '--theme-toc-text': '#9ca3af', '--theme-toc-active-bg': '#f97316', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(51, 65, 85, 0.7)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#fb923c', '--theme-heading-border': '#f97316', '--theme-check': '#fb923c', '--theme-switch-lang-active': '#ffffff', '--theme-equation-bg': '#475569', '--theme-equation-text': '#e5e7eb' } },
    crimsonD: { name: 'Crimson (D)', previewColor: '#f87171', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#dc2626', '--theme-toc-bg': '#334155', '--theme-toc-text': '#9ca3af', '--theme-toc-active-bg': '#ef4444', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(51, 65, 85, 0.7)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f87171', '--theme-heading-border': '#ef4444', '--theme-check': '#f87171', '--theme-switch-lang-active': '#ffffff', '--theme-equation-bg': '#475569', '--theme-equation-text': '#e5e7eb' } },
    roseD: { name: 'Rose (D)', previewColor: '#f472b6', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#db2777', '--theme-toc-bg': '#334155', '--theme-toc-text': '#9ca3af', '--theme-toc-active-bg': '#ec4899', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(51, 65, 85, 0.7)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f472b6', '--theme-heading-border': '#ec4899', '--theme-check': '#f472b6', '--theme-switch-lang-active': '#ffffff', '--theme-equation-bg': '#475569', '--theme-equation-text': '#e5e7eb' } },
    violetD: { name: 'Violet (D)', previewColor: '#a78bfa', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#7c3aed', '--theme-toc-bg': '#334155', '--theme-toc-text': '#9ca3af', '--theme-toc-active-bg': '#8b5cf6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(51, 65, 85, 0.7)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#a78bfa', '--theme-heading-border': '#8b5cf6', '--theme-check': '#a78bfa', '--theme-switch-lang-active': '#ffffff', '--theme-equation-bg': '#475569', '--theme-equation-text': '#e5e7eb' } },
};

// Menu Icon for mobile TOC toggle
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

// Close Icon
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// The ContentRenderer component dynamically renders content blocks based on their type.
const ContentRenderer = ({ content }) => {
  if (!content) return null;

  return content.map((item, index) => {
    switch (item.type) {
      case 'paragraph':
        return <p key={index} className="text-[var(--theme-text-color)] mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }}></p>;
      case 'heading':
        return <h4 key={index} className="text-xl font-semibold mt-6 mb-3 text-[var(--theme-heading-color)]" dangerouslySetInnerHTML={{ __html: item.text }}></h4>;
      case 'list':
        return (
          <ul key={index} className="list-none space-y-3 mb-4 pl-2">
            {item.items.map((li, i) => (
              <li key={i} className="flex items-start text-[var(--theme-text-color)]">
                <span className="mr-3 mt-1 text-[var(--theme-check)]">✓</span>
                <span className="flex-1" dangerouslySetInnerHTML={{ __html: li }}></span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
};

const TocComponent = ({ currentContent, language, handleLanguageChange, theme, handleThemeChange, activeSection, isMobile, closeToc }) => {
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

    const handleLinkClick = (id) => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (isMobile) {
            closeToc();
        }
    };

    const paddingValue = window.innerWidth >= 640 ? '24px' : '16px';
    const tocStyles = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: isMobile ? '80px' : paddingValue,
        paddingBottom: paddingValue,
        paddingLeft: paddingValue,
        paddingRight: paddingValue,
        color: themes[theme].cssVars['--theme-toc-text'],
        transition: 'all 300ms',
        backdropFilter: isMobile ? 'blur(16px)' : 'none',
        backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.8)' : themes[theme].cssVars['--theme-toc-bg']
    };
     if (theme.endsWith('D')) { // check for dark themes
        tocStyles.backgroundColor = isMobile ? 'rgba(31, 41, 55, 0.8)' : themes[theme].cssVars['--theme-toc-bg'];
    }


    return (
        <div style={tocStyles}>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px'
                }}
            >
                <h3 
                    style={{
                        fontFamily: 'Lora, serif',
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        margin: 0,
                        color: 'inherit'
                    }}
                >
                    {currentContent.tocTitle}
                </h3>
                {isMobile && (
                    <button 
                        onClick={closeToc} 
                        style={{
                            padding: '4px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'inherit'
                        }}
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>

            <div 
                className="relative w-full rounded-full flex items-center p-1 mb-6"
                style={{
                    height: '40px',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)'
                }}
            >
                <span
                    style={{ 
                        transform: language === 'hi' ? 'translateX(100%)' : 'translateX(0%)',
                        position: 'absolute',
                        top: '4px',
                        left: '4px',
                        width: 'calc(50% - 4px)',
                        height: '32px',
                        backgroundColor: themes[theme].cssVars['--theme-toc-bg'],
                        borderRadius: '9999px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'transform 300ms ease-in-out'
                    }}>
                </span>
                <button
                    onClick={() => handleLanguageChange('en')}
                    style={{
                        width: '50%',
                        zIndex: 10,
                        fontSize: '14px',
                        fontWeight: '600',
                        textAlign: 'center',
                        transition: 'color 300ms',
                        color: language === 'en' ? themes[theme].cssVars['--theme-switch-lang-active'] : themes[theme].cssVars['--theme-toc-text'],
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px'
                    }}>
                    English
                </button>
                <button
                    onClick={() => handleLanguageChange('hi')}
                    style={{
                        width: '50%',
                        zIndex: 10,
                        fontSize: '14px',
                        fontWeight: '600',
                        textAlign: 'center',
                        transition: 'color 300ms',
                        color: language === 'hi' ? themes[theme].cssVars['--theme-switch-lang-active'] : themes[theme].cssVars['--theme-toc-text'],
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px'
                    }}>
                    Hinglish
                </button>
            </div>

            <nav 
                style={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    paddingRight: '8px',
                    marginRight: '-8px',
                    fontSize: '14px'
                }}
            >
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {currentContent.sections.map(section => {
                        const isMainActive = activeSection === section.id;
                        
                        return (
                            <li key={section.id} style={{ marginBottom: '4px' }}>
                                <a 
                                    href={`#section-${section.id}`} 
                                    onClick={(e) => { e.preventDefault(); handleLinkClick(section.id); }} 
                                    style={{
                                        display: 'block',
                                        padding: '8px',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        transition: 'all 200ms',
                                        backgroundColor: isMainActive ? themes[theme].cssVars['--theme-toc-active-bg'] : 'transparent',
                                        color: isMainActive ? themes[theme].cssVars['--theme-toc-active-text'] : themes[theme].cssVars['--theme-toc-text'],
                                        fontWeight: isMainActive ? '600' : '400',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isMainActive) {
                                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isMainActive) {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }
                                    }}
                                >
                                    {section.id}. {section.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div style={{ marginTop: '24px', position: 'relative' }}>
                <label 
                    style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        display: 'block',
                        color: themes[theme].cssVars['--theme-toc-text']
                    }}
                >
                    Theme
                </label>
                <button 
                    onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)} 
                    style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px',
                        border: '1px solid rgba(0, 0, 0, 0.2)',
                        borderRadius: '6px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        color: themes[theme].cssVars['--theme-toc-text']
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span 
                            style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                marginRight: '8px',
                                backgroundColor: themes[theme].previewColor
                            }}
                        ></span>
                        {themes[theme].name}
                    </div>
                    <svg 
                        style={{
                            width: '16px',
                            height: '16px',
                            transition: 'transform 200ms',
                            transform: isThemeDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {isThemeDropdownOpen && (
                    <div 
                        style={{
                            position: 'absolute',
                            bottom: '100%',
                            marginBottom: '8px',
                            width: '100%',
                            backgroundColor: themes[theme].cssVars['--theme-toc-bg'],
                            border: '1px solid rgba(0, 0, 0, 0.2)',
                            borderRadius: '6px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                            zIndex: 10
                        }}
                    >
                        {Object.keys(themes).map(themeKey => (
                            <button 
                                key={themeKey} 
                                onClick={() => { handleThemeChange(themeKey); setIsThemeDropdownOpen(false); }} 
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '8px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: themes[theme].cssVars['--theme-toc-text']
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                }}
                            >
                                <span 
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        marginRight: '8px',
                                        backgroundColor: themes[themeKey].previewColor
                                    }}
                                ></span>
                                {themes[themeKey].name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


// Main App Component
function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('forestGreen');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const currentContent = notesData[language];
  
  // Effect to apply theme changes
  useEffect(() => {
    const currentTheme = themes[theme];
    for (const key in currentTheme.cssVars) {
      document.documentElement.style.setProperty(key, currentTheme.cssVars[key]);
    }
    document.body.style.backgroundColor = currentTheme.cssVars['--theme-bg'];
  }, [theme]);

  // Effect for scrollspy functionality
  useEffect(() => {
    const handleScroll = () => {
        const headerOffset = 150; // A fixed offset from the top
        let newActiveSection = '';

        const allSectionIds = currentContent.sections.map(s => s.id);

        for (let i = allSectionIds.length - 1; i >= 0; i--) {
            const sectionId = allSectionIds[i];
            const element = document.getElementById(`section-${sectionId}`);
            if (element && element.getBoundingClientRect().top < headerOffset) {
                newActiveSection = sectionId;
                break;
            }
        }
        if (newActiveSection) {
            setActiveSection(newActiveSection);
        } else if (window.scrollY < 200) {
            setActiveSection(allSectionIds[0] || '');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language, currentContent.sections]);
  
  // Effect to handle window resize for mobile/desktop view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vardaanlearning.com/notes/cbse-class-7-history-small-kingdoms-north-india" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dty2m860s/image/upload/v1716462837/Kailasa_temple_Ellora_Aurangabad_2_ezp8wu.jpg",  // Representative image of Ellora temple
    "author": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vardaanlearning.com/logo.png" // Replace with your logo URL
      }
    },
    "datePublished": "2025-09-05",
    "dateModified": "2025-09-05"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 7 CBSE History`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="CBSE Class 7, History, North India Kingdoms, Rashtrakutas, Palas, Pratiharas, Rajputs, Tripartite Struggle, Vardaan Learning Institute, Notes" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;600;700&display=swap');
        body { background-color: var(--theme-bg); transition: background-color 0.3s; font-family: 'Inter', sans-serif; }
        .heading-font { font-family: 'Lora', serif; }
        h1, h3, h4 { font-family: 'Lora', serif !important; }
        .header-bg {
            background-color: var(--theme-header-bg);
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E");
        }
        .prose { color: currentColor; }
        .prose strong { color: currentColor; }
        em { font-style: italic; }
      `}</style>
      
      <header 
          style={{
            marginTop: '70px',
            backgroundColor: themes[theme].cssVars['--theme-header-bg'],
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            color: 'white',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: 'all 300ms',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '88px'
          }}
      >
          <h1 
              style={{
                  fontFamily: 'Lora, serif',
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  margin: 0
              }}
              dangerouslySetInnerHTML={{ __html: currentContent.chapterTitle }}
          ></h1>
      </header>
      
      <div className="flex flex-col lg:flex-row bg-[var(--theme-bg)]">
        {/* Mobile TOC */}
        <aside className={`lg:hidden fixed top-0 left-0 h-full w-72 sm:w-80 z-50 transform transition-transform duration-300 ease-in-out ${isTocOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <TocComponent 
                currentContent={currentContent} 
                language={language} 
                handleLanguageChange={setLanguage}
                theme={theme} 
                handleThemeChange={setTheme}
                activeSection={activeSection}
                isMobile={true}
                closeToc={() => setIsTocOpen(false)}
            />
        </aside>
        {isTocOpen && <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsTocOpen(false)}></div>}

        {/* Desktop TOC */}
        <aside className="hidden lg:block w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="lg:sticky top-0 h-screen">
                <TocComponent 
                    currentContent={currentContent} 
                    language={language} 
                    handleLanguageChange={setLanguage}
                    theme={theme} 
                    handleThemeChange={setTheme}
                    activeSection={activeSection}
                    isMobile={false}
                />
            </div>
        </aside>
        
        {/* Main Content */}
        <main className="w-full min-w-0">
            <article className="p-4 sm:p-6 md:p-8">
                {currentContent.sections.map((section) => (
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[80px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                        </div>
                    </section>
                ))}
            </article>
        </main>

        {/* Floating Action Button for Mobile/Tablet TOC */}
        {isMobile && (
            <div 
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    zIndex: 30,
                }}
            >
                <button 
                    onClick={() => setIsTocOpen(true)} 
                    style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: 'transform 150ms ease-in-out, background-color 300ms',
                        backgroundColor: themes[theme].cssVars['--theme-header-bg'],
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'scale(0.95)';
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    aria-label="Open Table of Contents"
                >
                    <MenuIcon />
                </button>
            </div>
        )}
      </div>
    </>
  );
}

export default App;





