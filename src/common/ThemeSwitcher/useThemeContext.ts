import { useContext } from "react";
import { ThemeSwitcherContext } from "./themeContext";

const useThemeContext = () => {
  const themeContext = useContext(ThemeSwitcherContext);

  if (themeContext === null) {
    throw new Error("Something went wrong - ThemeSwitcher!");
  }

  return themeContext;
};

export default useThemeContext;
