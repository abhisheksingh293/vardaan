import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "The First War of Independence—1857",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Revolt",
        content: [
          { type: 'list', items: [
              '<strong>What:</strong> A major uprising against the British East India Company.',
              '<strong>Start Date & Place:</strong> May 10, 1857, in Meerut.',
              '<strong>Initial Action:</strong> Sepoys marched to Delhi and declared the Mughal Emperor, Bahadur Shah Zafar II, as their leader.',
              '<strong>Participants:</strong> Started by sepoys but soon joined by peasants, artisans, and rulers, showing Hindu-Muslim unity.',
              '<strong>Alternate Names:</strong><br/>• British: Sepoy Mutiny.<br/>• Indians: First War of Independence.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        subSections: [
            { id: '2.1', title: 'Political Causes', content: [
                { type: 'list', items: [
                    '<strong>Doctrine of Lapse (Lord Dalhousie):</strong> If a ruler died without a natural male heir, his kingdom was annexed by the British. Adoption was not allowed.',
                    '<strong>Subsidiary Alliance:</strong> Made Indian rulers dependent on the British by forcing them to maintain a British army and accept a British Resident at their court. Awadh was a key example.'
                ]}
            ]},
            { id: '2.2', title: 'Economic Causes', content: [
                { type: 'list', items: [
                    '<strong>Economic Exploitation:</strong> British policies ruined the Indian economy.',
                    '<strong>Peasant Hardship:</strong> Forced to grow cash crops (indigo, cotton) and pay high taxes.',
                    '<strong>De-industrialization:</strong> British machine-made goods destroyed Indian handicraft industries, especially textiles.',
                    '<strong>Unemployment:</strong> Annexations of states like Awadh left thousands jobless.'
                ]}
            ]},
            { id: '2.3', title: 'Social and Religious Causes', content: [
                { type: 'list', items: [
                    '<strong>Interference:</strong> British interfered in Indian customs, believing themselves superior.',
                    '<strong>Fear of Conversion:</strong> Western education and Christian missionaries were seen as tools to convert Indians.',
                    '<strong>Inheritance Law Change:</strong> A new law allowed Christian converts to inherit ancestral property.',
                    '<strong>Racial Discrimination:</strong> Indians were treated as inferiors and faced discrimination in public spaces like trains.',
                    '<strong>Rumours:</strong> Bone dust of cows and pigs was allegedly mixed in flour to defile Hindus and Muslims.'
                ]}
            ]},
            { id: '2.4', title: 'Military Causes', content: [
                { type: 'list', items: [
                    '<strong>Discrimination:</strong> Indian sepoys faced poor pay and no promotions beyond the rank of Subedar.',
                    '<strong>General Service Enlistment Act (1856):</strong> Required sepoys to serve overseas, which was taboo for many Hindus.'
                ]}
            ]},
            { id: '2.5', title: 'Immediate Cause', content: [
                { type: 'list', items: [
                    '<strong>The Greased Cartridges:</strong> The new Enfield rifle used cartridges greased with rumoured cow and pig fat. Biting them was offensive to both Hindus and Muslims.',
                    '<strong>Mangal Pandey:</strong> A sepoy at Barrackpore, he revolted against using the cartridges on March 29, 1857, and was executed. This sparked widespread anger.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Course of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>Outbreak at Meerut:</strong> On May 10, 1857, sepoys revolted, freed their imprisoned comrades, and marched to Delhi.',
                '<strong>Main Centres and Leaders:</strong><br/>• Kanpur: Nana Saheb (with his general Tantya Tope).<br/>• Awadh (Lucknow): Begum Hazrat Mahal.<br/>• Jhansi: Rani Lakshmi Bai.<br/>• Bihar: Kunwar Singh.',
                '<strong>Groups That Did Not Join:</strong> The revolt was not universal. The Sikhs, Gurkhas, Nizam of Hyderabad, and Scindia of Gwalior remained loyal to the British.'
            ]}
        ]
      },
      {
          id: '4',
          title: 'Suppression of the Revolt',
          content: [
              { type: 'list', items: [
                  '<strong>British Response:</strong> Used superior military force to crush the rebellion.',
                  '<strong>Recapture of Delhi:</strong> The city was retaken; Mughal Emperor Bahadur Shah Zafar was exiled to Rangoon, and his sons were shot.',
                  '<strong>Fate of Leaders:</strong> Lucknow was recaptured. Rani Lakshmi Bai was killed in battle. Tantya Tope was captured and hanged.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Causes of Failure",
        content: [
            { type: 'list', items: [
                '<strong>Premature Start:</strong> The revolt began before the planned date, preventing coordinated action.',
                '<strong>Lack of Unity:</strong> Leaders had personal goals (restoring Mughal, Maratha, or their own kingdoms) rather than a unified nationalistic vision.',
                '<strong>Not Widespread:</strong> The revolt was limited to North and Central India.',
                '<strong>Superior British Army:</strong> The British had better weapons, organization, and communication.',
                '<strong>Weak Leadership:</strong> Lacked a central, coordinated leadership to unite all the rebel forces.'
            ]}
        ]
      },
      {
        id: '6',
        title: "Results of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>End of Company Rule:</strong> The East India Company\'s rule was abolished.',
                '<strong>Direct British Rule:</strong> Administration of India was transferred directly to the British Crown by Queen Victoria\'s Proclamation of 1858.',
                '<strong>New Administrative Posts:</strong><br/>• Secretary of State for India was created in Britain.<br/>• The Governor-General was now called the Viceroy.',
                '<strong>Policy Changes:</strong><br/>• The era of annexation ended.<br/>• Rulers were assured their territories and given the right to adopt heirs.<br/>• Promises of religious freedom and non-discrimination in jobs were made.',
                '<strong>Legacy:</strong> The revolt became the first great struggle for freedom and a source of inspiration for future nationalists. Heroes like Rani Lakshmi Bai and Mangal Pandey became iconic figures.'
            ]}
        ]
      },
      {
        id: '7',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                '<strong>Mutiny:</strong> Rebellion by soldiers against their officers.',
                '<strong>Revolt:</strong> Violent action against a government.',
                '<strong>Subsidy:</strong> Money paid to support an entity.',
                '<strong>Treason:</strong> Betraying one\'s country.',
                '<strong>Racial Discrimination:</strong> Unfair treatment based on race.',
                '<strong>Court-martialed:</strong> Tried in a military court.'
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "The First War of Independence—1857",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Revolt",
        content: [
          { type: 'list', items: [
              '<strong>Kya:</strong> British East India Company ke khilaf ek bada vidroh.',
              '<strong>Shuruaat ki Tareekh aur Jagah:</strong> 10 May, 1857, Meerut mein.',
              '<strong>Pehla Kadam:</strong> Sepoys ne Delhi march kiya aur Mughal Samrat Bahadur Shah Zafar II ko apna neta ghoshit kiya.',
              '<strong>Pratibhagi:</strong> Sepoys dwara shuru kiya gaya lekin jald hi kisanon, karigaron aur shasakon ne join kar liya, jisse Hindu-Muslim ekta dikhi.',
              '<strong>Alag-Alag Naam:</strong><br/>• British: Sepoy Mutiny.<br/>• Indians: First War of Independence.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        subSections: [
            { id: '2.1', title: 'Political Causes', content: [
                { type: 'list', items: [
                    '<strong>Doctrine of Lapse (Lord Dalhousie):</strong> Agar koi shasak bina natural male heir ke mar jaata, to uska rajya British annex kar lete. God lene ki anumati nahi thi.',
                    '<strong>Subsidiary Alliance:</strong> Isne Indian rulers ko British par nirbhar bana diya, unhein British sena rakhne aur unke darbar mein ek British Resident rakhne ke liye majboor karke. Awadh iska ek mukhya example tha.'
                ]}
            ]},
            { id: '2.2', title: 'Economic Causes', content: [
                { type: 'list', items: [
                    '<strong>Economic Exploitation:</strong> British policies ne Indian economy ko barbad kar diya.',
                    '<strong>Kisanon ki Pareshani:</strong> Unhein cash crops (neel, kapas) ugane aur bhari tax dene ke liye majboor kiya gaya.',
                    '<strong>De-industrialization:</strong> British machine-made saaman ne Indian handicraft industries, khaaskar textiles, ko tabah kar diya.',
                    '<strong>Berozgari:</strong> Awadh jaise rajyon ke annexation se hazaron log berozgar ho gaye.'
                ]}
            ]},
            { id: '2.3', title: 'Social and Religious Causes', content: [
                { type: 'list', items: [
                    '<strong>Hakshep:</strong> British ne Indian customs mein hastakshep kiya, khud ko superior maante hue.',
                    '<strong>Dharmantaran ka Dar:</strong> Western education aur Christian missionaries ko Indians ko convert karne ke tools ke roop mein dekha gaya.',
                    '<strong>Virasat Kanoon mein Badlav:</strong> Ek naye kanoon ne Christian converts ko paitrk sampatti virasat mein lene ki anumati di.',
                    '<strong>Racial Discrimination:</strong> Indians ko inferior maana jaata tha aur unke saath trains jaise public places mein bhedbhav hota tha.',
                    '<strong>Afwah:</strong> Aate mein gaay aur suar ki haddiyon ka powder milaye jaane ki afwah ne Hinduon aur Musalmanon ko apmanit kiya.'
                ]}
            ]},
            { id: '2.4', title: 'Military Causes', content: [
                { type: 'list', items: [
                    '<strong>Bhedbhav:</strong> Indian sepoys ko kam vetan milta tha aur Subedar ke rank se upar promotion nahi milta tha.',
                    '<strong>General Service Enlistment Act (1856):</strong> Sepoys ko samudra paar seva karne ki zaroorat thi, jo kai Hinduon ke liye ek dharmik tabu tha.'
                ]}
            ]},
            { id: '2.5', title: 'Immediate Cause', content: [
                { type: 'list', items: [
                    '<strong>Greased Cartridges:</strong> Nayi Enfield rifle mein rumoured gaay aur suar ki charbi se greased cartridges ka istemal hota tha. Unhein daant se kaatna Hinduon aur Musalmanon dono ke liye apmanjanak tha.',
                    '<strong>Mangal Pandey:</strong> Barrackpore mein ek sepoy, usne 29 March, 1857 ko cartridges ka istemal karne ke khilaf vidroh kiya aur use phaansi de di gayi. Isse vyaapak krodh bhadak utha.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Course of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>Meerut mein Vidroh:</strong> 10 May, 1857 ko, sepoys ne vidroh kiya, apne kaid saathiyon ko azaad karaya, aur Delhi ki taraf kooch kiya.',
                '<strong>Mukhya Kendra aur Neta:</strong><br/>• Kanpur: Nana Saheb (unke general Tantya Tope ke saath).<br/>• Awadh (Lucknow): Begum Hazrat Mahal.<br/>• Jhansi: Rani Lakshmi Bai.<br/>• Bihar: Kunwar Singh.',
                '<strong>Shamil na Hone Wale Samuh:</strong> Vidroh sarvabhaumik nahi tha. Sikhs, Gurkhas, Hyderabad ke Nizam, aur Gwalior ke Scindia British ke prati wafadar rahe.'
            ]}
        ]
      },
      {
          id: '4',
          title: 'Suppression of the Revolt',
          content: [
              { type: 'list', items: [
                  '<strong>British Pratikriya:</strong> Rebellion ko kuchalne ke liye behtar military force ka istemal kiya.',
                  '<strong>Delhi par Punah Kabza:</strong> Sheher par punah kabza kar liya gaya; Mughal Samrat Bahadur Shah Zafar ko Rangoon bhej diya gaya, aur unke beton ko goli maar di gayi.',
                  '<strong>Netaon ka Anjaam:</strong> Lucknow par punah kabza kar liya gaya. Rani Lakshmi Bai yuddh mein maari gayin. Tantya Tope ko pakad kar phaansi de di gayi.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Causes of Failure",
        content: [
            { type: 'list', items: [
                '<strong>Samay se Pehle Shuruat:</strong> Vidroh nirdharit tithi se pehle shuru ho gaya, jisse coordinated action nahi ho paya.',
                '<strong>Ekta ki Kami:</strong> Netaon ke personal goals the (Mughal, Maratha, ya apne rajyon ko bahal karna) na ki ek unified nationalistic vision.',
                '<strong>Vyaapak Nahi Tha:</strong> Vidroh North aur Central India tak hi seemit tha.',
                '<strong>Behtar British Sena:</strong> British ke paas behtar hathiyar, sangathan, aur communication tha.',
                '<strong>Kamzor Netritva:</strong> Sabhi vidrohi senaon ko ekjut karne ke liye ek central, coordinated netritva ki kami thi.'
            ]}
        ]
      },
      {
        id: '6',
        title: "Results of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>Company Rule ka Ant:</strong> East India Company ka shasan samapt kar diya gaya.',
                '<strong>Direct British Rule:</strong> Bharat ka prashasan Queen Victoria ki 1858 ki Ghoshna dwara seedhe British Crown ko transfer kar diya gaya.',
                '<strong>Naye Prashasnik Pad:</strong><br/>• Britain mein Secretary of State for India banaya gaya.<br/>• Governor-General ko ab Viceroy kaha jaane laga.',
                '<strong>Policy mein Badlav:</strong><br/>• Annexation ka yug samapt ho gaya.<br/>• Shasakon ko unke kshetron ka ashvasan diya gaya aur uttaradhikari god lene ka adhikar diya gaya.<br/>• Dharmik swatantrata aur naukriyon mein bhedbhav na karne ke vaade kiye gaye.',
                '<strong>Virasat:</strong> Vidroh azaadi ke liye pehla mahan sangharsh bana aur bhavishya ke rashtravadiyon ke liye prerna ka srot bana. Rani Lakshmi Bai aur Mangal Pandey jaise nayak iconic figures ban gaye.'
            ]}
        ]
      },
      {
        id: '7',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                '<strong>Mutiny:</strong> Sainikon dwara apne afsaron ke khilaf bagawat.',
                '<strong>Revolt:</strong> Ek sarkar ke khilaf hinsak karyavahi.',
                '<strong>Subsidy:</strong> Kisi sanstha ko sahayata ke liye diya gaya paisa.',
                '<strong>Treason:</strong> Apne desh ke saath vishwasghat.',
                '<strong>Racial Discrimination:</strong> Nasl ke aadhar par anuchit vyavahar.',
                '<strong>Court-martialed:</strong> Ek military court mein mukadma chalaya gaya.'
            ]}
        ]
      }
    ]
  }
};


// Theme definitions
const themes = {
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-header-bg': '#f97316', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f97316', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#ea580c', '--theme-heading-border': '#f97316', '--theme-check': '#f97316', '--theme-switch-lang-active': '#ea580c' } },
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-header-bg': '#3b82f6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#3b82f6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-check': '#3b82f6', '--theme-switch-lang-active': '#2563eb' } },
    forestGreen: { name: 'Forest Green', previewColor: '#22c55e', cssVars: { '--theme-bg': '#f0fdf4', '--theme-header-bg': '#22c55e', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#22c55e', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#16a34a', '--theme-heading-border': '#4ade80', '--theme-check': '#22c55e', '--theme-switch-lang-active': '#16a34a' } },
    amber: { name: 'Amber', previewColor: '#f59e0b', cssVars: { '--theme-bg': '#fefce8', '--theme-header-bg': '#f59e0b', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f59e0b', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#d97706', '--theme-heading-border': '#facc15', '--theme-check': '#f59e0b', '--theme-switch-lang-active': '#d97706' } },
    royalPurple: { name: 'Royal Purple', previewColor: '#8b5cf6', cssVars: { '--theme-bg': '#f5f3ff', '--theme-header-bg': '#8b5cf6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#8b5cf6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#7c3aed', '--theme-heading-border': '#a78bfa', '--theme-check': '#8b5cf6', '--theme-switch-lang-active': '#7c3aed' } },
    midnightBlueD: { name: 'Midnight Blue (D)', previewColor: '#60a5fa', cssVars: { '--theme-bg': '#111827', '--theme-header-bg': '#1e40af', '--theme-toc-bg': '#1f2937', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#60a5fa', '--theme-toc-active-text': '#111827', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#60a5fa', '--theme-heading-border': '#3b82f6', '--theme-check': '#60a5fa', '--theme-switch-lang-active': '#ffffff' } },
    slateGrayD: { name: 'Slate Gray (D)', previewColor: '#94a3b8', cssVars: { '--theme-bg': '#334155', '--theme-header-bg': '#475569', '--theme-toc-bg': '#475569', '--theme-toc-text': '#e2e8f0', '--theme-toc-active-bg': '#94a3b8', '--theme-toc-active-text': '#1e293b', '--theme-content-bg': 'rgba(71,85,105,0.8)', '--theme-text-color': '#e2e8f0', '--theme-heading-color': '#cbd5e1', '--theme-heading-border': '#94a3b8', '--theme-check': '#94a3b8', '--theme-switch-lang-active': '#ffffff' } },
    tangerineD: { name: 'Tangerine (D)', previewColor: '#fb923c', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#c2410c', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#fb923c', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#fb923c', '--theme-heading-border': '#f97316', '--theme-check': '#fb923c', '--theme-switch-lang-active': '#ffffff' } },
    crimsonD: { name: 'Crimson (D)', previewColor: '#f87171', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#b91c1c', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#f87171', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f87171', '--theme-heading-border': '#ef4444', '--theme-check': '#f87171', '--theme-switch-lang-active': '#ffffff' } },
    roseD: { name: 'Rose (D)', previewColor: '#f472b6', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#be185d', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#f472b6', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f472b6', '--theme-heading-border': '#ec4899', '--theme-check': '#f472b6', '--theme-switch-lang-active': '#ffffff' } },
    violetD: { name: 'Violet (D)', previewColor: '#a78bfa', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#6d28d9', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#a78bfa', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#a78bfa', '--theme-heading-border': '#8b5cf6', '--theme-check': '#a78bfa', '--theme-switch-lang-active': '#ffffff' } },
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
function ResourcesDevelopmentChapter() {
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
            <div className="lg:sticky top-[64px] h-[calc(100vh-64px)]">
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

export default ResourcesDevelopmentChapter;
