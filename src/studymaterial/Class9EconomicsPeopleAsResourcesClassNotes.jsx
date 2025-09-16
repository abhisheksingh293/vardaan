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
    chapterTitle: "People as Resource",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE Economics notes on People as Resource. Covers human capital, economic activities, quality of population, unemployment, and key concepts.",
    sections: [
      { id: '1', title: "Overview: People as a Resource", content: [
          { type: 'paragraph', text: "The chapter \"People as Resource\" explains that a country's population can be an <strong>asset</strong> for the economy, not just a liability. It's a way of looking at the working people in terms of their existing productive skills and abilities." },
          { type: 'list', items: [
              "<strong>Human Resource:</strong> This refers to the population itself, which, like other resources, contributes to the economy. When we view the population from a productive angle, it highlights its ability to contribute to the Gross National Product (GNP). This positive view is often missed when focusing only on the challenges of a large population, such as providing food and health facilities.",
              "<strong>Human Capital:</strong> Population becomes <strong>human capital</strong> when investments are made in education, training, and medical care. It is the stock of skill and productive knowledge that people possess.",
              "<strong>Human Capital Formation:</strong> When the existing human resource is developed further by becoming more educated and healthy, it's called 'human capital formation'. This process adds to the country's productive power, similar to how 'physical capital formation' (like building machinery) does."
          ]}
      ]},
      { id: '2', title: "Investment in Human Capital", content: [
          { type: 'paragraph', text: "Investing in people through education, training, and medical care yields high returns, just like investing in physical capital (land, machinery)." },
          { type: 'list', items: [
              "<strong>Direct Returns:</strong> These investments lead to higher incomes for individuals because more educated, better-trained, and healthier people are more productive. A child who receives good education and healthcare can yield high returns in the future through better earnings and contributions to society.",
              "<strong>Indirect Returns to Society:</strong> The benefits of a more educated or healthier population extend to everyone, not just those who directly received education or healthcare.",
              "<strong>Superiority of Human Capital:</strong> Human capital is superior to other resources like land and physical capital because the human resource can make use of land and capital. Land and capital cannot become useful on their own.",
              "<strong>Real-World Examples:</strong>",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>India's Green Revolution:</strong> This is a powerful example of how greater knowledge (improved production technologies) dramatically increased the productivity of land.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>India's IT Revolution:</strong> This shows how human capital has become more important than material, plants, and machinery.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Japan:</strong> Countries like Japan have become rich and developed by investing heavily in human resources, especially in education and health, despite having no significant natural resources. They import the natural resources they need and use their skilled population to make efficient use of them."
          ]}
      ]},
      { id: '3', title: "Case Studies: Sakal and Vilas", subSections: [
          { id: '3.1', title: "a) The Story of Sakal (The Virtuous Cycle)", content: [
               { type: 'list', items: [
                  "<strong>Background:</strong> Sakal, a 12-year-old boy, lived in Semapur village. His parents were eager to educate him and enrolled him in the village school.",
                  "<strong>Education:</strong> After completing his higher secondary exam, his father took a loan for him to study a vocational course in computers. Sakal was a good student and completed his course with enthusiasm.",
                  "<strong>Outcome:</strong> He got a job in a private firm, designed new software that increased sales, and earned a promotion. His years of education improved the quality of his labor, which enhanced his productivity and contributed to the economy's growth."
              ]}
          ]},
          { id: '3.2', title: "b) The Story of Vilas (The Vicious Cycle)", content: [
               { type: 'list', items: [
                  "<strong>Background:</strong> Vilas was an 11-year-old boy in the same village. His father, a fisherman, passed away when he was two. His mother sold fish to feed the family, earning only a meager income.",
                  "<strong>Lack of Investment:</strong> Vilas became a patient of arthritis, and his mother couldn't afford a doctor. He did not go to school and was not interested in studies.",
                  "<strong>Outcome:</strong> With no education or healthcare, Vilas was forced to do the same work as his mother—selling fish for a meager income."
               ]}
          ]},
           { id: '3.3', title: "c) Virtuous vs. Vicious Cycles", content: [
               { type: 'list', items: [
                  "<strong>Virtuous Cycle:</strong> Educated parents understand the importance of education, nutrition, and hygiene. They invest more in their children's education and health, creating a positive, self-reinforcing cycle.",
                  "<strong>Vicious Cycle:</strong> In contrast, disadvantaged parents, who are themselves uneducated, may keep their children in a similarly disadvantaged state, creating a negative cycle."
              ]}
          ]},
        ]
      },
      { id: '4', title: "Economic Activities by Men and Women", subSections: [
          { id: '4.1', title: "a) Three Sectors of the Economy", content: [
               { type: 'list', items: [
                  "<strong>Primary Sector:</strong> Includes activities like <strong>agriculture, forestry, animal husbandry, fishing, poultry farming, mining, and quarrying</strong>.",
                  "<strong>Secondary Sector:</strong> Includes <strong>manufacturing</strong>.",
                  "<strong>Tertiary Sector:</strong> Includes <strong>trade, transport, communication, banking, education, health, tourism, services, and insurance</strong>."
               ]}
          ]},
          { id: '4.2', title: "b) Economic and Non-Economic Activities", content: [
               { type: 'list', items: [
                  "<strong>Economic Activities:</strong> These activities add value to the national income. They are divided into two parts:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Market Activities:</strong> Performed for pay or profit, such as the production of goods or services, including government service.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Non-Market Activities:</strong> Production for self-consumption, like consuming and processing primary products or creating one's own fixed assets.",
                  "<strong>Division of Labour:</strong> Due to historical and cultural reasons, there's often a division of labor in families where women handle domestic chores and men work in the fields. The household work done by women is <strong>not recognized in the National Income</strong> because they are not paid for it.",
                  "<strong>Women in the Labour Market:</strong> A majority of women have meager education and low skill formation, leading them to be paid less than men. They often work in sectors with low job security, irregular income, and an absence of benefits like maternity leave or childcare. However, women with high education and skills are paid on par with men, with teaching and medicine being popular fields."
               ]}
          ]},
        ]
      },
      { id: '5', title: "Quality of Population", content: [
          { type: 'paragraph', text: "The quality of a population determines the country's growth rate and depends on three key factors." }
        ], 
        subSections: [
          { id: '5.1', title: "a) Education 📚", content: [
               { type: 'paragraph', text: "Education is a crucial input for individual and societal growth. It enhances national income, cultural richness, and the efficiency of governance." },
               { type: 'list', items: [
                  "<strong>Government Initiatives:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Provisions for universal access, retention, and quality in elementary education, with an emphasis on girls.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Establishment of <strong>Navodaya Vidyalaya</strong> in each district.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Development of vocational streams to equip high school students with job-related skills.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Samagra Shiksha</strong> scheme aims to improve school effectiveness from pre-school to Class XII for equitable learning outcomes.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Mid-day meal scheme</strong> to encourage attendance and improve children's nutritional status.",
                  "<strong>Expenditure:</strong> The government's plan outlay on education increased from ₹151 crore in the first plan to ₹99,300 crore in 2020-21. As a percentage of GDP, it rose from 0.64% in 1951-52 to around 3% in recent years.",
                  "<strong>Literacy Rates:</strong> Literacy rates have increased from 18% in 1951 to 85% in 2018. However, there are significant differences: literacy among males is nearly 16.1% higher than females, and it's higher in urban areas than rural areas. Literacy rates also vary by state, from 94% in Kerala to 62% in Bihar (as per the 2011 census)."
               ]}
          ]},
          { id: '5.2', title: "b) Health ⚕️", content: [
              { type: 'paragraph', text: "A person's health is essential for realizing their potential and fighting illness. An unhealthy person cannot be an efficient worker. Improving the health status of the population is a national priority." },
              { type: 'list', items: [
                  "<strong>Health Infrastructure:</strong> Over the last five decades, India has built a vast health infrastructure and developed manpower in the primary, secondary, and tertiary sectors.",
                  "<strong>Key Health Indicators:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Life Expectancy:</strong> Increased to over 67.2 years in 2021.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Infant Mortality Rate (IMR):</strong> The death of a child below one year of age. It has come down from 147 in 1951 to 28 in 2020.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Crude Birth Rate:</strong> The number of babies born for every 1,000 people in a period. It dropped to 20.0 in 2020.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Death Rate:</strong> The number of people per 1,000 who die in a period. It dropped to 6.0 in 2020."
              ]}
          ]},
        ]
      },
      { id: '6', title: "Unemployment", content: [
          { type: 'paragraph', text: "Unemployment exists when people who are willing to work at the going wages cannot find jobs." },
          { type: 'list', items: [
              "<strong>Workforce Population:</strong> Includes people in the age group of <strong>15 to 59 years</strong>. Children and people not willing to work for payment are not counted as unemployed."
          ]}
        ],
        subSections: [
          { id: '6.1', title: "a) Types of Unemployment in India", content: [
              { type: 'paragraph', text: "The nature of unemployment differs between rural and urban areas." },
              { type: 'list', items: [
                  "<strong>Rural Unemployment:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Seasonal Unemployment:</strong> Occurs when people are unable to find jobs during certain months of the year, a common problem for those dependent on agriculture. There is a lot of work during sowing and harvesting but not in other months.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Disguised Unemployment:</strong> Happens when people appear to be employed, but their contribution is not needed. For example, if a field requires 5 people but 8 family members are working on it, the extra 3 people are in disguised unemployment. Removing them would not reduce the field's productivity.",
                  "<strong>Urban Unemployment:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Educated Unemployment:</strong> A common phenomenon where youth with matriculation, graduation, and post-graduation degrees are unable to find jobs. There is often a surplus of manpower in some categories while a shortage in others that require specific technical skills."
              ]}
          ]},
          { id: '6.2', title: "b) Impact of Unemployment", content: [
              { type: 'list', items: [
                  "<strong>Economic Impact:</strong> It leads to a wastage of manpower resources, turning assets into liabilities. It increases the economic overload, as the unemployed depend on the working population. It is an indicator of a depressed economy.",
                  "<strong>Social Impact:</strong> It creates a feeling of hopelessness and despair among the youth. The quality of life for individuals and society is adversely affected. Families may suffer from a decline in health status and withdraw children from the school system."
              ]}
          ]}
        ]
      },
      { id: '7', title: "Story of a Village: The Power of Human Capital", content: [
          { type: 'paragraph', text: "This story shows how a village can transform itself by investing in human capital." },
          { type: 'list', items: [
              "<strong>The Beginning:</strong> A self-sufficient village where each family produced enough to meet its own needs for food, clothing, and education.",
              "<strong>The Transformation:</strong>",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Agro-Engineer:</strong> A family sent their son to an agriculture college. He returned as an agro-engineer and designed an improved plough that increased wheat yields, creating a new job. The village sold the surplus produce for a profit.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Teacher:</strong> Inspired by this, the villagers requested the panchayat to open a school. A teacher was recruited, and all children started getting an education.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Tailor:</strong> A family trained their daughter in tailoring. She started stitching clothes for the village, creating another new job. This also saved farmers time, allowing them to be more productive in their fields.",
              "<strong>The Outcome:</strong> The village, which initially had no job opportunities, evolved into a prosperous place with many jobs like teacher, tailor, and agro-engineer, all because of rising levels of human capital."
          ]}
      ]}
    ]
  },
  hi: { // Hinglish Version
    chapterTitle: "People as Resource",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE Economics ke liye People as Resource par notes. Human capital, economic activities, aur unemployment simple Hinglish mein.",
    sections: [
      { id: '1', title: "Overview: People as a Resource", content: [
          { type: 'paragraph', text: "Chapter \"People as Resource\" yeh samjhata hai ki ek desh ki population economy ke liye ek <strong>asset</strong> (sampatti) ho sakti hai, na ki sirf ek <strong>liability</strong> (bojh). Yeh kaam karne wale logon ko unki maujooda productive skills aur abilities ke hisab se dekhne ka ek tareeka hai." },
          { type: 'list', items: [
              "<strong>Human Resource:</strong> Iska matlab population khud hai, jo doosre resources ki tarah economy mein yogdaan deti hai. Jab hum population ko productive angle se dekhte hain, to yeh Gross National Product (GNP) mein contribute karne ki uski kshamta ko highlight karta hai. Yeh positive view aksar tab miss ho jaata hai jab hum sirf badi population ki chunautiyon par focus karte hain, jaise khana aur health facilities provide karna.",
              "<strong>Human Capital:</strong> Population tab <strong>human capital</strong> ban jaati hai jab usmein education, training, aur medical care mein invest kiya jaata hai. Yeh logon ke paas skill aur productive knowledge ka stock hota hai.",
              "<strong>Human Capital Formation:</strong> Jab maujooda human resource ko zyada padha-likha aur healthy banakar aur develop kiya jaata hai, to ise 'human capital formation' kehte hain. Yeh process desh ki productive power ko badhata hai, bilkul waise hi jaise 'physical capital formation' (jaise machinery banana) karta hai."
          ]}
      ]},
      { id: '2', title: "Investment in Human Capital", content: [
          { type: 'paragraph', text: "Logon mein education, training, aur medical care ke zariye invest karne se high returns milte hain, bilkul physical capital (land, machinery) mein invest karne ki tarah." },
          { type: 'list', items: [
              "<strong>Direct Returns:</strong> Yeh investments individuals ke liye zyada income laate hain kyunki zyada padhe-likhe, behtar trained, aur swasth log zyada productive hote hain. Ek bachcha jise achhi education aur healthcare milti hai, woh future mein behtar earnings aur society mein yogdaan ke zariye high returns de sakta hai.",
              "<strong>Indirect Returns to Society:</strong> Ek zyada padhi-likhi ya swasth population ke fayde sab tak pahunchte hain, na ki sirf un tak jinhone direct education ya healthcare paayi hai.",
              "<strong>Superiority of Human Capital:</strong> Human capital doosre resources jaise land aur physical capital se behtar hai kyunki human resource hi land aur capital ka istemal kar sakta hai. Land aur capital apne aap upyogi nahi ban sakte.",
              "<strong>Real-World Examples:</strong>",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>India's Green Revolution:</strong> Yeh ek shaktishali example hai ki kaise behtar gyan (improved production technologies) ne zameen ki productivity ko naatakeey roop se badha diya.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>India's IT Revolution:</strong> Yeh dikhata hai ki kaise human capital material, plants, aur machinery se zyada important ho gaya hai.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Japan:</strong> Japan jaise desh human resources, khaaskar education aur health mein bhaari invest karke ameer aur viksit bane hain, jabki unke paas koi khaas natural resources nahi hain. Ve apni zaroorat ke natural resources import karte hain aur unka kushal istemal karne ke liye apni skilled population ka upyog karte hain."
          ]}
      ]},
      { id: '3', title: "Case Studies: Sakal and Vilas", subSections: [
          { id: '3.1', title: "a) The Story of Sakal (The Virtuous Cycle)", content: [
               { type: 'list', items: [
                  "<strong>Background:</strong> Sakal, ek 12 saal ka ladka, Semapur gaon mein rehta tha. Uske mata-pita use padhane ke liye utsuk the aur unhone use gaon ke school mein dakhil karwaya.",
                  "<strong>Education:</strong> Higher secondary exam poora karne ke baad, uske pita ne uske liye computers mein vocational course karne ke liye loan liya. Sakal ek achha student tha aur usne apna course utsaah se poora kiya.",
                  "<strong>Outcome:</strong> Use ek private firm mein naukri mil gayi, usne naya software design kiya jisse sales badh gayi, aur use promotion mila. Uski saalon ki padhai ne uske kaam ki quality ko behtar banaya, jisse uski productivity badhi aur economy ki growth mein yogdaan hua."
              ]}
          ]},
          { id: '3.2', title: "b) The Story of Vilas (The Vicious Cycle)", content: [
               { type: 'list', items: [
                  "<strong>Background:</strong> Vilas usi gaon mein ek 11 saal ka ladka tha. Uske pita, ek machhuare, uske do saal ke hone par guzar gaye. Uski maa parivar ka pet paalne ke liye machhli bechti thi, jisse bahut kam aamdani hoti thi.",
                  "<strong>Lack of Investment:</strong> Vilas arthritis ka mareez ban gaya, aur uski maa doctor ka kharcha nahi utha sakti thi. Woh school nahi gaya aur padhai mein uski koi ruchi nahi thi.",
                  "<strong>Outcome:</strong> Bina education ya healthcare ke, Vilas ko bhi apni maa wala kaam karne ke liye majboor hona pada—kam aamdani ke liye machhli bechna."
               ]}
          ]},
           { id: '3.3', title: "c) Virtuous vs. Vicious Cycles", content: [
               { type: 'list', items: [
                  "<strong>Virtuous Cycle:</strong> Padhe-likhe mata-pita education, nutrition, aur hygiene ki ahmiyat ko samajhte hain. Ve apne bachchon ki education aur health mein zyada invest karte hain, jisse ek positive, self-reinforcing cycle banta hai.",
                  "<strong>Vicious Cycle:</strong> Iske vipreet, vanchit mata-pita, jo khud अशिक्षित hain, apne bachchon ko bhi usi vanchit sthiti mein rakh sakte hain, jisse ek negative cycle banta hai."
              ]}
          ]},
        ]
      },
      { id: '4', title: "Economic Activities by Men and Women", subSections: [
          { id: '4.1', title: "a) Three Sectors of the Economy", content: [
               { type: 'list', items: [
                  "<strong>Primary Sector:</strong> Ismein <strong>agriculture, forestry, animal husbandry, fishing, poultry farming, mining, and quarrying</strong> jaisi activities shamil hain.",
                  "<strong>Secondary Sector:</strong> Ismein <strong>manufacturing</strong> shamil hai.",
                  "<strong>Tertiary Sector:</strong> Ismein <strong>trade, transport, communication, banking, education, health, tourism, services, and insurance</strong> shamil hai."
               ]}
          ]},
          { id: '4.2', title: "b) Economic and Non-Economic Activities", content: [
               { type: 'list', items: [
                  "<strong>Economic Activities:</strong> Yeh activities national income mein value add karti hain. Inhe do hisson mein baanta gaya hai:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Market Activities:</strong> Pagar ya munafey ke liye ki jaati hain, jaise saaman ya services ka production, jismein sarkari seva bhi shamil hai.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Non-Market Activities:</strong> Khud ke upbhog ke liye production, jaise primary products ko consume karna aur process karna ya apne fixed assets banana.",
                  "<strong>Division of Labour:</strong> Aitihaasik aur saanskrtik kaaranon se, parivaron mein aksar kaam ka bantwara hota hai jahan mahilayen gharelu kaam sambhalti hain aur purush kheton mein kaam karte hain. Mahilaon dwara kiya gaya gharelu kaam <strong>National Income mein nahi gina jaata</strong> kyunki unhe iske liye pay nahi kiya jaata.",
                  "<strong>Women in the Labour Market:</strong> Zyadaatar mahilaon ke paas bahut kam education aur low skill formation hoti hai, jiske kaaran unhe purushon se kam vetan milta hai. Ve aksar aise sectors mein kaam karti hain jahan job security kam, income aniyamit, aur maternity leave ya childcare jaisi suvidhaon ka abhaav hota hai. Haalanki, uchch shiksha aur skills wali mahilaon ko purushon ke barabar vetan milta hai, jismein teaching aur medicine lokpriya kshetra hain."
               ]}
          ]},
        ]
      },
      { id: '5', title: "Quality of Population", content: [
          { type: 'paragraph', text: "Ek population ki quality desh ki growth rate tay karti hai aur yeh teen mukhya kaarakon par nirbhar karti hai." }
        ], 
        subSections: [
          { id: '5.1', title: "a) Education 📚", content: [
               { type: 'paragraph', text: "Education vyaktigat aur saamaajik vikas ke liye ek mahatvapurna input hai. Yeh rashtriya aay, saanskrtik samrddhi, aur shaasan ki kushalta ko badhaati hai." },
               { type: 'list', items: [
                  "<strong>Government Initiatives:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Praarambhik shiksha mein universal access, retention, aur quality ke liye pravdhan, jismein ladkiyon par vishesh zor diya gaya hai.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Har jile mein <strong>Navodaya Vidyalaya</strong> ki sthaapna.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• High school ke chhaatron ko naukri se sambandhit skills se lais karne ke liye vocational streams ka vikas.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Samagra Shiksha</strong> scheme ka lakshya pre-school se Class XII tak school prabhavsheelta mein sudhaar karna hai taaki sabko samaan learning outcomes milen.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Mid-day meal scheme</strong> upasthiti ko badhaava dene aur bachchon ke poshan star mein sudhaar karne ke liye.",
                  "<strong>Expenditure:</strong> Shiksha par sarkaar ka plan outlay pehli yojana mein ₹151 crore se badhkar 2020-21 mein ₹99,300 crore ho gaya. GDP ke pratishat ke roop mein, yeh 1951-52 mein 0.64% se badhkar haal ke varshon mein lagbhag 3% ho gaya hai.",
                  "<strong>Literacy Rates:</strong> Saaksharata dar 1951 mein 18% se badhkar 2018 mein 85% ho gayi hai. Haalanki, ismein kaafi antar hai: purushon mein saaksharata mahilaon se lagbhag 16.1% adhik hai, aur yeh shahari kshetron mein grameen kshetron ki tulna mein adhik hai. Saaksharata dar rajyon ke anusaar bhi alag-alag hai, Kerala mein 94% se lekar Bihar mein 62% tak (2011 ki janganana ke anusaar)."
               ]}
          ]},
          { id: '5.2', title: "b) Health ⚕️", content: [
              { type: 'paragraph', text: "Ek vyakti ka swasthya uski kshamata ko saakaar karne aur beemari se ladne ke liye avashyak hai. Ek aswasth vyakti ek kushal karmachari nahi ho sakta. Janasankhya ke swasthya star mein sudhaar karna ek rashtriya prathmikta hai." },
              { type: 'list', items: [
                  "<strong>Health Infrastructure:</strong> Pichhle paanch dashakon mein, Bharat ne ek vishaal swasthya adhaar sanrachna ka nirmaan kiya hai aur prathmik, madhyamik, aur tritiyak kshetron mein manpower viksit kiya hai.",
                  "<strong>Key Health Indicators:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Life Expectancy:</strong> 2021 mein 67.2 varsh se adhik ho gayi.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Infant Mortality Rate (IMR):</strong> Ek varsh se kam umr ke bachche ki mrtyu. Yeh 1951 mein 147 se ghatkar 2020 mein 28 ho gayi hai.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Crude Birth Rate:</strong> Ek avadhi mein pratyek 1,000 logon par janme bachchon ki sankhya. Yeh 2020 mein 20.0 tak gir gayi.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Death Rate:</strong> Ek avadhi mein pratyek 1,000 logon mein marne walon ki sankhya. Yeh 2020 mein 6.0 tak gir gayi."
              ]}
          ]},
        ]
      },
      { id: '6', title: "Unemployment", content: [
          { type: 'paragraph', text: "Berojgari tab hoti hai jab log jo chal rahe vetan par kaam karne ke ichchhuk hain, unhe naukri nahi mil paati." },
          { type: 'list', items: [
              "<strong>Workforce Population:</strong> Ismein <strong>15 se 59 varsh</strong> ke aayu varg ke log shamil hain. Bachchon aur jo log bhugtaan ke liye kaam karne ke ichchhuk nahi hain, unhe berojgar nahi gina jaata."
          ]}
        ],
        subSections: [
          { id: '6.1', title: "a) Types of Unemployment in India", content: [
              { type: 'paragraph', text: "Grameen aur shahari kshetron mein berojgari ki prakrti alag-alag hoti hai." },
              { type: 'list', items: [
                  "<strong>Rural Unemployment:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Seasonal Unemployment:</strong> Tab hota hai jab log saal ke kuch mahino ke dauraan naukri nahi dhoondh paate, jo krshi par nirbhar logon ke liye ek aam samasya hai. Buvai aur katai ke dauraan bahut kaam hota hai lekin anya mahino mein nahi.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Disguised Unemployment:</strong> Tab hota hai jab log niyojit dikhte hain, lekin unke yogdaan ki avashyakta nahi hoti. Udaharan ke liye, yadi ek khet mein 5 logon ki avashyakta hai lekin 8 parivar ke sadasya us par kaam kar rahe hain, to atirikt 3 log prachchhann berojgari mein hain. Unhe hatane se khet ki utpaadakata kam nahi hogi.",
                  "<strong>Urban Unemployment:</strong>",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Educated Unemployment:</strong> Ek aam ghatna jahan matriculation, graduation, aur post-graduation degree wale yuva naukri nahi dhoondh paate. Aksar kuch shreniyon mein manpower ki adhikta hoti hai jabki anya mein kami hoti hai jinke liye vishesh takneeki kaushal ki avashyakta hoti hai."
              ]}
          ]},
          { id: '6.2', title: "b) Impact of Unemployment", content: [
              { type: 'list', items: [
                  "<strong>Economic Impact:</strong> Isse manpower sansaadhanon ki barbaadi hoti hai, sampatti ko daayitvon mein badal diya jaata hai. Yeh aarthik boj ko badhaata hai, kyunki berojgar kaamkaaji aabaadi par nirbhar hote hain. Yeh ek udas arthavyavastha ka sanketak hai.",
                  "<strong>Social Impact:</strong> Yeh yuvaon mein niraasha aur hataasha ki bhaavana paida karta hai. Vyaktiyon aur samaaj ke jeevan ki gunavatta par pratikool prabhaav padta hai. Parivaar swasthya sthiti mein giraavat se peedit ho sakte hain aur bachchon ko school pranaali se nikaal sakte hain."
              ]}
          ]}
        ]
      },
      { id: '7', title: "Story of a Village: The Power of Human Capital", content: [
          { type: 'paragraph', text: "Yeh kahani dikhati hai ki kaise ek gaanv maanav poonji mein nivesh karke khud ko badal sakta hai." },
          { type: 'list', items: [
              "<strong>The Beginning:</strong> Ek aatmanirbhar gaanv jahan har parivaar bhojan, kapde, aur shiksha ke liye apni zarooraton ko poora karne ke liye paryaapt utpaadan karta tha.",
              "<strong>The Transformation:</strong>",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Agro-Engineer:</strong> Ek parivaar ne apne bete ko krshi college bheja. Vah ek krshi-abhiyanta ke roop mein lauta aur ek behtar hal design kiya jisse gehoon ki paidawaar badh gayi, ek nayi naukri paida hui. Gaanv ne atirikt upaj ko laabh ke liye becha.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Teacher:</strong> Isse prerit hokar, gaanv vaalon ne panchayat se ek school kholne ka anurodh kiya. Ek shikshak ki bharti ki gayi, aur sabhi bachchon ne shiksha praapt karna shuru kar diya.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Tailor:</strong> Ek parivaar ne apni beti ko silai mein prashikshit kiya. Usne gaanv ke liye kapde silna shuru kar diya, ek aur nayi naukri paida hui. Isse kisaanon ka samay bhi bacha, jisse ve apne kheton mein adhik utpaadak ho sake.",
              "<strong>The Outcome:</strong> Gaanv, jismein shuru mein koi naukri ke avsar nahi the, shikshak, darji, aur krshi-abhiyanta jaise kai naukriyon ke saath ek samrddh sthaan mein viksit hua, yeh sab maanav poonji ke badhte staron ke kaaran hua."
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
      "@id": "https://vardaanlearning.com/notes/class-9-people-as-resource" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088015/indian_students_learning.jpg",  // A representative image
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
        <meta name="keywords" content="Class 9, CBSE, Economics, People as Resource, Human Capital, Unemployment, Vardaan Learning Institute, Notes" />
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
