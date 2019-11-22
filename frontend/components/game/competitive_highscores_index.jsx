import React from 'react';
import { Link } from 'react-router-dom';

import HighScoreIndexItem from './highscores_index_item';

class CompetitiveHighScoresIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopTenScores({ "mode": "competitive" });
  }

  render() {
    if (this.props.scores.length === 0) return null;

    return (
      <div id="highscores-competitive-container">
        <div id="highscores-competitive">
          <h1>Competitive Mode Top Scores</h1>
          {this.props.scores.map((score, idx) =>
            <HighScoreIndexItem key={idx} score={score} />
          )
          }
          <Link
            to={"/choose-mode"}
            onClick={this.closeModal} >
            <button id="play-again-button">PLAY AGAIN</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default CompetitiveHighScoresIndex;
