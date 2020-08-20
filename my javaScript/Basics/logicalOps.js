/*
&& - AND operator both side should be true
|| - OR operator one side should be true 
*/

let isVerified = false;
let isLoggedIn = true;
let hasPayementToken = true;
let isGuest = false;

if (!isVerified && isLoggedIn && hasPayementToken) {
  console.log("Greetings and Welcome user");
} else if (isVerified || isGuest) {
  console.log("Hello Guest welcome");
} else {
  console.log("please signup");
}
