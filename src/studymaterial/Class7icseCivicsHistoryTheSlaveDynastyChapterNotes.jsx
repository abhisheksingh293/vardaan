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


// Data for the entire chapter, structured for dual-language support (English & Hinglish)
const notesData = {
  en: {
    chapterTitle: "Chapter 4: The Slave Dynasty",
    tocTitle: "Table of Contents",
    metaDescription: "Comprehensive notes on the Slave Dynasty for Class 7 ICSE. Learn about Qutb-ud-din Aibak, Iltutmish, Razia Sultana, Balban, key policies, and the establishment of the Delhi Sultanate.",
    sections: [
      {
        id: '1', title: "Introduction to the Delhi Sultanate", content: [
          { type: 'list', items: [
            "<strong>Successor of Mohammad Ghori:</strong> After Mohammad Ghori died in 1206 CE, he left no heir to take over his throne.",
            "<strong>Rise of Qutb-ud-din Aibak:</strong> One of Mohammad Ghori's generals, Qutb-ud-din Aibak, succeeded him as the ruler.",
            "<strong>The Slave or Mamluk Dynasty:</strong> The dynasty that Qutb-ud-din Aibak established is known as the Slave Dynasty.<br>- It is also called the Mamluk Dynasty. 'Mamluk' is an Arabic word that means 'slave' or 'owned'.<br>- The reason for this name is that its most powerful rulers, including Qutb-ud-din Aibak, Iltutmish, and Balban, were originally slaves.",
            "<strong>Beginning of the Delhi Sultanate:</strong> The start of the Slave Dynasty marked the beginning of the Delhi Sultanate. The Sultanate was made up of five dynasties that ruled one after another:<br>- The Slave dynasty (1206-1290 CE)<br>- The Khalji dynasty (1290-1320 CE)<br>- The Tughluq dynasty (1320-1413 CE)<br>- The Sayyid dynasty (1414-1451 CE)<br>- The Lodi dynasty (1451-1526 CE)"
          ]}
        ]
      },
      {
        id: '2', title: "Rulers of the Slave Dynasty",
        subSections: [
          {
            id: '2.1', title: "Qutb-ud-din Aibak (1206-1210 CE)", content: [
              { type: 'list', items: [
                "<strong>First Sultan:</strong> Qutb-ud-din Aibak was the first Sultan of the Slave dynasty.",
                "<strong>Achievements:</strong><br>- He was successful in putting down all internal rebellions.<br>- He also successfully protected his kingdom from external invaders.",
                "<strong>Generosity:</strong><br>- He was a devout Muslim and was known for his generosity.<br>- He gave large sums of money in charity, which earned him the name ‘Lakh Baksh’ or ‘giver of lakhs’.",
                "<strong>Architecture:</strong><br>- He built India's oldest mosque in Delhi, next to the Qutb Minar. This mosque has been called Qubbat-ul-Islam ('sanctuary of Islam') and Quwwat-ul-Islam ('might of Islam').<br>- He also built another mosque in Ajmer called Arhai Din Ka Jhonpra.<br>- He began the construction of the famous Qutb Minar but passed away before he could complete it.",
                "<strong>Death:</strong> He did not rule for long. He died after falling from his horse while playing Chaugan (Polo)."
              ]}
            ]
          },
          {
            id: '2.2', title: "Shams-ud-din Iltutmish (1211-1236 CE)", content: [
              { type: 'list', items: [
                "<strong>Succession:</strong> Iltutmish was the successor of Qutb-ud-din. He was Qutb-ud-din's slave and also his son-in-law.",
                "<strong>Administration:</strong><br>- Iltutmish was a wise ruler. To gain the support of the Turkish nobles, he introduced the iqtadari system.<br>- Under this system, he divided territories into iqtas and gave them to nobles. These nobles were then responsible for the administration and tax collection of their iqta.<br>- He also introduced silver coins.",
                "<strong>Approval from the Caliph:</strong><br>- Iltutmish got his claim to the throne approved by the Khalifa or Caliph, who was considered the religious head of the entire Muslim community.<br>- This recognition made him a more powerful ruler and helped him increase his authority among the nobles and the people.",
                "<strong>Conquests:</strong><br>- He defeated Yalduz, the ruler of Ghazni, and Qubacha, the ruler of Multan, pushing them out of Punjab.<br>- He successfully suppressed the Khalji revolt in Bengal.<br>- He also defeated the Rajput rulers of Gwalior, Malwa, Ujjain, Ranthambhor, and Mandu.",
                "<strong>Saving India from the Mongols:</strong><br>- Around this time, the Mongol ruler Genghis Khan was a major threat. He and his army were chasing the Shah of Persia and reached the banks of the Indus River.<br>- In 1221 CE, the Shah of Persia asked Iltutmish for shelter in India.<br>- Realising the danger of a Mongol invasion, Iltutmish diplomatically refused to give shelter to the Shah.<br>- This act pleased Genghis Khan, who then turned back without attacking India. This clever move saved the empire from destruction.",
                "<strong>Architecture:</strong><br>- Iltutmish was a supporter of art and architecture.<br>- He completed the construction of the Qutb Minar, which was started by Qutb-ud-din Aibak.<br>- He built his own tomb in Delhi using red sandstone.<br>- He also constructed a beautiful mosque at Badaun.",
                "<strong>Legacy:</strong> Iltutmish is rightly called the saviour of the empire because he consolidated its power, crushed internal revolts, and saved it from a Mongol invasion when it was still young and weak."
              ]}
            ]
          },
          {
            id: '2.3', title: "Razia Sultana (1236-1240 CE)", content: [
              { type: 'list', items: [
                "<strong>Succession to the Throne:</strong><br>- Before his death in 1236 CE, Iltutmish nominated his daughter, Razia Sultana, to be his successor because he felt none of his sons were capable enough.<br>- However, the nobles did not want to be ruled by a woman, so they put her brother, Ruknuddin, on the throne instead.<br>- Ruknuddin proved to be an unworthy ruler, so the nobles removed him and allowed Razia to become the ruler in 1236 CE.",
                "<strong>Her Rule:</strong><br>- Razia was an able and wise ruler.<br>- She successfully established law and order and ended the chaos in the kingdom.<br>- She personally led her army in wars and took action against corrupt nobles.",
                "<strong>Rebellion and Downfall:</strong><br>- The nobles were reluctant to accept a woman as their ruler.<br>- Her growing favour for a slave named Yakut angered the nobles further, which led to a rebellion against her.<br>- The leader of the rebels was Altuniya, the Governor of Sirhind. To manage the situation, Razia married Altuniya.<br>- Together, they marched towards Delhi to reclaim the throne, but they were defeated and killed in 1240 CE."
              ]}
            ]
          },
          {
            id: '2.4', title: "Nasir-ud-din Mahmud (1246-1266 CE)", content: [
              { type: 'list', items: [
                "<strong>Period of Chaos:</strong> After Razia's death, there was a period of chaos and disorder ruled by inefficient leaders. The Mongols also attacked and destroyed Lahore in 1241 CE.",
                "<strong>The Chalisa (Group of Forty):</strong> In 1246 CE, a group of forty powerful Turkish nobles, known as the Chalisa or the Group of Forty, placed Iltutmish's youngest son, Nasir-ud-din Mahmud, on the throne.",
                "<strong>Rule of Balban as Prime Minister:</strong><br>- Nasir-ud-din was only seventeen years old when he became Sultan. He left the entire work of administration to his Prime Minister, Balban.<br>- Balban was also Nasir-ud-din's father-in-law.<br>- Balban served the Sultan faithfully and crushed all internal rebellions with a stern hand.<br>- To protect the country from Mongol attacks, he built a chain of forts on the frontier.<br>- Nasir-ud-din Mahmud died in 1265 CE."
              ]}
            ]
          },
          {
            id: '2.5', title: "Ghias-ud-din Balban (1266-1286 CE)", content: [
              { type: 'list', items: [
                "<strong>Ascension to the Throne:</strong> After Nasir-ud-din's death, Balban, who was his adviser and father-in-law, became the Sultan in 1266 CE. He had already been managing the administration for 20 years as Prime Minister and ruled for another 20 years as Sultan.",
                "<strong>Challenges Faced by Balban:</strong><br>- The powerful Turkish chiefs, the 'Group of Forty', challenged his authority.<br>- Many local Rajput chiefs had to be brought under control.<br>- The Mongols were once again threatening to attack India.",
                "<strong>Balban's Policies and Actions:</strong><br>- <strong>'Blood and Iron' Policy:</strong> To establish peace and order, Balban adopted a policy of 'Blood and Iron'. This meant he used his sword without mercy against rebels, invaders, thieves, and traitors.<br>- <strong>Controlling the Nobles:</strong> He took strong measures to crush the power of the rebellious nobles.<br>- <strong>Dealing with Mongol Threat:</strong> He built new forts along the north-west frontier and repaired old ones. He kept a strong, well-equipped army and made his son the governor of the frontier province of Multan.<br>- <strong>Suppressing Rebellions:</strong> He defeated local chiefs, especially in the doab area and Rajasthan. When Tughril Beg declared independence in Bengal, Balban marched there, crushed the revolt, and had Tughril Beg and his followers put to death. He then appointed his own son, Bughra Khan, as the governor of Bengal.",
                "<strong>Court Discipline and Divine Right of Kingship:</strong><br>- Balban wanted to establish his belief in the 'divine right of kingship', which meant that the king was God's representative on Earth and must be obeyed by all. This created an absolute monarchy.<br>- To reduce the power of the nobles, he introduced strict court discipline.<br>- He introduced the custom of sijdah, where nobles had to kneel and touch the ground with their forehead to greet the Sultan.<br>- This custom horrified orthodox Muslims, as they believe sijdah should only be done before God because Islam preaches that all men are equal."
              ]}
            ]
          }
        ]
      },
      {
        id: '3', title: "Fall of the Slave Dynasty", content: [
          { type: 'list', items: [
            "<strong>Balban's Success:</strong> Balban was a successful ruler. Under his rule, forests were cleared, roads were made safer, and trade and agriculture improved. He died in 1286 CE.",
            "<strong>Collapse of the Dynasty:</strong><br>- After Balban’s death, the Slave dynasty collapsed quickly.<br>- His successors were all inefficient and weak.",
            "<strong>Rise of the Khaljis:</strong> A Khalji noble named Jalaluddin Khalji murdered Balban's grandson, Kaikubad, and took over the throne.",
            "<strong>End of an Era:</strong> This event marked the end of the Slave dynasty and the beginning of the Khalji dynasty."
          ]}
        ]
      }
    ]
  },
  hi: {
    chapterTitle: "Adhyay 4: Gulam Vansh",
    tocTitle: "Table of Contents",
    metaDescription: "Class 7 ICSE ke liye Gulam Vansh par notes. Qutb-ud-din Aibak, Iltutmish, Razia Sultana, Balban, unki neetiyon, aur Delhi Sultanate ki sthapna ke baare mein jaanein.",
    sections: [
       {
        id: '1', title: "Delhi Sultanate ka Parichay", content: [
          { type: 'list', items: [
            "<strong>Mohammad Ghori ka Uttaradhikari:</strong> 1206 CE mein Mohammad Ghori ki mrityu ke baad, unka koi waris nahi tha.",
            "<strong>Qutb-ud-din Aibak ka Uday:</strong> Mohammad Ghori ke ek general, Qutb-ud-din Aibak, unke uttaradhikari bane.",
            "<strong>Gulam ya Mamluk Vansh:</strong> Qutb-ud-din Aibak dwara sthapit vansh ko Gulam Vansh ke naam se jana jata hai.<br>- Ise Mamluk Vansh bhi kehte hain. 'Mamluk' ek arabi shabd hai jiska arth hai 'gulam' ya 'milkiyat'.<br>- Iska kaaran yah hai ki iske sabse shaktishali shasak, jaise Qutb-ud-din Aibak, Iltutmish, aur Balban, mool roop se gulam the.",
            "<strong>Delhi Sultanate ki Shuruat:</strong> Gulam Vansh ki shuruat ne Delhi Sultanate ka aarambh kiya. Sultanate mein paanch vansh the jinhone ek ke baad ek shasan kiya:<br>- Gulam vansh (1206-1290 CE)<br>- Khalji vansh (1290-1320 CE)<br>- Tughluq vansh (1320-1413 CE)<br>- Sayyid vansh (1414-1451 CE)<br>- Lodi vansh (1451-1526 CE)"
          ]}
        ]
      },
      {
        id: '2', title: "Gulam Vansh ke Shashak",
        subSections: [
          {
            id: '2.1', title: "Qutb-ud-din Aibak (1206-1210 CE)", content: [
              { type: 'list', items: [
                "<strong>Pehla Sultan:</strong> Qutb-ud-din Aibak Gulam Vansh ka pehla Sultan tha.",
                "<strong>Uplabdhiyan:</strong><br>- Vah sabhi aantrik vidrohon ko dabane mein safal raha.<br>- Usne apne rajya ko bahari aakramankariyon se bhi safaltapoorvak bachaya.",
                "<strong>Udarta:</strong><br>- Vah ek sachcha Musalman tha aur apni udarta ke liye jana jata tha.<br>- Usne daan mein badi rakam di, jiske kaaran use 'Lakh Baksh' ya 'lakhon ka data' kaha gaya.",
                "<strong>Vastukala:</strong><br>- Usne Delhi mein Qutb Minar ke paas Bharat ki sabse purani masjid banwayi. Is masjid ko Qubbat-ul-Islam ('Islam ka sharansthal') aur Quwwat-ul-Islam ('Islam ki shakti') kaha gaya hai.<br>- Usne Ajmer mein Arhai Din Ka Jhonpra नामक ek aur masjid banwayi.<br>- Usne prasiddh Qutb Minar ka nirman shuru kiya lekin ise poora karne se pehle hi uski mrityu ho gayi.",
                "<strong>Mrityu:</strong> Usne lamba shasan nahi kiya. Unki mrityu Chaugan (Polo) khelte samay ghode se girkar hui."
              ]}
            ]
          },
          {
            id: '2.2', title: "Shams-ud-din Iltutmish (1211-1236 CE)", content: [
              { type: 'list', items: [
                "<strong>Uttaradhikar:</strong> Iltutmish, Qutb-ud-din ka uttaradhikari tha. Vah Qutb-ud-din ka gulam aur damad bhi tha.",
                "<strong>Prashasan:</strong><br>- Iltutmish ek buddhiman shasak tha. Turk amiron ka samarthan paane ke liye, usne iqtadari pratha shuru ki.<br>- Is pratha ke tahat, usne ilakon ko iqtas mein baanta aur unhe amiron ko de diya. Ye amir apne iqta ke prashasan aur kar vasooli ke liye jimmedar the.<br>- Usne chandi ke sikke bhi chalaye.",
                "<strong>Caliph se Manzoori:</strong><br>- Iltutmish ne apne singhasan par daave ko Khalifa ya Caliph se manzoori dilwayi, jise poore Muslim samuday ka dharmik pramukh mana jata tha.<br>- Is maanyata ne use ek adhik shaktishali shasak banaya aur amiron aur logon ke beech uske adhikar ko badhane mein madad ki.",
                "<strong>Vijayein:</strong><br>- Usne Ghazni ke shasak Yalduz aur Multan ke shasak Qubacha ko harakar Punjab se bahar kar diya.<br>- Usne Bengal mein Khalji vidroh ko safaltapoorvak dabaya.<br>- Usne Gwalior, Malwa, Ujjain, Ranthambhor, aur Mandu ke Rajput shasakon ko bhi haraya.",
                "<strong>Bharat ko Mangolon se Bachana:</strong><br>- Is samay ke aas-paas, Mangol shasak Genghis Khan ek bada khatra tha. Vah aur uski sena Persia ke Shah ka picha kar rahe the aur Sindhu nadi ke tat par pahunch gaye.<br>- 1221 CE mein, Persia ke Shah ne Iltutmish se Bharat mein sharan maangi.<br>- Mangol aakraman ke khatre ko samajhte hue, Iltutmish ne kूटनीतिक roop se Shah ko sharan dene se mana kar diya.<br>- Is kaam se Genghis Khan khush hua, aur vah Bharat par hamla kiye bina laut gaya. Is chatur kadam ne samrajya ko nasht hone se bacha liya.",
                "<strong>Vastukala:</strong><br>- Iltutmish kala aur vastukala ka samarthak tha.<br>- Usne Qutb Minar ka nirman pura karwaya, jise Qutb-ud-din Aibak ne shuru kiya tha.<br>- Usne Delhi mein laal balua patthar se apna maqbara banwaya.<br>- Usne Badaun mein ek sundar masjid ka bhi nirman karwaya.",
                "<strong>Virasat:</strong> Iltutmish ko sahi arth mein samrajya ka rakshak kaha jata hai kyunki usne uski shakti ko majboot kiya, aantrik vidrohon ko kuchla, aur jab vah abhi bhi naya aur kamzor tha, tab use Mangol aakraman se bachaya."
              ]}
            ]
          },
          {
            id: '2.3', title: "Razia Sultana (1236-1240 CE)", content: [
              { type: 'list', items: [
                "<strong>Singhasan ka Uttaradhikar:</strong><br>- 1236 CE mein apni mrityu se pehle, Iltutmish ne apni beti Razia Sultana ko apna uttaradhikari naamit kiya kyunki use laga ki uska koi bhi beta paryapt yogy nahi tha.<br>- Lekin, amir ek mahila dwara shasit nahi hona chahte the, isliye unhone uske bhai Ruknuddin ko singhasan par bitha diya.<br>- Ruknuddin ek ayogy shasak saabit hua, isliye amiron ne use hata diya aur 1236 CE mein Razia ko shasak banne diya.",
                "<strong>Uska Shasan:</strong><br>- Razia ek yogy aur buddhiman shasak thi.<br>- Usne safaltapoorvak kanoon aur vyavastha sthapit ki aur rajya mein arajakta ko samapt kar diya.<br>- Usne yuddhon mein apni sena ka vyaktigat roop se netritva kiya aur bhrasht amiron ke khilaf karrawai ki.",
                "<strong>Vidroh aur Patan:</strong><br>- Amir ek mahila ko apne shasak ke roop mein sweekar karne ke liye anichchuk the.<br>- Yakut नामक ek gulam ke prati uske badhte pakshpat ne amiron ko aur naraz kar diya, jiske karan uske khilaf vidroh hua.<br>- Vidrohiyon ka neta Sirhind ka Governor Altuniya tha. Sthiti ko sambhalne ke liye, Razia ne Altuniya se shaadi kar li.<br>- Donon ne milkar singhasan wapas paane ke liye Delhi ki or march kiya, lekin ve 1240 CE mein har gaye aur maare gaye."
              ]}
            ]
          },
          {
            id: '2.4', title: "Nasir-ud-din Mahmud (1246-1266 CE)", content: [
              { type: 'list', items: [
                "<strong>Arajakta ka Daur:</strong> Razia ki mrityu ke baad, aksham netaon dwara shasit arajakta aur avyavastha ka daur chala. Mangolon ne 1241 CE mein Lahore par hamla karke use nasht kar diya.",
                "<strong>Chalisa (Chalis ka Samuh):</strong> 1246 CE mein, chalis shaktishali Turk amiron ke ek samuh, jise Chalisa ya Chalis ka Samuh kaha jata hai, ne Iltutmish ke sabse chhote bete, Nasir-ud-din Mahmud, ko singhasan par bithaya.",
                "<strong>Balban ka Pradhan Mantri ke roop mein Shasan:</strong><br>- Nasir-ud-din sirf satrah saal ka tha jab vah Sultan bana. Usne prashasan ka saara kaam apne Pradhan Mantri, Balban, par chhod diya.<br>- Balban Nasir-ud-din ka sasur bhi tha.<br>- Balban ne Sultan ki nishtha se seva ki aur sabhi aantrik vidrohon ko kathorata se kuchal diya.<br>- Desh ko Mangol hamlon se bachane ke liye, usne seema par kilon ki ek shrinkhala banayi.<br>- Nasir-ud-din Mahmud ki 1265 CE mein mrityu ho gayi."
              ]}
            ]
          },
          {
            id: '2.5', title: "Ghias-ud-din Balban (1266-1286 CE)", content: [
              { type: 'list', items: [
                "<strong>Singhasan par Aarohan:</strong> Nasir-ud-din ki mrityu ke baad, Balban, jo uska salahkar aur sasur tha, 1266 CE mein Sultan bana. Vah pehle se hi 20 saal tak Pradhan Mantri ke roop mein prashasan sambhal raha tha aur agle 20 saal tak Sultan ke roop mein shasan kiya.",
                "<strong>Balban dwara Samna ki Gayi Chunautiyan:</strong><br>- Shaktishali Turk pramukhon, 'Chalis ke Samuh', ne uske adhikar ko chunauti di.<br>- Kai sthaniya Rajput pramukhon ko niyantran mein lana tha.<br>- Mangol ek baar fir Bharat par hamla karne ki dhamki de rahe the.",
                "<strong>Balban ki Neetiyan aur Karyavahi:</strong><br>- <strong>'Loh aur Rakt' ki Neeti:</strong> Shanti aur vyavastha sthapit karne ke liye, Balban ne 'Loh aur Rakt' ki neeti apnayi. Iska matlab tha ki usne vidrohiyon, aakramankariyon, choron aur gaddaron ke khilaf nirdayta se apni talwar ka istemal kiya.<br>- <strong>Amiron par Niyantran:</strong> Usne vidrohi amiron ki shakti ko kuchalne ke liye kathor kadam uthaye.<br>- <strong>Mangol Khatre se Nipatna:</strong> Usne uttar-pashchim seema par naye kile banwaye aur purane kilon ki marammat karwayi. Usne ek majboot, susajjit sena rakhi aur apne bete ko Multan ke seemavarti prant ka governor banaya.<br>- <strong>Vidrohon ka Daman:</strong> Usne sthaniya pramukhon ko haraya, khas kar doab kshetra aur Rajasthan mein. Jab Tughril Beg ne Bengal mein svatantrata ki ghoshna ki, to Balban ne wahan march kiya, vidroh ko kuchal diya, aur Tughril Beg aur uske anuyayiyon ko maut ke ghat utar diya. Fir usne apne bete, Bughra Khan, ko Bengal ka governor niyukt kiya.",
                "<strong>Darbari Anushasan aur Raja ka Daivik Adhikar:</strong><br>- Balban 'raja ke daivik adhikar' mein apne vishwas ko sthapit karna chahta tha, jiska matlab tha ki raja prithvi par Ishwar ka pratinidhi hai aur sabko uska aadesh manna chahiye. Isne ek nirankush rajshahi banayi.<br>- Amiron ki shakti ko kam karne ke liye, usne kathor darbari anushasan shuru kiya.<br>- Usne sijdah ki pratha shuru ki, jismein amiron ko Sultan ko pranam karne ke liye ghutne tek kar apne mathe se jameen ko chuna padta tha.<br>- Is pratha ne kattar Musalmanon ko bhaybhit kar diya, kyunki ve mante hain ki sijdah sirf Ishwar ke samne kiya jana chahiye kyunki Islam sabhi manushyon ko saman manta hai."
              ]}
            ]
          }
        ]
      },
      {
        id: '3', title: "Gulam Vansh ka Patan", content: [
          { type: 'list', items: [
            "<strong>Balban ki Safalta:</strong> Balban ek safal shasak tha. Uske shasan mein, jangal saaf kiye gaye, sadkein surakshit banayi gayi, aur vyapar aur krishi mein sudhar hua. Uski 1286 CE mein mrityu ho gayi.",
            "<strong>Vansh ka Patan:</strong><br>- Balban ki mrityu ke baad, Gulam vansh tezi se patan kar gaya.<br>- Uske uttaradhikari sabhi aksham aur kamzor the.",
            "<strong>Khaljiyon ka Uday:</strong> Jalaluddin Khalji नामक ek Khalji amir ne Balban ke pote, Kaikubad, ki hatya kar di aur singhasan par kabza kar liya.",
            "<strong>Ek Yug ka Ant:</strong> Is ghatna ne Gulam vansh ka ant aur Khalji vansh ki shuruat ki."
          ]}
        ]
      }
    ]
  }
};



// Theme definitions
const themes = {
    sunriseOrange: { name: 'Sunrise Orange', previewColor: '#f97316', cssVars: { '--theme-bg': '#fff7ed', '--theme-header-bg': '#f97316', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#f97316', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#ea580c', '--theme-heading-border': '#f97316', '--theme-check': '#f97316', '--theme-switch-lang-active': '#ea580c', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
    oceanBlue: { name: 'Ocean Blue', previewColor: '#3b82f6', cssVars: { '--theme-bg': '#eff6ff', '--theme-header-bg': '#3b82f6', '--theme-toc-bg': '#ffffff', '--theme-toc-text': '#4b5563', '--theme-toc-active-bg': '#3b82f6', '--theme-toc-active-text': '#ffffff', '--theme-content-bg': 'rgba(255,255,255,0.8)', '--theme-text-color': '#4b5563', '--theme-heading-color': '#2563eb', '--theme-heading-border': '#60a5fa', '--theme-check': '#3b82f6', '--theme-switch-lang-active': '#256eb', '--theme-equation-bg': '#f3f4f6', '--theme-equation-text': '#1f2937' } },
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
      "@id": "https://vardaanlearning.com/notes/class-7-slave-dynasty" 
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088016/qutb_minar_delhi.jpg", 
    "author": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vardaan Learning Institute",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vardaanlearning.com/logo.png"
      }
    },
    "datePublished": "2025-09-06",
    "dateModified": "2025-09-06"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 7 Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 7, ICSE, Slave Dynasty, Delhi Sultanate, Qutb-ud-din Aibak, Iltutmish, Razia Sultana, Balban, Vardaan Learning Institute, Notes" />
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
      
      <div className="flex flex-col lg:flex-row bg-[var(--theme-bg)]" >
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
            <div className="lg:sticky top-[70px] h-[calc(100vh-70px)]">
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
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[90px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <section key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[90px]">
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

