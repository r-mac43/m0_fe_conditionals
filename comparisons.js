// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeahcers?", numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21", numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// This expression is evaluating if four is less than nine.  This should return a value of true.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// Books is declared as a variable and assigned a value of three.
// We are logging a expression that four is less than three.  This should return a value of false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// Friends is declared as a variable and assigned a value of six.
// Siblings is declared as a variable and assigned a value of two.
// We are logging an expression to the console that six is greater than two.
// This should return a value of true.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.
// Attendees is declared as a variable and assigned a value of 9.
// Meals is declared as a variable and assigned a value of 8.
// We are logging an expression that nine is not equal to 8.
// This should return a value of true.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// This value returns false.

// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
// This returns true for isHungry and false for finishedHomework.

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
//This is true for both.

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
// This returns false because the dog just loves to play.

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
//This returns true because the dog loves to play.

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);
console.log(!!(lovesToPlay && age));

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My original answer returned with 1.  This is because the && operator
//returns  the first falsy value or the last operand if no falsy value exists.
//  To correct this we can convert using the double Not operator to return a true value.
