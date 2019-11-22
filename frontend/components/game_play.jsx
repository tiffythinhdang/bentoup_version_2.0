import React from "react";

class GamePlay extends React.Component {
  render() {
    return (
      <div>
      {/*Choose Game Mode Modal*/}
        <div id="game-mode" className="hidden">
          <div id="game-mode-content">
            <div id="game-mode-message">What mode do you want to play?</div>

            <div className="game-mode buttons-container">
              <button id="competitive-mode-button">Competitive</button>
              <button id="easy-mode-button">Easy</button>
            </div>
          </div>
        </div>

        {/*Play Again Modal*/}
        <div id="modal" className="hidden">
          <div className="modal-screen"></div>
          <div className="modal-content">
            <div className="modal-message"></div>

            <div className="suhi-chef container">
              <img src='../assets/sushi_chef.png' alt="chef-img" />
              <p id="ranking"></p>
            </div>

            <button id="play-again-button">PLAY AGAIN</button>

            <div className="modal-links">
              <a className="light medium icon" href="https://github.com/tiffythinhdang" target="_blank">
                <img src="../assets/github_icon_green.png" alt="github-icon"/>
              </a>
              <a className="light medium icon" href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/" target="_blank">
                <img src="../assets/linkedin_icon_green.png" alt="linkedin-icon"/>
              </a>
              <a className="light medium icon" href="https://tiffanytdang.com/" target="_blank">
                <img src="../assets/contact_icon_green.png" alt="contact-icon"/>
              </a>
            </div>
          </div>
        </div>

        <header className="links">
          <a
            className="medium icon"
            href="https://github.com/tiffythinhdang"
            target="_blank">
            <img src="../assets/github_icon_green.png" alt="github-icon"/>
          </a>
          <a
            className="medium icon"
            href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/"
            target="_blank">
            <img src="../assets/linkedin_icon_green.png" alt="linkedin-icon"/>
          </a>
          <a
            className="medium icon"
            href="https://tiffanytdang.com/"
            target="_blank">
            <img src="../assets/contact_icon_green.png" alt="contact-icon"/>
          </a>
        </header>

        <h1 className="game-title">bentoUp</h1>

        <footer>
          <p>&copy; 2019 Designed and Developed by Tiffany Dang</p>
        </footer>
      </div>
    )
  }
}

export default GamePlay;
