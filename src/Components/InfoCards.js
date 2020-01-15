import React from "react";

const InfoCards = props => {
  let page = props.match.path.split("/").join("");
  let filteredList = props.dataString.filter(item => item.type === page);

  return (
    <div className="container mb-5 pb-5">
      {filteredList && (
        <div>
          {filteredList.map(item => (
            <div className="row mt-5 pt-4 justify-content-center">
              <div className="col-sm col-md-5 m-auto">
                <img
                  className="w-100 mb-4"
                  alt="food"
                  src={`/images/${item.images}`}
                ></img>
              </div>
              <div className="col-sm col-md-6 description">
                <h3>{item.title}</h3>
                {item.tagline && (
                  <p className="font-weight-bold font-italic">{item.tagline}</p>
                )}
                <p>
                  {item.description.split("**").map(par => (
                    <p class="card-text">{par}</p>
                  ))}
                </p>
                <p className="font-italic">
                  {item.address} {item.phone}
                </p>

                <a target="blank" href={item.website}>
                  Visit Website
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
