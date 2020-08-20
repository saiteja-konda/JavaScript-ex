let marksReport = function (name, securedMarks, totalMarks) {
  percentage = Math.round((securedMarks / totalMarks) * 100);

  if (percentage >= 90) {
    console.log(
      `congrats ${name} your percentage is ${percentage}% and your grade is O`
    );
  } else if (percentage >= 70) {
    console.log(
      `well done ${name} your percentage is ${percentage}% and your grade is A`
    );
  } else if (percentage >= 60) {
    console.log(
      `good job ${name} your percentage is ${percentage}% and your grade is B`
    );
  } else if (percentage >= 50) {
    console.log(
      `you mush hard ${name} your percentage is ${percentage}% and your grade is C`
    );
  } else {
    console.log(
      `bad luck ${name} your percentage is ${percentage}% and your grade is F`
    );
  }
};

marksReport("Jane", 468, 600);
marksReport("Dale", 564, 600);
marksReport("Steve", 300, 600);
marksReport("John", 345, 600);
marksReport("Ruth", 234, 600);
