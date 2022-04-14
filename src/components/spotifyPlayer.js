import * as React from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { setToLS, getFromLS } from "../utils/local-storage";
import { themes } from "../theme/themes";
import { func } from "prop-types";
import fetch from 'node-fetch';

//Styles h2 for Page Title
const TextStyle = styled.h1`
  color: ${({ theme }) => theme.primaryVariant};
`;
//Clock Component calculates time in toronto based of the local time using luxon
const SpotifyPlayer = ({ parentCallback }) => {
  //Initial Clock State from Local storage o/w default to 00:00AM
  const [time, setTime] = React.useState(
    getFromLS("timeState") ? getFromLS("timeState") : "00:00AM"
  );
  /*
  */
  React.useEffect(() => {
    fetch('https://dhuynh.ca/api/retrieve_played_songs', {
        method: 'GET',
    })
    //Every tick the Clock gets updated
    function tick() {
      var date = DateTime.now().setZone("America/Toronto");
      var timeParsed = parseStringToTime(date.toString());
      setTime(timeParsed);
      //Avoid flickering when navigating by saving timeState
      setToLS("timeState", timeParsed);
    }

    //First Manual Tick
    var date = DateTime.now().setZone("America/Toronto");
    var timeParsed = parseStringToTime(date.toString());
    setTime(timeParsed);
    //Avoid flickering when navigating by saving timeState
    setToLS("timeState", timeParsed);

    //Starts interval function
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [parentCallback]);

  return <TextStyle>{time}</TextStyle>;
};
Clock.propTypes = {
  parentCallback: func.isRequired,
};
export default SpotifyPlayer;
