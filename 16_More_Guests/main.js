//creating a guest list array
var arrayGuestsName = ["Khala", "Phuppo", "Taya", "Dadi"];
//making variable for those guest who cant come
var dontCome = arrayGuestsName[0];
//print the name of guest whpo cant come
console.log(dontCome, "is not coming in today's dinner party");
//add or remove values from guest list array
arrayGuestsName.splice(0, 1, "Dada");
//message print for bigger table
console.log("MUBARAKAN! We have found a bigger table dinner so we are inviting more guests ei Nana, Chachi, Mamu");
arrayGuestsName.unshift("Nana"); //add value in start
arrayGuestsName.push("Mami"); // add value in last
// get a middle index of our guest list array
var middleIndex = Math.floor(arrayGuestsName.length / 2);
//add value in  middle
arrayGuestsName.splice(middleIndex, 0, "Mamu");
console.log("Updated list:");
//for print
arrayGuestsName.forEach(function (guest) { return console.log("Assalamu Alikum! ".concat(guest, ", please come today in our home for dinner")); });