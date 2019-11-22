import React from 'react';

import HighScoreIndexItem from './highscores_index_item';

class HighScoresIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchTopTenScores({"mode": "easy"});
  }

  render() {
    if (this.props.scores.length === 0) return null;

    return (
      <div id="highscores-easy" className="highscores">
        <h1>Top 10 Scores in Easy Mode</h1>
        { this.props.scores.map((score, idx) =>
          <HighScoreIndexItem key={idx} score={score}/>
          )
        }
      </div>
    )
  }
}

export default HighScoresIndex;
