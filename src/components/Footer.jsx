import React from "react";
import "./Footer.css";

import { BUILD_TIMESTAMP } from "../buildInfo";

const Footer = () => (
  <footer className="vardaan-footer">
    <div className="footer-main">
      <div className="footer-col footer-logo-desc">
        <img src="https://res.cloudinary.com/dxwszplz7/image/upload/v1751363110/logo_orange_pyl0id.png" alt="Vardaan Logo" className="footer-logo" />
        <p className="footer-desc">
          Empowering Classes 1-12 with adaptive learning, expert teachers, and engaging resources for every step of your academic journey.
        </p>
      </div>
      <div className="footer-links-row">
        <div className="footer-col">
          <div className="footer-title">Courses</div>
          <a href="#" className="footer-link">Vardaan Junior</a>
          <a href="#" className="footer-link">Vardaan Senior</a>
          <a href="#" className="footer-link">Result</a>
          <a href="#" className="footer-link">Top Results</a>
          <a href="#" className="footer-link">Student Login</a>
        </div>
      </div>
      <div className="footer-col">
          <div className="footer-title">Quick Links</div>
          <a href="#" className="footer-link">Notes</a>
          <a href="#" className="footer-link">NCERT</a>
          <a href="#" className="footer-link">Books Solution</a>
          <a href="#" className="footer-link">Syllabus</a>
          <a href="#" className="footer-link">Test Papers</a>
        </div>
      <div className="footer-col footer-contact">
        <div className="footer-contact-info">
          <div className="footer-contact-phone">+91 9508841336</div>
          <div className="footer-contact-email">learningvardaan@gmail.com</div>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com/vardaanlearning" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
          <a href="https://instagram.com/vardaanlearning" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/vardaan-learning-institute/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          <a href="https://twitter.com/vardaanlearning" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="Twitter/X" /></a>
          <a href="https://youtube.com/@vardaanlearning" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div style={{ fontWeight: 'bold', color: '#e67e22', fontSize: '1.1em', letterSpacing: '2px', marginBottom: '4px' }}>
        Owned by ABAR
      </div>
      2025 Vardaan Learning Institute. All rights reserved.<br />
      <span style={{ fontSize: '0.85em', color: '#aaa' }}>
        Last updated at: {new Date(BUILD_TIMESTAMP).toLocaleString()}
      </span>
    </div>
  </footer>
);

export default Footer;
