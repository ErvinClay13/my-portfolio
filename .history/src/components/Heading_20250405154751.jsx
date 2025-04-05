import React, { useState } from "react";
import "./Heading.css";


import ApeCode from "../assets/ApeCode.png";

// Functional component for the page heading/navigation
function Heading() {
  // State to control whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Flip the boolean value
  };

  return (
    <>
      {/* Container for the header */}
      <div className="headingBody">
        
        {/* Branding logo */}
        <img className="ApeCodeImg" src={ApeCode} alt="ApeCode Img" />

        {/* Hamburger menu button (for mobile view) */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation links; 'open' class is added when menu is toggled */}
        <div className={`headingLinks ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" className="links">
            About
          </a>
          <a href="#connect" className="links">
            Connect
          </a>
          <a href="#work" className="links">
            Work
          </a>
          <a href="#skills" className="links">
            Skill
          </a>
        </div>
      </div>
    </>
  );
}

// Exporting component for use in the app
export default Heading;
