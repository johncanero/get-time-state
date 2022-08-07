import React, { useState } from 'react';

const Time = () => {

 // Declare a new state variable, which we'll call "count"
  const [time, getTime] = useState("TIME");


// Set the Array Count to Get Time
  const currentTime = () => {
    getTime(new Date().toLocaleTimeString());
  }


  return (
    <div className="container">
        <h1>{time}</h1>
        <button onClick={currentTime}>Get Time</button>
    </div>


  )
}

export default Time


// console.log
let time = new Date().toLocaleTimeString();
console.log(time);