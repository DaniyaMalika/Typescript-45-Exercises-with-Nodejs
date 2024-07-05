function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians names
var magicians_name = ["Samri", "Harry Poter", "Jahangir"];
//making a copy of original array through .slice() function
var copy_magician_names = magicians_name.slice();
//modify the copied array to include the great with their names
var copy_great_magicians = make_great(copy_magician_names);
//show both arrays original and copied
//original
console.log("Original Array:\n");
show_magicians(magicians_name);
//copied
console.log("\nCopied Array:\n");
show_magicians(copy_great_magicians);
