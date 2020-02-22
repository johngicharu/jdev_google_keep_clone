import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 60px;
  width: 100%;
  position: relative;
`;

export const SiteTitle = styled.h3`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%);
  font-weight: 300;
  font-size: 1.3em;
`;

export const ToggleTheme = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  cursor: pointer;
`;
