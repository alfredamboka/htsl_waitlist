import { useState, useEffect } from 'react'
import './CountDown.css'

const Countdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");


  const startCountDown = () => { 
    let interval = setInterval(() => {
      const endDate = new Date('Dec 21, 2023')
      const currentDate = new Date();
      const totalSeconds = (endDate - currentDate) / 1000;

      const daysCount = Math.floor(totalSeconds / 3600 / 24);
      const hoursCount = Math.floor(totalSeconds / 3600 / 24) % 24;
      const minutesCount = Math.floor(totalSeconds / 60) % 60;
      const secondsCount = Math.floor(totalSeconds) % 60;


      if(totalSeconds < 1) {
        clearInterval(interval)
      } else {
        setDays(`${format(daysCount)}`);
        setHours(`${format(hoursCount)}`);
        setMinutes(`${format(minutesCount)}`);
        setSeconds(`${format(secondsCount)}`);
      }

    },  1000)
  };
  
  useEffect(() => {
    startCountDown();
  });


  function format(t) {
    return t < 10 ? `0${t}` : t
  }



  return (
    <div>
        <div className=" --card  --my">
          <time className="countdown --flex-center  --text-center --color-white">
            
            <span>
              <p>{days}</p>
              <small>Days</small>
            </span>
            <span>
              <p>{hours}</p>
              <small>Hours</small>
            </span>
            <span>
              <p>{minutes}</p>
              <small>Minutes</small>
            </span>
            <span>
              <p>{seconds}</p>
              <small>Seconds</small>
            </span>
          </time>
        </div>
    </div>
  )
}

export default Countdown