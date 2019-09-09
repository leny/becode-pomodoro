/* leny/pomodoro
 *
 * /src/components/tools/button.js - Tools Component: Button
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";

const styles = {
    backgroundColor: "transparent",
    color: "silver",
    border: ".1rem solid silver",
    borderRadius: ".5rem",
    fontSize: "1.5rem",
    padding: ".5rem",
    display: "block",
    width: "100%",
};

const Button = ({label, title}) => (
    <button style={styles} type={"button"} title={title || label}>
        {label}
    </button>
);
export default Button;
