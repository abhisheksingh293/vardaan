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
    chapterTitle: "Chapter 13: The Delhi Sultanate",
    tocTitle: "Table of Contents",
    metaDescription: "Comprehensive notes for Class 7 on the Delhi Sultanate, covering the Mamluk, Khalji, Tughlaq, and Lodi dynasties, key rulers, and life during the Sultanate period.",
    sections: [
      { id: '1', title: "The Rise of the Delhi Sultanate", content: [
          { type: 'paragraph', text: "In the late 12th century, India was divided into many small states with a lack of unity among their rulers. Taking advantage of this, Muhammad Ghori invaded and conquered regions like Punjab and Sindh. He fought two major battles against Prithviraj Chauhan, the ruler of Delhi and Ajmer." },
          { type: 'list', items: [
              "<strong>First Battle of Tarain (1191 CE):</strong> Ghori was challenged by Prithviraj Chauhan and was defeated.",
              "<strong>Second Battle of Tarain (1192 CE):</strong> Ghori returned, defeated, and killed Prithviraj Chauhan, capturing Delhi and Ajmer."
          ]},
          { type: 'paragraph', text: "After Ghori was killed by a Khokhar soldier in 1206 CE, the command of his Indian territories went to his slave and deputy, Qutubuddin Aibek. Aibek then established the Slave Dynasty, which was the first dynasty of the Delhi Sultanate." },
      ]},
      { id: '2', title: "The Slave or Mamluk Dynasty (1206-90 CE)", content: [
          { type: 'heading', text: 'Key Rulers'},
          { type: 'list', items: [
              "<strong>Qutubuddin Aibek (1206–10 CE):</strong> He was the founder of the Slave Dynasty. He built the Quwwat-ul-Islam mosque in Delhi and the Adhai Din ka Jhonpra mosque in Ajmer. He also began the construction of the famous Qutub Minar. He died in 1210 CE.",
              "<strong>Iltutmish (1210–36 CE):</strong> He made Delhi his capital. He was a shrewd ruler who diplomatically saved Delhi from a Mongol invasion by Genghis Khan. He organized a group of 40 powerful Turkish nobles known as the Chalisa. He also introduced silver coins (tanka) and copper coins (jital).",
              "<strong>Razia Sultan (1236–40 CE):</strong> The daughter of Iltutmish, she was the first and last Muslim woman to rule during the medieval period. She was a capable ruler who dressed like a man and was a skilled military general. However, she was killed in 1240 CE.",
              "<strong>Ghiyasuddin Balban (1266–86 CE):</strong> A strong and disciplined Sultan, he suppressed all opposition and ended the power of the Chalisa to consolidate his rule. He enhanced the prestige of the Sultan and established an atmosphere of obedience and patriotism. He strengthened the empire's frontiers by building many forts. He died in 1286 CE."
          ]},
      ]},
      { id: '3', title: "The Khalji Dynasty (1290-1320 CE)", content: [
          { type: 'paragraph', text: "<strong>Jalal-ud-din Khalji (1290-96 CE):</strong> He founded the Khalji dynasty at the age of 70. He was murdered by his ambitious nephew, Ala-ud-din Khalji, who then became the Sultan in 1296 CE."},
          { type: 'heading', text: 'Ala-ud-din Khalji (1296-1316 CE)'},
          { type: 'list', items: [
              "<strong>Conquests:</strong> A brilliant general, he conquered Gujarat, Ranthambor, Chittor, and many states in southern India.",
              "<strong>Army Reforms:</strong> He maintained a large, well-equipped army and paid his soldiers in cash. He introduced the hulia (descriptive roll of soldiers) and dag (branding of horses) systems to prevent substitutions.",
              "<strong>Economic Reforms:</strong> He introduced strict market controls, fixing the maximum retail prices of goods. He also established a grain rationing system. Land revenue was fixed according to the size of the landholding, often at 50% of the total produce."
          ]},
      ]},
      { id: '4', title: "The Tughlaq Dynasty (1320-1412 CE)", content: [
          { type: 'paragraph', text: "<strong>Ghiyasuddin Tughlaq (1320-25 CE):</strong> He was the founder of the Tughlaq dynasty. He consolidated the scattered sultanate and restored peace and order."},
          { type: 'heading', text: 'Muhammad bin Tughlaq (1325-51 CE)'},
          { type: 'paragraph', text: 'He was a learned man, but his projects often failed, causing great hardship to the people.'},
          { type: 'list', items: [
              "<strong>Transfer of Capital:</strong> He moved the capital from Delhi to Devgiri (Daulatabad) to better control the Deccan and avoid Mongol attacks, but the move caused immense hardship and had to be reversed.",
              "<strong>Token Currency:</strong> He introduced copper coins as token currency, but this failed because of widespread counterfeiting, which caused a heavy loss to the treasury."
          ]},
          { type: 'paragraph', text: "<strong>Feroz Tughlaq (1351-88 CE):</strong> He was a reformer who built many canals for irrigation, repaired old tanks, and constructed new cities like Hissar and Jaunpur. He opened schools to promote literacy. However, he also imposed the jaziya (a tax on non-Muslims) on Hindus."}
      ]},
      { id: '5', title: "The Lodi Dynasty (1451-1526 CE)", content: [
          { type: 'list', items: [
              "<strong>Bahlol Lodi (1451-89 CE):</strong> He was an able ruler who founded the Lodi dynasty and annexed several territories, including Jaunpur. He did not rule like a Sultan but rather as a feudal lord.",
              "<strong>Sikandar Lodi (1489-1517 CE):</strong> He was a capable ruler but was intolerant towards Hindus and destroyed many of their temples. He founded the city of Agra in 1506 and made it his capital, shifting the center of power from Delhi.",
              "<strong>Ibrahim Lodi (1517-26 CE):</strong> He was the last Sultan of Delhi. He angered his nobles by replacing them with younger officers. This led Daulat Khan Lodi, the governor of Punjab, to invite Babur, the ruler of Kabul, to invade India. Babur defeated and killed Ibrahim Lodi in the First Battle of Panipat in 1526, marking the end of the Delhi Sultanate and the start of Mughal rule."
          ]}
      ]},
      { id: '6', title: "Life During the Sultanate Period", content: [
          { type: 'columns', content: [
              { width: '50%', items: [
                  { type: 'heading', text: "Administration"},
                  { type: 'paragraph', text: "The Sultan was the head of the government and the highest court of appeal. He was assisted by ministers like the Wazir (Diwan-i-Wazarat), who handled finance and revenue, the Diwan-i-Arz, who managed the military, and the Qazi-ul-Quzzat, who was the chief justice." },
                  { type: 'heading', text: "Society"},
                  { type: 'paragraph', text: "The society was mainly divided into Hindus and Muslims. The caste system was prevalent among Hindus, and social evils like the sati system, child marriage, and a ban on widow remarriage existed."}
              ]},
              { width: '50%', items: [
                  { type: 'heading', text: "Economy"},
                  { type: 'paragraph', text: "The economy was primarily based on agriculture, with irrigation supported by canals and wells. Key industries included weaving, handicrafts, and metalwork."},
                  { type: 'heading', text: "Architecture"},
                  { type: 'paragraph', text: "The period saw the development of a new Indo-Islamic style of architecture. Major monuments include the Qutub Minar, Alai Darwaza, and the Tughlaqabad Fort."}
              ]}
          ]}
      ]}
    ]
  },
  hi: {
    chapterTitle: "Chapter 13: The Delhi Sultanate",
    tocTitle: "Table of Contents",
    metaDescription: "Class 7 ke liye Delhi Sultanate par notes, jisme Mamluk, Khalji, Tughlaq, aur Lodi dynasties, unke shasak, aur Sultanate kaal ke jeevan ke baare mein hai.",
    sections: [
      { id: '1', title: "The Rise of the Delhi Sultanate", content: [
          { type: 'paragraph', text: "12th century ke ant mein, India kai chhote-chhote rajyon mein banta hua tha aur unke shasakon mein ekta ki kami thi. Iska fayda uthate hue, Muhammad Ghori ne Punjab aur Sindh jaise ilakon par hamla kiya aur unhe jeet liya. Usne Delhi aur Ajmer ke shasak Prithviraj Chauhan ke khilaf do badi ladaiyan ladi." },
          { type: 'list', items: [
              "<strong>First Battle of Tarain (1191 CE):</strong> Ghori ko Prithviraj Chauhan ne chunauti di aur use hara diya.",
              "<strong>Second Battle of Tarain (1192 CE):</strong> Ghori wapas lauta, Prithviraj Chauhan ko haraya aur maar diya, aur Delhi aur Ajmer par kabza kar liya."
          ]},
          { type: 'paragraph', text: "1206 CE mein ek Khokhar sainik dwara Ghori ke maare jaane ke baad, uske Bharatiya pradeshon ki kaman uske gulam aur sahayak, Qutubuddin Aibek ke paas chali gayi. Aibek ne tab Slave Dynasty (Gulam Vansh) ki sthapna ki, jo Delhi Sultanate ka pehla vansh tha." },
      ]},
      { id: '2', title: "The Slave or Mamluk Dynasty (1206-90 CE)", content: [
          { type: 'heading', text: 'Mukhya Shasak'},
          { type: 'list', items: [
              "<strong>Qutubuddin Aibek (1206–10 CE):</strong> Vah Gulam Vansh ka sansthapak tha. Usne Delhi mein Quwwat-ul-Islam masjid aur Ajmer mein Adhai Din ka Jhonpra masjid banwayi. Usne prasiddh Qutub Minar ka nirman bhi shuru karwaya. Uski mrityu 1210 CE mein hui.",
              "<strong>Iltutmish (1210–36 CE):</strong> Usne Delhi ko apni rajdhani banaya. Vah ek chatur shasak tha jisne Genghis Khan ke Mongol aakraman se Delhi ko kूटनीतिक roop se bachaya. Usne 40 shaktishali Turkish sardaron ka ek samuh banaya jise Chalisa ke naam se jaana jaata hai. Usne chandi ke sikke (tanka) aur tambe ke sikke (jital) bhi chalwaye.",
              "<strong>Razia Sultan (1236–40 CE):</strong> Iltutmish ki beti, vah madhyakaleen daur mein shasan karne wali pehli aur aakhri Muslim mahila thi. Vah ek yogy shasak thi jo mardon ki tarah kapde pehenti thi aur ek kushal senapati thi. Halaanki, 1240 CE mein uski hatya kar di gayi.",
              "<strong>Ghiyasuddin Balban (1266–86 CE):</strong> Ek shaktishali aur anushasit Sultan, usne sabhi virodh ko daba diya aur apne shasan ko majboot karne ke liye Chalisa ki shakti ko samapt kar diya. Usne Sultan ki pratishtha badhai aur aagyapalan aur deshbhakti ka mahaul banaya. Usne kai kile banakar samrajya ki seemaon ko majboot kiya. Uski mrityu 1286 CE mein hui."
          ]},
      ]},
      { id: '3', title: "The Khalji Dynasty (1290-1320 CE)", content: [
          { type: 'paragraph', text: "<strong>Jalal-ud-din Khalji (1290-96 CE):</strong> Usne 70 saal ki umra mein Khalji vansh ki sthapna ki. Uske mahatvakankshi bhatije, Ala-ud-din Khalji ne uski hatya kar di, jo phir 1296 CE mein Sultan bana."},
          { type: 'heading', text: 'Ala-ud-din Khalji (1296-1316 CE)'},
          { type: 'list', items: [
              "<strong>Vijayein:</strong> Ek pratibhashali senapati, usne Gujarat, Ranthambor, Chittor, aur dakshin Bharat ke kai rajyon ko jeeta.",
              "<strong>Sena Sudhar:</strong> Usne ek badi, susajjit sena banayi rakhi aur apne sainikon ko nakad mein vetan diya. Usne dhokhadhadi ko rokne ke liye hulia (sainikon ka vivaran) aur dag (ghodon ko daagna) pranali shuru ki.",
              "<strong>Aarthik Sudhar:</strong> Usne kathor bazaar niyantran lagu kiye, cheezon ki adhiktam khudara keemat tay ki. Usne anaj rationing pranali bhi sthapit ki. Bhoomi rajasva zameen ke aakar ke anusaar tay kiya gaya tha, jo aksar kul upaj ka 50% hota tha."
          ]},
      ]},
      { id: '4', title: "The Tughlaq Dynasty (1320-1412 CE)", content: [
          { type: 'paragraph', text: "<strong>Ghiyasuddin Tughlaq (1320-25 CE):</strong> Vah Tughlaq vansh ka sansthapak tha. Usne bikhre hue sultanate ko ek kiya aur shanti aur vyavastha bahal ki."},
          { type: 'heading', text: 'Muhammad bin Tughlaq (1325-51 CE)'},
          { type: 'paragraph', text: 'Vah ek vidwan aadmi tha, lekin uski yojnayein aksar asafal ho jaati thi, jisse logon ko bahut pareshani hoti thi.'},
          { type: 'list', items: [
              "<strong>Rajdhani ka Sthanantaran:</strong> Usne Deccan par behtar niyantran aur Mongol hamlon se bachne ke liye rajdhani ko Delhi se Devgiri (Daulatabad) sthanantarit kiya, lekin is kadam se bahut kathinai hui aur ise vapas lena pada.",
              "<strong>Token Mudra:</strong> Usne token mudra ke roop mein tambe ke sikke chalaye, lekin yah bade paimane par jaali sikkon ke kaaran asafal raha, jisse khazane ko bhari nuksan hua."
          ]},
          { type: 'paragraph', text: "<strong>Feroz Tughlaq (1351-88 CE):</strong> Vah ek sudharak tha jisne sinchai ke liye kai nahrein banwayi, purane tankon ki marammat karwai, aur Hissar aur Jaunpur jaise naye sheher basaye. Usne saksharta ko badhava dene ke liye school khole. Halaanki, usne Hinduon par jaziya (gair-muslimon par ek kar) bhi lagaya."}
      ]},
      { id: '5', title: "The Lodi Dynasty (1451-1526 CE)", content: [
          { type: 'list', items: [
              "<strong>Bahlol Lodi (1451-89 CE):</strong> Vah ek yogy shasak tha jisne Lodi vansh ki sthapna ki aur Jaunpur sahit kai ilakon ko apne adheen kiya. Vah ek Sultan ki tarah nahi balki ek samanti sardar ki tarah shasan karta tha.",
              "<strong>Sikandar Lodi (1489-1517 CE):</strong> Vah ek saksham shasak tha lekin Hinduon ke prati asahishnu tha aur usne unke kai mandiron ko nasht kar diya. Usne 1506 mein Agra sheher ki sthapna ki aur use apni rajdhani banaya, jisse shakti ka kendra Delhi se sthanantarit ho gaya.",
              "<strong>Ibrahim Lodi (1517-26 CE):</strong> Vah Delhi ka aakhri Sultan tha. Usne apne amiron ko yuva adhikariyon se badalkar unhe naraz kar diya. Iske chalte Punjab ke governor, Daulat Khan Lodi ne Kabul ke shasak Babur ko Bharat par aakraman karne ke liye amantrit kiya. Babur ne 1526 mein Panipat ki Pehli Ladai mein Ibrahim Lodi ko haraya aur maar diya, jisse Delhi Sultanate ka ant hua aur Mughal shasan ki shuruaat hui."
          ]}
      ]},
      { id: '6', title: "Life During the Sultanate Period", content: [
          { type: 'columns', content: [
              { width: '50%', items: [
                  { type: 'heading', text: "Prashasan"},
                  { type: 'paragraph', text: "Sultan sarkar ka pramukh aur appeal ki sabse unchi adalat hota tha. Uski sahayata ke liye Wazir (Diwan-i-Wazarat) jaise mantri hote the, jo vitt aur rajasva dekhte the, Diwan-i-Arz, jo sena ka prabandhan karta tha, aur Qazi-ul-Quzzat, jo mukhya nyayadhish tha." },
                  { type: 'heading', text: "Samaj"},
                  { type: 'paragraph', text: "Samaj mukhya roop se Hinduon aur Musalmanon mein vibhajit tha. Hinduon mein jaati pratha prachalit thi, aur sati pratha, bal vivah, aur vidhva punarvivah par pratibandh jaisi samajik buraiyan maujood thi."}
              ]},
              { width: '50%', items: [
                  { type: 'heading', text: "Arthvyavastha"},
                  { type: 'paragraph', text: "Arthvyavastha mukhya roop se krishi par aadharit thi, jismein sinchai ke liye nahron aur kuon ka sahara liya jaata tha. Mukhya udyogon mein bunai, hastashilp, aur dhaatu-karm shamil the."},
                  { type: 'heading', text: "Vastukala"},
                  { type: 'paragraph', text: "Is kaal mein vastukala ki ek nayi Indo-Islamic shaili ka vikas hua. Pramukh smarakon mein Qutub Minar, Alai Darwaza, aur Tughlaqabad Kila shamil hain."}
              ]}
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
                <div key={index} className="w-full" style={{ flexBasis: column.width || 'auto' }}>
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
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('oceanBlue');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openSections, setOpenSections] = useState({ '2': true, '3': true });
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
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vardaanlearning.com/notes/class-7-delhi-sultanate" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://i.imgur.com/8Q9jO3a.jpeg",  // A representative image
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
    "datePublished": "2025-09-05",
    "dateModified": "2025-09-05"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 7 History`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="Class 7, History, Delhi Sultanate, Mamluk Dynasty, Khalji Dynasty, Tughlaq Dynasty, Lodi Dynasty, Vardaan Learning Institute, Notes" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;600;700&display=swap');
        body { background-color: var(--theme-bg); transition: background-color 0.3s; font-family: 'Inter', sans-serif; }
        .heading-font { font-family: 'Lora', serif; }
        h1, h3, h4 { font-family: 'Lora', serif !important; }
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
                    <section key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-[100px]">
                        <div className="backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--theme-content-bg)' }}>
                            <h2 className="heading-font text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.id}. {section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection, index) => (
                                <section key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[100px]">
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


