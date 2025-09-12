import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "The First War of Independence—1857",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to the Revolt of 1857",
        content: [
          { type: 'paragraph', text: 'The Revolt of 1857 is a landmark event in the history of India\'s struggle for freedom. It was a major uprising against the rule of the British East India Company.' },
          { type: 'list', items: [
              '<strong>Beginning of the Revolt:</strong> It started on May 10, 1857, with a mutiny of soldiers (sepoys) in the Meerut Cantonment.',
              '<strong>March to Delhi:</strong> The revolutionary soldiers marched to Delhi. On May 11, 1857, they crossed the Yamuna river, entered the Red Fort, and appealed to the aged Mughal Emperor, Bahadur Shah Zafar II, to lead the revolt.',
              '<strong>A New Leader:</strong> Although he had no real authority, the sepoys proclaimed him the Shahenshah-e-Hindustan (Emperor of Hindustan). They captured Delhi and ransacked many public offices.',
              '<strong>Spread of the Revolt:</strong> Though started by Indian soldiers, the revolt quickly spread to other parts of the country. People from different sections of society, like peasants, artisans, scholars, and educated Indians, joined in. Many Indian rulers also joined the fight against foreign rule. This showed a sense of unity between Hindus and Muslims.',
              '<strong>Different Names for the Revolt:</strong><br/>• The British called it The Uprising, the Revolt of 1857, or the Sepoy Mutiny.<br/>• Indian historians call it the First War of Independence because it was the first time that different sections of Indian society united to fight against foreign domination.',
              '<strong>Background of British Rule:</strong><br/>• The British came to India and slowly began losing its wealth and independence. Their main aim was to exploit the resources of our country.<br/>• From 1757 onwards, for 100 years, they won almost every battle against Indian rulers and kept expanding their control over India. They sent India\'s wealth back to England.<br/>• This exploitation angered the Indians, and finally, in 1857, many people revolted.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        content: [
          { type: 'paragraph', text: 'The revolt was the result of widespread unhappiness that had been building up for a long time. The causes can be divided into several categories:' }
        ],
        subSections: [
            { id: '2.1', title: 'Political Causes', content: [
                { type: 'list', items: [
                    '<strong>Dissatisfaction with British Rule:</strong> The sepoys and many Indian rulers were very unhappy with the policies of the British. Rulers like Bahadur Shah Zafar, Nana Saheb (of Kanpur), Rani Lakshmi Bai (of Jhansi), and the rulers of various other territories had personal issues with the British.',
                    '<strong>Foreign Exploitation:</strong> People in major cities like Delhi, Lucknow, and Gwalior felt their ambitions were blocked by foreign rule.',
                    '<strong>The Doctrine of Lapse:</strong><br/>• This policy was introduced by Lord Dalhousie.<br/>• According to this doctrine, if an Indian ruler died without a natural male heir, his kingdom would be taken over (annexed) by the British.<br/>• The ruler was not allowed to adopt a son to be his heir. This policy created a lot of anger and resentment among Indian rulers.',
                    '<strong>The Subsidiary Alliance:</strong><br/>• This was another policy used by the British to gain control. The British signed treaties with many Indian Kings. For example, a treaty was signed with the Nawab of Awadh in 1801.<br/>• Under this treaty, the Nawab had to:<br/>1. Accept a permanent British army within his territory.<br/>2. Pay a subsidy (money) for the army\'s maintenance.<br/>3. Not hire any other European in his service without British approval.<br/>4. Keep a British official, called a Resident, at his court.<br/>• This system reduced the power of the Indian ruler and made him dependent on the British.<br/>• Eventually, the British annexed Awadh completely, claiming that the Nawab was not governing the state properly. This act shocked other rulers and made them lose all trust in the British. The annexation of Awadh also left about 60,000 professional soldiers of the Nawab\'s army jobless.'
                ]}
            ]},
            { id: '2.2', title: 'Economic Causes', content: [
                { type: 'list', items: [
                    '<strong>Exploitation of Economy:</strong> The British policies were designed to benefit them, which destroyed the traditional Indian economic structure.',
                    '<strong>Hardship for Peasants:</strong> The zamindari system forced peasants (farmers) to grow only cash crops (like cotton and indigo), which the British wanted. If they failed to grow these crops or pay the high taxes, they were tortured.',
                    '<strong>Destruction of Indian Industries:</strong> Industrial goods, especially textiles, from Britain flooded the Indian markets. This destroyed Indian industries and made artisans and peasants unemployed.',
                    '<strong>Unemployment:</strong> Whenever the British annexed a princely state, they took over the land and wealth. This caused huge unemployment. For example, after the annexation of Awadh, many people lost their jobs.'
                ]}
            ]},
            { id: '2.3', title: 'Social and Religious Causes', content: [
                { type: 'list', items: [
                    '<strong>Interference in Customs:</strong> The British considered themselves superior and interfered in Indian customs and traditions.',
                    '<strong>Fear of Conversion:</strong> Many Indians became suspicious of the introduction of western education and the work of Christian missionaries, fearing they were aimed at converting people to Christianity.',
                    '<strong>Change in Inheritance Law:</strong> The Hindu law of property was changed. The new law allowed a person who converted to Christianity to inherit his ancestral property. This was seen as a way to encourage conversions.',
                    '<strong>New Technology and Fear:</strong> The spread of railways created fear among the poor and illiterate people that they would lose their caste by travelling with people from other castes.',
                    '<strong>Racial Discrimination:</strong><br/>• Indians were not allowed to travel in first-class train compartments.<br/>• The British looked down upon Indians and treated them as inferiors.<br/>• The judicial system claimed to be based on equality, but in practice, it was biased against Indians.'
                ]}
            ]},
            { id: '2.4', title: 'Military Causes', content: [
                { type: 'list', items: [
                    '<strong>Discrimination Against Sepoys:</strong> The Indian soldiers (sepoys) helped the British build their empire, but they were not treated well.<br/>• There was clear discrimination in promotions and pay.<br/>• An Indian soldier could not rise above the rank of a Subedar.<br/>• The highest salary for an Indian Subedar was less than the minimum salary of a new European recruit.',
                    '<strong>The General Service Enlistment Act of 1856:</strong> This new law forced Indian soldiers to serve overseas if required. This was a major issue for Hindus, who believed that crossing the sea would make them lose their caste.'
                ]}
            ]},
            { id: '2.5', title: 'Immediate Cause: The Greased Cartridges', content: [
                { type: 'paragraph', text: 'The immediate trigger for the revolt was the introduction of the new Enfield rifle. The cartridges for this rifle had a greased paper cover, which had to be bitten off before loading the cartridge into the rifle. A rumour spread that the grease was made from the fat of cows and pigs. This was deeply offensive to both Hindus, for whom the cow is sacred, and Muslims, for whom the pig is detestable. On March 29, 1857, at Barrackpore near Calcutta, a young sepoy named Mangal Pandey refused to use the greased cartridges. He attacked and shot down his sergeant. He was arrested, tried, and executed. This news spread like wildfire, and many sepoys across the country began to revolt.'}
            ]}
        ]
      },
      {
        id: '3',
        title: "Course of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>The Outbreak at Meerut:</strong> The sepoys openly revolted in Meerut in April 1857 after refusing to use the new cartridges. They were court-martialled and sentenced to ten years in prison.',
                '<strong>The Revolt Begins:</strong> On May 10, 1857, other regiments in Meerut revolted. They broke open the prison, freed the imprisoned soldiers, and marched to Delhi. On May 11, they rebelled under Bahadur Shah Zafar II.',
                '<strong>Spread and Leaders:</strong> The revolt spread to other places.<br/>• Kanpur: Led by Nana Saheb. His general was Tantya Tope.<br/>• Awadh (Lucknow): Led by Begum Hazrat Mahal.<br/>• Jhansi: Led by Rani Lakshmi Bai.<br/>• Central India: Rani Lakshmi Bai also fought bravely here.<br/>• Other Centres: The revolt also spread to Bareilly, Agra, Benaras, and other places.',
                '<strong>Groups That Did Not Join:</strong><br/>• Not everyone joined the revolt. The Sikh leaders in Punjab, the Nizam of Hyderabad, and the Scindia of Gwalior did not join.<br/>• The Madras and Bombay Regiments also remained loyal to the British.<br/>• The Afghans and the Gurkhas also remained loyal to the British.',
                '<strong>Nature of the Revolt:</strong> The revolt was started by the sepoys, but its real strength came from the participation of peasants and artisans. It showed remarkable Hindu-Muslim unity. Although it was a great event, it was eventually suppressed by the British.'
            ]}
        ]
      },
      {
          id: '4',
          title: 'Suppression of the Revolt',
          content: [
              { type: 'list', items: [
                  'The British military took strong measures to crush the revolt.',
                  '<strong>Recapture of Delhi:</strong> British officers freed Delhi, which was the main centre of the revolt. The Kashmiri Gate was blown up, and hundreds of people were massacred.',
                  '<strong>Fate of Bahadur Shah Zafar:</strong> The Mughal Emperor, Bahadur Shah Zafar II, was tried for treason and exiled to Rangoon (in modern-day Myanmar). His sons were cruelly shot down because they were held responsible for the murder of English men, women, and children.',
                  '<strong>End of the Revolt:</strong> The control of Delhi and the imprisonment of the Emperor broke the backbone of the mutiny.<br/>• Lucknow was recaptured in 1858.<br/>• Rani Lakshmi Bai was killed in battle.<br/>• Tantya Tope was captured and hanged to death.',
                  'This ended the historic episode, which is now called the First War of Independence.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Causes of the Failure of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>Broke Out Too Early:</strong> The uprising had been planned for months, but it started before the decided date. It did not spread beyond Central India and Delhi as planned, which made it easier for the Governor-General at the time, Lord Canning, to control it.',
                '<strong>Lack of Unity and Ideology:</strong> There was no common ideology or unity among the rebels. The idea of nationalism (a united India) had not yet developed.<br/>• The sepoys wanted to restore the glory of the Mughals.<br/>• Nana Saheb and Tantya Tope wanted to re-establish Maratha power.<br/>• Rani Lakshmi Bai was fighting for her own lost kingdom.',
                '<strong>Not Widespread:</strong> The revolt was mostly limited to North and Central India. The North (Punjab), the Sikhs, the Nizams, and the Scindias were not affected. In fact, the Gurkhas helped the British suppress the mutiny.',
                '<strong>Superior British Army:</strong> The rebels could not match the sophisticated and modern weapons of the British. The British army was more disciplined and had better communication systems and military strategies.',
                '<strong>Weak Leadership:</strong> The leadership of the revolt was not strong or organized enough to give a single direction to the rebels. Indian rulers fought to liberate their own territories and did not think about the freedom of the whole country.'
            ]}
        ]
      },
      {
        id: '6',
        title: "Results of the Revolt",
        content: [
            { type: 'paragraph', text: 'The Revolt of 1857 was a major turning point in Indian history. It led to several important changes.'},
            { type: 'list', items: [
                '<strong>End of East India Company\'s Rule:</strong> The rule of the East India Company ended with Queen Victoria\'s Proclamation of November 1, 1858.',
                '<strong>Direct Rule of the British Crown:</strong> The British Crown (the British government) took over the complete administration of India.',
                '<strong>New Administrative Posts:</strong><br/>• A Secretary of State was appointed by the British Parliament to look after the governance of India. He was helped by a council.<br/>• The title of the Governor-General was changed to Viceroy. The Viceroy was the personal representative of the British Crown in India.',
                '<strong>Change in British Policies:</strong><br/>• The British government stopped the policy of ruthless conquests and annexations.<br/>• Indian princes were given the assurance that their states would not be annexed.<br/>• The right of adoption was granted to Indian rulers.<br/>• Full religious freedom was guaranteed to Indians.<br/>• It was promised that Indians would be given high posts without any discrimination.',
                '<strong>Legacy of the Revolt:</strong><br/>• By the end of 1859, British authority in India was fully re-established.<br/>• The revolt proved to be the first great struggle for freedom.<br/>• It became a source of inspiration for later freedom fighters.<br/>• The heroes of the revolt, like Rani Lakshmi Bai and Mangal Pandey, became household names in the country.'
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
        title: "Introduction to the Revolt of 1857",
        content: [
          { type: 'paragraph', text: '1857 ka Revolt India ki azaadi ki ladai ke itihas mein ek landmark event hai. Yeh British East India Company ke shasan ke khilaf ek bada vidroh tha.' },
          { type: 'list', items: [
              '<strong>Revolt ki Shuruaat:</strong> Yeh 10 May, 1857 ko Meerut Cantonment mein soldiers (sepoys) ke ek mutiny ke saath shuru hua.',
              '<strong>Delhi ki Taraf March:</strong> Krantikari soldiers Delhi ki taraf badhe. 11 May, 1857 ko, unhonne Yamuna nadi paar ki, Red Fort mein pravesh kiya, aur Mughal Samrat Bahadur Shah Zafar II se vidroh ka netritva karne ki appeal ki.',
              '<strong>Ek Naya Leader:</strong> Halaanki unke paas koi asli adhikar nahi tha, sipahiyon ne unhein Shahenshah-e-Hindustan ghoshit kar diya. Unhonne Delhi par kabza kar liya aur kai public offices ko loot liya.',
              '<strong>Revolt ka Phailav:</strong> Bhale hi yeh Bharatiya sainikon dwara shuru kiya gaya tha, vidroh jald hi desh ke anya hisson mein phail gaya. Alag-alag sections ke log, jaise kisan, karigar, vidwan, aur padhe-likhe Bharatiya ismein shamil hue. Kai Bharatiya shasakon ne bhi videshi shasan ke khilaf ladai mein hissa liya. Isse Hinduon aur Musalmanon ke beech ekta ki bhavna dikhi.',
              '<strong>Revolt ke Alag-Alag Naam:</strong><br/>• British ise The Uprising, the Revolt of 1857, ya Sepoy Mutiny kehte the.<br/>• Bharatiya itihaskar ise First War of Independence kehte hain kyunki yeh pehli baar tha jab Bharatiya samaj ke alag-alag vargon ne videshi prabhutva ke khilaf ekjut hokar ladai ladi.',
              '<strong>British Shasan ki Prishthbhumi:</strong><br/>• British Bharat aaye aur dheere-dheere iski sampatti aur swatantrata khone lagi. Unka mukhya uddeshya hamare desh ke sansadhanon ka shoshan karna tha.<br/>• 1757 se aage, 100 varshon tak, unhonne Bharatiya shasakon ke khilaf lagbhag har ladai jeeti aur Bharat par apna niyantran badhate rahe. Unhonne Bharat ki sampatti ko England vapas bhej diya.<br/>• Is shoshan ne Bharatiyon ko naraz kar diya, aur ant mein, 1857 mein, kai logon ne vidroh kar diya.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Causes of the Revolt",
        content: [
          { type: 'paragraph', text: 'Yeh vidroh lambe samay se panap rahi vyaapak naakhushi ka parinaam tha. Iske kaaranon ko kai shreniyon mein baanta ja sakta hai:' }
        ],
        subSections: [
            { id: '2.1', title: 'Political Causes', content: [
                { type: 'list', items: [
                    '<strong>British Shasan se Asantosh:</strong> Sipahi aur kai Bharatiya shasak British ki policies se bahut naakhush the. Bahadur Shah Zafar, Nana Saheb (Kanpur ke), Rani Lakshmi Bai (Jhansi ki), aur anya kai kshetron ke shasakon ke British ke saath personal issues the.',
                    '<strong>Videshi Shoshan:</strong> Delhi, Lucknow, aur Gwalior jaise bade shaharon ke logon ko laga ki unki mahatvakankshayein videshi shasan dwara avaruddh ho gayi hain.',
                    '<strong>The Doctrine of Lapse:</strong><br/>• Yeh policy Lord Dalhousie ne shuru ki thi.<br/>• Is doctrine ke anusaar, yadi koi Bharatiya shasak bina kisi prakritik purush uttaradhikari ke mar jaata, to uska rajya British dwara hadap (annex) kar liya jaata.<br/>• Shasak ko apne uttaradhikari ke roop mein beta god lene ki anumati nahi thi. Is policy ne Bharatiya shasakon ke beech bahut krodh aur rosh paida kiya.',
                    '<strong>The Subsidiary Alliance:</strong><br/>• Yeh British dwara niyantran haasil karne ke liye istemal ki gayi ek aur policy thi. British ne kai Bharatiya राजाओं ke saath sandhiyan ki. Udaharan ke liye, 1801 mein Awadh ke Nawab ke saath ek sandhi par hastakshar kiye gaye the.<br/>• Is sandhi ke tahat, Nawab ko:<br/>1. Apne kshetr mein ek sthayi British sena ko sweekar karna pada.<br/>2. Sena ke rakhrखाव ke liye ek subsidy (paisa) dena pada.<br/>3. British ki anumati ke bina apni seva mein kisi anya European ko niyukt nahi karna tha.<br/>4. Apne darbar mein ek British adhikari, jise Resident kehte the, rakhna pada.<br/>• Is system ne Bharatiya shasak ki shakti ko kam kar diya aur use British par nirbhar bana diya.<br/>• Ant mein, British ne Awadh ko puri tarah se hadap liya, yeh dawa karte hue ki Nawab rajya ko theek se nahi chala raha tha. Is kritya ne anya shasakon ko chaunka diya aur unka British par se poora vishwas uth gaya. Awadh ke vilay se Nawab ki sena ke lagbhag 60,000 peshevar sainik bhi berozgar ho gaye.'
                ]}
            ]},
            { id: '2.2', title: 'Economic Causes', content: [
                { type: 'list', items: [
                    '<strong>Arthvyavastha ka Shoshan:</strong> British policies unhein labh pahunchane ke liye banayi gayi thi, jisse paramparik Bharatiya arthik sanrachna nasht ho gayi.',
                    '<strong>Kisanon ke liye Kathinai:</strong> Zamindari system ne kisanon ko kewal cash crops (jaise kapas aur neel) ugane ke liye majboor kiya, jo British chahte the. Yadi ve in faslon ko ugane ya unche tax chukane mein vifal rehte, to unhein pratadit kiya jaata tha.',
                    '<strong>Bharatiya Udyogon ka Vinash:</strong> Britain se audyogik saaman, visheshkar textiles, ne Bharatiya bazaron mein baadh la di. Isse Bharatiya udyog nasht ho gaye aur karigar aur kisan berozgar ho gaye.',
                    '<strong>Berozgari:</strong> Jab bhi British kisi riyasat ko hadapte, ve zameen aur sampatti par kabza kar lete. Isse bhaari berozgari paida hui. Udaharan ke liye, Awadh ke vilay ke baad, kai logon ne apni naukriyan kho din.'
                ]}
            ]},
            { id: '2.3', title: 'Social and Religious Causes', content: [
                { type: 'list', items: [
                    '<strong>Riti-Riwajon mein Hastakshep:</strong> British khud ko shreshth samajhte the aur Bharatiya riti-riwajon aur paramparaon mein hastakshep karte the.',
                    '<strong>Dharmantaran ka Dar:</strong> Kai Bharatiyon ko western education ki shuruaat aur Christian missionaries ke kaam par sandeh ho gaya, unhein dar tha ki iska uddeshya logon ko Christianity mein convert karna tha.',
                    '<strong>Virasat Kanoon mein Parivartan:</strong> Hindu sampatti kanoon mein badlav kiya gaya. Naye kanoon ne ek vyakti ko jo Christianity mein convert ho gaya ho, use apni paitrk sampatti virasat mein lene ki anumati di. Ise dharmantaran ko protsahit karne ke ek tareeke ke roop mein dekha gaya.',
                    '<strong>Nayi Technology aur Dar:</strong> Railways ke phailav ne gareeb aur anpadh logon mein yeh dar paida kar diya ki ve anya jaatiyon ke logon ke saath yatra karke apni jaati kho denge.',
                    '<strong>Racial Discrimination:</strong><br/>• Bharatiyon ko first-class train compartments mein yatra karne ki anumati nahi thi.<br/>• British Bharatiyon ko neechi nazar se dekhte the aur unke saath heen vyavahar karte the.<br/>• Nyayik pranali ne samanta par aadharit hone ka dawa kiya, lekin vyavahar mein, yeh Bharatiyon ke khilaf pakshapati thi.'
                ]}
            ]},
            { id: '2.4', title: 'Military Causes', content: [
                { type: 'list', items: [
                    '<strong>Sipahiyon ke Saath Bhedbhav:</strong> Bharatiya sainikon (sepoys) ne British ko apna samrajya banane mein madad ki, lekin unke saath achha vyavahar nahi kiya gaya.<br/>• Promotions aur वेतन mein spasht bhedbhav tha.<br/>• Ek Bharatiya sainik Subedar ke rank se upar nahi ja sakta tha.<br/>• Ek Bharatiya Subedar ka sabse adhik vetan ek naye European bharti ke newnatam vetan se kam tha.',
                    '<strong>The General Service Enlistment Act of 1856:</strong> Is naye kanoon ne Bharatiya sainikon ko zaroorat padne par videsh mein seva karne ke liye majboor kiya. Yeh Hinduon ke liye ek bada mudda tha, jo maante the ki samudra paar karne se unki jaati chali jayegi.'
                ]}
            ]},
            { id: '2.5', title: 'Immediate Cause: The Greased Cartridges', content: [
                { type: 'paragraph', text: 'Vidroh ka tatkalik kaaran nayi Enfield rifle ki shuruaat thi. Is rifle ke cartridges mein ek chikna kagaz ka cover hota tha, jise rifle mein cartridge load karne se pehle daant se kaatna padta tha. Ek afwah phail gayi ki yeh grease gaay aur suar ki charbi se bani thi. Yeh Hinduon, jinke liye gaay pavitra hai, aur Musalmanon, jinke liye suar ghrinit hai, dono ke liye atyant apmanjanak tha. 29 March, 1857 ko, Calcutta ke paas Barrackpore mein, Mangal Pandey naam ke ek yuva sipahi ne chikne cartridges ka istemal karne se inkar kar diya. Usne apne sergeant par hamla kiya aur use goli maar di. Use giraftar kar liya gaya, mukadma chalaya gaya aur phaansi de di gayi. Yeh khabar jangal ki aag ki tarah phail gayi, aur desh bhar mein kai sipahiyon ne vidroh karna shuru kar diya.'}
            ]}
        ]
      },
      {
        id: '3',
        title: "Course of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>Meerut mein Vidroh:</strong> Sipahiyon ne April 1857 mein Meerut mein naye cartridges ka istemal karne se inkar karne ke baad khule aam vidroh kar diya. Unka court-martial kiya gaya aur unhein das saal ki kaid ki saza sunai gayi.',
                '<strong>Vidroh Shuru Hota Hai:</strong> 10 May, 1857 ko, Meerut mein anya regiments ne vidroh kar diya. Unhonne jail tod di, kaid sipahiyon ko azaad karaya, aur Delhi ki taraf kooch kiya. 11 May ko, unhonne Bahadur Shah Zafar II ke tahat vidroh kiya.',
                '<strong>Phailav aur Neta:</strong> Vidroh anya sthano par phail gaya.<br/>• Kanpur: Nana Saheb ne netritva kiya. Unke general Tantya Tope the.<br/>• Awadh (Lucknow): Begum Hazrat Mahal ne netritva kiya.<br/>• Jhansi: Rani Lakshmi Bai ne netritva kiya.<br/>• Central India: Rani Lakshmi Bai ne yahan bhi bahaduri se ladai ladi.<br/>• Anya Kendra: Vidroh Bareilly, Agra, Benaras, aur anya sthano par bhi phail gaya.',
                '<strong>Shamil na Hone Wale Samuh:</strong><br/>• Har koi vidroh mein shamil nahi hua. Punjab ke Sikh neta, Hyderabad ke Nizam, aur Gwalior ke Scindia shamil nahi hue.<br/>• Madras aur Bombay Regiments bhi British ke prati wafadar rahin.<br/>• Afghans aur Gurkhas bhi British ke prati wafadar rahe.',
                '<strong>Vidroh ki Prakriti:</strong> Vidroh sipahiyon dwara shuru kiya gaya tha, lekin iski asli taqat kisanon aur karigaron ki bhagidari se aayi. Isne ullekhniya Hindu-Muslim ekta dikhai. Halaanki yeh ek mahan ghatna thi, antतः ise British dwara daba diya gaya.'
            ]}
        ]
      },
      {
          id: '4',
          title: 'Suppression of the Revolt',
          content: [
              { type: 'list', items: [
                  'British sena ne vidroh ko kuchalne ke liye kathor kadam uthaye.',
                  '<strong>Delhi par Punah Kabza:</strong> British adhikariyon ne Delhi ko azaad karaya, jo vidroh ka mukhya kendra tha. Kashmiri Gate ko uda diya gaya, aur saikdon logon ka katle-aam kiya gaya.',
                  '<strong>Bahadur Shah Zafar ka Anjaam:</strong> Mughal Samrat, Bahadur Shah Zafar II, par deshdroh ka mukadma chalaya gaya aur unhein Rangoon (aaj ke Myanmar mein) nirvasit kar diya gaya. Unke beton ko kroorta se goli maar di gayi kyunki unhein angrez mardon, auraton aur bachchon ki hatya ke liye zimmedar thehraya gaya tha.',
                  '<strong>Vidroh ka Ant:</strong> Delhi par niyantran aur Samrat ki kaid ne vidroh ki kamar tod di.<br/>• Lucknow par 1858 mein punah kabza kar liya gaya.<br/>• Rani Lakshmi Bai yuddh mein maari gayin.<br/>• Tantya Tope ko pakad kar phaansi de di gayi.',
                  'Isse yeh aitihasik ghatna samapt ho gayi, jise ab First War of Independence kaha jaata hai.'
              ]}
          ]
      },
      {
        id: '5',
        title: "Causes of the Failure of the Revolt",
        content: [
            { type: 'list', items: [
                '<strong>Samay se Pehle Shuruat:</strong> Vidroh ki yojana mahinon se banayi gayi thi, lekin yeh nirdharit tithi se pehle shuru ho gaya. Yeh yojana ke anusaar Central India aur Delhi se aage nahi phaila, jisse us samay ke Governor-General, Lord Canning, ke liye ise niyantrit karna aasan ho gaya.',
                '<strong>Ekta aur Vichardhara ki Kami:</strong> Vidrohiyon ke beech koi common ideology ya ekta nahi thi. Nationalism (ekjut Bharat) ka vichar abhi tak viksit nahi hua tha.<br/>• Sipahi Mughalon ki shaan ko bahal karna chahte the.<br/>• Nana Saheb aur Tantya Tope Maratha shakti ko punah sthapit karna chahte the.<br/>• Rani Lakshmi Bai apne khoye hue rajya ke liye lad rahi theen.',
                '<strong>Vyaapak Nahi Tha:</strong> Vidroh mukhya roop se Uttar aur Madhya Bharat tak hi seemit tha. Uttar (Punjab), Sikh, Nizam, aur Scindia isse aprabhavit rahe. Vastav mein, Gurkhaon ne British ko vidroh ko dabane mein madad ki.',
                '<strong>Behtar British Sena:</strong> Vidrohi British ke jatil aur aadhunik hathiyaron ka muqabla nahi kar sake. British sena adhik anushasit thi aur unke paas behtar sanchar pranaliyan aur sainik ranneetiyan theen.',
                '<strong>Kamzor Netritva:</strong> Vidroh ka netritva itna mazboot ya sangathit nahi tha ki vah vidrohiyon ko ek disha de sake. Bharatiya shasakon ne apne-apne kshetron ko azaad karane ke liye ladai ladi aur poore desh ki azaadi ke baare mein nahi socha.'
            ]}
        ]
      },
      {
        id: '6',
        title: "Results of the Revolt",
        content: [
            { type: 'paragraph', text: '1857 ka Vidroh Bharatiya itihas mein ek pramukh mod tha. Isse kai mahatvapurna parivartan hue.'},
            { type: 'list', items: [
                '<strong>East India Company ke Shasan ka Ant:</strong> East India Company ka shasan 1 November, 1858 ki Queen Victoria ki Ghoshna ke saath samapt ho gaya.',
                '<strong>British Crown ka Pratyaksh Shasan:</strong> British Crown (British sarkar) ne Bharat ka poora prashasan apne haath mein le liya.',
                '<strong>Naye Prashasnik Pad:</strong><br/>• Bharat ke shasan ki dekhbhal ke liye British Parliament dwara ek Secretary of State niyukt kiya gaya. Uski madad ek council karti thi.<br/>• Governor-General ka padनाम badalkar Viceroy kar diya gaya. Viceroy Bharat mein British Crown ka vyaktigat pratinidhi tha.',
                '<strong>British Nitiyon mein Parivartan:</strong><br/>• British sarkar ne kroor vijayon aur vilayon ki niti band kar di.<br/>• Bharatiya rajkumaron ko yeh ashvasan diya gaya ki unke rajyon ka vilay nahi kiya jayega.<br/>• Bharatiya shasakon ko god lene ka adhikar diya gaya.<br/>• Bharatiyon ko poorn dharmik swatantrata ki guarantee di gayi.<br/>• Yeh vada kiya gaya ki Bharatiyon ko bina kisi bhedbhav ke unche pad diye jayenge.',
                '<strong>Vidroh ki Virasat:</strong><br/>• 1859 ke ant tak, Bharat mein British satta puri tarah se punah sthapit ho gayi thi.<br/>• Vidroh azaadi ke liye pehla mahan sangharsh saabit hua.<br/>• Yeh baad ke swatantrata senaniyon ke liye prerna ka srot bana.<br/>• Vidroh ke nayak, jaise Rani Lakshmi Bai aur Mangal Pandey, desh mein ghar-ghar mein mashhoor ho gaye.'
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
function Class10IcseHistoryTheFirstWarOfIndependence1857Notes() {
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

export default Class10IcseHistoryTheFirstWarOfIndependence1857Notes ;
