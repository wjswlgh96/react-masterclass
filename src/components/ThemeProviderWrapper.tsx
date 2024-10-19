import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { ThemeContext } from "../function/useTheme";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
