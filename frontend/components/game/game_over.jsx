import React from 'react';
import { Link } from 'react-router-dom';

class GameOverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.playAgain = this.playAgain.bind(this);
  }

  playAgain() {
    document.getElementById("modal").classList.add("hidden");
  }

  render() {
    return (
      <div id="modal" className="hidden">
        <div className="modal-screen"></div>
        <div className="modal-content">
          <div className="modal-message"></div>

          <div className="suhi-chef container">
            <img src='../assets/sushi_chef.png' alt="chef-img" />
            <p id="ranking"></p>
          </div>

          <div className="buttons-container">
            <Link
              to={"/choose-mode"}
              onClick={this.playAgain} >
              <button id="play-again-button">PLAY AGAIN</button>
            </Link>

            <Link to={"/scores/save"}>
              <button id="save-score-button">SAVE SCORE</button>
            </Link>
          </div>

          <div className="modal-links">
            <a className="light medium icon" href="https://github.com/tiffythinhdang" target="_blank">
              <img src="../assets/github_icon_green.png" alt="github-icon" />
            </a>
            <a className="light medium icon" href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/" target="_blank">
              <img src="../assets/linkedin_icon_green.png" alt="linkedin-icon" />
            </a>
            <a className="light medium icon" href="https://tiffanytdang.com/" target="_blank">
              <img src="../assets/contact_icon_green.png" alt="contact-icon" />
            </a>
          </div>
        </div>
      </div >
    )
  }
}

export default GameOverComponent;
