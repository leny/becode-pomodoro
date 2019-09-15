/* leny/pomodoro
 *
 * /src/components/tools/button.js - Tools Component: Button
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";

const Button = ({disabled = false, onClick, label, title}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={["button", "is-primary", "is-medium", "is-fullwidth"].join(
            " ",
        )}
        type={"button"}
        title={title || label}>
        {label}
    </button>
);
export default Button;
