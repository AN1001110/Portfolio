import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages/projects.css";
//  photos
import agriCalc from "../assets/imgs/agri-calc.jpg";
import anPortfolio from "../assets/imgs/anPortfolio.jpg";
import almaheroun from "../assets/imgs/Almaheroun.jpg";

// logos
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
    [tsLogo, "Typescript"],
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
  const projectsData = [
    [
      agriCalc,
      "Agriculture GPA Calc",
      "GPA Calculator With Agriculture Deign For Students of Faculty of Agriculture",
      ["Html", "Css", "Js"],
      "https://agri-gpa.netlify.app",
      "https://github.com/AN1001110/Portfolio",
    ],
    [
      anPortfolio,
      "AN portfolio",
      "This portfolio website was designed and coded by  AN , drawing design inspiration from other works.",
      ["Vite", "React"],
      "https://an-portfolio1x.vercel.app/",
      "https://github.com/AN1001110/Portfolio",
    ],
    [
      almaheroun,
      "Al-Maheroun Academy",
      "Al-Mahiroon Academy for Quran Memorization and Tajweed Mastery",
      ["React", "React-slick", "js"],
      "https://almaheroun-academy.vercel.app/",
      "https://github.com/AN1001110/AlMaheroun-Academy",
    ],
  ];
  const projects = projectsData.map((project, i) => {
    return (
      <ProjectCard
        key={i}
        imgSrc={project[0]}
        title={project[1]}
        content={project[2]}
        toolsList={project[3]}
        demo={project[4]}
        repo={project[5]}
      />
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
          <div className="projectsCards">{projects}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
