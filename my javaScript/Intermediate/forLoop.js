const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

console.log("ordered");
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

console.log("reverse ordered");
for (let i = days.length - 1; i >= 0; i--) {
  console.log(days[i]);
}
