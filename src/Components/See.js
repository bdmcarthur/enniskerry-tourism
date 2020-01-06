import React from "react";
import InfoCard from "./InfoCards";

const See = props => {
  let filteredList = props.dataString.filter(item => item.type === "see");
  return (
    <div>
      <h1 className="text-center special-font mt-5">To See in Ballywole</h1>
      <InfoCard filteredList={filteredList} />
    </div>
  );
};

export default See;
