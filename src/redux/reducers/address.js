import { ADD_ADDRESS } from "../actions";

const ipAddress = "";

function addAddress(state, action) {
  return {
    ...state,
    ipAddress: action.payload,
  };
}

export default function reducer(state = ipAddress, action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return addAddress(state, action);
    default:
      return state;
  }
}
