import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import News from "./Components/News";
import FullStory from "./Components/FullStory";
import Eat from "./Components/Eat";
import See from "./Components/See";
import Stay from "./Components/Stay";
import Footer from "./Components/Footer";
import dataString from "./data/travelItems.json";
import newsString from "./data/news.json";

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
        <Route exact path="/news">
          <News newsString={newsString} />
        </Route>

        <Route
          path="/news/:id"
          render={props => <FullStory {...props} newsString={newsString} />}
        />

        <Route path="/">
          <Home newsString={newsString} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
