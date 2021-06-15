import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { themes } from "../theme/themes";
import { getFromLS } from "../utils/local-storage";

//Styles the phonenumber text
const Cell = styled.p`
  color: ${({ theme }) => theme.foreground};
  opacity: ${({ theme }) => theme.highEmphText};
`;
//Styles the Mail Text
const Mail = styled.p`
  margin: 0;
  opacity: ${({ theme }) => theme.highEmphText};
  a {
    color: ${({ theme }) => theme.foreground};
    text-decoration: none;
  }
`;

const ContactPage = () => {
  const [selectedTheme, setSelectedTheme] = React.useState(
    getFromLS("theme") ? getFromLS("theme") : themes.light
  );
  const themeCallback = (childTheme) => {
    setSelectedTheme(childTheme);
  };
  return (
    //RENDERS CONTACT INFO
    <Layout titleName="Contact Info" parentThemeCallback={themeCallback}>
      <Helmet>
        <meta name="description" content="Contact Info page" />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@dhuynh"></meta>
        <meta name="twitter:title" content="Contact Info"></meta>
        <meta name="twitter:description" content="Contains contact info"></meta>
      </Helmet>
      {/* Renders certain text depending on the time of the day */}
      {selectedTheme === themes.light && (
        <p>
          It's currently day where I live and I should be available to answer
          the phone.
        </p>
      )}
      {selectedTheme === themes.dark && (
        <p>It's currently night where I live and I might not be available.</p>
      )}
      <br />
      <Cell>
        <b>(647) 929-9932</b>
      </Cell>
      <Mail>
        <b>
          <a href="mailto:huynh.david.work@gmail.com">
            huynh.david.work@gmail.com
          </a>
        </b>
      </Mail>
    </Layout>
  );
};

export default ContactPage;
