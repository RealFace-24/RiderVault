import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // Modificat aici

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);