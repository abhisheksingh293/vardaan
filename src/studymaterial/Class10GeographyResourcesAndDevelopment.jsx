import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 1: Resources and Development",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "What is a Resource? ",
        content: [
          { type: 'paragraph', text: 'A <strong>resource</strong> is everything available in our environment that can be used to satisfy our needs.' },
          { type: 'paragraph', text: 'For something to be considered a resource, it must meet three conditions:' },
          { type: 'list', items: ['<strong>Technologically Accessible:</strong> We must have the technology to get and use it.', '<strong>Economically Feasible:</strong> It should be affordable to obtain and use it.', '<strong>Culturally Acceptable:</strong> Our society must approve of its use.'] }
        ],
        subSections: [
            { id: '1a', title: 'The Human Role in Resources', content: [
                { type: 'paragraph', text: 'It is a common mistake to think that resources are <strong>free gifts of nature</strong>, but they are not.'},
                { type: 'paragraph', text: 'Resources are a function of <strong>human activities</strong>. Human beings are essential components of resources because we are the ones who transform materials found in nature into useful resources and then use them.'},
                { type: 'paragraph', text: 'The process of transforming things in our environment involves an interactive relationship between <strong>Nature (Physical Environment), Technology, and Institutions</strong>. Human beings are at the center of this relationship. We use technology to interact with nature and create institutions (like governments and companies) to speed up our economic development.'}
            ]}
        ]
      },
      {
        id: '2',
        title: "Classification of Resources",
        content: [
            { type: 'paragraph', text: 'Resources can be classified in different ways to help us understand them better. The main types are <strong>Natural</strong> and <strong>Human</strong>.'}
        ],
        subSections: [
            { id: '2a', title: 'On the Basis of Origin (Where they come from)', content: [{ type: 'list', items: ['<strong>Biotic Resources:</strong> These are obtained from the biosphere and have life.', '<strong>Abiotic Resources:</strong> These are all the resources composed of non-living things.']}]},
            { id: '2b', title: 'On the Basis of Exhaustibility (How quickly they run out)', content: [
                { type: 'paragraph', text: '<strong>Renewable Resources:</strong> These are resources that can be renewed or reproduced by physical, chemical, or mechanical processes.'},
                { type: 'list', items: ['<strong>Continuous or Flow Resources:</strong> These are always available. Examples include wind and water.', '<strong>Biological Resources:</strong> These are living things that can reproduce. Examples include natural vegetation (like forests) and wildlife.']},
                { type: 'paragraph', text: '<strong>Non-Renewable Resources:</strong> These resources form over a very long geological time (millions of years) and cannot be renewed quickly.'},
                { type: 'list', items: ['<strong>Recyclable Resources:</strong> These can be used again after processing. An example is metals.', '<strong>Non-Recyclable Resources:</strong> These cannot be recycled and get exhausted with their use. An example is fossil fuels.']}
            ]},
            { id: '2c', title: 'On the Basis of Ownership (Who owns them)', content: [{ type: 'list', items: ['<strong>Individual Resources:</strong> These are owned privately by individuals.', '<strong>Community-Owned Resources:</strong> These are accessible to all the members of a community.', '<strong>National Resources:</strong> Technically, all the resources within the political boundaries of a country belong to the nation.', '<strong>International Resources:</strong> These are resources that do not belong to any single country and are regulated by international institutions.']}]},
            { id: '2d', title: 'On the Basis of the Status of Development (How much they have been developed)', content: [{ type: 'list', items: ['<strong>Potential Resources:</strong> Resources that are found in a region but have not been utilized.', '<strong>Developed Resources:</strong> Resources which are surveyed and their quality and quantity have been determined for utilization.', '<strong>Stock:</strong> These are materials in the environment that have the potential to satisfy human needs, but we do not have the appropriate technology to access them.', '<strong>Reserves:</strong> These are the subset of the stock which can be put into use with the help of existing technical \'know-how\' but their use has not been started. These are kept for future requirements.']}]},
            { id: '2e', title: 'Human Resources', content: [
                { type: 'paragraph', text: 'Human beings themselves are essential components of resources. Human resources can be looked at in terms of:'},
                { type: 'list', items: ['<strong>Structures and Institutions:</strong> The organizations and systems humans create.', '<strong>Quantity and Quality:</strong> The population size and the skills and health of the people.']}
            ]}
        ]
      },
      {
        id: '3',
        title: "Development of Resources and Its Problems 📉",
        content: [
          { type: 'paragraph', text: 'Resources are vital for human survival and for maintaining a good quality of life.' },
          { type: 'paragraph', text: 'However, humans have used resources indiscriminately (without thinking about the future), believing they were free gifts of nature. This has led to major problems:' },
          { type: 'list', items: ['Depletion of resources for satisfying the greed of a few individuals.', 'Accumulation of resources in a few hands, which has divided society into \'haves\' (rich) and \'have-nots\' (poor).', 'Global Ecological Crises from the indiscriminate exploitation of resources. Examples include global warming, ozone layer depletion, environmental pollution, and land degradation.'] }
        ],
        subSections: [
            { id: '3a', title: 'Sustainable Development', content: [
                { type: 'paragraph', text: 'An <strong>equitable distribution</strong> (fair sharing) of resources has become essential for a sustained quality of life and global peace.'},
                { type: 'paragraph', text: 'If the current trend of resource depletion by a few individuals and countries continues, the future of our planet is in danger. This is why <strong>resource planning</strong> is essential for the sustainable existence of all forms of life.'},
                { type: 'paragraph', text: 'Sustainable Development is the key idea here.'},
                { type: 'infoBox', color: 'green', content: '<strong>Definition of Sustainable Development:</strong> It means that development should take place without damaging the environment, and development in the present should not compromise with the needs of the future generations.'}
            ]}
        ]
      },
      {
        id: '4',
        title: "The Earth Summit and Agenda 21 ",
        content: [],
        subSections: [
            { id: '4a', title: 'Rio de Janeiro Earth Summit, 1992', content: [
                { type: 'paragraph', text: 'In <strong>June 1992</strong>, more than 100 heads of state met in Rio de Janeiro, Brazil, for the first International Earth Summit.'},
                { type: 'paragraph', text: '<strong>Purpose:</strong> The Summit was held to address urgent problems of environmental protection and socio-economic development at the global level.'},
                { type: 'paragraph', text: '<strong>Outcomes:</strong> The leaders signed the Declaration on Global Climatic Change and Biological Diversity, endorsed the global Forest Principles, and adopted Agenda 21 for achieving Sustainable Development in the 21st century.'}
            ]},
            { id: '4b', title: 'Agenda 21', content: [
                { type: 'paragraph', text: '<strong>What it is:</strong> It is a declaration signed by world leaders in 1992 at the United Nations Conference on Environment and Development (UNCED), which took place at Rio de Janeiro, Brazil.'},
                { type: 'paragraph', text: '<strong>Main Goal:</strong> It aims at achieving global sustainable development.'},
                { type: 'paragraph', text: '<strong>How it works:</strong> It is an agenda to combat environmental damage, poverty, and disease through global co-operation on common interests, mutual needs and shared responsibilities.'},
                { type: 'paragraph', text: '<strong>Local Level Action:</strong> One major objective of Agenda 21 is that every local government should draw its own local Agenda 21.'}
            ]}
        ]
      },
      {
        id: '5',
        title: "Resource Planning in India 🇮🇳",
        content: [
            { type: 'paragraph', text: 'Resource planning is the widely accepted strategy for the wise and judicious (careful) use of resources.'},
            { type: 'paragraph', text: 'It is very important for a country like India, which has enormous diversity in the availability of resources.'},
            { type: 'paragraph', text: 'Some regions are rich in certain types of resources but are deficient in others.'},
            { type: 'paragraph', text: '<strong>Example:</strong> The states of Jharkhand, Chhattisgarh, and Madhya Pradesh are rich in minerals and coal deposits. Arunachal Pradesh has an abundance of water resources but lacks infrastructural development. The state of Rajasthan is very well endowed with solar and wind energy but lacks water resources. The cold desert of Ladakh is relatively isolated and has a very rich cultural heritage but is deficient in water, infrastructure, and some vital minerals.'},
            { type: 'paragraph', text: 'This is why <strong>balanced resource planning</strong> is needed at the national, state, regional, and local levels.'}
        ],
        subSections: [
            { id: '5a', title: 'The Process of Resource Planning in India', content: [
                { type: 'paragraph', text: 'Resource planning is a complex process involving three main steps:'},
                { type: 'list', items: [
                    '<strong>1. Identification and inventory of resources</strong> across the regions of the country. This involves surveying, mapping, and qualitative and quantitative estimation and measurement of the resources.',
                    '<strong>2. Evolving a planning structure</strong> with appropriate technology, skill, and institutional set up for implementing resource development plans.',
                    '<strong>3. Matching the resource development plans</strong> with overall national development plans.'
                ]},
                { type: 'paragraph', text: 'India has made concerted efforts for achieving the goals of resource planning right from the <strong>First Five Year Plan</strong> launched after Independence.'}
            ]},
            { id: '5b', title: 'Resources and Development', content: [
                { type: 'paragraph', text: 'Just having resources is not enough for development. A region also needs <strong>corresponding changes in technology and institutions</strong>.'},
                { type: 'paragraph', text: 'There are many regions in our country that are rich in resources but are included in economically backward regions. On the contrary, some regions have a poor resource base but are economically developed.'},
                { type: 'paragraph', text: '<strong>History shows this:</strong> The history of colonisation reveals that rich resources in colonies were the main attractions for foreign invaders. It was primarily the higher level of technological development of the colonising countries that helped them to exploit resources of other regions and establish their supremacy.'},
                { type: 'paragraph', text: 'Therefore, in India, development depends not only on the <strong>availability of resources</strong> but also on <strong>technology, the quality of human resources, and the historical experiences</strong> of the people.'}
            ]}
        ]
      },
      {
        id: '6',
        title: "Conservation of Resources ",
        content: [
          { type: 'paragraph', text: 'Resources are vital for any developmental activity, but <strong>irrational consumption and over-utilisation</strong> of resources may lead to socio-economic and environmental problems.' },
          { type: 'paragraph', text: 'To overcome these problems, <strong>resource conservation</strong> at various levels is important.' },
          { type: 'infoBox', color: 'blue', content: '<strong>Gandhiji\'s View:</strong> He was very skilled in voicing his concern about resource conservation in these words: "There is enough for everybody\'s need and not for any body\'s greed.". He placed the greedy and selfish individuals and the exploitative nature of modern technology as the root cause for resource depletion at the global level. He was against mass production and wanted to replace it with production by the masses.'}
        ],
        subSections: [
            { id: '6a', title: 'International Efforts for Conservation', content: [
                { type: 'list', items: ['<strong>1968:</strong> The Club of Rome advocated resource conservation for the first time in a more systematic way.', '<strong>1974:</strong> Gandhian philosophy was once again presented by Schumacher in his book "Small is Beautiful."', '<strong>1987:</strong> The Brundtland Commission Report made a significant contribution by introducing the concept of \'Sustainable Development\' and advocating it as a means for resource conservation. This was later published in a book titled <strong>"Our Common Future."</strong>.', '<strong>1992:</strong> Another significant contribution was made at the Earth Summit at Rio de Janeiro, Brazil.']}
            ]}
        ]
      },
      {
        id: '7',
        title: "Land Resources ",
        content: [
          { type: 'paragraph', text: 'We live on land, perform our economic activities on land, and use it in different ways. Thus, land is a natural resource of utmost importance.' },
          { type: 'paragraph', text: 'It supports natural vegetation, wildlife, human life, economic activities, and transport and communication systems.'},
          { type: 'paragraph', text: 'However, land is an asset of a finite magnitude, meaning there is a limited amount of it. Therefore, it is important to use the available land for various purposes with careful planning.'}
        ],
        subSections: [
            { id: '7a', title: 'Land Relief Features in India', content: [
                { type: 'paragraph', text: 'India has land under a variety of relief features:'},
                { type: 'list', items: ['<strong>Plains:</strong> 43% of the land area, which provides facilities for agriculture and industry.', '<strong>Mountains:</strong> 30% of the total surface area. They ensure the perennial flow of some rivers and provide facilities for tourism and ecological aspects.', '<strong>Plateaus:</strong> 27% of the area. This region possesses rich reserves of minerals, fossil fuels, and forests.']}]},
            { id: '7b', title: 'How Land is Used (Land Utilisation)', content: [
                { type: 'paragraph', text: 'Land resources are used for the following purposes:'},
                { type: 'list', items: [
                    'Forests.',
                    'Land not available for cultivation: Barren and waste land; Land put to non-agricultural uses (e.g., buildings, roads, factories).',
                    'Other uncultivated land (excluding fallow land): Permanent pastures and grazing land; Land under miscellaneous tree crops groves; Culturable waste land (left uncultivated for more than 5 agricultural years).',
                    'Fallow Lands: Current fallow (left for one or less than one agricultural year); Other than current fallow (left for 1 to 5 agricultural years).',
                    '<strong>Net Sown Area (NSA):</strong> The physical extent of land on which crops are sown and harvested.'
                ]},
                { type: 'paragraph', text: '<strong>Gross Cropped Area:</strong> This is the area sown more than once in an agricultural year plus the net sown area.'}
            ]},
            { id: '7c', title: 'Land Use Pattern in India', content: [
                { type: 'paragraph', text: 'The use of land is determined by both <strong>physical factors</strong> (like topography, climate, soil types) and <strong>human factors</strong> (like population density, technological capability, culture, and traditions).'},
                { type: 'paragraph', text: 'The total geographical area of India is <strong>3.28 million sq km</strong>. However, land use data is available for only <strong>93%</strong> of the total area.'},
                { type: 'paragraph', text: '<strong>Key Patterns:</strong><br/>• The land under permanent pasture has decreased.<br/>• Most of the "other than current fallow lands" are either of poor quality or the cost of cultivation is very high.<br/>• The pattern of Net Sown Area (NSA) varies greatly from one state to another. It is over 80% in Punjab and Haryana and less than 10% in Arunachal Pradesh, Mizoram, Manipur, and Andaman Nicobar Islands.<br/>• The forest area in the country is far lower than the desired <strong>33%</strong> of the geographical area, as outlined in the National Forest Policy (1952).'}
            ]}
        ]
      },
      {
        id: '8',
        title: "Land Degradation and Conservation ",
        content: [
          { type: 'paragraph', text: '<strong>Land Degradation</strong> is the result of continuous use of land over a long period without taking appropriate measures to conserve and manage it.' },
          { type: 'paragraph', text: 'Ninety-five percent of our basic needs for food, shelter, and clothing are obtained from land. Human activities have not only caused land degradation but have also accelerated the pace of natural forces to cause damage.'}
        ],
        subSections: [
            { id: '8a', title: 'Causes of Land Degradation', content: [
                { type: 'paragraph', text: '<strong>Human Activities:</strong>'},
                { type: 'list', items: [
                    'Deforestation, overgrazing, mining, and quarrying have contributed significantly to land degradation.',
                    '<strong>Mining:</strong> Mining sites are abandoned after work is complete, leaving deep scars. In states like Jharkhand, Chhattisgarh, Madhya Pradesh, and Odisha, deforestation due to mining has caused severe land degradation.',
                    '<strong>Overgrazing:</strong> In states like Gujarat, Rajasthan, Madhya Pradesh, and Maharashtra, overgrazing is one of the main reasons for land degradation.',
                    '<strong>Over-irrigation:</strong> In the states of Punjab, Haryana, and western Uttar Pradesh, over-irrigation is responsible for land degradation due to waterlogging, which leads to an increase in salinity and alkalinity in the soil.',
                    '<strong>Industrial Activities:</strong> Mineral processing (like grinding limestone for cement) generates huge quantities of dust, which settles on the land and retards the process of water infiltration into the soil. Industrial effluents (wastes) have become a major source of land and water pollution.'
                ]}
            ]},
            { id: '8b', title: 'Conservation Measures (How to Solve the Problem)', content: [
                { type: 'paragraph', text: 'There are many ways to solve the problems of land degradation:'},
                { type: 'list', items: [
                    'Afforestation and proper management of grazing.',
                    'Planting of shelter belts of plants.',
                    'Control on overgrazing.',
                    'Stabilisation of sand dunes by growing thorny bushes are methods to check land degradation in arid areas.',
                    'Proper management of waste lands, control of mining activities, and proper discharge and disposal of industrial effluents after treatment can reduce degradation in industrial and suburban areas.'
                ]}
            ]}
        ]
      },
      {
        id: '9',
        title: "Soil as a Resource ",
        content: [
          { type: 'paragraph', text: 'Soil is the most important renewable natural resource. It is the medium of plant growth and supports different types of living organisms on Earth.' },
          { type: 'paragraph', text: 'The soil is a <strong>living system</strong>. It takes millions of years to form soil up to a few cm in depth.'},
          { type: 'paragraph', text: '<strong>Factors in Soil Formation:</strong> Relief, parent rock or bedrock, climate, vegetation, other forms of life, and time are important factors.'},
          { type: 'paragraph', text: '<strong>Forces of Nature:</strong> Changes in temperature, actions of running water, wind, and glaciers, and activities of decomposers also contribute to soil formation.'},
          { type: 'paragraph', text: 'Soil consists of both organic (<strong>humus</strong>) and inorganic materials.'}
        ],
        subSections: [
            { id: '9a', title: 'Soil Profile', content: [
                { type: 'paragraph', text: 'A soil profile shows the different layers of soil from the surface down to the parent rock.'},
                { type: 'list', items: ['<strong>Topsoil:</strong> The upper soil layer.', '<strong>Subsoil:</strong> Weathered rocks, sand, and silt clay.', '<strong>Substratum:</strong> Weathered parent rock material.', '<strong>Unweathered Parent Bedrock:</strong> The solid rock layer at the bottom.']}
            ]}
        ]
      },
      {
        id: '10',
        title: "Classification of Soils in India ",
        content: [
            { type: 'paragraph', text: 'India has varied relief features, landforms, climatic realms, and vegetation types, which have contributed to the development of various types of soils.'}
        ],
        subSections: [
            { id: '10a', title: 'Alluvial Soils', content: [
                { type: 'paragraph', text: 'This is the most widely spread and important soil. In fact, the entire northern plains are made of alluvial soil.'},
                { type: 'paragraph', text: '<strong>Formation:</strong> They have been deposited by three important Himalayan river systems—the Indus, the Ganga, and the Brahmaputra.'},
                { type: 'paragraph', text: '<strong>Location:</strong> These soils also extend into Rajasthan and Gujarat through a narrow corridor. They are also found in the eastern coastal plains, particularly in the deltas of the Mahanadi, the Godavari, the Krishna, and the Kaveri rivers.'},
                { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>• Consists of various proportions of sand, silt, and clay.<br/>• Very fertile. Mostly, these soils contain adequate proportions of <strong>potash, phosphoric acid, and lime</strong>, which are ideal for the growth of sugarcane, paddy, wheat, and other cereal and pulse crops.'},
                { type: 'paragraph', text: '<strong>Types based on age:</strong><br/>• <strong>Bangar (Old Alluvial):</strong> Has a higher concentration of kanker nodules than the Khadar.<br/>• <strong>Khadar (New Alluvial):</strong> Has more fine particles and is more fertile than the bangar.'}
            ]},
            { id: '10b', title: 'Black Soil', content: [
                { type: 'paragraph', text: 'These soils are black in colour and are also known as <strong>regur soils</strong>.'},
                { type: 'paragraph', text: '<strong>Ideal for:</strong> Growing cotton and is also known as <strong>black cotton soil</strong>.'},
                { type: 'paragraph', text: '<strong>Location:</strong> This type of soil is typical of the Deccan trap (Basalt) region, is made up of lava flows, and is spread over the northwest Deccan plateau.'},
                { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>• Made up of extremely fine (clayey) material.<br/>• Well-known for their <strong>capacity to hold moisture</strong>.<br/>• Rich in soil nutrients like calcium carbonate, magnesium, potash, and lime.<br/>• They develop deep cracks during hot weather, which helps in the proper aeration of the soil.'}
            ]},
            { id: '10c', title: 'Red and Yellow Soils', content: [
                { type: 'paragraph', text: '<strong>Formation:</strong> Red soil develops on crystalline igneous rocks in areas of low rainfall.'},
                { type: 'paragraph', text: '<strong>Location:</strong> Found in the eastern and southern parts of the Deccan plateau.'},
                { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>• These soils develop a <strong>reddish colour</strong> due to the diffusion of iron in crystalline and metamorphic rocks.<br/>• It looks <strong>yellow</strong> when it occurs in a hydrated form.'}
            ]},
            { id: '10d', title: 'Laterite Soil', content: [
                { type: 'paragraph', text: '<strong>Name Origin:</strong> The name comes from the Latin word \'later\', which means brick.'},
                { type: 'paragraph', text: '<strong>Formation:</strong> This soil develops under a tropical and subtropical climate with an alternate wet and dry season. It is the result of <strong>intense leaching</strong> due to heavy rain.'},
                { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>• They are mostly deep to very deep, acidic (pH < 6.0), and generally deficient in plant nutrients.<br/>• They are prone to erosion and degradation.'},
                { type: 'paragraph', text: '<strong>Uses:</strong> After adopting appropriate soil conservation techniques, this soil is very useful for growing <strong>tea and coffee</strong>. Red laterite soils are more suitable for crops like <strong>cashew nut</strong>.'}
            ]},
            { id: '10e', title: 'Arid Soils', content: [
                { type: 'paragraph', text: '<strong>Color and Texture:</strong> Arid soils range from red to brown in colour. They are generally sandy in texture and saline in nature.'},
                { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>• In some areas, the salt content is very high.<br/>• Due to the dry climate and high temperature, the soil lacks humus and moisture.<br/>• The lower horizons are occupied by Kankar which restrict the infiltration of water.'},
                { type: 'paragraph', text: '<strong>Uses:</strong> After proper irrigation, these soils become cultivable, as has been the case in western Rajasthan.'}
            ]},
            { id: '10f', title: 'Forest Soils', content: [
                { type: 'paragraph', text: '<strong>Location:</strong> These soils are found in the hilly and mountainous areas where sufficient rain forests are available.'},
                { type: 'paragraph', text: '<strong>Characteristics:</strong><br/>• The soil texture varies according to the mountain environment. They are loamy and silty in valley sides and coarse-grained in the upper slopes.<br/>• In the snow-covered areas of the Himalayas, these soils are acidic with low humus content.<br/>• The soils found in the lower parts of the valleys are fertile.'}
            ]}
        ]
      },
      {
        id: '11',
        title: "Soil Erosion and Conservation ",
        content: [
          { type: 'paragraph', text: '<strong>Soil Erosion:</strong> The denudation of the soil cover and subsequent washing down is described as soil erosion.' },
          { type: 'paragraph', text: 'The processes of soil formation and erosion go on simultaneously, and generally, there is a balance between the two. This balance is sometimes disturbed by human activities (like deforestation, over-grazing, construction, and mining) and natural forces (like wind, glaciers, and water).'}
        ],
        subSections: [
            { id: '11a', title: 'Types of Soil Erosion', content: [
                { type: 'list', items: [
                    '<strong>Gully Erosion:</strong> Running water cuts through the clayey soils and makes deep channels known as gullies. The land becomes unfit for cultivation and is known as <strong>bad land</strong>. In the Chambal basin, such lands are called <strong>ravines</strong>.',
                    '<strong>Sheet Erosion:</strong> Sometimes water flows as a sheet over large areas down a slope. In such cases, the top soil is washed away. This is known as sheet erosion.',
                    '<strong>Wind Erosion:</strong> Wind blowing loose soil off flat or sloping land is known as wind erosion.'
                ]},
                { type: 'paragraph', text: 'Soil erosion is also caused by defective methods of farming, such as ploughing in a wrong way (up and down the slope), which forms channels for the quick flow of water.'}
            ]},
            { id: '11b', title: 'Soil Conservation Methods', content: [
                { type: 'list', items: [
                    '<strong>Contour Ploughing:</strong> Ploughing along the contour lines can decelerate (slow down) the flow of water down the slopes.',
                    '<strong>Terrace Cultivation:</strong> Steps can be cut out on the slopes, making terraces. Terrace cultivation restricts erosion. Western and central Himalayas have well-developed terrace farming.',
                    '<strong>Strip Cropping:</strong> Large fields can be divided into strips. Strips of grass are left to grow between the crops. This breaks up the force of the wind.',
                    '<strong>Shelter Belts:</strong> Planting lines of trees to create shelter also works in a similar way. Rows of such trees are called shelter belts. These shelter belts have contributed significantly to the stabilisation of sand dunes and in stabilising the desert in western India.'
                ]}
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 1: Resources and Development",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "What is a Resource? ",
        content: [
          { type: 'paragraph', text: 'Ek <strong>resource</strong> hamare environment mein available har woh cheez hai jise hamari zarooraton ko poora karne ke liye use kiya ja sakta hai. Kisi cheez ko resource maanne ke liye, usmein teen conditions honi chahiye:' },
          { type: 'list', items: ['<strong>Technologically Accessible:</strong> Hamare paas use haasil karne aur istemal karne ki technology honi chahiye.', '<strong>Economically Feasible:</strong> Use haasil karna aur istemal karna affordable hona chahiye.', '<strong>Culturally Acceptable:</strong> Hamari society uske use ko manzoori de.'] },
          { type: 'heading', text: '1.1 Resources mein Human Role'},
          { type: 'paragraph', text: 'Yeh sochna ek aam galti hai ki resources <strong>nature ke free gifts</strong> hain, lekin aisa nahi hai. Resources <strong>human activities</strong> ka ek function hain. Human beings resources ke essential components hain kyonki hum hi nature mein paaye jaane wale materials ko useful resources mein transform karte hain aur phir unhe use karte hain.'},
          { type: 'paragraph', text: 'Hamare environment mein cheezon ko transform karne ka process <strong>Nature (Physical Environment), Technology, aur Institutions</strong> ke beech ek interactive relationship shamil karta hai. Is relationship ke center mein human beings hain.'}
        ]
      },
      {
        id: '2',
        title: "Classification of Resources ",
        content: [
            { type: 'paragraph', text: 'Resources ko behtar samajhne ke liye unhe alag-alag tariko se classify kiya ja sakta hai. Main types hain <strong>Natural</strong> aur <strong>Human</strong>.'}
        ],
        subSections: [
            { id: '2a', title: '2.1 On the Basis of Origin', content: [{ type: 'list', items: ['<strong>Biotic Resources:</strong> Yeh biosphere se milte hain aur inmein life hoti hai.', '<strong>Abiotic Resources:</strong> Yeh sabhi resources non-living cheezon se bane hote hain.']}]},
            { id: '2b', title: '2.2 On the Basis of Exhaustibility', content: [
                { type: 'paragraph', text: '<strong>Renewable Resources:</strong> Yeh woh resources hain jinhe physical, chemical, ya mechanical processes se renew ya reproduce kiya ja सकता hai.'},
                { type: 'list', items: ['<strong>Continuous or Flow Resources:</strong> These are always available. Examples include wind and water.', '<strong>Biological Resources:</strong> These are living things that can reproduce. Examples include natural vegetation (like forests) and wildlife.']},
                { type: 'paragraph', text: '<strong>Non-Renewable Resources:</strong> Yeh resources bahut lambe geological time (laakhon saal) mein bante hain aur jaldi renew nahi ho sakte.'},
                { type: 'list', items: ['<strong>Recyclable Resources:</strong> These can be used again after processing. An example is metals.', '<strong>Non-Recyclable Resources:</strong> These cannot be recycled and get exhausted with their use. An example is fossil fuels.']}
            ]},
            { id: '2c', title: '2.3 On the Basis of Ownership', content: [{ type: 'list', items: ['<strong>Individual Resources:</strong> Yeh individuals dwara privately own kiye jaate hain.', '<strong>Community-Owned Resources:</strong> Yeh community ke sabhi members ke liye accessible hote hain.', '<strong>National Resources:</strong> Technically, ek desh ki political boundaries ke andar ke sabhi resources nation ke hote hain.', '<strong>International Resources:</strong> Yeh resources kisi ek desh ke nahi hote aur international institutions dwara regulate kiye jaate hain.']}]},
            { id: '2d', title: '2.4 On the Basis of the Status of Development', content: [{ type: 'list', items: ['<strong>Potential Resources:</strong> Ek region mein paaye jaane wale resources jinhe utilize nahi kiya gaya hai.', '<strong>Developed Resources:</strong> Aise resources jinka survey kiya gaya hai aur unki quality aur quantity utilisation ke liye determine ki gayi hai.', '<strong>Stock:</strong> Environment mein maujood materials jo human needs ko poora kar sakte hain, lekin hamare paas unhe access karne ke liye appropriate technology nahi hai.', '<strong>Reserves:</strong> Yeh stock ka woh subset hai jise maujooda technical know-how ki madad se use kiya ja sakta hai lekin unka use shuru nahi hua hai.']}]},
            { id: '2e', title: '2.5 Human Resources', content: [
                { type: 'paragraph', text: 'Human beings khud resources ke essential components hain. Human resources ko in terms mein dekha ja sakta hai:'},
                { type: 'list', items: ['<strong>Structures and Institutions:</strong> The organizations and systems humans create.', '<strong>Quantity and Quality:</strong> The population size and the skills and health of the people.']}
            ]}
        ]
      },
      {
        id: '3',
        title: "Development of Resources and Its Problems ",
        content: [
          { type: 'paragraph', text: 'Resources human survival aur ek achhi quality of life maintain karne ke liye vital hain. Lekin, humans ne resources ka indiscriminate use kiya hai, yeh maankar ki ve nature ke free gifts the. Isse badi problems hui hain:' },
          { type: 'list', items: ['Kuch individuals ki laalach ko poora karne ke liye resources ka depletion.', 'Resources ka kuch haathon mein jama ho jaana, jisse society \'haves\' (ameer) aur \'have-nots\' (gareeb) mein bant gayi hai.', 'Resources ke indiscriminate exploitation se Global Ecological Crises. Jaise global warming, ozone layer depletion, environmental pollution, aur land degradation.'] },
          { type: 'heading', text: '3.1 Sustainable Development'},
          { type: 'infoBox', color: 'green', content: '<strong>Sustainable Development ki Definition:</strong> Iska matlab hai ki development environment ko damage kiye bina hona chahiye, aur present mein development future generations ki zarooraton se compromise nahi karna chahiye.'}
        ]
      },
      {
        id: '4',
        title: "The Earth Summit and Agenda 21 ",
        content: [],
        subSections: [
            { id: '4a', title: '4.1 Rio de Janeiro Earth Summit, 1992', content: [{ type: 'paragraph', text: 'June 1992 mein, 100 se zyada heads of state Brazil ke Rio de Janeiro mein pehle International Earth Summit ke liye mile. Summit ka purpose global level par environmental protection aur socio-economic development ki zaroori problems ko address karna tha. Netaon ne Declaration on Global Climatic Change and Biological Diversity par sign kiya aur Sustainable Development haasil karne ke liye Agenda 21 ko apnaya.'}]},
            { id: '4b', title: '4.2 Agenda 21', content: [{ type: 'paragraph', text: 'Yeh 1992 mein UNCED mein vishwa netaon dwara sign kiya gaya ek declaration hai. Iska main goal global sustainable development haasil karna hai. Iska ek major objective yeh hai ki har local government apna local Agenda 21 banaye.'}]}
        ]
      },
      {
        id: '5',
        title: "Resource Planning in India 🇮🇳",
        content: [
            { type: 'paragraph', text: 'Resource planning resources ke wise aur judicious use ke liye widely accepted strategy hai. Yeh India jaise desh ke liye bahut important hai, jahan resources ki availability mein bahut diversity hai.'},
            { type: 'paragraph', text: '<strong>Example:</strong> Jharkhand, Chhattisgarh, aur Madhya Pradesh minerals mein rich hain. Arunachal Pradesh mein paani bahut hai lekin infrastructure ki kami hai. Rajasthan mein solar aur wind energy hai lekin paani ki kami hai. Isliye balanced resource planning zaroori hai.'}
        ],
        subSections: [
            { id: '5a', title: '5.1 The Process of Resource Planning in India', content: [{ type: 'paragraph', text: 'Resource planning ek complex process hai jismein teen main steps hain:<br/>1. Desh ke regions mein resources ki pehchan aur inventory (surveying, mapping, estimation).<br/>2. Resource development plans ko implement karne ke liye appropriate technology, skill, aur institutional set up ke saath ek planning structure develop karna.<br/>3. Resource development plans ko overall national development plans ke saath match karna.'}]},
            { id: '5b', title: '5.2 Resources and Development', content: [{ type: 'paragraph', text: 'Sirf resources hona development ke liye kaafi nahi hai. Ek region ko technology aur institutions mein bhi corresponding changes ki zaroorat hoti hai. Colonisation ki history batati hai ki colonies mein rich resources hi foreign invaders ke liye main attraction the. Unke higher level of technological development ne unhein resources ko exploit karne mein madad ki. Isliye, India mein development sirf resources ki availability par hi nahi, balki technology, human resources ki quality, aur historical experiences par bhi depend karta hai.'}]}
        ]
      },
      {
        id: '6',
        title: "Conservation of Resources ",
        content: [
          { type: 'paragraph', text: 'Resources kisi bhi developmental activity ke liye vital hain, lekin irrational consumption aur over-utilisation se socio-economic aur environmental problems ho sakti hain. In problems ko door karne ke liye, alag-alag levels par resource conservation important hai.' },
          { type: 'infoBox', color: 'blue', content: '<strong>Gandhiji ka Nazariya:</strong> Unhone kaha tha: "Har kisi ki zaroorat ke liye kaafi hai, lekin kisi ke laalach ke liye nahi." Unhone greedy individuals aur modern technology ke exploitative nature ko global level par resource depletion ka mool kaaran maana. Ve mass production ke khilaaf the aur use production by the masses se replace karna chahte the.'},
          { type: 'heading', text: '6.1 International Efforts for Conservation'},
          { type: 'list', items: ['<strong>1968:</strong> The Club of Rome ne resource conservation ki vakalat ki.', '<strong>1974:</strong> Schumacher ne apni book "Small is Beautiful" mein Gandhian philosophy pesh ki.', '<strong>1987:</strong> Brundtland Commission Report ne \'Sustainable Development\' ka concept introduce kiya.', '<strong>1992:</strong> Rio de Janeiro mein Earth Summit mein ek aur mahatvapurna yogdaan diya gaya.']}
        ]
      },
      {
        id: '7',
        title: "Land Resources ",
        content: [
          { type: 'paragraph', text: 'Land ek atyant mahatvapurna natural resource hai. Yeh natural vegetation, wildlife, human life, aur economic activities ko support karta hai. Lekin, land ek finite magnitude ka asset hai, isliye iska istemal careful planning ke saath karna zaroori hai.' }
        ],
        subSections: [
            { id: '7a', title: '7.1 Land Relief Features in India', content: [{ type: 'list', items: ['<strong>Plains:</strong> 43% land area, agriculture aur industry ke liye.', '<strong>Mountains:</strong> 30% area, nadiyon, tourism, aur ecology ke liye.', '<strong>Plateaus:</strong> 27% area, minerals, fossil fuels, aur forests mein rich.']}]},
            { id: '7b', title: '7.2 How Land is Used (Land Utilisation)', content: [{ type: 'paragraph', text: 'Land resources in cheezon ke liye use hote hain: Forests, Kheti ke liye anuplabdh zameen (banjar zameen, gair-krishi upyog), Anya uncultivated zameen (charagah, vriksh faslein), Fallow Lands, aur Net Sown Area (NSA).'}]},
            { id: '7c', title: '7.3 Land Use Pattern in India', content: [{ type: 'paragraph', text: 'Land ka use physical factors (topography, climate) aur human factors (population, technology) dono se determine hota hai. India ka total geographical area 3.28 million sq km hai, lekin data sirf 93% ke liye available hai. Desh mein forest area National Forest Policy (1952) dwara nirdharit 33% se bahut kam hai.'}]}
        ]
      },
      {
        id: '8',
        title: "Land Degradation and Conservation ",
        content: [
          { type: 'paragraph', text: '<strong>Land Degradation</strong> lambe samay tak zameen ka lagatar istemal karne aur use conserve aur manage karne ke liye uchit upay na karne ka parinaam hai. Human activities ne natural forces ki gati ko bhi tez kar diya hai jisse nuksaan hota hai.' }
        ],
        subSections: [
            { id: '8a', title: '8.1 Causes of Land Degradation', content: [{ type: 'list', items: ['<strong>Deforestation, overgrazing, mining, aur quarrying.</strong>', '<strong>Over-irrigation</strong> Punjab aur Haryana jaise rajyon mein waterlogging aur salinity badhata hai.', '<strong>Industrial Activities:</strong> Mineral processing se dhool paida hoti hai, aur industrial wastes zameen aur paani ko pollute karte hain.']}]},
            { id: '8b', title: '8.2 Conservation Measures', content: [{ type: 'list', items: ['Afforestation aur grazing ka proper management.', 'Shelter belts lagana.', 'Overgrazing par control.', 'Thorny bushes uga kar sand dunes ka stabilisation.', 'Waste lands ka proper management aur mining activities par control.']}]}
        ]
      },
      {
        id: '9',
        title: "Soil as a Resource ",
        content: [
          { type: 'paragraph', text: 'Soil sabse important renewable natural resource hai. Yeh plant growth ka medium hai aur Earth par alag-alag tarah ke living organisms ko support karta hai. Soil ek <strong>living system</strong> hai. Kuch cm gehri mitti banne mein laakhon saal lag jaate hain.' },
          { type: 'heading', text: '9.1 Soil Profile'},
          { type: 'paragraph', text: 'Ek soil profile mitti ki alag-alag layers dikhata hai: Topsoil, Subsoil, Substratum, aur Unweathered Parent Bedrock.'}
        ]
      },
      {
        id: '10',
        title: "Classification of Soils in India ",
        content: [],
        subSections: [
            { id: '10a', title: '10.1 Alluvial Soils', content: [{ type: 'paragraph', text: 'Sabse zyada faili hui aur important soil, northern plains mein paayi jaati hai. Indus, Ganga, aur Brahmaputra nadiyon dwara jama ki gayi. Bahut upjau aur ganne, dhaan, aur gehu ke liye ideal. Age ke aadhar par do types: <strong>Bangar</strong> (Old Alluvial) aur <strong>Khadar</strong> (New Alluvial).'}]},
            { id: '10b', title: '10.2 Black Soil', content: [{ type: 'paragraph', text: 'Ise <strong>regur soils</strong> ya <strong>black cotton soil</strong> bhi kehte hain. Deccan trap region ki typical. Bahut mahin clayey material se bani hoti hai aur moisture hold karne ki capacity ke liye jaani jaati hai.'}]},
            { id: '10c', title: '10.3 Red and Yellow Soils', content: [{ type: 'paragraph', text: 'Kam barish wale ilakon mein crystalline igneous rocks par develop hoti hai. Deccan plateau ke eastern aur southern hisson mein paayi jaati hai. Iron ke diffusion ke kaaran iska rang laal hota hai.'}]},
            { id: '10d', title: '10.4 Laterite Soil', content: [{ type: 'paragraph', text: 'Tropical climate mein alternate wet aur dry season ke under develop hoti hai. Bhaari barish ke kaaran intense leaching ka parinaam hai. Chai aur coffee ugane ke liye upyogi hai.'}]},
            { id: '10e', title: '10.5 Arid Soils', content: [{ type: 'paragraph', text: 'Rang mein laal se bhure tak, aam taur par sandy aur saline. Humus aur moisture ki kami hoti hai. Proper irrigation ke baad, yeh mitti kheti yogy ho jaati hai.'}]},
            { id: '10f', title: '10.6 Forest Soils', content: [{ type: 'paragraph', text: 'Pahadi aur parvatiya ilakon mein paayi jaati hai. Valley sides mein loamy aur silty aur upari dhalanon par mote daane wali. Ghaatiyon ke nichle hisson mein upjau.'}]}
        ]
      },
      {
        id: '11',
        title: "Soil Erosion and Conservation ",
        content: [
          { type: 'paragraph', text: '<strong>Soil Erosion:</strong> Soil cover ka hatna aur baad mein beh jaana soil erosion kehlata hai. Yeh balance kabhi-kabhi human activities aur natural forces se disturb ho jaata hai.' }
        ],
        subSections: [
            { id: '11a', title: '11.1 Types of Soil Erosion', content: [{ type: 'list', items: ['<strong>Gully Erosion:</strong> Behta paani gehri channels banata hai jinhe gullies kehte hain. Zameen kheti ke liye anupयुक्त ho jaati hai aur ise <strong>bad land</strong> kehte hain.', '<strong>Sheet Erosion:</strong> Paani ek sheet ke roop mein bade ilakon par behta hai, jisse upari mitti beh jaati hai.', '<strong>Wind Erosion:</strong> Hawa dwara dheeli mitti ko uda le jaana.']}]},
            { id: '11b', title: '11.2 Soil Conservation Methods', content: [{ type: 'list', items: ['<strong>Contour Ploughing:</strong> Contour lines ke saath ploughing karke paani ke bahav ko dheema karna.', '<strong>Terrace Cultivation:</strong> Dhalanon par steps kaat kar erosion ko rokna.', '<strong>Strip Cropping:</strong> Fasal ke beech ghaas ki pattiyan chhodna taaki hawa ka zor kam ho.', '<strong>Shelter Belts:</strong> Pedon ki katarein lagakar shelter banana.']}]}
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
function ResourcesDevelopmentChapter() {
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

export default ResourcesDevelopmentChapter;
