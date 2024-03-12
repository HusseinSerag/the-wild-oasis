import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkMode = createContext();

export default function DarkModeContext({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dm", false);

  function toggle() {
    setIsDarkMode((d) => !d);
  }

  useEffect(
    function () {
      const doc = document.documentElement;
      doc.className = !isDarkMode ? "light" : "dark";
    },
    [isDarkMode]
  );
  return (
    <DarkMode.Provider value={{ toggle, isDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkMode);
  if (context === undefined) {
    throw new Error(
      "Cannot use dark mode custom hook outside of context provider"
    );
  }
  return context;
}
