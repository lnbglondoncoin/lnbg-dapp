
import React, { useContext } from "react";
import { useState, useEffect } from 'react';

const Countdown = ({ targetTimestamp }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTimestamp));
  
    // Function to calculate time left
    function calculateTimeLeft(target) {
      const now = new Date().getTime();
      const difference = target - now;
  
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }
  
      return timeLeft;
    }
  
    // Update the countdown every second
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetTimestamp));
      }, 1000);
  
      return () => clearInterval(timer); // Clean up the timer
    }, [targetTimestamp]);
  
    // Render the countdown
    return (
      <div className="countdown-timer">
        {timeLeft.days !== undefined ? (
          <div className="flex items-center gap-1">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        ) : (
          <span>Staking Ended</span>
        )}
      </div>
    );
  };
  