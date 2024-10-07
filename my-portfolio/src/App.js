import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/ContactForm">Contact</Link></li>
        </ul>
      </nav>

      {/* Responsive Layouts */}
      {isTabletOrMobile ? (
        <div className="mobile-nav">
          {/*<p>This is the mobile version</p>*/}
          {/* You can modify this layout specifically for mobile */}
        </div>
      ) : (
        <div className="desktop-nav">
          {/*<p>This is the desktop version</p>*/}
          {/* You can modify this layout specifically for desktop */}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
