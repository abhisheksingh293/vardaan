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
      { id: '1', title: "The Beginning of the Nationalist Movement", content: [
          { type: 'paragraph', text: "<strong>Background:</strong> After the Revolt of 1857, the rule of the East India Company ended in 1858. India came directly under the control of the British government (the British Crown). However, Indians still had no power or say in how their own country was governed." },
          { type: 'paragraph', text: "<strong>Growing Resentment:</strong> This lack of power and ongoing British exploitation led to a lot of anger and resentment among the Indian people. This feeling gave rise to the Indian National Movement, a long struggle for freedom." },
          { type: 'paragraph', text: "<strong>Early Political Groups:</strong> To express their problems, many Indians formed small political groups. One of the most important early groups was the Indian Association, started by Surendranath Banerjee in 1876." }
      ]},
      { id: '2', title: "Formation of the Indian National Congress (INC)", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'list', items: [
                        "<strong>Establishment:</strong> The Indian National Congress (INC) was formed in December 1885.",
                        "<strong>Founder:</strong> It was started by A. O. Hume, a retired British official.",
                        "<strong>First Meeting:</strong> The first meeting took place in Bombay and was attended by 72 educated Indian delegates from different parts of the country.",
                        "<strong>First President:</strong> The president of this first meeting was W. C. Bonnerjee."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/1_q9rfla.jpg', alt: 'First session of the Indian National Congress in Bombay, 1885.' }] }
            ]
          },
          { type: 'heading', text: "The Early Phase (1885-1905): The Moderates" },
          { type: 'paragraph', text: "In its early years, the INC was led by a group of leaders known as the Moderates." },
          { type: 'list', items: [
              "<strong>Prominent Moderate Leaders:</strong> Dadabhai Naoroji, Gopal Krishna Gokhale, Surendra Nath Banerjee, Pheroz Shah Mehta, and Badruddin Tyabji.",
              "<strong>Their Methods:</strong> The Moderates believed in gradual reform and used methods like petitions and prayers to ask the British government for changes. They did not believe in aggressive protests. This policy was sometimes called \"Political Begging.\""
          ]},
          { type: 'heading', text: "Main Demands of the Moderates:" },
          { type: 'list', items: [
              "To have representative institutions (where Indians could be elected) for the welfare of the people.",
              "To create Provincial Legislative Councils in all provinces.",
              "To recruit more Indians for high-ranking government jobs.",
              "To hold the Civil Services Examination in India (not just in Britain), making it easier for Indians to participate.",
              "To help Indian industries and handicrafts grow.",
              "To stop the drain of wealth from India to Britain."
          ]}
      ]},
      { id: '3', title: "The Rise of the Radicals (Extremists)", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "A younger group of leaders in the Congress felt that the Moderates' methods were too slow and ineffective. They were known as the Radicals or Extremists." },
                    { type: 'list', items: [
                        "<strong>Reasons for their Rise:</strong> They were angered by the British government's careless attitude during famines and plagues, which killed thousands of Indians. They were also inspired by nationalist movements in other countries like Japan, Russia, and Ethiopia.",
                        "<strong>Prominent Radical Leaders:</strong> The most famous Radical leaders were Lala Lajpat Rai, Bal Gangadhar Tilak, and Bipin Chandra Pal, together known as \"Lal, Bal, Pal.\" Another important leader was Aurobindo Ghosh.",
                        "<strong>Their Methods:</strong> The Radicals believed in strong actions like protests, strikes (hartals), and slogans to pressure the British. They wanted to build pride in Indian culture and Hinduism."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223775/2_t1kz8c.jpg', alt: 'Bal Gangadhar Tilak, a leading radical voice of the freedom struggle.' }] }
            ]
          }
      ]},
      { id: '4', title: "Partition of Bengal and the Swadeshi Movement", content: [
          { type: 'paragraph', text: "<strong>The Partition (1905):</strong> In 1905, the British Viceroy, Lord Curzon, ordered the partition of the province of Bengal into two parts: Eastern Bengal and Bengal." },
          { type: 'list', items: [
              "<strong>Official Reason Given:</strong> The British said Bengal was too big to be administered efficiently.",
              "<strong>The Real Reason:</strong> The real motive was to \"divide and rule.\" Bengal was the center of the nationalist movement, and the British wanted to divide the Hindus and Muslims to weaken the movement."
          ]},
          { type: 'paragraph', text: "<strong>The Reaction:</strong> The partition led to massive protests all over Bengal. The day of the partition was observed as a \"Day of Mourning.\"" },
          { type: 'heading', text: "The Swadeshi Movement:" },
          { type: 'list', items: [
              "The protests against the partition grew into the Swadeshi Movement.",
              "<strong>Swadeshi</strong> means \"of one's own country.\" People were encouraged to use Indian-made goods.",
              "<strong>Boycott:</strong> People decided to boycott (refuse to buy or use) British goods. They made huge bonfires of foreign clothes and picketed shops selling foreign items.",
              "<strong>Famous Slogan:</strong> Bal Gangadhar Tilak gave the famous slogan, \"Swaraj is my birth right and I shall have it!\" (Swaraj means self-rule).",
              "Students, women, and people from all walks of life participated in these movements."
          ]},
          { type: 'paragraph', text: "<strong>Surat Split (1907):</strong> The differences in methods between the Moderates and Radicals led to a split in the Congress at its session in Surat in 1907. The party was divided into two groups." }
      ]},
      { id: '5', title: "Formation of the Muslim League (1906)", content: [
          { type: 'list', items: [
              "<strong>British Policy of \"Divide and Rule\":</strong> To further weaken the national movement, the British encouraged Muslims to form their own separate political organization.",
              "<strong>Establishment:</strong> The Muslim League was formed in 1906.",
              "<strong>Founders:</strong> Its main founders were the Aga Khan and Nawab Salimulla of Dhaka."
          ]}
      ]},
      { id: '6', title: "Morley-Minto Reforms (1909)", content: [
          { type: 'list', items: [
              "<strong>Purpose:</strong> The British government announced these reforms to please the Moderates in the Congress.",
              "<strong>Key Feature:</strong> The reforms did not give Indians self-rule (Swaraj). Instead, they introduced the concept of separate electorates for Muslims. This meant that only Muslims could vote for Muslim candidates, which further divided the people on religious lines."
          ]}
      ]},
      { id: '7', title: "Major Events from 1916 to 1919", content: [
          { type: 'heading', text: "Home Rule League (1916):" },
          { type: 'list', items: [
              "This league was started by Mrs. Annie Besant (an Irish lady) and Bal Gangadhar Tilak.",
              "Its main goal was to achieve self-government for India within the British Empire."
          ]},
          { type: 'heading', text: "Lucknow Pact (1916):" },
          { type: 'list', items: [
              "This was a very important agreement. The Moderates and Radicals reunited after the Surat Split.",
              "The Congress and the Muslim League also signed a pact, agreeing to work together and jointly demand self-rule from the British."
          ]},
          { type: 'heading', text: "Arrival of Mahatma Gandhi:" },
          { type: 'list', items: [
              "Mohandas Karamchand Gandhi returned to India from South Africa after World War I.",
              "He introduced a new method of non-violent struggle called Satyagraha (which means \"demand for truth\"). It was based on the principles of ahimsa (non-violence) and truth.",
              "His first major movement in India was in Champaran, Bihar (1917), where he helped peasants who were being forced to grow indigo by the British."
          ]},
          { type: 'heading', text: "Montague-Chelmsford Reforms (Government of India Act of 1919):" },
          { type: 'list', items: [
              "These reforms were considered insignificant and disappointed the Indians.",
              "They introduced a system called Dyarchy, or a dual system of government in the provinces.",
              "Important departments like finance and police remained under British control, while less important ones like education and health were given to Indian ministers who had little real power."
          ]},
          { type: 'heading', text: "Rowlatt Act (1919):" },
          { type: 'list', items: [
              "This was a harsh law passed by the British to suppress protests.",
              "It allowed the police to arrest anyone without a warrant and imprison them without a trial.",
              "It was called the \"Black Law\" because it went against basic human rights (\"No Appeal, No Dalil, No Vakil\"). This led to massive protests across India."
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'heading', text: "Jallianwala Bagh Massacre (April 13, 1919):" },
                    { type: 'list', items: [
                        "On the festival of Baisakhi, a large, peaceful crowd gathered at Jallianwala Bagh in Amritsar to protest the arrest of two leaders, Dr. Satya Pal and Dr. Saifuddin Kitchlew.",
                        "The British officer, General Dyer, blocked the only exit and ordered his soldiers to fire on the unarmed crowd.",
                        "Hundreds of innocent men, women, and children were killed.",
                        "This brutal massacre shocked the entire nation, and martial law was imposed in Punjab."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/3_bvzlh5.jpg', alt: 'The Jallianwala Bagh massacre, where hundreds were killed under General Dyer\'s orders.' }] }
            ]
          }
      ]},
       { id: '8', title: "The Era of Mass Movements (1920-1934)", content: [
          { type: 'heading', text: "The Non-Cooperation Movement (1920-22):" },
          { type: 'list', items: [
              "Led by Mahatma Gandhi, this was the first major mass movement.",
              "It was launched in cooperation with the Khilafat Movement (a movement by Indian Muslims to protest against the British treatment of the Turkish Caliph). This strengthened Hindu-Muslim unity.",
              "<strong>The Goal:</strong> Gandhiji believed that British rule survived only because Indians cooperated with it. He asked people to stop all cooperation."
          ]},
          { type: 'heading', text: "Methods of Non-Cooperation:" },
           { type: 'list', items: [
              "Boycotting schools, colleges, courts, and government offices.",
              "Giving up titles and honours awarded by the British.",
              "Making large bonfires of foreign goods."
          ]},
          { type: 'paragraph', text: "<strong>Chauri Chaura Incident (1922):</strong> A protest turned violent in Chauri Chaura (Uttar Pradesh), and a mob burned down a police station, killing 22 policemen." },
          { type: 'paragraph', text: "<strong>Withdrawal of the Movement:</strong> Gandhiji, a firm believer in non-violence, was deeply shocked and immediately called off the movement. This decision was opposed by leaders like Jawaharlal Nehru and Subhash Chandra Bose." },
          { type: 'paragraph', text: "<strong>Swaraj Party:</strong> After the movement was withdrawn, leaders like Motilal Nehru and Chittranjan Das formed the Swaraj Party to fight the British from within the legislative councils." },
          { type: 'heading', text: "Simon Commission (1927):" },
          { type: 'list', items: [
              "The British government sent a commission to India headed by Sir John Simon to suggest further reforms.",
              "Indians were furious because the commission had no Indian members.",
              "It was boycotted everywhere with protests and slogans of \"Simon Go Back.\"",
              "During one such protest, Lala Lajpat Rai was severely beaten in a police lathi-charge and died from his injuries."
          ]},
          { type: 'heading', text: "Lahore Session and Demand for Purna Swaraj (1929):" },
          { type: 'list', items: [
              "At the Congress session in Lahore, with Jawaharlal Nehru as the President, a historic resolution was passed.",
              "The goal of the freedom struggle was now declared as Purna Swaraj (Complete Independence).",
              "It was decided that January 26, 1930, would be celebrated as the First Independence Day."
          ]},
          { type: 'heading', text: "Civil Disobedience Movement (1930-34):" },
          { type: 'list', items: [
              "<strong>Dandi March (Salt Satyagraha):</strong> To protest the unfair British tax on salt, Gandhiji started his famous Dandi March on March 12, 1930. He walked from Sabarmati Ashram to the coastal village of Dandi with 78 followers and broke the salt law by making salt from seawater.",
              "<strong>Spread of the Movement:</strong> This act of breaking the law marked the beginning of the Civil Disobedience Movement. All over the country, people broke the salt law, boycotted foreign goods, and refused to pay taxes.",
              "<strong>Frontier Gandhi:</strong> In the North-West Frontier Province, the movement was led by Abdul Ghaffar Khan, who was popularly known as \"Frontier Gandhi.\"",
              "<strong>Round Table Conferences:</strong> The British held conferences in London in 1930 and 1931 to discuss reforms, but they failed to meet Indian demands, and the movement was eventually withdrawn in 1934."
          ]}
      ]},
      { id: '9', title: "Revolutionary Movements", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "While Gandhiji's movements were non-violent, some groups believed that freedom could only be won through armed struggle." },
                    { type: 'list', items: [
                        "<strong>Kakori Conspiracy Case:</strong> Members of the Hindustan Socialist Republican Association, including Ramprasad Bismil and Chandrashekhar Azad, looted a government train at Kakori.",
                        "<strong>Bhagat Singh and his Comrades:</strong> In 1928, Bhagat Singh, Chandrashekhar Azad, and Rajguru assassinated the British police officer Saunders to avenge the death of Lala Lajpat Rai. Bhagat Singh and Batukeshwar Dutt threw a harmless bomb in the Central Legislative Assembly to \"make the deaf hear.\" Bhagat Singh, Sukhdev, and Rajguru were hanged in 1931.",
                        "Other revolutionary groups included the Gadar Party and India House."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/4_m3yg06.jpg', alt: 'Bhagat Singh, a powerful symbol of revolutionary nationalism.' }] }
            ]
          }
      ]},
      { id: '10', title: "The Final Phase Towards Independence", content: [
          { type: 'heading', text: "Government of India Act, 1935:" },
          { type: 'list', items: [
              "This Act was the last major legislation passed by the British for India.",
              "It granted a large measure of autonomy (power to self-govern) to the provinces and ended the system of Dyarchy. It also established a Federal Court."
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'heading', text: "Subhash Chandra Bose and the INA:" },
                    { type: 'list', items: [
                        "Subhash Chandra Bose was a prominent leader who disagreed with Gandhiji's methods. He believed in taking help from Britain's enemies (like Germany and Japan) to win freedom.",
                        "He gave the famous slogan, \"You give me blood and I will give you freedom.\"",
                        "He escaped from India and took charge of the Indian National Army (INA), which had been initially organized by Mohan Singh. He re-organised it to fight the British."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/5_obzoqv.jpg', alt: 'Subhash Chandra Bose with the INA.' }] }
            ]
          },
          { type: 'heading', text: "Quit India Movement (1942):" },
          { type: 'list', items: [
              "After the failure of the Cripps Mission (another British attempt at negotiation), Gandhiji launched his final major movement.",
              "On August 8, 1942, the Congress passed the Quit India resolution, demanding that the British leave India immediately.",
              "Gandhiji gave the mantra of \"Do or Die.\"",
              "The British responded with extreme force, arresting all major leaders and brutally suppressing the movement."
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'heading', text: "Towards Independence and Partition:" },
                    { type: 'list', items: [
                        "After World War II ended in 1945, the Labour Party, which was more sympathetic to India's demands, came to power in Britain.",
                        "The Cabinet Mission was sent to India in 1946 to plan the transfer of power. It proposed an Interim Government and a Constituent Assembly to write India's constitution.",
                        "However, the Muslim League, led by Muhammad Ali Jinnah, refused to participate and insisted on the creation of a separate state, Pakistan.",
                        "Faced with widespread communal riots and violence, Congress leaders, including Gandhiji, had no choice but to accept the partition of the country.",
                        "Lord Mountbatten, the last Viceroy, presented the plan for partition, and on August 15, 1947, India became independent, but as two separate nations: India and Pakistan."
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
      { id: '1', title: "The Beginning of the Nationalist Movement", content: [
          { type: 'paragraph', text: "<strong>Background:</strong> 1857 ke Revolt ke baad, 1858 mein East India Company ka rule khatam ho gaya. India direct British government (British Crown) ke control mein aa gaya. Lekin, Indians ke paas abhi bhi apni country ko govern karne mein koi power ya aawaz nahi thi." },
          { type: 'paragraph', text: "<strong>Growing Resentment:</strong> Is power ki kami aur lagatar British exploitation ke kaaran Indian logon mein bahut gussa tha. Isi feeling se Indian National Movement ka janam hua, jo azaadi ke liye ek lambi ladai thi." },
          { type: 'paragraph', text: "<strong>Early Political Groups:</strong> Apni problems batane ke liye, bahut se Indians ne chhote political groups banaye. Inmein se ek important group tha Indian Association, jise Surendranath Banerjee ne 1876 mein shuru kiya tha." }
      ]},
      { id: '2', title: "Formation of the Indian National Congress (INC)", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'list', items: [
                        "<strong>Establishment:</strong> Indian National Congress (INC) December 1885 mein bani.",
                        "<strong>Founder:</strong> Ise ek retired British official, A. O. Hume ne shuru kiya tha.",
                        "<strong>First Meeting:</strong> Pehli meeting Bombay mein hui jismein desh ke alag-alag hisson se 72 padhe-likhe Indian delegates shaamil hue.",
                        "<strong>First President:</strong> Is pehli meeting ke president W. C. Bonnerjee the."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/1_q9rfla.jpg', alt: 'First session of the Indian National Congress in Bombay, 1885.' }] }
            ]
          },
          { type: 'heading', text: "The Early Phase (1885-1905): The Moderates" },
          { type: 'paragraph', text: "Apne shuruaati saalon mein, INC ko jin leaders ne lead kiya, unhe Moderates kaha jaata hai." },
          { type: 'list', items: [
              "<strong>Prominent Moderate Leaders:</strong> Dadabhai Naoroji, Gopal Krishna Gokhale, Surendra Nath Banerjee, Pheroz Shah Mehta, aur Badruddin Tyabji.",
              "<strong>Their Methods:</strong> Moderates dheere-dheere reform mein vishwas rakhte the aur British government se changes maangne ke liye petitions aur prayers jaise tareeke use karte the. Woh aggressive protests mein believe nahi karte the. Is policy ko kabhi-kabhi 'Political Begging' bhi kaha jaata tha."
          ]},
          { type: 'heading', text: "Main Demands of the Moderates:" },
          { type: 'list', items: [
              "Aise representative institutions ho (jahan Indians elect ho sakein) jo logon ke bhale ke liye kaam karein.",
              "Sabhi provinces mein Provincial Legislative Councils banayi jaayein.",
              "High-ranking government jobs ke liye aur Indians ko bharti kiya jaaye.",
              "Civil Services Examination India mein bhi ho (sirf Britain mein nahi), taaki Indians ke liye participate karna aasan ho.",
              "Indian industries aur handicrafts ko grow karne mein help ki jaaye.",
              "India se Britain ki taraf ho rahe wealth drain ko roka jaaye."
          ]}
      ]},
      { id: '3', title: "The Rise of the Radicals (Extremists)", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "Congress mein ek younger group of leaders ko laga ki Moderates ke tareeke bahut slow aur be-asar hain. Unhe Radicals ya Extremists ke naam se jaana gaya." },
                    { type: 'list', items: [
                        "<strong>Reasons for their Rise:</strong> Woh British government ke aakaal (famines) aur plagues ke time laparwah attitude se gussa the, jismein hazaron Indians ki maut hui. Woh Japan, Russia, aur Ethiopia jaise deshon ke nationalist movements se bhi inspire the.",
                        "<strong>Prominent Radical Leaders:</strong> Sabse famous Radical leaders the Lala Lajpat Rai, Bal Gangadhar Tilak, aur Bipin Chandra Pal, jinhe ek saath 'Lal, Bal, Pal' kaha jaata hai. Ek aur important leader the Aurobindo Ghosh.",
                        "<strong>Their Methods:</strong> Radicals protests, strikes (hartals), aur slogans jaise strong actions mein believe karte the taaki British par pressure banaya ja sake. Woh Indian culture aur Hinduism mein pride build karna chahte the."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223775/2_t1kz8c.jpg', alt: 'Bal Gangadhar Tilak, a leading radical voice of the freedom struggle.' }] }
            ]
          }
      ]},
      { id: '4', title: "Partition of Bengal and the Swadeshi Movement", content: [
          { type: 'paragraph', text: "<strong>The Partition (1905):</strong> 1905 mein, British Viceroy, Lord Curzon ne Bengal province ko do hisson mein baantne ka order diya: Eastern Bengal aur Bengal." },
          { type: 'list', items: [
              "<strong>Official Reason Given:</strong> British ne kaha ki Bengal itna bada hai ki use aasaani se manage nahi kiya ja sakta.",
              "<strong>The Real Reason:</strong> Asli maqsad 'divide and rule' tha. Bengal nationalist movement ka center tha, aur British Hindu-Muslim ko baant kar movement ko kamzor karna chahte the."
          ]},
          { type: 'paragraph', text: "<strong>The Reaction:</strong> Partition ke khilaf poore Bengal mein zabardast protests hue. Partition ke din ko 'Day of Mourning' (shok diwas) ke roop mein manaya gaya." },
          { type: 'heading', text: "The Swadeshi Movement:" },
          { type: 'list', items: [
              "Partition ke against protests Swadeshi Movement mein badal gaye.",
              "<strong>Swadeshi</strong> ka matlab hai 'apne desh ka.' Logon ko Indian-made goods use karne ke liye encourage kiya gaya.",
              "<strong>Boycott:</strong> Logon ne British goods ko boycott karne (kharidne ya use karne se mana) ka faisla kiya. Unhone videshi kapdon ki holi jalayi aur videshi saaman bechne wali dukaano par dharne diye.",
              "<strong>Famous Slogan:</strong> Bal Gangadhar Tilak ne famous slogan diya, \"Swaraj is my birth right and I shall have it!\" (Swaraj ka matlab hai self-rule).",
              "Students, women, aur har tarah ke log in movements mein shaamil hue."
          ]},
          { type: 'paragraph', text: "<strong>Surat Split (1907):</strong> Moderates aur Radicals ke methods mein differences ke kaaran 1907 mein Surat session mein Congress mein split ho gaya. Party do groups mein bant gayi." }
      ]},
      { id: '5', title: "Formation of the Muslim League (1906)", content: [
          { type: 'list', items: [
              "<strong>British Policy of \"Divide and Rule\":</strong> National movement ko aur kamzor karne ke liye, British ne Muslims ko apni alag political organization banane ke liye encourage kiya.",
              "<strong>Establishment:</strong> Muslim League 1906 mein bani.",
              "<strong>Founders:</strong> Iske main founders Aga Khan aur Dhaka ke Nawab Salimulla the."
          ]}
      ]},
      { id: '6', title: "Morley-Minto Reforms (1909)", content: [
          { type: 'list', items: [
              "<strong>Purpose:</strong> British government ne yeh reforms Congress ke Moderates ko khush karne ke liye announce kiye.",
              "<strong>Key Feature:</strong> In reforms ne Indians ko Swaraj (self-rule) nahi diya. Balki, isne Muslims ke liye separate electorates ka concept introduce kiya. Iska matlab tha ki Muslim candidates ke liye sirf Muslim hi vote kar sakte the, jisne logon ko religion ke base par aur divide kar diya."
          ]}
      ]},
      { id: '7', title: "Major Events from 1916 to 1919", content: [
          { type: 'heading', text: "Home Rule League (1916):" },
          { type: 'list', items: [
              "Yeh league Mrs. Annie Besant (ek Irish lady) aur Bal Gangadhar Tilak ne shuru ki thi.",
              "Iska main goal British Empire ke under India ke liye self-government haasil karna tha."
          ]},
          { type: 'heading', text: "Lucknow Pact (1916):" },
          { type: 'list', items: [
              "Yeh ek bahut important agreement tha. Surat Split ke baad Moderates aur Radicals phir se ek ho gaye.",
              "Congress aur Muslim League ne bhi ek pact sign kiya, jismein unhone milkar British se self-rule maangne par agree kiya."
          ]},
          { type: 'heading', text: "Arrival of Mahatma Gandhi:" },
          { type: 'list', items: [
              "Mohandas Karamchand Gandhi World War I ke baad South Africa se India wapas aaye.",
              "Unhone non-violent struggle ka ek naya method introduce kiya jise Satyagraha (matlab 'sach ke liye aagrah') kehte hain. Yeh ahimsa (non-violence) aur sach ke principles par based tha.",
              "Unka India mein pehla bada movement Champaran, Bihar (1917) mein tha, jahan unhone un kisano ki help ki jinhe British zabardasti indigo (neel) ugane ke liye force kar rahe the."
          ]},
          { type: 'heading', text: "Montague-Chelmsford Reforms (Government of India Act of 1919):" },
          { type: 'list', items: [
              "Yeh reforms bekaar maane gaye aur isne Indians ko disappoint kiya.",
              "Unhone provinces mein Dyarchy, yaani dual system of government, introduce kiya.",
              "Finance aur police jaise important departments British control mein rahe, jabki education aur health jaise kam important departments Indian ministers ko diye gaye jinke paas koi real power nahi thi."
          ]},
          { type: 'heading', text: "Rowlatt Act (1919):" },
          { type: 'list', items: [
              "Yeh protests ko dabane ke liye British dwara pass kiya gaya ek kathor kanoon tha.",
              "Yeh police ko kisi ko bhi bina warrant ke arrest karne aur bina trial ke jail mein daalne ki power deta tha.",
              "Ise 'Black Law' kaha gaya kyunki yeh basic human rights ke khilaf tha ('No Appeal, No Dalil, No Vakil'). Iske kaaran poore India mein zabardast protests hue."
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'heading', text: "Jallianwala Bagh Massacre (April 13, 1919):" },
                    { type: 'list', items: [
                        "Baisakhi ke festival par, Amritsar ke Jallianwala Bagh mein ek badi, shaant bheed do leaders, Dr. Satya Pal aur Dr. Saifuddin Kitchlew, ke arrest ko protest karne ke liye ikattha hui thi.",
                        "British officer, General Dyer ne aane-jaane ka ek hi raasta block kar diya aur apne soldiers ko nihatthi bheed par fire karne ka order diya.",
                        "Saikdon begunah mard, auratein, aur bachche maare gaye.",
                        "Is brutal massacre ne poore desh ko hila kar rakh diya, aur Punjab mein martial law laga diya gaya."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/3_bvzlh5.jpg', alt: 'The Jallianwala Bagh massacre, where hundreds were killed under General Dyer\'s orders.' }] }
            ]
          }
      ]},
       { id: '8', title: "The Era of Mass Movements (1920-1934)", content: [
          { type: 'heading', text: "The Non-Cooperation Movement (1920-22):" },
          { type: 'list', items: [
              "Mahatma Gandhi dwara lead kiya gaya, yeh pehla bada mass movement tha.",
              "Ise Khilafat Movement (Indian Muslims ka Turkish Caliph ke saath British ke bartaav ke khilaf ek movement) ke saath milkar launch kiya gaya tha. Isse Hindu-Muslim unity aur mazboot hui.",
              "<strong>The Goal:</strong> Gandhiji ka manna tha ki British rule isliye chal raha hai kyunki Indians unke saath cooperate karte hain. Unhone logon se har tarah ka cooperation band karne ko kaha."
          ]},
          { type: 'heading', text: "Methods of Non-Cooperation:" },
           { type: 'list', items: [
              "Schools, colleges, courts, aur government offices ko boycott karna.",
              "British dwara diye gaye titles aur honours ko wapas karna.",
              "Videshi saaman ki holi jalana."
          ]},
          { type: 'paragraph', text: "<strong>Chauri Chaura Incident (1922):</strong> Chauri Chaura (Uttar Pradesh) mein ek protest hinsa mein badal gaya, aur gusse mein bheed ne ek police station ko jala diya, jismein 22 policemen maare gaye." },
          { type: 'paragraph', text: "<strong>Withdrawal of the Movement:</strong> Gandhiji, jo non-violence mein pakka vishwas rakhte the, is ghatna se bahut dukhi hue aur unhone turant movement ko wapas le liya. Is decision ko Jawaharlal Nehru aur Subhash Chandra Bose jaise leaders ne oppose kiya." },
          { type: 'paragraph', text: "<strong>Swaraj Party:</strong> Movement wapas lene ke baad, Motilal Nehru aur Chittranjan Das jaise leaders ne Swaraj Party banayi taaki woh legislative councils ke andar se British se lad sakein." },
          { type: 'heading', text: "Simon Commission (1927):" },
          { type: 'list', items: [
              "British government ne aur reforms suggest karne ke liye Sir John Simon ki leadership mein ek commission India bheja.",
              "Indians is baat se bahut gussa the ki commission mein ek bhi Indian member nahi tha.",
              "Ise har jagah 'Simon Go Back' ke naaron ke saath boycott kiya gaya.",
              "Aise hi ek protest ke dauran, police lathi-charge mein Lala Lajpat Rai buri tarah ghayal ho gaye aur unki maut ho gayi."
          ]},
          { type: 'heading', text: "Lahore Session and Demand for Purna Swaraj (1929):" },
          { type: 'list', items: [
              "Lahore mein hue Congress session mein, jiske President Jawaharlal Nehru the, ek historical resolution pass kiya gaya.",
              "Freedom struggle ka goal ab Purna Swaraj (Complete Independence) ghoshit kar diya gaya.",
              "Yeh decide kiya gaya ki 26 January, 1930 ko First Independence Day ke roop mein manaya jayega."
          ]},
          { type: 'heading', text: "Civil Disobedience Movement (1930-34):" },
          { type: 'list', items: [
              "<strong>Dandi March (Salt Satyagraha):</strong> Namak par lagaye gaye unfair British tax ko protest karne ke liye, Gandhiji ne 12 March, 1930 ko apni famous Dandi March shuru ki. Woh Sabarmati Ashram se Dandi gaon tak 78 followers ke saath paidal chale aur samudra ke paani se namak banakar salt law toda.",
              "<strong>Spread of the Movement:</strong> Is kanoon todne ki ghatna se Civil Disobedience Movement ki shuruat hui. Poore desh mein logon ne namak kanoon toda, videshi saaman boycott kiya, aur tax dene se mana kar diya.",
              "<strong>Frontier Gandhi:</strong> North-West Frontier Province mein, is movement ko Abdul Ghaffar Khan ne lead kiya, jinhe 'Frontier Gandhi' ke naam se jaana jaata hai.",
              "<strong>Round Table Conferences:</strong> British ne reforms discuss karne ke liye 1930 aur 1931 mein London mein conferences rakhi, lekin woh Indian demands ko poora karne mein fail rahe, aur movement ko 1934 mein wapas le liya gaya."
          ]}
      ]},
      { id: '9', title: "Revolutionary Movements", content: [
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'paragraph', text: "Jab Gandhiji ke movements non-violent the, wahin kuch groups ka manna tha ki azaadi sirf hathiyar uthakar hi jeeti ja sakti hai." },
                    { type: 'list', items: [
                        "<strong>Kakori Conspiracy Case:</strong> Hindustan Socialist Republican Association ke members, jinmein Ramprasad Bismil aur Chandrashekhar Azad shaamil the, ne Kakori mein ek sarkari train ko loota.",
                        "<strong>Bhagat Singh and his Comrades:</strong> 1928 mein, Bhagat Singh, Chandrashekhar Azad, aur Rajguru ne Lala Lajpat Rai ki maut ka badla lene ke liye British police officer Saunders ko maar diya. Bhagat Singh aur Batukeshwar Dutt ne Central Legislative Assembly mein ek harmless bomb phenka taaki 'behron ko sunaya ja sake.' Bhagat Singh, Sukhdev, aur Rajguru ko 1931 mein phaansi de di gayi.",
                        "Doosre revolutionary groups mein Gadar Party aur India House shaamil the."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/4_m3yg06.jpg', alt: 'Bhagat Singh, a powerful symbol of revolutionary nationalism.' }] }
            ]
          }
      ]},
      { id: '10', title: "The Final Phase Towards Independence", content: [
          { type: 'heading', text: "Government of India Act, 1935:" },
          { type: 'list', items: [
              "Yeh Act British dwara India ke liye pass kiya gaya aakhiri bada legislation tha.",
              "Isne provinces ko kaafi had tak autonomy (self-govern ki power) di aur Dyarchy system ko khatam kar diya. Isne ek Federal Court bhi establish kiya."
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'heading', text: "Subhash Chandra Bose and the INA:" },
                    { type: 'list', items: [
                        "Subhash Chandra Bose ek bade neta the jo Gandhiji ke tareekon se agree nahi karte the. Unka manna tha ki azaadi jeetne ke liye Britain ke dushmanon (jaise Germany aur Japan) se help leni chahiye.",
                        "Unhone famous slogan diya, \"Tum mujhe khoon do, main tumhe azaadi dunga.\"",
                        "Woh India se bhaag gaye aur Indian National Army (INA) ki kamaan sambhali, jise shuru mein Mohan Singh ne organize kiya tha. Unhone ise British se ladne ke liye re-organise kiya."
                    ]}
                ]},
                { width: '40%', items: [{ type: 'image', src: 'https://res.cloudinary.com/dxwszplz7/image/upload/v1756223774/5_obzoqv.jpg', alt: 'Subhash Chandra Bose with the INA.' }] }
            ]
          },
          { type: 'heading', text: "Quit India Movement (1942):" },
          { type: 'list', items: [
              "Cripps Mission (British ki ek aur negotiation ki koshish) ke fail hone ke baad, Gandhiji ne apna aakhiri bada movement launch kiya.",
              "8 August, 1942 ko, Congress ne Quit India resolution pass kiya, jismein British se turant India chhodne ki maang ki gayi.",
              "Gandhiji ne 'Do or Die' (Karo ya Maro) ka mantra diya.",
              "British ne iska jawab extreme force se diya, sabhi bade leaders ko arrest kar liya aur movement ko buri tarah se daba diya."
          ]},
          {
            type: 'columns',
            content: [
                { width: '60%', items: [
                    { type: 'heading', text: "Towards Independence and Partition:" },
                    { type: 'list', items: [
                        "World War II ke 1945 mein khatam hone ke baad, Britain mein Labour Party power mein aayi, jo India ki demands ke prati thodi sympathetic thi.",
                        "Cabinet Mission ko 1946 mein India bheja gaya taaki power transfer plan kiya ja sake. Isne ek Interim Government aur India ka constitution likhne ke liye ek Constituent Assembly propose ki.",
                        "Lekin, Muhammad Ali Jinnah ke under Muslim League ne participate karne se mana kar diya aur ek alag state, Pakistan, banane par zor diya.",
                        "Bade paimane par ho rahe communal riots aur hinsa ko dekhte hue, Gandhiji sahit Congress leaders ke paas desh ke partition ko accept karne ke alawa koi option nahi bacha.",
                        "Aakhiri Viceroy, Lord Mountbatten ne partition ka plan pesh kiya, aur 15 August, 1947 ko India azaad ho gaya, lekin do alag deshon ke roop mein: India aur Pakistan."
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
