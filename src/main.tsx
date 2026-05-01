import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.scss";
import "@/styles/themes/classic.scss";
import "@/styles/themes/floral.scss";
import "@/styles/themes/traditional.scss";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
