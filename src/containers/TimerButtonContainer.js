import TimerButton from "../components/TimerButton";
import { connect } from "react-redux";
const timerState = state => ({
  timer: state.timer,
});
const dispatchButtonProps = dispatch => ({
  onStartTimer: () => {
    dispatch({ type: "START" });
  },
  onPauseTimer: () => {
    dispatch({ type: "PAUSE" });
  },
  onStopTimer: () => {
    dispatch({ type: "STOP" });
  },
});

const TimerButtonContainer = connect(
  timerState,
  dispatchButtonProps
)(TimerButton);

export default TimerButtonContainer;
