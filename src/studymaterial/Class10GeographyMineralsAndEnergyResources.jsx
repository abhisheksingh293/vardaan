import React, { useState, useEffect, useRef } from 'react';

// In a real project, you would install react-helmet-async: npm install react-helmet-async
// This is a simulated Helmet component for this environment to demonstrate SEO features.
const Helmet = ({ children }) => {
  useEffect(() => {
  	// This effect manages the document's head section for SEO.
  	const titleElement = document.querySelector('title');
  	
  	// Clean up previously added meta tags and scripts to avoid duplicates on re-render.
  	document.querySelectorAll('meta[data-managed-by-helmet]').forEach(el => el.remove());
  	document.querySelectorAll('script[data-managed-by-helmet]').forEach(el => el.remove());
    document.querySelectorAll('link[data-managed-by-helmet]').forEach(el => el.remove());


  	React.Children.forEach(children, child => {
  	  if (!child) return;

  	  if (child.type === 'title') {
  	 	if (titleElement) {
  	 	 	titleElement.innerText = child.props.children;
  	 	}
  	  }

  	  if (child.type === 'meta') {
  	 	const meta = document.createElement('meta');
  	 	meta.setAttribute('name', child.props.name);
  	 	meta.setAttribute('content', child.props.content);
  	 	meta.setAttribute('data-managed-by-helmet', 'true'); // Mark as managed
  	 	document.head.appendChild(meta);
  	  }

      if (child.type === 'link' && child.props.rel === 'canonical') {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', child.props.href);
        link.setAttribute('data-managed-by-helmet', 'true');
        document.head.appendChild(link);
      }
  	  
  	  if (child.type === 'script' && child.props.type === 'application/ld+json') {
  	 	  const script = document.createElement('script');
  	 	  script.type = 'application/ld+json';
  	 	  script.innerHTML = child.props.children;
  	 	  script.setAttribute('data-managed-by-helmet', 'true'); // Mark as managed
  	 	  document.head.appendChild(script);
  	  }
  	});
  }, [children]);

  return null;
};


// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 5: Minerals and Energy Resources",
    tocTitle: "Table of Contents",
    metaDescription: "Detailed Class 10 Geography notes on Minerals and Energy Resources. Covers types of minerals, distribution in India, conventional and non-conventional energy. Essential for CBSE students.",
    sections: [
      {
        id: '1',
        title: "Introduction to Minerals",
        content: [
          { type: 'paragraph', text: "Everything we use in our daily lives is connected to minerals. From the smallest pin to large buildings, ships, cars, buses, and airplanes, all are made from minerals. Even the roads we travel on and the machinery we use are derived from minerals. The energy that powers our vehicles and industries also comes from resources found in the earth. Human beings have used minerals throughout all stages of development for their livelihood, decoration, festivals, and religious ceremonies. Surprisingly, even the food we eat contains essential minerals." },
          { type: 'heading', text: "What is a Mineral?" },
          { type: 'list', items: [
              'Geologists, who study rocks and minerals, define a mineral as a "homogenous, naturally occurring substance with a definable internal structure."',
              '"Homogenous" means that the substance is the same all the way through.',
              '"Naturally occurring" means it is found in nature and not made by humans.',
              'Minerals come in many different forms, from the hardest diamond to the softest talc.'
          ]},
          { type: 'heading', text: "Minerals in Everyday Life: The Example of Toothpaste" },
           { type: 'list', items: [
              "Did you know your toothpaste contains several minerals?",
              "<strong>Cleaning Minerals:</strong> Abrasive (slightly rough) minerals like silica, limestone, and aluminium oxide help to clean your teeth.",
              "<strong>Cavity Prevention:</strong> Fluoride, which helps reduce cavities, comes from a mineral called fluorite.",
              "<strong>Whitening:</strong> Most toothpastes get their white color from titanium oxide, which is extracted from minerals like rutile, ilmenite, and anatase.",
              "<strong>Sparkle:</strong> The sparkle in some toothpastes is due to mica.",
              "Even the plastic tube and toothbrush are made from petroleum, which is an energy resource."
          ]},
           { type: 'heading', text: "Minerals and Our Bodies" },
           { type: 'list', items: [
              "All living things need minerals. Life processes cannot happen without them.",
              "Although minerals make up only about 0.3% of the nutrients we consume, they are extremely important.",
              "Without this small amount of minerals, our bodies would not be able to use the other 99.7% of the food we eat."
          ]}
        ]
      },
      {
        id: '2',
        title: "Understanding Rocks and Minerals",
        content: [
            { type: 'list', items: [
                "Rocks are combinations of minerals.",
                "Some rocks, like limestone, are made of just a single mineral.",
                "However, most rocks are made up of several different minerals in various amounts.",
                "Even though over 2000 minerals have been identified, only a few are commonly found in most rocks."
            ]},
            { type: 'heading', text: "Why are minerals so varied?" },
            { type: 'list', items: [
                "The specific mineral that forms depends on the physical and chemical conditions present when it was created.",
                "These conditions result in minerals having a wide range of colors, hardness, crystal forms, lustre (shininess), and density. Geologists use these properties to tell minerals apart and classify them."
            ]},
            { type: 'heading', text: "Study of Minerals by Geographers and Geologists" },
            { type: 'list', items: [
                "Geographers study minerals as part of the earth's crust to better understand landforms. They are also interested in the distribution of mineral resources and the economic activities associated with them.",
                "A Geologist, on the other hand, is more interested in how minerals are formed, their age, and their physical and chemical composition."
            ]}
        ]
      },
      {
        id: '3',
        title: "Classification of Minerals",
        content: [
            { type: 'paragraph', text: "For general and commercial purposes, minerals can be grouped into three main categories." },
            { type: 'list', items: [
                "<strong>Metallic Minerals:</strong> These minerals contain metal. They are further divided into:<br/>a) Ferrous Minerals: These contain iron. (Examples: Iron ore, manganese, nickel, cobalt).<br/>b) Non-Ferrous Minerals: These contain metals other than iron. (Examples: Copper, lead, tin, bauxite).<br/>c) Precious Minerals: These are valuable metals. (Examples: Gold, silver, platinum).",
                "<strong>Non-Metallic Minerals:</strong> These minerals do not contain metals. (Examples: Mica, salt, potash, sulphur, limestone, marble).",
                "<strong>Energy Minerals:</strong> These are used to produce energy. (Examples: Coal, petroleum, natural gas)."
            ]}
        ]
      },
      {
        id: '4',
        title: "How and Where Are Minerals Found?",
        content: [
            { type: 'paragraph', text: 'Minerals are usually found in rocks in the form of "ores". An ore is a mixture of a mineral with other elements. For a mineral to be mined, it must be present in the ore in a high enough concentration to make the process profitable, or "commercially viable". Minerals generally occur in these five forms:' },
            { type: 'list', items: [
                "<strong>In Igneous and Metamorphic Rocks:</strong> Minerals can be found in the cracks, faults, and joints of these rocks. Smaller deposits are called veins, and larger ones are called lodes. They are formed when minerals in liquid or gas form are pushed up from deep within the earth. As they rise and get closer to the surface, they cool and solidify. (Examples: Tin, copper, zinc, and lead).",
                "<strong>In Sedimentary Rocks:</strong> Many minerals in these rocks are found in beds or layers. They were formed when materials were deposited, accumulated, and concentrated in horizontal layers. Coal and some types of iron ore were formed this way over long periods under great heat and pressure. Other sedimentary minerals like gypsum, potash salt, and sodium salt are formed by evaporation, especially in dry (arid) regions.",
                "<strong>Through Decomposition of Surface Rocks:</strong> This happens when surface rocks break down and soluble parts are washed away, leaving behind a mass of weathered material that contains ores. Bauxite, the ore from which we get aluminum, is formed in this way.",
                "<strong>As Alluvial or 'Placer' Deposits:</strong> These are minerals found in the sands of valley floors and at the base of hills. These deposits, called 'placer deposits', contain minerals that are not easily corroded by water. (Examples: Gold, silver, tin, and platinum).",
                "<strong>In Ocean Waters:</strong> The oceans contain huge quantities of minerals, but they are often too spread out to be economically useful. However, common salt, magnesium, and bromine are largely taken from ocean waters. The ocean floor is also rich in manganese nodules."
            ]},
            { type: 'heading', text: "Interesting Fact: Rat-Hole Mining" },
            { type: 'paragraph', text: "In most of India, minerals are nationalized, meaning they belong to the government, and permission is needed for extraction. However, in tribal areas of north-east India, minerals are often owned by individuals or communities. In Meghalaya, which has large deposits of coal and limestone, coal mining is done by family members in long, narrow tunnels known as 'Rat-hole' mining. The National Green Tribunal has declared these activities illegal."}
        ]
      },
      {
        id: '5',
        title: "Distribution of Minerals in India",
        content: [
            { type: 'paragraph', text: "India has a rich variety of mineral resources, but they are unevenly distributed across the country. This is due to differences in the geological structure and processes that formed these minerals over millions of years." },
            { type: 'list', items: [
                "<strong>Peninsular Rocks:</strong> Most of India's reserves of coal, metallic minerals, mica, and many other non-metallic minerals are found here.",
                "<strong>Gujarat and Assam:</strong> The sedimentary rocks in these states on the western and eastern sides of the peninsula have most of the petroleum deposits.",
                "<strong>Rajasthan:</strong> Has reserves of many non-ferrous minerals.",
                "<strong>North Indian Plains:</strong> The vast flat plains of north India are almost entirely without economic minerals."
            ]},
            { type: 'paragraph', text: "For a mineral deposit to become a mine, its economic viability (whether it's profitable to mine) is crucial. This depends on the concentration of the mineral in the ore, the ease of extraction, and its closeness to the market."}
        ]
      },
      {
        id: '6',
        title: "Ferrous Minerals",
        content: [
            { type: 'paragraph', text: "These minerals contain iron and make up about three-fourths of the total value of metallic mineral production. They provide a strong base for metallurgical industries." },
            { type: 'heading', text: "6.1 Iron Ore" },
            { type: 'list', items: [
                "Iron ore is the most basic mineral and is considered the backbone of industrial development. India has large amounts of high-quality iron ore.",
                "<strong>Types of Iron Ore:</strong><br/>- Magnetite: This is the finest quality iron ore, with up to 70% iron content. It has excellent magnetic properties, making it very valuable for the electrical industry.<br/>- Hematite: This is the most important iron ore for industrial use in terms of quantity. It has a slightly lower iron content (50-60%).",
                "In 2018-19, almost all iron ore production (97%) came from Odisha, Chhattisgarh, Karnataka, and Jharkhand."
            ]},
             { type: 'heading', text: "Major Iron Ore Belts in India:" },
             { type: 'list', items: [
                "<strong>Odisha-Jharkhand Belt:</strong> High-grade hematite ore is found in the Badampahar mines (Odisha) and the Gua and Noamundi mines (Jharkhand).",
                "<strong>Durg-Bastar-Chandrapur Belt (Chhattisgarh and Maharashtra):</strong> The Bailadila hills in Bastar, Chhattisgarh, have very high-grade hematite ore. This ore is perfect for steel-making and is exported to Japan and South Korea through the Vishakhapatnam port.",
                "<strong>Ballari-Chitradurga-Chikkamagaluru-Tumakuru Belt (Karnataka):</strong> This belt has large reserves of iron ore. The Kudremukh mines are a 100% export unit, and their deposits are among the largest in the world. The ore is transported as a slurry (a semi-liquid mixture) through a pipeline to a port near Mangaluru.",
                "<strong>Maharashtra-Goa Belt:</strong> This includes Goa and the Ratnagiri district of Maharashtra. Although the ore is not of the highest quality, it is mined efficiently and exported through the Marmagao port."
             ]},
             { type: 'heading', text: "6.2 Manganese" },
             { type: 'paragraph', text: "<strong>Uses:</strong> Manganese is mainly used to make steel and ferro-manganese alloys. About 10 kg of manganese is needed to make one tonne of steel. It is also used in making bleaching powder, insecticides, and paints."}
        ]
      },
      {
        id: '7',
        title: "Non-Ferrous Minerals",
        content: [
            { type: 'paragraph', text: "India does not have large reserves or high production of non-ferrous minerals, but they are very important for metallurgical, engineering, and electrical industries." },
            { type: 'heading', text: "7.1 Copper" },
            { type: 'list', items: [
                "India is critically deficient in copper reserves and production.",
                "<strong>Properties:</strong> Copper is malleable (can be hammered into thin sheets), ductile (can be drawn into wires), and a good conductor of electricity.",
                "<strong>Uses:</strong> Because of its properties, it is mainly used in electrical cables, electronics, and chemical industries.",
                "<strong>Leading Producers:</strong> The Balaghat mines in Madhya Pradesh, Khetri mines in Rajasthan, and the Singhbhum district of Jharkhand."
            ]},
            { type: 'heading', text: "7.2 Bauxite" },
            { type: 'list', items: [
                "<strong>Source of Aluminum:</strong> Although aluminum is found in several ores, it is mainly obtained from bauxite, a clay-like substance.",
                "<strong>Formation:</strong> Bauxite deposits are formed from the decomposition of rocks that are rich in aluminum silicates.",
                "<strong>Properties of Aluminum:</strong> It is strong like iron but also extremely light. It is a good conductor of electricity and is very malleable.",
                "<strong>Major Deposits in India:</strong> Found in the Amarkantak plateau, Maikal hills, and the plateau region of Bilaspur-Katni.",
                "<strong>Largest Producer:</strong> Odisha was the largest bauxite-producing state in 2018-19. The Panchpatmali deposits in the Koraput district are the most important in the state."
            ]}
        ]
      },
      {
        id: '8',
        title: "Non-Metallic and Rock Minerals",
        content: [
            { type: 'heading', text: "8.1 Mica" },
            { type: 'list', items: [
                "<strong>Properties:</strong> Mica is a mineral made up of a series of plates or leaves that split easily into very thin sheets. These sheets can be so thin that a thousand can be layered into a sheet just a few centimeters high. It has excellent di-electric strength, a low power loss factor, great insulating properties, and can resist high voltage. It can be clear, black, green, red, yellow, or brown.",
                "<strong>Uses:</strong> It is one of the most essential minerals for the electric and electronic industries.",
                "<strong>Major Deposits in India:</strong> The northern edge of the Chota Nagpur plateau. The Koderma-Gaya-Hazaribagh belt of Jharkhand is the leading producer. Around Ajmer in Rajasthan. The Nellore mica belt in Andhra Pradesh."
            ]},
            { type: 'heading', text: "8.2 Limestone (Rock Mineral)" },
            { type: 'list', items: [
                "<strong>Composition:</strong> Limestone is found in sedimentary rocks and is made of calcium carbonates or calcium and magnesium carbonates.",
                "<strong>Uses:</strong> It is the basic raw material for the cement industry and is essential for smelting iron ore in a blast furnace."
            ]}
        ]
      },
      {
        id: '9',
        title: "Hazards of Mining",
        content: [
            { type: 'paragraph', text: "Mining can have a serious negative impact on the health of miners and the environment." },
            { type: 'list', items: [
                "<strong>Health Risks for Miners:</strong> Miners constantly inhale dust and harmful fumes, which can lead to pulmonary diseases (lung diseases).",
                "<strong>Safety Risks:</strong> There is a constant threat of mine roofs collapsing, flooding (inundation), and fires in coal mines.",
                "<strong>Environmental Impact:</strong> Mining contaminates water sources in the region. Dumping waste and slurry leads to the degradation of land and soil and increases pollution in streams and rivers."
            ]},
            { type: 'paragraph', text: "Stricter safety regulations and the implementation of environmental laws are essential to prevent mining from becoming a \"killer industry\"."}
        ]
      },
      {
        id: '10',
        title: "Conservation of Minerals",
        content: [
            { type: 'heading', text: "Why is it important?" },
            { type: 'list', items: [
                "Mineral resources are finite and non-renewable. They take millions of years to form, but we are consuming them very rapidly.",
                "Workable mineral deposits make up only a tiny fraction (1%) of the earth's crust.",
                "As we dig deeper for minerals, the cost of extraction increases, and the quality of the ore often decreases."
            ]},
            { type: 'heading', text: "How can we conserve minerals?" },
            { type: 'list', items: [
                "Use mineral resources in a planned and sustainable manner.",
                "Develop improved technologies to use low-grade ores at a low cost.",
                "Recycling metals, using scrap metals, and other substitutes are important steps."
            ]}
        ]
      },
       {
        id: '11',
        title: "Energy Resources",
        content: [
            { type: 'paragraph', text: "Energy is needed for all activities—cooking, lighting, heating, transportation, and running industries. Energy resources can be classified as conventional and non-conventional sources." },
            { type: 'heading', text: "11.1 Conventional Sources of Energy" },
            { type: 'list', items: [
                "These are the traditional sources of energy that have been used for a long time.",
                "Examples: Firewood, cattle dung cake, coal, petroleum, natural gas, and electricity (both hydro and thermal).",
                "In rural India, firewood and cattle dung cake provide over 70% of the energy needs for households. However, this is discouraged because it leads to deforestation and uses up valuable manure that could be used in agriculture."
            ]},
            { type: 'heading', text: "11.2 Non-Conventional Sources of Energy" },
            { type: 'list', items: [
                "These are newer sources of energy.",
                "Examples: Solar, wind, tidal, geothermal energy, biogas, and atomic energy."
            ]}
        ]
      },
       {
        id: '12',
        title: "Detailed Look at Conventional Sources",
        content: [
            { type: 'heading', text: "12.1 Coal" },
            { type: 'list', items: [
                "<strong>Formation:</strong> Coal is a fossil fuel formed from the compression of plant material over millions of years.",
                "<strong>Importance:</strong> It is India's most abundantly available fossil fuel and provides a substantial part of the nation's energy needs.",
                "<strong>Types of Coal:</strong><br/>- Peat: Has low carbon and high moisture, with low heating capacity.<br/>- Lignite: A low-grade brown coal, soft with high moisture. Major reserves are in Neyveli, Tamil Nadu, and are used to generate electricity.<br/>- Bituminous Coal: The most popular coal for commercial use. Metallurgical coal is a high-grade bituminous coal used for smelting iron in blast furnaces.<br/>- Anthracite: The highest quality hard coal.",
                "<strong>Location:</strong> In India, coal is found in two main geological rock series:<br/>- Gondwana (over 200 million years old): Found in the Damodar valley (West Bengal-Jharkhand), which includes major coalfields like Jharia, Raniganj, and Bokaro. Also found in Godavari, Mahanadi, Son, and Wardha valleys.<br/>- Tertiary (about 55 million years old): Found in the northeastern states of Meghalaya, Assam, Arunachal Pradesh, and Nagaland.",
                "Coal is a bulky material that loses weight when used (it turns to ash). For this reason, heavy industries and thermal power stations are located on or near coalfields."
            ]},
            { type: 'heading', text: "12.2 Petroleum" },
            { type: 'list', items: [
                "<strong>Importance:</strong> Petroleum (or mineral oil) is the second major energy source in India after coal. It provides fuel for heat and lighting, lubricants, and raw materials for many manufacturing industries. Petroleum refineries act as a \"nodal industry\" for synthetic textile, fertilizer, and chemical industries.",
                "<strong>Occurrence:</strong> Most petroleum in India is found in anticlines and fault traps in tertiary age rock formations. Oil is trapped in porous rock layers (like limestone or sandstone) between non-porous layers. Gas, being lighter, is usually found above the oil.",
                "<strong>Major Production Areas:</strong> Mumbai High (offshore field), Gujarat (Ankeleshwar is the most important field), and Assam (India's oldest oil-producing state), with fields like Digboi, Naharkatiya, and Moran-Hugrijan."
            ]},
            { type: 'heading', text: "12.3 Natural Gas" },
            { type: 'list', items: [
                 "<strong>Importance:</strong> An environmentally friendly fuel found with petroleum deposits. It is used as a domestic and industrial fuel , in power plants, as a raw material in chemical industries, and as a transport fuel (CNG) and cooking fuel (PNG).",
                 "<strong>Major Reserves:</strong> Mumbai High, allied fields on the west coast, Cambay Basin, and the Krishna-Godavari basin.",
                 "<strong>Infrastructure:</strong> The 1,700 km long Hazira-Vijaipur-Jagdishpur (HVJ) pipeline was a major step that linked gas fields to markets in western and northern India."
            ]},
            { type: 'heading', text: "12.4 Electricity" },
            { type: 'list', items: [
                "Per capita consumption of electricity is considered an index of development.",
                "Electricity is generated in two main ways:<br/>1. Hydro Electricity: Generated from fast-flowing water, which is a renewable resource. India has many multi-purpose river projects like Bhakra Nangal and Damodar Valley Corporation.<br/>2. Thermal Electricity: Generated by burning fossil fuels like coal, petroleum, and natural gas, which are non-renewable resources."
            ]}
        ]
      },
      {
        id: '13',
        title: "Non-Conventional Sources of Energy",
        content: [
            { type: 'paragraph', text: "There is a pressing need to shift towards renewable energy to ensure our future energy security and protect the environment from the problems caused by fossil fuels." },
            { type: 'list', items: [
                "<strong>13.1 Nuclear or Atomic Energy:</strong> Energy is released by altering the structure of atoms. This creates heat, which is used to generate electric power. Uranium and Thorium are used. Ores are found in Jharkhand, the Aravalli ranges of Rajasthan, and the Monazite sands of Kerala.",
                "<strong>13.2 Solar Energy:</strong> As a tropical country, India has enormous possibilities for using solar energy. Photovoltaic technology directly converts sunlight into electricity. It is becoming very popular in rural and remote areas, reducing dependence on firewood and dung cakes.",
                "<strong>13.3 Wind Power:</strong> India has great potential for wind power. The largest wind farm cluster is in Tamil Nadu, from Nagarcoil to Madurai. Other states with important wind farms include Andhra Pradesh, Karnataka, Gujarat, Kerala, and Maharashtra.",
                "<strong>13.4 Biogas:</strong> Shrubs, farm waste, and animal and human waste are used to produce gas for domestic consumption through decomposition. 'Gobar gas plants' use cattle dung and provide both energy and improved manure.",
                "<strong>13.5 Tidal Energy:</strong> Energy is generated from oceanic tides. Floodgate dams are built across inlets to trap water during high tide, which is then released through a turbine. Ideal locations include the Gulf of Khambhat, Gulf of Kuchchh, and the Gangetic delta.",
                "<strong>13.6 Geothermal Energy:</strong> This uses heat from the Earth's interior. Groundwater absorbs this heat, becomes steam, and drives turbines. Experimental projects are in the Parvati valley (Himachal Pradesh) and Puga Valley (Ladakh)."
            ]}
        ]
      },
      {
        id: '14',
        title: "Conservation of Energy Resources",
        content: [
            { type: 'heading', text: "The Need for Conservation:" },
            { type: 'list', items: [
                "Energy is a basic requirement for economic development. As our country has developed, our energy consumption has been steadily rising.",
                "There is an urgent need for a sustainable path of energy development.",
                "India is currently one of the least energy-efficient countries in the world. We must use our limited resources judiciously."
            ]},
            { type: 'heading', text: "How Can We Conserve Energy?" },
            { type: 'list', items: [
                "As concerned citizens, we can:",
                "Use public transport instead of individual vehicles.",
                "Switch off electricity when it's not in use.",
                "Use power-saving devices.",
                "Make greater use of non-conventional sources of energy."
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 5: Minerals and Energy Resources",
    tocTitle: "Table of Contents",
    metaDescription: "Class 10 Geography Chapter 5 'Minerals and Energy Resources' ke Hinglish notes. Khanijon ke prakar, Bharat mein vitaran, aur urja sansadhanon ke baare mein jaanein. CBSE students ke liye Vardaan Learning Institute dwara.",
    sections: [
      {
        id: '1',
        title: "Introduction to Minerals",
        content: [
          { type: 'paragraph', text: "Hum apni rozmarra ki zindagi mein jo kuch bhi istemal karte hain, woh khanijon se juda hua hai. Chhoti si pin se lekar badi imaraton, jahazon, caron, buson aur hawai jahazon tak, sabhi khanijon se bane hain. Yahan tak ki jin sadkon par hum safar karte hain aur jin machinery ka hum istemal karte hain, woh bhi khanijon se hi banti hain. Hamare वाहनों aur udyogon ko shakti dene wali urja bhi prithvi mein paye jane wale sansadhanon se aati hai. Manushya ne vikas ke har charan mein apni aajivika, sajavat, tyoharon aur dharmik anushthanon ke liye khanijon ka istemal kiya hai. Hairani ki baat hai ki jo bhojan hum khate hain, usmein bhi avashyak khanij hote hain." },
          { type: 'heading', text: "What is a Mineral?" },
          { type: 'list', items: [
              'Geologists, jo chattanon aur khanijon ka adhyayan karte hain, ek khanij ko "ek samangi, prakritik roop se paya jane wala padarth jiska ek paribhashit aantarik sanrachna ho" ke roop mein paribhashit karte hain.',
              '"Samangi" ka matlab hai ki padarth har jagah ek jaisa hai.',
              '"Prakritik roop se paya jane wala" ka matlab hai ki yeh prakriti mein paya jaata hai aur manushya dwara nahi banaya gaya hai.',
              'Khanij kai alag-alag roopon mein aate hain, sabse kathor heere se lekar sabse naram talc tak.'
          ]},
          { type: 'heading', text: "Minerals in Everyday Life: The Example of Toothpaste" },
           { type: 'list', items: [
              "Kya aap jante hain ki aapke toothpaste mein kai khanij hote hain?",
              "<strong>Cleaning Minerals:</strong> Abrasive (halke khurdure) khanij jaise silica, chuna patthar, aur aluminium oxide aapke daanton ko saaf karne mein madad karte hain.",
              "<strong>Cavity Prevention:</strong> Fluoride, jo cavities ko kam karne mein madad karta hai, fluorite नामक khanij se aata hai.",
              "<strong>Whitening:</strong> Adhiktar toothpaste ka safed rang titanium oxide se aata hai, jo rutile, ilmenite, aur anatase jaise khanijon se nikala jaata hai.",
              "<strong>Sparkle:</strong> Kuch toothpastes mein chamak mica ke karan hoti hai.",
              "Yahan tak ki plastic tube aur toothbrush bhi petroleum se bane hote hain, jo ek urja sansadhan hai."
          ]},
           { type: 'heading', text: "Minerals and Our Bodies" },
           { type: 'list', items: [
              "Sabhi jeevit cheezon ko khanijon ki avashyakta hoti hai. Jeevan prakriyaएं khanijon ke bina nahi ho sakti.",
              "Halaanki khanij hamare dwara upbhog kiye jane wale poshak tatvon ka केवल 0.3% hissa hain, ve atyant mahatvapurna hain.",
              "Is chhoti si matra ke bina, hamara sharir hamare dwara khaye gaye bhojan ke anya 99.7% hisse ka upyog nahi kar payega."
          ]}
        ]
      },
      {
        id: '2',
        title: "Understanding Rocks and Minerals",
        content: [
            { type: 'list', items: [
                "Chattanein (Rocks) khanijon ka mishran hoti hain.",
                "Kuch chattanein, jaise chuna patthar (limestone), sirf ek hi khanij se bani hoti hain.",
                "Halaanki, adhikansh chattanein alag-alag matra mein kai alag-alag khanijon se bani hoti hain.",
                "Bale hi 2000 se adhik khanijon ki pehchan ki ja chuki hai, lekin unmein se kewal kuch hi aam taur par adhikansh chattanon mein paye jaate hain."
            ]},
            { type: 'heading', text: "Khanij itne vividh kyun hote hain?" },
            { type: 'list', items: [
                "Ek vishesh khanij ka nirman uske banne ke samay maujood bhautik aur rasayanik paristhitiyon par nirbhar karta hai.",
                "In paristhitiyon ke parinamaswaroop khanijon mein rang, kathorta, crystal roop, chamak (lustre), aur ghanatva (density) ki ek vistrit shreni hoti hai. Geologists in gunon ka upyog khanijon ko alag karne aur unhe vargikrit karne ke liye karte hain."
            ]},
            { type: 'heading', text: "Geographers aur Geologists dwara Khanijon ka Adhyayan" },
            { type: 'list', items: [
                "Geographers khanijon ka adhyayan prithvi ki papdi (crust) ke ek hisse ke roop mein karte hain taaki ve sthalakritiyon (landforms) ko behtar dhang se samajh sakein. Ve khanij sansadhanon ke vitaran aur unse judi aarthik gatividhiyon mein bhi ruchi rakhte hain.",
                "Doosri or, ek Geologist khanijon ke nirman, unki aayu, aur unki bhautik aur rasayanik sanrachna mein adhik ruchi rakhta hai."
            ]}
        ]
      },
      {
        id: '3',
        title: "Classification of Minerals",
        content: [
            { type: 'paragraph', text: "Samanya aur vyavsayik uddeshyon ke liye, khanijon ko teen mukhya shreniyon mein samuhit kiya ja sakta hai." },
            { type: 'list', items: [
                "<strong>Metallic Minerals:</strong> In khanijon mein dhaatu hoti hai. Inhe aage vibhajit kiya gaya hai:<br/>a) Ferrous Minerals: Inmein loha hota hai. (Udहारण: Lauh ayask, manganese, nickel, cobalt).<br/>b) Non-Ferrous Minerals: Inmein lohe ke alawa anya dhaatuएं hoti hain. (Udहारण: Tamba, sheesha, tin, bauxite).<br/>c) Precious Minerals: Ye mulyavan dhaatuएं hain. (Udहारण: Sona, chandi, platinum).",
                "<strong>Non-Metallic Minerals:</strong> In khanijon mein dhaatu nahi hoti hai. (Udहारण: Mica, namak, potash, sulphur, chuna patthar, sangmarmar).",
                "<strong>Energy Minerals:</strong> Inka upyog urja utpadan ke liye kiya jaata hai. (Udहारण: Koyla, petroleum, prakritik gas)."
            ]}
        ]
      },
      {
        id: '4',
        title: "How and Where Are Minerals Found?",
        content: [
            { type: 'paragraph', text: 'Khanij aam taur par chattanon mein "ayaskon" (ores) ke roop mein paye jaate hain. Ek ayask ek khanij ka anya tatvon ke saath mishran hota hai. Kisi khanij ke khanan ke liye, use ayask mein paryapt matra mein hona chahiye taaki prakriya labhdayak ya "vyavsayik roop se vyavhary" ho. Khanij aam taur par in paanch roopon mein paye jaate hain:' },
            { type: 'list', items: [
                "<strong>In Igneous and Metamorphic Rocks:</strong> Khanij in chattanon ki dararon, bhranshon aur jodon mein paye ja sakte hain. Chhote nikshepon ko 'veins' aur badon ko 'lodes' kaha jaata hai. Ve tab bante hain jab taral ya gas roop mein khanij prithvi ke gehre hisson se upar dhakele jaate hain. Jaise hi ve upar uthte hain aur satah ke kareeb aate hain, ve thande hokar thos ho jaate hain. (Udहारण: Tin, tamba, jasta, aur sheesha).",
                "<strong>In Sedimentary Rocks:</strong> In chattanon mein kai khanij parton ya teh mein paye jaate hain. Ve tab bane jab padarth kshaitij parton mein jama, sanchit aur kendrit hue. Koyla aur kuch prakar ke lauh ayask is tarah se lambe samay tak adhik garmi aur dabav mein bane. Anya avsadi khanij jaise gypsum, potash namak, aur sodium namak vashpikaran se bante hain, vishesh roop se shushk (arid) kshetron mein.",
                "<strong>Through Decomposition of Surface Rocks:</strong> Yeh tab hota hai jab satah ki chattanein toot jaati hain aur ghulansheel hisse bah jaate hain, jisse apakshayit padarth ka ek dher bach jaata hai jismein ayask hote hain. Bauxite, vah ayask jisse hum aluminum prapt karte hain, isi tarah se banta hai.",
                "<strong>As Alluvial or 'Placer' Deposits:</strong> Ye khanij ghati ke tal ki ret aur pahadiyon ke aadhar mein paye jaate hain. In nikshepon ko 'placer deposits' kaha jaata hai, jinmein aise khanij hote hain jo paani se aasani se sanrakshit nahi hote. (Udहारण: Sona, chandi, tin, aur platinum).",
                "<strong>In Ocean Waters:</strong> Mahasagaron mein khanijon ki vishal matra hoti hai, lekin ve aksar itne phaile hue hote hain ki aarthik roop se upyogi nahi hote. Halaanki, samanya namak, magnesium, aur bromine bade paimane par samudra ke paani se liye jaate hain. Samudra tal bhi manganese nodules se samriddh hai."
            ]},
            { type: 'heading', text: "Interesting Fact: Rat-Hole Mining" },
            { type: 'paragraph', text: "Bharat ke adhikansh hisson mein, khanij rashtriyakrit hain, jiska arth hai ki ve sarkar ke hain, aur nishkarshan ke liye anumati ki avashyakta hoti hai. Halaanki, uttar-purvi Bharat ke adivasi kshetron mein, khanij aksar vyaktiyon ya samudayon ke svamitva mein hote hain. Meghalaya mein, jahan koyla aur chuna patthar ke bade bhandar hain, koyla khanan parivar ke sadasyon dwara lambi, sankri surangon mein kiya jaata hai jise 'Rat-hole' mining ke roop mein jaana jaata hai. National Green Tribunal ne in gatividhiyon ko avaidh ghoshit kar diya hai."}
        ]
      },
      {
        id: '5',
        title: "Distribution of Minerals in India",
        content: [
            { type: 'paragraph', text: "Bharat mein khanij sansadhanon ki ek samriddh vividhata hai, lekin ve desh bhar mein asaman roop se vitarit hain. Yeh bhugarbhiya sanrachna aur un prakriyaon mein antar ke karan hai jinhone in khanijon ko laakhon varshon mein banaya." },
            { type: 'list', items: [
                "<strong>Peninsular Rocks:</strong> Bharat ke koyla, dhaatvik khanij, mica, aur kai anya gair-dhaatvik khanijon ke adhikansh bhandar yahan paye jaate hain.",
                "<strong>Gujarat and Assam:</strong> Praydweep ke pashchimi aur purvi hisson mein in rajyon ki avsadi chattanon mein adhikansh petroleum nikshep hain.",
                "<strong>Rajasthan:</strong> Yahan kai gair-lauh khanijon ke bhandar hain.",
                "<strong>North Indian Plains:</strong> Uttar Bharat ke vishal samatal maidan lagbhag poori tarah se aarthik khanijon se rahit hain."
            ]},
            { type: 'paragraph', text: "Kisi khanij nikshep ke khadan banne ke liye, uski aarthik vyavharyata (kya khanan karna labhdayak hai) mahatvapurna hai. Yeh ayask mein khanij ki sandrata, nishkarshan ki sugamata, aur bazar se uski nikatata par nirbhar karta hai."}
        ]
      },
      {
        id: '6',
        title: "Ferrous Minerals",
        content: [
            { type: 'paragraph', text: "In khanijon mein loha hota hai aur ye dhaatvik khanij utpadan ke kul mulya ka lagbhag teen-chauthai hissa banate hain. Ve dhaatu-karmi udyogon ke liye ek majboot aadhar pradan karte hain." },
            { type: 'heading', text: "6.1 Iron Ore" },
            { type: 'list', items: [
                "Lauh ayask sabse buniyadi khanij hai aur ise audyogik vikas ki reedh mana jaata hai. Bharat mein uchch gunavatta wale lauh ayask ki badi matra hai.",
                "<strong>Types of Iron Ore:</strong><br/>- Magnetite: Yeh sabse uttam gunavatta wala lauh ayask hai, jismein 70% tak loha hota hai. Ismein utkrisht chumbakiya gun hote hain, jo ise vidyut udyog ke liye bahut mulyavan banate hain.<br/>- Hematite: Yeh matra ke mamle mein audyogik upyog ke liye sabse mahatvapurna lauh ayask hai. Ismein thoda kam loha (50-60%) hota hai.",
                "2018-19 mein, lagbhag sabhi lauh ayask utpadan (97%) Odisha, Chhattisgarh, Karnataka, aur Jharkhand se hua."
            ]},
             { type: 'heading', text: "Major Iron Ore Belts in India:" },
             { type: 'list', items: [
                "<strong>Odisha-Jharkhand Belt:</strong> Uchch shreni ka hematite ayask Badampahar khadanon (Odisha) aur Gua aur Noamundi khadanon (Jharkhand) mein paya jaata hai.",
                "<strong>Durg-Bastar-Chandrapur Belt (Chhattisgarh and Maharashtra):</strong> Bastar, Chhattisgarh ki Bailadila pahadiyon mein bahut uchch shreni ka hematite ayask hai. Yeh ayask steel banane ke liye ekdam sahi hai aur Vishakhapatnam bandargah ke madhyam se Japan aur South Korea ko niryat kiya jaata hai.",
                "<strong>Ballari-Chitradurga-Chikkamagaluru-Tumakuru Belt (Karnataka):</strong> Is belt mein lauh ayask ke bade bhandar hain. Kudremukh khadan 100% niryat ikai hain, aur unke nikshep duniya ke sabse badon mein se hain. Ayask ko ek pipeline ke madhyam se Mangaluru ke paas ek bandargah tak slurry (ek ardh-taral mishran) ke roop mein le jaya jaata hai.",
                "<strong>Maharashtra-Goa Belt:</strong> Ismein Goa aur Maharashtra ka Ratnagiri jila shamil hai. Halaanki ayask uchchatam gunavatta ka nahi hai, lekin iska kushalata se khanan kiya jaata hai aur Marmagao bandargah ke madhyam se niryat kiya jaata hai."
             ]},
             { type: 'heading', text: "6.2 Manganese" },
             { type: 'paragraph', text: "<strong>Uses:</strong> Manganese ka upyog mukhya roop se steel aur ferro-manganese mishradhatu banane ke liye kiya jaata hai. Ek tan steel banane ke liye lagbhag 10 kg manganese ki avashyakta hoti hai. Iska upyog bleaching powder, keetnashak aur paints banane mein bhi kiya jaata hai."}
        ]
      },
      {
        id: '7',
        title: "Non-Ferrous Minerals",
        content: [
            { type: 'paragraph', text: "Bharat mein gair-lauh khanijon ke bade bhandar ya uchch utpadan nahi hai, lekin ve dhaatu-karmi, engineering, aur vidyut udyogon ke liye bahut mahatvapurna hain." },
            { type: 'heading', text: "7.1 Copper" },
            { type: 'list', items: [
                "Bharat mein tambe ke bhandar aur utpadan mein gambhir kami hai.",
                "<strong>Properties:</strong> Tamba malleable (patli chadar mein peeta ja sakta hai), ductile (taaron mein kheencha ja sakta hai), aur vidyut ka achha sanchalak hai.",
                "<strong>Uses:</strong> Iske gunon ke karan, iska upyog mukhya roop se vidyut cable, electronics, aur rasayanik udyogon mein kiya jaata hai.",
                "<strong>Leading Producers:</strong> Madhya Pradesh ki Balaghat khadan, Rajasthan ki Khetri khadan, aur Jharkhand ka Singhbhum jila."
            ]},
            { type: 'heading', text: "7.2 Bauxite" },
            { type: 'list', items: [
                "<strong>Source of Aluminum:</strong> Halaanki aluminum kai ayaskon mein paya jaata hai, yah mukhya roop se bauxite se prapt kiya jaata hai, jo ek mitti jaisa padarth hai.",
                "<strong>Formation:</strong> Bauxite nikshep un chattanon ke vighatan se bante hain jo aluminum silicates se samriddh hain.",
                "<strong>Properties of Aluminum:</strong> Yah lohe ki tarah majboot hai lekin atyant halka bhi hai. Yah vidyut ka achha sanchalak hai aur bahut malleable hai.",
                "<strong>Major Deposits in India:</strong> Amarkantak pathar, Maikal pahadiyon, aur Bilaspur-Katni ke pathari kshetra mein paya jaata hai.",
                "<strong>Largest Producer:</strong> Odisha 2018-19 mein sabse bada bauxite utpadak rajya tha. Koraput jile mein Panchpatmali nikshep rajya mein sabse mahatvapurna hain."
            ]}
        ]
      },
      {
        id: '8',
        title: "Non-Metallic and Rock Minerals",
        content: [
            { type: 'heading', text: "8.1 Mica" },
            { type: 'list', items: [
                "<strong>Properties:</strong> Mica ek khanij hai jo patli parton ya pattiyon ki ek shrinkhala se bana hota hai jo aasani se bahut patli sheeton mein vibhajit ho jaati hain. Ye sheetein itni patli ho sakti hain ki ek hazaar ko kewal kuch centimeter unchi sheet mein parat kiya ja sakta hai. Ismein utkrisht di-electric shakti, kam shakti haani karak, mahan insulating gun hote hain, aur yah uchch voltage ka pratirodh kar sakta hai. Yah saaf, kala, hara, lal, peela, ya bhura ho sakta hai.",
                "<strong>Uses:</strong> Yah vidyut aur electronic udyogon ke liye sabse avashyak khanijon mein se ek hai.",
                "<strong>Major Deposits in India:</strong> Chota Nagpur pathar ka uttari kinara. Jharkhand ka Koderma-Gaya-Hazaribagh belt pramukh utpadak hai. Rajasthan mein Ajmer ke aas-paas. Andhra Pradesh mein Nellore mica belt."
            ]},
            { type: 'heading', text: "8.2 Limestone (Rock Mineral)" },
            { type: 'list', items: [
                "<strong>Composition:</strong> Chuna patthar avsadi chattanon mein paya jaata hai aur calcium carbonates ya calcium aur magnesium carbonates se bana hota hai.",
                "<strong>Uses:</strong> Yah cement udyog ke liye buniyadi kachcha maal hai aur blast furnace mein lauh ayask ko pighlane ke liye avashyak hai."
            ]}
        ]
      },
      {
        id: '9',
        title: "Hazards of Mining",
        content: [
            { type: 'paragraph', text: "Khanan ka khanikon ke swasthya aur paryavaran par gambhir nakaratmak prabhav pad sakta hai." },
            { type: 'list', items: [
                "<strong>Health Risks for Miners:</strong> Khanik lagatar dhool aur hanikarak dhuein mein saans lete hain, jisse pulmonary rog (phephdon ke rog) ho sakte hain.",
                "<strong>Safety Risks:</strong> Koyla khadanon mein khadan ki chhaton ke girne, badh (inundation), aur aag lagne ka lagatar khatra bana rehta hai.",
                "<strong>Environmental Impact:</strong> Khanan kshetra mein jal sroton ko pradooshit karta hai. Kachra aur slurry ke dumping se bhoomi aur mitti ka ksharan hota hai aur nadiyon aur saritaon mein pradooshan badhta hai."
            ]},
            { type: 'paragraph', text: "Khanan ko 'killer industry' banne se rokne ke liye kathor suraksha niyam aur paryavaran kanoonon ka karyanvayan avashyak hai."}
        ]
      },
      {
        id: '10',
        title: "Conservation of Minerals",
        content: [
            { type: 'heading', text: "Why is it important?" },
            { type: 'list', items: [
                "Khanij sansadhan seemit aur anavinikarniya hain. Unhe banne mein laakhon saal lagte hain, lekin hum unhe bahut tezi se upbhog kar rahe hain.",
                "Karyaksham khanij nikshep prithvi ki papdi ka kewal ek chhota sa hissa (1%) banate hain.",
                "Jaise-jaise hum khanijon ke liye gehrai mein khodte hain, nishkarshan ki lagat badhti jaati hai, aur ayask ki gunavatta aksar kam ho jaati hai."
            ]},
            { type: 'heading', text: "How can we conserve minerals?" },
            { type: 'list', items: [
                "Khanij sansadhanon ka niyojit aur satat tarike se upyog karein.",
                "Kam shreni ke ayaskon ka kam lagat par upyog karne ke liye behtar takneekon ka vikas karein.",
                "Dhaatuon ka punarchakran, scrap dhaatuon ka upyog, aur anya vikalpon ka upyog mahatvapurna kadam hain."
            ]}
        ]
      },
       {
        id: '11',
        title: "Energy Resources",
        content: [
            { type: 'paragraph', text: "Sabhi gatividhiyon ke liye urja ki avashyakta hoti hai—khana pakane, roshni, garmi, parivahan, aur udyogon ko chalane ke liye. Urja sansadhanon ko paramparagat aur gair-paramparagat sroton ke roop mein vargikrit kiya ja sakta hai." },
            { type: 'heading', text: "11.1 Conventional Sources of Energy" },
            { type: 'list', items: [
                "Ye urja ke paramparagat srot hain jo lambe samay se istemal kiye ja rahe hain.",
                "Udहारण: Lakdi, gobar ke uple, koyla, petroleum, prakritik gas, aur bijli (jal aur taap dono).",
                "Gramin Bharat mein, lakdi aur gobar ke uple gharon ki 70% se adhik urja avashyaktaon ko poora karte hain. Halaanki, ise hatotsahit kiya jaata hai kyunki isse vanon ki katai hoti hai aur mulyavan khad ka upyog hota hai jise kheti mein istemal kiya ja sakta hai."
            ]},
            { type: 'heading', text: "11.2 Non-Conventional Sources of Energy" },
            { type: 'list', items: [
                "Ye urja ke naye srot hain.",
                "Udहारण: Saur, pawan, jvariya, bhootapiya urja, biogas, aur paramanu urja."
            ]}
        ]
      },
       {
        id: '12',
        title: "Detailed Look at Conventional Sources",
        content: [
            { type: 'heading', text: "12.1 Coal" },
            { type: 'list', items: [
                "<strong>Formation:</strong> Koyla ek jeevashm indhan hai jo laakhon varshon mein vanaspati padarth ke dabav se banta hai.",
                "<strong>Importance:</strong> Yah Bharat ka sabse prachur matra mein uplabdh jeevashm indhan hai aur desh ki urja avashyaktaon ka ek bada hissa pradan karta hai.",
                "<strong>Types of Coal:</strong><br/>- Peat: Ismein kam carbon aur adhik nami hoti hai, jisse iski ushma kshamata kam hoti hai.<br/>- Lignite: Ek nimn shreni ka bhura koyla, naram aur adhik nami wala. Mukhya bhandar Tamil Nadu ke Neyveli mein hain aur iska upyog bijli utpadan ke liye kiya jaata hai.<br/>- Bituminous Coal: Vyavsayik upyog ke liye sabse lokpriya koyla. Metallurgical koyla ek uchch shreni ka bituminous koyla hai jiska upyog blast furnace mein lohe ko pighlane ke liye kiya jaata hai.<br/>- Anthracite: Sabse uchch gunavatta wala kathor koyla.",
                "<strong>Location:</strong> Bharat mein, koyla do mukhya bhugarbhik shail shrinkhalaon mein paya jaata hai:<br/>- Gondwana (200 million varsh se अधिक purana): Damodar ghati (Pashchim Bangal-Jharkhand) mein paya jaata hai, jismein Jharia, Raniganj, aur Bokaro jaise pramukh koyla kshetra shamil hain. Godavari, Mahanadi, Son, aur Wardha ghatiyon mein bhi paya jaata hai.<br/>- Tertiary (lagbhag 55 million varsh purana): Uttar-purvi rajyon Meghalaya, Assam, Arunachal Pradesh, aur Nagaland mein paya jaata hai.",
                "Koyla ek sthool padarth hai jo upyog karne par apna vajan kho deta hai (yah raakh mein badal jaata hai). Is karan se, bhari udyog aur taap vidyut sanyantra koyla kshetron par ya unke paas sthit hote hain."
            ]},
            { type: 'heading', text: "12.2 Petroleum" },
            { type: 'list', items: [
                "<strong>Importance:</strong> Petroleum (ya khanij tel) koyla ke baad Bharat mein doosra pramukh urja srot hai. Yah garmi aur roshni ke liye indhan, snehak, aur kai vinirman udyogon ke liye kachcha maal pradan karta hai. Petroleum refineries synthetic textile, urvarak, aur rasayanik udyogon ke liye ek 'nodal industry' ke roop mein kaam karti hain.",
                "<strong>Occurrence:</strong> Bharat mein adhikansh petroleum tertiary yug ki chattan sanrachnaon mein anticlines aur fault traps mein paya jaata hai. Tel sarandhri chattan parton (jaise chuna patthar ya balua patthar) mein gair-sarandhri parton ke beech phansa hota hai. Gas, halki hone ke karan, aam taur par tel ke upar payi jaati hai.",
                "<strong>Major Production Areas:</strong> Mumbai High (offshore field), Gujarat (Ankeleshwar sabse mahatvapurna kshetra hai), aur Assam (Bharat ka sabse purana tel utpadak rajya), jismein Digboi, Naharkatiya, aur Moran-Hugrijan jaise kshetra hain."
            ]},
            { type: 'heading', text: "12.3 Natural Gas" },
            { type: 'list', items: [
                 "<strong>Importance:</strong> Petroleum nikshepon ke saath paya jane wala ek paryavaran anukool indhan. Iska upyog gharelu aur audyogik indhan ke roop mein, bijli sanyantron mein, rasayanik udyogon mein kachche maal ke roop mein, aur parivahan indhan (CNG) aur rasoi indhan (PNG) ke roop mein kiya jaata hai.",
                 "<strong>Major Reserves:</strong> Mumbai High, pashchimi tat par sahayogi kshetra, Cambay Basin, aur Krishna-Godavari basin.",
                 "<strong>Infrastructure:</strong> 1,700 km lambi Hazira-Vijaipur-Jagdishpur (HVJ) pipeline ek bada kadam tha jisne pashchimi aur uttari Bharat mein gas kshetron ko bazaron se joda."
            ]},
            { type: 'heading', text: "12.4 Electricity" },
            { type: 'list', items: [
                "Prati vyakti bijli ki khapat ko vikas ka ek soochak mana jaata hai.",
                "Bijli mukhya roop se do tarikon se utpann ki jaati hai:<br/>1. Hydro Electricity: Tezi se behte paani se utpann, jo ek navinikarniya sansadhan hai. Bharat mein Bhakra Nangal aur Damodar Valley Corporation jaise kai bahu-uddeshiya nadi pariyojanaएं hain.<br/>2. Thermal Electricity: Koyla, petroleum, aur prakritik gas jaise jeevashm indhanon ko jalakar utpann, jo anavinikarniya sansadhan hain."
            ]}
        ]
      },
      {
        id: '13',
        title: "Non-Conventional Sources of Energy",
        content: [
            { type: 'paragraph', text: "Bhavishya ki urja suraksha sunishchit karne aur paryavaran ko jeevashm indhanon se hone wali samasyaon se bachane ke liye navinikarniya urja ki or badhne ki sakht avashyakta hai." },
            { type: 'list', items: [
                "<strong>13.1 Nuclear or Atomic Energy:</strong> Parmanuon ki sanrachna mein parivartan karke urja mukt ki jaati hai. Isse garmi paida hoti hai, jiska upyog vidyut shakti utpann karne ke liye kiya jaata hai. Uranium aur Thorium ka upyog kiya jaata hai. Ayask Jharkhand, Rajasthan ki Aravalli shrinkhalaon, aur Kerala ki Monazite ret mein paye jaate hain.",
                "<strong>13.2 Solar Energy:</strong> Ek ushnakatibandhiya desh hone ke naate, Bharat mein saur urja ka upyog karne ki apar sambhavnayein hain. Photovoltaic takneek soorya ke prakash ko seedhe bijli mein parivartit karti hai. Yah gramin aur doorasth kshetron mein bahut lokpriya ho raha hai, jisse lakdi aur gobar ke uplon par nirbharata kam ho rahi hai.",
                "<strong>13.3 Wind Power:</strong> Bharat mein pawan urja ki badi kshamata hai. Sabse bada pawan farm cluster Tamil Nadu mein Nagarcoil se Madurai tak hai. Anya rajyon mein Andhra Pradesh, Karnataka, Gujarat, Kerala, aur Maharashtra shamil hain.",
                "<strong>13.4 Biogas:</strong> Jhadiyan, khet ka kachra, aur pashu aur manav avashisht ka upyog decomposition ke madhyam se gharelu upbhog ke liye gas utpann karne ke liye kiya jaata hai. 'Gobar gas plants' pashu gobar ka upyog karte hain aur kisan ko urja aur behtar gunavatta wali khad dono ka laabh pradan karte hain.",
                "<strong>13.5 Tidal Energy:</strong> Samudri jwaron se urja utpann ki jaati hai. Pravesh dwaron par floodgate baandh banaye jaate hain. Uchch jwar ke dauran, paani andar behta hai aur fans jaata hai. Jab jwar girta hai, to phanse hue paani ko ek power-generating turbine wale pipe ke madhyam se chhod diya jaata hai. Adarsh sthanon mein Gujarat mein Khambhat ki khadi, Kuchchh ki khadi, aur Sundarban kshetra shamil hain.",
                "<strong>13.6 Geothermal Energy:</strong> Yah prithvi ke aantarik bhag se garmi ka upyog karke utpann ki gayi garmi aur bijli ko sandarbhit karta hai. Un kshetron mein jahan prithvi kam gehrai par adhik garm ho jaati hai, bhoojal is garmi ko avshoshit kar leta hai, garm ho jaata hai, aur bhaap ke roop mein satah par uthta hai. Is bhaap ka upyog turbine chalane ke liye kiya jaata hai. Prayogik pariyojanaएं Parvati ghati (Himachal Pradesh) aur Puga ghati (Ladakh) mein hain."
            ]}
        ]
      },
      {
        id: '14',
        title: "Conservation of Energy Resources",
        content: [
            { type: 'heading', text: "The Need for Conservation:" },
            { type: 'list', items: [
                "Urja aarthik vikas ke liye ek buniyadi avashyakta hai. Jaise-jaise hamara desh viksit hua hai, hamari urja ki khapat lagatar badh rahi hai.",
                "Urja vikas ke ek satat path ki avashyakta hai.",
                "Bharat vartaman mein duniya ke sabse kam urja-daksh deshon mein se ek hai. Hamein apne seemit sansadhanon ka vivekpoorn upyog karna chahiye."
            ]},
            { type: 'heading', text: "How Can We Conserve Energy?" },
            { type: 'list', items: [
                "Ek chintit nagrik ke roop mein, hum kar sakte hain:",
                "Niji vahanon ke bajaye sarvajanik parivahan ka upyog karein.",
                "Jab upyog mein na ho to bijli band kar dein.",
                "Urja bachane wale upkaranon ka upyog karein.",
                "Gair-paramparagat urja sroton ka adhik se adhik upyog karein."
            ]}
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

// --- ICONS ---
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

// Up Arrow Icon for Back to Top button
const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
    </svg>
);

// --- DYNAMIC CONTENT RENDERERS ---
const ColumnsComponent = ({ content }) => {
  	return (
  	 	<div className="flex flex-col md:flex-row gap-6 my-4 items-start">
  	 	 	{content.map((column, index) => (
  	 	 	 	<div key={index} style={{ flexBasis: column.width || 'auto' }}>
  	 	 	 	 	<ContentRenderer content={column.items} />
  	 	 	 	</div>
  	 	 	))}
  	 	</div>
  	);
};


// The ContentRenderer component dynamically renders content blocks based on their type.
const ContentRenderer = ({ content }) => {
  if (!content) return null;

  return content.map((item, index) => {
  	switch (item.type) {
  	  case 'paragraph':
  	 	return <p key={index} className="text-[var(--theme-text-color)] mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }}></p>;
  	  case 'heading':
  	 	return <h4 key={index} className="text-xl font-semibold mt-6 mb-3 text-[var(--theme-heading-color)]" dangerouslySetInnerHTML={{ __html: item.text }}></h4>;
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
  	  case 'image':
  	 	return (
  	 	 	<figure key={index} className="w-full my-4 aspect-square">
  	 	 	 	<img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-lg shadow-md" />
  	 	 	</figure>
  	 	);
  	  case 'columns':
  	 	return <ColumnsComponent key={index} content={item.content} />;
  	  default:
  	 	return null;
  	}
  });
};

// --- UI COMPONENTS ---
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
  	 	backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.8)' : themes[theme].cssVars['--theme-toc-bg']
  	};
  	 	if (theme.endsWith('D')) { // check for dark themes
  	 	 	tocStyles.backgroundColor = isMobile ? 'rgba(31, 41, 55, 0.8)' : themes[theme].cssVars['--theme-toc-bg'];
  	}


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

const BackToTopButton = ({ theme, isMobile }) => {
    const [isVisible, setIsVisible] = useState(false);

    // This function will be called when the user scrolls
    const toggleVisibility = () => {
        // The button becomes visible if the user has scrolled more than 300 pixels down
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // This function will be called when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This makes the scrolling smooth
        });
    };

    // Set up an event listener for the scroll event
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component is unmounted
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            // Adjust position based on whether it's mobile view to avoid overlap
            right: isMobile ? '104px' : '24px', 
            zIndex: 30,
            transition: 'opacity 0.3s, transform 0.3s',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            pointerEvents: isVisible ? 'auto' : 'none',
        }}>
            <button
                onClick={scrollToTop}
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
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                aria-label="Go to top"
            >
                <UpArrowIcon />
            </button>
        </div>
    );
};


// Main App Component
function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '1': true, '2': true, '5': true, '6': true, '7': true, '10': true });
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
  	 	} else if (window.scrollY < 200) {
            setActiveSection(allSectionIds[0]);
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
  
  // Structured Data for SEO
  const structuredData = {
  	"@context": "https://schema.org",
  	"@type": "Article",
    "learningResourceType": "Course",
    "inLanguage": language,
  	"mainEntityOfPage": {
  	  "@type": "WebPage",
  	  "@id": "https://vardaanlearning.com/notes/cbse-class-10-geography-minerals-energy-resources" // Replace with the actual URL
  	},
  	"headline": currentContent.chapterTitle,
  	"description": currentContent.metaDescription,
  	"image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1756377644/1_xbn6vu.jpg",  // A representative image
  	"author": {
  	  "@type": "EducationalOrganization",
  	  "name": "Vardaan Learning Institute"
  	},
  	"publisher": {
  	  "@type": "EducationalOrganization",
  	  "name": "Vardaan Learning Institute",
  	  "logo": {
  	 	"@type": "ImageObject",
  	 	"url": "https://vardaanlearning.com/logo.png" // Replace with your logo URL
  	  }
  	},
  	"datePublished": "2025-08-28",
  	"dateModified": "2025-08-28"
  };

  return (
  	<>
  	  <Helmet>
  	 	<title>{`${currentContent.chapterTitle} - Class 10 Geography Notes | Vardaan Learning`}</title>
  	 	<meta name="description" content={currentContent.metaDescription} />
  	 	<meta name="keywords" content="Class 10 Geography, Minerals and Energy Resources, Types of Minerals, Ferrous Minerals, Non-Ferrous Minerals, Conventional Energy, Non-Conventional Energy, CBSE Notes, NCERT Solutions, Vardaan Learning Institute" />
        <link rel="canonical" href="https://vardaanlearning.com/notes/cbse-class-10-geography-minerals-energy-resources" />
  	 	<script type="application/ld+json">
  	 	  {JSON.stringify(structuredData)}
  	 	</script>
  	  </Helmet>
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
  	 	<aside className="hidden lg:block w-full lg:w-72 xl:w-80 flex-shrink-0">
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
  	 	</aside>
  	 	 
  	 	{/* Main Content */}
  	 	<main className="w-full min-w-0">
  	 	 	<article className="p-4 sm:p-6 md:p-8">
  	 	 	 	{currentContent.sections.map((section) => (
  	 	 	 	 	<section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[80px]">
  	 	 	 	 	 	<div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
  	 	 	 	 	 	 	<h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
  	 	 	 	 	 	 	<ContentRenderer content={section.content} />
  	 	 	 	 	 	 	{section.subSections && section.subSections.map((subSection, index) => (
  	 	 	 	 	 	 	 	<section key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[80px]">
  	 	 	 	 	 	 	 	 	 <h3 className="heading-font text-2xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-2 border-[var(--theme-heading-border)]">{subSection.title}</h3>
  	 	 	 	 	 	 	 	 	 <ContentRenderer content={subSection.content} />
  	 	 	 	 	 	 	 	</section>
  	 	 	 	 	 	 	))}
  	 	 	 	 	 	</div>
  	 	 	 	 	</section>
  	 	 	 	))}
  	 	 	</article>
  	 	</main>

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
  	 	 	 	 	onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
  	 	 	 	 	onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
  	 	 	 	 	onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
  	 	 	 	 	onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
  	 	 	 	 	aria-label="Open Table of Contents"
  	 	 	 	>
  	 	 	 	 	<MenuIcon />
  	 	 	 	</button>
  	 	 	</div>
  	 	)}
        <BackToTopButton theme={theme} isMobile={isMobile} />
  	  </div>
  	</>
  );
}

export default App;
