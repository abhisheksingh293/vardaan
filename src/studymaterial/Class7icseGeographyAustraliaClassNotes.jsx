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
    chapterTitle: "Australia - Location, Political Divisions, and Physical Features",
    tocTitle: "Table of Contents",
    metaDescription: "Comprehensive notes for Class 7 ICSE on Australia, covering its location, political divisions, states, territories, and key physical features like the Great Dividing Range and Great Barrier Reef.",
    sections: [
      { id: '1', title: "Introduction to Australia", content: [
          { type: 'paragraph', text: "The term Australasia refers to a region that includes the continent of Australia, the nation of New Zealand, and the various neighboring islands in the South Pacific Ocean. This entire region is also commonly called Oceania. Australia is one of the three major continents located in the Southern Hemisphere." },
          { type: 'paragraph', text: "The continent was discovered by Europeans in the early 17th century." },
          { type: 'list', items: [
              "<strong>Abel Janszoon Tasman</strong>, a Dutch navigator, sailed around the southern coast in 1642. In his honor, the island of Tasmania and the Tasman Sea were named after him.",
              "Later, in 1788, the English explorer <strong>Captain James Cook</strong> sailed from England and landed at Botany Bay, near the site of modern-day Sydney. He raised the British flag on the eastern coast, claiming the land for England."
          ]}
      ]},
      { id: '2', title: "Location, Boundaries, and Size", content: [
          { type: 'heading', text: "Location & Extent" },
          { type: 'list', items: [
              "<strong>Location:</strong> Australia is unique as it lies entirely within the Southern Hemisphere (south of the Equator) and the Eastern Hemisphere (east of the Prime Meridian). The Tropic of Capricorn (23½°S) is a significant line of latitude that passes almost directly through the middle of the continent.",
              "<strong>Latitudinal Extent:</strong> From north to south, Australia stretches from 10°S to 44°S latitudes.",
              "<strong>Longitudinal Extent:</strong> From west to east, it extends from 112°E to 154°E longitudes."
          ]},
          { type: 'heading', text: "Boundaries" },
          { type: 'list', items: [
              "The continent is an island, surrounded by water.",
              "To the west is the <strong>Indian Ocean</strong>.",
              "To the east is the <strong>Pacific Ocean</strong>.",
              "To the north lie the <strong>Arafura Sea</strong> and the <strong>Timor Sea</strong>.",
              "To the south is the <strong>Southern Ocean</strong>."
          ]},
          { type: 'heading', text: "Size and Shape" },
          { type: 'list', items: [
              "Australia has a compact shape, resembling a quadrilateral (a four-sided figure). It is the world's smallest continent, with a total area of 7.692 million sq. km, which accounts for 5.2% of the world's total land area."
          ]}
      ]},
      { id: '3', title: "Political Divisions", content: [
          { type: 'paragraph', text: "Australia is a federation divided into six states and two major internal territories." },
          { type: 'heading', text: "The Six States" },
          { type: 'list', items: [
              "Queensland (Capital: Brisbane)",
              "New South Wales (Capital: Sydney)",
              "Victoria (Capital: Melbourne)",
              "South Australia (Capital: Adelaide)",
              "Western Australia (Capital: Perth)",
              "Tasmania (Capital: Hobart)"
          ]},
          { type: 'heading', text: "The Two Territories" },
          { type: 'paragraph', text: "The two internal territories are governed by the central government and are large in area but have small populations." },
          { type: 'list', items: [
              "Northern Territory (Capital: Darwin)",
              "Australian Capital Territory, which contains Canberra, the national capital of Australia."
          ]}
      ]},
      { id: '4', title: "Physical Features", content: [
          { type: 'paragraph', text: "Physically, Australia is divided into four main regions: the Eastern Highlands, the Central Lowlands, the Western Plateau, and the Coastal Plains." }
        ],
        subSections: [
          { id: '4.1', title: "The Eastern Highlands", content: [
              { type: 'paragraph', text: "This is a long chain of mountains and plateaus running parallel to the entire eastern coast, from Cape York in the north to Victoria in the south. It includes two major features." },
              { type: 'heading', text: "The Great Dividing Range" },
              { type: 'paragraph', text: "This range formed a major obstacle for early settlers, which is how it got its name. Originally formed from folded rocks, it has been weathered down over millions of years into a plateau that slopes towards the Pacific Ocean." },
              { type: 'list', items: [
                  "<strong>Highest Peak:</strong> Australia's highest mountain, Mount Kosciuszko, is located here, standing at 2230 meters in New South Wales.",
                  "<strong>Regional Names:</strong> In New South Wales, the range is known as the Blue Mountains, while in Victoria, it is called the Australian Alps.",
                  "<strong>Rivers:</strong> The major Murray and Darling rivers originate in these highlands and are used to generate hydroelectric power."
              ]},
              { type: 'heading', text: "The Great Barrier Reef" },
              { type: 'paragraph', text: "This is the world's largest coral reef, stretching for over 1900 km along the northeast coast. It is formed by tiny sea creatures called coral polyps, which secrete a hard, white substance called calcium carbonate. Over time, the skeletons of these creatures build up to form the massive reef structure. It is a major tourist destination but poses a significant danger to shipping. Human activities like mining threaten its fragile ecosystem." }
          ]},
          { id: '4.2', title: "The Central Lowlands", content: [
              { type: 'paragraph', text: "These vast lowlands stretch from the Gulf of Carpentaria in the north to Encounter Bay in the south. They are divided into three distinct basins." },
              { type: 'list', items: [
                  "<strong>The Murray-Darling Basin:</strong> Located in the southeast, this is Australia's most important agricultural region. It is well-watered by the Murray, Darling, and Murrumbidgee rivers, which are snow-fed from their source in the Australian Alps.",
                  "<strong>The Lake Eyre Basin:</strong> This is a huge, saucer-shaped region of inland drainage. It is a very dry area where rivers flow inward and often evaporate or drain into the salty Lake Eyre without ever reaching the sea.",
                  "<strong>The Carpentarian Lowlands:</strong> This northern basin is drained by the Flinders and Mitchell rivers."
              ]}
          ]},
          { id: '4.3', title: "The Western Plateau", content: [
              { type: 'paragraph', text: "This massive plateau covers the western half of the continent. It is primarily composed of ancient sandstone and limestone lying in horizontal layers." },
              { type: 'list', items: [
                  "<strong>Deserts:</strong> It is a very arid region and contains Australia's largest deserts: the Great Sandy Desert, Gibson Desert, and Great Victoria Desert.",
                  "<strong>Uluru (Ayers Rock):</strong> A famous feature of the plateau is Uluru, a giant single rock monolith (also known as Ayers Rock) that rises dramatically from the flat landscape."
              ]}
          ]},
          { id: '4.4', title: "Other Key Features", content: [
              { type: 'heading', text: "The Great Artesian Basin" },
              { type: 'paragraph', text: "Located mainly in Queensland and New South Wales, this is a critical source of groundwater for the dry interior. The basin consists of a layer of permeable rock (an aquifer) sandwiched between two layers of impermeable rock, which traps water underground. When wells are drilled, the natural pressure forces water to the surface. The water is often salty, making it unsuitable for agriculture but vital for cattle rearing." },
              { type: 'heading', text: "The Rift Valley of Australia" },
              { type: 'paragraph', text: "Located in South Australia, this is a long, steep-sided valley formed by the sinking of land. The Gulf of Spencer, St. Vincent Gulf and Lake Torrens are all part of this geological feature." },
          ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Australia - Sthan, Rajneetik Vibhajan, aur Bhautik Visheshtayein",
    tocTitle: "Table of Contents",
    metaDescription: "Class 7 ICSE ke liye Australia par notes, jismein iska sthan, rajneetik vibhajan, rajya, aur pramukh bhautik visheshtayein jaise Great Dividing Range aur Great Barrier Reef shamil hain.",
    sections: [
      { id: '1', title: "Australia Ka Parichay", content: [
          { type: 'paragraph', text: "Australasia ek kshetra hai jismein Australia mahadweep, New Zealand desh, aur South Pacific Ocean ke aas-paas ke dweep shamil hain. Is poore kshetra ko Oceania bhi kaha jaata hai. Australia Southern Hemisphere mein sthit teen pramukh mahadweepon mein se ek hai." },
          { type: 'paragraph', text: "Is mahadweep ki khoj 17th century ki shuruaat mein Europeans ne ki thi." },
          { type: 'list', items: [
              "<strong>Abel Janszoon Tasman</strong>, ek Dutch navigator, ne 1642 mein iske dakshini tat ke paas yatra ki. Unke samman mein Tasmania dweep aur Tasman Sea ka naam rakha gaya.",
              "Baad mein, 1788 mein, English explorer <strong>Captain James Cook</strong> England se chale aur modern Sydney ke paas Botany Bay par utre. Unhone eastern coast par British jhanda fahraya aur is zameen par England ka dawa kiya."
          ]}
      ]},
      { id: '2', title: "Sthan, Seemayein, aur Aakar", content: [
          { type: 'heading', text: "Sthan aur Vistar" },
          { type: 'list', items: [
              "<strong>Sthan (Location):</strong> Australia poori tarah se Southern Hemisphere (Equator ke dakshin) aur Eastern Hemisphere (Prime Meridian ke purva) mein sthit hai. Tropic of Capricorn (23½°S) iske lagbhag beech se guzarti hai.",
              "<strong>Latitudinal Vistar:</strong> Uttar se dakshin tak, Australia 10°S se 44°S latitude tak phaila hua hai.",
              "<strong>Longitudinal Vistar:</strong> Paschim se purva tak, yah 112°E se 154°E longitude tak phaila hua hai."
          ]},
          { type: 'heading', text: "Seemayein" },
          { type: 'list', items: [
              "Yah mahadweep ek dweep hai, jo paani se ghira hai.",
              "Paschim mein <strong>Indian Ocean</strong> hai.",
              "Purva mein <strong>Pacific Ocean</strong> hai.",
              "Uttar mein <strong>Arafura Sea</strong> aur <strong>Timor Sea</strong> hain.",
              "Dakshin mein <strong>Southern Ocean</strong> hai."
          ]},
          { type: 'heading', text: "Aakar aur Shape" },
          { type: 'list', items: [
              "Australia ka shape compact hai. Yah duniya ka sabse chhota mahadweep hai, jiska kul क्षेत्रफल 7.692 million sq. km hai, jo duniya ki kul zameen ka 5.2% hai."
          ]}
      ]},
      { id: '3', title: "Rajneetik Vibhajan", content: [
          { type: 'paragraph', text: "Australia ek federation hai jo chhah rajyon (states) aur do pramukh internal territories mein vibhajit hai." },
          { type: 'heading', text: "Chhah Rajya (The Six States)" },
          { type: 'list', items: [
              "Queensland (Rajdhani: Brisbane)",
              "New South Wales (Rajdhani: Sydney)",
              "Victoria (Rajdhani: Melbourne)",
              "South Australia (Rajdhani: Adelaide)",
              "Western Australia (Rajdhani: Perth)",
              "Tasmania (Rajdhani: Hobart)"
          ]},
          { type: 'heading', text: "Do Territories (The Two Territories)" },
          { type: 'paragraph', text: "Ye do internal territories central government dwara shasit hain aur क्षेत्रफल mein badi hain lekin aabadi kam hai." },
          { type: 'list', items: [
              "Northern Territory (Rajdhani: Darwin)",
              "Australian Capital Territory, jismein Australia ki rashtriya rajdhani Canberra hai."
          ]}
      ]},
      { id: '4', title: "Bhautik Visheshtayein", content: [
          { type: 'paragraph', text: "Bhautik roop se, Australia ko char pramukh kshetron mein baanta gaya hai: The Eastern Highlands, the Central Lowlands, the Western Plateau, aur the Coastal Plains." }
        ],
        subSections: [
          { id: '4.1', title: "The Eastern Highlands", content: [
              { type: 'paragraph', text: "Yah pahadon aur patharon ki ek lambi shrinkhala hai jo poore eastern coast ke parallel chalti hai. Ismein do pramukh visheshtayein hain." },
              { type: 'heading', text: "The Great Dividing Range" },
              { type: 'paragraph', text: "Is range ne shuruaati basne walon ke liye ek badi badha paida ki, isliye iska naam yeh pada. Iska sabse uncha parvat <strong>Mount Kosciuszko</strong> (2230 meters) hai." },
              { type: 'heading', text: "The Great Barrier Reef" },
              { type: 'paragraph', text: "Yah duniya ka sabse bada coral reef hai, jo 1900 km se zyada lamba hai. Yah chhote samundri jeevon (coral polyps) dwara banaya gaya hai. Mining jaisi manav gatividhiyan iske ecosystem ko khatre mein daal rahi hain." }
          ]},
          { id: '4.2', title: "The Central Lowlands", content: [
              { type: 'paragraph', text: "Yah vishal maidan Gulf of Carpentaria se Encounter Bay tak phaile hue hain. Inhein teen basins mein baanta gaya hai." },
              { type: 'list', items: [
                  "<strong>The Murray-Darling Basin:</strong> Yah Australia ka sabse mahatvapurna krishi kshetra hai.",
                  "<strong>The Lake Eyre Basin:</strong> Yah inland drainage ka ek vishal kshetra hai. Yah bahut sookha ilaka hai.",
                  "<strong>The Carpentarian Lowlands:</strong> Is uttarī basin ko Flinders aur Mitchell nadiyan drain karti hain."
              ]}
          ]},
          { id: '4.3', title: "The Western Plateau", content: [
              { type: 'paragraph', text: "Yah vishal pathar mahadweep ke pashchimi aadhe hisse ko cover karta hai. Yah ek bahut shushk kshetra hai aur ismein Australia ke sabse bade registan hain: Great Sandy Desert, Gibson Desert, aur Great Victoria Desert. Yahan ka ek prasiddh feature <strong>Uluru (Ayers Rock)</strong> hai, jo ek vishal chattan hai." },
          ]},
          { id: '4.4', title: "Anya Pramukh Visheshtayein", content: [
              { type: 'heading', text: "The Great Artesian Basin" },
              { type: 'paragraph', text: "Yah sookhe interior ke liye bhumigat jal (groundwater) ka ek mahatvapurna srot hai. Pani aksar namkeen hota hai, jo kheti ke liye anupयुक्त hai lekin pashu palan ke liye mahatvapurna hai." },
              { type: 'heading', text: "The Rift Valley of Australia" },
              { type: 'paragraph', text: "South Australia mein sthit, yah ek lambi, khadi ghaati hai jo zameen ke dhasne se bani hai." }
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

const ColumnsComponent = ({ content }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 my-4 items-start">
            {content.map((column, index) => (
                <div key={index} style={{ flexBasis: '100%' }}>
                   <ContentRenderer content={column.items} />
                </div>
            ))}
        </div>
    );
};


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
      case 'image':
        return (
            <figure key={index} className="w-full my-4">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-contain rounded-lg shadow-md" />
            </figure>
        );
      case 'columns':
        return <ColumnsComponent key={index} content={item.content} />;
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
                                                    {subSection.id.split('.')[1]}. {subSection.title}
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
      "@id": "https://vardaanlearning.com/notes/class-7-icse-australia" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Australia_satellite_plane.jpg/1280px-Australia_satellite_plane.jpg",
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
    "datePublished": "2025-09-06",
    "dateModified": "2025-09-06"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 7 ICSE Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 7, ICSE, Australia Geography, Political Divisions of Australia, Physical Features of Australia, Great Barrier Reef, Vardaan Learning Institute, Notes" />
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
        .prose { color: currentColor; }
        .prose strong { color: currentColor; }
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
                openSections={openSections}
                toggleSection={toggleSection}
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
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[80px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <section key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[80px]">
                                     <h3 className="heading-font text-2xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-2 border-[var(--theme-heading-border)]">{subSection.id}. {subSection.title}</h3>
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

