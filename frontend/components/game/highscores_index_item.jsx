import React from 'react';

const HighScoreIndexItem = (props) => {
  const { username, score, rank } = props.score;
  let displayColor;

  if (rank % 2 === 0) {
    displayColor = "gray";
  } else {
    displayColor = "white";
  }
  const classname = `highscores-index-item ${displayColor}`;

  return (
    <div className={classname}>
      <p className="highscores-index-item-username">{username}</p>
      <p className="highscores-index-item-score">{score}</p>
    </div>
  )
};

export default HighScoreIndexItem;
