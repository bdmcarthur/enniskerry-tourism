import React from "react";
import InfoCard from "./InfoCards";

const Eat = props => {
  let filteredList = props.dataString.filter(item => item.type === "eat");
  return (
    <div>
      <h1 className="text-center special-font mt-5">To Eat in Ballywole</h1>
      <InfoCard filteredList={filteredList} />
    </div>
  );
};

export default Eat;
