import "./Hero.css";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import profileImg from "../../assets/PHOTO1.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight
} from "react-icons/fa";

const Hero = () => {

  return (

    <section className="hero" id="home">

      <div className="hero-gradient"></div>

      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity:0, x:-80 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
        >

          
          {/* Heading */}

          <h1>

            Hi, I'm
            <span> Suhani Kumari</span>

          </h1>

          {/* Typing */}

          <div className="typing">

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "AI/ML Enthusiast",
                2000,
                "Data Analytics Learner",
                2000,
                "Problem Solver",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Description */}

          <p className="hero-desc">

            Motivated AI enthusiast and full-stack developer
            experienced in building scalable web applications,
            intelligent systems and modern digital solutions
            using MERN Stack, AI and Data Analytics.

          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <button className="btn primary">
               
              <a href="#contact">
                Contact Me
              </a>

              <FaArrowRight />

            </button>

            <button className="btn secondary">

              <FaDownload />
              <a href="https://docs.google.com/document/d/1WGvNnO9-KvollQNgEU36KG_xYItCHeFQ/edit?usp=sharing&ouid=113436199946400707331&rtpof=true&sd=true" target="_blank" rel="noreferrer"
                
              >
                Download Resume
              </a>


            </button>

          </div>

          {/* Stats */}

          <div className="hero-stats">

            <div>

              <h3>4+</h3>

              <span>Internships</span>

            </div>

            <div>

              <h3>5+</h3>

              <span>Projects</span>

            </div>

            <div>

              <h3>9.3</h3>

              <span>CGPA</span>

            </div>

          </div>

          {/* Socials */}

          <div className="social-icons">

            <a
              href="https://github.com/suhaani1"
              target="_blank"
            >

              <FaGithub />

            </a>

            <a
              href="https://www.linkedin.com/in/suhani-kumari-7a7877317"
              target="_blank"
            >

              <FaLinkedin />

            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity:0, x:80 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
        >

          <div className="hero-image-wrapper">

            <img
              src={profileImg}
              alt="Suhani Kumari"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;