// import { Menu } from './menu';
// import Bento from './bento';
// import { Order } from './order';
// import Timer from './timer';


//Menu
const MENU_ITEMS = {
  "onigiri": "assets/images/menu_items/onigiri.png",
  "sashimi": "assets/images/menu_items/sashimi.png",
  "pickles": "assets/images/menu_items/pickles.png",
  "tempura": "assets/images/menu_items/tempura.png",
  "fish": "assets/images/menu_items/fish.png",
  "tamago": "assets/images/menu_items/tamago.png",
  "meatballs": "assets/images/menu_items/meatballs.png",
  "sushi-roll": "assets/images/menu_items/sushi-roll.png"
};

const COMPETITIVE_MENU_ITEMS = {
  "ramen": "assets/images/menu_items/ramen.png",
  "dango": "assets/images/menu_items/dango.png",
  "dumpling": "assets/images/menu_items/dumpling.png",
  "mini-rolls": "assets/images/menu_items/mini-rolls.png",
  "sticky-rice": "assets/images/menu_items/sticky-rice.png",
  "chowfun": "assets/images/menu_items/chowfun.png",
  "bao": "assets/images/menu_items/bao.png",
  "crab": "assets/images/menu_items/crab.png",
  "onigiri": "assets/images/menu_items/onigiri.png",
  "sashimi": "assets/images/menu_items/sashimi.png",
  "pickles": "assets/images/menu_items/pickles.png",
  "tempura": "assets/images/menu_items/tempura.png",
  "fish": "assets/images/menu_items/fish.png",
  "tamago": "assets/images/menu_items/tamago.png",
  "meatballs": "assets/images/menu_items/meatballs.png",
  "sushi-roll": "assets/images/menu_items/sushi-roll.png",
  "watermelon": "assets/images/menu_items/watermelon.png",
  "naruto": "assets/images/menu_items/naruto.png",
  "lemon": "assets/images/menu_items/lemon.png",
  "veggies-stir-fry": "assets/images/menu_items/veggies-stir-fry.png",
  "corn-dog": "assets/images/menu_items/corn-dog.png",
  "mochi": "assets/images/menu_items/mochi.png",
  "sausage": "assets/images/menu_items/sausage.png",
  "brocolli": "assets/images/menu_items/brocolli.png"
};

class MenuItem {
  constructor(id, imagePath) {
    this.id = id;
    this.imagePath = imagePath;
  }

  render() {
    let img = document.createElement("img");
    img.src = this.imagePath;
    img.alt = `${this.id}-icon`;
    return img;
  }
}

class Menu {
  constructor(mode = "easy") {
    this.menu = [];
    this.mode = mode;

    this.generateMenu(mode);
  }

  generateMenu(mode) {
    let chosenMenu;
    if (mode === "easy") {
      chosenMenu = MENU_ITEMS;
    } else {
      chosenMenu = COMPETITIVE_MENU_ITEMS;
    }

    let menuItems = Array.from(document.getElementsByClassName(`${mode} menu-item`));
    menuItems.forEach(item => {
      let itemId = item.id;
      let menuItem = new MenuItem(itemId, chosenMenu[itemId]);
      this.menu.push(menuItem);
      item.appendChild(menuItem.render());
    });
  }

  deleteMenu() {
    Array.from(document.getElementById(`${this.mode}-menu`)
      .getElementsByTagName("img"))
      .forEach(img => img.remove());
    document.getElementById("modal").classList.add("hidden");
  }
}


//Order
const ORDER_ITEMS = {
  "onigiri": "assets/images/menu_items/onigiri_order.png",
  "sashimi": "assets/images/menu_items/sashimi_order.png",
  "pickles": "assets/images/menu_items/pickles_order.png",
  "tempura": "assets/images/menu_items/tempura_order.png",
  "fish": "assets/images/menu_items/fish_order.png",
  "tamago": "assets/images/menu_items/tamago_order.png",
  "meatballs": "assets/images/menu_items/meatballs_order.png",
  "sushi-roll": "assets/images/menu_items/sushi-roll_order.png"
};

const COMPETITIVE_ORDER_ITEMS = {
  "ramen": "assets/images/menu_items/ramen_order.png",
  "dango": "assets/images/menu_items/dango_order.png",
  "dumpling": "assets/images/menu_items/dumpling_order.png",
  "mini-rolls": "assets/images/menu_items/mini-rolls_order.png",
  "sticky-rice": "assets/images/menu_items/sticky-rice_order.png",
  "chowfun": "assets/images/menu_items/chowfun_order.png",
  "bao": "assets/images/menu_items/bao_order.png",
  "crab": "assets/images/menu_items/crab_order.png",
  "onigiri": "assets/images/menu_items/onigiri_order.png",
  "sashimi": "assets/images/menu_items/sashimi_order.png",
  "pickles": "assets/images/menu_items/pickles_order.png",
  "tempura": "assets/images/menu_items/tempura_order.png",
  "fish": "assets/images/menu_items/fish_order.png",
  "tamago": "assets/images/menu_items/tamago_order.png",
  "meatballs": "assets/images/menu_items/meatballs_order.png",
  "sushi-roll": "assets/images/menu_items/sushi-roll_order.png",
  "watermelon": "assets/images/menu_items/watermelon_order.png",
  "naruto": "assets/images/menu_items/naruto_order.png",
  "lemon": "assets/images/menu_items/lemon_order.png",
  "veggies-stir-fry": "assets/images/menu_items/veggies-stir-fry_order.png",
  "corn-dog": "assets/images/menu_items/corn-dog_order.png",
  "mochi": "assets/images/menu_items/mochi_order.png",
  "sausage": "assets/images/menu_items/sausage_order.png",
  "brocolli": "assets/images/menu_items/brocolli_order.png"
};

const CUSTOMERS = {
  1: "assets/images/customers/customer_1.png",
  2: "assets/images/customers/customer_2.png",
  3: "assets/images/customers/customer_3.png",
  4: "assets/images/customers/customer_4.png",
  5: "assets/images/customers/customer_5.png"
};

class Order {
  constructor(numItems, numSeconds, mode) {
    this.numItems = numItems;
    this.order = [];
    this.numSeconds = numSeconds;
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

    for (let i = 1; i <= this.numItems; i++) {
      let idx = Math.floor(Math.random() * numOptions);
      this.order.push(menuOptions[idx]);
    }
  }

  generateCustomer() {
    let customerOptions = [1, 2, 3, 4, 5];
    let idx = customerOptions[Math.floor(Math.random() * 5)];
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

//Bento
class Bento {
  constructor(numItems, order, mode = "easy") {
    this.numItems = numItems;
    this.order = order;
    this.bento = [];
    this.mode = mode;

    this.bentoOptions = (mode === "easy" ? ORDER_ITEMS : COMPETITIVE_ORDER_ITEMS)

    this.generateBento();
  }

  generateBento() {
    let bentoContainer = document.getElementById(`${this.mode}-bento-container`);
    let bento = document.createElement("div");
    bento.id = "bento";

    if (this.numItems === 4) {
      bento.classList.add("bento-4");
    } else if (this.numItems === 6) {
      bento.classList.add("bento-6");
    }

    for (let i = 1; i <= this.numItems; i++) {
      let bentoItem = document.createElement("div");
      bentoItem.classList.add(this.mode);
      bentoItem.classList.add("bento-item");
      bentoItem.classList.add(`${i}`);
      bento.appendChild(bentoItem);
    }

    bentoContainer.appendChild(bento);
  }

  deleteBento() {
    document.getElementById(`${this.mode}-bento-container`).innerHTML = "";
  }

  addItem(item) {
    this.bento.push(item);
    this.render();
  }

  removeItem() {
    this.bento.pop();
    this.render();
  }

  render() {
    for (let i = 1; i <= this.numItems; i++) {
      let bentoItem = document.getElementsByClassName(`${this.mode} bento-item ${i}`)[0];
      bentoItem.innerHTML = "";
      let item = this.bento[i - 1];
      if (!item) break;
      let img = document.createElement("img");
      img.src = this.bentoOptions[item];
      img.alt = `${item}-icon`;
      bentoItem.appendChild(img);
    }
  }
}


//Timer
class Timer {
  constructor(numSeconds, timerEndCallback) {
    this.interval = undefined;
    this.countFrom = numSeconds;
    this.count = this.countFrom;

    this.timerEndCallback = timerEndCallback;
  }

  start() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.count = this.countFrom;
    this.interval = setInterval((this.tick).bind(this), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  tick() {
    this.count -= 1;
    if (this.count <= 0) {
      // console.log(this.count);
      this.count = 0;
      clearInterval(this.interval);
      this.timerEndCallback();
    }
    let timer = document.getElementById("timer");
    timer.innerHTML = this.count;
  }

  deleteTimer() {
    document.getElementById("timer").remove();
  }
};


//Game
const KEY_MAPPING = {
  "q": "ramen",
  "w": "dango",
  "e": "dumpling",
  "r": "mini-rolls",
  "u": "sticky-rice",
  "i": "chowfun",
  "o": "bao",
  "p": "crab",
  "a": "onigiri",
  "s": "sashimi",
  "d": "pickles",
  "f": "tempura",
  "j": "fish",
  "k": "tamago",
  "l": "meatballs",
  ";": "sushi-roll",
  "z": "watermelon",
  "x": "naruto",
  "c": "lemon",
  "v": "veggies-stir-fry",
  "b": "corn-dog",
  "n": "mochi",
  "m": "sausage",
  ",": "brocolli"
}

class Game {
  constructor(mode="easy") {
    this.menu = new Menu(mode);

    this.mode = mode;
    
    let numItems = this.generateRandomNum();
    this.order = new Order(numItems, numItems === 4 ? 6 : 8, mode);
    this.bento = new Bento(numItems, this.order, mode);
    this.timer = new Timer(this.order.numSeconds, this.checkState.bind(this));

    this.score = 0;
    this.customerLost = 0;

    this.timeElapsed = new Date();
    this.levelUpInterval = undefined;

    this.addListenerOnWindow = this.addListenerOnWindow.bind(this);
    this.removeListenerOnWindow = this.removeListenerOnWindow.bind(this);
    this.addClickToMenuItems = this.addClickToMenuItems.bind(this);
    this.addClickToRemoveButton = this.addClickToRemoveButton.bind(this);
    this.checkTimeElapsed = this.checkTimeElapsed.bind(this);
    this.flashLevelUpMessage = this.flashLevelUpMessage.bind(this);
    this.tapItem = this.tapItem.bind(this);
    this.clickMenuItems = this.clickMenuItems.bind(this);
    this.clickRemoveButton = this.clickRemoveButton.bind(this);
    this.start = this.start.bind(this);

    this.renderScore();
  }

  start() {
    this.addListenerOnWindow();
    this.addClickToMenuItems();
    this.addClickToRemoveButton();
    this.startTimer();
    this.flashLevelUpMessage();
  }

  flashLevelUpMessage() {
    this.levelUpInterval = setInterval(() => {
      let container = document.getElementById("level-up")
      container.innerHTML = "";
      let message = document.createElement("p");
      message.classList.add("flash")
      message.innerHTML = "Speed Up!";
      container.appendChild(message);
    }, 50000);
  }

  increaseDifficulty(numItems, mode) {
    if ( this.checkTimeElapsed() > 200 ) {
      clearInterval(this.levelUpInterval);
      return new Order(numItems, numItems === 4 ? 2 : 3, mode);
    } else if ( this.checkTimeElapsed() > 150 ) {
      return new Order(numItems, numItems === 4 ? 3 : 5, mode);
    } else if ( this.checkTimeElapsed() > 100 ) {
      return new Order(numItems, numItems === 4 ? 4 : 6, mode);
    } else if ( this.checkTimeElapsed() >= 50 ) {
      return new Order(numItems, numItems === 4 ? 5 : 7, mode);
    } else if ( this.checkTimeElapsed() >= 0 ) {
      return new Order(numItems, numItems === 4 ? 6 : 8, mode);
    }
  }

  checkTimeElapsed() {
    return ( new Date() - this.timeElapsed ) / 1000;
  }

  tapItem(e) {
    let key = e.key;
    if (key === "Backspace") {
      this.bento.removeItem();
      return;
    }

    let item = document.getElementById(`${KEY_MAPPING[key]}`);
    if (!item) return;
    item.classList.add("hover");
    this.bento.addItem(item.id);
    this.checkState();
  }

  untapItem(e) {
    let key = e.key;
    let item = document.getElementById(`${KEY_MAPPING[key]}`);
    if (!item) return;
    item.classList.remove("hover");
  }

  addListenerOnWindow() {
    window.addEventListener("keydown", this.tapItem );
    window.addEventListener("keyup", this.untapItem );
  }

  removeListenerOnWindow() {
    window.removeEventListener("keydown",this.tapItem);
    window.removeEventListener("keyup",this.untapItem);
  }

  clickMenuItems(e) {
    this.bento.addItem(e.currentTarget.id);
    this.checkState();
  }

  clickRemoveButton() {
    this.bento.removeItem();
    this.checkState();
  }

  addClickToMenuItems() {
    let menuItems = Array.from( document.getElementsByClassName(`${this.mode} menu-item`) );
    menuItems.forEach(item => item.addEventListener("click", this.clickMenuItems));
  }

  removeClickToMenuItems() {
    let menuItems = Array.from( document.getElementsByClassName(`${this.mode} menu-item`) );
    menuItems.forEach(item => item.removeEventListener("click", this.clickMenuItems));
  }

  addClickToRemoveButton() {
    let removeBtn = document.getElementById(`${this.mode}-remove-item-button`);
    removeBtn.addEventListener("click", this.clickRemoveButton)
  }

  removeClickToRemoveButton() {
    let removeBtn = document.getElementById(`${this.mode}-remove-item-button`);
    removeBtn.removeEventListener("click", this.clickRemoveButton)
  }

  startTimer() {
    let timerContainer = document.getElementById(`${this.mode}-timer-container`);
    let timer = document.createElement("div");
    timer.id = "timer";
    timer.innerHTML = this.timer.count;
    timerContainer.appendChild(timer);
    this.timer.start();
  }

  renderScore(){
    let score = document.getElementById(`${this.mode}-score`)
    score.innerHTML = (this.score > 1 ? `${this.score} orders` : `${this.score} order`);
  }

  correctBento() {
    return JSON.stringify(this.order.order) === JSON.stringify(this.bento.bento);
  }

  
  checkState() {
    if (this.lost()) {
      this.renderEndMessage();
      return;
    }

    if (this.timer.count > 0 && this.correctBento()) {
      this.score += 1;
      this.renderScore();

      this.deleteGameRound();
      this.generateGameRound();

    } else if ( this.timer.count <= 0 && !this.correctBento() ) {
      this.customerLost += 1;
      this.renderCustomerLost();

      if (this.lost()) {
        this.renderEndMessage();
        this.timer.stop();
        return;
      }
      this.deleteGameRound();
      this.generateGameRound();
    }
  }

  generateRandomNum() {
    let num = [4, 6];
    let idx = Math.floor(Math.random() * 2);
    return num[idx];
  }

  deleteGameRound() {
    this.bento.deleteBento();
    let customer = document.getElementsByClassName("bounceInRight")[0];
    customer.classList.remove("bounceInRight");
    customer.classList.add("lightSpeedOut");
    this.order.deleteOrder();
    this.timer.stop();
    this.timer.deleteTimer();
  }

  generateGameRound() {
    let numItems = this.generateRandomNum();
    this.order = this.increaseDifficulty(numItems, this.mode);
    this.bento = new Bento(numItems, this.order, this.mode);
    this.timer = new Timer(this.order.numSeconds, this.checkState.bind(this));
    this.startTimer();
  }

  renderCustomerLost() {
    let customerLost = document.getElementById(`${this.mode}-customer-lost`);
    customerLost.innerHTML = "";
    for (let i = 1; i <= this.customerLost; i++) {
      let cross = document.createElement("img");
      cross.src = "assets/images/cross_mark.png";
      customerLost.appendChild(cross);
    }
  }

  restart(mode) {
    document.getElementById(`${this.mode}-timer-container`).innerHTML = "";
    document.getElementById(`${this.mode}-score`).innerHTML = "";
    document.getElementById(`${this.mode}-customer-lost`).innerHTML = "";
    this.order.deleteOrder();
    this.bento.deleteBento();
    this.menu.deleteMenu();
    this.mode = mode;
    this.menu = new Menu(mode);

    this.addClickToMenuItems();
    this.addClickToRemoveButton();
    this.score = 0;
    this.renderScore();
    this.customerLost = 0;
    this.timeElapsed = new Date();
    
    document.getElementById("modal").classList.add("hidden");
    this.addListenerOnWindow();
    this.flashLevelUpMessage();
    
    this.generateGameRound()
  }

  // clear() {
  //   document.getElementById(`${this.mode}-timer-container`).innerHTML = "";
  //   document.getElementById(`${this.mode}-score`).innerHTML = "";
  //   document.getElementById(`${this.mode}-customer-lost`).innerHTML = "";
  //   this.timer.stop();
  //   this.order.deleteOrder();
  //   this.bento.deleteBento();
  //   this.menu.deleteMenu();
  //   this.score = 0;
  //   this.renderScore();
  //   this.customerLost = 0;
  // }

  lost() {
    return this.customerLost >= 3;
  }

  renderEndMessage() {
    clearInterval(this.levelUpInterval);
    const score = this.score;
    
    this.removeListenerOnWindow();
    this.removeClickToMenuItems();
    this.removeClickToRemoveButton();
    let message = document.getElementsByClassName("modal-message")[0];
    let ranking = document.getElementById("ranking");
    let finalScore = (score > 1 ? `${score} orders` : `${score} order`);
    let rank;
    if ( score >= 120 ) {
      rank = "Master Chef";
    } else if ( score >= 90 ) {
      rank = "Head Chef";
    } else if ( score >= 45 ) {
      rank = "Sous Chef";
    } else if (score >= 15) {
      rank = "Junior Chef";
    } else if (score >= 0) {
      rank = "Apprentice";
    }

    message.innerHTML = `You served ${finalScore}!`;
    ranking.innerHTML = `Rank: ${rank}`;
    document.getElementById("modal").classList.remove("hidden");
  }
}