/* leny/pomodoro
 *
 * /src/components/modal/modal.js - Modal Component
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";
import useTimer from "../../core/hooks/use-timer";
import {createPortal} from "react-dom";

import Button from "../tools/button";
import Display from "../display/display";

import {PAUSE_DURATION, NBSP} from "../../core/constants";

const containerStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }

    const [{running, seconds}, {setRunning}] = useTimer(
        PAUSE_DURATION,
        true,
        onRestart,
    );

    const stopThen = next => () => {
        setRunning(false);
        next();
    };

    return createPortal(
        <div style={containerStyles}>
            <div className={"box"}>
                <h4>{"It's over!"}</h4>
                <p>{"Go take a break."}</p>
                <p>
                    {"When the pause timer is over, a new session will start."}
                </p>
                <Display seconds={seconds} running={running} big={false} />
                <div className={"is-flex"}>
                    <Button label={"Arrêter"} onClick={stopThen(onClose)} />
                    {NBSP}
                    <Button
                        label={"Recommencer"}
                        onClick={stopThen(onRestart)}
                    />
                </div>
            </div>
        </div>,
        document.querySelector("#modals-container"),
    );
};

export default Modal;
