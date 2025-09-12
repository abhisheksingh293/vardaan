import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Metals and Non-metals",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Classification of Elements",
        content: [
          { type: 'paragraph', text: 'All substances are made of elements, which are pure substances that cannot be broken down further. There are 118 known elements.' },
          { type: 'paragraph', text: 'Elements are grouped into two main categories: metals and non-metals.' }
        ]
      },
      {
        id: '2',
        title: "Occurrence of Elements",
        content: [
          { type: 'paragraph', text: 'Some elements, especially less reactive ones like gold and silver, are found in their free state (as pure elements) in the Earth\'s crust.' },
          { type: 'paragraph', text: 'Most elements, especially reactive ones, are found in nature in the form of their compounds (like oxides, sulphides, etc.).' },
          { type: 'list', items: [
              'A <strong>mineral</strong> is a naturally occurring substance found deep underground.',
              'An <strong>ore</strong> is a mineral from which a metal can be extracted easily and profitably.',
              '<strong>Metallurgy</strong> is the process of extracting a metal from its ore. This process involves three main steps:<br/>1. Concentration of ore: Removing impurities.<br/>2. Reduction: Treating the ore to get the metal.<br/>3. Refining: Purifying the metal.'
          ]}
        ]
      },
      {
        id: '3',
        title: "Physical Properties",
        content: [
            { type: 'paragraph', text: 'Here\'s a table summarizing the key physical differences:'},
            { type: 'table', headers: ['Property', 'Metals', 'Non-metals'], rows: [
                ['Physical State', 'Solids (except mercury, which is a liquid)', 'Solids, liquids, or gases'],
                ['Melting & Boiling Points', 'Generally have high melting and boiling points', 'Generally have low melting and boiling points'],
                ['Density', 'Generally have a high density', 'Generally have a low density'],
                ['Hardness', 'Generally hard (except sodium and potassium, which are soft)', 'Generally not hard; they are brittle and break easily (except diamond, which is very hard)'],
                ['Lustre', 'Have a shiny surface (lustrous)', 'Have a dull appearance (non-lustrous)'],
                ['Malleability', 'Can be hammered into thin sheets', 'Are not malleable; they are brittle and break'],
                ['Ductility', 'Can be drawn into thin wires', 'Are not ductile; they cannot be drawn into wires'],
                ['Tensile Strength', 'Have high tensile strength (can bear a lot of strain without breaking)', 'Have low tensile strength'],
                ['Conductivity', 'Good conductors of heat and electricity', 'Poor conductors of heat and electricity (insulators) (except graphite, which is a good conductor)'],
                ['Sonorosity', 'Produce a ringing sound when struck (sonorous)', 'Are not sonorous']
            ]}
        ]
      },
      {
          id: '4',
          title: 'Chemical Properties',
          subSections: [
              { id: '4.1', title: 'Reaction with Oxygen', content: [
                  { type: 'paragraph', text: 'Metals react with oxygen to form metallic oxides, which are basic in nature. These oxides turn red litmus paper blue.'},
                  { type: 'chemicalEquation', text: '2Mg(s) + O₂(g) → 2MgO(s)'},
                  { type: 'paragraph', text: 'Non-metals react with oxygen to form non-metallic oxides, which are acidic in nature. These oxides turn blue litmus paper red.'},
                  { type: 'chemicalEquation', text: 'C(s) + O₂(g) → CO₂(g)'}
              ]},
              { id: '4.2', title: 'Reaction with Water', content: [
                  { type: 'paragraph', text: 'Most metals react with water to produce a metallic hydroxide and hydrogen gas. Highly reactive metals like sodium and potassium react vigorously with cold water.'},
                  { type: 'chemicalEquation', text: 'Mg(s) + 2H₂O(l) → Mg(OH)₂(aq) + H₂(g)'},
                  { type: 'paragraph', text: 'Non-metals generally do not react with water.'}
              ]},
              { id: '4.3', title: 'Reaction with Acids', content: [
                  { type: 'paragraph', text: 'Most metals react with dilute acids to produce a salt and hydrogen gas.'},
                  { type: 'chemicalEquation', text: 'Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)'},
                  { type: 'paragraph', text: 'Non-metals generally do not react with acids.'}
              ]},
              { id: '4.4', title: 'Reaction with Alkalis', content: [
                  { type: 'paragraph', text: 'Most metals react with alkalis to produce a salt and hydrogen gas.'},
                  { type: 'paragraph', text: 'Non-metals generally react with alkalis.'}
              ]},
              { id: '4.5', title: 'Reactivity of Metals & Displacement Reactions', content: [
                  { type: 'paragraph', text: 'The reactivity series is a list of metals arranged in the order of their decreasing reactivity.'},
                  { type: 'paragraph', text: 'A displacement reaction is a chemical reaction in which a more reactive metal displaces a less reactive metal from its salt solution. Example: When a magnesium ribbon is put into a copper sulphate solution, the blue color fades as magnesium displaces copper.'},
                  { type: 'chemicalEquation', text: 'Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s)'}
              ]}
          ]
      },
      {
        id: '5',
        title: "Noble Metals",
        content: [
            { type: 'list', items: [
                'Noble metals like gold, silver, and platinum are the least reactive metals.',
                'They do not react easily with air, water, or acids.',
                'Because they are unreactive and shiny, they are used to make jewellery.',
                'The purity of gold is measured in karats. 24-karat gold is pure gold, while 18-karat gold means 18 parts of gold are mixed with 6 parts of other metals.'
            ]}
        ]
      },
      {
        id: '6',
        title: "Alloys",
        content: [
            { type: 'list', items: [
                'An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal.',
                'Alloys are generally stronger and more resistant to corrosion than pure metals.',
                'Examples: Steel (iron + carbon), Brass (copper + zinc), Bronze (copper + tin).'
            ]}
        ]
      },
      {
        id: '7',
        title: "Uses of Metals, Non-metals, and Alloys",
        content: [
            { type: 'list', items: [
                '<strong>Metals:</strong> Used for making machinery, car bodies, utensils (copper, aluminium), electrical wires (copper, aluminium), and jewellery (gold, silver).',
                '<strong>Non-metals:</strong> Nitrogen and phosphorus are used in fertilizers. Iodine is an antiseptic. Sulphur is used in crackers and sulphuric acid. Carbon (graphite) is used in pencils and batteries. Oxygen is essential for life.',
                '<strong>Alloys:</strong> Steel is used for construction. Stainless steel for utensils. Brass for decorative statues and utensils.'
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Metals and Non-metals",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Classification of Elements",
        content: [
          { type: 'paragraph', text: 'Sabhi substances elements se bane hote hain, jo pure substances hain jinhe aur toda nahi ja sakta. 118 known elements hain.' },
          { type: 'paragraph', text: 'Elements ko do main categories mein group kiya gaya hai: metals aur non-metals.' }
        ]
      },
      {
        id: '2',
        title: "Occurrence of Elements",
        content: [
          { type: 'paragraph', text: 'Kuch elements, khaaskar kam reactive wale jaise gold aur silver, Earth ki crust mein apne free state (pure elements ke roop mein) mein paye jaate hain.' },
          { type: 'paragraph', text: 'Zyadatar elements, khaaskar reactive wale, nature mein apne compounds (jaise oxides, sulphides, etc.) ke form mein paye jaate hain.' },
          { type: 'list', items: [
              'Ek <strong>mineral</strong> ek naturally occurring substance hai jo zameen ke neeche gehrai mein paya jaata hai.',
              'Ek <strong>ore</strong> ek mineral hai jisse ek metal aasani se aur faydemand tarike se extract kiya ja sakta hai.',
              '<strong>Metallurgy</strong> ek metal ko uske ore se extract karne ka process hai. Is process mein teen main steps hote hain:<br/>1. Concentration of ore: Impurities hatana.<br/>2. Reduction: Ore ko treat karke metal prapt karna.<br/>3. Refining: Metal ko purify karna.'
          ]}
        ]
      },
      {
        id: '3',
        title: "Physical Properties",
        content: [
            { type: 'paragraph', text: 'Yahan key physical differences ko summarize karne wali ek table hai:'},
            { type: 'table', headers: ['Property', 'Metals', 'Non-metals'], rows: [
                ['Physical State', 'Solids (mercury ko chhodkar, jo liquid hai)', 'Solids, liquids, ya gases'],
                ['Melting & Boiling Points', 'Aam taur par high melting aur boiling points hote hain', 'Aam taur par low melting aur boiling points hote hain'],
                ['Density', 'Aam taur par high density hoti hai', 'Aam taur par low density hoti hai'],
                ['Hardness', 'Aam taur par hard hote hain (sodium aur potassium ko chhodkar, jo soft hote hain)', 'Aam taur par hard nahi hote; ve brittle hote hain aur aasani se toot jaate hain (diamond ko chhodkar, jo bahut hard hai)'],
                ['Lustre', 'Shiny surface hota hai (lustrous)', 'Dull appearance hota hai (non-lustrous)'],
                ['Malleability', 'Patli sheets mein peeta ja sakta hai', 'Malleable nahi hote; ve brittle hote hain aur toot jaate hain'],
                ['Ductility', 'Patle wires mein kheencha ja sakta hai', 'Ductile nahi hote; unhein wires mein nahi kheencha ja sakta'],
                ['Tensile Strength', 'High tensile strength hoti hai (bina toote bahut strain seh sakte hain)', 'Low tensile strength hoti hai'],
                ['Conductivity', 'Heat aur electricity ke achhe conductors hote hain', 'Heat aur electricity ke kharab conductors (insulators) hote hain (graphite ko chhodkar, jo ek achha conductor hai)'],
                ['Sonorosity', 'Takrane par ghanti jaisi aawaz paida karte hain (sonorous)', 'Sonorous nahi hote']
            ]}
        ]
      },
      {
          id: '4',
          title: 'Chemical Properties',
          subSections: [
              { id: '4.1', title: 'Reaction with Oxygen', content: [
                  { type: 'paragraph', text: 'Metals oxygen ke saath react karke metallic oxides banate hain, jo nature mein basic hote hain. Yeh oxides red litmus paper ko blue kar dete hain.'},
                  { type: 'chemicalEquation', text: '2Mg(s) + O₂(g) → 2MgO(s)'},
                  { type: 'paragraph', text: 'Non-metals oxygen ke saath react karke non-metallic oxides banate hain, jo nature mein acidic hote hain. Yeh oxides blue litmus paper ko red kar dete hain.'},
                  { type: 'chemicalEquation', text: 'C(s) + O₂(g) → CO₂(g)'}
              ]},
              { id: '4.2', title: 'Reaction with Water', content: [
                  { type: 'paragraph', text: 'Zyadatar metals paani ke saath react karke ek metallic hydroxide aur hydrogen gas produce karte hain. Sodium aur potassium jaise highly reactive metals thande paani ke saath tezi se react karte hain.'},
                  { type: 'chemicalEquation', text: 'Mg(s) + 2H₂O(l) → Mg(OH)₂(aq) + H₂(g)'},
                  { type: 'paragraph', text: 'Non-metals aam taur par paani ke saath react nahi karte hain.'}
              ]},
              { id: '4.3', title: 'Reaction with Acids', content: [
                  { type: 'paragraph', text: 'Zyadatar metals dilute acids ke saath react karke ek salt aur hydrogen gas produce karte hain.'},
                  { type: 'chemicalEquation', text: 'Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)'},
                  { type: 'paragraph', text: 'Non-metals aam taur par acids ke saath react nahi karte hain.'}
              ]},
              { id: '4.4', title: 'Reaction with Alkalis', content: [
                  { type: 'paragraph', text: 'Zyadatar metals alkalis ke saath react karke ek salt aur hydrogen gas produce karte hain.'},
                  { type: 'paragraph', text: 'Non-metals aam taur par alkalis ke saath react karte hain.'}
              ]},
              { id: '4.5', title: 'Reactivity of Metals & Displacement Reactions', content: [
                  { type: 'paragraph', text: 'Reactivity series metals ki ek list hai jo unki ghatati hui reactivity ke क्रम mein arrange ki gayi hai.'},
                  { type: 'paragraph', text: 'Ek displacement reaction ek chemical reaction hai jismein ek zyada reactive metal ek kam reactive metal ko uske salt solution se displace kar deta hai. Example: Jab ek magnesium ribbon ko copper sulphate solution mein daala jaata hai, to blue rang pheeka pad jaata hai kyunki magnesium copper ko displace kar deta hai.'},
                  { type: 'chemicalEquation', text: 'Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s)'}
              ]}
          ]
      },
      {
        id: '5',
        title: "Noble Metals",
        content: [
            { type: 'list', items: [
                'Gold, silver, aur platinum jaise noble metals sabse kam reactive metals hain.',
                'Ve hawa, paani, ya acids ke saath aasani se react nahi karte hain.',
                'Kyunki ve unreactive aur shiny hote hain, unka istemal jewellery banane ke liye kiya jaata hai.',
                'Sone ki shuddhta karats mein maapi jaati hai. 24-karat sona shuddh sona hota hai, jabki 18-karat sone ka matlab hai 18 hisse sone mein 6 hisse anya metals milaye gaye hain.'
            ]}
        ]
      },
      {
        id: '6',
        title: "Alloys",
        content: [
            { type: 'list', items: [
                'Ek alloy do ya do se zyada metals, ya ek metal aur ek non-metal ka homogeneous mixture hota hai.',
                'Alloys aam taur par pure metals se zyada strong aur corrosion-resistant hote hain.',
                'Examples: Steel (iron + carbon), Brass (copper + zinc), Bronze (copper + tin).'
            ]}
        ]
      },
      {
        id: '7',
        title: "Uses of Metals, Non-metals, and Alloys",
        content: [
            { type: 'list', items: [
                '<strong>Metals:</strong> Machinery, car bodies, bartan (copper, aluminium), electrical wires (copper, aluminium), aur jewellery (gold, silver) banane ke liye istemal hote hain.',
                '<strong>Non-metals:</strong> Nitrogen aur phosphorus fertilizers mein istemal hote hain. Iodine ek antiseptic hai. Sulphur patakhon aur sulphuric acid mein istemal hota hai. Carbon (graphite) pencils aur batteries mein istemal hota hai. Oxygen jeewan ke liye zaroori hai.',
                '<strong>Alloys:</strong> Steel construction ke liye istemal hota hai. Stainless steel bartano ke liye. Brass decorative moortiyon aur bartano ke liye.'
            ]}
        ]
      }
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
      case 'subheading':
        return <h5 key={index} className="text-lg font-semibold mt-5 mb-3 text-[var(--theme-text-color)]" dangerouslySetInnerHTML={{ __html: item.text }}></h5>;
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
      case 'infoBox':
        const colorClasses = {
          blue: 'bg-sky-100 border-sky-500 text-sky-900 dark:bg-sky-900/30 dark:border-sky-700 dark:text-sky-200',
          green: 'bg-emerald-100 border-emerald-500 text-emerald-900 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-200',
          orange: 'bg-amber-100 border-amber-500 text-amber-900 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-200',
          red: 'bg-red-100 border-red-500 text-red-900 dark:bg-red-900/30 dark:border-red-700 dark:text-red-200',
        };
        return (
          <div key={index} className={`my-4 p-4 border-l-4 rounded-r-lg ${colorClasses[item.color] || colorClasses.orange}`}>
            <div 
                className="prose prose-sm max-w-none prose-strong:text-inherit" 
                dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        );
      case 'table':
          return (
              <div key={index} className="my-6 overflow-x-auto">
                  <table className="min-w-full">
                      <thead>
                          <tr>
                              {item.headers.map((header, hIndex) => (
                                  <th 
                                      key={hIndex} 
                                      className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b-2"
                                      style={{ color: 'var(--theme-heading-color)', borderColor: 'var(--theme-heading-color)' }}
                                      dangerouslySetInnerHTML={{ __html: header }}
                                  ></th>
                              ))}
                          </tr>
                      </thead>
                      <tbody>
                          {item.rows.map((row, rIndex) => (
                              <tr key={rIndex} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                  {row.map((cell, cIndex) => (
                                      <td key={cIndex} className="px-4 py-4 text-sm text-[var(--theme-text-color)]" dangerouslySetInnerHTML={{ __html: cell }}></td>
                                  ))}
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          );
       case 'chemicalEquation':
        return (
            <div key={index} className="my-4 p-3 rounded-md text-center font-mono text-sm" style={{backgroundColor: 'var(--theme-equation-bg)', color: 'var(--theme-equation-text)'}}>
                <code dangerouslySetInnerHTML={{ __html: item.text }}></code>
            </div>
        );
      default:
        return null;
    }
  });
};

const TocComponent = ({ currentContent, language, handleLanguageChange, theme, handleThemeChange, activeSection, openSections, toggleSection, isMobile, closeToc }) => {
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
        backgroundColor: isMobile ? themes[theme].cssVars['--theme-content-bg'] : themes[theme].cssVars['--theme-toc-bg']
    };

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
function Class8ScienceMatalandNonmetal() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '10': true, '11': true, '12': true, '13': true, '14': true });
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
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({...prev, [sectionId]: !prev[sectionId]}));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;600;700&display=swap');
        body { background-color: var(--theme-bg); transition: background-color 0.3s; font-family: 'Inter', sans-serif; }
        .heading-font { font-family: 'Lora', serif; }
        h1, h3 { font-family: 'Lora', serif !important; }
        .header-bg {
            background-color: var(--theme-header-bg);
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E");
        }
        .prose { color: currentColor; }
        .prose strong { color: currentColor; }
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
                openSections={openSections}
                toggleSection={toggleSection}
                isMobile={true}
                closeToc={() => setIsTocOpen(false)}
            />
        </aside>
        {isTocOpen && <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsTocOpen(false)}></div>}

        {/* Desktop TOC */}
        <div className="hidden lg:block w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="lg:sticky top-0 h-screen">
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
        </div>
        
        {/* Main Content */}
        <div className="w-full min-w-0">
            <main className="p-4 sm:p-6 md:p-8">
                {currentContent.sections.map((section) => (
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[80px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <div key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[80px]">
                                     <h3 className="heading-font text-2xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-2 border-[var(--theme-heading-border)]">{subSection.title}</h3>
                                     <ContentRenderer content={subSection.content} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>

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

export default Class8ScienceMatalandNonmetal;
