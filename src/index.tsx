import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { ResetStyles } from "./resetStyles";
import ThemeSelector from "./components/ThemeSelector";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ResetStyles />
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </React.StrictMode>
);
