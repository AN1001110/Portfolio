import { Link } from "react-router";
import Header from "../components/Header";
import "../styles/pages/Home.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faCube,
  faFileSignature,
  faMobileAlt,
  faRocket,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";
import { faReact } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <>
      <Header />
      <section className="sec1">
        <div className="container">
          <div className="Home">
            <div className="title">
              <h2>Hello</h2>
              <h1>
                I'm <span>Abdulrahman Nashat</span>
              </h1>
            </div>
            <h3>I'm a  Front-End React Developer</h3>
            <p>Design that sticks, code that clicks.</p>
            <div className="title-bts">
              <Link to="/projects" className="btn btn1">
                Skills & Projects
              </Link>
              <Link to="/contact" className="btn  btn2">
                Contact
              </Link>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faArrowDownLong} />
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
          <h2>Services</h2>
          <div className="services">
            <ServicesCard
              icon={faRocket}
              title={"High Performance"}
              content={
                "Fast loading and optimized user experience for best performance"
              }
            />
            <ServicesCard
              icon={faReact}
              title={"Modern Framework"}
              content={"Implementation using React for dynamic applications"}
            />
            <ServicesCard
              icon={faMobileAlt}
              title={"Responsive Design"}
              content={
                "Websites that adapt to all devices from mobile phones to desktop computers"
              }
            />
            <ServicesCard
              icon={faWindowRestore}
              title={" Browser Compatibility"}
              content={"Consistent operation across all popular browsers"}
            />
            <ServicesCard
              icon={faCube}
              title={"Smart Animations"}
              content={"Interactive animations that enhance user experience"}
            />
            <ServicesCard
              icon={faFileSignature}
              title={"Smart Forms"}
              content={"Interactive web forms with real-time data validation"}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
