import React from "react";

const FullStory = props => {
  let id = props.match.params.id;
  let story = props.newsString.filter(story => story.id === id);
  let formattedText = story[0].description.split("%%")

  return (
    <div class="container-fluid">
      <div class="card ind-news mx-auto my-5">
        <img
          class="card-img-top"
          src={`/images/${story[0].images}.jpg`}
          alt="Card cap"
        ></img>
        <div class="card-body">
          <h3>{story[0].title}</h3>
          {formattedText.map(item => (
            <p class="card-text">{item}</p>
          ))
          } 
        </div>
      </div>
    </div>
  );
};

export default FullStory;

