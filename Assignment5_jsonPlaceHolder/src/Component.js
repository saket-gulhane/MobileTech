import React from "react";
import GoTo from "./link.js";
// import imageProfile from "./imageCompo.js";
import pic from "./images/profile.png";

var Component = props => {
  return (
    <div class="center">
      <p class="thick">Profile Info</p>
      {/* <imageProfile /> */}
      {/* <div class="row"> */}

      <img src={pic} alt="profile" style={({ width: 150 }, { height: 150 })} />

      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
      <GoTo />
    </div>
  );
};

export default Component;
