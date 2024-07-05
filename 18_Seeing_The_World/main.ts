let arrayCountries : string[]=["Turkey","Singapore","Palestine","Iraq","Syria"];
console.log("Original Order:",arrayCountries);
//alphabetical order array without modifying the actual array
console.log("Alphabetical Order:", [...arrayCountries].sort());
//Show that your array is still in its original order by printing it again.
console.log("Still in Original Order:", arrayCountries)
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order", [...arrayCountries].reverse());
//Show that your array is still in its original order by printing it again.
console.log("Still in Original Order:", arrayCountries)
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original Array Reversed",arrayCountries.reverse())
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back To Original Order", arrayCountries.reverse())
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabetic Order", arrayCountries.sort())
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original Array Reversed again",arrayCountries.reverse())