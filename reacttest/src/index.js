import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Components/reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer,{});

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById("root")
);
registerServiceWorker();
