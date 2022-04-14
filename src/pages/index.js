import * as React from "react";
import { Helmet } from "react-helmet";
import LogoSpinner  from "../components/spinner";
const Layout = React.lazy(() => import("../components/layout"));
const SpotifyPlayer = React.lazy(() => import("../components/spotifyPlayer"));

const IndexPage = () => {
  return (
    //RENDERS LAYOUT + Blurb
    <React.Suspense fallback={<LogoSpinner />}>
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
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" rel="stylesheet" type='text/css'/>
        </Helmet>
        <p>
          Welcome! I'm David, a Machine Learning and Statistics
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
        <SpotifyPlayer />
      </Layout>
    </React.Suspense>
  );
};

export default IndexPage;
