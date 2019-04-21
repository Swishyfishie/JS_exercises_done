# JS_exercises_done
# ex number 1 // SET DATE AND TIME IN THIS SPECIFIC FORMAT

`let newDate = new Date;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let today = days[newDate.getDay()];
let hour = newDate.getHours();
let ampm = hour >= 12 ? 'pm' : 'AM';
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();

let example = `Today is: ${today}.
Current time is: ${hour}${ampm} : ${minutes} : ${seconds}. 
`

console.log(example);`
