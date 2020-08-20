import React from "react";
function Person({ person }) {
  return (
    <p>
      {person.name} knows {person.skill} and he works with {person.power}
    </p>
  );
}

export default Person;
