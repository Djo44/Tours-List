import React from "react";
import Tour from "./Tour";

const Tours = ({ data, removeTour }) => {
  return (
    <div>
      {data.map((x) => {
        return <Tour {...x} key={x.id} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
