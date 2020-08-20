let myToDo = [
  {
    title: "Learn JavaScript",
    desc: "focus more on ES6",
  },
  {
    title: "Go to Medical Store",
    desc: "get the due medicines",
  },
  {
    title: "Complete Spring Boot",
    desc: "finish the Backend Api",
  },
];

const indexFinder = myToDo.findIndex(function (todo, indexFinder) {
  console.log(todo);
  return todo.title === "Go to Medical Store";
});

console.log(indexFinder);

const findToDo = function (myTodo, title) {
  const index = myTodo.findIndex(function (todo, index) {
    return todo.title.toLowerCase() === title.toLowerCase();
  });
  return myToDo[index];
};

let print = findToDo(myToDo, "Complete Spring Boot");
console.log(print);
