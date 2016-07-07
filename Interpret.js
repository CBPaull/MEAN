// The log goes first
console.log(first_variable);
// The assignment of the variable is second
var first_variable = "Yipee I was first!";
// The function must be called and thus is not in the order
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
// The console log is third
// Return is undefined, then 'Yipee I was first'
console.log(first_variable);
// The variable is created first, but not assigned
var food 
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
// The function runs when it is called, in this case, after variable is declared, before assignment
eat();
// Assignment happens after the function runs
food = "Chicken";
//  return is 3 lines, half-chicken, gone, and Chicken
console.log(food);

// The variable is declared first
var new_word 
// The function is never called
function lastFunc() {
  new_word = "old";
}
// The variable is defined
new_word = "NEW!";
// the console returns with 'NEW!'
console.log(new_word);
