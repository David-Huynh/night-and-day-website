import * as React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import Header from "./header";
import TitleHeader from "./titleHeader";
import Footer from "./footer";

import { Container, Body } from "./layout.styled";

import { themes } from "../theme/themes";
import { GlobalStyles } from "../theme/GlobalStyles";

import { string, func, element } from "prop-types";

const Layout = ({ titleName, parentThemeCallback, children }) => {
  //TODO: draw background gif/asset that is interactable to see what i'm listening to on spotify 
  //and maybe what i'm doing on the computer but also tracks me around my room every 5 mins
  const [selectedTheme, setSelectedTheme] = React.useState(themes.light);
  const themeCallback = (childSelection) => {
    setSelectedTheme(childSelection);
    if (parentThemeCallback) {
      parentThemeCallback(childSelection);
    }
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      {/*Loads global styling*/}
      <GlobalStyles />
      <Container>
        {/*Adds Meta Data and Header Tags*/}
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{titleName} - David Huynh</title>
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
        {/* Adds Navigation and Logo Header */}
        <Header />
        {/* Adds the Page Title and Clock Header */}
        <TitleHeader titleName={titleName} themeCallback={themeCallback} />
        {/* Body */}
        <Body>{children}</Body>
        {/* Footer */}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
Layout.propTypes = {
  titleName: string.isRequired,
  parentThemeCallback: func.isRequired,
  children: element.isRequired,
};
export default Layout;
