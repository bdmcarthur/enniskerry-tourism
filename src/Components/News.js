import React from "react";

const News = props => {
  let newsList = props.newsString;

  return (
    <div className="container">
      <h1 id="news" className="special-font news text-center">
        News
      </h1>
      {newsList && (
        <div className="row justify-content-around">
          {newsList.map(story => (
            <div className="col-12 col-md-6 col-lg-3 mt-3 mult-news">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`/images/${story.images}.jpg`}
                  alt="Cardcap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">
                    {story.description.slice(0, 150)}...
                  </p>
                  <a href={`/news/${story.id}`} className="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
