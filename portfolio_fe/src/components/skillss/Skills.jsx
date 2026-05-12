import "./Skills.css";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    percent: "95%"
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    percent: "90%"
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    percent: "85%"
  },
  {
    icon: <FaReact />,
    name: "React",
    percent: "85%"
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    percent: "80%"
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    percent: "75%"
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    percent: "75%"
  },
  {
    icon: <FaGitAlt />,
    name: "Git & GitHub",
    percent: "80%"
  }
];

const Skills = () => {

  return (
    <section className="skills" id="skills">

      <div className="container">

        {/* Title */}

        <motion.div
          className="section-title"
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
        >

          <h2>My Skills</h2>

          <p>
            Technologies and tools I use to build
            modern web applications.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="skills-grid">

          {skills.map((skill, index)=>(
            
            <motion.div
              className="skill-card"
              key={index}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5, delay:index * 0.1}}
            >

              <div className="skill-top">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>{skill.name}</h3>

                <span>{skill.percent}</span>

              </div>

              {/* Progress Bar */}

              <div className="progress-bar">

                <motion.div
                  className="progress"
                  initial={{width:0}}
                  whileInView={{width:skill.percent}}
                  transition={{duration:1}}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;