import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaTelegram } from "react-icons/fa";
import "./Hero.css";
import ppImage from "../../assets/images/profile/pp.png";
import cvFile from "../../assets/documents/resume/Blue Simple Professional CV Resume.pdf";

const Hero = () => {
  const [professionIndex, setProfessionIndex] = useState(0);

  useEffect(() => {
    const professions = [
      "Data Scientist",
      "Full Stack Developer",
      "Problem Solver",
    ];

    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const professions = [
    "Data Scientist",
    "Full Stack Developer",
    "Problem Solver",
  ];

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I'm <span>Leul Gedion</span>
        </h1>
        <div className="profession">{professions[professionIndex]}</div>
        <p>
          Welcome! I'm a 5th-year Software Engineering student at Adama Science
          and Technology University, passionate about crafting innovative
          digital solutions. With expertise in full-stack development, AI/ML
          integration, and data science, I specialize in transforming complex
          ideas into elegant, scalable applications. Let's build the future
          together.
        </p>

        <div className="hero-buttons">
          <a
            href={cvFile}
            download="Leul_Gedion_CV.pdf"
            className="hero-btn"
            aria-label="Download CV - Leul Gedion's Resume"
            title="Download my professional CV"
          >
            <FaDownload />
            Download CV
          </a>
          <a
            href="#contact"
            className="hero-btn secondary"
            aria-label="Get in touch - Contact me"
          >
            Get In Touch
          </a>
        </div>

        <div className="hero-social">
          <a
            href="https://linkedin.com/in/leulgedion"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/leulged"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/leul_ged/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/leulged"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaTelegram />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-img"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={ppImage}
          alt="Leul Gedion - Full Stack Developer and Data Scientist"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
