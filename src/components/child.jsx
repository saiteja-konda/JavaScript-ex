import React from "react";
const Child = ({ greetHandle }) => {
  return (
    <React.Fragment>
      <div>
        {/*<button onClick={props.greetHandle}>Child-Button</button>*/}
        <button onClick={() => greetHandle("Child Component")}>
          {/* using arrow function sting is passed as parameter to the event handling method */}
          Child-Button
        </button>
      </div>
    </React.Fragment>
  );
};

export default Child;
