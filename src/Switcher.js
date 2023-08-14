import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkTheme from "./Hooks/useDarkTheme";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkTheme, setDarkTheme] = useState(
    colorTheme === "#8758ff" ? true : false
  );

  const toggleDarkTheme = (checked) => {
    setTheme(colorTheme);
    setDarkTheme(checked);
  };

  return (
    <>
      <DarkModeSwitch
        checked={darkTheme}
        onChange={toggleDarkTheme}
        size={30}
      />
    </>
  );
}
