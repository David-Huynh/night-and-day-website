import { Link } from "gatsby";
import styled from "styled-components";

//Styles the Nav Container
export const StyledMenu = styled.nav`
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  ul {
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    list-style: none;
    flex: 1;
  }
  /* Mobile View */
  @media (max-width: 450px) {
    flex-wrap: nowrap;
    z-index: 1;
    position: absolute;
    width: 100vw;
    left: 0;
    /* Simulates h1 text margin */
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    /* Adds scrolling just in case screen is too small */
    overflow: auto;
    white-space: nowrap;
    background-color: transparent;

    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.foreground};
  opacity: ${({ theme }) => theme.mediumEmphText};
  text-decoration: none;
  padding: 5px;
  :hover {
    background-color: ${({ theme }) => theme.primaryVariant};
  }
  @media (max-width: 450px) {
    font-weight: bold;
    font-size: large;
  }
`;
