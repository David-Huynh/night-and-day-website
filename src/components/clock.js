import * as React from "react"
import {primary_variant} from './clock.module.css'


//Clock Component references the World Time Api to keep track of the time in Toronto and renders it
const Clock = (props) => {
    const [time, setTime] = React.useState(0);
    //Sets the state and timer for the clock and retrieves from World Time API 
    //since I want the time to always be reflective of Toronto time in order to set the site logic
    //[] is required so useEffect doesn't track changes in state
    React.useEffect(()=>{
        console.log("CLOCK UPDATE")
        fetch('https://worldtimeapi.org/api/timezone/America/Toronto')
            .then(response => response.json())
            .then((data) => {
                var date = new Date(Date.parse(data.datetime))
                setTime(parseStringToTime(date.toString()))
        });
        var timerID= setInterval(()=>tick(),10000);
        return function cleanup() {
            clearInterval(timerID);
        };
    },[]);
    //Every tick the Clock gets updated
    function tick() {
        console.log("CLOCK UPDATE")
        fetch('https://worldtimeapi.org/api/timezone/America/Toronto')
            .then(response => response.json())
            .then((data) => {
                var date = new Date(Date.parse(data.datetime))
                setTime(parseStringToTime(date.toString()))
        });
    }
    //Parses the Date.toString() to normal 12hr clock
    function parseStringToTime(stringDate){
        var timeArray = stringDate.split(":");
        var am_pm = "AM";
        var hour = timeArray[0].slice(-2);
        if (hour > 12){
            hour = hour - 12;
            am_pm = "PM";
        }
        var minute = timeArray[1];
        return hour + ":" + minute+am_pm;
    }
    return (
        <h1 className={primary_variant}>{time}</h1>
    )
}

export default Clock
