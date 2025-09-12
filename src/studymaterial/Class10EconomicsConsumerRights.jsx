import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 5: Consumer Rights",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "The Consumer in the Marketplace",
        content: [
          { type: 'paragraph', text: '<strong>Producers and Consumers:</strong> We all participate in the market in two main ways: as producers of goods and services and as consumers. As producers, we might work in sectors like agriculture, industry, or services. As consumers, we buy the final goods and services that we need.' },
          { type: 'paragraph', text: '<strong>Need for Rules and Regulations:</strong> Just like rules are needed to protect workers in the unorganised sector or to prevent moneylenders from charging high interest rates, rules are also necessary to protect consumers in the marketplace.' },
           { type: 'paragraph', text: '<strong>Examples of Exploitation:</strong><br/>Moneylenders can use tricks to trap borrowers, like forcing them to sell their produce at low prices. Workers in the unorganised sector often get low wages and have to work in unfair and unsafe conditions. To prevent this kind of exploitation, rules and regulations are essential. Many organisations have fought for a long time to make sure these rules are followed.' },
          { type: 'paragraph', text: '<strong>Consumer Vulnerability:</strong><br/>In the market, individual consumers are often in a weak position. When a consumer has a complaint about a product or service, the seller often tries to blame the buyer. The common attitude is, "If you don\'t like it, go somewhere else," as if the seller has no responsibility after the sale.'},
          { type: 'heading', text: 'Types of Exploitation in the Marketplace:'},
          { type: 'list', items: [
              '<strong>Unfair Trade Practices:</strong> Sellers sometimes engage in unfair practices. For instance, a shopkeeper might weigh less than the correct amount, add hidden charges, or sell adulterated (impure) or defective goods.',
              '<strong>Market Imbalance:</strong> Markets often don\'t work fairly when there are only a few powerful producers and many scattered consumers buying in small amounts. This is especially true when large companies are involved.',
              '<strong>Manipulation by Large Companies:</strong> Companies with a lot of wealth and power can manipulate the market. They might spread false information through media to attract customers.'
          ]},
          { type: 'infoBox', color: 'orange', content: '<strong>Example 1:</strong> A company sold baby milk powder worldwide for years, claiming it was better than mother\'s milk. It took a long legal battle for the company to admit its claims were false.<br/><br/><strong>Example 2:</strong> Cigarette companies had to be taken to court for them to accept that their products could cause cancer.<br/><br/>These examples show why rules and regulations are needed to protect consumers.'}
        ]
      },
      {
        id: '2',
        title: "The Consumer Movement",
        content: [
          { type: 'paragraph', text: '<strong>Origins:</strong> The consumer movement started because consumers were unhappy with the many unfair practices used by sellers. Initially, there was no legal system to protect consumers from this exploitation.' },
          { type: 'paragraph', text: 'In the past, if a consumer was unhappy with a product, they would simply stop buying it. It was widely believed that it was the consumer\'s own responsibility to be careful when buying something.' },
          { type: 'heading', text: 'Evolution of the Movement in India:'},
          { type: 'list', items: [
              '<strong>Early Stages (1960s):</strong> The movement began in an organised way in the 1960s due to problems like food shortages, hoarding (stockpiling goods to create artificial scarcity), black marketing, and adulteration of food and oil.',
              '<strong>1970s:</strong> Until the 1970s, consumer organisations mainly focused on writing articles and holding exhibitions. They formed groups to look into malpractices at ration shops and overcrowding in public transport.'
          ]},
          { type: 'paragraph', text: '<strong>A Shift in Responsibility:</strong> Over many years, organisations in India and around the world worked to raise awareness. This gradually shifted the responsibility for ensuring the quality of goods and services onto the sellers.'},
          { type: 'paragraph', text: '<strong>International Recognition:</strong><br/>In 1985, the United Nations adopted the UN Guidelines for Consumer Protection. This gave nations a framework to protect consumers and encouraged advocacy groups to push their governments for better laws. Today, Consumers International is an umbrella organization for over 200 member groups from more than 100 countries.'},
          { type: 'infoBox', color: 'blue', content: '<strong>Major Step in India: COPRA</strong><br/>Due to the efforts of the consumer movement, there was pressure on businesses and the government to change unfair practices. A significant achievement was the enactment of the <strong>Consumer Protection Act of 1986</strong>, commonly known as <strong>COPRA</strong>, by the Indian government.'}
        ]
      },
      {
        id: '3',
        title: "Consumer Rights",
        content: [],
        subSections: [
            {
                id: '3a',
                title: 'The Right to Safety',
                content: [
                    { type: 'paragraph', text: '<strong>What it means:</strong> As consumers, we have the right to be protected against goods and services that are dangerous to our life and property.'},
                    { type: 'infoBox', color: 'green', content: '<strong>Case Study: Reji\'s Suffering</strong><br/>Reji Mathew, a healthy Class IX student, was admitted to a private clinic in Kerala to have his tonsils removed. Due to improper anaesthesia administered by the surgeon, Reji suffered brain abnormalities and was crippled for life. His father filed a complaint seeking compensation for medical negligence. The State Commission dismissed the case, citing insufficient evidence. The family then appealed to the National Consumer Disputes Redressal Commission in New Delhi. The National Commission found the hospital guilty of medical negligence and ordered it to pay compensation.'},
                    { type: 'paragraph', text: '<strong>Producers\' Responsibility:</strong> Producers must strictly follow all required safety rules and regulations. For example, a pressure cooker has a safety valve. If this valve is defective, it can cause a serious accident. The manufacturer must ensure the valve is of high quality.'},
                    { type: 'paragraph', text: '<strong>Enforcement:</strong> Government action is needed to ensure that quality standards are maintained. However, low-quality products are still found in the market because the supervision of these rules is often weak, and the consumer movement isn\'t strong enough.'}
                ]
            },
            {
                id: '3b',
                title: 'The Right to be Informed',
                content: [
                    { type: 'paragraph', text: '<strong>What it means:</strong> Consumers have the right to be informed about the details of the goods and services they buy.'},
                    { type: 'paragraph', text: '<strong>Information on Packaging:</strong> When you buy a product, the packaging contains important details such as: Ingredients used, Price (Maximum Retail Price or MRP), Batch number, date of manufacture, and expiry date, and Address of the manufacturer.'},
                    { type: 'paragraph', text: '<strong>Why is this information important?</strong> It allows consumers to complain and ask for compensation or a replacement if the product is defective. For example, if a product is found to be defective before its expiry date, it can be replaced. Printing the MRP prevents sellers from charging more than the listed price. Consumers can even bargain for a price lower than the MRP.'},
                    { type: 'infoBox', color: 'blue', content: '<strong>The Right to Information (RTI) Act:</strong><br/>In October 2005, the Indian government enacted the <strong>Right to Information (RTI) Act</strong>. This law gives citizens the right to get information about the functions of government departments.<br/><br/><strong>Case Study: Amritha\'s Job Application:</strong><br/>Amritha, an engineering graduate, applied for a government job. After her interview, she received no news about the result, and officials wouldn\'t answer her questions. She used the RTI Act to file an application, stating it was her right to know the result in a reasonable time. As a result, she was not only told the reason for the delay but also received her appointment letter.'}
                ]
            },
            {
                id: '3c',
                title: 'The Right to Choose',
                content: [
                    { type: 'paragraph', text: '<strong>What it means:</strong> Every consumer has the right to choose whether to buy a product or service, regardless of their age or gender. No one can force you to buy something you don\'t want.'},
                    { type: 'infoBox', color: 'orange', content: '<strong>Case Study: Abirami\'s Coaching Class</strong><br/>Abirami joined a two-year coaching course and paid the full fee of ₹61,020 upfront. She found the teaching quality to be poor and decided to leave after one year. When she asked for a refund for the second year, the institute refused. She filed a case in the District Consumer Commission, which ordered the institute to refund ₹28,000, stating she had the right to choose. The institute appealed to the State Commission, which not only upheld the district court\'s decision but also fined the institute for its frivolous appeal and ordered it to pay compensation.'},
                    { type: 'paragraph', text: '<strong>Common Violations:</strong><br/>A shop owner insisting you must buy a toothbrush if you want to buy toothpaste.<br/>Gas suppliers forcing you to buy a stove from them when you get a new gas connection.<br/>In these situations, consumers are left with no choice.'}
                ]
            },
            {
                id: '3d',
                title: 'The Right to Seek Redressal',
                content: [
                    { type: 'paragraph', text: '<strong>What it means:</strong> Consumers have the right to seek solutions (redressal) against unfair trade practices and exploitation. If a consumer is harmed, they have the right to get compensation based on the extent of the damage.'},
                    { type: 'paragraph', text: '<strong>How to Get Justice:</strong><br/>The <strong>Consumer Protection Act (COPRA)</strong> provides for a three-tier system of consumer courts (also known as consumer forums or Consumer Disputes Redressal Commissions). This system is "quasi-judicial," meaning it works like a court but is more flexible.'},
                    { type: 'paragraph', text: '<strong>The Three-Tier System:</strong><br/>• <strong>District Consumer Disputes Redressal Commission:</strong> Deals with cases involving claims up to ₹1 crore.<br/>• <strong>State Commission:</strong> Deals with cases involving claims between ₹1 crore and ₹10 crore.<br/>• <strong>National Commission:</strong> Deals with cases involving claims exceeding ₹10 crore.'},
                    { type: 'paragraph', text: 'If a consumer\'s case is dismissed at the district level, they can appeal to the state level, and then to the national level.'},
                    { type: 'paragraph', text: '<strong>Consumer Forums:</strong><br/>There are many consumer organisations, often called <strong>consumer forums</strong> or <strong>consumer protection councils</strong>. These groups guide consumers on how to file cases and sometimes even represent them in the consumer commissions. They often receive financial support from the government to create public awareness.'}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Becoming a Well-Informed Consumer",
        content: [
          { type: 'paragraph', text: '<strong>Consumer Consciousness:</strong> When consumers become aware of their rights, they can make informed choices about the goods and services they purchase. This requires knowledge and skill.' },
          { type: 'paragraph', text: '<strong>Government\'s Role:</strong> The enactment of COPRA led to the creation of separate Departments of Consumer Affairs at the central and state levels. The government uses posters and TV advertisements to spread awareness about consumer rights and the legal processes available. The "Jago Grahak Jago" campaign is a well-known example.'},
          { type: 'heading', text: 'Quality Certification Marks:'},
          { type: 'paragraph', text: 'To ensure quality, certain logos and certifications are used on products. These help consumers identify goods that meet specific standards.'},
          { type: 'list', items: [
              '<strong>ISI Mark:</strong> Found on industrial and consumer goods. For certain products that affect health and safety (like LPG cylinders, cement, packaged water), this mark is mandatory.',
              '<strong>Agmark:</strong> Used for agricultural products like cereals and edible oils.',
              '<strong>Hallmark:</strong> A certification for the purity of jewellery.'
          ]}
        ]
      },
      {
        id: '5',
        title: "Taking the Consumer Movement Forward",
        content: [
          { type: 'paragraph', text: '<strong>National Consumers\' Day:</strong> India celebrates December 24th as National Consumers\' Day, as it was on this day in 1986 that the Consumer Protection Act was passed by Parliament.' },
          { type: 'paragraph', text: '<strong>Progress and Challenges:</strong> The consumer movement in India has grown, with over 2,000 consumer groups, though only a small number are well-organised.'},
          { type: 'heading', text: 'Challenges:'},
          { type: 'list', items: [
              'The consumer redressal process can be <strong>cumbersome, expensive, and time-consuming</strong>.',
              'Consumers often need to hire lawyers.',
              'Gathering evidence is difficult, especially since cash memos are not always issued for purchases.',
              'Laws protecting workers, especially in unorganised sectors, are weakly enforced.'
          ]},
          { type: 'infoBox', color: 'green', content: '<strong>Recent Developments:</strong><br/>COPRA was amended in 2019 to strengthen consumer rights further. Online purchases are now included. Manufacturers and service providers can be held responsible for defective products or poor service and may face penalties or even imprisonment.'},
          { type: 'paragraph', text: '<strong>The Path Ahead:</strong> Consumer awareness is spreading, but slowly. For the consumer movement to be truly effective, it requires the active involvement and voluntary effort of all consumers.'}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 5: Consumer Rights",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "The Consumer in the Marketplace",
        content: [
          { type: 'paragraph', text: '<strong>Producers and Consumers:</strong> Hum sab market mein do main tariko se participate karte hain: goods aur services ke <strong>producers</strong> aur <strong>consumers</strong> ke roop mein. Jaise workers ko protect karne ke liye rules zaroori hain, waise hi marketplace mein consumers ko protect karne ke liye bhi rules zaroori hain.' },
          { type: 'paragraph', text: '<strong>Consumer Vulnerability:</strong> Market mein, individual consumers aksar ek weak position mein hote hain. Jab ek consumer ko kisi product ya service ke baare mein complaint hoti hai, to seller aksar buyer ko blame karne ki koshish karta hai.'},
          { type: 'heading', text: 'Marketplace mein Exploitation ke Types:'},
          { type: 'list', items: [
              '<strong>Unfair Trade Practices:</strong> Sellers kabhi-kabhi unfair practices karte hain. Jaise, ek shopkeeper kam tol sakta hai, hidden charges jod sakta hai, ya adulterated (milawati) ya defective goods bech sakta hai.',
              '<strong>Market Imbalance:</strong> Markets aksar fair tareeke se kaam nahi karte jab kuch powerful producers hote hain aur bahut saare scattered consumers small amounts mein khareedte hain.',
              '<strong>Badi Companies dwara Manipulation:</strong> Badi wealth aur power wali companies market ko manipulate kar sakti hain. Ve customers ko attract karne ke liye media ke through false information faila sakti hain.'
          ]},
          { type: 'infoBox', color: 'orange', content: '<strong>Example 1:</strong> Ek company ne saalon tak baby milk powder becha, yeh jhootha dawa karte hue ki yeh maa ke doodh se behtar hai. Company ko yeh maan ne mein ki unke daawe jhoothe the, ek lambi kanooni ladai lagi.<br/><br/><strong>Example 2:</strong> Cigarette companies ko court le jaana pada taaki ve yeh accept karein ki unke products cancer ka kaaran ban sakte hain.'}
        ]
      },
      {
        id: '2',
        title: "The Consumer Movement",
        content: [
          { type: 'paragraph', text: '<strong>Origins:</strong> Consumer movement isliye shuru hua kyonki consumers sellers dwara ki jaane wali kai unfair practices se naakhush the. Shuru mein, is exploitation se consumers ko protect karne ke liye koi legal system nahi tha.' },
          { type: 'heading', text: 'India mein Movement ka Evolution:'},
          { type: 'list', items: [
              '<strong>Early Stages (1960s):</strong> Yeh movement 1960s mein food shortages, hoarding, black marketing, aur food aur oil mein adulteration jaise issues ke kaaran ek organised tareeke se shuru hua.',
              '<strong>1970s:</strong> 1970s tak, consumer organisations mainly articles likhne aur exhibitions aayojit karne par focus karti thi.'
          ]},
          { type: 'paragraph', text: '<strong>Responsibility mein ek Shift:</strong> Kai saalon tak, India aur duniya bhar mein organisations ne awareness badhane ke liye kaam kiya. Isse dheere-dheere goods aur services ki quality sunishchit karne ki responsibility sellers par shift ho gayi.'},
          { type: 'infoBox', color: 'blue', content: '<strong>India mein Bada Kadam: COPRA</strong><br/>Consumer movement ke efforts ke kaaran, businesses aur government par unfair practices ko badalne ka pressure tha. Ek significant achievement Indian government dwara <strong>Consumer Protection Act of 1986</strong>, jise aam taur par <strong>COPRA</strong> kehte hain, ka laagoo hona tha.'}
        ]
      },
      {
        id: '3',
        title: "Consumer Rights",
        content: [],
        subSections: [
            {
                id: '3a',
                title: 'Right to Safety',
                content: [
                    { type: 'paragraph', text: '<strong>Iska matlab kya hai:</strong> Consumers ke roop mein, hamein aise goods aur services se protect hone ka adhikar hai jo hamari life aur property ke liye dangerous hain.'},
                    { type: 'paragraph', text: '<strong>Producers ki Responsibility:</strong> Producers ko sabhi zaroori safety rules aur regulations ko sakhti se follow karna chahiye. Example ke liye, ek pressure cooker mein ek safety valve hota hai. Agar yeh valve defective hai, to isse ek serious accident ho sakta hai.'},
                    { type: 'infoBox', color: 'green', content: '<strong>Case Study: Reji ka Dukh</strong><br/>Reji Mathew, ek healthy student, ko improper anaesthesia ke kaaran surgery mein brain abnormalities ho gayi aur woh zindagi bhar ke liye apahij ho gaya. Uske pita ne medical negligence ke liye compensation maangte hue complaint file ki. National Consumer Disputes Redressal Commission ne hospital ko doshi paaya aur use compensation dene ka aadesh diya.'}
                ]
            },
            {
                id: '3b',
                title: 'Right to be Informed',
                content: [
                    { type: 'paragraph', text: '<strong>Iska matlab kya hai:</strong> Consumers ko un goods aur services ke baare mein details jaan ne ka adhikar hai jo ve khareedte hain.'},
                    { type: 'paragraph', text: '<strong>Packaging par Information:</strong> Jab aap koi product khareedte hain, to packaging par important details hoti hain jaise: Ingredients, Price (MRP), Batch number, date of manufacture, expiry date, aur manufacturer ka address.'},
                    { type: 'infoBox', color: 'blue', content: '<strong>Right to Information (RTI) Act:</strong><br/>October 2005 mein, Indian government ne <strong>Right to Information (RTI) Act</strong> laagoo kiya. Yeh kanoon citizens ko government departments ke functions ke baare mein information prapt karne ka adhikar deta hai.'}
                ]
            },
            {
                id: '3c',
                title: 'Right to Choose',
                content: [
                    { type: 'paragraph', text: '<strong>Iska matlab kya hai:</strong> Har consumer ko yeh chunne ka adhikar hai ki woh koi product ya service khareedna chahta hai ya nahi. Koi bhi aapko aisi cheez khareedne ke liye majboor nahi kar sakta jo aap nahi chahte.'},
                    { type: 'infoBox', color: 'orange', content: '<strong>Case Study: Abirami ki Coaching Class</strong><br/>Abirami ne ek coaching course join kiya aur poori fees de di. Teaching quality kharab paane par usne ek saal baad chhodne ka faisla kiya. Jab usne refund maanga, to institute ne mana kar diya. Usne District Consumer Commission mein case file kiya, jisne institute ko paise refund karne ka aadesh diya, yeh kehte hue ki uske paas choose karne ka adhikar hai.'}
                ]
            },
            {
                id: '3d',
                title: 'Right to Seek Redressal',
                content: [
                    { type: 'paragraph', text: '<strong>Iska matlab kya hai:</strong> Consumers ko unfair trade practices aur exploitation ke khilaaf samadhaan (redressal) maangne ka adhikar hai. Agar kisi consumer ko nuksaan hota hai, to use damage ke anusaar compensation milne ka adhikar hai.'},
                    { type: 'paragraph', text: '<strong>Nyay Kaise Paayein:</strong> <strong>Consumer Protection Act (COPRA)</strong> consumer courts (Consumer Disputes Redressal Commissions) ka ek three-tier system pradan karta hai.<br/>• <strong>District Commission:</strong> ₹1 crore tak ke claims.<br/>• <strong>State Commission:</strong> ₹1 crore se ₹10 crore ke beech ke claims.<br/>• <strong>National Commission:</strong> ₹10 crore se zyada ke claims.'}
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Becoming a Well-Informed Consumer",
        content: [
          { type: 'paragraph', text: '<strong>Consumer Consciousness:</strong> Jab consumers apne rights ke baare mein aware ho jaate hain, to ve apne khareede gaye goods aur services ke baare mein informed choices kar sakte hain. Iske liye knowledge aur skill ki zaroorat hai.' },
          { type: 'paragraph', text: '<strong>Government ka Role:</strong> COPRA ke laagoo hone se alag Departments of Consumer Affairs bane. Government "Jago Grahak Jago" jaise campaigns ke through awareness failati hai.'},
          { type: 'heading', text: 'Quality Certification Marks:'},
          { type: 'list', items: [
              '<strong>ISI Mark:</strong> Industrial aur consumer goods par milta hai. Health aur safety se jude products (jaise LPG cylinders) ke liye yeh mandatory hai.',
              '<strong>Agmark:</strong> Agricultural products jaise anaj aur edible oils ke liye use hota hai.',
              '<strong>Hallmark:</strong> Jewellery ki purity ke liye ek certification.'
          ]}
        ]
      },
      {
        id: '5',
        title: "Taking the Consumer Movement Forward",
        content: [
          { type: 'paragraph', text: '<strong>National Consumers\' Day:</strong> India 24th December ko National Consumers\' Day manata hai, kyonki isi din 1986 mein Consumer Protection Act Parliament dwara pass kiya gaya tha.' },
          { type: 'heading', text: 'Challenges:'},
          { type: 'list', items: [
              'Consumer redressal process <strong>cumbersome</strong> (bo-jhil), mehenga, aur time-consuming ho sakta hai.',
              'Consumers ko aksar lawyers hire karne padte hain.',
              'Saboot ikattha karna mushkil hota hai, khaaskar jab cash memos hamesha nahi diye jaate.',
              'Unorganised sectors mein workers ko protect karne wale kanoon kamzor tarike se laagoo kiye jaate hain.'
          ]},
          { type: 'infoBox', color: 'green', content: '<strong>Recent Developments:</strong><br/>COPRA ko 2019 mein consumer rights ko aur mazboot karne ke liye amend kiya gaya. Ab online purchases bhi shamil hain. Defective products ya kharab service ke liye manufacturers aur service providers ko zimmedar thehraya ja sakta hai.'},
          { type: 'paragraph', text: '<strong>Aage ka Raasta:</strong> Consumer awareness dheere-dheere phail rahi hai. Consumer movement ko sachmuch prabhavi banane ke liye, sabhi consumers ke active involvement aur voluntary effort ki zaroorat hai.'}
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
function ConsumerRightsChapter() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '3': true });

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

export default ConsumerRightsChapter;
