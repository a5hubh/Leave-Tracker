import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/_app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
