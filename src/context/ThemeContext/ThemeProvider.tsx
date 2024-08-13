import { useState, useEffect } from "react";
import { ThemeContext } from "./useThemeContext";
import { DEFAULT_THEME, TOGGLE_THEME } from "../../util";

interface ThemeProvider {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProvider) {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("cestaCamponesaTheme") || DEFAULT_THEME
  );

  useEffect(() => {
    localStorage.setItem("cestaCamponesaTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === DEFAULT_THEME ? TOGGLE_THEME : DEFAULT_THEME
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
