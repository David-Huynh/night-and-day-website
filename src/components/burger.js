import * as React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const BurgerStyle = styled.button`
  /* Desktop Styling */
  display: none;
  /* Styling For Button */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  /* Mobile Styling */
  @media (max-width: 450px) {
    align-self: center;
    display: ${({ open }) => (open ? "none" : "block")};
  }
  /* Div/Black Bar Styling */
  div {
    background-color: ${({ theme }) => theme.foreground};
    height: 3px;
    width: 25px;
    margin: 5px;
    transition: all 0.5s linear;
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerStyle
      aria-label="Navigation Menu Button"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </BurgerStyle>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
