import { createRoot } from "react-dom/client";

import Box from "./Box";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Box />
    <Box />
    <Box />
  </>,
);
