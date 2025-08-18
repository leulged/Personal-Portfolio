import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Payment App with Stripe Connect",
      category: "Full Stack",
      icon: <FaCode />,
      image: require("../../assets/projects/payment_app.png"),
      description:
        "A complete payment application that allows customers to pay for services, with funds held temporarily and released to sellers manually or automatically. The app implements a payment escrow system where customers pay for services, payments are held in a platform balance, and funds are released to sellers manually (admin) or automatically (after 7 days). Includes dispute resolution system with backend built using Node.js + Express + MongoDB and frontend using React with role-based dashboards for Admin, Seller, and Customer.",
      shortDescription:
        "A complete payment application that allows customers to pay for services, with funds held temporarily and released to sellers manually or automatically.",
      features: [
        "User authentication with JWT",
        "Stripe Connect integration for seller onboarding",
        "Payment intent creation and processing",
        "Manual and automatic fund release",
        "Refund functionality",
        "Admin dashboard with payment management",
        "Dispute system",
        "Auto-release cron job (7 days)",
        "Platform balance management",
      ],
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Stripe",
        "JWT",
        "Cron Jobs",
      ],
      github: "https://github.com/leulged/paymentApp",
      live: null,
      deployed: false,
      deploymentNote: "Backend deployed on Railway, frontend in development",
    },
    {
      title: "Blog API - Go RESTful API",
      category: "Backend",
      icon: <FaDatabase />,
      image: require("../../assets/projects/blog.png"),
      description:
        "A comprehensive RESTful API built with Go, featuring email verification, AI-powered content generation, user management, and blog functionality. Built using Clean Architecture principles with MongoDB as the database. The API includes authentication & security with email verification system, JWT authentication with refresh tokens, password reset via email, role-based authorization, and rate limiting. User management features include user registration with email verification, profile management, user roles, and account verification. Blog system includes CRUD operations, like/dislike system, comments, search & filtering, and pagination. AI integration features content generation, topic suggestions, content enhancement, chat history, and support for multiple AI providers (Hugging Face, Grok, OpenRouter).",
      shortDescription:
        "A comprehensive RESTful API built with Go, featuring email verification, AI-powered content generation, user management, and blog functionality.",
      features: [
        "Email verification system",
        "JWT authentication with refresh tokens",
        "AI-powered content generation",
        "Blog CRUD operations",
        "Like/Dislike system",
        "Comment system",
        "Search & filtering",
        "Role-based authorization",
        "Rate limiting",
      ],
      technologies: [
        "Go",
        "Gin",
        "MongoDB",
        "JWT",
        "AI APIs",
        "SMTP",
        "Clean Architecture",
      ],
      github: "https://github.com/BemnetMussa/g6-Starter_project",
      live: null,
      deployed: false,
      deploymentNote: "API ready for deployment, documentation available",
    },
    {
      title: "Vacancy and Employment Management System",
      category: "Full Stack",
      icon: <FaCode />,
      image: require("../../assets/projects/vacancy-management-system.jpg"),
      description:
        "A comprehensive platform designed to streamline the recruitment process for Human Resources (HR) teams. The system facilitates the creation, management, and tracking of job postings, candidate applications, and employee data. It serves as a central hub for HR departments to manage the entire recruitment cycle, from posting job vacancies to tracking applicants, conducting interviews, and finalizing employment decisions. The platform includes job posting management where HR managers can create, update, and manage job listings with job descriptions, required qualifications, departments, and locations. Applicant Tracking System (ATS) provides fully functional tracking for receiving and reviewing applications, accessing candidate resumes, and tracking their status. Employee data management offers centralized management of employee information including job roles, department assignments, and employment status. Role-based access control provides secure access control with role-based permissions for HR, Team Leaders, and Managers.",
      shortDescription:
        "A comprehensive platform designed to streamline the recruitment process for Human Resources (HR) teams.",
      features: [
        "Job posting management",
        "Applicant Tracking System (ATS)",
        "Employee data management",
        "Role-based access control",
        "Interview scheduling",
        "Candidate evaluation",
        "Reporting and analytics",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "TypeORM",
        "JWT",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/leulged/Vacancy-and-Employee-Management-System",
      live: null,
      deployed: false,
      deploymentNote: "Full-stack application, ready for deployment",
    },
    {
      title: "Solar Radiation Insights Dashboard",
      category: "Data Science",
      icon: <FaBrain />,
      description:
        "A comprehensive dashboard that visualizes key insights related to solar radiation, wind speed, temperature, and other environmental factors to support solar energy investment decisions. The dashboard analyzes solar radiation data from regions like Benin, Sierra Leone, and Togo, identifying trends and patterns using statistical analysis to uncover trends and outliers in solar radiation data, including Global Horizontal Irradiance (GHI), Direct Normal Irradiance (DNI), and Diffuse Horizontal Irradiance (DHI). Data visualization explores how environmental factors such as wind speed, temperature, and humidity interact with solar radiation. The dashboard includes exploratory data analysis (EDA) to visualize trends in GHI, DNI, and DHI over time, perform outlier detection to identify anomalies in the solar radiation data, and understand correlations between environmental variables like wind speed, temperature, and humidity with solar radiation. Interactive Streamlit dashboard provides user-friendly and interactive exploration of data insights dynamically with correlation heatmaps, time-series analysis, wind-solar speed analysis, and outliers detection.",
      shortDescription:
        "A comprehensive dashboard that visualizes key insights related to solar radiation, wind speed, temperature, and other environmental factors.",
      features: [
        "Exploratory Data Analysis (EDA)",
        "Time-series analysis",
        "Correlation heatmaps",
        "Outlier detection",
        "Interactive visualizations",
        "Environmental factor analysis",
        "Solar energy insights",
      ],
      technologies: [
        "Python",
        "Pandas",
        "Seaborn",
        "Matplotlib",
        "Streamlit",
        "Data Analysis",
      ],
      github:
        "https://github.com/leulged/Solar-Insights-Dashboard-Data-Analysis-and-Visualization-for-Renewable-Energy",
      live: null,
      deployed: false,
      deploymentNote: "Streamlit app, can be deployed on Streamlit Cloud",
    },
    {
      title: "Quantitative Analysis Using PyNance and Custom Indicators",
      category: "Data Science",
      icon: <FaBrain />,
      description:
        "This project extends the financial data analysis dashboard by incorporating quantitative analysis for stock price data using Python. The focus is on loading and preprocessing historical stock price data, calculating essential technical indicators like Simple Moving Averages (SMA), Relative Strength Index (RSI), and Moving Average Convergence Divergence (MACD), and visualizing the stock prices alongside these indicators for actionable insights. The project includes data preprocessing for multiple stocks (AAPL, AMZN, GOOG, META, MSFT, NVDA, TSLA), custom technical indicators implementation replacing TA-Lib with custom implementations, comprehensive visualization of Close prices, SMAs, RSI, and MACD to observe trends and patterns, and modularized code for scalability enabling the addition of more indicators or stocks. The analysis reveals valuable insights into stock price trends and technical indicators, helping investors make informed decisions.",
      shortDescription:
        "Financial data analysis dashboard incorporating quantitative analysis for stock price data using custom technical indicators.",
      features: [
        "Data preprocessing for multiple stocks",
        "Custom technical indicators (SMA, RSI, MACD)",
        "Stock price visualization",
        "Trend analysis and pattern recognition",
        "Modular and extensible code structure",
        "Technical analysis insights",
        "Investment decision support",
      ],
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "NumPy",
        "Technical Analysis",
        "Financial Data",
        "Jupyter Notebook",
      ],
      github: "https://github.com/leulged/financial-news-analysis",
      live: null,
      deployed: false,
      deploymentNote:
        "Jupyter notebook analysis, ready for dashboard conversion",
    },
    {
      title: "Stadium Ticket System",
      category: "Backend",
      icon: <FaDatabase />,
      description:
        "A comprehensive database system for managing ticket sales, reservations, and payments for football matches in various stadiums. The system includes user management for administrators, event managers, and fans. Features include user registration and login for fans, stadium and match management for event managers, ticket purchasing and reservation for fans, payment processing and transaction history, and access control for administrators and event managers. The database structure consists of tables for Fans, Stadiums, match_event, seat, ticket, reservation, and payment. The system includes a stored procedure called PurchaseTicket that performs the ticket purchase transaction, checking ticket availability, updating ticket status, deducting ticket price from fan's account balance, and recording payment details. User roles include Main Admin with full access to all database tables, and Event Manager with select, insert, update, and delete access to stadiums, match_event, seat, ticket, reservation tables, and select and insert access to the payment table.",
      shortDescription:
        "A comprehensive database system for managing ticket sales, reservations, and payments for football matches in various stadiums.",
      features: [
        "User registration and login",
        "Stadium and match management",
        "Ticket purchasing and reservation",
        "Payment processing",
        "Transaction history",
        "Access control",
        "Stored procedures",
      ],
      technologies: [
        "SQL",
        "MySQL",
        "Database Design",
        "Stored Procedures",
        "User Management",
      ],
      github: "https://github.com/bereket-kume/Stadium_Ticket_Systems",
      live: null,
      deployed: false,
      deploymentNote: "Database system with stored procedures",
    },
  ];

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [expandedDescriptions, setExpandedDescriptions] = React.useState({});
  const [expandedFeatures, setExpandedFeatures] = React.useState({});
  const [showAllProjects, setShowAllProjects] = React.useState(false);

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleFeatures = (index) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p className="projects-intro">
          A showcase of my recent work and technical expertise
        </p>
      </motion.div>

      <motion.div
        className="category-filter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
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
              setShowAllProjects(false);
              setExpandedDescriptions({});
              setExpandedFeatures({});
            }}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="projects-container">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-screenshot"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}
              <div className="project-category">
                {project.icon}
                {project.category}
              </div>
              <div className="project-overlay">
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="View Code on GitHub"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FaGithub />
                  </a>
                  {project.deployed ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Live Demo"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <button
                      className="project-link disabled"
                      title={project.deploymentNote}
                      aria-label={`${project.title} - ${project.deploymentNote}`}
                      disabled
                    >
                      <FaExternalLinkAlt />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                {!project.deployed && (
                  <span
                    className="deployment-status"
                    title={project.deploymentNote}
                  >
                    In Development
                  </span>
                )}
              </div>
              <h4>{project.category}</h4>
              <p>
                {expandedDescriptions[index]
                  ? project.description
                  : project.shortDescription}
                {project.description.length >
                  project.shortDescription.length && (
                  <button
                    className="read-more-btn"
                    onClick={() => toggleDescription(index)}
                    aria-label={
                      expandedDescriptions[index] ? "Read less" : "Read more"
                    }
                  >
                    {expandedDescriptions[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>

              <div className="project-features">
                <h5>Key Features:</h5>
                <ul>
                  {project.features
                    .slice(
                      0,
                      expandedFeatures[index] ? project.features.length : 4
                    )
                    .map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  {project.features.length > 4 && (
                    <li className="more-features">
                      <button
                        className="read-more-btn"
                        onClick={() => toggleFeatures(index)}
                        aria-label={
                          expandedFeatures[index]
                            ? "Show less features"
                            : `Show ${
                                project.features.length - 4
                              } more features`
                        }
                      >
                        {expandedFeatures[index]
                          ? "Show Less"
                          : `+${project.features.length - 4} more features`}
                      </button>
                    </li>
                  )}
                </ul>
              </div>

              <div className="project-technologies">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions-bottom">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  <FaGithub />
                  View Code
                </a>
                {project.deployed ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                ) : (
                  <button
                    className="project-btn disabled-btn"
                    disabled
                    title={project.deploymentNote}
                    aria-label={`${project.title} - ${project.deploymentNote}`}
                  >
                    <FaExternalLinkAlt />
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length > 3 && (
        <motion.div
          className="projects-show-more"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            className="btn"
            onClick={() => {
              setShowAllProjects(!showAllProjects);
              setExpandedDescriptions({});
              setExpandedFeatures({});
            }}
          >
            {showAllProjects
              ? "Show Less"
              : `Show ${filteredProjects.length - 3} More Projects`}
          </button>
        </motion.div>
      )}

      <motion.div
        className="projects-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3>Interested in Working Together?</h3>
        <p>
          I'm always open to discussing new opportunities and exciting projects.
          Let's create something amazing together!
        </p>
        <a href="#contact" className="btn">
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
