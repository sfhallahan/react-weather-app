var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var monthNames = [
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
  "Dec"
];

function getDayOfWeek(date) {
  var dayName = days[new Date(date).getDay()];
  return dayName;
}

function getMonth(date) {
  var monthName = monthNames[parseInt(date.substr(6, 2), 10) - 1];
  return monthName;
}

function getDayOfMonth(date) {
  if (date.substr(8, 1) === "0") {
    return date.substr(9, 1);
  } else {
    return date.substr(8, 2);
  }
}

module.exports = {
  dateFormatter: function(inputDate) {
    var date = inputDate.substr(0, 10);
    return getDayOfWeek(date) + ", " + getMonth(date) + " " + getDayOfMonth(date);
  },

  tempFormatter: function(tempK) {
    var tempC = parseFloat(tempK) - 273;
    var tempF = Math.round(tempC * 1.8 + 32);
    return tempF;
  }
};
