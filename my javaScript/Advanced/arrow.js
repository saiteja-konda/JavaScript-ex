let myFunction = function (name) {
  return `hello ${name}`;
};

let myArrowFunction = (name) => `hello ${name}`;

console.log(myFunction("saiteja this is normal function"));
console.log(myArrowFunction("saiteja this is arrow function"));

// Arrow functions are good use in when there is an need for call back function

let myToDo = [
  {
    title: "Learn JavaScript",
    desc: "focus more on ES6",
    isDone: true,
  },
  {
    title: "Go to Medical Store",
    desc: "get the due medicines",
    isDone: false,
  },
  {
    title: "Complete Spring Boot",
    desc: "finish the Backend Api",
    isDone: false,
  },
];

const thingsNotDone = myToDo.filter((todo) => todo.isDone === false);

thingsNotDone.forEach((element) => console.log(element.title));
