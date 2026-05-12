import "./Contact.css";

import { motion } from "framer-motion";

import { useState } from "react";

import axios from "axios";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const Contact = () => {

  /* Form State */

  const [formData, setFormData] = useState({

    name:"",
    email:"",
    subject:"",
    message:""

  });

  /* Handle Change */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });
  };

  /* Submit */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(

        "https://portfolio-api-gdt7.onrender.com/api/contact",

        formData
      );

      alert("Message Sent Successfully!");

      /* Reset */

      setFormData({

        name:"",
        email:"",
        subject:"",
        message:""

      });

       /* Scroll To Top */

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

    } catch (error) {

      alert("Something went wrong");

      console
    }
  };

  return (

    <section className="contact" id="contact">

      <div className="container">

        {/* Title */}

        <motion.div
          className="section-title"
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
        >

          <h2>Contact Me</h2>

          <p>
            Let's connect and build something amazing together.
          </p>

        </motion.div>

        {/* Contact Content */}

        <div className="contact-content">

          {/* Left */}

          <motion.div
            className="contact-info"
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
          >

            <h3>Get In Touch</h3>

            <p>
              Feel free to contact me for projects,
              internships or collaborations.
            </p>

            <div className="contact-item">

              <FaEnvelope />

              <span>
                suhanimehta.anu@gmail.com
              </span>

            </div>

            <div className="contact-item">

              <FaPhoneAlt />

              <span>
                +91 9304484296
              </span>

            </div>

            <div className="contact-item">

              <FaMapMarkerAlt />

              <span>
                Bihar, India
              </span>

            </div>

            {/* Socials */}

            <div className="contact-socials">

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

              <a
                href="https://www.instagram.com/_.suhaanii._._/"
                target="_blank"
              >

                <FaInstagram />

              </a>

            </div>

          </motion.div>

          {/* Form */}

          <motion.form
            className="contact-form"

            onSubmit={handleSubmit}

            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;