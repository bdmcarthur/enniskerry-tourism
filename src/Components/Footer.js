import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white mt-3">
      <div className=" container row justify-content-around mx-auto py-4">
        <div className="col-12 col-md-3 mt-4">
          <img
            alt="logo"
            className="pt-3 pr-3 w-100"
            src="/images/logo.png"
          ></img>
        </div>

        <div className="col-12 col-md-4 mt-4">
          <h4>Come Visit Us!</h4>
          <p>
            Enniskerry Tourist Office<br></br>Emmet Place, Enniskerry, Co Cork,
            P17 C973<br></br>Tel: + 353 21 4298234
          </p>
        </div>

        <div className="col-12 col-md-2 mt-4">
          <ul className=" footer-list pl-1 d-none d-sm-block">
            <li>
              <Link to={"/stay"}>Stay</Link>
            </li>
            <li>
              <Link to={"/eat"}>Eat</Link>
            </li>
            <li>
              <Link to={"/see"}>See</Link>
            </li>
            <li>
              <Link to={"/news"}>News</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-between copyright m-0 pt-2">
        <div class="col-12 col-md-6 py-2">
          <h4 className="">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-youtube"></i>
          </h4>
        </div>

        <div class="col-12 col-md-6 py-1">
          <p className="text-right my-1 pr-4">
            © 2029 Enniskerry Tourism. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
