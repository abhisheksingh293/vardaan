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
    chapterTitle: "Chapter 12: Impact of British Rule on India",
    tocTitle: "Table of Contents",
    metaDescription: "Detailed class notes on the impact of British rule in India, covering education, social reforms, and key reformers. Perfect for Class 8 CBSE students at Vardaan Learning Institute.",
    sections: [
      {
        id: '1',
        title: "Education Before the British",
        content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "Before the British, India had a traditional education system:" },
                    { type: 'list', items: [
                        "Elementary education was provided in pathshalas and maktabs.",
                        "Higher education was offered in tols and madarsas, focusing on subjects like religion, languages (Sanskrit, Persian), law, logic, and medicine based on old texts."
                    ]}
                ]},
                { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/1_vjokhy.jpg', alt: 'A traditional Indian pathshala under a banyan tree.' }] }
            ]
          }
        ]
      },
      {
        id: '2',
        title: "Education Under the British",
        subSections: [
            {
                id: '2.1', title: 'Initial British Approach', content: [
                    { type: 'list', items: [
                        "The main goal of the East India Company was profit, not education. They also aimed to promote Christianity through missionary schools."
                    ]}
                ]
            },
            {
                id: '2.2', title: 'Key Educational Policies and Acts', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>Charter Act of 1813:</strong> This was the first major step, sanctioning one lakh rupees (₹1,00,000) for education in India.",
                                    "<strong>Anglicist-Orientalist Debate:</strong> This was a conflict over the medium of instruction. Orientalists wanted to use traditional languages like Sanskrit and Persian. Anglicists like Lord Macaulay argued for English. The Anglicists won. Macaulay's goal was to form a class of Indians who were \"English in taste and opinion\" to serve as cheap labor for British administration.",
                                    "<strong>Wood's Despatch, 1854:</strong> Called the \"Magna Carta of English Education in India,\" it recommended creating a Department of Education, setting up Universities in Bombay, Calcutta, and Madras, and establishing teacher training institutes.",
                                    "<strong>Indian Universities Act of 1904:</strong> Passed by Lord Curzon to increase government control over universities, as he believed they were producing political revolutionaries."
                                  ]}
                            ]},
                            { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198509/2_yqfvvn.jpg', alt: 'Lord Macaulay, architect of the English education policy in India.' }] }
                        ]
                    }
                ]
            },
            {
                id: '2.3', title: 'Call for a National Education System', content: [
                    { type: 'list', items: [
                        "<strong>Wardha Education Scheme (1937):</strong> Initiated by Mahatma Gandhi, it focused on instilling moral values like justice, self-respect, and dignity, moving away from the \"master-slave\" mentality of English education.",
                        "<strong>John Sargent's Plan (1943):</strong> Proposed universal, compulsory, and free education for all children aged 6-14. Its recommendations were largely adopted by India after independence."
                    ]}
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Impact of the British Education System",
        subSections: [
            {
                id: '3.1', title: 'Positive Impacts', content: [
                    { type: 'list', items: [
                        "The English language helped unite people from different regions.",
                        "It spread modern ideals of equality, liberty, and democracy.",
                        "It fueled the spirit of nationalism.",
                        "Educated women like Sarojini Naidu joined the freedom movement."
                    ]}
                ]
            },
            {
                id: '3.2', title: 'Negative Impacts', content: [
                     { type: 'list', items: [
                        "It created a divide between the English-educated elite and the common masses.",
                        "Indian languages, literature, and thought were neglected.",
                        "Textbooks glorified British rule.",
                        "Education became accessible mainly to the rich."
                    ]}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Social Impact and Reforms",
        content: [
            { type: 'paragraph', text: "English-educated Indians led movements to reform society and remove harmful practices. They convinced the British to pass laws against these evils." },
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "<strong>Sati:</strong> The inhuman practice of a widow burning herself on her husband’s funeral pyre. It was abolished in 1829 by Governor-General William Bentinck, thanks to the efforts of Raja Ram Mohan Roy.",
                            "<strong>Female Infanticide:</strong> The practice of killing infant girls was banned by law in 1870.",
                            "<strong>Child Marriage:</strong> The Sharda Act of 1929 banned child marriage, setting the marriageable age at 18 for girls and 21 for boys.",
                            "<strong>Widow Remarriage:</strong> The Widow Remarriage Act was passed in 1856, largely due to the tireless work of Ishwar Chandra Vidyasagar."
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/3_ksqrz9.jpg', alt: 'Raja Ram Mohan Roy leading the reform against the practice of Sati.' }] }
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Major Socio-Religious Reformers",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "<strong>Shri Narayana Guru (1854-1928):</strong> A reformer from Kerala who fought against the caste system and gave the message of \"one god, one caste and one religion.\"",
                            "<strong>Jyotiba Phule (1827-90):</strong> From Maharashtra, he founded the Satya Shodhak Samaj to uplift the lower classes and started an anti-Brahmin movement.",
                            "<strong>Veeresalingam Kandukuri (1848-1919):</strong> A reformer in Andhra Pradesh who championed women's education and widow remarriage through his writings in Telugu.",
                            "<strong>Periyar E.V. Ramasamy (1879-1973):</strong> A rationalist from Tamil Nadu who started the Self-Respect Movement to fight for the rights of Dravidians and eradicate the caste system.",
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/4_tfxizh.jpg', alt: 'Portraits of major social reformers in modern India.' }] }
                ]
            },
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "<strong>Swami Dayanand Saraswati (1824-83):</strong> Founder of the Arya Samaj. He gave the call \"Back to Vedas\" and started the Shuddhi Movement to reconvert Hindus. He opposed idol worship and the caste system.",
                            "<strong>Dr. B.R. Ambedkar (1891-1956):</strong> A leader of the oppressed classes, he saw education as the key to justice. He is known as the Architect of India's Constitution.",
                            "<strong>Mahatma Gandhi (1869-1948):</strong> Fought against untouchability, calling the oppressed classes Harijans (people of God). He promoted khadi, women's education, and widow remarriage."
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/5_qq1axb.jpg', alt: 'Dr. B.R. Ambedkar, champion of the oppressed and architect of the Indian Constitution.' }] }
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Overall Impact of the Reform Movements",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "The movements brought significant changes by eradicating many social evils.",
                            "They led to a cultural awakening, with progress in literature, science, and art.",
                            "The status of women improved remarkably.",
                            "An educated middle class was created, which played a key role in India's progress.",
                            "The printing press helped spread reformist ideas, and a sense of national consciousness and unity grew stronger, paving the way for the freedom struggle."
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/6_mwpu8o.jpg', alt: 'The printing press, a key tool for spreading reformist ideas.' }] }
                ]
            }
        ]
      },
      {
        id: '7',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                "<strong>Anglicist:</strong> A specialist in English language; one who favored English education in India.",
                "<strong>Maktab:</strong> An Arabic word for a school.",
                "<strong>Orientalist:</strong> A scholar of Asian cultures; one who favored traditional Indian education.",
                "<strong>Reformer:</strong> A person who works to bring positive change in society."
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 12: Impact of British Rule on India",
    tocTitle: "Table of Contents",
    metaDescription: "British rule ka India par impact: education, social reforms, aur important reformers par complete notes. Class 8 CBSE students ke liye Vardaan Learning Institute dwara.",
    sections: [
      {
        id: '1',
        title: "Education Before the British",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'paragraph', text: "British ke aane se pehle, India ka apna ek traditional education system tha:" },
                        { type: 'list', items: [
                            "Chhote bachchon ki education 'pathshalas' aur 'maktabs' mein hoti thi.",
                            "Higher education 'tols' aur 'madarsas' mein di jaati thi. Yahan religion, languages (Sanskrit, Persian), law, logic, aur purane granthon par based medicine jaise subjects par focus kiya jaata tha."
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/1_vjokhy.jpg', alt: 'Traditional Indian Education' }] }
                ]
            }
        ]
      },
      {
        id: '2',
        title: "Education Under the British",
        subSections: [
            {
                id: '2.1', title: 'Initial British Approach', content: [
                    { type: 'list', items: [
                        "East India Company ka main goal sirf profit kamana tha, education dena nahi. Plus, woh missionary schools ke through Christianity ko bhi promote karna chahte the."
                    ]}
                ]
            },
            {
                id: '2.2', title: 'Key Educational Policies and Acts', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>Charter Act of 1813:</strong> Yeh pehla bada step tha. Ismein India mein education ke liye 1 lakh rupees sanction kiye gaye.",
                                    "<strong>Anglicist-Orientalist Debate:</strong> Is baat par ek badi debate hui ki teaching language kya honi chahiye. Orientalists chahte the ki Sanskrit aur Persian jaisi traditional languages use hon. Jabki Anglicists (jaise Lord Macaulay) ne English ke liye argue kiya. End mein, Anglicists jeet gaye. Macaulay ka goal ek aisi class of Indians banana tha jo 'taste aur opinion mein English' ho, taaki woh British admin ke liye saste mein kaam kar sakein.",
                                    "<strong>Wood's Despatch, 1854:</strong> Ise 'India mein English Education ka Magna Carta' bhi kehte hain. Isne recommend kiya ki ek alag Education Department banaya jaaye, Bombay, Calcutta, aur Madras mein Universities banayi jaayein, aur teacher training institutes bhi khole jaayein.",
                                    "<strong>Indian Universities Act of 1904:</strong> Yeh Lord Curzon ne pass kiya tha. Iska aim universities par government control badhana tha, kyunki unhe lagta tha ki universities se political revolutionary nikal rahe hain."
                                ]}
                            ]},
                            { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198509/2_yqfvvn.jpg', alt: 'Lord Macaulay' }] }
                        ]
                    }
                ]
            },
            {
                id: '2.3', title: 'Call for a National Education System', content: [
                    { type: 'list', items: [
                        "<strong>Wardha Education Scheme (1937):</strong> Yeh Mahatma Gandhi ne shuru ki thi. Iska focus English education ki 'master-slave' mentality se hatkar, bachchon mein justice, self-respect, aur dignity jaisi moral values daalna tha.",
                        "<strong>John Sargent's Plan (1943):</strong> Ismein 6-14 saal ke sabhi bachchon ke liye universal, compulsory, aur free education ka proposal tha. Azaadi ke baad India ne iski recommendations ko kaafi had tak apnaya."
                    ]}
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Impact of the British Education System",
        subSections: [
            {
                id: '3.1', title: 'Positive Impacts', content: [
                    { type: 'list', items: [
                        "English language ne alag-alag ilakon ke logon ko aapas mein jodne mein help ki.",
                        "Isse equality, liberty, aur democracy jaise modern ideas logon tak pahuche.",
                        "Isne nationalism ki भावना ko aur badhaya.",
                        "Sarojini Naidu jaisi educated women ne bhi freedom movement join kiya."
                    ]}
                ]
            },
            {
                id: '3.2', title: 'Negative Impacts', content: [
                     { type: 'list', items: [
                        "Isne English-educated logon aur aam janta ke beech ek deewar khadi kar di.",
                        "Indian languages, literature, aur culture ko ignore kiya gaya.",
                        "Textbooks mein British rule ki tareef ki jaati thi.",
                        "Education sirf ameer logon tak hi aasaani se pahunch paati thi."
                    ]}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Social Impact and Reforms",
        content: [
            { type: 'paragraph', text: "English padhe-likhe Indians ne society ko reform karne aur galat prathao ko hatane ke liye movements shuru kiye. Unhone British ko in social evils ke against kanoon banane ke liye convince kiya." },
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "<strong>Sati:</strong> Yeh ek behad galat pratha thi jismein ek widow ko apne husband ki chita par zinda jalna padta tha. Raja Ram Mohan Roy ke efforts se, Governor-General William Bentinck ne ise 1829 mein abolish kar diya.",
                            "<strong>Female Infanticide:</strong> Paida hote hi ladkiyon ko maarne ki pratha ko 1870 mein kanoon bana kar ban kar diya gaya.",
                            "<strong>Child Marriage:</strong> Sharda Act of 1929 ne child marriage ko ban kiya. Ladkiyon ke liye shaadi ki age 18 aur ladkon ke liye 21 fix ki gayi.",
                            "<strong>Widow Remarriage:</strong> Ishwar Chandra Vidyasagar ke zabardast efforts ke kaaran, Widow Remarriage Act 1856 mein pass hua."
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/3_ksqrz9.jpg', alt: 'Raja Ram Mohan Roy' }] }
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Major Socio-Religious Reformers",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "<strong>Shri Narayana Guru (1854-1928):</strong> Kerala ke reformer, jinhone caste system ke against fight ki aur 'one god, one caste and one religion' ka message diya.",
                            "<strong>Jyotiba Phule (1827-90):</strong> Maharashtra se the, unhone lower classes ko upar uthane ke liye 'Satya Shodhak Samaj' banaya aur ek anti-Brahmin movement shuru kiya.",
                            "<strong>Veeresalingam Kandukuri (1848-1919):</strong> Andhra Pradesh ke reformer, jinhone apni Telugu writings ke through women's education aur widow remarriage ko support kiya.",
                            "<strong>Periyar E.V. Ramasamy (1879-1973):</strong> Tamil Nadu ke rationalist, jinhone Dravidians ke rights ke liye aur caste system ko khatam karne ke liye 'Self-Respect Movement' shuru kiya.",
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/4_tfxizh.jpg', alt: 'Social Reformers' }] }
                ]
            },
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "<strong>Swami Dayanand Saraswati (1824-83):</strong> Arya Samaj ke founder. Unhone 'Back to Vedas' ka call diya aur Hindus ko reconvert karne ke liye 'Shuddhi Movement' shuru kiya. Woh idol worship aur caste system ke against the.",
                            "<strong>Dr. B.R. Ambedkar (1891-1956):</strong> PICHDE vargon ke neta, woh education ko justice ke liye sabse zaroori maante the. Unhe 'Architect of India's Constitution' bhi kaha jaata hai.",
                            "<strong>Mahatma Gandhi (1869-1948):</strong> Untouchability ke against lade aur pichde vargon ko 'Harijans' (Bhagwan ke log) kaha. Unhone khadi, women's education, aur widow remarriage ko promote kiya."
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/5_qq1axb.jpg', alt: 'Dr. B.R. Ambedkar' }] }
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Overall Impact of the Reform Movements",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "In movements se kai social evils khatam hue aur bade changes aaye.",
                            "Inse ek cultural awakening (jaagrukta) aayi, aur literature, science, aur art mein progress hui.",
                            "Women ka status kaafi behtar hua.",
                            "Ek educated middle class bani, jisne India ki progress mein important role play kiya.",
                            "Printing press se reformist ideas phailane mein help mili, aur desh mein national consciousness aur unity ki feeling strong hui, jisne aage chalkar freedom struggle ka raasta banaya."
                        ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/6_mwpu8o.jpg', alt: 'Printing Press' }] }
                ]
            }
        ]
      },
      {
        id: '7',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                "<strong>Anglicist:</strong> English language ka expert; jo India mein English education ke favour mein tha.",
                "<strong>Maktab:</strong> School ke liye ek Arabic word.",
                "<strong>Orientalist:</strong> Asian cultures ka scholar; jo traditional Indian education ke favour mein tha.",
                "<strong>Reformer:</strong> Woh insaan jo society mein positive change laane ke liye kaam karta hai."
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
      "@id": "https://vardaanlearning.com/notes/cbse-class-8-history-chapter-12" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/1_vjokhy.jpg",  // A representative image
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
        <meta name="keywords" content="CBSE Class 8, History, British Rule in India, Education System, Social Reforms, Vardaan Learning Institute, NCERT Notes" />
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
 