import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";
import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "A2SV First Year Education Program",
      issuer: "Africa to Silicon Valley",
      date: "2025",
      description:
        "Certificate of completion for A2SV’s 2025 First Year Education Program in data structures, algorithms, and problem solving. Signed by Emre Varol, Founder and CEO.",
      category: "Problem Solving",
      link: "/certificates/a2sv-completion-certificate.pdf",
      downloadLink: "/certificates/a2sv-completion-certificate.pdf",
    },
    {
      title: "Web Development Internship",
      issuer: "IE Network Solutions",
      date: "17 August 2024",
      description:
        "Certificate for a 90-day web development internship, 10 May to 10 August 2024. Signed by Selamawit Girma, Head of Development.",
      category: "Internship",
      link: "/certificates/ie-network-internship.pdf",
      downloadLink: "/certificates/ie-network-internship.pdf",
    },
    {
      title: "ALX Recommendation Letter",
      issuer: "ALX AI Career Essentials",
      date: "2024",
      description:
        "Professional recommendation letter from ALX AI Career Essentials program recognizing exceptional performance as a mentor and technical expertise in AI",
      category: "Recommendations",
      link: "https://drive.google.com/file/d/1jd6_SzQUqA-7D64v8F2xyUIil_PuOIGu/view?usp=sharing",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1jd6_SzQUqA-7D64v8F2xyUIil_PuOIGu",
    },
    {
      title: "Data Scientist Career Track",
      issuer: "365 Data Science",
      date: "November 2024",
      description:
        "Comprehensive Data Scientist Career Track certification covering 8 core exams: Data Science Basics, Statistics, Probability, Python Programming, Mathematics, SQL, Machine Learning in Python, and Deep Learning. Successfully completed all required assessments to earn this comprehensive certification.",
      category: "Data Science",
      link: "https://drive.google.com/file/d/1i0m2b3jeQWh1N_0zn6wBushqrivmYExv/view?usp=sharing",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1i0m2b3jeQWh1N_0zn6wBushqrivmYExv",
    },
    {
      title: "ALX AI Career Essentials",
      issuer: "ALX",
      date: "2024",
      description:
        "Comprehensive AI career essentials program covering fundamental AI concepts, industry practices, and career development strategies. Successfully completed training in AI fundamentals, applications, and best practices for professional AI roles.",
      category: "AI",
      link: "https://drive.google.com/file/d/1_b6PjDPunCYvoPUbIaW46g1fKsYGisuT/view?usp=sharing",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1_b6PjDPunCYvoPUbIaW46g1fKsYGisuT",
    },
    {
      title: "Problem Solving Basic",
      issuer: "HackerRank",
      date: "2024",
      description:
        "Basic problem-solving skills and algorithmic thinking certification",
      category: "Problem Solving",
      link: "https://drive.google.com/file/d/17HPTvzEQNffKgFNhM3ufcAT83hbHJ60S/view?usp=sharing",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=17HPTvzEQNffKgFNhM3ufcAT83hbHJ60S",
    },
    {
      title: "50 Founder Academy",
      issuer: "50 Founder Academy",
      date: "2024",
      description:
        "Entrepreneurship and startup development certification program",
      category: "Entrepreneurship",
      link: "https://drive.google.com/file/d/1_BaZc18Vf0l-_B84huyVL5kqbK8t-Jy0/view?usp=sharing",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1_BaZc18Vf0l-_B84huyVL5kqbK8t-Jy0",
    },
    {
      title: "HIPAA Certificate",
      // TODO: issuer and year
      issuer: "Issuer unconfirmed",
      date: "Year unconfirmed",
      description: "Healthcare and compliance certificate.",
      category: "Healthcare / Compliance",
    },
    {
      title: "4th Place, CSEC ASTU Data Science Hackathon",
      // TODO: year
      issuer: "CSEC ASTU",
      date: "Year unconfirmed",
      description: "Fourth place in the CSEC ASTU Data Science Hackathon.",
      category: "Achievements",
    },
  ];

  const categories = [
    "All",
    ...new Set(certifications.map((cert) => cert.category)),
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [showAllCertifications, setShowAllCertifications] =
    React.useState(false);

  const filteredCertifications =
    selectedCategory === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  const displayedCertifications = showAllCertifications
    ? filteredCertifications
    : filteredCertifications.slice(0, 3);

  return (
    <section className="certifications" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="heading">
          <span>Certifications</span> & Achievements
        </h2>
        <p className="certifications-intro">
          Professional certifications and achievements that validate my
          expertise
        </p>
      </motion.div>

      <motion.div
        className="category-filter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setShowAllCertifications(false);
            }}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="certifications-container">
        {displayedCertifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="certification-header">
              <div className="certification-icon">
                <FaCertificate />
              </div>
              <div className="certification-info">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <div className="certification-meta">
                  <span>
                    <FaCalendarAlt />
                    {cert.date}
                  </span>
                  <span className="certification-category">
                    {cert.category}
                  </span>
                </div>
              </div>
              <div className="certification-actions">
                {cert.link ? (
                  <a
                    href={cert.link}
                    className="certification-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Certificate"
                  >
                    <FaExternalLinkAlt />
                  </a>
                ) : null}
                {cert.downloadLink ? (
                  <a
                    href={cert.downloadLink}
                    className="certification-download"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download Certificate"
                    download
                  >
                    <FaDownload />
                  </a>
                ) : null}
              </div>
            </div>

            <p className="certification-description">{cert.description}</p>
          </motion.div>
        ))}
      </div>

      {filteredCertifications.length > 3 && (
        <motion.div
          className="certifications-show-more"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            className="btn"
            onClick={() => setShowAllCertifications(!showAllCertifications)}
          >
            {showAllCertifications
              ? "Show Less"
              : `Show ${filteredCertifications.length - 3} More Certifications`}
          </button>
        </motion.div>
      )}

      <motion.div
        className="certifications-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="stat-item">
          <h3>{certifications.length}</h3>
          <p>Certifications and achievements</p>
        </div>
        <div className="stat-item">
          <h3>{categories.length - 1}</h3>
          <p>Categories</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
