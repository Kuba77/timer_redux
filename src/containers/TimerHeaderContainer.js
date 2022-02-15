import TimerHeader from "../components/TimerHeader";
import { connect } from "react-redux";

const timerState = state => {
  return {
    timer: state.timer,
  };
};
const TimerHeaderContainer = connect(timerState)(
  TimerHeader
);

export default TimerHeaderContainer;
