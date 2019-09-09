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

const Display = ({seconds, running}) => {
    let separator = ":";

    if (running) {
        separator = seconds % 2 ? ":" : " ";
    }

    return (
        <div style={styles}>
            <Cyphers value={Math.floor(seconds / 60)} />
            <span>{separator}</span>
            <Cyphers value={seconds % 60} />
        </div>
    );
};
export default Display;
