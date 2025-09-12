import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Colonialism: Rural and Tribal Societies",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction: The British Arrival and Economic Shift",
        content: [
          {
            type: 'columns',
            content: [
              { width: '20%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/4_cwciss.jpg', alt: 'Painting of a British East India Company ship with sails unfurled on the open sea.' }] },
              { width: '80%', items: [{ type: 'paragraph', text: "The British East India Company initially came to India as traders. Through political strategies and battles, they eventually became the rulers of India. Their rule drastically changed India's economy. A key impact was the destruction of India's traditional self-sufficient rural economy. British policies were designed for economic exploitation, which ruined the lives of peasants and tribal communities and destroyed local trade and handicrafts." }] }
            ]
          }
        ]
      },
      {
        id: '2',
        title: "Colonial Agrarian Policies",
        content: [
          { type: 'paragraph', text: "The British introduced new land revenue systems primarily to collect as much money as possible from taxes. Land revenue became the main source of income for the Company. They introduced three major systems to formalize this collection." }
        ],
        subSections: [
            { id: '2.1', title: 'Zamindari System (Permanent Settlement)', content: [
                {
                  type: 'columns',
                  content: [
                    { width: '75%', items: [
                        { type: 'list', items: [
                            '<strong>Introduced by:</strong> Lord Cornwallis in 1793.',
                            '<strong>Where:</strong> Bengal, Bihar, and Orissa.',
                            '<strong>How it worked:</strong><br/>• Local rajas and taluqdars were recognized as Zamindars and made the hereditary owners of the land.<br/>• The revenue to be paid to the British was fixed permanently.<br/>• Zamindars had to pay 89% of the revenue to the British, keeping the remaining 11%.',
                            '<strong>Impact:</strong> The actual cultivators were reduced to tenants with no rights. Zamindars used harsh methods to collect taxes, and peasants often had to take loans from moneylenders, leading to misery.'
                        ]}
                    ]},
                    { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/3_ertgec.jpg', alt: 'Portrait of Lord Cornwallis in formal attire.' }] }
                  ]
                }
            ]},
            { id: '2.2', title: 'Ryotwari System', content: [
                {
                  type: 'columns',
                  content: [
                    { width: '70%', items: [
                      { type: 'list', items: [
                          '<strong>Introduced by:</strong> Thomas Munro in 1820.',
                          '<strong>Where:</strong> Southern and Western India.',
                          '<strong>How it worked:</strong><br/>• A direct settlement was made between the government and the ryot (cultivator).<br/>• Peasants were given ownership rights, but taxes were extremely high (50% for dry lands, 60% for irrigated lands).<br/>• The tax was based on the soil\'s potential, not the actual harvest.',
                          '<strong>Impact:</strong> Peasants were forced to pay revenue even if their crops failed. Failure to pay meant losing their land.'
                      ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/7_ufiy0f.jpg', alt: 'Portrait of Sir Thomas Munro in a dark naval uniform.' }] }
                  ]
                }
            ]},
            { id: '2.3', title: 'Mahalwari System', content: [
                { type: 'list', items: [
                    '<strong>Introduced by:</strong> Holt Mackenzie in 1822.',
                    '<strong>Where:</strong> North-West India, Punjab, and Central India.',
                    '<strong>How it worked:</strong><br/>• A collective settlement was made with a mahal (a group of villages).<br/>• The entire village community was jointly responsible for paying the tax.',
                    '<strong>Impact:</strong> The government\'s revenue demand was very high, leading to poverty and eviction from land. Widespread anger due to this system was a cause of the Revolt of 1857.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Forced Growth of Commercial Crops",
        content: [
            { type: 'paragraph', text: 'To maximize profits, the British forced Indian farmers to grow commercial or cash crops that were in high demand in Europe.'},
            { width: '30%', type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/2_h0nnvw.jpg', alt: 'Historical illustration showing Indian farmers working in an indigo field under the supervision of a British man on horseback.'},
            { width: '70%', type: 'list', items: [
                'The Company bought these raw materials (like indigo, cotton, opium, tea, and sugarcane) at very low prices.',
                'These materials were shipped to England, turned into finished goods in factories, and then sold back to India at high prices.',
                'This cycle created huge profits for the British but made the lives of Indian farmers miserable.'
            ]}
        ]
      },
      {
          id: '4',
          title: 'Farmer Revolts',
          content: [
              { type: 'paragraph', text: 'High taxes, exploitation by moneylenders, and the fear of losing their land made the condition of farmers unbearable. This led to numerous revolts across the country.'},
              { type: 'paragraph', text: '<strong>Causes:</strong> Unfair land revenue systems, economic exploitation, and eviction from lands.'},
              { type: 'heading', text: 'Major Revolts:'},
              { type: 'list', items: [
                  '<strong>Blue Rebellion (1859):</strong> Ryots in Bengal refused to grow indigo.',
                  '<strong>Deccan Riots (1875):</strong> Became violent due to high rural debt.',
                  '<strong>Champaran Movement (1860-1920s):</strong> Opposed forced indigo cultivation in Bihar.',
                  '<strong>Bardoli Satyagraha (1927):</strong> Led by Sardar Patel, it forced the government to revise an increase in revenue.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Colonialism and Tribal Societies",
        content: [
           {
              type: 'columns',
              content: [
                { width: '70%', items: [
                    { type: 'paragraph', text: 'The British then turned their attention to the self-sufficient tribal communities living in forests.'},
                    { type: 'heading', text: 'Impact of British Rule on Tribal Life:'},
                    { type: 'list', items: [
                        '<strong>New Forest Laws:</strong> The British declared most forests as state property and created "reserved forests", where tribals were not allowed to use resources freely. This disrupted traditional practices like shifting cultivation.',
                        '<strong>Loss of Power:</strong> Tribal chiefs lost their authority and had to follow British laws.',
                        '<strong>Exploitation:</strong> Traders and moneylenders exploited tribals, offering loans and paying very low prices for forest produce (e.g., Santhals were paid just ₹3 for 1000 silk cocoons, which were then sold for five times the price).',
                        '<strong>Forced Labour:</strong> Many tribals were forced to leave their homes to work in tea plantations and coal mines under harsh conditions for low wages.'
                    ]}
                ]},
                { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/5_txbjix.jpg', alt: 'Illustration of a tribal village scene in a forest, with people working and living near a stream.' }] }
              ]
            }
        ]
      },
      {
        id: '6',
        title: "Tribal Revolts",
        content: [
            { type: 'paragraph', text: 'The exploitation and loss of their traditional way of life led to many tribal rebellions.'},
            { type: 'list', items: [
                '<strong>Santhal Rebellion (1855-56):</strong> Led by brothers Sidhu and Kanhu Murmu, this was a major revolt against traders and the British government.'
            ]},
            {
              type: 'columns',
              content: [
                { width: '67%', items: [
                    { type: 'heading', text: 'The Birsa Movement (1895-1900):'},
                    { type: 'list', items: [
                        'Birsa Munda emerged as a hero for the tribals of Chotanagpur.',
                        'He urged his people to resist British land policies that were destroying their traditional systems.',
                        'He raised a white flag as a symbol of Birsa Raj (the rule of Birsa).',
                        'The movement ended with his death in 1900.'
                    ]}
                ]},
                { width: '20%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/1_ytzfca.jpg', alt: 'Portrait of Birsa Munda, a tribal freedom fighter.' }] }
              ]
            }
        ]
      },
      {
        id: '7',
        title: "Impact on Indian Crafts and Industries",
        content: [
            { type: 'heading', text: 'Decline of Traditional Industries:'},
            { type: 'paragraph', text: 'Before the British, India was famous for its handicrafts, textiles (muslin, calico), and metal works. The Company’s policies systematically destroyed these industries by:'},
            { type: 'list', items: [
                'Imposing very heavy taxes on Indian goods.',
                'Flooding Indian markets with cheaper, machine-made British goods.',
                'The decline of Indian princes, who were major patrons of local artisans.'
            ]},
            {
              type: 'columns',
              content: [
                { width: '75%', items: [
                  { type: 'heading', text: 'Rise of Modern Industries:'},
                  { type: 'list', items: [
                      'Later, modern industries began to be established, including tea, coffee, and rubber plantations.',
                      'Industries like cotton, jute, iron, and steel also developed rapidly.',
                      'The Tata Iron and Steel Company, founded by Jamshedji Tata, was a landmark achievement in this new industrial era.'
                  ]}
                ]},
                { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/9_dfwhwt.jpg', alt: 'Black and white photograph of the Tata Iron and Steel Company factory.' }] }
              ]
            }
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Colonialism: Rural and Tribal Societies",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction: The British Arrival and Economic Shift",
        content: [
          {
            type: 'columns',
            content: [
              { width: '20%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/4_cwciss.jpg', alt: 'Painting of a British East India Company ship with sails unfurled on the open sea.' }] },
              { width: '80%', items: [{ type: 'paragraph', text: "British East India Company shuru mein India mein traders ke roop mein aayi thi. Rajnitik rannitiyon aur ladaiyon ke zariye, ve ant mein India ke shasak ban gaye. Unke shasan ne India ki economy ko poori tarah badal diya. Ek mukhya prabhav India ki paramparik aatmanirbhar gramin arthavyavastha ka vinash tha. British neetiyan arthik shoshan ke liye banayi gayi thi, jisse kisanon aur adivasi samudayon ka jeevan barbad ho gaya aur sthaniya vyapar aur hastashilp nasht ho gaye." }] }
            ]
          }
        ]
      },
      {
        id: '2',
        title: "Colonial Agrarian Policies",
        content: [
          { type: 'paragraph', text: "British ne mukhya roop se tax se adhik se adhik paisa ikattha karne ke liye naye land revenue systems shuru kiye. Land revenue Company ke liye aay ka mukhya srot ban gaya. Unhonne is vasooli ko aupcharik banane ke liye teen pramukh pranaliyan shuru keen." }
        ],
        subSections: [
            { id: '2.1', title: 'Zamindari System (Permanent Settlement)', content: [
                {
                  type: 'columns',
                  content: [
                    { width: '75%', items: [
                      { type: 'list', items: [
                          '<strong>Shuru kiya:</strong> Lord Cornwallis ne 1793 mein.',
                          '<strong>Kahan:</strong> Bengal, Bihar, aur Orissa.',
                          '<strong>Kaise kaam karta tha:</strong><br/>• Sthaniya rajaon aur taluqdaron ko Zamindar ke roop mein manyata di gayi aur unhein zameen ka vanshanugat malik banaya gaya.<br/>• British ko chukaya jaane wala revenue sthayi roop se tay kar diya gaya tha.<br/>• Zamindaron ko revenue ka 89% British ko dena padta tha, aur baaki 11% ve apne paas rakhte the.',
                          '<strong>Prabhav:</strong> Asli kisanon ko bina kisi adhikar ke kirayedar bana diya gaya. Zamindar tax vasoolne ke liye kathor tarike apnate the, aur kisanon ko aksar sahukaron se karz lena padta tha, jisse unki halat dayaneey ho gayi.'
                      ]}
                    ]},
                    { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/3_ertgec.jpg', alt: 'Portrait of Lord Cornwallis in formal attire.' }] }
                  ]
                }
            ]},
            { id: '2.2', title: 'Ryotwari System', content: [
                {
                  type: 'columns',
                  content: [
                    { width: '70%', items: [
                      { type: 'list', items: [
                          '<strong>Shuru kiya:</strong> Thomas Munro ne 1820 mein.',
                          '<strong>Kahan:</strong> Dakshin aur Paschim Bharat.',
                          '<strong>Kaise kaam karta tha:</strong><br/>• Sarkar aur ryot (kisan) ke beech ek seedha samjhauta kiya gaya.<br/>• Kisanon ko malkana haq diye gaye, lekin tax bahut adhik the (sookhi zameen ke liye 50%, sinchit zameen ke liye 60%).<br/>• Tax mitti ki kshamata par aadharit tha, na ki vastavik fasal par.',
                          '<strong>Prabhav:</strong> Kisanon ko fasal kharab hone par bhi revenue dena padta tha. Bhugtan na karne ka matlab tha apni zameen kho dena.'
                      ]}
                    ]},
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/7_ufiy0f.jpg', alt: 'Portrait of Sir Thomas Munro in a dark naval uniform.' }] }
                  ]
                }
            ]},
            { id: '2.3', title: 'Mahalwari System', content: [
                { type: 'list', items: [
                    '<strong>Shuru kiya:</strong> Holt Mackenzie ne 1822 mein.',
                    '<strong>Kahan:</strong> Uttar-Paschim Bharat, Punjab, aur Madhya Bharat.',
                    '<strong>Kaise kaam karta tha:</strong><br/>• Ek mahal (gaon ka samuh) ke saath ek samuhik samjhauta kiya gaya.<br/>• Poora gramin samuday sanyukt roop se tax chukane ke liye jimmedar tha.',
                    '<strong>Prabhav:</strong> Sarkar ki revenue ki maang bahut adhik thi, jisse garibi aur zameen se bedakhli hui. Is pranali ke karan vyaapak gussa 1857 ke Vidroh ka ek karan bana.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Forced Growth of Commercial Crops",
        content: [
            { type: 'paragraph', text: 'Munafa badhane ke liye, British ne Bharatiya kisanon ko vanijyik ya nakdi faslein ugane ke liye majboor kiya jinki Europe mein bahut maang thi.'},
            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/2_h0nnvw.jpg', alt: 'Historical illustration showing Indian farmers working in an indigo field under the supervision of a British man on horseback.'},
            { type: 'list', items: [
                'Company in kachche maal (jaise neel, kapas, afeem, chai, aur ganna) ko bahut kam keemat par khareedti thi.',
                'In saamagriyon ko England bheja jaata tha, factoryon mein taiyar maal banaya jaata tha, aur phir unhein unche daamon par India mein vapas becha jaata tha.',
                'Is chakra ne British ke liye bhari munafa kamaya lekin Bharatiya kisanon ka jeevan dukhdayi bana diya.'
            ]}
        ]
      },
      {
          id: '4',
          title: 'Farmer Revolts',
          content: [
              { type: 'paragraph', text: 'Adhik tax, sahukaron dwara shoshan, aur apni zameen khone ke dar ne kisanon ki sthiti ko asahaneey bana diya. Isse desh bhar mein kai vidroh hue.'},
              { type: 'paragraph', text: '<strong>Karan:</strong> Anuchit bhu-rajasva pranaliyan, arthik shoshan, aur zameeno se bedakhli.'},
              { type: 'heading', text: 'Pramukh Vidroh:'},
              { type: 'list', items: [
                  '<strong>Neel Vidroh (1859):</strong> Bengal ke ryots ne neel ugane se inkar kar diya.',
                  '<strong>Deccan Dange (1875):</strong> Uchh gramin karz ke karan hinsa bhadak uthi.',
                  '<strong>Champaran Aandolan (1860-1920s):</strong> Bihar mein jabran neel ki kheti ka virodh kiya gaya.',
                  '<strong>Bardoli Satyagraha (1927):</strong> Sardar Patel ke netritva mein, isne sarkar ko revenue mein vridhi ko sanshodhit karne ke liye majboor kiya.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Colonialism and Tribal Societies",
        content: [
            {
              type: 'columns',
              content: [
                { width: '70%', items: [
                    { type: 'paragraph', text: 'Iske baad British ne apna dhyan jangalon mein rehne wale aatmanirbhar adivasi samudayon par kendrit kiya.'},
                    { type: 'heading', text: 'Adivasi Jeevan par British Shasan ka Prabhav:'},
                    { type: 'list', items: [
                        '<strong>Naye Van Kanoon:</strong> British ne adhikansh jangalon ko sarkari sampatti ghoshit kar diya aur "aarक्षित van" banaye, jahan adivasiyon ko sansadhanon ka svatantrata se upyog karne ki anumati nahi thi. Isse jhoom kheti jaisi paramparik prathayein badhit huin.',
                        '<strong>Shakti ka Hrash:</strong> Adivasi mukhiyaon ne apna adhikar kho diya aur unhein British kanoonon ka palan karna pada.',
                        '<strong>Shoshan:</strong> Vyapariyon aur sahukaron ne adivasiyon ka shoshan kiya, karz dekar aur van utpadon ke liye bahut kam keemat chukakar (udaharan ke liye, Santhalon ko 1000 resham ke cocoon ke liye sirf ₹3 diye jaate the, jo phir paanch guna keemat par beche jaate the).',
                        '<strong>Jabran Mazdoori:</strong> Kai adivasiyon ko apne ghar chhodkar chai baganon aur koyla khadanon mein kathor paristhitiyon mein kam mazdoori par kaam karne ke liye majboor kiya gaya.'
                    ]}
                ]},
                { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/5_txbjix.jpg', alt: 'Illustration of a tribal village scene in a forest, with people working and living near a stream.' }] }
              ]
            }
        ]
      },
      {
        id: '6',
        title: "Tribal Revolts",
        content: [
            { type: 'paragraph', text: 'Shoshan aur unke paramparik jeevan shaili ke nuksan ne kai adivasi vidrohon ko janm diya.'},
            { type: 'list', items: [
                '<strong>Santhal Vidroh (1855-56):</strong> Bhaiyon Sidhu aur Kanhu Murmu ke netritva mein, yeh vyapariyon aur British sarkar ke khilaf ek bada vidroh tha.'
            ]},
            {
              type: 'columns',
              content: [
                { width: '70%', items: [
                    { type: 'heading', text: 'Birsa Aandolan (1895-1900):'},
                    { type: 'list', items: [
                        'Birsa Munda Chotanagpur ke adivasiyon ke liye ek nayak ke roop mein ubhre.',
                        'Unhonne apne logon se British bhumi nitiyon ka virodh karne ka aagrah kiya jo unke paramparik pranaliyon ko nasht kar rahi thi.',
                        'Unhonne Birsa Raj (Birsa ka shasan) ke prateek ke roop mein ek safed jhanda phaharaya.',
                        'Aandolan 1900 mein unki mrityu ke saath samapt ho gaya.'
                    ]}
                ]},
                { width: '20%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/1_ytzfca.jpg', alt: 'Portrait of Birsa Munda, a tribal freedom fighter.' }] }
              ]
            }
        ]
      },
      {
        id: '7',
        title: "Impact on Indian Crafts and Industries",
        content: [
            { type: 'heading', text: 'Paramparik Udyogon ka Patan:'},
            { type: 'paragraph', text: 'British se pehle, Bharat apne hastashilp, vastra (malmal, calico), aur dhatu ke kaamon ke liye prasiddh tha. Company ki nitiyon ne in udyogon ko vyavasthit roop se nasht kar diya:'},
            { type: 'list', items: [
                'Bharatiya saaman par bahut bhari tax lagakar.',
                'Bharatiya bazaron ko saste, machine se bane British saaman se bhar kar.',
                'Bharatiya rajaon ka patan, jo sthaniya karigaron ke pramukh sanrakshak the.'
            ]},
            {
              type: 'columns',
              content: [
                { width: '67%', items: [
                  { type: 'heading', text: 'Aadhunik Udyogon ka Uday:'},
                  { type: 'list', items: [
                      'Baad mein, aadhunik udyog sthapit hone lage, jinmen chai, coffee, aur rubber ke bagan shamil the.',
                      'Kapas, joot, loha, aur ispat jaise udyog bhi tezi se viksit hue.',
                      'Jamshedji Tata dwara sthapit Tata Iron and Steel Company, is naye audyogik yug mein ek aitihaasik uplabdhi thi.'
                  ]}
                ]},
                { width: '20%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/9_dfwhwt.jpg', alt: 'Black and white photograph of the Tata Iron and Steel Company factory.' }] }
              ]
            }
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

// This component handles the dynamic height matching for columns
const ColumnsWithMatchedHeight = ({ content }) => {
    // The complex useEffect and ref logic for manual height matching is removed.
    // Using Tailwind's 'items-center' on the flex container is a more robust and modern CSS solution
    // for vertically aligning the content of the columns.
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-6 my-4">
            {content.map((column, index) => (
                <div key={index} style={{ flexBasis: column.width || 'auto' }}>
                   {/* The ContentRenderer will handle rendering the items inside the column */}
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
        // This case handles all images. The parent container (like ColumnsWithMatchedHeight) will manage spacing.
        return (
            <figure key={index} className="w-full my-4">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-contain rounded-lg" />
            </figure>
        );
      case 'columns':
        return <ColumnsWithMatchedHeight key={index} content={item.content} />;
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
function Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true });
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

export default Class8cbseSocialScienceColonialismRuralAndTribalSocietiesClassNotes;
