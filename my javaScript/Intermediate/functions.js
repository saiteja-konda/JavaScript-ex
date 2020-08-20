//parameter in function can have any type

let sayHello = function (name) {
  console.log("welcome " + name);
  console.log(`Dear ${name} welcome to the website`);
};

// sayHello("John");

let Multiplier = function (num1 = "first number", num2 = "second number") {
  answer = num1 * num2;
  return console.log(
    `the multiplication of the ${num1} and  ${num2} is ${answer}`
  );
};

Multiplier(6, 4);
Multiplier();
