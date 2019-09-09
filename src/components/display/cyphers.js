/* leny/pomodoro
 *
 * /src/components/display/cyphers.js - Display Component: Cyphers
 *
 * coded by leny@BeCode
 * refactored at 09/09/2019
 */

import React from "react";

const Cyphers = ({value}) => <span>{`${value}`.padStart(2, "0")}</span>;
export default Cyphers;
