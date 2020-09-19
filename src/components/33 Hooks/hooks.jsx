import { render } from "@testing-library/react";
import React, { Component, useState, useEffect } from "react";
const Hooks = () => {
  //   const [Text, setText] = useState("");
  const [fruit, setFruit] = useState("default");
  const [vegitable, setVegitable] = useState("default");
  
  useEffect(() => {
    if (({ vegitable } && { fruit } )!== "default") {
      render(<div>My fav fruit is <b>{fruit}</b> and my fav vegitable is <b>{vegitable}</b></div>);
    }
    else {
        render(
            <div></div>
        )
    }
  });
  return (
    <div>
      <lable>Fruit Name </lable>
      <input value={fruit} onChange={(e) => setFruit(e.target.value)} />
      <br /> <br />
      <lable>Vegitable Name </lable>
      <input value={vegitable} onChange={(e) => setVegitable(e.target.value)} />
      <br />
      <br />
      <br />
      
    </div>
  );
};

export default Hooks;
