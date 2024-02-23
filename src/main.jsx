import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./Screens/Home/Home.jsx";
import { Provider } from "react-redux";
import Store from "./Store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={Store}>
      <Home />
    </Provider>
  </>
);
