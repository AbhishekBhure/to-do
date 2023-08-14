import { useState, useEffect } from "react";

export default function useDarkTheme() {
  const [theme, setTheme] = useState(localStorage.theme);

  const colorTheme = theme === "dark" ? "#8758ff" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
