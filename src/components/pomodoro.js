/* leny/pomodoro
 *
 * /src/components/pomodoro.js - Container for app
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React, {useState} from "react";

import Display from "./display/display";
import Tools from "./tools/tools";

const DEFAULT_POMODORO_VALUE = 20;

const Pomodoro = () => {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(DEFAULT_POMODORO_VALUE * 60);

    const handleMinus = () => {
        setSeconds(seconds < 60 ? 0 : seconds - 60);
    };
    const handleReset = () => {
        setSeconds(DEFAULT_POMODORO_VALUE * 60);
    };
    const handleStartPause = () => setRunning(!running);
    const handlePlus = () => {
        setSeconds(seconds + 60);
    };

    return (
        <div>
            <Display seconds={seconds} running={running} />
            <Tools
                running={running}
                onMinus={handleMinus}
                onReset={handleReset}
                onStartPause={handleStartPause}
                onPlus={handlePlus}
            />
        </div>
    );
};
export default Pomodoro;
