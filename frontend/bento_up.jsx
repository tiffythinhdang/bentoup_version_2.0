import React from "react";
import ReactDOM from "react-dom";
import store from './store/store';

import Root from './components/root';

import webBackground from "assets/images/web_background_4.png";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = `url(${webBackground})`;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
})
