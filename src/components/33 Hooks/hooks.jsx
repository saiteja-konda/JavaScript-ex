import React, { Component, useState } from "react";
const Hooks = () => {
  //   const [Text, setText] = useState("");
  const [fruit, setFruit] = useState("");
  const [vegitable, setVegitable] = useState("");

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
      My fav fruit is <b>{fruit}</b> and my fav vegitable is <b>{vegitable}</b>
    </div>
  );
};

export default Hooks;
