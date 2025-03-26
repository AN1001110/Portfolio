import { Link } from "react-router";
import "../styles/components/Header.css";
import {
  faBriefcase,
  faHouse,
  faPhone,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, [screenSize]);
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          AN
        </Link>
        <div>
          <div
            className="bar"
            onClick={() => {
              setShow((ele) => !ele);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul
            style={{
              display: show ? "flex" : screenSize < 768 ? "none" : "flex",
            }}
          >
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faAddressCard} />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <FontAwesomeIcon icon={faBriefcase} />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FontAwesomeIcon icon={faPhone} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
