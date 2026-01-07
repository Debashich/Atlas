import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('discover');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '/discover') setActiveTab('discover');
    else if (path === '/search') setActiveTab('search');
    else if (path === '/my-events') setActiveTab('events');
  }, [location]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <div className="nav-container">
          <div className="logo">
            <span className="sparkle-icon">✨</span> Atlas
          </div>
          <div className="nav-links">
            <a href="/" className="nav-link">Discover</a>
            <a href="/my-events" className="nav-link">My Events</a>
            <a href="/get-started" className="btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav className="mobile-nav">
        <a 
          href="/" 
          className={`tab-item ${activeTab === 'discover' ? 'active' : ''}`}
        >
          <svg className="tab-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>Discover</span>
        </a>
        
        <a 
          href="/search" 
          className={`tab-item ${activeTab === 'search' ? 'active' : ''}`}
        >
          <svg className="tab-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <span>Search</span>
        </a>
        
        <a 
          href="/my-events" 
          className={`tab-item ${activeTab === 'events' ? 'active' : ''}`}
        >
          <svg className="tab-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>My Events</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
