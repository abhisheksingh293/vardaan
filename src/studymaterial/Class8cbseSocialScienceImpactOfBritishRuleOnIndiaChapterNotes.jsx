import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Impact of British Rule on India",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction",
        content: [
          { type: 'paragraph', text: "The period of British rule was a very significant time in the history of India. It brought about many changes in every part of Indian society. These changes were seen in:" },
          { type: 'list', items: ["Education", "Public institutions", "Reforms in the caste system", "The condition and status of women"] },
          { type: 'paragraph', text: "These changes were largely brought about by the efforts of Indians who had received an English education." }
        ],
        subSections: [
            {
                id: '1.1',
                title: 'Education in India Before the British',
                content: [
                    { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'list', items: [
                                "For basic or elementary education, there were <strong>pathshalas</strong> and <strong>maktabs</strong>.",
                                "For higher education, there were <strong>tols</strong> and <strong>madarsas</strong>.",
                                "Education was mostly limited to reading religious books in local languages and learning basic arithmetic.",
                                "Higher education focused on subjects like Sanskrit, Arabic, Persian, law, logic, medicine, and astronomy, all based on ancient texts."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/1_vjokhy.jpg', alt: 'A traditional Indian pathshala' }] }
                    ]}
                ]
            }
        ]
      },
      {
        id: '2',
        title: "Education Under the British",
        subSections: [
            {
                id: '2.1',
                title: 'Initial British Approach to Education',
                content: [
                    { type: 'list', items: [
                        "The main goal of the East India Company was to make a profit from trade, not to educate Indians.",
                        "Their secondary purpose was to spread Christianity. Some Christian missionaries opened a few English schools to help with this."
                    ]}
                ]
            },
            {
                id: '2.2',
                title: 'The Charter Act of 1813',
                content: [
                    { type: 'list', items: [
                        "This was the first significant step taken by the British in the field of education.",
                        "Through this act, the British government set aside a sum of one lakh rupees (₹1,00,000) for the education of Indians.",
                        "Following this, colleges like the <strong>Hindu College</strong> in Calcutta (now Kolkata) and the <strong>Elphinstone College</strong> in Bombay (now Mumbai) were established.",
                        "These institutions created a new, educated elite class among Indians who were fluent in English."
                    ]},
                    { type: 'paragraph', text: '<strong>Did you know?</strong> Swami Vivekananda once said, "All history points to India as the mother of science and art!"'}
                ]
            },
            {
                id: '2.3',
                title: 'The Anglicist-Orientalist Controversy',
                content: [
                    { type: 'paragraph', text: "After some time, a debate started among the British about the best way to educate Indians." },
                    { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'list', items: [
                                "<strong>The Orientalists:</strong> This group believed that education should be given in traditional Indian languages like Sanskrit and Persian.",
                                "<strong>The Anglicists:</strong> This group, which included Thomas Macaulay, argued that English should be the medium of instruction.",
                                "<strong>Lord Macaulay’s Vision (1835):</strong> Macaulay wanted to create a class of people who were 'Indian in blood and colour, but English in taste and opinion.' He believed these English-educated Indians would act as interpreters between the British rulers and the millions of Indians they governed.",
                                "The British decided to support the Anglicists. Their main goal was to create a workforce of Indians who could help them in the lower levels of administration at a low cost.",
                                "Macaulay also believed that teaching Western education through English would 'civilise' Indians, change their values and culture, and create a demand for British-made products."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198509/2_yqfvvn.jpg', alt: 'Thomas Macaulay' }] }
                    ]}
                ]
            },
            {
                id: '2.4',
                title: "Wood's Despatch, 1854",
                content: [
                    { type: 'list', items: [
                        "In 1854, <strong>Charles Wood</strong>, who was the President of the Board of Control, issued an important educational directive known as Wood's Despatch.",
                        "This is often called the <strong>'Magna Carta of English Education in India'</strong> because of its great importance.",
                        "<strong>Key recommendations of Wood's Despatch:</strong> <ul class='list-disc pl-5 mt-2'><li>A separate Department of Education should be established.</li><li>Universities should be set up in the major cities of Bombay, Calcutta, and Madras.</li><li>Institutes should be opened to train teachers.</li><li>Financial aid should be given to schools that taught in local (vernacular) languages.</li></ul>"
                    ]}
                ]
            },
            {
                id: '2.5',
                title: 'Further Developments in Education',
                content: [
                    { type: 'list', items: [
                        "<strong>Hunter Education Commission (1882):</strong> This commission was created to check why the recommendations of Wood's Despatch were not being fully implemented.",
                        "<strong>Lord Curzon:</strong> As the Viceroy of India, he reviewed the entire education system. He believed that Indian educational institutions were becoming centers for political revolutionaries who opposed British rule.",
                        "<strong>Indian Universities Act of 1904:</strong> To control the growth of higher education and political activities, Lord Curzon passed this act. This angered many Indians."
                    ]}
                ]
            },
            {
                id: '2.6',
                title: 'The Call for a National Education System',
                content: [
                    { type: 'paragraph', text: "The British largely neglected providing universal education (education for all) to the Indian masses." },
                    { type: 'heading', text: 'Wardha Education Scheme (1937):' },
                    { type: 'paragraph', text: "This was a plan for national education initiated by Mahatma Gandhi." },
                    { type: 'list', items: [
                        "Gandhiji believed that English education created a sense of inferiority among Indians and promoted a master-slave mentality.",
                        "He proposed a National Education System that would teach moral values like truth, goodness, justice, self-respect, and dignity."
                    ]},
                    { type: 'heading', text: "John Sargent's Plan (1943):" },
                    { type: 'paragraph', text: "The British government appointed John Sargent to prepare a plan for a national system of education." },
                    { type: 'list', items: [
                        "He proposed universal, compulsory, and free education for all children between the ages of 6 and 14.",
                        "He recommended a system that focused on the all-round development of students.",
                        "After India gained independence, the new Indian government implemented most of these recommendations."
                    ]}
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Impact of the British System of Education",
        subSections: [
            {
                id: '3.1',
                title: 'Positive Impact',
                content: [
                    { type: 'list', items: [
                        "<strong>Unity:</strong> The English language acted as a common language, uniting people from different parts of India. This helped them rise above local differences and see India as one nation.",
                        "<strong>Nationalism:</strong> It led to a rise in nationalist feelings across all sections of Indian society.",
                        "<strong>Modern Ideals:</strong> It made people aware of modern ideas like equality, liberty, fraternity (brotherhood), and democracy.",
                        "<strong>Social and Religious Reforms:</strong> It created awareness about the need to reform Indian society and religion.",
                        "<strong>Women's Participation:</strong> Educated women like Sarojini Naidu were inspired to join the national movement for freedom."
                    ]}
                ]
            },
            {
                id: '3.2',
                title: 'Negative Impact',
                content: [
                    { type: 'list', items: [
                        "<strong>Division in Society:</strong> It created a divide between the small group of English-educated Indians and the vast majority of uneducated Indians.",
                        "<strong>Neglect of Indian Culture:</strong> Indian literature and traditional ways of thinking were ignored and considered inferior.",
                        "<strong>Glorification of British Rule:</strong> Textbooks used in schools praised the British administration and their philosophy, making Indians feel that British rule was good for them.",
                        "<strong>Education for the Rich:</strong> Education became a privilege for those who could afford it. This mainly benefited the rich Indians and left the poor behind."
                    ]},
                    { type: 'paragraph', text: "<strong>Did you know?</strong> During the British period, the Arya Samaj made a huge contribution to education. They opened many gurukuls, schools, and colleges. In 1886, they established the Dayanand Anglo Vedic (DAV) High School in Lahore. Today, there are over 800 DAV institutions in India."}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Social Impact and Reforms",
        subSections: [
            {
                id: '4.1',
                title: 'The Need for Social Reform',
                content: [
                    { type: 'list', items: [
                        "The British generally looked down upon Indian customs, traditions, and culture, considering them backward and uncivilised.",
                        "However, the newly English-educated Indians wanted to reform their own society. They wanted to remove harmful practices, superstitions, and rituals.",
                        "This led to the start of many reform movements. Reformers like <strong>Raja Ram Mohan Roy</strong>, <strong>Ishwar Chandra Vidyasagar</strong>, and <strong>Swami Dayanand Saraswati</strong> worked hard to get rid of social evils.",
                        "They successfully persuaded the British government to pass laws to bring about these social changes."
                    ]}
                ]
            },
            {
                id: '4.2',
                title: 'Major Social Reforms',
                content: [
                    { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'heading', text: 'Abolition of Sati:' },
                            { type: 'list', items: [
                                "Sati was an inhuman practice where a widow was forced to burn herself to death on her husband’s funeral pyre.",
                                "It was abolished in 1829 by the Governor-General, <strong>William Bentinck</strong>.",
                                "<strong>Raja Ram Mohan Roy</strong> was a key social reformer who campaigned tirelessly against this practice."
                            ]},
                            { type: 'paragraph', text: "<strong>Did you know?</strong> Between 1815 and 1828, over 8,134 cases of Sati were officially reported in the Bengal Presidency alone."}
                        ]},
                        { width: '25%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/3_ksqrz9.jpg', alt: 'Raja Ram Mohan Roy' }] }
                    ]},
                    { type: 'heading', text: 'Ban on Female Infanticide:' },
                    { type: 'list', items: [
                        "This was the cruel practice of killing newborn baby girls.",
                        "It was banned by a law passed in 1870."
                    ]},
                    { type: 'paragraph', text: "<strong>Did you know?</strong> Even today, the Indian government has started schemes like ‘Beti Bachao, Beti Padhao’, ‘Sukanya Samriddhi Yojana’, and ‘Balika Samriddhi Yojana’ to protect and benefit girl children." },
                    { type: 'heading', text: 'Ban on Child Marriage:' },
                    { type: 'list', items: [
                        "The practice of marrying off children, sometimes as young as three years old, was common.",
                        "It was banned by law first in 1891 and then again in 1929.",
                        "The <strong>Sharda Act of 1929</strong> fixed the minimum age of marriage at 18 years for girls and 21 years for boys.",
                        "This law was a major victory for social reform movements, including Hindu and Muslim women’s groups who opposed child marriage."
                    ]},
                    { type: 'heading', text: 'Widow Remarriage Act:' },
                    { type: 'list', items: [
                        "In traditional society, widows were not allowed to remarry and had to live a very difficult life.",
                        "The <strong>Widow Remarriage Act</strong> was passed in 1856.",
                        "This was made possible because of the continuous efforts of the great reformer <strong>Ishwar Chandra Vidyasagar</strong>."
                    ]}
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Socio-Religious Reforms and Reformers",
        content: [
            { type: 'columns', content: [
                 { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/4_tfxizh.jpg', alt: 'Great social reformers who shaped modern India' }] },
                { width: '60%', items: [
                    { type: 'paragraph', text: "During the 19th century, a major social and religious transformation began in India. Contact with Western science, literature, and thought, along with the spirit of nationalism, changed how people thought. At first, the elite classes campaigned against caste discrimination, but later, people from the lower castes themselves rose up against social injustice." }
                ]}
            ]}
        ],
        subSections: [
            {
                id: '5.1',
                title: 'Shri Narayana Guru (1854-1928)',
                content: [
                    { type: 'list', items: [
                        "He was a saint and social reformer from the Ezhava community in Kerala.",
                        "He fought against the caste system, untouchability, and the dominance of the Brahmin caste.",
                        "He gave the message of <strong>'one god, one caste and one religion'</strong> for all humanity.",
                        "He built new temples that were open to everyone, regardless of caste."
                    ]},
                    { type: 'paragraph', text: "<strong>Did you know?</strong> The famous Guruvayur temple in Kerala opened its doors to Harijans (a term for lower castes) only in 1946." }
                ]
            },
            {
                id: '5.2',
                title: 'Jyotiba Phule (1827-90)',
                content: [
                    { type: 'list', items: [
                        "A prominent social reformer from Maharashtra.",
                        "He founded the <strong>Satya Shodhak Samaj</strong> (Truth-Seekers' Society), which worked for the upliftment of the oppressed and lower classes.",
                        "He believed education was the key to freedom and started a special school for underprivileged children.",
                        "He led an anti-Brahmin movement to fight against untouchability and for the rights of the depressed classes."
                    ]}
                ]
            },
            {
                id: '5.3',
                title: 'Veeresalingam Kandukuri (1848-1919)',
                content: [
                    { type: 'list', items: [
                        "He is known as the prophet of modern Andhra Pradesh.",
                        "He was the first person to write a novel, a drama, and books on science and history in the Telugu language.",
                        "He started a magazine called <strong>Vivekavardhini</strong> to promote women's education, widow remarriage, and women's rights.",
                        "He was also the first writer to write prose specifically for women.",
                        "He strongly opposed social evils like <strong>Kanyasulkam</strong> (bride price) and the marriage of old men to young girls."
                    ]},
                    { type: 'paragraph', text: "<strong>Did you know?</strong> Veeresalingam arranged the very first widow remarriage in 1881." }
                ]
            },
            {
                id: '5.4',
                title: 'Periyar E.V. Ramasamy (1879-1973)',
                content: [
                    { type: 'list', items: [
                        "A great rationalist and revolutionary from Tamil Nadu.",
                        "He left the Congress party in 1925, believing it only served the interests of Brahmins.",
                        "He questioned the subjugation of the Dravidian people by Brahmins.",
                        "He started the <strong>Self-Respect Movement</strong> in 1925.",
                        "He promoted the principles of nationalism, self-respect, women's rights, and the complete removal of the caste system."
                    ]}
                ]
            },
            {
                id: '5.5',
                title: 'Swami Dayanand Saraswati (1824-83)',
                content: [
                    { type: 'list', items: [
                        "A great philosopher, scholar, and social reformer.",
                        "In 1875, he established the <strong>Arya Samaj</strong> (Society of Nobles) in Bombay.",
                        "His famous message was <strong>'Back to Vedas,'</strong> urging people to follow the original teachings of the ancient Hindu scriptures.",
                        "He started the <strong>Shuddhi Movement</strong> to bring back Hindus who had converted to other religions.",
                        "He was against idol worship, child marriage, and the caste system.",
                        "He was a strong supporter of widow remarriage and women's education.",
                        "His goal was to build a free, strong, and united India."
                    ]}
                ]
            },
            {
                id: '5.6',
                title: 'Dr. Bhimrao Ambedkar (1891-1956)',
                content: [
                    { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'list', items: [
                                "Popularly known as <strong>Babasaheb</strong>, he was a leader for millions of oppressed people.",
                                "Born into a so-called 'untouchable' family, he faced extreme discrimination in his childhood, such as having to sit on a mat in the corner of his classroom.",
                                "He believed that education was the only way to achieve justice and equality. He famously said, 'Justice will not be granted by others. The sufferers must secure justice for themselves.'",
                                "He founded a Marathi newspaper called <strong>Mook Nayak</strong> (Leader of the Dumb) to fight for the rights of untouchables.",
                                "He established the <strong>Bahiskrit Hitakarini Sabha</strong> which set up hostels, schools, and free libraries for the upliftment of Dalits.",
                                "He is famously known as the <strong>Architect of India's Constitution</strong>."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/5_qq1axb.jpg', alt: 'Dr. B.R. Ambedkar' }] }
                    ]}
                ]
            },
            {
                id: '5.7',
                title: 'Mahatma Gandhi (1869-1948)',
                content: [
                    { type: 'list', items: [
                        "Known as the <strong>Father of the Nation</strong>, he played a central role in India's freedom struggle.",
                        "He led non-violent movements like <strong>Satyagraha</strong> and <strong>Sarvodaya</strong> (progress for all).",
                        "He was strongly against child marriage, untouchability, and any form of discrimination against women.",
                        "He called the so-called untouchables <strong>'Harijans'</strong> which means 'people of God.'",
                        "He promoted the spinning wheel (charkha), khadi (hand-spun cloth), and village industries to make villages self-sufficient.",
                        "He supported women's education, widow remarriage, and was against the dowry and purdah (veiling of women) systems."
                    ]},
                    { type: 'paragraph', text: "<strong>Did you know?</strong><ul class='list-disc pl-5 mt-2'><li>The practice of untouchability was banned by the Constitution of India in 1950.</li><li><strong>Sir Syed Ahmed Khan</strong> worked for the progress of Muslims and founded the Mohammedan Anglo-Oriental College in 1875, which later became the Aligarh Muslim University.</li><li><strong>Singh Sabhas</strong> were Sikh organizations that worked to reform Sikh society by removing superstitions and promoting Western education.</li></ul>"}
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Impact of the Reform Movements",
        subSections: [
            {
                id: '6.1',
                title: 'Changes in Society and Religion',
                content: [
                    { type: 'list', items: [
                        "These movements brought about huge changes in Indian society and religion.",
                        "They strengthened Hinduism and Islam by removing many social evils.",
                        "Educated Indians helped revive India's past glory and contributed to the making of a Modern India."
                    ]}
                ]
            },
            {
                id: '6.2',
                title: 'Cultural Awakening',
                content: [
                    { type: 'list', items: [
                        "The reform movements led to a cultural reawakening.",
                        "There was rapid development in literature, science, and art.",
                        "The status and education of women improved significantly.",
                        "A new middle class of teachers, doctors, lawyers, scientists, and journalists emerged, which played a very important and constructive role in India's progress."
                    ]}
                ]
            },
            {
                id: '6.3',
                title: 'Role of the Printing Press',
                content: [
                   { type: 'columns', content: [
                        { width: '60%', items: [
                             { type: 'list', items: [
                                "The printing press played a very important role in spreading awareness.",
                                "It allowed reformers to publish their writings and ideas, which helped in gathering public support for their causes."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/6_mwpu8o.jpg', alt: 'An old printing press' }] }
                    ]}
                ]
            },
            {
                id: '6.4',
                title: 'Rise of Nationalism',
                content: [
                    { type: 'list', items: [
                        "Many English-educated Indians learned Sanskrit and translated ancient Indian texts into English, which filled them with national pride and patriotism.",
                        "People from different castes, communities, and regions of India came into closer contact with each other.",
                        "All these factors together led to a powerful surge of national consciousness and cultural unity, which greatly helped in the struggle for India's freedom."
                    ]}
                ]
            }
        ]
      },
      {
        id: '7',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                "<strong>Anglicist:</strong> A specialist in English language and literature; someone who favored English education in India.",
                "<strong>Maktab:</strong> An Arabic word for a school, especially a primary school.",
                "<strong>Orientalist:</strong> A person who studies Asian cultures and languages; someone who favored traditional Indian education.",
                "<strong>Reformer:</strong> A person who wants to bring change to improve society."
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Bharat par British Shasan ka Prabhav",
    tocTitle: "Vishay Suchi",
    sections: [
      {
        id: '1',
        title: "Parichay",
        content: [
          { type: 'paragraph', text: "British shasan ka samay Bharat ke itihas mein ek bahut mahatvapurna samay tha. Isne Bharatiya samaj ke har hisse mein kai badlav laye. Yeh badlav in क्षेत्रों mein dekhe gaye:" },
          { type: 'list', items: ["Shiksha", "Sarvajanik sansthan", "Jati vyavastha mein sudhar", "Mahilaon ki sthiti aur darja"] },
          { type: 'paragraph', text: "Yeh badlav mukhya roop se un Bharatiyon ke prayason se aaye jinhonne Angrezi shiksha prapt ki thi." }
        ],
        subSections: [
            {
                id: '1.1',
                title: 'British se Pehle Bharat mein Shiksha',
                content: [
                   { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'list', items: [
                                "Buniyadi ya prarambhik shiksha ke liye <strong>pathshalas</strong> aur <strong>maktabs</strong> the.",
                                "Uchcha shiksha ke liye <strong>tols</strong> aur <strong>madarsas</strong> the.",
                                "Shiksha mukhya roop se sthanik bhashaon mein dharmik kitabein padhne aur buniyadi anka-ganit sikhne tak seemit thi.",
                                "Uchcha shiksha Sanskrit, Arabic, Farsi, kanoon, tark-shastra, chikitsa, aur khagol-shastra jaise vishayon par kendrit thi, jo sabhi prachin granthon par aadharit the."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/1_vjokhy.jpg', alt: 'A traditional Indian pathshala' }] }
                    ]}
                ]
            }
        ]
      },
      {
        id: '2',
        title: "British ke Adheen Shiksha",
        subSections: [
            {
                id: '2.1',
                title: 'Shiksha ke Prati Prarambhik British Drishtikon',
                content: [
                    { type: 'list', items: [
                        "East India Company ka mukhya lakshya vyapar se munafa kamana tha, na ki Bharatiyon ko shikshit karna.",
                        "Unka doosra uddeshya Isai dharm ka prachar karna tha. Kuch Isai missionaries ne is kaam mein madad ke liye kuch Angrezi school khole."
                    ]}
                ]
            },
            {
                id: '2.2',
                title: 'Charter Act of 1813',
                content: [
                    { type: 'list', items: [
                        "Shiksha ke kshetra mein British dwara uthaya gaya yeh pehla mahatvapurna kadam tha.",
                        "Is adhiniyam ke madhyam se, British sarkar ne Bharatiyon ki shiksha ke liye ek lakh rupaye (₹1,00,000) ki rashi rakhi.",
                        "Iske baad, Calcutta (ab Kolkata) mein <strong>Hindu College</strong> aur Bombay (ab Mumbai) mein <strong>Elphinstone College</strong> jaise college sthapit kiye gaye.",
                        "In sansthano ne Bharatiyon ke beech ek naya, shikshit varg banaya jo Angrezi mein mahir the."
                    ]},
                    { type: 'paragraph', text: '<strong>Kya aap jante hain?</strong> Swami Vivekananda ne ek baar kaha tha, "Sara itihas Bharat ko vigyan aur kala ki janani ke roop mein darshata hai!"'}
                ]
            },
            {
                id: '2.3',
                title: 'Anglicist-Orientalist Vivad',
                content: [
                    { type: 'paragraph', text: "Kuch samay baad, British ke beech Bharatiyon ko shikshit karne ke sabse achhe tarike par ek bahas shuru hui." },
                    { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'list', items: [
                                "<strong>The Orientalists (Prachyavadi):</strong> Is samuh ka manna tha ki shiksha Sanskrit aur Farsi jaisi paramparik Bharatiya bhashaon mein di jani chahiye.",
                                "<strong>The Anglicists (Anglavadi):</strong> Is samuh, jismein Thomas Macaulay shamil the, ne dalil di ki Angrezi shiksha ka madhyam hona chahiye.",
                                "<strong>Lord Macaulay ka Vision (1835):</strong> Macaulay ek aisa varg banana chahte the jo 'khoon aur rang mein Bharatiya, lekin pasand aur vichar mein Angrez' ho. Unka manna tha ki yeh Angrezi-shikshit Bharatiya British shasakon aur unke dwara shasit lakhon Bharatiyon ke beech du-bhashiye ka kaam karenge.",
                                "British ne Anglavadiyon ka samarthan karne ka faisla kiya. Unka mukhya lakshya kam lagat par prashasan ke nichle staron mein unki madad kar sakne wale Bharatiyon ka ek shramik varg banana tha.",
                                "Macaulay ka yeh bhi manna tha ki Angrezi ke madhyam se pashchimi shiksha dena Bharatiyon ko 'sabhya' banayega, unke mulyon aur sanskriti ko badlega, aur British-nirmit utpadon ki maang paida karega."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198509/2_yqfvvn.jpg', alt: 'Thomas Macaulay' }] }
                    ]}
                ]
            },
            {
                id: '2.4',
                title: "Wood's Despatch, 1854",
                content: [
                    { type: 'list', items: [
                        "1854 mein, <strong>Charles Wood</strong>, jo Board of Control ke adhyaksh the, ne ek mahatvapurna shaikshik nirdesh jari kiya jise Wood's Despatch ke naam se jana jata hai.",
                        "Ise iske atyadhik mahatva ke karan aksar <strong>'Bharat mein Angrezi Shiksha ka Magna Carta'</strong> kaha jata hai.",
                        "<strong>Wood's Despatch ki mukhya sifarish:</strong> <ul class='list-disc pl-5 mt-2'><li>Ek alag Shiksha Vibhag sthapit kiya jana chahiye.</li><li>Bombay, Calcutta, aur Madras ke pramukh shaharon mein vishwavidyalay sthapit kiye jane chahiye.</li><li>Shikshakon ko prashikshit karne ke liye sansthan khole jane chahiye.</li><li>Sthanik (vernacular) bhashaon mein padhane wale schoolon ko vittiya sahayata di jani chahiye.</li></ul>"
                    ]}
                ]
            },
            {
                id: '2.5',
                title: 'Shiksha mein Agle Vikas',
                content: [
                    { type: 'list', items: [
                        "<strong>Hunter Education Commission (1882):</strong> Is aayog ka gathan yah jaanchne ke liye kiya gaya tha ki Wood's Despatch ki sifarishon ko poori tarah se kyon लागू nahin kiya ja raha tha.",
                        "<strong>Lord Curzon:</strong> Bharat ke Viceroy ke roop mein, unhonne poori shiksha pranali ki samiksha ki. Unka manna tha ki Bharatiya shaikshanik sansthan British shasan ka virodh karne wale rajnitik krantikariyon ke kendra ban rahe the.",
                        "<strong>Indian Universities Act of 1904:</strong> Uchcha shiksha aur rajnitik gatividhiyon ke vikas ko niyantrit karne ke liye, Lord Curzon ne is adhiniyam ko parit kiya. Isse kai Bharatiya naraz hue."
                    ]}
                ]
            },
            {
                id: '2.6',
                title: 'Ek Rashtriya Shiksha Pranali ki Maang',
                content: [
                    { type: 'paragraph', text: "British ne Bharatiya janata ko sarvabhaumik shiksha (sabhi ke liye shiksha) pradan karne mein bade paimane par upeksha ki." },
                    { type: 'heading', text: 'Wardha Shiksha Yojana (1937):' },
                    { type: 'paragraph', text: "Yeh Mahatma Gandhi dwara shuru ki gayi rashtriya shiksha ke liye ek yojana thi." },
                    { type: 'list', items: [
                        "Gandhiji ka manna tha ki Angrezi shiksha Bharatiyon mein heenta ki bhavna paida karti hai aur ek malik-gulam mansikta ko badhava deti hai.",
                        "Unhonne ek Rashtriya Shiksha Pranali ka prastav rakha jo satya, achchai, nyay, aatm-samman, aur garima jaise naitik mulyon ko sikhayegi."
                    ]},
                    { type: 'heading', text: "John Sargent ki Yojana (1943):" },
                    { type: 'paragraph', text: "British sarkar ne John Sargent ko rashtriya shiksha pranali ke liye ek yojana taiyar karne ke liye niyukt kiya." },
                    { type: 'list', items: [
                        "Unhonne 6 se 14 varsh ke sabhi bachchon ke liye sarvabhaumik, anivarya, aur muft shiksha ka prastav rakha.",
                        "Unhonne ek aisi pranali ki sifarish ki jo chhatron ke sarvangeen vikas par kendrit ho.",
                        "Bharat ki azadi ke baad, nayi Bharatiya sarkar ne inmein se adhikansh sifarishon ko lagu kiya."
                    ]}
                ]
            }
        ]
      },
      {
        id: '3',
        title: "British Shiksha Pranali ka Prabhav",
        subSections: [
            {
                id: '3.1',
                title: 'Sakaratmak Prabhav',
                content: [
                    { type: 'list', items: [
                        "<strong>Ekta:</strong> Angrezi bhasha ne ek samanya bhasha ke roop mein kaam kiya, jisne Bharat ke alag-alag hisson ke logon ko ekjut kiya. Isse unhein sthanik matbhedon se upar uthne aur Bharat ko ek rashtra ke roop mein dekhne mein madad mili.",
                        "<strong>Rashtravad:</strong> Isse Bharatiya samaj ke sabhi vargon mein rashtravadi bhavnaon ka uday hua.",
                        "<strong>Adhunik Adarsh:</strong> Isne logon ko samanta, svatantrata, bandhutva, aur loktantra jaise adhunik vicharon se avgat karaya.",
                        "<strong>Samajik aur Dharmik Sudhar:</strong> Isne Bharatiya samaj aur dharm mein sudhar ki avashyakta ke bare mein jagrukta paida ki.",
                        "<strong>Mahilaon ki Bhagidari:</strong> Sarojini Naidu jaisi shikshit mahilaon ko svatantrata ke liye rashtriya andolan mein shamil hone ki prerna mili."
                    ]}
                ]
            },
            {
                id: '3.2',
                title: 'Nakaratmak Prabhav',
                content: [
                    { type: 'list', items: [
                        "<strong>Samaj mein Vibhajan:</strong> Isne Angrezi-shikshit Bharatiyon ke chhote samuh aur ashikshit Bharatiyon ki vishal bahusankhya ke beech ek vibhajan paida kiya.",
                        "<strong>Bharatiya Sanskriti ki Upeksha:</strong> Bharatiya sahitya aur paramparik soch ke tarikon ko andekha kiya gaya aur unhein heen mana gaya.",
                        "<strong>British Shasan ka Mahimamandan:</strong> Schoolon mein istemal ki jane wali pathyapustakon ne British prashasan aur unke darshan ki prashansa ki, jisse Bharatiyon ko laga ki British shasan unke liye achha tha.",
                        "<strong>Amiron ke liye Shiksha:</strong> Shiksha un logon ke liye ek visheshadhikar ban gayi jo ise vahan kar sakte the. Isse mukhya roop se amir Bharatiyon ko labh hua aur garib pichhe chhut gaye."
                    ]},
                    { type: 'paragraph', text: "<strong>Kya aap jante hain?</strong> British kal ke dauran, Arya Samaj ne shiksha mein ek bada yogdan diya. Unhonne kai gurukul, school, aur college khole. 1886 mein, unhonne Lahore mein Dayanand Anglo Vedic (DAV) High School ki sthapana ki. Aaj, Bharat mein 800 se adhik DAV sansthan hain."}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Samajik Prabhav aur Sudhar",
        subSections: [
            {
                id: '4.1',
                title: 'Samajik Sudhar ki Avashyakta',
                content: [
                    { type: 'list', items: [
                        "British aamtaur par Bharatiya riti-rivajon, paramparaon, aur sanskriti ko neechi nazar se dekhte the, unhein pichhda aur asabhya mante the.",
                        "Halanki, naye Angrezi-shikshit Bharatiya apne samaj mein sudhar karna chahte the. Ve hanikarak prathaon, andhavishvason, aur anushthanon ko hatana chahte the.",
                        "Isse kai sudhar aandolanon ki shuruat hui. <strong>Raja Ram Mohan Roy</strong>, <strong>Ishwar Chandra Vidyasagar</strong>, aur <strong>Swami Dayanand Saraswati</strong> jaise sudharakon ne samajik buraiyon ko khatm karne ke liye kadi mehnat ki.",
                        "Unhonne safaltapoorvak British sarkar ko in samajik parivartanon ko lane ke liye kanoon parit karne ke liye manaya."
                    ]}
                ]
            },
            {
                id: '4.2',
                title: 'Pramukh Samajik Sudhar',
                content: [
                    { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'heading', text: 'Sati Pratha ka Unmulan:' },
                            { type: 'list', items: [
                                "Sati ek ammanviya pratha thi jahan ek vidhva ko apne pati ki chita par khud ko jalane ke liye majboor kiya jata tha.",
                                "Ise 1829 mein Governor-General <strong>William Bentinck</strong> dwara samapt kar diya gaya tha.",
                                "<strong>Raja Ram Mohan Roy</strong> ek pramukh samaj sudharak the jinhonne is pratha ke khilaf lagatar abhiyan chalaya."
                            ]},
                            { type: 'paragraph', text: "<strong>Kya aap jante hain?</strong> 1815 aur 1828 ke beech, akele Bengal Presidency mein Sati ke 8,134 se adhik mamle adhikarik taur par darj kiye gaye the."}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/3_ksqrz9.jpg', alt: 'Raja Ram Mohan Roy' }] }
                    ]},
                    { type: 'heading', text: 'Kanya Shishu Hatya par Rok:' },
                    { type: 'list', items: [
                        "Yeh navjat balikaon ko marne ki krur pratha thi.",
                        "Ise 1870 mein parit ek kanoon dwara pratibandhit kar diya gaya tha."
                    ]},
                    { type: 'paragraph', text: "<strong>Kya aap jante hain?</strong> Aaj bhi, Bharat sarkar ne balikaon ki raksha aur labh ke liye ‘Beti Bachao, Beti Padhao’, ‘Sukanya Samriddhi Yojana’, aur ‘Balika Samriddhi Yojana’ jaisi yojanaen shuru ki hain." },
                    { type: 'heading', text: 'Bal Vivah par Rok:' },
                    { type: 'list', items: [
                        "Bachchon, kabhi-kabhi to teen saal ke bachchon, ki shadi karne ki pratha aam thi.",
                        "Ise pehle 1891 mein aur phir 1929 mein kanoon dwara pratibandhit kiya gaya tha.",
                        "<strong>Sharda Act of 1929</strong> ne ladkiyon ke liye vivah ki newnatam aayu 18 varsh aur ladkon ke liye 21 varsh nirdharit ki.",
                        "Yeh kanoon bal vivah ka virodh karne wale Hindu aur Muslim mahila samuhon sahit samajik sudhar aandolanon ke liye ek badi jeet thi."
                    ]},
                    { type: 'heading', text: 'Vidhva Punarvivah Adhiniyam:' },
                    { type: 'list', items: [
                        "Paramparik samaj mein, vidhvaon ko punarvivah karne ki anumati nahin thi aur unhein ek bahut kathin jeevan jeena padta tha.",
                        "<strong>Vidhva Punarvivah Adhiniyam</strong> 1856 mein parit kiya gaya tha.",
                        "Yeh mahan sudharak <strong>Ishwar Chandra Vidyasagar</strong> ke nirantar prayason ke karan sambhav hua."
                    ]}
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Samajik-Dharmik Sudhar aur Sudharak",
        content: [
            { type: 'columns', content: [
                { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/4_tfxizh.jpg', alt: 'Great social reformers who shaped modern India' }] },
                { width: '60%', items: [
                    { type: 'paragraph', text: "19vin shatabdi ke dauran, Bharat mein ek bada samajik aur dharmik parivartan shuru hua. Pashchimi vigyan, sahitya, aur vichar ke sampark mein aane, saath hi rashtravad ki bhavna ne logon ki soch ko badal diya. Shuru mein, abhijat vargon ne jati bhedbhav ke khilaf abhiyan chalaya, lekin baad mein, nichli jatiyon ke log khud samajik anyay ke khilaf uth khade hue." }
                ]}
            ]}
        ],
        subSections: [
            {
                id: '5.1',
                title: 'Shri Narayana Guru (1854-1928)',
                content: [
                    { type: 'list', items: [
                        "Ve Kerala ke Ezhava samuday ke ek sant aur samaj sudharak the.",
                        "Unhonne jati vyavastha, achhut pratha, aur Brahmin jati ke varchasva ke khilaf sangharsh kiya.",
                        "Unhonne sabhi manavta ke liye <strong>'ek ishwar, ek jati aur ek dharm'</strong> ka sandesh diya.",
                        "Unhonne naye mandir banvaye jo jati ki parvah kiye bina sabhi ke liye khule the."
                    ]},
                    { type: 'paragraph', text: "<strong>Kya aap jante hain?</strong> Kerala ka prasiddh Guruvayur mandir ne Harijanon (nichli jatiyon ke liye ek shabd) ke liye apne darwaze sirf 1946 mein khole." }
                ]
            },
            {
                id: '5.2',
                title: 'Jyotiba Phule (1827-90)',
                content: [
                    { type: 'list', items: [
                        "Maharashtra ke ek pramukh samaj sudharak.",
                        "Unhonne <strong>Satya Shodhak Samaj</strong> (Satya ki Khoj Karne Walon ka Samaj) ki sthapana ki, jisne shoshit aur nichle vargon ke utthan ke liye kaam kiya.",
                        "Unka manna tha ki shiksha hi mukti ki kunji hai aur unhonne vanchit bachchon ke liye ek vishesh school shuru kiya.",
                        "Unhonne achhut pratha ke khilaf aur dalit vargon ke adhikaron ke liye ek Brahmin-virodhi andolan ka netritva kiya."
                    ]}
                ]
            },
            {
                id: '5.3',
                title: 'Veeresalingam Kandukuri (1848-1919)',
                content: [
                    { type: 'list', items: [
                        "Unhein aadhunik Andhra Pradesh ka paigambar mana jata hai.",
                        "Ve Telugu bhasha mein ek upanyas, ek natak, aur vigyan aur itihas par kitabein likhne wale pehle vyakti the.",
                        "Unhonne mahila shiksha, vidhva punarvivah, aur mahila adhikaron ko badhava dene ke liye <strong>Vivekavardhini</strong> naam ki ek patrika shuru ki.",
                        "Ve mahilaon ke liye vishesh roop se gadya likhne wale pehle lekhak bhi the.",
                        "Unhonne <strong>Kanyasulkam</strong> (vadhu mulya) aur budhe purushon ki yuva ladkiyon se shadi jaisi samajik buraiyon ka kada virodh kiya."
                    ]},
                    { type: 'paragraph', text: "<strong>Kya aap jante hain?</strong> Veeresalingam ne 1881 mein pehla vidhva punarvivah aayojit kiya tha." }
                ]
            },
            {
                id: '5.4',
                title: 'Periyar E.V. Ramasamy (1879-1973)',
                content: [
                    { type: 'list', items: [
                        "Tamil Nadu ke ek mahan tarkvadi aur krantikari.",
                        "Unhonne 1925 mein Congress party chhod di, yah mante hue ki yah sirf Brahminon ke hiton ki seva karti hai.",
                        "Unhonne Brahminon dwara Dravidian logon ke adhin hone par saval uthaya.",
                        "Unhonne 1925 mein <strong>Aatm-Samman Andolan</strong> shuru kiya.",
                        "Unhonne rashtravad, aatm-samman, mahila adhikaron, aur jati vyavastha ke purn unmulan ke siddhanton ko badhava diya."
                    ]}
                ]
            },
            {
                id: '5.5',
                title: 'Swami Dayanand Saraswati (1824-83)',
                content: [
                    { type: 'list', items: [
                        "Ek mahan darshanik, vidvan, aur samaj sudharak.",
                        "1875 mein, unhonne Bombay mein <strong>Arya Samaj</strong> (Shreshth Logon ka Samaj) ki sthapana ki.",
                        "Unka prasiddh sandesh tha <strong>'Vedo ki Or Lauto,'</strong> logon se prachin Hindu granthon ki mool shikshaon ka palan karne ka aagrah karte hue.",
                        "Unhonne <strong>Shuddhi Andolan</strong> shuru kiya taki anya dharmon mein parivartit ho chuke Hinduon ko vapas laya ja sake.",
                        "Ve murti puja, bal vivah, aur jati vyavastha ke khilaf the.",
                        "Ve vidhva punarvivah aur mahila shiksha ke prabal samarthak the.",
                        "Unka lakshya ek svatantra, majboot, aur ekjut Bharat ka nirman karna tha."
                    ]}
                ]
            },
            {
                id: '5.6',
                title: 'Dr. Bhimrao Ambedkar (1891-1956)',
                content: [
                    { type: 'columns', content: [
                        { width: '60%', items: [
                            { type: 'list', items: [
                                "<strong>Babasaheb</strong> ke naam se lokpriya, ve lakhon shoshit logon ke neta the.",
                                "Ek तथाकथित 'achhut' parivar mein janme, unhonne apne bachpan mein atyadhik bhedbhav ka samna kiya, jaise ki unhein apni kaksha ke kone mein ek chatai par baithna padta tha.",
                                "Unka manna tha ki shiksha hi nyay aur samanta prapt karne ka ekmatra tarika hai. Unhonne prasiddh roop se kaha, 'Nyay doosron dwara nahin diya jayega. Piditon ko apne liye nyay sunishchit karna hoga.'",
                                "Unhonne achhuton ke adhikaron ke liye ladne ke liye <strong>Mook Nayak</strong> (Gungo ka Neta) naamak ek Marathi samachar patra ki sthapana ki.",
                                "Unhonne <strong>Bahiskrit Hitakarini Sabha</strong> ki sthapana ki jisne Daliton ke utthan ke liye chhatravas, school, aur muft pustakalay sthapit kiye.",
                                "Unhein <strong>Bharat ke Samvidhan ke Nirmata</strong> ke roop mein prasiddh roop se jana jata hai."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/5_qq1axb.jpg', alt: 'Dr. B.R. Ambedkar' }] }
                    ]}
                ]
            },
            {
                id: '5.7',
                title: 'Mahatma Gandhi (1869-1948)',
                content: [
                    { type: 'list', items: [
                        "<strong>Rashtrapita</strong> ke roop mein jane jate hain, unhonne Bharat ke svatantrata sangram mein kendriya bhumika nibhai.",
                        "Unhonne <strong>Satyagraha</strong> aur <strong>Sarvodaya</strong> (sabhi ki pragati) jaise ahinsak aandolanon ka netritva kiya.",
                        "Ve bal vivah, achhut pratha, aur mahilaon ke khilaf kisi bhi prakar ke bhedbhav ke sakht khilaf the.",
                        "Unhonne तथाקथित achhuton ko <strong>'Harijan'</strong> kaha jiska arth hai 'Ishwar ke log.'",
                        "Unhonne gaonon ko aatmanirbhar banane ke liye charkha, khadi (haath se kata hua kapda), aur gram udyogon ko badhava diya.",
                        "Unhonne mahila shiksha, vidhva punarvivah ka samarthan kiya aur dahej aur parda pratha ke khilaf the."
                    ]},
                    { type: 'paragraph', text: "<strong>Kya aap jante hain?</strong><ul class='list-disc pl-5 mt-2'><li>Achhut pratha ko 1950 mein Bharat ke Samvidhan dwara pratibandhit kar diya gaya tha.</li><li><strong>Sir Syed Ahmed Khan</strong> ne Musalmanon ki pragati ke liye kaam kiya aur 1875 mein Mohammedan Anglo-Oriental College ki sthapana ki, jo baad mein Aligarh Muslim University bana.</li><li><strong>Singh Sabhaen</strong> Sikh sangathan the jinhonne andhavishvason ko hatakar aur pashchimi shiksha ko badhava dekar Sikh samaj mein sudhar ke liye kaam kiya.</li></ul>"}
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Sudhar Aandolanon ka Prabhav",
        subSections: [
            {
                id: '6.1',
                title: 'Samaj aur Dharm mein Parivartan',
                content: [
                    { type: 'list', items: [
                        "In aandolanon ne Bharatiya samaj aur dharm mein bade parivartan laye.",
                        "Unhonne kai samajik buraiyon ko hatakar Hindu dharm aur Islam ko majboot kiya.",
                        "Shikshit Bharatiyon ne Bharat ke purane gaurav ko punर्जीvit karne mein madad ki aur ek Aadhunik Bharat ke nirman mein yogdan diya."
                    ]}
                ]
            },
            {
                id: '6.2',
                title: 'Sanskritik Jagran',
                content: [
                    { type: 'list', items: [
                        "Sudhar aandolanon ne ek sanskritik punarjagran ko janm diya.",
                        "Sahitya, vigyan, aur kala mein tezi se vikas hua.",
                        "Mahilaon ki sthiti aur shiksha mein mahatvapurna sudhar hua.",
                        "Shikshakon, doctoron, vakilon, vaigyanikon, aur patrakaron ka ek naya madhyam varg ubhara, jisne Bharat ki pragati mein ek bahut mahatvapurna aur rachanatmak bhumika nibhai."
                    ]}
                ]
            },
            {
                id: '6.3',
                title: 'Printing Press ki Bhumika',
                content: [
                    { type: 'columns', content: [
                        { width: '60%', items: [
                             { type: 'list', items: [
                                "Printing press ne jagrukta phailane mein ek bahut mahatvapurna bhumika nibhai.",
                                "Isne sudharakon ko apne lekhan aur vicharon ko prakashit karne ki anumati di, jisse unke uddeshyon ke liye jan samarthan jutane mein madad mili."
                            ]}
                        ]},
                        { width: '30%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756198510/6_mwpu8o.jpg', alt: 'An old printing press' }] }
                    ]}
                ]
            },
            {
                id: '6.4',
                title: 'Rashtravad ka Uday',
                content: [
                    { type: 'list', items: [
                        "Kai Angrezi-shikshit Bharatiyon ne Sanskrit sikhi aur prachin Bharatiya granthon ka Angrezi mein anuvad kiya, jisse unmein rashtriya garv aur deshbhakti bhar gayi.",
                        "Bharat ke vibhinn jatiyon, samudayon, aur kshetron ke log ek doosre ke adhik nikat sampark mein aaye.",
                        "In sabhi karakon ne milkar rashtriya chetna aur sanskritik ekta ki ek shaktishali lahar ko janm diya, jisne Bharat ki svatantrata ke sangharsh mein bahut madad ki."
                    ]}
                ]
            }
        ]
      },
      {
        id: '7',
        title: "Shabdavali",
        content: [
            { type: 'list', items: [
                "<strong>Anglicist (Anglavadi):</strong> Angrezi bhasha aur sahitya ka visheshagya; koi vyakti jo Bharat mein Angrezi shiksha ka pakshdhar tha.",
                "<strong>Maktab:</strong> School ke liye ek Arabi shabd, vishesh roop se ek prathmik vidyalay.",
                "<strong>Orientalist (Prachyavadi):</strong> Ek vyakti jo Asian sanskritiyon aur bhashaon ka adhyayan karta hai; koi vyakti jo paramparik Bharatiya shiksha ka pakshdhar tha.",
                "<strong>Reformer (Sudharak):</strong> Ek vyakti jo samaj ko behtar banane ke liye parivartan lana chahta hai."
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
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-6 my-4">
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
function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({});
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
        const headerOffset = 150; 
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
     
      <div className="flex flex-col lg:flex-row bg-[var(--theme-bg)] ">
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
