import * as React from "react";
import styled from "styled-components";
import Burger from "./burger";
import { GlobalStyles } from "../theme/GlobalStyles";
import StyledNav from "./nav";
import OutsideAlerter from "./outsideAlerter";
//"StyledNav" adapted from https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/ for mobile and for horizontal nav
//Styles Div for Header Container
const HeaderContainer = styled.div`
  width: 100%;
`;
//Styles h2 for Page Title
const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  font-family: "Monoton", cursive;
  @media (max-width: 450px) {
    filter: ${({ open }) => (open ? "blur(5px)" : "blur(0px)")};
  }
`;

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <HeaderContainer>
      <GlobalStyles />
      <OutsideAlerter open={open} setOpen={setOpen}>
        <Title open={open}>DAVID</Title>
        <Burger open={open} setOpen={setOpen} />
        <StyledNav open={open} setOpen={setOpen} />
      </OutsideAlerter>
    </HeaderContainer>
  );
};

export default Header;
