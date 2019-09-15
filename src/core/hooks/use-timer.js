/* leny/pomodoro
 *
 * /src/core/hooks/use-timer.js - Custom hook to handle a timer
 *
 * coded by leny@BeCode
 * refactored at 15/09/2019
 */

import {useState, useEffect} from "react";

// eslint-disable-next-line no-empty-function
const noop = () => {};

export default (initialSeconds, initialRunning = false, onFinished = noop) => {
    const [running, setRunning] = useState(initialRunning);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (running) {
            setIntervalId(
                setInterval(() => setSeconds(Math.max(0, seconds - 1)), 1000),
            );

            if (seconds === 0) {
                setRunning(false);
                onFinished();
            }
        } else if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, [running, seconds]);

    return [{running, seconds}, {setRunning, setSeconds}];
};
