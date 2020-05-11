import { USE_ORIENTATION } from "../actions";

const useOrientation = (state = false, action) => {
  switch (action.type) {
    case USE_ORIENTATION:
      return !state;
    default:
      return state;
  }
};

export default useOrientation;
