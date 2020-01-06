import React from "react";

const InfoCards = props => {
  let filteredList = props.filteredList;
  return (
    <div class="container mb-5 pb-5">
      {filteredList && (
        <div>
          {filteredList.map(item => (
            <div class="row mt-5 pt-4 justify-content-center">
              <div class="col-sm col-md-4 ">
                <img className="w-100 mb-4" alt="food" src={item.images}></img>
              </div>
              <div class="col-sm col-md-6 description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="font-italic">{item.address}</p>
                <a target="blank" href="https://en.wikipedia.org/wiki/Ireland">
                  {item.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoCards;
