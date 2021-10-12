import React from "react";
import ReactDOM from "react-dom";
import "tabler-react/dist/Tabler.css";

import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import middleware from "./middleware";
import JavascriptTimeAgo from "javascript-time-ago";
import 'bootstrap/dist/css/bootstrap.min.css';

// The desired locales.
import en from "javascript-time-ago/locale/en";

// Initialize the desired locales.
JavascriptTimeAgo.locale(en);

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);