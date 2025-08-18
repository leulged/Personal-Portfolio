import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaTools,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "React Native", level: 70 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Go", level: 80 },
        { name: "Python", level: 75 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "MySQL", level: 65 },
        { name: "Mongoose", level: 75 },
      ],
    },
    {
      title: "AI/ML & Data Science",
      icon: <FaBrain />,
      skills: [
        { name: "Python", level: 75 },
        { name: "Pandas", level: 70 },
        { name: "Machine Learning", level: 70 },
        { name: "Data Visualization", level: 65 },
        { name: "Streamlit", level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Stripe Connect", level: 75 },
        { name: "JWT Authentication", level: 80 },
        { name: "Postman", level: 80 },
        { name: "VS Code", level: 90 },
      ],
    },
  ];

  const [showAllSkills, setShowAllSkills] = React.useState(false);

  const displayedCategories = showAllSkills
    ? skillCategories
    : skillCategories.slice(0, 3);

  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="heading">
          My <span>Skills</span>
        </h2>
        <p className="skills-intro">
          Technical expertise across various domains
        </p>
      </motion.div>

      <div className="skills-container">
        {displayedCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {skillCategories.length > 3 && (
        <motion.div
          className="skills-show-more"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            className="btn"
            onClick={() => setShowAllSkills(!showAllSkills)}
          >
            {showAllSkills
              ? "Show Less"
              : `Show ${skillCategories.length - 3} More Categories`}
          </button>
        </motion.div>
      )}

      <motion.div
        className="competitive-programming"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Competitive Programming</h3>
        <div className="cp-stats">
          <div className="cp-stat">
            <FaChartLine />
            <div>
              <h4>400+</h4>
              <p>LeetCode Problems</p>
            </div>
          </div>
          <div className="cp-stat">
            <FaCode />
            <div>
              <h4>200+</h4>
              <p>Codeforces Problems</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
