import React from 'react';
import { Link } from 'react-router-dom';

import SaveScoreFormContainer from './save_score_form_container';
import iconGihub from "assets/images/github_icon_green.png";
import iconLinkedin from "assets/images/linkedin_icon_green.png";
import iconContact from "assets/images/contact_icon_green.png";
import sushiChef from "assets/images/sushi_chef.png";

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
    const form = document.getElementsByClassName("form-container")[0];
    form.classList.remove("hidden");
  }

  render() {
    return (
      <div id="modal" className="hidden">
        <div className="modal-screen"></div>
        <div className="modal-content">
          <div className="modal-message"></div>

          <div className="suhi-chef container">
            <img src={sushiChef} alt="chef-img" />
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

          <SaveScoreFormContainer closeModal={this.closeModal} />

          <div className="modal-links">
            <a className="light medium icon" href="https://github.com/tiffythinhdang" target="_blank">
              <img src={iconGihub} alt="github-icon" />
            </a>
            <a className="light medium icon" href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/" target="_blank">
              <img src={iconLinkedin} alt="linkedin-icon" />
            </a>
            <a className="light medium icon" href="https://tiffanytdang.com/" target="_blank">
              <img src={iconContact} alt="contact-icon" />
            </a>
          </div>
        </div>
      </div >
    )
  }
}

export default GameOverComponent;
