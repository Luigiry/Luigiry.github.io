var today = new Date();
var day= today.getDay();
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var date = today.getDate();
var month = today.getMonth();
var monthName= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"]
var year = today.getFullYear();
document.write(dayName[day]+ " " + monthName[month] + " " + date  + ", " + year);
