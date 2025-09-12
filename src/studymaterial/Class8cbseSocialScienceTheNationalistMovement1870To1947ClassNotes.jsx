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
    chapterTitle: "Chapter 14: The Nationalist Movement (1870 to 1947)",
    tocTitle: "Table of Contents",
    metaDescription: "Comprehensive notes on the Indian Nationalist Movement (1870-1947) for Class 8 CBSE. Covers the INC, Moderates, Radicals, Swadeshi Movement, and key events leading to independence.",
    sections: [
      { id: '1', title: "Rise of Indian Nationalism", content: [
          { type: 'paragraph', text: "After 1858, India was directly ruled by the British Crown, but Indians had no say in the government. This resentment led to the birth of the Nationalist Movement. Early groups like the Indian Association (founded by Surendranath Banerjee in 1876) were formed to voice Indian concerns." }
      ]},
      { id: '2', title: "The Indian National Congress (INC): Early Phase (1885-1905)", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'list', items: [
                        "<strong>Formation:</strong> The INC was formed in December 1885 by a retired British official, A. O. Hume. The first meeting was held in Bombay under its President, W. C. Bonnerjee.",
                        "<strong>The Moderates:</strong> The early leaders were called Moderates. They believed in gradual reforms and used methods like petitions and appeals. Prominent leaders included Dadabhai Naoroji and Gopal Krishna Gokhale."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/1_q9rfla.jpg', alt: 'First session of the Indian National Congress in Bombay, 1885.' }] }
            ]
          },
          { type: 'heading', text: "Key Demands:" },
          { type: 'list', items: [
              "Greater representation for Indians in government.",
              "Holding the Civil Services Exam in India.",
              "Stopping the \"drain of wealth\" to Britain."
          ]}
      ]},
      { id: '3', title: "The Radicals and the Partition of Bengal", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>The Radicals (Extremists):</strong> A group within the Congress, led by Lal, Bal, Pal (Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal), who believed in more assertive methods like protests and strikes. They rejected the \"petition\" politics of the Moderates." },
                    { type: 'paragraph', text: "<strong>Partition of Bengal (1905):</strong> Viceroy Lord Curzon partitioned Bengal, claiming it was for administrative efficiency. The real reason was to divide Hindus and Muslims and weaken the nationalist hub." }
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223775/2_t1kz8c.jpg', alt: 'Bal Gangadhar Tilak, a leading radical voice of the freedom struggle.' }] }
            ]
          },
          { type: 'heading', text: "Swadeshi Movement:" },
          { type: 'list', items: [
              "In response, the Swadeshi Movement was launched.",
              "<strong>Swadeshi:</strong> Promotion of Indian-made goods.",
              "<strong>Boycott:</strong> Boycotting of British goods, schools, and colleges.",
              "<strong>Slogan:</strong> Tilak's famous call, \"Swaraj is my birth right and I shall have it!\""
          ]},
          { type: 'paragraph', text: "<strong>Surat Split (1907):</strong> Due to differing ideologies, the Congress split into Moderates and Radicals at the Surat session." }
      ]},
      { id: '4', title: "Key Developments (1906-1919)", content: [
          { type: 'list', items: [
              "<strong>Muslim League (1906):</strong> Formed by leaders like the Aga Khan and Nawab Salimulla of Dhaka, encouraged by the British \"divide and rule\" policy.",
              "<strong>Morley-Minto Reforms (1909):</strong> Introduced separate electorates for Muslims, officially sowing the seeds of religious division in politics.",
              "<strong>Lucknow Pact (1916):</strong> The Moderates and Radicals reunited. The Congress and the Muslim League also signed a pact for joint action.",
              "<strong>Home Rule League (1916):</strong> Started by Annie Besant and Bal Gangadhar Tilak to demand self-government.",
              "<strong>Arrival of Gandhi:</strong> Mahatma Gandhi returned to India and introduced his method of non-violent struggle, Satyagraha. His first success was the Champaran Satyagraha (1917).",
              "<strong>Rowlatt Act (1919):</strong> A harsh law that allowed arrest without warrant and detention without trial. It was called the \"Black Law.\""
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Jallianwala Bagh Massacre (April 13, 1919):</strong> At a peaceful protest in Amritsar against the Rowlatt Act, British troops under General Dyer fired on an unarmed crowd, killing hundreds. This event horrified the nation."}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/3_bvzlh5.jpg', alt: 'The Jallianwala Bagh massacre, where hundreds were killed under General Dyer\'s orders.' }] }
            ]
          }
      ]},
       { id: '5', title: "The Era of Mass Movements", content: [
          { type: 'heading', text: "Non-Cooperation Movement (1920-22):" },
          { type: 'list', items: [
              "Gandhiji asked Indians to withdraw all cooperation with the British government. This was launched along with the Khilafat Movement, uniting Hindus and Muslims.",
              "It was called off by Gandhiji in 1922 after the Chauri Chaura incident, where a mob burned a police station."
          ]},
          { type: 'heading', text: "Simon Commission (1927):" },
          { type: 'list', items: [
              "A British commission sent to suggest reforms, but it had no Indian members.",
              "It was widely boycotted. During a protest, Lala Lajpat Rai was severely injured and later died."
          ]},
          { type: 'heading', text: "Demand for Purna Swaraj (1929):" },
          { type: 'list', items: [
              "At the Lahore session, under President Jawaharlal Nehru, the INC declared Purna Swaraj (Complete Independence) as its goal.",
              "January 26, 1930, was celebrated as the first \"Independence Day.\""
          ]},
          { type: 'heading', text: "Civil Disobedience Movement (1930-34):" },
          { type: 'list', items: [
              "It began with Gandhiji's famous Dandi March (Salt March) to break the British salt law.",
              "People across India broke unjust laws, boycotted goods, and refused to pay taxes. Abdul Ghaffar Khan (\"Frontier Gandhi\") was a key leader."
          ]}
      ]},
      { id: '6', title: "Revolutionaries and the Final Push for Freedom", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Revolutionary Activities:</strong> Alongside non-violent movements, armed revolutionaries were also active. Key figures included Bhagat Singh, Chandrashekhar Azad, and Subhash Chandra Bose. They were involved in events like the Kakori train robbery and the assassination of a British officer to avenge Lala Lajpat Rai's death." }
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/4_m3yg06.jpg', alt: 'Bhagat Singh, a powerful symbol of revolutionary nationalism.' }] }
            ]
          },
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Government of India Act, 1935:</strong> This act granted significant provincial autonomy and was a major step towards self-rule." },
                    { type: 'heading', text: "Quit India Movement (1942):" },
                    { type: 'list', items: [
                        "During World War II, Gandhiji launched the final major movement, giving the call \"Do or Die.\"",
                        "It was a massive uprising, which the British suppressed with great force."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/5_obzoqv.jpg', alt: 'Subhash Chandra Bose with the INA.' }] }
            ]
          },
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Subhash Chandra Bose & INA:</strong> Subhash Chandra Bose escaped India, formed the Indian National Army (INA), and sought help from Axis powers to fight the British. His slogan was, \"You give me blood and I will give you freedom.\"" },
                    { type: 'heading', text: "Independence and Partition:" },
                    { type: 'list', items: [
                        "After WWII, the British agreed to grant independence.",
                        "The Cabinet Mission was sent to plan the transfer of power.",
                        "However, the Muslim League's demand for a separate nation led to the painful partition of the country.",
                        "India finally achieved its independence on August 15, 1947."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/6_trypgo.jpg', alt: 'India awakens to life and freedom on August 15, 1947.' }] }
            ]
          }
      ]}
    ]
  },
  hi: {
    chapterTitle: "Chapter 14: The Nationalist Movement (1870 to 1947)",
    tocTitle: "Table of Contents",
    metaDescription: "Indian Nationalist Movement (1870-1947) par complete notes. Class 8 CBSE students ke liye Vardaan Learning Institute dwara. INC, Swadeshi Movement, aur azaadi ki ladai cover ki gayi hai.",
    sections: [
      { id: '1', title: "Rise of Indian Nationalism", content: [
          { type: 'paragraph', text: "1858 ke baad, India par direct British Crown ka rule tha, lekin Indians ka government mein koi role nahi tha. Is gusse se Nationalist Movement shuru hua. Shuru mein Surendranath Banerjee jaise leaders ne Indian Association (1876) jaise groups banaye." }
      ]},
      { id: '2', title: "The Indian National Congress (INC): Early Phase (1885-1905)", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'list', items: [
                        "<strong>Formation:</strong> INC December 1885 mein ek retired British official, A. O. Hume, ne banayi. Pehli meeting Bombay mein hui, jiske President W. C. Bonnerjee the.",
                        "<strong>The Moderates:</strong> Shuru ke leaders 'Moderates' kehlaye. Woh petitions aur appeals jaise peaceful tareekon mein vishwas rakhte the. Dadabhai Naoroji aur Gopal Krishna Gokhale iske bade leaders the."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/1_q9rfla.jpg', alt: 'First session of the Indian National Congress in Bombay, 1885.' }] }
            ]
          },
          { type: 'heading', text: "Key Demands:" },
          { type: 'list', items: [
              "Government mein Indians ka zyada representation.",
              "Civil Services Exam India mein bhi conduct ho.",
              "India se Britain paisa jaana ('drain of wealth') band ho."
          ]}
      ]},
      { id: '3', title: "The Radicals and the Partition of Bengal", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>The Radicals (Extremists):</strong> Congress ke andar ek group, jise 'Lal, Bal, Pal' (Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal) lead kar rahe the, protests aur strikes jaise strong methods chahte the. Unhe Moderates ki 'petition' politics pasand nahi thi." },
                    { type: 'paragraph', text: "<strong>Partition of Bengal (1905):</strong> Viceroy Lord Curzon ne Bengal ko baant diya. Official reason 'administration' bataya, but asli reason Hindu-Muslim ko divide karke nationalist movement ko kamzor karna tha." }
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223775/2_t1kz8c.jpg', alt: 'Bal Gangadhar Tilak, a leading radical voice of the freedom struggle.' }] }
            ]
          },
          { type: 'heading', text: "Swadeshi Movement:" },
          { type: 'list', items: [
              "Iske jawab mein Swadeshi Movement launch hua.",
              "<strong>Swadeshi:</strong> Indian-made goods ko promote karna.",
              "<strong>Boycott:</strong> British saaman, schools, aur colleges ka boycott karna.",
              "<strong>Slogan:</strong> Tilak ka famous nara, \"Swaraj is my birth right and I shall have it!\""
          ]},
          { type: 'paragraph', text: "<strong>Surat Split (1907):</strong> Alag-alag soch ke kaaran, Surat session mein Congress Moderates aur Radicals mein split ho gayi." }
      ]},
      { id: '4', title: "Key Developments (1906-1919)", content: [
          { type: 'list', items: [
              "<strong>Muslim League (1906):</strong> Aga Khan aur Nawab Salimulla jaise leaders ne banayi, jise British ki 'divide and rule' policy ne encourage kiya.",
              "<strong>Morley-Minto Reforms (1909):</strong> Ismein Muslims ke liye 'separate electorates' introduce kiye gaye, jisne politics mein dharm ke आधार par division ko aur badha diya.",
              "<strong>Lucknow Pact (1916):</strong> Moderates aur Radicals phir ek ho gaye. Congress aur Muslim League ne bhi joint action ke liye pact sign kiya.",
              "<strong>Home Rule League (1916):</strong> Annie Besant aur Bal Gangadhar Tilak ne self-government ki demand ke liye shuru ki.",
              "<strong>Arrival of Gandhi:</strong> Mahatma Gandhi India wapas aaye aur unhone non-violent struggle, Satyagraha, ka naya tareeka introduce kiya. Unki pehli success Champaran Satyagraha (1917) thi.",
              "<strong>Rowlatt Act (1919):</strong> Ek kala kanoon jo bina warrant ke arrest aur bina trial ke jail ki permission deta tha. Ise 'Black Law' kaha gaya."
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Jallianwala Bagh Massacre (April 13, 1919):</strong> Amritsar mein Rowlatt Act ke against ek peaceful protest par General Dyer ke order par British soldiers ne firing ki, jismein saikdon log maare gaye. Is घटना ne poore desh ko hila diya."}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/3_bvzlh5.jpg', alt: 'The Jallianwala Bagh massacre, where hundreds were killed under General Dyer\'s orders.' }] }
            ]
          }
      ]},
       { id: '5', title: "The Era of Mass Movements", content: [
          { type: 'heading', text: "Non-Cooperation Movement (1920-22):" },
          { type: 'list', items: [
              "Gandhiji ne Indians se British government ke saath har tarah ka cooperation band karne ko kaha. Yeh Khilafat Movement ke saath shuru hua, jisne Hindu-Muslim unity ko badhaya.",
              "1922 mein Chauri Chaura incident (jahan bheed ne police station jala diya) ke baad Gandhiji ne ise wapas le liya."
          ]},
          { type: 'heading', text: "Simon Commission (1927):" },
          { type: 'list', items: [
              "Reforms ke liye ek British commission jismein koi Indian member nahi tha.",
              "Ise poore desh mein boycott kiya gaya. Ek protest mein, Lala Lajpat Rai zakhmi hue aur baad mein unki death ho gayi."
          ]},
          { type: 'heading', text: "Demand for Purna Swaraj (1929):" },
          { type: 'list', items: [
              "Lahore session mein, Jawaharlal Nehru ki presidency mein, INC ne Purna Swaraj (Complete Independence) ko apna goal declare kiya.",
              "26 January, 1930 ko pehla 'Independence Day' manaya gaya."
          ]},
          { type: 'heading', text: "Civil Disobedience Movement (1930-34):" },
          { type: 'list', items: [
              "Gandhiji ki famous Dandi March (Salt March) se shuru hua, jismein unhone British salt law toda.",
              "Poore desh mein logon ne kanoon tode, saaman boycott kiya, aur tax dene se mana kar diya. Abdul Ghaffar Khan ('Frontier Gandhi') ek bade leader the."
          ]}
      ]},
      { id: '6', title: "Revolutionaries and the Final Push for Freedom", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Revolutionary Activities:</strong> Non-violent movements ke saath-saath, Bhagat Singh, Chandrashekhar Azad, aur Subhash Chandra Bose jaise krantikari bhi active the jo armed struggle mein vishwas rakhte the. Woh Kakori train robbery jaise events mein shaamil the." }
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/4_m3yg06.jpg', alt: 'Bhagat Singh, a powerful symbol of revolutionary nationalism.' }] }
            ]
          },
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Government of India Act, 1935:</strong> Is act ne provinces ko kaafi autonomy di aur self-rule ki taraf ek bada step tha." },
                    { type: 'heading', text: "Quit India Movement (1942):" },
                    { type: 'list', items: [
                        "World War II ke time, Gandhiji ne 'Do or Die' ka call dete hue final mass movement launch kiya.",
                        "Yeh ek massive uprising thi, jise British ne buri tarah daba diya."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/5_obzoqv.jpg', alt: 'Subhash Chandra Bose with the INA.' }] }
            ]
          },
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "<strong>Subhash Chandra Bose & INA:</strong> Subhash Chandra Bose India se bahar gaye, Indian National Army (INA) banayi, aur Axis powers se help maangi. Unka naara tha, \"Tum mujhe khoon do, main tumhe azaadi dunga.\"" },
                    { type: 'heading', text: "Independence and Partition:" },
                    { type: 'list', items: [
                        "WWII ke baad, British azaadi dene ke liye taiyar ho gaye.",
                        "Power transfer plan karne ke liye Cabinet Mission bheja gaya.",
                        "Lekin, Muslim League ki alag desh ki maang ke kaaran desh ka partition hua.",
                        "Finally, 15 August, 1947 ko India azaad hua."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/6_trypgo.jpg', alt: 'India awakens to life and freedom on August 15, 1947.' }] }
            ]
          }
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
      "@id": "https://vardaanlearning.com/notes/cbse-class-8-history-chapter-14" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/1_q9rfla.jpg",  // A representative image
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
    "datePublished": "2025-08-26",
    "dateModified": "2025-08-26"
  };

  return (
    <>
      <Helmet>
        <title>{`${currentContent.chapterTitle} - Class 8 History Notes`}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content="CBSE Class 8, History, Nationalist Movement, Indian National Congress, Swadeshi Movement, Vardaan Learning Institute, NCERT Notes" />
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
            marginTop: '80px',
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
