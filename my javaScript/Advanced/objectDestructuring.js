//Arrays
const apple = ["ipad", "iphone", "macBook"];
const samsung = [
  "S20",
  "GalaxtTab",
  "samsungNoteBook",
  "speakers",
  "earphones",
];

const [a, b, c] = apple;
console.log(a);
console.log(b);
console.log(c);

const [d, , e, ...rest] = samsung;

console.log(d);
console.log(e);
console.log(rest);

function calculation(a, b) {
  return [a + b, a - b, a * b, a / b, a % b];
}
const [sum, sub, mul, div, per] = calculation(6, 4);

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(per);

//Objects
let person = {
  name: "John",
  gender: "male",
  age: "25",
  profession: "Developer",
  country: "USA",
};

let Dog = {
  name: "Snoopy",
  gender: "male",
  age: "5",
  look: "adorable",
  country: "USA",
};

const { name, profession, salary = "64,000$" } = person;

console.log(
  `his name is ${name} and he is ${profession} and his salary is ${salary}`
);

//in function
function printObject({ name, profession }) {
  console.log(`his name is ${name} and he is ${profession}`);
}
printObject(person);
