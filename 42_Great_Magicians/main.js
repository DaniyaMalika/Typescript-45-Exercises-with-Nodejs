function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians names
var magicians_name = ["Samri", "Harry Poter", "Jahangir"];
//// calling make_great function to modify magiucians names
var great_magicians = make_great(magicians_name);
//console.log(great_magicians)
//call show_magicians that show modified list of magicians
show_magicians(great_magicians);
