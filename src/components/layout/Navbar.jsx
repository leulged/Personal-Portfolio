import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      // Track active section
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "certifications",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`} role="banner">
      <a
        href="#home"
        className="logo"
        onClick={() => scrollToSection("home")}
        aria-label="Home"
      >
        Leul.
      </a>

      <nav
        className={`navbar ${isMenuOpen ? "active" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={() => scrollToSection("home")}
          className={activeSection === "home" ? "active" : ""}
          aria-label="Home section"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => scrollToSection("about")}
          className={activeSection === "about" ? "active" : ""}
          aria-label="About section"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => scrollToSection("skills")}
          className={activeSection === "skills" ? "active" : ""}
          aria-label="Skills section"
        >
          Skills
        </a>
        <a
          href="#experience"
          onClick={() => scrollToSection("experience")}
          className={activeSection === "experience" ? "active" : ""}
          aria-label="Experience section"
        >
          Experience
        </a>
        <a
          href="#certifications"
          onClick={() => scrollToSection("certifications")}
          className={activeSection === "certifications" ? "active" : ""}
          aria-label="Certifications section"
        >
          Certifications
        </a>
        <a
          href="#projects"
          onClick={() => scrollToSection("projects")}
          className={activeSection === "projects" ? "active" : ""}
          aria-label="Projects section"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => scrollToSection("contact")}
          className={activeSection === "contact" ? "active" : ""}
          aria-label="Contact section"
        >
          Contact
        </a>
      </nav>

      <div className="header-icons" role="group" aria-label="Header actions">
        <button
          className="dark-mode-icon"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          type="button"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          type="button"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
