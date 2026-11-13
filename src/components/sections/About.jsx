import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTrophy,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import "./About.css";
import ppImage from "../../assets/images/profile/Adobe Express - file.png";

const About = () => {
  const achievements = [
    { icon: <FaCode />, number: "84+", text: "Accepted AI Benchmark Tasks" },
    { icon: <FaTrophy />, number: "600+", text: "Problems Solved (LeetCode & Codeforces)" },
    { icon: <FaGraduationCap />, number: "2026", text: "BSc Software Engineering" },
    { icon: <FaMapMarkerAlt />, number: "Remote", text: "Working with global teams" },
  ];

  return (
    <section className="about" id="about">
      <motion.div
        className="about-img"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={ppImage}
          alt="Leul Gedion - Software Engineer"
          loading="lazy"
        />

        <div className="achievements">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-text">
                <h4>{achievement.number}</h4>
                <p>{achievement.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          About <span>Me</span>
        </h2>
        <div className="about-info">
          <div className="info-item">
            <FaGraduationCap />
            <span>
              BSc Software Engineering, Adama Science and Technology University
              (2026), CGPA 3.5
            </span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Adama, Ethiopia</span>
          </div>
        </div>
        <h3>Who I Am</h3>
        <p>
          Software engineer with experience in full-stack development, backend
          engineering and AI model evaluation. I graduated from Adama Science
          and Technology University in 2026.
        </p>
        <h3>What I Do</h3>
        <p>
          I build production systems with the MERN stack and Go, ship features
          on ProspexCare (a healthcare platform with React Native and web
          apps), and author benchmark tasks that test how well AI agents solve
          real coding problems. I have 84+ accepted tasks and have evaluated
          AI-generated code and reasoning for several AI-data platforms.
        </p>
        <h3>My Interests</h3>
        <p>
          Backend systems, systems programming and security, and the
          infrastructure used to evaluate AI.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
