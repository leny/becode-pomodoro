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
    const [running] = useState(false);
    const [seconds] = useState(DEFAULT_POMODORO_VALUE * 60);

    return (
        <div>
            <Display seconds={seconds} running={running} />
            <Tools />
        </div>
    );
};
export default Pomodoro;
