import React from 'react';

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
        { this.props.scores.map(score => {
          return (
            <p>{score.username}: {score.score}</p>
          )
        }) }
      </div>
    )
  }
}

export default HighScoresIndex;
