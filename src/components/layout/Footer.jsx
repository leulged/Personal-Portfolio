import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/leulgedion",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/leulged",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/leul_ged/",
      label: "Instagram",
    },
    {
      icon: <FaTelegram />,
      url: "https://t.me/leulged",
      label: "Telegram",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Leul Gedion</h3>
          <p>Software Engineer | AI/ML Developer | Data Scientist</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>leulgedion224@gmail.com</p>
          <p>Adama, Ethiopia</p>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Leul Gedion</p>
      </div>
    </footer>
  );
};

export default Footer;
