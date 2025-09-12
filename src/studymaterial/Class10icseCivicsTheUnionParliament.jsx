import React, { useState, useEffect, useRef } from 'react';
import Summerise from '../components/Summerise';

// Main App Component - The root of our application
const App = () => {
    // State to manage the visibility of the mobile Table of Contents
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // This component encapsulates the entire page structure
    return (
        <>
            {/* CSS styles are included directly for a self-contained component */}
            <style>{`
                /* General Reset & Base Styles */
                html, body { height: 100%; scroll-behavior: smooth; }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    overflow-x: hidden;
                }
                /* Main Container */
                .container {
                    max-width: 1200px; margin: 20px auto; background: white;
                    box-shadow: 0 0 30px rgba(0,0,0,0.1); border-radius: 15px;
                    transition: max-width 0.3s ease;
                    padding-top: 4rem;
                }
                /* Header Design */
                .header {
                    background: linear-gradient(135deg, #4c669f, #3b5998, #192f6a); color: white;
                    text-align: center; padding: 2.5rem; border-radius: 15px 15px 0 0;
                    position: relative; overflow: hidden;
                }
                .header::before {
                    content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 20px 20px; animation: move-dots 20s linear infinite; z-index: 0;
                }
                @keyframes move-dots { from { transform: translate(0,0); } to { transform: translate(-20px, -20px); } }
                .header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; position: relative; z-index: 1; }
                .header p { font-size: 1.2rem; opacity: 0.9; position: relative; z-index: 1; }
                /* Main Layout wrapper */
                .main-layout { display: grid; grid-template-columns: 280px 1fr; gap: 0; width: 100%; transition: grid-template-columns 0.3s ease; }
                /* --- TOC STYLES --- */
                .sidebar {
                    grid-column: 1; position: sticky; top: 20px; background: #fdfdff;
                    border-right: 1px solid #eef2f7; overflow-y: auto; height: calc(100vh - 40px);
                    z-index: 998; padding: 1.5rem 0; border-radius: 15px 0 0 15px;
                }
                .sidebar::-webkit-scrollbar { width: 6px; }
                .sidebar::-webkit-scrollbar-track { background: #f1f1f1; }
                .sidebar::-webkit-scrollbar-thumb { background: #ccc; border-radius: 6px; }
                .sidebar::-webkit-scrollbar-thumb:hover { background: #aaa; }
                .toc { padding: 0 1rem; }
                .toc h3 { color: #2c3e50; margin-bottom: 1.5rem; font-size: 1.1rem; padding-left: 0.5rem; font-weight: 600; }
                .toc > ul { list-style: none; padding: 0; }
                .toc > ul > li { margin-bottom: 0.5rem; }
                .toc-main-link {
                    color: #374151; text-decoration: none; padding: 0.85rem 1rem; display: block;
                    border-radius: 8px; transition: all 0.3s ease; font-size: 0.95rem; font-weight: 500;
                    position: relative; cursor: pointer;
                }
                .toc-main-link:hover { background: #f3f4f6; }
                .toc-main-link::after {
                    content: '>'; font-family: monospace; position: absolute; right: 1rem; top: 50%;
                    transform: translateY(-50%) rotate(0deg); transition: transform 0.3s ease; color: #9ca3af;
                }
                .toc > ul > li.active > .toc-main-link {
                    background: #2563eb; color: white; font-weight: 600;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                }
                .toc > ul > li.active > .toc-main-link::after { transform: translateY(-50%) rotate(90deg); color: white; }
                .toc-sub-list {
                    list-style: none; padding: 0; margin: 0.5rem 0 0.5rem 0.75rem; max-height: 0;
                    overflow: hidden; transition: max-height 0.4s ease-in-out; position: relative;
                }
                .toc-sub-list::before {
                    content: ''; position: absolute; top: 10px; bottom: 10px; left: 5px;
                    width: 1px; background-color: #e5e7eb;
                }
                .toc > ul > li.active > .toc-sub-list { max-height: 500px; }
                .toc-sub-list li { margin: 0; }
                .toc-sub-link {
                    color: #4b5563; text-decoration: none; padding: 0.6rem 1rem 0.6rem 1.75rem;
                    display: block; border-radius: 6px; transition: background 0.2s ease, color 0.2s ease;
                    font-size: 0.9rem; position: relative;
                }
                .toc-sub-link:hover { background-color: #eff6ff; color: #1e40af; }
                .toc-sub-link::before {
                    content: ''; position: absolute; left: 2px; top: 50%; transform: translateY(-50%);
                    width: 7px; height: 7px; border-radius: 50%; background-color: #d1d5db;
                    border: 2px solid #fdfdff; transition: background-color 0.3s ease;
                }
                .toc-sub-link.toc-sub-active { font-weight: 600; color: #1e3a8a; }
                .toc-sub-link.toc-sub-active::before { background-color: #2563eb; }
                /* Main Content Area */
                .main-content-area { grid-column: 2; min-width: 0; }
                .main-content { padding: 2rem; }
                .section {
                    margin-bottom: 3rem; padding: 1.5rem; background: white; border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-left: 4px solid #3498db;
                    transition: transform 0.3s ease;
                }
                .section:hover { transform: translateY(-2px); }
                .section h2 { color: #2c3e50; margin-bottom: 1rem; font-size: 1.8rem; border-bottom: 2px solid #ecf0f1; padding-bottom: 0.5rem; }
                .section h3 { color: #34495e; margin: 1.5rem 0 1rem 0; font-size: 1.4rem; }
                .section h4 { color: #555; margin: 1rem 0 0.5rem 0; font-size: 1.2rem; }
                .highlight-box { background: linear-gradient(135deg, #74b9ff, #0984e3); color: white; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #ffffff; }
                .note-box { background: #fff3cd; border: 1px solid #ffeaa7; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #fdcb6e; }
                .info-box { background-color: #e3f2fd; border: 1px solid #90caf9; border-radius: 0.5rem; padding: 1rem; margin-top: 1rem; margin-bottom: 1rem; color: #333; }
                .content-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0; }
                .feature-card { background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border: 1px solid #dee2e6; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
                .feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
                .qualification-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0; }
                .qualification-item { background: #e8f5e8; padding: 1rem; border-radius: 8px; border-left: 3px solid #27ae60; }
                ul, ol { margin: 1rem 0; padding-left: 2rem; }
                li { margin-bottom: 0.5rem; }
                .powers-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.1); }
                .powers-table th { background: #2d3436; color: white; padding: 1rem; text-align: left; }
                .powers-table td { padding: 1rem; border-bottom: 1px solid #dee2e6; }
                .powers-table tr:hover { background: #f8f9fa; }
                /* Responsive Buttons */
                .back-to-top, .mobile-toc-toggle-btn {
                    position: fixed; background: #3498db; color: white; border: none; border-radius: 50%;
                    width: 50px; height: 50px; cursor: pointer; display: flex; align-items: center;
                    justify-content: center; font-size: 1.5rem; transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }
                .back-to-top { bottom: 20px; right: 20px; z-index: 1000; opacity: 0; visibility: hidden; }
                .back-to-top.show { opacity: 1; visibility: visible; }
                .mobile-toc-toggle-btn { bottom: 20px; right: 20px; z-index: 1001; display: none; }
                .back-to-top:hover, .mobile-toc-toggle-btn:hover { background: #2980b9; transform: scale(1.1); }
                /* Mobile Overlay */
                .overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5);
                    z-index: 999; display: none; opacity: 0; transition: opacity 0.3s ease;
                }
                .overlay.active { display: block; opacity: 1; }
                /* --- RESPONSIVE STYLES --- */
                @media (min-width: 1400px) {
                    .container { max-width: 1360px; }
                    .main-layout { grid-template-columns: 320px 1fr; }
                }
                @media (max-width: 992px) { 
                    .main-layout { grid-template-columns: 1fr; }
                    .sidebar {
                        position: fixed; top: 0; left: -280px; height: 100vh; width: 280px;
                        transition: left 0.3s ease-in-out; border-radius: 0;
                        box-shadow: 4px 0 10px rgba(0,0,0,0.2); z-index: 1002;
                    }
                    .sidebar.active-mobile { left: 0; }
                    .main-content { padding: 1rem; }
                    .header h1 { font-size: 2rem; }
                    .section { padding: 1rem; }
                    .content-cards-grid, .qualification-grid { grid-template-columns: 1fr; }
                    .mobile-toc-toggle-btn { display: flex; }
                }
                @media (max-width: 480px) {
                    .container { margin: 10px; border-radius: 10px; }
                    .header { padding: 1.5rem; }
                    .header h1 { font-size: 1.5rem; }
                    .toc { padding: 1rem; }
                    .main-content { padding: 0.5rem; }
                    .section { padding: 0.75rem; }
                }
            `}</style>

            <div className="container">
                <Header />
                <div className="main-layout">
                    <TableOfContents isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={toggleMobileMenu} />
                    <MainContentArea />
                </div>
            </div>

            {/* Mobile Controls & Back to Top Button */}
            <MobileTocToggleBtn toggleMobileMenu={toggleMobileMenu} />
            <Overlay active={isMobileMenuOpen} onClick={toggleMobileMenu} />
            <BackToTopBtn />
        </>
    );
};

// Component for the page header
const Header = () => (
    <div className="header">
        <h1>Federal Setup and Parliament of India</h1>
        <p>Complete Guide to India's Constitutional Framework</p>
    </div>
);

// Table of Contents (Sidebar) Component
const TableOfContents = ({ isMobileMenuOpen, closeMobileMenu }) => {
    // State for managing active TOC sections
    const [activeAccordion, setActiveAccordion] = useState('federal-setup');
    const [activeSubLink, setActiveSubLink] = useState('');
    const sidebarRef = useRef(null);

    // Effect for scroll spying functionality
    useEffect(() => {
        // Gather all elements that have an ID to be observed
        const sectionsToObserve = document.querySelectorAll('section[id], div[id]');
        
        // Configuration for the Intersection Observer
        const observerOptions = {
            root: null, // observes intersections relative to the viewport
            rootMargin: '0px 0px -50% 0px', // Triggers when the top half of the element is in view
            threshold: 0,
        };

        const observer = new IntersectionObserver(entries => {
            // Filter for sections that are currently intersecting (visible)
            const visibleSections = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            // If there are visible sections, update the TOC
            if (visibleSections.length > 0) {
                // The "current" section is the one closest to the top of the viewport
                const currentActiveId = visibleSections[0].target.id;
                
                // Find the corresponding link in the TOC
                const activeLink = document.querySelector(`.toc a[href="#${currentActiveId}"]`);
                if (activeLink) {
                    const parentLi = activeLink.closest('.toc > ul > li');
                    const mainLinkHref = parentLi?.querySelector('.toc-main-link')?.getAttribute('href')?.substring(1);

                    // Update state for the main accordion section
                    if (mainLinkHref) {
                         setActiveAccordion(prev => (prev !== mainLinkHref ? mainLinkHref : prev));
                    }

                    // Update state for the active sub-link
                    if(activeLink.classList.contains('toc-sub-link')){
                         setActiveSubLink(currentActiveId);
                    } else {
                         setActiveSubLink(''); // It's a main link, not a sub-link
                    }
                }
            }
        }, observerOptions);

        // Start observing each section
        sectionsToObserve.forEach(section => {
            if (section.id) observer.observe(section);
        });
        
        // Cleanup function: stop observing when the component unmounts
        return () => sectionsToObserve.forEach(section => {
            if (section.id) observer.unobserve(section);
        });
    }, []); // Empty dependency array ensures this effect runs only once on mount
    
    // Effect to scroll the active link into view within the sidebar
    useEffect(() => {
        const activeLinkElement = sidebarRef.current?.querySelector('.toc-sub-active');
        if (activeLinkElement && sidebarRef.current) {
            activeLinkElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [activeSubLink]); // This effect runs whenever the active sub-link changes

    // Handler for clicking a TOC link
    const handleTocClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close the mobile menu on navigation
        if (window.innerWidth <= 992) {
            closeMobileMenu();
        }
    };
    
    // Handler for expanding/collapsing main TOC sections
    const handleAccordionClick = (sectionId) => {
        setActiveAccordion(prev => (prev === sectionId ? null : sectionId));
    };

    // Data structure for the Table of Contents
    const tocItems = [
        { id: 'federal-setup', title: '1.0 Federal Setup', sub: [
            { id: 'meaning-federal', title: '1.1 Meaning & Importance' },
            { id: 'federal-features', title: '1.2 Federal Features' },
            { id: 'strong-central', title: '1.3 Strong Central Government' },
        ]},
        { id: 'union-parliament', title: '2.0 Union Parliament', sub: [
            { id: 'parliament-components', title: '2.1 Components' },
        ]},
        { id: 'lok-sabha', title: '3.0 Lok Sabha', sub: [
            { id: 'lok-sabha-composition', title: '3.1 Composition' },
            { id: 'lok-sabha-qualifications', title: '3.2 Qualifications' },
            { id: 'lok-sabha-oath', title: '3.3 Oath or Affirmation' },
            { id: 'lok-sabha-vacation', title: '3.4 Vacation of Seats' },
            { id: 'lok-sabha-quorum', title: '3.5 Quorum Rules' },
            { id: 'lok-sabha-salary', title: '3.6 Salary & Facilities' },
            { id: 'lok-sabha-languages', title: '3.7 Languages in Parliament' },
            { id: 'lok-sabha-courtesy', title: '3.8 Parliamentary Courtesy' },
            { id: 'leader-opposition', title: '3.9 Leader of Opposition' },
        ]},
        { id: 'speaker', title: '4.0 Speaker of Lok Sabha', sub: [
            { id: 'speaker-intro', title: '4.1 Introduction' },
            { id: 'speaker-election', title: '4.2 Election' },
            { id: 'speaker-tenure', title: '4.3 Tenure' },
            { id: 'speaker-removal', title: '4.4 Removal' },
            { id: 'speaker-panel', title: '4.5 Panel of Chairpersons' },
            { id: 'speaker-current', title: '4.6 Current Speaker' },
            { id: 'speaker-powers', title: '4.7 Powers & Functions' },
        ]},
        { id: 'rajya-sabha', title: '5.0 The Rajya Sabha', sub: [
            { id: 'rajya-sabha-intro', title: '5.1 Introduction' },
            { id: 'rajya-sabha-composition', title: '5.2 Composition' },
            { id: 'rajya-sabha-qualifications', title: '5.3 Qualifications' },
            { id: 'rajya-sabha-disqualifications', title: '5.4 Disqualifications' },
            { id: 'rajya-sabha-term', title: '5.5 Term of the House' },
            { id: 'rajya-sabha-presiding', title: '5.6 Presiding Officers' },
            { id: 'rajya-sabha-quorum', title: '5.7 Quorum' },
        ]},
        { id: 'powers-functions', title: '6.0 Powers of Parliament', sub: [
             { id: 'legislative-powers', title: '6.1 Legislative' },
             { id: 'financial-powers', title: '6.2 Financial' },
             { id: 'executive-powers', title: '6.3 Executive' },
             { id: 'electoral-judicial-amendment-powers', title: '6.4 Other Powers' },
             { id: 'other-powers', title: '6.5 Other Functions' },
        ]},
        { id: 'parliamentary-privileges', title: '7.0 Privileges' , sub: []},
        { id: 'exclusive-powers', title: '8.0 Exclusive Powers', sub: []},
        { id: 'parliamentary-procedures', title: '9.0 Procedures', sub: [
             { id: 'sessions', title: '9.1 Sessions' },
             { id: 'president-address', title: '9.2 President\'s Address' },
             { id: 'question-hour', title: '9.3 Question Hour' },
             { id: 'zero-hour', title: '9.4 Zero Hour' },
             { id: 'adjournment-motion', title: '9.5 Adjournment Motion' },
             { id: 'no-confidence-motion', title: '9.6 No-Confidence Motion' },
             { id: 'confidence-motion', title: '9.7 Confidence Motion' },
             { id: 'key-differences', title: '9.8 Key Differences' },
        ]},
        { id: 'legislative-procedure', title: '10.0 Legislative Procedure', sub: [
            { id: 'bill-vs-act', title: '10.1 Bill vs. Act' },
            { id: 'types-of-bills', title: '10.2 Types of Bills' },
        ]},
        { id: 'constitutional-amendment', title: '11.0 Constitution Amendment', sub: [] },
    ];
    
    return (
        <div id="sidebar" className={`sidebar ${isMobileMenuOpen ? 'active-mobile' : ''}`} ref={sidebarRef}>
            <div className="toc">
                <h3>Table of Contents</h3>
                <ul>
                    {tocItems.map(item => (
                        <li key={item.id} className={activeAccordion === item.id ? 'active' : ''}>
                            <a href={`#${item.id}`} className="toc-main-link" onClick={(e) => { 
                                // For main links with sub-items, handle accordion toggle
                                if (item.sub.length > 0) { e.preventDefault(); handleAccordionClick(item.id); } 
                                // For main links without sub-items, handle smooth scroll
                                else { handleTocClick(e, `#${item.id}`); }
                            }}>
                                {item.title}
                            </a>
                            {item.sub.length > 0 && (
                                <ul className="toc-sub-list">
                                    {item.sub.map(subItem => (
                                        <li key={subItem.id}>
                                            <a href={`#${subItem.id}`} className={`toc-sub-link ${activeSubLink === subItem.id ? 'toc-sub-active' : ''}`} onClick={(e) => handleTocClick(e, `#${subItem.id}`)}>
                                                {subItem.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


// Main Content Area Component
const MainContentArea = () => (
    <div className="main-content-area">
        <div className="main-content">
            <ContentSections />
        </div>
    </div>
);


// Component containing all the detailed content sections
const ContentSections = () => (
    <>
        <section id="federal-setup" className="section">
            <h2>1. Federal Setup in India</h2>
            
            <div className="section-image-container">
                <img src="/Union Parliament/Federal Features of the Indian Constitution.png" style={{width: "100%", height: "auto"}}
                     alt="Federal Features of the Indian Constitution" 
                     className="section-image"
                     onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }}/>
            </div>
            
            <div id="meaning-federal">
                <h3>1.1 Meaning & Importance of a Federal Setup</h3>
                <div className="highlight-box"><p>A federal setup in India signifies a dual government system involving:</p><ul><li>The national government (Union Government)</li><li>Governments of the individual states (State Governments)</li></ul><p>The Indian Constitution designates India as "a Union of States."</p></div>
                <p>In a federal system, legislative, executive, and financial powers are distributed between the Union and the States.</p><h4>Importance of a Federal Setup</h4><ul><li>Federation is perceived as a method to maintain unity in countries characterized by diverse regions, religions, customs, and languages.</li><li>For India, a federal setup was recommended as early as 1928 by the Motilal Nehru Report, due to the linguistic and cultural differences across various regions.</li></ul>
            </div>
            <div id="federal-features">
                <h3>1.2 Federal Features of the Indian Constitution</h3>
                <div className="content-cards-grid"><div className="feature-card"><h4>1. Dual Government</h4><p>India operates with a Union Government for the entire country and State Governments for individual states. Every citizen is subject to laws from both their State and the Central Government.</p></div><div className="feature-card"><h4>2. Division of Powers</h4><p>Legislative, administrative, and financial powers are divided between the Union and State governments. Subjects of national importance are managed by the national government, while subjects of local importance are managed by State governments.</p></div><div className="feature-card"><h4>3. Supremacy of the Constitution</h4><p>Both the Central and State Governments derive their authority from the Constitution. State Governments largely function independently of the Central Government in areas specifically assigned to them.</p></div><div className="feature-card"><h4>4. Supreme Court as Guardian</h4><p>The Supreme Court is responsible for resolving disputes between governments and ensures that neither the Centre nor the States exceed their constitutionally defined limits.</p></div></div>
            </div>
            <div id="strong-central">
                <h3>1.3 A Federation with a Strong Central Government (Peculiar Features of Indian Federation)</h3>
                <div className="section-image-container">
                    <img src="/Union Parliament/Central government powers.png" style={{width: "100%", height: "auto"}}
                         alt="Central government powers" 
                         className="section-image"
                         onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }}/>
                </div>
                <p>India's federal system includes certain unique characteristics that grant the Central Government enhanced powers:</p>
                <div className="note-box"><h4>Peculiar Features:</h4><ol><li>Parliament's Wide Scope of Legislation: Parliament possesses extensive law-making authority. Under specific circumstances (e.g., during a Proclamation of Emergency), Parliament can enact laws on subjects typically reserved for the State List.</li><li>President's Rule: If President's Rule is imposed in a state, the State Legislative Assembly may be dissolved or suspended. In such scenarios, the Parliament assumes the powers of the State Legislature.</li><li>Alter State Boundaries: Parliament has the power to alter state names/boundaries and create new states.</li></ol></div>
            </div>
        </section>
        
        <section id="union-parliament" className="section">
            <h2>2. The Union Parliament</h2>
            <div className="section-image-container">
                <img src="/Union Parliament/Union Parliament.png" style={{width: "80%", height: "auto"}}
                     alt="Union Parliament" 
                     className="section-image"
                     onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }}/>
            </div>
            <div id="parliament-components">
                <h3>2.1 Components of Indian Parliament</h3>
                <div className="highlight-box"><p>The Union Parliament comprises the President and two Houses: the Lok Sabha and the Rajya Sabha. The Union Parliament is considered incomplete without the President, as a Bill passed by Parliament cannot become law without the President's approval.</p><ul><li>President</li><li>Lok Sabha (House of the People)</li><li>Rajya Sabha (Council of States)</li></ul></div>
            </div>
        </section>

        <section id="lok-sabha" className="section">
            <h2>3. Lok Sabha</h2>
            <div className="section-image-container">
                <img src="/Union Parliament/lok sabha.avif" style={{width: "100%", height: "auto"}} alt="Image of the Indian Parliament Building" className="section-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }} />
            </div>
            <div id="lok-sabha-composition">
                <h3>3.1 Composition</h3>
                <div className="feature-card"><ul><li>Maximum Strength: The Lok Sabha can have a maximum of 550 members (as per Article 81).</li><li>Members from States: 530 members are chosen by direct election from specific geographical areas (territorial constituencies) within the Indian States.</li><li>Members from Union Territories: Up to 20 members can be elected from the Union Territories.</li><li>Anglo-Indian Nomination (Discontinued): Previously, the President had the power to nominate two members from the Anglo-Indian community (as per Article 331). This provision has now been discontinued.</li></ul></div>
                <div className="note-box"><strong>NOTE:</strong> This provision was abolished by the 104th Amendment Act. Currently, the strength of the Lok Sabha is 543 MPs directly elected by the people of India. The allocation of Members to the various states is roughly based on population. Seats are reserved for Scheduled Tribes (ST) and Scheduled castes (SC). Every citizen of India who is 18 years of age or older has the right to vote in elections.</div>
            </div>
            <div id="lok-sabha-qualifications">
                <h3>3.2 Qualifications for Membership</h3>
                <p>To be a member of the Lok Sabha, a person must:</p>
                <div className="qualification-grid"><div className="qualification-item">Be a citizen of India</div><div className="qualification-item">Be at least 25 years old</div><div className="qualification-item">Possess other qualifications as prescribed by Parliament</div><div className="qualification-item">Be registered as a voter in any Parliamentary constituency</div><div className="qualification-item">Not hold any office of profit under the Government</div><div className="qualification-item">Not be of unsound mind</div><div className="qualification-item">Not be an undischarged insolvent</div><div className="qualification-item">Not be disqualified by any law of Parliament</div></div>
                <div className="note-box"><h4>Important Rules:</h4><ul><li>No person shall simultaneously be a member of both Houses of Parliament. If an individual is elected to both the Lok Sabha and the Rajya Sabha, they must choose one and resign from the other.</li><li>A person cannot simultaneously be a member of Parliament and a member of a House of the Legislature of a State. If elected to both, they must choose one and vacate the other seat.</li><li>Expulsion: Both Houses of the Indian Parliament possess the authority to expel a member whose conduct has undermined the dignity of the House.</li></ul></div>
            </div>
            <div id="lok-sabha-oath">
                <h3>3.3 Oath or Affirmation by Members</h3>
                <div className="info-box"><p>Every Member of the Lok Sabha and the Rajya Sabha is required to take an oath or make an affirmation before assuming their seat. The oath includes the following commitments:</p><ol><li>Loyalty to the Constitution of India</li><li>To uphold India's sovereignty and integrity</li><li>To faithfully discharge their duties</li></ol></div>
            </div>
            <div id="lok-sabha-vacation">
                <h3>3.4 Vacation of Seats</h3>
                <div className="info-box"><p>A member's seat becomes vacant if:</p><ul><li>Resignation: A written submission is made to the Speaker/Chairman</li><li>Absence: The member skips all meetings for 60 or more days without permission</li><li>Disqualification: Due to Constitutional/Parliamentary violations or defection</li></ul></div>
            </div>
            <div id="lok-sabha-quorum">
                <h3>3.5 Quorum Rules</h3>
                <div className="info-box"><ul><li>Minimum required: 10% of the total members (e.g., 55 out of 543 in Lok Sabha)</li><li>Process:<ul><li>Quorum is presumed unless challenged</li><li>If challenged: Bell rings &rarr; Members are counted</li><li>If insufficient: House is adjourned</li></ul></li></ul></div>
            </div>
            <div id="lok-sabha-salary">
                <h3>3.6 Salary & Facilities for MPs</h3>
                <div className="info-box"><ul><li>Salary/Allowances: Fixed by Parliament and revised periodically</li><li>Key Perks:<ul><li>Constituency & Office Allowance</li><li>MPLADS Fund: ₹5 crore/year (since 2011) for local development</li></ul></li></ul></div>
            </div>
            <div id="lok-sabha-languages">
                <h3>3.7 Languages in Parliament</h3>
                <div className="info-box"><ul><li>Official: Hindi/English</li><li>Exception: The Speaker/Chairman may permit the use of a member's mother tongue if they face difficulty with Hindi/English</li></ul></div>
            </div>
            <div id="lok-sabha-courtesy">
                <h3>3.8 Parliamentary Courtesy</h3>
                <div className="info-box"><ul><li>Members are expected not to leave immediately after speaking</li><li>They are to resume their seats post-speech and exit only if absolutely necessary</li></ul></div>
            </div>
            <div id="leader-opposition">
                <h3>3.9 Leader of Opposition</h3>
                <div className="feature-card"><h4>Role & Importance</h4><ul><li>Constitutional Significance: Crucial for a healthy parliamentary democracy</li><li>Function: Represents the opposition's voice, holds the government accountable, and participates in key committees (e.g., Public Accounts Committee)</li></ul><h4>Eligibility Criteria</h4><ul><li>Recognition as Parliamentary Party: A party must hold at least 10% of the total seats in either the Lok Sabha or Rajya Sabha</li><li>Example: 55 seats in the Lok Sabha (10% of 543)</li><li>Largest Opposition Party: The leader of the largest qualifying party becomes the Leader of Opposition (LoP)</li></ul><h4>Status & Privileges</h4><ul><li>Equivalent to Union Cabinet Minister: In terms of rank, salary, and protocol (as granted by The Leaders of Opposition in Parliament Act, 1977)</li><li>Special Rights: Included in high-level delegations and statutory committees</li></ul><h4>Recent Examples</h4><div className="powers-table-container" style={{overflowX:"auto"}}><table className="powers-table"><thead><tr><th>Lok Sabha</th><th>Congress Seats</th><th>Status</th><th>Leader of Opposition</th></tr></thead><tbody><tr><td>16th (2014)</td><td>44 seats</td><td>Below 10% - Opposition Group</td><td>No LoP</td></tr><tr><td>17th (2019)</td><td>52 seats</td><td>Below 10% - Opposition Group</td><td>No LoP</td></tr><tr><td>18th (2024)</td><td>99 seats</td><td>Above 10%</td><td>Rahul Gandhi (LoP), Gaurav Gogoi (Deputy Leader)</td></tr></tbody></table></div><h4>Challenges</h4><ul><li>No LoP if Opposition Fragmented: If no single party meets the 10% threshold (e.g., 2014-2019), the LoP post remains vacant.</li><li>Impact on Democracy: A weak opposition can diminish checks on executive power.</li></ul></div>
            </div>
        </section>

        <section id="speaker" className="section">
            <h2>4.0 Speaker of the Lok Sabha</h2>
            <div className="section-image-container">
                <img src="/Union Parliament/Speaker Role and Responsibilities.png" style={{width: "100%", height: "auto"}} alt="Speaker Role and Responsibilities" className="section-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }} />
            </div>
            <div id="speaker-intro">
                <h3>4.1 Introduction</h3>
                <div className="feature-card"><ul><li>The Speaker serves as the Principal Presiding Officer of the Lok Sabha.</li><li>Elected from among the members of the Lok Sabha.</li><li>Plays a crucial role in maintaining order, discipline, and the smooth conduct of the House.</li></ul></div>
            </div>
            <div id="speaker-election">
                <h3>4.2 Election of the Speaker</h3>
                <div className="feature-card mt-4"><ul><li>Elected by the House from among its members.</li><li>Chosen by a simple majority of members who are present and voting.</li><li>Generally elected immediately after the formation of a new Lok Sabha.</li></ul></div>
            </div>
            <div id="speaker-tenure">
                <h3>4.3 Tenure of the Speaker</h3>
                <div className="feature-card mt-4"><ul><li>Holds office until:<ul><li>He/she resigns.</li><li>He/she ceases to be a member of the Lok Sabha.</li><li>Or is removed by the House.</li></ul></li><li>Does not vacate office when the Lok Sabha is dissolved – continues until the first meeting of the newly elected House.</li></ul></div>
            </div>
            <div id="speaker-removal">
                <h3>4.4 Removal of the Speaker</h3>
                <div className="feature-card mt-4"><ul><li>Can be removed by a resolution passed by a majority of all the then members of the Lok Sabha.</li><li>A 14-day notice must be given for such a resolution.</li><li>The Speaker can resign by writing to the Deputy Speaker.</li></ul></div>
            </div>
            <div id="speaker-panel">
                <h3>4.5 Panel of Chairpersons</h3>
                <div className="feature-card mt-4"><ul><li>In the absence of both the Speaker and Deputy Speaker, any one of the six members from the Panel of Chairpersons presides.</li><li>The panel is nominated by the Speaker.</li></ul></div>
            </div>
            <div id="speaker-current">
                <h3>4.6 Current Speaker - Om Birla</h3>
                <div className="info-box"><ul><li>Elected on 19 June 2019 (17th Lok Sabha) and again on 26 June 2024 (18th Lok Sabha).</li><li>First Speaker to be re-elected from Rajasthan and served as Speaker for two consecutive terms.</li><li>Presided over discussions on important issues such as:<ul><li>Women's Reservation Bill</li><li>Removal of Article 370 (Special Status of J&K)</li></ul></li></ul></div>
            </div>
            <div id="speaker-powers">
                <h3>4.7 Powers and Functions of the Speaker</h3>
                <div className="feature-card"><h4>A. Regulating Debates and Proceedings:</h4><ul><li>Presides over meetings of the House.</li><li>All speeches and remarks are addressed solely to the Speaker.</li><li>Decides the admissibility of questions, motions, and resolutions.</li><li>Ensures bills passed by the Lok Sabha are authenticated with his/her signature.</li><li>Decides whether a Bill is a Money Bill or not; this decision is final.</li><li>The Speaker will not vote until the votes become equal.</li></ul></div>
                <div className="feature-card mt-4"><h4>B. Disciplinary Functions (Maintaining Order):</h4><ul><li>Maintains order and decorum in the House.</li><li>Can suspend a member for disorderly conduct.</li><li>In cases of grave disorder, the Speaker can adjourn the House.</li><li>Can remove offensive or unparliamentary words from the record.</li><li>Decides whether an issue constitutes a breach of privilege or contempt of the House (prima facie).</li></ul></div>
                <div className="feature-card mt-4"><h4>C. Administrative Functions:</h4><ul><li>Communicates decisions of the House to the concerned authorities.</li><li>Appoints and controls House Secretariat staff.</li><li>Issues passes to visitors, media, and others for attending the House.</li></ul></div>
                <div className="feature-card mt-4"><h4>D. Parliamentary Committees:</h4><ul><li>The Speaker is the ex-officio Chairperson of important committees like: Business Advisory Committee, Rules Committee.</li><li>Appoints Chairpersons and members of various committees.</li><li>Decides on claims of government secrecy over documents.</li></ul></div>
                <div className="feature-card mt-4"><h4>E. Under the Anti-Defection Law:</h4><ul><li>Decides the disqualification of members under the 10th Schedule (Anti-Defection Act, 1985).</li><li>The Speaker's decision on disqualification is final and binding.</li><li>A disqualified member cannot be re-elected until a certain time.</li></ul></div>
                <div className="feature-card mt-4"><h4>F. Other Powers and Responsibilities:</h4><ul><li>Presides over Joint Sessions of both Houses of Parliament.</li><li>Can consult with the Chairman of the Rajya Sabha for delegations.</li><li>Recognizes Parliamentary Parties and Groups in the House.</li></ul></div>
                <div className="info-box mt-4"><h4>Position of the Speaker</h4><ul><li>A position of great dignity, neutrality, and authority.</li><li>Represents the nation's democratic values.</li><li>Seen as impartial and expected to rise above party politics.</li><li>Quote: "Once elected, the Speaker belongs to all the members of the House and not to any party."</li></ul></div>
            </div>
        </section>

        <section id="rajya-sabha" className="section">
            <h2>5.0 The Rajya Sabha</h2>
            <div className="section-image-container">
                <img src="/Union Parliament/rajya sabha.jpg" style={{width: "100%", height: "auto"}} alt="Rajya Sabha" className="section-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }} />
            </div>
            <div id="rajya-sabha-intro">
                <h3>5.1 Introduction</h3>
                <div className="feature-card"><ul><li>The Rajya Sabha is the Second Chamber of the Indian Parliament.</li><li>Also referred to as the Upper House.</li><li>Unlike the Lok Sabha, which can be dissolved, the Rajya Sabha is a permanent body and not subject to dissolution.</li></ul></div>
            </div>
            <div id="rajya-sabha-composition">
                <h3>5.2 Composition of Rajya Sabha</h3>
                <div className="feature-card mt-4"><ul><li>Total strength: Not more than 250 members.<ul><li>12 nominated by the President.</li><li>238 elected members from states and union territories.</li></ul></li></ul></div>
            </div>
            <div id="rajya-sabha-nominated">
                <h4>A. Nominated Members (12)</h4>
                <div className="feature-card mt-4"><ul><li>Nominated by the President of India.</li><li>Chosen from individuals possessing special knowledge or practical experience in: Literature, Science, Art, Social Service.</li><li>Examples of nominated personalities: Ms. Rekha (actress), Dr. Bimal Jalan (economist), Sachin Tendulkar (cricketer), PT Usha, Ilaiyaraaja, Swapan Dasgupta, H. Heggade.</li><li>These individuals are nominated to ensure that unique voices and expert opinions are represented in the House.</li></ul></div>
            </div>
            <div id="rajya-sabha-elected">
                <h4>B. Elected Members</h4>
                <div className="feature-card mt-4"><ul><li>Represent the States and Union Territories.</li><li>The number of seats per state is not equal, but is determined based on the population.</li><li>Examples:<ul><li>Uttar Pradesh = 31 seats</li><li>Delhi = 3 seats</li><li>Puducherry = 1 seat</li><li>Jammu & Kashmir will have seats decided after Legislative Assembly elections are held.</li></ul></li></ul></div>
            </div>
            <div id="rajya-sabha-election-manner">
                <h4>Manner of Election</h4>
                <div className="feature-card mt-4"><ul><li>Members are elected by the elected members of each State Legislative Assembly.</li><li>This process uses: The Proportional Representation System, by means of Single Transferable Vote (STV).</li><li>Union Territory members are chosen as per rules established by Parliament.</li><li>In 2003, Parliament introduced the Open Ballot System for Rajya Sabha elections (replacing the secret ballot) to mitigate corruption.</li></ul></div>
            </div>
            <div id="rajya-sabha-effective-strength">
                <h4>Effective Strength</h4>
                <div className="feature-card mt-4"><ul><li>Currently: 245 members.<ul><li>233 elected.</li><li>12 nominated.</li></ul></li></ul></div>
            </div>
            <div id="rajya-sabha-qualifications">
                <h3>5.3 Qualifications for Membership (Very Important - 3 Marks Q)</h3>
                <p>A person must:</p>
                <div className="qualification-grid"><div className="qualification-item">Be a citizen of India</div><div className="qualification-item">Be at least 30 years old</div><div className="qualification-item">Possess qualifications as prescribed by law</div><div className="qualification-item">Domicile requirement removed in 2003</div></div>
            </div>
            <div id="rajya-sabha-disqualifications">
                <h3>5.4 Disqualifications for Membership</h3>
                <p>A person will be disqualified if he/she:</p>
                <div className="qualification-grid"><div className="qualification-item">Holds an office of profit under the Government</div><div className="qualification-item">Is of unsound mind</div><div className="qualification-item">Is an undischarged insolvent</div><div className="qualification-item">Is an alien (foreigner)</div><div className="qualification-item">Is disqualified by any law of Parliament</div></div>
            </div>
            <div id="rajya-sabha-term">
                <h3>5.5 Term of the House</h3>
                <div className="feature-card mt-4"><ul><li>The Rajya Sabha is a permanent body and cannot be dissolved.</li><li>It operates similarly to the American Senate.</li><li>Every 2 years, 1/3rd of its members retire.</li><li>Each member serves for a 6-year term.</li></ul></div>
            </div>
            <div id="rajya-sabha-presiding">
                <h3>5.6 Presiding Officers</h3>
                <div className="feature-card mt-4"><ul><li>Chairman of Rajya Sabha: The Vice-President of India is the ex-officio Chairman of the Rajya Sabha. He is not a member of the Rajya Sabha. Cannot vote, except to break a tie.</li><li>Deputy Chairman: Elected by the Rajya Sabha itself from among its members. Presides over sittings in the absence of the Chairman or when the Vice-President is acting as President.</li></ul></div>
            </div>
            <div id="rajya-sabha-quorum">
                <h3>5.7 Quorum</h3>
                <div className="info-box"><ul><li>Quorum = 1/10th of total strength.</li><li>If quorum is not met, the meeting is adjourned or suspended.</li></ul></div>
            </div>
        </section>
        
        <section id="powers-functions" className="section">
            <h2>6.0 Powers and Functions of the Union Parliament</h2>
            <div className="section-image-container">
                <img src="/Union Parliament/Power of the Indian Parliament.png" style={{width: "100%", height: "auto"}} alt="Power of the Indian Parliament" className="section-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }} />
            </div>
            <div className="info-box"><h4>Introduction</h4><ul><li>The Parliament of India is not merely a law-making body.</li><li>It is a multi-functional institution that performs legislative, financial, executive, electoral, judicial, and amendment-related functions.</li><li>The Constitution makers intended the Lok Sabha to be the dominant chamber, as it is directly elected by the people.</li></ul></div>
            <div id="legislative-powers">
                <h3>6.1 Legislative Powers</h3>
                <p>Parliament has the power to make laws on:</p>
                <div className="feature-card"><h4>(i) Union List & Concurrent List</h4><ul><li>Parliament has exclusive power to make laws on subjects enumerated in the Union List.</li><li>It also enacts laws on subjects in the Concurrent List (powers shared with States).</li><li>In the event of a conflict, the law made by Parliament will prevail.</li></ul></div>
                <div className="feature-card mt-4"><h4>(ii) Residuary Powers</h4><ul><li>Parliament can make laws on subjects not explicitly listed in any of the three lists (Union, State, Concurrent).</li><li>These powers are known as Residuary Powers.</li></ul></div>
                <div className="feature-card mt-4"><h4>(iii) State List - in special cases only</h4><p>Parliament can legislate even on State List subjects under three specific conditions:</p><ul><li>a) National Interest: If the Rajya Sabha passes a resolution (with a 2/3rd majority) declaring that the subject is of national importance, Parliament can make laws.</li><li>b) States Requesting: If two or more states request Parliament to legislate on a State subject.</li><li>c) During Emergency: During a National Emergency, Parliament can legislate on all subjects, including those in the State List.</li><li>d) Ordinances: When Parliament is not in session, the President can issue Ordinances (temporary laws). These must be approved within 6 weeks of the reassembly of Parliament.</li></ul></div>
            </div>
            <div id="financial-powers">
                <h3>6.2 Financial Powers (Control over National Finance)</h3>
                <p>Parliament controls all financial matters of the government.</p>
                <div className="feature-card"><h4>(i) Money Bills</h4><ul><li>Can be introduced only in the Lok Sabha.</li><li>After passing, it is sent to the Rajya Sabha for suggestions only.</li><li>The Lok Sabha can accept or reject those suggestions.</li><li>The Rajya Sabha must return the Bill within 14 days.</li></ul></div>
                <div className="feature-card mt-4"><h4>(ii) The Budget</h4><ul><li>The Union Budget is presented in the Lok Sabha.</li><li>Contains estimated receipts and expenditure of the government.</li><li>The Budget is now presented as a single document (General + Railway merged in 2017).</li></ul></div>
                <div className="feature-card mt-4"><h4>(iii) Supplementary Grants</h4><ul><li>If budgeted funds are insufficient, Parliament can approve extra funds through supplementary grants.</li></ul></div>
                <div className="feature-card mt-4"><h4>(iv) Vote on Account</h4><ul><li>Used when the new budget is not passed by April 1st.</li><li>It allows the government to continue spending temporarily.</li></ul></div>
                <div className="feature-card mt-4"><h4>(v) Salaries and allowances</h4><ul><li>Salaries and allowances for Members of Parliament (MPs), Ministers, and Judges of the Supreme Court and High Courts are determined by Parliament from time to time.</li></ul></div>
            </div>
            <div id="executive-powers">
                <h3>6.3 Executive Powers (Control over the Council of Ministers)</h3>
                <div className="feature-card"><h4>(i) Collective Responsibility</h4><ul><li>The Council of Ministers is collectively responsible to the Lok Sabha.</li></ul></div>
                <div className="feature-card mt-4"><h4>(ii) No-Confidence Motion</h4><ul><li>The Lok Sabha can remove the Council of Ministers by passing a No-Confidence Motion.</li><li>If passed, the entire government must resign.</li></ul></div>
                <div className="feature-card mt-4"><h4>(iii) Question Hour</h4><ul><li>The first hour of Parliament is dedicated to questioning ministers.</li><li>Used to obtain information or raise public issues.</li><li>Keeps ministers alert and accountable.</li></ul></div>
                <div className="feature-card mt-4"><h4>(iv) Adjournment Motion</h4><ul><li>Can be moved in the Lok Sabha only.</li><li>Used to discuss urgent issues or failures of the government.</li></ul></div>
                <div className="feature-card mt-4"><h4>(v) Censure Motion</h4><ul><li>Passed to criticize or disapprove government policy or action.</li><li>May lead to the resignation of ministers.</li></ul></div>
                <div className="feature-card mt-4"><h4>(vi) Monetary Controls</h4><ul><li>When the Budget is under consideration, a Cut Motion may be moved.</li><li>There are three kinds of Cut Motions.</li></ul></div>
            </div>
            <div id="electoral-judicial-amendment-powers">
                <h3>6.4 Electoral, Judicial & Amendment Powers</h3>
                <div className="feature-card"><h4>Electoral Powers</h4><p>Parliament is involved in:</p><ol><li>Electing the President and Vice-President of India.</li><li>Electing the Speaker and Deputy Speaker of the Lok Sabha.</li><li>Electing the Deputy Chairman of the Rajya Sabha.</li></ol></div>
                <div className="feature-card mt-4"><h4>Judicial Powers</h4><p>Parliament possesses some judicial powers:</p><h4>(i) Impeachment of President</h4><ul><li>Can remove the President by passing an Impeachment resolution with a 2/3rd majority of the total membership of both Houses.</li></ul><h4>(ii) Removal of Judges</h4><ul><li>Judges of the Supreme Court and High Courts can be removed via a special procedure requiring a 2/3rd majority.</li></ul></div>
                <div className="feature-card mt-4"><h4>Amendment Powers</h4><ul><li>Only Parliament can amend the Constitution (State Legislatures cannot initiate it).</li></ul></div>
            </div>
            <div id="other-powers">
                <h3>6.5 Other Powers and Functions</h3>
                <div className="feature-card"><ul><li>Regulates Supreme Court: Determines the composition & powers of the Supreme Court.</li><li>High Courts: Can establish a common High Court for two or more states.</li><li>State Reorganization:<ul><li>Can alter state names/boundaries.</li><li>Can create new states by separating territories.</li></ul></li><li>People's Forum:<ul><li>MPs raise public grievances & demands.</li><li>Ensures administration is accountable.</li></ul></li><li>Opposition Role: Exposes government failures & weaknesses.</li><li>Public Demonstrations: During Lok Sabha sessions, groups (farmers, workers, women, students) protest or advocate for issues, helping to voice people's needs & aspirations.</li></ul></div>
            </div>
        </section>

        <section id="parliamentary-privileges" className="section">
            <h2>7.0 Parliamentary Privileges and Immunities</h2>
            <div className="note-box"><h4>Key Privileges:</h4><ol><li>Freedom of Speech: Constitutional Protection: MPs can speak freely in Parliament without fear of legal action. No court proceedings for speeches/votes made in Parliament.</li><li>Freedom from Arrest: Immunity Period: During Parliament sessions, and 40 days before and after sessions. Limitations: Applies only to civil cases (not criminal). Procedure: Police must immediately inform the Speaker/Chairman if an MP is arrested.</li><li>Regulation of House Affairs: Powers of Each House: Control internal proceedings. Exclude outsiders from galleries. Punish members/outsiders for contempt of the House.</li><li>Arrest Within Parliament Premises: Special Rule: Requires prior permission from the Speaker/Chairman. Example: 1974 case of Lok Sabha MP Gadadhar Shah (police informed Speaker before arrest).</li></ol></div>
        </section>

        <section id="exclusive-powers" className="section">
            <h2>8.0 Exclusive Powers of the Two Houses</h2>
            <h3>A. Lok Sabha’s Exclusive Powers (Why It Is More Powerful)</h3>
            <div className="feature-card"><h4>1. Financial Powers</h4><ul><li>Money Bills:<ul><li>Can only be introduced in the Lok Sabha.</li><li>The Rajya Sabha can only recommend changes (must return within 14 days).</li><li>If not returned, deemed passed in its original form.</li></ul></li><li>Demands for Grants:<ul><li>Only the Lok Sabha can vote on budget allocations.</li><li>The Rajya Sabha can discuss but not vote.</li></ul></li></ul></div>
            <div className="feature-card mt-4"><h4>2. Executive Control</h4><ul><li>Collective Responsibility: The Council of Ministers is accountable only to the Lok Sabha.</li><li>Motions:<ul><li>No-Confidence Motion: Can remove the entire Council of Ministers.</li><li>Adjournment Motion: Forces discussion on urgent public matters.</li><li>Censure Motion: Targets specific ministers/policies (requires reasons).</li></ul></li></ul></div>
            <div className="feature-card mt-4"><h4>3. Joint Sitting (For Deadlock on Non-Money Bills)</h4><ul><li>Presided over by the Lok Sabha Speaker.</li><li>The Lok Sabha’s numerical superiority ensures its dominance.</li></ul></div>
            <h3>B. Rajya Sabha’s Exclusive Powers</h3>
            <div className="feature-card"><h4>1. Federal Safeguards</h4><ul><li>State List Legislation: Can pass a resolution (with a 2/3rd majority) to allow Parliament to legislate on State List matters in the national interest.</li><li>Creation of All-India Services: Can recommend (with a 2/3rd majority) new central services (e.g., IAS, IPS).</li></ul></div>
            <div className="feature-card mt-4"><h4>2. Permanent Chamber</h4><ul><li>No dissolution (unlike the Lok Sabha).</li><li>Ensures continuity during:<ul><li>Lok Sabha dissolution.</li><li>Emergency proclamations.</li></ul></li></ul></div>
            <div className="feature-card mt-4"><h4>3. Equal Powers in Special Cases</h4><ul><li>Shared Authority with Lok Sabha in:<ul><li>Election/Impeachment of President.</li><li>Removal of Judges (SC/HC).</li><li>Emergency approval.</li><li>Ordinances.</li><li>Constitutional amendments.</li></ul></li></ul></div>
        </section>

        <section id="parliamentary-procedures" className="section">
            <h2>9.0 Parliamentary Procedures</h2>
            <div className="section-image-container">
                <img src="/Union Parliament/Parliamentary Procedures.png" style={{width: "100%", height: "auto"}} alt="Parliamentary Procedures" className="section-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }} />
            </div>
            <div className="content-cards-grid"><div className="feature-card"><h3 id="sessions">9.1 Sessions of Parliament</h3><ul><li>Summoning Authority: President.</li><li>Frequency:<ul><li>Minimum 2 sittings/year.</li><li>Normal 3 Sessions/year:<ul><li>Budget Session (February – May)</li><li>Monsoon Session (July – September)</li><li>Winter Session (November – December)</li></ul></li></ul></li><li>Maximum Gap: 6 months between sessions.</li></ul></div><div className="feature-card"><h3 id="president-address">9.2 President's Address</h3><ul><li>Occasions:<ul><li>First session after General Elections (Joint Sitting).</li><li>First session of every year (Joint Sitting).</li></ul></li><li>Purpose: Outlines government policies and legislative agenda.</li><li>Motion of Thanks: Discussed and voted upon.</li></ul></div><div className="feature-card"><h3 id="question-hour">9.3 Question Hour</h3><ul><li>Timing: First hour of parliamentary sitting (11 AM – 12 PM).</li><li>Types of Questions:<ul><li>Starred (*): Oral answer, supplementary questions allowed.</li><li>Unstarred: Written answer, no supplementary questions.</li><li>Short Notice: Urgent matters, 10-day notice.</li></ul></li><li>Rules:<ul><li>Maximum 150 questions/day.</li><li>No questions on Short Notice, Calling Attention.</li></ul></li></ul></div><div className="feature-card"><h3 id="zero-hour">9.4 Zero Hour</h3><ul><li>Timing: 12 PM – 1 PM (after Question Hour).</li><li>Purpose:<ul><li>Members raise urgent public issues.</li><li>Often leads to unruly scenes (e.g., slogan shouting).</li></ul></li></ul></div><div className="feature-card"><h3 id="adjournment-motion">9.5 Adjournment Motion</h3><ul><li>Purpose: To discuss matters of urgent public importance related to Men, programs, policies.</li><li>Conditions:<ul><li>Matter must be:<ul><li>Definite.</li><li>Urgent (requires same-day discussion).</li><li>Public importance.</li></ul></li></ul></li><li>Impact: Shows strong disapproval of government policy. Opposition may seek a no-confidence vote (if motion passed, government could resign).</li></ul></div><div className="feature-card"><h3 id="no-confidence-motion">9.6 No-Confidence Motion</h3><ul><li>Purpose: To formally remove the Council of Ministers.</li><li>Process:<ul><li>Requires support of at least 50 MPs to be admitted.</li><li>Must be debated within 10 days.</li></ul></li><li>Impact: If passed, entire government resigns (e.g., Charan Singh and then V.P. Singh).</li></ul></div><div className="feature-card"><h3 id="confidence-motion">9.7 Confidence Motion</h3><ul><li>Purpose: Moved by PM to demonstrate majority support.</li><li>Impact: If lost, PM must resign (e.g., Atal Bihari Vajpayee in 1999, 269-270).</li></ul></div></div>
            <h3 id="key-differences">9.8 Key Differences (Motions)</h3>
            <div className="powers-table-container" style={{overflowX:"auto"}}><table className="powers-table"><thead><tr><th>Motion</th><th>Who Moves?</th><th>Purpose</th><th>Result if Passed</th></tr></thead><tbody><tr><td>Adjournment</td><td>Any MP</td><td>Urgent public issue</td><td>Moral defeat (government)</td></tr><tr><td>No-Confidence</td><td>Opposition</td><td>Remove government</td><td>Government resigns</td></tr><tr><td>Confidence</td><td>PM</td><td>Prove majority support</td><td>PM resigns if lost</td></tr></tbody></table></div>
        </section>

        <section id="legislative-procedure" className="section">
            <h2>10.0 Legislative Procedure in Parliament</h2>
            <div className="feature-card"><h3 id="bill-vs-act">10.1 Bill vs. Act</h3><ul><li>Bill: Draft legislative proposal.</li><li>Act: Bill passed by both Houses + President's assent.</li></ul></div>
            <div className="feature-card mt-4"><h3 id="types-of-bills">10.2 Types of Bills</h3><h4>1. Ordinary Bill</h4><ul><li>Can originate in: Either House (Lok Sabha/Rajya Sabha).</li><li>Equal powers for both Houses: Introduced in one house, returned to originating house.</li><li>Deadlock resolution:<ul><li>President may call Joint Sitting if disagreement persists (Article 108 invoked).</li><li>Presided by Lok Sabha Speaker.</li><li>Passed by simple majority of members present.</li></ul></li></ul></div>
            <div className="feature-card mt-4"><h4>2. Money Bill (Revenue Bill)</h4><ul><li>Exclusive to Lok Sabha.</li><li>Rajya Sabha's role:<ul><li>Can only recommend changes (must return within 14 days).</li><li>Lok Sabha may accept/reject recommendations.</li><li>Deemed passed with/without assent.</li></ul></li></ul></div>
        </section>

        <section id="constitutional-amendment" className="section">
            <h2>11.0 Amendment of the Indian Constitution</h2>
            <div className="section-image-container">
                <img src="/Union Parliament/Amendment of the Indian Constitution.png" style={{width: "80%", height: "auto"}} alt="Amendment of the Indian Constitution" className="section-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }} />
            </div>
            <p>The Indian Constitution provides three methods for amendments, depending on the nature of the provision being changed:</p>
            <div className="content-cards-grid"><div className="feature-card"><h3>1. By Simple Majority</h3><ul><li>Applicable to: 'Ordinary' laws, e.g., admission of new states, citizenship laws.</li><li>Process:<ul><li>Passed as an ordinary law (no special majority required).</li><li>Approval by majority of members present and voting in Parliament.</li></ul></li></ul></div><div className="feature-card"><h3>2. By Special Majority (Two-Thirds Majority)</h3><ul><li>Applicable to: Most constitutional provisions, e.g., Fundamental Rights, Directive Principles.</li><li>Process:<ul><li>Must be passed by two-thirds of members present and voting in each House.</li><li>Additionally, requires a majority of the total membership of each house.</li></ul></li></ul></div><div className="feature-card"><h3>3. By Special Majority + State Ratification</h3><ul><li>Applicable to: Provisions affecting federal structure (e.g., President's election, distribution of powers).</li><li>Process:<ul><li>Passed by Parliament (Special Majority).</li><li>Additionally, ratified by at least half of State Legislatures.</li></ul></li></ul></div></div>
        </section>

        <Summerise />

    </>
);

// Mobile Toggle Button
const MobileTocToggleBtn = ({ toggleMobileMenu }) => (
    <button id="mobileTocToggleBtn" className="mobile-toc-toggle-btn" onClick={toggleMobileMenu}>
        &#9776;
    </button>
);

// Overlay for mobile menu
const Overlay = ({ active, onClick }) => (
    <div className={`overlay ${active ? 'active' : ''}`} onClick={onClick}></div>
);

// Back to Top Button Component
const BackToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    return (
        <button
            id="backToTopBtn"
            onClick={scrollToTop}
            className={`back-to-top ${isVisible ? 'show' : ''}`}
        >
            &uarr;
        </button>
    );
};

export default App;
