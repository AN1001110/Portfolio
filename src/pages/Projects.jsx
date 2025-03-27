import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages/projects.css";
import agriCalc from "../assets/imgs/agri-calc.jpg";
export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  return (
    <>
      <Header />
      <section className="sec1-projects">
        <div className="container">
          <ProjectCard
            title={"Agriculture GPA Calc"}
            imgSrc={agriCalc}
            content={
              "GPA Calculator With Agriculture Deign For Students of Faculty of Agriculture "
            }
            toolsList={["Html", "Css", "Js"]}
            demo={"https://agri-gpa.netlify.app"}
            repo = {"https://github.com/AN1001110/Agri-GPA"}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
