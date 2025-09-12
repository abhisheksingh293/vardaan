import React, { useState, useEffect, useRef } from 'react';

// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 2: Is Matter Around Us Pure?",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "What Does \"Pure\" Mean in Science?",
        content: [
          { type: 'paragraph', text: `While in everyday language "pure" might mean something is unadulterated (like <i>pure ghee</i>), in a scientific context, a <strong>pure substance</strong> has a much stricter definition:` },
          { type: 'list', items: [
            'It consists of only <strong>one type of particle</strong>.',
            'All of its constituent particles are <strong>chemically identical</strong>.',
            'It has a <strong>definite, fixed composition</strong> and consistent properties.'
          ]},
          { type: 'infoBox', color: 'blue', content: 'For example, milk is a <strong>mixture</strong> of water, fats, and proteins, not a pure substance in the scientific sense.'}
        ]
      },
      {
        id: '2',
        title: "Mixtures",
        content: [
          { type: 'paragraph', text: 'A <strong>mixture</strong> is formed when two or more substances (elements or compounds) are physically combined in any proportion.' },
          { type: 'subheading', text: '🔹 Characteristics of Mixtures:' },
          { type: 'list', items: [
            'The components <strong>retain their original properties</strong>.',
            'They can be separated using <strong>physical methods</strong> (like filtration, evaporation).',
            'The composition is <strong>variable</strong>.'
          ]},
          { type: 'paragraph', text: '<strong>Examples:</strong> Saltwater, soil, air, soft drinks.' },
          { type: 'heading', text: 'Types of Mixtures' },
          { type: 'paragraph', text: 'Mixtures are classified as either homogeneous or heterogeneous.'},
          { type: 'table', headers: ['Type', 'Homogeneous Mixture (Solution)', 'Heterogeneous Mixture'], rows: [
            ['<strong>Composition</strong>', 'Uniform throughout.', 'Non-uniform.'],
            ['<strong>Visibility</strong>', 'Components are not visibly distinguishable.', 'Components are visibly distinct.'],
            ['<strong>Examples</strong>', 'Salt in water, sugar in water, air.', 'Oil and water, sand and iron filings.']
          ]},
          { type: 'infoBox', color: 'green', content: '🔬 <strong>Activity 2.1 Conclusion:</strong> When different groups mixed varying amounts of substances like copper sulphate in water, it demonstrated that mixtures can have <strong>variable compositions</strong>. Some formed homogeneous solutions, while others with insoluble substances formed heterogeneous mixtures.'}
        ]
      },
      {
        id: '3',
        title: "Solutions",
        content: [
          { type: 'paragraph', text: 'A <strong>solution</strong> is a <strong>homogeneous mixture</strong> of two or more substances.' },
          { type: 'list', items: [
            '<strong>Solvent:</strong> The component present in the larger amount that does the dissolving.',
            '<strong>Solute:</strong> The component present in the smaller amount that gets dissolved.'
          ]},
          { type: 'subheading', text: '🔹 Examples of Solutions:' },
          { type: 'table', headers: ['Type', 'Solute', 'Solvent', 'Example'], rows: [
            ['Solid in Liquid', 'Salt', 'Water', 'Salt solution'],
            ['Gas in Liquid', 'Carbon dioxide', 'Water', 'Soda water'],
            ['Liquid in Liquid', 'Alcohol', 'Water', 'Vinegar'],
            ['Gas in Gas', 'Oxygen, Argon', 'Nitrogen', 'Air'],
            ['Solid in Solid', 'Zinc', 'Copper', 'Brass (an alloy)']
          ]},
          { type: 'infoBox', color: 'orange', content: '⚠️ <strong>Alloys</strong> like brass are solid solutions but are considered mixtures because they show the properties of their constituents and can have variable composition.'},
          { type: 'subheading', text: '🔹 Properties of a Solution:' },
          { type: 'list', items: [
            'It is a homogeneous mixture.',
            'The particle size is extremely small (&lt; 1 nm in diameter) and cannot be seen with the naked eye.',
            'It does not scatter a beam of light, meaning it <strong>does not show the Tyndall effect</strong>.',
            'It is stable; the solute particles do not settle down.',
            'Components cannot be separated by filtration.'
          ]},
        ],
        subSections: [
            {
                id: '3a',
                title: 'Concentration of a Solution',
                content: [
                    { type: 'paragraph', text: 'This describes the amount of solute present in a given amount of solution or solvent.'},
                    { type: 'list', items: [
                        '<strong>Dilute:</strong> A solution with a small amount of solute.',
                        '<strong>Concentrated:</strong> A solution with a large amount of solute.',
                        '<strong>Unsaturated Solution:</strong> More solute can be dissolved at a given temperature.',
                        '<strong>Saturated Solution:</strong> The maximum amount of solute has been dissolved at a given temperature.',
                        '<strong>Solubility:</strong> The amount of solute required to form a saturated solution in a given quantity of solvent at a specific temperature.'
                    ]},
                    { type: 'infoBox', color: 'green', content: '🔬 <strong>Activity 2.3 Conclusion:</strong> The amount of salt and sugar that can be dissolved in water is different at the same temperature. <strong>Heating increases the solubility</strong> of solids in liquids.'},
                    { type: 'subheading', text: 'Ways to Express Concentration:'},
                    { type: 'formulaBox', name: 'Mass by mass %', numerator: 'Mass of solute', denominator: 'Mass of solution' },
                    { type: 'formulaBox', name: 'Mass by volume %', numerator: 'Mass of solute', denominator: 'Volume of solution' },
                    { type: 'formulaBox', name: 'Volume by volume %', numerator: 'Volume of solute', denominator: 'Volume of solution' },
                ]
            },
            {
                id: '3b',
                title: 'Numericals on Concentration',
                content: [
                    { type: 'heading', text: 'Problem 1:'},
                    { type: 'paragraph', text: 'A solution contains 40 g of common salt in 320 g of water. Calculate the concentration in terms of mass by mass percentage of the solution.'},
                    { type: 'infoBox', color: 'blue', content: `<strong>Solution:</strong><br/>
                        Mass of solute (salt) = 40 g<br/>
                        Mass of solvent (water) = 320 g<br/>
                        Mass of solution = 40 g + 320 g = 360 g<br/>
                        Mass percentage = (40 / 360) × 100 = <strong>11.1%</strong>`},
                    { type: 'heading', text: 'Problem 2:'},
                    { type: 'paragraph', text: 'To make a saturated solution, 36 g of sodium chloride is dissolved in 100 g of water at 293 K. Find its concentration at this temperature.'},
                    { type: 'infoBox', color: 'blue', content: `<strong>Solution:</strong><br/>
                        Mass of solute (sodium chloride) = 36 g<br/>
                        Mass of solvent (water) = 100 g<br/>
                        Mass of solution = 36 g + 100 g = 136 g<br/>
                        Mass percentage = (36 / 136) × 100 = <strong>26.47%</strong>`},
                    { type: 'heading', text: 'Problem 3:'},
                    { type: 'paragraph', text: 'What mass of potassium nitrate would be needed to produce a saturated solution of potassium nitrate in 50 grams of water at 313 K? (Given solubility of Potassium Nitrate at 313 K is 62 g per 100 g of water).'},
                    { type: 'infoBox', color: 'blue', content: `<strong>Solution:</strong><br/>
                        At 313 K, 100 g of water dissolves 62 g of potassium nitrate.<br/>
                        Therefore, the mass of potassium nitrate needed for 50 g of water is:<br/>
                        Mass = (62 g / 100 g) × 50 g = <strong>31 g</strong>`},
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Suspensions",
        content: [
          { type: 'paragraph', text: 'A <strong>suspension</strong> is a <strong>heterogeneous mixture</strong> where solid particles are spread throughout a liquid without dissolving.' },
          { type: 'subheading', text: '🔹 Properties of a Suspension:' },
          { type: 'list', items: [
            'It is heterogeneous.',
            'Particles are large enough to be visible to the naked eye.',
            'It <strong>scatters light (shows the Tyndall effect)</strong>.',
            'It is unstable; particles settle down over time.',
            'Components can be separated by <strong>filtration</strong>.'
          ]},
          { type: 'paragraph', text: '<strong>Examples:</strong> Chalk powder in water, sand in water.' },
        ]
      },
      {
        id: '5',
        title: "Colloidal Solutions (Colloids)",
        content: [
          { type: 'paragraph', text: 'A <strong>colloid</strong> is a mixture where the particles are intermediate in size between those of a solution and a suspension. It appears homogeneous but is actually heterogeneous.' },
          { type: 'list', items: [
            '<strong>Dispersed Phase:</strong> The solute-like component.',
            '<strong>Dispersion Medium:</strong> The solvent-like component.'
          ]},
          { type: 'subheading', text: '🔹 Properties of a Colloid:' },
          { type: 'list', items: [
            'Appears homogeneous but is heterogeneous.',
            'It is stable; particles do not settle.',
            'It is large enough to <strong>scatter light (shows the Tyndall effect)</strong>.',
            'Components cannot be separated by filtration but can be separated by <strong>centrifugation</strong>.'
          ]},
          { type: 'infoBox', color: 'blue', content: '🔸 <strong>The Tyndall Effect</strong> is the scattering of a beam of light by colloidal particles. This is why you can see a sunbeam entering a foggy or dusty room.'},
          { type: 'subheading', text: '🔹 Common Examples of Colloids:' },
          { type: 'table', headers: ['Dispersed Phase', 'Dispersion Medium', 'Type', 'Examples'], rows: [
            ['Liquid', 'Gas', 'Aerosol', 'Fog, mist, clouds'],
            ['Solid', 'Gas', 'Aerosol', 'Smoke, vehicle exhaust'],
            ['Gas', 'Liquid', 'Foam', 'Shaving cream'],
            ['Liquid', 'Liquid', 'Emulsion', 'Milk, face cream'],
            ['Solid', 'Liquid', 'Sol', 'Mud, milk of magnesia'],
            ['Gas', 'Solid', 'Foam', 'Sponge, pumice stone'],
            ['Liquid', 'Solid', 'Gel', 'Jelly, cheese, butter'],
            ['Solid', 'Solid', 'Solid Sol', 'Coloured gemstones']
          ]}
        ]
      },
       {
        id: '6',
        title: "Physical vs. Chemical Changes",
        content: [
          { type: 'table', headers: ['Basis', 'Physical Change', 'Chemical Change'], rows: [
            ['<strong>New Substance</strong>', 'No new substance is formed.', 'A new substance with new properties is formed.'],
            ['<strong>Reversibility</strong>', 'Generally reversible.', 'Generally irreversible.'],
            ['<strong>Properties</strong>', 'Chemical properties do not change.', 'The new substance has entirely new properties.'],
            ['<strong>Examples</strong>', 'Melting ice, boiling water, tearing paper.', 'Burning wood, rusting of iron, cooking food.']
          ]},
          { type: 'infoBox', color: 'orange', content: '🔸 <strong>Burning of a candle</strong> involves both: the melting of wax is a <strong>physical change</strong>, while the burning of the wax is a <strong>chemical change</strong>.'}
        ]
      },
      {
        id: '7',
        title: "Types of Pure Substances",
        content: [
          { type: 'paragraph', text: 'Pure substances are classified into elements and compounds.'}
        ],
        subSections: [
            {
                id: '7a',
                title: 'Elements',
                content: [
                    { type: 'paragraph', text: 'An <strong>element</strong> is a basic form of matter that cannot be broken down into simpler substances by chemical reactions.'},
                    { type: 'list', items: [
                        '<strong>Metals:</strong> Lustrous, malleable, ductile, and good conductors (e.g., iron, copper, gold).',
                        '<strong>Non-metals:</strong> Not lustrous, brittle, and poor conductors (e.g., oxygen, carbon, sulfur).',
                        '<strong>Metalloids:</strong> Have intermediate properties between metals and non-metals (e.g., silicon, boron, germanium).'
                    ]},
                    { type: 'infoBox', color: 'blue', content: '<i>Note: <strong>Mercury</strong> (metal) and <strong>Bromine</strong> (non-metal) are liquid at room temperature.</i>'}
                ]
            },
            {
                id: '7b',
                title: 'Compounds',
                content: [
                    { type: 'paragraph', text: 'A <strong>compound</strong> is a substance formed when two or more elements are chemically combined in a <strong>fixed proportion by mass</strong>.'},
                    { type: 'list', items: [
                        'The properties of a compound are entirely different from its constituent elements.',
                        'Components can only be separated by chemical reactions.'
                    ]},
                    { type: 'infoBox', color: 'green', content: '🔬 <strong>Activity 2.4 Conclusion:</strong> When iron filings and sulphur powder are just mixed (<strong>Group I</strong>), they form a <strong>mixture</strong> that retains the properties of iron. When they are heated strongly (<strong>Group II</strong>), they undergo a chemical reaction to form <strong>iron sulphide</strong>, a <strong>compound</strong> with completely new properties.'}
                ]
            }
        ]
      },
      {
        id: '8',
        title: 'Mixtures vs. Compounds',
        content: [
            { type: 'table', headers: ['Property', 'Mixture', 'Compound'], rows: [
                ['<strong>Formation</strong>', 'Elements or compounds just mix together physically. No new compound is formed.', 'Elements react chemically to form new compounds.'],
                ['<strong>Composition</strong>', 'Composition is variable.', 'Composition is fixed by mass.'],
                ['<strong>Properties</strong>', 'Shows the properties of its constituent substances.', 'The new substance has totally different properties.'],
                ['<strong>Separation</strong>', 'Can be separated by physical methods.', 'Can only be separated by chemical or electrochemical reactions.']
            ]}
        ]
      },
      {
        id: '9',
        title: 'Summary & Key Exam Topics',
        content: [
          { type: 'list', items: [
            '<strong>Classification:</strong> Substances are pure (elements, compounds) or mixtures (homogeneous, heterogeneous).',
            '<strong>Solutions:</strong> Homogeneous mixtures. Suspensions and colloids are heterogeneous.',
            '<strong>Properties:</strong> Know the key differences in particle size, stability, filtration, and Tyndall effect for solutions, suspensions, and colloids.',
            '<strong>Separation Techniques:</strong> Different mixtures require different separation techniques based on the physical properties of their components.',
            '<strong>Conceptual Question:</strong> On cooling a hot, saturated solution of a salt like potassium chloride, its solubility decreases. As a result, the excess solute will crystallize out of the solution.'
          ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 2: Kya Hamare Aas Paas ke Padarth Shuddh Hain?",
    tocTitle: "Table of Contents",
    sections: [
      {
        id: '1',
        title: "Science mein \"Pure\" ka Kya Matlab Hai?",
        content: [
          { type: 'paragraph', text: `Rozmarra ki bhasha mein "pure" ka matlab ho sakta hai jismein milawat na ho (jaise <i>pure ghee</i>), lekin scientific context mein, ek <strong>pure substance</strong> ki definition bahut strict hai:` },
          { type: 'list', items: [
            'Ismein sirf <strong>ek hi type ke particle</strong> hote hain.',
            'Iske saare particles <strong>chemically ek jaise</strong> hote hain.',
            'Iska ek <strong>definite, fixed composition</strong> aur consistent properties hoti hain.'
          ]},
          { type: 'infoBox', color: 'blue', content: 'Example ke liye, doodh (milk) paani, fat, aur proteins ka ek <strong>mixture</strong> hai, scientific sense mein pure substance nahin hai.'}
        ]
      },
      {
        id: '2',
        title: "Mixtures",
        content: [
          { type: 'paragraph', text: 'Ek <strong>mixture</strong> tab banta hai jab do ya do se zyada substances (elements ya compounds) ko kisi bhi proportion mein physically milaya jaata hai.' },
          { type: 'subheading', text: '🔹 Mixture ke Characteristics:' },
          { type: 'list', items: [
            'Components apni <strong>original properties banaye</strong> rakhte hain.',
            'Inhe <strong>physical methods</strong> (jaise filtration, evaporation) se alag kiya ja sakta hai.',
            'Inka composition <strong>variable</strong> hota hai.'
          ]},
          { type: 'paragraph', text: '<strong>Examples:</strong> Namak wala paani, mitti, hawa, soft drinks.' },
          { type: 'heading', text: 'Mixtures ke Types' },
          { type: 'paragraph', text: 'Mixtures ko homogeneous ya heterogeneous mein classify kiya jaata hai.'},
          { type: 'table', headers: ['Type', 'Homogeneous Mixture (Solution)', 'Heterogeneous Mixture'], rows: [
            ['<strong>Composition</strong>', 'Poori tarah uniform.', 'Non-uniform.'],
            ['<strong>Visibility</strong>', 'Components alag se dikhayi nahin dete.', 'Components saaf-saaf alag dikhte hain.'],
            ['<strong>Examples</strong>', 'Paani mein namak, paani mein cheeni, hawa.', 'Tel aur paani, ret aur lohe ke tukde.']
          ]},
          { type: 'infoBox', color: 'green', content: '🔬 <strong>Activity 2.1 ka Conclusion:</strong> Jab alag-alag groups ne copper sulphate jaise substances ko paani mein alag-alag amount mein milaya, to yeh pata chala ki mixtures ka <strong>composition variable</strong> ho sakta hai. Kuch ne homogeneous solutions banaye, jabki doosron ne insoluble substances ke saath heterogeneous mixtures banaye.'}
        ]
      },
      {
        id: '3',
        title: "Solutions",
        content: [
          { type: 'paragraph', text: 'Ek <strong>solution</strong> do ya do se zyada substances ka ek <strong>homogeneous mixture</strong> hota hai.' },
          { type: 'list', items: [
            '<strong>Solvent:</strong> Woh component jo zyada quantity mein hota hai aur doosre component ko dissolve karta hai.',
            '<strong>Solute:</strong> Woh component jo kam quantity mein hota hai aur dissolve ho jaata hai.'
          ]},
          { type: 'subheading', text: '🔹 Solutions ke Examples:' },
          { type: 'table', headers: ['Type', 'Solute', 'Solvent', 'Example'], rows: [
            ['Solid in Liquid', 'Namak (Salt)', 'Paani (Water)', 'Namak ka solution'],
            ['Gas in Liquid', 'Carbon dioxide', 'Paani (Water)', 'Soda water'],
            ['Liquid in Liquid', 'Alcohol', 'Paani (Water)', 'Sirka (Vinegar)'],
            ['Gas in Gas', 'Oxygen, Argon', 'Nitrogen', 'Hawa (Air)'],
            ['Solid in Solid', 'Zinc', 'Copper', 'Peetal (Brass - an alloy)']
          ]},
          { type: 'infoBox', color: 'orange', content: '⚠️ <strong>Alloys</strong> jaise brass solid solutions hain lekin inhe mixture maana jaata hai kyunki yeh apne constituents ki properties dikhate hain aur inka composition variable ho sakta hai.'},
          { type: 'subheading', text: '🔹 Solution ki Properties:' },
          { type: 'list', items: [
            'Yeh ek homogeneous mixture hai.',
            'Iske particles ka size bahut chhota hota hai (&lt; 1 nm) aur nangi aankhon se nahin dekha ja sakta.',
            'Yeh light ki beam ko scatter nahin karta, yaani yeh <strong>Tyndall effect nahin dikhata</strong>.',
            'Yeh stable hota hai; solute particles neeche nahin baithte.',
            'Components ko filtration se alag nahin kiya ja sakta.'
          ]},
        ],
        subSections: [
            {
                id: '3a',
                title: 'Solution ka Concentration',
                content: [
                    { type: 'paragraph', text: 'Yeh batata hai ki diye gaye solution ya solvent mein kitna solute hai.'},
                    { type: 'list', items: [
                        '<strong>Dilute:</strong> Aisa solution jismein solute kam ho.',
                        '<strong>Concentrated:</strong> Aisa solution jismein solute zyada ho.',
                        '<strong>Unsaturated Solution:</strong> Aisa solution jismein aur solute dissolve kiya ja sakta hai.',
                        '<strong>Saturated Solution:</strong> Aisa solution jismein us temperature par maximum possible solute dissolve ho chuka hai.',
                        '<strong>Solubility:</strong> Ek specific temperature par, saturated solution banane ke liye zaroori solute ki quantity.'
                    ]},
                    { type: 'infoBox', color: 'green', content: '🔬 <strong>Activity 2.3 ka Conclusion:</strong> Ek hi temperature par paani mein dissolve ho sakne wale namak aur cheeni ki quantity alag-alag hoti hai. <strong>Garam karne par</strong> solids ki solubility liquids mein badh jaati hai.'},
                    { type: 'subheading', text: 'Concentration Batane ke Tareeke:'},
                    { type: 'formulaBox', name: 'Mass by mass %', numerator: 'Mass of solute', denominator: 'Mass of solution' },
                    { type: 'formulaBox', name: 'Mass by volume %', numerator: 'Mass of solute', denominator: 'Volume of solution' },
                    { type: 'formulaBox', name: 'Volume by volume %', numerator: 'Volume of solute', denominator: 'Volume of solution' },
                ]
            },
            {
                id: '3b',
                title: 'Concentration par Numericals',
                content: [
                    { type: 'heading', text: 'Problem 1:'},
                    { type: 'paragraph', text: 'Ek solution mein 40 g namak 320 g paani mein ghula hai. Solution ka concentration mass by mass percentage mein calculate karein.'},
                    { type: 'infoBox', color: 'blue', content: `<strong>Solution:</strong><br/>
                        Mass of solute (namak) = 40 g<br/>
                        Mass of solvent (paani) = 320 g<br/>
                        Mass of solution = 40 g + 320 g = 360 g<br/>
                        Mass percentage = (40 / 360) × 100 = <strong>11.1%</strong>`},
                    { type: 'heading', text: 'Problem 2:'},
                    { type: 'paragraph', text: 'Ek saturated solution banane ke liye, 36 g sodium chloride ko 100 g paani mein 293 K par dissolve kiya gaya hai. Is temperature par iska concentration pata karein.'},
                    { type: 'infoBox', color: 'blue', content: `<strong>Solution:</strong><br/>
                        Mass of solute (sodium chloride) = 36 g<br/>
                        Mass of solvent (paani) = 100 g<br/>
                        Mass of solution = 36 g + 100 g = 136 g<br/>
                        Mass percentage = (36 / 136) × 100 = <strong>26.47%</strong>`},
                    { type: 'heading', text: 'Problem 3:'},
                    { type: 'paragraph', text: '313 K par 50 gram paani mein potassium nitrate ka saturated solution banane ke liye kitne mass ki zaroorat hogi? (Diya gaya hai ki 313 K par Potassium Nitrate ki solubility 62 g per 100 g paani hai).'},
                    { type: 'infoBox', color: 'blue', content: `<strong>Solution:</strong><br/>
                        313 K par, 100 g paani 62 g potassium nitrate dissolve karta hai.<br/>
                        Isliye, 50 g paani ke liye zaroori potassium nitrate ka mass hai:<br/>
                        Mass = (62 g / 100 g) × 50 g = <strong>31 g</strong>`},
                ]
            }
        ]
      },
      {
        id: '4',
        title: "Suspensions",
        content: [
          { type: 'paragraph', text: 'Ek <strong>suspension</strong> ek <strong>heterogeneous mixture</strong> hota hai jismein solid particles liquid mein dissolve hue bina faile rehte hain.' },
          { type: 'subheading', text: '🔹 Suspension ki Properties:' },
          { type: 'list', items: [
            'Yeh heterogeneous hota hai.',
            'Particles itne bade hote hain ki nangi aankhon se dikh jaate hain.',
            'Yeh <strong>light ko scatter karta hai (Tyndall effect dikhata hai)</strong>.',
            'Yeh unstable hota hai; particles samay ke saath neeche baith jaate hain.',
            'Components ko <strong>filtration</strong> se alag kiya ja sakta hai.'
          ]},
          { type: 'paragraph', text: '<strong>Examples:</strong> Paani mein chalk powder, paani mein ret.' },
        ]
      },
      {
        id: '5',
        title: "Colloidal Solutions (Colloids)",
        content: [
          { type: 'paragraph', text: 'Ek <strong>colloid</strong> ek aisa mixture hai jismein particles ka size solution aur suspension ke beech ka hota hai. Yeh homogeneous dikhta hai lekin asal mein heterogeneous hota hai.' },
          { type: 'list', items: [
            '<strong>Dispersed Phase:</strong> Solute jaisa component.',
            '<strong>Dispersion Medium:</strong> Solvent jaisa component.'
          ]},
          { type: 'subheading', text: '🔹 Colloid ki Properties:' },
          { type: 'list', items: [
            'Homogeneous dikhta hai par heterogeneous hota hai.',
            'Yeh stable hota hai; particles neeche nahin baithte.',
            'Yeh <strong>light ko scatter karne ke liye kaafi bada hota hai (Tyndall effect dikhata hai)</strong>.',
            'Components ko filtration se alag nahin kiya ja sakta lekin <strong>centrifugation</strong> se kiya ja sakta hai.'
          ]},
          { type: 'infoBox', color: 'blue', content: '🔸 <strong>The Tyndall Effect</strong> colloidal particles dwara light ki beam ka scatter hona hai. Isiliye aap ek kohre ya dhool bhare kamre mein aati hui suraj ki roshni dekh sakte hain.'},
          { type: 'subheading', text: '🔹 Colloids ke Common Examples:' },
          { type: 'table', headers: ['Dispersed Phase', 'Dispersion Medium', 'Type', 'Examples'], rows: [
            ['Liquid', 'Gas', 'Aerosol', 'Kohra (Fog), dhund (mist), baadal (clouds)'],
            ['Solid', 'Gas', 'Aerosol', 'Dhuan (Smoke), gaadi ka dhuan (exhaust)'],
            ['Gas', 'Liquid', 'Foam', 'Shaving cream'],
            ['Liquid', 'Liquid', 'Emulsion', 'Doodh (Milk), face cream'],
            ['Solid', 'Liquid', 'Sol', 'Keechad (Mud), milk of magnesia'],
            ['Gas', 'Solid', 'Foam', 'Sponge, pumice stone'],
            ['Liquid', 'Solid', 'Gel', 'Jelly, cheese, makkhan (butter)'],
            ['Solid', 'Solid', 'Solid Sol', 'Rangeen ratna (Coloured gemstones)']
          ]}
        ]
      },
       {
        id: '6',
        title: "Physical vs. Chemical Changes",
        content: [
          { type: 'table', headers: ['Basis', 'Physical Change', 'Chemical Change'], rows: [
            ['<strong>New Substance</strong>', 'Koi naya substance nahin banta.', 'Naye properties wala naya substance banta hai.'],
            ['<strong>Reversibility</strong>', 'Aam taur par reversible.', 'Aam taur par irreversible.'],
            ['<strong>Properties</strong>', 'Chemical properties nahin badalti.', 'Naye substance ki properties bilkul nayi hoti hain.'],
            ['<strong>Examples</strong>', 'Barf ka pighalna, paani ka ubalna, kaagaz ka phatna.', 'Lakdi ka jalna, lohe mein zang lagna, khana pakana.']
          ]},
          { type: 'infoBox', color: 'orange', content: '🔸 <strong>Mombatti ka jalna</strong> dono cheezein shamil karta hai: mom ka pighalna ek <strong>physical change</strong> hai, jabki mom ka jalna ek <strong>chemical change</strong> hai.'}
        ]
      },
      {
        id: '7',
        title: "Pure Substances ke Types",
        content: [
          { type: 'paragraph', text: 'Pure substances ko elements aur compounds mein classify kiya jaata hai.'}
        ],
        subSections: [
            {
                id: '7a',
                title: 'Elements',
                content: [
                    { type: 'paragraph', text: 'Ek <strong>element</strong> matter ka basic form hai jise chemical reactions se aur simple substances mein toda nahin ja sakta.'},
                    { type: 'list', items: [
                        '<strong>Metals:</strong> Chamakdaar, malleable, ductile, aur heat/electricity ke acche conductor (e.g., loha, taamba, sona).',
                        '<strong>Non-metals:</strong> Chamakdaar nahin, brittle, aur kharab conductor (e.g., oxygen, carbon, sulfur).',
                        '<strong>Metalloids:</strong> Metals aur non-metals dono ki properties rakhte hain (e.g., silicon, boron, germanium).'
                    ]},
                    { type: 'infoBox', color: 'blue', content: '<i>Note: <strong>Mercury</strong> (metal) aur <strong>Bromine</strong> (non-metal) room temperature par liquid hote hain.</i>'}
                ]
            },
            {
                id: '7b',
                title: 'Compounds',
                content: [
                    { type: 'paragraph', text: 'Ek <strong>compound</strong> ek aisa substance hai jo do ya do se zyada elements ke <strong>fixed proportion by mass</strong> mein chemically judne se banta hai.'},
                    { type: 'list', items: [
                        'Ek compound ki properties uske constituent elements se bilkul alag hoti hain.',
                        'Components ko sirf chemical reactions se hi alag kiya ja sakta hai.'
                    ]},
                    { type: 'infoBox', color: 'green', content: '🔬 <strong>Activity 2.4 ka Conclusion:</strong> Jab lohe ke tukde aur sulphur powder ko sirf mix kiya jaata hai (<strong>Group I</strong>), to woh ek <strong>mixture</strong> banate hain jo lohe ki properties rakhta hai. Jab unhe tezi se garam kiya jaata hai (<strong>Group II</strong>), to woh ek chemical reaction karke <strong>iron sulphide</strong> banate hain, jo ek <strong>compound</strong> hai aur uski properties bilkul nayi hoti hain.'}
                ]
            }
        ]
      },
      {
        id: '8',
        title: 'Mixtures vs. Compounds',
        content: [
            { type: 'table', headers: ['Property', 'Mixture', 'Compound'], rows: [
                ['<strong>Formation</strong>', 'Elements ya compounds sirf physically mix hote hain. Koi naya compound nahin banta.', 'Elements chemically react karke naye compounds banate hain.'],
                ['<strong>Composition</strong>', 'Composition variable hota hai.', 'Composition by mass fixed hota hai.'],
                ['<strong>Properties</strong>', 'Apne constituent substances ki properties dikhata hai.', 'Naye substance ki properties bilkul alag hoti hain.'],
                ['<strong>Separation</strong>', 'Physical methods se alag kiya ja sakta hai.', 'Sirf chemical ya electrochemical reactions se alag kiya ja sakta hai.']
            ]}
        ]
      },
      {
        id: '9',
        title: 'Summary aur Important Exam Topics',
        content: [
          { type: 'list', items: [
            '<strong>Classification:</strong> Substances ya to pure (elements, compounds) hote hain ya mixtures (homogeneous, heterogeneous).',
            '<strong>Solutions:</strong> Homogeneous mixtures hain. Suspensions aur colloids heterogeneous hain.',
            '<strong>Properties:</strong> Solutions, suspensions, aur colloids ke beech particle size, stability, filtration, aur Tyndall effect ke mukhya antar ko jaanein.',
            '<strong>Separation Techniques:</strong> Alag-alag mixtures ko unke components ki physical properties ke आधार par alag-alag separation techniques ki zaroorat hoti hai.',
            '<strong>Conceptual Question:</strong> Potassium chloride jaise namak ke garam, saturated solution ko thanda karne par, uski solubility kam ho jaati hai. Iske parinaamswaroop, extra solute solution se crystallize ho jayega.'
          ]}
        ]
      }
    ]
  }
};

// Theme definitions as per the new blueprint
const themes = {
    sunriseOrange: {
        name: 'Sunrise Orange',
        previewColor: '#f97316',
        cssVars: {
            '--theme-bg': '#fff7ed',
            '--theme-header-bg': '#f97316',
            '--theme-toc-bg': '#ffffff',
            '--theme-toc-text': '#4b5563',
            '--theme-toc-active-bg': '#f97316',
            '--theme-toc-active-text': '#ffffff',
            '--theme-content-bg': 'rgba(255,255,255,0.8)',
            '--theme-text-color': '#4b5563',
            '--theme-heading-color': '#ea580c',
            '--theme-heading-border': '#f97316',
            '--theme-check': '#f97316',
            '--theme-switch-lang-active': '#ea580c',
        }
    },
    oceanBlue: {
        name: 'Ocean Blue',
        previewColor: '#3b82f6',
        cssVars: {
            '--theme-bg': '#eff6ff',
            '--theme-header-bg': '#3b82f6',
            '--theme-toc-bg': '#ffffff',
            '--theme-toc-text': '#4b5563',
            '--theme-toc-active-bg': '#3b82f6',
            '--theme-toc-active-text': '#ffffff',
            '--theme-content-bg': 'rgba(255,255,255,0.8)',
            '--theme-text-color': '#4b5563',
            '--theme-heading-color': '#2563eb',
            '--theme-heading-border': '#60a5fa',
            '--theme-check': '#3b82f6',
            '--theme-switch-lang-active': '#2563eb',
        }
    },
    forestGreen: {
        name: 'Forest Green',
        previewColor: '#22c55e',
        cssVars: {
            '--theme-bg': '#f0fdf4',
            '--theme-header-bg': '#22c55e',
            '--theme-toc-bg': '#ffffff',
            '--theme-toc-text': '#4b5563',
            '--theme-toc-active-bg': '#22c55e',
            '--theme-toc-active-text': '#ffffff',
            '--theme-content-bg': 'rgba(255,255,255,0.8)',
            '--theme-text-color': '#4b5563',
            '--theme-heading-color': '#16a34a',
            '--theme-heading-border': '#4ade80',
            '--theme-check': '#22c55e',
            '--theme-switch-lang-active': '#16a34a',
        }
    },
    amber: {
        name: 'Amber',
        previewColor: '#f59e0b',
        cssVars: {
            '--theme-bg': '#fefce8',
            '--theme-header-bg': '#f59e0b',
            '--theme-toc-bg': '#ffffff',
            '--theme-toc-text': '#4b5563',
            '--theme-toc-active-bg': '#f59e0b',
            '--theme-toc-active-text': '#ffffff',
            '--theme-content-bg': 'rgba(255,255,255,0.8)',
            '--theme-text-color': '#4b5563',
            '--theme-heading-color': '#d97706',
            '--theme-heading-border': '#facc15',
            '--theme-check': '#f59e0b',
            '--theme-switch-lang-active': '#d97706',
        }
    },
    royalPurple: {
        name: 'Royal Purple',
        previewColor: '#8b5cf6',
        cssVars: {
            '--theme-bg': '#f5f3ff',
            '--theme-header-bg': '#8b5cf6',
            '--theme-toc-bg': '#ffffff',
            '--theme-toc-text': '#4b5563',
            '--theme-toc-active-bg': '#8b5cf6',
            '--theme-toc-active-text': '#ffffff',
            '--theme-content-bg': 'rgba(255,255,255,0.8)',
            '--theme-text-color': '#4b5563',
            '--theme-heading-color': '#7c3aed',
            '--theme-heading-border': '#a78bfa',
            '--theme-check': '#8b5cf6',
            '--theme-switch-lang-active': '#7c3aed',
        }
    },
    midnightBlueD: {
        name: 'Midnight Blue (D)',
        previewColor: '#60a5fa',
        cssVars: {
            '--theme-bg': '#111827',
            '--theme-header-bg': '#1e40af',
            '--theme-toc-bg': '#1f2937',
            '--theme-toc-text': '#d1d5db',
            '--theme-toc-active-bg': '#60a5fa',
            '--theme-toc-active-text': '#111827',
            '--theme-content-bg': 'rgba(31,41,55,0.8)',
            '--theme-text-color': '#d1d5db',
            '--theme-heading-color': '#60a5fa',
            '--theme-heading-border': '#3b82f6',
            '--theme-check': '#60a5fa',
            '--theme-switch-lang-active': '#ffffff',
        }
    },
    slateGrayD: {
        name: 'Slate Gray (D)',
        previewColor: '#94a3b8',
        cssVars: {
            '--theme-bg': '#334155',
            '--theme-header-bg': '#475569',
            '--theme-toc-bg': '#475569',
            '--theme-toc-text': '#e2e8f0',
            '--theme-toc-active-bg': '#94a3b8',
            '--theme-toc-active-text': '#1e293b',
            '--theme-content-bg': 'rgba(71,85,105,0.8)',
            '--theme-text-color': '#e2e8f0',
            '--theme-heading-color': '#cbd5e1',
            '--theme-heading-border': '#94a3b8',
            '--theme-check': '#94a3b8',
            '--theme-switch-lang-active': '#ffffff',
        }
    },
    tangerineD: {
        name: 'Tangerine (D)',
        previewColor: '#fb923c',
        cssVars: {
            '--theme-bg': '#1f2937',
            '--theme-header-bg': '#c2410c',
            '--theme-toc-bg': '#334155',
            '--theme-toc-text': '#d1d5db',
            '--theme-toc-active-bg': '#fb923c',
            '--theme-toc-active-text': '#1f2937',
            '--theme-content-bg': 'rgba(31,41,55,0.8)',
            '--theme-text-color': '#d1d5db',
            '--theme-heading-color': '#fb923c',
            '--theme-heading-border': '#f97316',
            '--theme-check': '#fb923c',
            '--theme-switch-lang-active': '#ffffff',
        }
    },
    crimsonD: {
        name: 'Crimson (D)',
        previewColor: '#f87171',
        cssVars: {
            '--theme-bg': '#1f2937',
            '--theme-header-bg': '#b91c1c',
            '--theme-toc-bg': '#334155',
            '--theme-toc-text': '#d1d5db',
            '--theme-toc-active-bg': '#f87171',
            '--theme-toc-active-text': '#1f2937',
            '--theme-content-bg': 'rgba(31,41,55,0.8)',
            '--theme-text-color': '#d1d5db',
            '--theme-heading-color': '#f87171',
            '--theme-heading-border': '#ef4444',
            '--theme-check': '#f87171',
            '--theme-switch-lang-active': '#ffffff',
        }
    },
    roseD: {
        name: 'Rose (D)',
        previewColor: '#f472b6',
        cssVars: {
            '--theme-bg': '#1f2937',
            '--theme-header-bg': '#be185d',
            '--theme-toc-bg': '#334155',
            '--theme-toc-text': '#d1d5db',
            '--theme-toc-active-bg': '#f472b6',
            '--theme-toc-active-text': '#1f2937',
            '--theme-content-bg': 'rgba(31,41,55,0.8)',
            '--theme-text-color': '#d1d5db',
            '--theme-heading-color': '#f472b6',
            '--theme-heading-border': '#ec4899',
            '--theme-check': '#f472b6',
            '--theme-switch-lang-active': '#ffffff',
        }
    },
    violetD: {
        name: 'Violet (D)',
        previewColor: '#a78bfa',
        cssVars: {
            '--theme-bg': '#1f2937',
            '--theme-header-bg': '#6d28d9',
            '--theme-toc-bg': '#334155',
            '--theme-toc-text': '#d1d5db',
            '--theme-toc-active-bg': '#a78bfa',
            '--theme-toc-active-text': '#1f2937',
            '--theme-content-bg': 'rgba(31,41,55,0.8)',
            '--theme-text-color': '#d1d5db',
            '--theme-heading-color': '#a78bfa',
            '--theme-heading-border': '#8b5cf6',
            '--theme-check': '#a78bfa',
            '--theme-switch-lang-active': '#ffffff',
        }
    },
};

// Menu Icon for mobile TOC toggle
const MenuIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        style={{
            height: '24px',
            width: '24px'
        }} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

// Close Icon
const CloseIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        style={{
            height: '24px',
            width: '24px'
        }} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
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
                                                    {String.fromCharCode(65 + index)}. {subSection.title}
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
function Class9ScienceIsMatterAroundUsPure() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '7': true });

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
                                     <h3 className="heading-font text-2xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-2 border-[var(--theme-heading-border)]">{String.fromCharCode(65 + index)}. {subSection.title}</h3>
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

export default Class9ScienceIsMatterAroundUsPure;
