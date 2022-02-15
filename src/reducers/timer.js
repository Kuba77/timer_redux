const timer = (state = {}, action) => {
  switch (action.type) {
    case "START":
      return { isRunning: true };
    case "PAUSE":
      return { isRunning: false };
    case "STOP":
      return { isRunning: false, reset: true };
    default:
      return state;
  }
};

export default timer;
