import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { ResetStyles } from "./resetStyles";

import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>
        <ResetStyles />
        <App />
      </ThemeProviderWrapper>
    </QueryClientProvider>
  </React.StrictMode>
);
