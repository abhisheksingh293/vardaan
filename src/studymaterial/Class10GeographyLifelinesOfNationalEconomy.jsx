import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Lifelines of National Economy",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction",
        content: [
          { type: 'paragraph', text: "Efficient transport is essential for a country's development. Goods and services don't move on their own from where they're made to where they're needed; this requires a transportation network." },
          { type: 'paragraph', text: "Think of transport, communication, and trade as the three pillars that support a modern economy—they are all complementary and rely on each other. A dense and efficient network is the foundation for local, national, and global trade." }
        ]
      },
      {
        id: '2',
        title: "Means of Transport",
        content: [
          { type: 'paragraph', text: "India's transport system is divided into three main domains: Land, Water, and Air." },
          { type: 'list', items: [
            '<strong>Land:</strong> Roadways, Railways, Pipelines',
            '<strong>Water:</strong> Inland (within the country), Overseas (across the sea)',
            '<strong>Air:</strong> Domestic Airways (within the country), International Airways (to other countries). These can be government-owned (Public Undertaking) or privately owned (Private Airlines).'
          ]}
        ]
      },
      {
        id: '3',
        title: "Roadways",
        content: [
          { type: 'paragraph', text: "India has the second-largest road network in the world, totaling about 62.16 lakh km as of 2020-21. Roadways still have an edge over railways for several reasons." },
          { type: 'heading', text: "Advantages of Roadways" },
          { type: 'list', items: [
            '<strong>Lower Construction Cost:</strong> Building roads is much cheaper than building railway lines.',
            '<strong>Versatile Terrain:</strong> Roads can be built in comparatively more dissected and undulating (uneven) landscapes. They can also handle steeper slopes, making them suitable for mountainous regions like the Himalayas.',
            '<strong>Economical for Short Distances:</strong> Road transport is more cost-effective for moving a few people or a small amount of goods over short distances.',
            '<strong>Door-to-Door Service:</strong> Roads offer the convenience of picking up and dropping off goods right at the doorstep, which significantly lowers loading and unloading costs.',
            '<strong>Feeder System:</strong> Roads act as a vital link to other forms of transport, connecting people to railway stations, airports, and sea ports.'
          ]}
        ],
        subSections: [
          {
            id: '3.1',
            title: 'Classification of Roads',
            content: [
              { type: 'paragraph', text: 'Roads in India are categorized into six classes based on their capacity.' },
              { type: 'list', items: [
                '<strong>Golden Quadrilateral Super Highways:</strong> A major government project to link Delhi, Kolkata, Chennai, and Mumbai with six-lane Super Highways to reduce travel time. It also includes the North-South (Srinagar-Kanniyakumari) and East-West (Silchar-Porbandar) corridors. Implemented by the NHAI.',
                '<strong>National Highways (NH):</strong> The primary road systems connecting the most remote parts of the country.',
                '<strong>State Highways:</strong> Roads linking a state capital with its various district headquarters.',
                '<strong>District Roads:</strong> Roads connecting district headquarters with other places within the same district.',
                '<strong>Other Roads:</strong> Includes rural roads linking villages to towns, boosted by the Pradhan Mantri Grameen Sadak Yojana.',
                '<strong>Border Roads:</strong> Built and maintained by the Border Roads Organisation (BRO) in border areas for strategic importance.'
              ]},
              { type: 'paragraph', text: 'Roads are also classified by the material used:' },
              { type: 'list', items: [
                '<strong>Metalled Roads:</strong> Made of cement, concrete, or bitumen; these are all-weather roads.',
                '<strong>Unmetalled Roads:</strong> These roads are unusable during the rainy season.'
              ]}
            ]
          }
        ]
      },
      {
        id: '4',
        title: "Railways",
        content: [
          { type: 'paragraph', text: "Railways are the principal mode of transport for both freight (goods) and passengers in India. They are crucial for business, tourism, and moving goods over long distances. For more than 150 years, railways have been a great integrating force, helping to bind the country's economic life and boost the development of industry and agriculture." },
          { type: 'paragraph', text: "The first train journey in India was from Mumbai to Thane in 1853, covering 34 km. Today, the Indian Railway is the largest public sector undertaking in the country, reorganized into 17 zones." }
        ],
        subSections: [
          {
            id: '4.1',
            title: 'Factors Shaping the Railway Network',
            content: [
              { type: 'paragraph', text: "The railway network's distribution is influenced by physical, economic, and administrative factors." },
              { type: 'list', items: [
                '<strong>The Northern Plains:</strong> Most favorable due to vast level land, high population, and rich agriculture. However, numerous rivers required many bridges.',
                '<strong>Hilly and Mountainous Regions:</strong> Unfavorable. The Himalayas are particularly challenging due to high relief and sparse population.',
                '<strong>Other Difficult Terrains:</strong> Include the sandy plains of Rajasthan, swamps of Gujarat, and forested tracks. The Konkan Railway along the west coast was a major achievement despite challenges like landslides.'
              ]}
            ]
          },
          {
            id: '4.2',
            title: 'Problems Faced by Railways',
            content: [
              { type: 'list', items: [
                'Many passengers travel without tickets.',
                'Theft and damage to railway property have not stopped completely.',
                "People unnecessarily pull the train's emergency chain, causing heavy damage and delays."
              ]}
            ]
          },
          {
            id: '4.3',
            title: 'Railway Gauges in India',
            content: [
                { type: 'paragraph', text: 'The Indian Railway network operates on multiple track widths (gauges).' },
                {
                    type: 'table',
                    headers: ['Gauge in metres', 'Route (Km)'],
                    rows: [
                        ['Broad Gauge (1.676)', '63,950'],
                        ['Metre Gauge (1.000)', '2,402'],
                        ['Narrow Gauge (0.762 and 0.610)', '1,604'],
                        ['<strong>Total</strong>', '<strong>67,956</strong>']
                    ]
                },
                { type: 'paragraph', text: '<em>(Source: Railway Yearbook 2019-20, Ministry of Railways)</em>' }
            ]
          }
        ]
      },
      {
        id: '5',
        title: "Pipelines",
        content: [
          { type: 'paragraph', text: "The pipeline network is a recent addition to India's transportation map. Initially used for water, they now carry crude oil, petroleum products, and natural gas. Solids can also be transported as a slurry." },
          { type: 'paragraph', text: "The main benefit is that while the initial laying cost is high, running costs are minimal. They also eliminate trans-shipment losses and delays." },
          { type: 'heading', text: 'Important Pipeline Networks' },
          { type: 'list', items: [
            'From oil fields in Upper Assam to Kanpur (Uttar Pradesh), via Guwahati, Barauni, and Prayagraj.',
            'From Salaya in Gujarat to Jalandhar in Punjab, via Viramgam, Mathura, Delhi, and Sonipat.',
            'The Hazira-Vijaipur-Jagdishpur (HVJ) cross-country gas pipeline, linking Mumbai High and Bassein gas fields with industrial complexes in western and northern India.'
          ]}
        ]
      },
      {
        id: '6',
        title: "Waterways",
        content: [
          { type: 'paragraph', text: "Waterways are the cheapest means of transport, ideal for heavy and bulky goods. They are also fuel-efficient and environmentally friendly." }
        ],
        subSections: [
          {
            id: '6.1',
            title: 'Inland Waterways',
            content: [
              { type: 'paragraph', text: "India has 14,500 km of inland navigation waterways. The government has designated several as National Waterways (NWs):" },
              { type: 'list', items: [
                '<strong>NW No. 1:</strong> The Ganga river between Prayagraj and Haldia (1620 km).',
                '<strong>NW No. 2:</strong> The Brahmaputra river between Sadiya and Dhubri (891 km).',
                '<strong>NW No. 3:</strong> The West-Coast Canal in Kerala (205 km).',
                '<strong>NW No. 4:</strong> Specified stretches of Godavari and Krishna rivers (1078 km).',
                '<strong>NW No. 5:</strong> Specified stretches of the Brahmani river along with the East Coast Canal (588 km).'
              ]}
            ]
          },
          {
            id: '6.2',
            title: 'Major Sea Ports',
            content: [
              { type: 'paragraph', text: "With a long coastline of 7,516.6 km, India has 12 major and 200 non-major ports. These major ports handle 95% of India's foreign trade." },
              { type: 'infoBox', color: 'blue', content: "<strong>West Coast Ports:</strong><br/>• <strong>Deendayal Port (Kandla):</strong> A tidal port developed after independence to ease volume on Mumbai port.<br/>• <strong>Mumbai:</strong> The biggest port with a spacious, natural harbor.<br/>• <strong>Jawaharlal Nehru Port:</strong> Planned to decongest the Mumbai port.<br/>• <strong>Mormugao Port (Goa):</strong> Premier iron ore exporting port.<br/>• <strong>New Mangalore Port:</strong> Exports iron ore from Kudremukh mines.<br/>• <strong>Cochin:</strong> Extreme south-western port at a lagoon entrance." },
              { type: 'infoBox', color: 'green', content: "<strong>East Coast Ports:</strong><br/>• <strong>V.O. Chidambaranar (Tuticorin):</strong> Extreme south-eastern port with a natural harbor.<br/>• <strong>Chennai:</strong> One of the oldest artificial ports.<br/>• <strong>Vishakhapatnam:</strong> Deepest landlocked and well-protected port.<br/>• <strong>Paradwip Port (Odisha):</strong> Specializes in exporting iron ore.<br/>• <strong>Shyama Prasad Mookerjee (Kolkata):</strong> An inland riverine port requiring constant dredging.<br/>• <strong>Haldia Port:</strong> Developed to relieve pressure on Kolkata port." }
            ]
          }
        ]
      },
      {
        id: '7',
        title: "Airways",
        content: [
          { type: 'paragraph', text: "Air travel is the fastest, most comfortable, and prestigious mode of transport. It can cover difficult terrains like high mountains, deserts, and dense forests with great ease, making it essential for the north-eastern states." },
          { type: 'paragraph', text: "Pawanhans Helicopters Ltd. provides helicopter services to oil and gas operations and to inaccessible areas in states like Jammu and Kashmir and Uttarakhand." }
        ]
      },
      {
        id: '8',
        title: "Communication",
        content: [
          { type: 'paragraph', text: "Communication can be divided into personal communication and mass communication." }
        ],
        subSections: [
          {
            id: '8.1',
            title: 'Postal Network',
            content: [
              { type: 'paragraph', text: "The Indian postal network is the largest in the world. It handles both parcels and personal written communications." },
              { type: 'list', items: [
                '<strong>First-Class Mail:</strong> Cards and envelopes, which are airlifted between stations.',
                '<strong>Second-Class Mail:</strong> Book packets, registered newspapers, and periodicals, carried by surface mail (land and water).',
                '<strong>Six mail channels</strong> were introduced for quick delivery in large cities: Rajdhani, Metro, Green, Business, Bulk Mail, and Periodical Channels.'
              ]}
            ]
          },
          {
            id: '8.2',
            title: 'Telecom and Mass Media',
            content: [
              { type: 'list', items: [
                'India has one of the largest telecom networks in Asia. More than two-thirds of its villages have STD telephone facilities.',
                '<strong>Mass communication</strong> includes radio, TV, newspapers, magazines, and films, providing entertainment and creating awareness.',
                '<strong>All India Radio (Akashwani)</strong> broadcasts programs in national, regional, and local languages.',
                '<strong>Doordarshan</strong>, the national television channel, is one of the largest terrestrial networks in the world.',
                'Newspapers are published in about 100 languages, with the largest number in Hindi.',
                'India is the largest producer of feature films in the world.'
              ]}
            ]
          }
        ]
      },
      {
        id: '9',
        title: "International Trade",
        content: [
          { type: 'paragraph', text: "Trade is the exchange of goods between people, states, or countries. Trade between two or more countries is called international trade. It is considered the economic barometer for a country." },
          { type: 'list', items: [
            '<strong>Export and Import</strong> are the two components of trade.',
            '<strong>Balance of Trade</strong> is the difference between a country\'s exports and imports.',
            'A <strong>favorable balance</strong> is when exports are greater than imports.',
            'An <strong>unfavorable balance</strong> is when imports exceed exports.',
            'India\'s major <strong>exports</strong> include gems and jewellery, chemicals, and agricultural products.',
            'Its major <strong>imports</strong> include petroleum, gems and jewellery, chemicals, and electronic items.',
            'India has emerged as a software giant, earning large foreign exchange through IT exports.'
          ]}
        ]
      },
      {
        id: '10',
        title: "Tourism as a Trade",
        content: [
          { type: 'paragraph', text: "Tourism in India has grown significantly. It promotes national integration, supports local handicrafts, and helps develop international understanding of India's culture and heritage." },
          { type: 'paragraph', text: "Foreign tourists visit India for various reasons, including heritage, eco, adventure, cultural, medical, and business tourism. There is vast potential to develop this upcoming industry." }
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Rashtriya Arthvyavastha ki Jeevan Rekhayein",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Parichay",
        content: [
          { type: 'paragraph', text: "Ek desh ke vikas ke liye kushal parivahan avashyak hai. Vastuon aur sevaon ko jahan banaya jaata hai, wahan se jahan unki zaroorat hoti hai, wahan tak pahunchane ke liye ek parivahan network ki avashyakta hoti hai." },
          { type: 'paragraph', text: "Parivahan, sanchar aur vyapar ko ek aadhunik arthvyavastha ke teen stambh samjhein—ye sabhi ek doosre ke poorak hain aur ek doosre par nirbhar hain. Ek saghan aur kushal network sthaniya, rashtriya aur vaishvik vyapar ka aadhar hai." }
        ]
      },
      {
        id: '2',
        title: "Parivahan ke Saadhan",
        content: [
          { type: 'paragraph', text: "Bharat ki parivahan pranali ko teen mukhya domains mein vibhajit kiya gaya hai: Sthal, Jal, aur Vayu." },
          { type: 'list', items: [
            '<strong>Sthal (Land):</strong> Sadak Marg, Rail Marg, Pipeline',
            '<strong>Jal (Water):</strong> Aantarik (desh ke bhitar), Samudri (samudra paar)',
            '<strong>Vayu (Air):</strong> Gharelu Viman Seva (desh ke bhitar), Antarrashtriya Viman Seva (dusre deshon tak). Ye sarkari (Public Undertaking) ya niji (Private Airlines) ho sakti hain.'
          ]}
        ]
      },
      {
        id: '3',
        title: "Sadak Marg (Roadways)",
        content: [
          { type: 'paragraph', text: "2020-21 tak, Bharat mein duniya ka doosra sabse bada sadak network hai, jiski kul lambai lagbhag 62.16 lakh km hai. Kai kaaranon se sadak marg rail marg par abhi bhi bartari rakhte hain." },
          { type: 'heading', text: "Sadak Marg ke Fayde" },
          { type: 'list', items: [
            '<strong>Kam Nirman Lagat:</strong> Sadkein banana railway line banane se bahut sasta hai.',
            '<strong>Vividh Bhumi:</strong> Sadkein tulnatmak roop se adhik kate-phate aur oobad-khabad (uneven) bhoo-bhagon mein banayi ja sakti hain. Ve adhik dhalan bhi jhel sakti hain, jisse ve Himalaya jaise pahadi kshetron ke liye upyukt hain.',
            '<strong>Kam Doori ke liye Sasta:</strong> Kam logon ya kam saman ko kam doori tak le jaane ke liye sadak parivahan adhik kifayati hai.',
            '<strong>Ghar-Ghar Seva:</strong> Sadkein ghar ke darwaze par saman uthane aur chhodne ki suvidha pradan karti hain, jisse chadhane aur utarne ki lagat kafi kam ho jaati hai.',
            '<strong>Feeder System:</strong> Sadkein parivahan ke anya sadhanon ke liye ek mahatvapurna link ka kaam karti hain, jo logon ko railway station, hawai addon aur bandargahon se jodti hain.'
          ]}
        ],
        subSections: [
          {
            id: '3.1',
            title: 'Sadakon ka Vargikaran',
            content: [
              { type: 'paragraph', text: 'Bharat mein sadakon ko unki kshamata ke aadhar par chhah vargon mein baanta gaya hai.' },
              { type: 'list', items: [
                '<strong>Swarnim Chaturbhuj Super Highways:</strong> Delhi, Kolkata, Chennai aur Mumbai ko chhah-lane wale Super Highways se jodne ki ek pramukh sarakari pariyojana, jiska uddeshya yatra ke samay ko kam karna hai. Ismein Uttar-Dakshin (Srinagar-Kanniyakumari) aur Purva-Paschim (Silchar-Porbandar) galiyare bhi shamil hain. Ise NHAI dwara lagu kiya ja raha hai.',
                '<strong>Rashtriya Rajmarg (NH):</strong> Ye desh ke doorasth hisson ko jodne wali prathamik sadak pranaliyan hain.',
                '<strong>Rajya Rajmarg:</strong> Ye sadkein ek rajya ki rajdhani ko uske vibhinn zila mukhyalayon se jodti hain.',
                '<strong>Zila Sadkein:</strong> Ye sadkein zila mukhyalayon ko usi zile ke anya sthanon se jodti hain.',
                '<strong>Anya Sadkein:</strong> Is shreni mein gramin sadkein shamil hain jo gaonon ko shaharon se jodti hain, jinhein Pradhan Mantri Grameen Sadak Yojana ke tahat badhava mila.',
                '<strong>Seema Sadkein:</strong> Seema Sadak Sangathan (BRO) dwara seemavarti kshetron mein ranneetik mahatva ke liye banayi gayi sadkein.'
              ]},
              { type: 'paragraph', text: 'Sadakon ko nirman samagri ke aadhar par bhi vargikrit kiya gaya hai:' },
              { type: 'list', items: [
                '<strong>Pakki Sadkein (Metalled):</strong> Cement, concrete ya bitumen se bani, ye har mausam mein upyogi sadkein hain.',
                '<strong>Kachchi Sadkein (Unmetalled):</strong> Ye sadkein barsat ke mausam mein anupyogi ho jaati hain.'
              ]}
            ]
          }
        ]
      },
      {
        id: '4',
        title: "Rail Marg (Railways)",
        content: [
          { type: 'paragraph', text: "Railways Bharat mein maal (goods) aur yatriyon dono ke liye parivahan ka pramukh sadhan hai. Ye vyavsay, paryatan aur lambi doori tak saman le jaane ke liye mahatvapurna hain. 150 se adhik varshon se, railways ek mahan ekikaran shakti rahi hai, jo desh ke arthik jeevan ko bandhne aur udyog va krishi ke vikas ko badhava dene mein madad karti hai." },
          { type: 'paragraph', text: "Bharat mein pehli train yatra 1853 mein Mumbai se Thane tak hui, jisne 34 km ki doori tay ki. Aaj, Bharatiya Rail desh ka sabse bada sarvajanik kshetra ka upkram hai, jise 17 zones mein punargathit kiya gaya hai." }
        ],
        subSections: [
          {
            id: '4.1',
            title: 'Rail Network ko Aakar Dene Wale Karak',
            content: [
              { type: 'paragraph', text: "Rail network ka vitaran bhautik, arthik aur prashasnik karakon se prabhavit hota hai." },
              { type: 'list', items: [
                '<strong>Uttari Maidan:</strong> Vishaal samatal bhoomi, uchch jansankhya ghanatva aur samriddh krishi sansadhanon ke karan rail vikas ke liye sabse anukool hain. Halanki, badi sankhya mein nadiyon ne badhayein paida keen, jiske liye kai pulon ka nirman karna pada.',
                '<strong>Pahadi aur Parvatiya Kshetra:</strong> Pratikool hain. Himalaya uchch rahat aur viral jansankhya ke karan vishesh roop se chunautipurn hai.',
                '<strong>Anya Kathin Bhumi:</strong> Rajasthan ke retile maidan, Gujarat ke daldal aur van-achchhadit kshetra shamil hain. Paschimi tat par Konkan Railway ka vikas ek badi uplabdhi thi, halanki ise bhooskhalan jaisi samasyaon ka samna karna pada hai.'
              ]}
            ]
          },
          {
            id: '4.2',
            title: 'Railways dwara Samna ki Jane Wali Samasyayein',
            content: [
              { type: 'list', items: [
                'Bahut se yatri bina ticket ke yatra karte hain.',
                'Railway sampatti ki chori aur kshati poori tarah se nahi ruki hai.',
                'Log anavashyak roop se train ki aapatkaleen chain kheench dete hain, jisse bhaari nuksan aur deri hoti hai.'
              ]}
            ]
          },
          {
            id: '4.3',
            title: 'Bharat mein Railway Gauges',
            content: [
                { type: 'paragraph', text: 'Bharatiya Rail network kai track chaudaiyon (gauges) par kaam karta hai.' },
                {
                    type: 'table',
                    headers: ['Gauge (meter mein)', 'Route (Km)'],
                    rows: [
                        ['Broad Gauge (1.676)', '63,950'],
                        ['Metre Gauge (1.000)', '2,402'],
                        ['Narrow Gauge (0.762 & 0.610)', '1,604'],
                        ['<strong>Kul</strong>', '<strong>67,956</strong>']
                    ]
                },
                { type: 'paragraph', text: '<em>(Srot: Railway Yearbook 2019-20, Rail Mantralaya)</em>' }
            ]
          }
        ]
      },
      {
        id: '5',
        title: "Pipelines",
        content: [
          { type: 'paragraph', text: "Pipeline network Bharat ke parivahan manchitra mein ek haaliya jodaav hai. Shuru mein paani ke parivahan ke liye upyog kiya jaata tha, ab pipeline kachche tel, petroleum utpadon aur prakritik gas ka parivahan karti hain. Thos padarthon ko slurry mein badalkar bhi parivahan kiya ja sakta hai." },
          { type: 'paragraph', text: "Iska mukhya laabh yeh hai ki jabki shuruaati bichhane ki lagat adhik hoti hai, chalane ki lagat newnatam hoti hai. Ye trans-shipment haaniyon aur deriyon ko bhi samapt karti hain." },
          { type: 'heading', text: 'Mahatvapurna Pipeline Networks' },
          { type: 'list', items: [
            'Upar Assam ke tel kshetron se Kanpur (Uttar Pradesh) tak, Guwahati, Barauni aur Prayagraj ke madhyam se.',
            'Gujarat ke Salaya se Punjab ke Jalandhar tak, Viramgam, Mathura, Delhi aur Sonipat ke madhyam se.',
            'Hazira-Vijaipur-Jagdishpur (HVJ) cross-country gas pipeline, jo Mumbai High aur Bassein gas kshetron ko pashchimi aur uttari Bharat ke audyogik parisaron se jodti hai.'
          ]}
        ]
      },
      {
        id: '6',
        title: "Jal Marg (Waterways)",
        content: [
          { type: 'paragraph', text: "Jal marg parivahan ka sabse sasta sadhan hai aur bhaari va vishal saman le jaane ke liye aadarsh hai. Ye indhan-kushal aur paryavaran-anukool bhi hain." }
        ],
        subSections: [
          {
            id: '6.1',
            title: 'Aantarik Jal Marg',
            content: [
              { type: 'paragraph', text: "Bharat mein 14,500 km aantarik nauka-gaman jal marg hain. Sarkar ne kai ko Rashtriya Jal Marg (NWs) ke roop mein namit kiya hai:" },
              { type: 'list', items: [
                '<strong>NW No. 1:</strong> Prayagraj aur Haldia ke beech Ganga nadi (1620 km).',
                '<strong>NW No. 2:</strong> Sadiya aur Dhubri ke beech Brahmaputra nadi (891 km).',
                '<strong>NW No. 3:</strong> Kerala mein West-Coast Canal (205 km).',
                '<strong>NW No. 4:</strong> Godavari aur Krishna nadiyon ke nirdisht hisse (1078 km).',
                '<strong>NW No. 5:</strong> Brahmani nadi ke nirdisht hisse, East Coast Canal ke saath (588 km).'
              ]}
            ]
          },
          {
            id: '6.2',
            title: 'Pramukh Samudri Bandargah',
            content: [
              { type: 'paragraph', text: "7,516.6 km lambi tat rekha ke saath, Bharat mein 12 pramukh aur 200 gair-pramukh bandargah hain. Ye pramukh bandargah Bharat ke videshi vyapar ka 95% sambhalte hain." },
              { type: 'infoBox', color: 'blue', content: "<strong>Paschimi Tat ke Bandargah:</strong><br/>• <strong>Deendayal Port (Kandla):</strong> Ek jwareeya bandargah, jise aazadi ke baad Mumbai bandargah par vyapar ka bojh kam karne ke liye viksit kiya gaya.<br/>• <strong>Mumbai:</strong> Ek vishal, prakritik aur surakshit bandargah ke saath sabse bada port.<br/>• <strong>Jawaharlal Nehru Port:</strong> Mumbai port ki bheed kam karne ke liye plan kiya gaya.<br/>• <strong>Mormugao Port (Goa):</strong> Desh ka pramukh loh ayask niryatak bandargah.<br/>• <strong>New Mangalore Port:</strong> Kudremukh khadanon se loh ayask ke niryat ko poora karta hai.<br/>• <strong>Cochin:</strong> Ek lagoon ke pravesh dwar par sthit atyant dakshin-paschimi bandargah." },
              { type: 'infoBox', color: 'green', content: "<strong>Purvi Tat ke Bandargah:</strong><br/>• <strong>V.O. Chidambaranar (Tuticorin):</strong> Tamil Nadu mein ek prakritik bandargah wala atyant dakshin-purvi port.<br/>• <strong>Chennai:</strong> Desh ke sabse purane kritrim bandargahon mein se ek.<br/>• <strong>Vishakhapatnam:</strong> Sabse gehra, bhumi se ghira aur surakshit bandargah.<br/>• <strong>Paradwip Port (Odisha):</strong> Loh ayask ke niryat mein visheshgyata rakhta hai.<br/>• <strong>Shyama Prasad Mookerjee (Kolkata):</strong> Ek aantarik nadeeya bandargah jise Hoogly nadi ki nirantar dredging ki avashyakta hoti hai.<br/>• <strong>Haldia Port:</strong> Kolkata bandargah par dabav kam karne ke liye ek sahayak port ke roop mein viksit kiya gaya." }
            ]
          }
        ]
      },
      {
        id: '7',
        title: "Vayu Marg (Airways)",
        content: [
          { type: 'paragraph', text: "Hawai yatra parivahan ka sabse tez, aaramdayak aur pratishthit sadhan hai. Yeh oonche pahadon, registanon aur ghane jangalon jaise kathin bhoo-bhagon ko badi aasani se paar kar sakta hai, jisse yeh uttar-purvi rajyon ke liye avashyak ho jaata hai." },
          { type: 'paragraph', text: "Pawanhans Helicopters Ltd. tel aur gas sanchalan aur Jammu-Kashmir aur Uttarakhand jaise durgam kshetron mein helicopter sevaen pradan karta hai." }
        ]
      },
      {
        id: '8',
        title: "Sanchar (Communication)",
        content: [
          { type: 'paragraph', text: "Sanchar ko vyaktigat sanchar aur jansanchar mein vibhajit kiya ja sakta hai." }
        ],
        subSections: [
          {
            id: '8.1',
            title: 'Dak Network',
            content: [
              { type: 'paragraph', text: "Bharatiya dak network duniya ka sabse bada hai. Yeh parcel aur vyaktigat likhit sanchar dono ko sambhalta hai." },
              { type: 'list', items: [
                '<strong>Pratham Shreni ki Dak:</strong> Card aur lifafe, jinhein stations ke beech hawai jahaj se le jaya jaata hai.',
                '<strong>Dwitiya Shreni ki Dak:</strong> Book packet, panjikrit samachar patra aur patrikayein, jinhein satah mail (sthal aur jal) dwara le jaya jaata hai.',
                'Bade shaharon mein tezi se delivery ke liye <strong>chhah mail channel</strong> shuru kiye gaye: Rajdhani, Metro, Green, Business, Bulk Mail, aur Periodical Channels.'
              ]}
            ]
          },
          {
            id: '8.2',
            title: 'Telecom aur Jansanchar Madhyam',
            content: [
              { type: 'list', items: [
                'Bharat Asia ke sabse bade telecom network mein se ek hai. Iske do-tihai se adhik gaonon mein STD telephone suvidha hai.',
                '<strong>Jansanchar</strong> mein radio, TV, samachar patra, patrikayein aur filmein shamil hain, jo manoranjan pradan karte hain aur jagrukta paida karte hain.',
                '<strong>All India Radio (Akashwani)</strong> rashtriya, kshetriya aur sthaniya bhashaon mein karyakram prasarit karta hai.',
                '<strong>Doordarshan</strong>, rashtriya television channel, duniya ke sabse bade sthaliya network mein se ek hai.',
                'Samachar patra lagbhag 100 bhashaon aur boliyon mein prakashit hote hain, jinmein sabse adhik Hindi mein hain.',
                'Bharat duniya mein feature filmon ka sabse bada utpadak hai.'
              ]}
            ]
          }
        ]
      },
      {
        id: '9',
        title: "Antarrashtriya Vyapar",
        content: [
          { type: 'paragraph', text: "Vyapar logon, rajyon ya deshon ke beech vastuon ka adan-pradan hai. Do ya do se adhik deshon ke beech vyapar ko antarrashtriya vyapar kaha jaata hai. Ise desh ke liye arthik barometer mana jaata hai." },
          { type: 'list', items: [
            '<strong>Niryat (Export) aur Aayat (Import)</strong> vyapar ke do ghatak hain.',
            '<strong>Vyapar Santulan (Balance of Trade)</strong> ek desh ke niryat aur aayat ke beech ka antar hai.',
            'Ek <strong>anukool santulan</strong> tab hota hai jab niryat ka moolya aayat ke moolya se adhik hota hai.',
            'Ek <strong>pratikool santulan</strong> tab hota hai jab aayat ka moolya niryat ke moolya se adhik ho jaata hai.',
            'Bharat ke pramukh <strong>niryat</strong> mein ratna aur aabhushan, rasayan aur krishi utpad shamil hain.',
            'Iske pramukh <strong>aayat</strong> mein petroleum, ratna aur aabhushan, rasayan aur electronic vastuon shamil hain.',
            'Bharat antarrashtriya star par ek software diggaj ke roop mein ubhra hai, jo IT niryat ke madhyam se badi matra mein videshi mudra arjit kar raha hai.'
          ]}
        ]
      },
      {
        id: '10',
        title: "Vyapar ke Roop mein Paryatan",
        content: [
          { type: 'paragraph', text: "Bharat mein paryatan pichhle do dashakon mein kafi badha hai. Yeh rashtriya ekta ko badhava deta hai, sthaniya hastshilp ka samarthan karta hai, aur Bharat ki sanskriti aur virasat ki antarrashtriya samajh viksit karne mein madad karta hai." },
          { type: 'paragraph', text: "Videshi paryatak Bharat mein virasat, eco, sahasik, sanskritik, chikitsa aur vyavsayik paryatan sahit vibhinn kaaranon se aate hain. Desh bhar mein is aagami udyog ko viksit karne ki apar sambhavna hai." }
        ]
      }
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
      case 'chemicalEquation':
       return (
            <div key={index} className="my-4 p-3 rounded-md text-center font-mono text-sm" style={{backgroundColor: 'var(--theme-equation-bg)', color: 'var(--theme-equation-text)'}}>
                <code dangerouslySetInnerHTML={{ __html: item.text }}></code>
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
function Class10GeographyLifelines() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '3': true, '4': true, '6': true, '8': true });
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

export default Class10GeographyLifelines;
