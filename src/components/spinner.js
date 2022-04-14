import * as React from "react";
import styled from "styled-components";
import { themes } from "../theme/themes";
import WebFont from 'webfontloader';


const Title = styled.h2`
    color: ${themes.dark.primaryColor};
    font-family: "Monoton", cursive;
    font-size: 6rem;
    animation: spin 0.6s linear infinite;
    @media (max-width: 450px) {
        filter: ${({ open }) => (open ? "blur(5px)" : "blur(0px)")};
    }
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
`;
const Box = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Spotify player component updates to most recent song played
const LogoSpinner = () => {
    React.useEffect(() => {
        WebFont.load({
          google: {
            families: ['Monoton']
          }
        });
    }, []);
    return(
        <Box>
            <Title>D</Title>
        </Box>
    );
};
export default LogoSpinner;
