import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import './TopResults.css';

const TopResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [testInfo, setTestInfo] = useState({ test_name: '', test_date: '', centre_name: '' });

  useEffect(() => {
    async function fetchTopResults() {
      setLoading(true);
      setError('');
      try {
        // Get the latest test with centre_id
        const { data: latestTests, error: latestError } = await supabase
          .from('test_results')
          .select('test_id, test_name, test_date, centre_id')
          .order('test_date', { ascending: false })
          .limit(1);
        console.log('Latest test results:', latestTests);
        console.log('Latest test error:', latestError);
        const latestTest = latestTests?.[0];
        if (latestError) throw latestError;
        if (!latestTest) {
          setResults([]);
          setLoading(false);
          return;
        }
        // Fetch centre name
        let centreName = '';
        if (latestTest?.centre_id) {
          const { data: centre, error: centreError } = await supabase
            .from('centres')
            .select('name')
            .eq('id', latestTest.centre_id);
          console.log('Centre data:', centre);
          console.log('Centre error:', centreError);
          if (centreError) throw centreError;
          centreName = centre?.[0]?.name || ''; // Get first result if exists
        }
        setTestInfo({
          test_name: latestTest.test_name,
          test_date: latestTest.test_date,
          centre_name: centreName,
        });
        // Fetch all results for this test
        const { data: allResults, error: allError } = await supabase
          .from('test_results')
          .select('student_id, subject, full_marks, obtained_marks, percentage, test_name, test_date')
          .eq('test_id', latestTest.test_id);
        console.log('All results:', allResults);
        console.log('All results error:', allError);
        if (allError) throw allError;
        
        // Calculate combined percentages for each student
        const studentResults = {};
        allResults.forEach(result => {
          if (!studentResults[result.student_id]) {
            studentResults[result.student_id] = {
              subjects: [],
              total_percentage: 0,
              subject_count: 0
            };
          }
          studentResults[result.student_id].subjects.push({
            subject: result.subject,
            full_marks: result.full_marks,
            obtained_marks: result.obtained_marks,
            percentage: result.percentage
          });
          studentResults[result.student_id].total_percentage += Number(result.percentage);
          studentResults[result.student_id].subject_count++;
        });

        // Calculate combined percentage for each student
        const combinedResults = Object.entries(studentResults).map(([studentId, data]) => ({
          student_id: studentId,
          subjects: data.subjects,
          combined_percentage: (data.total_percentage / data.subject_count).toFixed(2)
        }));

        // Sort by combined percentage and take top 10
        const topResults = combinedResults
          .sort((a, b) => parseFloat(b.combined_percentage) - parseFloat(a.combined_percentage))
          .slice(0, 10);

        // Fetch student names
        const studentIds = topResults.map(r => r.student_id);
        // Fetch student profiles
        const { data: students, error: studentsError } = await supabase
          .from('profiles')
          .select('id, full_name, class, profile_image')
          .in('id', studentIds);
        console.log('Students data:', students);
        console.log('Students error:', studentsError);
        if (studentsError) throw studentsError;
        const studentMap = {};
        students.forEach(s => { studentMap[s.id] = s; });

        // Format results with rank and combined percentage
        const formattedResults = topResults.map((r, idx) => ({
          student_id: r.student_id,
          rank: idx + 1,
          student_name: studentMap[r.student_id]?.full_name || r.student_id,
          class: studentMap[r.student_id]?.class || '',
          profile_image: studentMap[r.student_id]?.profile_image || '',
          combined_percentage: r.combined_percentage,
          subjects: r.subjects.map(s => ({
            subject: s.subject,
            full_marks: s.full_marks,
            obtained_marks: s.obtained_marks,
            percentage: s.percentage
          }))
        }));
        setResults(formattedResults);
      } catch (err) {
        setError('Failed to fetch top results: ' + err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTopResults();
  }, []);

  return (
    <div className="top-results-container">
      <div className="top-results-title">Top 10 Results</div>
      {/* Test info block */}
      {testInfo.test_name && (
        <div className="top-results-info">
          <span>Test:</span> {testInfo.test_name} &nbsp;|&nbsp;
          <span>Date:</span> {testInfo.test_date ? new Date(testInfo.test_date).toLocaleDateString() : '-'} &nbsp;|&nbsp;
          <span>Centre:</span> {testInfo.centre_name || '-'}
        </div>
      )}
      {loading ? (
        <div className="top-results-loading">Loading...</div>
      ) : error ? (
        <div className="top-results-error">{error}</div>
      ) : (
        <>
          {/* Desktop/tablet table */}
          <div className="top-results-table-container top-results-desktop">
            <table className="top-results-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Full Marks</th>
                  <th>Obtained Marks</th>
                  <th>Percentage</th>
  
                </tr>
              </thead>
              <tbody>
                {results.map(r => (
                  <tr key={r.student_id}>
                    <td className="top-results-rank">
                      <span style={{ fontSize: '36px', lineHeight: '1' }}>
                        {r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : r.rank}
                      </span>
                    </td>
                    <td className="top-results-student-cell">
                      <div className="top-results-student-info">
                        <img src={r.profile_image || '/default-avatar.png'} alt="Avatar" className="top-results-avatar" />
                        <span className="top-results-student-name">{r.student_name}</span>
                      </div>
                    </td>
                    <td>{r.class}</td>
                    <td>
                      <table className="subject-table">
                        <tbody>
                          {r.subjects.map((subject, idx) => (
                            <tr key={idx}>
                              <td className="subject-cell">{subject.subject}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table className="subject-table">
                        <tbody>
                          {r.subjects.map((subject, idx) => (
                            <tr key={idx}>
                              <td>{subject.full_marks}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table className="subject-table">
                        <tbody>
                          {r.subjects.map((subject, idx) => (
                            <tr key={idx}>
                              <td>{subject.obtained_marks}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <span className="subject-percentage">{r.combined_percentage}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card layout */}
          <div className="top-results-mobile">
            {results.map(r => (
              <div className="top-results-card" key={r.student_id}>
                <div className="top-results-card-header">
                  <div className="top-results-card-student-info">
                    <div className="top-results-card-rank">
                      <span className="rank-emoji" style={{ fontSize: '48px' }}>
                        {r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : r.rank}
                      </span>
                    </div>
                    <div className="top-results-card-avatar-container">
                      {(() => {
                        const CLOUDINARY_BASE = "https://res.cloudinary.com/dxwszplz7/image/upload/";
                        const DEFAULT_AVATAR = "https://res.cloudinary.com/dxwszplz7/image/upload/default-avatar_r0cboa";
                        let imgSrc = r.profile_image
                          ? (r.profile_image.startsWith("http")
                              ? r.profile_image
                              : CLOUDINARY_BASE + r.profile_image)
                          : DEFAULT_AVATAR;
                        return (
                          <img src={imgSrc} alt={r.student_name || "Default Avatar"} className="top-results-avatar" />
                        );
                      })()}
                    </div>
                    <div className="top-results-card-details">
                      <h3 className="top-results-card-name">{r.student_name}</h3>
                      <p className="top-results-card-class">Class: {r.class}</p>
                      <div className="top-results-card-combined">
                        <span className="percentage-label">Overall:</span>
                        <span className="percentage-value">{r.combined_percentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TopResults;
