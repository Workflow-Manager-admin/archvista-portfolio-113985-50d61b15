import React, { useState } from 'react';
import './App.css';
import Hero3D from './Hero3D'; // 3D visual hero centerpiece

// Modern, accessible navigation bar and SPA section scaffolding

// PUBLIC_INTERFACE
function App() {
  // For mobile navigation (burger menu); expand functionality later if needed
  const [navOpen, setNavOpen] = useState(false);

  // Scroll to target section smoothly for accessibility and SPA experience
  // PUBLIC_INTERFACE
  const scrollToSection = (sectionId) => {
    setNavOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          {/* Branding / Logo */}
          <div className="logo" tabIndex="0" aria-label="ArchVista (home)">
            <span className="logo-symbol" aria-hidden="true" style={{ color: "#e67e22"}}>▲</span> ArchVista
          </div>
          {/* Hamburger for mobile nav */}
          <button
            className="btn"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-controls="navbar-menu"
            aria-expanded={navOpen}
            style={{
              display: "none",
              marginLeft: "auto",
              background: "none",
              color: "#e67e22",
              padding: "8px 10px",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}
            onClick={() => setNavOpen((open) => !open)}
            id="burger-menu"
          >
            <span aria-hidden="true">{navOpen ? "✕" : "☰"}</span>
          </button>
          {/* Navigation links */}
          <ul
            className="nav-links"
            id="navbar-menu"
            style={{
              listStyle: "none",
              display: "flex",
              gap: "2rem",
              margin: 0,
              padding: 0,
            }}
          >
            <li><button className="nav-btn" onClick={() => scrollToSection('home')} aria-label="Home">Home</button></li>
            <li><button className="nav-btn" onClick={() => scrollToSection('about')} aria-label="About Me">About</button></li>
            <li><button className="nav-btn" onClick={() => scrollToSection('projects')} aria-label="Projects">Projects</button></li>
            <li><button className="nav-btn" onClick={() => scrollToSection('skills')} aria-label="Skills">Skills</button></li>
            <li><button className="nav-btn" onClick={() => scrollToSection('contact')} aria-label="Contact">Contact</button></li>
          </ul>
        </div>
      </nav>
      <main>
        <section id="home" className="container hero section-section" tabIndex="-1" aria-labelledby="home-heading">
          {/* Add the 3D Hero visual component using react-three-fiber */}
          <Hero3D />
          <div className="subtitle" style={{color: "#e67e22"}}>Freelance Architect</div>
          <h1 className="title" id="home-heading" style={{color: "#2c3e50"}}>Hello, I'm <span style={{color: "#e67e22"}}>Alex Morgan</span></h1>
          <div className="description">
            I design elegant spaces blending function and beauty.<br />Scroll down to see my work, background, and ways to get in touch.
          </div>
        </section>

        <section id="about" className="container about-section section-section" tabIndex="-1" aria-labelledby="about-heading">
          <h2 className="section-title" id="about-heading" style={{color: "#2c3e50"}}>About Me</h2>
          <p className="description">
            {/* Placeholder about text */}
            With over a decade in architectural design, I help clients realize spaces that inspire, endure, and feel unique.<br/>
            Based in San Francisco, passionate about minimal living and sustainable architecture.
          </p>
        </section>

        <section id="projects" className="container projects-section section-section" tabIndex="-1" aria-labelledby="projects-heading">
          <h2 className="section-title" id="projects-heading" style={{color: "#2c3e50"}}>Projects</h2>
          {/* Grid gallery - displayed as cards/scaffolds; replace with actual project data/images later */}
          <div className="projects-grid" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "2rem", marginTop: "2rem"}}>
            {/* Example cards */}
            {[1,2,3].map((idx) => (
              <div key={idx} className="project-card" tabIndex={0} aria-label={`Project example ${idx}`} style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(44,62,80,0.03)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.2s",
                cursor: "pointer",
                border: "1px solid #e2e2e2"
              }}>
                <div style={{
                  background: "#eee",
                  width: "100%",
                  height: "140px",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {/* Placeholder image; later swap for actual project thumbnails */}
                  <span role="img" aria-label="project placeholder" style={{fontSize: "2.5rem", color: "#95a5a6"}}>🏛️</span>
                </div>
                <h3 style={{margin: "0 0 0.5rem 0", color: "#2c3e50"}}>Project Title {idx}</h3>
                <p style={{margin: 0, color: "#95a5a6"}}>Short description of the project, its goals, and impact.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="container skills-section section-section" tabIndex="-1" aria-labelledby="skills-heading">
          <h2 className="section-title" id="skills-heading" style={{color: "#2c3e50"}}>Skills</h2>
          <ul className="skills-list" style={{
            display: "flex", flexWrap: "wrap", gap: "1.5rem", padding: 0, marginTop: "1.5rem", listStyle: "none"
          }}>
            {["Concept Design","Sustainable Solutions","3D Visualization","Residential/Commercial","Project Management"].map(skill => (
              <li key={skill} className="skill-badge" style={{
                background: "#f4f4f4",
                padding: "10px 22px",
                borderRadius: "20px",
                color: "#2c3e50",
                fontWeight: 500,
                fontSize: "1rem"
              }}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="container contact-section section-section" tabIndex="-1" aria-labelledby="contact-heading">
          <h2 className="section-title" id="contact-heading" style={{color: "#2c3e50"}}>Contact</h2>
          <form className="contact-form" style={{display: "grid", gap: "1.1rem", maxWidth: "480px", margin: "0 auto"}} autoComplete="off" aria-label="Contact form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your Name"
              style={{padding:"10px", borderRadius:"5px", border:"1px solid #ccc", fontSize: "1rem"}} />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="your@email.com"
              style={{padding:"10px", borderRadius:"5px", border:"1px solid #ccc", fontSize: "1rem"}}/>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" required placeholder="Subject"
              style={{padding:"10px", borderRadius:"5px", border:"1px solid #ccc", fontSize: "1rem"}}/>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={4} maxLength={800} placeholder="How can I help you?"
              style={{padding:"10px", borderRadius:"5px", border:"1px solid #ccc", fontSize: "1rem", minHeight: "90px", resize: "vertical"}} />
            <button type="submit" className="btn btn-large" style={{
              background: "#e67e22",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontWeight: 500,
              fontSize: "1.15rem"
            }}>Send Message</button>
          </form>
        </section>
      </main>
      <footer className="container" style={{textAlign: "center", color: "#95a5a6", fontSize: "0.95rem", margin: "2rem auto 0 auto", paddingBottom: "2rem"}}>
        &copy; {new Date().getFullYear()} Alex Morgan. Designed &amp; built with <span aria-hidden="true" style={{color: "#e67e22"}}>▲</span> ArchVista Portfolio.
      </footer>
    </div>
  );
}

export default App;