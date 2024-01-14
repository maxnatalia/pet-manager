import { navigationList } from "./navigationList";
import { Label, List, StyledNavLink, StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <List>
        {navigationList.map(({ name, link, title, Icon }) => (
          <li key={link}>
            <StyledNavLink $special={link === "/form"} to={link} title={title}>
              <Icon $special={link === "/form"} />
              <Label $special={link === "/form"}>{name}</Label>
            </StyledNavLink>
          </li>
        ))}
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
