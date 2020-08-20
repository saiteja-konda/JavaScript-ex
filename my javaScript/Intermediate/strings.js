let string = "         this is an string";
//prop
console.log(string.length);
//func
console.log(string.trim());
console.log(string.toUpperCase().trim());

//UserName validator function

let userName = "Johne4";
let password = "dkePK1335M";

let userNameValidator = function (usrn) {
  if (usrn.includes(123) && usrn.length > 6) {
    return true;
  }
  return "invalid username";
};

let passwordValidator = function (pass) {
  if (pass.length >= 6 && pass.includes(A - Z) && pass.includes(a - z)) {
    return true;
  }
  return "invalid password";
};

console.log(userNameValidator(userName));
console.log(passwordValidator(password));
