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
    chapterTitle: "Socialism in Europe and the Russian Revolution",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE History notes on Socialism in Europe and the Russian Revolution. Covers Liberals, Radicals, Conservatives, industrial society, the 1905 and 1917 revolutions, Stalinism, and more.",
    sections: [
      { id: '1', title: "The Age of Social Change", content: [
          { type: 'paragraph', text: "The <strong>French Revolution</strong> was a pivotal event that spread powerful ideas of <strong>freedom and equality</strong> across Europe. It opened up the possibility of radically restructuring society, which before the 18th century was dominated by the aristocracy and the church." },
          { type: 'paragraph', text: "After the revolution, new ideas about individual rights and the control of social power were discussed globally, including in Europe and Asia. In India, figures like <strong>Raja Rammohan Roy and Derozio</strong> discussed the significance of the revolution." },
          { type: 'paragraph', text: "However, not everyone wanted a complete societal transformation. Responses to the idea of change varied, leading to the emergence of three main political groups:"},
          { type: 'list', items: [
              "<strong>Liberals:</strong> Wanted gradual change.",
              "<strong>Radicals:</strong> Desired a radical restructuring of society.",
              "<strong>Conservatives:</strong> Initially opposed to change but later accepted its inevitability."
          ]},
          { type: 'paragraph', text: "These differing ideas clashed in the social and political turmoil that followed the French Revolution. The revolution in Russia, in particular, made <strong>socialism</strong> one of the most powerful ideas to shape society in the 20th century."}
      ]},
      { id: '2', title: "Liberals, Radicals, and Conservatives", subSections: [
          { id: '2.1', title: "a) Liberals", content: [
               { type: 'paragraph', text: "Liberals were a group that sought to change society." },
               { type: 'list', items: [
                  "<strong>Toleration:</strong> They wanted a nation that tolerated all religions, as European states at the time often favored one religion over another (e.g., Britain favored the Church of England).",
                  "<strong>Individual Rights:</strong> They opposed the uncontrolled power of dynastic rulers and wanted to protect individual rights against governments.",
                  "<strong>Government:</strong> They argued for a representative, elected parliamentary government with an independent judiciary.",
                  "<strong>Voting Rights:</strong> However, liberals were not 'democrats'. They did not believe in universal adult franchise (the right of every citizen to vote) and felt that mainly <strong>men of property</strong> should have the vote. They also opposed the vote for women."
              ]}
          ]},
          { id: '2.2', title: "b) Radicals", content: [
               { type: 'list', items: [
                  "<strong>Government:</strong> Radicals wanted a government based on the <strong>majority of the country's population</strong>.",
                  "<strong>Women's Suffrage:</strong> Many supported women's suffragette movements (movements to give women the right to vote).",
                  "<strong>Private Property:</strong> They were not against private property but disliked the <strong>concentration of property</strong> in the hands of a few. They opposed the privileges of great landowners and wealthy factory owners."
              ]}
          ]},
          { id: '2.3', title: "c) Conservatives", content: [
              { type: 'list', items: [
                  "<strong>Stance on Change:</strong> Conservatives were opposed to both radicals and liberals. Before the 19th century, they were generally against the idea of change.",
                  "<strong>Post-Revolution View:</strong> After the French Revolution, they accepted that some change was necessary but believed it should be a <strong>slow process</strong> that respected the past."
              ]}
          ]}
      ]},
      { id: '3', title: "Industrial Society and Social Change", content: [
          { type: 'paragraph', text: "The Industrial Revolution brought profound social and economic changes, including the growth of new cities and industrial regions, and the expansion of railways." },
          { type: 'heading', text: "Problems of Industrialisation:" },
          { type: 'list', items: [
              "Men, women, and children were brought to factories.",
              "Working hours were long and wages were poor.",
              "Unemployment was common, especially during periods of low demand.",
              "Rapidly growing towns faced housing and sanitation problems."
          ]},
          { type: 'heading', text: "Liberal and Radical Views:" },
          { type: 'list', items: [
              "Many liberals and radicals were property owners and employers themselves.",
              "They believed that societies would develop if individual freedom was ensured, the poor could work, and those with capital could operate without restraint. Many workers rallied around their parties in the early 19th century."
          ]},
          { type: 'paragraph', text: "Some nationalists, liberals, and radicals worked to overthrow the monarchies established in Europe in 1815. The Italian nationalist <strong>Giuseppe Mazzini</strong>, for example, conspired to create a 'nation' in Italy where all citizens would have equal rights."}
      ]},
      { id: '4', title: "The Coming of Socialism to Europe", content: [
          { type: 'paragraph', text: "By the mid-19th century, socialism had become a well-known and attractive body of ideas in Europe." },
          { type: 'heading', text: "Core Ideas of Socialism" },
          { type: 'list', items: [
              "Socialists were <strong>against private property</strong>, viewing it as the root of all social problems.",
              "They argued that while individuals owned property that provided employment, they were only concerned with personal gain, not the welfare of the workers who made the property productive.",
              "They believed that if <strong>society as a whole controlled property</strong>, more attention would be paid to collective social interests."
          ]},
          { type: 'heading', text: "Different Visions of Socialism" },
          { type: 'list', items: [
              "<strong>Cooperatives:</strong> <strong>Robert Owen</strong>, an English manufacturer, tried to build a cooperative community called New Harmony in Indiana (USA). <strong>Louis Blanc</strong> in France wanted the government to encourage cooperatives to replace capitalist enterprises. These cooperatives were associations where people produced goods together and divided profits based on the work done.",
              "<strong>Marxism:</strong> <strong>Karl Marx</strong> and <strong>Friedrich Engels</strong> added new ideas. Marx argued that industrial society was <strong>'capitalist'</strong>. Capitalists owned the capital in factories, and their profit was produced by workers. He believed that workers' conditions could not improve as long as this profit was accumulated by private capitalists. To free themselves, workers had to <strong>overthrow capitalism</strong> and the rule of private property, creating a radically socialist society where all property was socially controlled. This, he argued, would be a <strong>communist society</strong> and was the natural future for society."
          ]}
      ]},
      { id: '5', title: "The Russian Empire and Society before 1905", subSections: [
          { id: '5.1', title: "a) The Russian Empire in 1914", content: [
              { type: 'list', items: [
                  "<strong>Ruler:</strong> Tsar Nicholas II ruled Russia and its vast empire.",
                  "<strong>Territory:</strong> The empire included modern-day Finland, Latvia, Lithuania, Estonia, parts of Poland, Ukraine, Belarus, and stretched to the Pacific, comprising Central Asian states.",
                  "<strong>Religion:</strong> The majority religion was Russian Orthodox Christianity, but the empire also included Catholics, Protestants, Muslims, and Buddhists."
              ]}
          ]},
          { id: '5.2', title: "b) Economy and Society", content: [
              { type: 'list', items: [
                  "<strong>Agriculture:</strong> At the start of the 20th century, about <strong>85% of the population</strong> earned their living from agriculture, a higher proportion than in most other European countries like France and Germany. Russia was a major exporter of grain.",
                  "<strong>Industry:</strong> Industry was concentrated in pockets like St Petersburg and Moscow. It grew in the 1890s with the expansion of the railway network. Coal production doubled, and iron and steel output quadrupled."
              ]}
          ]},
          { id: '5.3', title: "c) The Working Class", content: [
              { type: 'list', items: [
                  "Workers were a divided group, differentiated by skill and their links to the countryside. Metalworkers considered themselves 'aristocrats' among other workers.",
                  "By 1914, <strong>women made up 31%</strong> of the factory labour force but were paid less than men.",
                  "Despite divisions, workers united to strike over dismissals or poor work conditions."
              ]}
          ]},
          { id: '5.4', title: "d) The Peasantry", content: [
              { type: 'list', items: [
                  "Peasants cultivated most of the land, but large properties were owned by the nobility, the crown, and the Orthodox Church.",
                  "Unlike in France, Russian peasants had <strong>no respect for the nobility</strong> and wanted their land. They frequently refused to pay rent and even murdered landlords.",
                  "A unique custom was the periodic pooling of land by the commune (<em>mir</em>), which was then divided according to the needs of individual families."
              ]}
          ]}
      ]},
      { id: '6', title: "Socialism in Russia and the 1905 Revolution", subSections: [
          { id: '6.1', title: "a) Political Parties", content: [
              { type: 'paragraph', text: "Before 1914, all political parties in Russia were illegal." },
              { type: 'list', items: [
                  "<strong>The Russian Social Democratic Workers Party (1898):</strong> Founded by socialists who followed Marx's ideas. It had to operate illegally. The party was divided into:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Bolsheviks:</strong> Led by <strong>Vladimir Lenin</strong>, they believed the party should be disciplined and control its membership in a repressive society like Tsarist Russia.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Mensheviks:</strong> Believed the party should be open to all.",
                  "<strong>The Socialist Revolutionary Party (1900):</strong> This party struggled for peasants' rights and demanded that land belonging to nobles be transferred to peasants. They believed peasants, with their custom of dividing land, were 'natural socialists' and would be the main force of the revolution."
              ]}
          ]},
          { id: '6.2', title: "b) The 1905 Revolution", content: [
              { type: 'paragraph', text: "Russia was an autocracy, with the Tsar not being subject to a parliament." },
              { type: 'heading', text: "Causes:" },
              { type: 'list', items: [
                  "<strong>Economic Crisis:</strong> 1904 was a bad year for workers. Prices of essential goods rose so fast that real wages declined by 20%.",
                  "<strong>Industrial Action:</strong> When four members of the Assembly of Russian Workers were dismissed at the Putilov Iron Works, over 110,000 workers in St Petersburg went on strike, demanding an 8-hour day and better wages."
              ]},
              { type: 'heading', text: "Bloody Sunday:" },
               { type: 'list', items: [
                  "A procession of workers led by <strong>Father Gapon</strong> reached the Winter Palace and was attacked by police and Cossacks.",
                  "Over 100 workers were killed and 300 wounded."
               ]},
              { type: 'heading', text: "Effects:" },
               { type: 'list', items: [
                  "This incident started a series of events known as the <strong>1905 Revolution</strong>.",
                  "Strikes took place all over the country, universities closed down, and lawyers, doctors, and engineers established the Union of Unions, demanding a constituent assembly.",
                  "The Tsar allowed the creation of an elected consultative Parliament, or <strong>Duma</strong>. However, he dismissed the first Duma within 75 days and the second within three months, not wanting his power questioned. He then changed the voting laws to pack the third Duma with conservative politicians."
               ]}
          ]}
      ]},
      { id: '7', title: "The First World War and the Fall of the Tsar", content: [
          { type: 'paragraph', text: "In 1914, Russia entered the war alongside France and Britain against Germany, Austria, and Turkey." },
          { type: 'list', items: [
              "<strong>Initial Support Wanes:</strong> Initially, the war was popular, but support thinned as the Tsar refused to consult the main parties in the Duma.",
              "<strong>Anti-German Sentiment:</strong> Anti-German feelings were high, leading to the renaming of St Petersburg to <strong>Petrograd</strong>. The Tsarina Alexandra's German origins and her reliance on a monk named Rasputin made the autocracy unpopular.",
              "<strong>Military Defeats:</strong> Russia's armies suffered massive losses in Germany and Austria between 1914 and 1916. By 1917, there were over <strong>7 million casualties</strong>. The retreating army's destruction of crops and buildings led to over 3 million refugees in Russia, discrediting the government.",
              "<strong>Economic Impact:</strong> The war had a severe impact on industry. German control of the Baltic Sea cut Russia off from industrial suppliers. Labour shortages resulted from able-bodied men being called to war, and large grain supplies sent to the army led to <strong>bread and flour scarcity</strong> in cities. By the winter of 1916, riots at bread shops were common."
          ]},
          { type: 'heading', text: "The February Revolution (1917)" },
          { type: 'paragraph', text: "Conditions in the capital, Petrograd, were grim in the winter of 1917." },
          { type: 'list', items: [
              "<strong>Feb 22:</strong> A lockout takes place at a factory.",
              "<strong>Feb 23 (International Women's Day):</strong> Workers from fifty factories go on strike, with many women leading the way.",
              "<strong>Feb 25:</strong> The government suspends the Duma.",
              "<strong>Feb 27:</strong> The Police Headquarters is ransacked. The cavalry refuses to fire on demonstrators, and three regiments mutiny to join the striking workers. Soldiers and workers gather to form a <strong>'soviet' or 'council'</strong>, known as the <strong>Petrograd Soviet</strong>.",
              "<strong>March 2:</strong> Tsar Nicholas II <strong>abdicates</strong>. Soviet and Duma leaders form a <strong>Provisional Government</strong> to run the country. Petrograd had led the revolution that brought down the monarchy."
          ]}
      ]},
      { id: '8', title: "The Bolshevik Revolution", subSections: [
          { id: '8.1', title: "a) After February", content: [
               { type: 'list', items: [
                  "<strong>Lenin's Return:</strong> In April 1917, the Bolshevik leader <strong>Vladimir Lenin</strong> returned to Russia from exile. He presented his <strong>'April Theses'</strong> with three key demands:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• The war to be brought to a close.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Land to be transferred to the peasants.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Banks to be nationalised.",
                  "<strong>Growing Discontent:</strong> Throughout the summer, the workers' movement spread, and factory committees were formed. As Bolshevik influence grew, the Provisional Government took stern measures, arresting leaders and repressing demonstrations in July 1917. Meanwhile, peasants, encouraged by Socialist Revolutionaries, seized land between July and September."
              ]}
          ]},
          { id: '8.2', title: "b) The October Revolution (1917)", content: [
              { type: 'list', items: [
                  "<strong>The Uprising:</strong> As conflict with the Provisional Government grew, Lenin feared it would set up a dictatorship. On October 16, he persuaded the Petrograd Soviet and the Bolshevik Party to agree to a socialist seizure of power. A Military Revolutionary Committee under <strong>Leon Trotskii</strong> was appointed to organise it.",
                  "<strong>October 24:</strong> The uprising began. The Military Revolutionary Committee ordered its supporters to seize government offices and arrest ministers. By nightfall, the city was under the committee's control, and ministers had surrendered.",
                  "<strong>Outcome:</strong> The majority at the All Russian Congress of Soviets approved the Bolshevik action. By December, the Bolsheviks controlled the Moscow-Petrograd area."
              ]}
          ]}
      ]},
      { id: '9', title: "Post-Revolution Changes and Civil War", subSections: [
          { id: '9.1', title: "a) What Changed After October?", content: [
              { type: 'paragraph', text: "The Bolsheviks, renamed the <strong>Russian Communist Party</strong>, implemented radical changes:" },
              { type: 'list', items: [
                  "<strong>Economy:</strong> Most industry and banks were <strong>nationalised</strong> in November 1917.",
                  "<strong>Land:</strong> Land was declared social property, and peasants were allowed to seize the land of the nobility.",
                  "<strong>Social Structure:</strong> Old aristocratic titles were banned. Large houses in cities were partitioned according to family requirements.",
                  "<strong>One-Party State:</strong> After failing to win a majority in the Constituent Assembly elections, Lenin dismissed the Assembly in January 1918. Russia eventually became a <strong>one-party state</strong>. The secret police (initially the Cheka) punished those who criticised the Bolsheviks.",
                  "<strong>Peace Treaty:</strong> In March 1918, the Bolsheviks made peace with Germany at Brest-Litovsk."
              ]}
          ]},
          { id: '9.2', title: "b) The Civil War (1918-1920)", content: [
              { type: 'list', items: [
                  "<strong>Factions:</strong> When the Bolsheviks ordered land redistribution, non-Bolshevik socialists ('<strong>greens</strong>'), liberals, and supporters of autocracy ('<strong>whites</strong>') condemned the uprising. They organised troops to fight the Bolsheviks ('<strong>reds</strong>'). The 'greens' and 'whites' were backed by French, American, British, and Japanese forces, who were worried about the growth of socialism in Russia.",
                  "<strong>Outcome:</strong> Looting, banditry, and famine became common during the war. The 'whites' lost popular support because of their harsh treatment of peasants who had seized land. By January 1920, the Bolsheviks controlled most of the former Russian empire. In December 1922, they created the Soviet Union (<strong>USSR</strong>) from the Russian empire."
              ]}
          ]}
      ]},
      { id: '10', title: "Making a Socialist Society and Stalinism", subSections: [
          { id: '10.1', title: "a) Centralised Planning", content: [
              { type: 'list', items: [
                  "During the civil war, the Bolsheviks kept industries and banks nationalised.",
                  "They introduced a process of <strong>centralised planning</strong>, setting targets for five-year periods, known as the <strong>Five Year Plans</strong>.",
                  "This led to economic growth, with industrial production (oil, coal, steel) increasing by 100% between 1929 and 1933. New factory cities came into being.",
                  "However, rapid construction led to <strong>poor working conditions</strong> and hard lives for workers.",
                  "The state also developed an extended schooling system, established crèches in factories for children, and provided cheap public healthcare."
              ]}
          ]},
          { id: '10.2', title: "b) Stalinism and Collectivisation", content: [
              { type: 'paragraph', text: "The early Planned Economy was linked to the disaster of agricultural collectivisation." },
              { type: 'list', items: [
                  "<strong>The Grain Crisis:</strong> By 1927-28, Soviet towns faced a severe grain shortage. <strong>Stalin</strong>, who led the party after Lenin's death, believed that rich peasants, known as <strong>kulaks</strong>, were hoarding grain.",
                  "<strong>Collectivisation Programme:</strong> From 1929, the Party forced all peasants to cultivate in <strong>collective farms (kolkhoz)</strong>. The idea was to eliminate kulaks and create large, state-controlled farms that could be modernised."
              ]},
              { type: 'heading', text: "Consequences:" },
              { type: 'list', items: [
                  "Enraged peasants resisted by destroying their livestock; the number of cattle fell by one-third between 1929 and 1931.",
                  "Those who resisted were severely punished, many being <strong>deported or exiled</strong>.",
                  "The bad harvests of 1930-1933 led to one of the most devastating famines in Soviet history, with <strong>over 4 million deaths</strong>."
              ]},
              { type: 'paragraph', text: "<strong>The Great Purge:</strong> Stalin and his sympathisers charged critics of his policies with conspiracy against socialism. By 1939, over <strong>2 million</strong> people were in prisons or labour camps, with many executed after being forced to make false confessions under torture." }
          ]}
      ]},
      { id: '11', title: "The Global Influence of the USSR", content: [
          { type: 'list', items: [
              "<strong>Spread of Communism:</strong> The possibility of a workers' state fired people's imaginations worldwide. Communist parties were formed in many countries, such as the Communist Party of Great Britain. The Bolsheviks encouraged colonial peoples to follow their experiment and founded the <strong>Comintern</strong> (an international union of pro-Bolshevik socialist parties). By WWII, the USSR had given socialism a global face.",
              "<strong>Mixed Legacy:</strong> By the 1950s, it was acknowledged that the Soviet style of government was not in keeping with the revolution's ideals. A backward country had become a great power with developed industry and agriculture, and the poor were being fed. However, it had <strong>denied essential freedoms</strong> to its citizens and carried out development through <strong>repressive policies</strong>. By the end of the 20th century, the USSR's international reputation as a socialist country had declined."
          ]}
      ]}
    ]
  },
  hi: { // Hinglish Version
    chapterTitle: "Socialism in Europe and the Russian Revolution",
    tocTitle: "Table of Contents",
    metaDescription: "Class 9 CBSE History ke liye Socialism in Europe aur Russian Revolution par notes. Liberals, Radicals, industrial society, 1905 aur 1917 revolutions, Stalinism, sab kuch simple Hinglish mein.",
    sections: [
      { id: '1', title: "The Age of Social Change", content: [
          { type: 'paragraph', text: "<strong>French Revolution</strong> ek bohot important event tha jisne Europe bhar mein <strong>freedom aur equality</strong> ke powerful ideas phailaye. Isne society ko poori tarah se badalne ki possibility open kar di, jo 18th century se pehle aristocracy aur church ke domination mein thi." },
          { type: 'paragraph', text: "Revolution ke baad, individual rights aur social power ke control par naye ideas poori duniya mein discuss hone lage, Europe aur Asia mein bhi. India mein, <strong>Raja Rammohan Roy aur Derozio</strong> jaise logo ne revolution ke significance par charcha ki." },
          { type: 'paragraph', text: "Lekin, har koi society ka complete transformation nahi chahta tha. Change ke idea par alag-alag responses the, jisse teen main political groups bane:"},
          { type: 'list', items: [
              "<strong>Liberals:</strong> Dheere-dheere change chahte the.",
              "<strong>Radicals:</strong> Society ka ek radical restructuring chahte the.",
              "<strong>Conservatives:</strong> Shuru mein change ke khilaf the, lekin baad mein uski zaroorat ko accept kar liya."
          ]},
          { type: 'paragraph', text: "Yeh alag-alag ideas French Revolution ke baad hue social aur political turmoil mein takraye. Russia ka revolution, khas taur par, <strong>socialism</strong> ko 20th century mein society ko shape dene wale sabse powerful ideas mein se ek bana diya."}
      ]},
      { id: '2', title: "Liberals, Radicals, and Conservatives", subSections: [
          { id: '2.1', title: "a) Liberals", content: [
               { type: 'paragraph', text: "Liberals ek aisa group tha jo society ko badalna chahta tha." },
               { type: 'list', items: [
                  "<strong>Toleration:</strong> Ve ek aisa nation chahte the jo sabhi religions ko tolerate kare, kyunki uss samay European states aksar ek religion ko favor karte the (jaise, Britain Church of England ko favor karta tha).",
                  "<strong>Individual Rights:</strong> Ve dynastic rulers ki uncontrolled power ke khilaf the aur governments ke against individual rights ko protect karna chahte the.",
                  "<strong>Government:</strong> Unhone ek representative, elected parliamentary government aur ek independent judiciary ki maang ki.",
                  "<strong>Voting Rights:</strong> Lekin, liberals 'democrats' nahi the. Ve universal adult franchise (har citizen ka vote dene ka adhikar) mein believe nahi karte the aur unhe lagta tha ki vote ka adhikar mukhya roop se <strong>property wale mardo</strong> ko hi milna chahiye. Ve mahilaon ke vote ke bhi khilaf the."
              ]}
          ]},
          { id: '2.2', title: "b) Radicals", content: [
               { type: 'list', items: [
                  "<strong>Government:</strong> Radicals ek aisi government chahte the jo <strong>desh ki majority population</strong> par based ho.",
                  "<strong>Women's Suffrage:</strong> Kai radicals ne mahilaon ke suffragette movements (mahilaon ko vote ka adhikar dilane ke aandolan) ko support kiya.",
                  "<strong>Private Property:</strong> Ve private property ke khilaf nahi the, lekin unhe <strong>property ka concentration</strong> kuch hi logo ke haathon mein pasand nahi tha. Ve bade zameendáron aur ameer factory maliko ke privileges ke khilaf the."
              ]}
          ]},
          { id: '2.3', title: "c) Conservatives", content: [
              { type: 'list', items: [
                  "<strong>Stance on Change:</strong> Conservatives radicals aur liberals dono ke khilaf the. 19th century se pehle, ve aam taur par change ke idea ke against the.",
                  "<strong>Post-Revolution View:</strong> French Revolution ke baad, unhone स्वीकार kiya ki kuch change zaroori hai, lekin unka manna tha ki yeh ek <strong>dheema process</strong> hona chahiye jo past ka samman kare."
              ]}
          ]}
      ]},
      { id: '3', title: "Industrial Society and Social Change", content: [
          { type: 'paragraph', text: "Industrial Revolution ne bade social aur economic changes laaye, jaise naye shehron aur industrial regions ka vikas, aur railways ka vistar." },
          { type: 'heading', text: "Problems of Industrialisation:" },
          { type: 'list', items: [
              "Aadmi, auratein, aur bachchon ko factories mein laya gaya.",
              "Kaam ke ghante lambe the aur wages kam the.",
              "Berozgari aam thi, khaaskar kam demand ke samay.",
              "Tezi se badhte shehron mein housing aur safai ki samasyaen thi."
          ]},
          { type: 'heading', text: "Liberal and Radical Views:" },
          { type: 'list', items: [
              "Kai liberals aur radicals khud property owners aur employers the.",
              "Unka manna tha ki societies tabhi develop hongi jab individual freedom sunishchit ho, gareeb kaam kar sakein, aur jinke paas capital hai woh bina kisi rok-tok ke kaam kar sakein. 19th century ke shuruaat mein kai workers unki parties ke aas-paas aakar khade ho gaye."
          ]},
          { type: 'paragraph', text: "Kuch nationalists, liberals, aur radicals ne 1815 mein Europe mein sthapit monarchies ko ukhad fekne ke liye kaam kiya. Jaise, Italian nationalist <strong>Giuseppe Mazzini</strong> ne Italy mein ek 'nation' banane ki saazish rachi jahan sabhi citizens ko barabar adhikar milte."}
      ]},
      { id: '4', title: "The Coming of Socialism to Europe", content: [
          { type: 'paragraph', text: "Mid-19th century tak, socialism Europe mein ek jaana-maana aur attractive vicharon ka samuh ban gaya tha." },
          { type: 'heading', text: "Core Ideas of Socialism" },
          { type: 'list', items: [
              "Socialists <strong>private property ke khilaaf the</strong>, aur use sabhi social problems ki jad maante the.",
              "Unka tark tha ki jab individuals property ke maalik hote hain jo rozgar deti hai, toh ve sirf personal fayde ke baare mein sochte hain, na ki un workers ke bhalai ke baare mein jo us property ko productive banate hain.",
              "Unka manna tha ki agar <strong>poori society property ko control kare</strong>, toh collective social interests par zyada dhyan diya jayega."
          ]},
          { type: 'heading', text: "Different Visions of Socialism" },
          { type: 'list', items: [
              "<strong>Cooperatives:</strong> <strong>Robert Owen</strong>, ek English manufacturer, ne Indiana (USA) mein New Harmony naam ka ek cooperative community banane ki koshish ki. France mein <strong>Louis Blanc</strong> chahte the ki government cooperatives ko badhava de taki ve capitalist enterprises ko replace kar sakein. Yeh cooperatives aise associations the jahan log milkar saaman banate the aur profits ko kiye gaye kaam ke aadhar par baant lete the.",
              "<strong>Marxism:</strong> <strong>Karl Marx</strong> aur <strong>Friedrich Engels</strong> ne naye ideas jode. Marx ne argue kiya ki industrial society <strong>'capitalist'</strong> hai. Capitalists factories mein capital ke maalik the, aur unka profit workers dwara paida kiya jaata tha. Unka manna tha ki workers ki conditions tab tak nahi sudhar sakti jab tak yeh profit private capitalists dwara jama kiya jaata rahega. Khud ko azaad karne ke liye, workers ko <strong>capitalism ko ukhad fekna</strong> hoga aur private property ke shasan ko khatm karna hoga, ek radically socialist society banani hogi jahan saari property socially controlled ho. Unhone kaha ki yeh ek <strong>communist society</strong> hogi aur yahi society ka natural future tha."
          ]}
      ]},
       { id: '5', title: "The Russian Empire and Society before 1905", subSections: [
          { id: '5.1', title: "a) The Russian Empire in 1914", content: [
              { type: 'list', items: [
                  "<strong>Shasak (Ruler):</strong> Tsar Nicholas II Russia aur uske vishal samrajya par shasan karte the.",
                  "<strong>Kshetra (Territory):</strong> Samrajya mein aaj ke Finland, Latvia, Lithuania, Estonia, Poland ke kuch hisse, Ukraine, Belarus shamil the, aur yeh Pacific tak phaila hua tha, jismein Central Asian states bhi aate the.",
                  "<strong>Dharm (Religion):</strong> Majority dharm Russian Orthodox Christianity tha, lekin samrajya mein Catholics, Protestants, Muslims, aur Buddhists bhi shamil the."
              ]}
          ]},
          { id: '5.2', title: "b) Economy and Society", content: [
              { type: 'list', items: [
                  "<strong>Krishi (Agriculture):</strong> 20th century ki shuruaat mein, lagbhag <strong>85% population</strong> apni rozi-roti kheti se kamati thi, jo France aur Germany jaise doosre European deshon se kahin zyada tha. Russia anaaj ka ek bada exporter tha.",
                  "<strong>Udyog (Industry):</strong> Industry St Petersburg aur Moscow jaise kuch pockets mein concentrated thi. 1890s mein railway network ke vistar ke saath yeh badhi. Koyla production double ho gaya, aur iron and steel output chau guna ho gaya."
              ]}
          ]},
          { id: '5.3', title: "c) The Working Class", content: [
              { type: 'list', items: [
                  "Workers ek divided group the, jinki pehchan unke skill aur gaon se unke links se hoti thi. Metalworkers khud ko doosre workers ke beech 'aristocrats' maante the.",
                  "1914 tak, <strong>mahilaayein 31%</strong> factory labour force ka hissa thi, lekin unhe mardo se kam paise milte the.",
                  "Divisions ke bawajood, workers naukri se nikalne ya kharab kaam ki conditions par strike karne ke liye ekjut ho jaate the."
              ]}
          ]},
          { id: '5.4', title: "d) The Peasantry", content: [
              { type: 'list', items: [
                  "Kisan zyadatar zameen par kheti karte the, lekin badi properties nobility, crown, aur Orthodox Church ke paas thi.",
                  "France ke vipreet, Russian kisan <strong>nobility ki koi izzat nahi karte the</strong> aur unki zameen chahte the. Ve aksar rent dene se mana kar dete the aur landlords ka murder tak kar dete the.",
                  "Ek anokha riwaaj tha commune (<em>mir</em>) dwara samay-samay par zameen ko ekattha karna, jise phir individual parivaron ki zarooraton ke anusaar baant diya jaata tha."
              ]}
          ]}
      ]},
      { id: '6', title: "Socialism in Russia and the 1905 Revolution", subSections: [
          { id: '6.1', title: "a) Political Parties", content: [
              { type: 'paragraph', text: "1914 se pehle, Russia mein sabhi political parties illegal thi." },
              { type: 'list', items: [
                  "<strong>The Russian Social Democratic Workers Party (1898):</strong> Ise Marx ke ideas ko follow karne wale socialists ne banaya tha. Ise gair-kanooni tarike se kaam karna padta tha. Party do hisson mein banti hui thi:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Bolsheviks:</strong> Inke neta <strong>Vladimir Lenin</strong> the. Unka manna tha ki Tsarist Russia jaise damankari samaj mein party ko anushasit hona chahiye aur apni membership ko control karna chahiye.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Mensheviks:</strong> Unka manna tha ki party sabhi ke liye khuli honi chahiye.",
                  "<strong>The Socialist Revolutionary Party (1900):</strong> Yeh party kisano ke adhikaron ke liye sangharsh karti thi aur maang karti thi ki nobles ki zameen kisano ko transfer kar di jaye. Unka manna tha ki kisan, apne zameen baantne ke riwaaj ke saath, 'natural socialists' hain aur revolution ki mukhya shakti honge."
              ]}
          ]},
          { id: '6.2', title: "b) The 1905 Revolution", content: [
              { type: 'paragraph', text: "Russia ek autocracy thi, jahan Tsar parliament ke adheen nahi tha." },
              { type: 'heading', text: "Causes:" },
              { type: 'list', items: [
                  "<strong>Economic Crisis:</strong> 1904 workers ke liye bura saal tha. Zaroori cheezon ki keemat itni tezi se badhi ki real wages 20% tak gir gaye.",
                  "<strong>Industrial Action:</strong> Jab Putilov Iron Works mein Assembly of Russian Workers ke chaar sadasyon ko nikal diya gaya, toh St Petersburg mein 110,000 se zyada workers hadtal par chale gaye, 8 ghante ke kaam aur behtar wages ki maang karte hue."
              ]},
              { type: 'heading', text: "Bloody Sunday:" },
               { type: 'list', items: [
                  "<strong>Father Gapon</strong> ke netritva mein workers ka ek juloos Winter Palace pahuncha aur un par police aur Cossacks ne hamla kar diya.",
                  "100 se zyada workers maare gaye aur 300 ghayal ho gaye."
               ]},
              { type: 'heading', text: "Effects:" },
               { type: 'list', items: [
                  "Is ghatna ne un ghatnaon ki shuruaat ki jinhe <strong>1905 Revolution</strong> ke naam se jaana jaata hai.",
                  "Poore desh mein hadtalein hui, universities band ho gayi, aur lawyers, doctors, aur engineers ne Union of Unions banaya, ek constituent assembly ki maang karte hue.",
                  "Tsar ne ek elected consultative Parliament, ya <strong>Duma</strong>, banane ki anumati di. Lekin, usne pehli Duma ko 75 dino ke andar aur doosri ko teen mahino ke andar dismiss kar diya, kyunki woh apni shakti par koi sawal nahi chahta tha. Phir usne voting laws badal diye taki teesri Duma conservative politicians se bhar jaye."
               ]}
          ]}
      ]},
      { id: '7', title: "The First World War and the Fall of the Tsar", content: [
          { type: 'paragraph', text: "1914 mein, Russia ne France aur Britain ke saath Germany, Austria, aur Turkey ke khilaf yuddh mein pravesh kiya." },
          { type: 'list', items: [
              "<strong>Initial Support Wanes:</strong> Shuru mein, yuddh lokpriya tha, lekin samarthan kam ho gaya kyunki Tsar ne Duma ki mukhya partiyon se salah karne se mana kar diya.",
              "<strong>Anti-German Sentiment:</strong> German-virodhi bhavnayein high thi, jiske kaaran St Petersburg ka naam badal kar <strong>Petrograd</strong> kar diya gaya. Tsarina Alexandra ka German origin aur unka Rasputin naam ke ek mon par nirbhar rehna, autocracy ko apriya bana diya.",
              "<strong>Military Defeats:</strong> Russia ki senaon ko 1914 aur 1916 ke beech Germany aur Austria mein bhaari nuksan uthana pada. 1917 tak, <strong>7 million se zyada casualties</strong> ho chuki thi. Peeche hatti sena dwara faslon aur imaraton ko nasht karne se Russia mein 3 million se zyada sharanarthi ho gaye, jisse sarkar badnaam ho gayi.",
              "<strong>Economic Impact:</strong> Yuddh ka industry par gambhir prabhav pada. Baltic Sea par German control ne Russia ko industrial suppliers se kaat diya. Yuddh ke liye swasth purushon ko bulane se labour ki kami ho gayi, aur sena ko badi maatra mein anaaj bhejne se shehron mein <strong>roti aur aate ki kami</strong> ho gayi. 1916 ki sardiyon tak, roti ki dukanon par dange aam ho gaye the."
          ]},
          { type: 'heading', text: "The February Revolution (1917)" },
          { type: 'paragraph', text: "1917 ki sardiyon mein rajdhani Petrograd mein halat gambhir the." },
          { type: 'list', items: [
              "<strong>Feb 22:</strong> Ek factory mein talaabandi ho jaati hai.",
              "<strong>Feb 23 (International Women's Day):</strong> Pachas factories ke workers hadtal par chale jaate hain, jismein kai mahilaayein aage thi.",
              "<strong>Feb 25:</strong> Sarkar Duma ko suspend kar deti hai.",
              "<strong>Feb 27:</strong> Police Headquarters mein tod-phod ki jaati hai. Ghudsawar sena pradarshankariyon par goli chalane se mana kar deti hai, aur teen regiments bagawat karke hadtali workers se ja milti hain. Sainik aur workers ek <strong>'soviet' ya 'council'</strong> banane ke liye ikatthe hote hain, jise <strong>Petrograd Soviet</strong> ke naam se jaana jaata hai.",
              "<strong>March 2:</strong> Tsar Nicholas II <strong>gaddi chhod dete hain</strong>. Soviet aur Duma ke neta desh chalaane ke liye ek <strong>Provisional Government</strong> banate hain. Petrograd ne uss kranti ka netritva kiya tha jisne monarchy ko gira diya."
          ]}
      ]},
      { id: '8', title: "The Bolshevik Revolution", subSections: [
          { id: '8.1', title: "a) After February", content: [
               { type: 'list', items: [
                  "<strong>Lenin's Return:</strong> April 1917 mein, Bolshevik neta <strong>Vladimir Lenin</strong> nirvasan se Russia laute. Unhone apni <strong>'April Theses'</strong> pesh ki jismein teen mukhya maangein thi:",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Yuddh ko samapt kiya jaye.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Zameen kisano ko transfer ki jaye.",
                  "&nbsp;&nbsp;&nbsp;&nbsp;• Banks ko nationalise kiya jaye.",
                  "<strong>Growing Discontent:</strong> Garmiyon ke dauraan, workers ka aandolan phail gaya, aur factory committees banayi gayi. Jaise-jaise Bolshevik prabhav badha, Provisional Government ne kathor kadam uthaye, July 1917 mein netaon ko giraftar kiya aur pradarshanon ko dabaya. Is beech, Socialist Revolutionaries se protsahit hokar kisano ne July se September ke beech zameen par kabza kar liya."
              ]}
          ]},
          { id: '8.2', title: "b) The October Revolution (1917)", content: [
              { type: 'list', items: [
                  "<strong>The Uprising:</strong> Provisional Government ke saath sangharsh badhne par, Lenin ko dar tha ki woh ek tanashahi sthapit kar degi. 16 October ko, unhone Petrograd Soviet aur Bolshevik Party ko सत्ता par samajwadi kabze ke liye raazi kiya. Ise organise karne ke liye <strong>Leon Trotskii</strong> ke under ek Military Revolutionary Committee niyukt ki gayi.",
                  "<strong>October 24:</strong> Vidroh shuru hua. Military Revolutionary Committee ne apne samarthakon ko sarkari daftaron par kabza karne aur mantriyon ko giraftar karne ka aadesh diya. Raat hone tak, sheher committee ke control mein tha, aur mantriyon ne aatmasamarpan kar diya tha.",
                  "<strong>Outcome:</strong> All Russian Congress of Soviets mein majority ne Bolshevik karwai ko manzoori di. December tak, Bolsheviks ne Moscow-Petrograd area ko control kar liya tha."
              ]}
          ]}
      ]},
      { id: '9', title: "Post-Revolution Changes and Civil War", subSections: [
          { id: '9.1', title: "a) What Changed After October?", content: [
              { type: 'paragraph', text: "Bolsheviks, jinka naam badal kar <strong>Russian Communist Party</strong> ho gaya, ne radical badlav kiye:" },
              { type: 'list', items: [
                  "<strong>Economy:</strong> Zyadatar industry aur banks November 1917 mein <strong>nationalise</strong> kar diye gaye.",
                  "<strong>Land:</strong> Zameen ko social property ghoshit kar diya gaya, aur kisano ko nobility ki zameen par kabza karne ki anumati di gayi.",
                  "<strong>Social Structure:</strong> Purane aristocratic titles par ban laga diya gaya. Shehron mein bade gharon ko parivar ki zarooraton ke anusaar baant diya gaya.",
                  "<strong>One-Party State:</strong> Constituent Assembly chunaavon mein majority haasil karne mein asaphal hone ke baad, Lenin ne January 1918 mein Assembly ko dismiss kar diya. Russia aakhirkaar ek <strong>one-party state</strong> ban gaya. Gupt police (shuru mein Cheka) ne Bolsheviks ki aalochana karne walon ko saza di.",
                  "<strong>Peace Treaty:</strong> March 1918 mein, Bolsheviks ne Brest-Litovsk mein Germany ke saath shanti sandhi ki."
              ]}
          ]},
          { id: '9.2', title: "b) The Civil War (1918-1920)", content: [
              { type: 'list', items: [
                  "<strong>Factions:</strong> Jab Bolsheviks ne zameen ke punarvitran ka aadesh diya, toh non-Bolshevik socialists ('<strong>greens</strong>'), liberals, aur autocracy ke samarthakon ('<strong>whites</strong>') ne vidroh ki ninda ki. Unhone Bolsheviks ('<strong>reds</strong>') se ladne ke liye sena taiyar ki. 'Greens' aur 'whites' ko French, American, British, aur Japanese senaon ka samarthan tha, jo Russia mein socialism ke vikas se chintit the.",
                  "<strong>Outcome:</strong> Yuddh ke dauraan loot, dakaiti, aur akaal aam ho gaye. 'Whites' ne zameen par kabza kar chuke kisano ke saath kathor vyavahar ke kaaran lokpriya samarthan kho diya. January 1920 tak, Bolsheviks ne purane Russian samrajya ke zyadatar hisson par niyantran kar liya tha. December 1922 mein, unhone Russian samrajya se Soviet Union (<strong>USSR</strong>) banaya."
              ]}
          ]}
      ]},
      { id: '10', title: "Making a Socialist Society and Stalinism", subSections: [
          { id: '10.1', title: "a) Centralised Planning", content: [
              { type: 'list', items: [
                  "Civil war ke dauraan, Bolsheviks ne industries aur banks ko nationalised rakha.",
                  "Unhone <strong>centralised planning</strong> ka ek process shuru kiya, paanch-saal ki avadhi ke liye lakshya nirdharit kiye, jinhe <strong>Five Year Plans</strong> ke naam se jaana jaata hai.",
                  "Isse aarthik vikas hua, 1929 aur 1933 ke beech industrial production (tel, koyla, steel) 100% badh gaya. Naye factory sheher astitva mein aaye.",
                  "Lekin, tezi se nirman ke kaaran <strong>kharab working conditions</strong> aur workers ke liye kathin jeevan hua.",
                  "Rajya ne ek vistrit schooling system bhi viksit kiya, bachchon ke liye factories mein crèches sthapit kiye, aur sasti sarvajanik swasthya seva pradan ki."
              ]}
          ]},
          { id: '10.2', title: "b) Stalinism and Collectivisation", content: [
              { type: 'paragraph', text: "Shuruaati Planned Economy krishi collectivisation ki aapda se judi hui thi." },
              { type: 'list', items: [
                  "<strong>The Grain Crisis:</strong> 1927-28 tak, Soviet shehron mein anaaj ki gambhir kami ka saamna karna pada. Lenin ki mrityu ke baad party ka netritva karne wale <strong>Stalin</strong> ka manna tha ki ameer kisan, jinhe <strong>kulaks</strong> ke naam se jaana jaata hai, anaaj ki jama-khori kar rahe the.",
                  "<strong>Collectivisation Programme:</strong> 1929 se, Party ne sabhi kisano ko <strong>samuhik kheton (kolkhoz)</strong> mein kheti karne ke liye majboor kiya. Iska idea kulaks ko khatm karna aur bade, rajya-niyantrit khet banana tha jinhe modernise kiya ja sakta tha."
              ]},
              { type: 'heading', text: "Consequences:" },
              { type: 'list', items: [
                  "Gusse mein aaye kisano ne apne pashuon ko nasht karke virodh kiya; 1929 aur 1931 ke beech pashuon ki sankhya ek-tihaai kam ho gayi.",
                  "Virodh karne walon ko kathor saza di gayi, kaiyon ko <strong>desh nikala ya vanvaas</strong> de diya gaya.",
                  "1930-1933 ki kharab faslon ke kaaran Soviet itihas ke sabse vinashkari akaalon mein se ek hua, jismein <strong>4 million se zyada mautien</strong> hui."
              ]},
              { type: 'paragraph', text: "<strong>The Great Purge:</strong> Stalin aur unke samarthakon ne apni neetiyon ke aalochakon par socialism ke khilaf saazish ka aarop lagaya. 1939 tak, <strong>2 million</strong> se zyada log jailon ya shram shiviron mein the, jismein se kaiyon ko yatna dekar jhoothe ikbaalnaame karwane ke baad phaansi de di gayi." }
          ]}
      ]},
      { id: '11', title: "The Global Influence of the USSR", content: [
          { type: 'list', items: [
              "<strong>Spread of Communism:</strong> Ek workers' state ki sambhavna ne duniya bhar ke logon ki kalpana ko udaan di. Kai deshon mein Communist partiyan banayi gayi, jaise ki Communist Party of Great Britain. Bolsheviks ne aupaniveshik logon ko apne prayog ka palan karne ke liye protsahit kiya aur <strong>Comintern</strong> (pro-Bolshevik socialist partiyon ka ek antarrashtriya sangh) ki sthapna ki. WWII tak, USSR ne socialism ko ek vaishvik chehra de diya tha.",
              "<strong>Mixed Legacy:</strong> 1950s tak, yeh maan liya gaya tha ki Soviet shaili ki sarkar kranti ke aadarshon ke anuroop nahi thi. Ek pichhda desh ek mahaan shakti ban gaya tha jismein udyog aur krishi viksit the, aur gareebon ko khana mil raha tha. Lekin, isne apne nagrikon ko <strong>zaroori aazadiyon se vanchit</strong> rakha tha aur vikas ko <strong>damankari neetiyon</strong> ke madhyam se anjaam diya tha. 20th century ke ant tak, ek socialist desh ke roop mein USSR ki antarrashtriya pratishtha mein giravat aayi thi."
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
    
    const allSectionIds = currentContent.sections.flatMap(s => [s.id, ...(s.subSections ? s.subSections.map(sub => sub.id) : [])]);


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
                        const isMainActive = allSectionIds.includes(activeSection) && activeSection.startsWith(section.id);
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
        
        if (!newActiveSection && allSectionIds.length > 0) {
             const firstElement = document.getElementById(`section-${allSectionIds[0]}`);
             if (firstElement && firstElement.getBoundingClientRect().top >= 0) {
                 newActiveSection = allSectionIds[0];
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
      "@id": "https://vardaanlearning.com/notes/class-9-socialism-in-europe" // Replace with the actual URL
    },
    "headline": currentContent.chapterTitle,
    "description": currentContent.metaDescription,
    "image": "https://res.cloudinary.com/dxwszplz7/image/upload/v1716088015/russian_revolution_art.jpg",  // A representative image
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
        <meta name="keywords" content="Class 9, CBSE, History, Socialism in Europe, Russian Revolution, Bolsheviks, Lenin, Stalin, Vardaan Learning Institute, Notes" />
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
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  margin: 0,
                  padding: '0 16px'
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
