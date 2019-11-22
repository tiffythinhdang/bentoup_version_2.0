import { combineReducers } from "redux";

import scoreReducer from './score_reducer';

const RootReducer = combineReducers({
  score: scoreReducer
})

export default RootReducer;
