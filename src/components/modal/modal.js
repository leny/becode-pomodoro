/* leny/pomodoro
 *
 * /src/components/modal/modal.js - Modal Component
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";
import ReactDOM from "react-dom";
import Button from "../tools/button";

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

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div style={containerStyles}>
            <div style={modalStyles}>
                <p>{"C'est terminé, faites une pause !"}</p>
                <div>
                    <Button label={"Arrêter"} onClick={onClose} />
                    <Button label={"Recommencer"} onClick={onRestart} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals-container"),
    );
};

export default Modal;
