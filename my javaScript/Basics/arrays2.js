const numbers = ["one", "two", "three", "four", "five", "six"];

numbers[3] = "added";

console.log(numbers.shift());
console.log(numbers.unshift("something"));

console.log(numbers.pop());
console.log(numbers.push("seven"));

numbers.splice(3, 1, "three");
numbers.splice(0, 1, "one");
numbers.splice(4, 1, "six");
console.log(numbers);
