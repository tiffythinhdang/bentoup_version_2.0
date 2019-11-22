import { combineReducers } from "redux";

import scoreReducer from './score_reducer';

const RootReducer = combineReducers({
  scores: scoreReducer
})

export default RootReducer;
