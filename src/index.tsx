import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { ResetStyles } from "./resetStyles";

import { RouterProvider } from "react-router-dom";
import router from "./screens/Router";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <ResetStyles />
      <RouterProvider router={router} />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
