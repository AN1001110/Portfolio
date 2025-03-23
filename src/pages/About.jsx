import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import "../styles/pages/about.css"

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Header />
      <section className="sec1-about">
        <div className="container">
          <h1> Hi! I'm Abdulrahman Nashat</h1>
          <p>
            I'm a front-end developer in the early stages of my career, actively
            learning and building my foundation in web development. My journey
            so far has focused on mastering the art of turning static designs
            into dynamic, user-friendly interfaces with precision.
          </p>
        </div>
      </section>
      <section className="sec2-about">
        <div className="container">
          <h2>
            *What I Do* With a creative and professional touch, I transform the
            design into a tangible reality using:
          </h2>
          <ul>
            <li>✓ *HTML5* | *CSS3* (Flexbox, Grid, Media Queries)</li>
            <li>✓ *JavaScript* (DOM Manipulation, Basic ES6+) </li>
            <li>✓ *React * (Components,Jsx,Props) </li>
            <li>✓ *Basic TypeScript* (Type Annotations, Interfaces) </li>
            <li>✓ *Responsive Layouts* (mobile-first approach) </li>
          </ul>
          <p>
            I excel at following design specifications meticulously while
            ensuring clean, semantic code structure. My work bridges the gap
            between pre-made designs and functional web experiences. *My
            Philosophy*
          </p>
          <ul>
            <li>- Every line of code is a chance to learn</li>
            <li>- Consistency in styling = professional results </li>
            <li>- Team collaboration{" >"} solo work </li>
            <li>- Asking questions is how growth happens </li>
          </ul>
        </div>
      </section>
      <section className="sec3-about">
        <div className="container">
          <h2>*Why Work With Me?*</h2>
          <ul>
            <li>🔹 Strong grasp of core web fundamentals </li>
            <li>🔹 Systematic approach to problem-solving</li>
            <li>🔹 Hunger to absorb feedback and improve </li>
            <li>🔹 Basic version control with Git</li>
          </ul>
          <h3>*Looking For* A supportive environment to:</h3>
          <ul>
            <li>✓ Implement UI designs accurately </li>
            <li>✓ Contribute to real-world projects </li>
            <li>✓ Strengthen my technical foundations </li>
            <li>✓ Learn industry best practices</li>
          </ul>
          <h2>
            Let’s grow together! <Link to="/contact">Contact Me</Link>
          </h2>
        </div>
      </section>
      <Footer />
    </>
  );
}
