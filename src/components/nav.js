import * as React from "react";
import { MenuStyle, LinkStyle } from "./nav.styled";
import { bool, func } from "prop-types";
const StyledNav = ({ open, setOpen }) => {
  return (
    <MenuStyle open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li>
          <LinkStyle to="/" aria-label="about">
            About
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/resume/" aria-label="resume">
            Resume
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/contact/" aria-label="contact info">
            Contact Me
          </LinkStyle>
        </li>
      </ul>
    </MenuStyle>
  );
};
StyledNav.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default StyledNav;
