import React, { useState } from "react";
import "./Heading.css";
import ApeCode from "../assets/ApeCode.png";

function Heading() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="headingBody">
        {/* Logo */}
        <img className="ApeCodeImg" src={ApeCode} alt="ApeCode Img" />

        {/* Hamburger Menu */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Links */}
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

export default Heading;
