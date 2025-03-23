import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/contact.css"

export default function Contact() {
  useEffect(()=> {
    document.title = "Contact"
  },[])
  return (
    <>
      <Header />
      <section>
        <div className="container"></div>
      </section>
      <Footer/>
    </>
  );
}
