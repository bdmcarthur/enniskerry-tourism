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
        <div id="about" className="container about mx-auto">
          <p className="text-center mx-auto">
            Welcome to Ballywole! Widely regarded as one of Ireland’s most
            charming villages, Ballywole is full of history, heritage, and
            beauty. It is one of the most picturesque, popular and historic
            towns in Ireland. Visitors are captivated by its beautiful setting,
            narrow winding streets and brightly painted buildings. It's
            residents all very proud of their vibrant town and the beautiful
            surrounding countryside.
          </p>
        </div>
        <InfoBoxes />
        <News newsString={this.props.newsString} />
      </div>
    );
  }
}
