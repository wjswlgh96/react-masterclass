import { createContext, useContext } from "react";

interface ThemeContextProps {
  isLight: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme는 ThemeProvider에서 사용되어야 합니다.");

  return context;
};
