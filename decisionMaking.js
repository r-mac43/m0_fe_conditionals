// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// We are using an if statement to run a code block. The if statement states that if doorChoice is strictly equal
//to 1, then the bear will wear a hat because the statement would be true.
//If the value of bearChoice was not equal to 1, the the code block would run the else statement and the bear
//would wear a hat.

// 2. What variable has a new value assigned to it after the first if statement executes?
// The variable bearClothing has a new value assigned to it which is hat.

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// The bearClothing value would be a hat because the if statement was no longer true and the code ran the else if statement.

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//In the else if statement, bearChoice is strictly equal to one, so you offer the bear a HAT
//using concatenation, he shows you a secret passage and the code block stops because the value was true.

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//If you changed bearChoice to equal 3, then the else if code block would return false for the first two else if
//statements and stop at the true statement where you would Run as fast as you can...

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The code block would run and stop at the first else if statement because it is true and you make the bear cry
// because you told him his hat was too small.

// 7. What is your favorite ending?
//I like that I shared my hat with the bear and found a secret passage.
