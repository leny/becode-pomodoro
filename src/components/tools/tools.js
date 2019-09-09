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

const Tools = () => (
    <div style={styles}>
        <Button label={"-"} title={"Diminuer les minutes"} />
        <Button label={"reset"} />
        <Button label={"start"} title={"Démarrer le timer"} />
        <Button label={"+"} title={"Augmenter les minutes"} />
    </div>
);
export default Tools;
