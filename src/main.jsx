import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IndexPage from "./pages/indexPage";
import CeoPage from "./pages/CeoPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexPage></IndexPage>
  </StrictMode>,
);
