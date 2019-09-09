/* leny/pomodoro
 *
 * /src/components/pomodoro.js - Container for app
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React, {useState, useEffect} from "react";

import Display from "./display/display";
import Tools from "./tools/tools";
import Modal from "./modal/modal";

const DEFAULT_POMODORO_VALUE = 0.05;

const Pomodoro = () => {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(DEFAULT_POMODORO_VALUE * 60);
    const [intervalId, setIntervalId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (running) {
            const id = setInterval(() => setSeconds(sec => sec - 1), 1000);

            setIntervalId(id);
        } else if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, [running]);

    useEffect(() => {
        if (seconds <= 0) {
            setSeconds(0);
            setRunning(false);
            setShowModal(true);
        }
    }, [seconds]);

    const handleMinus = () => {
        setSeconds(seconds < 60 ? 0 : seconds - 60);
    };
    const handleReset = () => {
        setSeconds(DEFAULT_POMODORO_VALUE * 60);
    };
    const handleStartPause = () => setRunning(!running);
    const handlePlus = () => {
        setSeconds(seconds + 60);
    };

    const handleModalClose = () => {
        setShowModal(false);
        handleReset();
    };

    const handleRestart = () => {
        handleModalClose();
        handleStartPause();
    };

    return (
        <div>
            <Display seconds={seconds} running={running} />
            <Tools
                running={running}
                onMinus={handleMinus}
                onReset={handleReset}
                onStartPause={handleStartPause}
                onPlus={handlePlus}
            />
            <Modal
                show={showModal}
                onClose={handleModalClose}
                onRestart={handleRestart}
            />
        </div>
    );
};
export default Pomodoro;
