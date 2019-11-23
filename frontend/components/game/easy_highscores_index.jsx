import React from 'react';
import { Link } from 'react-router-dom';

import HighScoreIndexItem from './highscores_index_item';

class EasyHighScoresIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchTopTenScores({"mode": "easy"});
  }

  render() {
    if (this.props.scores.length === 0) return null;

    return (
      <div id="highscores-easy-container">
        <div id="highscores-easy">
          <h1>Easy Mode Top Scores</h1>

          { this.props.scores.map((score, idx) =>
            <HighScoreIndexItem key={idx} score={score}/>
            )
          }

          <Link to={"/scores/high-competitive"}>
            <button className="small button">SEE COMPETITIVE SCORES</button>
          </Link>

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

export default EasyHighScoresIndex;
