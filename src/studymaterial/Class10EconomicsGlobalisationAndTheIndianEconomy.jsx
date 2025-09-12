import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 4: Globalisation and the Indian Economy",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Changing Market",
        content: [
          { type: 'paragraph', text: 'In today\'s world, we as consumers have a huge variety of goods and services to choose from. Just a couple of decades ago, the Indian markets were very different. For example, the only cars you would see on the roads were the Ambassador and the Fiat.' },
          { type: 'heading', text: 'Today\'s Market:'},
          { type: 'paragraph', text: 'Now, our markets have completely transformed. We can buy the latest models of digital cameras, mobile phones, and televisions from the best companies in the world. We can see new models of cars from almost all the top companies in the world on Indian roads. This variety is not just for cars; it\'s seen in everything from shirts and TVs to processed fruit juices.'},
          { type: 'paragraph', text: 'This chapter will help us understand these big changes, the reasons behind them, and how they affect the lives of ordinary people.'}
        ]
      },
      {
        id: '2',
        title: "Production of Goods Across Different Countries",
        content: [
          { type: 'paragraph', text: 'In the Past (before the mid-20th century): Production of goods was mostly done within a single country. What countries traded were mainly raw materials, food, and finished products. Trade was the main way to connect different countries.' },
          { type: 'heading', text: 'The Rise of MNCs:'},
          { type: 'paragraph', text: 'This changed with the arrival of large companies called <strong>Multinational Corporations (MNCs)</strong>.' },
          { type: 'infoBox', color: 'blue', content: '<strong>What is an MNC?</strong> An MNC is a company that owns or controls the production of its goods in more than one country. They set up offices and factories in places where they can find <strong>cheap labor</strong> and other resources to keep the cost of production low and make greater profits.'},
          { type: 'paragraph', text: '<strong>How MNCs Spread Their Production: An Example</strong><br/>By splitting the production process across the globe (e.g., designing in the US, manufacturing parts in China, assembling in Mexico, and customer care in India), an MNC can save 50-60% on its costs.'}
        ]
      },
      {
        id: '3',
        title: "How Production in Different Countries is Linked Together",
        content: [
          { type: 'paragraph', text: 'MNCs look for specific conditions before setting up. They set up where they are <strong>close to the markets</strong>, can find <strong>skilled and unskilled labor at low costs</strong>, have other factors like raw materials available, and where <strong>government policies are favorable</strong>.' },
          { type: 'paragraph', text: 'The money an MNC spends to buy assets like land and machines is called an <strong>investment</strong>. When an MNC makes this investment, it is called a <strong>foreign investment</strong>.' },
          { type: 'heading', text: 'Different Ways MNCs Control Production:'},
          { type: 'list', items: [
              '<strong>1. Partnership with Local Companies (Joint Production):</strong> MNCs team up with local companies, providing money and the latest technology.',
              '<strong>2. Buying Local Companies:</strong> The most common way is to buy a local company and then expand its production. For example, Cargill Foods, an American MNC, bought Parakh Foods in India.',
              '<strong>3. Placing Orders with Small Producers:</strong> Large MNCs place orders for products like garments and footwear with small producers worldwide. The MNC then sells these products under its own brand name, controlling the price, quality, and labor conditions.'
          ]},
          { type: 'paragraph', text: 'Through these methods, production in widely scattered locations becomes <strong>interlinked</strong>.'}
        ]
      },
      {
        id: '4',
        title: "Foreign Trade and the Connection of Markets",
        content: [
          { type: 'paragraph', text: '<strong>Foreign trade</strong> has long been the main way of connecting countries. It allows producers to sell their goods outside their domestic markets and gives buyers a wider choice of goods.' },
          { type: 'infoBox', color: 'green', content: '<strong>How Foreign Trade Integrates Markets: The Example of Chinese Toys</strong><br/>Chinese toy makers export cheaper, newly designed toys to India. Buyers in India get more choice at lower prices. Within a year, Chinese toys become dominant in the market. This creates a great opportunity for Chinese makers but causes huge losses for Indian toy makers.'},
          { type: 'paragraph', text: 'The result of foreign trade is that goods travel between markets, choices increase, prices of similar goods tend to equalize, and producers from different countries must <strong>compete directly</strong> with each other. This is how foreign trade <strong>integrates markets</strong>.'}
        ]
      },
      {
        id: '5',
        title: "What is Globalisation?",
        content: [
          { type: 'paragraph', text: '<strong>Globalisation</strong> is the process of rapid integration or interconnection between countries. This connection happens through:' },
          { type: 'list', items: [
              'Greater <strong>Foreign Trade</strong>',
              'Greater <strong>Foreign Investment</strong> by MNCs'
          ]},
          { type: 'paragraph', text: 'Besides goods, services, and investments, countries are also connected through the <strong>movement of people</strong> seeking better jobs, income, or education.'}
        ]
      },
      {
        id: '6',
        title: "Factors That Have Helped Globalisation",
        content: [],
        subSections: [
            {
                id: '6a',
                title: '1. Technology',
                content: [
                    { type: 'paragraph', text: 'Rapid improvements in technology have been a major factor.'},
                    { type: 'paragraph', text: '<strong>Transportation Technology:</strong> Over the last 50 years, huge improvements have made it possible to deliver goods over long distances much faster and at lower costs. The use of containers has been a big change.'},
                    { type: 'paragraph', text: '<strong>Information and Communication Technology (IT):</strong> Developments in telecommunications, computers, and the internet allow us to share information instantly across the world at almost no cost. IT has played a huge role in spreading the production of services.'}
                ]
            },
            {
                id: '6b',
                title: '2. Liberalisation of Foreign Trade and Investment',
                content: [
                    { type: 'paragraph', text: 'A <strong>trade barrier</strong> is a restriction set by a government to control foreign trade, like a tax on imports. After independence, India had trade barriers to protect its own producers.'},
                    { type: 'infoBox', color: 'blue', content: '<strong>What is Liberalisation?</strong><br/>Around 1991, India made major policy changes. The government decided it was time for Indian producers to compete globally. <strong>Liberalisation</strong> means removing the barriers or restrictions set by the government on foreign trade and investment. This means goods could be imported and exported easily, and foreign companies could set up factories more freely.'}
                ]
            }
        ]
      },
      {
        id: '7',
        title: "World Trade Organisation (WTO)",
        content: [
          { type: 'paragraph', text: 'The <strong>World Trade Organisation (WTO)</strong> is a powerful international organisation whose main goal is to <strong>liberalise international trade</strong>. It was started mainly by developed countries and establishes rules for international trade.' },
          { type: 'infoBox', color: 'orange', content: '<strong>Is the WTO Fair?</strong><br/>Although the WTO is supposed to allow "free trade for all," in reality, <strong>developed countries have unfairly kept their trade barriers</strong>. At the same time, WTO rules have <strong>forced developing countries like India to remove their trade barriers</strong>. For example, the US government gives huge subsidies to its farmers, allowing them to sell products at abnormally low prices in other countries, which harms the farmers in those countries. Developing countries argue this is not "free and fair trade".'}
        ]
      },
      {
        id: '8',
        title: "The Impact of Globalisation in India",
        content: [
          { type: 'paragraph', text: 'The effect of globalisation has not been the same for everyone in India.' },
          { type: 'heading', text: 'Positive Impacts (Who has benefited?)'},
          { type: 'list', items: [
              '<strong>Consumers:</strong> Well-off people in cities now have greater choice, improved quality, and lower prices for many products.',
              '<strong>MNCs:</strong> They have profitably increased their investments in India, creating new jobs in industries like cell phones and automobiles.',
              '<strong>Top Indian Companies:</strong> They have benefited from competition by investing in new technology, and some have become multinationals themselves (e.g., Tata Motors, Infosys).',
              '<strong>Service Companies:</strong> New opportunities have been created for companies providing IT services.'
          ]},
          { type: 'heading', text: 'Negative Impacts (Who has been hurt?)'},
          { type: 'list', items: [
              '<strong>Small Producers:</strong> Many have been hit hard by competition. Industries like batteries, plastics, and toys have suffered, leading to many workers becoming jobless.',
              '<strong>Workers and Employment:</strong> Jobs have become very uncertain. Employers now prefer to hire workers <strong>"flexibly"</strong> on a temporary basis without job security. To cut costs, workers are made to work long hours for low wages.'
          ]},
          { type: 'paragraph', text: 'To attract foreign investment, governments have set up <strong>Special Economic Zones (SEZs)</strong> with world-class facilities and tax exemptions. They have also allowed <strong>flexibility in labor laws</strong>, making it easier for companies to hire workers temporarily.'}
        ]
      },
      {
        id: '9',
        title: "The Struggle for a Fair Globalisation",
        content: [
          { type: 'paragraph', text: 'It is clear that not everyone has benefited from globalisation. People with education, skill, and wealth have done well, but many others have not shared the benefits.' },
          { type: 'infoBox', color: 'green', content: '<strong>What is Fair Globalisation?</strong><br/>Since globalisation is here to stay, the question is how to make it more <strong>\'fair\'</strong>. Fair globalisation would create opportunities for everyone and also make sure that the benefits are shared better.'},
          { type: 'paragraph', text: '<strong>The Role of the Government:</strong> The government can play a major role by ensuring labor laws are implemented, supporting small producers, using trade barriers if needed, and negotiating for fairer rules at the WTO.'},
          { type: 'paragraph', text: '<strong>The Role of the People:</strong> In recent years, massive campaigns by people\'s organisations have influenced important decisions at the WTO. This shows that people can also play an important role in the struggle for fair globalisation.'}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 4: Globalisation and the Indian Economy",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Changing Market",
        content: [
          { type: 'paragraph', text: 'Aaj ki duniya mein, hum consumers ke paas goods aur services ki ek bahut badi variety hai. Kuch decades pehle, Indian markets bahut alag the. Example ke liye, sadkon par sirf <strong>Ambassador</strong> aur <strong>Fiat</strong> cars hi dikhti thi.' },
          { type: 'heading', text: 'Aaj ka Market:'},
          { type: 'paragraph', text: 'Ab, hamare markets poori tarah se transform ho chuke hain. Hum duniya ki best companies ke latest models of digital cameras, mobile phones, aur televisions khareed sakte hain. Hum Indian roads par duniya ki lagbhag sabhi top companies ke naye models of cars dekh sakte hain. Yeh variety sirf cars ke liye nahi hai; yeh shirts aur TVs se lekar processed fruit juices tak har cheez mein dikhti hai.'},
          { type: 'paragraph', text: 'Yeh chapter hamein in bade changes ko, unke peeche ke reasons ko, aur ve aam logon ki life ko kaise affect karte hain, samajhne mein help karega.'}
        ]
      },
      {
        id: '2',
        title: "Production of Goods Across Different Countries",
        content: [
          { type: 'paragraph', text: '<strong>Past mein (mid-20th century se pehle):</strong> Goods ka production zyadatar ek hi country ke andar hota tha. Countries jo trade karti thi, woh mainly raw materials, food, aur finished products the. Trade hi alag-alag countries ko connect karne ka main tareeka tha.' },
          { type: 'heading', text: 'MNCs ka Uday:'},
          { type: 'paragraph', text: 'Yeh sab <strong>Multinational Corporations (MNCs)</strong> naam ki badi companies ke aane se badal gaya.' },
          { type: 'infoBox', color: 'blue', content: '<strong>Ek MNC kya hai?</strong> Ek MNC ek aisi company hai jo ek se zyada country mein apne goods ka production own ya control karti hai. Ve aisi jagahon par offices aur factories set up karte hain jahan unhein <strong>cheap labor</strong> aur doosre resources mil sakein taaki production ki cost kam rahe aur MNC zyada profit kama sake.'},
          { type: 'paragraph', text: '<strong>MNCs Apna Production Kaise Failate Hain: Ek Example</strong><br/>Production process ko duniya bhar mein baant kar (jaise, US mein design, China mein manufacturing, Mexico mein assembly, aur India mein customer care), ek MNC apni costs par 50-60% tak bacha sakti hai.'}
        ]
      },
      {
        id: '3',
        title: "How Production in Different Countries is Linked Together",
        content: [
          { type: 'paragraph', text: 'MNCs set up karne se pehle specific conditions dekhti hain. Ve wahan set up karte hain jahan ve <strong>markets ke close</strong> hon, jahan unhein kam costs par <strong>skilled aur unskilled labor</strong> mil sake, jahan raw materials jaise doosre factors available hon, aur jahan <strong>government policies unke favor mein</strong> hon.' },
          { type: 'paragraph', text: 'Ek MNC dwara land aur machines jaise assets khareedne par kharch kiya gaya paisa <strong>investment</strong> kehlata hai. Jab ek MNC yeh investment karti hai, to ise <strong>foreign investment</strong> kehte hain.' },
          { type: 'heading', text: 'Alag-Alag Tareeke Jinse MNCs Production Control Karti Hain:'},
          { type: 'list', items: [
              '<strong>1. Local Companies ke saath Partnership (Joint Production):</strong> MNCs local companies ke saath team up karti hain, paisa aur latest technology provide karti hain.',
              '<strong>2. Local Companies ko Khareedna:</strong> Sabse common tareeka hai ek local company ko khareedna aur phir uska production expand karna. Example: American MNC Cargill Foods ne India mein Parakh Foods ko khareed liya.',
              '<strong>3. Chhote Producers ko Orders Dena:</strong> Badi MNCs duniya bhar ke chhote producers ko garments aur footwear jaise products ke liye orders deti hain. MNC phir in products ko apne brand name ke under bechti hai, price, quality, aur labor conditions ko control karte hue.'
          ]},
          { type: 'paragraph', text: 'In sabhi methods ke through, alag-alag jagahon par production <strong>interlinked</strong> ho jaata hai.'}
        ]
      },
      {
        id: '4',
        title: "Foreign Trade and the Connection of Markets",
        content: [
          { type: 'paragraph', text: '<strong>Foreign trade</strong> lambe samay se deshon ko jodne ka mukhya tarika raha hai. Yah producers ko apne maal ko apne desh ke markets (domestic markets) ke bahar bechne ki anumati deta hai aur kharidaron ko maal ki ek vistrit pasand deta hai.' },
          { type: 'infoBox', color: 'green', content: '<strong>Foreign Trade Markets ko Kaise Integrate Karta Hai: Chinese Toys ka Example</strong><br/>Chinese toy makers apne saste aur naye design ke toys India mein export karte hain. India mein buyers ko kam daam par zyada choice milti hai. Ek saal ke andar, Chinese toys market mein dominant ho jaate hain. Isse Chinese makers ko toh fayda hota hai lekin Indian toy makers ko bhaari nuksaan hota hai.'},
          { type: 'paragraph', text: 'Foreign trade ke result se, goods ek market se doosre market mein jaate hain, buyers ke liye choices badhti hain, alag-alag deshon mein similar goods ke prices barabar hone lagte hain, aur alag-alag deshon ke producers ko ek doosre ke saath <strong>directly compete</strong> karna padta hai. Is tarah foreign trade alag-alag deshon ke markets ko <strong>integrate</strong> karta hai.'}
        ]
      },
      {
        id: '5',
        title: "What is Globalisation?",
        content: [
          { type: 'paragraph', text: '<strong>Globalisation</strong> deshon ke beech tezi se integration ya interconnection ka process hai. Yeh connection inke through hota hai:' },
          { type: 'list', items: [
              'Greater <strong>Foreign Trade</strong>',
              'MNCs dwara Greater <strong>Foreign Investment</strong>'
          ]},
          { type: 'paragraph', text: 'Goods, services, aur investments ke alawa, deshon ko behtar jobs, income, ya education ke liye doosre deshon mein jaane wale <strong>logon ke movement</strong> se bhi joda jaata hai.'}
        ]
      },
      {
        id: '6',
        title: "Factors That Have Helped Globalisation",
        content: [],
        subSections: [
            {
                id: '6a',
                title: '1. Technology',
                content: [
                    { type: 'paragraph', text: 'Technology mein tezi se sudhaar ek major factor raha hai.'},
                    { type: 'paragraph', text: '<strong>Transportation Technology:</strong> Pichhle 50 saalon mein, isne lambi doori tak goods ko tezi se aur kam laagat par deliver karna possible bana diya hai. Containers ka use ek bada badlaav raha hai.'},
                    { type: 'paragraph', text: '<strong>Information and Communication Technology (IT):</strong> Telecommunications, computers, aur internet mein developments ne hamein duniya bhar mein turant information share karne ki anumati di hai. IT ne services ke production ko failane mein ek bada role nibhaya hai.'}
                ]
            },
            {
                id: '6b',
                title: '2. Liberalisation of Foreign Trade and Investment',
                content: [
                    { type: 'paragraph', text: 'Ek <strong>trade barrier</strong> foreign trade ko control karne ke liye government dwara lagayi gayi ek restriction hai, jaise imports par tax. Aazadi ke baad, India ne apne producers ko protect karne ke liye trade barriers lagaye the.'},
                    { type: 'infoBox', color: 'blue', content: '<strong>Liberalisation kya hai?</strong><br/>1991 ke aas-paas, India ne badi policy changes ki. Government ne decide kiya ki ab Indian producers ko duniya bhar ke producers ke saath compete karna chahiye. <strong>Liberalisation</strong> ka matlab hai foreign trade aur investment par government dwara lagaye gaye barriers ya restrictions ko hatana. Iska matlab hai ki ab goods aasani se import aur export kiye ja sakte the, aur foreign companies India mein factories set up kar sakti thi.'}
                ]
            }
        ]
      },
      {
        id: '7',
        title: "World Trade Organisation (WTO)",
        content: [
          { type: 'paragraph', text: '<strong>World Trade Organisation (WTO)</strong> ek powerful international organisation hai jiska main goal international trade ko <strong>liberalise</strong> karna hai. Ise mainly developed countries ne shuru kiya tha aur yeh international trade ke liye rules banati hai.' },
          { type: 'infoBox', color: 'orange', content: '<strong>Kya WTO Fair hai?</strong><br/>Halaanki WTO ko "sabke liye free trade" anumati deni chahiye, lekin reality mein, <strong>developed countries ne anuchit dhang se apne trade barriers banaye rakhe hain</strong>. Saath hi, WTO ke niyamon ne <strong>developing countries jaise India ko apne trade barriers hatane ke liye majboor kiya hai</strong>. Example: US government apne kisanon ko bhaari subsidies deti hai, jisse ve doosre deshon mein apne products bahut kam daam par bech paate hain, jo un deshon ke kisanon ko nuksaan pahunchata hai. Developing countries ise "free and fair trade" nahi maanti.'}
        ]
      },
      {
        id: '8',
        title: "The Impact of Globalisation in India",
        content: [
          { type: 'paragraph', text: 'Globalisation ka prabhav India mein sabke liye ek jaisa nahi raha hai.' },
          { type: 'heading', text: 'Positive Impacts (Kise fayda hua hai?)'},
          { type: 'list', items: [
              '<strong>Consumers:</strong> Shehron mein ameer logon ko ab zyada choice, behtar quality, aur kam daam milte hain.',
              '<strong>MNCs:</strong> Unhone India mein apne investments badhaye hain, jisse cell phones aur automobiles jaisi industries mein nayi jobs create hui hain.',
              '<strong>Top Indian Companies:</strong> Unhein competition se fayda hua hai, unhone nayi technology mein invest kiya hai, aur kuch khud multinationals ban gaye hain (jaise, Tata Motors, Infosys).',
              '<strong>Service Companies:</strong> IT services provide karne wali companies ke liye naye opportunities create hui hain.'
          ]},
          { type: 'heading', text: 'Negative Impacts (Kise nuksaan hua hai?)'},
          { type: 'list', items: [
              '<strong>Small Producers:</strong> Bahut se chhote producers ko competition se badi chunautiyon ka saamna karna pada hai. Batteries, plastics, aur toys jaisi industries ko nuksaan hua hai, jisse kai workers berozgar ho gaye hain.',
              '<strong>Workers and Employment:</strong> Jobs bahut <strong>uncertain</strong> ho gayi hain. Employers ab workers ko <strong>"flexibly"</strong> hire karna pasand karte hain, yaani temporary basis par bina job security ke. Laagat kam karne ke liye, workers se kam wages par lambe ghante kaam karaya jaata hai.'
          ]},
          { type: 'paragraph', text: 'Foreign investment ko attract karne ke liye, governments ne <strong>Special Economic Zones (SEZs)</strong> banaye hain jahan world-class facilities aur tax exemptions hain. Unhone <strong>labor laws mein flexibility</strong> ki bhi anumati di hai.'}
        ]
      },
      {
        id: '9',
        title: "The Struggle for a Fair Globalisation",
        content: [
          { type: 'paragraph', text: 'Yeh saaf hai ki globalisation se sabko fayda nahi hua hai. Education, skill, aur wealth wale logon ne achha kiya hai, lekin bahut se doosron ko iska fayda nahi mila hai.' },
          { type: 'infoBox', color: 'green', content: '<strong>Fair Globalisation kya hai?</strong><br/>Kyonki globalisation yahan rehne ke liye hai, sawaal yeh hai ki ise aur zyada <strong>\'fair\'</strong> kaise banaya jaaye. Fair globalisation sabke liye opportunities create karega aur yeh bhi sunishchit karega ki iske benefits behtar dhang se share kiye jaayein.'},
          { type: 'paragraph', text: '<strong>Government ka Role:</strong> Government <strong>labor laws</strong> ko theek se implement karke, <strong>small producers</strong> ko support karke, zaroorat padne par <strong>trade barriers</strong> ka use karke, aur <strong>WTO</strong> mein \'fairer rules\' ke liye negotiate karke ek bada role nibha sakti hai.'},
          { type: 'paragraph', text: '<strong>Logon ka Role:</strong> Haal ke varshon mein, logon ke sangathanon dwara bade paimane par abhiyaanon ne WTO ke mahatvapurna faislon ko prabhavit kiya hai. Yeh dikhata hai ki <strong>log</strong> bhi fair globalisation ke sangharsh mein ek mahatvapurna bhumika nibha sakte hain.'}
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
function Class10EconomicsGlobalisationAndTheIndianEconomy() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '6': true });

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

export default Class10EconomicsGlobalisationAndTheIndianEconomy;
