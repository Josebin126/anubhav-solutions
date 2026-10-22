"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll progress + navbar state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
      setIsScrolled(scrollTop > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active navigation section
  useEffect(() => {
    const sections = [
      "services",
      "work",
      "process",
      "about",
      "contact",
    ];

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop
        ) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleActiveSection);
    handleActiveSection();

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );
    };
  }, []);

  // Lock page scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`navbar ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">

          <a href="/" className="logo">
            <img
              src="/images/anubhav-logo.png"
              alt="Anubhav Solutions"
            />
          </a>

          <nav className="nav-links">
            <a
              href="#services"
              className={
                activeSection === "services"
                  ? "active"
                  : ""
              }
            >
              Services
            </a>

            <a
              href="#work"
              className={
                activeSection === "work"
                  ? "active"
                  : ""
              }
            >
              Work
            </a>

            <a
              href="#process"
              className={
                activeSection === "process"
                  ? "active"
                  : ""
              }
            >
              Process
            </a>

            <a
              href="#about"
              className={
                activeSection === "about"
                  ? "active"
                  : ""
              }
            >
              About
            </a>

            <a
              href="#contact"
              className={
                activeSection === "contact"
                  ? "active"
                  : ""
              }
            >
              Contact
            </a>
          </nav>

          <div className="navbar-actions">
            <ThemeToggle />

            <a href="#contact" className="nav-cta">
              Start a Project ↗
            </a>

            <button
              className={`mobile-menu-button ${
                menuOpen ? "active" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>

        </div>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav className="mobile-menu-links">

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>

          <a
            href="#process"
            onClick={() => setMenuOpen(false)}
          >
            Process
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </nav>

        <span className="mobile-menu-label">
          ANUBHAV SOLUTIONS · DIGITAL TECHNOLOGY STUDIO
        </span>
      </div>
    </>
  );
}