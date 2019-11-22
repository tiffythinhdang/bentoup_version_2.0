import React from 'react';

class EasyModeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="easy-content">
        <main className="main-content">
          <div id="game-canvas">

            {/*Top bar: time, score, missed orders*/}
            <div id="top-bar">
              <div id="easy-timer-container"></div>
              <div id="easy-score">0 order</div>
              <div id="easy-customer-lost"></div>
            </div>

            <div id="main-interaction-container">
              <div id="level-up"></div>
              <div id="main-interaction">
                <div id="easy-speech-container">
                </div>

                <div id="easy-customer-container">
                </div>
              </div>
            </div>

            {/*Counter Area: menu, bento, remove button*/}
            <div id="counter">
              <div id="easy-bento-container">
              </div>

              <button id="easy-remove-item-button">Remove</button>

              <div id="easy-menu">
                <div className="menu-first-row">
                  <div id="onigiri" className="easy menu-item"></div>
                  <div id="sashimi" className="easy menu-item"></div>
                  <div id="pickles" className="easy menu-item"></div>
                  <div id="tempura" className="easy menu-item"></div>
                </div>
                <div className="menu-second-row">
                  <div id="fish" className="easy menu-item"></div>
                  <div id="tamago" className="easy menu-item"></div>
                  <div id="meatballs" className="easy menu-item"></div>
                  <div id="sushi-roll" className="easy menu-item"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default EasyModeComponent;
