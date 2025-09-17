import React from 'react';

// In a real project, you would install react-helmet-async: npm install react-helmet-async
// This is a simulated Helmet component for this environment to demonstrate SEO features.
const Helmet = ({ children }) => {
  React.useEffect(() => {
    // This effect manages the document's head section for SEO.
    const titleElement = document.querySelector('title');
    
    // Clean up previously added meta tags and scripts to avoid duplicates on re-render.
    document.querySelectorAll('meta[data-managed-by-helmet]').forEach(el => el.remove());
    document.querySelectorAll('script[data-managed-by-helmet]').forEach(el => el.remove());

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


// Data for the entire chapter, structured for dual-language support (Hinglish & English)
const notesData = {
  en: { // Standard English Version
    chapterTitle: "The Atmosphere",
    tocTitle: "Table of Contents",
    metaDescription: "Comprehensive notes for Class 7 ICSE on The Atmosphere. Covers composition, structure, layers (Troposphere, Stratosphere), Greenhouse Effect, and Ozone Layer.",
    sections: [
      { id: '1', title: "What is the Atmosphere?", content: [
          { type: 'list', items: [
              "The atmosphere is a mixture of different gases that create a layer around the Earth.",
              "This layer of gases is held in place because of the Earth's gravitational force.",
              "The atmosphere makes Earth unique compared to other planets in our solar system.",
              "Although the atmosphere goes up to 1,600 km above the Earth's surface, 99% of it is found within the first 32 km from the ground.",
              "The reason for this is that the density (thickness) of the atmosphere is greater in the lower layers because the upper layers press down on them."
          ]}
      ]},
      { id: '2', title: "Composition of the Atmosphere", content: [
          { type: 'paragraph', text: "The air in our atmosphere is a mix of several gases." },
          { type: 'list', items: [
              "<strong>Nitrogen (N₂):</strong> This is the most abundant gas, making up about 78% of the atmosphere's total volume.",
              "<strong>Oxygen (O₂):</strong> This is the second most abundant gas, forming about 21% of the atmosphere.",
              "<strong>Other Gases:</strong> The remaining 1% consists of small amounts of other gases like carbon dioxide, hydrogen, helium, ozone, and argon.",
              "The lower layers of the atmosphere also contain varying amounts of water vapour and solid particles like dust, salt, and pollen."
          ]}
      ]},
      { id: '3', title: "Structure of the Atmosphere", content: [
          { type: 'paragraph', text: "The atmosphere is divided into five different layers based on differences in composition, temperature, and density." },
          { type: 'paragraph', text: "There are no sharp, clear boundaries between these layers." },
          { type: 'list', items: [
            "Each layer is unique, varies in thickness, and is found at a different height from the Earth's surface."
          ]}
        ],
        subSections: [
          { id: '3.1', title: "a) Troposphere", content: [
              { type: 'paragraph', text: "This is the lowest layer of the atmosphere." },
              { type: 'list', items: [
                  "<strong>Thickness:</strong> Its thickness is not uniform. It is higher above the Equator (about 18 km) than above the Poles (about 8 km).",
                  "<strong>Density:</strong> It is the densest layer and contains 80% of the total mass of the atmosphere."
              ]},
              { type: 'paragraph', text: '<strong>Key Features:</strong>' },
              { type: 'list', items: [
                  "This layer contains the air we breathe.",
                  "Almost all dust particles and water vapour are found here.",
                  "All weather changes like clouds, rain, snow, fog, and storms happen in the troposphere because of the presence of water vapour."
              ]},
              { type: 'list', items: [
                  "<strong>Temperature and Pressure:</strong> As you go higher in the troposphere, both temperature and air pressure decrease.",
                  "<strong>Normal Lapse Rate:</strong> For every 165 meters you go up, the temperature decreases. This is known as the Normal Lapse Rate. As you go higher, the air also becomes thinner. This is why mountaineers need to carry oxygen cylinders.",
                  "<strong>Function:</strong> It acts like a blanket, protecting Earth from extreme heat during the day and trapping heat (terrestrial heat) at night to keep the planet warm.",
                  "<strong>Tropopause:</strong> This is the upper limit of the troposphere. Here, the temperature stops decreasing with height.",
                  "<strong>Jet Streams:</strong> Very high-speed winds called jet streams blow in the tropopause. These winds can influence weather on the Earth's surface. For example, subtropical westerly jet streams cause rainfall in northern India during winter."
              ]}
          ]},
          { id: '3.2', title: "b) Stratosphere", content: [
               { type: 'paragraph', text: "This layer lies above the troposphere and extends up to about 50 km from the Earth's surface." },
               { type: 'paragraph', text: '<strong>Key Features:</strong>' },
               { type: 'list', items: [
                  "It provides ideal flying conditions for aircraft. This is because it is free from weather disturbances due to the absence of water vapour.",
                  "<strong>Ozonosphere (Ozone Layer):</strong> A part of the stratosphere has a high concentration of ozone gas and is known as the ozonosphere.",
                  "The ozone layer is vital for life because it absorbs harmful ultraviolet (UV) radiation from the Sun. This absorption of UV rays increases the temperature of this layer."
               ]},
                { type: 'list', items: [
                   "<strong>Depletion:</strong> The use of harmful chlorofluorocarbon (CFC) gases is gradually depleting (thinning) this important layer, which can lead to health hazards.",
                  "<strong>Stratopause:</strong> This marks the upper limit of the stratosphere, where the temperature starts to fall again with increasing altitude."
                ]}
          ]},
          { id: '3.3', title: "c) Mesosphere", content: [
               { type: 'paragraph', text: "The mesosphere is the middle layer, located above the stratosphere, at a height of about 50 km to 85 km from the Earth's surface." },
               { type: 'list', items: [
                  "<strong>Temperature:</strong> This is the coldest atmospheric layer, with temperatures dropping to -100°C in some parts. The temperature decreases as you go higher in this layer."
               ]},
               { type: 'paragraph', text: '<strong>Key Feature:</strong>' },
               { type: 'list', items: [
                  "This layer is very important because it protects us from meteors. When meteors enter the mesosphere, they slow down and burn up due to friction and heat.",
                  "A meteor is a small rocky body that enters Earth's atmosphere. It glows due to friction and looks like a streak of light, also known as a shooting star."
               ]},
               { type: 'list', items: [
                  "<strong>Mesopause:</strong> This is the boundary between the mesosphere and the next layer, the thermosphere. The atmosphere's lowest temperature is reached at this point."
               ]}
          ]},
           { id: '3.4', title: "d) Thermosphere (Ionosphere)", content: [
               { type: 'paragraph', text: "This layer extends to a height of about 400 km from the Earth's surface." },
               { type: 'list', items: [
                  "<strong>Temperature:</strong> The temperature increases with height in this layer because it absorbs various types of solar radiation. This makes the thermosphere the hottest layer in the atmosphere. Even though it's very hot, there are very few molecules, so absorbing even a small amount of solar energy significantly increases the temperature.",
                  "<strong>Ionosphere:</strong> The energy from the sun breaks up gas molecules into electrically charged particles called ions. Because of these ions, this layer is also known as the ionosphere."
               ]},
               { type: 'paragraph', text: '<strong>Key Feature:</strong>' },
               { type: 'list', items: [
                  "The ions in this layer reflect radio waves back to Earth, which makes radio broadcasts and wireless communication possible."
               ]},
               { type: 'list', items: [
                   "<strong>Auroras:</strong> This is the layer where auroras occur. They are bright, beautiful bands of light seen near the polar regions. They are caused when high-energy particles from the Sun interact with the ionosphere.",
                   "They are called aurora borealis (northern lights) in the Northern Hemisphere and aurora australis (southern lights) in the Southern Hemisphere."
               ]}
          ]},
           { id: '3.5', title: "e) Exosphere", content: [
               { type: 'list', items: [
                  "This is the uppermost layer of the atmosphere.",
                  "It is thousands of kilometres thick and gradually merges with interplanetary space.",
                  "The air here is extremely thin and rarefied, which means the atmospheric pressure is the lowest in this layer.",
                  "It is composed of traces of very light gases like hydrogen, helium, and oxygen."
              ]}
          ]}
        ]
      },
      { id: '4', title: "Importance of the Atmosphere", content: [
            { type: 'paragraph', text: "The atmosphere is one of the main reasons life is possible on Earth." },
            { type: 'list', items: [
                "<strong>Gases for Life:</strong> It provides oxygen for humans to breathe and carbon dioxide and nitrogen for plants.",
                "<strong>Water Cycle:</strong> The water vapour in the atmosphere is responsible for all types of precipitation (like rain and snow)."
            ]},
            { type: 'paragraph', text: "<strong>Protection:</strong>" },
            { type: 'list', items: [
                "The ozone layer protects us from the Sun's harmful UV rays.",
                "Meteors burn up in the atmosphere before they can hit the Earth's surface."
            ]},
            { type: 'list', items: [
                "<strong>Temperature Regulation:</strong> The atmosphere heats the Earth during the day with solar radiation. At night, it traps the heat radiated back by the Earth (terrestrial heat) to maintain an optimal temperature for all living things. The gases that do this are called Greenhouse Gases (GHGs)."
            ]}
      ]},
      { id: '5', title: "Greenhouse Effect and Global Warming", subSections: [
          { id: '5.1', title: "a) The Greenhouse Effect", content: [
              { type: 'list', items: [
                  "During the day, the Sun's rays heat up the Earth's surface.",
                  "At night, the Earth cools down by releasing this heat back in the form of terrestrial radiation.",
                  "Some of this heat is absorbed by greenhouse gases (GHGs) in the atmosphere and does not escape into space.",
                  "This natural process, known as the greenhouse effect, prevents the Earth from becoming extremely cold at night."
              ]}
          ]},
          { id: '5.2', title: "b) Global Warming", content: [
               { type: 'list', items: [
                  "Over the years, the amount of heat-trapping gases (GHGs) has increased in the atmosphere, making the planet warmer.",
                  "This gradual rise in global temperatures is called global warming.",
                  "<strong>Greenhouse Gases (GHGs):</strong> These include carbon dioxide, methane, nitrous oxide, and ozone.",
                  "<strong>Ozone Depleting Substances (ODS):</strong> There are also human-made GHGs like CFCs and halons, which destroy the ozone layer.",
                  "A high concentration of GHGs and ODS traps more heat radiated from the Earth, increasing the atmosphere's temperature."
              ]}
          ]},
          { id: '5.3', title: "c) Causes of Global Warming", content: [
               { type: 'paragraph', text: "Certain human activities have contributed to global warming:" },
               { type: 'list', items: [
                  "<strong>1. Burning of Fossil Fuels:</strong> Burning fossil fuels like coal and petroleum in industries, power plants, and vehicles releases large amounts of carbon dioxide, a major GHG. This has increased since the Industrial Revolution.",
                  "<strong>2. Harmful Emissions:</strong> Industries and vehicles also release other polluting gases like oxides of nitrogen, sulphur, and methane.",
                  "<strong>3. Deforestation and Mining:</strong> Forests are major \"carbon sinks\" (they absorb carbon dioxide). When forests are cleared for settlements, agriculture, or mining, the carbon dioxide level in the atmosphere increases, trapping more heat.",
                  "<strong>4. Rearing of Farm Animals:</strong> Farm animals like goats, sheep, and buffaloes produce methane in their stomachs during digestion, which is released into the atmosphere through their dung.",
                  "<strong>5. Fertilisers:</strong> Artificial nitrogen fertilisers are often used for crops. Some of this nitrogen gets converted into nitrous oxide, another GHG, which enters the atmosphere."
              ]}
          ]},
          { id: '5.4', title: "d) Impact of Global Warming", content: [
               { type: 'list', items: [
                  "<strong>High Temperatures & Drought:</strong> High temperatures lead to more evaporation, which dries up soil and surface water. This affects crop production and causes more droughts.",
                  "<strong>Health Issues:</strong> Heat waves in summer can lead to more deaths from heat strokes and cause the spread of diseases like malaria.",
                  "<strong>Melting Glaciers and Flooding:</strong> Melting of glaciers occurs in both the Arctic and Antarctic regions, as well as on snow-capped mountains. This increases the volume of water in oceans and can result in flooding along riverbanks.",
                  "<strong>Climate Refugees:</strong> Rising sea levels can submerge several islands, leading to the loss of ecological and cultural life and creating the problem of climate refugees.",
                  "<strong>Ecosystem Damage:</strong> It is predicted that over a million species will experience a loss of habitat and may become endangered or extinct."
              ]}
          ]}
        ]
      },
      { id: '6', title: "Ways to Reduce Global Warming", content: [
          { type: 'list', items: [
              "<strong>1. Reduce Fossil Fuel Use:</strong> We should reduce the burning of fossil fuels like coal and petroleum and switch to renewable energy sources like solar, wind, water, and tidal energy. These are cheap, abundant, and non-polluting.",
              "<strong>2. Use Eco-Friendly Products:</strong> Switch to electric cars instead of ones that run on fossil fuels. Replace incandescent bulbs with Compact Fluorescent Lamps (CFLs), as they use less energy.",
              "<strong>3. Save Electricity:</strong> Turn off electrical gadgets like lights, fans, TVs, and computers when not in use to reduce carbon emissions.",
              "<strong>4. Afforestation:</strong> Planting more trees helps reduce the amount of carbon dioxide in the air. The Indian government promotes events like Van Mahotsav, a week-long tree-planting festival started in 1950, to increase green cover. However, the indiscriminate felling of trees must be stopped.",
              "<strong>5. Promote Green Cities:</strong> Green cities are urban areas that try to lessen the environmental impact by encouraging recycling and reducing air, water, and land pollution. Examples include Oslo, Vancouver, and Singapore.",
              "<strong>6. Follow the 3Rs (Reduce, Reuse, Recycle):</strong><br>&bull; <strong>Reduce:</strong> Use fewer natural resources so they don't get depleted.<br>&bull; <strong>Reuse:</strong> Use resources again instead of throwing them away.<br>&bull; <strong>Recycle:</strong> Convert waste materials into new products. This reduces waste and conserves resources."
          ]}
      ]},
       { id: '7', title: "The Ozone Layer and its Importance", content: [
            { type: 'paragraph', text: "The ozone layer is a shield in the stratosphere that protects us by stopping harmful UV radiation from reaching Earth." }
         ],
         subSections: [
          { id: '7.1', title: "a) Causes of Ozone Layer Depletion", content: [
              { type: 'paragraph', text: "Human activities release CFCs (chlorofluorocarbons) and other harmful chemicals that destroy the ozone layer." },
              { type: 'paragraph', text: '<strong>How CFCs Destroy Ozone:</strong>' },
              { type: 'list', items: [
                  "1. UV rays cause a chlorine atom to break away from a CFC molecule.",
                  "2. The free chlorine atom hits an ozone molecule.",
                  "3. The chlorine atom pulls one oxygen atom away from the ozone molecule, creating chlorine monoxide and leaving a regular oxygen molecule.",
                  "4. The free oxygen atom then hits the chlorine monoxide molecule, releasing the chlorine atom, which is then free to destroy more ozone molecules."
              ]},
              { type: 'list', items: [
                "<strong>Sources of ODS:</strong> CFCs are released from old refrigerators, air conditioners, spray cans, fire extinguishers, and jet aircraft. Volcanic eruptions also contribute to ozone depletion.",
                "Although less abundant than CO₂, CFCs are thousands of times more powerful as a GHG and can stay in the atmosphere for over 100 years."
              ]}
          ]},
          { id: '7.2', title: "b) Impact of Ozone Depletion", content: [
               { type: 'paragraph', text: "The \"ozone hole\" allows harmful UV and infrared rays to reach Earth." },
               { type: 'list', items: [
                  "<strong>On Humans:</strong> This can cause skin cancer, cataracts, and suppress the immune system.",
                  "<strong>On Plants:</strong> These rays adversely affect plants, which can be seen in their stunted growth.",
                  "<strong>On Aquatic Life:</strong> The rays can penetrate water and destroy aquatic plants and animals."
              ]}
          ]},
          { id: '7.3', title: "c) Efforts to Prevent Ozone Depletion", content: [
               { type: 'list', items: [
                  "<strong>Montreal Protocol:</strong> In 1987, several countries signed this global agreement to reduce the production of ODS. As a result, the ozone layer is slowly recovering.",
                  "<strong>World Ozone Day:</strong> September 16th is celebrated as World Ozone Day to spread awareness about preserving the ozone layer.",
                  "<strong>Consumer Choices:</strong> We should buy products that are labeled \"ozone friendly\" or \"CFC free\".",
                  "Climate change"
              ]}
          ]}
        ]
      }
    ]
  },
  hi: { // Hinglish Version
    chapterTitle: "The Atmosphere",
    tocTitle: "Table of Contents",
    metaDescription: "Class 7 ICSE ke liye The Atmosphere par notes. Covers composition, structure, layers, Greenhouse Effect, aur Ozone Layer in simple Hinglish.",
    sections: [
      { id: '1', title: "What is the Atmosphere?", content: [
          { type: 'list', items: [
              "Atmosphere different gases ka ek mixture hai jo Earth ke chaaron taraf ek layer banata hai.",
              "Gases ki yeh layer Earth ki gravitational force ke kaaran apni jagah par rehti hai.",
              "Atmosphere, Earth ko hamare solar system ke doosre planets ke comparison mein unique banata hai.",
              "Bhaley hi atmosphere Earth ki surface se 1,600 km upar tak jaata hai, iska 99% hissa zameen se pehle 32 km ke andar hi milta hai.",
              "Iska reason yeh hai ki atmosphere ki density (motai) neeche ki layers mein zyada hoti hai kyunki upar ki layers un par neeche ki taraf pressure daalti hain."
          ]}
      ]},
      { id: '2', title: "Composition of the Atmosphere", content: [
          { type: 'paragraph', text: "Hamare atmosphere mein jo hawa hai, woh kai gases ka mix hai." },
          { type: 'list', items: [
              "<strong>Nitrogen (N₂):</strong> Yeh sabse zyada milne wali gas hai, jo atmosphere ke total volume ka lagbhag 78% banati hai.",
              "<strong>Oxygen (O₂):</strong> Yeh doosri sabse zyada milne wali gas hai, jo atmosphere ka lagbhag 21% banati hai.",
              "<strong>Other Gases:</strong> Baaki bacha 1% mein carbon dioxide, hydrogen, helium, ozone, aur argon jaise doosri gases thodi मात्रा mein hoti hain.",
              "Atmosphere ki neeche ki layers mein alag-alag amount mein water vapour aur solid particles jaise dust, salt, aur pollen bhi hote hain."
          ]}
      ]},
      { id: '3', title: "Structure of the Atmosphere", content: [
          { type: 'paragraph', text: "Atmosphere ko composition, temperature, aur density mein differences ke basis par paanch alag-alag layers mein divide kiya gaya hai." },
          { type: 'paragraph', text: "In layers ke beech koi sharp, clear boundaries nahi hain." },
          { type: 'list', items: [
              "Har layer unique hai, uski thickness alag-alag hai, aur woh Earth ki surface se different height par milti hai."
          ]}
        ],
        subSections: [
          { id: '3.1', title: "a) Troposphere", content: [
              { type: 'paragraph', text: "Yeh atmosphere ki sabse neeche wali layer hai." },
              { type: 'list', items: [
                  "<strong>Thickness:</strong> Iski motai uniform nahi hai. Equator ke upar yeh zyada (lagbhag 18 km) hai Poles ke upar se (lagbhag 8 km).",
                  "<strong>Density:</strong> Yeh sabse dense layer hai aur ismein atmosphere ke total mass ka 80% hota hai."
              ]},
              { type: 'paragraph', text: '<strong>Key Features:</strong>' },
              { type: 'list', items: [
                  "Is layer mein woh hawa hai jismein hum saans lete hain.",
                  "Almost saare dust particles aur water vapour yahin milte hain.",
                  "Saare weather changes jaise clouds, rain, snow, fog, aur storms troposphere mein hi hote hain water vapour ki presence ke kaaran."
              ]},
              { type: 'list', items: [
                  "<strong>Temperature and Pressure:</strong> Jaise jaise aap troposphere mein upar jaate hain, temperature aur air pressure dono kam ho jaate hain.",
                  "<strong>Normal Lapse Rate:</strong> Har 165 meters upar jaane par, temperature kam ho jaata hai. Ise Normal Lapse Rate kehte hain. Upar jaane par hawa bhi patli ho jaati hai. Isiliye mountaineers ko oxygen cylinders le jaane padte hain.",
                  "<strong>Function:</strong> Yeh ek blanket ki tarah kaam karti hai, Earth ko din mein extreme heat se bachati hai aur raat mein heat (terrestrial heat) ko trap karke planet ko garam rakhti hai.",
                  "<strong>Tropopause:</strong> Yeh troposphere ki upper limit hai. Yahan par height ke saath temperature kam hona band ho jaata hai.",
                  "<strong>Jet Streams:</strong> Bahut high-speed hawayein jinhe jet streams kehte hain, tropopause mein behti hain. Yeh hawayein Earth ki surface par weather ko influence kar sakti hain. Example ke liye, subtropical westerly jet streams winter mein northern India mein rainfall ka kaaran banti hain."
              ]}
          ]},
          { id: '3.2', title: "b) Stratosphere", content: [
               { type: 'paragraph', text: "Yeh layer troposphere ke upar hai aur Earth ki surface se lagbhag 50 km upar tak extend hoti hai." },
               { type: 'paragraph', text: '<strong>Key Features:</strong>' },
               { type: 'list', items: [
                  "Yeh aircrafts ke liye ideal flying conditions provide karti hai. Aisa isliye hai kyunki yeh weather disturbances se free hai water vapour na hone ke kaaran.",
                  "<strong>Ozonosphere (Ozone Layer):</strong> Stratosphere ka ek part jismein ozone gas ka high concentration hota hai, use ozonosphere kehte hain.",
                  "Ozone layer life ke liye bohot zaroori hai kyunki yeh Sun se aane wali harmful ultraviolet (UV) radiation ko absorb kar leti hai. UV rays ke is absorption se is layer ka temperature badh jaata hai."
               ]},
               { type: 'list', items: [
                  "<strong>Depletion:</strong> Harmful chlorofluorocarbon (CFC) gases ka use is important layer ko dheere-dheere deplete (patla) kar raha hai, jisse health hazards ho sakte hain.",
                  "<strong>Stratopause:</strong> Yeh stratosphere ki upper limit ko mark karta hai, jahan altitude badhne ke saath temperature phir se girne lagta hai."
               ]}
          ]},
          { id: '3.3', title: "c) Mesosphere", content: [
               { type: 'paragraph', text: "Mesosphere middle layer hai, jo stratosphere ke upar, Earth ki surface se lagbhag 50 km to 85 km ki height par hai." },
               { type: 'list', items: [
                  "<strong>Temperature:</strong> Yeh sabse thandi atmospheric layer hai, jahan kuch parts mein temperatures -100°C tak gir jaata hai. Is layer mein upar jaane par temperature kam hota hai."
               ]},
               { type: 'paragraph', text: '<strong>Key Feature:</strong>' },
               { type: 'list', items: [
                  "Yeh layer bohot important hai kyunki yeh humein meteors se protect karti hai. Jab meteors mesosphere mein enter karte hain, toh woh slow down ho jaate hain aur friction aur heat ke kaaran jal jaate hain.",
                  "Ek meteor ek chhota sa rocky body hota hai jo Earth ke atmosphere mein enter karta hai. Friction ke kaaran yeh glow karta hai aur ek light ki lakeer jaisa dikhta hai, jise shooting star bhi kehte hain."
               ]},
               { type: 'list', items: [
                  "<strong>Mesopause:</strong> Yeh mesosphere aur agli layer, thermosphere, ke beech ki boundary hai. Atmosphere ka sabse lowest temperature is point par pahunchta hai."
               ]}
          ]},
           { id: '3.4', title: "d) Thermosphere (Ionosphere)", content: [
               { type: 'paragraph', text: "Yeh layer Earth ki surface se lagbhag 400 km ki height tak extend hoti hai." },
               { type: 'list', items: [
                  "<strong>Temperature:</strong> Is layer mein height ke saath temperature badhta hai kyunki yeh various types ke solar radiation ko absorb karti hai. Yeh thermosphere ko atmosphere ki sabse hottest layer banata hai. Bhale hi yeh bohot hot hai, yahan molecules bohot kam hote hain, isliye thoda sa solar energy absorb karne se bhi temperature kaafi badh jaata hai.",
                  "<strong>Ionosphere:</strong> Sun se aane wali energy gas molecules ko electrically charged particles, jinhe ions kehte hain, mein tod deti hai. In ions ke kaaran, is layer ko ionosphere bhi kehte hain."
               ]},
               { type: 'paragraph', text: '<strong>Key Feature:</strong>' },
               { type: 'list', items: [
                  "Is layer ke ions radio waves ko Earth par wapas reflect karte hain, jisse radio broadcasts aur wireless communication possible ho paata hai."
               ]},
                { type: 'list', items: [
                    "<strong>Auroras:</strong> Yeh woh layer hai jahan auroras hote hain. Woh polar regions ke paas dikhne wale bright, beautiful light ke bands hote hain. Yeh tab hote hain jab Sun se high-energy particles ionosphere ke saath interact karte hain.",
                    "Unhe Northern Hemisphere mein aurora borealis (northern lights) aur Southern Hemisphere mein aurora australis (southern lights) kehte hain."
                ]}
          ]},
           { id: '3.5', title: "e) Exosphere", content: [
               { type: 'list', items: [
                  "Yeh atmosphere ki sabse upar wali layer hai.",
                  "Yeh hazaron kilometres moti hai aur dheere-dheere interplanetary space mein merge ho jaati hai.",
                  "Yahan hawa extremely thin aur rarefied hoti hai, jiska matlab hai ki atmospheric pressure is layer mein sabse kam hota hai.",
                  "Yeh hydrogen, helium, aur oxygen jaise bohot light gases ke traces se bani hai."
              ]}
          ]}
        ]
      },
       { id: '4', title: "Importance of the Atmosphere", content: [
            { type: 'paragraph', text: "Atmosphere un main reasons mein se ek hai jisse Earth par life possible hai." },
            { type: 'list', items: [
                "<strong>Gases for Life:</strong> Yeh humans ko saans lene ke liye oxygen aur plants ke liye carbon dioxide aur nitrogen provide karta hai.",
                "<strong>Water Cycle:</strong> Atmosphere mein maujood water vapour sabhi tarah ke precipitation (jaise rain aur snow) ke liye responsible hai."
            ]},
            { type: 'paragraph', text: "<strong>Protection:</strong>" },
            { type: 'list', items: [
                "Ozone layer humein Sun ki harmful UV rays se bachati hai.",
                "Meteors atmosphere mein hi jal jaate hain isse pehle ki woh Earth ki surface se takrayein."
            ]},
            { type: 'list', items: [
                "<strong>Temperature Regulation:</strong> Atmosphere din mein Earth ko solar radiation se garam karta hai. Raat mein, yeh Earth dwara radiate ki gayi heat (terrestrial heat) ko trap karke sabhi living things ke liye ek optimal temperature maintain karta hai. Jo gases yeh kaam karti hain unhe Greenhouse Gases (GHGs) kehte hain."
            ]}
      ]},
      { id: '5', title: "Greenhouse Effect and Global Warming", subSections: [
          { id: '5.1', title: "a) The Greenhouse Effect", content: [
              { type: 'list', items: [
                  "Din ke time, Sun ki rays Earth ki surface ko garam kar deti hain.",
                  "Raat mein, Earth is heat ko terrestrial radiation ke form mein wapas release karke thandi ho jaati hai.",
                  "Is heat ka kuch hissa atmosphere mein maujood greenhouse gases (GHGs) absorb kar leti hain aur space mein escape nahi ho paata.",
                  "Yeh natural process, jise greenhouse effect kehte hain, Earth ko raat mein extremely cold hone se bachata hai."
              ]}
          ]},
          { id: '5.2', title: "b) Global Warming", content: [
               { type: 'list', items: [
                  "Saalon se, heat-trapping gases (GHGs) ka amount atmosphere mein badh gaya hai, jisse planet aur garam ho raha hai.",
                  "Global temperatures mein is gradual rise ko global warming kehte hain.",
                  "<strong>Greenhouse Gases (GHGs):</strong> Inmein carbon dioxide, methane, nitrous oxide, aur ozone shamil hain.",
                  "<strong>Ozone Depleting Substances (ODS):</strong> Insaan-dwara banaye gaye GHGs jaise CFCs aur halons bhi hain, jo ozone layer ko destroy karte hain.",
                  "GHGs aur ODS ka high concentration Earth se radiate hone wali zyada heat ko trap karta hai, jisse atmosphere ka temperature badh jaata hai."
              ]}
          ]},
          { id: '5.3', title: "c) Causes of Global Warming", content: [
               { type: 'paragraph', text: "Kuch human activities ne global warming mein contribute kiya hai:" },
               { type: 'list', items: [
                  "<strong>1. Burning of Fossil Fuels:</strong> Industries, power plants, aur vehicles mein coal aur petroleum jaise fossil fuels jalane se large amounts mein carbon dioxide release hoti hai, jo ek major GHG hai. Yeh Industrial Revolution ke baad se badh gaya hai.",
                  "<strong>2. Harmful Emissions:</strong> Industries aur vehicles doosri polluting gases jaise oxides of nitrogen, sulphur, aur methane bhi release karte hain.",
                  "<strong>3. Deforestation and Mining:</strong> Forests major 'carbon sinks' hain (woh carbon dioxide absorb karte hain). Jab forests ko settlements, agriculture, ya mining ke liye kaata jaata hai, toh atmosphere mein carbon dioxide ka level badh jaata hai, jisse zyada heat trap hoti hai.",
                  "<strong>4. Rearing of Farm Animals:</strong> Farm animals jaise goats, sheep, aur buffaloes digestion ke dauran apne pet mein methane produce karte hain, jo unke gobar ke through atmosphere mein release hota hai.",
                  "<strong>5. Fertilisers:</strong> Crops ke liye aksar artificial nitrogen fertilisers use kiye jaate hain. Is nitrogen ka kuch hissa nitrous oxide, ek aur GHG, mein convert ho jaata hai, jo atmosphere mein enter karta hai."
              ]}
          ]},
          { id: '5.4', title: "d) Impact of Global Warming", content: [
               { type: 'list', items: [
                  "<strong>High Temperatures & Drought:</strong> High temperatures se zyada evaporation hota hai, jo mitti aur surface water ko sukha deta hai. Isse crop production par asar padta hai aur zyada droughts aate hain.",
                  "<strong>Health Issues:</strong> Garmiyon mein heat waves se heat strokes se zyada deaths ho sakti hain aur malaria jaisi beemariyan phail sakti hain.",
                  "<strong>Melting Glaciers and Flooding:</strong> Arctic aur Antarctic regions, aur saath hi snow-capped mountains par glaciers pighal rahe hain. Isse oceans mein paani ka volume badh jaata hai aur riverbanks ke aas-paas flooding ho sakti hai.",
                  "<strong>Climate Refugees:</strong> Badhte sea levels se kai islands doob sakte hain, jisse ecological aur cultural life ka loss hota hai aur climate refugees ki problem create hoti hai.",
                  "<strong>Ecosystem Damage:</strong> Aisa predict kiya gaya hai ki ek million se zyada species apne habitat ka loss experience karengi aur endangered ya extinct ho sakti hain."
              ]}
          ]}
        ]
      },
      { id: '6', title: "Ways to Reduce Global Warming", content: [
          { type: 'list', items: [
              "<strong>1. Reduce Fossil Fuel Use:</strong> Humein coal aur petroleum jaise fossil fuels ka jalana kam karna chahiye aur renewable energy sources jaise solar, wind, water, aur tidal energy par switch karna chahiye. Yeh saste, abundant, aur non-polluting hain.",
              "<strong>2. Use Eco-Friendly Products:</strong> Fossil fuels par chalne wali cars ke bajaye electric cars par switch karein. Incandescent bulbs ko Compact Fluorescent Lamps (CFLs) se replace karein, kyunki woh kam energy use karte hain.",
              "<strong>3. Save Electricity:</strong> Jab use mein na ho toh lights, fans, TVs, aur computers jaise electrical gadgets band kar dein taaki carbon emissions kam ho.",
              "<strong>4. Afforestation:</strong> Zyada ped lagane se hawa mein carbon dioxide ka amount kam karne mein help milti hai. Indian government Van Mahotsav jaise events ko promote karti hai, jo 1950 mein shuru hua ek week-long tree-planting festival hai, green cover badhane ke liye. Halaanki, pedon ki andhadhundh katai ko rokna hoga.",
              "<strong>5. Promote Green Cities:</strong> Green cities woh urban areas hain jo recycling ko encourage karke aur air, water, aur land pollution ko kam karke environmental impact ko kam karne ki koshish karte hain. Examples mein Oslo, Vancouver, aur Singapore shamil hain.",
              "<strong>6. Follow the 3Rs (Reduce, Reuse, Recycle):</strong><br>&bull; <strong>Reduce:</strong> Kam natural resources use karein taaki woh khatam na ho jayein.<br>&bull; <strong>Reuse:</strong> Resources ko phekne ke bajaye dobara use karein.<br>&bull; <strong>Recycle:</strong> Waste materials ko naye products mein convert karein. Isse waste kam hota hai aur resources conserve hote hain."
          ]}
      ]},
       { id: '7', title: "The Ozone Layer and its Importance", content: [
            { type: 'paragraph', text: "Ozone layer stratosphere mein ek shield hai jo harmful UV radiation ko Earth tak pahunchne se rok kar humein protect karti hai." }
         ],
         subSections: [
          { id: '7.1', title: "a) Causes of Ozone Layer Depletion", content: [
              { type: 'paragraph', text: "Human activities CFCs (chlorofluorocarbons) aur doosre harmful chemicals release karti hain jo ozone layer ko destroy karte hain." },
              { type: 'paragraph', text: '<strong>How CFCs Destroy Ozone:</strong>' },
              { type: 'list', items: [
                  "1. UV rays ek CFC molecule se ek chlorine atom ko alag kar deti hain.",
                  "2. Free chlorine atom ek ozone molecule se takrata hai.",
                  "3. Chlorine atom ozone molecule se ek oxygen atom ko kheench leta hai, jisse chlorine monoxide banta hai aur ek regular oxygen molecule bach jaata hai.",
                  "4. Free oxygen atom phir chlorine monoxide molecule se takrata hai, jisse chlorine atom release ho jaata hai, jo phir aur ozone molecules ko destroy karne ke liye free ho jaata hai."
              ]},
              { type: 'list', items: [
                  "<strong>Sources of ODS:</strong> CFCs purane refrigerators, air conditioners, spray cans, fire extinguishers, aur jet aircraft se release hote hain. Volcanic eruptions bhi ozone depletion mein contribute karte hain.",
                  "CO₂ se kam hone ke bawajood, CFCs ek GHG ke roop mein hazaron guna zyada powerful hain aur atmosphere mein 100 saal se zyada reh sakte hain."
              ]}
          ]},
          { id: '7.2', title: "b) Impact of Ozone Depletion", content: [
               { type: 'paragraph', text: "'Ozone hole' harmful UV aur infrared rays ko Earth tak pahunchne deta hai." },
               { type: 'list', items: [
                  "<strong>On Humans:</strong> Isse skin cancer, cataracts ho sakte hain, aur immune system dab सकता है.",
                  "<strong>On Plants:</strong> Yeh rays plants par bura asar daalti hain, jo unke ruke hue growth mein dekha ja sakta hai.",
                  "<strong>On Aquatic Life:</strong> Yeh rays paani mein ghus kar aquatic plants aur animals ko destroy kar sakti hain."
              ]}
          ]},
          { id: '7.3', title: "c) Efforts to Prevent Ozone Depletion", content: [
               { type: 'list', items: [
                  "<strong>Montreal Protocol:</strong> 1987 mein, kai countries ne is global agreement par sign kiya ODS ka production kam karne ke liye. Iske result mein, ozone layer dheere-dheere recover ho rahi hai.",
                  "<strong>World Ozone Day:</strong> September 16th ko World Ozone Day ke roop mein manaya jaata hai taaki ozone layer ko bachane ke baare mein awareness phailayi ja sake.",
                  "<strong>Consumer Choices:</strong> Humein aise products khareedne chahiye jin par 'ozone friendly' ya 'CFC free' ka label ho.",
                  "Climate change"
              ]}
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

const ColumnsComponent = ({ content }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 my-4 items-start">
            {content.map((column, index) => (
                <div key={index} style={{ flexBasis: '100%' }}>
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
            <figure key={index} className="w-full my-4">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-contain rounded-lg shadow-md" />
            </figure>
        );
      case 'columns':
        return <ColumnsComponent key={index} content={item.content} />;
      default:
        return null;
    }
  });
};

const TocComponent = ({ currentContent, language, handleLanguageChange, theme, handleThemeChange, activeSection, openSections, toggleSection, isMobile, closeToc }) => {
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = React.useState(false);

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
function App() {
  const [language, setLanguage] = React.useState('en');
  const [theme, setTheme] = React.useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const [openSections, setOpenSections] = React.useState({});
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);

  const currentContent = notesData[language];
  
  // Effect to apply theme changes
  React.useEffect(() => {
    const currentTheme = themes[theme];
    for (const key in currentTheme.cssVars) {
      document.documentElement.style.setProperty(key, currentTheme.cssVars[key]);
    }
    document.body.style.backgroundColor = currentTheme.cssVars['--theme-bg'];
  }, [theme]);

  // Effect for scrollspy functionality
  React.useEffect(() => {
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
    React.useEffect(() => {
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vardaanlearning.com/notes/class-7-the-atmosphere" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088015/layers_of_atmosphere.jpg",  // A representative image
    "author": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vardaanlearning.com/logo.png" // Replace with your logo URL
      }
    },
    "datePublished": "2025-09-06",
    "dateModified": "2025-09-06"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 7 ICSE Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 7, ICSE, The Atmosphere, Troposphere, Stratosphere, Greenhouse Effect, Ozone Layer, Vardaan Learning Institute, Notes" />
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
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E");
        }
        .prose { color: currentColor; }
        .prose strong { color: currentColor; }
      `}</style>
      
      <header 
          style={{
            marginTop: '70px',
            backgroundColor: themes[theme].cssVars['--theme-header-bg'],
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
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

export default App;