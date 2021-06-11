import { createGlobalStyle} from "styled-components";
//Global style for certain elements
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        opacity:${({ theme }) => theme.backgroundOpacity};
        color: ${({ theme }) => theme.primaryColor};
        font-family: ${({ theme }) => theme.fontFamily};
        transition: all 1.0s linear;
    }

    p {
        color: ${({ theme }) => theme.foreground};
        opacity: ${({ theme }) => theme.mediumEmphText};
        transition: all 0.50s linear;
        margin:0;
    }
`;