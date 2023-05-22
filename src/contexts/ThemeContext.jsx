import React, { createContext, useContext, useState } from "react";
import { useIsomorphicLayoutEffect } from "../utils/effect";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseTheme = () => {
  return useContext(ThemeContext);
};
