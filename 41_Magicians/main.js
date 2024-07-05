//define a function to print each magician name from an array 
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
;
//define an array containing magicians name
var magicianNames = ["Samri", "Harry Poter", "Jahangir"];
//call the function
show_magicians(magicianNames);
