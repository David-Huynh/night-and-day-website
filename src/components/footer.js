import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';
const FooterStyle = styled.div`
    align-self: center;
`;

const Footer = ({ titleName, children }) => {
    //TODO: Add footer icons and links
    return (
        <FooterStyle>
            <GlobalStyles/>
            <a></a>
            <a></a>
            <a></a>
        </FooterStyle>
    );
};

export default Footer