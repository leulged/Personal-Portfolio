import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer (Contractor)",
      company: "Prospex AI Inc",
      location: "Remote",
      duration: "2025 - Present",
      description:
        "Build full-stack features for ProspexCare, a healthcare platform with React Native mobile and web apps.",
      responsibilities: [
        "Build full-stack features for ProspexCare, a healthcare platform with React Native mobile and web apps.",
        "Integrate AI/ML models into backend services, including AI-assisted document extraction.",
        // TODO: one concrete thing I personally built or improved, with a number if I have one
      ],
      techStack: [
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "Supabase",
        "Python",
      ],
    },
    {
      title: "AI Evaluator & Benchmark Task Author",
      company: "AfterQuery / Harbor",
      location: "Remote",
      // TODO: confirm end date, currently shown as 2026
      duration: "2026",
      description:
        "Author SWE-bench-style coding tasks and evaluate AI-generated responses.",
      responsibilities: [
        "Authored SWE-bench-style coding tasks for AI agent evaluation (Silver task-author status at Harbor).",
        "Worked on memory-safety bug and patch tasks in C codebases.",
        "Evaluated AI-generated responses for accuracy, reasoning and instruction adherence.",
      ],
      techStack: ["C", "Python", "Docker", "Linux"],
    },
    {
      title: "AI Trainer & Evaluator",
      company: "Revelo",
      location: "Remote",
      duration: "2025 - 2026",
      description:
        "Evaluated terminal-based AI agent solutions against real GitHub issues.",
      responsibilities: [
        "Evaluated terminal-based AI agent solutions against real GitHub issues for correctness and quality.",
        "20+ accepted tasks; provided annotation and feedback used for model training.",
      ],
      techStack: [],
    },
    {
      title: "Backend Developer Intern",
      company: "Eskalate (via A2SV)",
      location: "",
      // TODO: confirm end date. Do not show Present; this internship has ended.
      duration: "2025",
      description: "Built backend services and REST APIs in Go.",
      responsibilities: ["Built backend services and REST APIs in Go."],
      techStack: ["Go", "Gin", "MongoDB", "Docker", "Git"],
    },
    {
      title: "Web Developer Intern",
      company: "IE Network Solutions",
      location: "Addis Ababa",
      duration: "2024",
      description:
        "Built vacancy and user management systems with authentication and authorization (MERN stack).",
      responsibilities: [
        "Built vacancy and user management systems with authentication and authorization (MERN stack).",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "AI Career Essentials Mentor",
      company: "ALX AICE",
      location: "Remote",
      // TODO: confirm year. Old site said 2023; the recommendation letter is dated 2024.
      duration: "Year unconfirmed",
      description:
        "Mentored students in AI fundamentals and career development.",
      responsibilities: [
        "Mentored students in AI fundamentals and career development.",
      ],
      techStack: [],
    },
  ];

  const education = [
    {
      degree: "BSc Software Engineering",
      institution: "Adama Science and Technology University",
      location: "Adama, Ethiopia",
      duration: "2021 - 2026",
      description:
        "BSc in Software Engineering, completed in 2026. CGPA 3.5.",
    },
    {
      degree: "Problem solving and backend track",
      institution: "Africa to Silicon Valley (A2SV)",
      location: "",
      duration: "2025 - 2026",
      description: "Problem solving and backend track. Ended in 2026.",
    },
  ];

  const [showAllExperiences, setShowAllExperiences] = React.useState(false);

  const displayedExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 2);

  return (
    <section className="experience" id="experience">
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          My <span>Experience</span>
        </h2>
        <p className="experience-intro">
          Professional journey and educational background
        </p>
      </motion.div>

      <div className="experience-container">
        <motion.div
          className="experience-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>
            <FaBriefcase /> Work Experience
          </h3>
          <div className="timeline">
            {displayedExperiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{exp.title}</h4>
                <h5>{exp.company}</h5>
                <div className="duration">
                  <FaCalendarAlt /> {exp.duration}
                  {exp.location ? (
                    <span style={{ marginLeft: "1rem" }}>
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  ) : null}
                </div>
                <p>{exp.description}</p>
                <div className="responsibilities">
                  <h6>Key Responsibilities:</h6>
                  <ul>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
                {exp.techStack.length > 0 && (
                  <div className="tech-stack">
                    <h6>Technologies Used:</h6>
                    <div className="tech-tags">
                      {exp.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {experiences.length > 2 && (
            <motion.div
              className="experience-show-more"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                className="btn"
                onClick={() => setShowAllExperiences(!showAllExperiences)}
              >
                {showAllExperiences
                  ? "Show Less"
                  : `Show ${experiences.length - 2} More Experiences`}
              </button>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="experience-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>
            <FaGraduationCap /> Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{edu.degree}</h4>
              <h5>{edu.institution}</h5>
              <div className="duration">
                <FaCalendarAlt /> {edu.duration}
                {edu.location ? (
                  <span style={{ marginLeft: "1rem" }}>
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                ) : null}
              </div>
              <p>{edu.description}</p>
            </motion.div>
          ))}

          <motion.div
            className="education-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Key Highlights</h4>
            <div className="highlight-items">
              <div className="highlight-item">
                <span className="highlight-number">3.5</span>
                <span className="highlight-text">CGPA</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">BSc 2026</span>
                <span className="highlight-text">Software Engineering</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">600+</span>
                <span className="highlight-text">Problems Solved</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5</span>
                <span className="highlight-text">Programming Languages</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
