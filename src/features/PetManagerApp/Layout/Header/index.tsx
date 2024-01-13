import ThemeSwitcher from "../../../../common/ThemeSwitcher";
import logoPet from "./logo.svg";
import { Box, Logo, StyledHeader, Title } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <Box>
        <Logo src={logoPet} alt="Logo Pet Manager" />
        <Title>PET MANAGER</Title>
      </Box>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
