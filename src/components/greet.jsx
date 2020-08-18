import React from "react";

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <p>
      {heroName}'s orginal name is {name}
    </p>
  );
};
export default Greet;
