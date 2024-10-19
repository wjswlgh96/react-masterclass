import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { ResetStyles } from "./resetStyles";

import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <ResetStyles />
      <App />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
