import * as React from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { setToLS, getFromLS } from "../utils/local-storage";
import { themes } from "../theme/themes";
import { func } from "prop-types";

//TODO: add GIF movement

//Styles h2 for Page Title
const TextStyle = styled.h1`
  color: ${({ theme }) => theme.primaryVariant};
`;
//Clock Component calculates time in toronto based of the local time using luxon
const Clock = ({ parentCallback }) => {
  //Initial Clock State from Local storage o/w default to 00:00AM
  const [time, setTime] = React.useState(
    getFromLS("timeState") ? getFromLS("timeState") : "00:00AM"
  );
  /*
    Sets the state and timer for the clock calculated from local time
    since I want the time to always be reflective of Toronto time in order to set the site logic
  */
  React.useEffect(() => {
    //Parses the Date.toString() to normal 12hr clock
    function parseStringToTime(stringDate) {
      var timeArray = stringDate.split(":");
      var am_pm = "AM";
      var hour = timeArray[0].slice(-2);
      if (hour === 12) {
        am_pm = "PM";
      }
      if (hour === "00") {
        hour = 12;
        am_pm = "AM";
      }
      if (hour > 12) {
        hour = hour - 12;
        am_pm = "PM";
      }
      //Changes the theme depending on the time of the day
      if (
        (hour >= 11 && am_pm === "PM") ||
        (hour === 12 && am_pm === "AM") ||
        (hour >= 1 && hour <= 8 && am_pm === "AM")
      ) {
        parentCallback(themes.dark);
      } else {
        parentCallback(themes.light);
      }
      var minute = timeArray[1];
      return hour + ":" + minute + am_pm;
    }
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
export default Clock;
