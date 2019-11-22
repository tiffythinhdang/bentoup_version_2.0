import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <div id="introduction">
       <div id="introduction-content">
          <h1 className="small game-title">bentoUp</h1>
          <div id="game-description">
            <p><span id="inline-bold-text">bentoUp</span> is an food-themed matching game where the player takes the roll of an apprentice chef of a bento shop in Kyoto, Japan. Sharpen your skills as you prepare and serve delicious bento boxes to customers. Level up and become to the head chef of this popular shop in town!
            </p>

            <div id="game-instruction">
              <div id="instruction-1">
                <p>get an order</p>
                <img src="../assets/introduction/intro_order.png" alt="order-image" />
              </div>

              <div id="instruction-2">
                <p>click or type to choose the item</p>
                <img src="../assets/introduction/intro_choose_item.png" alt="choose-image" />
              </div>

              <div id="instruction-3">
                <p>backspace or click "Remove" to deselect</p>
                <img src="../assets/introduction/intro_deselect_item.png" alt="deselect-image" />
              </div>
            </div>

          </div>
          <Link to={"/choose-mode"} className="start-button-container">
            <button id="start-button">START GAME!</button>
          </Link>
        </div>
      </div >
    )
  }
}

export default Splash;
