export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getUserDetails() {
    return `username is ${this.name} and user's age is ${this.age}`;
  }

  get nameAndAge() {
    return this.name + " " + this.age;
  }

  static isolder(a) {
    if (a.age > 50) {
      return `is older`;
    } else {
      return `is younger`;
    }
  }
}

export const addName = (name) => console.log(name);
export const addAge = (age) => console.log(age);

export const person = {
  name: "bob",
  age: "34",
};
