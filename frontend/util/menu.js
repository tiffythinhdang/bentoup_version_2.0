import ramen from "assets/images/menu_items/ramen.png";
import dango from "assets/images/menu_items/dango.png";
import dumpling from "assets/images/menu_items/dumpling.png";
import mini_rolls from "assets/images/menu_items/mini_rolls.png";
import sticky_rice from "assets/images/menu_items/sticky_rice.png";
import chowfun from "assets/images/menu_items/chowfun.png";
import bao from "assets/images/menu_items/bao.png";
import crab from "assets/images/menu_items/crab.png";
import onigiri from "assets/images/menu_items/onigiri.png";
import sashimi from "assets/images/menu_items/sashimi.png";
import pickles from "assets/images/menu_items/pickles.png";
import tempura from "assets/images/menu_items/tempura.png";
import fish from "assets/images/menu_items/fish.png";
import tamago from "assets/images/menu_items/tamago.png";
import meatballs from "assets/images/menu_items/meatballs.png";
import sushi_roll from "assets/images/menu_items/sushi_roll.png";
import watermelon from "assets/images/menu_items/watermelon.png";
import naruto from "assets/images/menu_items/naruto.png";
import lemon from "assets/images/menu_items/lemon.png";
import veggies_stirfry from "assets/images/menu_items/veggies_stirfry.png";
import corn_dog from "assets/images/menu_items/corn_dog.png";
import mochi from "assets/images/menu_items/mochi.png";
import sausage from "assets/images/menu_items/sausage.png";
import brocolli from "assets/images/menu_items/brocolli.png";

const MENU_ITEMS = {
  "onigiri": onigiri,
  "sashimi": sashimi,
  "pickles": pickles,
  "tempura": tempura,
  "fish": fish,
  "tamago": tamago,
  "meatballs": meatballs,
  "sushi_roll": sushi_roll
};

const COMPETITIVE_MENU_ITEMS = {
  "ramen": ramen,
  "dango": dango,
  "dumpling": dumpling,
  "mini_rolls": mini_rolls,
  "sticky_rice": sticky_rice,
  "chowfun": chowfun,
  "bao": bao,
  "crab":crab,
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

export class Menu {
  constructor(mode="easy") {
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
