import { connect } from 'react-redux';

import CompetitiveHighScoresIndex from './competitive_highscores_index';
import { fetchTopTenScores } from '../../actions/score_actions';

const mapStateToProps = state => {
  return {
    scores: Object.values(state.scores)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopTenScores: (request) => dispatch(fetchTopTenScores(request))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitiveHighScoresIndex);
