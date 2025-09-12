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
  	metaDescription: "Detailed notes on post-independence India, covering the Integration of Princely States, the Constitution, Five Year Plans, and Foreign Policy. Ideal for Class 8 students at Vardaan Learning Institute.",
  	sections: [
  	  {
  	 	id: '1',
  	 	title: "The Indian Independence Act, 1947",
  	 	content: [
  	 	  { type: 'paragraph', text: "The journey to India's freedom was formally completed with a law passed by the British Parliament. This law was called The Indian Independence Act, 1947." },
  	 	  {
  	 	 	type: 'columns',
  	 	 	content: [
  	 	 	  {
  	 	 	 	width: '60%',
  	 	 	 	items: [
  	 	 	 	  { type: 'heading', text: "Origin of the Act:"},
  	 	 	 	  { type: 'list', items: [
  	 	 	 	 	"It was passed by the British Parliament.",
  	 	 	 	 	"It was designed by Clement Attlee, who was the Prime Minister of Britain at that time.",
  	 	 	 	 	"The political parties in India agreed to the two main points of this act: the transfer of power from the British to Indians and the Partition of India into two separate nations, India and Pakistan.",
  	 	 	 	 	"This Act was based on a plan known as the Mountbatten Plan."
  	 	 	 	  ]}
  	 	 	 	]
  	 	 	  },
  	 	 	  {
  	 	 	 	width: '40%',
  	 	 	 	items: [
  	 	 	 	  { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377644/1_xbn6vu.jpg', alt: 'Prime Minister Jawaharlal Nehru hoisting the Indian flag.' }
  	 	 	 	]
  	 	 	  }
  	 	 	]
  	 	  },
  	 	  { type: 'heading', text: "Main Features of the Act:"},
  	 	  { type: 'paragraph', text: "The Act laid down the following key points for India's independence:" },
  	 	  { type: 'list', items: [
  	 	 	"<strong>End of British Rule:</strong> The rule of the British government over India would end immediately.",
  	 	 	"<strong>Creation of Two Dominions:</strong> Two independent 'dominions' or self-governing nations were created: India and Pakistan. The areas under British India like the United Provinces, Madras Presidency, Carnatic, East Punjab, West Bengal, and Assam became part of India.",
  	 	 	"<strong>Provinces to Pakistan:</strong> West Punjab, North-West Frontier Province, Sindh, and East Bengal would become part of Pakistan.",
  	 	 	"<strong>Freedom for Princely States:</strong> The Princely States (areas ruled by Indian princes, not directly by the British) were given the freedom to decide which dominion they wanted to join – India or Pakistan.",
  	 	 	"<strong>Membership in British Commonwealth:</strong> The dominions of India and Pakistan were granted complete freedom and they became members of the British Commonwealth."
  	 	  ]}
  	 	]
  	  },
  	  {
  	 	id: '2',
  	 	title: "Integration of Princely States",
  	 	content: [
  	 	  { type: 'paragraph', text: "After independence, a major challenge was to unite the country. There were over 500 Princely States that had to decide their future." },
  	 	  {
  	 	 	type: 'columns',
  	 	 	content: [
  	 	 	  {
  	 	 	 	width: '60%',
  	 	 	 	items: [
  	 	 	 	  { type: 'heading', text: "Sardar Vallabhbhai Patel's Role:" },
  	 	 	 	  { type: 'list', items: [
  	 	 	 	 	"Sardar Vallabhbhai Patel played a crucial role in this process. Using his great wisdom and diplomatic skills, he successfully persuaded most of the Princely States to join India.",
  	 	 	 	 	"He appealed to the states, explaining that they would benefit by joining India.",
  	 	 	 	 	"By August 15, 1947, most of the states had agreed to become part of India."
  	 	 	 	  ]},
  	 	 	 	  { type: 'heading', text: "States that Joined Later:" },
  	 	 	 	  { type: 'list', items: [
  	 	 	 	 	"A few states initially did not join. These included Junagadh, Jammu & Kashmir, and Hyderabad. They joined India later.",
  	 	 	 	 	"The states of Junagadh and Hyderabad joined India after military action was taken."
  	 	 	 	  ]}
  	 	 	 	]
  	 	 	  },
  	 	 	  {
  	 	 	 	width: '40%',
  	 	 	 	items: [
  	 	 	 	  { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/2_rhppzu.jpg', alt: 'Sardar Vallabhbhai Patel with rulers of the Princely States.' }
  	 	 	 	]
  	 	 	  }
  	 	 	]
  	 	  }
  	 	]
  	  },
      {
        id: '3',
        title: "Post-Independence Leadership",
        content: [
            { type: 'list', items: [
                "<strong>Lord Mountbatten:</strong> He was the last Viceroy of British India and became the first Governor-General of independent India.",
                "<strong>Chakravarti Rajagopalachari:</strong> He was appointed as the next Governor-General, becoming the first and the last Indian to hold this post."
            ]}
        ]
      },
      {
        id: '4',
        title: "Integration of Other Territories",
        content: [
            { type: 'paragraph', text: "Some parts of India were still under the rule of other European powers like France and Portugal." },
            { type: 'list', items: [
                "<strong>Pondicherry:</strong> This area was under French rule and was liberated and became part of India between 1953-54.",
                "<strong>Goa:</strong> This territory was ruled by the Portuguese. It was liberated in 1961 and became part of India.",
                "<strong>Sikkim:</strong> It was a British protectorate (a state controlled and protected by another). Sikkim became a part of India in 1975."
            ]}
        ]
      },
      {
        id: '5',
        title: "The Indian Constitution",
        content: [
            { type: 'paragraph', text: "After independence, India needed its own set of rules and principles to govern the country. This rulebook is called the Constitution." },
            {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                            { type: 'heading', text: "The Constituent Assembly:" },
                            { type: 'list', items: [
                                "Even before independence, a Constituent Assembly was formed to write the Constitution.",
                                "Its first session was held on August 14, 1947.",
                                "It took the Assembly two years, eleven months, and seventeen days to complete the drafting of the Constitution."
                            ]},
                            { type: 'heading', text: "Adoption of the Constitution:" },
                            { type: 'list', items: [
                                "The Constitution was passed on November 26, 1949.",
                                "It was officially adopted and came into effect on January 26, 1950.",
                                "On this day, India became a Republic (a country where the head of state is an elected person, not a monarch)."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/3_kiymjh.png', alt: 'The framers of the Indian Constitution.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "First General Elections:" },
            { type: 'list', items: [
                "India held its first General Elections in 1952. The voter turnout was 62%, which showed people's enthusiasm for democracy."
            ]},
            { type: 'heading', text: "Key Leaders in the New Government:" },
            { type: 'list', items: [
                "<strong>Dr. Rajendra Prasad:</strong> He was the President of the Constituent Assembly and became the first President of free India.",
                "<strong>Dr. Jawaharlal Nehru:</strong> He became the first Prime Minister of free India.",
                "<strong>Sardar Vallabhbhai Patel:</strong> He became the first Deputy Prime Minister of free India."
            ]}
        ]
      },
      {
        id: '6',
        title: "India—On the Path of Progress",
        content: [
            { type: 'paragraph', text: "Since 1947, India has made significant progress in many areas." },
            {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                            { type: 'list', items: [
                                "<strong>Overcoming Challenges:</strong> India has a huge diversity in culture, religion, caste, language, and customs. Many people thought it would not be able to work as a united democratic country, but India proved them wrong.",
                                "<strong>Economic Progress:</strong> Our economy has witnessed expansion and diversification (producing a wider variety of goods). The country has built the necessary infrastructure like power, technology, communication, transport, etc., which are the basic requirements for industrial growth.",
                                "<strong>Agriculture and Industry:</strong> Our government has also encouraged the policy of encouraging indigenous industries (industries within our own country) and has given them a lot of assistance. In agriculture, the use of mechanisation, fertilisers, and irrigation has improved farming.",
                                "<strong>The Green Revolution:</strong> This led to a massive increase in the quantity and quality of agricultural production.",
                                "<strong>The White Revolution:</strong> This refers to the progress and development in milk production."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377641/4_ultsxp.jpg', alt: 'A farmer on a tractor, symbolizing the Green Revolution.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "Planned Development:" },
            { type: 'list', items: [
                "India adopted the model of planned development, which was inspired by the former USSR.",
                "The Planning Commission was set up in 1950 to create systematic plans for progress in all sectors.",
                "The First Five Year Plan was presented for the period 1951-56 by Prime Minister Jawaharlal Nehru.",
                "In 2015, the Planning Commission was replaced by a new body called NITI Aayog (National Institute for Transforming India) by the government of Prime Minister Narendra Modi.",
                "The main aim of NITI Aayog is to encourage involvement and participation by State governments in economic policy-making. It follows a bottom-up approach (where ideas and planning start from the local level and move up to the national level)."
            ]}
        ]
      },
      {
        id: '7',
        title: "Indian Democracy",
        content: [
            { type: 'paragraph', text: "Independent India chose to be a democracy, a system where the supreme power is in the hands of the people." },
            {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                            { type: 'heading', text: "Core Principles:" },
                            { type: 'list', items: [
                                "The aim was to have a system where every section of society had a say.",
                                "Every community, religion, and language group would have equal status and opportunity, without any discrimination.",
                                "The law would protect the interests of the backward sections of society."
                            ]},
                            { type: 'heading', text: "The Political System:" },
                            { type: 'list', items: [
                                "<strong>Early Years:</strong> After independence until 1964, the government under Jawaharlal Nehru controlled the reins of power.",
                                "<strong>Rise of Regional Parties:</strong> After 1967, many state-level (regional) political parties came into politics. This was a period of actual democratisation of Indian politics.",
                                "<strong>Coalition Era:</strong> After 1977, some political parties managed to be in power for short periods. In recent times, India has seen many coalition governments, where multiple parties join together to form a government. These groups are also called 'fronts' or 'alliances'."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/5_uveuwi.jpg', alt: 'People casting their votes, representing Indian democracy.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "Multi-Party System:" },
            { type: 'list', items: [
                "India has a multi-party system, which means there are many political parties that compete in elections.",
                "Sometimes, if no single party wins a majority, they form a coalition to form the government.",
                "Parties are classified as National Parties (like the Indian National Congress, Bhartiya Janta Party) and Regional Parties (like the Shiromani Akali Dal, Rashtriya Janta Dal)."
            ]},
            { type: 'heading', text: "The Election Commission of India (ECI):" },
            { type: 'list', items: [
                "The ECI is an autonomous constitutional authority responsible for administering elections in a free and fair manner.",
                "All national as well as state parties are recognised by the Election Commission based on certain criteria.",
                "Elections are conducted using Electronic Voting Machines (EVMs).",
                "With a population of over 1.3 billion people and more than 800 million eligible to vote, India takes great pride in being the world's largest democracy."
            ]},
            { type: 'heading', text: "Criteria for Party Recognition:" },
            { type: 'list', items: [
                "<strong>To be recognised as a State/Regional Party:</strong> A party must secure at least 6% of the total votes in a Legislative Assembly election AND win at least two seats.",
                "<strong>To be recognised as a National Party:</strong> A party must secure at least 6% of the total votes in Lok Sabha elections (or Assembly elections in four states) AND win at least four seats in the Lok Sabha."
            ]}
        ]
      },
      {
        id: '8',
        title: "India's Foreign Policy",
        content: [
            { type: 'paragraph', text: "Foreign policy refers to how a country interacts with other countries in the world." },
            { type: 'heading', text: "Basic Features:" },
            { type: 'list', items: [
                "<strong>Architect of Foreign Policy:</strong> Jawaharlal Nehru was the chief architect of India's foreign policy.",
                "<strong>Belief in United Nations and Non-Aligned Movements:</strong> Supporting global cooperation and not taking sides in major power rivalries.",
                "<strong>Promotion of World Peace:</strong> Working towards peace and harmony in the world.",
                "<strong>Anti-Racialism:</strong> Opposing discrimination based on race.",
                "<strong>Panchsheel:</strong> A set of five principles for peaceful coexistence.",
                "<strong>Anti-Colonialism and Anti-Imperialism:</strong> Supporting the freedom of countries under foreign rule.",
                "<strong>Non-Alignment:</strong> Not formally aligning with or against any major power bloc.",
                "<strong>Friendly Co-Relations with Neighbours:</strong> Maintaining good relationships with neighbouring countries.",
                "<strong>Regional Cooperation:</strong> Working together with other countries in the region."
            ]},
            { type: 'heading', text: "The Five Principles of Panchsheel:" },
            { type: 'list', items: [
                "Mutual respect for each other's territorial integrity and sovereignty.",
                "Mutual non-aggression (not attacking each other).",
                "Mutual non-interference in each other's internal matters.",
                "Equality and mutual benefits.",
                "Peaceful Co-existence."
            ]}
        ]
      },
      {
        id: '9',
        title: "Challenges Faced by Independent India",
        content: [
            { type: 'paragraph', text: "India has faced many difficult challenges since independence." },
            { type: 'heading', text: "Challenges in Indian Society" },
            { type: 'list', items: [
                "India had diverse religious, social, and economic conditions, which were influenced by castes, classes, communities, and gender discrimination.",
                "Poverty and illiteracy (inability to read and write) were widespread.",
                "<strong>Steps Taken:</strong> The government has taken many steps to achieve social progress through laws, providing reservations in legislatures, government jobs, and educational institutions for schedule castes, schedule tribes, and other backward classes."
            ]},
            { type: 'heading', text: "Challenges to Indian Democracy" },
            { type: 'list', items: [
                "At the time of independence, India faced Herculean (very difficult) tasks.",
                "There was extreme poverty, millions of refugees from the partition, and the government's treasury was empty.",
                "The country had a shortage of everything from food, medicine, and industry to infrastructure, skilled manpower, and housing.",
                "Social evils like the caste system and a wide gap between Hindus and Muslims were hampering the progress of the country. A massive nationwide programme was launched to address this."
            ]},
            { type: 'heading', text: "Progress and Ongoing Issues:" },
            { type: 'list', items: [
                "Despite these problems, India has made remarkable progress in every field like industry, economy, transport, communication, and science.",
                "The country's focus is on creating a unified and developed nation.",
                "However, poverty and illiteracy continue to be the biggest threats to the peace and progress of our country."
            ]}
        ]
      },
      {
        id: '10',
        title: "India Vision 2020",
        content: [
            { type: 'paragraph', text: "This is a vision for the future of India." },
             {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                           { type: 'list', items: [
                                "<strong>The Dream:</strong> It is the dream of all Indians that India should emerge as a vibrant and dynamic country and make great progress in all fields."
                            ]},
                            { type: 'heading', text: "Areas of Focus:" },
                            { type: 'list', items: [
                                "<strong>Education:</strong> Better quality education at all levels, from basic literacy to hi-tech science and technology.",
                                "<strong>Economy:</strong> Raising agricultural productivity and industrial quality.",
                                "<strong>Science:</strong> Spurring growth of IT and biotechnology.",
                                "<strong>Social Issues:</strong> Improving health and nutrition, and tackling issues related to population growth.",
                                "<strong>Resources & Security:</strong> Focusing on energy and water conservation, and ensuring peace and security."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377639/6_yb6wtp.jpg', alt: 'Dr. A.P.J. Abdul Kalam, former President of India.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "Dr. Abdul Kalam's Vision:" },
            { type: 'paragraph', text: "In the words of our late-President Dr. Abdul Kalam, \"the day is not far when enlightened and ignited minds will transform India into a competitive beautiful nation.\"" }
        ]
      },
      {
        id: '11',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                "<strong>British Commonwealth:</strong> It is an association, whose membership is restricted to those countries which were once under the British rule, but now have become independent.",
                "<strong>Coalition government:</strong> If a single party does not have a majority to form a government, then two or more parties join to form the government.",
                "<strong>Dominion:</strong> The power or right of governing and controlling.",
                "<strong>Princely States:</strong> These Indian states had native rulers, who had accepted British paramountcy."
            ]}
        ]
      }
  	]
  },
  hi: {
  	chapterTitle: "Chapter 15: India Marches Ahead",
  	tocTitle: "Table of Contents",
  	metaDescription: "Azaadi ke baad ka Bharat: Princely States ka integration, Samvidhan, Five Year Plans, aur Foreign Policy par detailed notes. Vardaan Learning Institute ke Class 8 students ke liye.",
  	sections: [
  	  {
  	 	id: '1',
  	 	title: "The Indian Independence Act, 1947",
  	 	content: [
  	 	  { type: 'paragraph', text: "Bharat ki azaadi ka safar British Parliament dwara paas kiye gaye ek kanoon se poora hua. Is kanoon ko The Indian Independence Act, 1947 kaha gaya." },
  	 	  {
  	 	 	type: 'columns',
  	 	 	content: [
  	 	 	  {
  	 	 	 	width: '60%',
  	 	 	 	items: [
  	 	 	 	  { type: 'heading', text: "Act ki Shuruat:"},
  	 	 	 	  { type: 'list', items: [
  	 	 	 	 	"Yeh British Parliament dwara paas kiya gaya tha.",
  	 	 	 	 	"Ise Clement Attlee ne design kiya tha, jo us samay Britain ke Pradhan Mantri the.",
  	 	 	 	 	"Bharat ki political parties is act ke do mukhya binduon par sehmat the: सत्ता ka British se Bharatiyon ko transfer aur Bharat ka do alag deshon, India aur Pakistan, mein vibhajan.",
  	 	 	 	 	"Yeh Act Mountbatten Plan par aadharit tha."
  	 	 	 	  ]}
  	 	 	 	]
  	 	 	  },
  	 	 	  {
  	 	 	 	width: '40%',
  	 	 	 	items: [
  	 	 	 	  { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377644/1_xbn6vu.jpg', alt: 'Pradhan Mantri Jawaharlal Nehru jhanda fahrate hue.' }
  	 	 	 	]
  	 	 	  }
  	 	 	]
  	 	  },
  	 	  { type: 'heading', text: "Act ki Mukhya Visheshtayein:"},
  	 	  { type: 'paragraph', text: "Is Act ne Bharat ki azaadi ke liye nimnlikhit mukhya bindu nirdharit kiye:" },
  	 	  { type: 'list', items: [
  	 	 	"<strong>British Shasan ka Ant:</strong> Bharat par British sarkar ka shasan turant samapt ho jayega.",
  	 	 	"<strong>Do Dominions ka Nirman:</strong> Do swatantra 'dominions' ya swa-shasit rashtra banaye gaye: India aur Pakistan. British India ke kshetr jaise United Provinces, Madras Presidency, Carnatic, East Punjab, West Bengal, aur Assam Bharat ka hissa ban gaye.",
  	 	 	"<strong>Pakistan ko Praant:</strong> West Punjab, North-West Frontier Province, Sindh, aur East Bengal Pakistan ka hissa banenge.",
  	 	 	"<strong>Rajwado ki Swatantrata:</strong> Rajwado (Princely States) ko yeh chunne ki azaadi di gayi ki woh kis dominion mein shamil hona chahte hain – India ya Pakistan.",
  	 	 	"<strong>British Commonwealth ki Sadasyata:</strong> India aur Pakistan ke dominions ko poorn swatantrata di gayi aur ve British Commonwealth ke sadasya ban gaye."
  	 	  ]}
  	 	]
  	  },
      {
        id: '2',
        title: "Integration of Princely States",
        content: [
            { type: 'paragraph', text: "Azaadi ke baad, desh ko ekjut karna ek badi chunauti thi. 500 se zyada Rajwade the jinhe apna bhavishya tay karna tha." },
            {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                            { type: 'heading', text: "Sardar Vallabhbhai Patel ki Bhumika:" },
                            { type: 'list', items: [
                                "Sardar Vallabhbhai Patel ne is prakriya mein ek mahatvapurna bhumika nibhayi. Apni mahan buddhi aur kootnitik kaushal ka upyog karke, unhone safaltapoorvak adhikansh Rajwado ko Bharat mein shamil hone ke liye mana liya.",
                                "Unhone rajyon se appeal ki, yeh samjhate hue ki unhe Bharat mein shamil hone se laabh hoga.",
                                "15 August, 1947 tak, adhikansh rajya Bharat ka hissa banne ke liye sehmat ho gaye the."
                            ]},
                            { type: 'heading', text: "Baad mein Shamil Hone Wale Rajya:" },
                            { type: 'list', items: [
                                "Kuch rajya shuru mein shamil nahi hue. Inmein Junagadh, Jammu & Kashmir, aur Hyderabad shamil the. Ve baad mein Bharat mein shamil hue.",
                                "Junagadh aur Hyderabad rajya military action ke baad Bharat mein shamil hue."
                            ]}
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/2_rhppzu.jpg', alt: 'Sardar Vallabhbhai Patel Rajwado ke shasakon ke saath.' }
                        ]
                    }
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Post-Independence Leadership",
        content: [
            { type: 'list', items: [
                "<strong>Lord Mountbatten:</strong> Ve British India ke aakhri Viceroy the aur swatantra Bharat ke pehle Governor-General bane.",
                "<strong>Chakravarti Rajagopalachari:</strong> Unhe agle Governor-General ke roop mein niyukt kiya gaya, aur ve is pad ko dharan karne wale pehle aur aakhri Bharatiya bane."
            ]}
        ]
      },
      {
        id: '4',
        title: "Integration of Other Territories",
        content: [
            { type: 'paragraph', text: "Bharat ke kuch hisse abhi bhi France aur Portugal jaise anya European shaktiyon ke shasan mein the." },
            { type: 'list', items: [
                "<strong>Pondicherry:</strong> Yeh kshetra French shasan ke adheen tha aur 1953-54 ke beech azaad hokar Bharat ka hissa ban gaya.",
                "<strong>Goa:</strong> Is kshetra par Portuguese ka shasan tha. Yeh 1961 mein azaad hua aur Bharat ka hissa ban gaya.",
                "<strong>Sikkim:</strong> Yeh ek British protectorate tha (ek rajya jo kisi dusre dwara niyantrit aur sanrakshit ho). Sikkim 1975 mein Bharat ka hissa ban gaya."
            ]}
        ]
      },
       {
        id: '5',
        title: "The Indian Constitution",
        content: [
            { type: 'paragraph', text: "Azaadi ke baad, Bharat ko desh par shasan karne ke liye apne niyam aur siddhanto ki avashyakta thi. Is niyam-pustika ko Samvidhan (Constitution) kehte hain." },
            {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                            { type: 'heading', text: "The Constituent Assembly:" },
                            { type: 'list', items: [
                                "Azaadi se pehle hi, Samvidhan likhne ke liye ek Samvidhan Sabha (Constituent Assembly) ka gathan kiya gaya tha.",
                                "Iska pehla satra 14 August, 1947 ko aayojit kiya gaya tha.",
                                "Assembly ko Samvidhan ka masौदा taiyar karne mein do saal, gyarah mahine, aur satrah din lage."
                            ]},
                            { type: 'heading', text: "Samvidhan ko Apnana:" },
                            { type: 'list', items: [
                                "Samvidhan 26 November, 1949 ko paas kiya gaya tha.",
                                "Ise aadhikarik taur par 26 January, 1950 ko apnaya gaya aur yeh laagoo hua.",
                                "Is din, Bharat ek Ganराज्य (Republic) ban gaya (ek desh jahan rajya ka pramukh ek chuna hua vyakti hota hai, na ki ek raja)."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/3_kiymjh.png', alt: 'Bharatiya Samvidhan ke nirmata.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "Pehle Aam Chunav:" },
            { type: 'list', items: [
                "Bharat ne apne pehle aam chunav 1952 mein aayojit kiye. Matdan 62% tha, jo logon ke loktantra ke prati utsah ko darshata hai."
            ]},
            { type: 'heading', text: "Nayi Sarkar ke Pramukh Neta:" },
            { type: 'list', items: [
                "<strong>Dr. Rajendra Prasad:</strong> Ve Samvidhan Sabha ke Adhyaksh the aur swatantra Bharat ke pehle Rashtrapati bane.",
                "<strong>Dr. Jawaharlal Nehru:</strong> Ve swatantra Bharat ke pehle Pradhan Mantri bane.",
                "<strong>Sardar Vallabhbhai Patel:</strong> Ve swatantra Bharat ke pehle Up Pradhan Mantri bane."
            ]}
        ]
      },
      {
        id: '6',
        title: "India—On the Path of Progress",
        content: [
            { type: 'paragraph', text: "1947 se, Bharat ne kai kshetron mein mahatvapurna pragati ki hai." },
             {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                           { type: 'list', items: [
                                "<strong>Chunautiyon par Kabu Pana:</strong> Bharat mein sanskriti, dharm, jaati, bhasha, aur reeti-riwajo mein bahut vividhata hai. Kai logon ne socha tha ki yeh ek ekjut loktantrik desh ke roop mein kaam nahi kar payega, lekin Bharat ne unhe galat saabit kar diya.",
                                "<strong>Aarthik Pragati:</strong> Hamari arthvyavastha mein vistar aur vividhikaran (anek prakar ke saman ka utpadan) hua hai. Desh ne zaroori buniyadi dhancha jaise bijli, technology, sanchar, parivahan, aadi ka nirman kiya hai, jo audyogik vikas ke liye buniyadi avashyaktaein hain.",
                                "<strong>Krishi aur Udyog:</strong> Hamari sarkar ne swadeshi udyogon (hamare apne desh ke udyog) ko protsahit karne ki neeti ko bhi badhava diya hai aur unhe bahut sahayata di hai. Krishi mein, mechanisation, urvarakon, aur sinchai ke upyog ne kheti mein sudhar kiya hai.",
                                "<strong>Harit Kranti (Green Revolution):</strong> Isse krishi utpadan ki matra aur gunvatta mein bhari vridhi hui.",
                                "<strong>Shwet Kranti (White Revolution):</strong> Yeh doodh utpadan mein pragati aur vikas ko sandarbhit karta hai."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377641/4_ultsxp.jpg', alt: 'Ek kisan tractor par, Harit Kranti ka prateek.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "Niyojit Vikas (Planned Development):" },
            { type: 'list', items: [
                "Bharat ne niyojit vikas ka model apnaya, jo poorv USSR se prerit tha.",
                "Yojana Aayog (Planning Commission) ki sthapna 1950 mein sabhi kshetron mein pragati ke liye vyavasthit yojanaein banane ke liye ki gayi thi.",
                "Pehli Panchvarshiya Yojana 1951-56 ki avadhi ke liye Pradhan Mantri Jawaharlal Nehru dwara prastut ki gayi thi.",
                "2015 mein, Yojana Aayog ko Pradhan Mantri Narendra Modi ki sarkar dwara NITI Aayog (National Institute for Transforming India) naamak ek naye nikay se badal diya gaya.",
                "NITI Aayog ka mukhya uddeshya aarthik neeti-nirman mein Rajya sarkaron ki bhagidari ko protsahit karna hai. Yeh ek 'bottom-up' drishtikon ka palan karta hai (jahan vichar aur yojana sthaniya star se shuru hokar rashtriya star tak jaati hai)."
            ]}
        ]
      },
      {
        id: '7',
        title: "Indian Democracy",
        content: [
            { type: 'paragraph', text: "Swatantra Bharat ne loktantra ko chuna, ek aisi pranali jahan sarvochch shakti logon ke haathon mein hoti hai." },
            {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                           { type: 'heading', text: "Mool Siddhant:" },
                            { type: 'list', items: [
                                "Uddeshya ek aisi pranali banana tha jahan samaj ke har varg ki apni baat ho.",
                                "Har samuday, dharm, aur bhasha samuh ko bina kisi bhedbhav ke saman darja aur avsar milega.",
                                "Kanoon pichde vargon ke hiton ki raksha karega."
                            ]},
                            { type: 'heading', text: "Rajnitik Pranali:" },
                            { type: 'list', items: [
                                "<strong>Prarambhik Varsh:</strong> Azaadi ke baad 1964 tak, Jawaharlal Nehru ke adheen sarkar ne सत्ता ki bagdor sambhali.",
                                "<strong>Kshetriya Dalon ka Uday:</strong> 1967 ke baad, kai rajya-stariya (kshetriya) rajnitik dal rajneeti mein aaye. Yeh Bharatiya rajneeti ke vastavik loktantrikaran ka daur tha.",
                                "<strong>Gathbandhan Yug:</strong> 1977 ke baad, kuch rajnitik dal kam samay ke liye सत्ता mein rehne mein kamyab rahe. Haal ke samay mein, Bharat ne kai gathbandhan sarkarein dekhi hain, jahan kai dal milkar sarkar banate hain. In samuhon ko 'fronts' ya 'alliances' bhi kaha jaata hai."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377640/5_uveuwi.jpg', alt: 'Log vote daalte hue, Bharatiya loktantra ka pratinidhitv karte hue.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "Bahudaliya Pranali:" },
            { type: 'list', items: [
                "Bharat mein ek bahudaliya pranali hai, jiska arth hai ki yahan kai rajnitik dal hain jo chunavon mein hissa lete hain.",
                "Kabhi-kabhi, yadi koi ek dal bahumat haasil nahi kar pata hai, to ve sarkar banane ke liye gathbandhan banate hain.",
                "Dal ko Rashtriya Dal (jaise Indian National Congress, Bhartiya Janta Party) aur Kshetriya Dal (jaise Shiromani Akali Dal, Rashtriya Janta Dal) ke roop mein vargikrit kiya jaata hai."
            ]},
            { type: 'heading', text: "Bharat ka Chunav Aayog (ECI):" },
            { type: 'list', items: [
                "ECI ek swayatt samvaidhanik pradhikaran hai jo chunavon ko swatantra aur nishpaksh dhang se aayojit karne ke liye jimmedar hai.",
                "Sabhi rashtriya aur rajya partiyon ko Chunav Aayog dwara kuch mandandon ke aadhar par manyata di jaati hai.",
                "Chunav Electronic Voting Machines (EVMs) ka upyog karke karaye jaate hain.",
                "1.3 arab se adhik ki aabadi aur 800 million se adhik matdan ke liye yogya logon ke saath, Bharat ko duniya ka sabse bada loktantra hone par garv hai."
            ]},
            { type: 'heading', text: "Party Manyata ke Mandand:" },
            { type: 'list', items: [
                "<strong>Rajya/Kshetriya Party ke roop mein manyata prapt karne ke liye:</strong> Ek party ko Vidhan Sabha chunav mein kul maton ka kam se kam 6% prapt karna chahiye AUR kam se kam do seatein jeetni chahiye.",
                "<strong>Rashtriya Party ke roop mein manyata prapt karne ke liye:</strong> Ek party ko Lok Sabha chunavon mein (ya char rajyon mein Vidhan Sabha chunavon mein) kul maton ka kam se kam 6% prapt karna chahiye AUR Lok Sabha mein kam se kam char seatein jeetni chahiye."
            ]}
        ]
      },
      {
        id: '8',
        title: "India's Foreign Policy",
        content: [
            { type: 'paragraph', text: "Videsh neeti se tatparya hai ki ek desh duniya ke anya deshon ke saath kaise sanvad karta hai." },
            { type: 'heading', text: "Mool Visheshtayein:" },
            { type: 'list', items: [
                "<strong>Videsh Neeti ke Nirmata:</strong> Jawaharlal Nehru Bharat ki videsh neeti ke mukhya nirmata the.",
                "<strong>Sanyukt Rashtra aur Gutnirpeksh Aandolan mein Vishwas:</strong> Vaishvik sahyog ka samarthan karna aur pramukh shakti guton mein paksh na lena.",
                "<strong>Vishwa Shanti ko Badhava Dena:</strong> Duniya mein shanti aur samanjasya ke liye kaam karna.",
                "<strong>Naslvaad Virodh:</strong> Nasl ke aadhar par bhedbhav ka virodh karna.",
                "<strong>Panchsheel:</strong> Shantipurna sah-astitva ke liye paanch siddhanto ka ek samuh.",
                "<strong>Upniveshvaad aur Samrajyavaad Virodh:</strong> Videshi shasan ke adheen deshon ki swatantrata ka samarthan karna.",
                "<strong>Gutnirpekshta (Non-Alignment):</strong> Kisi bhi pramukh shakti gut ke saath ya khilaf aupcharik roop se gathbandhan na karna.",
                "<strong>Padosiyon ke Saath Maitripoorn Sambandh:</strong> Padosi deshon ke saath achhe sambandh banaye rakhna.",
                "<strong>Kshetriya Sahyog:</strong> Kshetra ke anya deshon ke saath milkar kaam karna."
            ]},
            { type: 'heading', text: "Panchsheel ke Paanch Siddhant:" },
            { type: 'list', items: [
                "Ek dusre ki kshetriya akhandata aur samprabhuta ka paarasparik samman.",
                "Paarasparik gair-aakraman (ek dusre par hamla na karna).",
                "Ek dusre ke aantrik mamlon mein paarasparik gair-hastakshep.",
                "Samanata aur paarasparik laabh.",
                "Shantipurna Sah-astitva."
            ]}
        ]
      },
      {
        id: '9',
        title: "Challenges Faced by Independent India",
        content: [
            { type: 'paragraph', text: "Azaadi ke baad se Bharat ne kai kathin chunautiyon ka samna kiya hai." },
            { type: 'heading', text: "Bharatiya Samaj mein Chunautiyan" },
            { type: 'list', items: [
                "Bharat mein vividh dharmik, samajik, aur aarthik sthitiyan thi, jo jaati, varg, samuday, aur ling bhedbhav se prabhavit thi.",
                "Garibi aur niraksharata (padhne-likhne mein asamarthata) vyaapt thi.",
                "<strong>Uthaye Gaye Kadam:</strong> Sarkar ne kanoon ke madhyam se samajik pragati haasil karne ke liye kai kadam uthaye hain, jaise ki anusuchit jaati, anusuchit janjati, aur anya pichde vargon ke liye vidhanamandalon, sarakari naukriyon, aur shikshan sansthanon mein aarakshan pradan karna."
            ]},
            { type: 'heading', text: "Bharatiya Loktantra ke liye Chunautiyan" },
            { type: 'list', items: [
                "Azaadi ke samay, Bharat ne Herculean (bahut kathin) karyon ka samna kiya.",
                "Atyadhik garibi thi, vibhajan se laakhon sharanarthi the, aur sarkar ka khazana khaali tha.",
                "Desh mein bhojan, dawa, aur udyog se lekar buniyadi dhancha, kushal manav shakti, aur aavas tak har cheez ki kami thi.",
                "Jaati pratha jaise samajik buraiyan aur Hindu-Muslim ke beech ek badi khai desh ki pragati mein badha daal rahi thi. Isse nipatne ke liye ek vishal rashtravyapi karyakram shuru kiya gaya."
            ]},
            { type: 'heading', text: "Pragati aur Jaari Mudde:" },
            { type: 'list', items: [
                "In samasyaon ke bavajood, Bharat ne udyog, arthvyavastha, parivahan, sanchar, aur vigyan jaise har kshetra mein ullekhaneey pragati ki hai.",
                "Desh ka dhyan ek ekikrit aur viksit rashtra banane par hai.",
                "Halanki, garibi aur niraksharata hamare desh ki shanti aur pragati ke liye sabse bade khatre bane hue hain."
            ]}
        ]
      },
      {
        id: '10',
        title: "India Vision 2020",
        content: [
            { type: 'paragraph', text: "Yeh Bharat ke bhavishya ke liye ek drishti hai." },
            {
                type: 'columns',
                content: [
                    {
                        width: '60%',
                        items: [
                           { type: 'list', items: [
                                "<strong>Sapna:</strong> Sabhi Bharatiyon ka sapna hai ki Bharat ek jeevant aur gatishil desh ke roop mein ubhre aur sabhi kshetron mein mahan pragati kare."
                            ]},
                            { type: 'heading', text: "Focus ke Kshetra:" },
                            { type: 'list', items: [
                                "<strong>Shiksha:</strong> Sabhi staron par behtar gunvatta wali shiksha, buniyadi saksharata se lekar hi-tech vigyan aur praudyogiki tak.",
                                "<strong>Arthvyavastha:</strong> Krishi utpadakta aur audyogik gunvatta ko badhana.",
                                "<strong>Vigyan:</strong> IT aur biotechnology ke vikas ko protsahit karna.",
                                "<strong>Samajik Mudde:</strong> Swasthya aur poshan mein sudhar, aur jansankhya vridhi se sambandhit muddon se nipatna.",
                                "<strong>Sansadhan aur Suraksha:</strong> Urja aur jal sanrakshan par dhyan kendrit karna, aur shanti aur suraksha sunishchit karna."
                            ]},
                        ]
                    },
                    {
                        width: '40%',
                        items: [
                            { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756377639/6_yb6wtp.jpg', alt: 'Dr. A.P.J. Abdul Kalam, Bharat ke poorv Rashtrapati.' }
                        ]
                    }
                ]
            },
            { type: 'heading', text: "Dr. Abdul Kalam ka Vision:" },
            { type: 'paragraph', text: "Hamare divangat Rashtrapati Dr. Abdul Kalam ke shabdon mein, \"vah din door nahi jab prabuddh aur prajwalit man Bharat ko ek pratispardhi sundar rashtra mein badal denge.\"" }
        ]
      },
      {
        id: '11',
        title: "Keywords",
        content: [
            { type: 'list', items: [
                "<strong>British Commonwealth:</strong> Yeh ek sangh hai, jiski sadasyata un deshon tak seemit hai jo kabhi British shasan ke adheen the, lekin ab swatantra ho gaye hain.",
                "<strong>Coalition government (Gathbandhan sarkar):</strong> Yadi kisi ek dal ke paas sarkar banane ke liye bahumat nahi hota hai, to do ya do se adhik dal milkar sarkar banate hain.",
                "<strong>Dominion:</strong> Shasan aur niyantran karne ki shakti ya adhikar.",
                "<strong>Princely States (Rajwade):</strong> Ye Bharatiya rajya the jinke desi shasak the, jinhone British sarvochchata ko sweekar kar liya tha."
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

// --- ICONS ---
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

// Up Arrow Icon for Back to Top button
const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
    </svg>
);

// --- DYNAMIC CONTENT RENDERERS ---
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
  	 	 	<figure key={index} className="w-full my-4 aspect-square">
  	 	 	 	<img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-lg shadow-md" />
  	 	 	</figure>
  	 	);
  	  case 'columns':
  	 	return <ColumnsComponent key={index} content={item.content} />;
  	  default:
  	 	return null;
  	}
  });
};

// --- UI COMPONENTS ---
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
  	 	 	 	 	 	 	 	 	 	{section.title}
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

const BackToTopButton = ({ theme, isMobile }) => {
    const [isVisible, setIsVisible] = useState(false);

    // This function will be called when the user scrolls
    const toggleVisibility = () => {
        // The button becomes visible if the user has scrolled more than 300 pixels down
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // This function will be called when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This makes the scrolling smooth
        });
    };

    // Set up an event listener for the scroll event
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component is unmounted
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            // Adjust position based on whether it's mobile view to avoid overlap
            right: isMobile ? '104px' : '24px', 
            zIndex: 30,
            transition: 'opacity 0.3s, transform 0.3s',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            pointerEvents: isVisible ? 'auto' : 'none',
        }}>
            <button
                onClick={scrollToTop}
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
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                aria-label="Go to top"
            >
                <UpArrowIcon />
            </button>
        </div>
    );
};


// Main App Component
function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '1': true, '2': true, '5': true, '6': true, '7': true, '10': true });
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
  	 	} else if (window.scrollY < 200) {
            setActiveSection(allSectionIds[0]);
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
  	  "@id": "https://vardaanlearning.com/notes/cbse-class-8-history-chapter-15" // Replace with the actual URL
  	},
  	"headline": currentContent.chapterTitle,
  	"description": currentContent.metaDescription,
  	"image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1756377644/1_xbn6vu.jpg",  // A representative image
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
  	"datePublished": "2025-08-28",
  	"dateModified": "2025-08-28"
  };

  return (
  	<>
  	  <Helmet>
  	 	<title>{`${currentContent.chapterTitle} - Class 8 History Notes`}</title>
  	 	<meta name="description" content={currentContent.metaDescription} />
  	 	<meta name="keywords" content="CBSE Class 8, History, India After Independence, Indian Constitution, Princely States, Vardaan Learning Institute, NCERT Notes" />
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
  	 	 	 	marginTop: '80px',
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
  	 	 	 	 	onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
  	 	 	 	 	onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
  	 	 	 	 	onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
  	 	 	 	 	onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
  	 	 	 	 	aria-label="Open Table of Contents"
  	 	 	 	>
  	 	 	 	 	<MenuIcon />
  	 	 	 	</button>
  	 	 	</div>
  	 	)}
        <BackToTopButton theme={theme} isMobile={isMobile} />
  	  </div>
  	</>
  );
}

export default App;
