import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "src/store";

import "./index.css";
import "antd/dist/antd.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
