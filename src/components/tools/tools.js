/* leny/pomodoro
 *
 * /src/components/tools/tools.js - Tools Component
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";

import Button from "./button";

import {NBSP} from "../../core/constants";

const Tools = ({running, onMinus, onReset, onStartPause, onPlus}) => (
    <div className={"is-flex"}>
        <Button
            disabled={running}
            onClick={onMinus}
            label={"-"}
            title={"Remove one minute"}
        />
        {NBSP}
        <Button disabled={running} onClick={onReset} label={"reset"} />
        {NBSP}
        <Button
            label={running ? "pause" : "start"}
            onClick={onStartPause}
            title={`${running ? "Pause" : "Start"} the timer`}
        />
        {NBSP}
        <Button
            disabled={running}
            onClick={onPlus}
            label={"+"}
            title={"Add one minute"}
        />
    </div>
);
export default Tools;
