import ramen from "assets/images/menu_items/ramen_order.png";
import dango from "assets/images/menu_items/dango_order.png";
import dumpling from "assets/images/menu_items/dumpling_order.png";
import mini_rolls from "assets/images/menu_items/mini_rolls_order.png";
import sticky_rice from "assets/images/menu_items/sticky_rice_order.png";
import chowfun from "assets/images/menu_items/chowfun_order.png";
import bao from "assets/images/menu_items/bao_order.png";
import crab from "assets/images/menu_items/crab_order.png";
import onigiri from "assets/images/menu_items/onigiri_order.png";
import sashimi from "assets/images/menu_items/sashimi_order.png";
import pickles from "assets/images/menu_items/pickles_order.png";
import tempura from "assets/images/menu_items/tempura_order.png";
import fish from "assets/images/menu_items/fish_order.png";
import tamago from "assets/images/menu_items/tamago_order.png";
import meatballs from "assets/images/menu_items/meatballs_order.png";
import sushi_roll from "assets/images/menu_items/sushi_roll_order.png";
import watermelon from "assets/images/menu_items/watermelon_order.png";
import naruto from "assets/images/menu_items/naruto_order.png";
import lemon from "assets/images/menu_items/lemon_order.png";
import veggies_stirfry from "assets/images/menu_items/veggies_stirfry_order.png";
import corn_dog from "assets/images/menu_items/corn_dog_order.png";
import mochi from "assets/images/menu_items/mochi_order.png";
import sausage from "assets/images/menu_items/sausage_order.png";
import brocolli from "assets/images/menu_items/brocolli_order.png";

import customer1 from "assets/images/customers/customer_1.png";
import customer2 from "assets/images/customers/customer_2.png";
import customer3 from "assets/images/customers/customer_3.png";
import customer4 from "assets/images/customers/customer_4.png";
import customer5 from "assets/images/customers/customer_5.png";

export const ORDER_ITEMS = {
  "onigiri": onigiri,
  "sashimi": sashimi,
  "pickles": pickles,
  "tempura": tempura,
  "fish": fish,
  "tamago": tamago,
  "meatballs": meatballs,
  "sushi_roll": sushi_roll
};

export const COMPETITIVE_ORDER_ITEMS = {
  "ramen": ramen,
  "dango": dango,
  "dumpling": dumpling,
  "mini_rolls": mini_rolls,
  "sticky_rice": sticky_rice,
  "chowfun": chowfun,
  "bao": bao,
  "crab": crab,
  "onigiri": onigiri,
  "sashimi": sashimi,
  "pickles": pickles,
  "tempura": tempura,
  "fish": fish,
  "tamago": tamago,
  "meatballs": meatballs,
  "sushi_roll": sushi_roll,
  "watermelon": watermelon,
  "naruto": naruto,
  "lemon": lemon,
  "veggies_stirfry": veggies_stirfry,
  "corn_dog": corn_dog,
  "mochi": mochi,
  "sausage": sausage,
  "brocolli": brocolli
};

export const CUSTOMERS = {
  1: customer1,
  2: customer2,
  3: customer3,
  4: customer4,
  5: customer5
};

export class Order {
  constructor(numItems, numSeconds, mode){
    this.numItems = numItems;
    this.order = [];
    this.numSeconds= numSeconds;
    this.mode = mode;

    this.orderOptions = (mode === "easy" ? ORDER_ITEMS : COMPETITIVE_ORDER_ITEMS);

    this.generateCustomer();
    this.generateSpeechBubble();
    this.generateOrder();
    this.renderOrder();
  }

  generateOrder() {
    let menuOptions = Object.keys(this.orderOptions);
    let numOptions = menuOptions.length;

    for (let i = 1; i <= this.numItems; i ++) {
      let idx = Math.floor(Math.random() * numOptions );
      this.order.push(menuOptions[idx]);
    }
  }

  generateCustomer() {
    let customerOptions = [1, 2, 3, 4, 5];
    let idx = customerOptions[ Math.floor(Math.random() * 5) ];
    let img = document.createElement("img");
    img.src = CUSTOMERS[idx];
    img.alt = "customer-icon";
    img.classList.add("bounceInRight");
    let customerContainer = document.getElementById(`${this.mode}-customer-container`);
    customerContainer.appendChild(img);
  }

  generateSpeechBubble() {
    let speechContainer = document.getElementById(`${this.mode}-speech-container`);
    let speechBubble = document.createElement("div");
    speechBubble.classList.add("speech-bubble");
    speechBubble.classList.add("fadeIn");
    speechContainer.appendChild(speechBubble);
  }

  generateOrderItem(id) {
    let img = document.createElement("img");
    img.src = this.orderOptions[id];
    img.alt = `${id}-icon`;
    return img;
  }

  renderOrder() {
    let orderContainer = document.createElement("div");
    orderContainer.classList.add("order-container");
    orderContainer.classList.add(`box-${this.numItems}`);
    orderContainer.classList.add("fadeIn");

    this.order.forEach(item => {
      let orderItem = document.createElement("div");
      orderItem.classList.add("order-item");
      orderItem.appendChild(this.generateOrderItem(item));
      orderContainer.appendChild(orderItem);
    });
    let speechContainer = document.getElementById(`${this.mode}-speech-container`);
    speechContainer.appendChild(orderContainer);
  }

  deleteOrder() {
    document.getElementById(`${this.mode}-speech-container`).innerHTML = "";
    document.getElementById(`${this.mode}-customer-container`).innerHTML = "";
  }
}
