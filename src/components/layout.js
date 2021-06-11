import * as React from "react";

import Clock from "./clock";
import Header from "./header";
import Footer from "./footer";

import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../theme/GlobalStyles";

const themes = {
  light: {
    foreground: "#000000",
    background: "#FFFFFF",
    backgroundOpacity: 1,
    primaryColor: "#8034c6",
    primaryVariant: "#9b59d7",
    highEmphText: 0.87,
    mediumEmphText: 0.77,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
  dark: {
    foreground: "#FFFFFF",
    background: "#121212",
    backgroundOpacity: 0.87,
    primaryColor: "#8034c6",
    primaryVariant: "#ae79df",
    highEmphText: 0.87,
    mediumEmphText: 0.67,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
};

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

const Layout = ({ titleName, children }) => {
  //TODO: draw background gif thing
  const [selectedTheme, setSelectedTheme] = React.useState(themes.light);

  //Loads theme into state
  React.useEffect(() => {
    setSelectedTheme(themes.light);
  }, []);
  return (
    <ThemeProvider theme={selectedTheme}>
      {/*Loads global styling*/}
      <GlobalStyles />
      <Container style={{ fontFamily: selectedTheme.fontFamily }}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Layout Template, contains header and footer"
          />
          <html lang="en" />
          <title>{titleName}</title>
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
          <Clock />
        </TitleHeader>
        <Body>{children}</Body>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
export default Layout;
