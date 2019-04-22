// SET DATE AND TIME IN THIS SPECIFIC FORMAT

let newDate = new Date;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let today = days[newDate.getDay()];
let hour = newDate.getHours();
let ampm = hour >= 12 ? 'pm' : 'AM';
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();

let example = `Today is: ${today}.
Current time is: ${hour}${ampm} : ${minutes} : ${seconds}. 
`

console.log(example);

//MAKE A BUTTON PRINT THE CURRENT WINDOW

/*HTML 
<head>
  <meta charset="utf-8">
  <title>JS PRINT EXERCISE</title>
</head>
<body>
  <button id="print">Print Me</button>
</body>
HTML */

//JS 


const button = document.getElementById('print');

button.addEventListener("click", printMe)

function printMe() {
	window.print();
}
//JS

//TRIANGLE AREA

let ab = 5;
let bc = 6;
let ca = 7;

//find the perimeter

let per = (ab + bc + ca)/2;

let area = Math.floor(Math.sqrt(per*((per-ab)*(per-bc)*(per-ca))));

console.log(area);
