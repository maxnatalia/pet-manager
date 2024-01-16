import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";
import useThemeContext from "../common/ThemeSwitcher/useThemeContext";
import PetManagerApp from "../features/PetManagerApp";
import { PetsProvider } from "../features/PetManagerApp/petsContext";

const App = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PetsProvider>
        <PetManagerApp />
      </PetsProvider>
    </ThemeProvider>
  );
};

export default App;
