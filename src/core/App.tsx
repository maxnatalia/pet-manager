import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import PetManagerApp from "../features/PetManagerApp";
import useThemeContext from "../common/ThemeSwitcher/useThemeContext";

const App = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PetManagerApp />
    </ThemeProvider>
  );
};

export default App;
