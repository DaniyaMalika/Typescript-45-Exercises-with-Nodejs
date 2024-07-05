"use strict";
let mango = "mango";
let upperCaseMango = "MANGO";
let numericTest = 8;
let arrayVegies = ["cacumber", "carrot", "onion", "cauliflower"];
// Tests for equality and inequality with strings
console.log("Is mango is equal to mango?");
console.log(mango == "mango");
console.log("Is mango is not equal to mango?");
console.log(mango != "mango");
//Tests using the lower case function
console.log("Is MANGO is equal to mango after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() == "mango");
console.log("Is MANGO is not equal to mango after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() != "mango");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is 90 is greater than 8?");
console.log(90 > 8);
console.log("Is 80 is not equals to 8?");
console.log(numericTest != 8);
console.log("Is 8 is greater than or equal to 5?");
console.log(numericTest >= 8);
console.log("Is 20 is less than or euqal to 80?");
console.log(20 <= 80);
console.log("Is 20 is less than or euqal to 8?");
console.log(20 <= 8);
//Tests using "and" and "or" operators
console.log("8 is not equal to 7 and 8 is greater than 7"); //agr ik bhi condition false hui tu answer false main ayega
console.log(numericTest != 7 && numericTest > 7);
console.log("8 is equal to 9 and 8 is smaller than 7");
console.log(numericTest == 9 && numericTest < 7);
console.log("8 is greater than 50 OR 8 is equals to 8");
console.log(numericTest > 50 || numericTest == 8); // agr ik bhi true hugi condition tu answer true
console.log("8 is greater than 9 OR 8 is equals to 90");
console.log(numericTest > 9 || numericTest == 90);
//Test whether an item is in a array
console.log("Is Ladyfinger include in my vegies array?");
console.log(arrayVegies.includes("Ladyfinger"));
//Test whether an item is not in a array
console.log("Is cauliflower include in my vegies array?");
console.log(arrayVegies.includes("cauliflower"));
