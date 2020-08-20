// alert("hello");
import User, { addAge, addName, person } from "./user.js";

// document.querySelector("#search").addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// function validation() {
//   let myValue = document.getElementById("search").value;

//   if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//     alert("input is not valid");
//   } else {
//     alert(`the give input is ${myValue}`);
//   }
// }
// function passcheck() {
//   let pasValue = document.getElementById("login").value;
//   let cpasValue = document.getElementById("#epas").value;

//   if (pasValue === cpasValue) {
//     alert("login sucess");
//   } else {
//     alert("login falied");
//   }
//   console.log("true");
// }
// const [name, age] = user;

addName("bob");
addAge("34");

const { name, age } = person;
console.log(`this is ${name} from the oblect and his age is ${age}`);

let myUser = new User("bob", "34");
let myUser2 = new User("john", "54");
// myUser.name = 'bob'
// myUser.age = '34'
console.log(myUser);
console.log(myUser2);
console.log(myUser.nameAndAge);
console.log(myUser2.nameAndAge);
console.log(myUser.getUserDetails());
console.log(myUser2.getUserDetails());

console.log(User.isolder(myUser));
console.log(User.isolder(myUser2));

class newUser extends User {
    constructor(name, age, gender){
        super(name,age)
        this.gender = gender;
    }
}
let myUser3 = new newUser("jane",'26','male')
console.log(myUser3);
console.log(User.isolder(myUser3));
