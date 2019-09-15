/* leny/pomodoro
 *
 * /src/components/pomodoro.js - Container for app
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React, {useState, useEffect, useCallback} from "react";

import Display from "./display/display";
import Tools from "./tools/tools";
import Modal from "./modal/modal";

import {SESSION_DURATION} from "../core/constants";

const Pomodoro = () => {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(SESSION_DURATION);
    const [intervalId, setIntervalId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (running) {
            setIntervalId(
                setInterval(() => setSeconds(Math.max(0, seconds - 1)), 1000),
            );

            if (seconds === 0) {
                setRunning(false);
                setShowModal(true);
            }
        } else if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, [running, seconds]);

    const handleMinus = useCallback(
        () => setSeconds(seconds < 60 ? 0 : seconds - 60),
        [seconds],
    );
    const handleReset = () => setSeconds(SESSION_DURATION);
    const handleStartPause = useCallback(() => setRunning(!running), [running]);
    const handlePlus = useCallback(() => setSeconds(seconds + 60), [seconds]);

    const handleModalClose = () => {
        setShowModal(false);
        handleReset();
    };

    const handleRestart = () => {
        handleModalClose();
        handleStartPause();
    };

    return (
        <div className={["columns", "is-mobile", "is-centered"].join(" ")}>
            <div className={["column", "is-half"].join(" ")}>
                <Display seconds={seconds} running={running} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onStartPause={handleStartPause}
                    onPlus={handlePlus}
                />
            </div>
            <Modal
                show={showModal}
                onClose={handleModalClose}
                onRestart={handleRestart}
            />
        </div>
    );
};
export default Pomodoro;
