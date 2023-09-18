import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarClass = isScrolled ? "navbar scrolled" : "navbar";

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              HOME
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/servizi" className="navbar-link">
              SERVIZI
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/chisono" className="navbar-link">
              CHI SONO
            </Link>
          </li>
          <li className="navbar-item">
            <a
              href="#contatti"
              className="navbar-link"
              onClick={(e) => handleScrollToSection(e, "contatti")}
            >
              INFO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
