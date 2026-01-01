//Qestion 1
let firstName = "John";
let lastName  = "Doe";
let age       = 25;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);



//Question 2
//Create two variables num1 and num2 with values 15 and 8
let num1 = 15;
let num2 = 8;

//Calculate and print their sum
let sum = num1 + num2;
console.log("Sum of num1 and num2: " + sum); // Output: Sum of num1 and num2: 23

//Calculate and print their difference
let difference = num1 - num2;
console.log("Difference of num1 and num2: " + difference); // Output: Difference of num1 and num2: 7

//Calculate and print their product
let product = num1 * num2;
console.log("Product of num1 and num2: " + product); // Output: Product of num1 and num2: 120

//Calculate and print their quotient
let quotient = num1 / num2;
console.log("Quotient of num1 and num2: " + quotient); // Output: Quotient of num1 and num2: 1.875


//Question 3
//Declare a variable temperature with value 22. 
// Write an if-else statement that prints "It's cold" if temperature is less than 20, 
// otherwise print "It's warm" in javascript

let temperature = 22;

if (temperature < 20) {
  console.log("It's cold");
} else {
  console.log("It's warm");
}
// The output of this code will be: It's warm



//Question 4
// Create the variables price and discount
let price = 50;
let discount = 10;

// Calculate the final price by subtracting the discount from the price
let finalPrice = (price - discount);

// Print the final price to the console
console.log(finalPrice);


//QUESTION 5
// 5. Declare a variable number with any value. Write code to check if the number is positive, negative, or zero, and print the result in javascript

// You can assign any numerical value to the 'number' variable.
let number = 10; 

// Use an if...else if...else statement to check the value.
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  // This 'else' block will run only if the number is not greater than 0 and not less than 0, meaning it must be zero.
  console.log("The number is zero.");
}