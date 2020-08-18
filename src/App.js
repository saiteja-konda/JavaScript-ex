import React from "react";

import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
import Message from "./components/message";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      {/*<Greet name="Bruce" heroName ="BatMan" />
  <Greet name="Clark" heroName ="SuperMan"/>
  <Greet name="Diana" heroName ="WonderWomen"/>
  <Welcome name="Bruce" heroName ="BatMan" />
  <Welcome name="Clark" heroName ="SuperMan" />
  <Welcome name="Diana" heroName ="WonderWomen" />*/}
      {/*<Message />*/}
      <Counter />
    </div>
  );
}

export default App;
