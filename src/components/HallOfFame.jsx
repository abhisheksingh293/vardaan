import React, { useEffect, useState } from 'react';

// --- Main Hall of Fame Component ---
const HallOfFame = () => {
    // --- Data ---
    // This data can be passed in as props from your main app.
    const topStudents = [
        {
            name: 'Advik',
            class: 'Class 7 ICSE',
            score: '93.75%',
            rank: 1,
        },
        {
            name: 'Aradhya',
            class: 'Class 8 CBSE',
            score: '75.0%',
            rank: 2,
        },
    ];

    // --- SVG Crests for Ranks ---
    const GoldCrest = () => (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)' }}>
            <defs>
                <linearGradient id="gold-grad-circle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FBBF24' }} />
                    <stop offset="100%" style={{ stopColor: '#F59E0B' }} />
                </linearGradient>
                <filter id="gold-glow-circle" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g style={{ filter: 'url(#gold-glow-circle)' }}>
                <circle cx="30" cy="30" r="24" fill="url(#gold-grad-circle)" />
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="#A16207" fontSize="20" fontWeight="bold" dy=".1em">1st</text>
            </g>
        </svg>
    );

    const SilverCrest = () => (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)' }}>
            <defs>
                <linearGradient id="silver-grad-circle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#D1D5DB' }} />
                    <stop offset="100%" style={{ stopColor: '#9CA3AF' }} />
                </linearGradient>
                 <filter id="silver-glow-circle" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g style={{ filter: 'url(#silver-glow-circle)' }}>
                <circle cx="30" cy="30" r="24" fill="url(#silver-grad-circle)" />
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="#4B5563" fontSize="20" fontWeight="bold" dy=".1em">2nd</text>
            </g>
        </svg>
    );


    // --- Styles ---
    const styles = {
        section: {
            fontFamily: `'Inter', sans-serif`,
            backgroundColor: '#FFF7ED',
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '20px 20px',
            borderRadius: '20px',
            padding: '40px 20px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #FDE68A',
        },
        title: {
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#9A3412',
            marginBottom: '50px',
            letterSpacing: '1px',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap',
        },
        card: {
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            animation: 'fade-scale-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        },
        firstPlaceCard: {
            background: 'radial-gradient(circle, #FFFAF0, #FFE4B5 90%)',
            animationName: 'pulse-glow-gold, fade-scale-in',
            animationDuration: '4s, 0.8s',
            animationIterationCount: 'infinite, 1',
            transform: 'scale(1.05)',
        },
        secondPlaceCard: {
            background: 'radial-gradient(circle, #F9FAFB, #E5E7EB 90%)',
            animationName: 'pulse-glow-silver, fade-scale-in',
            animationDuration: '4s, 0.8s',
            animationIterationCount: 'infinite, 1',
            animationDelay: '0s, 0.2s', // Delay fade-in for second card
        },
        avatar: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '10px',
        },
        name: {
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#4B5563',
            margin: '0',
        },
        classInfo: {
            fontSize: '0.9rem',
            color: '#6B7280',
            marginBottom: '10px',
        },
        score: {
            fontSize: '1.1rem',
            fontWeight: '600',
        },
    };

    // --- Student Card Sub-component ---
    const StarCard = ({ student }) => {
        const isFirst = student.rank === 1;
        const cardStyles = {
            ...styles.card,
            ...(isFirst ? styles.firstPlaceCard : styles.secondPlaceCard)
        };
        const avatarGradient = isFirst 
            ? 'linear-gradient(145deg, #f59e0b, #facc15)' 
            : 'linear-gradient(145deg, #9ca3af, #e5e7eb)';
        const scoreColor = isFirst ? '#B45309' : '#4B5563';

        return (
            <div style={cardStyles}>
                {isFirst ? <GoldCrest /> : <SilverCrest />}
                <div style={{...styles.avatar, background: avatarGradient, border: `3px solid ${isFirst ? '#FBBF24' : '#D1D5DB'}`}}>
                    {student.name.charAt(0)}
                </div>
                <h3 style={styles.name}>{student.name}</h3>
                <p style={styles.classInfo}>{student.class}</p>
                <p style={{...styles.score, color: scoreColor}}>{student.score}</p>
            </div>
        );
    };
    
    // --- Confetti Sub-component ---
    const Confetti = () => {
        const confettiStyles = {
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: Math.random() > 0.5 ? '#facc15' : '#e5e7eb',
            top: '-20px',
            left: `${Math.random() * 100}%`,
            animation: `fall ${2 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
        };
        return <div style={confettiStyles}></div>;
    };
    
    // --- Render ---
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
                
                @keyframes pulse-glow-gold {
                    0%, 100% { box-shadow: 0 0 20px 5px rgba(251, 191, 36, 0.3); }
                    50% { box-shadow: 0 0 35px 10px rgba(251, 191, 36, 0.5); }
                }

                @keyframes pulse-glow-silver {
                    0%, 100% { box-shadow: 0 0 20px 5px rgba(156, 163, 175, 0.3); }
                    50% { box-shadow: 0 0 35px 10px rgba(156, 163, 175, 0.5); }
                }
                
                @keyframes fade-scale-in {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1.0); }
                }
                .second-place-card { animation-delay: 0.2s; }

                @keyframes fall {
                    from {
                        transform: translateY(0vh) rotate(0deg);
                        opacity: 1;
                    }
                    to {
                        transform: translateY(100vh) rotate(${Math.random() * 720}deg);
                        opacity: 0;
                    }
                }
            `}</style>
            
            <section style={styles.section}>
                {Array.from({ length: 50 }).map((_, i) => <Confetti key={i} />)}
                <h2 style={styles.title}>🎉 Hall of Fame 🎉</h2>
                <div style={styles.container}>
                    {/* Render students sorted by rank to ensure consistent layout */}
                    {topStudents.sort((a, b) => a.rank - b.rank).map(student => (
                        <StarCard key={student.rank} student={student} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default HallOfFame;
