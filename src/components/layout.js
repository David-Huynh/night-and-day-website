import * as React from 'react';

import Clock from './clock';
import Header from './header';
import Footer from './footer';

import {Helmet} from "react-helmet";
import styled, { ThemeProvider } from 'styled-components';

import { setToLS } from '../utils/local-storage';
import * as themes from '../theme/theme.json';
import { useTheme } from '../theme/useTheme';
import { GlobalStyles } from '../theme/GlobalStyles';


const Container = styled.main`
    display:flex;
    min-height: 98vh;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30%;
    margin-right: 30%;
    @media (max-width: 1440px) {
        margin-left: 10%;
        margin-right: 10%;
    }
`;
const TitleHeader = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
`;
const Body = styled.div`
    flex: 1;
`;

const Layout = ({ titleName, children }) => {
    //Saves Theme to LocalStorage
    setToLS('allThemes', themes.default);
    const {theme, themeLoaded} = useTheme();
    const [selectedTheme, setSelectedTheme] = React.useState(theme);
    
    //Loads theme into state
    React.useEffect(() => {
        if(themeLoaded){
            setSelectedTheme(theme);
        }
    }, [themeLoaded]);
    return (
        themeLoaded && <ThemeProvider theme={ selectedTheme }>
            {/*Loads global styling*/}
            <GlobalStyles/>
            <Container style={{fontFamily: selectedTheme.fontFamily}}>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="Layout Template, contains header and footer"/>
                    <html lang="en"/>
                    <title>{ titleName }</title>

                    {/* IMPORTS FONTS FOR THE HEADER "LOGO" */}
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
                </Helmet>
                <Header/>
                {/* RENDERS THE PAGE TITLE AND CLOCK COMPONENT */}
                <TitleHeader>
                    <h1 style={{color:selectedTheme.foreground,opacity:selectedTheme.highEmphText}}>{titleName}</h1>
                    <Clock/>
                </TitleHeader>
                <Body>
                    {children}
                </Body>
                <Footer/>
            </Container>
        </ThemeProvider>
    )
}
export default Layout
