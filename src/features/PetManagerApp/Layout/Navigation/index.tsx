import { useLocation } from "react-router-dom";
import { navigationList } from "./navigationList";
import { Label, List, StyledNavLink, StyledNavigation } from "./styled";

const Navigation = () => {
  const location = useLocation();
  const shouldDisplayForm =
    location.pathname === "/form" || location.pathname === "/eventForm";

  return (
    <>
      {!shouldDisplayForm && (
        <StyledNavigation>
          <List>
            {navigationList.map(({ name, link, title, Icon }) => (
              <li key={link}>
                <StyledNavLink
                  $special={link === "/form" || link === "/eventForm"}
                  to={link}
                  title={title}
                >
                  <Icon $special={link === "/form" || link === "/eventForm"} />
                  <Label $special={link === "/form" || link === "/eventForm"}>
                    {name}
                  </Label>
                </StyledNavLink>
              </li>
            ))}
          </List>
        </StyledNavigation>
      )}
    </>
  );
};

export default Navigation;
