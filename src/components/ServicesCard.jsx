import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/serviceCard.css";
export default function ServicesCard(params) {
  return (
    <div  className="serviceCard card">
      <FontAwesomeIcon icon={params.icon} className="icon" />
      <h3>{params.title}</h3>
      <p>{params.content}</p>
    </div>
  );
}
