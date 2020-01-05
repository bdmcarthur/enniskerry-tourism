import React from "react";
import see from "../images/see.jpg";
import eat from "../images/eat.jpg";
import hotel from "../images/hotel.jpg";
import { Link } from "react-router-dom";

const InfoBoxes = () => {
  return (
    <div className="container info-container">
      <div className="row">
        <Link className="col-md-4 col-12 info-box mt-3" to="/see">
          <div className="hovereffect">
            <img className="img-responsive w-100 h-100" src={see} alt=""></img>
            <div className="centered-text-overlay info-text">To See</div>
          </div>
        </Link>
        <Link to="/eat" className="col-md-4 col-12 info-box mt-3">
          <div className="hovereffect">
            <img className="img-responsive w-100 h-100" src={eat} alt=""></img>
            <div className="centered-text-overlay info-text">Eat and Drink</div>
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
  );
};

export default InfoBoxes;
