const organizeInstructors = function (instructors) {
  let finalList = {};
  for (let index = 0; index < instructors.length; index++) {
    if (instructors[index].course in finalList) {
      finalList[instructors[index].course].push(instructors[index].name);
    } else {
      finalList[instructors[index].course] = [instructors[index].name];
    }
  }
  return finalList;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));