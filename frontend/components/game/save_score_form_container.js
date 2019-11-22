import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SaveScoreForm from './save_score_form';
import { saveScore, fetchTopTenScores } from '../../actions/score_actions';

const mapStateToProps = state => {
  return {
    scores: state.scores
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveScore: (score) => dispatch(saveScore(score)),
    fetchTopTenScores: (request) => dispatch(fetchTopTenScores(request))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)
  (SaveScoreForm)
);
