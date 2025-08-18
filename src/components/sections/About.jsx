import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTrophy,
  FaCertificate,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import "./About.css";
import ppImage from "../../assets/images/profile/Adobe Express - file.png";

const About = () => {
  const achievements = [
    { icon: <FaCode />, number: "400+", text: "LeetCode Problems" },
    { icon: <FaCode />, number: "200+", text: "Codeforces Problems" },
    { icon: <FaCertificate />, number: "15+", text: "Certifications" },
    { icon: <FaTrophy />, number: "7+", text: "Major Projects" },
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
          alt="Leul Gedion - Software Engineering Student"
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
            <span>5th Year Software Engineering Student</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Adama Science and Technology University</span>
          </div>
        </div>
        <h3>Who I Am</h3>
        <p>
          I'm a passionate software engineer with expertise in full-stack
          development, AI/ML integration, and data science. Currently pursuing
          my degree at Adama Science and Technology University, I bring a
          multifaceted skill set to the table.
        </p>
        <h3>What I Do</h3>
        <p>
          Specializing in full-stack development with expertise in the MERN
          stack and Go, I seamlessly navigate through complex technical
          challenges. Beyond conventional development, my proficiency extends to
          computational programming, where I thrive in solving complex problems
          with efficient algorithms and code.
        </p>
        <h3>My Passion</h3>
        <p>
          My passion truly lies at the intersection of technology and data, as I
          continuously explore innovative solutions that bridge the gap between
          theoretical concepts and practical applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
