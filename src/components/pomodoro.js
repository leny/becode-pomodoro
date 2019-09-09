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

const DEFAULT_POMODORO_VALUE = 3.5;

const Pomodoro = () => {
    const [running, setRunning] = useState(false);
    const [seconds] = useState(DEFAULT_POMODORO_VALUE * 60);

    const handleMinus = () => {
        console.warn("Pomodoro:handleMinus");
    };
    const handleReset = () => {
        console.warn("Pomodoro:handleReset");
    };
    const handleStartPause = () => setRunning(!running);
    const handlePlus = () => {
        console.warn("Pomodoro:handlePlus");
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
