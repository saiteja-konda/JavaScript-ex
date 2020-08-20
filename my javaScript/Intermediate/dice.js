let low = 1;
let high = 6;

let randomNumber = Math.floor(Math.random() * (high - low + 1)) + low;
let randomNumber2 = Math.floor(Math.random() * (high - low + 1)) + low;
console.log(`dice one :${randomNumber.toFixed()}`);
console.log(`dice two :${randomNumber2.toFixed()}`);
