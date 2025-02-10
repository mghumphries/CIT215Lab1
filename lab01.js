//Task One : Variables
//Part A -Displaying Input Number
console.log("Task One");
let number = parseInt(prompt("Please enter a number: "));
console.log(number)

var numQuantity = document.querySelector(".quantity");
numQuantity.innerText = "Quantity: " + number;
console.log("User's input = "+ number);

//Part B -Displaying Percentage
let percentage = parseInt(prompt("Please enter a percentage: "));
let percentCalc = `${percentage / 100}` * `${number}`;

var percentChosen = document.querySelector(".task1a");
percentChosen.innerText = `${percentage}` + "% of Quantity, " +`${number}`+ " is " + `${percentCalc}`;


//Task Two : Variables & Conditionals
let point = parseInt(prompt("Please enter the amount of points you received: "));
let displayGradePA = "";

//if branch
let strLetterPA = "";
if (point > 90){
    strLetter = "A";
}
else if (point > 80){
    strLetterPA = "B";
}
else if (point > 70){
    strLetterPA = "C";
}
else if (point > 60){
    strLetterPA = "D";
}
else{
    strLetterPA = "F";
}
displayGradePA += "Your grade is a)" + `${strLetterPA}`;
let task2a = document.querySelector(".task2a");
task2a.innerText = `${displayGradePA}`;

//swtich
let displayGradePB = "";
switch (point < 101 && point >= 0) {
    case (point <= 100 && point >= 91):
        strLetterPB = "A";
        break;
    case (point <= 90 && point >= 81):
        strLetterPB = "B";
        break;
    case (point <= 80 && point >= 71):
        strLetterPB = "C";
        break;
    case (point <= 70 && point >= 61):
        strLetterPB = "D";
        break;
    case (point <= 60 && point >= 0):
        strLetterPB = "F";
        break;
    default:
        strLetterPB = "Please enter a valid number";   
}
displayGradePB += "Your grade is b)" + `${strLetterPB}`;
let task2b = document.querySelector(".task2b");
task2b.innerText = `${displayGradePB}`;

//Task 3 : Variables and Loops
let profName = (prompt("*FOR LOOP* Which professor from Harry Potter do you wish to hear a line from?"));
let lineToWrite = (prompt("*FOR LOOP* Enter the line you would like this professor to say: "));
let numOfLines = parseInt(prompt("*FOR LOOP* How many times would you like it written? "));

// for loop
let totalLines = "";
for (let line = 1; line <= numOfLines; line++){
    totalLines += line + ". " + " " + lineToWrite;
}
let RefprofName = document.querySelector(".prof");
RefprofName.innerText = `Prof.${profName}`;

let ReftotalLines = document.querySelector(".hpProfLines");
ReftotalLines.innerText = `${totalLines}`;

console.log (`${lineToWrite}`);

//Task 4 : Variables, Loops, DOM
let profName2 = prompt("*WHILE LOOP* Which professor from Harry Potter do you wish to hear a line from?");
let toWrite = prompt("*WHILE LOOP* Enter the line you would like this professor to say: ");
let numLines = parseInt(prompt("*WHILE LOOP* How many times would you like it written? "));

//while loop
let textLines = "";
let lines = 1;

while (lines <= numLines){
    textLines += lines + "." + "" + toWrite ;
    lines++;
}
let Refprofessor2 = document.querySelector(".prof2");
Refprofessor2.innerText = `Prof.${profName2}`;
let RefhpProfLines2 = document.querySelector(".hpProfLines2");
RefhpProfLines2.innerText = textLines;

// Task Five : Variables, Loops, DOM, Function
const HPLineWriter = () =>{
    let profName3 = prompt("*FUNCTION* Which professor from Harry Potter do you wish to hear a line from?");
    let toWrite3 = prompt("*FUNCTION* Enter the line you would like this professor to say: ");
    let numLines3 = parseInt(prompt("*FUNCTION* How many times would you like it written? "));

    let textLines3 = "";
    let lines3 = 1;

    while (lines3 <= numLines3){
        textLines3 += lines3 + "." + "" + toWrite3;
        lines3++;
    }
    let Refprof3 = document.querySelector(".task5a");
    Refprof3 = `Prof.${profName3}`;
    let ReftextLines3 = document.querySelector(".task5b");
    ReftextLines3 = textLines3;
}
let message = HPLineWriter();

// Task 6 : Variables, Loops, Functions
//first strategy
let product = 0
let timeStr1 =" "

for (let times= 1; times <=12; times++){
    for (let factor = 1; factor <= 12; factor++){
       product = times * factor;
       timeStr1 += times + "x" + factor + "=" + product + "<br>";
    }
    timeStr1 += "-----<br>";

    let result1 = document.querySelector(".task6a");
    result1.innerHTML = timeStr1;
}

//second strategy
let displayStr = "";
const createTable = (timesNum) =>{
    let timeStr ="";
    for (let factor = 1; factor <= 12; factor++){
        let product = factor*timesNum;
        timeStr += timesNum + "x" + factor + "=" + product + "<br>"
    }
return timeStr;
}

for (let timesTab= 1; timesTab <=12; timesTab++){
    let temp = createTable(timesTab);
    displayStr += temp + "...<br>";
}

let result = document.querySelector(".task6b");
result.innerHTML = displayStr;

//third strategy
const times= (factor,delimiter) => {
    let timeStr2 = " ";

    for (let a = 1; a <= delimiter; a++){
        let product2 = factor * a;
        timeStr2 += (factor + "x" + a + "=" + product2 + "<br>");
    }
    timeStr2 += "....<br>"
return timeStr2;
};

const table = function(delimiter){
    let tableStr = " ";
    for (let b= 1; b<= delimiter; b++) {
        tableStr += times(b, delimiter);
    }
    return tableStr;
}
let result3 = document.querySelector(".task6c");
let finalStr =" ";

delimiter = 12;
finalStr += table(delimiter);
result3.innerHTML = `${finalStr}`;

