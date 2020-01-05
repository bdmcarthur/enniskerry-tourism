import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import logo from "./images/logo.png";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand ml-4" href="#">
          <img src={logo}></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Stay
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
            <li class="nav-item">
              <a class="nav-link " href="#">
                Stay
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Eat
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Do
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Events
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/eat"></Route>
          <Route path="/see"></Route>
          <Route path="/stay"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
