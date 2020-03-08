import React from "react";
import pic from "./images/profile.png";

var imageProfile = props => {
  return (
    <img src={pic} alt="profile" style={({ width: 150 }, { height: 150 })} />
  );
};

export default imageProfile;
