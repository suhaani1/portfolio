import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa";

import { Link } from "react-scroll";

const Footer = () => {

  return (

    <footer className="footer">

      {/* Glow */}

      <div className="footer-glow"></div>

      <div className="container">

        {/* CTA */}

        <div className="footer-cta">

          <h2>
            Let's Build Something Amazing Together
          </h2>

          <p>
            Open for internships, freelance projects,
            collaborations and opportunities.
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="footer-btn"
          >
            Contact Me
          </Link>

      

        {/* Main Footer */}

        <div className="footer-content">

          {/* Left */}

          <div className="footer-brand">

            <h1>
              Suhani<span>.</span>
            </h1>

            <p>
              AI Enthusiast & Full Stack Developer
              building scalable and modern applications.
            </p>

          </div>

          {/* Center */}

          <div className="footer-links">

            <h3>Navigation</h3>

            <ul>

              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact"
              ].map((item,index)=>(

                <li key={index}>

                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                  >

                    {item.charAt(0).toUpperCase()+item.slice(1)}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Right */}

          <div className="footer-social">

            <h3>Connect</h3>

            <div className="social-icons-footer">

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

              <a href="https://www.instagram.com/_.suhaanii._._/" target="_blank">

                <FaInstagram />
              </a>

            </div>

          </div>

        </div>
  </div>
        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © 2026 Suhani Kumari — All Rights Reserved
          </p>

        </div>

      </div>

      {/* Scroll Top */}

      <Link
        to="home"
        smooth={true}
        duration={500}
        className="scroll-top"
      >

        <FaArrowUp />

      </Link>

    </footer>
  );
};

export default Footer;