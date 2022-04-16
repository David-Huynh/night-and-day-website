import * as React from "react";
import { Helmet } from "react-helmet";
import LogoSpinner  from "../components/spinner";
import { useInterval } from "../hooks/useIntervals";
const Layout = React.lazy(() => import("../components/layout"));
const SpotifyPlayer = React.lazy(() => import("../components/spotifyPlayer"));

const IndexPage = () => {
  // 15 minute delay on location update
  const delay = 900000;
  // Fetches whether im at home or not
  const [location, setLocation] = React.useState(false);
  async function retrieveLocation(){
    try {
        const result = await fetch('https://dhuynh.ca/api/retrieve_location', {method: 'GET'});
        const location_data = await result.json();
        setLocation(location_data.home === 'true');
    } catch (error) {
        console.log(error);
    }
  }
  
  useInterval(retrieveLocation, delay);

  React.useEffect(() => {
    async function firstLocation(){
      await retrieveLocation();
    }
    firstLocation();
  }, []);

  return (
    //RENDERS LAYOUT + Blurb
    <React.Suspense fallback={<LogoSpinner />}>
      <Layout titleName="Seeking">
        <Helmet defer={false}>
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
          Welcome! I'm David, a Machine Learning and Statistics
          student at the University of Toronto. Aspiring Developer by day, video
          game enjoyer by night, also homecook, and artist(pending).
        </p>
        <br />
        <p>
          You might have noticed a GIF(work in progress) in the background, it shows what
          I might currently be doing by pinging my phone location and tracking my spotify history. Looking to commission someone to create the GIF.
        </p>
        <br />
        <p>
          This site transitions into "night" mode after 10:00pm Toronto time and
          back to "day" mode after 8:00am stick around to see how it looks.
        </p>
        <br />
        <p>
          The GIF is still a work in progress so everything that I would like to
          put in the gif is below.
        </p>
        <br />
        <SpotifyPlayer />
        <br />
        <p>
          This is the state variable that I'm using to determine whether I'm at home or not: {location === true ? "I'm at home" : "I'm not at home"}
        </p>
      </Layout>
    </React.Suspense>
  );
};

export default IndexPage;
