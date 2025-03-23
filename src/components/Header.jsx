import { Link } from "react-router";
import "../styles/components/Header.css";
import { faBriefcase, faHouse, faPhone ,faAddressCard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to= "/" className="logo"> AN</Link>
        <ul>
          <li>
            <Link to="/">
            <FontAwesomeIcon  icon={faHouse} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
            <FontAwesomeIcon  icon={faAddressCard} />
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
            <FontAwesomeIcon  icon={faPhone} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
