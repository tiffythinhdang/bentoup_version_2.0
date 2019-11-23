import {
  RECEIVE_SESSION_SCORE,
  CLEAR_SESSION_SCORE
} from '../actions/current_session_actions';

const currentSessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_SCORE:
      return action.score;

    case CLEAR_SESSION_SCORE:
      return null;

    default:
      return state;
  }
}

export default currentSessionReducer;
