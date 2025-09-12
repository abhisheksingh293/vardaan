import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 1: Development",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "What is Development?",
        content: [
          { type: 'paragraph', text: 'Development, or progress, is an idea that has always been with us. It\'s about our desires and hopes for how we want to live and what we want our country to be like.' },
          { type: 'heading', text: 'Thinking about Development:'},
          { type: 'paragraph', text: 'Development involves asking important questions: What are the essential things we need in life? Can life be better for everyone? How can people live together in a better way? Can there be more equality? The main goal is to think about these questions and find ways to achieve these goals.'},
          { type: 'infoBox', color: 'blue', content: '<strong>A Complex Task:</strong> Understanding development is not simple. Our present life is influenced by our past, so we must be aware of history to desire change. Achieving our hopes for development is possible through a democratic political process.'}
        ]
      },
      {
        id: '2',
        title: "What Development Promises: Different People, Different Goals",
        content: [
          { type: 'paragraph', text: 'Different people can have very different ideas about what development means to them. A person\'s goals for development depend on their life situation.' },
          { type: 'paragraph', text: '<strong>Different Aspirations:</strong> Every person or group seeks things that are most important to them and can fulfill their desires.' },
          { type: 'list', items: [
              '<strong>Example 1:</strong> For a landless rural laborer, development might mean more days of work, better wages, good local schools for their children, and no social discrimination.',
              '<strong>Example 2:</strong> For a prosperous farmer from Punjab, development might mean a high family income, higher prices for their crops, cheap labor, and the ability to send their children to study abroad.',
          ]},
          { type: 'infoBox', color: 'orange', content: '<strong>Conflicting Goals:</strong> Sometimes, the development goals of one person or group can be in direct conflict with the goals of another. What is development for one may not be development for another. It might even be harmful.<br/><br/><strong>Example:</strong> An industrialist might want more dams to generate more electricity. This is their idea of development. However, building a large dam might flood the land and disrupt the lives of tribal people living there. For them, this is not development.'}
        ]
      },
      {
        id: '3',
        title: "Income and Other Goals",
        content: [
          { type: 'paragraph', text: 'While getting more income is a common and important goal for most people, it\'s not the only thing they seek.' },
          { type: 'paragraph', text: '<strong>Beyond Income:</strong> People also want non-material things. These are often just as important, or even more important, than money. These non-material goals include: Equal treatment, Freedom, Security, Respect from others, and Friendship.' },
          { type: 'paragraph', text: '<strong>The Quality of Life:</strong> The quality of our lives depends on both material things (like money) and non-material things (like respect and freedom). Material goods alone are not all we need to live a good life.' },
          { type: 'infoBox', color: 'green', content: '<strong>A Mix of Goals:</strong> For development, people look at a combination of goals. A safe and secure environment, job security, and respect are crucial for a person\'s well-being.'}
        ]
      },
      {
        id: '4',
        title: "National Development",
        content: [
          { type: 'paragraph', text: 'Just as individuals have different goals, their ideas of what national development should be are also likely to be different and even conflicting.' },
          { type: 'paragraph', text: '<strong>Thinking About the Nation:</strong> National development involves thinking about important questions for the country as a whole: What is a fair and just path for everyone? Is there a better way of doing things? Will a particular idea benefit a large number of people or only a small group?' }
        ]
      },
      {
        id: '5',
        title: "How to Compare Different Countries or States?",
        content: [
          { type: 'paragraph', text: 'To understand development better, we often compare different countries or states.' },
          { type: 'heading', text: 'Per Capita Income:'},
          { type: 'paragraph', text: 'For comparing countries, <strong>income</strong> is considered one of the most important attributes. We use <strong>average income</strong>, which is the total income of the country divided by its total population. This is also known as <strong>per capita income</strong>.' },
          { type: 'paragraph', text: 'The World Bank uses per capita income to classify countries as high-income, middle-income, or low-income.'},
          { type: 'infoBox', color: 'blue', content: '<strong>Limitations of Average Income:</strong> While averages are useful for comparison, they can also hide disparities (inequalities). Average income does not tell us how income is distributed among the people. A country might have a high average income, but most people could be poor while a few are extremely rich.'}
        ]
      },
      {
        id: '6',
        title: "Income and Other Criteria",
        content: [
          { type: 'paragraph', text: 'Income by itself is not a completely adequate indicator of development. We must look at other criteria as well.' },
          { type: 'heading', text: 'A Case Study: Haryana, Kerala, and Bihar'},
          { type: 'paragraph', text: '<strong>Income:</strong> Haryana has the highest per capita income, while Bihar has the lowest.'},
          { type: 'paragraph', text: '<strong>Other Important Indicators:</strong> When we look at health and education data, the story changes.'},
          { type: 'list', items: [
              '<strong>Infant Mortality Rate (IMR):</strong> Kerala\'s IMR is significantly lower than Haryana\'s.',
              '<strong>Literacy Rate:</strong> Kerala has a much higher literacy rate than both Haryana and Bihar.',
              '<strong>Net Attendance Ratio:</strong> Kerala performs better in school attendance as well.'
          ]},
          { type: 'infoBox', color: 'orange', content: '<strong>Conclusion:</strong> This example clearly shows that although Haryana has a higher average income, it lags behind Kerala in crucial areas like health and education.'}
        ]
      },
      {
        id: '7',
        title: "Public Facilities",
        content: [
          { type: 'paragraph', text: 'Why does Kerala have better health and education outcomes? The answer lies in <strong>Public Facilities</strong>.' },
          { type: 'paragraph', text: '<strong>Money Can\'t Buy Everything:</strong> Money in your pocket cannot buy all the goods and services you need to live well, such as a pollution-free environment or protection from infectious diseases.' },
          { type: 'infoBox', color: 'green', content: '<strong>The Importance of Collective Services:</strong> The best and cheapest way to provide many important things in life is to provide them collectively.'},
          { type: 'paragraph', text: '<strong>Kerala\'s Success:</strong> Kerala has a low Infant Mortality Rate because it has made adequate provisions for basic health and educational facilities that are available to everyone.'}
        ]
      },
      {
        id: '8',
        title: "Human Development Report",
        content: [
          { type: 'paragraph', text: 'Health and education are crucial for development. The Human Development Report (HDR) provides a more holistic measure.' },
          { type: 'infoBox', color: 'blue', content: '<strong>Human Development Index (HDI):</strong><br/>Published by the United Nations Development Programme (UNDP), the HDR compares countries based on a combination of factors.<br/>It uses <strong>educational levels, health status (Life Expectancy), and per capita income</strong> to calculate the HDI.<br/>By focusing on people\'s well-being, it gives a broader picture of development than just income.'}
        ]
      },
      {
        id: '9',
        title: "Key Terms for Measuring Development",
        content: [
            { type: 'list', items: [
                '<strong>Body Mass Index (BMI):</strong> A measure to see if an adult is nourished. It is calculated by dividing a person\'s weight (in kg) by the square of their height (in meters). A BMI less than 18.5 indicates the person is undernourished. A BMI more than 25 indicates the person is overweight.',
                '<strong>Infant Mortality Rate (IMR):</strong> The number of children who die before the age of one year, per 1000 live births in that year.',
                '<strong>Literacy Rate:</strong> The percentage of the population aged 7 and above who can read and write.',
                '<strong>Life Expectancy:</strong> The average number of years a person is expected to live at the time of their birth.',
                '<strong>Net Attendance Ratio:</strong> The percentage of children in the 15-17 age group who are attending school.'
            ]}
        ]
      },
      {
        id: '10',
        title: "Sustainability of Development",
        content: [
          { type: 'paragraph', text: 'Development should not only benefit the present but also be maintained for future generations. This is called <strong>sustainability</strong>.' },
          { type: 'paragraph', text: '<strong>The Warning:</strong> Scientists warn that current development methods are not sustainable because we are overusing our natural resources.' },
          { type: 'infoBox', color: 'orange', content: '<strong>Renewable vs. Non-Renewable Resources:</strong><br/>• <strong>Renewable Resources:</strong> These are replenished by nature, like groundwater and forests. However, they can be overused.<br/>• <strong>Non-Renewable Resources:</strong> These are fixed in stock and will get exhausted, such as crude oil and coal.'},
          { type: 'paragraph', text: '<strong>A Shared Future:</strong> The consequences of environmental damage affect everyone. Sustainability is crucial because our future is linked together, and we must ensure there are enough resources for the generations to come.'}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 1: Development (Vikas)",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "What is Development?",
        content: [
          { type: 'paragraph', text: '<strong>Development</strong>, yaani progress, ek aisa idea hai jo hamesha se hamare saath raha hai. Yeh hamari desires aur hopes ke baare mein hai ki hum kaise jeena chahte hain aur hamari country kaisi honi chahiye.' },
          { type: 'heading', text: 'Development ke baare mein sochna:'},
          { type: 'paragraph', text: 'Development mein important questions poochhna shamil hai: Life mein hamein kaun si essential cheezein chahiye? Kya sabke liye life behtar ho sakti hai? Log ek saath behtar tareeke se kaise reh sakte hain? Kya aur zyada equality ho sakti hai? Main goal in questions ke baare mein sochna aur in goals ko achieve karne ke tareeke dhoondhna hai.'},
          { type: 'infoBox', color: 'blue', content: '<strong>Ek Complex Task:</strong> Development ko samajhna simple nahi hai. Hamari present life hamare past se influence hoti hai, isliye change ki desire ke liye hamein history ke baare mein aware hona chahiye. Development ke liye hamari hopes ko ek democratic political process ke through achieve karna possible hai.'}
        ]
      },
      {
        id: '2',
        title: "What Development Promises: Alag Log, Alag Goals",
        content: [
          { type: 'paragraph', text: 'Alag-alag logon ke liye development ka matlab bahut alag ho sakta hai. Ek person ke development ke goals uski life situation par depend karte hain.' },
          { type: 'paragraph', text: '<strong>Alag Aspirations:</strong> Har person ya group aisi cheezein chahta hai jo unke liye sabse important hain aur unki desires ko poora kar sakti hain.' },
          { type: 'list', items: [
              '<strong>Example 1:</strong> Ek landless rural laborer ke liye, development ka matlab ho sakta hai zyada din kaam, behtar wages, apne bachchon ke liye achhe local schools, aur koi social discrimination na ho.',
              '<strong>Example 2:</strong> Punjab ke ek prosperous farmer ke liye, development ka matlab ho sakta hai high family income, unki faslon ke liye zyada prices, sasta labor, aur apne bachchon ko study ke liye abroad bhej paana.',
          ]},
          { type: 'infoBox', color: 'orange', content: '<strong>Conflicting Goals:</strong> Kabhi-kabhi, ek person ya group ke development goals doosre ke goals ke bilkul conflict mein ho sakte hain. Jo ek ke liye development hai, woh doosre ke liye development nahi ho sakta. Yeh harmful bhi ho sakta hai.<br/><br/><strong>Example:</strong> Ek industrialist zyada electricity generate karne ke liye aur dams chah sakta hai. Yeh unka idea of development hai. Lekin, ek bada dam banane se zameen flood ho sakti hai aur wahan rehne wale tribal logon ki life disrupt ho sakti hai. Unke liye yeh development nahi hai.'}
        ]
      },
      {
        id: '3',
        title: "Income aur Doosre Goals",
        content: [
          { type: 'paragraph', text: 'Zyada income paana zyadatar logon ke liye ek common aur important goal hai, lekin yeh ekmaatr cheez nahi hai jo ve chahte hain.' },
          { type: 'paragraph', text: '<strong>Income ke Aage:</strong> Log non-material cheezein bhi chahte hain. Yeh aksar paise se zyada important hoti hain. In non-material goals mein shamil hain: Equal treatment, Freedom, Security, Doosron se respect, aur Friendship.' },
          { type: 'paragraph', text: '<strong>The Quality of Life:</strong> Hamari life ki quality material cheezon (jaise paisa) aur non-material cheezon (jaise respect aur freedom) dono par depend karti hai. Sirf material goods ek achhi life jeene ke liye kaafi nahi hain.' },
          { type: 'infoBox', color: 'green', content: '<strong>Goals ka Mix:</strong> Development ke liye, log goals ke combination ko dekhte hain. Ek safe aur secure environment, job security, aur respect ek person ke well-being ke liye crucial hain.'}
        ]
      },
      {
        id: '4',
        title: "National Development",
        content: [
          { type: 'paragraph', text: 'Jaise individuals ke alag-alag goals hote hain, waise hi national development kaisa hona chahiye, is par unke ideas bhi alag-alag aur conflicting ho sakte hain.' },
          { type: 'paragraph', text: '<strong>Desh ke Baare mein Sochna:</strong> National development mein poore desh ke liye important questions ke baare mein sochna shamil hai: Sabke liye ek fair aur just raasta kya hai? Kya cheezon ko karne ka koi behtar tareeka hai? Kya koi particular idea badi sankhya mein logon ko fayda pahunchayega ya sirf ek chhote group ko?' }
        ]
      },
      {
        id: '5',
        title: "Alag Deshon ya States ko Kaise Compare Karein?",
        content: [
          { type: 'paragraph', text: 'Development ko behtar samajhne ke liye, hum aksar alag-alag countries ya states ko compare karte hain.' },
          { type: 'heading', text: 'Per Capita Income:'},
          { type: 'paragraph', text: 'Countries ko compare karne ke liye, <strong>income</strong> ko sabse important attributes mein se ek maana jaata hai. Hum <strong>average income</strong> ka use karte hain, jo country ki total income ko uski total population se divide karke nikali jaati hai. Ise <strong>per capita income</strong> bhi kehte hain.' },
          { type: 'paragraph', text: 'World Bank per capita income ka use karke countries ko high-income, middle-income, ya low-income mein classify karta hai.'},
          { type: 'infoBox', color: 'blue', content: '<strong>Average Income ki Seemayein:</strong> Jabki averages comparison ke liye useful hain, ve disparities (asamanataon) ko bhi chhipa sakti hain. Average income hamein yeh nahi batati ki income logon ke beech kaise distribute hui hai. Ek country ki average income high ho sakti hai, lekin ho sakta hai ki zyadatar log gareeb hon aur kuch bahut ameer.'}
        ]
      },
      {
        id: '6',
        title: "Income aur Doosre Criteria",
        content: [
          { type: 'paragraph', text: 'Income apne aap mein development ka poori tarah se adequate indicator nahi hai. Hamein doosre criteria ko bhi dekhna chahiye.' },
          { type: 'heading', text: 'Ek Case Study: Haryana, Kerala, aur Bihar'},
          { type: 'paragraph', text: '<strong>Income:</strong> Haryana ki per capita income sabse zyada hai, jabki Bihar ki sabse kam.'},
          { type: 'paragraph', text: '<strong>Doosre Important Indicators:</strong> Jab hum health aur education data dekhte hain, to kahani badal jaati hai.'},
          { type: 'list', items: [
              '<strong>Infant Mortality Rate (IMR):</strong> Kerala ka IMR Haryana se kaafi kam hai.',
              '<strong>Literacy Rate:</strong> Kerala ka literacy rate Haryana aur Bihar dono se bahut zyada hai.',
              '<strong>Net Attendance Ratio:</strong> School attendance mein bhi Kerala behtar perform karta hai.'
          ]},
          { type: 'infoBox', color: 'orange', content: '<strong>Nishkarsh:</strong> Yeh example saaf dikhata hai ki bhale hi Haryana ki average income zyada hai, lekin woh health aur education jaise crucial areas mein Kerala se peeche hai.'}
        ]
      },
      {
        id: '7',
        title: "Public Facilities",
        content: [
          { type: 'paragraph', text: 'Kerala mein behtar health aur education outcomes kyon hain? Iska jawab hai <strong>Public Facilities</strong>.' },
          { type: 'paragraph', text: '<strong>Paisa Sab Kuch Nahi Khareed Sakta:</strong> Aapki jeb mein paisa aapko achhi tarah se jeene ke liye zaroori sabhi goods aur services nahi khareed sakta, jaise ki ek pollution-free environment ya infectious diseases se protection.' },
          { type: 'infoBox', color: 'green', content: '<strong>Collective Services ka Mahatva:</strong> Life mein kai zaroori cheezein provide karne ka sabse achha aur sasta tareeka unhe collectively provide karna hai.'},
          { type: 'paragraph', text: '<strong>Kerala ki Safalta:</strong> Kerala mein Infant Mortality Rate kam hai kyonki usne sabke liye available basic health aur educational facilities ke liye adequate provisions kiye hain.'}
        ]
      },
      {
        id: '8',
        title: "Human Development Report",
        content: [
          { type: 'paragraph', text: 'Health aur education development ke liye crucial hain. Human Development Report (HDR) ek zyada holistic measure provide karti hai.' },
          { type: 'infoBox', color: 'blue', content: '<strong>Human Development Index (HDI):</strong><br/>United Nations Development Programme (UNDP) dwara publish ki gayi HDR, deshon ko kai factors ke combination ke basis par compare karti hai.<br/>Yeh HDI calculate karne ke liye <strong>educational levels, health status (Life Expectancy), aur per capita income</strong> ka use karti hai.<br/>Logon ke well-being par focus karke, yeh sirf income se zyada development ki ek broader picture deti hai.'}
        ]
      },
      {
        id: '9',
        title: "Key Terms for Measuring Development",
        content: [
            { type: 'list', items: [
                '<strong>Body Mass Index (BMI):</strong> Yeh measure karne ke liye ki ek adult nourished hai ya nahi. Ise ek person ke weight (kg mein) ko uski height (meters mein) ke square se divide karke calculate kiya jaata hai. 18.5 se kam BMI ka matlab hai ki person undernourished hai. 25 se zyada BMI ka matlab hai ki person overweight hai.',
                '<strong>Infant Mortality Rate (IMR):</strong> Uss saal paida hue 1000 live bachchon mein se ek saal ki age se pehle marne wale bachchon ki sankhya.',
                '<strong>Literacy Rate:</strong> 7 saal aur usse zyada age ki population ka woh percentage jo padh aur likh sakta hai.',
                '<strong>Life Expectancy:</strong> Ek person ke janm ke samay uske jeene ki average expected length.',
                '<strong>Net Attendance Ratio:</strong> 15-17 age group ke bachchon ka woh percentage jo school attend kar rahe hain.'
            ]}
        ]
      },
      {
        id: '10',
        title: "Sustainability of Development",
        content: [
          { type: 'paragraph', text: 'Development se sirf present ko hi fayda nahi hona chahiye, balki future generations ke liye bhi maintain rehna chahiye. Ise <strong>sustainability</strong> kehte hain.' },
          { type: 'paragraph', text: '<strong>The Warning:</strong> Scientists chetavni de rahe hain ki current development methods sustainable nahi hain kyonki hum apne natural resources ka overuse kar rahe hain.' },
          { type: 'infoBox', color: 'orange', content: '<strong>Renewable vs. Non-Renewable Resources:</strong><br/>• <strong>Renewable Resources:</strong> Yeh nature dwara replenish ho jaate hain, jaise groundwater aur forests. Lekin, inka bhi overuse ho sakta hai.<br/>• <strong>Non-Renewable Resources:</strong> Inka stock fixed hai aur yeh khatm ho jaayenge, jaise crude oil aur coal.'},
          { type: 'paragraph', text: '<strong>Ek Saanjha Bhavishya:</strong> Environmental damage ke parinaam sabko prabhavit karte hain. Sustainability crucial hai kyonki hamara future ek doosre se juda hua hai, aur hamein yeh sunishchit karna chahiye ki aane wali generations ke liye पर्याप्त resources hon.'}
        ]
      }
    ]
  }
};


// Theme definitions
const themes = {
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-header-bg': '#f97316', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f97316', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#ea580c', '--theme-heading-border': '#f97316', '--theme-check': '#f97316', '--theme-switch-lang-active': '#ea580c' } },
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-header-bg': '#3b82f6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#3b82f6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-check': '#3b82f6', '--theme-switch-lang-active': '#2563eb' } },
    forestGreen: { name: 'Forest Green', previewColor: '#22c55e', cssVars: { '--theme-bg': '#f0fdf4', '--theme-header-bg': '#22c55e', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#22c55e', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#16a34a', '--theme-heading-border': '#4ade80', '--theme-check': '#22c55e', '--theme-switch-lang-active': '#16a34a' } },
    amber: { name: 'Amber', previewColor: '#f59e0b', cssVars: { '--theme-bg': '#fefce8', '--theme-header-bg': '#f59e0b', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f59e0b', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#d97706', '--theme-heading-border': '#facc15', '--theme-check': '#f59e0b', '--theme-switch-lang-active': '#d97706' } },
    royalPurple: { name: 'Royal Purple', previewColor: '#8b5cf6', cssVars: { '--theme-bg': '#f5f3ff', '--theme-header-bg': '#8b5cf6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#8b5cf6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#7c3aed', '--theme-heading-border': '#a78bfa', '--theme-check': '#8b5cf6', '--theme-switch-lang-active': '#7c3aed' } },
    midnightBlueD: { name: 'Midnight Blue (D)', previewColor: '#60a5fa', cssVars: { '--theme-bg': '#111827', '--theme-header-bg': '#1e40af', '--theme-toc-bg': '#1f2937', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#60a5fa', '--theme-toc-active-text': '#111827', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#60a5fa', '--theme-heading-border': '#3b82f6', '--theme-check': '#60a5fa', '--theme-switch-lang-active': '#ffffff' } },
    slateGrayD: { name: 'Slate Gray (D)', previewColor: '#94a3b8', cssVars: { '--theme-bg': '#334155', '--theme-header-bg': '#475569', '--theme-toc-bg': '#475569', '--theme-toc-text': '#e2e8f0', '--theme-toc-active-bg': '#94a3b8', '--theme-toc-active-text': '#1e293b', '--theme-content-bg': 'rgba(71,85,105,0.8)', '--theme-text-color': '#e2e8f0', '--theme-heading-color': '#cbd5e1', '--theme-heading-border': '#94a3b8', '--theme-check': '#94a3b8', '--theme-switch-lang-active': '#ffffff' } },
    tangerineD: { name: 'Tangerine (D)', previewColor: '#fb923c', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#c2410c', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#fb923c', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#fb923c', '--theme-heading-border': '#f97316', '--theme-check': '#fb923c', '--theme-switch-lang-active': '#ffffff' } },
    crimsonD: { name: 'Crimson (D)', previewColor: '#f87171', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#b91c1c', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#f87171', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f87171', '--theme-heading-border': '#ef4444', '--theme-check': '#f87171', '--theme-switch-lang-active': '#ffffff' } },
    roseD: { name: 'Rose (D)', previewColor: '#f472b6', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#be185d', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#f472b6', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f472b6', '--theme-heading-border': '#ec4899', '--theme-check': '#f472b6', '--theme-switch-lang-active': '#ffffff' } },
    violetD: { name: 'Violet (D)', previewColor: '#a78bfa', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#6d28d9', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#a78bfa', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#a78bfa', '--theme-heading-border': '#8b5cf6', '--theme-check': '#a78bfa', '--theme-switch-lang-active': '#ffffff' } },
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
      case 'subheading':
        return <h5 key={index} className="text-lg font-semibold mt-5 mb-3 text-[var(--theme-text-color)]" dangerouslySetInnerHTML={{ __html: item.text }}></h5>;
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
      case 'infoBox':
        const colorClasses = {
          blue: 'bg-sky-100 border-sky-500 text-sky-900 dark:bg-sky-900/30 dark:border-sky-700 dark:text-sky-200',
          green: 'bg-emerald-100 border-emerald-500 text-emerald-900 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-200',
          orange: 'bg-amber-100 border-amber-500 text-amber-900 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-200',
        };
        return (
          <div key={index} className={`my-4 p-4 border-l-4 rounded-r-lg ${colorClasses[item.color] || colorClasses.orange}`}>
            <div 
                className="prose prose-sm max-w-none prose-strong:text-inherit" 
                dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        );
      case 'formulaBox':
        return (
             <div key={index} className="my-6 p-4 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center space-x-4 text-gray-800 dark:text-gray-200 dark:bg-gray-800/50 dark:border-gray-700">
                <span className="font-semibold">{item.name}</span>
                <span className="text-2xl">=</span>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-sm px-2 pb-1">{item.numerator}</span>
                    <hr className="w-full border-current" />
                    <span className="text-sm px-2 pt-1">{item.denominator}</span>
                </div>
                <span className="text-2xl">×</span>
                <span className="font-semibold">100</span>
            </div>
        );
      case 'imagePlaceholder':
        return (
            <div key={index} className="my-6 p-4 border-2 border-dashed border-[var(--theme-heading-border)] rounded-lg flex flex-col items-center justify-center text-center text-[var(--theme-text-color)]/70">
                <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p className="text-sm font-semibold">{item.text || 'Image Placeholder'}</p>
            </div>
        );
      case 'table':
          return (
              <div key={index} className="my-6 overflow-x-auto">
                  <table className="min-w-full">
                      <thead>
                          <tr>
                              {item.headers.map((header, hIndex) => (
                                  <th 
                                      key={hIndex} 
                                      className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b-2"
                                      style={{ color: 'var(--theme-heading-color)', borderColor: 'var(--theme-heading-color)' }}
                                      dangerouslySetInnerHTML={{ __html: header }}
                                  ></th>
                              ))}
                          </tr>
                      </thead>
                      <tbody>
                          {item.rows.map((row, rIndex) => (
                              <tr key={rIndex} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                  {row.map((cell, cIndex) => (
                                      <td key={cIndex} className="px-4 py-4 text-sm text-[var(--theme-text-color)]" dangerouslySetInnerHTML={{ __html: cell }}></td>
                                  ))}
                              </tr>
                          ))}
                      </tbody>
                  </table>
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

    return (
        <div 
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: window.innerWidth >= 640 ? '24px' : '16px',
                paddingTop: isMobile ? '80px' : (window.innerWidth >= 640 ? '24px' : '16px'),
                color: themes[theme].cssVars['--theme-toc-text'],
                transition: 'all 300ms',
                backdropFilter: isMobile ? 'blur(16px)' : 'none',
                backgroundColor: isMobile ? themes[theme].cssVars['--theme-content-bg'] : themes[theme].cssVars['--theme-toc-bg']
            }}
        >
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
                                                    {section.id}.{index + 1} {subSection.title}
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
function DevelopmentChapter() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({});

  const currentContent = notesData[language];
  const allSections = currentContent.sections.flatMap(s => [
        { id: s.id, title: s.title },
        ...(s.subSections ? s.subSections.map(sub => ({ id: sub.id, title: sub.title })) : [])
    ]);

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

        for (let i = allSections.length - 1; i >= 0; i--) {
            const sectionId = allSections[i].id;
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language, allSections]);
  
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
                  fontSize: window.innerWidth >= 640 ? '2.25rem' : '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  paddingLeft: '16px',
                  paddingRight: '16px',
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
                    <section key={section.id} id={`section-${section.id}`} className="mb-8">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <div key={subSection.id} id={`section-${subSection.id}`} className="mt-8">
                                     <h3 className="heading-font text-2xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-2 border-[var(--theme-heading-border)]">{section.id}.{index + 1} {subSection.title}</h3>
                                     <ContentRenderer content={subSection.content} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>

        {/* Floating Action Button for Mobile/Tablet TOC */}
        <div 
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 30,
                display: window.innerWidth >= 1024 ? 'none' : 'block'
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
                    transition: 'transform 150ms ease-in-out',
                    backgroundColor: themes[theme].cssVars['--theme-header-bg'],
                    border: 'none',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => {
                    e.target.style.transform = 'scale(0.95)';
                }}
                onMouseUp={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                aria-label="Open Table of Contents"
            >
                <MenuIcon />
            </button>
        </div>
      </div>
    </>
  );
}

export default DevelopmentChapter;
