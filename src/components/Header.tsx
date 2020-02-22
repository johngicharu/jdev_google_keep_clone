import React from "react";
import { StyledHeader, ToggleTheme, SiteTitle } from "../styles/HeaderStyles";

const Header = () => {
  return (
    <StyledHeader>
      <SiteTitle>Jdev Google Keep Clone</SiteTitle>
      <ToggleTheme>Switch</ToggleTheme>
    </StyledHeader>
  );
};

export default Header;
