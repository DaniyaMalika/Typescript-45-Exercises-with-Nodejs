function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// function to make magicians great through .map() it will modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

//define an array of magicians names
let magicians_name = ["Samri","Harry Poter","Jahangir"];

//// calling make_great function to modify magiucians names
let great_magicians = make_great(magicians_name);
//console.log(great_magicians)
//call show_magicians that show modified list of magicians
show_magicians(great_magicians);