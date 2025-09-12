import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Agriculture",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to Agriculture",
        content: [
          { type: 'heading', text: 'Importance in India:' },
          { type: 'list', items: [
              'India is an agriculturally important country.',
              'A massive two-thirds of its population is involved in agricultural activities.'
          ]},
          { type: 'heading', text: 'What is Agriculture?' },
          { type: 'list', items: [
              'Agriculture is a primary activity, which means it involves producing goods directly from nature.',
              'It is the process that produces most of the food that we eat.',
              'Beyond food grains, it also provides raw materials for various industries, like cotton for clothes and sugarcane for sugar.',
              'Additionally, some agricultural products like tea, coffee, and spices are exported, meaning they are sold to other countries.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Types of Farming",
        content: [
            { type: 'paragraph', text: 'Agriculture is an age-old economic activity in India. Over many years, the methods of farming have changed significantly based on the physical environment (like climate and soil), the level of technology available, and the socio-cultural practices of the people.'},
            { type: 'paragraph', text: 'Farming in India ranges from subsistence (growing just enough for the family) to the commercial type (growing to sell for a profit).'}
        ],
        subSections: [
            {
                id: '2.1',
                title: 'Primitive Subsistence Farming',
                content: [
                    { type: 'paragraph', text: 'This is a very old type of farming that is still practiced in a few areas ("pockets") of India.'},
                    { type: 'heading', text: 'Key Characteristics:'},
                    { type: 'list', items: [
                        '<strong>Land:</strong> It is done on small patches of land.',
                        '<strong>Tools:</strong> Farmers use very basic, primitive tools like a hoe, dao (a type of cutting tool), and digging sticks.',
                        '<strong>Labor:</strong> The work is done by the family or the community working together.',
                        '<strong>Dependency:</strong> This type of farming depends entirely on the monsoon for rain, the natural fertility of the soil, and other suitable environmental conditions.'
                    ]},
                    { type: 'heading', text: 'The "Slash and Burn" Method:'},
                    { type: 'list', items: [
                        "This type of farming is famously known as 'slash and burn' agriculture.",
                        "<strong>Process:</strong><br/>1. Farmers clear a patch of land by cutting down trees and bushes (slash).<br/>2. They then burn the cleared vegetation (burn). The ash provides nutrients to the soil.<br/>3. They grow cereals and other food crops to support their family.<br/>4. When the soil fertility decreases after a few years, the farmers shift and clear a fresh patch of land for cultivation.",
                        "<strong>Benefit:</strong> This shifting allows nature to replenish the fertility of the soil through natural processes."
                    ]},
                    { type: 'heading', text: 'Productivity:'},
                    { type: 'list', items: ['The land productivity is low because farmers do not use fertilizers or other modern inputs to enrich the soil.']},
                    { type: 'infoBox', color: 'blue', content: "<strong>Different Names for 'Slash and Burn' Agriculture:</strong><br/>It is known by many different names in different parts of the world and even within India.<br/><strong>In India:</strong><br/>• Jhumming in north-eastern states (Assam, Meghalaya, Mizoram, Nagaland).<br/>• Pamlou in Manipur.<br/>• Dipa in Bastar (Chhattisgarh) & Andaman and Nicobar Islands.<br/>• Bewar or Dahiya in Madhya Pradesh.<br/>• Podu or Penda in Andhra Pradesh.<br/>• Pama Dabi or Koman or Bringa in Odisha.<br/>• Kumari in the Western Ghats.<br/>• Valre or Waltre in South-eastern Rajasthan.<br/>• Khil in the Himalayan belt.<br/>• Kuruwa in Jharkhand.<br/><strong>In Other Countries:</strong><br/>• Milpa in Mexico and Central America.<br/>• Conuco in Venezuela.<br/>• Roca in Brazil.<br/>• Masole in Central Africa.<br/>• Ladang in Indonesia.<br/>• Ray in Vietnam." },
                    { type: 'infoBox', color: 'orange', content: "<strong>A Story from Assam:</strong><br/>The book tells a story about a girl named Rinjha who lives in a village near Diphu in Assam. She enjoys watching her family clear, slash, and burn patches of land for farming. She helps them by watering the fields using a bamboo canal from a spring. Rinjha doesn't know that her family is looking for a new patch of land for the next season because the soil on their current farm is losing its fertility. This is a perfect example of primitive subsistence farming."}
                ]
            },
            {
                id: '2.2',
                title: 'Intensive Subsistence Farming',
                content: [
                    { type: 'paragraph', text: 'This type of farming is practiced in areas that have high population pressure on the land—meaning many people depend on a small area of farmland.'},
                    { type: 'heading', text: 'Key Characteristics:'},
                    { type: 'list', items: [
                        'It is labour-intensive farming, requiring a lot of manual work.',
                        "To get the most food possible, farmers use high doses of biochemical inputs (like chemical fertilizers) and irrigation."
                    ]},
                    { type: 'heading', text: 'The Problem of Land Size:'},
                    { type: 'list', items: [
                        "The 'right of inheritance' (where land is passed down and divided among children) has led to land holdings becoming smaller and smaller with each generation, making them uneconomical.",
                        "Because there are often no other ways to earn a living, farmers continue to try and get the maximum output from their limited land. This puts enormous pressure on the agricultural land."
                    ]}
                ]
            },
            {
                id: '2.3',
                title: 'Commercial Farming',
                content: [
                    { type: 'paragraph', text: 'The main goal of this type of farming is to grow crops to sell in the market.'},
                    { type: 'heading', text: 'Key Characteristics:'},
                    { type: 'list', items: [
                        'The main feature is the use of higher doses of modern inputs to get higher productivity.',
                        'These inputs include High Yielding Variety (HYV) seeds, chemical fertilizers, insecticides, and pesticides.',
                        'The level of commercialization is different in different places. For example, rice is a commercial crop in Haryana and Punjab, but in Odisha, it is a subsistence crop grown for personal use.'
                    ]},
                    { type: 'heading', text: 'Plantation Farming:'},
                    { type: 'list', items: [
                        'A plantation is a type of commercial farming where a single crop is grown on a large area.',
                        'It acts as a link between agriculture and industry, as the crops grown are used as raw materials in factories.',
                        '<strong>Features of Plantations:</strong><br/>▪ They cover large tracts of land.<br/>▪ They are capital-intensive, meaning they require a lot of money and machinery.<br/>▪ They often use migrant labourers to do the work.<br/>▪ A well-developed network of transport and communication is crucial for connecting the plantation areas, processing industries, and markets.',
                        '<strong>Important Plantation Crops in India:</strong> Tea, coffee, rubber, sugarcane, banana, etc. For instance, tea in Assam and North Bengal, and coffee in Karnataka are major plantation crops.'
                    ]}
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Cropping Pattern",
        content: [
            { type: 'paragraph', text: "India's diverse physical geography and cultures are reflected in its different agricultural practices and cropping patterns. The country grows various food crops, fibre crops, vegetables, fruits, spices, etc.."},
            { type: 'paragraph', text: "India has three main cropping seasons: Rabi, Kharif, and Zaid."}
        ],
        subSections: [
            { id: '3.1', title: 'Rabi Crops', content: [{ type: 'list', items: ['<strong>Sowing Season:</strong> Sown in winter from October to December.', '<strong>Harvesting Season:</strong> Harvested in summer from April to June.', '<strong>Important Crops:</strong> Wheat, barley, peas, gram, and mustard.', '<strong>Key Regions:</strong> States in the north and north-west like Punjab, Haryana, Himachal Pradesh, Jammu and Kashmir, Uttarakhand, and Uttar Pradesh are important for wheat and other rabi crops.', '<strong>Favorable Factors:</strong> Winter rain from the western temperate cyclones helps these crops succeed. The Green Revolution in Punjab, Haryana, and western Uttar Pradesh also played a huge role in the growth of these crops.'] } ]},
            { id: '3.2', title: 'Kharif Crops', content: [{ type: 'list', items: ['<strong>Sowing Season:</strong> Grown with the start of the monsoon in different parts of the country.', '<strong>Harvesting Season:</strong> Harvested in September-October.', '<strong>Important Crops:</strong> Paddy (rice), maize, jowar, bajra, tur (arhar), moong, urad, cotton, jute, groundnut, and soyabean.', '<strong>Key Rice-Growing Regions:</strong> Assam, West Bengal, coastal regions of Odisha, Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Maharashtra (especially the Konkan coast), Uttar Pradesh, and Bihar. Paddy has also recently become an important crop in Punjab and Haryana.', '<strong>Special Case:</strong> In states like Assam, West Bengal, and Odisha, farmers grow three crops of paddy in a single year. These are called Aus, Aman, and Boro.'] } ]},
            { id: '3.3', title: 'Zaid Season', content: [{ type: 'list', items: ["<strong>Timing:</strong> This is a short season during the summer months, in between the Rabi and Kharif seasons.", "<strong>Important Crops:</strong> Watermelon, muskmelon, cucumber, vegetables, and fodder crops.", "<strong>Note on Sugarcane:</strong> Sugarcane is a unique crop as it takes almost a year to grow."] } ]}
        ]
      },
      {
          id: '4',
          title: 'Major Crops Grown in India',
          content: [
              { type: 'paragraph', text: 'India grows a variety of food and non-food crops depending on the variations in soil, climate, and farming practices.'}
          ],
          subSections: [
              { id: '4.1', title: 'Grains', content: [
                  { type: 'infoBox', color: 'green', content: '<strong>Rice:</strong><br/>• <strong>Importance:</strong> Staple food crop for most people in India. India is the second-largest producer in the world, after China.<br/>• <strong>Type:</strong> Kharif crop.<br/>• <strong>Conditions:</strong> High temperature (>25°C), high humidity, and annual rainfall >100 cm. In areas with less rain, it grows with irrigation.<br/>• <strong>Growing Areas:</strong> Plains of north and north-eastern India, coastal areas, and deltaic regions.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Wheat:</strong><br/>• <strong>Importance:</strong> Second most important cereal crop; main food crop in north and north-western India.<br/>• <strong>Type:</strong> Rabi crop.<br/>• <strong>Conditions:</strong> Cool growing season, bright sunshine at ripening, 50-75 cm annual rainfall.<br/>• <strong>Growing Zones:</strong> Two main zones are the Ganga-Satluj plains and the black soil region of the Deccan. Major states include Punjab, Haryana, UP, MP, Bihar, and Rajasthan.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Millets (Coarse Grains):</strong><br/>• Jowar, bajra, and ragi are important millets with high nutritional value.<br/>• <strong>Jowar:</strong> 3rd most important food crop, rain-fed. Major producers: Maharashtra, Karnataka, Andhra Pradesh, MP.<br/>• <strong>Bajra:</strong> Grows on sandy and shallow black soil. Major producers: Rajasthan, UP, Maharashtra, Gujarat, Haryana.<br/>• <strong>Ragi:</strong> Crop of dry regions, rich in iron and calcium. Grows on red, black, sandy soils. Major producers: Karnataka, Tamil Nadu, Himachal Pradesh, Uttarakhand, Sikkim.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Maize:</strong><br/>• <strong>Use:</strong> Used as both food and fodder.<br/>• <strong>Type:</strong> Kharif crop (can be Rabi in Bihar).<br/>• <strong>Conditions:</strong> Temperature 21°C-27°C, old alluvial soil. Use of modern inputs has increased production.<br/>• <strong>Major Producers:</strong> Karnataka, MP, UP, Bihar, Andhra Pradesh, Telangana.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Pulses:</strong><br/>• <strong>Importance:</strong> India is the largest producer and consumer. Major source of protein.<br/>• <strong>Major Pulses:</strong> Tur (arhar), urad, moong, masur, peas, and gram.<br/>• <strong>Special Quality:</strong> Leguminous crops (all except arhar) that restore soil fertility by fixing nitrogen. Grown in rotation with other crops.<br/>• <strong>Major Producers:</strong> MP, Rajasthan, Maharashtra, UP, Karnataka.'},
              ]},
              { id: '4.2', title: 'Food Crops other than Grains', content: [
                  { type: 'infoBox', color: 'orange', content: '<strong>Sugarcane:</strong><br/>• <strong>Type:</strong> Tropical and subtropical crop.<br/>• <strong>Conditions:</strong> Hot and humid climate (21°C-27°C), 75-100 cm rainfall. Requires manual labour.<br/>• <strong>Importance:</strong> India is 2nd largest producer after Brazil. Main source of sugar, gur (jaggery), khandsari, and molasses.<br/>• <strong>Major Producers:</strong> UP, Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Bihar, Punjab, Haryana.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Oil Seeds:</strong><br/>• <strong>Importance:</strong> In 2020, India was the 2nd largest producer of groundnut. Cover about 12% of total cropped area.<br/>• <strong>Main Oilseeds:</strong> Groundnut, mustard, coconut, sesamum (til), soyabean, castor seeds, cotton seeds, linseed, sunflower.<br/>• <strong>Uses:</strong> Most are edible (cooking oil), some used for soap, cosmetics.<br/>• <strong>Specifics:</strong> Groundnut is a kharif crop (Gujarat is largest producer). Linseed and mustard are rabi crops. Sesamum is kharif in the north, rabi in the south. Castor is both rabi and kharif.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Tea:</strong><br/>• <strong>Type:</strong> Plantation and beverage crop.<br/>• <strong>Conditions:</strong> Tropical/sub-tropical climate, deep fertile soil, warm, moist, frost-free climate. Labour-intensive.<br/>• <strong>Importance:</strong> In 2020, India was the 2nd largest producer after China.<br/>• <strong>Major Producers:</strong> Assam, hills of Darjeeling and Jalpaiguri, West Bengal, Tamil Nadu, Kerala. Also Himachal Pradesh, Uttarakhand, Meghalaya.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Coffee:</strong><br/>• <strong>Quality:</strong> Indian Arabica variety, initially from Yemen, is in great demand globally.<br/>• <strong>Growing Areas:</strong> First introduced on the Baba Budan Hills. Now grown in the Nilgiri hills in Karnataka, Kerala, and Tamil Nadu.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Horticulture Crops (Fruits & Vegetables):</strong><br/>• <strong>Importance:</strong> In 2020, India was 2nd largest producer after China. Grows both tropical and temperate fruits.<br/>• <strong>Famous Fruits:</strong> Mangoes (Maharashtra, UP), Oranges (Nagpur), Bananas (Kerala, Tamil Nadu), Lichi & Guava (UP, Bihar), Pineapples (Meghalaya), Grapes (Andhra Pradesh, Maharashtra), Apples & Pears (J&K, Himachal).<br/>• <strong>Vegetables:</strong> Important producer of pea, cauliflower, onion, cabbage, tomato, brinjal, potato.'},
              ]}
          ]
      },
      {
        id: '5',
        title: "Non-Food Crops",
        content: [
            { type: 'infoBox', color: 'red', content: '<strong>Rubber:</strong><br/>• <strong>Type:</strong> Equatorial crop, but can be grown in tropical/sub-tropical areas.<br/>• <strong>Conditions:</strong> Moist and humid climate, rainfall >200 cm, temperature >25°C.<br/>• <strong>Use:</strong> Important industrial raw material.<br/>• <strong>Growing Regions:</strong> Kerala, Tamil Nadu, Karnataka, Andaman & Nicobar islands, and Garo hills of Meghalaya.'},
            { type: 'infoBox', color: 'red', content: '<strong>Fiber Crops:</strong><br/>• <strong>Major Crops:</strong> Cotton, jute, hemp, and natural silk.<br/>• <strong>Source:</strong> Cotton, jute, hemp are grown in soil. Silk comes from cocoons of silkworms.<br/>• <strong>Sericulture:</strong> The rearing of silkworms for silk production.'},
            { type: 'infoBox', color: 'red', content: '<strong>Cotton:</strong><br/>• <strong>Importance:</strong> India is original home of cotton. Main raw material for cotton textile industry. 2nd largest producer after China.<br/>• <strong>Conditions:</strong> Grows well in black cotton soil of Deccan plateau. Needs high temp, light rainfall, 210 frost-free days, bright sunshine.<br/>• <strong>Type:</strong> Kharif crop, takes 6-8 months to mature.<br/>• <strong>Major Producers:</strong> Maharashtra, Gujarat, MP, Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Punjab, Haryana, UP.'},
            { type: 'infoBox', color: 'red', content: '<strong>Jute:</strong><br/>• <strong>Nickname:</strong> Known as the Golden Fiber.<br/>• <strong>Conditions:</strong> Grows on well-drained fertile soils in flood plains, requires high temperature.<br/>• <strong>Uses:</strong> Used for gunny bags, mats, ropes, yarn, carpets, etc.<br/>• <strong>Major Producers:</strong> West Bengal, Bihar, Assam, Odisha, Meghalaya.'},
        ]
      },
      {
          id: '6',
          title: 'Technological and Institutional Reforms',
          content: [
              { type: 'heading', text: 'The Need for Reforms:'},
              { type: 'list', items: [
                  'Agriculture has been practiced for thousands of years, but using land for so long without updating technology has slowed down development.',
                  'Many farmers still depend on the monsoon and natural soil fertility.',
                  'This is a serious challenge as agriculture provides a livelihood for more than 60% of India\'s growing population.'
              ]},
              { type: 'heading', text: 'Reforms After Independence:'},
              { type: 'list', items: [
                  'To improve the situation, the government prioritized institutional reforms.',
                  'Key steps included collectivisation, consolidation of holdings, cooperation, and the abolition of zamindari.',
                  "'Land reform' was the main focus of the First Five Year Plan, but its implementation was often lacking."
              ]},
              { type: 'heading', text: 'The 1960s and 1970s:'},
              { type: 'list', items: [
                  'The <strong>Green Revolution</strong> (based on modern technology) and the <strong>White Revolution / Operation Flood</strong> (to increase milk production) were key strategies.',
                  'A drawback was that these developments were concentrated in only a few selected areas.'
              ]},
              { type: 'heading', text: 'The 1980s and 1990s:'},
              { type: 'list', items: [
                  'A more comprehensive land development program was started, including both institutional and technical reforms.',
                  '<strong>Important Steps Taken:</strong><br/>▪ Providing crop insurance against drought, flood, fire, etc.<br/>▪ Establishing Grameen banks and cooperative societies for loans at lower interest rates.<br/>▪ Introducing schemes like the Kisan Credit Card (KCC) and Personal Accident Insurance Scheme (PAIS).<br/>▪ Broadcasting weather bulletins and agricultural programs.<br/>▪ Announcing a Minimum Support Price (MSP) to protect farmers from exploitation.'
              ]}
          ],
          subSections: [
              {
                  id: '6.1',
                  title: 'Bhoodan - Gramdan Movement',
                  content: [
                      { type: 'paragraph', text: "This was a non-violent land reform movement started by <strong>Vinoba Bhave</strong>, whom Mahatma Gandhi had declared his spiritual heir. It is also known as the <strong>Blood-less Revolution</strong>."},
                      { type: 'heading', text: 'The Story:'},
                      { type: 'list', items: [
                          "After Gandhiji's death, Vinoba Bhave undertook a <em>padyatra</em> (journey on foot) to spread his message.",
                          "At Pochampalli, Andhra Pradesh, some landless villagers demanded land. A landlord named Shri Ram Chandra Reddy suddenly offered 80 acres of his land to 80 landless villagers. This act was known as 'Bhoodan' (gift of land).",
                          "Later, as he traveled, some zamindars offered to distribute entire villages among the landless. This was known as 'Gramdan' (gift of a village).",
                          "Many landowners also donated land because they feared the upcoming land ceiling act (a law limiting land ownership)."
                      ]}
                  ]
              }
          ]
      }
    ]
  },
  hi: {
    chapterTitle: "Agriculture",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to Agriculture",
        content: [
          { type: 'heading', text: 'Importance in India:' },
          { type: 'list', items: [
              'India ek agriculturally important desh hai.',
              'Is desh ki do-tihai (2/3) jansankhya krishi karyon mein lagi hui hai.'
          ]},
          { type: 'heading', text: 'What is Agriculture?' },
          { type: 'list', items: [
              'Agriculture ek primary activity hai, jiska matlab hai prakriti se seedhe vastuon ka utpadan karna.',
              'Yeh woh prakriya hai jisse hamare bhojan ka adhikansh hissa utpann hota hai.',
              'Khadyanno ke alawa, yeh vibhinn udyogon ke liye kachcha maal bhi pradan karti hai, jaise kapdon ke liye kapas aur chini ke liye ganna.',
              'Iske atirikt, kuch krishi utpad jaise chai, coffee, aur masale niryat kiye jaate hain.'
          ]}
        ]
      },
      {
        id: '2',
        title: "Types of Farming",
        content: [
            { type: 'paragraph', text: 'Bharat mein krishi ek prachin arthik gatividhi hai. Kai varshon se, kheti ke tarike bhautik paryavaran, takniki star aur samajik-sanskritik prathaon ke aadhar par kafi badal gaye hain.'},
            { type:- 'paragraph', text: 'Bharat mein kheti nirvah (sirf parivar ke liye ugana) se lekar vanijyik (labh ke liye bechne hetu ugana) prakar tak hoti hai.'}
        ],
        subSections: [
            {
                id: '2.1',
                title: 'Primitive Subsistence Farming',
                content: [
                    { type: 'paragraph', text: 'Yeh ek bahut purani kheti hai jo abhi bhi Bharat ke kuch hisson mein prachalit hai.'},
                    { type: 'heading', text: 'Key Characteristics:'},
                    { type: 'list', items: [
                        '<strong>Land:</strong> Yeh zameen ke chhote tukdon par ki jaati hai.',
                        '<strong>Tools:</strong> Kisan bahut hi sadharan aujar jaise kudali, dao, aur khodne wali lakdiyon ka istemal karte hain.',
                        '<strong>Labor:</strong> Kaam parivar ya samuday dwara milkar kiya jaata hai.',
                        '<strong>Dependency:</strong> Yeh kheti puri tarah se monsoon, mitti ki prakritik urvarata aur anya upyukt paryavaraniya sthitiyon par nirbhar karti hai.'
                    ]},
                    { type: 'heading', text: '"Slash and Burn" Method:'},
                    { type: 'list', items: [
                        "Is prakar ki kheti ko 'slash and burn' agriculture ke naam se jaana jaata hai.",
                        "<strong>Process:</strong><br/>1. Kisan pedon aur jhadion ko kaatkar zameen ka ek tukda saaf karte hain.<br/>2. Phir ve saaf ki gayi vanaspati ko jala dete hain. Raakh mitti ko poshak tatva pradan karti hai.<br/>3. Ve apne parivar ke palan-poshan ke liye anaj aur anya khadya faslein ugate hain.<br/>4. Jab kuch saalon ke baad mitti ki urvarata kam ho jaati hai, to kisan nayi zameen saaf karke kheti karte hain.",
                        "<strong>Benefit:</strong> Is sthanantaran se prakriti ko mitti ki urvarata ko prakritik roop se bharne ka avsar milta hai."
                    ]},
                    { type: 'heading', text: 'Productivity:'},
                    { type: 'list', items: ['Zameen ki utpadakta kam hoti hai kyunki kisan mitti ko upjau banane ke liye urvarak ya anya aadhunik cheezon ka upyog nahi karte hain.']},
                    { type: 'infoBox', color: 'blue', content: "<strong>'Slash and Burn' Agriculture ke Vibhinn Naam:</strong><br/>Ise duniya ke alag-alag hisson aur Bharat ke andar bhi kai naamo se jaana jaata hai.<br/><strong>Bharat mein:</strong><br/>• North-eastern rajyon (Assam, Meghalaya, Mizoram, Nagaland) mein 'Jhumming'.<br/>• Manipur mein 'Pamlou'.<br/>• Chhattisgarh ke Bastar aur Andaman Nicobar dweep samuh mein 'Dipa'.<br/>• Madhya Pradesh mein 'Bewar' ya 'Dahiya'.<br/>• Andhra Pradesh mein 'Podu' ya 'Penda'.<br/>• Odisha mein 'Pama Dabi' ya 'Koman' ya 'Bringa'.<br/>• Western Ghats mein 'Kumari'.<br/>• South-eastern Rajasthan mein 'Valre' ya 'Waltre'.<br/>• Himalayan belt mein 'Khil'.<br/>• Jharkhand mein 'Kuruwa'.<br/><strong>Dusre Deshon mein:</strong><br/>• Mexico aur Central America mein 'Milpa'.<br/>• Venezuela mein 'Conuco'.<br/>• Brazil mein 'Roca'.<br/>• Central Africa mein 'Masole'.<br/>• Indonesia mein 'Ladang'.<br/>• Vietnam mein 'Ray'." },
                    { type: 'infoBox', color: 'orange', content: "<strong>Assam ki ek Kahani:</strong><br/>Kitaab mein Rinjha naam ki ek ladki ki kahani hai jo Assam mein Diphu ke paas ek gaon mein rehti hai. Use apne parivar ko kheti ke liye zameen ke tukdon ko saaf karte, kaatate aur jalate hue dekhna achcha lagta hai. Woh ek jharne se baans ke naale ka upyog karke kheton mein paani dene mein unki madad karti hai. Rinjha ko nahi pata ki uska parivar agle mausam ke liye zameen ka ek naya tukda dhoondh raha hai kyunki unke vartaman khet ki mitti ki urvarata kam ho rahi hai. Yeh primitive subsistence farming ka ek perfect udaharan hai."}
                ]
            },
            {
                id: '2.2',
                title: 'Intensive Subsistence Farming',
                content: [
                    { type: 'paragraph', text: 'Yeh un kshetro mein ki jaati hai jahan bhumi par jansankhya ka dabav adhik hota hai—yani ek chhote se khet par bahut se log nirbhar hote hain.'},
                    { type: 'heading', text: 'Key Characteristics:'},
                    { type: 'list', items: [
                        'Yeh shram-pradhan kheti hai, jismein bahut adhik mehnat ki avashyakta hoti hai.',
                        "Adhik se adhik bhojan prapt karne ke liye, kisan jaiv-rasayanik niveshon (jaise rasayanik urvarak) aur sinchai ka bharpur upyog karte hain."
                    ]},
                    { type: 'heading', text: 'Bhumi ke Aakar ki Samasya:'},
                    { type: 'list', items: [
                        "'Virasat ke adhikar' ke karan peedhi dar peedhi zameen ka bantwara hone se khet chhote aur anarthik hote ja rahe hain.",
                        "Ajeevika ke anya sadhan na hone ke karan, kisan apni seemit bhumi se adhiktam utpadan lene ki koshish karte hain. Isse krishi bhumi par atyadhik dabav padta hai."
                    ]}
                ]
            },
            {
                id: '2.3',
                title: 'Commercial Farming',
                content: [
                    { type: 'paragraph', text: 'Is prakar ki kheti ka mukhya uddeshya faslon ko bazar mein bechna hai.'},
                    { type: 'heading', text: 'Key Characteristics:'},
                    { type: 'list', items: [
                        'Mukhya visheshta uchch utpadakta prapt karne ke liye aadhunik niveshon ka adhik upyog hai.',
                        'In niveshon mein High Yielding Variety (HYV) beej, rasayanik urvarak, keetnashak shamil hain.',
                        'Vanijyikaran ka star alag-alag jagahon par alag-alag hota hai. Jaise, Haryana aur Punjab mein chawal ek vanijyik fasal hai, lekin Odisha mein yeh ek jeevika fasal hai.'
                    ]},
                    { type: 'heading', text: 'Plantation Farming:'},
                    { type: 'list', items: [
                        'Ropan ek prakar ki vanijyik kheti hai jahan ek bade kshetra mein ek hi fasal ugayi jaati hai.',
                        'Yeh krishi aur udyog ke beech ek kadi ka kaam karti hai, kyunki ugayi gayi faslein factory mein kachche maal ke roop mein istemal hoti hain.',
                        '<strong>Visheshtayein:</strong><br/>▪ Bade bhumi kshetra ko cover karte hain.<br/>▪ Yeh poonji-pradhan hote hain, yani inmein bahut paisa aur machine ki avashyakta hoti hai.<br/>▪ Inmein aksar pravasi mazdooron ka upyog kiya jaata hai.<br/>▪ Ropan kshetro, processing industries, aur bazaron ko jodne ke liye parivahan aur sanchar ka ek majboot network mahatvapurna hai.',
                        '<strong>Bharat mein mahatvapurna ropan faslein:</strong> Chai, coffee, rubber, ganna, kela, aadi. Jaise ki, Assam aur North Bengal mein chai, aur Karnataka mein coffee pramukh ropan faslein hain.'
                    ]}
                ]
            }
        ]
      },
      {
        id: '3',
        title: "Cropping Pattern",
        content: [
            { type: 'paragraph', text: "Bharat ki vividh bhautik bhugol aur sanskritiyan iske vibhinn krishi prathaon aur fasal praroopon mein dikhti hain. Desh mein vibhinn khadya faslein, reshedar faslein, sabjiyan, phal, masale aadi ugaye jaate hain."},
            { type: 'paragraph', text: "Bharat mein teen mukhya fasal mausam hain: Rabi, Kharif, aur Zaid."}
        ],
        subSections: [
            { id: '3.1', title: 'Rabi Crops', content: [{ type: 'list', items: ['<strong>Buai ka Samay:</strong> Sardiyon mein October se December tak.', '<strong>Katai ka Samay:</strong> Garmiyon mein April se June tak.', '<strong>Mahatvapurna Faslein:</strong> Gehu, jau, matar, chana, aur sarson.', '<strong>Mukhya Kshetra:</strong> Uttar aur uttar-pashchimi rajya jaise Punjab, Haryana, Himachal Pradesh, Jammu aur Kashmir, Uttarakhand, aur Uttar Pradesh gehu aur anya rabi faslon ke liye mahatvapurna hain.', '<strong>Anukool Karak:</strong> Pashchimi chakravaton se hone wali sardiyon ki barish in faslon ko safal hone mein madad karti hai. Punjab, Haryana, aur pashchimi Uttar Pradesh mein Harit Kranti ne bhi in faslon ke vikas mein ek badi bhumika nibhai.'] } ]},
            { id: '3.2', title: 'Kharif Crops', content: [{ type: 'list', items: ['<strong>Buai ka Samay:</strong> Desh ke vibhinn hisson mein monsoon ki shuruaat ke saath.', '<strong>Katai ka Samay:</strong> September-October mein.', '<strong>Mahatvapurna Faslein:</strong> Dhan (chawal), makka, jowar, bajra, tur (arhar), moong, urad, kapas, jute, moongphali, aur soyabean.', '<strong>Mukhya Chawal Utpadak Kshetra:</strong> Assam, West Bengal, Odisha ke tateeya kshetra, Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Maharashtra (visheshkar Konkan tat), Uttar Pradesh, aur Bihar. Haal hi mein Punjab aur Haryana mein bhi dhan ek mahatvapurna fasal ban gaya hai.', '<strong>Vishesh Mamla:</strong> Assam, West Bengal, aur Odisha jaise rajyon mein, kisan ek hi saal mein dhan ki teen faslein ugate hain: Jinke naam hain Aus, Aman, aur Boro.'] } ]},
            { id: '3.3', title: 'Zaid Season', content: [{ type: 'list', items: ["<strong>Samay:</strong> Yeh garmiyon ke mahino ke dauran ek chhota mausam hai, Rabi aur Kharif mausam ke beech.", "<strong>Mahatvapurna Faslein:</strong> Tarbooj, kharbooja, kheera, sabjiyan, aur chara faslein.", "<strong>Ganne par Note:</strong> Ganna ek anokhi fasal hai jise ugane mein lagbhag ek saal lag jaata hai."] } ]}
        ]
      },
      {
          id: '4',
          title: 'Major Crops Grown in India',
          content: [
              { type: 'paragraph', text: 'Bharat mitti, jalvayu aur kheti ke tarikon mein vibhinnataon ke aadhar par vibhinn prakar ki khadya aur gair-khadya faslein ugata hai.'}
          ],
          subSections: [
              { id: '4.1', title: 'Grains', content: [
                  { type: 'infoBox', color: 'green', content: '<strong>Chawal (Rice):</strong><br/>• <strong>Mahatva:</strong> Bharat ke adhikansh logon ka mukhya bhojan. Cheen ke baad duniya ka doosra sabse bada utpadak.<br/>• <strong>Prakar:</strong> Kharif fasal.<br/>• <strong>Sthitiyan:</strong> Uchch tapman (>25°C), uchch nami, aur 100 cm se adhik varshik varsha. Kam barish wale ilakon mein sinchai se ugaya jaata hai.<br/>• <strong>Ugne Wale Kshetra:</strong> Uttar aur uttar-purvi Bharat ke maidan, tateeya kshetra, aur delta kshetra.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Gehu (Wheat):</strong><br/>• <strong>Mahatva:</strong> Doosri sabse mahatvapurna anaj fasal; Uttar aur uttar-pashchimi Bharat ka mukhya bhojan.<br/>• <strong>Prakar:</strong> Rabi fasal.<br/>• <strong>Sthitiyan:</strong> Thanda mausam, pakte samay tej dhoop, 50-75 cm varshik varsha.<br/>• <strong>Ugne Wale Kshetra:</strong> Do mukhya zone hain Ganga-Satluj maidan aur Deccan ka kali mitti ka kshetra. Pramukh rajya: Punjab, Haryana, UP, MP, Bihar, Rajasthan.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Mote Anaj (Millets):</strong><br/>• Jowar, bajra, aur ragi mahatvapurna mote anaj hain jinki poshan-mulya bahut adhik hoti hai.<br/>• <strong>Jowar:</strong> Teesra sabse mahatvapurna khadya fasal, barani fasal. Pramukh utpadak: Maharashtra, Karnataka, Andhra Pradesh, MP.<br/>• <strong>Bajra:</strong> Retili aur uthli kali mitti par ugta hai. Pramukh utpadak: Rajasthan, UP, Maharashtra, Gujarat, Haryana.<br/>• <strong>Ragi:</strong> Shushk kshetro ki fasal, loha aur calcium se bharpur. Lal, kali, retili mitti par ugti hai. Pramukh utpadak: Karnataka, Tamil Nadu, Himachal Pradesh, Uttarakhand, Sikkim.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Makka (Maize):</strong><br/>• <strong>Upyog:</strong> Bhojan aur chara dono ke roop mein.<br/>• <strong>Prakar:</strong> Kharif fasal (Bihar mein Rabi bhi ho sakti hai).<br/>• <strong>Sthitiyan:</strong> Tapman 21°C-27°C, purani jalodh mitti. Aadhunik inputs se utpadan badha hai.<br/>• <strong>Pramukh Utpadak:</strong> Karnataka, MP, UP, Bihar, Andhra Pradesh, Telangana.'},
                  { type: 'infoBox', color: 'green', content: '<strong>Dalein (Pulses):</strong><br/>• <strong>Mahatva:</strong> Bharat sabse bada utpadak aur upbhokta hai. Protein ka mukhya srot.<br/>• <strong>Pramukh Dalein:</strong> Tur (arhar), urad, moong, masur, matar, aur chana.<br/>• <strong>Vishesh Gun:</strong> Faledar faslein (arhar ko chhodkar) jo nitrogen sthirikaran karke mitti ki urvarata ko banaye rakhti hain. Isliye anya faslon ke saath rotation mein ugayi jaati hain.<br/>• <strong>Pramukh Utpadak:</strong> MP, Rajasthan, Maharashtra, UP, Karnataka.'},
              ]},
              { id: '4.2', title: 'Food Crops other than Grains', content: [
                  { type: 'infoBox', color: 'orange', content: '<strong>Ganna (Sugarcane):</strong><br/>• <strong>Prakar:</strong> Ushnkatibandhiya aur uposhnkatibandhiya fasal.<br/>• <strong>Sthitiyan:</strong> Garam aur nam jalvayu (21°C-27°C), 75-100 cm varsha. Manual labour ki zaroorat hoti hai.<br/>• <strong>Mahatva:</strong> Brazil ke baad doosra sabse bada utpadak. Chini, gud, khandsari, aur sheera ka mukhya srot.<br/>• <strong>Pramukh Utpadak:</strong> UP, Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Bihar, Punjab, Haryana.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Tilhan (Oil Seeds):</strong><br/>• <strong>Mahatva:</strong> 2020 mein, Bharat moongphali ka doosra sabse bada utpadak tha. Kul fasal kshetra ka lagbhag 12% cover karte hain.<br/>• <strong>Mukhya Tilhan:</strong> Moongphali, sarson, nariyal, til, soyabean, arandi ke beej, kapas ke beej, alsi, surajmukhi.<br/>• <strong>Upyog:</strong> Adhikansh khadya hain (khane ka tel), kuch sabun, cosmetics mein upyog hote hain.<br/>• <strong>Vishesh Jankari:</strong> Moongphali ek kharif fasal hai (Gujarat sabse bada utpadak). Alsi aur sarson rabi faslein hain. Til uttar mein kharif aur dakshin mein rabi hai. Arandi rabi aur kharif dono hai.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Chai (Tea):</strong><br/>• <strong>Prakar:</strong> Ropan aur peya fasal.<br/>• <strong>Sthitiyan:</strong> Ushnkatibandhiya/uposhnkatibandhiya jalvayu, gehri upjau mitti, garam, nam, pala-mukt jalvayu. Shram-pradhan udyog.<br/>• <strong>Mahatva:</strong> 2020 mein, Bharat Cheen ke baad doosra sabse bada utpadak tha.<br/>• <strong>Pramukh Utpadak:</strong> Assam, Darjeeling aur Jalpaiguri ki pahadiyan, West Bengal, Tamil Nadu, Kerala. Iske alawa Himachal Pradesh, Uttarakhand, Meghalaya.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Coffee:</strong><br/>• <strong>Gunvatta:</strong> Bharatiya Arabica kism, jo shuru mein Yemen se aayi thi, duniya bhar mein bahut maang mein hai.<br/>• <strong>Ugne Wale Kshetra:</strong> Ise pehle Baba Budan Pahadiyon par shuru kiya gaya tha. Ab yeh Karnataka, Kerala, aur Tamil Nadu ki Nilgiri pahadiyon mein ugayi jaati hai.'},
                  { type: 'infoBox', color: 'orange', content: '<strong>Bagwani Faslein (Horticulture):</strong><br/>• <strong>Mahatva:</strong> 2020 mein, Bharat Cheen ke baad phal aur sabjiyon ka doosra sabse bada utpadak tha. Yahan tropical aur temperate dono tarah ke phal ugte hain.<br/>• <strong>Prasiddh Phal:</strong> Aam (Maharashtra, UP), Santre (Nagpur), Kele (Kerala, Tamil Nadu), Lichi aur Amrood (UP, Bihar), Ananas (Meghalaya), Angoor (Andhra Pradesh, Maharashtra), Seb aur Nashpati (J&K, Himachal).<br/>• <strong>Sabjiyan:</strong> Matar, phoolgobhi, pyaaz, bandgobhi, tamatar, baingan, aaloo ka mahatvapurna utpadak.'},
              ]}
          ]
      },
      {
        id: '5',
        title: "Non-Food Crops",
        content: [
            { type: 'infoBox', color: 'red', content: '<strong>Rubber:</strong><br/>• <strong>Prakar:</strong> Bhumadhya rekhiya fasal, lekin tropical/sub-tropical ilakon mein bhi ugayi ja sakti hai.<br/>• <strong>Sthitiyan:</strong> Nam aur aardra jalvayu, varsha >200 cm, tapman >25°C.<br/>• <strong>Upyog:</strong> Mahatvapurna audyogik kachcha maal.<br/>• <strong>Ugne Wale Kshetra:</strong> Kerala, Tamil Nadu, Karnataka, Andaman & Nicobar dweep, aur Meghalaya ki Garo pahadiyan.'},
            { type: 'infoBox', color: 'red', content: '<strong>Reshedar Faslein (Fiber Crops):</strong><br/>• <strong>Pramukh Faslein:</strong> Kapas, jute, san, aur prakritik resham.<br/>• <strong>Srot:</strong> Kapas, jute, san mitti mein ugte hain. Resham, resham ke keedon ke cocoon se milta hai.<br/>• <strong>Sericulture:</strong> Resham utpadan ke liye resham ke keedon ka palan \'Sericulture\' kahlata hai.'},
            { type: 'infoBox', color: 'red', content: '<strong>Kapas (Cotton):</strong><br/>• <strong>Mahatva:</strong> Mana jaata hai ki Bharat kapas ka mool ghar hai. Kapda udyog ke liye mukhya kachcha maal. Cheen ke baad doosra sabse bada utpadak.<br/>• <strong>Sthitiyan:</strong> Deccan pathar ki kali kapas mitti mein achchhi tarah ugti hai. Uchch tapman, halki barish, 210 pala-mukt din, aur tej dhoop chahiye.<br/>• <strong>Prakar:</strong> Kharif fasal, pakne mein 6-8 mahine lagte hain.<br/>• <strong>Pramukh Utpadak:</strong> Maharashtra, Gujarat, MP, Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Punjab, Haryana, UP.'},
            { type: 'infoBox', color: 'red', content: '<strong>Jute:</strong><br/>• <strong>Upnaam:</strong> Sunahara Resha (Golden Fiber) ke naam se jaana jaata hai.<br/>• <strong>Sthitiyan:</strong> Baadh ke maidanon mein upjau mitti par ugta hai, uchch tapman ki avashyakta hoti hai.<br/>• <strong>Upyog:</strong> Boriyan, chataiyan, rassiyan, dhaage, قالین (carpets) aadi banane ke liye.<br/>• <strong>Pramukh Utpadak:</strong> West Bengal, Bihar, Assam, Odisha, Meghalaya.'},
        ]
      },
      {
          id: '6',
          title: 'Technological and Institutional Reforms',
          content: [
              { type: 'heading', text: 'Sudharon ki Avashyakta:'},
              { type: 'list', items: [
                  'Krishi hazaron saalon se ki ja rahi hai, lekin takniki ko update kiye bina zameen ka upyog karne se vikas dheema ho gaya hai.',
                  'Bahut se kisan abhi bhi monsoon aur prakritik mitti ki urvarata par nirbhar hain.',
                  'Yeh ek gambhir chunauti hai kyunki krishi Bharat ki badhti abadi ke 60% se adhik logon ko jeevika pradan karti hai.'
              ]},
              { type: 'heading', text: 'Swatantrata ke Baad Sudhar:'},
              { type: 'list', items: [
                  'Sthiti ko sudharne ke liye, sarkaar ne sansthagat sudharon ko prathmikta di.',
                  'Mukhya kadam the samuhikaran, chakbandi, sahkari samitiyan, aur zamindari unmulan.',
                  "'Bhumi Sudhar' pahli Panchvarshiya Yojana ka mukhya kendra tha, lekin iska kriyanvayan aksar kamzor tha."
              ]},
              { type: 'heading', text: '1960 aur 1970 ka Dashak:'},
              { type: 'list', items: [
                  '<strong>Harit Kranti</strong> (aadhunik takniki par aadharit) aur <strong>Shwet Kranti / Operation Flood</strong> (doodh utpadan badhane ke liye) mukhya rannitiyan theen.',
                  'Ek kami yeh thi ki yeh vikas kuch chune hue kshetro tak hi seemit tha.'
              ]},
              { type: 'heading', text: '1980 aur 1990 ka Dashak:'},
              { type: 'list', items: [
                  'Ek adhik vyapak bhumi vikas karyakram shuru kiya gaya, jismein sansthagat aur takniki dono sudhar shamil the.',
                  '<strong>Uthaye Gaye Mahatvapurna Kadam:</strong><br/>▪ Sukha, baadh, aag aadi ke khilaf fasal bima pradan karna.<br/>▪ Kam byaj daron par karz ke liye Grameen bankon aur sahkari samitiyon ki sthapna.<br/>▪ Kisan Credit Card (KCC) aur Vyaktigat Durghatna Bima Yojana (PAIS) jaisi yojanaon ki shuruaat.<br/>▪ Mausam bulletin aur krishi karyakramon ka prasaran.<br/>▪ Dalalon se bachane ke liye Nyuntam Samarthan Mulya (MSP) ki ghoshna.'
              ]}
          ],
          subSections: [
              {
                  id: '6.1',
                  title: 'Bhoodan - Gramdan Movement',
                  content: [
                      { type: 'paragraph', text: "Yeh ek ahinsak bhumi sudhar andolan tha jise <strong>Vinoba Bhave</strong> ne shuru kiya tha, jinhein Mahatma Gandhi ne apna adhyatmik uttaradhikari ghoshit kiya tha. Ise <strong>Rakt-heen Kranti</strong> ke naam se bhi jaana jaata hai."},
                      { type: 'heading', text: 'Kahani:'},
                      { type: 'list', items: [
                          "Gandhiji ki mrityu ke baad, Vinoba Bhave ne unka sandesh failane ke liye desh bhar mein <em>padyatra</em> ki.",
                          "Andhra Pradesh ke Pochampalli mein, kuch bhumiheen gaonwalon ne zameen maangi. Achanak Shri Ram Chandra Reddy naam ke ek zameendar ne apni 80 ekad zameen 80 bhumiheen gaonwalon ko daan kar di. Is kaam ko 'Bhoodan' (bhumi ka daan) kaha gaya.",
                          "Baad mein, jaise-jaise unhone yatra ki, kuch zameendaron ne poore gaon ko bhumiheenon mein baantne ki peshkash ki. Ise 'Gramdan' (gaon ka daan) kaha gaya.",
                          "Kai zameendron ne aane wale 'land ceiling act' (zameen ki seema tay karne wala kanoon) ke darr se bhi zameen daan ki."
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
function Class10GeographyAgriculture() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true, '4': true, '5': true, '6': true });
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

export default Class10GeographyAgriculture;