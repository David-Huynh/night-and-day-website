import * as React from "react";
import styled from "styled-components";
import { setToLS, getFromLS } from "../utils/local-storage";
import { themes } from "../theme/themes";

//TODO: add GIF movement

//Styles h2 for Page Title
const TextStyle = styled.h1`
  color: ${({ theme }) => theme.primaryVariant};
`;
//Clock Component references the World Time Api to keep track of the time in Toronto and renders it
const Clock = ({ parentCallback }) => {
  //Initial Clock State from Local storage o/w default to 00:00AM
  const [time, setTime] = React.useState(
    getFromLS("timeState") ? getFromLS("timeState") : "00:00AM"
  );
  /*
    Sets the state and timer for the clock and retrieves from World Time API
    since I want the time to always be reflective of Toronto time in order to set the site logic
    [] is required so React.useEffect doesn't track changes in state
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
      console.log(hour);
      if (hour === "00") {
        hour = 12;
        am_pm = "AM";
      }
      if (hour > 12) {
        hour = hour - 12;
        am_pm = "PM";
      }
      //Changes the theme depending on the time of the day
      //Only changes theme if theme has changed to prevent rerendering
      if (
        (hour >= 11 && am_pm === "PM") ||
        (hour === 12 && am_pm === "AM") ||
        (hour >= 1 && hour <= 6 && am_pm === "AM")
      ) {
        if (getFromLS("theme") !== themes.dark) {
          parentCallback(themes.dark);
          setToLS("theme", themes.dark);
        }
        if (!getFromLS("theme")) {
          setToLS("theme", themes.dark);
        }
      } else {
        if (getFromLS("theme") !== themes.light) {
          parentCallback(themes.light);
          setToLS("theme", themes.light);
        }
        if (!getFromLS("theme")) {
          setToLS("theme", themes.light);
        }
      }
      var minute = timeArray[1];
      return hour + ":" + minute + am_pm;
    }
    //Every tick the Clock gets updated
    function tick() {
      fetch("https://worldtimeapi.org/api/timezone/America/Toronto")
        .then((response) => response.json())
        .then((data) => {
          var date = new Date(Date.parse(data.datetime));
          var timeParsed = parseStringToTime(date.toString());
          setTime(timeParsed);
          //Avoid flickering when navigating by saving timeState
          setToLS("timeState", timeParsed);
        });
    }

    //First Manual Tick
    fetch("https://worldtimeapi.org/api/timezone/America/Toronto")
      .then((response) => response.json())
      .then((data) => {
        var date = new Date(Date.parse(data.datetime));
        var timeParsed = parseStringToTime(date.toString());
        setTime(timeParsed);
        //Avoid flickering when navigating by saving timeState
        setToLS("timeState", timeParsed);
      });

    //Starts interval function
    var timerID = setInterval(() => tick(), 10000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [parentCallback]);

  return <TextStyle>{time}</TextStyle>;
};

export default Clock;
