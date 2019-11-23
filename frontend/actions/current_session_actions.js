export const RECEIVE_SESSION_SCORE = "RECEIVE_SESSION_SCORE";
export const CLEAR_SESSION_SCORE = "CLEAR_SESSION_SCORE";

//actions
export const receiveSessionScore = (score) => ({
  type: RECEIVE_SESSION_SCORE,
  scores
});

export const clearSessionScore = () => ({
  type: CLEAR_SESSION_SCORE
});
