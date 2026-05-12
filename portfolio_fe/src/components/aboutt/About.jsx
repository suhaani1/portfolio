import "./About.css";

import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaBrain,
  FaCode,
  FaTrophy
} from "react-icons/fa";

const About = () => {

  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      desc: "Building responsive and scalable MERN applications with clean UI and optimized backend architecture."
    },

    {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      desc: "Exploring AI systems, NLP concepts, embeddings, clustering and intelligent data-driven solutions."
    },

    {
      icon: <FaCode />,
      title: "Problem Solving",
      desc: "Passionate about DSA, logical thinking and developing efficient real-world software solutions."
    },

    {
      icon: <FaTrophy />,
      title: "Hackathons & Achievements",
      desc: "Winner of TECH-CURE Hackathon and finalist at IIT BHU Eco Hackathon."
    }
  ];

  return (

    <section className="about" id="about">

      <div className="container">

        {/* Section Title */}

        <motion.div
          className="section-title"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
        >

          <h2>About Me</h2>
<br />
          <p>
            A passionate developer focused on building
            modern web applications and intelligent
            digital solutions.
          </p>

        </motion.div>

        {/* Main Content */}

        <div className="about-content">

          {/* Left Content */}

          <motion.div
            className="about-left"
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
          >

          

           
           <br />

            <h3>

              Building Modern Applications
              with MERN & AI

            </h3>

            <p>

              I'm Suhani Kumari, a full stack developer
              with interest in MERN Stack, Artificial
              Intelligence and scalable web technologies.

            </p>

            <p>

              I enjoy creating responsive applications,
              solving real-world problems and working on
              projects related to AI systems, healthcare,
              analytics and automation.

            </p>

            <p>

              Through internships, hackathons and
              continuous learning, I keep improving my
              technical and problem-solving skills.

            </p>

            {/* Stats */}

            <div className="about-stats">

              <div className="stat-box">

                <h4>4+</h4>

                <span>Internships</span>

              </div>

              <div className="stat-box">

                <h4>5+</h4>

                <span>Projects</span>

              </div>

              <div className="stat-box">

                <h4>9.3</h4>

                <span>CGPA</span>

              </div>

            </div>

          </motion.div>

          {/* Right Cards */}

          <motion.div
            className="about-right"
            initial={{ opacity:0, x:60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
          >

            {cards.map((card, index)=>(

              <div
                className="about-card"
                key={index}
              >

                <div className="about-icon">

                  {card.icon}

                </div>

                <h4>{card.title}</h4>

                <p>{card.desc}</p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;