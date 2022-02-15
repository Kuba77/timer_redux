import React, { Fragment } from "react";

const TimerButton = ({ onStartTimer, onStopTimer, onPauseTimer }) => {
  return (
    <Fragment>
    <button onClick={() => onStartTimer()}>START</button>
    <button onClick={() => onPauseTimer()}>PAUSE</button>
    <button onClick={() => onStopTimer()}>STOP</button>
    </Fragment>
  );
};

export default TimerButton;
