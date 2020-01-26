import React, { Component } from "react";
import Carousel from "./Carousel";
import InfoBoxes from "./InfoBoxes";
import News from "./News";
import ReactPlayer from "react-player";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Carousel />
        <div className="pt-5 text-center container" id="about">
          <div className="row justify-content-center">
            <div className="col-md-8 text-left">
              <p className="lead p-5">
                Enniskerry offers a wonderful combination of peaceful village
                atmosphere and close proximity to Dublin city centre. It is well
                serviced by public transport, with several Dublin Bus services
                stopping in the village and the DART and Luas (Green Line) light
                rail services passing within 10 minutes drive of the village.
                Dublin Airport is only 45 minutes by car. The nearest large town
                is Bray, about 10 minutes by bus or car.
              </p>
            </div>
            <div className="col-md-4 p-0 info-box">
              <img
                alt="wood"
                className="w-100 h-100"
                src="/images/wood.jpg"
              ></img>
              <a
                href="http://www.enniskerryhistory.org/downloads/enniskerry-map-and-tour.pdf"
                className="centered-text-overlay text-center h2"
              >
                Download the Historic Enniskerry Tour Guide!
              </a>
            </div>
          </div>
          <div className="col-md-12 text-center pt-4 video-container">
            <h1 className="special-font mt-4">Get a glimpse of Enniskerry</h1>
            <ReactPlayer
              url="https://vimeo.com/46682194"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <InfoBoxes />
        <News newsString={this.props.newsString} />
      </div>
    );
  }
}
