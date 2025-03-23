import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/serviceCard.css";
import { useRef } from "react";
export default function ServicesCard(params) {
  const serviceCardRef = useRef(null)
  return (
    <div ref={serviceCardRef} className="serviceCard card">
      <FontAwesomeIcon icon={params.icon} className="icon" />
      <h3>{params.title}</h3>
      <p>{params.content}</p>
    </div>
  );
}
