import { combineReducers } from 'redux';
import address from './address';
import useOrientation from './useOrientation';

let reducers = {
  address,
  useOrientation
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
