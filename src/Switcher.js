import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkTheme from "./Hooks/useDarkTheme";
import { useAlert } from "./components/Context/AlertContext";

export default function Switcher() {
  const { showAlert } = useAlert();
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkTheme, setDarkTheme] = useState(
    colorTheme === "#8758ff" ? true : false
  );

  const toggleDarkTheme = (checked) => {
    setTheme(colorTheme);
    setDarkTheme(checked);
    showAlert("Dark mode enabled", "success");
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
