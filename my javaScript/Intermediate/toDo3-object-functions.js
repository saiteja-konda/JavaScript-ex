let myToDo = {
  day: "mon",
  meetings: 0,
  meetDone: 0,

  addMeeting: function (meet) {
    this.meetings = this.meetings + meet;
  },

  meetingsCompleted: function (meet) {
    this.meetDone = this.meetDone - meet;
  },

  reset: function () {
    this.meetings = 0;
    this.meetDone = 0;
  },

  summaryOfDay: function () {
    let remaingMeetings = this.meetings + this.meetDone;
    return ` you have ${remaingMeetings} meetings left`;
  },
};

myToDo.addMeeting(6);
myToDo.meetingsCompleted(4);

console.log(myToDo.summaryOfDay());
console.log(myToDo);
myToDo.reset();
console.log(myToDo);
