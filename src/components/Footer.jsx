
import "../styles/components/Footer.css";
export default function Footer() {
  const Rights = new Date();
  return (
    <footer>
      <div className="container">
       
        <span>© {Rights.getFullYear()} - All Rights Reserved</span>
      
      </div>
    </footer>
  );
}
