import React from 'react';
import { useParams } from 'react-router-dom';
import { initialTestData } from '../components/Results';

const ResultPage = () => {
  const { testName } = useParams();
  const test = initialTestData.find(t => t.name.toLowerCase().replace(/\s+/g, '') === testName);

  if (!test) {
    return <div>Test not found</div>;
  }

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      fontFamily: 'sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    animatedBg: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(to bottom right, #7C2D12, #111827, #92400E)',
      animation: 'gradient-xy 15s ease infinite',
    },
    patternBg: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    mainContent: {
      width: '100%',
      position: 'relative',
      zIndex: 10,
      marginTop: '5rem',
    },
    tableWrapper: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      border: '1px solid rgba(255,255,255,0.2)',
      overflow: 'hidden',
      marginTop: '2rem',
    },
    table: {
      width: '100%',
      textAlign: 'left',
      color: 'white',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '1rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    td: {
      padding: '1rem',
      whiteSpace: 'nowrap',
      fontWeight: 600,
      textAlign: 'center',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.animatedBg}></div>
      <div style={styles.patternBg}></div>
      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-size: 400% 400%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 400% 400%;
            background-position: 100% 50%;
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          table {
            font-size: 0.9rem !important;
            table-layout: fixed !important;
            width: 100% !important;
          }
          th, td {
            text-align: center;
            padding: 0.35rem !important;
            font-size: 0.9rem !important;
            word-break: break-word;
            white-space: normal !important;
            max-width: 110px;
            text-align: center;
          }
          tr:hover, tr:active {
            background: inherit !important;
          }
        }
        @media (min-width: 601px) {
          tr:hover {
            background: rgba(255,255,255,0.07) !important;
            transition: background 0.2s;
          }
        }
      `}</style>
      <main style={styles.mainContent}>
        <h1 style={styles.heading}>{test.name} - Results</h1>
        <div style={styles.tableWrapper}>
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.table}>
              <thead style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <tr>
                  <th style={{ ...styles.th, width: '15%', textAlign: 'center' }}>Rank</th>
                  <th style={{ ...styles.th, width: '55%', textAlign: 'left' }}>Student Name</th>
                  <th style={{ ...styles.th, width: '30%', textAlign: 'center' }}>Score</th>
                </tr>
              </thead>
              <tbody>
                {test.results.map((result, idx) => {
                  // Gold for 1st, Silver for 2nd, default for others
                  let rowStyle = { ...styles.td };
                  let icon = null;
                  if (result.rank === 1) {
                    rowStyle = {
                      ...rowStyle,
                      backgroundColor: 'rgba(245, 158, 11, 0.2)',
                      color: '#fff',
                      fontWeight: 700,
                    };
                    icon = (
                      <span style={{ color: '#FBBF24', fontSize: '1.2em', marginRight: 8, verticalAlign: 'middle' }}>🥇</span>
                    );
                  } else if (result.rank === 2) {
                    rowStyle = {
                      ...rowStyle,
                      backgroundColor: 'rgba(156, 163, 175, 0.2)',
                      color: '#fff',
                      fontWeight: 600,
                    };
                    icon = (
                      <span style={{ color: '#C0C0C0', fontSize: '1.2em', marginRight: 8, verticalAlign: 'middle' }}>🥈</span>
                    );
                  }
                  return (
                    <tr key={result.id} style={{ animation: 'fade-in-up 0.6s ease-out forwards', opacity: 0, animationDelay: `${idx * 50}ms`, animationFillMode: 'forwards' }}>
                      <td style={{ ...rowStyle, textAlign: 'center' }}>{result.rank}</td>
                      <td style={{ ...rowStyle, textAlign: 'left' }}>
                        <span className="student-name-desktop">{icon}{result.studentName}</span>
                        <span className="student-name-mobile" style={{ display: 'none' }}>
                          {(() => {
                            // Try to extract name and class
                            const match = result.studentName.match(/^(.*?)(\s*\((Class|[0-9]+)[^)]+\))?$/i);
                            if (match) {
                              const name = match[1].trim();
                              const classInfo = match[2] ? match[2].replace(/[()]/g, '').trim() : '';
                              return <>
                                {icon}{name}
                                {classInfo && <><br /><span style={{ color: '#FDE68A', fontSize: '0.95em' }}>{classInfo}</span></>}
                              </>;
                            } else {
                              return <>{icon}{result.studentName}</>;
                            }
                          })()}
                        </span>
                        <style>{`
                          @media (max-width: 600px) {
                            .student-name-desktop { display: none !important; }
                            .student-name-mobile { display: inline !important; }
                          }
                          @media (min-width: 601px) {
                            .student-name-desktop { display: inline !important; }
                            .student-name-mobile { display: none !important; }
                          }
                        `}</style>
                      </td>
                      <td style={{ ...rowStyle, textAlign: 'center' }}>{result.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResultPage;
