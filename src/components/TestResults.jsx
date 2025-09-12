import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import './TestResults.css';

const TestResults = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function fetchUserId() {
      const { data: userData } = await supabase.auth.getUser();
      setUserId(userData?.user?.id || null);
    }
    fetchUserId();
  }, []);
  const [testResults, setTestResults] = useState([]);
  const [centreNames, setCentreNames] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTestResults() {
      try {
        setLoading(true);
        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;
        const user = userData?.user;
        
        if (!user || !user.id) {
          setError('User not logged in');
          return;
        }

        // Get student's centre
        const { data: studentData, error: studentError } = await supabase
          .from('profiles')
          .select('centre')
          .eq('id', user.id)
          .single();

        if (studentError) throw studentError;
        const studentCentreId = studentData?.centre;

        // Get all test results for the logged-in student, with test and centre info
        const { data, error } = await supabase
          .from('test_results')
          .select('*')
          .eq('student_id', user.id)
          .order('test_date', { ascending: false });

        if (error) throw error;

        // Group results by test name + date (no tests join)
        const grouped = {};
        const centreIds = new Set();
        console.log('Fetched rows for student:', (data || []).length, data);
        (data || []).forEach(result => {
          const key = `${result.test_name}|${result.test_date}`;
          if (!grouped[key]) {
            grouped[key] = {
              test: { test_name: result.test_name, test_date: result.test_date },
              centre_id: result.centre_id,
              subjects: []
            };
          }
          grouped[key].subjects.push(result);
          if (result.centre_id) centreIds.add(result.centre_id);
        });

        setTestResults(grouped);

        // fetch centre names if needed
        if (centreIds.size > 0) {
          const { data: centresData, error: centresError } = await supabase
            .from('centres')
            .select('id, name')
            .in('id', Array.from(centreIds));
          if (!centresError && centresData) {
            const map = {};
            centresData.forEach(c => { map[c.id] = c.name; });
            setCentreNames(map);
          }
        }
      } catch (err) {
        setError('Failed to load test results');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTestResults();
  }, []);

  const [ranksByTest, setRanksByTest] = useState({});
  useEffect(() => {
    async function fetchRanks() {
      const newRanks = {};
      for (const [testId, group] of Object.entries(testResults)) {
        const testName = group.test.test_name || group.subjects[0]?.test_name;
        const testDate = group.test.test_date || group.subjects[0]?.test_date;
        // Fetch all results for this test
        const { data: allResults } = await supabase
          .from('test_results')
          .select('id, student_id, subject, percentage')
          .eq('test_name', testName)
          .eq('test_date', testDate);
        if (allResults) {
          // Group results by student_id to calculate combined percentage
          const studentResults = {};
          allResults.forEach(result => {
            if (!studentResults[result.student_id]) {
              studentResults[result.student_id] = {
                total_percentage: 0,
                subject_count: 0
              };
            }
            studentResults[result.student_id].total_percentage += Number(result.percentage);
            studentResults[result.student_id].subject_count++;
          });

          // Calculate combined percentage for each student
          const combinedPercentages = Object.entries(studentResults).map(([studentId, data]) => ({
            student_id: studentId,
            combined_percentage: (data.total_percentage / data.subject_count).toFixed(2)
          }));

          // Sort by combined percentage and assign rank
          combinedPercentages.sort((a, b) => parseFloat(b.combined_percentage) - parseFloat(a.combined_percentage));
          let currentRank = 1;
          let prevPercentage = null;
          combinedPercentages.forEach((student, idx) => {
            if (student.combined_percentage !== prevPercentage) {
              currentRank = idx + 1;
              prevPercentage = student.combined_percentage;
            }
            student.rank = currentRank;
          });

          // Create rank map for each subject of each student
          const rankMap = {};
          combinedPercentages.forEach(student => {
            allResults.forEach(result => {
              if (result.student_id === student.student_id) {
                rankMap[`${result.subject}|${result.student_id}`] = student.rank;
              }
            });
          });

          newRanks[testId] = rankMap;
        }
      }
      setRanksByTest(newRanks);
    }
    if (Object.keys(testResults).length > 0) fetchRanks();
  }, [testResults]);

  if (loading) return (
    <div className="test-results-loading">
      <div className="loader" />
      <span>Loading your test results...</span>
    </div>
  );

  const testSections = Object.entries(testResults).map(([testId, group]) => {
    const { test, centre_id, subjects } = group;
    const rankMap = ranksByTest[testId] || {};
    return (
      <div key={testId} className="test-card">
        <div className="test-card-header">
          <div className="test-title-row">
            <span className="test-title">{test?.test_name || subjects[0]?.test_name || 'Test'}</span>
            <span className="test-date">{test?.test_date ? new Date(test.test_date).toLocaleDateString() : (subjects[0]?.test_date ? new Date(subjects[0].test_date).toLocaleDateString() : '-')}</span>
          </div>
          <div className="test-meta-row">
            <span className="test-centre">Centre: {centreNames[centre_id] || centre_id || '-'}</span>
          </div>
        </div>
        <div className="subjects-list">
          {subjects.map((result, idx) => (
            <div className="subject-card modern-subject-card" key={result.id || idx}>
              <div className="modern-subject-header">
                <span className="modern-subject-icon" role="img" aria-label="subject">📘</span>
                <span className="modern-subject-name">{result.subject}</span>
              </div>
              <div className="modern-subject-stats">
                <div className="modern-stat-block">
                  <span className="modern-stat-label">Marks</span>
                  <span className="modern-stat-value">{result.obtained_marks} / {result.full_marks}</span>
                </div>
                <div className="modern-stat-block">
                  <span className="modern-stat-label">Percentage</span>
                  <span className="modern-stat-value modern-percentage">
                    <span className="percent-icon" role="img" aria-label="percentage">📊</span>
                    {result.percentage ? result.percentage.toFixed(2) : '-'}%
                  </span>
                </div>
                <div className="modern-stat-block">
                  <span className="modern-stat-label">Rank</span>
                  <span className="modern-stat-value modern-rank">
                    <span className="rank-icon" role="img" aria-label="rank">🏅</span>
                    {userId && rankMap[`${result.subject}|${userId}`] ? rankMap[`${result.subject}|${userId}`] : '-'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="test-results-container">
      <div className="test-results-header">
        <div className="header-content">
          <div className="header-title">
            <span className="header-icon">📊</span>
            <span className="header-text">Test Results</span>
          </div>
          <div className="header-badge">
            <span className="badge-count">{Object.keys(testResults).length}</span>
            <span className="badge-text">Tests</span>
          </div>
        </div>
      </div>
      
      <div className="scrollable-content">
        {error && (
          <div className="test-results-error">
            <span role="img" aria-label="error">❌</span> {error}
          </div>
        )}
        {Object.keys(testResults).length === 0 && !error ? (
          <div className="test-results-empty">
            <span role="img" aria-label="no results">📭</span> No test results available
          </div>
        ) : (
          <div className="test-results-list">
            {testSections}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestResults;
