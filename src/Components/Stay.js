import React from "react";
import InfoCard from "./InfoCards";

const Stay = props => {
  let filteredList = props.dataString.filter(item => item.type === "stay");
  return (
    <div>
      <h1 className="text-center special-font mt-5">To Stay in Ballywole</h1>
      <InfoCard filteredList={filteredList} />
    </div>
  );
};

export default Stay;
