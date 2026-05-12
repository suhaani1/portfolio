import "./Achievements.css";

import { motion } from "framer-motion";

import {
  FaTrophy,
  FaCertificate,
  FaMedal
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Winner — TECH-CURE Hackathon",
    desc: "Won the TECH-CURE Hackathon organized at Patna Women’s College."
  },

  {
    icon: <FaMedal />,
    title: "Finalist — Eco Hackathon (IIT BHU)",
    desc: "Selected as finalist for innovative technical problem-solving."
  },

  {
    icon: <FaCertificate />,
    title: "Full Stack & AI Certification",
    desc: "Completed Full Stack Web Development & Artificial Intelligence training."
  },

  {
    icon: <FaCertificate />,
    title: "Cybersecurity Certification",
    desc: "Completed cybersecurity fundamentals certification from NIELIT."
  }
];

const Achievements = () => {

  return (
    <section className="achievements" id="achievements">

      <div className="container">

        {/* Title */}

        <motion.div
          className="section-title"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
        >

          <h2>Achievements & Certifications</h2>

          <p>
            Highlights of competitions, certifications
            and technical accomplishments.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="achievement-grid">

          {achievements.map((item, index)=>(

            <motion.div
              className="achievement-card"
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:0.5,
                delay:index * 0.2
              }}
            >

              <div className="achievement-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Achievements;