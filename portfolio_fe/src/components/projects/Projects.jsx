import "./Projects.css";

import { motion } from "framer-motion";

import {
  FaGithub
} from "react-icons/fa";

/* Projects Data */

const projects = [

  {
    title: "MediCare — Healthcare Dashboard",

    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c",

    description:
      "A role-based MERN healthcare dashboard with Admin, Doctor and Patient modules including authentication, appointment scheduling and patient record management.",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express"
    ],

    github: "https://github.com/suhaani1"
  },

  {
    title: "FitPulse — Health Analytics",

    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",

    description:
      "Built a fitness analytics system that processes activity and sensor data with anomaly detection to identify unusual health trends and behavior patterns.",

    tech: [
      "Python",
      "Machine Learning",
      "Data Processing"
    ],

    github: "https://github.com/suhaani1"
  },

  {
    title: "Speaker Diarization System",

    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81",

    description:
      "Developed an AI-powered audio intelligence pipeline using embeddings and clustering to identify speakers with accurate time-stamping.",

    tech: [
      "Python",
      "Audio Processing",
      "ML"
    ],

    github: "https://github.com/suhaani1"
  },

  {
    title: "Plant Disease Detection",

    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399",

    description:
      "Created a computer vision model to classify plant leaf diseases and support early diagnosis through automated prediction.",

    tech: [
      "Python",
      "Deep Learning",
      "Computer Vision"
    ],

    github: "https://github.com/suhaani1"
  },

  {
    title: "Smart Home Security System",

    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827",

    description:
      "Designed an IoT-based intrusion detection system using PIR sensors and GSM alerts for real-time home security monitoring.",

    tech: [
      "Arduino",
      "Embedded C",
      "IoT"
    ],

    github: "https://github.com/suhaani1"
  },

  {
    title: "Portfolio Website",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    description:
      "A responsive MERN portfolio website featuring animations, admin dashboard, contact system and modern UI/UX design.",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "CSS"
    ],

    github: "https://github.com/suhaani1"
  }
];

const Projects = () => {

  return (

    <section className="projects" id="projects">

      <div className="container">

        {/* Section Title */}

        <motion.div
          className="section-title"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
        >

          <h2>Projects</h2>

          <p>
            A collection of projects showcasing my
            experience in MERN Stack, AI/ML,
            analytics and modern application development.
          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="projects-grid">

          {projects.map((project, index)=>(

            <motion.div
              className="project-card"

              key={index}

              initial={{ opacity:0, y:50 }}

              whileInView={{ opacity:1, y:0 }}

              transition={{
                duration:0.5,
                delay:index * 0.15
              }}
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

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="project-tech">

                  {project.tech.map((item, i)=>(

                    <span key={i}>

                      {item}

                    </span>

                  ))}

                </div>

                {/* Button */}

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <FaGithub />

                    View Project

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







// import "./Projects.css";

// import { motion } from "framer-motion";

// import {
//   FaGithub
// } from "react-icons/fa";

// /* Projects Data */

// const projects = [

//   {
//     title: "MediCare — Healthcare Dashboard",

//     image:
//       "https://images.unsplash.com/photo-1584982751601-97dcc096659c",

//     description:
//       "A role-based MERN healthcare dashboard with Admin, Doctor and Patient modules including authentication, appointment scheduling and patient record management.",

//     tech: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Express"
//     ],

//     github:
//       "https://github.com/suhaani1/medicare-dashboard"
//   },

//   {
//     title: "FitPulse — Health Analytics",

//     image:
//       "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",

//     description:
//       "Built a fitness analytics system that processes activity and sensor data with anomaly detection to identify unusual health trends and behavior patterns.",

//     tech: [
//       "Python",
//       "Machine Learning",
//       "Data Processing"
//     ],

//     github:
//       "https://github.com/suhaani1/fitpulse-health-analytics"
//   },

//   {
//     title: "Speaker Diarization System",

//     image:
//       "https://images.unsplash.com/photo-1516280440614-37939bbacd81",

//     description:
//       "Developed an AI-powered audio intelligence pipeline using embeddings and clustering to identify speakers with accurate time-stamping.",

//     tech: [
//       "Python",
//       "Audio Processing",
//       "Machine Learning"
//     ],

//     github:
//       "https://github.com/suhaani1/speaker-diarization-system"
//   },

//   {
//     title: "Plant Disease Detection",

//     image:
//       "https://images.unsplash.com/photo-1464226184884-fa280b87c399",

//     description:
//       "Created a computer vision model to classify plant leaf diseases and support early diagnosis through automated prediction.",

//     tech: [
//       "Python",
//       "Deep Learning",
//       "Computer Vision"
//     ],

//     github:
//       "https://github.com/suhaani1/plant-disease-detection"
//   },

//   {
//     title: "Smart Home Security System",

//     image:
//       "https://images.unsplash.com/photo-1558002038-1055907df827",

//     description:
//       "Designed an IoT-based intrusion detection system using PIR sensors and GSM alerts for real-time home security monitoring.",

//     tech: [
//       "Arduino",
//       "Embedded C",
//       "IoT"
//     ],

//     github:
//       "https://github.com/suhaani1/smart-home-security"
//   },

//   {
//     title: "Portfolio Website",

//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

//     description:
//       "A responsive MERN portfolio website featuring animations, admin dashboard, contact system and modern UI/UX design.",

//     tech: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "CSS"
//     ],

//     github:
//       "https://github.com/suhaani1/portfolio-website"
//   }
// ];

// const Projects = () => {

//   return (

//     <section className="projects" id="projects">

//       <div className="container">

//         {/* Section Title */}

//         <motion.div
//           className="section-title"
//           initial={{ opacity:0, y:40 }}
//           whileInView={{ opacity:1, y:0 }}
//           transition={{ duration:0.6 }}
//         >

//           <h2>Projects</h2>

//           <p>
//             A collection of projects showcasing my
//             experience in MERN Stack, AI/ML,
//             analytics and modern application development.
//           </p>

//         </motion.div>

//         {/* Projects Grid */}

//         <div className="projects-grid">

//           {projects.map((project, index)=>(

//             <motion.div
//               className="project-card"

//               key={index}

//               initial={{ opacity:0, y:50 }}

//               whileInView={{ opacity:1, y:0 }}

//               transition={{
//                 duration:0.5,
//                 delay:index * 0.15
//               }}
//             >

//               {/* Image */}

//               <div className="project-image">

//                 <img
//                   src={project.image}
//                   alt={project.title}
//                 />

//               </div>

//               {/* Content */}

//               <div className="project-content">

//                 <h3>
//                   {project.title}
//                 </h3>

//                 <p>
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}

//                 <div className="project-tech">

//                   {project.tech.map((item, i)=>(

//                     <span key={i}>

//                       {item}

//                     </span>

//                   ))}

//                 </div>

//                 {/* Button */}

//                 <div className="project-buttons">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                   >

//                     <FaGithub />

//                     View Project

//                   </a>

//                 </div>

//               </div>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Projects;