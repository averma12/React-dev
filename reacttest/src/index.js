import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";

//const store = createStore(reducer, {});

ReactDOM.render(
<Root>
<App />
</Root>,
document.getElementById("root")
);
registerServiceWorker();
