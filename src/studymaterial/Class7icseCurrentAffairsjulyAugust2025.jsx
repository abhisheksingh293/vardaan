import React from 'react';

// --- Data Object ---
// All the information is structured here for easy management.
const currentAffairsData = {
  national: {
    title: 'National Affairs (India)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
    ),
    items: [
      {
        title: "New Education Policy (NEP) 2020 Updates",
        description: "The government announced the introduction of new skill development programs in schools, set to begin from the next academic session."
      },
      {
        title: "PM SVANidhi Scheme",
        description: "Continued support for street vendors, providing access to credit, subsidies, and digital transaction training. This is a significant boost for the informal economy and provides crucial livelihood support."
      },
      {
        title: "Ayushman Bharat Digital Health Mission",
        description: "It is now mandatory to record the Ayushman Bharat Health Account (ABHA) ID for all patient registrations to create a comprehensive national database of health records."
      },
      {
        title: "Goa Assembly Reservation",
        description: "The Lok Sabha passed a bill to reserve seats for Scheduled Tribes (ST) in the Goa Assembly, aiming for better political representation of the community."
      },
       {
        title: "Uttar Pradesh's Export Growth",
        description: "UP's exports reached ₹1.86 lakh crore, contributing approximately 5% to India's total exports of ₹37.02 lakh crore."
      },
      {
        title: "Growth in Remittances",
        description: "India received $135.46 billion in remittances, a ~14% year-on-year increase. These funds help offset the trade deficit and strengthen foreign exchange reserves."
      },
      {
        title: "National Turmeric Board",
        description: "A dedicated Turmeric Board was launched in Telangana to promote exports, support farmers, and fund research to increase the value of turmeric products."
      },
      {
        title: "Clean Ganga Mission",
        description: "The mission achieved a significant milestone with the successful cleaning of a major river stretch in Uttar Pradesh."
      },
       {
        title: "Vriksha Mahotsav 2025",
        description: "A nationwide tree plantation drive was launched in July to increase India's green cover."
      },
      {
        title: "Waste-to-Energy Guidelines",
        description: "The Ministry of New and Renewable Energy (MNRE) updated its guidelines to simplify project approvals and promote the generation of energy from waste."
      },
      {
        title: "Shivaji Maharaj Samudra Setu",
        description: "A new sea bridge connecting Mumbai with Navi Mumbai was inaugurated, drastically reducing travel time between the two cities."
      },
       {
        title: "New Fish Species Discovery",
        description: "A new freshwater fish species, 'Pethia dibrugarhensis', was discovered in the Brahmaputra River near Dibrugarh, Assam."
      },
      {
        title: "Digital India: 'BhashaNet' App",
        description: "A new real-time language translation app was launched to promote India's linguistic diversity."
      },
       {
        title: "Cryptocurrency Money Laundering",
        description: "The ED conducted raids in Delhi-NCR and Dehradun in a ~₹260 crore cyber fraud case where scammers posed as police and laundered money via crypto and hawala networks."
      }
    ],
  },
  international: {
    title: 'International Affairs & Defence',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    ),
    items: [
       {
        title: "India-Philippines Naval Exercise",
        description: "A joint 'Maritime Cooperative Activity (MCA)' was held in the South China Sea. Indian ships INS Mysore, INS Shakti, and INS Kiltan participated."
      },
      {
        title: "India-U.S. Relations",
        description: "Despite trade tensions from new U.S. tariffs, the two nations successfully launched the NISAR satellite, a joint mission to study climate change."
      },
      {
        title: "17th BRICS Summit",
        description: "Held in Rio de Janeiro, Brazil. Leaders of Brazil, Russia, India, China, and South Africa discussed economic cooperation and global issues."
      },
      {
        title: "Global Health Alert: Chikungunya",
        description: "The World Health Organization (WHO) issued an alert regarding the rapid global spread of the Chikungunya virus, a mosquito-borne disease."
      },
      {
        title: "G20 Summit Preparations",
        description: "As the host nation, India held several preparatory meetings in various cities throughout July and August for the upcoming G20 summit."
      },
    ],
  },
  science: {
    title: 'Science & Technology',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
    ),
    items: [
        {
        title: "Chandrayaan-4 Mission",
        description: "The Indian Space Research Organisation (ISRO) successfully completed the lander test for its fourth lunar mission, Chandrayaan-4."
      },
      {
        title: "India's First Hydrogen-Powered Train",
        description: "India successfully tested its first hydrogen-powered train, a significant leap towards clean energy and reducing carbon emissions."
      },
      {
        title: "'Krishi Sahayak' AI Chatbot",
        description: "The government launched an AI-powered chatbot to assist farmers with real-time information on crop management and weather forecasts."
      },
      {
        title: "New Blood Group Discovered",
        description: "A rare and new blood group antigen named 'CRIB' was discovered in a person in Bengaluru, a significant finding for transfusion medicine."
      },
      {
        title: "Solar Discovery",
        description: "Scientists discovered new, tiny plasma loops in the Sun's atmosphere, which will help in understanding solar magnetic energy."
      },
    ],
  },
  sports: {
    title: 'Sports',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.5 13.5 3.5-3.5a2.12 2.12 0 1 0-3-3l-3.5 3.5"></path><path d="m8.5 6.5-3.5 3.5a2.12 2.12 0 1 0 3 3l3.5-3.5"></path><path d="M14 12 12 14"></path><path d="M10 12 12 10"></path><path d="m7 17 5-5"></path><path d="m12 12 5-5"></path></svg>
    ),
    items: [
      {
        title: "World Athletics Championships",
        description: "Javelin thrower Neeraj Chopra won the gold medal at the World Athletics Championships held in Tokyo."
      },
      {
        title: "ICC Women's Cricket World Cup",
        description: "The Indian Women's Cricket Team had a stellar tournament, reaching the finals."
      },
      {
        title: "Khelo India Youth Games",
        description: "The games concluded in August, with Haryana emerging as the overall champion."
      },
      {
        title: "National Sports Day (August 29)",
        description: "The President of India conferred the National Sports Awards on the birth anniversary of hockey legend Major Dhyan Chand."
      },
    ],
  },
  importantDays: {
    title: 'Important Days & Events',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    ),
    items: [
      { date: "July 1", event: "National Doctor's Day" },
      { date: "July 11", event: "World Population Day" },
      { date: "July 26", event: "Kargil Vijay Diwas" },
      { date: "August 7", event: "National Handloom Day (Commemorates the launch of the Swadeshi Movement in 1905)" },
      { date: "August 9", event: "Quit India Movement Day" },
      { date: "August 12", event: "International Youth Day" },
      { date: "August 15", event: "79th Independence Day of India (Theme: 'Naya Bharat' - New India)" },
      { date: "August 29", event: "National Sports Day" },
    ],
  },
  personalities: {
    title: 'Key Personalities in News',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
    ),
    items: [
      { name: "Smt. Droupadi Murmu", role: "The President of India" },
      { name: "Shri Narendra Modi", role: "The Prime Minister of India" },
      { name: "Justice D.Y. Chandrachud", role: "The Chief Justice of India" },
      { name: "Dr. S. Somanath", role: "The Chairman of ISRO" },
    ],
  },
};

// --- Styles ---
const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: '#f1f5f9', // Slate 100
    color: '#1e293b', // Slate 800
    padding: '40px 60px',
    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ea580c\" fill-opacity=\"0.07\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'), radial-gradient(circle at 1% 1%, hsla(28, 100%, 90%, 0.4), transparent 50%), radial-gradient(circle at 99% 99%, hsla(210, 100%, 90%, 0.4), transparent 50%)",
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    letterSpacing: '-2px',
    background: 'linear-gradient(45deg, #f97316, #ea580c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subTitle: {
    fontSize: '1.25rem',
    color: '#64748b', // Slate 500
    marginTop: '8px',
  },
  section: {
    marginBottom: '60px',
  },
  sectionTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    color: '#d9480f', // Darker Orange
    marginBottom: '32px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e2e8f0', // Slate 200
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    backgroundColor: '#fff7ed', // Orange 50
    borderRadius: '50%',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#334155' // Slate 700
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '32px',
  },
  itemCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px) saturate(180%)',
    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '24px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
  },
  itemTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#0f172a', // Slate 900
    marginBottom: '8px',
  },
  itemDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#475569', // Slate 600
  },
  daysList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  dayItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '16px 24px',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'transform 0.2s ease',
  },
  dayDate: {
    background: 'linear-gradient(135deg, #fb923c, #f97316)',
    color: '#ffffff',
    padding: '10px 16px',
    borderRadius: '8px',
    fontWeight: '700',
    marginRight: '24px',
    minWidth: '120px',
    textAlign: 'center',
    fontSize: '0.9rem',
    boxShadow: '0 4px 8px rgba(234, 88, 12, 0.2)',
  },
  dayEvent: {
    fontSize: '1.1rem',
    color: '#1e293b',
    fontWeight: '500',
  },
  personalityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '32px',
  },
  personalityCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    textAlign: 'center',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease',
  },
  personalityName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 4px 0',
  },
  personalityRole: {
    fontSize: '1rem',
    color: '#f97316',
    fontWeight: '500',
    margin: '0',
  },
};

// --- Reusable Components ---

const AffairsSection = ({ title, icon, children }) => (
  <section style={styles.section}>
    <div style={styles.sectionTitleContainer}>
      <div style={styles.iconContainer}>{icon}</div>
      <h2 style={styles.sectionTitle}>{title}</h2>
    </div>
    <div>{children}</div>
  </section>
);

const AffairsItem = ({ title, description }) => (
  <div
    style={styles.itemCard}
    onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)';
    }}
    onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.1)';
    }}
  >
    <h3 style={styles.itemTitle}>{title}</h3>
    <p style={styles.itemDescription}>{description}</p>
  </div>
);

// --- Main App Component ---
export default function App() {
  const { national, international, science, sports, importantDays, personalities } = currentAffairsData;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Current Affairs Roundup</h1>
        <p style={styles.subTitle}>Key Events of July - August 2025</p>
      </header>

      <main>
        <AffairsSection title={national.title} icon={national.icon}>
          <div style={styles.grid}>
            {national.items.map((item, index) => (
              <AffairsItem key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </AffairsSection>

        <AffairsSection title={international.title} icon={international.icon}>
          <div style={styles.grid}>
            {international.items.map((item, index) => (
              <AffairsItem key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </AffairsSection>

        <AffairsSection title={science.title} icon={science.icon}>
          <div style={styles.grid}>
            {science.items.map((item, index) => (
              <AffairsItem key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </AffairsSection>
        
        <AffairsSection title={sports.title} icon={sports.icon}>
          <div style={styles.grid}>
            {sports.items.map((item, index) => (
              <AffairsItem key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </AffairsSection>

        <AffairsSection title={importantDays.title} icon={importantDays.icon}>
            <ul style={styles.daysList}>
                {importantDays.items.map((day, index) => (
                    <li key={index} style={styles.dayItem} onMouseEnter={e => {e.currentTarget.style.transform = 'scale(1.03)'}} onMouseLeave={e => {e.currentTarget.style.transform = 'scale(1)'}}>
                        <span style={styles.dayDate}>{day.date}</span>
                        <span style={styles.dayEvent}>{day.event}</span>
                    </li>
                ))}
            </ul>
        </AffairsSection>

        <AffairsSection title={personalities.title} icon={personalities.icon}>
            <div style={styles.personalityGrid}>
                {personalities.items.map((person, index) => (
                    <div key={index} style={styles.personalityCard} onMouseEnter={e => {e.currentTarget.style.transform = 'scale(1.05)'}} onMouseLeave={e => {e.currentTarget.style.transform = 'scale(1)'}}>
                        <h3 style={styles.personalityName}>{person.name}</h3>
                        <p style={styles.personalityRole}>{person.role}</p>
                    </div>
                ))}
            </div>
        </AffairsSection>
      </main>
    </div>
  );
}


