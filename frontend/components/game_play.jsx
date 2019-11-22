import React from "react";

class GamePlay extends React.Component {
  render() {
    return (
      <div>
        {/* Introduction Modal */}
        <div id="introduction">
          <div id="introduction-content">
            <h1 className="small game-title">bentoUp</h1>
            <div id="game-description">
              <p><span id="inline-bold-text">bentoUp</span> is an food-themed matching game where the player takes the roll of an apprentice chef of a bento shop in Kyoto, Japan. Sharpen your skills as you prepare and serve delicious bento boxes to customers. Level up and become to the head chef of this popular shop in town!
              </p>

              <div id="game-instruction">
                <div id="instruction-1">
                  <p>get an order</p>
                  <img src="../assets/introduction/intro_order.png" alt="order-image"/>
                </div>

                <div id="instruction-2">
                  <p>click or type to choose the item</p>
                  <img src="../assets/introduction/intro_choose_item.png" alt="choose-image"/>
                </div>

                <div id="instruction-3">
                  <p>backspace or click "Remove" to deselect</p>
                  <img src="../assets/introduction/intro_deselect_item.png" alt="deselect-image"/>
                </div>
              </div>

            </div>
            <button id="start-button">START GAME!</button>
          </div>
        </div>

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

        

        {/*Game Canvas Competitive*/}
        <div id="competitive-content" className="hidden">
          <main className="main-content">
            <div id="game-canvas-competitive">

              {/*Top bar: time, score, missed orders*/}
              <div id="top-bar">
                <div id="competitive-timer-container"></div>
                <div id="competitive-score">0 order</div>
                <div id="competitive-customer-lost"></div>
              </div>

              <div id="main-interaction-container">
                <div id="level-up"></div>
                <div id="main-interaction">
                  <div id="competitive-speech-container">
                  </div>

                  <div id="competitive-customer-container">
                  </div>
                </div>
              </div>

              {/*Counter Area: menu, bento, remove button*/}
              <div id="competitive-counter">
                <div id="competitive-bento-container">
                </div>

                <button id="competitive-remove-item-button">Remove</button>

                {/*Competitive Menu*/}
                <div id="competitive-menu" className="hidden">
                  <div className="competitive-menu-first-row">
                    <div id="ramen" className="competitive menu-item"></div>
                    <div id="dango" className="competitive menu-item"></div>
                    <div id="dumpling" className="competitive menu-item"></div>
                    <div id="mini-rolls" className="competitive menu-item"></div>
                    <div id="sticky-rice" className="competitive menu-item"></div>
                    <div id="chowfun" className="competitive menu-item"></div>
                    <div id="bao" className="competitive menu-item"></div>
                    <div id="crab" className="competitive menu-item"></div>
                  </div>

                  <div className="competitive-menu-second-row">
                    <div id="onigiri" className="competitive menu-item"></div>
                    <div id="sashimi" className="competitive menu-item"></div>
                    <div id="pickles" className="competitive menu-item"></div>
                    <div id="tempura" className="competitive menu-item"></div>
                    <div id="fish" className="competitive menu-item"></div>
                    <div id="tamago" className="competitive menu-item"></div>
                    <div id="meatballs" className="competitive menu-item"></div>
                    <div id="sushi-roll" className="competitive menu-item"></div>
                  </div>

                  <div className="competitive-menu-third-row">
                    <div id="watermelon" className="competitive menu-item"></div>
                    <div id="naruto" className="competitive menu-item"></div>
                    <div id="lemon" className="competitive menu-item"></div>
                    <div id="veggies-stir-fry" className="competitive menu-item"></div>
                    <div id="corn-dog" className="competitive menu-item"></div>
                    <div id="mochi" className="competitive menu-item"></div>
                    <div id="sausage" className="competitive menu-item"></div>
                    <div id="brocolli" className="competitive menu-item"></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <footer>
          <p>&copy; 2019 Designed and Developed by Tiffany Dang</p>
        </footer>
      </div>
    )
  }
}

export default GamePlay;
