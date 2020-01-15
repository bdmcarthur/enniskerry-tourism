import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import News from "./Components/News";
import InfoCards from "./Components/InfoCards";
import FullStory from "./Components/FullStory";
import Footer from "./Components/Footer";
import dataString from "./data/travelItems.json";
import newsString from "./data/news.json";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          path="/eat"
          exact
          render={props => <InfoCards {...props} dataString={dataString} />}
        />
        <Route
          path="/see"
          exact
          render={props => <InfoCards {...props} dataString={dataString} />}
        />
        <Route
          path="/stay"
          exact
          render={props => <InfoCards {...props} dataString={dataString} />}
        />

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
