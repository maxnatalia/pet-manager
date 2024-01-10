import {
  Box,
  DarkIcon,
  LightIcon,
  PointerIcon,
  TextTheme,
  Wrapper,
} from "./styled";
import useThemeContext from "./useThemeContext";

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <Wrapper>
      <TextTheme>Dark theme: {isDarkTheme ? "ON" : "OFF"}</TextTheme>
      <Box
        onClick={toggleTheme}
        title={`${
          isDarkTheme ? "Change theme to light" : "Change theme to dark"
        }`}
      >
        <PointerIcon $moveToRight={isDarkTheme} />
        <LightIcon />
        <DarkIcon />
      </Box>
    </Wrapper>
  );
};

export default ThemeSwitcher;
