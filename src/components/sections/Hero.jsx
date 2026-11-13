import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaTelegram } from "react-icons/fa";
import "./Hero.css";
import ppImage from "../../assets/images/profile/pp.png";

const Hero = () => {
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
        <div className="profession">Software Engineer | AI Evaluation & Backend</div>
        <p>
          I'm a software engineer based in Adama, Ethiopia. I build backend and
          full-stack systems with Node.js, Go, React and React Native, and I
          evaluate and benchmark AI coding agents. I graduated with a BSc in
          Software Engineering from Adama Science and Technology University and
          work remotely with teams building healthcare and AI products.
        </p>

        <div className="hero-buttons">
          <a
            href="/Leul_Gedion_CV.pdf"
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
          alt="Leul Gedion - Software Engineer"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
