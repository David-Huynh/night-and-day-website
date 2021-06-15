import * as React from "react";
import { bool, func } from "prop-types";
import { GlobalStyles } from "../theme/GlobalStyles";
import styled from "styled-components"; 

const BurgerStyle = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  @media (max-width: 450px) {
    align-self: center;
    display: ${({ open }) => (open ? "none" : "block")};
  }
`;

const BarStyle = styled.div`
  background-color: ${({ theme }) => theme.foreground};
  height: 3px;
  width: 25px;
  margin: 5px;
  transition: all 0.5s linear;
`;

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerStyle open={open} onClick={() => setOpen(!open)}>
      <GlobalStyles />
      <BarStyle />
      <BarStyle />
      <BarStyle />
    </BurgerStyle>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
