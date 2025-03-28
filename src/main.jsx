import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/Fonts.css";
import "./styles/assets/normalize.css";
import "./styles/assets/animations.css"
import "./index.css";
import { BrowserRouter} from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
