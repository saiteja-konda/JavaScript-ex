import React from "react";

import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/functionClick";
import ClassClick from "./components/classFunEvent";
import Events from "./components/events";

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
      {/*<Counter />*/}
      {/*<FunctionClick />*/}
      {/*<ClassClick />*/}
      <Events />
    </div>
  );
}

export default App;
