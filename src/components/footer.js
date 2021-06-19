import * as React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const FooterStyle = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  opacity: ${({ theme }) => theme.highEmphText};
  align-self: center;
  a{
    margin-right: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <GlobalStyles />
      <a
        href="https://github.com/David-Huynh"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub aria-label="Github Page" size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/david-huynh-/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedinIn aria-label="Linkedin Page" size={28} />
      </a>
    </FooterStyle>
  );
};

export default Footer;
