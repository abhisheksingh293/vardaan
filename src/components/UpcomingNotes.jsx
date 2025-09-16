import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1745004813314.json';
import './UpcomingNotes.css';

const UpcomingNotes = ({ 
  title = "We're Preparing Your Notes", 
  subtitle = "They will be uploaded as soon as possible. Thank you for your patience!" 
}) => {
  return (
    <div className="upcoming-container">
      {/* Floating particles background */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Main content card */}
      <div className="content-card">
        {/* Header section with icon */}
        <div className="header-section">
          <div className="icon-container">
            <div className="pulse-ring"></div>
            <div className="pulse-ring delay-1"></div>
            <div className="pulse-ring delay-2"></div>
            <Lottie animationData={animationData} loop={true} className="main-animation" />
          </div>
        </div>
        
        {/* Text content */}
        <div className="text-section">
          <h1 className="primary-title">{title}</h1>
          <p className="description">{subtitle}</p>
        </div>
        
        {/* Status indicator */}
        <div className="status-section">
          <div className="status-badge">
            <div className="status-dot"></div>
            <span className="status-text">In Progress</span>
          </div>
          
          {/* Loading animation */}
          <div className="loading-container">
            <div className="loading-dots">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </div>
            <p className="loading-text">Preparing your content</p>
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="decoration-line">
          <div className="line-segment"></div>
          <div className="line-segment"></div>
          <div className="line-segment"></div>
        </div>
      </div>
      
      {/* Background shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default UpcomingNotes;
