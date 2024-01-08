// import { ThemeProvider } from "styled-components";
import PetManagerApp from "../features/PetManagerApp";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PetManagerApp />
    </>
  );
};

export default App;
