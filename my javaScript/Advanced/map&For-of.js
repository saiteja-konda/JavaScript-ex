var John = {
  name: "John",
  gender: "male",
  age: "25",
  profession: "Developer",
  country: "USA",
};

var Jane = {
  name: "Jane",
  gender: "female",
  age: "23",
  profession: "Actor",
  country: "USA",
};

var Dale = {
  name: "Dale",
  gender: "male",
  age: "26",
  profession: "Doctor",
  country: "Canada",
};

let users = new Map();

users.set("john", John);
users.set("jane", Jane);
users.set("dale", Dale);

console.log(users);
console.log("Size of Users is " + users.size);

//For each loop
users.forEach((values, key) =>
  console.log(key + " is " + values.profession + " from " + values.country)
);

//For of loop
for (const [key, values] of users.entries()) {
  console.log(key + " is " + values.profession + " from " + values.country);
}

var arrayOfArray = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];

var arMap = new Map(arrayOfArray);
console.log(arMap);

for (const key of arMap.keys()) {
  console.log(`${key} : ${arMap.get(key)}`);
}
