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


// Data for the entire chapter, structured for dual-language support
const notesData = {
  en: { // Standard English Version
    chapterTitle: "Fundamental Rights and Duties",
    tocTitle: "Table of Contents",
    metaDescription: "Class 7 ICSE notes on Fundamental Rights and Duties. Covers Citizenship, Right to Equality, Freedom, Education, and the role of a citizen in Indian Democracy.",
    sections: [
      { id: '1', title: "Citizenship and the Role of a Citizen", content: [
          { type: 'list', items: [
              "<strong>Citizenship</strong> is defined as the legal relationship that officially binds an individual to a country, making them a member of that state.",
              "In India, the Constitution has adopted a system of <strong>single citizenship</strong>. This means that a citizen of India is solely a citizen of the nation and cannot hold the citizenship of any other country simultaneously.",
              "This contrasts with the system in America, which has the concept of <strong>dual citizenship</strong>, where an individual is a citizen of the state they reside in as well as of the country as a whole.",
              "A <strong>concerned citizen</strong> is someone who is socially aware, responsive, and actively committed to their role in a democratic society.",
              "A cornerstone of this role is the <strong>right to freedom of speech</strong>. This right enables citizens to share their views openly, both in public forums and through the media, which helps in shaping public opinion about the government's performance.",
              "In a democracy, it's vital that people understand government policies so they can, as a group of concerned citizens, either support the government or vote it out of power during elections.",
              "The right to vote is a fundamental part of our democracy, and it is every citizen's duty to exercise this right.",
              "It is essential to remember that <strong>rights and duties are inseparable</strong>—they are like two sides of the same coin and always go hand-in-hand."
          ]}
      ]},
      { id: '2', title: "Fundamental Rights: The Core of Indian Democracy", content: [
          { type: 'paragraph', text: "<strong>Fundamental Rights</strong> are the basic human rights guaranteed by the Constitution which are considered absolutely essential for the all-around development of a person and for making life worth living. These rights are so important that they cannot be altered or removed by any simple legislative process." },
          { type: 'list', items: [
              "These rights are vital for the smooth functioning of a democratic republic and for the social, economic, political, and cultural progress of all people, which in turn fuels the nation's development.",
              "In a society with historical social hierarchies like the caste system, the enforcement of Fundamental Rights allows weaker sections to express their aspirations freely and enjoy social dignity, helping to ease social tensions."
          ]},
          { type: 'paragraph', text: "The Constitution of India guarantees the following Fundamental Rights:" }
        ],
        subSections: [
          { id: '2.1', title: "a) Right to Equality", content: [
              { type: 'list', items: [
                  "This right establishes the principle that all citizens are equal before the law.",
                  "The state is prohibited from discriminating against anyone on the basis of gender, religion, caste, race, or place of birth.",
                  "This equality extends to having access to public places like shops and restaurants and using public facilities like wells and transport.",
                  "All citizens are entitled to equal opportunities in government employment based on merit and qualifications.",
                  "Furthermore, this right abolishes the practice of <strong>untouchability</strong>, making it a punishable offense.",
                  "Titles conferred by the British, such as 'Maharaja' or 'Nawab', have also been abolished as they contradict the principle of social equality."
              ]}
          ]},
          { id: '2.2', title: "b) Right to Freedom", content: [
               { type: 'paragraph', text: "This right ensures civil liberties and protects individuals from repressive actions by the government. It includes six specific freedoms:" },
               { type: 'list', items: [
                  "<strong>Freedom of speech and expression:</strong> Citizens can articulate their views through the press, books, or public speeches, but cannot misuse this right to incite violence or endanger the nation's security.",
                  "<strong>Freedom to assemble peacefully without arms:</strong> People can hold meetings and processions, provided they are peaceful and do not threaten law and order.",
                  "<strong>Right to form associations and unions:</strong> People can form groups to protect their interests, though the government can impose reasonable restrictions for public safety.",
                  "<strong>Right to free movement:</strong> Every citizen can travel and move freely throughout the territory of India.",
                  "<strong>Freedom to reside or settle in any part of India:</strong> An Indian citizen can live, buy, and sell property anywhere in the country.",
                  "<strong>Freedom to practise any profession:</strong> Citizens can carry on any occupation, trade, or business, as long as it is not harmful or immoral."
               ]}
          ]},
          { id: '2.3', title: "c) Right to Education", content: [
              { type: 'list', items: [
                  "Made a Fundamental Right in 2009 under Article 21-A, the <strong>Right to Education</strong> guarantees <strong>free education</strong> for every Indian child between the ages of 6 and 14.",
                  "It also mandates that private schools reserve some seats for children from financially weaker sections."
              ]}
          ]},
          { id: '2.4', title: "d) Right Against Exploitation", content: [
               { type: 'list', items: [
                  "This right protects citizens from being forced to work against their will or without payment.",
                  "Crucially, it prohibits <strong>child labor</strong>, stating that children under the age of 14 cannot be employed to work."
               ]}
          ]},
          { id: '2.5', title: "e) Right to Freedom of Religion", content: [
               { type: 'list', items: [
                  "In a multi-religious country like India, the Constitution guarantees that all religions enjoy equal status.",
                  "The government maintains a <strong>secular</strong> stance, treating religion as a personal matter for each individual."
               ]}
          ]},
          { id: '2.6', title: "f) Cultural and Educational Rights", content: [
               { type: 'list', items: [
                  "To preserve India's rich diversity, <strong>minorities</strong> have been granted the freedom to protect and promote their distinct languages, cultures, and scripts.",
                  "They also have the right to establish their own educational institutions."
               ]}
          ]},
          { id: '2.7', title: "g) Right to Constitutional Remedies", content: [
               { type: 'list', items: [
                  "This right is the guardian of all other Fundamental Rights.",
                  "It guarantees every citizen the right to go to the courts if their Fundamental Rights are violated by the state, a group, or another individual."
               ]}
          ]}
        ]
      },
      { id: '3', title: "Limitations and Fundamental Duties", content: [
          { type: 'list', items: [
            "While essential, Fundamental Rights are not absolute. They must be exercised with responsibility so as not to harm others.",
            "The state can impose restrictions on these rights in the interest of public safety and order, especially during a crisis or war.",
            "The only time these rights were suspended was during the period of <strong>Emergency</strong> from 1975 to 1977.",
            "Just as the state grants rights, citizens have <strong>Fundamental Duties</strong> towards the state. These duties are the obligations of citizens to their country.",
            "A list of ten duties was added to the Constitution in 1976."
          ]},
          { type: 'paragraph', text: "Key duties include:" },
          { type: 'list', items: [
              "To abide by the Constitution and respect the National Flag and National Anthem.",
              "To uphold and protect the sovereignty, unity, and integrity of India.",
              "To promote harmony and the spirit of common brotherhood.",
              "To safeguard public property and to reject violence.",
              "To protect and improve the natural environment."
          ]},
          { type: 'list', items: [
              "These duties are <strong>not enforceable by law</strong>, but they are considered the <strong>moral obligations</strong> of all responsible citizens."
          ]}
      ]}
    ]
  },
  hi: { // Hinglish Version
    chapterTitle: "Fundamental Rights and Duties",
    tocTitle: "Table of Contents",
    metaDescription: "Class 7 ICSE ke liye Fundamental Rights and Duties par notes. Covers Citizenship, Right to Equality, Freedom, Education, aur ek nagrik ka role simple Hinglish mein.",
    sections: [
      { id: '1', title: "Citizenship and the Role of a Citizen", content: [
          { type: 'list', items: [
              "<strong>Citizenship</strong> (Nagrikta) ek legal relationship hai jo ek vyakti ko ek desh se official taur par jodti hai, jisse woh uss state ka member ban jaata hai.",
              "India mein, Constitution ne <strong>single citizenship</strong> (ekal nagrikta) ka system apnaya hai. Iska matlab hai ki India ka ek nagrik sirf desh ka nagrik hai aur woh ek hi samay mein kisi doosre desh ki nagrikta nahi le sakta.",
              "Yeh America ke system se alag hai, jahan <strong>dual citizenship</strong> (dohri nagrikta) ka concept hai, jismein ek vyakti uss state ka nagrik hota hai jahan woh rehta hai aur saath hi poore desh ka bhi.",
              "Ek <strong>concerned citizen</strong> (jagruk nagrik) woh hai jo samajik roop se jagruk, jimmedar, aur ek loktantrik samaj mein apni bhoomika ke prati sakriya roop se pratibaddh hai.",
              "Is bhoomika ka ek aadhar hai <strong>right to freedom of speech</strong> (bolne ki azadi ka adhikar). Yeh adhikar nagrikon ko apne vichaar khulkar public forums aur media ke through share karne ki anumati deta hai, jo sarkar ke performance ke baare mein janta ki raay banane mein madad karta hai.",
              "Ek loktantra mein, yeh zaroori hai ki log sarkari neetiyon ko samjhein taaki ve, ek jagruk nagrikon ke samooh ke roop mein, ya toh sarkar ka samarthan kar sakein ya chunaav ke dauran use satta se hata sakein.",
              "Vote ka adhikar hamare loktantra ka ek mool hissa hai, aur is adhikar ka prayog karna har nagrik ka kartavya hai.",
              "Yeh yaad rakhna zaroori hai ki <strong>adhikar aur kartavya alag nahi ho sakte</strong>—woh ek hi sikke ke do pehlu hain aur hamesha saath-saath chalte hain."
          ]}
      ]},
      { id: '2', title: "Fundamental Rights: The Core of Indian Democracy", content: [
          { type: 'paragraph', text: "<strong>Fundamental Rights</strong> (Maulik Adhikar) woh basic human rights hain jo Samvidhan dwara guarantee kiye gaye hain aur jo ek vyakti ke sarvangeen vikas aur jeevan ko jeene layak banane ke liye bilkul zaroori maane jaate hain. Yeh adhikar itne mahatvapurna hain ki unhein kisi sadharan legislative process se badla ya hataya nahi ja sakta." },
          { type: 'list', items: [
              "Yeh adhikar ek loktantrik ganrajya ke smooth functioning aur sabhi logon ke samajik, aarthik, rajnitik, aur sanskritik vikas ke liye zaroori hain, jo badle mein desh ke vikas ko badhawa deta hai.",
              "Jaati vyavastha jaise aitihasik samajik hierarchies wale samaj mein, Fundamental Rights ka pravartan kamjor vargon ko apni aakankshaon ko khulkar vyakt karne aur samajik samman ka anand lene ki anumati deta hai, jisse samajik tanav ko kam karne mein madad milti hai."
          ]},
          { type: 'paragraph', text: "Bharat ka Samvidhan nimnalikhit Maulik Adhikaron ki guarantee deta hai:" }
        ],
        subSections: [
          { id: '2.1', title: "a) Right to Equality", content: [
              { type: 'list', items: [
                  "Yeh adhikar is siddhant ko sthapit karta hai ki kanoon ke samne sabhi nagrik barabar hain.",
                  "Rajya ko kisi ke bhi khilaf ling, dharm, jaati, nasl, ya janm sthan ke aadhar par bhedbhav karne se roka gaya hai.",
                  "Yeh samanata dukanon aur restaurant jaise sarvajanik sthanon tak pahunchne aur kuon aur parivahan jaisi sarvajanik suvidhaon ka upyog karne tak faili hui hai.",
                  "Sabhi nagrikon ko yogyata aur qualifications ke aadhar par sarkari naukriyon mein saman avsar milne ka adhikar hai.",
                  "Iske alawa, yeh adhikar <strong>untouchability</strong> (chhuachhut) ki pratha ko samapt karta hai, jise ek dandaniya aparadh banata hai.",
                  "'Maharaja' ya 'Nawab' jaise British dwara diye gaye titles ko bhi samapt kar diya gaya hai kyunki ve samajik samanata ke siddhant ke khilaf hain."
              ]}
          ]},
          { id: '2.2', title: "b) Right to Freedom", content: [
               { type: 'paragraph', text: "Yeh adhikar nagrik svatantrata sunishchit karta hai aur vyaktiyon ko sarkar ki damankari karyavahiyon se bachata hai. Ismein chhah vishisht svatantratayein shamil hain:" },
               { type: 'list', items: [
                  "<strong>Freedom of speech and expression:</strong> Nagrik apne vichaaron ko press, kitabon, ya sarvajanik bhashanon ke madhyam se vyakt kar sakte hain, lekin is adhikar ka durupyog hinsa bhadkane ya desh ki suraksha ko khatre mein daalne ke liye nahi kar sakte.",
                  "<strong>Freedom to assemble peacefully without arms:</strong> Log shantipurna tarike se aur bina hathiyaron ke sabhayein aur juloos nikal sakte hain, basharte ki ve shantipurna hon aur kanoon-vyavastha ke liye khatra na banein.",
                  "<strong>Right to form associations and unions:</strong> Log apne hiton ki raksha ke liye samooh bana sakte hain, haalanki sarkar sarvajanik suraksha ke liye uchit pratibandh laga sakti hai.",
                  "<strong>Right to free movement:</strong> Pratyek nagrik Bharat ke poore kshetr mein svatantrata se ghoom-fir sakta hai.",
                  "<strong>Freedom to reside or settle in any part of India:</strong> Ek Bhartiya nagrik desh mein kahin bhi reh sakta hai, sampatti khareed aur bech sakta hai.",
                  "<strong>Freedom to practise any profession:</strong> Nagrik koi bhi pesha, vyapar, ya business kar sakte hain, jab tak ki woh hanikarak ya anaitik na ho."
               ]}
          ]},
          { id: '2.3', title: "c) Right to Education", content: [
              { type: 'list', items: [
                  "Article 21-A ke tahat 2009 mein ek Maulik Adhikar banaya gaya, <strong>Right to Education</strong> (Shiksha ka Adhikar) 6 se 14 saal ke har Bhartiya bachche ke liye <strong>free education</strong> (muft shiksha) ki guarantee deta hai.",
                  "Yeh private schools ko bhi aadesh deta hai ki ve aarthik roop se kamjor vargon ke bachchon ke liye kuch seatein aarakshit karein."
              ]}
          ]},
          { id: '2.4', title: "d) Right Against Exploitation", content: [
               { type: 'list', items: [
                  "Yeh adhikar nagrikon ko unki ichha ke viruddh ya bina bhugtan ke kaam karne ke liye majboor kiye jaane se bachata hai.",
                  "Mahatvapurna roop se, yeh <strong>child labor</strong> (baal shram) par rok lagata hai, yeh kehte hue ki 14 saal se kam umar ke bachchon ko kaam par nahi lagaya ja sakta."
               ]}
          ]},
          { id: '2.5', title: "e) Right to Freedom of Religion", content: [
               { type: 'list', items: [
                  "Bharat jaise bahu-dharmik desh mein, Samvidhan yeh guarantee deta hai ki sabhi dharmon ko saman darja prapt hai.",
                  "Sarkar ek <strong>secular</strong> (dharmanirpeksh) rukh banaye rakhti hai, dharm ko pratyek vyakti ka niji mamla maanti hai."
               ]}
          ]},
          { id: '2.6', title: "f) Cultural and Educational Rights", content: [
               { type: 'list', items: [
                  "Bharat ki samriddh vividhata ko sanrakshit karne ke liye, <strong>minorities</strong> (alpasankhyakon) ko apni vishisht bhashaon, sanskritiyon, aur lipiyon ki raksha aur unhe badhava dene ki svatantrata di gayi hai.",
                  "Unhein apne khud ke shaikshanik sansthan sthapit karne ka bhi adhikar hai."
               ]}
          ]},
          { id: '2.7', title: "g) Right to Constitutional Remedies", content: [
               { type: 'list', items: [
                  "Yeh adhikar anya sabhi Maulik Adhikaron ka rakshak hai.",
                  "Yeh pratyek nagrik ko yeh adhikar deta hai ki yadi unke Maulik Adhikaron ka rajya, kisi samooh, ya kisi anya vyakti dwara ullanghan kiya jaata hai, to ve adalaton mein ja sakte hain."
               ]}
          ]}
        ]
      },
      { id: '3', title: "Limitations and Fundamental Duties", content: [
          { type: 'list', items: [
            "Zaroori hone ke bawajood, Maulik Adhikar anant nahi hain. Unka prayog jimmedari ke saath kiya jaana chahiye taaki doosron ko nuksan na ho.",
            "Rajya sarvajanik suraksha aur vyavastha ke hit mein in adhikaron par pratibandh laga sakta hai, khaaskar kisi sankat ya yuddh ke dauran.",
            "In adhikaron ko keval ek baar <strong>Emergency</strong> (Aapatkal) ke dauran 1975 se 1977 tak nilambit kiya gaya tha.",
            "Jaise rajya adhikar deta hai, waise hi nagrikon ke rajya ke prati <strong>Fundamental Duties</strong> (Maulik Kartavya) bhi hain. Yeh kartavya nagrikon ki apne desh ke prati badhyatayein hain.",
            "1976 mein Samvidhan mein das kartavyon ki ek soochi jodi gayi thi."
          ]},
          { type: 'paragraph', text: "Mukhya kartavyon mein shamil hain:" },
          { type: 'list', items: [
              "Samvidhan ka palan karna aur Rashtriya Dhwaj aur Rashtriya Gaan ka samman karna.",
              "Bharat ki samprabhuta, ekta, aur akhandata ko banaye rakhna aur uski raksha karna.",
              "Samarasta aur saman bhratritva ki bhavna ko badhava dena.",
              "Sarvajanik sampatti ki suraksha karna aur hinsa ka tyag karna.",
              "Prakritik paryavaran ki raksha aur sudhar karna."
          ]},
          { type: 'list', items: [
              "Yeh kartavya <strong>kanoon dwara lagoo nahi kiye ja sakte</strong>, lekin unhein sabhi jimmedar nagrikon ki <strong>naitik badhyatayein</strong> mana jaata hai."
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
      "@id": "https://vardaanlearning.com/notes/class-7-fundamental-rights" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088015/fundamental_rights_india.jpg",  // A representative image
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
    "datePublished": "2025-09-16",
    "dateModified": "2025-09-16"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 7 ICSE Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 7, ICSE, Fundamental Rights, Fundamental Duties, Indian Constitution, Citizenship, Vardaan Learning Institute, Notes" />
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
