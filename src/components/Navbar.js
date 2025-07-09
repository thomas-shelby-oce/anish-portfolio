import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Collapse } from 'bootstrap'; // Import Bootstrap's Collapse

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
    // Programmatically close the Bootstrap navbar collapse
    if (navbarCollapseRef.current) {
      const bsCollapse = Collapse.getInstance(navbarCollapseRef.current) || new Collapse(navbarCollapseRef.current, { toggle: false });
      bsCollapse.hide();
    }
  };

  const handleTogglerClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarCollapseRef.current && !navbarCollapseRef.current.contains(event.target) && !event.target.closest('.navbar-toggler')) {
        setIsNavOpen(false);
        const bsCollapse = Collapse.getInstance(navbarCollapseRef.current) || new Collapse(navbarCollapseRef.current, { toggle: false });
        bsCollapse.hide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="hero" smooth={true} duration={500} onClick={handleNavLinkClick}>Anish Gupta</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isNavOpen} aria-label="Toggle navigation" onClick={handleTogglerClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500} onClick={handleNavLinkClick}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="experience" smooth={true} duration={500} onClick={handleNavLinkClick}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth={true} duration={500} onClick={handleNavLinkClick}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="education" smooth={true} duration={500} onClick={handleNavLinkClick}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={500} onClick={handleNavLinkClick}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="achievements" smooth={true} duration={500} onClick={handleNavLinkClick}>Achievements</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;