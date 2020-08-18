import React from "react";

const Greet = ({ name, heroName }) => {
  return (
    <p>
      {heroName}'s orginal name is {name}
    </p>
  );
};
export default Greet;
