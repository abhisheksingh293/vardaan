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
    chapterTitle: "Chapter 6: Manufacturing Industries",
    tocTitle: "Table of Contents",
    metaDescription: "In-depth Class 10 Geography notes on Manufacturing Industries. Learn about agro-based and mineral-based industries, industrial pollution, and more. Perfect for CBSE board exam preparation from Vardaan Learning Institute.",
    sections: [
      {
        id: '1',
        title: "What is Manufacturing?",
        content: [
          { type: 'paragraph', text: "Manufacturing is the production of goods in large quantities after processing raw materials to turn them into more valuable products. People employed in these activities are part of the secondary sector. The economic strength of a country is measured by the development of its manufacturing industries." },
          { type: 'list', items: [
              "Paper is manufactured from wood.",
              "Sugar is manufactured from sugarcane.",
              "Iron and steel are manufactured from iron ore.",
              "Aluminum is manufactured from bauxite."
          ]}
        ]
      },
      {
        id: '2',
        title: "Importance of Manufacturing",
        content: [
          { type: 'paragraph', text: "The manufacturing sector is considered the backbone of development for a country. Here’s why it's so important:" },
          { type: 'list', items: [
              "<strong>Modernized Agriculture:</strong> Manufacturing industries help in modernizing agriculture by producing equipment like irrigation pumps and inputs like fertilizers.",
              "<strong>Reduces Dependence on Agriculture:</strong> It creates jobs in the secondary and tertiary sectors, reducing over-reliance on agricultural income.",
              "<strong>Fights Poverty and Unemployment:</strong> Industrial development is crucial for eradicating unemployment and poverty.",
              "<strong>Reduces Regional Differences:</strong> Setting up industries in backward areas helps in their development.",
              "<strong>Boosts Trade and Earns Foreign Money:</strong> Exporting manufactured goods expands trade and brings in foreign exchange.",
              "<strong>Creates Prosperity:</strong> Countries that transform raw materials into a variety of finished goods are more prosperous."
          ]},
          { type: 'heading', text: "Agriculture and Industry are Interlinked"},
          { type: 'paragraph', text: "They are not separate from each other; they move hand in hand. Industries depend on agriculture for raw materials, and they sell their finished products to farmers. In today's world of globalization, our industry needs to be more efficient and competitive."}
        ]
      },
      {
        id: '3',
        title: "Classification of Industries",
        content: [
            { type: 'paragraph', text: "Industries can be grouped or classified in different ways to understand them better."}
        ],
        subSections: [
            { id: '3.1', title: "On the Basis of Raw Materials Used", content: [ {type: 'list', items: ["<strong>Agro-Based:</strong> Use agricultural raw materials (e.g., cotton, sugar).", "<strong>Mineral-Based:</strong> Use minerals and metals as raw materials (e.g., iron and steel, cement)."]}]},
            { id: '3.2', title: "According to Their Main Role", content: [ {type: 'list', items: ["<strong>Basic or Key Industries:</strong> Their products are used as raw materials by other industries (e.g., iron and steel).", "<strong>Consumer Industries:</strong> Make goods for direct use by consumers (e.g., sugar, toothpaste)."]}]},
            { id: '3.3', title: "On the Basis of Capital Investment", content: [ {type: 'paragraph', text: "A <strong>Small-Scale Industry</strong> is defined based on the maximum investment allowed on the assets of a unit (currently rupees one crore)."}]},
            { id: '3.4', title: "On the Basis of Ownership", content: [ {type: 'list', items: ["<strong>Public Sector:</strong> Owned by the government (e.g., BHEL, SAIL).", "<strong>Private Sector:</strong> Owned by individuals (e.g., TISCO, Bajaj Auto).", "<strong>Joint Sector:</strong> Run jointly by the state and private individuals (e.g., Oil India Ltd.).", "<strong>Cooperative Sector:</strong> Owned and operated by producers or suppliers of raw materials, workers, or both (e.g., sugar industry in Maharashtra)."]}]},
            { id: '3.5', title: "Based on Bulk and Weight", content: [ {type: 'list', items: ["<strong>Heavy Industries:</strong> Use heavy raw materials and produce heavy goods (e.g., iron and steel).", "<strong>Light Industries:</strong> Use light raw materials and produce light goods (e.g., electrical goods)."]}]}
        ]
      },
      {
        id: '4',
        title: "Agro-Based Industries",
        subSections: [
            {
                id: '4.1',
                title: 'Textile Industry',
                content: [
                    { type: 'paragraph', text: "It holds a unique position in the Indian economy, contributing significantly to industrial production, employment, and foreign exchange. It is the only industry that is self-reliant and complete in the value chain, from raw fiber to finished garments." },
                    { type: 'heading', text: "Cotton Textiles:" },
                    { type: 'paragraph', text: "In ancient India, cotton textiles were made with hand spinning. The first successful textile mill was established in Mumbai in 1854. Initially, the industry was concentrated in Maharashtra and Gujarat due to the availability of raw cotton, market, transport, and a moist climate. While spinning is still centralized, weaving is highly decentralized. India has world-class production in spinning, but our weaving supplies low-quality fabric." },
                    { type: 'heading', text: "Jute Textiles:" },
                    { type: 'paragraph', text: "India is the largest producer of raw jute and jute goods. Most mills are located in West Bengal along the Hugli river. The first jute mill was set up near Kolkata in 1855. The industry's location is supported by proximity to jute areas, inexpensive water transport, cheap labor, and port facilities in Kolkata." }
                ]
            },
            {
                id: '4.2',
                title: 'Sugar Industry',
                content: [
                    { type: 'paragraph', text: "India is the second-largest world producer of sugar and the largest of gur and khandsari. Since sugarcane is bulky and its sucrose content reduces during transport, mills are located in sugarcane-growing states like Uttar Pradesh and Maharashtra. The industry is seasonal, making it ideal for the cooperative sector. Recently, mills have shifted to southern and western states due to higher sucrose content in the cane and a longer crushing season." }
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Mineral-Based Industries",
        subSections: [
            {
                id: '5.1',
                title: 'Iron and Steel Industry',
                content: [
                    { type: 'paragraph', text: "This is a basic and heavy industry, as other industries depend on it for machinery. The production and consumption of steel are often regarded as an index of a country's development. Raw materials like iron ore, coking coal, and limestone are required. The Chhotanagpur plateau region has the maximum concentration of these industries." }
                ]
            },
            {
                id: '5.2',
                title: 'Aluminum Smelting',
                content: [
                    { type: 'paragraph', text: "This is the second most important metallurgical industry. Aluminum is light, resistant to corrosion, and a good conductor of heat. It is used in aircraft, utensils, and wires. The key factors for plant location are a regular supply of electricity and an assured source of bauxite at minimum cost." }
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Other Important Industries",
        subSections: [
            {id: '6.1', title: 'Chemical Industry', content: [{type: 'paragraph', text: "India's chemical industry is fast-growing. Inorganic chemicals include sulphuric acid and soda ash. Organic chemicals include petrochemicals, used for synthetic fibers, plastics, and drugs."}]},
            {id: '6.2', title: 'Fertilizer Industry', content: [{type: 'paragraph', text: "This industry produces nitrogenous, phosphatic, and complex fertilizers. Potash is entirely imported. The industry expanded significantly after the Green Revolution."}]},
            {id: '6.3', title: 'Cement Industry', content: [{type: 'paragraph', text: "Essential for construction, this industry uses bulky raw materials like limestone, silica, and gypsum. The first plant was set up in Chennai in 1904."}]},
            {id: '6.4', title: 'Automobile Industry', content: [{type: 'paragraph', text: "Provides vehicles for transport. The industry has grown rapidly after economic liberalization and is located around major cities like Delhi, Mumbai, and Chennai."}]},
            {id: '6.5', title: 'IT and Electronics Industry', content: [{type: 'paragraph', text: "Covers a wide range of products from televisions to computers. Bengaluru is the electronic capital of India. This industry is a major source of employment."}]}
        ]
      },
      {
        id: '7',
        title: "Industrial Pollution and Environmental Degradation",
        content: [
            { type: 'paragraph', text: "Industries contribute significantly to economic growth but also cause four main types of pollution: air, water, land, and noise." },
            { type: 'list', items: [
                "<strong>Air Pollution:</strong> Caused by undesirable gases like sulfur dioxide and carbon monoxide, and particulate matter from smoke.",
                "<strong>Water Pollution:</strong> Caused by industrial wastes and effluents discharged into rivers, from industries like paper, chemical, and textile.",
                "<strong>Thermal Pollution:</strong> Occurs when hot water from factories is drained into rivers, harming aquatic life.",
                "<strong>Land and Soil Pollution:</strong> Dumping of industrial wastes makes the soil useless and can contaminate groundwater.",
                "<strong>Noise Pollution:</strong> Unwanted sound from industrial machinery can cause stress and health problems."
            ]}
        ]
      },
      {
        id: '8',
        title: "Control of Environmental Degradation",
        content: [
            { type: 'paragraph', text: "It is crucial to control industrial pollution for sustainable development." },
            { type: 'list', items: [
                "<strong>Controlling Water Pollution:</strong> Minimizing water use by reusing/recycling, harvesting rainwater, and treating industrial effluents before release.",
                "<strong>Controlling Air Pollution:</strong> Fitting smokestacks with filters and precipitators, and using cleaner fuels like oil or gas instead of coal.",
                "<strong>Controlling Noise Pollution:</strong> Using machinery with silencers and noise-absorbing materials.",
                "<strong>Sustainable Development:</strong> The main challenge is to integrate economic development with environmental concerns. NTPC shows the way by adopting a proactive approach to preserving the natural environment."
            ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Chapter 6: Manufacturing Industries",
    tocTitle: "Table of Contents",
    metaDescription: "Class 10 Geography Chapter 6 'Manufacturing Industries' ke Hinglish notes. Krishi-aadharit aur khanij-aadharit udyogon, audyogik pradooshan aur niyantran ke baare mein jaanein. CBSE board pariksha ke liye Vardaan Learning Institute dwara.",
    sections: [
      {
        id: '1',
        title: "What is Manufacturing?",
        content: [
          { type: 'paragraph', text: "Manufacturing (Vinirman) kachche maal ko adhik mulyavan utpadon mein badalne ke liye badi matra mein vastuon ka utpadan hai. In gatividhiyon mein niyojit log secondary sector ka hissa hain. Kisi desh ki aarthik shakti uske vinirman udyogon ke vikas se maapi jaati hai." },
          { type: 'list', items: [
              "Kagaz lakdi se banta hai.",
              "Chini ganne se banti hai.",
              "Loha aur ispat lauh ayask se bante hain.",
              "Aluminum bauxite se banta hai."
          ]}
        ]
      },
      {
        id: '2',
        title: "Importance of Manufacturing",
        content: [
          { type: 'paragraph', text: "Vinirman kshetra ko kisi desh ke vikas, visheshkar uske aarthik vikas ki reedh mana jaata hai. Yah mahatvapurna kyun hai:" },
          { type: 'list', items: [
              "<strong>Modernized Agriculture:</strong> Vinirman udyog sinchai pump, urvarak, keetnashak jaise upkaran banakar krishi ko aadhunik banane mein madad karte hain.",
              "<strong>Reduces Dependence on Agriculture:</strong> Yah secondary aur tertiary kshetron mein naukriyan paida karta hai, jisse logon ko sirf krishi aay par nirbhar nahi rehna padta.",
              "<strong>Fights Poverty and Unemployment:</strong> Audyogik vikas berozgari aur garibi ko mitane ke liye avashyak hai.",
              "<strong>Reduces Regional Differences:</strong> Pichde kshetron mein udyog sthapit karne se un kshetron ka vikas hota hai.",
              "<strong>Boosts Trade and Earns Foreign Money:</strong> Nirmit vastuon ka niryat desh ke vyapar ko badhata hai aur videshi mudra lata hai.",
              "<strong>Creates Prosperity:</strong> Jo desh kachche maal ko vibhinn prakar ke taiyar vastuon mein badal sakte hain, ve adhik samriddh hote hain."
          ]},
          { type: 'heading', text: "Agriculture and Industry are Interlinked"},
          { type: 'paragraph', text: "Ve ek dusre se alag nahi hain; ve saath-saath chalte hain. Udyog kachche maal ke liye krishi par nirbhar karte hain, aur ve apne taiyar utpad kisanon ko bechte hain. Vaishvikaran ke aaj ke daur mein, hamare udyog ko adhik kushal aur pratispardhi hone ki avashyakta hai."}
        ]
      },
      {
        id: '3',
        title: "Classification of Industries",
        content: [
            { type: 'paragraph', text: "Udyogon ko behtar samajhne ke liye alag-alag tarikon se vargikrit kiya ja sakta hai."}
        ],
        subSections: [
            { id: '3.1', title: "On the Basis of Raw Materials Used", content: [ {type: 'list', items: ["<strong>Krishi-Aadharit (Agro-Based):</strong> Krishi se kachcha maal prapt karte hain (उदा., kapas, chini).", "<strong>Khanij-Aadharit (Mineral-Based):</strong> Khanij aur dhaatuon ka upyog kachche maal ke roop mein karte hain (उदा., loha aur ispat, cement)."]}]},
            { id: '3.2', title: "According to Their Main Role", content: [ {type: 'list', items: ["<strong>Buniyadi ya Pramukh Udyog (Basic or Key Industries):</strong> Inke utpadon ka upyog anya udyogon dwara kachche maal ke roop mein kiya jaata hai (उदा., loha aur ispat).", "<strong>Upbhokta Udyog (Consumer Industries):</strong> Upbhoktaon dwara seedhe upyog ke liye vastuon ka nirman karte hain (उदा., chini, toothpaste)."]}]},
            { id: '3.3', title: "On the Basis of Capital Investment", content: [ {type: 'paragraph', text: "Ek <strong>Laghu Udyog (Small-Scale Industry)</strong> ko ek ikai ki sampatti par anumati prapt adhiktam nivesh ke aadhar par paribhashit kiya jaata hai (vartaman mein ek crore rupaye)."}]},
            { id: '3.4', title: "On the Basis of Ownership", content: [ {type: 'list', items: ["<strong>Sarvajanik Kshetra (Public Sector):</strong> Sarkari agencies dwara svamitva aur sanchalit (उदा., BHEL, SAIL).", "<strong>Niji Kshetra (Private Sector):</strong> Vyaktiyon ya vyaktiyon ke samuh dwara svamitva aur sanchalit (उदा., TISCO, Bajaj Auto).", "<strong>Sanyukt Kshetra (Joint Sector):</strong> Rajya aur niji vyaktiyon dwara sanyukt roop se chalaya jaata hai (उदा., Oil India Ltd.).", "<strong>Sahakari Kshetra (Cooperative Sector):</strong> Kachche maal ke utpadakon ya aapurti kartaon, shramikon, ya dono dwara svamitva aur sanchalit (उदा., Maharashtra mein chini udyog)."]}]},
            { id: '3.5', title: "Based on Bulk and Weight", content: [ {type: 'list', items: ["<strong>Bhari Udyog (Heavy Industries):</strong> Bhari kachche maal ka upyog karte hain aur bhari vastuon ka utpadan karte hain (उदा., loha aur ispat).", "<strong>Halke Udyog (Light Industries):</strong> Halke kachche maal ka upyog karte hain aur halki vastuon ka utpadan karte hain (उदा., vidyut upkaran udyog)."]}]}
        ]
      },
      {
        id: '4',
        title: "Agro-Based Industries",
        subSections: [
            {
                id: '4.1',
                title: 'Textile Industry',
                content: [
                    { type: 'paragraph', text: "Yah Bharatiya arthvyavastha mein ek anokha sthan rakhta hai, jo audyogik utpadan, rozgar srijan, aur videshi mudra arjan mein mahatvapurna yogdan deta hai. Yah desh ka ekmatra udyog hai jo moolya shrinkhala mein aatmanirbhar aur purna hai." },
                    { type: 'heading', text: "Cotton Textiles:" },
                    { type: 'paragraph', text: "Prachin Bharat mein, sooti vastra hath se katai aur hathkargha bunai takneekon se banaye jaate the. Pehli safal textile mill 1854 mein Mumbai mein sthapit ki gayi thi. Shuru mein, udyog Maharashtra aur Gujarat mein kendrit tha. Jabki katai abhi bhi kendrikrit hai, bunai atyadhik vikendrikrit hai." },
                    { type: 'heading', text: "Jute Textiles:" },
                    { type: 'paragraph', text: "Bharat kachche jute aur jute ke saman ka sabse bada utpadak hai. Adhikansh milen Pashchim Bangal mein Hugli nadi ke kinare sthit hain. Pehli jute mill 1855 mein Kolkata ke paas Rishra mein sthapit ki gayi thi." }
                ]
            },
            {
                id: '4.2',
                title: 'Sugar Industry',
                content: [
                    { type: 'paragraph', text: "Bharat chini ka doosra sabse bada vishwa utpadak hai aur gud aur khandsari ke utpadan mein pehle sthan par hai. Choonki ganna bhari hota hai aur parivahan ke dauran iska sucrose content kam ho jaata hai, isliye milen ganna ugane wale rajyon jaise Uttar Pradesh aur Maharashtra mein sthit hain. Yah udyog mausami hai, jo ise sahakari kshetra ke liye aadarsh banata hai." }
                ]
            }
        ]
      },
      {
        id: '5',
        title: "Mineral-Based Industries",
        subSections: [
            {
                id: '5.1',
                title: 'Iron and Steel Industry',
                content: [
                    { type: 'paragraph', text: "Yah ek buniyadi aur bhari udyog hai, kyunki anya udyog apni machinery ke liye is par nirbhar karte hain. Steel ke utpadan aur upbhog ko aksar kisi desh ke vikas ka soochak mana jaata hai. Lauh ayask, coking coal, aur chuna patthar jaise kachche maal ki avashyakta hoti hai. Chhotanagpur pathar kshetra mein in udyogon ki adhiktam sandrata hai." }
                ]
            },
            {
                id: '5.2',
                title: 'Aluminum Smelting',
                content: [
                    { type: 'paragraph', text: "Yah Bharat mein doosra sabse mahatvapurna dhaatu-karmi udyog hai. Aluminum halka, sanrakshan-rodhi, aur ushma ka achha sanchalak hota hai. Iska upyog viman, bartan, aur taar banane mein hota hai. Plant ke sthan ke liye mukhya karak niyamit bijli ki aapurti aur nyunatam lagat par bauxite ka ek sunishchit srot hain." }
                ]
            }
        ]
      },
      {
        id: '6',
        title: "Other Important Industries",
        subSections: [
            {id: '6.1', title: 'Chemical Industry', content: [{type: 'paragraph', text: "Bharat ka rasayan udyog tezi se badh raha hai. Akarbonik rasayano mein sulphuric acid aur soda ash shamil hain. Karbonik rasayano mein petrochemicals shamil hain, jinka upyog synthetic fiber, plastic aur davaon ke liye kiya jaata hai."}]},
            {id: '6.2', title: 'Fertilizer Industry', content: [{type: 'paragraph', text: "Yah udyog nitrogenous, phosphatic, aur jatil urvarakon ke utpadan ke aas-paas kendrit hai. Potash poori tarah se aayat kiya jaata hai. Harit Kranti ke baad udyog ka vistar hua."}]},
            {id: '6.3', title: 'Cement Industry', content: [{type: 'paragraph', text: "Nirman ke liye avashyak, is udyog mein chuna patthar, silica, aur gypsum jaise bhari kachche maal ka upyog hota hai. Pehla plant 1904 mein Chennai mein sthapit kiya gaya tha."}]},
            {id: '6.4', title: 'Automobile Industry', content: [{type: 'paragraph', text: "Parivahan ke liye vahan pradan karta hai. Aarthik udarikaran ke baad udyog mein tezi se vridhi hui hai aur yah Delhi, Mumbai, aur Chennai jaise pramukh shaharon ke aas-paas sthit hai."}]},
            {id: '6.5', title: 'IT and Electronics Industry', content: [{type: 'paragraph', text: "Ismein television se lekar computer tak ke utpadon ki ek vistrit shreni shamil hai. Bengaluru Bharat ki electronic rajdhani ban gaya hai. Yah udyog rozgar ka ek pramukh srot hai."}]}
        ]
      },
      {
        id: '7',
        title: "Industrial Pollution and Environmental Degradation",
        content: [
            { type: 'paragraph', text: "Udyog aarthik vikas mein mahatvapurna yogdan dete hain lekin ve vayu, jal, bhoomi, aur dhwani pradooshan bhi paida karte hain." },
            { type: 'list', items: [
                "<strong>Vayu Pradooshan:</strong> Avanchhit gaison jaise sulfur dioxide aur carbon monoxide, aur dhuein se utpann kanon ke karan hota hai.",
                "<strong>Jal Pradooshan:</strong> Audyogik kachre aur effluents ko nadiyon mein chhodne se hota hai.",
                "<strong>Taapiya Pradooshan:</strong> Jab karkhanon se garam paani nadiyon mein chhod diya jaata hai, jo jaliy jeevan ko nuksan pahunchata hai.",
                "<strong>Bhoomi aur Mrida Pradooshan:</strong> Audyogik kachre ke dumping se mitti bekar ho jaati hai aur bhoojal ko pradooshit kar sakti hai.",
                "<strong>Dhwani Pradooshan:</strong> Audyogik machinery se avanchhit shor tanav aur swasthya samasyaon ka karan ban sakta hai."
            ]}
        ]
      },
      {
        id: '8',
        title: "Control of Environmental Degradation",
        content: [
            { type: 'paragraph', text: "Satat vikas ke liye audyogik pradooshan ko niyantrit karna mahatvapurna hai." },
            { type: 'list', items: [
                "<strong>Jal Pradooshan ko Niyantrit Karna:</strong> Paani ke upyog ko kam karna, varsha jal sanchayan karna, aur effluents ko chhodne se pehle unka upchar karna.",
                "<strong>Vayu Pradooshan ko Niyantrit Karna:</strong> Factory ki chimney mein filter lagana aur koyle ke bajaye saaf indhan ka upyog karna.",
                "<strong>Dhwani Pradooshan ko Niyantrit Karna:</strong> Silencer wali machinery ka upyog karna aur shor avshoshak samagri ka upyog karna.",
                "<strong>Satat Vikas:</strong> Mukhya chunauti aarthik vikas ko paryavarniya chintaon ke saath ekikrit karna hai. NTPC prakritik paryavaran ko sanrakshit karne ke liye ek sakriya drishtikon apnakar marg darshan karta hai."
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
  const [openSections, setOpenSections] = useState({ '1': true, '2': true, '3': true, '4': true });
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
  	  "@id": "https://vardaanlearning.com/notes/cbse-class-10-geography-agriculture" // Replace with the actual URL
  	},
  	"headline": currentContent.chapterTitle,
  	"description": currentContent.metaDescription,
  	"image": "https://placehold.co/600x600/e2e8f0/475569?text=Agriculture+in+India",  // A representative image
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
  	 	<meta name="keywords" content="Class 10 Geography, Agriculture in India, Types of Farming, Cropping Patterns, Major Crops, Green Revolution, CBSE Notes, NCERT Solutions, Vardaan Learning Institute" />
        <link rel="canonical" href="https://vardaanlearning.com/notes/cbse-class-10-geography-agriculture" />
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
