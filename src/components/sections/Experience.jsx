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
      title: "Software Engineer",
      company: "Prospex AI Inc",
      location: "Remote",
      duration: "2025 - Present",
      description:
        "Participated in multiple AI and software development projects, contributing to various innovative solutions.",
      responsibilities: [
        "Contributed to multiple AI-powered projects and applications",
        "Participated in full-stack development across various projects",
        "Collaborated with cross-functional teams on innovative solutions",
        "Worked on scalable software solutions using modern technologies",
      ],
      techStack: [
        "Python",
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "Supabase",
        "AI",
        "JavaScript",
      ],
    },
    {
      title: "Software Developer",
      company: "IE Network Solution",
      location: "In-Person",
      duration: "2023 - 2024",
      description:
        "Developed comprehensive web applications including vacancy and user management systems.",
      responsibilities: [
        "Developed vacancy management system with modern technologies",
        "Built user management system with authentication and authorization",
        "Implemented responsive web applications using modern frameworks",
        "Collaborated with clients to deliver custom solutions",
      ],
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      title: "Backend Developer Intern",
      company: "Eskalate",
      location: "In-Person",
      duration: "2025 - Present",
      description:
        "Backend development using Go language and modern backend technologies.",
      responsibilities: [
        "Developed backend services using Go language",
        "Implemented RESTful APIs and database solutions",
        "Worked on server-side development and optimization",
        "Collaborated with frontend teams for seamless integration",
      ],
      techStack: [
        "Go",
        "Gin Framework",
        "MongoDB",
        "AI",
        "RESTful APIs",
        "Git",
        "Docker",
      ],
    },
    {
      title: "AI Career Essentials Mentor",
      company: "ALX AICE",
      location: "Remote",
      duration: "2023",
      description:
        "Mentored students in AI Career Essentials program, providing guidance and support.",
      responsibilities: [
        "Mentored students in AI fundamentals and career development",
        "Provided technical guidance on AI concepts and applications",
        "Conducted code reviews and project assessments",
        "Supported students in their learning journey",
      ],
      techStack: ["AI", "Teaching", "Mentoring", "Career Development"],
    },
  ];

  const education = [
    {
      degree: "Software Engineering",
      institution: "Adama Science and Technology University",
      location: "Adama, Ethiopia",
      duration: "2021 - Present",
      description:
        "5th Year Software Engineering student with focus on software development, algorithms, and data structures.",
    },
    {
      degree: "Competitive Programming",
      institution: "A2SV (Africa to Silicon Valley)",
      location: "In-Person",
      duration: "2024 - Present",
      description:
        "Intensive competitive programming program focusing on algorithms, data structures, and problem-solving skills.",
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
                  <span style={{ marginLeft: "1rem" }}>
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
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
                <span style={{ marginLeft: "1rem" }}>
                  <FaMapMarkerAlt /> {edu.location}
                </span>
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
                <span className="highlight-number">5th</span>
                <span className="highlight-text">Year Student</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">3.5</span>
                <span className="highlight-text">GPA</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
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
