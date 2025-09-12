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
    chapterTitle: "Chapter 15: India Marches Ahead",
    tocTitle: "Table of Contents",
    metaDescription: "Class 8 CBSE notes on India after independence (India Marches Ahead). Covers the Constitution, integration of states, Five Year Plans, and foreign policy.",
    sections: [
      { id: '1', title: "The Indian Independence Act, 1947", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "This was the law passed by the British Parliament that officially granted independence to India. It was designed by the British Prime Minister, Clement Attlee, and was based on the Mountbatten Plan." },
                    { type: 'heading', text: "Main Features of the Act:" },
                    { type: 'list', items: [
                        "<strong>End of British Rule:</strong> British control over India would end immediately.",
                        "<strong>Creation of Two Dominions:</strong> Two independent nations, India and Pakistan, were created.",
                        "<strong>Territory Division:</strong> Provinces like West Punjab, Sindh, and East Bengal became part of Pakistan, while the rest of British India, including East Punjab and West Bengal, remained with India.",
                        "<strong>Freedom for Princely States:</strong> The rulers of Princely States were given the freedom to decide whether to join India or Pakistan.",
                        "<strong>British Commonwealth Membership:</strong> India and Pakistan were granted complete freedom and became members of the British Commonwealth."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377644/1_xbn6vu.jpg', alt: 'Jawaharlal Nehru delivering the Tryst with Destiny speech on August 15, 1947.' }] }
            ]
          }
      ]},
      { id: '2', title: "Integration of Princely States", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "After 1947, a major challenge was to unite the 500+ Princely States into a single nation." },
                    { type: 'list', items: [
                        "<strong>Sardar Vallabhbhai Patel's Role:</strong> As India's first Deputy Prime Minister, Sardar Vallabhbhai Patel used his great wisdom and diplomatic skills to persuade most of the states to join India.",
                        "<strong>States Joining Later:</strong> Most states joined by August 15, 1947. However, Junagadh, Jammu & Kashmir, and Hyderabad joined later. Junagadh and Hyderabad were integrated after military action."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/2_rhppzu.jpg', alt: 'Sardar Vallabhbhai Patel, who was instrumental in the integration of princely states.' }] }
            ]
          }
      ]},
      { id: '3', title: "Post-Independence Leadership", content: [
          { type: 'list', items: [
              "<strong>Lord Mountbatten:</strong> He was the last British Viceroy and served as the first Governor-General of independent India.",
              "<strong>Chakravarti Rajagopalachari:</strong> He succeeded Lord Mountbatten, becoming the first and only Indian Governor-General."
          ]}
      ]},
      { id: '4', title: "Integration of Other Territories", content: [
          { type: 'paragraph', text: "Some areas were still under foreign rule and were integrated into India after 1947." },
          { type: 'list', items: [
              "<strong>Pondicherry:</strong> Liberated from French rule (1953-54).",
              "<strong>Goa:</strong> Liberated from Portuguese rule (1961).",
              "<strong>Sikkim:</strong> Was a British protectorate; it officially became a state of India in 1975."
          ]}
      ]},
      { id: '5', title: "The Indian Constitution", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "India needed a rulebook to govern itself, which led to the creation of the Constitution." },
                    { type: 'paragraph', text: "<strong>The Constituent Assembly:</strong> A special body was formed to write the Constitution. It took them 2 years, 11 months, and 17 days to complete this task." },
                    { type: 'heading', text: "Adoption and Republic Day:" },
                    { type: 'list', items: [
                        "The Constitution was passed on November 26, 1949.",
                        "It was formally adopted on January 26, 1950, the day India became a Republic. This day is celebrated as Republic Day."
                    ]},
                    { type: 'heading', text: "First Leaders:" },
                    { type: 'list', items: [
                        "<strong>Dr. Rajendra Prasad:</strong> President of the Constituent Assembly and the first President of India.",
                        "<strong>Jawaharlal Nehru:</strong> The first Prime Minister of India.",
                        "<strong>Sardar Vallabhbhai Patel:</strong> The first Deputy Prime Minister of India."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/3_kiymjh.png', alt: 'The framers of our nation signing the Constitution of India.' }] }
            ]
          }
      ]},
      { id: '6', title: "India—On the Path of Progress", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "Since independence, India has made significant progress in many fields." },
                    { type: 'heading', text: "Economic & Agricultural Growth:" },
                    { type: 'list', items: [
                        "The country built essential infrastructure (power, transport, etc.) to support industrial growth.",
                        "The Green Revolution led to a massive increase in food grain production.",
                        "The White Revolution boosted milk production, making India the world's largest producer."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377641/4_ultsxp.jpg', alt: 'The Green Revolution transformed India\'s agriculture.' }] }
            ]
          },
          { type: 'heading', text: "Planned Development:" },
          { type: 'list', items: [
              "India adopted Five Year Plans to guide its economic development. The Planning Commission was set up in 1950 for this purpose.",
              "In 2015, the Planning Commission was replaced by NITI Aayog (National Institute for Transforming India), which focuses on involving states in the planning process (a \"bottom-up\" approach)."
          ]}
      ]},
      { id: '7', title: "Indian Democracy", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "India is the world's largest democracy, where citizens elect their government." },
                    { type: 'heading', text: "The Political System:" },
                    { type: 'list', items: [
                        "India has a multi-party system, with both National and Regional political parties.",
                        "The political landscape has shifted from the dominance of a single party to an era of coalition governments, where multiple parties join to form the government."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/5_uveuwi.jpg', alt: 'The power of democracy: Indian citizens participating in the world\'s largest elections.' }] }
            ]
          },
          { type: 'heading', text: "The Election Commission of India (ECI):" },
          { type: 'list', items: [
              "The ECI is an independent body that ensures free and fair elections, using Electronic Voting Machines (EVMs).",
              "It officially recognizes parties based on their performance in elections (percentage of votes and number of seats won)."
          ]}
      ]},
      { id: '8', title: "India's Foreign Policy", content: [
          { type: 'list', items: [
              "<strong>Architect:</strong> Jawaharlal Nehru is considered the chief architect of India's foreign policy.",
              "<strong>Core Principles:</strong> The main features include Non-Alignment (not joining major power blocs), promoting World Peace, Anti-Colonialism, and Anti-Racialism.",
              "<strong>Panchsheel:</strong> The foreign policy is based on five principles of peaceful co-existence, including mutual respect, non-aggression, and non-interference in each other's internal affairs."
          ]}
      ]},
      { id: '9', title: "Challenges Faced by Independent India", content: [
          { type: 'list', items: [
              "<strong>Initial Challenges:</strong> At independence, India faced extreme poverty, millions of refugees from Partition, social evils like the caste system, and deep religious divides.",
              "<strong>Ongoing Challenges:</strong> Even today, poverty and illiteracy remain the biggest obstacles to the nation's progress.",
              "<strong>Progress:</strong> Despite these huge problems, India has made remarkable progress in science, industry, economy, and communication, focusing on becoming a unified and developed nation."
          ]}
      ]},
      { id: '10', title: "India Vision 2020", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "This was a vision to make India a strong, vibrant, and developed country." },
                    { type: 'list', items: [
                        "It focused on key areas like education, agriculture, IT, health, and national security.",
                        "The vision was strongly advocated by the late President Dr. A.P.J. Abdul Kalam."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377639/6_yb6wtp.jpg', alt: 'Dr. A.P.J. Abdul Kalam, the People\'s President, inspiring the youth to build a developed India.' }] }
            ]
          }
      ]},
      { id: '11', title: "Keywords", content: [
          { type: 'list', items: [
              "<strong>British Commonwealth:</strong> An association of independent countries that were formerly part of the British Empire.",
              "<strong>Coalition government:</strong> A government formed by two or more parties when no single party gets a majority.",
              "<strong>Dominion:</strong> A self-governing nation within the British Commonwealth.",
              "<strong>Princely States:</strong> Indian states ruled by native rulers who were under the ultimate authority of the British."
          ]}
      ]}
    ]
  },
  hi: {
    chapterTitle: "Chapter 15: India Marches Ahead",
    tocTitle: "Table of Contents",
    metaDescription: "Azaadi ke baad India (India Marches Ahead) par Class 8 CBSE notes. Constitution, states ka integration, Five Year Plans, aur foreign policy jaise topics cover kiye gaye hain.",
    sections: [
      { id: '1', title: "The Indian Independence Act, 1947", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "Yeh woh law tha jise British Parliament ne pass karke India ko officially azaadi di. Ise British Prime Minister, Clement Attlee ne design kiya tha aur yeh Mountbatten Plan par based tha." },
                    { type: 'heading', text: "Main Features of the Act:" },
                    { type: 'list', items: [
                        "<strong>End of British Rule:</strong> India par British control turant khatam ho jayega.",
                        "<strong>Creation of Two Dominions:</strong> Do independent nations, India aur Pakistan, banaye gaye.",
                        "<strong>Territory Division:</strong> West Punjab, Sindh, aur East Bengal jaise provinces Pakistan ka hissa ban gaye, jabki baaki British India, jismein East Punjab aur West Bengal shaamil the, India ke paas raha.",
                        "<strong>Freedom for Princely States:</strong> Princely States ke rulers ko yeh azaadi di gayi ki woh India ya Pakistan, kisi ko bhi join kar sakte hain.",
                        "<strong>British Commonwealth Membership:</strong> India aur Pakistan ko complete freedom mili aur woh British Commonwealth ke members ban gaye."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377644/1_xbn6vu.jpg', alt: 'Jawaharlal Nehru delivering the Tryst with Destiny speech on August 15, 1947.' }] }
            ]
          }
      ]},
      { id: '2', title: "Integration of Princely States", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "1947 ke baad, 500 se zyada Princely States ko ek nation mein unite karna ek bada challenge tha." },
                    { type: 'list', items: [
                        "<strong>Sardar Vallabhbhai Patel's Role:</strong> India ke pehle Deputy Prime Minister ke roop mein, Sardar Vallabhbhai Patel ne apni great wisdom aur diplomatic skills ka use karke zyadaatar states ko India mein shaamil hone ke liye mana liya.",
                        "<strong>States Joining Later:</strong> Zyadaatar states 15 August, 1947 tak join ho gaye. Lekin, Junagadh, Jammu & Kashmir, aur Hyderabad ne baad mein join kiya. Junagadh aur Hyderabad ko military action ke baad integrate kiya gaya."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/2_rhppzu.jpg', alt: 'Sardar Vallabhbhai Patel, who was instrumental in the integration of princely states.' }] }
            ]
          }
      ]},
      { id: '3', title: "Post-Independence Leadership", content: [
          { type: 'list', items: [
              "<strong>Lord Mountbatten:</strong> Woh aakhiri British Viceroy the aur azaad India ke pehle Governor-General bane.",
              "<strong>Chakravarti Rajagopalachari:</strong> Unhone Lord Mountbatten ko succeed kiya, aur pehle aur aakhiri Indian Governor-General bane."
          ]}
      ]},
      { id: '4', title: "Integration of Other Territories", content: [
          { type: 'paragraph', text: "Kuch areas abhi bhi foreign rule ke under the aur 1947 ke baad India mein integrate hue." },
          { type: 'list', items: [
              "<strong>Pondicherry:</strong> French rule se 1953-54 mein azaad hua.",
              "<strong>Goa:</strong> Portuguese rule se 1961 mein azaad hua.",
              "<strong>Sikkim:</strong> Yeh ek British protectorate tha; yeh officially 1975 mein India ka state bana."
          ]}
      ]},
      { id: '5', title: "The Indian Constitution", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "India ko khud ko govern karne ke liye ek rulebook ki zaroorat thi, jisse Constitution bana." },
                    { type: 'paragraph', text: "<strong>The Constituent Assembly:</strong> Constitution likhne ke liye ek special body banayi gayi. Unhe yeh kaam poora karne mein 2 saal, 11 mahine, aur 17 din lage." },
                    { type: 'heading', text: "Adoption and Republic Day:" },
                    { type: 'list', items: [
                        "Constitution 26 November, 1949 ko pass hua.",
                        "Ise formally 26 January, 1950 ko adopt kiya gaya, jis din India ek Republic bana. Is din ko Republic Day ke roop mein celebrate kiya jaata hai."
                    ]},
                    { type: 'heading', text: "First Leaders:" },
                    { type: 'list', items: [
                        "<strong>Dr. Rajendra Prasad:</strong> Constituent Assembly ke President aur India ke pehle President.",
                        "<strong>Jawaharlal Nehru:</strong> India ke pehle Prime Minister.",
                        "<strong>Sardar Vallabhbhai Patel:</strong> India ke pehle Deputy Prime Minister."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/3_kiymjh.png', alt: 'The framers of our nation signing the Constitution of India.' }] }
            ]
          }
      ]},
      { id: '6', title: "India—On the Path of Progress", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "Azaadi ke baad se, India ne kai fields mein kaafi progress ki hai." },
                    { type: 'heading', text: "Economic & Agricultural Growth:" },
                    { type: 'list', items: [
                        "Desh ne industrial growth ko support karne ke liye zaroori infrastructure (power, transport, etc.) banaya.",
                        "Green Revolution se food grain production mein bhaari badhotri hui.",
                        "White Revolution ne milk production ko boost kiya, jisse India duniya ka sabse bada producer bana."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377641/4_ultsxp.jpg', alt: 'The Green Revolution transformed India\'s agriculture.' }] }
            ]
          },
          { type: 'heading', text: "Planned Development:" },
          { type: 'list', items: [
              "India ne apni economic development ko guide karne ke liye Five Year Plans apnaye. Iske liye 1950 mein Planning Commission banaya gaya.",
              "2015 mein, Planning Commission ko NITI Aayog (National Institute for Transforming India) se replace kar diya gaya, jo planning process mein states ko shaamil karne par focus karta hai (ek \"bottom-up\" approach)."
          ]}
      ]},
      { id: '7', title: "Indian Democracy", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "India duniya ki sabse badi democracy hai, jahan citizens apni government chunte hain." },
                    { type: 'heading', text: "The Political System:" },
                    { type: 'list', items: [
                        "India mein multi-party system hai, jismein National aur Regional dono political parties hain.",
                        "Political landscape ek single party ke dominance se coalition governments ke daur mein shift ho gaya hai, jahan kai partiyan milkar government banati hain."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/5_uveuwi.jpg', alt: 'The power of democracy: Indian citizens participating in the world\'s largest elections.' }] }
            ]
          },
          { type: 'heading', text: "The Election Commission of India (ECI):" },
          { type: 'list', items: [
              "ECI ek independent body hai jo Electronic Voting Machines (EVMs) ka use karke free aur fair elections ensure karti hai.",
              "Yeh elections mein performance (votes ka percentage aur jeeti hui seats) ke basis par parties ko officially recognize karti hai."
          ]}
      ]},
      { id: '8', title: "India's Foreign Policy", content: [
          { type: 'list', items: [
              "<strong>Architect:</strong> Jawaharlal Nehru ko India ki foreign policy ka chief architect maana jaata hai.",
              "<strong>Core Principles:</strong> Main features mein Non-Alignment (kisi bade power bloc ko join na karna), World Peace ko promote karna, Anti-Colonialism, aur Anti-Racialism shaamil hain.",
              "<strong>Panchsheel:</strong> Foreign policy peaceful co-existence ke paanch principles par based hai, jismein mutual respect, non-aggression, aur ek doosre ke internal mamlon mein non-interference shaamil hai."
          ]}
      ]},
      { id: '9', title: "Challenges Faced by Independent India", content: [
          { type: 'list', items: [
              "<strong>Initial Challenges:</strong> Azaadi ke time, India ne extreme poverty, Partition se aaye laakhon refugees, caste system jaisi social evils, aur gehre religious divides ka saamna kiya.",
              "<strong>Ongoing Challenges:</strong> Aaj bhi, poverty aur illiteracy desh ki progress mein sabse badi rukawatein hain.",
              "<strong>Progress:</strong> In badi problems ke bawajood, India ne science, industry, economy, aur communication mein remarkable progress ki hai, aur ek unified aur developed nation banne par focus kiya hai."
          ]}
      ]},
      { id: '10', title: "India Vision 2020", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "Yeh India ko ek strong, vibrant, aur developed country banane ka ek vision tha." },
                    { type: 'list', items: [
                        "Isne education, agriculture, IT, health, aur national security jaise key areas par focus kiya.",
                        "Is vision ko late President Dr. A.P.J. Abdul Kalam ne strongly support kiya tha."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377639/6_yb6wtp.jpg', alt: 'Dr. A.P.J. Abdul Kalam, the People\'s President, inspiring the youth to build a developed India.' }] }
            ]
          }
      ]},
      { id: '11', title: "Keywords", content: [
          { type: 'list', items: [
              "<strong>British Commonwealth:</strong> Azaad deshon ka ek association jo pehle British Empire ka hissa the.",
              "<strong>Coalition government:</strong> Jab kisi ek party ko majority nahi milti toh do ya zyada partiyon dwara banayi gayi sarkar.",
              "<strong>Dominion:</strong> British Commonwealth ke andar ek self-governing nation.",
              "<strong>Princely States:</strong> Indian states jin par desi raja rule karte the jo aakhir mein British authority ke under the."
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

const ColumnsComponent = ({ content }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 my-4 items-start">
            {content.map((column, index) => (
                <div key={index} style={{ flexBasis: column.width || 'auto' }}>
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
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true });
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
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vardaanlearning.com/notes/cbse-class-8-history-chapter-14" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/1_q9rfla.jpg",  // A representative image
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
    "datePublished": "2025-08-26",
    "dateModified": "2025-08-26"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 8 History Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="CBSE Class 8, History, Nationalist Movement, Indian National Congress, Swadeshi Movement, Vardaan Learning Institute, NCERT Notes" />
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
