import * as React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  //TODO: Add more text
  return (
    //RENDERS LAYOUT + Blurb
    <Layout titleName="Seeking">
      <Helmet>
        <meta name="description" content="Welcome! I'm David" />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@dhuynh"></meta>
        <meta name="twitter:title" content="Short bio"></meta>
        <meta
          name="twitter:description"
          content="Contains a description of who I am and the website"
        ></meta>
      </Helmet>
      <p>
        Welcome! I'm David, a second year Machine Learning and Statistics
        student at the University of Toronto. Aspiring Developer by day, video
        game enjoyer by night, also homecook, and artist(pending).
      </p>
      <br />
      <p>
        You might have noticed a GIF(WIP) in the background, it represents what
        I'm usually doing at that time of the day. Looking to commission someone
        to do this.
      </p>
      <br />
      <p>
        This site transitions into "night" mode after 11:00pm Toronto time and
        back to "day" mode after 8:00am stick around to see how it looks.
      </p>
    </Layout>
  );
};

export default IndexPage;
