import React from "react";

const Device = (props) => {
  console.log(props.name);
  return (
    <div>
      <h3>I have a device: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Device;
