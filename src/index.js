import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import your App component
import "./index.css"; // Optional: Your CSS file

// Wrap your App component with the Router here
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
