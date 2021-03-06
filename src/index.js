import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://dream-time-news-api.herokuapp.com/api/";
} else {
  apiUrl = "http://localhost:3000/api/";
}
axios.defaults.baseURL = apiUrl;

const store = configureStore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
