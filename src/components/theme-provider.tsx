import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define possible themes
type Theme = "light" | "dark";

// Create context to manage theme state
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Define the type for ThemeProvider props, including children
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {} // Default empty function
});

export const useTheme = () => React.useContext(ThemeContext);

// ThemeProvider component to provide theme context
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync theme with localStorage or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // Update theme in localStorage when theme changes
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
