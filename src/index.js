import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./components/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
