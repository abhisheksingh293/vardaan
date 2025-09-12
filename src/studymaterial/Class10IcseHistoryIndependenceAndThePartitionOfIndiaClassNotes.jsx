import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "The First War of Independence—1857",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Revolt",
        content: [
          { type: 'paragraph', text: "The Revolt of 1857 is a pivotal event in India's freedom struggle. It was the first large-scale uprising against the oppressive rule of the British East India Company after 100 years of their control and exploitation (since 1757)." },
          { type: 'list', items: [
              '<strong>The Spark:</strong> The revolt began on May 10, 1857, when Indian soldiers (sepoys) at the Meerut military base rebelled.',
              '<strong>March to Delhi:</strong> The next day, on May 11, the sepoys marched to Delhi. They entered the Red Fort and proclaimed the old Mughal Emperor, Bahadur Shah Zafar II, as the Shahenshah-e-Hindustan (Emperor of Hindustan), making him the symbolic head of the rebellion.',
              '<strong>A Widespread Uprising:</strong> While it started with soldiers, the revolt quickly spread. Peasants, artisans, scholars, and many Indian rulers joined the fight, turning it into a widespread struggle against foreign domination.',
              '<strong>Different Names:</strong><br/>• The British called it the Sepoy Mutiny.<br/>• Indian historians refer to it as the First War of Independence because it was a united effort by various sections of society to overthrow British rule.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        content: [
          { type: 'paragraph', text: 'The revolt was not a sudden event but the result of decades of growing anger against British policies.' }
        ],
        subSections: [
            { id: '2.1', title: 'Political Causes', content: [
                { type: 'list', items: [
                    '<strong>Doctrine of Lapse:</strong> This aggressive policy by Governor-General Lord Dalhousie stated that any princely state would be annexed by the British if the ruler died without a natural male heir. Rulers were not allowed to adopt a son to inherit the throne. This created insecurity and anger among Indian rulers.',
                    '<strong>Subsidiary Alliance:</strong> Under this policy, Indian rulers were forced into treaties that stripped them of their power. For example, the Nawab of Awadh had to:<br/>• Keep a British army in his territory and pay for its maintenance.<br/>• Accept a British official (Resident) in his court.<br/>• Expel all other Europeans from his service. This made the rulers puppets of the British. The eventual annexation of Awadh in 1856, on the false pretext of misgovernance, destroyed any remaining trust Indian rulers had in the British.',
                    '<strong>Personal Grievances:</strong> Rulers like Nana Saheb (denied his father\'s pension), Rani Lakshmi Bai of Jhansi (her adopted son was not recognized), and the Mughal Emperor himself had deep personal reasons to resent the British.'
                ]}
            ]},
            { id: '2.2', title: 'Economic Causes', content: [
                { type: 'list', items: [
                    '<strong>Destruction of Indian Economy:</strong> British policies were designed to make Britain rich at India\'s expense.',
                    '<strong>Hardship for Peasants:</strong> Under the zamindari system, peasants were forced to pay extremely high taxes and grow cash crops like indigo and cotton instead of food crops. Failure to pay resulted in torture and loss of land.',
                    '<strong>Ruin of Industries and Artisans:</strong> Cheap, machine-made goods imported from Britain flooded Indian markets. This destroyed traditional Indian industries like textiles, leaving millions of artisans and weavers unemployed.',
                    '<strong>Unemployment:</strong> The annexation of Indian states left thousands of soldiers and officials jobless.'
                ]}
            ]},
            { id: '2.3', title: 'Social and Religious Causes', content: [
                { type: 'list', items: [
                    '<strong>Interference in Traditions:</strong> The British saw Indian customs as inferior and interfered in them. Social reforms, western education, and the work of Christian missionaries were viewed with deep suspicion by many Indians.',
                    '<strong>Fear of Conversion:</strong> A new law in 1850 allowed an Indian who converted to Christianity to inherit his ancestral property. This was seen as a direct attempt to encourage conversions.',
                    '<strong>Racial Discrimination:</strong> The British openly treated Indians as an inferior race. Indians were not allowed in first-class train compartments and were subjected to insults and humiliation. The justice system was also biased.'
                ]}
            ]},
            { id: '2.4', title: 'Military Causes', content: [
                { type: 'list', items: [
                    '<strong>Discrimination against Sepoys:</strong> Indian sepoys were the backbone of the British army but were treated poorly.<br/>• <strong>Pay and Promotion:</strong> They were paid much less than British soldiers and could never be promoted above the rank of a Subedar.<br/>• <strong>Overseas Service:</strong> The General Service Enlistment Act of 1856 required new sepoys to serve overseas if needed. For Hindus, crossing the sea was a religious taboo that could lead to losing their caste.'
                ]}
            ]},
            { id: '2.5', title: 'The Immediate Cause: Greased Cartridges', content: [
                { type: 'paragraph', text: 'The final trigger was the introduction of the new Enfield rifle. The cartridges for this rifle were covered in greased paper that had to be bitten off before loading. A rumour spread that the grease was made from the fat of cows (sacred to Hindus) and pigs (forbidden for Muslims). This act of biting the cartridges was seen as a deliberate attack on their religions. On March 29, 1857, a sepoy named Mangal Pandey at Barrackpore refused to use the cartridges and attacked his officers. He was executed, but his actions ignited the fire of rebellion across North India.'}
            ]}
        ]
      },
      {
        id: '3',
        title: "The Course and Suppression of the Revolt",
        subSections: [
            { id: '3.1', title: 'Main Centres and Leaders', content: [
                { type: 'paragraph', text: 'After the initial outbreak at Meerut, the revolt spread rapidly.'},
                { type: 'list', items: [
                    '<strong>Kanpur:</strong> Led by Nana Saheb and his brilliant general, Tantya Tope.',
                    '<strong>Lucknow:</strong> Led by Begum Hazrat Mahal of Awadh.',
                    '<strong>Jhansi:</strong> Led by the heroic Rani Lakshmi Bai.',
                    '<strong>Bihar:</strong> Led by Kunwar Singh, an 80-year-old landlord.'
                ]}
            ]},
            { id: '3.2', title: 'Suppression of the Revolt', content: [
                { type: 'paragraph', text: 'The British responded with overwhelming force. They recaptured Delhi in September 1857, which was the heart of the rebellion.'},
                { type: 'list', items: [
                    '<strong>Brutal Retaliation:</strong> Hundreds were massacred in Delhi. Bahadur Shah Zafar was arrested and exiled to Rangoon. His sons were brutally shot and killed.',
                    'By 1858, Lucknow was recaptured. Rani Lakshmi Bai was killed fighting bravely in battle. Tantya Tope was captured and hanged. With the death of its key leaders, the revolt was completely crushed.'
                ]}
            ]}
        ]
      },
      {
          id: '4',
          title: 'Why the Revolt Failed',
          content: [
              { type: 'list', items: [
                  '<strong>Lack of Planning and Coordination:</strong> The revolt broke out prematurely and was not well-coordinated. Different groups fought in different areas at different times, allowing the British to tackle them one by one.',
                  '<strong>Limited Geographical Spread:</strong> The uprising was mainly concentrated in North and Central India. Large parts of the country, including the South and the Punjab, remained largely unaffected.',
                  '<strong>Lack of a Unified Goal:</strong> The leaders had local and personal motives. Rani Lakshmi Bai fought for Jhansi, Nana Saheb for his pension, and others for their territories. There was no single, unifying vision for a new India.',
                  '<strong>Superior British Resources:</strong> The British had a better-organized and disciplined army, superior modern weapons, and advanced communication systems like the telegraph, which helped them coordinate their actions swiftly.',
                  '<strong>Lack of Support:</strong> Not all Indians supported the revolt. Many powerful rulers like the Scindias and the Nizam of Hyderabad, along with the Gurkhas and Sikhs, sided with the British.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Results of the Revolt",
        content: [
            { type: 'paragraph', text: 'The Revolt of 1857 was a turning point that brought major changes to British rule in India.'},
            { type: 'list', items: [
                '<strong>End of Company Rule:</strong> The British Parliament passed the Government of India Act of 1858, ending the rule of the East India Company.',
                '<strong>Direct Rule of the Crown:</strong> The administration of India was taken over directly by the British government (the Crown).',
                '<strong>New Administrative Structure:</strong><br/>• The Governor-General was given the new title of Viceroy, who acted as the personal representative of the Queen.<br/>• A Secretary of State for India was appointed in the British cabinet to manage Indian affairs.',
                '<strong>New Policies:</strong><br/>• The British promised to stop annexing Indian states and guaranteed the right of adoption to rulers.<br/>• Queen Victoria\'s Proclamation of 1858 promised religious freedom and equal treatment to all Indians, including in government jobs (though this was rarely followed in practice).',
                '<strong>Legacy:</strong> Though it failed, the Revolt of 1857 was the first great struggle for freedom. It created a lasting legacy of resistance and inspired future generations of freedom fighters. Its heroes became national icons.'
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "The First War of Independence—1857",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Revolt",
        content: [
          { type: 'paragraph', text: "1857 ka Revolt India ki freedom struggle mein ek pivotal event hai. Yeh 100 saal ke British East India Company ke control aur exploitation (1757 se) ke baad unke oppressive rule ke khilaf pehla large-scale uprising tha." },
          { type: 'list', items: [
              '<strong>Chingari:</strong> Revolt 10 May, 1857 ko shuru hua, jab Meerut military base par Indian soldiers (sepoys) ne bagawat kar di.',
              '<strong>Delhi Chalo:</strong> Agle din, 11 May ko, sepoys Delhi pahunche. Unhonne Red Fort mein enter kiya aur boodhe Mughal Emperor, Bahadur Shah Zafar II, ko Shahenshah-e-Hindustan (Emperor of Hindustan) ghoshit kar diya, jisse woh is rebellion ke symbolic head ban gaye.',
              '<strong>Ek Bada Vidroh:</strong> Jabki yeh soldiers se shuru hua, revolt tezi se phail gaya. Kisan, karigar, vidwan, aur kai Indian rulers is ladai mein shamil ho gaye, jisse yeh videshi shasan ke khilaf ek vyaapak sangharsh ban gaya.',
              '<strong>Alag-Alag Naam:</strong><br/>• British ise Sepoy Mutiny kehte the.<br/>• Indian historians ise First War of Independence kehte hain kyunki yeh समाज ke vibhinn vargon dwara British शासन ko ukhad fekne ka ek sanyukt prayas tha.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        content: [
          { type: 'paragraph', text: 'Yeh vidroh achanak hui ghatna nahi thi balki British policies ke khilaf dashakon se badhte gusse ka nateeja tha.' }
        ],
        subSections: [
            { id: '2.1', title: 'Political Causes', content: [
                { type: 'list', items: [
                    '<strong>Doctrine of Lapse:</strong> Governor-General Lord Dalhousie ki is aggressive policy ke mutabik, agar kisi princely state ka shasak bina natural male heir ke mar jaata, to use British annex kar lete. Shasakon ko gaddi ke liye beta god lene ki anumati nahi thi. Isse Indian rulers mein asuraksha aur gussa paida hua.',
                    '<strong>Subsidiary Alliance:</strong> Is policy ke tahat, Indian rulers ko aisi treaties mein majboor kiya gaya jisse unki shakti chhin gayi. For example, Awadh ke Nawab ko:<br/>• Apne territory mein ek British army rakhni padi aur uska kharch uthana pada.<br/>• Apne darbar mein ek British official (Resident) ko accept karna pada.<br/>• Apni service se sabhi doosre Europeans ko nikalna pada. Isse shasak British ki puppets ban gaye. 1856 mein, misgovernance ke jhoothe bahane par Awadh ka annexation, Indian rulers ka British mein bacha-khucha trust bhi tod diya.',
                    '<strong>Personal Grievances:</strong> Nana Saheb (jinko unke pita ki pension se vanchit kar diya gaya), Jhansi ki Rani Lakshmi Bai (jinke adopted son ko मान्यता nahi mili), aur Mughal Emperor khud ke paas British se naraz hone ke gehre personal kaaran the.'
                ]}
            ]},
            { id: '2.2', title: 'Economic Causes', content: [
                { type: 'list', items: [
                    '<strong>Indian Economy ka Vinash:</strong> British policies Britain ko India ke kharch par ameer banane ke liye design ki gayi thi.',
                    '<strong>Kisanon ke liye Mushkilein:</strong> Zamindari system ke tahat, kisanon ko bahut zyada tax dene aur food crops ke bajaye indigo aur cotton jaisi cash crops ugane ke liye majboor kiya gaya. Tax na dene par un par atyachar hota tha aur zameen chhin li jaati thi.',
                    '<strong>Industries aur Karigaron ki Barbadi:</strong> Britain se import kiye gaye saste, machine se bane saaman ne Indian markets ko bhar diya. Isse textiles jaisi traditional Indian industries tabah ho gayin, jisse lakhon karigar aur bunkar berozgar ho gaye.',
                    '<strong>Berozgari:</strong> Indian states ke annexation se hazaron sainik aur adhikari berozgar ho gaye.'
                ]}
            ]},
            { id: '2.3', title: 'Social and Religious Causes', content: [
                { type: 'list', items: [
                    '<strong>Paramparaon mein Hastakshep:</strong> British Indian customs ko inferior maante the aur unmein hastakshep karte the. Social reforms, western education, aur Christian missionaries ke kaam ko kai Indians ne gehri shanka se dekha.',
                    '<strong>Dharmantaran ka Dar:</strong> 1850 ke ek naye kanoon ne ek Indian ko jo Christianity mein convert ho gaya ho, use apni paitrk sampatti virasat mein lene ki anumati di. Ise dharmantaran ko protsahit karne ka ek seedha prayas maana gaya.',
                    '<strong>Racial Discrimination:</strong> British ne khule aam Indians ko ek inferior race ke roop mein treat kiya. Indians ko first-class train compartments mein anumati nahi thi aur unhein apmanit kiya jaata tha. Justice system bhi pakshapati tha.'
                ]}
            ]},
            { id: '2.4', title: 'Military Causes', content: [
                { type: 'list', items: [
                    '<strong>Sepoys ke khilaf Bhedbhav:</strong> Indian sepoys British army ki backbone the lekin unke saath bura bartav kiya jaata tha.<br/>• <strong>Pay and Promotion:</strong> Unhein British soldiers se bahut kam pay kiya jaata tha aur ve kabhi bhi Subedar ke rank se upar promote nahi ho sakte the.<br/>• <strong>Overseas Service:</strong> General Service Enlistment Act of 1856 ne naye sepoys ko zaroorat padne par videsh mein seva karna anivarya kar diya. Hinduon ke liye, samudra paar karna ek dharmik varjana thi jisse unki jaati ja sakti thi.'
                ]}
            ]},
            { id: '2.5', title: 'The Immediate Cause: Greased Cartridges', content: [
                { type: 'paragraph', text: 'Aakhiri chingari nayi Enfield rifle ki shuruaat thi. Is rifle ke cartridges par ek chikna kagaz laga hota tha jise load karne se pehle daant se kaatna padta tha. Ek afwah phail gayi ki yeh grease gaayon (Hinduon ke liye pavitra) aur suaron (Musalmanon ke liye varjit) ki charbi se bani thi. Cartridges ko kaatne ka yeh kaam unke dharmon par ek socha-samjha hamla maana gaya. 29 March, 1857 ko, Barrackpore mein Mangal Pandey naam ke ek sepoy ne in cartridges ka istemal karne se mana kar diya aur apne afsaron par hamla kar diya. Unhein phaansi de di gayi, lekin unke is kaam ne poore North India mein vidroh ki aag bhadka di.'}
            ]}
        ]
      },
      {
        id: '3',
        title: "The Course and Suppression of the Revolt",
        subSections: [
            { id: '3.1', title: 'Main Centres and Leaders', content: [
                { type: 'paragraph', text: 'Meerut mein shuruaati vidroh ke baad, revolt tezi se phail gaya.'},
                { type: 'list', items: [
                    '<strong>Kanpur:</strong> Nana Saheb aur unke pratibhashali general, Tantya Tope dwara netritva kiya gaya.',
                    '<strong>Lucknow:</strong> Awadh ki Begum Hazrat Mahal dwara netritva kiya gaya.',
                    '<strong>Jhansi:</strong> Veer Rani Lakshmi Bai dwara netritva kiya gaya.',
                    '<strong>Bihar:</strong> 80-saal ke zamindar Kunwar Singh dwara netritva kiya gaya.'
                ]}
            ]},
            { id: '3.2', title: 'Suppression of the Revolt', content: [
                { type: 'paragraph', text: 'British ne zabardast shakti ke saath jawab diya. Unhonne September 1857 mein Delhi par punah kabza kar liya, jo is rebellion ka dil tha.'},
                { type: 'list', items: [
                    '<strong>Krur Pratikriya:</strong> Delhi mein saikdon logon ka katle-aam kiya gaya. Bahadur Shah Zafar ko giraftar kar Rangoon bhej diya gaya. Unke beton ko kroorta se goli maar di gayi.',
                    '1858 tak, Lucknow par punah kabza ho gaya. Rani Lakshmi Bai yuddh mein bahaduri se ladte hue maari gayin. Tantya Tope ko pakad kar phaansi de di gayi. Iske pramukh netaon ki mrityu ke saath, vidroh puri tarah se kuchal diya gaya.'
                ]}
            ]}
        ]
      },
      {
          id: '4',
          title: 'Why the Revolt Failed',
          content: [
              { type: 'list', items: [
                  '<strong>Planning aur Coordination ki Kami:</strong> Vidroh samay se pehle shuru ho gaya aur aapas mein aacha coordination nahi tha. Alag-alag groups alag-alag samay par alag-alag ilakon mein lade, jisse British ko unhein ek-ek karke harane mein aasani hui.',
                  '<strong>Seemit Geographical Phailav:</strong> Uprising mukhya roop se North aur Central India mein hi aadharit tha. Desh ke bade hisse, jaise South aur Punjab, isse lagbhag aprabhavit rahe.',
                  '<strong>Ek Unified Goal ki Kami:</strong> Netaon ke sthaniya aur vyaktigat uddeshya the. Rani Lakshmi Bai Jhansi ke liye ladin, Nana Saheb apni pension ke liye, aur doosre apne ilakon ke liye. Ek naye Bharat ke liye koi ek, ekjut drishti nahi thi.',
                  '<strong>Behtar British Resources:</strong> British ke paas ek behtar sangathit aur anushasit sena, shreshth aadhunik hathiyar, aur telegraph jaise advanced communication systems the, jisse unhein apne actions ko tezi se coordinate karne mein madad mili.',
                  '<strong>Samarthan ki Kami:</strong> Sabhi Bharatiyon ne vidroh ka samarthan nahi kiya. Kai shaktishali shasak jaise Scindias aur Hyderabad ke Nizam, Gurkhaon aur Sikhon ke saath, British ka saath diya.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Results of the Revolt",
        content: [
            { type: 'paragraph', text: '1857 ka Vidroh ek turning point tha jisne Bharat mein British shasan mein bade badlav laye.'},
            { type: 'list', items: [
                '<strong>Company Rule ka Ant:</strong> British Parliament ne Government of India Act of 1858 pass kiya, jisse East India Company ka shasan samapt ho gaya.',
                '<strong>Crown ka Direct Rule:</strong> Bharat ka prashasan seedhe British sarkar (the Crown) ne apne haath mein le liya.',
                '<strong>Naya Administrative Structure:</strong><br/>• Governor-General ko Viceroy ka naya title diya gaya, jo Rani ke personal representative ke roop mein kaam karta tha.<br/>• Indian affairs ko manage karne ke liye British cabinet mein ek Secretary of State for India niyukt kiya gaya.',
                '<strong>Nayi Policies:</strong><br/>• British ne Indian states ko annex karna band karne ka vada kiya aur shasakon ko god lene ka adhikar guarantee kiya.<br/>• Queen Victoria ki 1858 ki Ghoshna ne sabhi Bharatiyon ko dharmik swatantrata aur sarkari naukriyon mein samaan vyavahar ka vada kiya (halaanki iska palan kam hi hota tha).',
                '<strong>Virasat:</strong> Bhale hi yeh vifal raha, 1857 ka Vidroh azaadi ke liye pehla mahan sangharsh tha. Isne pratirodh ki ek sthayi virasat banayi aur bhavishya ki peedhiyon ke swatantrata senaniyon ko prerna di. Iske nayak rashtriya pratik ban gaye.'
            ]}
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
          red: 'bg-red-100 border-red-500 text-red-900 dark:bg-red-900/30 dark:border-red-700 dark:text-red-200',
        };
        return (
          <div key={index} className={`my-4 p-4 border-l-4 rounded-r-lg ${colorClasses[item.color] || colorClasses.orange}`}>
            <div 
                className="prose prose-sm max-w-none prose-strong:text-inherit" 
                dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
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
function Class10IcseHistoryIndependenceAndThePartitionOfIndiaClassNotes() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '10': true, '11': true, '12': true, '13': true, '14': true });
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
              backgroundColor: themes[theme].cssVars['--theme-header-bg'],
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
              color: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'all 300ms',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 40,
              height: '64px'
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
      
      <div className="flex flex-col lg:flex-row bg-[var(--theme-bg)]" style={{ paddingTop: '64px' }}>
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
            <div className="lg:sticky top-[64px] h-[calc(100vh-64px)]">
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
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[80px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <div key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[80px]">
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

export default Class10IcseHistoryIndependenceAndThePartitionOfIndiaClassNotes;
