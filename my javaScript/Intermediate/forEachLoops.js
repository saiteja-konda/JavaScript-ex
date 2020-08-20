const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

daysCount = 0;
days.forEach(function (day, index) {
  console.log(`${index + 1} day is ${day}`);
  daysCount++;
});

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

monthsCount = 0;
months.forEach(function (month, index) {
  console.log(`${index + 1} month is ${month}`);
  monthsCount++;
});

console.log("every week will have " + daysCount + "days");
console.log(`ever year will have ${monthsCount}months`);
