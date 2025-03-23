import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/projects.css"

export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  return (
    <>
      <Header />
      <section className="sec1-projects">
        <div className="container">
        </div>
      </section>
      <Footer/>
    </>
  );
}
