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
      </Helmet>
      <GlobalStyles />
      <p>Job</p>
    </Layout>
  );
};

export default ResumePage;
