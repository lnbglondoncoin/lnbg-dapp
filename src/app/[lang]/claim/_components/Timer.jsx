"use client";

import { useRef, useState, useEffect } from "react";

export default function Timer() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (days > 9 ? days : "0" + days) +
          ":" +
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date("2024-12-17T00:00:00Z");

    // This is where you need to adjust if
    // you entend to add more time
    // set timer to 4 days 21 hours 12 minutes 08 seconds
    deadline.setDate(deadline.getDate());
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return (
    <div className="flex w-[350px] flex-col py-10">
      <div className="hidden justify-between sm:flex">
        <span className="">{cornerIcon}</span>
        <span className="rotate-90">{cornerIcon}</span>
      </div>
      <div className="flex w-full items-center justify-center gap-3 px-10 sm:gap-4">
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-primary2 text-3xl font-semibold sm:text-4xl">
            {timer.substring(0, 2)}
          </span>
          <span className="">days</span>
        </div>
        <span className="text-3xl font-semibold sm:text-4xl">:</span>
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-primary2 text-3xl font-semibold sm:text-4xl">
            {timer.substring(3, 5)}
          </span>
          <span className="">hours</span>
        </div>
        <span className="text-3xl font-semibold sm:text-4xl">:</span>
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-primary2 text-3xl font-semibold sm:text-4xl">
            {timer.substring(6, 8)}
          </span>
          <span className="">mins</span>
        </div>
        <span className="text-3xl font-semibold sm:text-4xl">:</span>
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-primary2 text-3xl font-semibold sm:text-4xl">
            {timer.substring(9, 11)}
          </span>
          <span className="">secs</span>
        </div>
      </div>
      <div className="hidden justify-between sm:flex">
        <span className="-rotate-90">{cornerIcon}</span>
        <span className="rotate-180">{cornerIcon}</span>
      </div>
    </div>
  );
}

const cornerIcon = (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_552_4621)">
      <path
        d="M15.1226 0H11.6079C5.47318 0 0.5 4.97318 0.5 11.1079V14.6226"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_552_4621">
        <path
          d="M0.5 11C0.5 4.92487 5.42487 0 11.5 0H18.5V18H0.5V11Z"
          fill="white"
        ></path>
      </clipPath>
    </defs>
  </svg>
);
