/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  const months = {
    '01': 'January',
    '02': 'Feburary',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }
  const days = {
    '01': '1st',
    '02': '2nd',
    '03': '3rd',
    '21': '21st',
    '22': '22nd',
    '23': '23rd',
    '31': '31st'
  }
  const formattedMonth = monthStr => months[monthStr];
  const formattedDay = dayStr => days[dayStr] ?? dayStr + 'th';

  const dateArray = date.split('/');
  return `${formattedMonth(dateArray[1])} ${formattedDay(dateArray[2])}, ${dateArray[0]}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
