//Question 16
let character = "A";

if (character >= "A" && character <= "Z") {
    console.log(character + " is an uppercase letter.");
}
 else if (character >= "a" && character <= "z") {
    console.log(character + " is a lowercase letter.");
} 
else {
    console.log(character + " is neither an uppercase nor a lowercase letter.");
}


//Question 17
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("They can drive.");
} 
else {
    console.log("They cannot drive.");
}


//Question 18
let totalAmount = 1000;
let isMember = true;
let finalAmount;

if (isMember) {
    // Apply 20% discount
    finalAmount = totalAmount * 0.80; // 1000 * 0.80 = 800
} else {
    // Apply 5% discount
    finalAmount = totalAmount * 0.95; // 1000 * 0.95 = 950
}

console.log('The final amount is:',finalAmount);

//Question 19
const number = 15;

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


//Question 20
// Create a variable 'hour' representing the time in 24-hour format
const hour = 14;

// Use if-else if-else statements to determine the appropriate greeting
if (hour >= 5 && hour < 12) {
    console.log("Good morning");
} 
else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon");
} 
else if (hour >= 18 && hour < 22) {
    console.log("Good evening");
} 
else {
    console.log("Good night");
}
