import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="title-container centered-text-overlay text-center mx-auto">
        <h1 className="title-text special-font">Ballywole</h1>
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
              src="images/carousel1.jpg"
              alt="First slide"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/carousel2.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/carousel3.jpg"
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
    </div>
  );
};

export default Carousel;
