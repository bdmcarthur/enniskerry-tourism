import React, { Component } from "react";
import background1 from "../images/carousel1.jpg";
import background2 from "../images/carousel2.jpg";
import background3 from "../images/carousel3.jpg";
import see from "../images/see.jpg";
import eat from "../images/eat.jpg";
import hotel from "../images/hotel.jpg";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="title-container centered-text-overlay text-center mx-auto">
          <h1 className="title-text">Ballywole</h1>
          <p className="title-description font-italic text-center mb-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim.
          </p>
          <button
            type="button"
            className="d-block mx-auto title-btn btn btn-light btn-lg"
          >
            Explore
          </button>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={background1}
                alt="First slide"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={background2}
                alt="Second slide"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={background3}
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container about mx-auto">
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

        <div className="container info-container">
          <div className="row">
            <Link className="col-md-4 col-12 info-box mt-3" to="/see">
              <div className="hovereffect">
                <img
                  className="img-responsive w-100 h-100"
                  src={see}
                  alt=""
                ></img>
                <div className="centered-text-overlay info-text">To See</div>
              </div>
            </Link>
            <Link to="/eat" className="col-md-4 col-12 info-box mt-3">
              <div className="hovereffect">
                <img
                  className="img-responsive w-100 h-100"
                  src={eat}
                  alt=""
                ></img>
                <div className="centered-text-overlay info-text">
                  Eat and Drink
                </div>
              </div>
            </Link>
            <Link to="/stay" className="col-md-4 col-12 info-box mt-3">
              <div className="hovereffect">
                <img
                  className="img-responsive w-100 h-100"
                  src={hotel}
                  alt=""
                ></img>
                <div className="centered-text-overlay info-text">To Stay</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
