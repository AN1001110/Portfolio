import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/contact.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <Header />
      <section className="sec1-contact">
        <div className="container">
          <h1>To Contact Us</h1>
          <p>
            If you have any questions or inquiries, feel free to reach out to us
            using the form below.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          <div className="contact-Links">
            <Link to="https://t.me/AN0x10" className="link" target="_blank">
              <FontAwesomeIcon icon={faTelegram} />
            </Link>
            <Link
              to="https://github.com/AN1001110"
              className="link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/an1000"
              className="link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
