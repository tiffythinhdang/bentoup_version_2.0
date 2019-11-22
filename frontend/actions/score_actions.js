import * as ScoreAPIUtil from '../util/score_api_util';

export const RECEIVE_SCORES = "RECEIVE_SCORES";
export const RECEIVE_A_SCORE = "RECEIVE_A_SCORE";

//actions
export const receiveScores = (scores) => ({
  type: RECEIVE_SCORES,
  scores
});

export const receiveAScore = (score) => ({
  type: RECEIVE_A_SCORE,
  score
});

export const receiveScoreErrors = (errors) => ({
  type: RECEIVE_SCORE_ERROR,
  errors
});

export const clearScoreError = () => ({
  type: CLEAR_SCORE_ERROR
});

//thunk actions
export const saveScore = (request) => dispatch => (
  ScoreAPIUtil.saveScore(request)
    .then(score => dispatch(receiveAScore(score)))
    .fail(errors => dispatch(receiveScoreErrors(errors.responseJSON)))
);

export const fetchTopTenScores = (request) => dispatch => (
  ScoreAPIUtil.fetchTopTenScores(request)
    .then(scores => dispatch(receiveScores(scores)))
    .fail(errors => dispatch(receiveScoreErrors(errors.responseJSON)))
);
