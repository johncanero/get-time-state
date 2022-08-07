import React, { useState } from 'react';

const Time = () => {

 // Declare a new state variable, which we'll call "time"
  const [time, setTime] = useState("TIME");


// Set the Array Count to Get Time
  const currentTime = () => {
    setTime(new Date().toLocaleTimeString('en-GB'));
    setInterval(currentTime, 1000);
  }



  return (
    <div className="container">
        <h1>{time}</h1>
        <button onClick={currentTime}>Get Time</button>
    </div>


  )
}

export default Time


