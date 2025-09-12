import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "The First War of Independence—1857",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Revolt of 1857",
        content: [
          { type: 'paragraph', text: "The Revolt of 1857 is a landmark event in the history of India's struggle for freedom. It was a major uprising against the rule of the British East India Company." },
          {
            type: 'columns',
            content: [
                { width: '55%', items: [
                    { type: 'list', items: [
                        '<strong>Beginning of the Revolt:</strong> It started on May 10, 1857, with a mutiny of soldiers (sepoys) in the Meerut Cantonment.',
                        '<strong>March to Delhi:</strong> The revolutionary soldiers marched to Delhi. On May 11, 1857, they crossed the Yamuna river, entered the Red Fort, and appealed to the aged Mughal Emperor, Bahadur Shah Zafar II, to lead the revolt.',
                        '<strong>A New Leader:</strong> Although he had no real authority, the sepoys proclaimed him the Shahenshah-e-Hindustan (Emperor of Hindustan). They captured Delhi and ransacked many public offices.',
                        '<strong>Spread of the Revolt:</strong> Though started by Indian soldiers, the revolt quickly spread to other parts of the country. People from different sections of society, like peasants, artisans, scholars, and educated Indians, joined in. Many Indian rulers also joined the fight against foreign rule. This showed a sense of unity between Hindus and Muslims.',

                    ]}
                ]},
                { width: '35%',  items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/1_tvsfdx.jpg', alt: 'Bahadur Shah Zafar II, Last Mughal Emperor' }] }
            ]
          },
          { type: 'heading', text: 'Different Names for the Revolt:' },
          { type: 'list', items: [
              "The British called it <strong>The Uprising</strong>, the <strong>Revolt of 1857</strong>, or the <strong>Sepoy Mutiny</strong>.",
              "Indian historians call it the <strong>First War of Independence</strong> because it was the first time that different sections of Indian society united to fight against foreign domination."
          ]},
          { type: 'heading', text: 'Background of British Rule:' },
          { type: 'list', items: [
              "The British came to India and slowly began losing its wealth and independence. Their main aim was to exploit the resources of our country.",
              "From 1757 onwards, for 100 years, they won almost every battle against Indian rulers and kept expanding their control over India. They sent India's wealth back to England.",
              "This exploitation angered the Indians, and finally, in 1857, many people revolted."
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        content: [
            { type: 'paragraph', text: "The revolt was the result of widespread unhappiness that had been building up for a long time. The causes can be divided into several categories:" }
        ],
        subSections: [
            {
                id: '2.1', title: 'Political Causes', content: [
                    { type: 'list', items: [
                        "<strong>Dissatisfaction with British Rule:</strong> The sepoys and many Indian rulers were very unhappy with the policies of the British. Rulers like Bahadur Shah Zafar, Nana Saheb (of Kanpur), Rani Lakshmi Bai (of Jhansi), and the rulers of various other territories had personal issues with the British.",
                        "<strong>Foreign Exploitation:</strong> People in major cities like Delhi, Lucknow, and Gwalior felt their ambitions were blocked by foreign rule."
                    ]},
                    { type: 'heading', text: 'The Doctrine of Lapse:'},
                    {
                        type: 'columns',
                        content: [
                            { width: '50%', items: [
                                { type: 'list', items: [
                                    "This policy was introduced by <strong>Lord Dalhousie</strong>.",
                                    "According to this doctrine, if an Indian ruler died without a natural male heir, his kingdom would be taken over (annexed) by the British.",
                                    "The ruler was not allowed to adopt a son to be his heir. This policy created a lot of anger and resentment among Indian rulers."
                                ]},
                                { type: 'paragraph', text: "<strong>Do You Know?</strong> Lord Dalhousie was the Governor-General of India from 1848 to 1856. His eight-year rule is considered the most significant period for the expansion of British power in India."}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/2_wy9ebg.jpg', alt: 'Illustration of the Doctrine of Lapse' }] }
                        ]
                    },
                    { type: 'heading', text: 'The Subsidiary Alliance:'},
                    { type: 'list', items: [
                        "This was another policy used by the British to gain control. The British signed treaties with many Indian Kings. For example, a treaty was signed with the Nawab of Awadh in 1801.",
                        "Under this treaty, the Nawab had to: <ul class='list-disc pl-5 mt-2'><li>Accept a permanent British army within his territory.</li><li>Pay a subsidy (money) for the army's maintenance.</li><li>Not hire any other European in his service without British approval.</li><li>Keep a British official, called a Resident, at his court.</li></ul>",
                        "This system reduced the power of the Indian ruler and made him dependent on the British.",
                        "Eventually, the British annexed Awadh completely, claiming that the Nawab was not governing the state properly. This act shocked other rulers and made them lose all trust in the British. The annexation of Awadh also left about 60,000 professional soldiers of the Nawab's army jobless."
                    ]}
                ]
            },
            {
                id: '2.2', title: 'Economic Causes', content: [
                     {
                        type: 'columns',
                        content: [
                            { width: '65%', items: [
                                { type: 'list', items: [
                                    "<strong>Exploitation of Economy:</strong> The British policies were designed to benefit them, which destroyed the traditional Indian economic structure.",
                                    "<strong>Hardship for Peasants:</strong> The zamindari system forced peasants (farmers) to grow only cash crops (like cotton and indigo), which the British wanted. If they failed to grow these crops or pay the high taxes, they were tortured.",
                                    "<strong>Destruction of Indian Industries:</strong> Industrial goods, especially textiles, from Britain flooded the Indian markets. This destroyed Indian industries and made artisans and peasants unemployed.",
                                    "<strong>Unemployment:</strong> Whenever the British annexed a princely state, they took over the land and wealth. This caused huge unemployment. For example, after the annexation of Awadh, many people lost their jobs."
                                ]}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/3_clr536.jpg', alt: 'Peasants exploited under the zamindari system' }] }
                        ]
                    }
                ]
            },
            {
                id: '2.3', title: 'Social and Religious Causes', content: [
                    { type: 'list', items: [
                        "<strong>Interference in Customs:</strong> The British considered themselves superior and interfered in Indian customs and traditions.",
                        "<strong>Fear of Conversion:</strong> Many Indians became suspicious of the introduction of western education and the work of Christian missionaries, fearing they were aimed at converting people to Christianity.",
                        "<strong>Change in Inheritance Law:</strong> The Hindu law of property was changed. The new law allowed a person who converted to Christianity to inherit his ancestral property. This was seen as a way to encourage conversions.",
                        "<strong>New Technology and Fear:</strong> The spread of railways created fear among the poor and illiterate people that they would lose their caste by travelling with people from other castes.",
                        "<strong>Racial Discrimination:</strong> <ul class='list-disc pl-5 mt-2'><li>Indians were not allowed to travel in first-class train compartments.</li><li>The British looked down upon Indians and treated them as inferiors.</li><li>The judicial system claimed to be based on equality, but in practice, it was biased against Indians.</li></ul>"
                    ]},
                    { type: 'paragraph', text: "<strong>Do You Know?</strong> Rumours spread that the British had mixed the bone dust of cows and pigs with flour (atta) and sweets (mithai) that were sold in the market. This was done to hurt the religious sentiments of both Hindus and Muslims and make them lose their caste."}
                ]
            },
            {
                id: '2.4', title: 'Military Causes', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '55%', items: [
                                { type: 'list', items: [
                                    "<strong>Discrimination Against Sepoys:</strong> The Indian soldiers (sepoys) helped the British build their empire, but they were not treated well. <ul class='list-disc pl-5 mt-2'><li>There was clear discrimination in promotions and pay.</li><li>An Indian soldier could not rise above the rank of a Subedar.</li><li>The highest salary for an Indian Subedar was less than the minimum salary of a new European recruit.</li></ul>",
                                    "<strong>The General Service Enlistment Act of 1856:</strong> This new law forced Indian soldiers to serve overseas if required. This was a major issue for Hindus, who believed that crossing the sea would make them lose their caste."

                                ]}
                             ]},
                            { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/4_y0ytck.jpg', alt: 'Illustration showing the greased cartridge issue' }] }
                        ]
                    },
                ]
            },
            {
                id: '2.5', title: 'Immediate Cause: The Greased Cartridges', content: [
                    { type: 'paragraph', text: "The immediate trigger for the revolt was the introduction of the new Enfield rifle. The cartridges for this rifle had a greased paper cover, which had to be bitten off before loading the cartridge into the rifle. A rumour spread that the grease was made from the fat of cows and pigs." },
                    {
                        type: 'columns',
                        content: [
                            { width: '45%', items: [
                                { type: 'paragraph', text: "This was deeply offensive to both Hindus, for whom the cow is sacred, and Muslims, for whom the pig is detestable." },
                                { type: 'paragraph', text: "<strong>Mangal Pandey:</strong> On March 29, 1857, at Barrackpore near Calcutta, a young sepoy named <strong>Mangal Pandey</strong> refused to use the greased cartridges. He attacked and shot down his sergeant. He was arrested, tried, and executed." },
                                { type: 'paragraph', text: "This news spread like wildfire, and many sepoys across the country began to revolt."}
                            ]},
                            { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/5_s34huz.jpg', alt: 'Mangal Pandey, who sparked the revolt' }] }
                        ]
                    }
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Course of the Revolt",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '45%', items: [
                        { type: 'list', items: [
                            "<strong>The Outbreak at Meerut:</strong> The sepoys openly revolted in Meerut in April 1857 after refusing to use the new cartridges. They were court-martialled and sentenced to ten years in prison.",
                            "<strong>The Revolt Begins:</strong> On May 10, 1857, other regiments in Meerut revolted. They broke open the prison, freed the imprisoned soldiers, and marched to Delhi. On May 11, they rebelled under Bahadur Shah Zafar II.",
                        ]}
                    ]},
                    { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/6_rebleq.jpg', alt: 'Prominent leaders of the 1857 Revolt' }] }
                ]
            },
            { type: 'heading', text: 'Spread and Leaders:'},
            { type: 'list', items: [
                "The revolt spread to other places.",
                "<strong>Kanpur:</strong> Led by Nana Saheb. His general was Tantya Tope.",
                "<strong>Awadh (Lucknow):</strong> Led by Begum Hazrat Mahal.",
                "<strong>Jhansi:</strong> Led by Rani Lakshmi Bai.",
                "<strong>Central India:</strong> Rani Lakshmi Bai also fought bravely here.",
                "<strong>Other Centres:</strong> The revolt also spread to Bareilly, Agra, Benaras, and other places."
            ]},
            { type: 'paragraph', text: "<strong>Do You Know?</strong> Kunwar Singh, an 80-year-old landlord from Jagdishpur, was a brilliant military leader of the revolt in Western Bihar."},
            {
                type: 'columns',
                content: [
                    { width: '65%', items: [
                        { type: 'heading', text: 'Groups That Did Not Join:'},
                        { type: 'list', items: [
                            "Not everyone joined the revolt. The Sikh leaders in Punjab, the Nizam of Hyderabad, and the Scindia of Gwalior did not join.",
                            "The Madras and Bombay Regiments also remained loyal to the British.",
                            "The Afghans and the Gurkhas also remained loyal to the British."
                        ]},
                        { type: 'heading', text: 'Nature of the Revolt:'},
                        { type: 'paragraph', text: "The revolt was started by the sepoys, but its real strength came from the participation of peasants and artisans. It showed remarkable Hindu-Muslim unity. Although it was a great event, it was eventually suppressed by the British."}
                    ]},
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Suppression of the Revolt",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '55%', items: [
                        { type: 'paragraph', text: "The British military took strong measures to crush the revolt." },
                        { type: 'list', items: [
                            "<strong>Recapture of Delhi:</strong> British officers freed Delhi, which was the main centre of the revolt. The Kashmiri Gate was blown up, and hundreds of people were massacred.",
                            "<strong>Fate of Bahadur Shah Zafar:</strong> The Mughal Emperor, Bahadur Shah Zafar II, was tried for treason and exiled to Rangoon (in modern-day Myanmar). His sons were cruelly shot down because they were held responsible for the murder of English men, women, and children.",
                        ]},
                        { type: 'list', items: [
                            "<strong>End of the Revolt:</strong> The control of Delhi and the imprisonment of the Emperor broke the backbone of the mutiny. <ul class='list-disc pl-5 mt-2'><li>Lucknow was recaptured in 1858.</li><li>Rani Lakshmi Bai was killed in battle.</li><li>Tantya Tope was captured and hanged to death.</li></ul>"
                        ]},
                        { type: 'paragraph', text: "This ended the historic episode, which is now called the First War of Independence."}
                    ]},
                    { width: '25%', items: [
                       
                        { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/7_ry7o3g.jpg', alt: 'British forces storming Delhi' },
                        { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122970/8_aeqh50.jpg', alt: 'British officers in India' }

                    ]}
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Causes of the Failure of the Revolt",
        content: [
            { type: 'list', items: [
                "<strong>Broke Out Too Early:</strong> The uprising had been planned for months, but it started before the decided date. It did not spread beyond Central India and Delhi as planned, which made it easier for the Governor-General at the time, Lord Canning, to control it.",
                "<strong>Lack of Unity and Ideology:</strong> There was no common ideology or unity among the rebels. The idea of nationalism (a united India) had not yet developed. <ul class='list-disc pl-5 mt-2'><li>The sepoys wanted to restore the glory of the Mughals.</li><li>Nana Saheb and Tantya Tope wanted to re-establish Maratha power.</li><li>Rani Lakshmi Bai was fighting for her own lost kingdom.</li></ul>",
            ]},
            {
                type: 'columns',
                content: [
                    { width: '55%', items: [
                        { type: 'list', items: [
                            "<strong>Not Widespread:</strong> The revolt was mostly limited to North and Central India. The North (Punjab), the Sikhs, the Nizams, and the Scindias were not affected. In fact, the Gurkhas helped the British suppress the mutiny.",
                            "<strong>Superior British Army:</strong> The rebels could not match the sophisticated and modern weapons of the British. The British army was more disciplined and had better communication systems and military strategies.",
                            "<strong>Weak Leadership:</strong> The leadership of the revolt was not strong or organized enough to give a single direction to the rebels. Indian rulers fought to liberate their own territories and did not think about the freedom of the whole country."
                        ]}
                    ]},
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Results of the Revolt",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '55%', items: [
                        { type: 'paragraph', text: "The Revolt of 1857 was a major turning point in Indian history. It led to several important changes." },
                        { type: 'list', items: [
                            "<strong>End of East India Company's Rule:</strong> The rule of the East India Company ended with Queen Victoria's Proclamation of November 1, 1858.",
                            "<strong>Direct Rule of the British Crown:</strong> The British Crown (the British government) took over the complete administration of India.",
                        ]},
                    ]},
                    { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122970/IMG-20250825-WA0029_dg5vpw.jpg', alt: 'Placeholder image for Queen Victoria Proclamation' }] }
                ]
            },
            { type: 'heading', text: 'New Administrative Posts:'},
            { type: 'list', items: [
                "A <strong>Secretary of State</strong> was appointed by the British Parliament to look after the governance of India. He was helped by a council.",
                "The title of the <strong>Governor-General</strong> was changed to <strong>Viceroy</strong>. The Viceroy was the personal representative of the British Crown in India."
            ]},
            { type: 'heading', text: 'Change in British Policies:'},
            { type: 'list', items: [
                "The British government stopped the policy of ruthless conquests and annexations.",
                "Indian princes were given the assurance that their states would not be annexed.",
                "The right of adoption was granted to Indian rulers.",
                "Full religious freedom was guaranteed to Indians.",
                "It was promised that Indians would be given high posts without any discrimination."
            ]},
            { type: 'heading', text: 'Legacy of the Revolt:'},
            { type: 'list', items: [
                "By the end of 1859, British authority in India was fully re-established.",
                "The revolt proved to be the first great struggle for freedom.",
                "It became a source of inspiration for later freedom fighters.",
                "The heroes of the revolt, like Rani Lakshmi Bai and Mangal Pandey, became household names in the country."
            ]}
        ]
      },
      {
        id: '7',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                "<strong>Ally:</strong> A state that formally cooperates with another for military or other gains.",
                "<strong>Court-martialed:</strong> A judicial court for trying members of the armed services for crimes against military law.",
                "<strong>Mutiny:</strong> An open rebellion against the proper authorities, especially by soldiers against their officers.",
                "<strong>Racial discrimination:</strong> Unfair treatment or bias against a person or a group of people based on their race, hair type, colour of eyes, or skin.",
                "<strong>Revolt:</strong> To take violent action against an established government or ruler.",
                "<strong>Sergeant:</strong> A rank of a non-commissioned officer in the army or air force.",
                "<strong>Shackles:</strong> A pair of fetters connected together by a chain, used to fasten a prisoner's wrists or ankles together.",
                "<strong>Subedar:</strong> A rank in the Indian Army, ranking below the commissioned officers.",
                "<strong>Subsidy:</strong> Money that is paid, usually by a government, to keep the price of a product or service low or to help a business or an organization to continue to function.",
                "<strong>Treason:</strong> The crime of betraying one's own country."
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "First War of Independence—1857",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "1857 ke Revolt ka Introduction",
        content: [
          { type: 'paragraph', text: "1857 ka Revolt, India ki freedom struggle ki history mein ek landmark event hai. Yeh British East India Company ke rule ke against ek major uprising (bada vidroh) thi." },
          {
            type: 'columns',
            content: [
                { width: '55%', items: [
                    { type: 'list', items: [
                        '<strong>Revolt ki Shuruat:</strong> Yeh 10 May 1857 ko Meerut Cantonment mein soldiers (sipahiyon) ki mutiny se start hua.',
                        '<strong>Delhi ki Taraf March:</strong> Revolutionary soldiers Delhi ki taraf gaye. 11 May 1857 ko, unhone Yamuna river cross ki, Red Fort mein enter kiya, aur Mughal Emperor Bahadur Shah Zafar II se revolt ko lead karne ki appeal ki.',
                        '<strong>Ek Naya Leader:</strong> Unke paas real authority nahi thi, phir bhi sipahiyon ne unhe Shahenshah-e-Hindustan (Emperor of Hindustan) proclaim kar diya. Unhone Delhi capture kar li aur kai public offices mein tod-phod ki.',
                        '<strong>Revolt ka Failav:</strong> Shuru Indian soldiers ne kiya tha, but revolt jaldi hi country ke doosre parts mein phail gaya. Society ke alag-alag sections ke log, jaise peasants, artisans, scholars, aur educated Indians, isme shaamil ho gaye. Kai Indian rulers ne bhi foreign rule ke against fight join ki. Isse Hindu-Muslim unity bhi dikhi.',
                    ]}
                ]},
                { width: '35%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/1_tvsfdx.jpg', alt: 'Bahadur Shah Zafar II, Last Mughal Emperor' }] }
            ]
          },
          { type: 'heading', text: 'Revolt ke Different Names:' },
          { type: 'list', items: [
              "British log ise <strong>The Uprising</strong>, <strong>Revolt of 1857</strong>, ya <strong>Sepoy Mutiny</strong> kehte the.",
              "Indian historians ise <strong>First War of Independence</strong> kehte hain kyunki yeh first time tha jab Indian society ke different sections foreign rule ke against ek saath milkar lade."
          ]},
          { type: 'heading', text: 'British Rule ka Background:' },
          { type: 'list', items: [
              "British India aaye aur dheere-dheere India apni wealth aur independence khone laga. Unka main aim hamari country ke resources ko exploit karna tha.",
              "1757 se, 100 saal tak, unhone Indian rulers ke against almost har battle jeeti aur India par apna control badhate gaye. Woh India ki wealth England bhejte the.",
              "Is exploitation se Indians ko gussa aaya, aur finally, 1857 mein, bahut se logon ne revolt kar diya."
          ]}
        ]
      },
      {
        id: '2',
        title: "Revolt ke Reasons",
        content: [
            { type: 'paragraph', text: "Yeh revolt us widespread unhappiness ka result tha jo kaafi time se build up ho rahi thi. Iske reasons ko kai categories mein divide kiya ja sakta hai:" }
        ],
        subSections: [
            {
                id: '2.1', title: 'Political Reasons', content: [
                    { type: 'list', items: [
                        "<strong>British Rule se Dissatisfaction:</strong> Sipahi aur kai Indian rulers British ki policies se bahut unhappy the. Rulers jaise Bahadur Shah Zafar, Nana Saheb (Kanpur), Rani Lakshmi Bai (Jhansi), aur doosri territories ke rulers ke British ke saath personal issues the.",
                        "<strong>Foreign Exploitation:</strong> Delhi, Lucknow, aur Gwalior jaise bade shehron mein logon ko laga ki unke ambitions foreign rule ki wajah se ruke hue hain."
                    ]},
                    { type: 'heading', text: 'The Doctrine of Lapse:'},
                    {
                        type: 'columns',
                        content: [
                            { width: '50%', items: [
                                { type: 'list', items: [
                                    "Yeh policy <strong>Lord Dalhousie</strong> ne introduce ki thi.",
                                    "Is doctrine ke according, agar koi Indian ruler bina natural male heir (beta) ke mar jaata, toh uska kingdom British takeover (annex) kar lete the.",
                                    "Ruler ko heir ke liye beta adopt karne ki permission nahi thi. Is policy se Indian rulers mein bahut gussa aur resentment paida hua."
                                ]},
                                { type: 'paragraph', text: "<strong>Do You Know?</strong> Lord Dalhousie 1848 se 1856 tak India ke Governor-General the. Unke 8 saal ke rule ko India mein British power ke expansion ke liye sabse significant period maana jaata hai."}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/2_wy9ebg.jpg', alt: 'Illustration of the Doctrine of Lapse' }] }
                        ]
                    },
                    { type: 'heading', text: 'The Subsidiary Alliance:'},
                    { type: 'list', items: [
                        "Yeh ek aur policy thi jise British ne control haasil karne ke liye use kiya. British ne kai Indian Kings ke saath treaties sign ki. For example, 1801 mein Awadh ke Nawab ke saath ek treaty sign hui thi.",
                        "Is treaty ke under, Nawab ko: <ul class='list-disc pl-5 mt-2'><li>Apni territory mein ek permanent British army accept karni padi.</li><li>Army ke maintenance ke liye subsidy (paisa) pay karna pada.</li><li>British approval ke bina kisi aur European ko apni service mein hire nahi kar sakte the.</li><li>Apne court mein ek British official, jise Resident kehte the, rakhna pada.</li></ul>",
                        "Is system ne Indian ruler ki power kam kar di aur use British par dependent bana diya.",
                        "Finally, British ne Awadh ko completely annex kar liya, yeh kehkar ki Nawab state ko theek se govern nahi kar raha tha. Isse doosre rulers shock ho gaye aur unka British par se trust khatam ho gaya. Awadh ke annexation se Nawab ki army ke lagbhag 60,000 professional soldiers bhi jobless ho gaye."
                    ]}
                ]
            },
            {
                id: '2.2', title: 'Economic Reasons', content: [
                     {
                        type: 'columns',
                        content: [
                            { width: '65%', items: [
                                { type: 'list', items: [
                                    "<strong>Economy ka Exploitation:</strong> British policies unke benefit ke liye design ki gayi thi, jisne traditional Indian economic structure ko destroy kar diya.",
                                    "<strong>Peasants ke liye Mushkil:</strong> Zamindari system ne farmers (kisano) ko sirf cash crops (jaise cotton aur indigo) grow karne ke liye force kiya, jo British chahte the. Agar woh yeh crops grow nahi kar paate ya high taxes pay nahi karte, toh unhe torture kiya jaata tha.",
                                    "<strong>Indian Industries ka Destruction:</strong> Britain se industrial goods, especially textiles, Indian markets mein aa gaye. Isne Indian industries ko destroy kar diya aur artisans aur peasants ko unemployed bana diya.",
                                    "<strong>Unemployment:</strong> Jab bhi British kisi state ko annex karte, woh wahan ki land aur wealth le lete. Isse bahut unemployment hui. For example, Awadh ke annexation ke baad, bahut se logon ki jobs chali gayi."
                                ]}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/3_clr536.jpg', alt: 'Peasants exploited under the zamindari system' }] }
                        ]
                    }
                ]
            },
            {
                id: '2.3', title: 'Social and Religious Reasons', content: [
                    { type: 'list', items: [
                        "<strong>Customs mein Interference:</strong> British khud ko superior maante the aur Indian customs and traditions mein interfere karte the.",
                        "<strong>Conversion ka Darr:</strong> Bahut se Indians ko western education aur Christian missionaries ke kaam par doubt hua, unhe darr tha ki iska aim logon ko Christianity mein convert karna hai.",
                        "<strong>Inheritance Law mein Change:</strong> Hindu property law ko change kar diya gaya. Naye law ke according, jo person Christianity mein convert hota, woh apni ancestral property inherit kar sakta tha. Ise conversions ko encourage karne ka ek tareeka maana gaya.",
                        "<strong>New Technology aur Darr:</strong> Railways ke aane se gareeb aur illiterate logon mein darr phail gaya ki doosri caste ke logon ke saath travel karne se unki caste chali jayegi.",
                        "<strong>Racial Discrimination:</strong> <ul class='list-disc pl-5 mt-2'><li>Indians ko first-class train compartments mein travel karna allowed nahi tha.</li><li>British Indians ko neechi nazar se dekhte the aur unhe inferior treat karte the.</li><li>Judicial system equality par based hone ka daava karta tha, but practice mein, woh Indians ke against biased tha.</li></ul>"
                    ]},
                    { type: 'paragraph', text: "<strong>Do You Know?</strong> Aisi rumours phaili ki British ne market mein bikne wale aate (flour) aur mithai (sweets) mein gaay aur suar ki haddiyon ka dust mila diya hai. Yeh Hindu aur Muslim dono ke religious sentiments ko hurt karne aur unki caste bhrasht karne ke liye kiya gaya tha."}
                ]
            },
            {
                id: '2.4', title: 'Military Reasons', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '55%', items: [
                                { type: 'list', items: [
                                    "<strong>Sepoys ke Saath Bhedbhav:</strong> Indian soldiers (sepoys) ne British ko unka empire banane mein help ki, but unhe acchhe se treat nahi kiya jaata tha. <ul class='list-disc pl-5 mt-2'><li>Promotions aur pay mein clear discrimination tha.</li><li>Ek Indian soldier Subedar ke rank se upar nahi ja sakta tha.</li><li>Ek Indian Subedar ki highest salary ek naye European recruit ki minimum salary se bhi kam thi.</li></ul>",
                                    "<strong>The General Service Enlistment Act of 1856:</strong> Is naye law ne Indian soldiers ko zaroorat padne par overseas (samudra paar) service ke liye force kiya. Yeh Hinduon ke liye ek bada issue tha, jo maante the ki samudra cross karne se unki caste chali jaayegi."
                                ]}
                             ]},
                            { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/4_y0ytck.jpg', alt: 'Illustration showing the greased cartridge issue' }] }
                        ]
                    },
                ]
            },
            {
                id: '2.5', title: 'Immediate Reason: The Greased Cartridges', content: [
                    { type: 'paragraph', text: "Revolt ka immediate trigger new Enfield rifle ka introduction tha. Is rifle ke cartridges par ek greased paper cover hota tha, jise rifle mein load karne se pehle daant se kaatna padta tha. Ek rumour phail gayi ki grease gaay aur suar ke fat (charbi) se bani hai." },
                    {
                        type: 'columns',
                        content: [
                            { width: '45%', items: [
                                { type: 'paragraph', text: "Yeh Hinduon (jinke liye cow sacred hai) aur Muslims (jinke liye pig detestable hai) dono ke liye deeply offensive tha." },
                                { type: 'paragraph', text: "<strong>Mangal Pandey:</strong> 29 March 1857 ko, Calcutta ke paas Barrackpore mein, <strong>Mangal Pandey</strong> naam ke ek young sepoy ne greased cartridges use karne se mana kar diya. Usne apne sergeant par attack kiya aur use goli maar di. Use arrest kiya gaya, trial hua, aur execute kar diya gaya." },
                                { type: 'paragraph', text: "Yeh news aag ki tarah phail gayi, aur poore country mein bahut se sepoys ne revolt karna shuru kar diya."}
                            ]},
                            { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/5_s34huz.jpg', alt: 'Mangal Pandey, who sparked the revolt' }] }
                        ]
                    }
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Revolt ka Course",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '45%', items: [
                        { type: 'list', items: [
                            "<strong>Meerut mein Outbreak:</strong> April 1857 mein naye cartridges use karne se mana karne ke baad sepoys ne Meerut mein openly revolt kar diya. Unka court-martial hua aur unhe 10 saal jail ki saza hui.",
                            "<strong>Revolt Shuru:</strong> 10 May 1857 ko, Meerut mein doosri regiments ne revolt kiya. Unhone jail tod di, imprisoned soldiers ko free karaya, aur Delhi ki taraf march kiya. 11 May ko, unhone Bahadur Shah Zafar II ke under rebel kiya.",
                        ]}
                    ]},
                    { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/6_rebleq.jpg', alt: 'Prominent leaders of the 1857 Revolt' }] }
                ]
            },
            { type: 'heading', text: 'Failav aur Leaders:'},
            { type: 'list', items: [
                "Revolt doosri jagahon par phail gaya.",
                "<strong>Kanpur:</strong> Nana Saheb ne lead kiya. Unke general Tantya Tope the.",
                "<strong>Awadh (Lucknow):</strong> Begum Hazrat Mahal ne lead kiya.",
                "<strong>Jhansi:</strong> Rani Lakshmi Bai ne lead kiya.",
                "<strong>Central India:</strong> Rani Lakshmi Bai ne yahan bhi bravely fight ki.",
                "<strong>Other Centres:</strong> Revolt Bareilly, Agra, Benaras, aur doosri jagahon par bhi phaila."
            ]},
            { type: 'paragraph', text: "<strong>Do You Know?</strong> Kunwar Singh, Jagdishpur ke ek 80-year-old landlord, Western Bihar mein revolt ke ek brilliant military leader the."},
            {
                type: 'columns',
                content: [
                    { width: '65%', items: [
                        { type: 'heading', text: 'Groups Jinhone Join Nahi Kiya:'},
                        { type: 'list', items: [
                            "Sabhi ne revolt join nahi kiya. Punjab mein Sikh leaders, Hyderabad ke Nizam, aur Gwalior ke Scindia ne join nahi kiya.",
                            "Madras aur Bombay Regiments bhi British ke loyal rahe.",
                            "Afghans aur Gurkhas bhi British ke loyal rahe."
                        ]},
                        { type: 'heading', text: 'Revolt ka Nature:'},
                        { type: 'paragraph', text: "Revolt sepoys ne shuru kiya tha, but iski real strength peasants aur artisans ke participation se aayi. Isne remarkable Hindu-Muslim unity dikhayi. Although yeh ek great event tha, ise eventually British ne daba diya."}
                    ]},
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Revolt ka Suppression (Daman)",
        content: [
             {
                type: 'columns',
                content: [
                    { width: '55%', items: [
                        { type: 'paragraph', text: "British military ne revolt ko crush karne ke liye strong measures liye." },
                        { type: 'list', items: [
                            "<strong>Delhi par wapas kabza:</strong> British officers ne Delhi ko free karaya, jo revolt ka main centre tha. Kashmiri Gate ko uda diya gaya, aur hundreds of logon ka massacre (qatl-e-aam) hua.",
                            "<strong>Bahadur Shah Zafar ka Anjaam:</strong> Mughal Emperor, Bahadur Shah Zafar II, par treason (deshdroh) ka trial chala aur unhe Rangoon (aaj ke Myanmar mein) exile kar diya gaya. Unke beton ko cruelly goli maar di gayi kyunki unhe English men, women, aur children ke murder ke liye responsible maana gaya tha.",
                        ]},
                        { type: 'list', items: [
                            "<strong>Revolt ka Ant:</strong> Delhi par control aur Emperor ki imprisonment ne mutiny ki backbone tod di. <ul class='list-disc pl-5 mt-2'><li>Lucknow 1858 mein recapture hua.</li><li>Rani Lakshmi Bai battle mein maari gayi.</li><li>Tantya Tope ko pakad kar phaansi de di gayi.</li></ul>"
                        ]},
                        { type: 'paragraph', text: "Isse yeh historic episode khatam hua, jise ab First War of Independence kaha jaata hai."}
                    ]},
                    { width: '25%', items: [
                        { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/7_ry7o3g.jpg', alt: 'British forces storming Delhi' },
                        { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122970/8_aeqh50.jpg', alt: 'British officers in India' },
                    ]}
                ]
            },





        ]
      },
      {
        id: '5',
        title: "Revolt ke Failure ke Reasons",
        content: [
            { type: 'list', items: [
                "<strong>Time se Pehle Shuru Hua:</strong> Uprising ki planning months se chal rahi thi, but yeh decided date se pehle start ho gaya. Yeh plan ke according Central India aur Delhi se aage nahi phaila, jis se us time ke Governor-General, Lord Canning, ke liye ise control karna easy ho gaya.",
                "<strong>Unity aur Ideology ki Kami:</strong> Rebels ke beech koi common ideology ya unity nahi thi. Nationalism (a united India) ka idea abhi tak develop nahi hua tha. <ul class='list-disc pl-5 mt-2'><li>Sepoys Mughals ki glory restore karna chahte the.</li><li>Nana Saheb aur Tantya Tope Maratha power re-establish karna chahte the.</li><li>Rani Lakshmi Bai apne khoye hue kingdom ke liye fight kar rahi thi.</li></ul>",
            ]},
            {
                type: 'columns',
                content: [
                    { width: '55%', items: [
                        { type: 'list', items: [
                            "<strong>Widespread Nahi Tha:</strong> Revolt mostly North aur Central India tak limited tha. North (Punjab), Sikhs, Nizams, aur Scindias affected nahi the. In fact, Gurkhas ne British ko mutiny suppress karne mein help ki.",
                            "<strong>Superior British Army:</strong> Rebels British ke sophisticated aur modern weapons se match nahi kar sake. British army zyada disciplined thi aur unke paas better communication systems aur military strategies thi.",
                            "<strong>Weak Leadership:</strong> Revolt ki leadership itni strong ya organized nahi thi ki rebels ko ek single direction de sake. Indian rulers apni-apni territories ko liberate karne ke liye lade aur poore country ki freedom ke baare mein nahi socha."
                        ]}
                    ]},
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Revolt ke Results",
        content: [
            {
                type: 'columns',
                content: [
                    { width: '55%', items: [
                        { type: 'paragraph', text: "1857 ka Revolt Indian history mein ek major turning point tha. Isse kai important changes hue." },
                        { type: 'list', items: [
                            "<strong>East India Company ke Rule ka Ant:</strong> East India Company ka rule Queen Victoria's Proclamation of November 1, 1858 ke saath end ho gaya.",
                            "<strong>British Crown ka Direct Rule:</strong> British Crown (British government) ne India ka complete administration takeover kar liya.",
                        ]},
                    ]},
                    { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122970/IMG-20250825-WA0029_dg5vpw.jpg', alt: 'Placeholder image for Queen Victoria Proclamation' }] }
                ]
            },
            { type: 'heading', text: 'Naye Administrative Posts:'},
            { type: 'list', items: [
                "Ek <strong>Secretary of State</strong> ko British Parliament ne appoint kiya India ke governance ki dekhbhal ke liye. Uski help ke liye ek council thi.",
                "<strong>Governor-General</strong> ka title change karke <strong>Viceroy</strong> kar diya gaya. Viceroy India mein British Crown ka personal representative tha."
            ]},
            { type: 'heading', text: 'British Policies mein Change:'},
            { type: 'list', items: [
                "British government ne ruthless conquests aur annexations ki policy band kar di.",
                "Indian princes ko assurance di gayi ki unke states ko annex nahi kiya jayega.",
                "Indian rulers ko adoption ka right de diya gaya.",
                "Indians ko full religious freedom guarantee ki gayi.",
                "Promise kiya gaya ki Indians ko bina kisi discrimination ke high posts di jayengi."
            ]},
            { type: 'heading', text: 'Revolt ki Legacy:'},
            { type: 'list', items: [
                "1859 ke end tak, India mein British authority poori tarah re-establish ho gayi thi.",
                "Yeh revolt freedom ke liye pehla great struggle saabit hua.",
                "Yeh baad ke freedom fighters ke liye inspiration ka source bana.",
                "Revolt ke heroes, jaise Rani Lakshmi Bai aur Mangal Pandey, desh mein household names ban gaye."
            ]}
        ]
      },
      {
        id: '7',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                "<strong>Ally (Sahyogi):</strong> Ek state jo military ya doosre faydon ke liye doosre ke saath formally cooperate karta hai.",
                "<strong>Court-martialed:</strong> Armed services ke members par military law ke against crimes ke liye trial karne wali ek judicial court.",
                "<strong>Mutiny (Bagawat):</strong> Proper authorities ke against ek open rebellion, especially soldiers dwara apne officers ke against.",
                "<strong>Racial discrimination (Nasli Bhedbhav):</strong> Kisi person ya group ke saath unke race, hair type, eye color, ya skin color ke base par unfair treatment ya bias.",
                "<strong>Revolt (Vidroh):</strong> Ek established government ya ruler ke against violent action lena.",
                "<strong>Sergeant:</strong> Army ya air force mein ek non-commissioned officer ka rank.",
                "<strong>Shackles (Bediyan):</strong> Ek chain se judi hui fetters ki jodi, jise prisoner ki wrists ya ankles ko ek saath baandhne ke liye use kiya jaata hai.",
                "<strong>Subedar:</strong> Indian Army mein ek rank, jo commissioned officers se neeche hota hai.",
                "<strong>Subsidy (Anudan/Chhoot):</strong> Paisa jo usually government dwara kisi product ya service ki price kam rakhne ya kisi business ya organization ko function karne mein help karne ke liye pay kiya jaata hai.",
                "<strong>Treason (Deshdroh):</strong> Apne hi desh ko betray karne ka crime."
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
function Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '6': true, '7': true, '8': true, '9': true });
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

export default Class8cbseSocialScienceTheFirstWarOfIndependence1857ChapterNotes;
