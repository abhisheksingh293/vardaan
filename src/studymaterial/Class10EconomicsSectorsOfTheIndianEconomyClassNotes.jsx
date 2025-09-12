import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Sectors of the Indian Economy",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to Economic Sectors",
        content: [
          { type: 'paragraph', text: 'Economic activities are grouped into sectors. We can classify them in three main ways:' },
          { type: 'list', items: [
              '1. Primary, Secondary, & Tertiary (Based on the nature of the activity)',
              '2. Organised & Unorganised (Based on employment conditions)',
              '3. Public & Private (Based on ownership of assets)'
          ]}
        ]
      },
      {
        id: '2',
        title: "Classification by Nature of Activity",
        subSections: [
            { id: '2.1', title: 'Primary Sector (Agriculture & Related Sector)', content: [
                { type: 'list', items: [
                    'Involves activities that produce goods by exploiting natural resources.',
                    'Examples: Farming, fishing, mining, dairy. It forms the base for other products.'
                ]}
            ]},
            { id: '2.2', title: 'Secondary Sector (Industrial Sector)', content: [
                { type: 'list', items: [
                    'Involves activities that transform natural products into other forms through manufacturing.',
                    'Examples: Weaving cloth from cotton, making sugar from sugarcane.'
                ]}
            ]},
            { id: '2.3', title: 'Tertiary Sector (Service Sector)', content: [
                { type: 'list', items: [
                    'Provides services that support the primary and secondary sectors. It doesn\'t produce goods itself.',
                    'Examples: Transport, banking, communication, storage. It also includes essential services like teachers, doctors, and lawyers.'
                ]}
            ]},
            { id: '2.4', title: 'Interdependence of Sectors', content: [
                { type: 'list', items: [
                    'All three sectors are highly interdependent. For example, a sugar mill (secondary) needs sugarcane from farmers (primary), and both need transport and banking services (tertiary) to function.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Comparing the Sectors & Measuring Production",
        content: [
            { type: 'paragraph', text: 'To measure the total production of an economy, we can\'t just add up the quantity of all goods. Instead, we use the monetary value of all <strong>final goods and services</strong> produced in a year.'},
            { type: 'paragraph', text: 'We only count <strong>final goods</strong> (like a biscuit) and not <strong>intermediate goods</strong> (like the flour and sugar used to make it) to avoid counting the same value multiple times.'},
            { type: 'infoBox', color: 'blue', content: '<strong>Gross Domestic Product (GDP):</strong> The sum of the value of final goods and services produced in all three sectors within a country in a year. It shows how big the economy is.'},
            { type: 'paragraph', text: '<strong>Gross Value Added (GVA):</strong> Measures the contribution of each sector after adjusting for taxes and subsidies.'}
        ]
      },
      {
          id: '4',
          title: 'Historical Changes in Sectors',
          content: [
              { type: 'list', items: [
                  '<strong>Pattern in Developed Countries:</strong> Economies typically shift from being dominated by the Primary sector -> to the Secondary sector -> and finally to the Tertiary sector.',
                  '<strong>Sectoral Changes in India:</strong><br/>o <strong>Production:</strong> India has followed a similar pattern. The tertiary sector has become the largest contributor to India\'s production (GVA). This is due to the rising need for basic services, development in other sectors, rising incomes, and new technology.<br/>o <strong>Employment:</strong> However, a similar shift has not happened in employment. The primary sector still employs the most people (around 44% in 2017-18). This is because not enough jobs were created in the secondary and tertiary sectors.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Underemployment (Disguised Unemployment)",
        content: [
            { type: 'paragraph', text: '<strong>Definition:</strong> A situation where there are more people working in a sector (especially agriculture) than necessary. They appear to be working, but are actually working less than their full potential.'},
            { type: 'paragraph', text: '<strong>Example:</strong> If a farm needs only three people to operate but five family members are working on it, the two extra people are underemployed. Their removal would not affect the farm\'s output. This also occurs in urban areas with casual workers.'}
        ]
      },
      {
        id: '6',
        title: "How to Create More Employment",
        content: [
            { type: 'list', items: [
                '<strong>Support Agriculture:</strong> Provide irrigation, better roads, storage facilities, and cheap credit to farmers.',
                '<strong>Promote Semi-Rural Industries:</strong> Set up industries like dal mills or cold storages in semi-rural areas.',
                '<strong>Expand the Service Sector:</strong> Invest in education, health, and tourism, which can create millions of jobs.',
                '<strong>Short-Term Measures:</strong> The government\'s MGNREGA 2005 (Mahatma Gandhi National Rural Employment Guarantee Act) guarantees 100 days of work to those in need in rural areas.'
            ]}
        ]
      },
      {
        id: '7',
        title: "Organised and Unorganised Sectors",
        subSections: [
            { id: '7.1', title: 'Organised Sector', content: [
                { type: 'list', items: [
                    'Workplaces where employment is regular and assured.',
                    'They are registered with the government and follow rules.',
                    'Workers have job security and receive benefits like paid leave, provident fund, and pensions.'
                ]}
            ]},
            { id: '7.2', title: 'Unorganised Sector', content: [
                { type: 'list', items: [
                    'Consists of small, scattered units largely outside government control.',
                    'Jobs are low-paid, irregular, and not secure.',
                    'There are no benefits like paid leave or holidays. Most Indian workers are in this sector.',
                    'Protection is needed for these workers, especially vulnerable groups like landless laborers, small farmers, and casual workers in cities.'
                ]}
            ]}
        ]
      },
      {
        id: '8',
        title: "Public and Private Sectors",
        subSections: [
            { id: '8.1', title: 'Public Sector', content: [
                { type: 'list', items: [
                    'Assets are owned by the government.',
                    'The main motive is public welfare, not profit.',
                    'Examples: Indian Railways, Post Office. The government undertakes activities that require huge spending (like building dams) or are essential for public good (like health and education).'
                ]}
            ]},
            { id: '8.2', title: 'Private Sector', content: [
                { type: 'list', items: [
                    'Assets are owned by private individuals or companies.',
                    'The main motive is to earn profits.',
                    'Examples: Tata Iron and Steel Company (TISCO), Reliance Industries.'
                ]}
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Sectors of the Indian Economy",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to Economic Sectors",
        content: [
          { type: 'paragraph', text: 'Economic activities ko sectors mein group kiya jaata hai. Hum inhein teen main तरीकों se classify kar sakte hain:' },
          { type: 'list', items: [
              '1. Primary, Secondary, & Tertiary (activity ke nature par based)',
              '2. Organised & Unorganised (employment conditions par based)',
              '3. Public & Private (assets ke ownership par based)'
          ]}
        ]
      },
      {
        id: '2',
        title: "Classification by Nature of Activity",
        subSections: [
            { id: '2.1', title: 'Primary Sector (Agriculture & Related Sector)', content: [
                { type: 'list', items: [
                    'Ismein aisi activities shaamil hain jo natural resources ko exploit karke goods produce karti hain.',
                    'Examples: Farming, fishing, mining, dairy. Yeh doosre products ke liye base banata hai.'
                ]}
            ]},
            { id: '2.2', title: 'Secondary Sector (Industrial Sector)', content: [
                { type: 'list', items: [
                    'Ismein aisi activities shaamil hain jo natural products ko manufacturing ke through doosre forms mein transform karti hain.',
                    'Examples: Cotton se kapda bunna, sugarcane se sugar banana.'
                ]}
            ]},
            { id: '2.3', title: 'Tertiary Sector (Service Sector)', content: [
                { type: 'list', items: [
                    'Yeh primary aur secondary sectors ko support karne wali services provide karta hai. Yeh khud goods produce nahi karta.',
                    'Examples: Transport, banking, communication, storage. Ismein teachers, doctors, aur lawyers jaisi essential services bhi shaamil hain.'
                ]}
            ]},
            { id: '2.4', title: 'Interdependence of Sectors', content: [
                { type: 'list', items: [
                    'Teeno sectors ek doosre par highly interdependent hain. Example ke liye, ek sugar mill (secondary) ko farmers (primary) se sugarcane chahiye, aur dono ko function karne ke liye transport aur banking services (tertiary) ki zaroorat hoti hai.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Comparing the Sectors & Measuring Production",
        content: [
            { type: 'paragraph', text: 'Ek economy ke total production ko measure karne ke liye, hum sabhi goods ki quantity ko bas add nahi kar sakte. Iske bajaye, hum ek saal mein produce hue sabhi <strong>final goods and services</strong> ki monetary value ka use karte hain.'},
            { type: 'paragraph', text: 'Hum sirf <strong>final goods</strong> (jaise ek biscuit) ko count karte hain, na ki <strong>intermediate goods</strong> (jaise use banane ke liye use hua aata aur chini) ko, taaki same value ko baar-baar count karne se bacha ja sake.'},
            { type: 'infoBox', color: 'blue', content: '<strong>Gross Domestic Product (GDP):</strong> Ek saal mein desh ke andar teeno sectors mein produce hue sabhi final goods aur services ki value ka total. Yeh dikhata hai ki economy kitni badi hai.'},
            { type: 'paragraph', text: '<strong>Gross Value Added (GVA):</strong> Taxes aur subsidies ke liye adjust karne ke baad har sector ke contribution ko measure karta hai.'}
        ]
      },
      {
          id: '4',
          title: 'Historical Changes in Sectors',
          content: [
              { type: 'list', items: [
                  '<strong>Pattern in Developed Countries:</strong> Economies aam taur par Primary sector -> se Secondary sector -> aur finally Tertiary sector ke domination ki taraf shift hoti hain.',
                  '<strong>Sectoral Changes in India:</strong><br/>o <strong>Production:</strong> India ne bhi similar pattern follow kiya hai. Tertiary sector India ke production (GVA) mein sabse bada contributor ban gaya hai. Yeh basic services ki badhti zaroorat, doosre sectors mein development, badhti income, aur nayi technology ke kaaran hai.<br/>o <strong>Employment:</strong> Lekin, employment mein aisi hi shift nahi hui hai. Primary sector abhi bhi sabse zyada logon ko employ karta hai (2017-18 mein lagbhag 44%). Aisa isliye hai kyunki secondary aur tertiary sectors mein sufficient jobs create nahi huin.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Underemployment (Disguised Unemployment)",
        content: [
            { type: 'paragraph', text: '<strong>Definition:</strong> Ek aisi situation jahan kisi sector (khaaskar agriculture) mein zaroorat se zyada log kaam kar rahe hain. Ve kaam karte hue dikhte hain, lekin asal mein apni poori potential se kam kaam kar rahe hote hain.'},
            { type: 'paragraph', text: '<strong>Example:</strong> Agar ek farm ko operate karne ke liye sirf teen logon ki zaroorat hai lekin paanch family members us par kaam kar rahe hain, to do extra log underemployed hain. Unke hatne se farm ke output par koi asar nahi padega. Yeh shehri ilakon mein casual workers ke saath bhi hota hai.'}
        ]
      },
      {
        id: '6',
        title: "How to Create More Employment",
        content: [
            { type: 'list', items: [
                '<strong>Support Agriculture:</strong> Kisanon ko irrigation, behtar sadkein, storage facilities, aur sasta credit provide karein.',
                '<strong>Promote Semi-Rural Industries:</strong> Semi-rural areas mein dal mills ya cold storages jaise industries set up karein.',
                '<strong>Expand the Service Sector:</strong> Education, health, aur tourism mein invest karein, jisse millions of jobs create ho sakti hain.',
                '<strong>Short-Term Measures:</strong> Sarkar ka MGNREGA 2005 (Mahatma Gandhi National Rural Employment Guarantee Act) gramin ilakon mein zarooratmand logon ko 100 din ke kaam ki guarantee deta hai.'
            ]}
        ]
      },
      {
        id: '7',
        title: "Organised and Unorganised Sectors",
        subSections: [
            { id: '7.1', title: 'Organised Sector', content: [
                { type: 'list', items: [
                    'Aise workplaces jahan employment regular aur assured hota hai.',
                    'Yeh government ke saath registered hote hain aur rules follow karte hain.',
                    'Workers ko job security aur paid leave, provident fund, aur pensions jaise benefits milte hain.'
                ]}
            ]},
            { id: '7.2', title: 'Unorganised Sector', content: [
                { type: 'list', items: [
                    'Chhoti, bikhri hui units se bana hota hai jo large extent tak government control se bahar hoti hain.',
                    'Jobs low-paid, irregular, aur secure nahi hoti hain.',
                    'Paid leave ya holidays jaise koi benefits nahi hote. Zyada tar Indian workers isi sector mein hain.',
                    'In workers ke liye protection zaroori hai, khaaskar vulnerable groups jaise landless laborers, small farmers, aur shehron mein casual workers.'
                ]}
            ]}
        ]
      },
      {
        id: '8',
        title: "Public and Private Sectors",
        subSections: [
            { id: '8.1', title: 'Public Sector', content: [
                { type: 'list', items: [
                    'Assets government dwara owned hote hain.',
                    'Main motive profit nahi, balki public welfare hota hai.',
                    'Examples: Indian Railways, Post Office. Sarkar aisi activities karti hai jinmein bhaari kharch ki zaroorat hoti hai (jaise dams banana) ya jo public good ke liye essential hain (jaise health aur education).'
                ]}
            ]},
            { id: '8.2', title: 'Private Sector', content: [
                { type: 'list', items: [
                    'Assets private individuals ya companies dwara owned hote hain.',
                    'Main motive profits earn karna hota hai.',
                    'Examples: Tata Iron and Steel Company (TISCO), Reliance Industries.'
                ]}
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

    return (
        <div 
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: window.innerWidth >= 640 ? '24px' : '16px',
                paddingTop: isMobile ? '80px' : (window.innerWidth >= 640 ? '24px' : '16px'),
                color: themes[theme].cssVars['--theme-toc-text'],
                transition: 'all 300ms',
                backdropFilter: isMobile ? 'blur(16px)' : 'none',
                backgroundColor: isMobile ? themes[theme].cssVars['--theme-content-bg'] : themes[theme].cssVars['--theme-toc-bg']
            }}
        >
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
function Class10EconomicsSectorsOfTheIndianEconomyClassNotes() {
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

export default Class10EconomicsSectorsOfTheIndianEconomyClassNotes;
