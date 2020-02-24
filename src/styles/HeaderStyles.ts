import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 60px;
  width: 100%;
  position: relative;
  margin-bottom: 1.5em;
`;

export const SiteTitle = styled.h3`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%);
  font-size: 1.3em;
  font-weight: 500;
  
  @media screen and (max-width: 550px) {
    font-size: 1em;
  }
`;

export const ToggleTheme = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.cardTextColor};
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    color: inherit;
    display: block;
  }

  span {
    display: block;
    margin: 0 0.3em 0 0;


    @media screen and (max-width: 550px) {
      display: none;
    }
  }
`;
