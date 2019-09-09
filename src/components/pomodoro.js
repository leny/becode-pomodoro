/* leny/pomodoro
 *
 * /src/components/pomodoro.js - Container for app
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => (
    <div>
        <Display />
        <Tools />
    </div>
);
export default Pomodoro;
