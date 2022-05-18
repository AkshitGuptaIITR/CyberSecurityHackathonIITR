import React, { useEffect, useState } from "react";
import style from "./CountDown.module.css";

const CountDown = () => {
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    setInterval(() => getTimeUntil(), 1000);
  }, []);

  const getTimeUntil = () => {
    const time = Date.parse("November, 10, 2022") - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  return (
    <div className={style.countDown}>
      <div className={style.content}>
        <h1>{leading0(days)}</h1>
        <p>days</p>
      </div>
      <div className={style.content}>
        <h1>{leading0(hours)}</h1>
        <p>hours</p>{" "}
      </div>
      <div className={style.content}>
        <h1>{leading0(minutes)}</h1>
        <p>minutes</p>
      </div>
      <div className={style.content}>
        <h1>{leading0(seconds)}</h1>
        <p>seconds</p>
      </div>
    </div>
  );
};

export default CountDown;
