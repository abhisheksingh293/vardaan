import React, { useState, useEffect, useMemo, useRef } from 'react';

// --- ICONS (lucide-react placeholders) ---
const ChevronDown = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;
const Menu = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const Check = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
const Zap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const ShieldCheck = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const Shield = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Globe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;


// --- DATA STORE (Hinglish Content Added) ---
const notesData = {
    en: {
        chapterTitle: "Chapter 2: Forest and Wildlife Resources",
        sections: [
            { id: '1', title: 'Introduction: Biodiversity', content: [ { type: 'heading', level: 2, content: 'What is Biodiversity (or Biological Diversity)?' }, { type: 'paragraph', content: "Biodiversity is the immense variety of life forms found on Earth. It includes millions of species, from tiny micro-organisms like bacteria and lichens to large mammals like elephants and blue whales, and diverse plants like grasses and banyan trees." }, { type: 'paragraph', content: "These different species are closely interconnected through a complex <strong>ecological system</strong> (or web), where each element is interdependent, creating a self-sustaining habitat." }, { type: 'heading', level: 2, content: 'Why is Biodiversity Important for Human Beings?' }, { type: 'paragraph', content: "Humans are an integral part of this ecological system and depend on it for survival." }, { type: 'infoBox', color: 'blue', content: "<strong>Life Support Systems:</strong> Plants, animals, and micro-organisms work together to create the essential elements for our survival: They purify the <strong>air</strong> we breathe, maintain the quality of the <strong>water</strong> we drink, and create and enrich the <strong>soil</strong> that produces our food." }, { type: 'list', items: [ "<strong>Primary Producers:</strong> Forests are the primary producers. All other living beings, including humans, directly or indirectly depend on them for food and resources.", "<strong>Genetic Diversity:</strong> Conserving biodiversity preserves the genetic diversity of plants and animals. This is crucial for agriculture (we still rely on traditional crop varieties for breeding better, more resilient crops) and fisheries (the fishing industry is heavily dependent on maintaining aquatic biodiversity)." ]} ] },
            { id: '2', title: 'State of Flora and Fauna in India', content: [ 
                { type: 'paragraph', content: "India is one of the world's richest countries in terms of biodiversity. However, many of its plant (flora) and animal (fauna) species are under threat." }, 
                { type: 'infoBox', color: 'orange', content: "<strong>Threat Level:</strong> Some estimates suggest that at least <strong>10% of India's recorded wild flora</strong> and <strong>20% of its mammals</strong> are on the threatened list." }, 
                { type: 'heading', level: 2, content: 'Classification of Species by IUCN' }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171077/Picture1_f5evwp.png', alt: 'Classification of Species by IUCN diagram' }, 
                { type: 'definitionList', items: [ 
                    { term: "Normal Species", definition: "Species whose population levels are considered normal for their survival (e.g., Cattle, Sal, Pine, Rodents)." },
                    { term: "Endangered Species", definition: "Species in danger of extinction. Survival is difficult if the negative factors that have led to their decline continue to operate (e.g., Blackbuck, Crocodile, Indian Wild Ass, Indian Rhino, Lion-tailed Macaque, Sangai deer)." },
                    { term: "Vulnerable Species", definition: "Species whose population has declined to levels from where it is likely to move into the endangered category in the near future if the negative factors continue to operate (e.g., Blue Sheep, Asiatic Elephant, Gangetic Dolphin)." },
                    { term: "Rare Species", definition: "Species with a small population that may move into the endangered or vulnerable category if the negative factors affecting them continue to operate (e.g., Himalayan Brown Bear, Wild Asiatic Buffalo, Desert Fox, Hornbill)." },
                    { term: "Endemic Species", definition: "Species that are only found in some particular areas, usually isolated by natural or geographical barriers (e.g., Andaman Teal, Nicobar Pigeon, Andaman Wild Pig, Mithun in Arunachal Pradesh)." },
                    { term: "Extinct Species", definition: "Species that are not found after searches of known or likely areas where they may occur. They may be extinct from a local area, region, country, or the entire Earth (e.g., Asiatic Cheetah, Pink Headed Duck, and plants like madhuca insignis - a wild variety of mahua)." }
                ]} 
            ]},
            { id: '3', title: 'Causes and Impacts of Depletion', content: [ 
                { type: 'heading', level: 2, content: 'A. Causes of Depletion' }, 
                { type: 'paragraph', content: "Human activities are the primary cause of the depletion of India's forest and wildlife resources." }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171078/Picture2_by04or.png', alt: 'Causes of Flora and Fauna Depletion in India diagram' }, 
                { type: 'definitionList', items: [
                    { term: "Agricultural Expansion", definition: "This is one of the major causes. Between 1951 and 1980, according to the Forest Survey of India, over 26,200 sq. km. of forest area was converted into agricultural land." },
                    { term: "Shifting Cultivation (Jhumming)", definition: "This 'slash and burn' agricultural practice, especially in the north-eastern and central parts of India, has led to significant deforestation and degradation." },
                    { term: "Enrichment Plantation", definition: "This is a practice where commercially valuable species were planted on a large scale, while other species were eliminated. This monoculture damages biodiversity. For example, teak monoculture has damaged the natural forests in South India, and Chir Pine plantations in the Himalayas have replaced the Himalayan oak and Rhododendron forests." },
                    { term: "Large-Scale Development Projects", definition: "Since 1951, over 5,000 sq. km of forest has been cleared for river valley projects. The construction of dams and infrastructure continues to submerge vast forest areas (e.g., the Narmada Sagar Project in Madhya Pradesh)." },
                    { term: "Mining", definition: "Mining operations disrupt habitats, block migration routes for animals, and cause severe deforestation. The Buxa Tiger Reserve in West Bengal is seriously threatened by ongoing dolomite mining." },
                    { term: "Overgrazing and Fuelwood Collection", definition: "While these are contributing factors, many experts argue that the primary damage comes from lopping branches for fodder and fuel, rather than felling entire trees." },
                    { term: "Unequal Access and Consumption", definition: "The wealthiest 5% of Indian society cause more ecological damage than the poorest 25% due to disproportionately high consumption of resources." },
                    { term: "Over-exploitation, Hunting, and Poaching", definition: "Illegal hunting and poaching for commercial trade have led to a drastic decline in many species. Over-exploitation of plants for medicinal purposes (like the Himalayan Yew for its anti-cancer compound 'taxol') has also put them under great threat." }
                ]}, 
                { type: 'heading', level: 2, content: 'B. Social Impacts of Depletion' }, 
                { type: 'paragraph', content: "The depletion of resources is not just an ecological issue; it has severe social consequences." }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171077/Picture3_drhbek.png', alt: 'Social Impacts of Resource Depletion diagram' }, 
                { type: 'list', items: [ "<strong>Loss of Cultural Diversity:</strong> The destruction of forests and wildlife has impoverished many indigenous and forest-dependent communities who rely on these resources for food, drink, medicine, and culture.", "<strong>Impact on Women:</strong> Women bear the major responsibility for collecting fuel, fodder, and water. As resources deplete, their drudgery increases, forcing them to walk over 10 km daily. This leads to serious health problems and takes time away from home and children, causing social stress.", "<strong>Poverty and Natural Disasters:</strong> Deforestation can lead to an increase in natural disasters like floods and droughts, which hit the poorest communities the hardest. Poverty, in this sense, is a direct outcome of environmental destruction." ]} 
            ]},
            { id: '4', title: 'Conservation of Forest and Wildlife in India', content: [ { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171077/Picture4_twv1uj.png', alt: 'Conservation of Forest and Wildlife in India diagram' }, { type: 'heading', level: 2, content: 'Why is Conservation Necessary?' }, { type: 'list', items: [ "<strong>Preserves Ecological Diversity:</strong> It protects our life-support systems—air, water, and soil.", "<strong>Preserves Genetic Diversity:</strong> It ensures the availability of a wide range of plant and animal genes for better breeding and agricultural development." ]}, { type: 'heading', level: 2, content: 'Government Initiatives for Conservation' }, { type: 'paragraph', content: "<strong>The Indian Wildlife (Protection) Act, 1972:</strong> This was a landmark law implemented to protect wildlife habitats. An all-India list of protected species was also published. The main goal was to protect the remaining populations of certain endangered species by banning hunting, giving legal protection to their habitats, and restricting trade in wildlife. Central and state governments established national parks and wildlife sanctuaries. The central government also announced several projects for protecting specific animals, which were gravely threatened, including the tiger, the one horned rhinoceros, the Kashmir stag or hangul, three types of crocodiles - fresh water crocodile, saltwater crocodile and the Gharial, the Asiatic lion, and others." }, { type: 'highlightBox', title: 'Project Tiger (1973)', content: "A major campaign launched when the tiger population had fallen to just 1,827 from an estimated 55,000. It became a model for wildlife conservation worldwide. Other protected animals include the One-horned Rhinoceros, Kashmir Stag, crocodiles, Asiatic Lion, and more." }, { type: 'paragraph', content: "<strong>Shift in Conservation Focus:</strong> Conservation efforts now focus on biodiversity as a whole. Even insects and, since 1991, plants have been added to the list of protected species." }, ] },
            { id: '5', title: 'Types and Distribution of Forests in India', content: [ 
                { type: 'paragraph', content: "Forests managed by the government's Forest Department are classified into three types:" }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171078/Picture5_wnuxvk.png', alt: 'Forest Types and Distribution in India diagram' }, 
                { type: 'cardList', items: [
                    { icon: 'ShieldCheck', title: 'Reserved Forests', description: "Considered the most valuable for conservation. More than half of India's total forest land is reserved. Access for activities like grazing is generally prohibited.", details: "<strong>High percentage in:</strong> J&K, Andhra Pradesh, Uttarakhand, Kerala, Tamil Nadu, West Bengal, Maharashtra." },
                    { icon: 'Shield', title: 'Protected Forests', description: "Almost one-third of the total forest area. This land is protected from any further depletion. Local people may have some rights for grazing and fuel collection, subject to regulations.", details: "<strong>Bulk of forests in:</strong> Bihar, Haryana, Punjab, Himachal Pradesh, Odisha, Rajasthan." },
                    { icon: 'Globe', title: 'Unclassed Forests', description: "Other forests and wastelands belonging to government, private individuals, or communities.", details: "<strong>High percentage in:</strong> All North-Eastern states and parts of Gujarat." }
                ]},
                { type: 'infoBox', color: 'green', content: "<strong>Permanent Forests:</strong> Reserved and Protected forests are collectively called permanent forest estates. <strong>Madhya Pradesh</strong> has the largest area under permanent forests."} 
            ]},
            { id: '6', title: 'Community and Conservation', content: [ { type: 'paragraph', content: "Local communities are vital for any successful conservation strategy." }, { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171079/Picture6_s61kmk.png', alt: 'Community-Driven Conservation Efforts diagram' }, { type: 'heading', level: 3, content: 'Traditional Community Efforts' }, { type: 'list', items: [ "<strong>Sariska Tiger Reserve, Rajasthan:</strong> Villagers fought against mining by citing the Wildlife Protection Act.", "<strong>Bhairodev Dakav 'Sonchuri', Alwar, Rajasthan:</strong> Inhabitants of five villages declared 1,200 hectares of forest as a sanctuary with their own rules against hunting." ]}, { type: 'heading', level: 3, content: "Famous People's Movements" }, { type: 'highlightBox', title: 'The Chipko Movement (Himalayas)', content: "A non-violent movement where people, especially women, hugged trees to prevent them from being cut. It successfully resisted deforestation and promoted community afforestation." }, { type: 'highlightBox', title: 'Beej Bachao Andolan (Tehri) & Navdanya', content: "These movements showed that diversified crop production without synthetic chemicals is possible and economically viable." }, { type: 'heading', level: 3, content: 'Joint Forest Management (JFM)' }, { type: 'list', items: [ "A program for involving local communities in managing and restoring degraded forests. It began in 1988 in Odisha.", "Local institutions protect the forest land, and in return, community members get benefits like non-timber forest products and a share in harvested timber." ]} ] },
            { id: '7', title: 'Sacred Groves: A Form of Nature Worship', content: [ { type: 'heading', level: 2, content: 'What are Sacred Groves?' }, { type: 'paragraph', content: "These are patches of virgin forest dedicated to local deities ('the forests of God and Goddesses') and are traditionally protected by communities. Any interference is banned." }, { type: 'paragraph', content: "Nature worship is an age-old belief that all creations of nature must be protected." }, { type: 'heading', level: 2, content: 'Examples of Traditional Conservation' }, { type: 'list', items: [ "The <strong>Mundas and the Santhal</strong> of Chota Nagpur worship Mahua and Kadamba trees.", "Tribals of Odisha and Bihar worship <strong>Tamarind</strong> and <strong>Mango</strong> trees during weddings.", "<strong>Peepal</strong> and <strong>Banyan</strong> trees are considered sacred across India.", "The <strong>Bishnoi community</strong> of Rajasthan is famous for protecting blackbuck, nilgai, and peacocks." ]} ] }
        ]
    },
    hinglish: {
        chapterTitle: "Forest aur Wildlife Resources",
        sections: [
            { id: '1', title: 'Introduction: Biodiversity', content: [ { type: 'heading', level: 2, content: 'Biodiversity (ya Biological Diversity) Kya Hai?' }, { type: 'paragraph', content: "Biodiversity Earth par paaye jaane waale life forms ki bahut badi variety hai. Ismein millions of species aate hain, chote micro-organisms jaise bacteria aur lichens se lekar bade mammals jaise elephants aur blue whales tak, aur alag-alag plants jaise ghaas aur banyan trees." }, { type: 'paragraph', content: "Yeh alag-alag species ek complex <strong>ecological system</strong> (ya web) ke through ek doosre se jude hue hain, jahan har element ek doosre par dependent hai, jisse ek self-sustaining habitat banta hai." }, { type: 'heading', level: 2, content: 'Humans ke liye Biodiversity Itni Important Kyun Hai?' }, { type: 'paragraph', content: "Hum insaan bhi is ecological system ka ek important part hain aur apne existence ke liye is par depend karte hain." }, { type: 'infoBox', color: 'blue', content: "<strong>Life Support Systems:</strong> Plants, animals, aur micro-organisms mil kar hamare jeene ke liye zaroori cheezein banate hain: Woh hamari saans lene waali <strong>air</strong> ko purify karte hain, hamare peene waale <strong>water</strong> ki quality maintain karte hain, aur hamare khane ke liye <strong>soil</strong> ko banate aur aacha karte hain." }, { type: 'list', items: [ "<strong>Primary Producers:</strong> Forests primary producers hain. Baaki sabhi living beings, humans sahit, direct ya indirect roop se apne food aur resources ke liye un par depend karte hain.", "<strong>Genetic Diversity:</strong> Biodiversity ko bachana plants aur animals ki genetic diversity ko preserve karta hai. Yeh agriculture ke liye bahut zaroori hai (hum aaj bhi behtar faslon ke liye traditional crop varieties par depend karte hain) aur fisheries ke liye bhi (fishing industry aquatic biodiversity ko maintain karne par bahut zyada dependent hai)." ]} ] },
            { id: '2', title: 'India mein Flora aur Fauna ki State', content: [ 
                { type: 'paragraph', content: "India biodiversity ke maamle mein duniya ke sabse rich countries mein se ek hai. Lekin, iske bahut se plant (flora) aur animal (fauna) species khatre mein hain." }, 
                { type: 'infoBox', color: 'orange', content: "<strong>Threat Level:</strong> Kuch estimates batate hain ki India ke recorded wild flora ka kam se kam <strong>10%</strong> aur iske mammals ka <strong>20%</strong> threatened list mein hai." }, 
                { type: 'heading', level: 2, content: 'IUCN dwara Species ka Classification' }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171077/Picture1_f5evwp.png', alt: 'Classification of Species by IUCN diagram' }, 
                { type: 'definitionList', items: [ 
                    { term: "Normal Species", definition: "Aisi species jinki population unke survival ke liye normal maani jaati hai (e.g., Cattle, Sal, Pine, Rodents)." },
                    { term: "Endangered Species", definition: "Aisi species jinke khatm hone ka khatra hai. Inka survival mushkil hai agar inke decline ke negative factors chalte rahe (e.g., Blackbuck, Crocodile, Indian Wild Ass, Indian Rhino, Lion-tailed Macaque, Sangai deer)." },
                    { term: "Vulnerable Species", definition: "Aisi species jinki population itni kam ho gayi hai ki agar negative factors jaari rahe, toh woh jald hi endangered category mein ja sakti hain (e.g., Blue Sheep, Asiatic Elephant, Gangetic Dolphin)." },
                    { term: "Rare Species", definition: "Kam population waali species jo endangered ya vulnerable category mein ja sakti hain agar un par asar karne waale negative factors jaari rahe (e.g., Himalayan Brown Bear, Wild Asiatic Buffalo, Desert Fox, Hornbill)." },
                    { term: "Endemic Species", definition: "Aisi species jo sirf kuch khaas areas mein hi paayi jaati hain, jo aamtaur par natural ya geographical barriers se alag thalag rehti hain (e.g., Andaman Teal, Nicobar Pigeon, Andaman Wild Pig, Mithun in Arunachal Pradesh)." },
                    { term: "Extinct Species", definition: "Aisi species jo unke jaane-maane ilakon mein khojne par bhi nahi milti. Yeh species kisi local area, region, country, ya poori Earth se extinct ho sakti hain (e.g., Asiatic Cheetah, Pink Headed Duck, aur madhuca insignis - mahua ki ek wild variety)." }
                ]} 
            ]},
            { id: '3', title: 'Depletion ke Kaaran aur Asar', content: [ 
                { type: 'heading', level: 2, content: 'A. Depletion ke Kaaran' }, 
                { type: 'paragraph', content: "Human activities India ke forest aur wildlife resources ke depletion ka sabse bada kaaran hain." }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171078/Picture2_by04or.png', alt: 'Causes of Flora and Fauna Depletion in India diagram' }, 
                { type: 'definitionList', items: [
                    { term: "Agricultural Expansion", definition: "Yeh ek major cause hai. 1951 aur 1980 ke beech, Forest Survey of India ke according, 26,200 sq. km. se zyada forest area ko agricultural land mein convert kar diya gaya tha." },
                    { term: "Shifting Cultivation (Jhumming)", definition: "Yeh 'slash and burn' type ki kheti, khaas kar north-eastern aur central India mein, deforestation aur degradation ka bada kaaran bani hai." },
                    { term: "Enrichment Plantation", definition: "Yeh ek aisi practice hai jismein commercially valuable species ko bade paimane par lagaya gaya aur dusri species ko khatm kar diya gaya. Is monoculture se biodiversity ko nuksaan hota hai. Example: South India mein teak monoculture ne natural forests ko damage kiya hai." },
                    { term: "Large-Scale Development Projects", definition: "1951 se, 5,000 sq. km se zyada forest river valley projects ke liye saaf kar diya gaya hai. Dams aur infrastructure ke construction se bade forest areas doob rahe hain (e.g., Madhya Pradesh mein Narmada Sagar Project)." },
                    { term: "Mining", definition: "Mining operations se habitats disturb hote hain, animals ke migration routes block ho jaate hain, aur deforestation hota hai. West Bengal ka Buxa Tiger Reserve dolomite mining ki vajah se khatre mein hai." },
                    { term: "Overgrazing and Fuelwood Collection", definition: "Yeh bhi factors hain, lekin kai experts maante hain ki asli damage chaare aur fuel ke liye daaliyan kaatne se hota hai, na ki poore ped kaatne se." },
                    { term: "Unequal Access and Consumption", definition: "India ki 5% sabse ameer aabadi, 25% sabse gareeb aabadi se zyada ecological damage karti hai kyunki unka resource consumption bahut zyada hai." },
                    { term: "Over-exploitation, Hunting, and Poaching", definition: "Illegal hunting aur poaching se kai species ki sankhya bahut tezi se kam hui hai. Dawaaiyon ke liye plants ka over-exploitation (jaise Himalayan Yew) bhi unhe khatre mein daal raha hai." }
                ]}, 
                { type: 'heading', level: 2, content: 'B. Depletion ke Social Impacts' }, 
                { type: 'paragraph', content: "Resources ka depletion sirf ek ecological issue nahi hai; iske gambhir social asar bhi hote hain." }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171077/Picture3_drhbek.png', alt: 'Social Impacts of Resource Depletion diagram' }, 
                { type: 'list', items: [ "<strong>Cultural Diversity ka Nuksaan:</strong> Forests aur wildlife ke khatm hone se kai indigenous aur forest-dependent communities gareeb ho gayi hain jo in resources par depend karti hain.", "<strong>Mahilaon par Asar:</strong> Fuel, fodder, aur paani laane ki badi zimmedari mahilaon par hoti hai. Resources kam hone se unki mehnat badh jaati hai, aur unhe roz 10 km se zyada chalna padta hai. Isse health problems aur social stress hota hai.", "<strong>Gareebi aur Natural Disasters:</strong> Deforestation se floods aur droughts jaise natural disasters badh sakte hain, jiska sabse zyada asar gareeb communities par hota hai. Gareebi, ek tarah se, environmental destruction ka direct result hai." ]} 
            ]},
            { id: '4', title: 'India mein Forest aur Wildlife ka Conservation', content: [ { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171077/Picture4_twv1uj.png', alt: 'Conservation of Forest and Wildlife in India diagram' }, { type: 'heading', level: 2, content: 'Conservation Zaroori Kyun Hai?' }, { type: 'list', items: [ "<strong>Ecological Diversity ko Bachata Hai:</strong> Yeh hamare life-support systems—air, water, aur soil—ko protect karta hai.", "<strong>Genetic Diversity ko Bachata Hai:</strong> Yeh behtar breeding aur agricultural development ke liye plants aur animals ki genetic diversity ko banaye rakhta hai." ]}, { type: 'heading', level: 2, content: 'Conservation ke liye Government Initiatives' }, { type: 'paragraph', content: "<strong>The Indian Wildlife (Protection) Act, 1972:</strong> Yeh ek important law tha jo wildlife habitats ko protect karne ke liye 1972 mein laagu hua. Ismein protected species ki ek all-India list publish ki gayi. Main goal tha endangered species ki bachi hui population ko bachana, jiske liye hunting ban ki gayi, unke habitats ko legal protection di gayi, aur wildlife trade ko roka gaya." }, { type: 'highlightBox', title: 'Project Tiger (1973)', content: "Yeh ek bada campaign tha jo tab shuru hua jab tiger population 55,000 se ghat kar sirf 1,827 reh gayi thi. Yeh duniya bhar mein wildlife conservation ke liye ek model bana. Iske alawa One-horned Rhinoceros, Kashmir Stag, crocodiles, aur Asiatic Lion jaise animals ko bhi protect kiya gaya." }, { type: 'paragraph', content: "<strong>Conservation Focus mein Badlav:</strong> Ab conservation efforts sirf bade janwaro par nahi, balki poori biodiversity par focus karte hain. 1991 se, plants aur chote insects ko bhi protected species ki list mein shaamil kiya gaya hai." }, ] },
            { id: '5', title: 'India mein Forests ke Types aur Distribution', content: [ 
                { type: 'paragraph', content: "Government ke Forest Department dwara manage kiye jaane waale forests ko teen types mein classify kiya gaya hai:" }, 
                { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171078/Picture5_wnuxvk.png', alt: 'Forest Types and Distribution in India diagram' }, 
                { type: 'cardList', items: [
                    { icon: 'ShieldCheck', title: 'Reserved Forests', description: "Inhe conservation ke liye sabse valuable maana jaata hai. India ke total forest land ka aadhe se zyada hissa reserved hai. Yahan grazing jaisi activities aam taur par mana hain.", details: "<strong>High percentage in:</strong> J&K, Andhra Pradesh, Uttarakhand, Kerala, Tamil Nadu, West Bengal, Maharashtra." },
                    { icon: 'Shield', title: 'Protected Forests', description: "Total forest area ka lagbhag one-third hissa. Is land ko aage ke depletion se bachaya jaata hai. Local logon ko kuch niyam ke tahat grazing aur fuelwood collect karne ke rights ho sakte hain.", details: "<strong>Bulk of forests in:</strong> Bihar, Haryana, Punjab, Himachal Pradesh, Odisha, Rajasthan." },
                    { icon: 'Globe', title: 'Unclassed Forests', description: "Yeh baaki ke forests aur wastelands hain jo government, private individuals, ya communities ke hote hain.", details: "<strong>High percentage in:</strong> Sabhi North-Eastern states aur Gujarat ke kuch hisson mein." }
                ]},
                { type: 'infoBox', color: 'green', content: "<strong>Permanent Forests:</strong> Reserved aur Protected forests ko milakar permanent forest estates kaha jaata hai. <strong>Madhya Pradesh</strong> mein permanent forests ke under sabse bada area hai."} 
            ]},
            { id: '6', title: 'Community aur Conservation', content: [ { type: 'paragraph', content: "Kisi bhi successful conservation strategy ke liye local communities bahut zaroori hain." }, { type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1753171079/Picture6_s61kmk.png', alt: 'Community-Driven Conservation Efforts diagram' }, { type: 'heading', level: 3, content: 'Traditional Community Efforts' }, { type: 'list', items: [ "<strong>Sariska Tiger Reserve, Rajasthan:</strong> Yahan ke gaon walon ne Wildlife Protection Act ka hawala dekar mining ke khilaaf ladaai ladi.", "<strong>Bhairodev Dakav 'Sonchuri', Alwar, Rajasthan:</strong> Paanch gaon ke logon ne 1,200 hectares forest ko 'Sonchuri' ghoshit kiya, jahan unhone hunting ke khilaaf apne niyam banaye." ]}, { type: 'heading', level: 3, content: "Famous People's Movements" }, { type: 'highlightBox', title: 'The Chipko Movement (Himalayas)', content: "Yeh ek non-violent movement tha jismein log, khaas kar mahilayein, pedon ko katne se bachane ke liye unse lipat gaye. Isne deforestation ko safaltapoorvak roka." }, { type: 'highlightBox', title: 'Beej Bachao Andolan (Tehri) & Navdanya', content: "In movements ne dikhaya ki bina synthetic chemicals ke bhi diversified crop production possible aur faydemand hai." }, { type: 'heading', level: 3, content: 'Joint Forest Management (JFM)' }, { type: 'list', items: [ "Yeh local communities ko degrade ho chuke forests ko manage aur restore karne mein shaamil karne ka ek program hai. Iski shuruaat 1988 mein Odisha se hui.", "Local institutions forest land ko protect karti hain, aur badle mein community members ko non-timber forest products aur lakdi mein hissa milta hai." ]} ] },
            { id: '7', title: 'Sacred Groves: Prakriti ki Pooja', content: [ { type: 'heading', level: 2, content: 'Sacred Groves Kya Hain?' }, { type: 'paragraph', content: "Yeh virgin forests ke tukde hote hain jo local devtaon ('forests of god and goddesses') ko samarpit hote hain aur communities dwara tradition se protect kiye jaate hain. Inmein kisi bhi tarah ka interference mana hai." }, { type: 'paragraph', content: "Nature worship ek purana vishwas hai ki prakriti ki har cheez ko protect karna chahiye." }, { type: 'heading', level: 2, content: 'Traditional Conservation ke Examples' }, { type: 'list', items: [ "Chota Nagpur region ke <strong>Mundas aur Santhal</strong> log Mahua aur Kadamba pedon ki pooja karte hain.", "Odisha aur Bihar ke tribals shaadiyon ke dauran <strong>Imli (Tamarind)</strong> aur <strong>Aam (Mango)</strong> pedon ki pooja karte hain.", "Poore India mein <strong>Peepal</strong> aur <strong>Banyan</strong> pedon ko pavitra maana jaata hai.", "Rajasthan ki <strong>Bishnoi community</strong> blackbuck, nilgai, aur peacocks ko protect karne ke liye famous hai." ]} ] }
        ]
    }
};

// --- THEME STORE (Expanded as per user request) ---
const themes = {
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-header-bg': '#f97316', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f97316', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#ea580c', '--theme-heading-border': '#f97316', '--theme-check': '#f97316', '--theme-switch-lang-active': '#ea580c', '--theme-highlight-bg': '#fffbeb', '--theme-highlight-border': '#fdbf6f', '--theme-highlight-text': '#7c2d12' } },
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-header-bg': '#3b82f6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#3b82f6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-check': '#3b82f6', '--theme-switch-lang-active': '#2563eb', '--theme-highlight-bg': '#e0f2fe', '--theme-highlight-border': '#7dd3fc', '--theme-highlight-text': '#0369a1' } },
    forestGreen: { name: 'Forest Green', previewColor: '#22c55e', cssVars: { '--theme-bg': '#f0fdf4', '--theme-header-bg': '#22c55e', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#22c55e', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#16a34a', '--theme-heading-border': '#4ade80', '--theme-check': '#22c55e', '--theme-switch-lang-active': '#16a34a', '--theme-highlight-bg': '#dcfce7', '--theme-highlight-border': '#86efac', '--theme-highlight-text': '#166534' } },
    amber: { name: 'Amber', previewColor: '#f59e0b', cssVars: { '--theme-bg': '#fefce8', '--theme-header-bg': '#f59e0b', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f59e0b', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#d97706', '--theme-heading-border': '#facc15', '--theme-check': '#f59e0b', '--theme-switch-lang-active': '#d97706', '--theme-highlight-bg': '#fef9c3', '--theme-highlight-border': '#fde047', '--theme-highlight-text': '#854d0e' } },
    royalPurple: { name: 'Royal Purple', previewColor: '#8b5cf6', cssVars: { '--theme-bg': '#f5f3ff', '--theme-header-bg': '#8b5cf6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#8b5cf6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#7c3aed', '--theme-heading-border': '#a78bfa', '--theme-check': '#8b5cf6', '--theme-switch-lang-active': '#7c3aed', '--theme-highlight-bg': '#ede9fe', '--theme-highlight-border': '#c4b5fd', '--theme-highlight-text': '#6d28d9' } },
    midnightBlueD: { name: 'Midnight Blue (D)', previewColor: '#60a5fa', cssVars: { '--theme-bg': '#111827', '--theme-header-bg': '#1e40af', '--theme-toc-bg': '#1f2937', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#60a5fa', '--theme-toc-active-text': '#111827', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#60a5fa', '--theme-heading-border': '#3b82f6', '--theme-check': '#60a5fa', '--theme-switch-lang-active': '#ffffff', '--theme-highlight-bg': 'rgba(59, 130, 246, 0.1)', '--theme-highlight-border': '#3b82f6', '--theme-highlight-text': '#93c5fd' } },
    slateGrayD: { name: 'Slate Gray (D)', previewColor: '#94a3b8', cssVars: { '--theme-bg': '#334155', '--theme-header-bg': '#475569', '--theme-toc-bg': '#475569', '--theme-toc-text': '#e2e8f0', '--theme-toc-active-bg': '#94a3b8', '--theme-toc-active-text': '#1e293b', '--theme-content-bg': 'rgba(71,85,105,0.8)', '--theme-text-color': '#e2e8f0', '--theme-heading-color': '#cbd5e1', '--theme-heading-border': '#94a3b8', '--theme-check': '#94a3b8', '--theme-switch-lang-active': '#ffffff', '--theme-highlight-bg': 'rgba(148, 163, 184, 0.1)', '--theme-highlight-border': '#64748b', '--theme-highlight-text': '#cbd5e1' } },
    tangerineD: { name: 'Tangerine (D)', previewColor: '#fb923c', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#c2410c', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#fb923c', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#fb923c', '--theme-heading-border': '#f97316', '--theme-check': '#fb923c', '--theme-switch-lang-active': '#ffffff', '--theme-highlight-bg': 'rgba(251, 146, 60, 0.1)', '--theme-highlight-border': '#f97316', '--theme-highlight-text': '#fdba74' } },
    crimsonD: { name: 'Crimson (D)', previewColor: '#f87171', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#b91c1c', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#f87171', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f87171', '--theme-heading-border': '#ef4444', '--theme-check': '#f87171', '--theme-switch-lang-active': '#ffffff', '--theme-highlight-bg': 'rgba(248, 113, 113, 0.1)', '--theme-highlight-border': '#ef4444', '--theme-highlight-text': '#fca5a5' } },
    roseD: { name: 'Rose (D)', previewColor: '#f472b6', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#be185d', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#f472b6', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#f472b6', '--theme-heading-border': '#ec4899', '--theme-check': '#f472b6', '--theme-switch-lang-active': '#ffffff', '--theme-highlight-bg': 'rgba(244, 114, 182, 0.1)', '--theme-highlight-border': '#ec4899', '--theme-highlight-text': '#f9a8d4' } },
    violetD: { name: 'Violet (D)', previewColor: '#a78bfa', cssVars: { '--theme-bg': '#1f2937', '--theme-header-bg': '#6d28d9', '--theme-toc-bg': '#334155', '--theme-toc-text': '#d1d5db', '--theme-toc-active-bg': '#a78bfa', '--theme-toc-active-text': '#1f2937', '--theme-content-bg': 'rgba(31,41,55,0.8)', '--theme-text-color': '#d1d5db', '--theme-heading-color': '#a78bfa', '--theme-heading-border': '#8b5cf6', '--theme-check': '#a78bfa', '--theme-switch-lang-active': '#ffffff', '--theme-highlight-bg': 'rgba(167, 139, 250, 0.1)', '--theme-highlight-border': '#8b5cf6', '--theme-highlight-text': '#c4b5fd' } },
};

// --- GLOBAL STYLES COMPONENT ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@700&display=swap');
    
    body {
        font-family: 'Inter', sans-serif;
        /* background-color is set by JS in useEffect for reliability */
        color: var(--theme-text-color);
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    .heading-font { font-family: 'Lora', serif; }
    .header-bg {
        background-color: var(--theme-header-bg);
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E");
    }
    .toc-scrollbar::-webkit-scrollbar { width: 8px; }
    .toc-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
    .toc-scrollbar::-webkit-scrollbar-thumb { background-color: var(--theme-heading-border); border-radius: 10px; }
    .toc-scrollbar::-webkit-scrollbar-thumb:hover { background-color: var(--theme-heading-color); }
  `}</style>
);

// --- UTILITY COMPONENT: ContentRenderer ---
const ContentRenderer = ({ item }) => {
    const colorClasses = {
        blue: 'bg-blue-100 border-blue-500 text-blue-800 dark:bg-blue-900/50 dark:border-blue-700 dark:text-blue-200',
        green: 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900/50 dark:border-green-700 dark:text-green-200',
        orange: 'bg-orange-100 border-orange-500 text-orange-800 dark:bg-orange-900/50 dark:border-orange-700 dark:text-orange-200',
    };
    
    const icons = {
        ShieldCheck: <ShieldCheck className="w-8 h-8" />,
        Shield: <Shield className="w-8 h-8" />,
        Globe: <Globe className="w-8 h-8" />,
    };

    switch (item.type) {
        case 'heading':
            const Tag = `h${item.level}`;
            return <Tag className="heading-font text-2xl font-bold mt-8 mb-3" style={{ color: 'var(--theme-heading-color)' }}>{item.content}</Tag>;
        case 'paragraph':
            return <p className="my-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }}></p>;
        case 'list':
             return (
                <ul className="list-disc list-inside space-y-2 my-4 pl-4">
                    {item.items.map((li, i) => <li key={i} dangerouslySetInnerHTML={{ __html: li }}></li>)}
                </ul>
            );
        case 'infoBox':
            return (
                <div className={`my-5 p-4 border-l-4 rounded-r-lg ${colorClasses[item.color]}`}>
                    <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
            );
        case 'image':
            return <img src={item.src} alt={item.alt} className="my-6 rounded-lg shadow-md w-full max-w-2xl mx-auto" />;
        case 'definitionList':
            return (
                <dl className="my-5 space-y-4">
                    {item.items.map((def, i) => (
                        <div key={i}>
                            <dt className="font-bold text-lg" style={{ color: 'var(--theme-heading-color)' }}>{def.term}</dt>
                            <dd className="pl-4 border-l-2 mt-1" style={{ borderColor: 'var(--theme-heading-border)' }}>{def.definition}</dd>
                        </div>
                    ))}
                </dl>
            );
        case 'highlightBox':
            return (
                <div className="my-6 p-4 rounded-lg border-2 shadow-sm" style={{ backgroundColor: 'var(--theme-highlight-bg)', borderColor: 'var(--theme-highlight-border)', color: 'var(--theme-highlight-text)'}}>
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                        <Zap className="w-5 h-5 mr-2" style={{ color: 'var(--theme-heading-color)' }} />
                        {item.title}
                    </h4>
                    <p className="text-sm">{item.content}</p>
                </div>
            );
        case 'cardList':
            return (
                <div className="my-6 grid md:grid-cols-3 gap-4">
                    {item.items.map((card, i) => (
                        <div key={i} className="p-4 rounded-lg border-2 shadow-sm flex flex-col" style={{ backgroundColor: 'var(--theme-highlight-bg)', borderColor: 'var(--theme-highlight-border)', color: 'var(--theme-highlight-text)'}}>
                           <div className="flex items-center mb-2" style={{color: 'var(--theme-heading-color)'}}>
                                {icons[card.icon]}
                                <h4 className="font-bold text-lg ml-2">{card.title}</h4>
                           </div>
                            <p className="text-sm flex-grow">{card.description}</p>
                            <p className="text-xs mt-4 pt-2 border-t" style={{borderColor: 'var(--theme-highlight-border)'}} dangerouslySetInnerHTML={{ __html: card.details }}></p>
                        </div>
                    ))}
                </div>
            );
        default:
            return null;
    }
};

// --- CORE COMPONENTS ---

const Header = ({ title }) => {
    return (
        <header className="header-bg text-white shadow-lg flex items-center justify-center h-[88px]" style={{ marginTop: '70px' }}>
  <h1
    className="heading-font"
    style={{
        fontFamily: 'Lora !important',
      fontWeight: 700,
      textAlign: 'center',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      fontSize: '1.5rem', // base mobile size
      lineHeight: 1.2,
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
      width: '100%',
      maxWidth: '100%',
    }}
  >
    {title}
  </h1>
  <style>{`
    @media (min-width: 640px) {
      .heading-font {
        font-size: 2.25rem !important;
        font-family: 'Lora', serif !important;
      }
    }
  `}</style>
</header>
    );
};

import langStyles from './SwitchLangButton.module.css';

const TocPanel = ({ content, language, onLanguageChange, theme, onThemeChange, activeSection, handleLinkClick }) => {
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
    const themeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (themeRef.current && !themeRef.current.contains(event.target)) {
                setIsThemeDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
    className="p-4 flex flex-col h-full text-sm"
    style={{ paddingTop: '2rem' }}
>
    <style>{`
      @media (min-width: 1024px) {
        .toc-panel-mobile-padding {
          padding-top: 0 !important;
        }
      }
    `}</style>
            <h2 className="heading-font text-xl font-bold mb-4" style={{ color: 'var(--theme-heading-color)' }}>Contents</h2>
            
            <div className="mb-4 relative bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex">
                <div
                    className="absolute top-1 bottom-1 w-1/2 bg-white dark:bg-slate-800 rounded-full shadow-md transition-transform duration-300 ease-in-out"
                    style={{ transform: language === 'en' ? 'translateX(0%)' : 'translateX(100%)' }}
                ></div>
                <button
                    onClick={() => onLanguageChange('en')}
                    className={langStyles.langBtn}
                    style={{ color: language === 'en' ? 'var(--theme-switch-lang-active)' : 'var(--theme-toc-text)' }}
                >
                    English
                </button>
                <button
                    onClick={() => onLanguageChange('hinglish')}
                    className={langStyles.langBtn}
                    style={{ color: language === 'hinglish' ? 'var(--theme-switch-lang-active)' : 'var(--theme-toc-text)' }}
                >
                    Hinglish
                </button>
            </div>

            <nav className="flex-grow overflow-y-auto toc-scrollbar">
                <ul>
                    {content.sections.map((section) => (
                        <li key={section.id} className="my-1">
                            <a
                                href={`#section-${section.id}`}
                                onClick={(e) => handleLinkClick(e, section.id)}
                                className={`block w-full text-left p-2 rounded-md transition-colors duration-200 ${activeSection === section.id ? 'font-bold' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                style={{ 
                                    backgroundColor: activeSection === section.id ? 'var(--theme-toc-active-bg)' : 'transparent',
                                    color: activeSection === section.id ? 'var(--theme-toc-active-text)' : 'var(--theme-toc-text)'
                                }}
                            >
                                {section.id}. {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div style={{ marginTop: '1rem' }} ref={themeRef}>
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.5rem',
                            border: '1px solid var(--theme-heading-border)',
                            borderRadius: '0.5rem',
                            color: 'var(--theme-toc-text)',
                            background: 'none',
                            cursor: 'pointer',
                            font: 'inherit',
                            transition: 'background 0.2s, color 0.2s'
                        }}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{
                                width: '1rem',
                                height: '1rem',
                                borderRadius: '9999px',
                                border: '1px solid rgba(0,0,0,0.2)',
                                backgroundColor: themes[theme].previewColor,
                                display: 'inline-block'
                            }}></span>
                            {themes[theme].name}
                        </span>
                        <ChevronDown style={{ width: '1.25rem', height: '1.25rem', transition: 'transform 0.2s', transform: isThemeDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                    </button>
                    {isThemeDropdownOpen && (
                        <div style={{
                            position: 'absolute',
                            bottom: '100%',
                            marginBottom: '0.5rem',
                            width: '100%',
                            backgroundColor: 'var(--theme-toc-bg)',
                            border: '1px solid var(--theme-heading-border)',
                            borderRadius: '0.5rem',
                            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                            maxHeight: '12rem',
                            overflowY: 'auto',
                            zIndex: 10
                        }}>
                            {Object.entries(themes).map(([key, value]) => (
                                <button key={key} onClick={() => { onThemeChange(key); setIsThemeDropdownOpen(false); }} style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    color: 'var(--theme-toc-text)',
                                    backgroundColor: 'var(--theme-toc-bg)',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s, color 0.2s'
                                }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{
                                            width: '1rem',
                                            height: '1rem',
                                            borderRadius: '9999px',
                                            border: '1px solid rgba(0,0,0,0.2)',
                                            backgroundColor: value.previewColor,
                                            display: 'inline-block'
                                        }}></span>
                                        <span>{value.name}</span>
                                    </span>
                                    {theme === key && <Check style={{ width: '1.25rem', height: '1.25rem', color: 'var(--theme-check)' }} />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const TableOfContents = ({ content, language, onLanguageChange, theme, onThemeChange, activeSection, isTocOpen, closeToc }) => {
    const handleLinkClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(`section-${sectionId}`);
        if(element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 88;
            
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
        if (isTocOpen) {
            closeToc();
        }
    };

    const panelProps = {
        content,
        language,
        onLanguageChange,
        theme,
        onThemeChange,
        activeSection,
        handleLinkClick
    };

    return (
        <>
            {/* Mobile TOC */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isTocOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeToc}>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <aside className={`fixed top-0 left-0 h-full w-72 z-50 lg:hidden transition-transform duration-300 ease-in-out ${isTocOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ backgroundColor: 'var(--theme-content-bg)', color: 'var(--theme-toc-text)' }}>
                <div className="h-full backdrop-blur-lg">
                    <TocPanel {...panelProps} />
                </div>
            </aside>

            {/* Desktop TOC */}
            <aside className="hidden lg:block w-72 h-screen sticky top-0" style={{ backgroundColor: 'var(--theme-toc-bg)', color: 'var(--theme-toc-text)' }}>
                <TocPanel {...panelProps} />
            </aside>
        </>
    );
};

const MainContent = ({ content }) => {
    return (
        <main className="flex-1 p-4 sm:p-6 md:p-8" style={{ backgroundColor: 'var(--theme-bg)' }}>
            {content.sections.map(section => (
                <section key={section.id} id={`section-${section.id}`} className="mb-8 p-6 rounded-xl shadow-lg backdrop-blur-sm scroll-mt-24" style={{ backgroundColor: 'var(--theme-content-b `11)' }}>
                   
                    <h2 className="heading-font text-3xl font-bold border-b-2 pb-2 mb-4" style={{ color: 'var(--theme-heading-color)', borderColor: 'var(--theme-heading-border)' }}>
                        {section.id}. {section.title}
                    </h2>
                    {section.content.map((item, index) => <ContentRenderer key={index} item={item} />)}
                </section>
            ))}
        </main>
    );
};

import styles from './FloatingActionButton.module.css';

const FloatingActionButton = ({ onClick }) => {
    // Only render if window width < 1024px (mobile/tablet)
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isMobile) return null;

    return (
        <button
            onClick={onClick}
            className={styles.fab}
            aria-label="Open table of contents"
        >
            <Menu size={28} />
        </button>
    );
};

// --- Main App Component ---
function App() {
    const [language, setLanguage] = useState('en');
    const [theme, setTheme] = useState('sunriseOrange');
    const [isTocOpen, setIsTocOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(notesData.en.sections[0].id);

    const currentContent = notesData[language] || notesData.en; // Fallback to english
    const allSections = useMemo(() => (currentContent.sections || []).map(s => ({ id: s.id })), [currentContent]);

    // Effect to apply theme changes
    useEffect(() => {
        const selectedTheme = themes[theme];
        if (!selectedTheme) return; 

        for (const key in selectedTheme.cssVars) {
            document.documentElement.style.setProperty(key, selectedTheme.cssVars[key]);
        }
        
        // Explicitly set body background color for reliability
        document.body.style.backgroundColor = selectedTheme.cssVars['--theme-bg'];

        if (theme.endsWith('D')) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    
    // Scrollspy logic
    useEffect(() => {
        const handleScroll = () => {
            const headerOffset = 150; // As per blueprint
            let newActiveSection = '';

            for (const section of [...allSections].reverse()) {
                const element = document.getElementById(`section-${section.id}`);
                if (element && element.getBoundingClientRect().top < headerOffset) {
                    newActiveSection = section.id;
                    break;
                }
            }
            
            if (newActiveSection) {
               setActiveSection(newActiveSection);
            } else if (allSections.length > 0) {
               setActiveSection(allSections[0].id);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [allSections]);

    return (
        <>
            <GlobalStyles />
            <div className="relative">
                <Header title={currentContent.chapterTitle} />
                <div className="flex">
                    <TableOfContents 
                        content={currentContent}
                        language={language}
                        onLanguageChange={setLanguage}
                        theme={theme}
                        onThemeChange={setTheme}
                        activeSection={activeSection}
                        isTocOpen={isTocOpen}
                        closeToc={() => setIsTocOpen(false)}
                    />
                    <MainContent content={currentContent} />
                </div>
                <FloatingActionButton onClick={() => setIsTocOpen(true)} />
            </div>
        </>
    );
}

export default App;
