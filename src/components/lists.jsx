import React from "react";
import Person from './Person';
function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  const persons = [
    {
      id: 1,
      name: "Bruce",
      power: "React",
      skill: "Javascript",
    },
    {
      id: 2,
      name: "Clark",
      power: "Spring Boot",
      skill: "Java",
    },
    {
      id: 3,
      name: "John",
      power: "Larvel",
      skill: "Php",
    },
  ];
  const personList = persons.map((person) => <Person person ={person}/>
  );

  return (
    <div>
      {nameList}
      {personList}
    </div>
  );
}

export default NameList;
