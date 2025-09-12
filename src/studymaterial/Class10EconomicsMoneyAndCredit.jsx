import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 3: Money and Credit",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Money as a Medium of Exchange",
        content: [
          { type: 'paragraph', text: 'In our everyday life, we are constantly involved in transactions where we buy goods or get services using money. The main reason we use money is simple: if you have money, you can easily trade it for any product or service you want. Because of this, everyone prefers to be paid in money and then use that money to buy the things they need or desire.' },
          { type: 'heading', text: 'The Problem Without Money: Barter System'},
          { type: 'paragraph', text: 'Imagine a time before money. If a shoe maker wanted to buy wheat, he would have to find a farmer who not only wanted to sell wheat but also needed to buy shoes. This situation, where two people each have what the other wants, is called <strong>double coincidence of wants</strong>. This system of directly exchanging goods without money is known as the <strong>barter system</strong>, which makes transactions very difficult.'},
          { type: 'infoBox', color: 'blue', content: '<strong>How Money Solves the Problem:</strong><br/>Money acts as an <strong>intermediate</strong> step, which gets rid of the need for a double coincidence of wants. With money, the shoe maker can first sell his shoes to anyone for money, and then use that money to buy wheat from any farmer. Because money acts as this middle step in the exchange process, it is called a <strong>medium of exchange</strong>.'}
        ]
      },
      {
        id: '2',
        title: "Modern Forms of Money",
        content: [
            { type: 'paragraph', text: 'Before coins were invented, people used different objects as money, like grains and cattle. Later, metallic coins made of gold, silver, and copper came into use.' },
        ],
        subSections: [
          {
            id: '2a',
            title: 'Currency',
            content: [
              { type: 'paragraph', text: 'Today, the modern forms of money are <strong>currency</strong>, which includes paper notes and coins. Unlike old forms of money, modern currency is not made from precious metals and has no everyday use of its own.' },
              { type: 'infoBox', color: 'green', content: '<strong>Why is modern currency accepted?</strong><br/>It is accepted as a medium of exchange because it is <strong>authorised by the government</strong> of the country. In India, the <strong>Reserve Bank of India (RBI)</strong> issues currency notes on behalf of the central government. The law makes the use of the rupee legal for settling payments, so no one can legally refuse it.'}
            ]
          },
          {
            id: '2b',
            title: 'Deposits with Banks',
            content: [
              { type: 'paragraph', text: 'People also hold money in the form of <strong>deposits with banks</strong>. They deposit their extra cash in a bank account, which keeps their money safe and also earns them interest. People can withdraw this money whenever they need it. Since these bank deposits can be withdrawn on demand, they are called <strong>demand deposits</strong>.' },
            ]
          },
          {
            id: '2c',
            title: 'Cheques',
            content: [
              { type: 'paragraph', text: 'Demand deposits have a special feature that makes them act like money: you can make payments using a <strong>cheque</strong>. A cheque is a paper that instructs a bank to pay a specific amount of money from a person\'s account to the person named on the cheque.' },
              { type: 'paragraph', text: 'Because demand deposits can be used to settle payments (through cheques), they are considered a part of the money supply in a modern economy, along with currency.'}
            ]
          }
        ]
      },
      {
        id: '3',
        title: "Loan Activities of Banks",
        content: [
          { type: 'paragraph', text: 'Banks do not keep all the deposited money with them. In India, banks hold about <strong>15 percent</strong> of their deposits as cash. This is to ensure they can pay depositors who might come to withdraw their money.' },
          { type: 'paragraph', text: 'Banks use the <strong>major portion of the deposits to give out loans</strong> to people for various economic activities. In this way, banks act as <strong>mediators</strong> between those who have extra money (depositors) and those who need money (borrowers).' },
          { type: 'infoBox', color: 'blue', content: '<strong>How do banks make a profit?</strong><br/>Banks charge a <strong>higher interest rate</strong> on the loans they give out than the interest rate they offer on deposits. The difference between the two is the bank\'s main source of income.'}
        ]
      },
      {
        id: '4',
        title: "Two Different Credit Situations",
        content: [
          { type: 'paragraph', text: '<strong>Credit (or a loan)</strong> is an agreement where a lender provides the borrower with money, goods, or services in exchange for a promise of future payment.' },
          { type: 'heading', text: 'Situation 1: Credit Plays a Positive Role'},
          { type: 'paragraph', text: '<strong>Example: Salim, the shoe manufacturer.</strong> During festival season, Salim gets a large order. He takes two loans to hire more workers and buy raw materials. With this credit, he completes the order on time, makes a good profit, and repays the loans. In this case, credit played a <strong>positive role</strong>.'},
          { type: 'infoBox', color: 'orange', content: '<strong>Situation 2: Credit Pushes into a Debt-Trap</strong><br/><strong>Example: Swapna, a small farmer.</strong> Swapna takes a loan from a moneylender for cultivation. Unfortunately, her crop fails. She is unable to repay the loan, and the debt grows. The next year, she takes a fresh loan, but her earnings are not enough to pay off the old one. She is caught in a <strong>debt-trap</strong>. Credit, instead of helping her, made her situation worse.'}
        ]
      },
      {
        id: '5',
        title: "Terms of Credit",
        content: [
          { type: 'paragraph', text: 'Every loan agreement has certain conditions, known as the <strong>terms of credit</strong>. The main components are:' },
          { type: 'list', items: [
              '<strong>Interest Rate:</strong> The extra amount the borrower must pay to the lender.',
              '<strong>Collateral:</strong> An asset (like land, a building, or a vehicle) that the borrower owns and uses as a guarantee to the lender until the loan is repaid.',
              '<strong>Documentation Requirement:</strong> Documents required by the lender, such as proof of employment.',
              '<strong>Mode of Repayment:</strong> How the loan will be paid back, for example, in monthly instalments.'
          ]}
        ]
      },
      {
        id: '6',
        title: "Formal and Informal Sector Credit",
        content: [ {type: 'paragraph', text: 'Loans can be grouped into two main categories:'}],
        subSections: [
            {
                id: '6a',
                title: 'Formal Sector Loans',
                content: [
                    { type: 'paragraph', text: 'These are loans from <strong>banks and cooperative societies</strong>. The <strong>Reserve Bank of India (RBI)</strong> supervises their functioning to ensure they lend to small borrowers as well as big businesses. Formal lenders usually charge lower interest rates.'}
                ]
            },
            {
                id: '6b',
                title: 'Informal Sector Loans',
                content: [
                    { type: 'paragraph', text: 'These include loans from <strong>moneylenders, traders, employers, relatives, and friends</strong>. There is no organisation that supervises their activities. They can charge whatever interest rate they want, and the cost of borrowing is much higher, which can lead to debt traps.'}
                ]
            },
            {
                id: '6c',
                title: 'Who Gets What?',
                content: [
                    { type: 'paragraph', text: 'Richer households are more likely to get cheap credit from formal sources. Poor households have to rely more on informal sources and pay a much higher price for borrowing. For the country\'s development, it is crucial that formal credit expands and is available to everyone at affordable rates.'}
                ]
            }
        ]
      },
      {
        id: '7',
        title: "Self-Help Groups (SHGs) for the Poor",
        content: [
          { type: 'paragraph', text: 'Poor people often struggle to get bank loans because they lack proper documents and collateral.' },
          { type: 'heading', text: 'How do Self-Help Groups (SHGs) work?'},
          { type: 'paragraph', text: 'An SHG is a small group, typically of <strong>15-20 members</strong> (usually women), who meet and save money regularly. Members can take small loans from the group\'s collected savings at a low interest rate.'},
          { type: 'infoBox', color: 'green', content: 'If a group saves regularly for a year or two, it becomes eligible to get a <strong>loan from a bank</strong>. The loan is given in the name of the group, which is responsible for repayment. Because of this group responsibility, banks are willing to lend to SHGs even without collateral. This system helps poor people, especially women, become financially <strong>self-reliant</strong>.'},
          { type: 'paragraph', text: 'The <strong>Grameen Bank of Bangladesh</strong>, founded by Professor Muhammad Yunus, is a famous success story of providing small loans to the poor at reasonable rates.'}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 3: Money and Credit",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Money as a Medium of Exchange",
        content: [
          { type: 'paragraph', text: 'Hum apni everyday life mein lagatar aise <strong>transactions</strong> mein involved rehte hain jahan hum <strong>money</strong> use karke goods khareedte hain ya services lete hain. Hum money isliye use karte hain kyonki agar aapke paas money hai, to aap use aasani se kisi bhi product ya service ke liye trade kar sakte hain. Is wajah se, har koi payment money mein lena pasand karta hai aur phir us money ko apni zaroorat ki cheezein khareedne ke liye use karta hai.' },
          { type: 'heading', text: 'Bina Money ke Problem: Barter System'},
          { type: 'paragraph', text: 'Ek time imagine karo jab money nahi tha. Agar ek shoe maker ko gehu khareedna hota, to use ek aise farmer ko dhoondhna padta jo na sirf gehu bechna chahta ho, balki jise shoes bhi khareedne hon. Is situation ko, jahan do logon ke paas ek doosre ki zaroorat ka saaman ho, <strong>double coincidence of wants</strong> kehte hain. Bina money ke goods ko direct exchange karne ke is system ko <strong>barter system</strong> kehte hain, jo transactions ko bahut mushkil bana deta hai.'},
          { type: 'infoBox', color: 'blue', content: '<strong>Money Problem ko Kaise Solve Karta Hai:</strong><br/>Money ek <strong>intermediate</strong> (beech ka) step ki tarah kaam karta hai, jisse double coincidence of wants ki zaroorat khatm ho jaati hai. Money ke saath, shoe maker pehle apne shoes kisi ko bhi money ke liye bech sakta hai, aur phir us money se kisi bhi farmer se gehu khareed sakta hai. Kyonki money exchange process mein is middle step ka kaam karta hai, ise <strong>medium of exchange</strong> kehte hain.'}
        ]
      },
      {
        id: '2',
        title: "Modern Forms of Money",
        content: [
            { type: 'paragraph', text: 'Coins invent hone se pehle, log alag-alag objects ko money ki tarah use karte the, jaise anaj aur pashu. Baad mein, gold, silver, aur copper ke metallic coins use mein aaye.' },
        ],
        subSections: [
          {
            id: '2a',
            title: 'Currency',
            content: [
              { type: 'paragraph', text: 'Aaj, money ke modern forms hain <strong>currency</strong>, jismein paper notes aur coins shamil hain. Purane forms of money ke विपरीत, modern currency precious metals se nahi bani hoti aur iska apna koi everyday use nahi hota.' },
              { type: 'infoBox', color: 'green', content: '<strong>Modern currency kyon accept ki jaati hai?</strong><br/>Ise medium of exchange isliye accept kiya jaata hai kyonki yeh country ki <strong>government dwara authorised</strong> hoti hai. India mein, <strong>Reserve Bank of India (RBI)</strong> central government ki taraf se currency notes issue karti hai. Kanoon rupee ke use ko payments settle karne ke liye legal banata hai, isliye koi bhi ise lene se mana nahi kar सकता.'}
            ]
          },
          {
            id: '2b',
            title: 'Deposits with Banks',
            content: [
              { type: 'paragraph', text: 'Log money ko <strong>deposits with banks</strong> ke form mein bhi rakhte hain. Ve apna extra cash bank account mein deposit karte hain, jisse unka paisa safe rehta hai aur unhe bank se interest bhi milta hai. Log is paise ko jab chahe <strong>withdraw</strong> kar sakte hain. Kyonki in bank deposits ko demand par withdraw kiya ja sakta hai, inhein <strong>demand deposits</strong> kehte hain.' },
            ]
          },
          {
            id: '2c',
            title: 'Cheques',
            content: [
              { type: 'paragraph', text: 'Demand deposits ka ek special feature hai jo unhe money ki tarah kaam karne deta hai: aap <strong>cheque</strong> ka use karke payments kar sakte hain. Ek cheque ek paper hota hai jo bank ko निर्देश deta hai ki ek person ke account se ek specific amount us person ko pay kare jiska naam cheque par likha hai.' },
              { type: 'paragraph', text: 'Kyonki demand deposits ko payments settle karne ke liye (cheques ke through) use kiya ja sakta hai, unhe currency ke saath-saath ek modern economy mein money supply ka hissa maana jaata hai.'}
            ]
          }
        ]
      },
      {
        id: '3',
        title: "Loan Activities of Banks",
        content: [
          { type: 'paragraph', text: 'Banks apne paas saara deposit kiya hua paisa nahi rakhte. India mein, banks apne deposits ka lagbhag <strong>15 percent</strong> cash ke roop mein rakhte hain. Yeh isliye taaki ve un depositors ko pay kar sakein jo kisi bhi din apna paisa nikalne aa sakte hain.' },
          { type: 'paragraph', text: 'Banks deposits ka <strong>major portion</strong> logon ko various economic activities ke liye <strong>loans</strong> dene ke liye use karte hain. Is tarah, banks unke beech <strong>mediators</strong> ka kaam karte hain jinke paas extra paisa hai (depositors) aur jinhe paise ki zaroorat hai (borrowers).' },
          { type: 'infoBox', color: 'blue', content: '<strong>Banks profit kaise banate hain?</strong><br/>Banks jo loans dete hain un par <strong>higher interest rate</strong> charge karte hain us interest rate se jo ve deposits par offer karte hain. Dono ke beech ka <strong>difference</strong> hi bank ki main source of income hai.'}
        ]
      },
      {
        id: '4',
        title: "Two Different Credit Situations",
        content: [
          { type: 'paragraph', text: '<strong>Credit (ya loan)</strong> ek agreement hai jahan ek lender borrower ko money, goods, ya services future payment ke promise ke badle provide karta hai.' },
          { type: 'heading', text: 'Situation 1: Credit ek Positive Role Nibhata Hai'},
          { type: 'paragraph', text: '<strong>Example: Salim, shoe manufacturer.</strong> Festival season ke dauran, Salim ko ek bada order milta hai. Use extra workers hire karne aur raw materials khareedne ke liye <strong>working capital</strong> chahiye. Woh do loans leta hai. Is credit se, woh order time par poora karta hai, achha profit kamata hai, aur loans chuka deta hai. Is case mein, credit ne uski earnings badhane mein help ki aur ek <strong>positive role</strong> nibhaya.'},
          { type: 'infoBox', color: 'orange', content: '<strong>Situation 2: Credit Karz ke Jaal mein Dhakelta Hai</strong><br/><strong>Example: Swapna, ek chhoti kisan.</strong> Swapna apni kheti ke kharchon ke liye ek moneylender se loan leti hai. Badkismati se, uski fasal kharab ho jaati hai. Woh loan nahi chuka paati, aur karz badhta jaata hai. Agle saal, woh naya loan leti hai, lekin uski kamai purana karz chukane ke liye kaafi nahi hoti. Woh <strong>debt-trap</strong> mein phans jaati hai. Credit ne uski madad karne ke bajaye uski situation aur kharab kar di.'}
        ]
      },
      {
        id: '5',
        title: "Terms of Credit",
        content: [
          { type: 'paragraph', text: 'Har loan agreement mein kuch conditions hoti hain. Inhein <strong>terms of credit</strong> kehte hain. Iske main components hain:' },
          { type: 'list', items: [
              '<strong>Interest Rate:</strong> Yeh woh extra amount hai jo borrower ko lender ko principal ke saath wapas karna hota hai.',
              '<strong>Collateral:</strong> Yeh ek asset hai (jaise land, building, ya vehicle) jo borrower ke paas hota hai aur jise woh lender ko guarantee ke taur par deta hai jab tak loan wapas na ho jaaye.',
              '<strong>Documentation Requirement:</strong> Yeh woh documents hain jo lender borrower se maangta hai, jaise employment proof.',
              '<strong>Mode of Repayment:</strong> Yeh batata hai ki loan kaise wapas kiya jaayega, jaise monthly instalments mein.'
          ]}
        ]
      },
      {
        id: '6',
        title: "Formal aur Informal Sector Credit",
        content: [ {type: 'paragraph', text: 'Loans ko do main categories mein group kiya ja sakta hai:'}],
        subSections: [
            {
                id: '6a',
                title: 'Formal Sector Loans',
                content: [
                    { type: 'paragraph', text: 'Yeh <strong>banks aur cooperative societies</strong> se milne wale loans hain. <strong>Reserve Bank of India (RBI)</strong> formal lenders ke kaam ko supervise karti hai. Formal lenders aam taur par kam interest rates charge karte hain.'}
                ]
            },
            {
                id: '6b',
                title: 'Informal Sector Loans',
                content: [
                    { type: 'paragraph', text: 'Ismein <strong>moneylenders, traders, employers, rishtedaar, aur doston</strong> se liye gaye loans shamil hain. Inki activities ko supervise karne ke liye koi organisation nahi hai. Ve jo chahe interest rate charge kar sakte hain, aur inka cost of borrowing bahut <strong>higher</strong> hota hai, jo debt traps ka kaaran ban sakta hai.'}
                ]
            },
            {
                id: '6c',
                title: 'Kise Kya Milta Hai?',
                content: [
                    { type: 'paragraph', text: 'Richer households ko formal sources se sasta credit milne ki zyada sambhavna hoti hai. Poor households ko informal sources par zyada depend karna padta hai aur borrowing ke liye bahut zyada keemat chukani padti hai. Desh ke development ke liye, yeh zaroori hai ki formal credit sabke liye affordable rates par available ho.'}
                ]
            }
        ]
      },
      {
        id: '7',
        title: "Self-Help Groups (SHGs) for the Poor",
        content: [
          { type: 'paragraph', text: 'Gareeb logon ko bank loans milne mein mushkil hoti hai kyonki unke paas proper <strong>documents aur collateral</strong> nahi hote.' },
          { type: 'heading', text: 'Self-Help Groups (SHGs) kaise kaam karte hain?'},
          { type: 'paragraph', text: 'Ek SHG aam taur par <strong>15-20 members</strong> (zyadatar ek hi pados ki auratein) ka ek chhota group hota hai, jo regularly milkar paise save karte hain. Members apni zarooraton ke liye group ke jama kiye gaye savings se chhote loans le sakte hain. Interest rate moneylenders se kam hota hai.'},
          { type: 'infoBox', color: 'green', content: 'Agar ek group ek ya do saal tak regularly save karta hai, to woh <strong>bank se loan</strong> lene ke liye eligible ho jaata hai. Loan group ke naam par diya jaata hai. Is group responsibility ke kaaran, banks SHGs ko bina collateral ke bhi loan dene ko taiyar ho jaate hain. Yeh system gareeb logon, khaaskar auraton ko, financially <strong>self-reliant</strong> banane mein help karta hai.'},
          { type: 'paragraph', text: 'Bangladesh ka <strong>Grameen Bank</strong>, jise Professor Muhammad Yunus ne shuru kiya, iska ek famous success story hai.'}
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
function Class10EconomicsMoneyAndCredit() {
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

export default Class10EconomicsMoneyAndCredit;
