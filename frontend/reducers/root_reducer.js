import { combineReducers } from "redux";

import scoreReducer from './score_reducer';
import currentSessionReducer from './current_session_reducer';

const RootReducer = combineReducers({
  scores: scoreReducer,
  currentSession: currentSessionReducer
})

export default RootReducer;
