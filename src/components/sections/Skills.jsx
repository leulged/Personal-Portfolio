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
      title: "Languages",
      icon: <FaCode />,
      skills: ["Go", "TypeScript", "JavaScript", "Python", "C", "Rust"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        "Node.js",
        "Express",
        "Gin",
        "REST APIs",
        "JWT/Auth",
        "Stripe integration",
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: <FaCode />,
      skills: ["React", "Next.js", "React Native", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    },
    {
      title: "AI & Evaluation",
      icon: <FaBrain />,
      skills: [
        "LLM output evaluation",
        "Benchmark & test authoring",
        "AI model integration",
      ],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git", "Docker", "CI/CD"],
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
              {category.skills.map((skill) => (
                <span key={skill} className="skill-item">
                  {skill}
                </span>
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
              <h4>600+</h4>
              <p>Problems solved on LeetCode and Codeforces</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
