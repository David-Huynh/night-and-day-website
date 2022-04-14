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
