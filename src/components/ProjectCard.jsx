import { Link } from "react-router";
import "../styles/components/projectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
export default function ProjectCard({
  imgSrc,
  title,
  content,
  demo,
  repo,
  toolsList,
}) {
  const tools = toolsList.map((tool, i) => {
    return (
      <div key={i} className="tool">
        {tool}
      </div>
    );
  });
  return (
    <div className="projectCard">
      <img src={imgSrc} alt="Not Found" />
      <div className="cardContent">
        <h3>{title}</h3>
        <p>{content}</p>
        <Link to={repo} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          <div>Repository</div>
        </Link>
        <Link to={demo} target="_blank">
          <FontAwesomeIcon icon={faPlayCircle} />
          <div>Live Demo</div>
        </Link>
        <div className="tools">{tools}</div>
      </div>
    </div>
  );
}
