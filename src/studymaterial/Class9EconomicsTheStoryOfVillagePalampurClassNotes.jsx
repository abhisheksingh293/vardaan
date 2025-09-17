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


// Data for the entire chapter, structured for dual-language support
const notesData = {
  en: { // Standard English Version
    chapterTitle: "The Story of Village Palampur",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE Economics notes on The Story of Village Palampur. Covers factors of production, farming, non-farm activities, and key economic concepts.",
    sections: [
      { id: '1', title: "Overview and Introduction to Palampur", content: [
          { type: 'paragraph', text: "The story of Palampur serves as an introduction to basic economic concepts related to production, using a hypothetical village as a model." },
          { type: 'list', items: [
              "<strong>Main Activities:</strong> <strong>Farming</strong> is the primary activity, with <strong>75%</strong> of the working population dependent on it. <strong>Non-farm activities</strong> like small-scale manufacturing, dairy, and transport are practiced on a limited scale by the remaining <strong>25%</strong> of the population.",
              "<strong>Connectivity:</strong> Palampur is well-connected by an all-weather road to the large village of <strong>Raiganj</strong> (3 km away) and the small town of <strong>Shahpur</strong>.",
              "<strong>Infrastructure:</strong> The village boasts a well-developed system with:",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Electricity:</strong> Powers all field tubewells and is available in most homes.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Education:</strong> Two primary schools and one high school.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Health:</strong> A government-run Primary Health Centre and a private dispensary.",
              "<strong>Demographics:</strong> The village has about <strong>450 families</strong>.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>80 upper-caste families</strong> own the majority of the land and live in large, well-built houses.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Dalits (SCs)</strong> make up one-third of the population, are often landless, and live in smaller houses made of mud and straw."
          ]}
      ]},
      { id: '2', title: "The Four Factors of Production", content: [
          { type: 'paragraph', text: "To produce any goods or services, four key factors are required:" },
          { type: 'list', items: [
              "<strong>Land:</strong> Natural resources such as soil, water, forests, and minerals.",
              "<strong>Labour:</strong> The human effort, which can be manual or intellectual.",
              "<strong>Physical Capital:</strong> The inputs required during production. This is divided into:",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Fixed Capital:</strong> Reusable assets like tools, buildings, and machines (e.g., a plough, a computer).",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Working Capital:</strong> Items used up during production, such as raw materials and money for payments.",
              "<strong>Human Capital:</strong> The knowledge and enterprise needed to combine the other three factors to create a final product."
          ]}
      ]},
      { id: '3', title: "Farming in Palampur", subSections: [
          { id: '3.1', title: "a) Land is Fixed", content: [
               { type: 'list', items: [
                  "A fundamental constraint in farming is that the <strong>land area for cultivation is fixed</strong>. Since 1960, there has been no expansion of farmland in Palampur.",
                  "The standard unit of land measurement is a <strong>hectare</strong>."
              ]}
          ]},
          { id: '3.2', title: "b) Growing More from the Same Land", content: [
               { type: 'paragraph', text: "Farmers in Palampur maximize their output from the limited land in two main ways:" },
               { type: 'list', items: [
                  "<strong>Multiple Cropping:</strong> This is the practice of growing more than one crop on the same piece of land in a year, made possible by a well-developed irrigation system.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Kharif (Rainy Season):</strong> <strong>Jowar</strong> and <strong>bajra</strong> are grown, primarily as cattle feed.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Winter Season:</strong> <strong>Potato</strong> is grown between October and December, followed by <strong>wheat</strong> for the main Rabi crop. The surplus wheat is sold at the Raiganj market.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Annual Crop:</strong> <strong>Sugarcane</strong> is also grown and harvested once a year. It's sold as a raw product or as jaggery to traders in Shahpur.",
                  "<strong>Modern Farming Methods:</strong> The <strong>Green Revolution</strong> of the late 1960s introduced modern techniques to Indian agriculture.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>High Yielding Variety (HYV) Seeds:</strong> These seeds produce a much greater amount of grain per plant compared to traditional seeds.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Requirements:</strong> HYV seeds require a combination of inputs to be successful: abundant irrigation, chemical fertilizers, and pesticides.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Impact:</strong> In Palampur, the use of HYV seeds increased the wheat yield dramatically from <strong>1300 kg per hectare</strong> to <strong>3200 kg per hectare</strong>, creating a large surplus for sale."
               ]}
          ]},
          { id: '3.3', title: "c) Will the Land Sustain?", content: [
              { type: 'paragraph', text: "Modern farming methods have put a strain on natural resources:" },
              { type: 'list', items: [
                  "<strong>Loss of Soil Fertility:</strong> The heavy use of chemical fertilizers has degraded the soil.",
                  "<strong>Water Table Depletion:</strong> The continuous use of tubewells for irrigation has led to a fall in the groundwater level."
              ]}
          ]},
          { id: '3.4', title: "d) Unequal Land Distribution", content: [
               { type: 'paragraph', text: "Land ownership in Palampur is highly unequal:" },
               { type: 'list', items: [
                  "<strong>Landless Families:</strong> <strong>150 families</strong> (one-third of the village) own no land.",
                  "<strong>Small Farmers:</strong> <strong>240 families</strong> cultivate plots of less than 2 hectares, which doesn't provide sufficient income. The story of <strong>Gobind</strong>, who had 2.25 hectares, illustrates how his land was divided among his three sons, leaving each with only 0.75 hectares, making it difficult for them to make a living.",
                  "<strong>Medium and Large Farmers:</strong> <strong>60 families</strong> own more than 2 hectares of land, with a few having farms larger than 10 hectares.",
                  "<strong>National Picture:</strong> This reflects the situation across India, where <strong>85% of farmers</strong> are smallholders who cultivate only <strong>44.6% of the total land</strong>, while the remaining <strong>15% of medium and large farmers</strong> control <strong>55.4%</strong> of the land."
              ]}
          ]},
          { id: '3.5', title: "e) Who Provides the Labour?", content: [
               { type: 'list', items: [
                  "<strong>Small farmers</strong> provide their own labour, working on their fields with their families.",
                  "<strong>Medium and large farmers</strong> hire <strong>farm labourers</strong>. These labourers are landless or come from small farming families.",
                  "<strong>Wages:</strong> Due to heavy competition for work, labourers are often paid less than the government-mandated minimum wage. The conversation between <strong>Dala and Ramkali</strong>, two of the poorest labourers, reveals their struggle. Dala gets only <strong>₹160</strong> a day against the minimum wage of ₹300. They also face reduced work due to the use of machines like harvesters and tractors."
               ]}
          ]},
          { id: '3.6', title: "f) The Capital Needed for Farming", content: [
               { type: 'paragraph', text: "Modern farming requires more cash than before." },
               { type: 'list', items: [
                  "<strong>Small Farmers:</strong> They lack savings and must <strong>borrow money</strong> from large farmers or moneylenders at very high interest rates. <strong>Savita</strong>, a small farmer, has to take a loan from <strong>Tejpal Singh</strong> at 24% interest and must also promise to work on his field for a low wage of ₹100 per day.",
                  "<strong>Medium and Large Farmers:</strong> They have their own <strong>savings from farming</strong>, which they use to fund their next season's crops."
               ]}
          ]},
          { id: '3.7', title: "g) Sale of Surplus Farm Products", content: [
               { type: 'paragraph', text: "Farmers sell the portion of their crops left over after meeting their family's needs." },
               { type: 'list', items: [
                  "<strong>Small farmers</strong> have little to no surplus.",
                  "<strong>Medium and large farmers,</strong> like <strong>Tejpal Singh</strong> who has a surplus of 350 quintals of wheat, supply the market. He uses his earnings to save, lend to others, and buy new fixed capital like tractors."
               ]}
          ]}
        ]
      },
      { id: '4', title: "Non-Farm Activities in Palampur", content: [
          { type: 'paragraph', text: "These activities provide alternative employment to about 25% of the population." },
          { type: 'list', items: [
              "<strong>Dairy:</strong> A common activity where families sell milk from their buffaloes in the nearby village of Raiganj, which has collection and chilling centers.",
              "<strong>Small-Scale Manufacturing:</strong> This involves simple production methods, usually done at home with family labour. For example, <strong>Mishrilal</strong> uses a mechanical sugarcane crusher to make and sell jaggery.",
              "<strong>Shopkeeping:</strong> Traders buy goods from wholesale city markets and sell them in village general stores. For instance, <strong>Kareem</strong> started a computer class centre to serve students in the village.",
              "<strong>Transport:</strong> A growing sector that connects Palampur to other areas. This includes rickshaws, jeeps, tractors, and trucks. <strong>Kishora</strong>, a labourer, took a bank loan to buy a buffalo and a cart, which he uses to sell milk and transport goods, allowing him to earn more than before."
          ]}
      ]}
    ]
  },
  hi: { // Hinglish Version
    chapterTitle: "The Story of Village Palampur",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE Economics ke liye Palampur gaon ki kahani par notes. Production ke factors, kheti, aur non-farm activities simple Hinglish mein.",
    sections: [
      { id: '1', title: "Overview and Introduction to Palampur", content: [
          { type: 'paragraph', text: "Palampur ki kahani production se jude basic economic concepts ko samjhane ke liye ek introduction hai, jismein ek kalpanik gaon ko model ke taur par use kiya gaya hai." },
          { type: 'list', items: [
              "<strong>Main Activities:</strong> <strong>Kheti (Farming)</strong> yahan ka main kaam hai, jiss par <strong>75%</strong> kaam karne wali population nirbhar hai. <strong>Non-farm activities</strong> jaise small-scale manufacturing, dairy, aur transport, bache hue <strong>25%</strong> log limited scale par karte hain.",
              "<strong>Connectivity:</strong> Palampur ek all-weather road se bade gaon <strong>Raiganj</strong> (3 km door) aur chhote kasbe <strong>Shahpur</strong> se achhe se juda hua hai.",
              "<strong>Infrastructure:</strong> Gaon mein ek well-developed system hai:",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Bijli (Electricity):</strong> Khet ke sabhi tubewells ko power deti hai aur zyada tar gharon mein available hai.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Shiksha (Education):</strong> Do primary schools aur ek high school hai.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Swasthya (Health):</strong> Ek sarkari Primary Health Centre aur ek private dispensary hai.",
              "<strong>Demographics:</strong> Gaon mein lagbhag <strong>450 parivar</strong> hain.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>80 oonchi jaati ke parivar</strong> zyadatar zameen ke malik hain aur bade, pakke gharon mein rehte hain.",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Dalit (SCs)</strong> population ka ek-tihaai hissa hain, aksar unke paas zameen nahi hoti, aur woh mitti aur phoos ke bane chhote gharon mein rehte hain."
          ]}
      ]},
      { id: '2', title: "The Four Factors of Production", content: [
          { type: 'paragraph', text: "Kisi bhi saaman ya service ko produce karne ke liye, chaar zaroori factors chahiye hote hain:" },
          { type: 'list', items: [
              "<strong>Land (Zameen):</strong> Prakritik sansadhan jaise mitti, paani, jangal, aur khanij.",
              "<strong>Labour (Mehnat):</strong> Insaan ki koshish, jo manual ya dimagi ho sakti hai.",
              "<strong>Physical Capital (Bhautik Poonji):</strong> Production ke dauran zaroori inputs. Iske do hisse hain:",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Fixed Capital:</strong> Dobara use hone wale assets jaise auzaar, buildings, aur machinein (jaise, ek hal, ek computer).",
              "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Working Capital:</strong> Production mein istemal ho jaane wali cheezein, jaise kachha maal aur payments ke liye paisa.",
              "<strong>Human Capital (Maanav Poonji):</strong> Baaki teen factors ko milakar ek final product banane ke liye zaroori gyan aur enterprise."
          ]}
      ]},
       { id: '3', title: "Farming in Palampur", subSections: [
          { id: '3.1', title: "a) Land is Fixed", content: [
               { type: 'list', items: [
                  "Kheti mein ek sabse badi rukawat yeh hai ki <strong>kheti ke liye zameen ka area fixed hai</strong>. 1960 se, Palampur mein kheti ki zameen mein koi vistar nahi hua hai.",
                  "Zameen naapne ki standard unit <strong>hectare</strong> hai."
              ]}
          ]},
          { id: '3.2', title: "b) Growing More from the Same Land", content: [
               { type: 'paragraph', text: "Palampur ke kisan seemit zameen se apna output badhane ke liye do mukhya tareeke apnate hain:" },
               { type: 'list', items: [
                  "<strong>Multiple Cropping:</strong> Yeh ek saal mein ek hi zameen par ek se zyada fasal ugane ka tareeka hai, jo ek achhe irrigation system ke kaaran possible hai.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Kharif (Barsaat ka Mausam):</strong> <strong>Jowar</strong> aur <strong>bajra</strong> ugaya jaata hai, mukhya roop se pashuon ke chaare ke liye.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Sardi ka Mausam:</strong> October se December ke beech <strong>Aaloo (Potato)</strong> ugaya jaata hai, uske baad mukhya Rabi fasal ke liye <strong>Gehu (wheat)</strong>. Extra gehu Raiganj ke market mein bech diya jaata hai.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Saalana Fasal:</strong> <strong>Ganna (Sugarcane)</strong> bhi ugaya jaata hai aur saal mein ek baar kata jaata hai. Ise kachhe maal ke roop mein ya gud ke roop mein Shahpur ke vyaapariyon ko bech diya jaata hai.",
                  "<strong>Modern Farming Methods:</strong> 1960s ke ant mein <strong>Green Revolution</strong> ne Bhartiya kheti mein modern techniques introduce ki.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>High Yielding Variety (HYV) Seeds:</strong> Yeh beej paramparik beejon ki tulna mein per plant bahut zyada anaaj paida karte hain.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Zarooratein:</strong> HYV beejon ko safal hone ke liye inputs ka combination chahiye: bharpoor sinchai, chemical fertilizers, aur pesticides.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Asar:</strong> Palampur mein, HYV beejon ke istemal se gehu ki paidawar <strong>1300 kg per hectare</strong> se badhkar <strong>3200 kg per hectare</strong> ho gayi, jisse bechne ke liye bada surplus paida hua."
               ]}
          ]},
          { id: '3.3', title: "c) Will the Land Sustain?", content: [
              { type: 'paragraph', text: "Modern farming methods ne prakritik sansadhanon par bojh daala hai:" },
              { type: 'list', items: [
                  "<strong>Mitti ki Upjau Shakti ka Kam Hona:</strong> Chemical fertilizers ke bhaari istemal ne mitti ko kharab kar diya hai.",
                  "<strong>Paani ka Level Girna:</strong> Sinchai ke liye tubewells ke lagatar istemal se zameen ke neeche paani ka level gir gaya hai."
              ]}
          ]},
          { id: '3.4', title: "d) Unequal Land Distribution", content: [
               { type: 'paragraph', text: "Palampur mein zameen ka malkana haq bahut aasaman hai:" },
               { type: 'list', items: [
                  "<strong>Bhoomiheen Parivar:</strong> <strong>150 parivar</strong> (gaon ka ek-tihaai) ke paas koi zameen nahi hai.",
                  "<strong>Chhote Kisan:</strong> <strong>240 parivar</strong> 2 hectare se kam ke plots par kheti karte hain, jisse paryapt aamdani nahi hoti. <strong>Gobind</strong> ki kahani, jiske paas 2.25 hectare the, batati hai ki kaise uski zameen uske teen beton ke beech bant gayi, har ek ke paas sirf 0.75 hectare bacha, jisse unka guzara mushkil ho gaya.",
                  "<strong>Madhyam aur Bade Kisan:</strong> <strong>60 parivar</strong> ke paas 2 hectare se zyada zameen hai, kuch ke paas 10 hectare se bhi bade khet hain.",
                  "<strong>Rashtriya Tasveer:</strong> Yeh poore Bharat ki sthiti ko darshata hai, jahan <strong>85% kisan</strong> chhote kisan hain jo kul zameen ke sirf <strong>44.6%</strong> par kheti karte hain, jabki baaki <strong>15% madhyam aur bade kisan</strong> <strong>55.4%</strong> zameen ko control karte hain."
              ]}
          ]},
          { id: '3.5', title: "e) Who Provides the Labour?", content: [
               { type: 'list', items: [
                  "<strong>Chhote kisan</strong> apni mehnat khud karte hain, apne parivaron ke saath apne kheton mein kaam karte hain.",
                  "<strong>Madhyam aur bade kisan</strong> <strong>khet mazdooron</strong> ko kaam par rakhte hain. Yeh mazdoor bhoomiheen hote hain ya chhote kisano ke parivaron se aate hain.",
                  "<strong>Mazdoori:</strong> Kaam ke liye bhaari competition ke kaaran, mazdooron ko aksar sarkar dwara nirdharit minimum wage se kam paisa milta hai. Do sabse gareeb mazdooron, <strong>Dala aur Ramkali</strong> ke beech ki batchit unki pareshani ko batati hai. Dala ko ₹300 ke minimum wage ke khilaf sirf <strong>₹160</strong> milte hain. Unhe harvester aur tractor jaisi machineon ke istemal ke kaaran kaam bhi kam milta hai."
               ]}
          ]},
          { id: '3.6', title: "f) The Capital Needed for Farming", content: [
               { type: 'paragraph', text: "Modern farming mein pehle se zyada cash ki zaroorat hoti hai." },
               { type: 'list', items: [
                  "<strong>Chhote Kisan:</strong> Unke paas savings nahi hoti aur unhe bade kisano ya sahukaron se bahut oonche byaj dar par <strong>paisa udhaar</strong> lena padta hai. <strong>Savita</strong>, ek chhoti kisan, ko <strong>Tejpal Singh</strong> se 24% byaj par loan lena padta hai aur saath hi uske khet mein ₹100 pratidin ki kam mazdoori par kaam karne ka wada bhi karna padta hai.",
                  "<strong>Madhyam aur Bade Kisan:</strong> Unke paas <strong>kheti se apni savings</strong> hoti hai, jiska istemal ve agle season ki faslon ko fund karne ke liye karte hain."
               ]}
          ]},
          { id: '3.7', title: "g) Sale of Surplus Farm Products", content: [
               { type: 'paragraph', text: "Kisan apni parivar ki zarooraton ko poora karne ke baad bachi hui fasal ko bech dete hain." },
               { type: 'list', items: [
                  "<strong>Chhote kisano</strong> ke paas bahut kam ya koi surplus nahi hota.",
                  "<strong>Madhyam aur bade kisan,</strong> jaise <strong>Tejpal Singh</strong> jiske paas 350 quintal gehu ka surplus hai, market ko supply karte hain. Woh apni kamai ko bachane, doosron ko udhaar dene, aur tractor jaise naye fixed capital khareedne ke liye istemal karta hai."
               ]}
          ]}
        ]
      },
      { id: '4', title: "Non-Farm Activities in Palampur", content: [
          { type: 'paragraph', text: "Yeh activities lagbhag 25% population ko alternative rozgar deti hain." },
          { type: 'list', items: [
              "<strong>Dairy:</strong> Ek aam kaam jahan parivar apni bhainson ka doodh paas ke gaon Raiganj mein bechte hain, jahan collection aur chilling centers hain.",
              "<strong>Small-Scale Manufacturing:</strong> Ismein simple production methods shamil hain, jo aमतौर par ghar par parivar ke logon dwara kiya jaata hai. Jaise, <strong>Mishrilal</strong> gud banane aur bechne ke liye ek mechanical sugarcane crusher ka istemal karta hai.",
              "<strong>Dukandari (Shopkeeping):</strong> Vyaapari shehron ke thhok baazaron se saaman khareedte hain aur unhe gaon ke general stores mein bechte hain. Jaise, <strong>Kareem</strong> ne gaon ke students ke liye ek computer class centre shuru kiya.",
              "<strong>Parivahan (Transport):</strong> Ek badhta hua sector jo Palampur ko doosre ilakon se jodta hai. Ismein rickshaws, jeeps, tractors, aur trucks shamil hain. <strong>Kishora</strong>, ek mazdoor, ne ek bhains aur ek gaadi khareedne ke liye bank se loan liya, jiska istemal woh doodh bechne aur saaman dhone ke liye karta hai, jisse woh pehle se zyada kama pata hai."
          ]}
      ]}
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
      "@id": "https://vardaanlearning.com/notes/class-9-story-of-village-palampur" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088015/indian_village_farming.jpg",  // A representative image
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
    "datePublished": "2025-09-16",
    "dateModified": "2025-09-16"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 9 CBSE Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 9, CBSE, Economics, Story of Village Palampur, Factors of Production, Farming in India, Non-farm activities, Vardaan Learning Institute, Notes" />
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
