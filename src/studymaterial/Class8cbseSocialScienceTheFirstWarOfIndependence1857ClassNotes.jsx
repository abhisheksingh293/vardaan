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
          { type: 'paragraph', text: "The Revolt of 1857 is a pivotal event in India's freedom struggle. It was the first large-scale uprising against the oppressive rule of the British East India Company after 100 years of their control and exploitation (since 1757)." },
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'list', items: [
                        '<strong>The Spark:</strong> The revolt began on May 10, 1857, when Indian soldiers (sepoys) at the Meerut military base rebelled.',
                        '<strong>March to Delhi:</strong> The next day, on May 11, the sepoys marched to Delhi. They entered the Red Fort and proclaimed the old Mughal Emperor, Bahadur Shah Zafar II, as the Shahenshah-e-Hindustan (Emperor of Hindustan), making him the symbolic head of the rebellion.',
                        '<strong>A Widespread Uprising:</strong> While it started with soldiers, the revolt quickly spread. Peasants, artisans, scholars, and many Indian rulers joined the fight, turning it into a widespread struggle against foreign domination.'
                    ]}
                ]},
                { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/1_tvsfdx.jpg', alt: 'Bahadur Shah Zafar II' }] }
            ]
          },
          { type: 'heading', text: 'Different Names:' },
          { type: 'list', items: [
              "The British called it the <strong>Sepoy Mutiny</strong>.",
              "Indian historians refer to it as the <strong>First War of Independence</strong> because it was a united effort by various sections of society to overthrow British rule."
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        content: [
            { type: 'paragraph', text: "The revolt was not a sudden event but the result of decades of growing anger against British policies." }
        ],
        subSections: [
            {
                id: '2.1', title: 'Political Causes', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>Doctrine of Lapse:</strong> This aggressive policy by Governor-General Lord Dalhousie stated that any princely state would be annexed by the British if the ruler died without a natural male heir. Rulers were not allowed to adopt a son to inherit the throne. This created insecurity and anger among Indian rulers.",
                                    "<strong>Subsidiary Alliance:</strong> Under this policy, Indian rulers were forced into treaties that stripped them of their power. For example, the Nawab of Awadh had to keep a British army, pay for its maintenance, and accept a British official (Resident) in his court. This made the rulers puppets of the British. The eventual annexation of Awadh in 1856 destroyed any remaining trust.",
                                    "<strong>Personal Grievances:</strong> Rulers like Nana Saheb (denied his father's pension), Rani Lakshmi Bai of Jhansi (her adopted son was not recognized), and the Mughal Emperor himself had deep personal reasons to resent the British."
                                ]}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/2_wy9ebg.jpg', alt: 'Doctrine of Lapse illustration' }] }
                        ]
                    },
                    
                ]
            },
            {
                id: '2.2', title: 'Economic Causes', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>Destruction of Indian Economy:</strong> British policies were designed to make Britain rich at India's expense.",
                                    "<strong>Hardship for Peasants:</strong> Under the zamindari system, peasants were forced to pay extremely high taxes and grow cash crops like indigo and cotton. Failure to pay resulted in torture and loss of land.",
                                    "<strong>Ruin of Industries and Artisans:</strong> Cheap, machine-made goods from Britain flooded Indian markets. This destroyed traditional Indian industries like textiles, leaving millions of artisans and weavers unemployed.",
                                    "<strong>Unemployment:</strong> The annexation of Indian states left thousands of soldiers and officials jobless."
                                ]}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/3_clr536.jpg', alt: 'Peasants under British rule' }] }
                        ]
                    }
                ]
            },
            {
                id: '2.3', title: 'Social and Religious Causes', content: [
                     {
                        type: 'columns',
                        content: [
                             { width: '60%', items: [
                              { type: 'list', items: [
                                "<strong>Interference in Traditions:</strong> The British saw Indian customs as inferior and interfered in them. Social reforms, western education, and the work of Christian missionaries were viewed with deep suspicion.",
                                "<strong>Fear of Conversion:</strong> A new law in 1850 allowed an Indian who converted to Christianity to inherit his ancestral property. This was seen as a direct attempt to encourage conversions.",
                                "<strong>Racial Discrimination:</strong> The British openly treated Indians as an inferior race. Indians were not allowed in first-class train compartments and were subjected to insults and humiliation."
                            ]},


                                { type: 'paragraph', text: 
                                  "<strong>Do You Know?</strong> A widespread rumour claimed that the British had mixed the bone dust of cows and pigs into the flour (atta) sold in the markets. This was intended to defile the religion of both Hindus and Muslims and created immense panic and anger."}
                             ]},
                             { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/4_y0ytck.jpg', alt: 'Greased cartridges rumour' }] }
                        ]
                    }
                ]
            },
            {
                id: '2.4', title: 'Military Causes', content: [
                    { type: 'list', items: [
                        "<strong>Discrimination against Sepoys:</strong> Indian sepoys were the backbone of the British army but were treated poorly.",
                        "<strong>Pay and Promotion:</strong> They were paid much less than British soldiers and could never be promoted above the rank of a Subedar.",
                        "<strong>Overseas Service:</strong> The General Service Enlistment Act of 1856 required new sepoys to serve overseas if needed. For Hindus, crossing the sea was a religious taboo."
                    ]}
                ]
            },
            {
                id: '2.5', title: 'The Immediate Cause: Greased Cartridges', content: [
                     {
                        type: 'columns',
                        content: [
                             { width: '60%', items: [
                                { type: 'paragraph', text: "The final trigger was the introduction of the new Enfield rifle. The cartridges for this rifle were covered in greased paper that had to be bitten off before loading. A rumour spread that the grease was made from the fat of cows (sacred to Hindus) and pigs (forbidden for Muslims)." },
                                { type: 'paragraph', text: "This act of biting the cartridges was seen as a deliberate attack on their religions. On March 29, 1857, a sepoy named <strong>Mangal Pandey</strong> at Barrackpore refused to use the cartridges and attacked his officers. He was executed, but his actions ignited the fire of rebellion across North India."}
                             ]},
                             { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/5_s34huz.jpg', alt: 'Mangal Pandey' }] }
                        ]
                    }
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Course and Suppression",
        subSections: [
            {
                id: '3.1', title: 'Main Centres and Leaders', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>Kanpur:</strong> Led by Nana Saheb and his brilliant general, Tantya Tope.",
                                    "<strong>Lucknow:</strong> Led by Begum Hazrat Mahal of Awadh.",
                                    "<strong>Jhansi:</strong> Led by the heroic Rani Lakshmi Bai.",
                                    "<strong>Bihar:</strong> Led by Kunwar Singh, an 80-year-old landlord."
                                ]},
                                { type: 'paragraph', text: "<strong>Do You Know?</strong> Kunwar Singh of Jagdishpur was one of the most outstanding military leaders of the revolt in Western Bihar, despite his advanced age."}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/6_rebleq.jpg', alt: 'Leaders of the 1857 Revolt' }] }
                        ]
                    }
                ]
            },
            {
                id: '3.2', title: 'Suppression of the Revolt', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [

                                    "The British responded with overwhelming force. They recaptured Delhi in September 1857, which was the heart of rebellion. ",
                                    "<strong>Brutal Retaliation:</strong> Hundreds were massacred in Delhi. Bahadur Shah Zafar was arrested and exiled to Rangoon. His sons were brutally shot and killed.",
                                    "By 1858, Lucknow was recaptured. Rani Lakshmi Bai was killed fighting bravely in battle. Tantya Tope was captured and hanged. With the death of its key leaders, the revolt was completely crushed."
                                ]},

                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/7_ry7o3g.jpg', alt: 'Suppression of the revolt' }] }
                        ]
                    }
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Why the Revolt Failed",
        content: [
            { type: 'list', items: [
                "<strong>Lack of Planning and Coordination:</strong> The revolt broke out prematurely and was not well-coordinated, allowing the British to tackle rebels one by one.",
                "<strong>Limited Geographical Spread:</strong> The uprising was mainly concentrated in North and Central India. The South and Punjab remained largely unaffected.",
                "<strong>Lack of a Unified Goal:</strong> Leaders had personal motives (e.g., Rani Lakshmi Bai fought for Jhansi, Nana Saheb for his pension). There was no single vision for a new India.",
                "<strong>Superior British Resources:</strong> The British had a better-organized army, superior modern weapons, and advanced communication like the telegraph.",
                "<strong>Lack of Support:</strong> Not all Indians supported the revolt. Many powerful rulers (Scindias, Nizam) and groups (Gurkhas, Sikhs) sided with the British."
            ]}
        ]
      },
      {
        id: '5',
        title: "Results of the Revolt",
        content: [
            { type: 'paragraph', text: "The Revolt of 1857 was a turning point that brought major changes to British rule in India." },
             {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'list', items: [
                            "<strong>End of Company Rule:</strong> The Government of India Act of 1858 ended the rule of the East India Company.",
                            "<strong>Direct Rule of the Crown:</strong> The administration of India was taken over directly by the British government (the Crown).",
                            "<strong>New Administrative Structure:</strong> The Governor-General was given the new title of <strong>Viceroy</strong>. A <strong>Secretary of State for India</strong> was appointed in the British cabinet.",
                            "<strong>New Policies:</strong> The British promised to stop annexing states. Queen Victoria's Proclamation of 1858 promised religious freedom and equal treatment to all Indians (though this was rarely followed).",
                            "<strong>Legacy:</strong> Though it failed, the Revolt was the first great struggle for freedom. It created a lasting legacy of resistance and inspired future generations of freedom fighters."
                        ]}
                    ]},
                    { width: '35%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122970/IMG-20250825-WA0029_dg5vpw.jpg', alt: "Queen Victoria's Proclamation" }] }
                ]
            }
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
        title: "Revolt ka Introduction",
        content: [
          { type: 'paragraph', text: "1857 ka Revolt India ki freedom struggle ki history mein ek bahut important event hai. Yeh British East India Company ke rule ke against pehli badi ladai thi, unke 100 saal ke control aur exploitation ke baad (1757 se)." },
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'list', items: [
                        '<strong>Chingari Kahan se Lagi:</strong> Revolt 10 May 1857 ko shuru hua, jab Meerut military base par Indian soldiers (sipahiyon) ne bagawat kar di.',
                        '<strong>Delhi Chalo:</strong> Agle din, 11 May ko, sipahi Delhi pahunch gaye. Woh Red Fort mein enter hue aur Mughal Emperor, Bahadur Shah Zafar II, ko \'Shahenshah-e-Hindustan\' banakar rebellion ka symbolic head ghoshit kar diya.',
                        '<strong>Badi Ladai Bani:</strong> Shuru toh soldiers ne kiya tha, lekin revolt jaldi hi phail gaya. Kisan, karigar, scholars, aur kai Indian rulers bhi is fight mein shaamil ho gaye, aur yeh videshi शासन ke khilaf ek badi ladai ban gayi.'
                    ]},
                    { type: 'heading', text: 'Alag-Alag Naam:' },
                    { type: 'list', items: [
                      "British ise <strong>Sepoy Mutiny</strong> (Sipahi Vidroh) kehte the.",
                      "Indian historians ise <strong>First War of Independence</strong> (Pehla Swatantrata Sangram) kehte hain, kyunki yeh society ke alag-alag sections ka British rule ko hatane ke liye ek united effort tha."
                  ]}

                ]},
                { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/1_tvsfdx.jpg', alt: 'Bahadur Shah Zafar II' }] }
            ]
          },          
        ]
      },
      {
        id: '2',
        title: "Revolt ke Kaaran (Reasons)",
        content: [
            { type: 'paragraph', text: "Yeh revolt achanak nahi hua, balki saalon se British policies ke against badh rahe gusse ka nateeja tha." }
        ],
        subSections: [
            {
                id: '2.1', title: 'Political Causes', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>Doctrine of Lapse (Hadap Niti):</strong> Governor-General Lord Dalhousie ki is policy ke mutabik, agar kisi raja ka apna beta nahi hota, toh uske marne ke baad woh state British annex kar lete. Raja ko beta adopt karne ka bhi haq nahi tha. Isse Indian rulers mein bahut gussa aur darr tha.",
                                    "<strong>Subsidiary Alliance:</strong> Is policy ke under, Indian rulers ko zabardasti aisi treaties sign karni padti thi jisse unki power chhin jaati thi. Jaise, Awadh ke Nawab ko apne state mein British army rakhni padi, uska kharcha uthana pada, aur apne darbar mein ek British official (Resident) ko bhi rakhna pada. Isse raja sirf naam ke raja reh gaye the.",
                                    "<strong>Personal Issues:</strong> Kai rulers jaise Nana Saheb (jinko unke father ki pension dene se mana kar diya gaya), Jhansi ki Rani Lakshmi Bai (jinke adopted son ko raja nahi maana gaya), aur Mughal Emperor ke khud ke British se personal issues the."
            
                                  ]}
                            ]},
                            { width: '35%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/2_wy9ebg.jpg', alt: 'Doctrine of Lapse illustration' }] }
                        ]
                    },
                    { type: 'list', items: [
                    ]}
                ]
            },
            {
                id: '2.2', title: 'Economic Causes', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>India ki Economy Barbaad:</strong> British policies aisi thi jisse sirf Britain ameer ho raha tha aur India ghareeb.",
                                    "<strong>Kisano ki Buri Haalat:</strong> Zamindari system mein, kisano se bahut zyada tax liya jaata tha aur unhe indigo (neel) aur cotton jaisi cash crops ugane ke liye force kiya jaata tha. Tax na de paane par unhe torture kiya jaata aur unki zameen chhin li jaati.",
                                    "<strong>Industries aur Karigaron ka Nuksan:</strong> Britain se machine se bane saste kapde aur saaman Indian markets mein aa gaye. Isse India ki traditional textile industry barbaad ho gayi aur laakhon karigar berozgar ho gaye.",
                                    "<strong>Berozgari (Unemployment):</strong> Jab bhi British kisi state par kabza karte, wahan ke hazaron सैनिक aur officials berozgar ho jaate the."
                                ]}
                            ]},
                            { width: '35%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/3_clr536.jpg', alt: 'Peasants under British rule' }] }
                        ]
                    }
                ]
            },
            {
                id: '2.3', title: 'Social and Religious Causes', content: [
                    { type: 'list', items: [
                    ]},
                    {
                        type: 'columns',
                        content: [
                             { width: '60%', items: [
                              {type: 'list', items: [
                                "<strong>Paramparaon mein Dakhal:</strong> British log Indian customs ko chhota samajhte the aur unmein interfere karte the. Social reforms, western education, aur Christian missionaries ke kaam ko log shaq ki nazar se dekhte the.",
                                "<strong>Dharm Parivartan ka Darr:</strong> 1850 mein ek naya kanoon aaya jisse agar koi Indian Christian ban jaaye, toh use apne purkhon ki property mein hissa mil sakta tha. Logon ko laga ki yeh laalach dekar dharm badalne ki koshish hai.",
                                "<strong>Rang Bhed (Racial Discrimination):</strong> British log Indians ko inferior samajhte the. Indians ko train ke first-class compartment mein travel karna allowed nahi tha aur unki beizzati ki jaati thi."
                              ]},
                                { type: 'paragraph', text: "<strong>Do You Know?</strong> Ek rumour bahut tezi se phaili thi ki British ne market mein bikne wale aate (flour) mein gaay aur suar ki haddiyon ka powder milaya hai. Iska maqsad Hindu aur Muslim dono ka dharm bhrasht karna tha, jisse logon mein bahut gussa aur darr phail gaya."}
                             ]},
                             { width: '35%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122966/4_y0ytck.jpg', alt: 'Greased cartridges rumour' }] }
                        ]
                        
                    }
                ]
            },
            {
                
            },
            {
                id: '2.5', title: 'Tatkalik Kaaran: Charbi Wale Kartoos', content: [
                    {
                        type: 'columns',
                        content: [
                             { width: '60%', items: [
                                { type: 'paragraph', text: "Revolt ki aakhiri aur sabse badi vajah thi nayi Enfield rifle. Is rifle ke cartridges (kartoos) par ek greased paper laga hota tha jise use karne se pehle munh se kaatna padta tha. Ek rumour phail gayi ki is par lagi grease gaay (Hindus ke liye pavitra) aur suar (Muslims ke liye haram) ki charbi se bani hai." },
                                { type: 'paragraph', text: "Ise apne dharm par direct attack maana gaya. 29 March 1857 ko, Barrackpore mein <strong>Mangal Pandey</strong> naam ke ek sipahi ne in cartridges ko use karne se mana kar diya aur apne officers par हमला kar diya. Unhe phaansi de di gayi, lekin unki is baat ne poore North India mein bagawat ki aag laga di."}
                             ]},
                             { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/5_s34huz.jpg', alt: 'Mangal Pandey' }] }
                        ]
                    }
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Revolt ka Failav aur Daman",
        subSections: [
            {
                id: '3.1', title: 'Main Centres aur Leaders', content: [
                    {
                        type: 'columns',
                        content: [
                            { width: '60%', items: [
                                { type: 'list', items: [
                                    "<strong>Kanpur:</strong> Yahan Nana Saheb aur unke general Tantya Tope ne lead kiya.",
                                    "<strong>Lucknow:</strong> Yahan Awadh ki Begum Hazrat Mahal ne lead kiya.",
                                    "<strong>Jhansi:</strong> Yahan veer Rani Lakshmi Bai ne lead kiya.",
                                    "<strong>Bihar:</strong> Yahan 80 saal ke zamindar Kunwar Singh ne lead kiya."
                                ]},
                                { type: 'paragraph', text: "<strong>Do You Know?</strong> Apni zyada umar ke bawajood, Jagdishpur ke Kunwar Singh Western Bihar mein revolt ke sabse shaandar military leaders mein se ek the."}
                            ]},
                            { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/6_rebleq.jpg', alt: 'Leaders of the 1857 Revolt' }] }
                        ]
                    }
                ]
            },
            
                {
                    id: '3.2',
                    title: 'Suppression of the Revolt',
                    content: [
                        {
                            type: 'columns',
                            content: [
                                {
                                    width: '60%',
                                    items: [
                                        {
                                            type: 'list',
                                            items: [
                                                "British logon ne full power mein jawab diya. September 1857 mein Delhi wapas le li, wahi toh rebellion ka centre tha.",
                                                "<strong>Brutal Retaliation:</strong> Delhi mein bohot logon ka qatl hua. Bahadur Shah Zafar ko pakad ke Rangoon bhej diya, aur uske beto ko bhi maar diya.",
                                                "1858 tak Lucknow bhi wapas aa gaya British ke paas. Rani Lakshmi Bai battle mein shaheed ho gayi. Tantya Tope ko bhi pakad ke phaansi de di. Jab sab bade leaders chale gaye, toh revolt bhi khatam ho gaya."
                                            ]
                                        }
                                    ]
                                },
                                {
                                    width: '30%',
                                    items: [
                                        { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122967/7_ry7o3g.jpg', alt: 'Suppression of the revolt' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
        ]
      },
      {
        id: '4',
        title: "Revolt Fail Kyun Hua?",
        content: [
            { type: 'list', items: [
                "<strong>Planning aur Coordination ki Kami:</strong> Revolt time se pehle shuru ho gaya aur aapas mein koi coordination nahi tha. Isliye British ne alag-alag jagahon par rebels ko ek-ek karke hara diya.",
                "<strong>Limited Area:</strong> Yeh ladai mainly North aur Central India tak hi seemit thi. South India aur Punjab jaise bade hisson mein iska koi asar nahi hua.",
                "<strong>Sabka Alag Goal:</strong> Leaders ka koi ek common goal nahi tha. Rani Lakshmi Bai Jhansi ke liye lad rahi thi, toh Nana Saheb apni pension ke liye. Ek 'United India' ka sapna nahi tha.",
                "<strong>British Zyada Strong The:</strong> British army zyada organized thi, unke paas modern hathiyar the, aur telegraph jaisi communication technology thi jisse woh jaldi information bhej paate the.",
                "<strong>Sabka Saath Nahi Mila:</strong> Sabhi Indians ne revolt ko support nahi kiya. Kai bade raja (jaise Scindia aur Nizam) aur groups (jaise Gurkhas aur Sikhs) ne British ka saath diya."
            ]}
        ]
      },
      {
        id: '5',
        title: "Revolt ke Results (Nateeje)",
        content: [
             {
                type: 'columns',
                content: [
                    { width: '60%', items: [
                        { type: 'paragraph', text: "1857 ka Revolt fail ho gaya, lekin yeh Indian history mein ek turning point tha jiske baad bade changes aaye." },
                        { type: 'list', items: [
                            "<strong>Company Rule Khatam:</strong> 1858 mein 'Government of India Act' pass hua aur East India Company ka rule khatam ho gaya.",
                            "<strong>Crown ka Direct Rule:</strong> India ka administration ab direct British government (Crown) ke haath mein aa gaya.",
                            "<strong>Naya Admin Structure:</strong> Governor-General ko ab <strong>Viceroy</strong> ka title diya gaya. Britain mein India ke mamlon ke liye ek <strong>Secretary of State for India</strong> ki post banayi gayi.",
                            "<strong>Nayi Policies:</strong> British ne vada kiya ki ab woh Indian states par kabza nahi karenge. Queen Victoria ne 1858 mein dharmik aazadi aur sabhi Indians ke saath barabari ka bartav karne ka vada kiya (halaanki yeh vaade poore nahi kiye gaye).",
                            "<strong>Legacy (Virasat):</strong> Fail hone ke bawajood, yeh azaadi ke liye pehli badi ladai thi. Isne aane wale freedom fighters ko inspire kiya aur iske heroes hamesha ke liye national icons ban gaye."
                        ]}
                    ]},
                    { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756122970/IMG-20250825-WA0029_dg5vpw.jpg', alt: "Queen Victoria's Proclamation" }] }
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

export default App;
