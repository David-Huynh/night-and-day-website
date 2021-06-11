import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterStyle = styled.div`
    align-self: center;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <GlobalStyles/>
            <a href="https://www.linkedin.com/in/david-huynh-/" rel="noopener noreferrer"  target="_blank"><FaLinkedinIn aria-label="Linkedin Page" size={28}/></a>
        </FooterStyle>
    );
};

export default Footer