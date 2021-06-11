import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import MobileNav from "./mobile-nav";
import { GlobalStyles } from "../theme/GlobalStyles";

//Styles Div for Header Container
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
`;
//Styles h2 for Page Title
const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  font-family: "Monoton", cursive;
`;
//Styles the Nav Container
const Nav = styled.nav`
  align-self: center;
  display: flex;
  align-items: stretch;
  @media (max-width: 1440px) {
    display: none;
  }
`;
//Styles the Navigation List
const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  list-style: none;
`;

//Styles the List Items using the theme
const NavItems = styled(Link)`
  color: ${({ theme }) => theme.foreground};
  opacity: ${({ theme }) => theme.mediumEmphText};
  text-decoration: none;
  padding: 5px;
  :hover {
    background-color: ${({ theme }) => theme.primaryVariant};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <GlobalStyles />
      <Title>DAVID</Title>
      <MobileNav />
      <Nav>
        <NavList>
          <li>
            <NavItems to="/">About</NavItems>
          </li>
          <li>
            <NavItems to="/resume">Resume</NavItems>
          </li>
          <li>
            <NavItems to="/contact">Contact Me</NavItems>
          </li>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
