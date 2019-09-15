/* leny/pomodoro
 *
 * /src/components/display/display.js - Display Component
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";
import PropTypes from "prop-types";

import Cyphers from "./cyphers";

const Display = ({seconds, running, big = true}) => {
    const styles = {
        fontSize: `${big ? 15 : 5}rem`,
        textAlign: "center",
    };

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

Display.propTypes = {
    big: PropTypes.bool,
    seconds: PropTypes.number.isRequired,
    running: PropTypes.bool,
};

export default Display;
