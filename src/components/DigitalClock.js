import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); 
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    return (
        <div className="clock">
            <h1>{formatTime(time)}</h1>
        </div>
    );
};

export default DigitalClock;

