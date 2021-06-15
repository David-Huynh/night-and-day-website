import { Link } from "gatsby";
import styled from "styled-components";

//Styles the Nav Container
export const MenuStyle = styled.nav`
  /* Parent Flex Styling */
  align-self: center;
  /* Flex Styling */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  ul {
    /* Parent Flex Styling */
    flex: 1;

    padding: 0;
    list-style: none;

    /* Flex Styling */
    display: flex;
    justify-content: center;
    align-items: stretch;
    /* Allows nav bar to scroll if too big */
    flex-wrap: nowrap;
  }
  /* Mobile View */
  @media (max-width: 450px) {
    /* Size */
    width: 100vw;
    /* Positioning of the mobile menu */
    z-index: 1;
    position: absolute;
    left: 0;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;

    /* Simulates h1 text margin */
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    /* Allows scrolling just in case screen is too small */
    overflow: auto;
    white-space: nowrap;
    background-color: transparent;
  }
`;

export const LinkStyle = styled(Link)`
  padding: 5px;
  text-decoration: none;
  /* Color Theme for Links */
  color: ${({ theme }) => theme.foreground};
  opacity: ${({ theme }) => theme.mediumEmphText};
  :hover {
    background-color: ${({ theme }) => theme.primaryVariant};
  }
  @media (max-width: 450px) {
    /* Mobile Font Settings */
    font-weight: bold;
    font-size: large;
  }
`;
