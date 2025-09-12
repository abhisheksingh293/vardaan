import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 2: Sectors of the Indian Economy",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to Economic Sectors",
        content: [
          { type: 'paragraph', text: 'To understand an economy, we classify the different economic activities into groups. These groups are called <strong>sectors</strong>. People around us are constantly engaged in various activities; some produce goods, while others produce services. We can classify these activities based on different criteria. In this chapter, we will look at three types of classifications:' },
          { type: 'list', items: ['Primary, Secondary, and Tertiary Sectors.', 'Organised and Unorganised Sectors.', 'Public and Private Sectors.'] }
        ]
      },
      {
        id: '2',
        title: "Classification Based on the Nature of Activity",
        content: [],
        subSections: [
          {
            id: '2a',
            title: 'Primary Sector',
            content: [
              { type: 'infoBox', color: 'blue', content: '<strong>Definition:</strong> When we produce a good by using or exploiting natural resources, it is an activity of the primary sector.' },
              { type: 'paragraph', text: '<strong>Why is it called "Primary"?</strong> This sector is called "primary" because it forms the base for all other products that are made later.' },
              { type: 'heading', text: 'Examples:'},
              { type: 'list', items: [
                  '<strong>Cultivation of Cotton:</strong> For the growth of the cotton plant, we depend mainly on natural factors like rainfall, sunshine, and climate. The product, cotton, is a natural product.',
                  '<strong>Dairy:</strong> In dairy, we depend on the biological processes of animals and the availability of fodder. The product, milk, is also a natural product.',
                  '<strong>Mining:</strong> Minerals and ores extracted from the earth are also natural products.'
              ]},
              { type: 'paragraph', text: '<strong>Also Known As:</strong> Since most products in this sector come from agriculture, dairy, fishing, and forestry, it is also called the <strong>agriculture and related sector</strong>.' }
            ]
          },
          {
            id: '2b',
            title: 'Secondary Sector',
            content: [
              { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> The secondary sector includes activities where natural products are changed into other forms through manufacturing. This is the step that comes after the primary sector.' },
              { type: 'paragraph', text: '<strong>Process:</strong> The product is not made by nature but has to be manufactured. This process can happen in a factory, a workshop, or even at home.' },
              { type: 'heading', text: 'Examples:'},
              { type: 'list', items: [
                  'Using cotton fibre (from the primary sector), we spin yarn and weave cloth.',
                  'Using sugarcane (from the primary sector) as a raw material, we make sugar or gur (jaggery).',
                  'We convert earth (from the primary sector) into bricks, which are then used to build houses.'
              ]},
              { type: 'paragraph', text: '<strong>Also Known As:</strong> This sector gradually became associated with different industries, so it is also called the <strong>industrial sector</strong>.' }
            ]
          },
          {
            id: '2c',
            title: 'Tertiary Sector',
            content: [
              { type: 'infoBox', color: 'orange', content: '<strong>Definition:</strong> The tertiary sector includes activities that help in the development of the primary and secondary sectors.' },
              { type: 'paragraph', text: '<strong>Function:</strong> These activities do not produce goods themselves, but they provide support for the production process.' },
              { type: 'heading', text: 'Examples of Support Services:'},
              { type: 'list', items: [
                  '<strong>Transport:</strong> Goods produced in the primary or secondary sectors need to be moved by trucks or trains.',
                  '<strong>Storage:</strong> Sometimes, goods need to be stored in godowns or warehouses.',
                  '<strong>Communication:</strong> Talking to people over the telephone or sending letters is essential for business.',
                  '<strong>Banking:</strong> Borrowing money from banks helps in production and trade.'
              ]},
              { type: 'paragraph', text: '<strong>Essential Services:</strong> The service sector also includes essential services that may not directly help in production, such as teachers, doctors, barbers, cobblers, and lawyers.' },
              { type: 'paragraph', text: '<strong>New Services:</strong> In recent times, new services based on information technology like internet cafes, ATM booths, call centers, and software companies have become very important.' },
              { type: 'paragraph', text: '<strong>Also Known As:</strong> Since these activities generate services rather than goods, the tertiary sector is also called the <strong>service sector</strong>.' }
            ]
          },
          {
            id: '2d',
            title: 'Interdependence of Sectors',
            content: [
              { type: 'paragraph', text: 'The three economic sectors are highly interdependent, meaning they rely on each other.' },
              { type: 'heading', text: 'Examples of Interdependence:'},
               { type: 'list', items: [
                  '<strong>Secondary depends on Primary:</strong> If farmers (primary) refuse to sell sugarcane to a sugar mill (secondary), the mill will have to shut down.',
                  '<strong>Primary depends on Secondary:</strong> Farmers (primary) buy manufactured goods like tractors, pumps, and fertilizers (secondary). If the price of fertilizers goes up, the cost of farming increases, reducing the farmers\' profits.',
                  '<strong>Primary and Tertiary depend on each other:</strong> People in the industrial (secondary) and service (tertiary) sectors need food from the primary sector. If transporters (tertiary) go on strike, farmers (primary) cannot sell their products in urban areas, leading to food shortages.'
              ]}
            ]
          }
        ]
      },
      {
        id: '3',
        title: "Comparing the Three Sectors",
        content: [],
        subSections: [
            {
                id: '3a',
                title: 'How to Measure Production?',
                content: [
                    { type: 'paragraph', text: 'The three sectors produce a vast number of different goods and services. Simply adding up the number of items (like cars + computers + nails) doesn\'t make sense.' },
                    { type: 'paragraph', text: 'To solve this, economists suggest using the <strong>monetary value</strong> of goods and services instead of the actual numbers.' },
                    { type: 'paragraph', text: '<strong>Example:</strong> If 10,000 kgs of wheat are sold at ₹20 per kg, the value is ₹2,00,000. If 5,000 coconuts are sold at ₹15 each, their value is ₹75,000.' }
                ]
            },
            {
                id: '3b',
                title: 'Final Goods vs. Intermediate Goods',
                content: [
                    { type: 'paragraph', text: '<strong>Final Goods:</strong> These are goods that directly reach the consumers. It is only the value of final goods and services that is counted.' },
                    { type: 'paragraph', text: '<strong>Intermediate Goods:</strong> These are goods that are used up in the process of producing final goods. For example, wheat and flour are intermediate goods used to make biscuits (the final good).' },
                    { type: 'infoBox', color: 'blue', content: '<strong>Why only count final goods?</strong> The value of the final good already includes the value of all the intermediate goods used to make it.<br/><strong>Example:</strong> If a farmer sells wheat for ₹20/kg to a mill, and the mill sells flour for ₹25/kg to a biscuit company, and the company sells biscuits for ₹80 to consumers, we only count the final value of ₹80. The ₹80 for the biscuits already includes the value of the flour and the wheat.<br/>Counting the value of wheat, flour, and biscuits separately would be incorrect as it would mean counting the value of the same items multiple times.'}
                ]
            },
            {
                id: '3c',
                title: 'Gross Domestic Product (GDP)',
                content: [
                    { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> The Gross Domestic Product (GDP) of a country is the value of all final goods and services produced within a country during a particular year.' },
                    { type: 'paragraph', text: '<strong>Significance:</strong> GDP shows how big the economy is. The sum of production from the primary, secondary, and tertiary sectors gives the GDP.'},
                    { type: 'paragraph', text: '<strong>Measurement in India:</strong> In India, this huge task is undertaken by a central government ministry, which collects information from all states and union territories.'}
                ]
            },
             {
                id: '3d',
                title: 'Gross Value Added (GVA)',
                content: [
                    { type: 'paragraph', text: 'The Indian government now often uses <strong>Gross Value Added (GVA)</strong> to measure the contribution of the three sectors.'},
                    { type: 'paragraph', text: 'GVA measures the contribution of each sector after adjusting for taxes and subsidies.'}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Historical Changes in the Sectors",
        content: [],
        subSections: [
            {
                id: '4a',
                title: 'The Pattern in Developed Countries',
                content: [
                    { type: 'paragraph', text: '<strong>Stage 1: Dominance of Primary Sector:</strong> In the initial stages of development, the primary sector was the most important sector for production and employment. As farming methods improved, more food was produced, allowing people to take up other activities like crafts and trade.' },
                    { type: 'paragraph', text: '<strong>Stage 2: Shift to Secondary Sector:</strong> Over time (more than 100 years), new manufacturing methods were introduced, and factories expanded. Many people moved from farms to work in factories. The secondary sector gradually became the most important for total production and employment.' },
                    { type: 'paragraph', text: '<strong>Stage 3: Shift to Tertiary Sector:</strong> In the last 100 years, developed countries have seen a further shift from the secondary to the tertiary sector. The service sector is now the most important in terms of production, and most working people are employed in this sector. This is the general pattern observed in developed countries.' }
                ]
            },
            {
                id: '4b',
                title: 'Sectoral Changes in India',
                content: [
                    { type: 'paragraph', text: '<strong>Rising Importance of the Tertiary Sector in Production:</strong><br/>▪ Between 1977-78 and 2017-18, production increased in all three sectors in India, but it increased the most in the tertiary sector.<br/>▪ By 2017-18, the tertiary sector became the largest producing sector in India, replacing the primary sector.'},
                    { type: 'heading', text: 'Reasons for the Growth of the Tertiary Sector:'},
                    { type: 'list', items: [
                        '<strong>1. Basic Services:</strong> Every country needs basic services like hospitals, schools, police stations, courts, banks, and transport. In a developing country, the government is responsible for providing these.',
                        '<strong>2. Development of Other Sectors:</strong> As agriculture (primary) and industry (secondary) develop, they demand more services like transport, trade, and storage.',
                        '<strong>3. Rising Income Levels:</strong> When incomes rise, people demand more services like tourism, shopping, private schools, and restaurants.',
                        '<strong>4. New Technology Services:</strong> Over the last decade, new services based on information and communication technology have become essential and are growing rapidly.'
                    ]}
                ]
            },
            {
                id: '4c',
                title: 'Where are Most People Employed in India?',
                content: [
                    { type: 'paragraph', text: 'While the tertiary sector\'s share in GVA has grown significantly, a similar shift has not happened in employment.' },
                    { type: 'paragraph', text: 'The primary sector continues to be the largest employer in India. In 2017-18, 44% of the population was employed in the primary sector.' },
                    { type: 'paragraph', text: '<strong>Why this imbalance?</strong> Not enough jobs were created in the secondary and tertiary sectors to absorb the workforce from the primary sector.<br/>▪ While industrial production went up by 9 times, employment in the industry only went up by about 3 times.<br/>▪ While service sector production rose by 14 times, employment in this sector only rose by about 5 times.' }
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Underemployment (Disguised Unemployment)",
        content: [
          { type: 'paragraph', text: '<strong>The Problem:</strong> More than half of India\'s workers are in the primary sector (mainly agriculture), but they produce only about one-sixth of the GVA.' },
          { type: 'paragraph', text: '<strong>What this means:</strong> There are more people working in agriculture than is necessary. Even if you remove some people from this sector, production will not be affected. This means that workers in agriculture are underemployed.' },
          { type: 'infoBox', color: 'orange', content: '<strong>Definition of Underemployment:</strong> This is a situation where people are visibly working, but they are all made to work less than their potential.<br/><strong>Also Known As:</strong> This is also called disguised unemployment because it is hidden. It\'s not obvious like a person who has no job at all.'},
          { type: 'paragraph', text: '<strong>Rural Example:</strong> A small farmer named Laxmi has a two-hectare plot. All five members of her family work on it because they have nowhere else to work. In reality, the work requires only three people. The two extra people are in a state of disguised unemployment. If these two people move to work elsewhere, the farm\'s production will not suffer, and the family will earn extra income.'},
          { type: 'paragraph', text: '<strong>Urban Example:</strong> This can also happen in urban areas. There are thousands of casual workers in the service sector, like painters, plumbers, or street vendors, who may spend the whole day working but earn very little because they don\'t find work every day or don\'t have better opportunities.'}
        ]
      },
      {
        id: '6',
        title: "How to Create More Employment",
        content: [
            { type: 'heading', text: 'In the Agricultural Sector:'},
            { type: 'list', items: [
                '<strong>Provide Loans and Irrigation:</strong> The government or banks can provide loans to farmers to build wells or canals for irrigation. This allows them to grow a second crop in a year, creating more work.',
                '<strong>Invest in Infrastructure:</strong> Investing in better rural roads, transport, and storage facilities can help farmers sell their products more easily and create jobs in services like transport and trade.',
                '<strong>Provide Cheap Credit:</strong> Providing cheap agricultural credit from banks allows farmers to buy seeds, fertilizers, and equipment on time, improving their farming.'
            ]},
            { type: 'heading', text: 'In Semi-Rural Areas:'},
            { type: 'paragraph', text: '<strong>Promote Local Industries:</strong> Identify, promote, and locate industries in semi-rural areas. For example, setting up a dal mill to process pulses grown by farmers, or a cold storage for farmers to store potatoes and onions. This creates jobs outside of big cities.'},
            { type: 'heading', text: 'Expanding the Service Sector:'},
            { type: 'list', items: [
                '<strong>Education:</strong> To educate all children, we need more school buildings, teachers, and staff. A study estimated that nearly 20 lakh jobs could be created in the education sector alone.',
                '<strong>Health:</strong> To improve the health situation, we need more doctors, nurses, and health workers, especially in rural areas.',
                '<strong>Tourism:</strong> If the tourism sector is improved, it can provide additional employment to more than 35 lakh people every year. Promoting regional crafts or new IT services can also create jobs.'
            ]},
            { type: 'infoBox', color: 'blue', content: '<strong>Short-Term Measures: The Right to Work</strong><br/><strong>MGNREGA 2005:</strong> The central government implemented a law called the Mahatma Gandhi National Rural Employment Guarantee Act 2005.<br/><strong>What it does:</strong> It guarantees 100 days of employment in a year to all those in rural areas who are able to and need work.<br/><strong>Unemployment Allowance:</strong> If the government fails to provide employment, it must give unemployment allowances to the people.'}
        ]
      },
      {
        id: '7',
        title: "Classification as Organised and Unorganised Sectors",
        content: [ {type: 'paragraph', text: 'This classification is based on how people are employed and their conditions of work.'} ],
        subSections: [
            {
                id: '7a',
                title: 'Organised Sector',
                content: [
                    { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> The organised sector includes workplaces where the terms of employment are regular, and people have assured work.'},
                    { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>▪ They are registered by the government and must follow rules and regulations like the Factories Act and Minimum Wages Act.<br/>▪ There is security of employment.<br/>▪ Workers are expected to work only a fixed number of hours. They get paid for overtime if they work more.<br/>▪ Workers get many benefits like paid leave, payment during holidays, provident fund, and gratuity.<br/>▪ They are supposed to get medical benefits and a safe working environment.<br/>▪ After retirement, workers get pensions.'},
                    { type: 'paragraph', text: '<strong>Example:</strong> Kanta, who works in an office from 9:30 a.m. to 5:30 p.m., gets a regular salary, provident fund, and paid holidays.'}
                ]
            },
            {
                id: '7b',
                title: 'Unorganised Sector',
                content: [
                    { type: 'infoBox', color: 'orange', content: '<strong>Definition:</strong> The unorganised sector consists of small, scattered units that are largely outside the control of the government.'},
                    { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>▪ There are rules, but they are often not followed.<br/>▪ Jobs are low-paid and often not regular.<br/>▪ There is no provision for overtime, paid leave, holidays, or sick leave.<br/>▪ Employment is not secure. People can be asked to leave without any reason.<br/>▪ This sector includes many self-employed people like street vendors or repair workers, as well as farm laborers.'},
                    { type: 'paragraph', text: '<strong>Example:</strong> Kamal, a daily wage laborer in a grocery shop, works long hours, gets no allowances, has no paid leave, and can be fired at any time.'}
                ]
            },
            {
                id: '7c',
                title: 'How to Protect Workers in the Unorganised Sector',
                content: [
                    { type: 'paragraph', text: 'Employment opportunities in the organised sector are expanding very slowly. Many workers are forced to take low-paying, insecure jobs in the unorganised sector.' },
                    { type: 'paragraph', text: '<strong>Vulnerable Groups:</strong><br/>▪ In Rural Areas: Landless agricultural laborers, small and marginal farmers, sharecroppers, and artisans (weavers, blacksmiths, carpenters). Nearly 80% of rural households are small and marginal farmers who need support.<br/>▪ In Urban Areas: Workers in small-scale industries, casual workers in construction and transport, street vendors, head-load workers, and rag pickers.<br/>▪ Socially Vulnerable: A majority of workers from Scheduled Castes, Scheduled Tribes, and backward communities find themselves in the unorganised sector, where they also face social discrimination.' },
                    { type: 'paragraph', text: '<strong>What is needed?</strong> These workers need protection and support. Farmers need timely delivery of seeds, credit, storage, and marketing outlets. Small industries need help getting raw materials and marketing their goods.' }
                ]
            }
        ]
      },
      {
        id: '8',
        title: "Classification by Ownership: Public and Private Sectors",
        content: [ {type: 'paragraph', text: 'This classification is based on who owns the assets (like machinery or buildings) and is responsible for delivering services.'} ],
        subSections: [
            {
                id: '8a',
                title: 'Public Sector',
                content: [
                    { type: 'infoBox', color: 'blue', content: '<strong>Definition:</strong> In the public sector, the government owns most of the assets and provides the services.'},
                    { type: 'paragraph', text: '<strong>Motive:</strong> The purpose is not just to earn profits, but to provide for the welfare of the public. The government raises money through taxes to cover the costs.'},
                    { type: 'paragraph', text: '<strong>Examples:</strong> Indian Railways, Post Office.'},
                    { type: 'heading', text: 'Why does the government take on these activities?'},
                    { type: 'list', items: [
                        '<strong>1. Heavy Spending:</strong> Some activities like building roads, railways, bridges, and dams require huge sums of money that are beyond the capacity of the private sector.',
                        '<strong>2. Supporting Key Industries:</strong> The government may need to provide services like electricity at a low cost to support other industries, especially small-scale units.',
                        '<strong>3. Supporting Farmers and Consumers:</strong> The government buys crops like wheat and rice from farmers at a "fair price" and sells them at a lower price to consumers through ration shops.',
                        '<strong>4. Primary Responsibility:</strong> It is the government\'s duty to provide essential facilities for everyone, such as health and education. It must also ensure access to safe drinking water, housing for the poor, and proper nutrition.'
                    ]}
                ]
            },
            {
                id: '8b',
                title: 'Private Sector',
                content: [
                    { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> In the private sector, ownership of assets and delivery of services is in the hands of private individuals or companies.'},
                    { type: 'paragraph', text: '<strong>Motive:</strong> The main goal of activities in the private sector is to earn profits. We have to pay money to these companies to get their services.'},
                    { type: 'paragraph', text: '<strong>Examples:</strong> Tata Iron and Steel Company Limited (TISCO), Reliance Industries Limited (RIL).'}
                ]
            }
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 2: Indian Economy ke Sectors",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Economic Sectors ka Introduction",
        content: [
          { type: 'paragraph', text: 'Ek economy ko samajhne ke liye, hum alag-alag economic activities ko groups mein classify karte hain. In groups ko <strong>sectors</strong> kaha jaata hai. Hamare aas-paas ke log lagatar alag-alag activities mein lage rehte hain; kuch goods produce karte hain, jabki doosre services produce karte hain. Hum in activities ko alag-alag criteria ke basis par classify kar sakte hain. Is chapter mein, hum teen type ke classifications dekhenge:' },
          { type: 'list', items: ['Primary, Secondary, aur Tertiary Sectors.', 'Organised aur Unorganised Sectors.', 'Public aur Private Sectors.'] }
        ]
      },
      {
        id: '2',
        title: "Activity ke Nature par Based Classification",
        content: [],
        subSections: [
          {
            id: '2a',
            title: 'Primary Sector',
            content: [
              { type: 'infoBox', color: 'blue', content: '<strong>Definition:</strong> Jab hum natural resources ko use ya exploit karke koi good produce karte hain, to woh <strong>primary sector</strong> ki activity hai.' },
              { type: 'paragraph', text: '<strong>Ise "Primary" kyon kehte hain?</strong> Is sector ko "primary" isliye kehte hain kyonki yeh baaki sabhi products ke liye base banata hai jo baad mein bante hain.' },
              { type: 'heading', text: 'Examples:'},
              { type: 'list', items: [
                  '<strong>Cotton ki Kheti:</strong> Cotton plant ke growth ke liye, hum mainly natural factors jaise rainfall, sunshine, aur climate par depend karte hain. Product, yaani cotton, ek natural product hai.',
                  '<strong>Dairy:</strong> Dairy mein, hum animals ke biological processes aur chaare ki availability par depend karte hain. Product, yaani milk, bhi ek natural product hai.',
                  '<strong>Mining:</strong> Dharti se nikale gaye minerals aur ores bhi natural products hain.'
              ]},
              { type: 'paragraph', text: '<strong>Also Known As:</strong> Kyonki is sector ke zyadatar products agriculture, dairy, fishing, aur forestry se aate hain, ise <strong>agriculture and related sector</strong> bhi kehte hain.' }
            ]
          },
          {
            id: '2b',
            title: 'Secondary Sector',
            content: [
              { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> Secondary sector mein aisi activities aati hain jahan natural products ko manufacturing ke through doosre forms mein change kiya jaata hai. Yeh primary sector ke baad ka step hai.' },
              { type: 'paragraph', text: '<strong>Process:</strong> Product nature se nahi banta, balki use manufacture karna padta hai. Yeh process kisi factory, workshop, ya ghar par bhi ho sakta hai.' },
              { type: 'heading', text: 'Examples:'},
              { type: 'list', items: [
                  'Cotton fibre (primary sector se) use karke, hum dhaaga banate hain aur kapda bunte hain.',
                  'Sugarcane (primary sector se) ko raw material ki tarah use karke, hum sugar ya gur banate hain.',
                  'Hum dharti (primary sector se) ko bricks mein convert karte hain, jo phir ghar banane ke kaam aati hain.'
              ]},
              { type: 'paragraph', text: '<strong>Also Known As:</strong> Yeh sector dheere-dheere alag-alag industries se jud gaya, isliye ise <strong>industrial sector</strong> bhi kehte hain.' }
            ]
          },
          {
            id: '2c',
            title: 'Tertiary Sector',
            content: [
              { type: 'infoBox', color: 'orange', content: '<strong>Definition:</strong> Tertiary sector mein aisi activities aati hain jo primary aur secondary sectors ke development mein help karti hain.' },
              { type: 'paragraph', text: '<strong>Function:</strong> Yeh activities khud goods produce nahi karti, lekin production process ke liye support provide karti hain.' },
              { type: 'heading', text: 'Support Services ke Examples:'},
              { type: 'list', items: [
                  '<strong>Transport:</strong> Primary ya secondary sectors mein produce hue goods ko trucks ya trains se move karne ki zaroorat hoti hai.',
                  '<strong>Storage:</strong> Kabhi-kabhi, goods ko godowns ya warehouses mein store karna padta hai.',
                  '<strong>Communication:</strong> Business ke liye telephone par logon se baat karna ya letters bhejna zaroori hai.',
                  '<strong>Banking:</strong> Banks se paise udhaar lena production aur trade mein help karta hai.'
              ]},
              { type: 'paragraph', text: '<strong>Essential Services:</strong> Service sector mein essential services bhi shamil hain jo shayad directly production mein help na karein, jaise ki teachers, doctors, barbers, cobblers, aur lawyers.' },
              { type: 'paragraph', text: '<strong>New Services:</strong> Haal hi mein, information technology par based nayi services jaise internet cafes, ATM booths, call centers, aur software companies bahut important ho gayi hain.' },
              { type: 'paragraph', text: '<strong>Also Known As:</strong> Kyonki yeh activities goods ke bajaye services generate karti hain, tertiary sector ko <strong>service sector</strong> bhi kehte hain.' }
            ]
          },
          {
            id: '2d',
            title: 'Sectors ki Interdependence',
            content: [
              { type: 'paragraph', text: 'Teeno economic sectors ek doosre par bahut zyada interdependent hain, yaani ve ek doosre par nirbhar hain.' },
              { type: 'heading', text: 'Interdependence ke Examples:'},
               { type: 'list', items: [
                  '<strong>Secondary, Primary par depend karta hai:</strong> Agar farmers (primary) ek sugar mill (secondary) ko sugarcane bechne se mana kar dein, to mill ko band karna padega.',
                  '<strong>Primary, Secondary par depend karta hai:</strong> Farmers (primary) tractors, pumps, aur fertilizers (secondary) jaise manufactured goods khareedte hain. Agar fertilizers ka price badh jaata hai, to kheti ki laagat badh jaati hai, jisse farmers ka profit kam ho jaata hai.',
                  '<strong>Primary aur Tertiary ek doosre par depend karte hain:</strong> Industrial (secondary) aur service (tertiary) sectors ke logon ko primary sector se food chahiye. Agar transporters (tertiary) hadtal kar dein, to farmers (primary) apne products shehri ilakon mein nahi bech paayenge, jisse food ki kami ho jaayegi.'
              ]}
            ]
          }
        ]
      },
      {
        id: '3',
        title: "Teeno Sectors ko Compare Karna",
        content: [],
        subSections: [
            {
                id: '3a',
                title: 'Production ko Kaise Measure Karein?',
                content: [
                    { type: 'paragraph', text: 'Teeno sectors bahut saare alag-alag goods aur services produce karte hain. Sirf items ke number ko jodna (jaise cars + computers + nails) ajeeb hai.' },
                    { type: 'paragraph', text: 'Ise solve karne ke liye, economists actual numbers ke bajaye goods aur services ki <strong>monetary value</strong> use karne ka sujhav dete hain. Example: Agar 10,000 kg gehu ₹20/kg par becha jaaye, to value hai ₹2,00,000. Agar 5,000 nariyal ₹15 each par beche jaayein, to unki value ₹75,000 hai.' }
                ]
            },
            {
                id: '3b',
                title: 'Final Goods vs. Intermediate Goods',
                content: [
                    { type: 'paragraph', text: '<strong>Final Goods:</strong> Yeh woh goods hain jo directly consumers tak pahunchte hain. Sirf final goods aur services ki value hi ginti jaati hai.' },
                    { type: 'paragraph', text: '<strong>Intermediate Goods:</strong> Yeh woh goods hain jo final goods produce karne ke process mein istemal ho jaate hain. Example ke liye, gehu aur aata intermediate goods hain jo biscuits (final good) banane mein use hote hain.' },
                    { type: 'infoBox', color: 'blue', content: '<strong>Sirf final goods kyon ginte hain?</strong> Final good ki value mein usko banane mein istemal hue sabhi intermediate goods ki value already shamil hoti hai.<br/><strong>Example:</strong> Agar ek farmer gehu ₹20/kg par ek mill ko bechta hai, aur mill ₹25/kg par aata ek biscuit company ko bechti hai, aur company consumers ko ₹80 mein biscuits bechti hai, to hum sirf final value ₹80 ginte hain. Biscuits ke ₹80 mein aate aur gehu ki value already shamil hai.<br/>Gehu, aate, aur biscuits ki value alag-alag ginna galat hoga kyonki iska matlab hoga ki hum same items ki value kai baar gin rahe hain.'}
                ]
            },
            {
                id: '3c',
                title: 'Gross Domestic Product (GDP)',
                content: [
                    { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> Ek country ka <strong>Gross Domestic Product (GDP)</strong> ek particular saal mein us country ke andar produce hue sabhi final goods aur services ki value hai.' },
                    { type: 'paragraph', text: '<strong>Significance:</strong> GDP batata hai ki economy kitni badi hai. Primary, secondary, aur tertiary sectors ke production ka jod GDP deta hai.'},
                    { type: 'paragraph', text: '<strong>Measurement in India:</strong> India mein, yeh bada kaam ek central government ministry karti hai, jo sabhi states aur union territories se information collect karti hai.'}
                ]
            },
             {
                id: '3d',
                title: 'Gross Value Added (GVA)',
                content: [
                    { type: 'paragraph', text: 'Indian government ab aksar teeno sectors ke contribution ko measure karne ke liye <strong>Gross Value Added (GVA)</strong> ka use karti hai.'},
                    { type: 'paragraph', text: 'GVA har sector ke contribution ko taxes aur subsidies ke liye adjust karne ke baad measure karta hai.'}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Sectors mein Historical Changes",
        content: [],
        subSections: [
            {
                id: '4a',
                title: 'Developed Countries mein Pattern',
                content: [
                    { type: 'paragraph', text: '<strong>Stage 1: Primary Sector ka Dominance:</strong> Development ke shuruaati stages mein, primary sector production aur employment ke liye sabse important sector tha. Jaise-jaise kheti ke tareeke behtar hue, zyada food produce hua, jisse log crafts aur trade jaisi doosri activities mein ja sake.' },
                    { type: 'paragraph', text: '<strong>Stage 2: Secondary Sector ki taraf Shift:</strong> Samay ke saath (100 saal se zyada), naye manufacturing methods introduce hue aur factories badhin. Bahut se log khet chhodkar factories mein kaam karne lage. Secondary sector dheere-dheere total production aur employment ke liye sabse important ban gaya.' },
                    { type: 'paragraph', text: '<strong>Stage 3: Tertiary Sector ki taraf Shift:</strong> Pichhle 100 saalon mein, developed countries mein secondary se tertiary sector ki taraf ek aur shift dekha gaya hai. Service sector ab production ke maamle mein sabse important hai, aur zyadatar kaam karne wale log isi sector mein employed hain. Yeh developed countries mein dekha gaya general pattern hai.' }
                ]
            },
            {
                id: '4b',
                title: 'India mein Sectoral Changes',
                content: [
                    { type: 'paragraph', text: '<strong>Production mein Tertiary Sector ki Badhti Importance:</strong><br/>▪ 1977-78 aur 2017-18 ke beech, India mein teeno sectors mein production badha, lekin sabse zyada tertiary sector mein badha.<br/>▪ 2017-18 tak, tertiary sector India ka sabse bada producing sector ban gaya, primary sector ko replace karke.'},
                    { type: 'heading', text: 'Tertiary Sector ke Growth ke Reasons:'},
                    { type: 'list', items: [
                        '<strong>1. Basic Services:</strong> Har desh ko hospitals, schools, police stations, courts, banks, aur transport jaisi basic services chahiye. Ek developing country mein, yeh provide karna government ki responsibility hai.',
                        '<strong>2. Doosre Sectors ka Development:</strong> Jaise-jaise agriculture (primary) aur industry (secondary) develop hote hain, ve transport, trade, aur storage jaisi zyada services ki demand karte hain.',
                        '<strong>3. Badhte Income Levels:</strong> Jab income badhti hai, log tourism, shopping, private schools, aur restaurants jaisi zyada services ki demand karte hain.',
                        '<strong>4. Nayi Technology Services:</strong> Pichhle dashak mein, information aur communication technology par based nayi services zaroori ho gayi hain aur tezi se badh rahi hain.'
                    ]}
                ]
            },
            {
                id: '4c',
                title: 'India mein Zyada Log Kahan Employed Hain?',
                content: [
                    { type: 'paragraph', text: 'Jabki GVA mein tertiary sector ka share kaafi badh gaya hai, employment mein waisa shift nahi hua hai.' },
                    { type: 'paragraph', text: 'Primary sector India mein ab bhi sabse bada employer hai. 2017-18 mein, 44% population primary sector mein employed thi.' },
                    { type: 'paragraph', text: '<strong>Yeh imbalance kyon?</strong> Secondary aur tertiary sectors mein primary sector se workforce ko absorb karne ke liye enough jobs create nahi hui.<br/>▪ Jabki industrial production 9 guna badha, industry mein employment sirf 3 guna badha.<br/>▪ Jabki service sector production 14 guna badha, is sector mein employment sirf 5 guna badha.' }
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Underemployment (Disguised Unemployment)",
        content: [
          { type: 'paragraph', text: '<strong>The Problem:</strong> India ke aadhe se zyada workers primary sector (mainly agriculture) mein hain, lekin ve GVA ka sirf one-sixth hissa hi produce karte hain.' },
          { type: 'paragraph', text: '<strong>Iska matlab kya hai:</strong> Agriculture mein zaroorat se zyada log kaam kar rahe hain. Agar aap kuch logon ko is sector se hata bhi dein, to production par asar nahi padega. Iska matlab hai ki agriculture mein workers underemployed hain.' },
          { type: 'infoBox', color: 'orange', content: '<strong>Definition of Underemployment:</strong> Yeh ek aisi situation hai jahan log kaam karte hue dikh rahe hain, lekin ve sabhi apne potential se kam kaam kar rahe hain.<br/><strong>Also Known As:</strong> Ise disguised unemployment bhi kehte hain kyonki yeh chhipa hua hota hai. Yeh uss insaan ki tarah saaf nahi dikhta jiske paas koi job hi nahi hai.'},
          { type: 'paragraph', text: '<strong>Rural Example:</strong> Ek chhoti kisan Laxmi ke paas do hectare zameen hai. Uske parivaar ke paancho sadasya us par kaam karte hain kyonki unke paas kahin aur kaam nahi hai. Asal mein, kaam ke liye sirf teen logon ki zaroorat hai. Do extra log disguised unemployment ki sthiti mein hain. Agar yeh do log kahin aur kaam karne chale jaayein, to khet ka production kam nahi hoga, aur parivaar ko extra income hogi.'},
          { type: 'paragraph', text: '<strong>Urban Example:</strong> Yeh shehri ilakon mein bhi ho sakta hai. Service sector mein painters, plumbers, ya street vendors jaise hazaron casual workers hain, jo poora din kaam karke bhi bahut kam kamaate hain kyonki unhe har din kaam nahi milta ya unke paas behtar opportunities nahi hoti.'}
        ]
      },
      {
        id: '6',
        title: "Aur Employment Kaise Create Karein",
        content: [
            { type: 'heading', text: 'Agricultural Sector mein:'},
            { type: 'list', items: [
                '<strong>Loans aur Irrigation Provide Karein:</strong> Government ya banks kisanon ko kuen ya nahar banane ke liye loan de sakte hain. Isse ve saal mein doosri fasal uga sakte hain, jisse zyada kaam create hoga.',
                '<strong>Infrastructure mein Invest Karein:</strong> Behtar gramin sadkein, transport, aur storage facilities mein invest karne se kisanon ko apne products aasani se bechne mein madad milegi aur transport aur trade jaisi services mein jobs create hongi.',
                '<strong>Sasta Credit Provide Karein:</strong> Banks se sasta agricultural credit milne se kisan samay par beej, fertilizers, aur equipment khareed sakte hain, jisse unki kheti behtar hoti hai.'
            ]},
            { type: 'heading', text: 'Semi-Rural Areas mein:'},
            { type: 'paragraph', text: '<strong>Local Industries ko Promote Karein:</strong> Semi-rural areas mein industries ko pehchanein, promote karein aur locate karein. Example ke liye, kisanon dwara ugayi gayi daalon ko process karne ke liye ek dal mill lagana, ya kisanon ke liye aalu aur pyaaz store karne ke liye cold storage banana. Isse bade shehron ke bahar jobs create hoti hain.'},
            { type: 'heading', text: 'Service Sector ko Expand Karna:'},
            { type: 'list', items: [
                '<strong>Education:</strong> Sabhi bachchon ko padhane ke liye, hamein aur school buildings, teachers, aur staff chahiye. Ek study ne anuman lagaya ki sirf education sector mein lagbhag 20 lakh jobs create ki ja sakti hain.',
                '<strong>Health:</strong> Health situation ko improve karne ke liye, hamein khaaskar gramin ilakon mein aur doctors, nurses, aur health workers chahiye.',
                '<strong>Tourism:</strong> Agar tourism sector ko improve kiya jaaye, to yeh har saal 35 lakh se zyada logon ko additional employment de sakta hai. Regional crafts ya nayi IT services ko promote karne se bhi jobs create ho sakti hain.'
            ]},
            { type: 'infoBox', color: 'blue', content: '<strong>Short-Term Measures: The Right to Work</strong><br/><strong>MGNREGA 2005:</strong> Central government ne Mahatma Gandhi National Rural Employment Guarantee Act 2005 naam ka ek kanoon लागू kiya.<br/><strong>Yeh kya karta hai:</strong> Yeh gramin ilakon mein un sabhi logon ko jo kaam karne mein saksham hain aur jinhe kaam ki zaroorat hai, saal mein 100 din ke employment ki guarantee deta hai.<br/><strong>Unemployment Allowance:</strong> Agar government employment provide karne mein fail ho jaati hai, to use logon ko unemployment allowances dena padta hai.'}
        ]
      },
      {
        id: '7',
        title: "Classification as Organised and Unorganised Sectors",
        content: [ {type: 'paragraph', text: 'Yeh classification is baat par based hai ki log kaise employed hain aur unke kaam ki conditions kya hain.'} ],
        subSections: [
            {
                id: '7a',
                title: 'Organised Sector',
                content: [
                    { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> Organised sector mein woh workplaces aate hain jahan employment ki shartein regular hoti hain, aur logon ke paas assured kaam hota hai.'},
                    { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>▪ Ve government dwara registered hote hain aur Factories Act aur Minimum Wages Act jaise niyam aur kanoon follow karne hote hain.<br/>▪ Employment ki security hoti hai.<br/>▪ Workers se sirf ek fixed number of hours kaam karne ki ummeed ki jaati hai. Agar ve zyada kaam karte hain to unhe overtime ke paise milte hain.<br/>▪ Workers ko paid leave, chhuttiyon ke dauran payment, provident fund, aur gratuity jaise kai benefits milte hain.<br/>▪ Unhe medical benefits aur ek safe working environment milna chahiye.<br/>▪ Retirement ke baad, workers ko pensions milti hain.'},
                    { type: 'paragraph', text: '<strong>Example:</strong> Kanta, jo ek office mein 9:30 a.m. se 5:30 p.m. tak kaam karti hai, use regular salary, provident fund, aur paid holidays milti hain.'}
                ]
            },
            {
                id: '7b',
                title: 'Unorganised Sector',
                content: [
                    { type: 'infoBox', color: 'orange', content: '<strong>Definition:</strong> Unorganised sector mein chhoti, bikhri hui units hoti hain jo bade paimane par government ke control se bahar hoti hain.'},
                    { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>▪ Yahan niyam to hote hain, lekin unhe aksar follow nahi kiya jaata.<br/>▪ Jobs low-paid aur aksar irregular hoti hain.<br/>▪ Overtime, paid leave, holidays, ya sick leave ke liye koi provision nahi hota.<br/>▪ Employment secure nahi hota. Logon ko bina kisi reason ke kaam se nikala ja sakta hai.<br/>▪ Is sector mein street vendors ya repair workers jaise kai self-employed log, saath hi khet mazdoor bhi shamil hain.'},
                    { type: 'paragraph', text: '<strong>Example:</strong> Kamal, ek grocery shop mein daily wage laborer, lambe ghante kaam karta hai, use koi allowance nahi milta, koi paid leave nahi hai, aur use kabhi bhi nikala ja sakta hai.'}
                ]
            },
            {
                id: '7c',
                title: 'Unorganised Sector ke Workers ko Kaise Protect Karein',
                content: [
                    { type: 'paragraph', text: 'Organised sector mein employment opportunities bahut dheere-dheere badh rahi hain. Kai workers ko unorganised sector mein kam-vetan wali, insecure jobs karne ke liye majboor hona padta hai.' },
                    { type: 'paragraph', text: '<strong>Vulnerable Groups:</strong><br/>▪ Rural Areas mein: Bhumihin khet mazdoor, chhote aur seemant kisan, bataidar, aur karigar (bunkar, lohar, badhai). Lagbhag 80% gramin parivar chhote aur seemant kisan hain jinhe support ki zaroorat hai.<br/>▪ Urban Areas mein: Small-scale industries ke workers, construction aur transport mein casual workers, street vendors, head-load workers, aur rag pickers.<br/>▪ Socially Vulnerable: Scheduled Castes, Scheduled Tribes, aur backward communities ke zyadatar workers unorganised sector mein paaye jaate hain, jahan unhe social discrimination ka bhi saamna karna padta hai.' },
                    { type: 'paragraph', text: '<strong>Kya Zaroori Hai?</strong> In workers ko protection aur support ki zaroorat hai. Kisanon ko samay par beej, credit, storage, aur marketing outlets ki delivery chahiye. Small industries ko raw materials haasil karne aur apne goods ko market karne mein madad chahiye.' }
                ]
            }
        ]
      },
      {
        id: '8',
        title: "Classification by Ownership: Public and Private Sectors",
        content: [ {type: 'paragraph', text: 'Yeh classification is baat par based hai ki assets (jaise machinery ya buildings) ka maalik kaun hai aur services deliver karne ke liye kaun responsible hai.'} ],
        subSections: [
            {
                id: '8a',
                title: 'Public Sector',
                content: [
                    { type: 'infoBox', color: 'blue', content: '<strong>Definition:</strong> Public sector mein, government zyadatar assets ki maalik hoti hai aur services provide karti hai.'},
                    { type: 'paragraph', text: '<strong>Motive:</strong> Maqsad sirf profit kamana nahi, balki public ka kalyan karna hai. Government kharchon ko poora karne ke liye taxes se paisa ikattha karti hai.'},
                    { type: 'paragraph', text: '<strong>Examples:</strong> Indian Railways, Post Office.'},
                    { type: 'heading', text: 'Government yeh activities kyon karti hai?'},
                    { type: 'list', items: [
                        '<strong>1. Heavy Spending:</strong> Sadkein, railways, pul, aur dams banane jaisi kuch activities mein bahut paisa lagta hai jo private sector ki capacity se bahar hai.',
                        '<strong>2. Supporting Key Industries:</strong> Government ko doosri industries, khaaskar small-scale units, ko support karne ke liye kam daam par electricity jaisi services deni pad sakti hai.',
                        '<strong>3. Supporting Farmers and Consumers:</strong> Government kisanon se gehu aur chawal jaisi faslon ko "fair price" par khareedti hai aur ration shops ke through consumers ko kam daam par bechti hai.',
                        '<strong>4. Primary Responsibility:</strong> Sabke liye health aur education jaisi zaroori suvidhayein pradan karna government ki duty hai. Use safe drinking water, gareebon ke liye housing, aur proper nutrition tak pahunch bhi sunishchit karni chahiye.'
                    ]}
                ]
            },
            {
                id: '8b',
                title: 'Private Sector',
                content: [
                    { type: 'infoBox', color: 'green', content: '<strong>Definition:</strong> Private sector mein, assets ka ownership aur services ki delivery private individuals ya companies ke haath mein hoti hai.'},
                    { type: 'paragraph', text: '<strong>Motive:</strong> Private sector mein activities ka main goal profit kamana hota hai. Hamein unki services lene ke liye in companies ko paise dene padte hain.'},
                    { type: 'paragraph', text: '<strong>Examples:</strong> Tata Iron and Steel Company Limited (TISCO), Reliance Industries Limited (RIL).'}
                ]
            }
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
function EconomicsChapterSectors() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true, '4': true, '7': true, '8': true });

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

export default EconomicsChapterSectors;
