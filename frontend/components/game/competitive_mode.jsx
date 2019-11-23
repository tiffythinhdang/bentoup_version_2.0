import React from 'react';
import { Game } from '../../util/game';

class CompetitiveModeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const game = new Game("competitive");
    game.start();
  }

  render() {
    return (
      <div id = "competitive-content">
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

              <div id="competitive-menu" className="hidden">
                <div className="competitive-menu-first-row">
                  <div id="ramen" className="competitive menu-item"></div>
                  <div id="dango" className="competitive menu-item"></div>
                  <div id="dumpling" className="competitive menu-item"></div>
                  <div id="mini_rolls" className="competitive menu-item"></div>
                  <div id="sticky_rice" className="competitive menu-item"></div>
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
                  <div id="sushi_roll" className="competitive menu-item"></div>
                </div>

                <div className="competitive-menu-third-row">
                  <div id="watermelon" className="competitive menu-item"></div>
                  <div id="naruto" className="competitive menu-item"></div>
                  <div id="lemon" className="competitive menu-item"></div>
                  <div id="veggies_stirfry" className="competitive menu-item"></div>
                  <div id="corn_dog" className="competitive menu-item"></div>
                  <div id="mochi" className="competitive menu-item"></div>
                  <div id="sausage" className="competitive menu-item"></div>
                  <div id="brocolli" className="competitive menu-item"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div >
    )
  }
}

export default CompetitiveModeComponent;
