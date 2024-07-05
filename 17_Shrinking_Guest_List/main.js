//creating a guest list array
var arrayGuestsName = ["Khala", "Phuppo", "Taya", "Dadi"];
//making variable for those guest who cant come
var dontCome = arrayGuestsName[0];
//print the name of guest whpo cant come
console.log(dontCome, "is not coming in today's dinner party");
//add or remove values from guest list array
arrayGuestsName.splice(0, 1, "Dada");
//message print for bigger table
console.log("MUBARAKAN! We have found a bigger table dinner so we are inviting more guests ei Nana, Mami, Mamu");
arrayGuestsName.unshift("Nana"); //add value in start
arrayGuestsName.push("Mami"); // add value in last
// get a middle index of our guest list array
var middleIndex = Math.floor(arrayGuestsName.length / 2);
//add value in  middle
arrayGuestsName.splice(middleIndex, 0, "Mamu");
console.log("Updated list:");
//for print
arrayGuestsName.forEach(function (guest) { return console.log("Assalamu Alikum! ".concat(guest, ", please come today in our home for dinner")); });
//ex 17
console.log("Ooops, the new dinner table would not arrive on time, so I can invite only two Guests for dinner");
//abhi tk hum loop k liye forEach  ka function use krrhy thy ab whileloop ka function use krengy
while (arrayGuestsName.length > 2) {
    var removeGuest = arrayGuestsName.pop();
    console.log("soory, ".concat(removeGuest, " Sorry I can not invite you to dinner"));
}
//sending a invitation to the last two guests in the list
console.log("Invitations to the last two guests");
arrayGuestsName.forEach(function (lastTwoGuest) { return console.log("Luckily,".concat(lastTwoGuest, ", you are invited in dinner.")); });
//removing last two also
arrayGuestsName.pop();
arrayGuestsName.pop();
console.log("Emplty list", arrayGuestsName);
