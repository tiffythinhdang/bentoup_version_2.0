import React from 'react';

const HighScoreIndexItem = (props) => {
  const { username, score } = props.score;
  return (
    <div className="highscores-index-item">
      <p>{username}</p>
      <p>{score}</p>
    </div>
  )
};

export default HighScoreIndexItem;
