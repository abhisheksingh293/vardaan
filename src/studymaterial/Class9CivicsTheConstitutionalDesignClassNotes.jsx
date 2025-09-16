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
    chapterTitle: "Constitutional Design",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE Civics notes on Constitutional Design. Covers the making of the South African and Indian constitutions, guiding values, and key concepts.",
    sections: [
      { id: '1', title: "Overview of a Constitution", content: [
          { type: 'paragraph', text: "A constitution is a collection of fundamental rules that both the citizens and the government of a country are required to follow. As the supreme law of the land, it defines the rights of citizens, the powers of the government, and how the government must function." },
          { type: 'paragraph', text: "This chapter addresses several basic questions about constitutional design:" },
          { type: 'list', items: [
              "Why is a constitution necessary?",
              "How are constitutions created and who designs them?",
              "What are the values that influence constitutions in democratic nations?",
              "Can a constitution be modified to meet changing conditions?"
          ]},
          { type: 'paragraph', text: "The chapter uses the recent constitutional design in South Africa and the making of the Indian Constitution as primary examples."}
      ]},
      { id: '2', title: "Democratic Constitution in South Africa", content: [
        { type: 'paragraph', text: "The process of creating South Africa's democratic constitution is a significant recent example of constitutional design."}
      ], subSections: [
          { id: '2.1', title: "a) The Struggle Against Apartheid", content: [
               { type: 'list', items: [
                  "<strong>What was Apartheid?</strong> Apartheid was the name of a system of racial discrimination that was unique to South Africa. It was imposed on the country by white Europeans.",
                  "<strong>Racial Division:</strong> The system categorized people based on their skin color.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Blacks:</strong> The native people of South Africa, who constituted about three-fourths of the population.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Whites:</strong> The minority group of European settlers who established themselves as the local rulers.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Coloured:</strong> A term used for people of mixed races.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Indians:</strong> People who had migrated from India.",
                  "<strong>System of Oppression:</strong> The apartheid system was particularly oppressive for blacks.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• All non-whites were treated as inferiors by the white rulers and did not have the right to vote.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Blacks were forbidden from living in white areas and could only work there if they possessed a permit.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Segregation was strictly enforced, with separate trains, buses, schools, hospitals, beaches, and even public toilets for whites and blacks.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Blacks were not permitted to form associations or protest against this treatment."
              ]}
          ]},
          { id: '2.2', title: "b) Towards a New Constitution", content: [
               { type: 'list', items: [
                  "<strong>Resistance:</strong> From 1950 onwards, the blacks, coloureds, and Indians began to fight against the apartheid system through protest marches and strikes. The <strong>African National Congress (ANC)</strong> was the primary organization that led this struggle.",
                  "<strong>Nelson Mandela:</strong> A central leader of the movement, Nelson Mandela, was tried for treason by the white government. He, along with seven other leaders, was sentenced to life imprisonment in 1964. Mandela spent 27 years in South Africa's most feared prison, Robben Island.",
                  "<strong>The End of Apartheid:</strong> As protests and struggles intensified, the white regime recognized it could no longer maintain control through repression.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• The government changed its policies, repealing discriminatory laws and lifting the ban on political parties and media restrictions.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• After 28 years in prison, Nelson Mandela was released.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Finally, on the midnight of <strong>26 April 1994</strong>, South Africa officially became a democracy, and a multi-racial government was formed.",
                  "<strong>Building a New Nation:</strong> Following the transition, black leaders called for forgiveness towards the whites for the atrocities they had committed. The goal was to construct a new South Africa founded on the principles of equality for all races, democratic values, social justice, and human rights. The party that had ruled through oppression sat with the party that led the freedom struggle to draft a common constitution.",
                  "<strong>A Model Constitution:</strong> After two years of debate, they produced one of the world's finest constitutions, which granted its citizens the most extensive rights available in any country. It was founded on the idea that no one should be excluded and that everyone must be part of the solution. South Africans now refer to their country as a <strong>'rainbow nation'</strong>."
               ]}
          ]},
        ]
      },
      { id: '3', title: "Why Do We Need a Constitution?", content: [
          { type: 'paragraph', text: "The South African example illustrates why a constitution is essential for a society. A constitution performs several critical functions:" },
          { type: 'list', items: [
              "<strong>Generates Trust and Coordination:</strong> It establishes a degree of trust and coordination necessary for different kinds of people to live together. It achieves this by creating a set of written rules that are accepted by all people in the country.",
              "<strong>Specifies Government Formation:</strong> It specifies how the government will be formed and who will have the power to make which decisions.",
              "<strong>Limits Government Power:</strong> It lays down limits on the powers of the government and also outlines the rights of the citizens. These rules ensure that even the winners of elections cannot easily change the fundamental principles.",
              "<strong>Expresses Aspirations:</strong> It expresses the aspirations of the people about creating a good society."
          ]},
          { type: 'paragraph', text: "<strong>Key Distinction:</strong> All countries that are democratic will have constitutions, but all countries that have constitutions are not necessarily democratic."}
      ]},
      { id: '4', title: "Making of the Indian Constitution", content: [
          { type: 'paragraph', text: "India's Constitution was drafted under extremely difficult circumstances."}
        ], subSections: [
          { id: '4.1', title: "a) The Difficult Path to the Constitution", content: [
              { type: 'list', items: [
                  "<strong>Diversity and Partition:</strong> The task of making a constitution for a huge and diverse country like India was not an easy one. The country was born through a partition based on religious differences, which was a traumatic experience for the people of both India and Pakistan, with at least ten lakh people killed in the violence.",
                  "<strong>Integration of Princely States:</strong> The British rulers left the princely states with the choice to merge with India or Pakistan, or to remain independent. The merger of these states was a difficult and uncertain task."
              ]}
          ]},
          { id: '4.2', title: "b) Advantages for the Makers", content: [
               { type: 'paragraph', text: "Despite these challenges, the framers of the Indian Constitution had several advantages:" },
               { type: 'list', items: [
                  "<strong>Consensus from Freedom Struggle:</strong> Unlike South Africa, a consensus about what a democratic India should look like had already evolved during the freedom struggle.",
                  "<strong>Early Constitutional Drafts:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• In <strong>1928</strong>, Motilal Nehru and eight other Congress leaders drafted a constitution for India.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• The <strong>1931 resolution at the Karachi session</strong> of the Indian National Congress also focused on how independent India's constitution should look.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Both documents were committed to principles like universal adult franchise, the right to freedom and equality, and protecting the rights of minorities.",
                  "<strong>Familiarity with Institutions:</strong> The experience gained by Indians working within the legislative institutions of the colonial era proved very useful. Many institutional details and procedures were adopted from colonial laws like the <strong>Government of India Act, 1935</strong>.",
                  "<strong>Global Inspiration:</strong> Leaders were inspired by the ideals of the French Revolution, the practice of parliamentary democracy in Britain, the Bill of Rights in the US, and the socialist revolution in Russia. However, at each step, they questioned whether these ideas were suitable for India and adapted them accordingly."
               ]}
          ]},
          { id: '4.3', title: "c) The Constituent Assembly", content: [
              { type: 'list', items: [
                  "<strong>Formation:</strong> The Constitution was drafted by an assembly of elected representatives called the <strong>Constituent Assembly</strong>.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Elections to the Assembly were held in July 1946.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• After the partition of the country, the Constituent Assembly that wrote the Indian constitution had <strong>299 members</strong>.",
                  "<strong>Timeline:</strong> The Assembly adopted the Constitution on <strong>26 November 1949</strong>, and it came into effect on <strong>26 January 1950</strong>. This day is celebrated as <strong>Republic Day</strong> in India every year.",
                  "<strong>Legitimacy and Working Style:</strong> The Constitution's legitimacy, even after more than seven decades, stems from several factors:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Broad Consensus:</strong> The Constitution reflects a broad consensus of its time rather than the views of its members alone.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Representation:</strong> The Assembly was seen as representing the people of India. Although not elected by universal adult franchise, it had a fair geographical share of members from all regions and also included members from different language groups, castes, classes, religions, and occupations.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Systematic Process:</strong> The Constituent Assembly worked in a systematic, open, and consensual manner. A Drafting Committee, chaired by <strong>Dr. B.R. Ambedkar</strong>, prepared a draft for discussion. The members deliberated for <strong>114 days spread over three years</strong>, with every word recorded and preserved in what are called the <strong>'Constituent Assembly Debates'</strong>."
              ]}
          ]}
        ]
      },
      { id: '5', title: "Guiding Values of the Indian Constitution", subSections: [
          { id: '5.1', title: "a) The Preamble: The Soul of the Constitution", content: [
              { type: 'paragraph', text: "The Constitution begins with a Preamble, which is a short statement of its basic values. It contains the philosophy on which the entire Constitution has been built and serves as a standard to examine and evaluate any law and action of the government." },
              { type: 'paragraph', text: "The key values embedded in the Preamble are:" },
              { type: 'list', items: [
                  "<strong>WE, THE PEOPLE OF INDIA:</strong> This signifies that the constitution has been drawn up and enacted by the people through their representatives, not handed down by a king or any outside power.",
                  "<strong>SOVEREIGN:</strong> People have the supreme right to make decisions on internal as well as external matters. No external power can dictate to the government of India.",
                  "<strong>SOCIALIST:</strong> Wealth is generated socially and should be shared equally by society. The government should regulate the ownership of land and industry to reduce socio-economic inequalities. (Added by the 42nd Amendment in 1976).",
                  "<strong>SECULAR:</strong> Citizens have complete freedom to follow any religion. There is no official religion, and the government treats all religious beliefs and practices with equal respect. (Added by the 42nd Amendment in 1976).",
                  "<strong>DEMOCRATIC:</strong> A form of government where people enjoy equal political rights, elect their rulers, and hold them accountable.",
                  "<strong>REPUBLIC:</strong> The head of the state is an elected person and not a hereditary position.",
                  "<strong>JUSTICE:</strong> Citizens cannot be discriminated against on the grounds of caste, religion, and gender. Social inequalities have to be reduced.",
                  "<strong>LIBERTY:</strong> There are no unreasonable restrictions on the citizens in what they think, how they wish to express their thoughts, and how they wish to follow up their thoughts in action.",
                  "<strong>EQUALITY:</strong> All are equal before the law. The government should ensure equal opportunity for all.",
                  "<strong>FRATERNITY:</strong> All of us should behave as if we are members of the same family. No one should treat a fellow citizen as inferior."
              ]}
          ]}
      ]},
      { id: '6', title: "Institutional Design", content: [
          { type: 'paragraph', text: "A constitution is not merely a statement of values; it is mainly about embodying these values into institutional arrangements." },
          { type: 'list', items: [
            "<strong>A Living Document:</strong> The Indian Constitution is a very long and detailed document. The framers intended for it to be in accordance with people's aspirations and societal changes. They did not view it as a sacred, static, and unalterable law, so they made provisions to incorporate changes over time. These changes are known as <strong>constitutional amendments</strong>.",
            "<strong>Framework of Governance:</strong> The Constitution lays down a procedure for choosing persons to govern the country. It defines who will have how much power to take which decisions. It also puts limits on what the government can do by providing certain rights to the citizen that cannot be violated."
          ]}
      ]},
      { id: '7', title: "Glossary of Key Terms", content: [
        { type: 'list', items: [
            "<strong>Apartheid:</strong> The official policy of racial separation and ill-treatment of blacks followed by the government of South Africa between 1948 and 1989.",
            "<strong>Clause:</strong> A distinct section of a document.",
            "<strong>Constituent Assembly:</strong> An assembly of people's representatives that writes a constitution for a country.",
            "<strong>Constitution:</strong> The supreme law of a country, containing fundamental rules governing the politics and society.",
            "<strong>Constitutional amendment:</strong> A change in the constitution made by the supreme legislative body in a country.",
            "<strong>Draft:</strong> A preliminary version of a legal document.",
            "<strong>Philosophy:</strong> The most fundamental principles underlying one's thoughts and actions.",
            "<strong>Preamble:</strong> An introductory statement in a constitution which states the reasons and guiding values of the constitution.",
            "<strong>Treason:</strong> The offence of attempting to overthrow the government of the state to which the offender owes allegiance.",
            "<strong>Tryst:</strong> A meeting or meeting place that has been agreed upon."
        ]}
      ]}
    ]
  },
  hi: { // Hinglish Version
    chapterTitle: "Constitutional Design",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE Civics ke liye Constitutional Design par notes. South Africa aur India ke samvidhan, Preamble, aur zaroori terms simple Hinglish mein.",
    sections: [
      { id: '1', title: "Overview of a Constitution", content: [
          { type: 'paragraph', text: "Ek constitution fundamental rules ka collection hota hai jise desh ke citizens aur government, dono ko follow karna zaroori hota hai. Desh ka supreme law hone ke naate, yeh citizens ke rights, government ke powers, aur government kaise kaam karegi, yeh sab define karta hai." },
          { type: 'paragraph', text: "Yeh chapter constitutional design se jude kuch basic sawalon ko address karta hai:" },
          { type: 'list', items: [
              "Ek constitution kyun zaroori hai?",
              "Constitutions kaise banaye jaate hain aur unhe kaun design karta hai?",
              "Democratic deshon mein constitutions ko kaun si values prabhavit karti hain?",
              "Kya badalte halaat ke hisab se constitution ko modify kiya ja sakta hai?"
          ]},
          { type: 'paragraph', text: "Is chapter mein South Africa ke haal hi ke constitutional design aur Indian Constitution ke banane ke process ko primary examples ke taur par use kiya gaya hai."}
      ]},
      { id: '2', title: "Democratic Constitution in South Africa", content: [
        { type: 'paragraph', text: "South Africa ke democratic constitution banane ka process, constitutional design ka ek important recent example hai."}
      ], subSections: [
          { id: '2.1', title: "a) The Struggle Against Apartheid", content: [
               { type: 'list', items: [
                  "<strong>Apartheid kya tha?</strong> Apartheid racial discrimination (nasli bhedbhav) ke us system ka naam tha jo sirf South Africa mein tha. Ise white Europeans ne desh par thopa tha.",
                  "<strong>Racial Division:</strong> Is system ne logon ko unke skin colour ke basis par categorize kiya.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Blacks:</strong> South Africa ke mool nivasi, jo population ka lagbhag teen-chauthai hissa the.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Whites:</strong> European settlers ka minority group jinhone khud ko local rulers ke roop mein sthapit kar liya tha.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Coloured:</strong> Mixed races ke logon ke liye use kiya jaane wala term.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Indians:</strong> Woh log jo India se migrate hue the.",
                  "<strong>System of Oppression:</strong> Apartheid system blacks ke liye khas taur par damankari tha.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Sabhi non-whites ko white rulers dwara neecha samjha jaata tha aur unhe vote dene ka अधिकार nahi tha.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Blacks ko white areas mein rehne se mana kiya gaya tha aur woh wahan sirf tabhi kaam kar sakte the jab unke paas permit ho.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Segregation (Algaav)</strong> ko sakhti se laagoo kiya gaya tha, jisme whites aur blacks ke liye alag trains, buses, schools, hospitals, beaches, aur yahan tak ki public toilets bhi the.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Blacks ko associations banane ya is bartaav ke khilaf protest karne ki anumati nahi thi."
              ]}
          ]},
          { id: '2.2', title: "b) Towards a New Constitution", content: [
               { type: 'list', items: [
                  "<strong>Resistance:</strong> 1950 se, blacks, coloureds, aur Indians ne protest marches aur strikes ke through apartheid system ke khilaf ladna shuru kar diya. <strong>African National Congress (ANC)</strong> woh main organization thi jisne is sangharsh ka netritva kiya.",
                  "<strong>Nelson Mandela:</strong> Is aandolan ke ek pramukh neta, Nelson Mandela, par white government ne deshdroh ka mukadma chalaya. Unhe, saat anya netaon ke saath, 1964 mein umar kaid ki saza sunai gayi. Mandela ne South Africa ki sabse darawani jail, Robben Island, mein 27 saal bitaye.",
                  "<strong>The End of Apartheid:</strong> Jaise-jaise protest aur sangharsh tez hue, white regime ne maana ki woh ab daman ke through control nahi banaaye rakh sakti.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Government ne apni policies badli, bhedbhavpurn kanoonon ko radd kiya aur political parties aur media par lage pratibandh hata diye.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• 28 saal jail mein rehne ke baad, Nelson Mandela ko riha kar diya gaya.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Aakhirkar, <strong>26 April 1994</strong> ki aadhi raat ko, South Africa aadhikarik taur par ek democracy ban gaya, aur ek multi-racial government ka gathan hua.",
                  "<strong>Building a New Nation:</strong> Is badlaav ke baad, black leaders ne whites ko unke dwara kiye gaye atyacharon ke liye maaf karne ka aahvan kiya. Lakshya ek naya South Africa banana tha jo sabhi races ke liye samanta, democratic values, social justice, aur human rights ke siddhanton par aadharit ho. Jis party ne daman ke through shasan kiya tha, woh aazadi ke sangharsh ka netritva karne wali party ke saath ek common constitution ka draft taiyar karne ke liye baithi.",
                  "<strong>A Model Constitution:</strong> Do saal ki behes ke baad, unhonne duniya ke behtareen samvidhano mein se ek banaya, jisne apne citizens ko kisi bhi desh mein uplabdh sabse extensive rights diye. Yeh is vichaar par aadharit tha ki kisi ko bhi bahar nahi kiya jaana chahiye aur sabhi ko samadhan ka hissa banna chahiye. South Africans ab apne desh ko ek <strong>'rainbow nation'</strong> kehte hain."
               ]}
          ]},
        ]
      },
      { id: '3', title: "Why Do We Need a Constitution?", content: [
          { type: 'paragraph', text: "South Africa ka example batata hai ki ek society ke liye constitution kyun zaroori hai. Ek constitution kai महत्वपूर्ण kaam karta hai:" },
          { type: 'list', items: [
              "<strong>Generates Trust and Coordination:</strong> Yeh ek degree of trust aur coordination sthapit karta hai jo alag-alag tarah ke logon ko ek saath rehne ke liye zaroori hai. Yeh isey likhit niyamon ka ek set banakar hasil karta hai jo desh ke sabhi logon dwara स्वीकार्य hote hain.",
              "<strong>Specifies Government Formation:</strong> Yeh batata hai ki government kaise banegi aur kiske paas kaun se decision lene ki power hogi.",
              "<strong>Limits Government Power:</strong> Yeh government ke powers par seemayein lagata hai aur citizens ke rights ko bhi batata hai. Yeh rules sunishchit karte hain ki chunav ke vijeta bhi aasaani se mool siddhanton ko nahi badal sakte.",
              "<strong>Expresses Aspirations:</strong> Yeh ek achhi society banane ke baare mein logon ki aakankshaon ko vyakt karta hai."
          ]},
          { type: 'paragraph', text: "<strong>Key Distinction:</strong> Sabhi desh jo democratic hain unke paas constitutions honge, lekin sabhi desh jinke paas constitutions hain, zaroori nahi ki woh democratic hon."}
      ]},
      { id: '4', title: "Making of the Indian Constitution", content: [
          { type: 'paragraph', text: "India ka Constitution behad mushkil paristhitiyon mein taiyar kiya gaya tha."}
        ], subSections: [
          { id: '4.1', title: "a) The Difficult Path to the Constitution", content: [
              { type: 'list', items: [
                  "<strong>Diversity and Partition:</strong> India jaise vishaal aur vividh desh ke liye samvidhan banana koi aasan kaam nahi tha. Desh ka janm dharmik matbhedon par aadharit vibhajan ke madhyam se hua, jo India aur Pakistan dono ke logon ke liye ek traumatic anubhav tha, jismein hinsa mein kam se kam das lakh log maare gaye the.",
                  "<strong>Integration of Princely States:</strong> British shasakon ne riyasaton ko yeh vikalp diya ki ve India ya Pakistan ke saath vilay kar lein, ya svatantra bane rahein. In riyasaton ka vilay ek kathin aur anishchit karya tha."
              ]}
          ]},
          { id: '4.2', title: "b) Advantages for the Makers", content: [
               { type: 'paragraph', text: "In chunautiyon ke bavajood, Indian Constitution ke nirmataon ke paas kai fayde the:" },
               { type: 'list', items: [
                  "<strong>Consensus from Freedom Struggle:</strong> South Africa ke vipreet, ek democratic India kaisa dikhna chahiye, is par ek sehmati aazadi ki ladai ke dauran hi viksit ho chuki thi.",
                  "<strong>Early Constitutional Drafts:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>1928</strong> mein, Motilal Nehru aur aath anya Congress netaon ne India ke liye ek samvidhan ka masौदा taiyar kiya.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Indian National Congress ke <strong>1931 ke Karachi adhiveshan mein prastaav</strong> ne bhi is baat par dhyaan kendrit kiya ki svatantra Bharat ka samvidhan kaisa dikhna chahiye.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Dono documents universal adult franchise, freedom aur equality ke adhikar, aur minorities ke adhikaron ki raksha jaise siddhanton ke prati pratibaddh the.",
                  "<strong>Familiarity with Institutions:</strong> Aupaniveshik yug ke legislative institutions ke bheetar kaam karne wale Bharatiyon dwara prapt anubhav bahut upyogi saabit hua. Kai sansthagat vivaran aur prakriyaen <strong>Government of India Act, 1935</strong> jaise aupaniveshik kanoonon se apnai gayi theen.",
                  "<strong>Global Inspiration:</strong> Neta French Revolution ke aadarshon, Britain mein sansadeeya loktantra ke abhyas, US mein Bill of Rights, aur Russia mein samajwadi kranti se prabhavit the. Halaanki, har kadam par, unhonne sawal kiya ki kya ye vichaar Bharat ke liye upyukt the aur unhen uske anusaar apnaya."
               ]}
          ]},
          { id: '4.3', title: "c) The Constituent Assembly", content: [
              { type: 'list', items: [
                  "<strong>Formation:</strong> Samvidhan ko chune hue pratinidhiyon ki ek sabha dwara taiyar kiya gaya tha jise <strong>Constituent Assembly</strong> kaha jaata hai.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Assembly ke liye chunav July 1946 mein hue the.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Desh ke vibhajan ke baad, Bharatiya samvidhan likhne wali Constituent Assembly mein <strong>299 sadasya</strong> the.",
                  "<strong>Timeline:</strong> Assembly ne <strong>26 November 1949</strong> ko Samvidhan ko apnaya, aur yeh <strong>26 January 1950</strong> ko laagoo hua. Is din ko har saal Bharat mein <strong>Gantantra Diwas (Republic Day)</strong> ke roop mein manaya jaata hai.",
                  "<strong>Legitimacy and Working Style:</strong> Saat dashakon se adhik samay ke baad bhi Samvidhan ki vaidhata kai kaaranon se hai:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Broad Consensus:</strong> Samvidhan apne sadasyon ke vicharon ke bajay apne samay ki ek vyaapak sehmati ko darshata hai.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Representation:</strong> Assembly ko Bharat ke logon ka pratinidhitv karne wala maana jaata tha. Halaanki universal adult franchise dwara nahi chuna gaya tha, ismein sabhi kshetron se sadasyon ka ek uchit bhaugolik hissa tha aur ismein vibhinn bhasha samoohon, jaatiyon, vargon, dharmon aur vyavsayon ke sadasya bhi shamil the.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Systematic Process:</strong> Constituent Assembly ne ek systematic, open, aur consensual tareeke se kaam kiya. <strong>Dr. B.R. Ambedkar</strong> ki adhyakshata mein ek Drafting Committee ne charcha ke liye ek draft taiyar kiya. Sadasyon ne <strong>teen saal mein 114 din</strong> tak vichaar-vimarsh kiya, jismein har shabd ko record kiya gaya aur jise <strong>'Constituent Assembly Debates'</strong> kaha jaata hai, usmein sanrakshit kiya gaya."
              ]}
          ]}
        ]
      },
      { id: '5', title: "Guiding Values of the Indian Constitution", subSections: [
          { id: '5.1', title: "a) The Preamble: The Soul of the Constitution", content: [
              { type: 'paragraph', text: "Samvidhan ek Preamble (Prastavana) se shuru hota hai, jo iske moolyaankan ka ek chhota sa bayaan hai. Ismein woh darshan hai jis par poora Samvidhan banaya gaya hai aur yeh sarkaar ke kisi bhi kanoon aur kaary ko jaanchne aur moolyaankan karne ke liye ek maanak ke roop mein kaam karta hai." },
              { type: 'paragraph', text: "Preamble mein shaamil mukhya moolya is prakaar hain:" },
              { type: 'list', items: [
                  "<strong>WE, THE PEOPLE OF INDIA:</strong> Iska matlab hai ki samvidhan logon dwara unke pratinidhiyon ke madhyam se banaya aur adhiniyamit kiya gaya hai, na ki kisi raja ya kisi bahari shakti dwara saumpa gaya hai.",
                  "<strong>SOVEREIGN:</strong> Logon ko aantrik aur bahari maamlon par nirnay lene ka sarvochch adhikar hai. Koi bhi bahari shakti Bharat sarkar ko aadesh nahi de sakti.",
                  "<strong>SOCIALIST:</strong> Sampatti samajik roop se utpann hoti hai aur ise samaj dwara samaan roop se saajha kiya jaana chahiye. Sarkar ko samajik-aarthik asamantaon ko kam karne ke liye bhoomi aur udyog ke swamitva ko viniyamit karna chahiye. (1976 mein 42nd Amendment dwara joda gaya).",
                  "<strong>SECULAR:</strong> Nagrikon ko kisi bhi dharm ka paalan karne ki poori svatantrata hai. Koi aadhikarik dharm nahi hai, aur sarkar sabhi dharmik vishvason aur prathaon ke saath samaan aadar se vyavahar karti hai. (1976 mein 42nd Amendment dwara joda gaya).",
                  "<strong>DEMOCRATIC:</strong> Ek aisi sarkar ka roop jahan log samaan raajneetik adhikaron ka aanand lete hain, apne shasakon ko chunte hain, aur unhen javabdeh thehrate hain.",
                  "<strong>REPUBLIC:</strong> Rajya ka pramukh ek chuna hua vyakti hota hai na ki vanshanugat pad.",
                  "<strong>JUSTICE:</strong> Nagrikon ke saath jaati, dharm aur ling ke aadhar par bhedbhav nahi kiya ja sakta. Samajik asamantaon ko kam karna hoga.",
                  "<strong>LIBERTY:</strong> Nagrikon par is baat mein koi anuchit pratibandh nahi hai ki ve kya sochte hain, ve apne vicharon ko kaise vyakt karna chahte hain, aur ve apne vicharon par kaaryvaahi kaise karna chahte hain.",
                  "<strong>EQUALITY:</strong> Kanoon ke samaksh sabhi samaan hain. Sarkar ko sabhi ke liye samaan avsar sunishchit karna chahiye.",
                  "<strong>FRATERNITY:</strong> Hum sabko aise vyavahar karna chahiye jaise ki hum ek hi parivar ke sadasya hain. Kisi ko bhi apne saathi nagrik ko neecha nahi samajhna chahiye."
              ]}
          ]}
      ]},
      { id: '6', title: "Institutional Design", content: [
          { type: 'paragraph', text: "Ek samvidhan sirf moolyon ka bayaan nahi hai; yeh mukhya roop se in moolyon ko sansthagat vyavasthaon mein shaamil karne ke baare mein hai." },
          { type: 'list', items: [
            "<strong>A Living Document:</strong> Bharatiya Samvidhan ek bahut lamba aur vistarit dastaavez hai. Nirmataon ne chaha ki yeh logon ki aakankshaon aur samajik parivartanon ke anusaar ho. Unhonne ise ek pavitra, sthir aur aparivartansheel kanoon ke roop mein nahi dekha, isliye unhonne samay ke saath parivartan shaamil karne ke pravdhan kiye. In parivartanon ko <strong>constitutional amendments</strong> ke roop mein jaana jaata hai.",
            "<strong>Framework of Governance:</strong> Samvidhan desh par shasan karne ke liye vyaktiyon ko chunne ki ek prakriya nirdharit karta hai. Yeh paribhashit karta hai ki kiske paas kitni shakti hogi kaun se nirnay lene ke liye. Yeh yah bhi seemaen lagata hai ki sarkar kya kar sakti hai, nagrik ko kuch aise adhikar pradan karke jinhe ullanghan nahi kiya ja sakta."
          ]}
      ]},
      { id: '7', title: "Glossary of Key Terms", content: [
        { type: 'list', items: [
            "<strong>Apartheid:</strong> 1948 aur 1989 ke beech South Africa ki sarkar dwara apnai gayi nasli algaav aur ashveton ke saath durvyavahar ki aadhikarik neeti.",
            "<strong>Clause:</strong> Kisi dastaavez ka ek alag hissa.",
            "<strong>Constituent Assembly:</strong> Logon ke pratinidhiyon ki ek sabha jo desh ke liye samvidhan likhti hai.",
            "<strong>Constitution:</strong> Desh ka sarvochch kanoon, jismein raajneeti aur samaj ko shasit karne wale maulik niyam hote hain.",
            "<strong>Constitutional amendment:</strong> Desh mein sarvochch vidhayi nikay dwara samvidhan mein kiya gaya badlaav.",
            "<strong>Draft:</strong> Kisi kanooni dastaavez ka prarambhik sanskaran.",
            "<strong>Philosophy:</strong> Kisi ke vicharon aur karyon ke neeche sabse maulik siddhant.",
            "<strong>Preamble:</strong> Samvidhan mein ek prarambhik bayaan jo samvidhan ke kaaranon aur margdarshak moolyon ko batata hai.",
            "<strong>Treason:</strong> Us rajya ki sarkar ko ukhad fekne ka prayas karne ka apradh jiske prati apradhi ki nishtha hai.",
            "<strong>Tryst:</strong> Ek baithak ya milne ki jagah jis par sehmati hui ho."
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
  const [theme, setTheme] = React.useState('royalPurple');
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
      "@id": "https://vardaanlearning.com/notes/class-9-constitutional-design" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088015/indian_constitution_book.jpg",  // A representative image
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
        <title>{`${currentContent.chapterTitle} - Class 9 CBSE Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 9, CBSE, Civics, Constitutional Design, Indian Constitution, South Africa Apartheid, Preamble, Vardaan Learning Institute, Notes" />
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
