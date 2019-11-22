import {
  RECEIVE_SCORES,
  RECEIVE_A_SCORE
} from '../actions/save_score';

const scoreReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SCORES:
      return action.scores

    case RECEIVE_A_SCORE:
      return Object.assign( {}, state, {[action.score.id]: action.score} );

    default:
      return state;
  }
}

export default scoreReducer;
