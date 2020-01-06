import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Eat from "./Components/Eat";
import See from "./Components/See";
import Stay from "./Components/Stay";
import Footer from "./Components/Footer";
import dataString from "./data/travelItems.json";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about"></Route>
        <Route path="/eat">
          <Eat dataString={dataString} />
        </Route>
        <Route path="/see">
          <See dataString={dataString} />
        </Route>
        <Route path="/stay">
          <Stay dataString={dataString} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
