import "./Experience.css";

import { motion } from "framer-motion";

import {
  FaBriefcase
} from "react-icons/fa";

const experiences = [

  {
    role: "Python Intern",
    company: "Infosys Springboard",
    duration: "Nov 2025 - Jan 2026",
    points: [
      "Designed preprocessing pipelines for sensor and activity data.",
      "Implemented anomaly detection logic for health trends.",
      "Improved reporting reliability with model validation."
    ]
  },

  {
    role: "OJT Trainee",
    company: "CDAC — Applied AI & System Development",
    duration: "Dec 2025 - Feb 2026",
    points: [
      "Worked on AI-powered audio intelligence systems.",
      "Built speaker embedding and clustering workflows.",
      "Integrated models into backend services."
    ]
  },

  {
    role: "Data Analytics Intern",
    company: "IBM CSRBox",
    duration: "Jul 2025 - Aug 2025",
    points: [
      "Performed data cleaning and transformation.",
      "Generated analytical reports and visual summaries.",
      "Worked with real-world datasets."
    ]
  },

  {
    role: "MERN Stack Intern",
    company: "InternNexus",
    duration: "May 2025 - Jun 2025",
    points: [
      "Built full-stack MERN modules.",
      "Implemented REST APIs and authentication.",
      "Worked on debugging and feature enhancement."
    ]
  }

];

const Experience = () => {

  return (
    <section className="experience" id="experience">

      <div className="container">

        {/* Title */}

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2>Experience</h2>

          <p>
            My professional internships and practical
            industry experience.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="timeline">

          {experiences.map((exp, index) => (

            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* Timeline Dot */}

              <div className="timeline-dot">
                <FaBriefcase />
              </div>

              {/* Card */}

              <div className="timeline-content">

                <span className="timeline-date">
                  {exp.duration}
                </span>

                <h3>{exp.role}</h3>

                <h4>{exp.company}</h4>

                <ul>

                  {exp.points.map((point, i) => (
                    <li key={i}>
                      {point}
                    </li>
                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Experience;