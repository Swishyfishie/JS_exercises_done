# JS_exercises_done
# EX 1

// SET DATE AND TIME IN THIS SPECIFIC FORMAT

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

# EX 2
//MAKE A BUTTON PRINT THE CURRENT WINDOW


const button = document.getElementById('print');

button.addEventListener("click", printMe);

function printMe() {
	window.print();
}

# EX 3 

//TRIANGLE AREA

let ab = 5; //here you can make get the input but I chose to do it with fixed values. However it works and it's ok.
let bc = 6;
let ca = 7;

//find the perimeter

let per = (ab + bc + ca)/2;   

let area = Math.floor(Math.sqrt(per*((per-ab)*(per-bc)*(per-ca))));  //

console.log(area);
