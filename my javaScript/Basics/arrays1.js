// Arrays is an datatype

const superHeros = ["spiderMan", "hulk", "batman", "ironMan"];
console.log(superHeros);
console.log(superHeros[3]);
console.log(superHeros);
console.log(
  "last element of the array is  " + superHeros[superHeros.length - 1]
);

console.log("we have " + superHeros.length + " superHeros in array ");

//Tempalate String

console.log(
  `We have ${superHeros.length} superHeros in array and ${
    superHeros[superHeros.length - 1]
  } is the latest one`
);
