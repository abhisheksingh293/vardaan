import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Colonialism: Rural and Tribal Societies",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction: The Arrival and Impact of the British",
        content: [
          {
            type: 'columns',
            content: [
              { width: '35%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/4_cwciss.jpg', alt: 'The British East India Company arrived as traders but eventually established control over India.' }] },
              { width: '60%', items: [
                  { type: 'paragraph', text: "When the East India Company came to India, they initially arrived as traders. However, over time, through many battles, struggles, and clever political moves, they became the rulers of India. They slowly conquered different parts of the country, starting from the South and East and then moving North, eventually becoming the supreme power." },
                  { type: 'paragraph', text: "The British rule was very different from that of earlier rulers. They had a huge impact on almost every part of the Indian economy. A key change they brought was the destruction of India's traditional self-sufficient rural economy. Before the British, life in the villages was simple and self-sufficient. The British policies were designed to economically exploit India, which ended up ruining the lives of peasants, displacing tribal communities, and destroying Indian trade and handicrafts." }
              ]}
            ]
          }
        ]
      },
      {
        id: '2',
        title: "Colonial Agrarian Policy and Its Impact",
        content: [
          { type: 'paragraph', text: "The British made many changes to the land revenue system, agriculture, and trade to serve their own interests. The East India Company was focused on collecting as much revenue (money from taxes) as possible from the Indian territories they controlled. As their empire grew, the amount of revenue they collected also increased. In fact, land revenue became the biggest source of income for the Company." },
          { type: 'paragraph', text: "To make this collection official, they introduced Land Revenue Settlements to legitimize their economic exploitation. These were new systems for collecting taxes from the land. The three main systems were:" },
          { type: 'list', items: [
            '<strong>Zamindari System:</strong> Introduced in Bengal in 1793 by Lord Cornwallis.',
            '<strong>Ryotwari System:</strong> Used in large parts of South and West India.',
            '<strong>Mahalwari System:</strong> Used in Punjab, North-West Provinces, and Awadh.'
          ]}
        ],
        subSections: [
            { id: '2.1', title: 'Zamindari System (The Permanent Revenue System)', content: [
                {
                    type: 'columns',
                    content: [
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/3_ertgec.jpg', alt: 'Lord Cornwallis, who introduced the Permanent Settlement (Zamindari System) in 1793.' }] },
                        { width: '60%', items: [
                            { type: 'list', items: [
                                '<strong>Introduced by:</strong> Lord Cornwallis in 1793.',
                                '<strong>Where:</strong> Bengal, Bihar, and Orissa.',
                            ]},
                            { type: 'heading', text: 'How it worked:'},
                            { type: 'list', items: [
                                'The Zamindars (a new class of landlords including rajas and taluqdars) were made the official owners of the land. This right was made hereditary.',
                                'The revenue to be paid to the British was fixed permanently.',
                                'The Zamindars were forced to pay 89% (or 10/11th part) of the total revenue to the British government.',
                                'The Zamindars kept the remaining 11% (or 1/11th part) for themselves.'
                            ]},
                        ]}
                    ]
                },
                { type: 'heading', text: 'Impact on Peasants:'},
                { type: 'list', items: [
                    'The actual cultivators of the land were reduced to the status of tenants and lost any rights they previously had.',
                    'The Zamindars used very oppressive and harsh methods to collect taxes.',
                    'If a peasant failed to pay the rent, the Zamindar had the power to evict them from the land.',
                    'To pay the rent, many peasants had to take loans from moneylenders, which made their lives miserable.',
                    'The system benefited the Zamindars the most.'
                ]},
                { type: 'paragraph', text: '<strong>Why it wasn\'t expanded:</strong> Since the revenue was fixed permanently, the Company could not claim any share of the increased income of the zamindars later on. Because of this, they decided not to use this system in the new territories they conquered.'}
            ]},
            { id: '2.2', title: 'Ryotwari System', content: [
                {
                    type: 'columns',
                    content: [
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/7_ufiy0f.jpg', alt: 'Sir Thomas Munro, the architect of the Ryotwari System.' }] },
                        { width: '60%', items: [
                            { type: 'list', items: [
                                '<strong>Introduced by:</strong> Thomas Munro in 1820.',
                                '<strong>Where:</strong> First in South India, and later in the Bombay area.',
                            ]},
                            { type: 'heading', text: 'How it worked:'},
                            { type: 'list', items: [
                                'This system established a direct settlement between the government and the ryot (the cultivator).',
                                'The revenue was collected directly from the cultivator. The peasants were given ownership rights to the land.',
                                'The tax amount was very high. For dry lands, the rate was 50%, and for irrigated lands, it was 60%.',
                                'The tax was based on the potential of the soil, not on the actual produce of the crop.'
                            ]},
                        ]}
                    ]
                },
                { type: 'heading', text: 'Impact on Peasants:'},
                { type: 'list', items: [
                    'This system was very oppressive for the peasants.',
                    'They were forced to pay revenue even when their crops failed due to floods, droughts, or other natural disasters.',
                    'If a peasant failed to pay the revenue on time, they could be deprived of their land.',
                    'The government also had the right to increase the tax rate whenever it wanted.'
                ]}
            ]},
            { id: '2.3', title: 'Mahalwari System', content: [
                { type: 'list', items: [
                    '<strong>Introduced by:</strong> Holt Mackenzie in 1822.',
                    '<strong>Where:</strong> Gangetic Valley, North-West provinces, Central India, and Punjab.',
                ]},
                { type: 'heading', text: 'How it worked:'},
                { type: 'list', items: [
                    'This was a modified version of the Zamindari System.',
                    'A collective settlement was made with a group of villages called a mahal. Each Mahal comprised one or more villages.',
                    'The village community (through village committees) was jointly responsible for paying the land revenue.',
                    'The tax was levied on the total produce of a mahal.'
                ]},
                { type: 'heading', text: 'Impact on Peasants:'},
                { type: 'list', items: [
                    'The system proved to be a curse for the peasants as the government\'s demand for revenue was very high.',
                    'It led to poverty, eviction from land, and exploitation by moneylenders.',
                    'The widespread anger among farmers in North India between 1830 and 1840 due to this system was one of the causes of the Revolt of 1857.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Growth of Commercial Crops",
        content: [
           {
               type: 'columns',
               content: [
                   { width: '50%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/2_h0nnvw.jpg', alt: 'Indian farmers were forced to grow cash crops like indigo, often leading to a miserable life.' }] },
                   { width: '50%', items: [
                        { type: 'paragraph', text: 'The East India Company needed more money to pay for its military and administrative costs and wanted to gain maximum profit. They began forcing farmers to grow specific crops that were in high demand in Europe using coercive methods. These were called cash crops or commercial crops.'},
                        { type: 'list', items: [
                            'The company would purchase agricultural raw materials from Indian farmers at very low rates and send them to England.',
                             'In England, these raw materials were used to make finished goods in factories.',
                            'These finished goods were then brought back to India and sold at high prices, earning huge profits for the Company.'
                        ]},
                   ]}
               ]
           },
            { type: 'paragraph', text: 'The main cash crops farmers were forced to grow were indigo, cotton, opium, pepper, tea, and sugarcane. They were also compelled to raise silkworms for raw silk production.'},
            { type: 'list', items: [
                '<strong>Opium:</strong> The British wanted to smuggle and sell opium in China to make huge profits.',
                '<strong>Indigo:</strong> Called neel in Hindi, indigo was used to make a blue dye that was in great demand in Britain\'s textile industries. Peasants were forced to grow it but were paid very low prices, making their lives miserable.',
                '<strong>Sugarcane:</strong> The demand for sugar was rising in the West, so many Europeans set up sugar plantations in India. Farmers were forced to produce thickened sugarcane juice for factories and sell it at very low prices.'
            ]}
        ],
        subSections: [
            { id: '3.1', title: 'Commercial Crops and Places of Cultivation', content: [
                { type: 'list', items: [
                    '<strong>Opium:</strong> Bengal, Bihar and Punjab',
                    '<strong>Indigo:</strong> Bihar and Bengal',
                    '<strong>Cotton:</strong> Gujarat, Maharashtra and Madhya Pradesh',
                    '<strong>Tea:</strong> Assam, West Bengal and South India',
                    '<strong>Pepper:</strong> Kerala, Karnataka, Tamil Nadu, Andaman and Nicobar Islands, and Puducherry',
                    '<strong>Sugarcane:</strong> Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, Gujarat, Punjab, Haryana'
                ]}
            ]}
        ]
      },
      {
        id: '4',
        title: 'Condition of the Farmers',
        content: [
            { type: 'paragraph', text: 'Indian farmers were already suffering from natural calamities like floods and droughts. The British policies added to their burdens:'},
            { type: 'list', items: [
                'They were overburdened with high taxes, repayment of loans, debts and high rate of interest.',
                'This led to a life of misery, poverty, and frustration.',
                'Many peasants who could not pay the land revenue lost their land and became landless labourers.',
                'As landless labourers, they were forced to work for very low wages.'
            ]}
        ]
      },
      {
        id: '5',
        title: 'Revolts by Farmers',
        content: [
            { type: 'paragraph', text: 'When the exploitation and oppression became unbearable, farmers across the country started to revolt.'}
        ],
        subSections: [
            { id: '5.1', title: 'Causes of Farmer Revolts', content: [
                { type: 'list', items: [
                    'The unfair Land Revenue Settlements and their administration.',
                    'Economic exploitation of the rural population.',
                    'Long-standing loans and debt.',
                    'Eviction of peasants from their lands, forcing them to become landless laborers.'
                ]},
                { type: 'paragraph', text: 'These issues led to many revolts even before the First War of Independence in 1857. Later, in 1930, organizations called Kisan Sabhas were formed to support the cause of the peasants.'}
            ]},
            { id: '5.2', title: 'List of Major Farmer Revolts', content: [
                { type: 'list', items: [
                    '<strong>Blue Rebellion (1859):</strong> Ryots in Bengal refused to grow indigo.',
                    '<strong>Moplah Revolts (1860s-1870s):</strong> The Moplahs of South India revolted against the increasing burden of taxes.',
                    '<strong>Deccan Riots (1875):</strong> These riots turned violent due to rural debt.',
                    '<strong>Champaran Movement (1860-1920s):</strong> Peasants in Champaran, Bihar, opposed the forced cultivation of indigo and high taxes.',
                    '<strong>Uttar Pradesh:</strong> Farmers in Pratapgarh, Rae Bareli, Sultanpur, and Faizabad opposed high revenue. The Oudh Kisan Sabha was formed under Jawaharlal Nehru\'s leadership in 1920.',
                    '<strong>Tanjore (1923-24):</strong> Farmers opposed an increase in revenue.',
                    '<strong>First Ryots Association (1923):</strong> Organized by N.G. Ranga.',
                    '<strong>Kisan Movement in Uttar Pradesh:</strong> Demanded the abolition of the Zamindari system.',
                    '<strong>Bardoli Satyagraha (1927):</strong> Sardar Patel led the opposition against an increase in revenue by the Bombay Presidency, forcing the government to revise it.',
                    '<strong>Kheda:</strong> Peasants opposed the rise in revenue.'
                ]}
            ]}
        ]
      },
      {
        id: '6',
        title: "Colonialism and Tribal Societies",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/5_txbjix.jpg', alt: 'Before British intervention, tribal societies like the Mundas and Santhals lived a life of self-sufficiency in the forests.' }] },
                    { width: '50%', items: [
                        { type: 'paragraph', text: 'After exploiting the peasants, the British turned their attention to the tribal communities of India, who lived self-sufficient lives in deep forests. The tribals believed that the forests belonged to them.'}
                    ]}
                    
                ]
            }
        ],
        subSections: [
            { id: '6.1', title: 'Traditional Tribal Life', content: [
                { type: 'list', items: [
                    '<strong>Shifting Cultivation:</strong> Many tribes, like the Khonds of Orissa, practiced shifting cultivation.',
                    '<strong>Herding and Rearing Animals:</strong> Groups like the Van Gujjars of the Himalayas and the Gaddis of Kullu lived by herding animals.',
                    '<strong>Communal Land Ownership:</strong> Among tribes like the Mundas of Chotanagpur, the land belonged to the entire clan, and all members had equal rights.'
                ]}
            ]},




            { type: 'heading', text: 'How it worked:'},
            { type: 'list', items: [
                'This system established a direct settlement between the government and the ryot (the cultivator).',
                'The revenue was collected directly from the cultivator. The peasants were given ownership rights to the land.',
                'The tax amount was very high. For dry lands, the rate was 50%, and for irrigated lands, it was 60%.',
                'The tax was based on the potential of the soil, not on the actual produce of the crop.'
            ]},















            { id: '6.2', title: 'Impact of British Rule on Tribal Life', content: [
                { type: 'list', items: [
                    '<strong>Loss of Power for Chiefs:</strong> Under British rule, tribal chiefs lost all their power and were forced to follow laws made by British officers.',
                    '<strong>Changes in Forest Laws:</strong> The British did not want shifting cultivation because it made it difficult to control the tribals. They introduced new forest laws that made tribal life very difficult.',
                    'Most forests were declared state property.',
                    'Some forests, which produced valuable timber, were declared reserved forests, where tribals were not allowed to use resources without permission.',
                    '<strong>Displacement and Labor Shortage:</strong> Many tribals had to move to other areas to find work. This created a shortage of laborers for the British to cut trees for railway sleepers and transport logs.',
                    '<strong>Exploitation by Traders and Moneylenders:</strong> As the demand for forest products grew, traders and moneylenders went to the tribals, offered them cash loans, and asked them to work for wages, which led to further misery.',
                    '<strong>Example of the Santhals:</strong> The Santhals of Hazaribagh reared silkworms for cocoons. When the demand for Indian silk increased, traders paid them a shockingly low price of just ₹3 for 1000 cocoons and then sold them for five times that amount. When the tribals realized this, they began to see the traders as their enemies.',
                    '<strong>Forced Labor:</strong> Many tribals had to leave their forest homes for work. A large number were recruited to work in tea plantations in Assam under harsh conditions, for low wages, and were not allowed to return home. The lives of coal mine workers were also miserable. Many were also recruited into factories and fields under very harsh conditions.'
                ]}
            ]}
        ]
      },
      {
        id: '7',
        title: "Tribal Revolts",
        content: [
           {
               type: 'columns',
               content: [
                   { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/1_ytzfca.jpg', alt: 'Birsa Munda, who led the tribal revolt and emerged as a hero for his people.' }] },
                   { width: '50%', items: [
                        { type: 'paragraph', text: 'The commercialization of agriculture and exploitation of forests made many tribals homeless and jobless, leading to numerous rebellions across India.'}
                   ]}
               ]
           }
        ],
        subSections: [
            { id: '7.1', title: 'List of Major Tribal Revolts', content: [
                { type: 'list', items: [
                    '<strong>Khasi Revolt (1829):</strong> The Khasis in north-west Assam, led by Bar Manik and Tirot Sing, revolted when the British started constructing a road through their land. The rebellion was brutally suppressed.',
                    '<strong>Munda and Kolarian Revolt (1831):</strong> The Mundas of Chotanagpur, joined by the Kolarian tribe, revolted but were suppressed.',
                    '<strong>Khond Revolt (1846):</strong> The Khonds of Khondmals (near Orissa) revolted because they feared being annexed by the British, but they could not defeat the British forces.',
                    '<strong>Kuki Revolts:</strong> The Kukis in Manipur continuously attacked British territories from 1829 but were forced to surrender in 1850. There was another revolt by the Kukis of Manipur in 1917.',
                    '<strong>Santhal Rebellion (1855-1856):</strong> The Santhals revolted against traders and the British when the government failed to safeguard their interests. They were led by two brothers, Sidhu and Kanhu Murmu.',
                    '<strong>Other Revolts:</strong> The Kharwar rebellion of 1870 and the revolt by Kacha Nagas in 1882 also targeted the British but failed.'
                ]}
            ]},
            { id: '7.2', title: 'The Birsa Movement', content: [
                { type: 'list', items: [
                    'In 1895, a young boy named Birsa Munda emerged as a hero for the tribals of Chotanagpur.',
                    'He urged his people to continue working on their own land to earn a living, believing this would end their suffering.',
                    'As the Birsa Movement spread, he became very popular. He told his people that the British land policies were destroying their traditional land system.',
                    'Birsa was jailed for two years. Upon his release, he encouraged the tribals to attack zamindars.',
                    'He raised a white flag as a symbol of Birsa Raj.',
                    'The movement ended in 1900 with the death of Birsa.'
                ]}
            ]}
        ]
      },
      {
        id: '8',
        title: "Effects of Colonialism on Crafts and Industries",
        content: [
            { type: 'paragraph', text: 'As the East India Company\'s rule expanded, its exploitative character and monopoly on trade became stronger.'}
        ],
        subSections: [
            { id: '8.1', title: 'India\'s Traditional Industries', content: [
                { type: 'list', items: [
                    'Before the British, India had flourishing industries alongside agriculture.',
                    'There was a great demand for Indian handicrafts, calico, muslin, wool, and silk products. Metal works of iron, steel, copper, gold, and silver were also popular.',
                    'In the 17th century, trade with Europe was favorable for India, as it exported large quantities of fine cotton and silk fabrics, spices, indigo, precious stones and handicrafts.'
                ]}
            ]},
            { id: '8.2', title: 'Destruction of Indian Crafts and Industries', content: [
                { type: 'paragraph', text: 'The Company\'s policies led to the destruction of Indian crafts, cottage industries and artisanship.'},
                { type: 'paragraph', text: 'To protect the British cotton industry, they took the following steps:'},
                { type: 'list', items: [
                    'Imposed very heavy duties (taxes) on Indian goods.',
                    'Promoted British machine-made goods at cheaper rates in India.',
                    'The power of Indian princes declined, which meant there was less princely patronage (support) for local artisans.'
                ]},
                { type: 'paragraph', text: 'These policies forced Indian craftsmen to give up their traditional livelihoods. The Industrial Revolution (1760-1830) in Britain also contributed to the de-industrialization of India. All these factors ruined traditional handicrafts and led to a decline in India\'s national income.'}
            ]}
        ]
      },
       {
        id: '9',
        title: "Modern Industries in India",
        content: [
            { type: 'paragraph', text: 'The national movement for freedom and global developments helped in the establishment of modern industries in India.'},
            { type: 'heading', text: 'Plantation Industries:'},
            { type: 'list', items: [
                'Tea became the biggest plantation industry in Assam, Bengal, and South India. Indian tea became the best in the world market, with England as its biggest buyer.',
                'Other plantation industries included coffee, cinchona, and rubber.'
            ]},
            { type: 'heading', text: 'Other Industries:'},
            { type: 'list', items: [
                'Industries like cotton, jute, iron, and steel developed at a fast rate.',
                'The expansion of railways increased the demand for coal, iron, and steel.',
                'Thanks to the vision of Jamshedji Tata, the world-famous Tata Iron and Steel Company was established.',
                'Later, cement, chemical, and sugar industries also developed.'
            ]},
            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/9_dfwhwt.jpg', alt: 'The Tata Iron and Steel Company, founded by Jamshedji Tata, marked a new era of modern industry in India.' },
            { type: 'paragraph', text: 'However, India had to import machinery from other countries. It was only after independence that basic or key industries were given priority.'}
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
        title: "Introduction: British ka Aana aur Uska Asar",
        content: [
          {
            type: 'columns',
            content: [
                { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/4_cwciss.jpg', alt: 'The British East India Company arrived as traders but eventually established control over India.' }] },
              { width: '60%', items: [
                  { type: 'paragraph', text: "Jab East India Company India aayi, toh woh shuru mein traders ban kar aaye the. Lekin time ke saath, bahut saari ladaiyon, sangharshon aur chalaak political moves ke baad, woh India ke rulers ban gaye. Unhone dheere-dheere desh ke alag-alag hisson par kabza kiya, South aur East se shuru karke North tak, aur aakhir mein supreme power ban gaye." },
                  { type: 'paragraph', text: "British ka shasan pehle ke rulers se bahut alag tha. Unka Indian economy ke lagbhag har hisse par bahut bada impact pada. Ek bada change jo woh laaye, woh tha India ki traditional self-sufficient rural economy ka destruction. British se pehle, gaon mein life simple aur self-sufficient thi. British policies India ko economically exploit karne ke liye design ki gayi thi, jisse aakhir mein kisanon ki life barbaad ho gayi, tribal communities displace ho gayin, aur Indian trade aur handicrafts tabah ho gaye." }
              ]}
            ]
          }
        ]
      },
      {
        id: '2',
        title: "Colonial Agrarian Policy aur Uska Impact",
        content: [
          { type: 'paragraph', text: "British ne land revenue system, agriculture, aur trade mein apne fayde ke liye kai changes kiye. East India Company ka focus apne control wale Indian territories se zyada se zyada revenue (tax se paisa) collect karna tha. Jaise-jaise unka empire badha, unka revenue collection bhi badhta gaya. Asal mein, land revenue Company ke liye income ka sabse bada source ban gaya." },
          { type: 'paragraph', text: "Is collection ko official banane ke liye, unhone apne economic exploitation ko legal banane ke liye Land Revenue Settlements introduce kiye. Yeh zameen se tax collect karne ke naye systems the. Teen main systems the:" },
          { type: 'list', items: [
            '<strong>Zamindari System:</strong> 1793 mein Lord Cornwallis ne Bengal mein introduce kiya.',
            '<strong>Ryotwari System:</strong> South aur West India ke bade hisson mein use kiya gaya.',
            '<strong>Mahalwari System:</strong> Punjab, North-West Provinces, aur Awadh mein use kiya gaya.'
          ]}
        ],
        subSections: [
            { id: '2.1', title: 'Zamindari System (The Permanent Revenue System)', content: [
                {
                    type: 'columns',
                    content: [
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/3_ertgec.jpg', alt: 'Lord Cornwallis, who introduced the Permanent Settlement (Zamindari System) in 1793.' }] },
                        { width: '60%', items: [
                            { type: 'list', items: [
                                '<strong>Kisne introduce kiya:</strong> Lord Cornwallis ne 1793 mein.',
                                '<strong>Kahan:</strong> Bengal, Bihar, aur Orissa.',
                            ]},
                            { type: 'heading', text: 'Kaise kaam karta tha:'},
                            { type: 'list', items: [
                                'Zamindars (jisme rajas aur taluqdars bhi the) ko zameen ka official owner bana diya gaya. Yeh right hereditary tha, yaani peedhi dar peedhi chalta tha.',
                                'British ko jo revenue dena tha, woh permanently fix kar diya gaya.',
                                'Zamindars ko total revenue ka 89% (ya 10/11 hissa) British government ko dena padta tha.',
                                'Zamindars baaki 11% (ya 1/11 hissa) apne paas rakhte the.'
                            ]},
                        ]}
                    ]
                },
                { type: 'heading', text: 'Kisanon par Asar:'},
                { type: 'list', items: [
                    'Asli kisan jo zameen par kheti karte the, unhe tenants (kirayedar) bana diya gaya aur unke saare purane adhikar chhin gaye.',
                    'Zamindars tax collect karne ke liye bahut zaalim aur kathor tarike istemal karte the.',
                    'Agar koi kisan rent nahi de pata, toh Zamindar ke paas use zameen se nikalne ka power tha.',
                    'Rent dene ke liye, bahut se kisanon ko moneylenders (sahukaron) se loan lena padta tha, jisse unki life aur bhi kharab ho gayi.',
                    'Is system se sabse zyada fayda Zamindars ko hua.'
                ]},
                { type: 'paragraph', text: '<strong>Ise aage kyu nahi badhaya gaya:</strong> Kyunki revenue permanently fix tha, isliye Company baad mein zamindars ki badhti income mein se koi hissa nahi maang sakti thi. Isliye, unhone apne jeete hue naye ilakon mein is system ko use nahi karne ka faisla kiya.'}
            ]},
            { id: '2.2', title: 'Ryotwari System', content: [
                {
                    type: 'columns',
                    content: [
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/7_ufiy0f.jpg', alt: 'Sir Thomas Munro, the architect of the Ryotwari System.' }] },
                        { width: '60%', items: [
                            { type: 'list', items: [
                                '<strong>Kisne introduce kiya:</strong> Thomas Munro ne 1820 mein.',
                                '<strong>Kahan:</strong> Pehle South India mein, aur baad mein Bombay area mein.',
                            ]},
                            { type: 'heading', text: 'Kaise kaam karta tha:'},
                            { type: 'list', items: [
                                'Is system mein government aur ryot (kisan) ke beech direct settlement tha.',
                                'Revenue seedha kisan se collect kiya jaata tha. Kisanon ko zameen ka ownership right diya gaya.',
                                'Tax bahut zyada tha. Dry lands ke liye rate 50% tha, aur irrigated lands ke liye 60%.',
                                'Tax zameen ki potential par based tha, na ki asli fasal par.'
                            ]},
                        ]}
                    ]
                },
                { type: 'heading', text: 'Kisanon par Asar:'},
                { type: 'list', items: [
                    'Yeh system kisanon ke liye bahut oppressive tha.',
                    'Unhein tab bhi revenue dena padta tha jab unki fasal baadh, sookhe ya doosre natural disasters se kharab ho jaati thi.',
                    'Agar koi kisan time par revenue nahi de pata, toh uski zameen chhin li jaati thi.',
                    'Government ke paas tax rate kabhi bhi badhane ka right tha.'
                ]}
            ]},
            { id: '2.3', title: 'Mahalwari System', content: [
                { type: 'list', items: [
                    '<strong>Kisne introduce kiya:</strong> Holt Mackenzie ne 1822 mein.',
                    '<strong>Kahan:</strong> Gangetic Valley, North-West provinces, Central India, aur Punjab.',
                ]},
                { type: 'heading', text: 'Kaise kaam karta tha:'},
                { type: 'list', items: [
                    'Yeh Zamindari System ka ek modified version tha.',
                    'Ek collective settlement gaon ke group ke saath kiya jaata tha jise mahal kehte the. Har Mahal mein ek ya zyada gaon hote the.',
                    'Poori village community (village committees ke through) land revenue dene ke liye jointly responsible thi.',
                    'Tax mahal ke total produce par lagaya jaata tha.'
                ]},
                { type: 'heading', text: 'Kisanon par Asar:'},
                { type: 'list', items: [
                    'Yeh system kisanon ke liye ek shraap jaisa tha kyunki government ki revenue demand bahut zyada thi.',
                    'Isse garibi, zameen se bedakhli, aur moneylenders dwara exploitation hua.',
                    '1830 aur 1840 ke beech North India ke kisanon mein is system ke kaaran jo gussa tha, woh 1857 ke Revolt ka ek bada kaaran bana.'
                ]}
            ]}
        ]
      },
      {
        id: '3',
        title: "Commercial Crops ki Growth",
        content: [
           {
               type: 'columns',
               content: [
                   { width: '50%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/2_h0nnvw.jpg', alt: 'Indian farmers were forced to grow cash crops like indigo, often leading to a miserable life.' }] },
                   { width: '50%', items: [
                        { type: 'paragraph', text: 'East India Company ko apni military aur administrative kharchon ke liye aur paisa chahiye tha aur woh maximum profit chahte the. Unhone kisanon ko aisi specific crops ugane ke liye force karna shuru kar diya jinki Europe mein bahut demand thi. Inhe cash crops ya commercial crops kaha jaata tha.'},
                        { type: 'list', items: [
                            'Company Indian farmers se kheti ka raw material bahut saste daam par khareedti thi aur England bhej deti thi.',
                             'England mein, in raw materials se factories mein finished goods banaye jaate the.',
                            'Yeh finished goods phir India lakar mehenge daamo par beche jaate the, jisse Company ko bahut zyada profit hota tha.'
                        ]},
                   ]}
               ]
           },
            { type: 'paragraph', text: 'Main cash crops jo kisanon ko ugane ke liye force kiya gaya, woh the indigo, cotton, opium, pepper, tea, aur sugarcane. Unhein raw silk ke liye silkworms paalne par bhi majboor kiya gaya.'},
            { type: 'list', items: [
                '<strong>Opium:</strong> British China mein opium smuggle karke bechna chahte the taaki bahut saara profit kama sakein.',
                '<strong>Indigo:</strong> Hindi mein ise neel kehte hain. Yeh ek blue dye banane ke kaam aata tha jiski Britain ki textile industries mein bahut demand thi. Kisanon ko ise ugane ke liye force kiya jaata tha par paise bahut kam milte the, jisse unki life barbaad ho gayi.',
                '<strong>Sugarcane:</strong> West mein sugar ki demand badh rahi thi, isliye bahut se Europeans ne India mein sugar plantations lagaye. Kisanon ko factories ke liye gaadha ganne ka ras produce karne aur use bahut kam daam par bechne ke liye majboor kiya jaata tha.'
            ]}
        ],
        subSections: [
            { id: '3.1', title: 'Commercial Crops aur Unki Kheti ki Jagah', content: [
                { type: 'list', items: [
                    '<strong>Opium:</strong> Bengal, Bihar aur Punjab',
                    '<strong>Indigo:</strong> Bihar aur Bengal',
                    '<strong>Cotton:</strong> Gujarat, Maharashtra aur Madhya Pradesh',
                    '<strong>Tea:</strong> Assam, West Bengal aur South India',
                    '<strong>Pepper:</strong> Kerala, Karnataka, Tamil Nadu, Andaman & Nicobar Islands, aur Puducherry',
                    '<strong>Sugarcane:</strong> Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, Gujarat, Punjab, Haryana'
                ]}
            ]}
        ]
      },
      {
        id: '4',
        title: 'Kisanon ki Halat',
        content: [
            { type: 'paragraph', text: 'Indian farmers pehle se hi floods aur droughts jaise natural calamities se pareshan the. British policies ne unki mushkilein aur badha di:'},
            { type: 'list', items: [
                'Un par high taxes, loans ka repayment, karz aur high interest rate ka bojh tha.',
                'Isse unki life dukh, garibi aur frustration se bhar gayi.',
                'Bahut se kisan jo land revenue nahi de paate the, unki zameen chhin jaati thi aur woh landless labourers ban jaate the.',
                'Landless labourers ke taur par, unhein bahut kam wages par kaam karne ke liye majboor kiya jaata tha.'
            ]}
        ]
      },
      {
        id: '5',
        title: 'Kisanon ke Vidroh',
        content: [
            { type: 'paragraph', text: 'Jab exploitation aur atyachar bardaasht se bahar ho gaya, toh desh bhar ke kisanon ne vidroh karna shuru kar diya.'}
        ],
        subSections: [
            { id: '5.1', title: 'Kisan Vidroh ke Kaaran', content: [
                { type: 'list', items: [
                    'Galat Land Revenue Settlements aur unka administration.',
                    'Rural population ka economic exploitation.',
                    'Lambe time se chal rahe loans aur karz.',
                    'Kisanon ko unki zameen se nikal dena, jisse woh landless laborers banne par majboor ho gaye.'
                ]},
                { type: 'paragraph', text: 'In issues ke kaaran 1857 ke First War of Independence se pehle bhi kai revolts hue. Baad mein, 1930 mein, kisanon ke cause ko support karne ke liye Kisan Sabhas jaise organizations banaye gaye.'}
            ]},
            { id: '5.2', title: 'Bade Kisan Vidrohon ki List', content: [
                { type: 'list', items: [
                    '<strong>Blue Rebellion (1859):</strong> Bengal ke Ryots ne indigo ugane se mana kar diya.',
                    '<strong>Moplah Revolts (1860s-1870s):</strong> South India ke Moplahs ne badhte tax ke bojh ke khilaf vidroh kiya.',
                    '<strong>Deccan Riots (1875):</strong> Yeh riots rural debt ke kaaran violent ho gaye.',
                    '<strong>Champaran Movement (1860-1920s):</strong> Champaran, Bihar ke kisanon ne zabardasti indigo ki kheti aur high taxes ka virodh kiya.',
                    '<strong>Uttar Pradesh:</strong> Pratapgarh, Rae Bareli, Sultanpur, aur Faizabad ke kisanon ne high revenue ka virodh kiya. 1920 mein Jawaharlal Nehru ke leadership mein Oudh Kisan Sabha banayi gayi.',
                    '<strong>Tanjore (1923-24):</strong> Kisanon ne revenue badhane ka virodh kiya.',
                    '<strong>First Ryots Association (1923):</strong> N.G. Ranga ne organize kiya.',
                    '<strong>Kisan Movement in Uttar Pradesh:</strong> Zamindari system ko khatam karne ki demand ki.',
                    '<strong>Bardoli Satyagraha (1927):</strong> Sardar Patel ne Bombay Presidency dwara revenue badhane ke khilaf virodh ka netritva kiya, jisse government ko use revise karne par majboor hona pada.',
                    '<strong>Kheda:</strong> Kisanon ne revenue badhane ka virodh kiya.'
                ]}
            ]}
        ]
      },
      {
        id: '6',
        title: "Colonialism aur Tribal Societies",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/5_txbjix.jpg', alt: 'Before British intervention, tribal societies like the Mundas and Santhals lived a life of self-sufficiency in the forests.' }] },
                    { width: '50%', items: [
                        { type: 'paragraph', text: 'Kisanon ka shoshan karne ke baad, British ne apna dhyaan India ke tribal communities par daala, jo ghane jangalon mein self-sufficient life jeete the. Tribals ka manna tha ki jangal unke hain.'}
                    ]}
                ]
            }
        ],
        subSections: [
            { id: '6.1', title: 'Traditional Tribal Life', content: [
                { type: 'list', items: [
                    '<strong>Shifting Cultivation:</strong> Orissa ke Khonds jaise kai tribes shifting cultivation karte the.',
                    '<strong>Herding and Rearing Animals:</strong> Himalayas ke Van Gujjars aur Kullu ke Gaddis jaise groups janwar paal kar jeete the.',
                    '<strong>Communal Land Ownership:</strong> Chotanagpur ke Mundas jaise tribes mein, zameen poore clan ki hoti thi, aur sabhi members ke equal rights the.'
                ]}
            ]},
            { id: '6.2', title: 'Tribal Life par British Rule ka Asar', content: [
                { type: 'list', items: [
                    '<strong>Chiefs ki Power ka Khatma:</strong> British rule ke under, tribal chiefs ne apni saari power kho di aur unhein British officers ke banaye laws ko follow karne par majboor kiya gaya.',
                    '<strong>Forest Laws mein Changes:</strong> British shifting cultivation nahi chahte the kyunki isse tribals ko control karna mushkil tha. Unhone naye forest laws introduce kiye jisse tribal life bahut mushkil ho gayi.',
                    'Zyadatar forests ko state property declare kar diya gaya.',
                    'Kuch forests, jahan valuable timber milta tha, unhein reserved forests declare kar diya gaya, jahan tribals ko permission ke bina resources use karna allowed nahi tha.',
                    '<strong>Displacement aur Labor ki Kami:</strong> Bahut se tribals ko kaam ke liye doosri jagah jaana pada. Isse British ke liye railway sleepers ke liye ped kaatne aur logs transport karne ke liye laborers ki kami ho gayi.',
                    '<strong>Traders aur Moneylenders dwara Exploitation:</strong> Jaise hi forest products ki demand badhi, traders aur moneylenders tribals ke paas gaye, unhein cash loans offer kiye, aur unhein wages par kaam karne ke liye kaha, jisse unki pareshaniyan aur badh gayin.',
                    '<strong>Santhals ka Example:</strong> Hazaribagh ke Santhals cocoons ke liye silkworms paalte the. Jab Indian silk ki demand badhi, toh traders ne unhein 1000 cocoons ke liye sirf ₹3 diye aur phir use paanch guna daam par bech diya. Jab tribals ko yeh samajh aaya, toh woh traders ko apna dushman samajhne lage.',
                    '<strong>Forced Labor:</strong> Bahut se tribals ko kaam ke liye apne jangal ke ghar chhodne pade. Badi sankhya mein unhein Assam ke tea plantations mein kathor conditions mein, kam wages par kaam karne ke liye recruit kiya gaya, aur unhein ghar wapas aane ki permission nahi thi. Coal mine workers ki life bhi bahut kharab thi. Bahut se logon ko factories aur khet mein bhi bahut kathor conditions mein recruit kiya gaya.'
                ]}
            ]}
        ]
      },
      {
        id: '7',
        title: "Tribal Revolts",
        content: [
           {
               type: 'columns',
               content: [
                   { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104543/1_ytzfca.jpg', alt: 'Birsa Munda, who led the tribal revolt and emerged as a hero for his people.' }] },
                   { width: '60%', items: [
                        { type: 'paragraph', text: 'Agriculture ke commercialization aur forests ke exploitation ne bahut se tribals ko beghar aur berozgar bana diya, jiske kaaran poore India mein kai vidroh hue.'}
                   ]}
               ]
           }
        ],
        subSections: [
            { id: '7.1', title: 'Bade Tribal Revolts ki List', content: [
                { type: 'list', items: [
                    '<strong>Khasi Revolt (1829):</strong> North-west Assam mein Khasis ne, Bar Manik aur Tirot Sing ke leadership mein, vidroh kiya jab British ne unke land se road banana shuru kiya. Is vidroh ko buri tarah se daba diya gaya.',
                    '<strong>Munda and Kolarian Revolt (1831):</strong> Chotanagpur ke Mundas ne, Kolarian tribe ke saath milkar, vidroh kiya lekin unhein daba diya gaya.',
                    '<strong>Khond Revolt (1846):</strong> Khondmals (Orissa ke paas) ke Khonds ne vidroh kiya kyunki unhein darr tha ki British un par kabza kar lenge, lekin woh British forces ko hara nahi sake.',
                    '<strong>Kuki Revolts:</strong> Manipur ke Kukis ne 1829 se lagatar British territories par attack kiya lekin 1850 mein unhein surrender karna pada. 1917 mein Manipur ke Kukis ne ek aur vidroh kiya.',
                    '<strong>Santhal Rebellion (1855-1856):</strong> Santhals ne traders aur British ke khilaf vidroh kiya jab government unke interests ko bachane mein fail ho gayi. Unka netritva do bhaiyon, Sidhu aur Kanhu Murmu ne kiya.',
                    '<strong>Doosre Revolts:</strong> 1870 ka Kharwar rebellion aur 1882 mein Kacha Nagas dwara kiya gaya revolt bhi British ke khilaf tha lekin fail ho gaya.'
                ]}
            ]},
            { id: '7.2', title: 'The Birsa Movement', content: [
                { type: 'list', items: [
                    '1895 mein, Birsa Munda naam ka ek young ladka Chotanagpur ke tribals ke liye ek hero ban kar ubhra.',
                    'Usne apne logon se kaha ki woh apni zameen par kaam karte rahein taaki apni rozi-roti kama sakein, yeh sochte hue ki isse unke dukh khatam ho jayenge.',
                    'Jaise hi Birsa Movement phaila, woh bahut popular ho gaya. Usne apne logon ko bataya ki British land policies unke traditional land system ko barbaad kar rahi hain.',
                    'Birsa ko do saal ke liye jail mein daal diya gaya. Release hone ke baad, usne tribals ko zamindars par attack karne ke liye encourage kiya.',
                    'Usne Birsa Raj ke symbol ke roop mein ek white flag uthaya.',
                    'Yeh movement 1900 mein Birsa ki death ke saath khatam ho gaya.'
                ]}
            ]}
        ]
      },
      {
        id: '8',
        title: "Crafts aur Industries par Colonialism ke Asar",
        content: [
            { type: 'paragraph', text: 'Jaise-jaise East India Company ka rule phaila, uska exploitative character aur trade par monopoly aur bhi strong ho gayi.'}
        ],
        subSections: [
            { id: '8.1', title: 'India ki Traditional Industries', content: [
                { type: 'list', items: [
                    'British se pehle, India mein agriculture ke saath-saath industries bhi khoob phal-phool rahi thi.',
                    'Indian handicrafts, calico, muslin, wool, aur silk products ki bahut demand thi. Iron, steel, copper, gold, aur silver ke metal works bhi popular the.',
                    '17th century mein, Europe ke saath trade India ke liye faydemand tha, kyunki yeh badi quantity mein fine cotton aur silk fabrics, masale, indigo, keemti pathar aur handicrafts export karta tha.'
                ]}
            ]},
            { id: '8.2', title: 'Indian Crafts aur Industries ka Destruction', content: [
                { type: 'paragraph', text: 'Company ki policies ne Indian crafts, cottage industries aur artisanship ko tabah kar diya.'},
                { type: 'paragraph', text: 'British cotton industry ko protect karne ke liye, unhone yeh kadam uthaye:'},
                { type: 'list', items: [
                    'Indian goods par bahut heavy duties (taxes) lagaye.',
                    'British machine-made goods ko India mein saste rates par promote kiya.',
                    'Indian princes ki power kam ho gayi, jiska matlab tha ki local artisans ke liye princely patronage (support) kam ho gaya.'
                ]},
                { type: 'paragraph', text: 'In policies ne Indian craftsmen ko apni traditional livelihoods chhodne par majboor kar diya. Britain mein Industrial Revolution (1760-1830) ne bhi India ke de-industrialization mein contribute kiya. In sabhi factors ne traditional handicrafts ko barbaad kar diya aur India ki national income mein giravat aayi.'}
            ]}
        ]
      },
       {
        id: '9',
        title: "India mein Modern Industries",
        content: [
            { type: 'paragraph', text: 'Freedom ke liye national movement aur global developments ne India mein modern industries ki sthapna mein madad ki.'},
            { type: 'heading', text: 'Plantation Industries:'},
            { type: 'list', items: [
                'Tea Assam, Bengal, aur South India mein sabse badi plantation industry ban gayi. Indian tea world market mein best ban gayi, jiska sabse bada buyer England tha.',
                'Doosri plantation industries mein coffee, cinchona, aur rubber shamil the.'
            ]},
            { type: 'heading', text: 'Other Industries:'},
            { type: 'list', items: [
                'Cotton, jute, iron, aur steel jaise industries tezi se develop huin.',
                'Railways ke expansion se coal, iron, aur steel ki demand badh gayi.',
                'Jamshedji Tata ke vision ke kaaran, world-famous Tata Iron and Steel Company ki sthapna hui.',
                'Baad mein, cement, chemical, aur sugar industries bhi develop huin.'
            ]},
            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756104544/9_dfwhwt.jpg', alt: 'The Tata Iron and Steel Company, founded by Jamshedji Tata, marked a new era of modern industry in India.' },
            { type: 'paragraph', text: 'Lekin, India ko doosre deshon se machinery import karni padti thi. Independence ke baad hi basic ya key industries ko priority di gayi.'}
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
            <figure key={index} className="w-full max-w-2xl mx-auto rounded-lg shadow-md overflow-hidden my-4">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-cover" />
            </figure>
        );
      case 'columns':
        return (
            <div key={index} className="flex flex-col md:flex-row gap-6 my-4 items-center">
              {item.content.map((column, colIndex) => (
                <div key={colIndex} style={{ flexBasis: column.width || 'auto' }}>
                  <ContentRenderer content={column.items} />
                </div>
              ))}
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
function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true, '5': true, '6': true, '7': true, '8': true });
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
                  margin: 0,
                  padding: '0 16px'
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
            <div className="lg:sticky top-[88px] h-[calc(100vh-88px)]">
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
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[100px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <div key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[100px]">
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

export default App;
