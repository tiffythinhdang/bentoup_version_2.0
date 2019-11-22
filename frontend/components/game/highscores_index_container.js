import { connect } from 'react-redux';

import HighScoresIndex from './highscores_index';
import { fetchTopTenScores } from '../../actions/score_actions';

const mapStateToProps = state => {
  return {
    scores: state.scores
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopTenScores: (request) => dispatch(fetchTopTenScores(request))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScoresIndex);
