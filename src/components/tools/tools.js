/* leny/pomodoro
 *
 * /src/components/tools/tools.js - Tools Component
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";

import Button from "./button";

const styles = {
    display: "flex",
    justifyContent: "space-around",
};

const Tools = ({running, onMinus, onReset, onStartPause, onPlus}) => (
    <div style={styles}>
        <Button
            disabled={running}
            onClick={onMinus}
            label={"-"}
            title={"Remove one minute"}
        />
        <Button disabled={running} onClick={onReset} label={"reset"} />
        <Button
            label={running ? "pause" : "start"}
            onClick={onStartPause}
            title={`${running ? "Pause" : "Start"} the timer`}
        />
        <Button
            disabled={running}
            onClick={onPlus}
            label={"+"}
            title={"Add one minute"}
        />
    </div>
);
export default Tools;
