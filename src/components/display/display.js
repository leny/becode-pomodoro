/* leny/pomodoro
 *
 * /src/components/display/display.js - Display Component
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";

import Cyphers from "./cyphers";

const styles = {
    fontSize: "15rem",
    textAlign: "center",
};

const Display = () => (
    <div style={styles}>
        <Cyphers />
        <span>{":"}</span>
        <Cyphers />
    </div>
);
export default Display;
