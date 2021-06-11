import * as React from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";

import Clock from "./clock";
import Header from "./header";
import Footer from "./footer";

import { getFromLS } from "../utils/local-storage";
import { themes } from "../theme/themes";
import { GlobalStyles } from "../theme/GlobalStyles";

const Container = styled.main`
  display: flex;
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

const Layout = ({ titleName, parentThemeCallback, children }) => {
  //TODO: draw background gif thing
  const [selectedTheme, setSelectedTheme] = React.useState(
    getFromLS("theme") ? getFromLS("theme") : themes.light
  );
  const themeCallback = (childSelection) => {
    setSelectedTheme(childSelection);
    if (parentThemeCallback){
      parentThemeCallback(childSelection);
    }
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      {/*Loads global styling*/}
      <GlobalStyles />
      <Container style={{ fontFamily: selectedTheme.fontFamily }}>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>David Huynh - {titleName}</title>
          <style>
            {`
            @font-face {
              font-family: 'Monoton';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/monoton/v10/5h1aiZUrOngCibe4TkHLQg.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
          `}
          </style>
          <meta
            name="description"
            content="Layout Template, contains header and footer"
          />
        </Helmet>
        <Header />
        {/* RENDERS THE PAGE TITLE AND CLOCK COMPONENT */}
        <TitleHeader>
          <h1
            style={{
              color: selectedTheme.foreground,
              opacity: selectedTheme.highEmphText,
            }}
          >
            {titleName}
          </h1>
          <Clock parentCallback={themeCallback} currentTheme={selectedTheme} />
        </TitleHeader>
        <Body>{children}</Body>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
export default Layout;
