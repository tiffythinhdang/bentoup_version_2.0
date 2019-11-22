import React from 'react';
import { Link } from 'react-router-dom';

import SaveScoreFormContainer from './save_score_form_container';

class GameOverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  closeModal() {
    document.getElementById("modal").classList.add("hidden");
    document.getElementsByClassName("form-container")[0].classList.add("hidden");
  }

  openForm() {
    document.getElementsByClassName("form-container")[0].classList.remove("hidden");
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
              onClick={this.closeModal} >
              <button id="play-again-button">PLAY AGAIN</button>
            </Link>

            <button
              id="save-score-button"
              onClick={this.openForm} >
              SAVE SCORE
            </button>
          </div>

          <SaveScoreFormContainer score="10" mode="easy"/>

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
