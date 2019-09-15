/* leny/pomodoro
 *
 * /src/components/modal/modal.js - Modal Component
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Button from "../tools/button";
import Display from "../display/display";

const NBSP = "\u00a0";

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

const modalStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    width: `${(100 / 3) * 2}vw`,
    height: `${100 / 3}vh`,
    background: "#444",
    border: ".1rem solid silver",
    borderRadius: ".5rem",
    padding: "2rem",
    color: "white",
};

const actionsStyles = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "2rem",
    width: "100%",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }

    const [running, setRunning] = useState(true);
    const [seconds, setSeconds] = useState(10);
    const [intervalId, setIntervalId] = useState(null);

    const stopThen = next => () => {
        setRunning(false);
        next();
    };

    useEffect(() => {
        if (running) {
            setIntervalId(
                setInterval(() => setSeconds(Math.max(0, seconds - 1)), 1000),
            );

            if (seconds === 0) {
                setRunning(false);
                onRestart();
            }
        } else if (intervalId) {
            clearInterval(intervalId);
            setInterval(null);
        }

        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, [running, seconds]);

    return ReactDOM.createPortal(
        <div style={containerStyles}>
            <div style={modalStyles}>
                <h4>{"It's over!"}</h4>
                <p>{"Go take a break."}</p>
                <p>
                    {"When the pause timer is over, a new session will start."}
                </p>
                <Display seconds={seconds} running={running} big={false} />
                <div style={actionsStyles}>
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
