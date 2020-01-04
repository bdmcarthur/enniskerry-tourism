import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/eat"></Route>
          <Route path="/drink"></Route>
          <Route path="/shop"></Route>
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
