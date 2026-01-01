//Question 11
const marks = 85;
let grade;

if (marks >= 90) {
    grade = 'A';
}
 else if (marks >= 80) {
    grade = 'B';
}
else if (marks >= 70) {
    grade = 'C';
} 
else if (marks >= 60) {
    grade = 'D';
} 
else {
    grade = 'F';
}
console.log(grade);

//Question 12
// Create variables for length and width
const length = 10;
const width = 5;

// Calculate the area (length * width)
const area = length * width;

// Calculate the perimeter (2 * (length + width))
const perimeter = 2 * (length + width);

// Print the results
console.log("Length is:", length);
console.log("Width is:", width);
console.log("Area is:", area);
console.log("Perimeter is:", perimeter);


//Question 13
const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


//Question 14
let number = 47;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("The number is divisible by both 3 and 5.");
} else if (number % 3 === 0) {
    console.log("The number is divisible just by 3.");
} else if (number % 5 === 0) {
    console.log("The number is divisible just by 5.");
} else {
    console.log("The number is divisible by neither 3 nor 5.");
}



//Question 15
const subject1 = 78;
const subject2 = 85;
const subject3 = 92;

// Calculate the average
const average = (subject1 + subject2 + subject3) / 3;

// Determine the grade based on the average
if (average >= 90) {
    console.log("Excellent");
} 
else if (average >= 75) {
    console.log("Good");
} 

else if (average >= 60) {
    console.log("Average");
} 
else {
    console.log("Needs improvement");
}



