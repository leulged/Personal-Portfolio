import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "leulgedion224@gmail.com",
      link: "mailto:leulgedion224@gmail.com",
      description: "Send me an email",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+251 912 345 678",
      link: "tel:+251912345678",
      description: "Call me",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Adama, Ethiopia",
      link: "https://maps.google.com/?q=Adama,Ethiopia",
      description: "View my location on Google Maps",
    },
  ];

  return (
    <section className="contact" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="heading">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-intro">
          Let's discuss your next project or opportunity. I'm always open to new
          challenges and collaborations.
        </p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Let's Connect</h3>
          <p>
            I'm passionate about creating innovative solutions and always
            excited to work on new projects. Whether you have a question, want
            to collaborate, or just want to say hello, feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon" aria-hidden="true">
                  {info.icon}
                </div>
                <div className="contact-text">
                  <h4>{info.title}</h4>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={info.description}
                    title={info.description}
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Ready to Start a Project?</h3>
            <p>Let's discuss how I can help bring your ideas to life</p>
            <a href="mailto:leulgedion224@gmail.com" className="btn">
              Start a Conversation
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                aria-describedby="name-error"
                className={
                  submitStatus === "error" && !formData.name ? "error" : ""
                }
              />
              {submitStatus === "error" && !formData.name && (
                <span id="name-error" className="error-message">
                  Name is required
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                aria-describedby="email-error"
                className={
                  submitStatus === "error" && !formData.email ? "error" : ""
                }
              />
              {submitStatus === "error" && !formData.email && (
                <span id="email-error" className="error-message">
                  Valid email is required
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter subject (optional)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or inquiry..."
                rows="5"
                required
                aria-describedby="message-error"
                className={
                  submitStatus === "error" && !formData.message ? "error" : ""
                }
              />
              {submitStatus === "error" && !formData.message && (
                <span id="message-error" className="error-message">
                  Message is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              aria-describedby="submit-status"
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>

            {submitStatus && (
              <div
                id="submit-status"
                className={`submit-status ${submitStatus}`}
                role="alert"
                aria-live="polite"
              >
                {submitStatus === "success" && (
                  <p>Thank you! Your message has been sent successfully.</p>
                )}
                {submitStatus === "error" && (
                  <p>
                    Sorry, there was an error sending your message. Please try
                    again.
                  </p>
                )}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
