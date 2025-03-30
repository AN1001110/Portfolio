import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages/projects.css";
import agriCalc from "../assets/imgs/agri-calc.jpg";
import anPortfolio from "../assets/imgs/anPortfolio.jpg"
import htmlLogo from "../assets/imgs/html.svg";
import cssLogo from "../assets/imgs/css.svg";
import jsLogo from "../assets/imgs/js.svg";
import tsLogo from "../assets/imgs/ts.svg";
import reactLogo from "../assets/imgs/React.svg";
import gitLogo from "../assets/imgs/git.svg";
import githubLogo from "../assets/imgs/github.png";
import viteLogo from "../assets/imgs/vite.svg";
import vsLogo from "../assets/imgs/vscode.svg";


export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  const logos = [
    [htmlLogo, "Html"],
    [cssLogo, "Css"],
    [jsLogo, "Javascript"],
    [tsLogo, "Typescript (Basics)"],
    [reactLogo, "React"],
    [gitLogo, "Git"],
    [githubLogo, "Github"],
    [viteLogo, "Vite"],
    [vsLogo, "VS code"],
  ];

  const logosCards = logos.map((logo, i) => {
    return (
      <div className="skill" key={i}>
        <img src={logo[0]} alt="Not Found" />
        <h3>{logo[1]}</h3>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="sec1-projects">
        <div className="container">
          <h2>Skills & Tools</h2>
          <div className="skills">{logosCards}</div>
        </div>
      </section>
      <section className="sec2-projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projectsCards">
            <ProjectCard
              title={"Agriculture GPA Calc"}
              imgSrc={agriCalc}
              content={
                "GPA Calculator With Agriculture Deign For Students of Faculty of Agriculture "
              }
              toolsList={["Html", "Css", "Js"]}
              demo={"https://agri-gpa.netlify.app"}
              repo={"https://github.com/AN1001110/Agri-GPA"}
            />
          
            <ProjectCard
              title={"AN portfolio"}
              imgSrc={anPortfolio}
              content={
                "This portfolio website was designed and coded by  AN , drawing design inspiration from other works."
              }
              toolsList={["Vite", "React"]}
              demo={"https://an-portfolio1x.vercel.app/"}
              repo={"https://github.com/AN1001110/Portfolio"}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
