const talkingCalendar = function (date) {
  let final = "";
  let year = date.slice(0, 4);
  let monthNo = "m" + (date.slice(5, 7));
  let month = {
    m01: "January ",
    m02: "February ",
    m03: "March ",
    m04: "April ",
    m05: "May ",
    m06: "June ",
    m07: "July ",
    m08: "August ",
    m09: "September ",
    m10: "Octoober ",
    m11: "November ",
    m12: "December "
  }

  let dayNo = date.slice(8, 10);
  let checkDay = "d" + dayNo;
  let day = {
    d01: "1st,",
    d02: "2nd,",
    d03: "3rd,",
    d21: "21st,",
    d22: "22nd,",
    d23: "23rd,",
    d31: "31st,"
  }

  // adds month written out to string of final.
  final = final + month[monthNo];

  //checks if the day matches with day key as a day that doesn't end in th, 
  //then checks if day number starts with 0, if so returns only second number to final with th on the end
  // last section adds number to final if it mets neither of these demands with th on the end.

  if (day[checkDay]) {

    return final = final + (day[checkDay]);

  } else if (dayNo[0] === 0) {
    return final = final + (dayNo[1] + "th,");

  } else {
    return final = final + (dayNo + "th,");
  }
  //calls function
  getDay(dayNo, date, day, checkDay);

  //adds space then year to end of string final.
  final = final + (" " + year);
  return final;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));