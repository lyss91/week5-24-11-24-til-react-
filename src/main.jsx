import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Box from "./Box";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Box islogin={true}>
      <h1> 안녕하세요. </h1>
    </Box>
  </StrictMode>,
);
