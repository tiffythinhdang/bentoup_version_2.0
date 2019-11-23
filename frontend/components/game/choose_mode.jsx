import React from 'react';
import { Link } from 'react-router-dom';

class ChooseModeComponent extends React.Component {
  render() {
    return (
      <div id = "game-mode">
        <div id="game-mode-content">
          <div id="game-mode-message">What mode do you want to play?</div>

          <div className="game-mode buttons-container">
            <Link to ='/competitive-mode'>
              <button id="competitive-mode-button">Competitive</button>
            </Link>
            <Link to='/easy-mode'>
              <button id="easy-mode-button">Easy</button>
            </Link>
          </div>
        </div>
      </div >
    )
  }
}

export default ChooseModeComponent;
