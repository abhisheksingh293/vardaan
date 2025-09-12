import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import supabase from "../supabaseClient";
import JuniorMentorSlider from "../components/JuniorMentorSlider";
import StudentsLoveSection from "../components/StudentsLoveSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import "./GlobalSectionFit.css";
import CircularTeacherSlider from "../components/CircularTeacherSlider";
import HallOfFame from "../components/HallOfFame";

const LandingPage = () => {
  const navigate = useNavigate();
  const [topResults, setTopResults] = useState([]);
  const [loadingTopResults, setLoadingTopResults] = useState(true);
  const [topResultsError, setTopResultsError] = useState("");

  useEffect(() => {
    async function fetchTopResults() {
      setLoadingTopResults(true);
      setTopResultsError("");
      try {
        // Get the latest test with centre_id
        const { data: latestTests, error: latestError } = await supabase
          .from("test_results")
          .select("test_id, test_name, test_date, centre_id")
          .order("test_date", { ascending: false })
          .limit(1);
        const latestTest = latestTests?.[0];
        if (latestError) throw latestError;
        if (!latestTest) {
          setTopResults([]);
          setLoadingTopResults(false);
          return;
        }
        // Fetch all results for this test
        const { data: allResults, error: allError } = await supabase
          .from("test_results")
          .select(
            "student_id, subject, full_marks, obtained_marks, percentage, test_name, test_date"
          )
          .eq("test_id", latestTest.test_id);
        if (allError) throw allError;
        // Calculate combined percentages for each student
        const studentResults = {};
        allResults.forEach((result) => {
          if (!studentResults[result.student_id]) {
            studentResults[result.student_id] = {
              subjects: [],
              total_percentage: 0,
              subject_count: 0,
            };
          }
          studentResults[result.student_id].subjects.push({
            subject: result.subject,
            full_marks: result.full_marks,
            obtained_marks: result.obtained_marks,
            percentage: result.percentage,
          });
          studentResults[result.student_id].total_percentage += Number(
            result.percentage
          );
          studentResults[result.student_id].subject_count++;
        });
        // Calculate combined percentage for each student
        const combinedResults = Object.entries(studentResults).map(
          ([studentId, data]) => ({
            student_id: studentId,
            subjects: data.subjects,
            combined_percentage: (
              data.total_percentage / data.subject_count
            ).toFixed(2),
          })
        );
        // Sort by combined percentage and take top 3
        const topResultsRaw = combinedResults
          .sort(
            (a, b) =>
              parseFloat(b.combined_percentage) -
              parseFloat(a.combined_percentage)
          )
          .slice(0, 3);
        // Fetch student names
        const studentIds = topResultsRaw.map((r) => r.student_id);
        const { data: students, error: studentsError } = await supabase
          .from("profiles")
          .select("id, full_name, class, profile_image")
          .in("id", studentIds);
        if (studentsError) throw studentsError;
        const studentMap = {};
        students.forEach((s) => {
          studentMap[s.id] = s;
        });
        // Format results with rank and combined percentage
        const formattedResults = topResultsRaw.map((r, idx) => ({
          student_id: r.student_id,
          rank: idx + 1,
          student_name: studentMap[r.student_id]?.full_name || r.student_id,
          class: studentMap[r.student_id]?.class || "",
          profile_image: studentMap[r.student_id]?.profile_image || "",
          combined_percentage: r.combined_percentage,
          subjects: r.subjects,
        }));
        setTopResults(formattedResults);
      } catch (err) {
        setTopResultsError(
          "Failed to fetch top results: " + (err.message || err)
        );
      } finally {
        setLoadingTopResults(false);
      }
    }
    fetchTopResults();
  }, []);

  return (
    <>
      <div>
        <section className="section-fit rounded-3xl shadow-lg p-4 md:p-6 relative overflow-hidden">
          {/* Chalkboard overlay */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden rounded-3xl">
  <img
    src="https://www.shutterstock.com/shutterstock/videos/1105569307/thumb/12.jpg?ip=x480"
    alt="Chalkboard background"
    style={{ filter: 'blur(4px) brightness(0.8)' }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60"></div>
</div>
          <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-center px-4 pt-8">
            {/* Left Side */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto py-12">
              <img
                src="https://res.cloudinary.com/dxwszplz7/image/upload/v1751363110/logo_orange_axqhad.svg"
                alt="Vardaan Logo"
                className="h-36 w-36 md:h-52 md:w-52 mt-0 hidden md:block"
              />
              <h1 className="text-center text-6xl md:text-6xl font-extrabold text-[#ff4e3c] mb-8 leading-tight hidden md:block">
                Vardaan Learning Institute
              </h1>
              <p className="text-center text-3xl md:text-3xl text-[#ffb200] font-bold mb-12 max-w-2xl hidden md:block">
                Empowering Bright Minds for Tomorrow
              </p>
              <img
                src="https://res.cloudinary.com/dxwszplz7/image/upload/v1751363357/Junior_c8yrv6.png"
                alt="Vardaan Junior Illustration"
                className="block md:hidden mx-auto mb-8 w-full max-w-full px-0 h-auto"
              />
              <div className="flex flex-col md:flex-row gap-8 w-full max-w-lg justify-center mb-12">
  <button
    onClick={() => navigate("/vardaan-junior")}
    className="hover:cursor-pointer px-6 py-2 bg-gradient-to-r from-[#ff4e1e] to-[#ffb200] rounded-xl text-white font-semibold text-2xl focus:outline-none transition-all whitespace-nowrap"
  >
    Vardaan Junior
  </button>
  <button
    onClick={() => navigate("/vardaan-senior")}
    className="hover:cursor-pointer px-6 py-2 bg-gradient-to-r from-[#ff4e1e] to-[#ffb200] rounded-xl text-white font-semibold text-2xl focus:outline-none transition-all whitespace-nowrap"
  >
    Vardaan Senior
  </button>
</div>
              <div className="text-[#ffb200] text-4xl md:text-4xl font-extrabold mb-0">
                <a href="tel:+919508841336" className="hover:underline hover:text-[#ffcc00] transition-colors duration-200 text-3xl md:text-4xl">
                  +91 9508841336
                </a>
              </div>
            </div>
            {/* Right Side: Teacher Image */}
            <div className="flex-1 flex items-center justify-center w-full max-w-xl mx-auto py-0">
              <img
                src="https://res.cloudinary.com/dxwszplz7/image/upload/v1751363357/teacher_w9xjz1.png"
                alt="Ankit Bhaiya Illustration"
                className="hidden md:block"
              />
            </div>
          </div>
        </section>
        {/* Learning Track Section */}
        <section className="section-fit w-full bg-[#f7f8fa] pt-4 pb-16 flex flex-col items-center max-w-7xl mx-auto mt-12 ">
          <h2 className="text-[#ff4e3c] text-3xl md:text-5xl font-extrabold mb-12 text-center">
            Find Your Perfect Learning Track
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch w-full px-2 md:px-0">
            {/* Junior Card */}
            <div className="flex-1 bg-white rounded-3xl border border-blue-300 shadow-lg p-10 flex flex-col items-center min-w-[320px] max-w-xl">
              <span className="text-6xl mb-2">👦</span>
              <div className="w-full bg-gradient-to-r from-[#6dd5fa] to-[#b2fefa] text-white font-extrabold px-0 py-3 rounded-t-2xl text-lg md:text-xl shadow-sm flex items-center justify-center mb-4">
                Vardaan Junior
              </div>
              <div className="text-[#ff4e3c] text-2xl md:text-4xl font-extrabold mb-3 text-center">
                For <span className="text-[#ff4e3c]">Class 1 to 5</span>
              </div>
              <ul className="text-gray-700 text-left mb-7 space-y-3 w-full max-w-md">
                <li className="flex items-center gap-3">
                  <span className="text-pink-500 text-xl">📍</span>
                  <span>
                    <b>Classes 1 to 3:</b> Build strong foundations in all
                    Subjects with clarity
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">🟦</span>
                  <span>
                    <b>Classes 4 & 5:</b> Prepare for upper school with deeper
                    concepts
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 text-xl">🌸</span>
                  <span>
                    <b>Focus:</b> Make learning joyful, consistent, and
                    confidence-boosting
                  </span>
                </li>
              </ul>
              <div className="flex gap-4 mb-7">
                <button 
                  onClick={() => navigate("/vardaan-junior?class=1-3")}
                  className="hover:cursor-pointer bg-white border border-blue-400 text-blue-600 font-bold rounded-full px-8 py-2 text-md md:text-lg shadow-sm hover:bg-blue-50 transition-colors"
                >
                  Class I–III
                </button>
                <button 
                  onClick={() => navigate("/vardaan-junior?class=4-5")}
                  className="hover:cursor-pointer bg-white border border-blue-400 text-blue-600 font-bold rounded-full px-8 py-2 text-md md:text-lg shadow-sm hover:bg-blue-50 transition-colors"
                >
                  Class IV–V
                </button>
              </div>
              <button 
                onClick={() => navigate("/vardaan-junior")}
                className="hover:cursor-pointer py-2 w-full bg-gradient-to-r from-[#ff3300] to-[#ffb200] text-white font-extrabold rounded-full px-8 text-2xl mt-auto shadow-md hover:opacity-90 transition-opacity"
              >
                Explore Junior
              </button>
            </div>
            {/* Senior Card */}
            <div className="flex-1 bg-white rounded-3xl border border-orange-300 shadow-lg p-10 flex flex-col items-center min-w-[320px] max-w-xl">
              <span className="text-6xl mb-2">🎓</span>
              <div className="w-full bg-gradient-to-r from-[#ffe259] to-[#ffa751] text-white font-extrabold px-0 py-3 rounded-t-2xl text-lg md:text-xl shadow-sm flex items-center justify-center mb-4">
                Vardaan Senior
              </div>
              <div className="text-[#ff4e3c] text-2xl md:text-4xl font-extrabold mb-3 text-center">
                For <span className="text-[#ff4e3c]">Class 6 to 12</span>
              </div>
              <ul className="text-gray-700 text-left mb-7 space-y-3 w-full max-w-md">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">🔍</span>
                  <span>
                    <b>Classes 6 to 8:</b> Strengthen your base, master the
                    basics
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">📚</span>
                  <span>
                    <b>Classes 9 & 10:</b> Ace boards with strategy & structure
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-500 text-xl">🎯</span>
                  <span>
                    <b>Classes 11 & 12:</b> Be exam-ready (JEE, NEET, Boards)
                    with precision
                  </span>
                </li>
              </ul>
              <div className="flex gap-4 mb-7 flex-wrap justify-center">
                <button 
                  onClick={() => navigate("/vardaan-senior?class=6-8")}
                  className="bg-white border border-orange-400 text-orange-600 font-bold rounded-full px-8 py-2 text-md md:text-lg shadow-sm hover:bg-orange-50 transition-colors"
                >
                  Std VI–VIII
                </button>
                <button 
                  onClick={() => navigate("/vardaan-senior?class=9-10")}
                  className="bg-white border border-orange-400 text-orange-600 font-bold rounded-full px-8 py-2 text-md md:text-lg shadow-sm hover:bg-orange-50 transition-colors"
                >
                  IX–X
                </button>
                <button 
                  onClick={() => navigate("/vardaan-senior?class=11-12")}
                  className="bg-white border border-orange-400 text-orange-600 font-bold rounded-full px-8 py-2 text-md md:text-lg shadow-sm hover:bg-orange-50 transition-colors"
                >
                  XI–XII
                </button>
              </div>
              <button 
                onClick={() => navigate("/vardaan-senior")}
                className="hover:cursor-pointer py-2 w-full bg-gradient-to-r from-[#ff3300] to-[#ffb200] text-white font-extrabold rounded-full px-8 text-2xl mt-auto shadow-md hover:opacity-90 transition-opacity"
              >
                Explore Senior
              </button>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <ImageCarousel />

        {/* Meet Ankit Bhaiya Section */}
        <section className="w-full flex flex-col items-center py-16 bg-[#fff9f3] px-4 md:px-0 mb-12">
          <h2 className="text-[#ff4e3c] text-3xl md:text-5xl font-extrabold mb-8 text-center">
            Meet Ankit Bhaiya
          </h2>
          <img
            src="https://res.cloudinary.com/dxwszplz7/image/upload/v1751363294/5_Ankit_bhaiya_meet_q45vdj.png"
            alt="Ankit Bhaiya"
            className="max-w-4xl rounded-2xl shadow-xl bg-white object-contain mx-auto ankit-bhaiya-img"
          />
        </section>

        {/* Study Material Section */}
        <section className="landing-section study-resources-section py-16 bg-white px-4 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-[#ff4e3c] text-3xl md:text-5xl font-extrabold mb-2 text-center">
              Study Material
            </h2>
            <div className="study-resources-subtitle text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
              A diverse array of learning materials to enhance your educational
              journey.
            </div>
            <div className="study-resources-grid flex flex-col md:flex-row gap-6 sm:gap-8 w-full">
            {/* Notes Card */}
            <Link
              to="/notes"
              className="study-resource-card notes flex-1 rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-8 flex flex-col items-start justify-between shadow hover:shadow-lg transition no-underline relative"
              data-discover="true"
            >
              <div className="resource-card-header text-xl font-extrabold text-red-600 mb-2 text-left">
                Notes
              </div>
              <div className="resource-card-desc text-gray-700 mb-6 sm:mb-8 text-left">
                Use Vardaan's detailed study materials that simplify complex
                ideas into easily understandable language.
              </div>
              <div className="resource-card-illustration flex justify-start mb-2">
                {/* SVG for Notes */}
                <svg width="80" height="80" fill="none">
                  <rect
                    x="10"
                    y="20"
                    width="60"
                    height="40"
                    rx="8"
                    fill="#fbbf24"
                    opacity="0.12"
                  ></rect>
                  <rect
                    x="16"
                    y="26"
                    width="48"
                    height="28"
                    rx="4"
                    fill="#fbbf24"
                  ></rect>
                  <rect
                    x="24"
                    y="32"
                    width="32"
                    height="5"
                    rx="2.5"
                    fill="#fff"
                  ></rect>
                  <rect
                    x="24"
                    y="41"
                    width="20"
                    height="5"
                    rx="2.5"
                    fill="#fff"
                  ></rect>
                </svg>
              </div>
              <span className="resource-card-arrow absolute right-6 bottom-6 text-2xl text-yellow-400">
                →
              </span>
            </Link>
            {/* Reference Books Card */}
            <Link
              to="/book-solutions"
              className="study-resource-card books flex-1 rounded-2xl border-2 border-blue-300 bg-blue-50 p-8 flex flex-col items-start justify-between shadow hover:shadow-lg transition no-underline relative"
              data-discover="true"
            >
              <div className="resource-card-header text-xl font-extrabold text-red-600 mb-2 text-left">
                Books Solutions
              </div>
              <div className="resource-card-desc text-gray-700 mb-6 sm:mb-8 text-left">
                Our experts have created thorough study materials that break
                down complicated concepts into easily understandable content.
              </div>
              <div className="resource-card-illustration flex justify-start mb-2">
                {/* SVG for Reference Books */}
                <svg width="80" height="80" fill="none">
                  <rect
                    x="20"
                    y="30"
                    width="40"
                    height="20"
                    rx="6"
                    fill="#38bdf8"
                    opacity="0.12"
                  ></rect>
                  <rect
                    x="26"
                    y="36"
                    width="28"
                    height="8"
                    rx="2"
                    fill="#38bdf8"
                  ></rect>
                  <rect
                    x="30"
                    y="44"
                    width="20"
                    height="4"
                    rx="2"
                    fill="#fff"
                  ></rect>
                </svg>
              </div>
              <span className="resource-card-arrow absolute right-6 bottom-6 text-2xl text-blue-400">
                →
              </span>
            </Link>
            {/* NCERT Solutions Card */}
            <Link
              to="/ncertbooks"
              className="study-resource-card ncert flex-1 rounded-2xl border-2 border-pink-300 bg-pink-50 p-8 flex flex-col items-start justify-between shadow hover:shadow-lg transition no-underline relative"
              data-discover="true"
            >
              <div className="resource-card-header text-xl font-extrabold text-red-600 mb-2 text-left">
                NCERT Books
              </div>
              <div className="resource-card-desc text-gray-700 mb-6 sm:mb-8 text-left">
                Unlock academic excellence with Vardaan's NCERT Books which
                provide you step-by-step solutions.
              </div>
              <div className="resource-card-illustration flex justify-start mb-2">
                {/* SVG for NCERT Solutions */}
                <svg width="80" height="80" fill="none">
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="#fb7185"
                    opacity="0.12"
                  ></circle>
                  <path
                    d="M40 25v30"
                    stroke="#fb7185"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <circle cx="40" cy="40" r="7" fill="#fb7185"></circle>
                  <circle cx="40" cy="40" r="4" fill="#fff"></circle>
                </svg>
              </div>
              <span className="resource-card-arrow absolute right-6 bottom-6 text-2xl text-pink-400">
                →
              </span>
            </Link>
          </div>
          </div>
        </section>

        {/* Top Results Section */}
        {/* <section className="w-full flex flex-col items-center py-16 bg-[#f7f8fa] px-4 md:px-0 mt-12 mb-12 !px-4 md:!px-0">
          <h2 className="text-[#ff4e3c] text-3xl md:text-5xl font-extrabold mb-2 text-center">
            Check Top Results
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mb-10 text-lg md:text-xl">
            See how Vardaan students have excelled in their academic journeys!
          </p>
          <div className="flex flex-col gap-3 w-full md:hidden">
            {loadingTopResults ? (
              <div className="flex items-center justify-center min-h-[80px] text-lg text-gray-500 w-full">
                Loading...
              </div>
            ) : topResultsError ? (
              <div className="flex items-center justify-center min-h-[80px] text-lg text-red-500 w-full">
                {topResultsError}
              </div>
            ) : topResults.length === 0 ? (
              <div className="flex items-center justify-center min-h-[80px] text-lg text-gray-500 w-full">
                No results available.
              </div>
            ) : (
              topResults.slice(0, 3).map((r, idx) => (
                <div
                  key={r.student_id}
                  className="flex items-center bg-white rounded-xl shadow border border-orange-200 px-4 py-3"
                >
                  <img
                    src={r.profile_image || "/default-avatar.png"}
                    alt={r.student_name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#ffb200] mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">
                      {r.student_name}
                    </div>
                    <div className="text-xs text-gray-500">{r.class}</div>
                  </div>
                  <div className="text-orange-500 font-extrabold text-lg ml-2">
                    #{r.rank}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="hidden md:flex md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
            {loadingTopResults ? (
              <div className="flex-1 flex items-center justify-center min-h-[180px] text-lg text-gray-500">
                Loading...
              </div>
            ) : topResultsError ? (
              <div className="flex-1 flex items-center justify-center min-h-[180px] text-lg text-red-500">
                {topResultsError}
              </div>
            ) : topResults.length === 0 ? (
              <div className="flex-1 flex items-center justify-center min-h-[180px] text-lg text-gray-500">
                No results available.
              </div>
            ) : (
              topResults.map((r, idx) => (
                <div
                  key={r.student_id}
                  className="flex-1 bg-white rounded-2xl shadow-lg border border-orange-200 p-8 flex flex-col items-center justify-center min-w-[220px]"
                >
                  <img
                    src={r.profile_image || "/default-avatar.png"}
                    alt={r.student_name}
                    className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-[#ffb200]"
                  />
                  <div className="text-2xl font-extrabold text-[#ffb200] mb-2">
                    {r.student_name}
                  </div>
                  <div className="text-lg text-gray-700 mb-1">{r.class}</div>
                  <div className="text-3xl font-bold text-[#ff4e3c] mb-2">
                    {r.combined_percentage}%
                  </div>
                  <div className="text-sm text-gray-400">Rank #{r.rank}</div>
                </div>
              ))
            )}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center w-full gap-4">
            <Link
              to="/top-results"
              className="px-8 py-3 bg-[#ff4e3c] !text-white font-bold rounded-full shadow-lg text-lg hover:bg-[#ffb200] !hover:text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#ffb200]/30"
              style={{
                textDecoration: "none",
                textShadow: "0 1px 8px #b65c0a",
              }}
              style={{ textDecoration: "none" }}
            >
              See All Top Results
            </Link>
            <Link
              to="/result-check"
              className="px-8 py-3 bg-[#ff4e3c] !text-white font-bold rounded-full shadow-lg text-lg hover:bg-[#ffb200] !hover:text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#ffb200]/30 sm:ml-4"
              style={{
                textDecoration: "none",
                textShadow: "0 1px 8px #b65c0a",
              }}
              style={{ textDecoration: "none" }}
            >
              Check Result
            </Link>
          </div>
        </section> */}

        <section
          className="hidden md:flex hide-on-mobile"
          style={{
            width: "100%",
            borderRadius: 40,
            boxShadow: "0 2px 16px #b6e38833",
            margin: "48px 0 0 0",
            padding: "0 5vw",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            overflowX: "hidden",
          }}
        >
          <h2
            style={{
              fontSize: 29,
              fontWeight: 900,
              color: "#236d1e",
              marginBottom: 10,
              letterSpacing: 0.5,
              whiteSpace: "nowrap",
            }}
          >
            Mentors Who Inspire,
          </h2>
          <h2
            style={{
              fontSize: 29,
              fontWeight: 900,
              color: "#236d1e",
              marginBottom: 10,
              letterSpacing: 0.5,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#ea580c", fontWeight: 700 }}>
              {" "}
              Educators Who Empower
            </span>
          </h2>
          <JuniorMentorSlider />
        </section>

        {/* Hall of Fame Section */}
        {/* <HallOfFame /> */}

        {/* mentor card slider mobile view */}
        <div
          className="show-on-mobile"
          style={{
            margin: "32px 0 40px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: 29,
              fontWeight: 900,
              color: "#236d1e",
              marginBottom: 10,
              letterSpacing: 0.5,
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            Mentors Who Inspire,
          </h2>
          <h2
            style={{
              fontSize: 29,
              fontWeight: 900,
              color: "#236d1e",
              marginBottom: 10,
              letterSpacing: 0.5,
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#ea580c", fontWeight: 700 }}>
              {" "}
              Educators Who Empower
            </span>
          </h2>

          <CircularTeacherSlider />
        </div>

        {/* Why Choose Vardaan Section */}
        <section className="w-full flex flex-col items-center py-16 bg-[#fff9f3] px-4 px-4 md:px-0 mt-12 mb-12 !px-4 md:!px-0">
          <h2 className="text-[#ff4e3c] text-3xl md:text-5xl font-extrabold mb-8 text-center">
            Why Choose Vardaan?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-stretch">
            <div className="flex-1 bg-white rounded-xl shadow-lg border-t-4 border-[#ffd600] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">📚</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Comprehensive Courses
              </div>
              <div className="text-gray-700 text-base">
                Wide range of subjects and topics for all classes, designed by
                experts.
              </div>
            </div>
            <div className="flex-1 bg-[#f0faff] rounded-xl shadow-lg border-t-4 border-[#38bdf8] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">👩‍🏫</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Expert Teachers
              </div>
              <div className="text-gray-700 text-base">
                Learn from experienced educators and mentors, anytime, anywhere.
              </div>
            </div>
            <div className="flex-1 bg-[#fff0f6] rounded-xl shadow-lg border-t-4 border-[#fb7185] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">📝</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Practice & Tests
              </div>
              <div className="text-gray-700 text-base">
                Unlimited practice questions, mock tests, and instant feedback.
              </div>
            </div>
            <div className="flex-1 bg-[#e7fff6] rounded-xl shadow-lg border-t-4 border-[#10b981] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">🎯</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Personalized Learning
              </div>
              <div className="text-gray-700 text-base">
                Adaptive learning paths and recommendations based on your
                progress.
              </div>
            </div>
          </div>
        </section>

        {/* Extra Features Section */}
        <section className="w-full flex flex-col items-center py-16 bg-[#fff9f3] px-4 md:px-0 mt-12 mb-12 !px-4 md:!px-0">
          <h2 className="text-[#ff4e3c] text-3xl md:text-5xl font-extrabold mb-8 text-center">
            More Reasons to Love Vardaan
          </h2>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-stretch">
            <div className="flex-1 bg-white rounded-xl shadow-lg border-t-4 border-[#a78bfa] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">💬</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Doubt Support
              </div>
              <div className="text-gray-700 text-base">
                Get your doubts solved quickly by our experts and mentors.
              </div>
            </div>
            <div className="flex-1 bg-[#f0fff7] rounded-xl shadow-lg border-t-4 border-[#34d399] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">📈</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Progress Tracking
              </div>
              <div className="text-gray-700 text-base">
                Track your learning journey with detailed analytics and reports.
              </div>
            </div>
            <div className="flex-1 bg-[#fff7ed] rounded-xl shadow-lg border-t-4 border-[#fb923c] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">⏰</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Flexible Schedule
              </div>
              <div className="text-gray-700 text-base">
                Learn at your own pace with flexible class timings and access.
              </div>
            </div>
            <div className="flex-1 bg-[#f3f0ff] rounded-xl shadow-lg border-t-4 border-[#6366f1] p-8 flex flex-col items-start min-w-[220px]">
              <span className="text-3xl mb-3">🤝</span>
              <div className="text-xl font-extrabold text-[#ff4e3c] mb-2">
                Community & Events
              </div>
              <div className="text-gray-700 text-base">
                Participate in events and connect with a vibrant learning
                community.
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* Students Love Section */}
        <StudentsLoveSection />

        {/* Footer Section */}
        <Footer />
        
        {/* Floating WhatsApp Button - Mobile Only */}
        <a 
          href="https://wa.me/919508841336" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-4 md:hidden z-50 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-200"
          aria-label="Chat on WhatsApp"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://en.m.wikipedia.org/wiki/File:WhatsApp.svg';
            }}
          />
        </a>
      </div>
    </>
  );
};

export default LandingPage;
