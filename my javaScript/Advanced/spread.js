//combining two arrays with spread operator

let paraents = ["mom", "dad"];

let childern = ["child1", "child2", "child3"];

myFamily = [...paraents, ...childern];

console.log(myFamily);

//making duplicate of an array

const myFamilyDuplicate = [...myFamily];
console.log(myFamilyDuplicate);
myFamilyDuplicate.push("dog");
console.log(myFamilyDuplicate);

//combing objects using spread operator

let wildAnimals = {
  1: "tiger",
  2: "lion",
  3: "snake",
};

let DomesticAnimals = {
  4: "dog",
  5: "cat",
  6: "rabbit",
};

animals = { ...wildAnimals, ...DomesticAnimals };
console.log(animals);
animalsDuplicate = { 7: "goldFish", ...animals };
console.log(animalsDuplicate);

// Example of a funcion that takes an object and adds object
//into it whlie duplicating and keeping the state of the orignal as it was(unTouched)
const students = [
  { name: "John", class: "10", location: "KPHB" },
  { name: "Jane", class: "8", location: "ABIDS" },
  { name: "Dale", class: "6", location: "KOTI" },
];
student = { name: "Kris", class: "4", location: "Jubliee Hills" };

function addStudent(student) {
  newstudent = [...students, { ...student }];
}
addStudent(student);
console.log(students);
console.log(newstudent);

let numbers = [
  23,
  42,
  75,
  234,
  5643,
  676,
  234,
  86583,
  245627,
  79578648,
  2624624,
];

// applying on strings

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

let myName = "Saiteja Konda";
console.log(...myName);
console.log(...numbers);

let names = ["john", "jane", "adam", "adward", "cole", "ruth"];
console.log(...names);
