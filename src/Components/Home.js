import React, { Component } from "react";
import Carousel from "./Carousel";
import InfoBoxes from "./InfoBoxes";
import News from "./News";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <Carousel />
        <InfoBoxes />
        <News newsString={this.props.newsString} />
      </div>
    );
  }
}
