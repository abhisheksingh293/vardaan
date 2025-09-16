import React from 'react';

// In a real project, you would install react-helmet-async: npm install react-helmet-async
// This is a simulated Helmet component for this environment to demonstrate SEO features.
const Helmet = ({ children }) => {
  React.useEffect(() => {
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
    chapterTitle: "Class Notes: The Slave Dynasty",
    tocTitle: "Table of Contents",
    metaDescription: "Detailed class notes on the Slave Dynasty for Class 7 ICSE, based on Vardaan Learning Institute materials. Covers all major rulers like Qutb-ud-din Aibak, Iltutmish, Razia Sultana, and Balban, with key events and policies.",
    sections: [
      {
        id: '1', title: "The Beginning of the Delhi Sultanate", content: [
          { type: 'list', items: [
            "<strong>The Start of the Dynasty:</strong> After Mohammad Ghori's death in 1206 CE without an heir, his general <strong>Qutb-ud-din Aibak</strong> took the throne.",
            "<strong>Slave or Mamluk Dynasty:</strong> The dynasty Aibak started is called the <strong>Slave Dynasty</strong> or <strong>Mamluk Dynasty</strong> (from the Arabic word 'Mamluk' meaning slave). This is because its key rulers—Qutb-ud-din, Iltutmish, and Balban—were once slaves.",
            "<strong>The Delhi Sultanate:</strong> This dynasty was the first of five that made up the <strong>Delhi Sultanate</strong>. The five dynasties were:<br>- The Slave dynasty (1206-1290 CE)<br>- The Khalji dynasty (1290-1320 CE)<br>- The Tughluq dynasty (1320-1413 CE)<br>- The Sayyid dynasty (1414-1451 CE)<br>- The Lodi dynasty (1451-1526 CE)"
          ]}
        ]
      },
      {
        id: '2', title: "Important Rulers of the Dynasty",
        subSections: [
          {
            id: '2.1', title: "Qutb-ud-din Aibak (1206-1210 CE)", content: [
              { type: 'paragraph', text: 'He was the first Sultan of the Slave dynasty. He successfully suppressed internal revolts and checked external invaders.' },
              { type: 'list', items: [
                  "He was very generous with charity, earning him the name <strong>‘Lakh Baksh’</strong> (giver of lakhs).",
                  "<strong>Architecture:</strong> He built the <strong>Quwwat-ul-Islam</strong> mosque in Delhi and the <strong>Arhai Din Ka Jhonpra</strong> mosque in Ajmer. He also started the construction of the <strong>Qutb Minar</strong> but died before it was finished.",
                  "<strong>Death:</strong> He died after falling from his horse while playing <strong>Chaugan (Polo)</strong>."
              ]}
            ]
          },
          {
            id: '2.2', title: "Shams-ud-din Iltutmish (1211-1236 CE)", content: [
              { type: 'paragraph', text: 'Iltutmish, who was Qutb-ud-din’s slave and son-in-law, succeeded him.' },
              { type: 'list', items: [
                "<strong>Administration:</strong> To win the support of Turkish nobles, he started the <strong>iqtadari system</strong>, where he divided territories into <strong>iqtas</strong> and gave them to nobles to manage and collect revenue. He also introduced silver coins.",
                "<strong>Saving India from Mongols:</strong> In 1221 CE, he diplomatically saved India from a Mongol invasion by <strong>Genghis Khan</strong> by refusing to give shelter to the Shah of Persia, whom the Mongols were chasing.",
                "<strong>Conquests:</strong> He defeated the rulers of Ghazni and Multan and suppressed revolts in Bengal and from Rajput rulers.",
                "<strong>Architecture:</strong> He completed the <strong>Qutb Minar</strong>, built his own tomb in Delhi, and a mosque at Badaun.",
                "<strong>Legacy:</strong> He is considered the true saviour of the early Sultanate as he consolidated the empire and protected it from major threats."
              ]}
            ]
          },
          {
            id: '2.3', title: "Razia Sultana (1236-1240 CE)", content: [
               { type: 'paragraph', text: 'Iltutmish nominated his daughter Razia as his successor, but the nobles initially crowned her brother, who proved unworthy. Razia then took the throne in 1236 CE.' },
               { type: 'list', items: [
                "She was an able and wise ruler who led her army in wars and established law and order.",
                "<strong>Downfall:</strong> The nobles resented being ruled by a woman. Her favoritism towards a slave named <strong>Yakut</strong> led to a rebellion against her. She married the rebel leader <strong>Altuniya</strong> to solve the crisis, but they were defeated and killed in 1240 CE."
              ]}
            ]
          },
          {
            id: '2.4', title: "Nasir-ud-din Mahmud (1246-1266 CE)", content: [
              { type: 'list', items: [
                "After a period of chaos, the powerful Turkish nobles, known as the <strong>Chalisa</strong> or <strong>Group of Forty</strong>, put Nasir-ud-din on the throne in 1246 CE.",
                "He was young and left the administration in the hands of his Prime Minister, <strong>Balban</strong> (who was also his father-in-law).",
                "Balban ruled efficiently, crushing rebellions and building forts to protect against Mongol attacks."
              ]}
            ]
          },
          {
            id: '2.5', title: "Ghias-ud-din Balban (1266-1286 CE)", content: [
              { type: 'paragraph', text: "Balban became Sultan after Nasir-ud-din's death in 1265 CE." },
              { type: 'list', items: [
                  "<strong>Policies and Control:</strong><br>- He adopted a ruthless <strong>'Blood and Iron' policy</strong> to crush rebels, invaders, and traitors.<br>- He broke the power of the defiant nobles of the <strong>'Group of Forty'</strong>.<br>- To prevent Mongol attacks, he built and repaired forts on the frontier and placed a strong army there."
              ]},
              { type: 'list', items: [
                  "<strong>Court Rules:</strong><br>- He believed in the <strong>'divine right of kingship'</strong>, meaning the king was God's representative on Earth.<br>- He introduced strict discipline and the Persian custom of <strong>sijdah</strong> (kneeling and touching the forehead to the ground in salutation to the Sultan)."
              ]}
            ]
          }
        ]
      },
      {
        id: '3', title: "The End of the Slave Dynasty", content: [
          { type: 'list', items: [
            "Balban was a successful ruler under whom the empire was safe and prosperous.",
            "However, his successors were weak and inefficient, and the dynasty collapsed soon after his death in 1286 CE.",
            "A Khalji noble, <strong>Jalaluddin Khalji</strong>, murdered Balban’s grandson <strong>Kaikubad</strong> and seized the throne, marking the end of the Slave dynasty."
          ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Class Notes: The Slave Dynasty",
    tocTitle: "Table of Contents",
    metaDescription: "Class 7 ICSE ke liye Slave Dynasty par notes. Qutb-ud-din Aibak, Iltutmish, Razia Sultana, aur Balban jaise sabhi major rulers, important events aur policies ke baare mein.",
    sections: [
       {
        id: '1', title: "The Beginning of the Delhi Sultanate", content: [
          { type: 'list', items: [
            "<strong>Dynasty ki Shuruat:</strong> 1206 CE mein Mohammad Ghori ki death ke baad bina kisi heir ke, unke general <strong>Qutb-ud-din Aibak</strong> ne throne le liya.",
            "<strong>Slave ya Mamluk Dynasty:</strong> Aibak ne jo dynasty shuru ki use <strong>Slave Dynasty</strong> ya <strong>Mamluk Dynasty</strong> kehte hain (Arabic word 'Mamluk' se, jiska matlab hai slave). Aisa isliye kyunki iske main rulers—Qutb-ud-din, Iltutmish, aur Balban—pehle slaves the.",
            "<strong>The Delhi Sultanate:</strong> Yeh dynasty <strong>Delhi Sultanate</strong> banane wali paanch dynasties mein se pehli thi. Paanch dynasties thi:<br>- The Slave dynasty (1206-1290 CE)<br>- The Khalji dynasty (1290-1320 CE)<br>- The Tughluq dynasty (1320-1413 CE)<br>- The Sayyid dynasty (1414-1451 CE)<br>- The Lodi dynasty (1451-1526 CE)"
          ]}
        ]
      },
      {
        id: '2', title: "Important Rulers of the Dynasty",
        subSections: [
          {
            id: '2.1', title: "Qutb-ud-din Aibak (1206-1210 CE)", content: [
              { type: 'paragraph', text: 'Woh Slave dynasty ka pehla Sultan tha. Usne successfully internal revolts ko dabaya aur external invaders ko roka.' },
              { type: 'list', items: [
                  "Woh charity mein bahut generous tha, jiski wajah se use <strong>‘Lakh Baksh’</strong> (lakhon ka giver) naam mila.",
                  "<strong>Architecture:</strong> Usne Delhi mein <strong>Quwwat-ul-Islam</strong> mosque aur Ajmer mein <strong>Arhai Din Ka Jhonpra</strong> mosque banwayi. Usne <strong>Qutb Minar</strong> ka construction bhi shuru kiya lekin uske complete hone se pehle hi uski death ho gayi.",
                  "<strong>Death:</strong> Uski death <strong>Chaugan (Polo)</strong> khelte hue ghode se girkar hui."
              ]}
            ]
          },
          {
            id: '2.2', title: "Shams-ud-din Iltutmish (1211-1236 CE)", content: [
              { type: 'paragraph', text: 'Iltutmish, jo Qutb-ud-din ka slave aur son-in-law tha, uske baad ruler bana.' },
              { type: 'list', items: [
                "<strong>Administration:</strong> Turkish nobles ka support jeetne ke liye, usne <strong>iqtadari system</strong> shuru kiya, jismein usne territories ko <strong>iqtas</strong> mein divide karke nobles ko manage karne aur revenue collect karne ke liye de diya. Usne silver coins bhi introduce kiye.",
                "<strong>Saving India from Mongols:</strong> 1221 CE mein, usne <strong>Genghis Khan</strong> ke Mongol invasion se India ko diplomatically bachaya, jab usne Shah of Persia ko shelter dene se mana kar diya, jiska picha Mongols kar rahe the.",
                "<strong>Conquests:</strong> Usne Ghazni aur Multan ke rulers ko haraya aur Bengal mein aur Rajput rulers ke revolts ko dabaya.",
                "<strong>Architecture:</strong> Usne <strong>Qutb Minar</strong> complete karwaya, Delhi mein apna tomb banwaya, aur Badaun mein ek mosque banwayi.",
                "<strong>Legacy:</strong> Use early Sultanate ka asli saviour maana jaata hai kyunki usne empire ko consolidate kiya aur use bade threats se bachaya."
              ]}
            ]
          },
          {
            id: '2.3', title: "Razia Sultana (1236-1240 CE)", content: [
               { type: 'paragraph', text: 'Iltutmish ne apni daughter Razia ko apna successor nominate kiya, lekin nobles ne shuru mein uske bhai ko crown pehnaya, jo unworthy saabit hua. Fir Razia 1236 CE mein throne par baithi.' },
               { type: 'list', items: [
                "Woh ek kaabil aur wise ruler thi jo wars mein apni army ko lead karti thi aur law and order banaye rakhti thi.",
                "<strong>Downfall:</strong> Nobles ek woman se rule karwana pasand nahi karte the. Ek slave <strong>Yakut</strong> ke liye uske favoritism ne unke khilaf ek rebellion shuru karwa diya. Usne crisis ko solve karne ke liye rebel leader <strong>Altuniya</strong> se shaadi kar li, lekin woh dono haar gaye aur 1240 CE mein maar diye gaye."
              ]}
            ]
          },
          {
            id: '2.4', title: "Nasir-ud-din Mahmud (1246-1266 CE)", content: [
              { type: 'list', items: [
                "Ek chaos ke period ke baad, powerful Turkish nobles, jinhe <strong>Chalisa</strong> ya <strong>Group of Forty</strong> kaha jaata tha, ne 1246 CE mein Nasir-ud-din ko throne par bithaya.",
                "Woh young tha aur usne administration apne Prime Minister, <strong>Balban</strong> (jo uska father-in-law bhi tha) ke haathon mein de diya.",
                "Balban ne efficiently rule kiya, rebellions ko kuchla aur Mongol attacks se bachne ke liye forts banwaye."
              ]}
            ]
          },
          {
            id: '2.5', title: "Ghias-ud-din Balban (1266-1286 CE)", content: [
              { type: 'paragraph', text: "Nasir-ud-din ki death ke baad 1265 CE mein Balban Sultan bana." },
              { type: 'list', items: [
                  "<strong>Policies and Control:</strong><br>- Usne rebels, invaders, aur traitors ko kuchalne ke liye ek ruthless <strong>'Blood and Iron' policy</strong> apnayi.<br>- Usne <strong>'Group of Forty'</strong> ke defiant nobles ki power ko tod diya.<br>- Mongol attacks ko rokne ke liye, usne frontier par forts banwaye aur repair karwaye aur wahan ek strong army rakhi."
              ]},
              { type: 'list', items: [
                  "<strong>Court Rules:</strong><br>- Woh <strong>'divine right of kingship'</strong> mein vishwas rakhta tha, jiska matlab tha ki king Earth par God ka representative hai.<br>- Usne strict discipline aur Persian custom <strong>sijdah</strong> (Sultan ko salaam karne ke liye ghutne tek kar maatha zameen par lagana) introduce kiya."
              ]}
            ]
          }
        ]
      },
      {
        id: '3', title: "The End of the Slave Dynasty", content: [
          { type: 'list', items: [
            "Balban ek successful ruler tha jiske under empire safe aur prosperous tha.",
            "Lekin, uske successors weak aur inefficient the, aur uski death 1286 CE ke aaspas dynasty collapse ho gayi.",
            "Ek Khalji noble, <strong>Jalaluddin Khalji</strong>, ne Balban ke grandson <strong>Kaikubad</strong> ka murder kiya aur throne par kabza kar liya, jisse Slave dynasty ka end ho gaya."
          ]}
        ]
      }
    ]
  }
};



// Theme definitions
const themes = {
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-header-bg': '#f97316', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f97316', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#ea580c', '--theme-heading-border': '#f97316', '--theme-check': '#f97316', '--theme-switch-lang-active': '#ea580c', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-header-bg': '#3b82f6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#3b82f6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-check': '#3b82f6', '--theme-switch-lang-active': '#256eb', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
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
      case 'image':
        return (
            <figure key={index} className="w-full my-4">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-contain rounded-lg shadow-md" />
            </figure>
        );
      default:
        return null;
    }
  });
};

const TocComponent = ({ currentContent, language, handleLanguageChange, theme, handleThemeChange, activeSection, openSections, toggleSection, isMobile, closeToc }) => {
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = React.useState(false);

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
                        const isMainActive = activeSection === section.id || (section.subSections && section.subSections.some(sub => sub.id === activeSection));
                        const isExpanded = openSections[section.id] || isMainActive;

                        return (
                            <li key={section.id} style={{ marginBottom: '4px' }}>
                                <div 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: '6px',
                                        transition: 'all 200ms',
                                        backgroundColor: isMainActive ? themes[theme].cssVars['--theme-toc-active-bg'] : 'transparent',
                                        color: isMainActive ? themes[theme].cssVars['--theme-toc-active-text'] : themes[theme].cssVars['--theme-toc-text']
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
                                    <a 
                                        href={`#section-${section.id}`} 
                                        onClick={(e) => { e.preventDefault(); handleLinkClick(section.id); }} 
                                        style={{
                                            display: 'block',
                                            flexGrow: 1,
                                            padding: '8px',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            fontWeight: isMainActive ? '600' : '400',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {section.id}. {section.title}
                                    </a>
                                    {section.subSections && (
                                        <button 
                                            onClick={() => toggleSection(section.id)} 
                                            style={{
                                                padding: '8px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: 'inherit'
                                            }}
                                        >
                                            <svg 
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    transition: 'transform 200ms',
                                                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'
                                                }} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                {isExpanded && section.subSections && (
                                    <ul 
                                        style={{
                                            paddingLeft: '24px',
                                            marginTop: '8px',
                                            marginLeft: '8px',
                                            borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
                                            listStyle: 'none',
                                            margin: '8px 0 0 8px',
                                            padding: '0 0 0 24px'
                                        }}
                                    >
                                        {section.subSections.map((subSection, index) => (
                                            <li key={subSection.id} style={{ marginBottom: '8px' }}>
                                                <a 
                                                    href={`#section-${subSection.id}`} 
                                                    onClick={(e) => { e.preventDefault(); handleLinkClick(subSection.id); }} 
                                                    style={{
                                                        display: 'block',
                                                        padding: '8px',
                                                        borderRadius: '6px',
                                                        textDecoration: 'none',
                                                        transition: 'all 200ms',
                                                        backgroundColor: activeSection === subSection.id ? themes[theme].cssVars['--theme-toc-active-bg'] : 'transparent',
                                                        color: activeSection === subSection.id ? themes[theme].cssVars['--theme-toc-active-text'] : themes[theme].cssVars['--theme-toc-text'],
                                                        fontWeight: activeSection === subSection.id ? '600' : '400',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (activeSection !== subSection.id) {
                                                            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (activeSection !== subSection.id) {
                                                            e.target.style.backgroundColor = 'transparent';
                                                        }
                                                    }}
                                                >
                                                    {subSection.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
  const [language, setLanguage] = React.useState('en');
  const [theme, setTheme] = React.useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const [openSections, setOpenSections] = React.useState({});
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);

  const currentContent = notesData[language];
  
  // Effect to apply theme changes
  React.useEffect(() => {
    const currentTheme = themes[theme];
    for (const key in currentTheme.cssVars) {
      document.documentElement.style.setProperty(key, currentTheme.cssVars[key]);
    }
    document.body.style.backgroundColor = currentTheme.cssVars['--theme-bg'];
  }, [theme]);

  // Effect for scrollspy functionality
  React.useEffect(() => {
    const handleScroll = () => {
        const headerOffset = 150; // A fixed offset from the top
        let newActiveSection = '';

        const allSectionIds = currentContent.sections.flatMap(s => [s.id, ...(s.subSections ? s.subSections.map(sub => sub.id) : [])]);

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
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language, currentContent.sections]);
  
  // Effect to handle window resize for mobile/desktop view
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({...prev, [sectionId]: !prev[sectionId]}));
  };
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vardaanlearning.com/notes/class-7-slave-dynasty" 
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088016/qutb_minar_delhi.jpg", 
    "author": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vardaanlearning.com/logo.png"
      }
    },
    "datePublished": "2025-09-06",
    "dateModified": "2025-09-06"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 7 Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 7, ICSE, Slave Dynasty, Delhi Sultanate, Qutb-ud-din Aibak, Iltutmish, Razia Sultana, Balban, Vardaan Learning Institute, Notes" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;600;700&display=swap');
        body { background-color: var(--theme-bg); transition: background-color 0.3s; font-family: 'Inter', sans-serif; }
        .heading-font { font-family: 'Lora', serif; }
        h1, h3 { font-family: 'Lora', serif !important; }
        .header-bg {
            background-color: var(--theme-header-bg);
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E");
        }
      `}</style>
      
      <header 
          style={{
            marginTop: '70px',
              backgroundColor: themes[theme].cssVars['--theme-header-bg'],
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
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
      
      <div className="flex flex-col lg:flex-row bg-[var(--theme-bg)]" >
        {/* Mobile TOC */}
        <aside className={`lg:hidden fixed top-0 left-0 h-full w-72 sm:w-80 z-50 transform transition-transform duration-300 ease-in-out ${isTocOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <TocComponent 
                currentContent={currentContent} 
                language={language} 
                handleLanguageChange={setLanguage}
                theme={theme} 
                handleThemeChange={setTheme}
                activeSection={activeSection}
                openSections={openSections}
                toggleSection={toggleSection}
                isMobile={true}
                closeToc={() => setIsTocOpen(false)}
            />
        </aside>
        {isTocOpen && <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsTocOpen(false)}></div>}

        {/* Desktop TOC */}
        <aside className="hidden lg:block w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="lg:sticky top-[70px] h-[calc(100vh-70px)]">
                <TocComponent 
                    currentContent={currentContent} 
                    language={language} 
                    handleLanguageChange={setLanguage}
                    theme={theme} 
                    handleThemeChange={setTheme}
                    activeSection={activeSection}
                    openSections={openSections}
                    toggleSection={toggleSection}
                    isMobile={false}
                />
            </div>
        </aside>
        
        {/* Main Content */}
        <main className="w-full min-w-0">
            <article className="p-4 sm:p-6 md:p-8">
                {currentContent.sections.map((section) => (
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[90px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <section key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[90px]">
                                     <h3 className="heading-font text-2xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-2 border-[var(--theme-heading-border)]">{subSection.title}</h3>
                                     <ContentRenderer content={subSection.content} />
                                </section>
                            ))}
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

