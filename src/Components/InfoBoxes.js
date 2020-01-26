import React from "react";
import { Link } from "react-router-dom";

const InfoBoxes = () => {
  return (
    <div className="container" id="activities">
      <div className="row">
        <Link className="col-md-4 col-12 info-box p-0" to="/see">
          <div className="hovereffect">
            <img
              className="img-responsive w-100 h-100"
              src="/images/glencree.jpg"
              alt=""
            ></img>
            <div className="centered-text-overlay info-text">To See</div>
          </div>
        </Link>
        <Link to="/eat" className="col-md-4 col-12 info-box p-0">
          <div className="hovereffect">
            <img
              className="img-responsive w-100 h-100"
              src="/images/eat.jpg"
              alt=""
            ></img>
            <div className="centered-text-overlay info-text">Eat and Drink</div>
          </div>
        </Link>
        <Link to="/stay" className="col-md-4 col-12 info-box p-0">
          <div className="hovereffect">
            <img
              className="img-responsive w-100 h-100"
              src="/images/hotel.jpg"
              alt=""
            ></img>
            <div className="centered-text-overlay info-text">To Stay</div>
          </div>
        </Link>
        <Link to="/shop" className="col-md-4 col-12 info-box p-0">
          <div className="hovereffect">
            <img
              className="img-responsive w-100 h-100"
              src="/images/shop13.jpg"
              alt=""
            ></img>
            <div className="centered-text-overlay info-text">Shop</div>
          </div>
        </Link>
        <Link to="/health" className="col-md-4 col-12 info-box p-0">
          <div className="hovereffect">
            <img
              className="img-responsive w-100 h-100"
              src="/images/health16.jpg"
              alt=""
            ></img>
            <div className="centered-text-overlay info-text">
              Health and Beauty
            </div>
          </div>
        </Link>
        <Link to="/outdoor" className="col-md-4 col-12 info-box p-0">
          <div className="hovereffect">
            <img
              className="img-responsive w-100 h-100"
              src="/images/outdoors18.jpg"
              alt=""
            ></img>
            <div className="centered-text-overlay info-text">
              Outdoor Activities
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InfoBoxes;
