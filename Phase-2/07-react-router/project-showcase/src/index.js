import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// react-router-dom Imports
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    // To set up our application to use a router, 
    // we wrap our ENTIRE application in a Router 
    // component:
    <Router>
        <App />
    </Router>, 
    document.getElementById("root")
);
