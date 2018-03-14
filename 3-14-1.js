var DOB = prompt("Enter Date of Birth (DD/MM/YYYY)")
// Using array destructuring
var [DOBdate, DOBmonth, DOByear] = DOB.split('/')

var today = new Date()

var [currDate, currMonth, currYear] = [today.getDate(), today.getMonth() + 1, today.getFullYear()]
// Add 1 to month because months start from 0 while inputted month starts from 1

var year = currYear - DOByear

var month = currMonth - DOBmonth

var date = currDate - DOBdate

if (date < 0) {
    if (month === 1 && year % 4 === 0) {    /* if month is feb and year is leapyear */
        date = 29 + date
    } else if (month === 1 ) {  /* month is feb, year is not leapyear */
        date = 28 + date
    } else if (month % 2 === 0) {   /* month is jan, mar etc. */
        date = 31 + date
    } else if (month % 2 === 1) {
        date = 30 + date
    }
    month --
}

if (month < 0) {
    year--
    month = 12 + month
}

alert("You are " + date + " days, " + month + " months and " + year + " years old")