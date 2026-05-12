import "./Projects.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

const projects = [
  {
    title: "Stationery Shop Website",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    description:
      "A full-stack MERN stationery e-commerce website with authentication, cart system, admin dashboard and responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    live: "#"
  },

  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Modern responsive developer portfolio website with animations and clean UI design.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "#",
    live: "#"
  },

  {
    title: "Tax Management System",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    description:
      "Web application for managing tax records, client details and accounting data.",
    tech: ["MERN", "MongoDB", "Express"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {

  return (
    <section className="projects" id="projects">

      <div className="container">

        {/* Title */}

        <motion.div
          className="section-title"
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
        >

          <h2>My Projects</h2>

          <p>
            Some of the projects I have built using
            modern web technologies.
          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="projects-grid">

          {projects.map((project,index)=>(

            <motion.div
              className="project-card"
              key={index}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5, delay:index*0.2}}
            >

              {/* Image */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              {/* Content */}

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Tech Stack */}

                <div className="project-tech">

                  {project.tech.map((item, i)=>(
                    <span key={i}>
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;