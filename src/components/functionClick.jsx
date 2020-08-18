import React from "react";
const FunctionClick = () => {
  function handleClickEvent() {
    console.log("Button Clikced");
  }
  return (
    <React.Fragment>
      <div>
        <button onClick={handleClickEvent}>clickMe</button>
      </div>
    </React.Fragment>
  );
};

export default FunctionClick;
