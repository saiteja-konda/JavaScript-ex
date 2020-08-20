//Using forEach

myToDoList = [];

myToDoList.push("Learn JavaScript");
myToDoList.push("Complete Spring Project");
myToDoList.push("Complete CourseEra");
myToDoList.push("Watch Series");
console.log();
console.log("Using For Each loop ordered");
console.log();
myToDoList.forEach(function (todo, index) {
  console.log(`my ${index + 1} todo is to ${todo}`);
});
console.log();
console.log("Using For loop reverse order");
console.log();
for (let index = myToDoList.length - 1; index >= 0; index--) {
  console.log(`my ${index + 1} todo is to ${myToDoList[index]}`);
}
console.log();
