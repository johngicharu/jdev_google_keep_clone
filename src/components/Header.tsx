import React from "react";
import { StyledHeader, ToggleTheme, SiteTitle } from "../styles/HeaderStyles";
import OnIcon from "../Icons/OnIcon";
import OffIcon from "../Icons/OffIcon";

const Header = ({switchTheme, darkThemeActive}: {switchTheme: () => void; darkThemeActive: boolean}) => {
  return (
    <StyledHeader>
      <SiteTitle>Jdev Google Keep Clone</SiteTitle>
      <ToggleTheme onClick={switchTheme}>
        <span>Toggle Theme</span>
        <div className="icon">
        <OnIcon darkThemeActive={darkThemeActive} />
        <OffIcon darkThemeActive={darkThemeActive} />    
        </div>
      </ToggleTheme>
    </StyledHeader>
  );
};

export default Header;
