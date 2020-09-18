import React, { Component, useState } from "react";
function Hooks() {
  const [Text, setText] = useState("default");

  return (
    <div>
      <h1>{Text}</h1>
      <input value={Text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Hooks;
