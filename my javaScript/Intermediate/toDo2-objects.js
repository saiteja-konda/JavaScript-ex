let myToDo = {
  day: "mon",
  meetings: 0,
  meetDone: 0,
};

let addMeeting = function (todo, meet = 0) {
  todo.meetings = todo.meetings + meet;
};

let meetingsCompleted = function (todo, meet = 0) {
  todo.meetDone = todo.meetDone - meet;
};

let reset = function (todo) {
  meetings = 0;
  meetDone = 0;
};

let summaryOfDay = function () {
  let remaingMeetings = myToDo.meetings + myToDo.meetDone;
  return ` you have ${remaingMeetings} meetings left`;
};
console.log(myToDo);
addMeeting(myToDo, 4);
meetingsCompleted(myToDo, 2);
console.log(myToDo);
console.log(summaryOfDay(myToDo));
