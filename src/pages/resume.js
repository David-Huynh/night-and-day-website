import * as React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import { GlobalStyles } from "../theme/GlobalStyles";
const ResumePage = () => {
  //TODO: Add content
  return (
    <Layout titleName="Resume">
      <Helmet>
        <meta
          name="description"
          content="Resume Page, contains my experience and project descriptions"
        />
        <meta name="twitter:card" content="summary"></meta>
        <meta
          name="twitter:description"
          content="David Huynh - Resume Page"
        ></meta>
        <meta name="twitter:title" content="My projects/resume"></meta>
        <meta name="twitter:site" content="@dhuynh"></meta>
      </Helmet>
      <GlobalStyles />
      <p>Job</p>
    </Layout>
  );
};

export default ResumePage;
