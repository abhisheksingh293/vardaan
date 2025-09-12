import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 3: Water Resources",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to Water",
        content: [
          { type: 'paragraph', text: '<strong>The Dual Nature of Water:</strong> Water is essential for life, but it can also be destructive. For example, floods, like those in Assam, can destroy everything in their path, but we need water to live.' },
          { type: 'paragraph', text: '<strong>Why We Need Water:</strong> Humans have always chosen to live near water sources like rivers, lakes, and ponds. This is because we need water for many things:' },
          { type: 'list', items: ['Drinking, cooking our food, and washing clothes and ourselves.', 'In factories, for various processes and for cooling machines.', 'For generating electricity through hydel power plants.'] },
          { type: 'paragraph', text: '<strong>Water on Earth:</strong>' },
          { type: 'list', items: ['About three-fourths (3/4th) of the Earth\'s surface is covered with water.', 'However, only a very small amount of this water is freshwater that we can actually use.'] },
          { type: 'paragraph', text: '<strong>Sources of Freshwater:</strong> We get most of our freshwater from:<br/>1. Surface run-off (water flowing over the land\'s surface).<br/>2. Groundwater (water found underground).' },
          { type: 'infoBox', color: 'blue', content: '<strong>The Hydrological Cycle (Water Cycle):</strong><br/>• This is the continuous process by which water moves. Through this cycle, water is constantly being renewed and recharged.<br/>• Because of the hydrological cycle, water is considered a <strong>renewable resource</strong>.' }
        ]
      },
      {
        id: '2',
        title: "Water Scarcity and the Need for Conservation",
        content: [
          { type: 'paragraph', text: '<strong>The Big Question:</strong> If three-fourths of the world is water and it\'s a renewable resource, why do so many countries and regions suffer from water scarcity?<br/>• It is predicted that by the year <strong>2025</strong>, nearly two billion people will live in absolute water scarcity.' },
          { type: 'paragraph', text: '<strong>What is Water Scarcity?</strong><br/>• When we think of water shortages, we often picture places with very little rainfall, like the deserts of Rajasthan, where women have to walk long distances carrying pots (matkas) to get water.<br/>• While the availability of water does change from place to place and season to season, this is not the only reason for scarcity.<br/>• It is possible for a region to have ample water resources but still face water scarcity; many of our cities are examples of this.' },
          { type: 'paragraph', text: '<strong>Main Causes of Water Scarcity:</strong><br/>• Water scarcity is mostly caused by human actions:<br/>1. Over-exploitation: Using water faster than it can be renewed.<br/>2. Excessive use: Wasting water or using too much of it.<br/>3. Unequal access: Some people or groups get a lot of water while others get very little.' },
          { type: 'heading', text: 'Factors That Worsen Water Scarcity:'},
          { type: 'list', items: [
              '<strong>Large and Growing Population:</strong> A bigger population needs more water for domestic use (drinking, washing) and to grow more food.',
              '<strong>Over-exploitation for Agriculture:</strong><br/>▪ To produce more food, farmers are using a lot of water to expand irrigated areas, especially for growing crops in the dry season.<br/>▪ Irrigated agriculture is the biggest consumer of water. This has led to the need to develop drought-resistant crops and dry farming techniques.<br/>▪ Many farmers now have their own wells and tube-wells. This has led to <strong>falling groundwater levels</strong>, which threatens water availability and food security.',
              '<strong>Industrialisation and Urbanisation:</strong><br/>▪ After independence, India saw a rise in industries and cities.<br/>▪ Industries use large amounts of water and also need electricity, much of which comes from hydroelectric power.<br/>▪ Growing cities with large, dense populations and urban lifestyles have increased the demand for water and energy.<br/>▪ In cities, many housing colonies have their own groundwater pumps, which leads to over-exploitation and depletion of water resources.',
              '<strong>Bad Water Quality (Pollution):</strong><br/>▪ Sometimes, there is enough water available, but it is too polluted to be used. This is another form of water scarcity.<br/>▪ Water can be polluted by domestic waste, industrial chemicals, pesticides, and fertilizers, making it dangerous for humans to use.'
          ]},
           { type: 'paragraph', text: '<strong>A Tale of Two Countries (Management is Key):</strong><br/>• Israel, with an average annual rainfall of only 25 cm, does not suffer from water shortages.<br/>• India, with an average annual rainfall of 114 cm, suffers from drought in some part of the country every year.<br/>• The main reason for this is the lack of proper water management in India. Rainwater quickly flows away into rivers and then to the sea, leaving about nine months of the year with water shortages. This can be controlled with proper management.'},
          { type: 'infoBox', color: 'orange', content: '<strong>Why We Must Conserve and Manage Water:</strong><br/>• To protect ourselves from <strong>health hazards</strong> caused by polluted water.<br/>• To ensure <strong>food security</strong> (that we have enough food to eat).<br/>• To maintain our <strong>livelihoods</strong> and productive activities (like farming and industry).<br/>• To prevent the degradation (damage) of our <strong>natural ecosystems</strong>.<br/>• If we continue to mismanage our water resources, we will create a serious <strong>ecological crisis</strong>.'},
          { type: 'heading', text: 'Government Initiatives for Water Management:'},
          { type: 'list', items: [
              '<strong>Atal Bhujal Yojana (Atal Jal):</strong> A government scheme being implemented in 8220 water-stressed Gram Panchayats in 80 districts across seven states. These states account for about 37% of all water-stressed blocks in India. Its main goal is to bring about <strong>behavioural changes</strong> in communities, encouraging them to move from an attitude of consumption to one of conservation and smart water management.',
              '<strong>Jal Jeevan Mission (JJM):</strong> This mission aims to provide every rural household with a safe and adequate supply of piped drinking water (55 litres per person per day) on a long-term basis.',
              '<strong>Pradhan Mantri Krishi Sinchayee Yojana:</strong> This program works to ensure that all agricultural farms in the country have access to some form of irrigation. Its broad objectives are:<br/>▪ To enhance physical access of water on the farm (<strong>har khet ko pani</strong>).<br/>▪ To improve water use efficiency with technologies like drip irrigation (<strong>per drop more crop</strong>).<br/>▪ To introduce sustainable water conservation practices.'
          ]}
        ]
      },
      {
        id: '3',
        title: "Multi-Purpose River Projects and Integrated Water Resources Management",
        content: [
          { type: 'paragraph', text: '<strong>A History of Water Management in India:</strong><br/>• Since ancient times, people in India have built sophisticated <strong>hydraulic structures</strong> like dams made of stone, reservoirs, lakes, and canals for irrigation.' },
          { type: 'paragraph', text: '<strong>Examples from Ancient India:</strong><br/>▪ In the 1st century B.C., <strong>Sringaverapura</strong> near Allahabad had a system to channel the flood water of the river Ganga.<br/>▪ During the time of <strong>Chandragupta Maurya</strong>, dams, lakes, and irrigation systems were built extensively.<br/>▪ In the 11th century, <strong>Bhopal Lake</strong>, one of the largest artificial lakes of its time, was built.<br/>▪ In the 14th century, Iltutmish constructed a tank in <strong>Hauz Khas, Delhi</strong>, to supply water to the Siri Fort area.'},
          { type: 'heading', text: 'Dams: What Are They?'},
          { type: 'paragraph', text: '• A dam is a barrier built across flowing water to block, direct, or slow down its flow. This often creates a reservoir, lake, or impoundment behind the barrier.<br/>• The word "dam" can refer to the reservoir itself, not just the structure.<br/>• Most dams have a section called a <strong>spillway</strong> or weir, which allows water to flow over or through it.<br/>• <strong>Classification:</strong> Dams are classified based on their structure, purpose, or height.<br/>▪ By Structure: Timber dams, embankment dams, or masonry dams.<br/>▪ By Height: Large dams, major dams, low dams, medium height dams, and high dams.'},
          { type: 'paragraph', text: '<strong>Multi-Purpose Projects:</strong><br/>• Traditionally, dams were built just to store rainwater for irrigating fields.<br/>• Today, dams are built for many purposes at once, which is why they are called <strong>multi-purpose projects</strong>. These purposes include: Irrigation, Electricity generation, Water supply for homes and industries, Flood control, Recreation and tourism, Inland navigation (boating and shipping), and Fish breeding.'},
          { type: 'paragraph', text: '<strong>Examples:</strong><br/>▪ The <strong>Bhakra-Nangal project</strong> on the Sutlej-Beas river is used for both hydel power and irrigation.<br/>▪ The <strong>Hirakud project</strong> on the Mahanadi river helps with water conservation and flood control.<br/>▪ The <strong>Sardar Sarovar Dam</strong> built over the Narmada River in Gujarat is one of India\'s largest projects, covering four states.'},
          { type: 'paragraph', text: '<strong>"Temples of Modern India":</strong><br/>• After independence, Prime Minister <strong>Jawaharlal Nehru</strong> proudly called dams the "temples of modern India".<br/>• He believed these projects would help the nation develop by integrating agriculture with industrialization and the growth of cities.'},
          { type: 'infoBox', color: 'red', content: '<strong>Problems Caused by Dams and Multi-Purpose Projects:</strong><br/>• <strong>Environmental Problems:</strong><br/>▪ They affect the natural flow of rivers, causing sediment (silt and sand) to build up at the bottom of the reservoir. This makes the riverbed rockier and harms the habitats of aquatic life.<br/>▪ Dams <strong>fragment</strong> rivers, making it difficult for fish and other aquatic animals to migrate, especially for spawning (laying eggs).<br/>▪ The large reservoirs submerge existing forests and soil, which then decompose over time.<br/>▪ Irrigation from dams has changed cropping patterns to water-intensive crops, which can cause <strong>salinisation</strong> (increase in salt content) of the soil.<br/>• <strong>Social Problems:</strong><br/>▪ Building large dams leads to the <strong>displacement</strong> of many people from their homes and the loss of their livelihoods.<br/>▪ They can create conflicts between states over the sharing of river water. For example, the <strong>Krishna-Godavari dispute</strong> involves Karnataka and Andhra Pradesh protesting against Maharashtra for diverting more water at the Koyna dam.<br/>• <strong>Other Issues:</strong><br/>▪ Ironically, dams built to control floods have sometimes <strong>triggered floods</strong>, especially during heavy rainfall, due to sedimentation in the reservoir.<br/>▪ The Damodar river was known as the "river of sorrow" due to the regular trouble it caused with flooding, as narrated in local folk songs.<br/>▪ Dams have also been observed to induce <strong>earthquakes</strong>, cause water-borne diseases, and lead to pollution.'}
        ]
      },
      {
        id: '4',
        title: "Rainwater Harvesting",
        content: [
          { type: 'paragraph', text: '<strong>A Better Alternative:</strong> Because of the many problems with multi-purpose projects, rainwater harvesting is seen as a good alternative that is better for both society and the environment.' },
          { type: 'heading', text: 'Traditional Rainwater Harvesting Techniques in India:'},
          { type: 'paragraph', text: '• People in ancient India had deep knowledge of local weather patterns and soil types, and they developed many techniques to collect rainwater.<br/>• In Hilly Regions: People built diversion channels called <strong>\'guls\' or \'kuls\'</strong> in the Western Himalayas for agriculture.<br/>• In Arid (Dry) Regions of Rajasthan:<br/>▪ Agricultural fields were turned into rain-fed storage structures called <strong>\'khadins\'</strong> in Jaisalmer and <strong>\'johads\'</strong> in other areas.<br/>▪ <strong>Tankas:</strong> Almost all houses had underground tanks, or tankas, for storing drinking water.<br/>▪ This rainwater, known locally as <strong>\'palar pani\'</strong>, is considered the purest form of natural water.<br/>• In the Flood Plains of Bengal: People developed inundation channels to irrigate their fields.'},
          { type: 'infoBox', color: 'green', content: '<strong>Modern Rainwater Harvesting:</strong><br/>• This tradition is being successfully adapted today. Modern methods include using hand pumps or abandoned dug wells to help recharge the groundwater.<br/>• <strong>Gendathur, Karnataka:</strong> In this remote village, nearly 200 households have installed rooftop rainwater harvesting systems.<br/>• <strong>Shillong, Meghalaya:</strong> Interestingly, while nearby Mawsynram receives the highest rainfall in the world, Shillong faces a water shortage. As a result, almost every household practices rooftop rainwater harvesting.<br/>• <strong>Tamil Nadu:</strong> This is the first state in India to make rooftop rainwater harvesting structures compulsory for all houses, with legal punishments for those who do not comply.'},
          { type: 'paragraph', text: '<strong>Bamboo Drip Irrigation System:</strong><br/>• This is a 200-year-old system used in <strong>Meghalaya</strong>.<br/>• It uses a system of <strong>bamboo pipes</strong> to tap stream and spring water and transport it over hundreds of meters.<br/>• The system is designed to reduce the water flow from about 18-20 litres per minute at the source to just <strong>20-80 drops per minute</strong> at the site of the plant, delivering water directly to the roots.'}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 3: Water Resources",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Introduction to Water",
        content: [
          { type: 'paragraph', text: '<strong>Paani ka Dual Nature:</strong> Paani life ke liye essential hai, lekin yeh destructive bhi ho sakta hai. Example ke liye, floods, jaise Assam mein aate hain, sab kuch barbaad kar sakte hain, lekin hamein jeene ke liye paani chahiye.' },
          { type: 'paragraph', text: '<strong>Hamein Paani Kyon Chahiye:</strong> Humans ne hamesha rivers, lakes, aur ponds jaise water sources ke paas rehna chuna hai. Aisa isliye hai kyonki hamein kai cheezon ke liye paani chahiye:' },
          { type: 'list', items: ['Peene, khana pakane, aur kapde dhone ke liye.', 'Factories mein, various processes aur machines ko thanda karne ke liye.', '<strong>Hydel power plants</strong> ke through electricity generate karne ke liye.'] },
          { type: 'paragraph', text: '<strong>Earth par Paani:</strong>' },
          { type: 'list', items: ['Earth ka lagbhag <strong>three-fourths (3/4th)</strong> surface paani se dhaka hua hai.', 'Lekin, is paani ka bahut chhota sa amount hi <strong>freshwater</strong> hai jise hum actually use kar sakte hain.'] },
          { type: 'paragraph', text: '<strong>Freshwater ke Sources:</strong> Hamein apna zyadatar freshwater in se milta hai:<br/>1. <strong>Surface run-off</strong> (zameen ki satah par behta paani).<br/>2. <strong>Groundwater</strong> (zameen ke neeche paaya jaane wala paani).' },
          { type: 'infoBox', color: 'blue', content: '<strong>The Hydrological Cycle (Water Cycle):</strong><br/>• Yeh continuous process hai jisse paani move karta hai. Is cycle ke through, paani lagatar renew aur recharge hota rehta hai.<br/>• Isliye, paani ko ek <strong>renewable resource</strong> maana jaata hai.' }
        ]
      },
      {
        id: '2',
        title: "Water Scarcity and the Need for Conservation",
        content: [
          { type: 'paragraph', text: '<strong>Bada Sawaal:</strong> Agar duniya ka three-fourths hissa paani hai aur yeh ek renewable resource hai, to itne saare desh aur regions water scarcity se kyon pareshan hain?<br/>o Yeh anuman lagaya gaya hai ki saal <strong>2025</strong> tak, lagbhag do billion log absolute water scarcity mein rahenge.' },
          { type: 'paragraph', text: '<strong>Water Scarcity Kya Hai?</strong><br/>o Jab hum paani ki kami ke baare mein sochte hain, to hum aksar Rajasthan ke deserts jaisi jagahon ki tasveer sochte hain.<br/>o Lekin scarcity ka sirf yahi kaaran nahi hai. Ek region mein ample water resources ho sakte hain aur phir bhi wahan water scarcity ho sakti hai; hamare kai sheher iske examples hain.' },
          { type: 'paragraph', text: '<strong>Water Scarcity ke Mukhya Kaaran:</strong><br/>o Water scarcity zyadatar human actions ke kaaran hoti hai:<br/>1. <strong>Over-exploitation:</strong> Paani ko usse tez istemal karna jitni tezi se woh renew ho sakta hai.<br/>2. <strong>Excessive use:</strong> Paani barbaad karna ya bahut zyada istemal karna.<br/>3. <strong>Unequal access:</strong> Kuch logon ya groups ko bahut paani milta hai jabki doosron ko bahut kam.' },
          { type: 'heading', text: 'Factors Jo Water Scarcity ko Badhate Hain:'},
          { type: 'list', items: [
              '<strong>Badi aur Badhti Population:</strong> Badi population ko domestic use aur zyada food ugane ke liye zyada paani chahiye.',
              '<strong>Agriculture ke liye Over-exploitation:</strong><br/>▪ Zyada food produce karne ke liye, kisan irrigated areas ko badhane ke liye bahut saara paani use kar rahe hain.<br/>▪ Kai kisanon ke paas ab apne wells aur tube-wells hain. Isse <strong>groundwater levels gir rahe hain</strong>.',
              '<strong>Industrialisation and Urbanisation:</strong><br/>▪ Industries bahut saara paani use karti hain aur unhein electricity bhi chahiye, jiska bada hissa <strong>hydroelectric power</strong> se aata hai.<br/>▪ Badhte shehron ne paani aur energy ki demand badha di hai.',
              '<strong>Kharab Water Quality (Pollution):</strong><br/>▪ Kabhi-kabhi, paani to kaafi hota hai, lekin woh itna polluted hota hai ki use istemal nahi kiya ja sakta. Yeh water scarcity ka ek aur roop hai.'
          ]},
           { type: 'paragraph', text: '<strong>Do Deshon ki Kahani (Management hi Key hai):</strong><br/>o Israel, jahan average annual rainfall sirf 25 cm hai, wahan paani ki kami nahi hoti.<br/>o India, jahan average annual rainfall 114 cm hai, har saal kisi na kisi hisse mein sukhe se pareshan rehta hai.<br/>o Iska mukhya kaaran India mein proper water management ki kami hai.'},
          { type: 'infoBox', color: 'orange', content: '<strong>Hamein Paani ko Conserve aur Manage Kyon Karna Chahiye:</strong><br/>o Apne aap ko <strong>health hazards</strong> se bachane ke liye.<br/>o <strong>Food security</strong> sunishchit karne ke liye.<br/>o Apni <strong>livelihoods</strong> aur productive activities ko maintain karne ke liye.<br/>o Apne <strong>natural ecosystems</strong> ke degradation ko rokne ke liye.<br/>o Agar hum apne water resources ko mismanage karte rahe, to hum ek serious <strong>ecological crisis</strong> paida kar denge.'},
          { type: 'heading', text: 'Water Management ke liye Sarkari Pehal:'},
          { type: 'list', items: [
              '<strong>Atal Bhujal Yojana (Atal Jal):</strong> Paani ki kami wale Gram Panchayats mein communities mein conservation ki taraf <strong>behavioural changes</strong> laane ke liye ek sarkari scheme.',
              '<strong>Jal Jeevan Mission (JJM):</strong> Is mission ka uddeshya har gramin parivar ko piped drinking water ki safe aur adequate supply pradan karna hai.',
              '<strong>Pradhan Mantri Krishi Sinchayee Yojana:</strong> Yeh program sunishchit karta hai ki desh ke sabhi khet-khaliyano tak kisi na kisi roop mein irrigation pahunche (<strong>har khet ko pani</strong>) aur paani ke istemal ki efficiency badhe (<strong>per drop more crop</strong>).'
          ]}
        ]
      },
      {
        id: '3',
        title: "Multi-Purpose River Projects and Integrated Water Resources Management",
        content: [
          { type: 'paragraph', text: '<strong>India mein Water Management ka Itihas:</strong><br/>o Prachin kaal se, Bharat mein logon ne irrigation ke liye patthar ke bane dams, reservoirs, lakes, aur canals jaise sophisticated <strong>hydraulic structures</strong> banaye hain.' },
          { type: 'paragraph', text: '<strong>Prachin Bharat se Examples:</strong><br/>▪ 1st century B.C. mein, Allahabad ke paas <strong>Sringaverapura</strong> mein Ganga nadi ke baadh ke paani ko channel karne ka system tha.<br/>▪ <strong>Chandragupta Maurya</strong> ke samay mein, dams, lakes, aur irrigation systems bade paimane par banaye gaye the.<br/>▪ 11th century mein, <strong>Bhopal Lake</strong>, apne samay ki sabse badi artificial lakes mein se ek, banayi gayi thi.<br/>▪ 14th century mein, Iltutmish ne <strong>Hauz Khas, Delhi</strong> mein ek tank banwaya tha.'},
          { type: 'heading', text: 'Dams: Yeh Kya Hain?'},
          { type: 'paragraph', text: 'o Ek dam behte paani ke paar banaya gaya ek barrier hai jo uske flow ko rokta, direct karta, ya dheema karta hai. Isse aksar ek reservoir banta hai.<br/>o Zyadatar dams mein ek section hota hai jise <strong>spillway</strong> ya weir kehte hain.<br/>o <strong>Classification:</strong> Dams ko unke structure, purpose, ya height ke aadhar par classify kiya jaata hai.'},
          { type: 'paragraph', text: '<strong>Multi-Purpose Projects:</strong><br/>o Aaj, dams ek saath kai purposes ke liye banaye jaate hain, isliye unhein <strong>multi-purpose projects</strong> kehte hain. In purposes mein shamil hain: Irrigation, Electricity generation, Water supply, Flood control, Recreation, Inland navigation, aur Fish breeding.'},
          { type: 'paragraph', text: '<strong>Examples:</strong><br/>▪ <strong>Bhakra-Nangal project</strong> Sutlej-Beas nadi par hydel power aur irrigation dono ke liye use hota hai.<br/>▪ <strong>Hirakud project</strong> Mahanadi par water conservation aur flood control mein madad karta hai.<br/>▪ <strong>Sardar Sarovar Dam</strong> Gujarat mein Narmada Nadi par bana, Bharat ke sabse bade projects mein se ek hai.'},
          { type: 'paragraph', text: '<strong>"Adhunik Bharat ke Mandir":</strong><br/>o Aazadi ke baad, Pradhan Mantri <strong>Jawaharlal Nehru</strong> ne garv se dams ko "adhunik Bharat ke mandir" kaha tha.'},
          { type: 'infoBox', color: 'red', content: '<strong>Dams se Hone Wali Problems:</strong><br/>• <strong>Environmental Problems:</strong> Ve nadiyon ke natural flow ko prabhavit karte hain, jisse sediment jama ho jaata hai, aquatic habitats ko nuksaan pahunchta hai, aur nadiyan <strong>fragment</strong> ho jaati hain.<br/>• <strong>Social Problems:</strong> Bade dams banane se kai logon ka <strong>displacement</strong> hota hai aur nadi ke paani ko share karne par rajyon ke beech vivad paida ho sakta hai (jaise, <strong>Krishna-Godavari vivad</strong>).<br/>• <strong>Other Issues:</strong> Baadh ko control karne ke liye banaye gaye dams ne kabhi-kabhi <strong>baadh la di hai</strong>. Unse <strong>earthquakes</strong> aane aur paani se hone wali bimariyan phailne ka bhi anuman lagaya gaya hai.'}
        ]
      },
      {
        id: '4',
        title: "Rainwater Harvesting",
        content: [
          { type: 'paragraph', text: '<strong>Ek Behtar Vikalp:</strong> Multi-purpose projects ki kai samasyaon ke kaaran, rainwater harvesting ko ek achha vikalp maana jaata hai jo samaj aur paryavaran dono ke liye behtar hai.' },
          { type: 'heading', text: 'India mein Traditional Rainwater Harvesting Techniques:'},
          { type: 'paragraph', text: 'o Pahadi ilakon mein: Log Western Himalayas mein kheti ke liye <strong>\'guls\' ya \'kuls\'</strong> naam ke diversion channels banate the.<br/>o Rajasthan ke Arid Regions mein:<br/>▪ Kheti ke kshetron ko <strong>\'khadins\'</strong> (Jaisalmer mein) aur <strong>\'johads\'</strong> (dusre ilakon mein) naam ke rain-fed storage structures mein badal diya gaya tha.<br/>▪ <strong>Tankas:</strong> Lagbhag sabhi gharon mein peene ka paani store karne ke liye underground tanks, ya tankas hote the.<br/>▪ Is rainwater ko sthaniya roop se <strong>\'palar pani\'</strong> kehte hain.<br/>o Bengal ke Flood Plains mein: Log apne kheton ki sinchai ke liye inundation channels develop karte the.'},
          { type: 'infoBox', color: 'green', content: '<strong>Modern Rainwater Harvesting:</strong><br/>• <strong>Gendathur, Karnataka</strong> mein, lagbhag 200 parivaron ne rooftop rainwater harvesting systems install kiye hain.<br/>• <strong>Shillong, Meghalaya</strong> mein, lagbhag har ghar mein rooftop rainwater harvesting practice ki jaati hai.<br/>• <strong>Tamil Nadu</strong> Bharat ka pehla rajya hai jisne sabhi gharon ke liye rooftop rainwater harvesting structures ko anivarya bana diya hai.'},
          { type: 'paragraph', text: '<strong>Bamboo Drip Irrigation System:</strong><br/>o Yeh <strong>Meghalaya</strong> mein istemal hone wala 200 saal purana system hai.<br/>o Ismein <strong>bamboo pipes</strong> ka system use hota hai jisse jharne aur chashme ke paani ko saikdon meter tak transport kiya jaata hai, paudhon ki jadon tak seedhe paani pahunchate hue.'}
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
function Class10GeographyWaterResources() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '10': true, '11': true });

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

export default Class10GeographyWaterResources;
