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
            title={"Diminuer les minutes"}
        />
        <Button disabled={running} onClick={onReset} label={"reset"} />
        <Button
            label={running ? "pause" : "start"}
            onClick={onStartPause}
            title={`${running ? "Mettre en pause" : "Démarrer"} le timer`}
        />
        <Button
            disabled={running}
            onClick={onPlus}
            label={"+"}
            title={"Augmenter les minutes"}
        />
    </div>
);
export default Tools;