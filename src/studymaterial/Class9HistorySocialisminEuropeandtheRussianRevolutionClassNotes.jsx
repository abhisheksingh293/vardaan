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
    chapterTitle: "The French Revolution",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE History notes on the French Revolution. Covers the Old Regime, the Reign of Terror, Napoleon's rise, and the revolution's legacy.",
    sections: [
      { id: 'intro', title: "Introduction: The Importance of the French Revolution", content: [
          { type: 'paragraph', text: "The French Revolution was a pivotal event in the making of the modern world. It championed the ideas of <strong>liberty, freedom, and equality</strong>, which are often taken for granted today. The revolution marked the end of the monarchy in France and replaced a society based on privilege with a new system of governance. A key outcome was the <strong>Declaration of the Rights of Man</strong>, which introduced a new political language centered on the idea that all individuals have rights and can claim equality. These concepts became the central ideas of a new era and were reinterpreted by various movements worldwide, including anti-colonial movements in India, China, Africa, and South America." },
      ]},
      { id: '1', title: "1. French Society in the Late 18th Century (The Old Regime)", content: [
          { type: 'paragraph', text: "The term <strong>Old Regime</strong> describes the society and institutions of France before 1789." }
        ],
        subSections: [
          { id: '1.1', title: "a) The Three Estates", content: [
            { type: 'paragraph', text: "French society was rigidly divided into three estates:" },
            { type: 'list', items: [
              "<strong>First Estate:</strong> The <strong>Clergy</strong> (church officials). They enjoyed significant privileges by birth, most notably exemption from paying taxes to the state.",
              "<strong>Second Estate:</strong> The <strong>Nobility</strong>. They also enjoyed birth privileges, including exemption from taxes and feudal rights. They could extract feudal dues from peasants and force them to work in their homes and fields or serve in the army.",
              "<strong>Third Estate:</strong> <strong>Everyone else</strong>. This was a vast and diverse group that included:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Big businessmen, merchants, lawyers, and court officials.<br>&nbsp;&nbsp;&nbsp;&nbsp;• Peasants and artisans.<br>&nbsp;&nbsp;&nbsp;&nbsp;• Small peasants, landless laborers, and servants.<br>This estate alone bore the entire burden of financing the state through taxes."
            ]}
          ]},
          { id: '1.2', title: "b) Economic Troubles", content: [
            { type: 'paragraph', text: "When <strong>Louis XVI</strong> of the Bourbon family became king in 1774 at the age of 20, he found an empty treasury. The financial crisis was caused by several factors:" },
            { type: 'list', items: [
              "<strong>Costly Wars:</strong> Long years of war had drained France's financial resources. France had helped the thirteen American colonies gain independence from Britain, which added over a billion <strong>livres</strong> (the currency of France at the time) to its debt.",
              "<strong>Extravagant Spending:</strong> The immense palace of Versailles had a very high cost of maintenance.",
              "<strong>High Interest on Debt:</strong> Lenders began charging 10% interest on state loans, forcing the government to spend a large part of its budget on interest payments alone.",
              "<strong>Unfair Tax System:</strong> To meet expenses, the state was forced to increase taxes. However, only the Third Estate paid them. Key taxes included:<br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Taille:</strong> A direct tax paid to the state.<br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Tithes:</strong> A tax levied by the Church, usually one-tenth of the agricultural produce.<br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Indirect Taxes:</strong> Levied on everyday items like salt and tobacco."
            ]}
          ]}
        ]
      },
      { id: '2', title: "2. The Growing Crisis", subSections: [
          { id: '2.1', title: "a) The Struggle to Survive", content: [
            { type: 'list', items: [
              "<strong>Population Growth:</strong> The population of France grew from about 23 million in 1715 to 28 million in 1789.",
              "<strong>Food Shortages:</strong> This led to a rapid increase in the demand for food grains, but production couldn't keep pace.",
              "<strong>Rising Prices & Stagnant Wages:</strong> The price of bread, the staple food, rose quickly, but workers' wages did not. This widened the gap between the rich and the poor.",
              "<strong>Subsistence Crisis:</strong> The situation worsened during droughts or hail, leading to a <strong>subsistence crisis</strong>—an extreme situation where basic survival is endangered."
            ]}
          ]},
          { id: '2.2', title: "b) The Rise of the Middle Class", content: [
            { type: 'paragraph', text: "A prosperous and educated <strong>middle class</strong> emerged within the Third Estate during the 18th century. They earned wealth through overseas trade and manufacturing goods like silk and woollen textiles. This group also included professionals like lawyers and administrative officials." },
            { type: 'paragraph', text: "This class believed that a person's social position should depend on <strong>merit</strong>, not on birthright. They were inspired by the ideas of Enlightenment philosophers:" },
            { type: 'list', items: [
              "<strong>John Locke:</strong> In his <strong>Two Treatises of Government</strong>, he argued against the doctrine of the divine and absolute right of the monarch.",
              "<strong>Jean Jacques Rousseau:</strong> In <strong>The Social Contract</strong>, he proposed a government based on a social contract between people and their representatives.",
              "<strong>Montesquieu:</strong> In <strong>The Spirit of the Laws</strong>, he proposed a division of power into the <strong>legislative, executive, and judiciary</strong>. This model influenced the government of the USA.",
              "These ideas spread rapidly through salons, coffee shops, books, and newspapers, and were often read aloud for those who were illiterate."
            ]}
          ]}
        ]
      },
      { id: '3', title: "3. The Outbreak of the Revolution", subSections: [
          { id: '3.1', title: "a) The Estates General", content: [
            { type: 'paragraph', text: "To raise new taxes, Louis XVI had to call a meeting of the <strong>Estates General</strong>, a political body where the three estates sent their representatives." },
            { type: 'paragraph', text: "On <strong>May 5, 1789</strong>, Louis XVI convened the assembly. The First and Second Estates sent 300 representatives each, while the Third Estate sent 600." },
            { type: 'paragraph', text: "The traditional voting system was <strong>one estate, one vote</strong>. The Third Estate demanded that voting be conducted by the assembly as a whole, with <strong>each member having one vote</strong>." },
            { type: 'paragraph', text: "When the king rejected this proposal, the members of the Third Estate walked out in protest." },
          ]},
          { id: '3.2', title: "b) The Tennis Court Oath and the Bastille", content: [
            { type: 'list', items: [
              "On <strong>June 20, 1789</strong>, the representatives of the Third Estate gathered in an indoor tennis court in Versailles. They declared themselves a <strong>National Assembly</strong> and swore not to disperse until they had drafted a constitution for France to limit the monarch's powers. They were led by <strong>Mirabeau</strong> and <strong>Abbé Sieyès</strong>.",
              "On the morning of <strong>July 14, 1789</strong>, the city of Paris was in a state of alarm after the king ordered troops to move into the city.",
              "A crowd stormed the fortress-prison, the <strong>Bastille</strong>, hoping to find ammunition. The commander was killed, and the prisoners were released. The Bastille was hated because it symbolized the king's despotic power, and it was demolished.",
              "Following this, peasants in the countryside revolted in what is known as the <strong>Great Fear</strong>. They attacked chateaux (castles), looted grain, and burned records of manorial dues.",
              "Faced with revolt, Louis XVI finally recognized the National Assembly. On the night of <strong>August 4, 1789</strong>, the Assembly passed a decree abolishing the feudal system, privileges, and tithes."
            ]}
          ]}
        ]
      },
      { id: '4', title: "4. France as a Constitutional Monarchy (1791-1792)", subSections: [
          { id: '4.1', title: "a) The Constitution of 1791", content: [
            { type: 'paragraph', text: "The National Assembly completed the constitution in 1791, making France a <strong>constitutional monarchy</strong>. Its main goal was to limit the monarch's powers and separate them among the legislature, executive, and judiciary." },
            { type: 'paragraph', text: "<strong>Voting Rights:</strong> Citizens were divided into two categories:" },
            { type: 'list', items: [
              "<strong>Active Citizens:</strong> Men over 25 who paid taxes equal to at least 3 days of a laborer's wage. Only they could vote. About 4 million out of a population of 28 million qualified.",
              "<strong>Passive Citizens:</strong> The remaining men and all women had no voting rights.",
              "The National Assembly was indirectly elected; citizens voted for electors, who then chose the Assembly members."
            ]}
          ]},
          { id: '4.2', title: "b) The Declaration of the Rights of Man and Citizen", content: [
            { type: 'paragraph', text: "The Constitution began with this declaration." },
            { type: 'list', items: [
              "It established rights such as the <strong>right to life, freedom of speech, freedom of opinion, and equality before the law</strong> as \"natural and inalienable\" rights.",
              "It stated that sovereignty resides in the nation and that the law is the expression of the general will."
            ]}
          ]}
        ]
      },
       { id: '5', title: "5. The Republic and the Reign of Terror", subSections: [
          { id: '5.1', title: "a) The End of the Monarchy", content: [
            { type: 'list', items: [
                "Although Louis XVI signed the constitution, he secretly negotiated with the King of Prussia. In April 1792, the National Assembly declared war on Prussia and Austria.",
                "Political clubs became important, with the <strong>Jacobins</strong> being the most successful. Its members were mainly from less prosperous sections of society, like shopkeepers, artisans, and daily-wage workers. Their leader was <strong>Maximilien Robespierre</strong>.",
                "Jacobins became known as the <strong>sans-culottes</strong> ('those without knee breeches'), wearing long striped trousers to set themselves apart from the nobles who wore knee breeches. They also wore the red cap symbolizing liberty.",
                "On <strong>August 10, 1792</strong>, the Jacobins stormed the Palace of the Tuileries and imprisoned the royal family.",
                "A new assembly, the <strong>Convention</strong>, was elected. All men 21 years and above, regardless of wealth, got the right to vote.",
                "On <strong>September 21, 1792</strong>, the Convention abolished the monarchy and declared France a <strong>republic</strong>.",
                "Louis XVI was executed on <strong>January 21, 1793</strong>, on the charge of treason, followed by Queen Marie Antoinette."
            ]}
          ]},
          { id: '5.2', title: "b) The Reign of Terror (1793-1794)", content: [
             { type: 'paragraph', text: "This period was led by <strong>Robespierre</strong>, who followed a policy of severe control and punishment." },
             { type: 'list', items: [
                "\"Enemies\" of the republic (ex-nobles, clergy, political opponents) were arrested, tried, and if found guilty, executed by the <strong>guillotine</strong>.",
                "<strong>Strict Measures:</strong>",
                "&nbsp;&nbsp;&nbsp;&nbsp;• A maximum ceiling was placed on wages and prices.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Meat and bread were rationed.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Peasants were forced to sell grain at prices fixed by the government.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• All citizens had to eat the \"equality bread\" (<em>pain d'égalité</em>), a loaf made of wholewheat.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• The traditional titles <strong>Monsieur</strong> (Sir) and <strong>Madame</strong> (Madam) were replaced with <strong>Citoyen</strong> and <strong>Citoyenne</strong> (Citizen).",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Churches were shut down.",
                "Robespierre's relentless policies led to his own conviction and execution by guillotine in <strong>July 1794</strong>."
             ]}
          ]}
        ]
      },
      { id: '6', title: "6. A Directory Rules France", content: [
          { type: 'list', items: [
            "After the fall of the Jacobins, the wealthier middle classes seized power.",
            "A new constitution was introduced that denied the vote to non-propertied citizens.",
            "It established two elected legislative councils that appointed an executive body called the <strong>Directory</strong>, made up of five members.",
            "However, political instability caused by clashes between the Directors and the councils paved the way for the rise of a military dictator, <strong>Napoleon Bonaparte</strong>."
          ]}
      ]},
      { id: '7', title: "7. The Role of Women in the Revolution", content: [
          { type: 'list', items: [
            "Women were active participants from the beginning, hoping to improve their lives. Most women of the Third Estate worked for a living and had no access to education.",
            "They started their own political clubs and newspapers to voice their interests. The <strong>Society of Revolutionary and Republican Women</strong> was the most famous.",
            "Their main demands included the right to vote, to be elected to the Assembly, and to hold political office. They were disappointed to be classed as \"passive citizens\" by the 1791 Constitution.",
            "Some improvements were made: schooling was made compulsory for girls, divorce was legalized, and women could train for jobs.",
            "During the Reign of Terror, women's clubs were closed and their political activities were banned.",
            "A key figure was <strong>Olympe de Gouges</strong>, who wrote the <strong>Declaration of the Rights of Woman and Citizen</strong> in 1791 but was later executed.",
            "Women in France finally won the right to vote in <strong>1946</strong>."
          ]}
      ]},
      { id: '8', title: "8. The Abolition of Slavery", content: [
          { type: 'list', items: [
            "The French colonies in the Caribbean (Martinique, Guadeloupe, San Domingo) were major suppliers of tobacco, indigo, sugar, and coffee.",
            "The plantation economy relied on the <strong>triangular slave trade</strong> between Europe, Africa, and the Americas.",
            "The Convention voted to free all slaves in French colonies in <strong>1794</strong>.",
            "However, <strong>Napoleon reintroduced slavery</strong> ten years later.",
            "Slavery was finally abolished in all French colonies in <strong>1848</strong>."
          ]}
      ]},
      { id: '9', title: "9. Political Symbols of the Revolution", content: [
          { type: 'paragraph', text: "Images and symbols were frequently used to communicate ideas to a population that was largely illiterate." },
          { type: 'list', items: [
            "<strong>The Broken Chain:</strong> Symbolized the act of becoming free from slavery.",
            "<strong>The Bundle of Rods (Fasces):</strong> Represented unity and strength, as a single rod is easily broken, but a bundle is not.",
            "<strong>The Eye within a Triangle Radiating Light:</strong> The all-seeing eye stood for knowledge, and the sun's rays were meant to drive away the clouds of ignorance.",
            "<strong>Sceptre:</strong> A symbol of royal power.",
            "<strong>Snake Biting its Tail:</strong> A ring with no beginning or end, symbolizing eternity.",
            "<strong>Red Phrygian Cap:</strong> A cap worn by a slave upon becoming free.",
            "<strong>Blue-White-Red:</strong> The national colors of France.",
            "<strong>The Winged Woman:</strong> A personification of the law.",
            "<strong>The Law Tablet:</strong> Showed that the law is the same for all and all are equal before it."
          ]}
      ]},
      { id: '10', title: "10. Conclusion: Napoleon and the Revolution's Legacy", subSections: [
          { id: '10.1', title: "a) The Rise of Napoleon", content: [
            { type: 'list', items: [
              "In <strong>1804</strong>, Napoleon Bonaparte crowned himself Emperor of France.",
              "He saw himself as a modernizer of Europe, introducing laws protecting private property and a uniform system of weights and measures (the decimal system).",
              "Initially seen as a liberator, his armies were later viewed as an invading force.",
              "He was finally defeated at <strong>Waterloo in 1815</strong>."
            ]}
          ]},
          { id: '10.2', title: "b) Legacy of the French Revolution", content: [
            { type: 'list', items: [
              "The most important legacy was the ideals of <strong>liberty and democratic rights</strong>.",
              "These ideas spread from France to the rest of Europe in the 19th century, leading to the abolition of feudal systems.",
              "It inspired colonized peoples to rework the idea of freedom into movements for creating sovereign nation-states.",
              "Individuals like <strong>Tipu Sultan</strong> and <strong>Raja Rammohan Roy</strong> in India were inspired by the ideas coming from revolutionary France."
            ]}
          ]}
        ]
      }
    ]
  },
  hi: { // Hinglish Version
    chapterTitle: "The French Revolution",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE History ke liye French Revolution par notes. Old Regime, Reign of Terror, Napoleon, aur important concepts simple Hinglish mein.",
    sections: [
      { id: 'intro', title: "Introduction: The Importance of the French Revolution", content: [
          { type: 'paragraph', text: "French Revolution modern world ke banane mein ek bahut important event tha. Isne <strong>liberty, freedom, aur equality</strong> jaise ideas ko aage badhaya, jinhe aaj hum for granted lete hain. Is revolution ne France mein monarchy khatam kar di aur privilege par based society ki jagah ek naya governance ka system laya. Ek bada result tha <strong>Declaration of the Rights of Man</strong>, jisne ek nayi political language shuru ki is idea par ki sabhi logo ke paas rights hain aur woh equality claim kar sakte hain. Yeh concepts ek naye yug ke central ideas ban gaye aur duniya bhar ke alag-alag movements ne inko apne tarike se interpret kiya, jaise India, China, Africa, aur South America ke anti-colonial movements ne." },
      ]},
      { id: '1', title: "1. French Society in the Late 18th Century (The Old Regime)", content: [
          { type: 'paragraph', text: "<strong>Old Regime</strong> term 1789 se pehle France ki society aur institutions ko describe karne ke liye use hota hai." }
        ],
        subSections: [
          { id: '1.1', title: "a) The Three Estates", content: [
            { type: 'paragraph', text: "French society ko sakhti se teen estates mein baata gaya tha:" },
            { type: 'list', items: [
              "<strong>First Estate:</strong> Yeh <strong>Clergy</strong> (church ke log) the. Inko paidaishi special rights mile the, sabse important tha state ko tax na dena.",
              "<strong>Second Estate:</strong> Yeh <strong>Nobility</strong> (ameer log) the. Inko bhi paidaishi special rights mile the, jaise tax se chhoot aur feudal rights. Yeh kisaano se feudal tax lete the aur unse apne gharon aur kheton mein kaam karne ya army mein serve karne ke liye force kar sakte the.",
              "<strong>Third Estate:</strong> <strong>Baaki sabhi log</strong>. Yeh ek bahut bada aur diverse group tha jismein shamil the:<br>&nbsp;&nbsp;&nbsp;&nbsp;• Bade businessmen, saudagar, vakeel, aur court ke officials.<br>&nbsp;&nbsp;&nbsp;&nbsp;• Kisaan aur karigar.<br>&nbsp;&nbsp;&nbsp;&nbsp;• Chhote kisaan, jinke paas zameen nahi thi, aur naukar.<br>Sirf yahi estate state ke kharcho ka poora bojh tax dekar uthata tha."
            ]}
          ]},
          { id: '1.2', title: "b) Economic Troubles", content: [
            { type: 'paragraph', text: "Jab <strong>Louis XVI</strong> (Bourbon family ka) 1774 mein 20 saal ki umar mein raja bana, toh usse khazana khaali mila. Is financial crisis ke kai kaaran the:" },
            { type: 'list', items: [
              "<strong>Mehengi Ladaaiyan:</strong> Lambe saalon tak chali ladaaiyon ne France ke financial resources khatam kar diye the. France ne 13 American colonies ko Britain se azaadi dilane mein help ki thi, jisse us par ek billion <strong>livres</strong> (us time ki French currency) se zyada ka karz chadh gaya tha.",
              "<strong>Fizoolkharchi:</strong> Versailles ke vishal mehel ko maintain karne ka kharcha bahut zyada tha.",
              "<strong>Karz par Uncha Byaaj:</strong> Jo log state ko karz dete the, woh 10% byaaj lene lage, jisse government ko apne budget ka ek bada hissa sirf byaaj chukane mein kharch karna padta tha.",
              "<strong>Galat Tax System:</strong> Kharcho ko poora karne ke liye, state ko tax badhane pade. Lekin, sirf Third Estate hi tax deti thi. Kuch important taxes the:<br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Taille:</strong> Ek direct tax jo state ko diya jaata tha.<br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Tithes:</strong> Church dwara lagaya gaya tax, jo aam taur par kheti ki upaj ka dasvan hissa hota tha.<br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Indirect Taxes:</strong> Rozmarra ki cheezon jaise namak aur tambaku par lagaya jaata tha."
            ]}
          ]}
        ]
      },
      { id: '2', title: "2. The Growing Crisis", subSections: [
          { id: '2.1', title: "a) The Struggle to Survive", content: [
            { type: 'list', items: [
              "<strong>Population Growth:</strong> France ki population 1715 mein lagbhag 23 million se badhkar 1789 mein 28 million ho gayi.",
              "<strong>Khane ki Kami:</strong> Isse food grains ki demand tezi se badhi, lekin production us speed se nahi badh paaya.",
              "<strong>Badhti Keematein & Ruki hui Salary:</strong> Roti, jo staple food thi, ki keemat tezi se badhi, lekin mazdooron ki salary nahi badhi. Isse ameer aur gareeb ke beech ka fark badh gaya.",
              "<strong>Subsistence Crisis:</strong> Jab sookha padta ya ole girte toh haalat aur kharab ho jaate, jisse <strong>subsistence crisis</strong> aa jaata tha—ek aisi extreme situation jahan jeene ke basic saadhan bhi khatre mein pad jaate hain."
            ]}
          ]},
          { id: '2.2', title: "b) The Rise of the Middle Class", content: [
            { type: 'paragraph', text: "18th century mein Third Estate ke andar ek ameer aur padha-likha <strong>middle class</strong> ubhra. Unhone samudra paar vyapar aur silk aur woollen textiles jaise saaman banakar daulat kamayi. Is group mein vakeel aur administrative officials jaise professionals bhi the." },
            { type: 'paragraph', text: "Is class ka manna tha ki kisi bhi insaan ki social position uske <strong>merit</strong> par depend karni chahiye, na ki paidaishi hak par. Woh Enlightenment philosophers ke vicharon se inspire the:" },
            { type: 'list', items: [
              "<strong>John Locke:</strong> Apni kitab <strong>Two Treatises of Government</strong> mein, unhone raja ke divine aur absolute right ke siddhant ke khilaaf tark diya.",
              "<strong>Jean Jacques Rousseau:</strong> Apni kitab <strong>The Social Contract</strong> mein, unhone ek aisi government ka prastav rakha jo logo aur unke representatives ke beech ek social contract par based ho.",
              "<strong>Montesquieu:</strong> Apni kitab <strong>The Spirit of the Laws</strong> mein, unhone power ko <strong>legislative, executive, aur judiciary</strong> mein baantne ka prastav rakha. Is model ne USA ki government ko prabhavit kiya.",
              "Yeh ideas salons, coffee shops, kitabon, aur newspapers ke through tezi se phaile, aur jo log padh-likh nahi sakte the unke liye aksar zor se padhe jaate the."
            ]}
          ]}
        ]
      },
       { id: '3', title: "3. The Outbreak of the Revolution", subSections: [
          { id: '3.1', title: "a) The Estates General", content: [
            { type: 'paragraph', text: "Naye tax lagane ke liye, Louis XVI ko <strong>Estates General</strong> ki meeting bulani padi, jo ek political body thi jahan teeno estates apne representatives bhejte the." },
            { type: 'paragraph', text: "<strong>5 May, 1789</strong> ko, Louis XVI ne assembly bulayi. First aur Second Estates ne 300-300 representatives bheje, jabki Third Estate ne 600 bheje." },
            { type: 'paragraph', text: "Purana voting system tha <strong>ek estate, ek vote</strong>. Third Estate ne maang ki, ki voting poori assembly dwara ho, aur <strong>har member ka ek vote ho</strong>." },
            { type: 'paragraph', text: "Jab raja ne is proposal ko reject kar diya, toh Third Estate ke members virodh mein bahar chale gaye." },
          ]},
          { id: '3.2', title: "b) The Tennis Court Oath and the Bastille", content: [
            { type: 'list', items: [
              "<strong>20 June, 1789</strong> ko, Third Estate ke representatives Versailles ke ek indoor tennis court mein ikattha hue. Unhone khud ko <strong>National Assembly</strong> ghoshit kiya aur shapath li ki jab tak woh France ke liye ek samvidhan nahi bana lete jo raja ki shaktiyon ko seemit kare, tab tak woh nahi hatenge. Unke neta <strong>Mirabeau</strong> aur <strong>Abbé Sieyès</strong> the.",
              "<strong>14 July, 1789</strong> ki subah, Paris shehar mein darr ka mahaul tha kyunki raja ne shehar mein sena bhejne ka aadesh diya tha.",
              "Ek bheed ne qila-jail, <strong>Bastille</strong>, par hamla kar diya, is ummeed mein ki unhe hathiyar milenge. Commander maara gaya, aur qaidiyon ko riha kar diya gaya. Bastille se nafrat ki jaati thi kyunki woh raja ki tanashahi shakti ka prateek tha, aur use tod diya gaya.",
              "Iske baad, dehat mein kisaano ne vidroh kar diya jise <strong>Great Fear</strong> ke naam se jaana jaata hai. Unhone chateaux (kilo) par hamla kiya, anaaj loota, aur manor ke dues ke records jala diye.",
              "Vidroh ka saamna karte hue, Louis XVI ne aakhirkar National Assembly ko maanyata de di. <strong>4 August, 1789</strong> ki raat ko, Assembly ne ek aadesh paarit kiya jisse feudal system, visheshadhikar, aur tithes ko samapt kar diya gaya."
            ]}
          ]}
        ]
      },
       { id: '4', title: "4. France as a Constitutional Monarchy (1791-1792)", subSections: [
          { id: '4.1', title: "a) The Constitution of 1791", content: [
            { type: 'paragraph', text: "National Assembly ne 1791 mein samvidhan poora kiya, jisse France ek <strong>constitutional monarchy</strong> ban gaya. Iska mukhya uddeshya raja ki shaktiyon ko seemit karna aur unhe legislature, executive, aur judiciary ke beech baantna tha." },
            { type: 'paragraph', text: "<strong>Voting Rights:</strong> Nagrikon ko do categories mein baata gaya:" },
            { type: 'list', items: [
              "<strong>Active Citizens:</strong> 25 saal se upar ke purush jo kam se kam 3 din ki mazdoori ke barabar tax dete the. Sirf wahi vote de sakte the. 28 million ki population mein se lagbhag 4 million log qualify hue.",
              "<strong>Passive Citizens:</strong> Baaki bache purush aur sabhi mahilao ko voting ka adhikar nahi tha.",
              "National Assembly ko indirectly chuna jaata tha; nagrik electors ke liye vote karte the, jo phir Assembly ke members ko chunte the."
            ]}
          ]},
          { id: '4.2', title: "b) The Declaration of the Rights of Man and Citizen", content: [
            { type: 'paragraph', text: "Samvidhan is ghoshna se shuru hua." },
            { type: 'list', items: [
              "Isne <strong>jeevan ka adhikar, bolne ki azaadi, vichar ki azaadi, aur kanoon ke samaksh samanta</strong> jaise adhikaron ko \"prakritik aur anivarya\" adhikar ke roop mein sthapit kiya.",
              "Ismein kaha gaya ki samprabhuta rashtra mein nivas karti hai aur kanoon samanya ichha ki abhivyakti hai."
            ]}
          ]}
        ]
      },
       { id: '5', title: "5. The Republic and the Reign of Terror", subSections: [
          { id: '5.1', title: "a) The End of the Monarchy", content: [
            { type: 'list', items: [
                "Louis XVI ne samvidhan par sign toh kar diye, lekin usne chupke se Prussia ke raja ke saath sauda kiya. April 1792 mein, National Assembly ne Prussia aur Austria par yuddh ghoshit kar diya.",
                "Political clubs important ho gaye, jinmein <strong>Jacobins</strong> sabse safal the. Iske sadasya mukhya roop se samaj ke kam ameer vargon se the, jaise dukandar, karigar, aur dihadi mazdoor. Unke neta <strong>Maximilien Robespierre</strong> the.",
                "Jacobins ko <strong>sans-culottes</strong> ('bina ghutno wali pant ke') ke naam se jaana jaane laga, woh lambi dhari wali pant pehente the taaki woh ghutno wali pant pehenne wale ameer logon se alag dikhein. Woh azaadi ka prateek laal topi bhi pehente the.",
                "<strong>10 August, 1792</strong> ko, Jacobins ne Tuileries ke mehel par hamla kiya aur shahi parivar ko qaid kar liya.",
                "Ek nayi assembly, <strong>Convention</strong>, chuni gayi. 21 saal aur usse upar ke sabhi purushon ko, chahe woh ameer ho ya gareeb, vote dene ka adhikar mila.",
                "<strong>21 September, 1792</strong> ko, Convention ne raajshahi ko samapt kar diya aur France ko ek <strong>republic</strong> ghoshit kiya.",
                "Louis XVI ko <strong>21 January, 1793</strong> ko desh droh ke aarop mein faansi de di gayi, uske baad Rani Marie Antoinette ko bhi."
            ]}
          ]},
          { id: '5.2', title: "b) The Reign of Terror (1793-1794)", content: [
             { type: 'paragraph', text: "Yeh daur <strong>Robespierre</strong> dwara chalaya gaya, jisne kathor niyantran aur saza ki neeti apnayi." },
             { type: 'list', items: [
                "Republic ke \"dushmanon\" (poorv ameer, clergy, rajnitik virodhi) ko giraftar kiya gaya, un par mukadma chalaya gaya, aur agar doshi paaye gaye, toh <strong>guillotine</strong> se maar diya gaya.",
                "<strong>Kathor Kadam:</strong>",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Mazdoori aur keematon par ek maximum seema laga di gayi.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Maans aur roti ka ration kiya gaya.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Kisaano ko sarkar dwara tay keematon par anaaj bechne ke liye majboor kiya gaya.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Sabhi nagrikon ko \"samanta ki roti\" (<em>pain d'égalité</em>) khani padti thi, jo poore gehu se bani hoti thi.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Paramparik title <strong>Monsieur</strong> (Sir) aur <strong>Madame</strong> (Madam) ko <strong>Citoyen</strong> aur <strong>Citoyenne</strong> (Citizen) se badal diya gaya.",
                "&nbsp;&nbsp;&nbsp;&nbsp;• Churches band kar diye gaye.",
                "Robespierre ki nirantar neetiyon ke kaaran use khud doshi thehraya gaya aur <strong>July 1794</strong> mein guillotine se maar diya gaya."
             ]}
          ]}
        ]
      },
       { id: '6', title: "6. A Directory Rules France", content: [
          { type: 'list', items: [
            "Jacobins ke patan ke baad, ameer middle classes ne satta hathiya li.",
            "Ek naya samvidhan laya gaya jisne bina property wale nagrikon ko vote dene se mana kar diya.",
            "Isne do chune hue legislative councils banaye jo ek executive body ko niyukt karte the jise <strong>Directory</strong> kaha jaata tha, ismein paanch sadasya hote the.",
            "Lekin, Directors aur councils ke beech jhagdon ke kaaran hui rajnitik asthirta ne ek military dictator, <strong>Napoleon Bonaparte</strong>, ke uday ka raasta saaf kar diya."
          ]}
      ]},
       { id: '7', title: "7. The Role of Women in the Revolution", content: [
          { type: 'list', items: [
            "Mahilayein shuru se hi sakriya bhagidar theen, is ummeed mein ki unki zindagi behtar hogi. Third Estate ki zyada tar mahilayein rozi-roti ke liye kaam karti theen aur unhe shiksha ka koi adhikar nahi tha.",
            "Unhone apne hiton ko awaaz dene ke liye apne khud ke political clubs aur newspapers shuru kiye. <strong>Society of Revolutionary and Republican Women</strong> sabse mashhoor tha.",
            "Unki mukhya maangein theen vote dene ka adhikar, Assembly mein chune jaane ka adhikar, aur rajnitik pad sambhalne ka adhikar. Woh 1791 ke Samvidhan dwara \"passive citizens\" ke roop mein vargikrit kiye jaane se niraash theen.",
            "Kuch sudhar kiye gaye: ladkiyon ke liye schooling anivarya kar di gayi, talaak ko kanooni bana diya gaya, aur mahilayein naukriyon ke liye training le sakti theen.",
            "Reign of Terror ke dauran, mahilaon ke clubs band kar diye gaye aur unki rajnitik gatividhiyon par pratibandh laga diya gaya.",
            "Ek pramukh vyakti theen <strong>Olympe de Gouges</strong>, jinhone 1791 mein <strong>Declaration of the Rights of Woman and Citizen</strong> likha lekin baad mein unhe faansi de di gayi.",
            "France mein mahilaon ko aakhirkar <strong>1946</strong> mein vote dene ka adhikar mila."
          ]}
      ]},
       { id: '8', title: "8. The Abolition of Slavery", content: [
          { type: 'list', items: [
            "Caribbean mein French colonies (Martinique, Guadeloupe, San Domingo) tambaku, neel, cheeni, aur coffee ke pramukh suppliers the.",
            "Plantation economy Europe, Africa, aur Americas ke beech <strong>triangular slave trade</strong> par nirbhar thi.",
            "Convention ne <strong>1794</strong> mein French colonies mein sabhi ghulamon ko azaad karne ke liye vote diya.",
            "Lekin, <strong>Napoleon ne das saal baad ghulami phir se shuru kar di</strong>.",
            "Ghulami aakhirkar <strong>1848</strong> mein sabhi French colonies mein samapt kar di gayi."
          ]}
      ]},
       { id: '9', title: "9. Political Symbols of the Revolution", content: [
          { type: 'paragraph', text: "Images aur symbols ka aksar istemal un logo tak ideas pahuchane ke liye kiya jaata tha jo zyada tar anpadh the." },
          { type: 'list', items: [
            "<strong>The Broken Chain:</strong> Ghulami se azaad hone ke kaam ka prateek tha.",
            "<strong>The Bundle of Rods (Fasces):</strong> Ekta aur shakti ka pratinidhitv karta tha, kyunki ek akeli chhad aasani se toot jaati hai, lekin ek gaththa nahi.",
            "<strong>The Eye within a Triangle Radiating Light:</strong> Sab kuch dekhne wali aankh gyan ke liye thi, aur suraj ki kirnein agyanta ke baadalon ko door bhagane ke liye theen.",
            "<strong>Sceptre:</strong> Shahi shakti ka prateek.",
            "<strong>Snake Biting its Tail:</strong> Ek anghuthi jiska koi shuruat ya ant nahi, anant kal ka prateek.",
            "<strong>Red Phrygian Cap:</strong> Ek topi jo ek ghulam azaad hone par pehenta tha.",
            "<strong>Blue-White-Red:</strong> France ke rashtriya rang.",
            "<strong>The Winged Woman:</strong> Kanoon ka manvikaran.",
            "<strong>The Law Tablet:</strong> Dikhata tha ki kanoon sabke liye ek hai aur sabhi uske samne barabar hain."
          ]}
      ]},
       { id: '10', title: "10. Conclusion: Napoleon and the Revolution's Legacy", subSections: [
          { id: '10.1', title: "a) The Rise of Napoleon", content: [
            { type: 'list', items: [
              "<strong>1804</strong> mein, Napoleon Bonaparte ne khud ko France ka Samrat ghoshit kiya.",
              "Woh khud ko Europe ka modernizer maanta tha, private property ki raksha karne wale kanoon aur vajan aur maap ki ek saman pranali (decimal system) laya.",
              "Shuru mein use ek muktidata ke roop mein dekha gaya, lekin baad mein uski senaon ko ek aakramankari shakti ke roop mein dekha jaane laga.",
              "Woh aakhirkar <strong>1815 mein Waterloo</strong> mein haar gaya."
            ]}
          ]},
          { id: '10.2', title: "b) Legacy of the French Revolution", content: [
            { type: 'list', items: [
              "Sabse mahatvapurna virasat <strong>liberty aur democratic rights</strong> ke aadarsh the.",
              "Yeh vichar 19th century mein France se baaki Europe mein phaile, jisse feudal systems ka unmoolan hua.",
              "Isne upniveshit logon ko azaadi ke vichar ko samprabhu rashtra-rajya banane ke aandolanon mein phir se kaam karne ke liye prerit kiya.",
              "Bharat mein <strong>Tipu Sultan</strong> aur <strong>Raja Rammohan Roy</strong> jaise vyaktiyon ne krantikari France se aa rahe vicharon se prerna li."
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


// Main App Component
function App() {
  const [language, setLanguage] = React.useState('en');
  const [theme, setTheme] = React.useState('royalPurple');
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
      "@id": "https://vardaanlearning.com/notes/class-9-french-revolution" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1760088015/storming_of_the_bastille.jpg",  // A representative image
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
        <meta name="keywords" content="Class 9, CBSE, History, French Revolution, Old Regime, Reign of Terror, Napoleon, Vardaan Learning Institute, Notes" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;600;700&display=swap');
        body { background-color: var(--theme-bg); transition: background-color 0.3s; font-family: 'Inter', sans-serif; }
        .heading-font { font-family: 'Lora', serif; }
        h1, h2, h3 { font-family: 'Lora', serif !important; }
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
            height: '88px',
            padding: '0 16px'
          }}
      >
          <h1 
              style={{
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
                            <h2 className="text-3xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-4 border-[var(--theme-heading-border)]">{section.title}</h2>
                            <ContentRenderer content={section.content} />
                            {section.subSections && section.subSections.map((subSection) => (
                                <section key={subSection.id} id={`section-${subSection.id}`} className="mt-8 scroll-mt-[80px]">
                                     <h3 className="text-2xl font-bold text-[var(--theme-heading-color)] mb-4 pb-2 border-b-2 border-[var(--theme-heading-border)]">{subSection.title}</h3>
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
