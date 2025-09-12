import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter: Gender, Religion and Caste",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: 'intro',
        title: "Introduction",
        content: [
          { type: 'paragraph', text: 'This chapter explores three important kinds of social differences: <strong>gender</strong>, <strong>religion</strong>, and <strong>caste</strong>. We will look at how these differences can lead to social divisions and inequalities in India. We will also study how these divisions are expressed in politics and whether this expression is healthy for a democracy. The main idea is that in a democracy, it is possible and sometimes even good to have political expression of social differences.' },
        ]
      },
      {
        id: '1',
        title: "Gender and Politics",
        content: [],
        subSections: [
          {
            id: '1a',
            title: 'Understanding Gender Division',
            content: [
              { type: 'paragraph', text: 'Gender division is a type of social division that is seen everywhere, but it is often not recognized in the study of politics.' },
              { type: 'paragraph', text: 'People often think that the division of roles between men and women is natural and unchangeable.' },
              { type: 'paragraph', text: 'However, this division is not based on biology. It is based on social expectations and stereotypes about what is considered appropriate work for men and women.' }
            ]
          },
          {
            id: '1b',
            title: 'Public/Private Division and the Sexual Division of Labour',
            content: [
              { type: 'paragraph', text: 'From a young age, boys and girls are taught to believe that the main responsibilities of women are housework and raising children. This leads to a Sexual Division of Labour.' },
              { type: 'infoBox', color: 'blue', content: '<strong>Definition: Sexual Division of Labour</strong><br/>A system where all the work inside the home (like cooking, cleaning, washing, tailoring, and childcare) is done by women or organized by them through domestic helpers.' },
              { type: 'paragraph', text: 'The reality is that a majority of women do some form of paid work in addition to all their domestic work. However, their work is often not valued or recognized.' }
            ]
          },
          {
            id: '1c',
            title: 'The Result of This Division',
            content: [
              { type: 'paragraph', text: 'Even though women make up half of the world\'s population, their role in public life, especially in politics, is very small in most societies. Over time, the gender issue was raised in politics. Women around the world organized and protested to demand equal rights, including the right to vote.' }
            ]
          },
          {
            id: '1d',
            title: 'Feminist Movements',
            content: [
              { type: 'paragraph', text: 'More radical women\'s movements pushed for equality in personal and family life as well. These movements are known as Feminist movements.' },
              { type: 'infoBox', color: 'green', content: '<strong>Definition: Feminist</strong><br/>A man or a woman who believes in equal rights and opportunities for both women and men.' }
            ]
          },
          {
            id: '1e',
            title: 'Women\'s Situation in India',
            content: [
              { type: 'paragraph', text: 'In India, despite some progress since Independence, women still lag far behind men. Our society is still a male-dominated, or patriarchal, society.' },
              { type: 'infoBox', color: 'orange', content: '<strong>Definition: Patriarchy</strong><br/>A system that values men more than women and gives men power over women.' },
              { type: 'list', items: [
                  '<strong>Literacy:</strong> The literacy rate for women is only 54%, compared to 76% for men.',
                  '<strong>Jobs and Wages:</strong> The Equal Remuneration Act, 1976, states that equal wages should be paid for equal work. However, women are often paid less than men for the same job.',
                  '<strong>Sex-Selective Abortion:</strong> In many parts of India, parents prefer to have sons, which has led to a drop in the child sex ratio.',
                  '<strong>Violence and Harassment:</strong> Women face various kinds of harassment, exploitation, and violence, both in public spaces and within their own homes.'
              ]}
            ]
          },
          {
            id: '1f',
            title: 'Women\'s Political Representation',
            content: [
              { type: 'paragraph', text: 'In India, the proportion of women in legislative bodies is very low. The Panchayati Raj system has reserved one-third of the seats in local government bodies for women. The Women\'s Reservation Act, 2023, will reserve 33 percent of seats for women in the Lok Sabha and State Assemblies.' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: "Religion, Communalism and Politics",
        content: [],
        subSections: [
            {
                id: '2a',
                title: 'Religion in Politics',
                content: [
                    { type: 'paragraph', text: 'Unlike gender differences, religious differences are often expressed in politics. It\'s not always wrong for religion to play a role in politics, as long as every religion is treated equally.' },
                    { type: 'infoBox', color: 'blue', content: '<strong>Definition: Family Laws</strong><br/>Laws that deal with family matters like marriage, divorce, adoption, and inheritance. In India, different religions have different family laws.' }
                ]
            },
            {
                id: '2b',
                title: 'Communalism',
                content: [
                    { type: 'paragraph', text: 'The problem starts when religion is seen as the basis of the nation. This use of religion in politics is called communal politics. It is based on the idea that religion is the main basis of a social community.' }
                ]
            },
            {
                id: '2c',
                title: 'Forms of Communalism in Politics',
                content: [
                    { type: 'list', items: [
                        '<strong>In Everyday Beliefs:</strong> Religious prejudices and stereotypes.',
                        '<strong>Political Dominance:</strong> A desire for the political dominance of one\'s own religious community.',
                        '<strong>Political Mobilisation:</strong> Using sacred symbols and religious leaders to appeal to voters.',
                        '<strong>Communal Violence:</strong> Riots and massacres in the name of religion.'
                    ]}
                ]
            },
            {
                id: '2d',
                title: 'The Secular State',
                content: [
                    { type: 'paragraph', text: 'The makers of our Constitution chose the model of a secular state. This means there is no official religion, and the Constitution grants freedom of religion to all.' }
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Caste and Politics",
        content: [],
        subSections: [
            {
                id: '3a',
                title: 'Caste Inequalities',
                content: [
                    { type: 'paragraph', text: 'Unlike gender and religion, caste division is special to India. The system was based on the exclusion and discrimination of "outcaste" groups, who were subjected to the inhuman practice of untouchability. Factors like economic development, urbanisation, growth in literacy, and occupational mobility have helped break down the old ideas of caste hierarchy.' }
                ]
            },
            {
                id: '3b',
                title: 'Caste in Contemporary India',
                content: [
                    { type: 'paragraph', text: 'However, caste has not disappeared from modern India. Most people still marry within their own caste or tribe. Untouchability has not completely ended, even though it is prohibited by the constitution. Caste continues to be closely linked to economic status.' }
                ]
            },
            {
                id: '3c',
                title: 'Caste in Politics',
                content: [
                    { type: 'paragraph', text: 'Like communalism, casteism is the belief that caste is the sole basis of a social community. Caste can take various forms in politics, such as choosing candidates based on the caste composition of an area.' }
                ]
            },
            {
                id: '3d',
                title: 'Limits of Caste in Politics',
                content: [
                    { type: 'paragraph', text: 'It is not true that elections are only about caste. There are many other factors at play:' },
                    { type: 'list', items: [
                        'No single parliamentary constituency has a clear majority of one caste.',
                        'No party wins all the votes from a single caste. A \'vote bank\' just means that a large portion of voters from that caste vote for that party.',
                        'Many other factors are important, such as voters\' attachment to a political party, their economic condition, and the popularity of leaders.'
                    ]}
                ]
            },
            {
                id: '3e',
                title: 'Politics in Caste',
                content: [
                    { type: 'paragraph', text: 'Politics also influences the caste system. It\'s not just that politics gets caste-ridden; caste also gets politicised. This has both positive and negative aspects.' },
                    { type: 'list', items: [
                        '<strong>Positive:</strong> It has helped disadvantaged communities like Dalits and OBCs to demand their share of power.',
                        '<strong>Negative:</strong> It can divert attention from other important issues like poverty, development, and corruption.'
                    ]}
                ]
            }
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter: Gender, Religion aur Caste",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: 'intro',
        title: "Introduction",
        content: [
          { type: 'paragraph', text: 'Is chapter mein hum teen important social differences ko explore karenge: <strong>gender</strong>, <strong>religion</strong>, aur <strong>caste</strong>. Hum dekhenge ki yeh differences India mein social divisions aur inequalities kaise paida kar sakte hain. Hum yeh bhi study karenge ki in divisions ko politics mein kaise express kiya jaata hai aur kya yeh expression ek democracy ke liye healthy hai. Main idea yeh hai ki ek democracy mein, social differences ka political expression hona possible hai aur kabhi-kabhi accha bhi hota hai.' },
        ]
      },
      {
        id: '1',
        title: "Gender aur Politics",
        content: [],
        subSections: [
          {
            id: '1a',
            title: 'Gender Division ko Samajhna',
            content: [
              { type: 'paragraph', text: 'Gender division ek type ka social division hai jo har jagah dekha jaata hai, lekin politics ki study mein ise aksar recognise nahi kiya jaata.' },
              { type: 'paragraph', text: 'Log aksar sochte hain ki mardon aur auraton ke beech roles ka division natural hai aur badla nahi ja sakta.' },
              { type: 'paragraph', text: 'Lekin, yeh division biology par based nahi hai. Yeh social expectations aur stereotypes par based hai ki mardon aur auraton ke liye kaun sa kaam appropriate maana jaata hai.' }
            ]
          },
          {
            id: '1b',
            title: 'Public/Private Division aur Sexual Division of Labour',
            content: [
              { type: 'paragraph', text: 'Chhoti umar se hi, ladkon aur ladkiyon ko sikhaya jaata hai ki auraton ki main responsibilities ghar ka kaam aur bachchon ko paalna hai. Isse <strong>Sexual Division of Labour</strong> paida hota hai.' },
              { type: 'infoBox', color: 'blue', content: '<strong>Definition: Sexual Division of Labour</strong><br/>Ek aisa system jahan ghar ke andar ka saara kaam (jaise cooking, cleaning, washing, tailoring, aur childcare) auratein karti hain ya domestic helpers ke through organize karwati hain.' },
              { type: 'paragraph', text: 'Reality yeh hai ki zyadatar auratein apne gharelu kaam ke alawa kisi na kisi type ka paid work bhi karti hain. Lekin, unke kaam ko aksar value nahi di jaati ya recognise nahi kiya jaata.' }
            ]
          },
          {
            id: '1c',
            title: 'Is Division ka Result',
            content: [
              { type: 'paragraph', text: 'Bale hi auratein duniya ki population ka aadha hissa hain, public life mein, khaaskar politics mein, unka role zyadatar societies mein bahut chhota hai. Samay ke saath, gender issue ko politics mein uthaya gaya. Duniya bhar ki auraton ne organize hokar equal rights, jismein vote ka adhikar bhi shamil tha, ke liye protest kiya.' }
            ]
          },
          {
            id: '1d',
            title: 'Feminist Movements',
            content: [
              { type: 'paragraph', text: 'Zyada radical women\'s movements ne personal aur family life mein bhi equality ke liye zor diya. In movements ko <strong>Feminist movements</strong> ke naam se jaana jaata hai.' },
              { type: 'infoBox', color: 'green', content: '<strong>Definition: Feminist</strong><br/>Ek mard ya aurat jo auraton aur mardon dono ke liye equal rights aur opportunities mein vishwas rakhta/rakhti hai.' }
            ]
          },
          {
            id: '1e',
            title: 'India mein Auraton ki Situation',
            content: [
              { type: 'paragraph', text: 'India mein, Independence ke baad kuch progress ke bawajood, auratein abhi bhi mardon se bahut peeche hain. Hamari society abhi bhi ek male-dominated, yaani <strong>patriarchal</strong>, society hai.' },
              { type: 'infoBox', color: 'orange', content: '<strong>Definition: Patriarchy</strong><br/>Ek aisa system jo mardon ko auraton se zyada value deta hai aur mardon ko auraton par power deta hai.' },
              { type: 'list', items: [
                  '<strong>Literacy:</strong> Auraton ka literacy rate sirf 54% hai, jabki mardon ka 76% hai.',
                  '<strong>Jobs and Wages:</strong> Equal Remuneration Act, 1976, kehta hai ki equal kaam ke liye equal wages milne chahiye. Lekin, auraton ko aksar same job ke liye mardon se kam paise milte hain.',
                  '<strong>Sex-Selective Abortion:</strong> India ke kai hisson mein, parents beton ko prefer karte hain, jisse child sex ratio mein giravat aayi hai.',
                  '<strong>Violence and Harassment:</strong> Auraton ko public spaces aur apne gharon mein bhi alag-alag tarah ke harassment, exploitation, aur violence ka saamna karna padta hai.'
              ]}
            ]
          },
          {
            id: '1f',
            title: 'Auraton ka Political Representation',
            content: [
              { type: 'paragraph', text: 'India mein, legislative bodies mein auraton ka proportion bahut kam hai. Panchayati Raj system ne local government bodies mein one-third seats auraton ke liye reserve ki hain. Women\'s Reservation Act, 2023, Lok Sabha aur State Assemblies mein auraton ke liye 33 percent seats reserve karega.' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: "Religion, Communalism aur Politics",
        content: [],
        subSections: [
            {
                id: '2a',
                title: 'Politics mein Religion',
                content: [
                    { type: 'paragraph', text: 'Gender differences ke vipreet, religious differences aksar politics mein express kiye jaate hain. Politics mein religion ka role hamesha galat nahi hota, jab tak har religion ko equally treat kiya jaaye.' },
                    { type: 'infoBox', color: 'blue', content: '<strong>Definition: Family Laws</strong><br/>Aise laws jo marriage, divorce, adoption, aur inheritance jaise family matters se deal karte hain. India mein, alag-alag religions ke apne alag family laws hain.' }
                ]
            },
            {
                id: '2b',
                title: 'Communalism',
                content: [
                    { type: 'paragraph', text: 'Problem tab shuru hoti hai jab religion ko nation ka basis maana jaata hai. Politics mein religion ke is use ko <strong>communal politics</strong> kehte hain. Yeh is idea par based hai ki religion hi ek social community ka main basis hai.' }
                ]
            },
            {
                id: '2c',
                title: 'Politics mein Communalism ke Forms',
                content: [
                    { type: 'list', items: [
                        '<strong>Rozmarra ke Beliefs mein:</strong> Religious prejudices aur stereotypes.',
                        '<strong>Political Dominance:</strong> Apni religious community ka political dominance haasil karne ki ichha.',
                        '<strong>Political Mobilisation:</strong> Voters ko appeal karne ke liye pavitra symbols aur religious leaders ka istemaal karna.',
                        '<strong>Communal Violence:</strong> Religion ke naam par dange aur narsanhaar.'
                    ]}
                ]
            },
            {
                id: '2d',
                title: 'The Secular State',
                content: [
                    { type: 'paragraph', text: 'Hamare Constitution ke nirmataon ne ek <strong>secular state</strong> ka model chuna. Iska matlab hai ki koi official religion nahi hai, aur Constitution sabhi ko freedom of religion grant karta hai.' }
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Caste aur Politics",
        content: [],
        subSections: [
            {
                id: '3a',
                title: 'Caste Inequalities',
                content: [
                    { type: 'paragraph', text: 'Gender aur religion ke vipreet, caste division India ke liye special hai. Yeh system "outcaste" groups ke exclusion aur discrimination par based tha, jinhe untouchability jaise inhuman practice ka shikar banaya gaya. Economic development, urbanisation, literacy mein growth, aur occupational mobility jaise factors ne caste hierarchy ke purane ideas ko todne mein madad ki hai.' }
                ]
            },
            {
                id: '3b',
                title: 'Contemporary India mein Caste',
                content: [
                    { type: 'paragraph', text: 'Lekin, modern India se caste gayab nahi hui hai. Zyada tar log abhi bhi apni hi caste ya tribe mein shaadi karte hain. Untouchability poori tarah se khatm nahi hui hai, bhale hi constitution dwara ise prohibit kiya gaya hai. Caste abhi bhi economic status se closely judi hui hai.' }
                ]
            },
            {
                id: '3c',
                title: 'Politics mein Caste',
                content: [
                    { type: 'paragraph', text: 'Communalism ki tarah, <strong>casteism</strong> yeh belief hai ki caste hi ek social community ka sole basis hai. Caste politics mein kai forms le sakti hai, jaise kisi area ke caste composition ke basis par candidates chunna.' }
                ]
            },
            {
                id: '3d',
                title: 'Politics mein Caste ki Limits',
                content: [
                    { type: 'paragraph', text: 'Yeh sach nahi hai ki elections sirf caste ke baare mein hote hain. Aur bhi bahut se factors kaam karte hain:' },
                    { type: 'list', items: [
                        'Kisi bhi ek parliamentary constituency mein ek caste ki clear majority nahi hai.',
                        'Koi bhi party ek single caste ke saare votes nahi jeet ti. Ek \'vote bank\' ka matlab sirf yeh hai ki us caste ke voters ka ek bada hissa us party ko vote deta hai.',
                        'Kai aur factors bhi important hain, jaise voters ka political party se judav, unki economic condition, aur leaders ki popularity.'
                    ]}
                ]
            },
            {
                id: '3e',
                title: 'Caste mein Politics',
                content: [
                    { type: 'paragraph', text: 'Politics bhi caste system ko influence karti hai. Sirf politics hi caste-ridden nahi hoti; caste bhi politicised ho jaati hai. Iske positive aur negative dono aspects hain.' },
                    { type: 'list', items: [
                        '<strong>Positive:</strong> Isne Dalits aur OBCs jaisi disadvantaged communities ko power mein apna hissa maangne mein madad ki hai.',
                        '<strong>Negative:</strong> Yeh poverty, development, aur corruption jaise doosre important issues se dhyan bhatka sakti hai.'
                    ]}
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
function SocialStudiesChapter() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '1': true, '2': true, '3': true });

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
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id === 'intro' ? '' : `${section.id}. `}{section.title}</h2>
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

export default SocialStudiesChapter;
