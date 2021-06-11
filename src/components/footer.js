import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterStyle = styled.div`
    align-self: center;
`;

const Footer = ({ titleName, children }) => {
    //TODO: Add footer icons and links
    return (
        <FooterStyle>
            <GlobalStyles/>
            <a href="https://www.linkedin.com/in/david-huynh-/" target="_blank"><FaLinkedinIn/></a>
            <a></a>
            <a></a>
        </FooterStyle>
    );
};

export default Footer