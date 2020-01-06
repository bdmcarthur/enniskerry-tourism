import React from "react";
import bar from "../images/bar.jpg";
import whiskey from "../images/whiskey.jpg";
import parade from "../images/parade.jpg";
import farm from "../images/farm.jpg";

const News = () => {
  return (
    <div className="container">
      <h1 className="special-font news text-center">News</h1>
      <div className="row justify-content-around">
        <div className="col-12 col-md-6 col-lg-3 mt-3">
          <div className="card">
            <img className="card-img-top" src={bar} alt="Cardcap"></img>
            <div className="card-body">
              <h5 className="card-title">Bar Opening</h5>
              <p className="card-text">
                Egestas purus viverra accumsan in nisl nisi scelerisque eu
                ultrices. Nibh ipsum consequat nisl vel pretium lectus quam. Nec
                ultrices dui sapien eget mi proin sed. Quis commodo odio aenean
                sed adipiscing diam donec adipiscing. Consequat ac felis donec
                et odio pellentesque diam volutpat commodo.
              </p>
              <a href="/" className="">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mt-3">
          <div className="card">
            <img className="card-img-top" src={whiskey} alt="Cardcap"></img>
            <div className="card-body">
              <h5 className="card-title">Whisky Tasting</h5>
              <p className="card-text">
                Vitae et leo duis ut diam quam nulla porttitor massa. Mauris
                pharetra et ultrices neque ornare aenean euismod elementum. Est
                ultricies integer quis auctor elit. Fringilla est ullamcorper
                eget nulla facilisi.
              </p>
              <a href="/" className="">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mt-3 d-none d-sm-block">
          <div className="card">
            <img className="card-img-top" src={farm} alt="Cardcap"></img>
            <div className="card-body">
              <h5 className="card-title">Day on the Farm</h5>
              <p className="card-text">
                Sringilla est ullamcorper eget nulla facilisi. Vitae et leo duis
                ut diam quam nulla porttitor massa. Mauris pharetra et ultrices
                neque ornare aenean euismod elementum. Est ultricies integer
                quis auctor elit.
              </p>
              <a href="/" className="">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mt-3 d-none d-sm-block">
          <div className="card">
            <img className="card-img-top" src={parade} alt="Cardcap"></img>
            <div className="card-body">
              <h5 className="card-title">Parade</h5>
              <p className="card-text">
                Faucibus purus in massa tempor nec feugiat. Ornare suspendisse
                sed nisi lacus. Tristique magna sit amet purus gravida quis
                blandit turpis cursus. Ut diam quam nulla porttitor massa.
                Lectus urna duis convallis convallis tellus id interdum velit.
              </p>
              <a href="/" className="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
