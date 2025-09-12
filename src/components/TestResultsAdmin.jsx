import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import '../components/TestResultsAdmin.css';
import CustomSelect from './CustomSelect';

const TestResultsAdmin = () => {


  // State management
  const [currentStep, setCurrentStep] = useState(1);


  const [formData, setFormData] = useState({
    selectedTest: null, // will hold the selected test object
    newTest: { test_name: '', test_date: '', centre_id: '' },
    selectedStudents: [], // array of student ids
    studentSubjects: {}, // { studentId: [ { subject, full_marks, obtained_marks } ] }
    subjects: [], // collection of subjects added for the selected student
    subject: '', // current subject being entered
    full_marks: '', // full marks input value
    obtained_marks: '', // obtained marks input value
  });

  const [tests, setTests] = useState([]);
  const [showCreateTest, setShowCreateTest] = useState(false);

  // State for displaying all results for selected test
  const [testResultsTable, setTestResultsTable] = useState([]);
  const [testResultsLoading, setTestResultsLoading] = useState(false);
  const [testResultsError, setTestResultsError] = useState('');
  const [editRowId, setEditRowId] = useState(null);
  const [editRowData, setEditRowData] = useState({});
  const [actionMessage, setActionMessage] = useState('');
  const [centres, setCentres] = useState([]);
  const [selectedCentreStudents, setSelectedCentreStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Effect hooks
  useEffect(() => {
    fetchCentres();
    fetchTests();
  }, []);

  // Fetch all test results for the selected test
  useEffect(() => {
    const fetchTestResultsTable = async () => {
      if (!formData.selectedTest) {
        setTestResultsTable([]);
        return;
      }
      setTestResultsLoading(true);
      setTestResultsError('');
      try {
        // Get all test_results for this test
        const { data: results, error } = await supabase
          .from('test_results')
          .select('id, student_id, subject, full_marks, obtained_marks')
          .eq('test_id', formData.selectedTest.id)
          .range(0, 4999);
        if (error) throw error;
        // Get all students for mapping names
        const { data: students, error: studentsError } = await supabase
          .from('profiles')
          .select('id, full_name, class');
        if (studentsError) throw studentsError;

        // Calculate combined percentages for each student
        const studentResults = {};
        results.forEach(result => {
          const studentId = result.student_id;
          if (!studentResults[studentId]) {
            studentResults[studentId] = {
              totalFullMarks: 0,
              totalObtainedMarks: 0,
              subjects: []
            };
          }
          studentResults[studentId].totalFullMarks += Number(result.full_marks);
          studentResults[studentId].totalObtainedMarks += Number(result.obtained_marks);
          studentResults[studentId].subjects.push({
            ...result,
            student_name: students.find(s => s.id === studentId)?.full_name || studentId,
            class: students.find(s => s.id === studentId)?.class || '',
            percentage: ((result.obtained_marks / result.full_marks) * 100).toFixed(2)
          });
        });

        // Calculate combined percentages and ranks
        const rankedStudents = Object.entries(studentResults).map(([studentId, data]) => {
          const combinedPercentage = ((data.totalObtainedMarks / data.totalFullMarks) * 100).toFixed(2);
          const student = students.find(s => s.id === studentId);
          return {
            student_id: studentId,
            student_name: student ? student.full_name : studentId,
            class: student ? student.class : '',
            subjects: data.subjects,
            combined_percentage: combinedPercentage
          };
        });

        // Sort by combined percentage and assign ranks
        rankedStudents.sort((a, b) => parseFloat(b.combined_percentage) - parseFloat(a.combined_percentage));
        let currentRank = 1;
        let prevPercentage = null;
        let sameRankCount = 0;
        const finalResults = [];

        rankedStudents.forEach((studentData, idx) => {
          if (studentData.combined_percentage !== prevPercentage) {
            currentRank = idx + 1;
            prevPercentage = studentData.combined_percentage;
            sameRankCount = 1;
          } else {
            sameRankCount++;
          }

          // Add each subject result with the student's rank
          studentData.subjects.forEach(subject => {
            finalResults.push({
              ...subject,
              combined_percentage: studentData.combined_percentage,
              rank: currentRank
            });
          });
        });

        setTestResultsTable(finalResults);
        setEditRowId(null);
        setEditRowData({});
      } catch (err) {
        setTestResultsError('Failed to fetch test results: ' + err.message);
      } finally {
        setTestResultsLoading(false);
      }
    };
    fetchTestResultsTable();
  }, [formData.selectedTest]);

  useEffect(() => {
    if (formData.selectedTest && formData.selectedTest.centre_id) {
      fetchStudentsByCentre(formData.selectedTest.centre_id);
    }
  }, [formData.selectedTest]);

  // Data fetching functions
  // Fetch all students for the selected test's centre and their marks (for bulk edit)
  const fetchBulkEditData = async (testObj) => {
    setBulkEditLoading(true);
    setBulkEditError('');
    try {
      // Get all students for the centre
      const { data: students, error: studentError } = await supabase
        .from('profiles')
        .select('id, full_name, class')
        .eq('centre', testObj.centre_id)
        .order('full_name');
      if (studentError) throw studentError;

      // Get all existing marks for this test
      const { data: marks, error: marksError } = await supabase
        .from('test_results')
        .select('id, student_id, subject, full_marks, obtained_marks, percentage')
        .eq('test_id', testObj.id);
      if (marksError) throw marksError;

      // For each student, build a row for each subject in the test (or just one row per student if subjectless)
      // For simplicity, assume one subject per test for now (can be expanded if needed)
      const studentRows = students.map(student => {
        const mark = marks.find(m => m.student_id === student.id);
        return {
          id: mark ? mark.id : null,
          student_id: student.id,
          student_name: student.full_name,
          class: student.class,
          subject: mark ? mark.subject : '',
          full_marks: mark ? mark.full_marks : '',
          obtained_marks: mark ? mark.obtained_marks : '',
          percentage: mark ? mark.percentage : '',
        };
      });
      setBulkEditData(studentRows);
    } catch (err) {
      setBulkEditError('Failed to fetch students/results for bulk edit: ' + err.message);
    } finally {
      setBulkEditLoading(false);
    }
  };


  // Data fetching functions
  const fetchTests = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('tests')
        .select('*, centres(name)')
        .order('test_date', { ascending: false });
      if (error) throw error;
      setTests(data || []);
    } catch (err) {
      setError('Failed to fetch tests');
    } finally {
      setLoading(false);
    }
  };

  const createTest = async () => {
    setError('');
    const { test_name, test_date, centre_id } = formData.newTest;
    if (!test_name || !test_date || !centre_id) {
      setError('Please fill all test fields');
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('tests')
        .insert([{ test_name, test_date, centre_id }])
        .select();
      if (error) throw error;
      setTests(prev => [data[0], ...prev]);
      setFormData(prev => ({ ...prev, selectedTest: data[0], newTest: { test_name: '', test_date: '', centre_id: '' } }));
      setShowCreateTest(false);
    } catch (err) {
      setError('Failed to create test: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCentres = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('centres')
        .select('*')
        .order('name');

      if (error) throw error;
      setCentres(data || []);
    } catch (err) {
      console.error('Error fetching centres:', err);
      setError('Failed to fetch centres');
    } finally {
      setLoading(false);
    }
  };

  const fetchStudentsByCentre = async (centreId) => {
    try {
      setLoading(true);
      
      // First, get the centre name from centres table
      const { data: centreData, error: centreError } = await supabase
        .from('centres')
        .select('name')
        .eq('id', centreId)
        .single();

      if (centreError) {
        console.error('Error fetching centre:', centreError);
        setError('Failed to fetch centre information');
        return;
      }

      const centreName = centreData?.name;
      console.log('Looking for students in centre:', centreName);

      // Then fetch students who belong to this centre
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, father_name, class, centre, email, phone')
        .or(`centre.eq.${centreId},centre.is.null`)
        .order('full_name');
      
      if (error) {
        console.error('Error fetching profiles:', error);
        setError('Failed to fetch student profiles: ' + error.message);
        return;
      }

      // No need to filter in frontend since we filtered in the query
      const students = data || [];
      console.log('Fetched students:', students);
      console.log('Found students:', students.length);

      if (students.length === 0) {
        setError('No students found for this centre');
        setSelectedCentreStudents([]);
        return;
      }

      setSelectedCentreStudents(students);
      setError('');
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch students: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper functions
  const fetchSubjects = () => [
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Science', label: 'Science' },
    { value: 'English', label: 'English' },
    { value: 'Social Studies', label: 'Social Studies' },
    { value: 'Hindi', label: 'Hindi' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateSubjectMarks = (subject) => {
    const fullMarks = parseInt(subject.full_marks);
    const obtainedMarks = parseInt(subject.obtained_marks);
    
    if (isNaN(fullMarks) || isNaN(obtainedMarks)) {
      return false;
    }
    
    if (obtainedMarks > fullMarks) {
      setError('Obtained marks cannot exceed full marks');
      return false;
    }
    
    return true;
  };

  const addSubject = () => {
    setFormData(prev => ({
      ...prev,
      subjects: [...prev.subjects, { subject: '', full_marks: '', obtained_marks: '' }]
    }));
  };

  const removeSubject = (index) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.filter((_, i) => i !== index)
    }));
  };

  const handleSubjectChange = (index, field, value) => {
    console.log('handleSubjectChange called:', { index, field, value });
    const updatedSubjects = formData.subjects.map((subject, i) => 
      i === index ? { ...subject, [field]: value } : subject
    );

    setFormData(prev => ({
      ...prev,
      subjects: updatedSubjects
    }));
  };

  const calculatePercentage = (fullMarks, obtainedMarks) => {
    const fMarks = parseInt(fullMarks);
    const oMarks = parseInt(obtainedMarks);
    const percent = (oMarks / fMarks) * 100;
    console.log('calculatePercentage:', { fullMarks, obtainedMarks, fMarks, oMarks, percent });
    if (isNaN(fMarks) || isNaN(oMarks) || fMarks === 0) return '0.00';
    return Math.min(Math.max(percent, 0), 100).toFixed(2);
  };

  // Navigation handlers
  const handleNext = () => {
    setError('');
    
    // Step 1: Only require a selected test
    if (currentStep === 1 && !formData.selectedTest) {
      setError('Please select or create a test');
      return;
    }

    // Step 2: Removed (Test Details handled in Step 1) - skip validation

    if (currentStep === 3) {
      if (!formData.selectedStudent) {
        setError('Please select a student');
        return;
      }

      // Build the subject entry from current input fields
      const newSubjectEntry = {
        subject: formData.subject,
        full_marks: formData.full_marks,
        obtained_marks: formData.obtained_marks,
      };

      // Validate current entry
      if (!validateSubjectMarks(newSubjectEntry)) {
        return;
      }

      // Update the subjects array with the new entry
      setFormData(prev => ({
        ...prev,
        subjects: [...(prev.subjects || []), newSubjectEntry],
      }));

      // Proceed to summary view
      setShowSummary(true);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };


  const handlePrevious = () => {
    if (showSummary) {
      setShowSummary(false);
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleConfirmSubmit = () => {
    setShowSummary(false);
    setShowConfirm(true);
  };

  // Form submission
  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const testResults = (Array.isArray(formData.subjects) ? formData.subjects : []).map(subject => {
        const percentage = calculatePercentage(
          parseInt(subject.full_marks),
          parseInt(subject.obtained_marks)
        );

        return {
          student_id: formData.selectedStudent,
          test_id: formData.selectedTest.id, // Add test_id from selected test
          test_name: formData.test_name,
          subject: subject.subject,
          test_date: formData.test_date,
          full_marks: parseInt(subject.full_marks),
          obtained_marks: parseInt(subject.obtained_marks),
          percentage: parseFloat(percentage),
          centre_id: formData.centre_id
        };
      });

      console.log('Submitting testResults:', testResults);
const { error } = await supabase
  .from('test_results')
  .insert(testResults);

      if (error) throw error;

      alert('Test results added successfully!');
      setFormData({
        centre_id: '',
        test_name: '',
        test_date: '',
        subjects: [],
        selectedStudent: null
      });
      setCurrentStep(1);
      setShowSummary(false);
      setShowConfirm(false);
    } catch (err) {
      setError('Error adding test results: ' + err.message);
    } finally {
      setLoading(false);
    }
  };



  // Render
  return (
    <div className="test-results-admin">
      <h2>Test Results Management</h2>
      {error && <div className="error-message">{error}</div>}

      {formData.selectedTest && (
        <div style={{ background: '#f8fafc', border: '1.5px solid #e5e7eb', borderRadius: 8, padding: 18, marginBottom: 22 }}>
          <h3 style={{ marginBottom: 10 }}>All Results for: <span style={{ color: '#ea580c' }}>{formData.selectedTest.test_name}</span></h3>
          {actionMessage && (
            <div style={{ color: actionMessage.startsWith('Error') ? 'red' : 'green', marginBottom: 8 }}>{actionMessage}</div>
          )}
          {testResultsLoading ? (
            <div>Loading...</div>
          ) : testResultsError ? (
            <div style={{ color: 'red' }}>{testResultsError}</div>
          ) : testResultsTable.length === 0 ? (
            <div>No results found for this test.</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 8 }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Rank</th>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Student Name</th>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Class</th>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Subject</th>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Full Marks</th>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Obtained Marks</th>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Percentages</th>
                  <th style={{ padding: 8, border: '1px solid #e5e7eb' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {testResultsTable.map((row, index) => (
                  <tr key={row.id}>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb', fontWeight: 600 }}>{row.rank}</td>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>{row.student_name}</td>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>{row.class}</td>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>
                      {editRowId === row.id ? (
                        <input
                          type="text"
                          value={editRowData.subject || ''}
                          onChange={e => setEditRowData(d => ({ ...d, subject: e.target.value }))}
                          style={{ width: 100 }}
                        />
                      ) : (
                        row.subject
                      )}
                    </td>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>
                      {editRowId === row.id ? (
                        <input
                          type="number"
                          value={editRowData.full_marks || ''}
                          min={1}
                          onChange={e => setEditRowData(d => ({ ...d, full_marks: e.target.value }))}
                          style={{ width: 70 }}
                        />
                      ) : (
                        row.full_marks
                      )}
                    </td>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>
                      {editRowId === row.id ? (
                        <input
                          type="number"
                          value={editRowData.obtained_marks || ''}
                          min={0}
                          max={editRowData.full_marks || row.full_marks}
                          onChange={e => setEditRowData(d => ({ ...d, obtained_marks: e.target.value }))}
                          style={{ width: 70 }}
                        />
                      ) : (
                        row.obtained_marks
                      )}
                    </td>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ color: '#16a34a' }}>{row.percentage}%</span>
                        <span style={{ color: '#3b82f6', fontWeight: 600 }}>|</span>
                        <span style={{ color: '#ea580c' }}>Combined: {row.combined_percentage}%</span>
                      </div>
                    </td>
                    <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>
                      {editRowId === row.id ? (
                        <>
                          <button
                            style={{ background: '#10b981', color: 'white', border: 'none', borderRadius: 5, padding: '2px 10px', marginRight: 6, cursor: 'pointer' }}
                            onClick={async () => {
                              setActionMessage('');
                              try {
                                const { error } = await supabase
                                  .from('test_results')
                                  .update({
                                    subject: editRowData.subject,
                                    full_marks: Number(editRowData.full_marks),
                                    obtained_marks: Number(editRowData.obtained_marks),
                                    percentage: editRowData.full_marks ? ((editRowData.obtained_marks / editRowData.full_marks) * 100).toFixed(2) : 0
                                  })
                                  .eq('id', row.id);
                                if (error) throw error;
                                setActionMessage('Marks updated successfully!');
                                // Refresh table
                                setTestResultsLoading(true);
                                setEditRowId(null);
                                setEditRowData({});
                                // Refetch data
                                const { data: results, error: fetchError } = await supabase
                                  .from('test_results')
                                  .select('id, student_id, subject, full_marks, obtained_marks, percentage')
                                  .eq('test_id', formData.selectedTest.id)
                                  .range(0, 4999);
                                if (fetchError) throw fetchError;
                                const { data: students, error: studentsError } = await supabase
                                  .from('profiles')
                                  .select('id, full_name, class');
                                if (studentsError) throw studentsError;
                                const table = (results || []).map(row => {
                                  const student = students.find(s => s.id === row.student_id);
                                  return {
                                    ...row,
                                    student_name: student ? student.full_name : row.student_id,
                                    class: student ? student.class : ''
                                  };
                                });
                                setTestResultsTable(table);
                              } catch (err) {
                                setActionMessage('Error updating marks: ' + err.message);
                              } finally {
                                setTestResultsLoading(false);
                              }
                            }}
                          >Save</button>
                          <button
                            style={{ background: '#f87171', color: 'white', border: 'none', borderRadius: 5, padding: '2px 10px', cursor: 'pointer' }}
                            onClick={() => { setEditRowId(null); setEditRowData({}); }}
                          >Cancel</button>
                        </>
                      ) : (
                        <>
                          <button
                            style={{ background: '#3b82f6', color: 'white', border: 'none', borderRadius: 5, padding: '2px 10px', marginRight: 6, cursor: 'pointer' }}
                            onClick={() => { setEditRowId(row.id); setEditRowData({ subject: row.subject, full_marks: row.full_marks, obtained_marks: row.obtained_marks }); }}
                          >Edit</button>
                          <button
                            style={{ background: '#ef4444', color: 'white', border: 'none', borderRadius: 5, padding: '2px 10px', cursor: 'pointer' }}
                            onClick={async () => {
                              if (!window.confirm('Are you sure you want to delete this result?')) return;
                              setActionMessage('');
                              setTestResultsLoading(true);
                              try {
                                const { error } = await supabase
                                  .from('test_results')
                                  .delete()
                                  .eq('id', row.id);
                                if (error) throw error;
                                setActionMessage('Result deleted successfully!');
                                // Refresh table
                                const { data: results, error: fetchError } = await supabase
                                  .from('test_results')
                                  .select('id, student_id, subject, full_marks, obtained_marks, percentage')
                                  .eq('test_id', formData.selectedTest.id)
                                  .range(0, 4999);
                                if (fetchError) throw fetchError;
                                const { data: students, error: studentsError } = await supabase
                                  .from('profiles')
                                  .select('id, full_name, class');
                                if (studentsError) throw studentsError;
                                const table = (results || []).map(row => {
                                  const student = students.find(s => s.id === row.student_id);
                                  return {
                                    ...row,
                                    student_name: student ? student.full_name : row.student_id,
                                    class: student ? student.class : ''
                                  };
                                });
                                setTestResultsTable(table);
                              } catch (err) {
                                setActionMessage('Error deleting result: ' + err.message);
                              } finally {
                                setTestResultsLoading(false);
                              }
                            }}
                          >Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}


      {/* Add Test Result Form */}
        <div className="form-container">
          {/* Confirm Submission Dialog */}
          {showConfirm && (
            <div className="confirm-container">
              <h3>Confirm Submission</h3>
              <p>Are you sure you want to publish these test results?</p>
              <div className="button-group">
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Publishing...' : 'Publish'}
                </button>
              </div>
            </div>
          )}

          {/* Summary Review */}
          {showSummary && (
            <div className="summary-container">
              <h3>Review Test Results</h3>
              <div className="summary-content">
                <div className="summary-item">
                  <span>Centre:</span>
                  <span>{centres.find(c => c.id === formData.centre_id)?.name || '-'}</span>
                </div>
                <div className="summary-item">
                  <span>Test Name:</span>
                  <span>{formData.test_name || '-'}</span>
                </div>
                <div className="summary-item">
                  <span>Test Date:</span>
                  <span>{formData.test_date && !isNaN(new Date(formData.test_date)) ? new Date(formData.test_date).toLocaleDateString() : '-'}</span>
                </div>
                <div className="summary-item">
                  <span>Student:</span>
                  <span>{selectedCentreStudents.find(s => s.id === formData.selectedStudent)?.full_name}</span>
                </div>
                <div className="subjects-summary">
                  {(Array.isArray(formData.subjects) ? formData.subjects : []).map((subject, index) => (
                    <div key={index} className="subject-summary">
                      <div>
                        <span>Rank:</span>
                        <span>{formData.selectedTest && formData.selectedTest.id ? testResultsTable.find(r => r.student_id === formData.selectedStudent && r.subject === subject.subject)?.rank : '-'}</span>
                      </div>
                      <div>
                        <span>Subject:</span>
                        <span>{subject.subject}</span>
                      </div>
                      <div>
                        <span>Marks:</span>
                        <span>{subject.obtained_marks}/{subject.full_marks}</span>
                      </div>
                      <div>
                        <span>Percentage:</span>
                        <span>{calculatePercentage(subject.full_marks, subject.obtained_marks)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="button-group">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={loading}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleConfirmSubmit}
                  disabled={loading}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          {/* Multi-step Form */}
          {!showSummary && !showConfirm && (
            <>
              {currentStep === 1 && (
                <>
                  <h3>Step 1: Select or Create Test</h3>
                  <div className="form-group">
                    <label>Test</label>
                    <select
                      value={formData.selectedTest ? formData.selectedTest.id : ''}
                      onChange={e => {
                        const test = tests.find(t => t.id === e.target.value);
                        setFormData(prev => ({
                          ...prev,
                          selectedTest: test,
                          centre_id: test?.centre_id || '',
                          test_name: test?.test_name || '',
                          test_date: test?.test_date || ''
                        }));
                      }}
                      disabled={loading}
                    >
                      <option value="">Select Test</option>
                      {tests.map(test => (
                        <option key={test.id} value={test.id}>
                          {test.test_name} ({test.test_date}) - {test.centres?.name || test.centre_id}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="button" onClick={() => setShowCreateTest(v => !v)} style={{ margin: '10px 0', background: '#3b82f6', color: 'white', border: 'none', borderRadius: 6, padding: '0.5rem 1rem', cursor: 'pointer' }}>
                    {showCreateTest ? 'Cancel' : 'Create New Test'}
                  </button>
                  {showCreateTest && (
                    <div className="form-group" style={{ border: '1.5px solid #e5e7eb', borderRadius: 8, padding: 16, margin: '10px 0' }}>
                      <label>Test Name</label>
                      <input
                        type="text"
                        value={formData.newTest.test_name}
                        onChange={e => setFormData(prev => ({ ...prev, newTest: { ...prev.newTest, test_name: e.target.value } }))}
                        placeholder="Enter test name"
                        required
                        disabled={loading}
                      />
                      <label>Test Date</label>
                      <input
                        type="date"
                        value={formData.newTest.test_date}
                        onChange={e => setFormData(prev => ({ ...prev, newTest: { ...prev.newTest, test_date: e.target.value } }))}
                        required
                        disabled={loading}
                      />
                      <label>Centre</label>
                      <select
                        value={formData.newTest.centre_id}
                        onChange={e => setFormData(prev => ({ ...prev, newTest: { ...prev.newTest, centre_id: e.target.value } }))}
                        required
                        disabled={loading}
                      >
                        <option value="">Select Centre</option>
                        {centres.map(centre => (
                          <option key={centre.id} value={centre.id}>{centre.name}</option>
                        ))}
                      </select>
                      <button type="button" style={{ marginTop: 10, background: '#10b981', color: 'white', border: 'none', borderRadius: 6, padding: '0.5rem 1rem', cursor: 'pointer' }} onClick={createTest} disabled={loading}>
                        {loading ? 'Creating...' : 'Create Test'}
                      </button>
                    </div>
                  )}
                  {formData.selectedTest && (
                    <div style={{ margin: '16px 0', background: '#f9fafb', border: '1.5px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
                      <b>Selected Test:</b> {formData.selectedTest.test_name} <br/>
                      <b>Date:</b> {formData.selectedTest.test_date} <br/>
                      <b>Centre:</b> {centres.find(c => c.id === formData.selectedTest.centre_id)?.name || formData.selectedTest.centre_id}
                    </div>
                  )}
                  <div className="button-group">
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={loading || !formData.selectedTest}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}


              {currentStep === 2 && (
                <>
                  <h3>Step 2: Select Student</h3>
                  <div className="form-group">
                    <label>Student in Centre</label>
                    {selectedCentreStudents.length === 0 ? (
                      <div>No students found for this centre.</div>
                    ) : (
                      <select
                        value={formData.selectedStudent || ''}
                        onChange={e => setFormData(prev => ({ ...prev, selectedStudent: e.target.value }))}
                        required
                        disabled={loading}
                      >
                        <option value="">Select Student</option>
                        {selectedCentreStudents.map(student => (
                          <option key={student.id} value={student.id}>
                            {student.full_name} (Class: {student.class})
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  {formData.selectedStudent && (() => {
                    const student = selectedCentreStudents.find(s => s.id === formData.selectedStudent);
                    if (!student) return null;
                    return (
                      <div style={{
                        background: '#f9fafb',
                        border: '1.5px solid #e5e7eb',
                        borderRadius: 8,
                        padding: 16,
                        margin: '12px 0 24px 0',
                        maxWidth: 420
                      }}>
                        <div style={{ fontWeight: 700, fontSize: 18, color: '#ea580c', marginBottom: 8 }}>{student.full_name}</div>
                        <div style={{ color: '#444', fontSize: 15 }}>
                          {student.full_name && <div><b>Name:</b> {student.full_name}</div>}
                          {student.father_name && <div><b>Father's Name:</b> {student.father_name}</div>}
                          {student.class && <div><b>Class:</b> {student.class}</div>}
                          {student.centre && (() => {
                            const centreObj = centres.find(c => c.id === student.centre);
                            return <div><b>Centre:</b> {centreObj ? centreObj.name : student.centre}</div>;
                          })()}
                          {student.email && <div><b>Email:</b> {student.email}</div>}
                          {student.phone && <div><b>Mobile:</b> {student.phone}</div>}
                        </div>
                      </div>
                    );
                  })()}
                  <div className="button-group">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={loading}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={loading || !formData.selectedStudent}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}


              {currentStep === 3 && (
                <>
                  <h3>Step 3: Subject Marks Entry</h3>
                  <div className="subjects-container">
                    <div className="subject-group">
                      <div className="form-group">
                        <label>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject || ''}
                          onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          required
                          placeholder="Enter subject name"
                          disabled={loading}
                        />
                      </div>
                      <div className="form-group">
                        <label>Full Marks</label>
                        <input
                          type="number"
                          value={formData.full_marks || ''}
                          onChange={e => setFormData(prev => ({ ...prev, full_marks: e.target.value }))}
                          required
                          min="1"
                          disabled={loading}
                        />
                      </div>
                      <div className="form-group">
                        <label>Obtained Marks</label>
                        <input
                          type="number"
                          value={formData.obtained_marks || ''}
                          onChange={e => setFormData(prev => ({ ...prev, obtained_marks: e.target.value }))}
                          required
                          min="0"
                          disabled={loading}
                        />
                      </div>
                      <div className="percentage-display">
                        Percentage: {calculatePercentage(
                          formData.full_marks,
                          formData.obtained_marks
                        )}%
                      </div>
                    </div>
                  </div>



                  <div className="button-group">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={loading}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={
                        loading ||
                        !formData.subject ||
                        !formData.full_marks ||
                        !formData.obtained_marks ||
                        isNaN(Number(formData.full_marks)) ||
                        isNaN(Number(formData.obtained_marks)) ||
                        Number(formData.full_marks) <= 0 ||
                        Number(formData.obtained_marks) < 0 ||
                        Number(formData.obtained_marks) > Number(formData.full_marks)
                      }
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
    </div>
  );
}

export default TestResultsAdmin;
