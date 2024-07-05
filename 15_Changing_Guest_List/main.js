var arrayGuestsNames = ["Khala", "Phuppo", "Taya", "Dadi"];
var dontcome = arrayGuestsNames[0];
console.log(dontcome, "is not coming in today's dinner.");
arrayGuestsNames.splice(0, 1, "Dada");
arrayGuestsNames.forEach(function (guest) { return console.log("Assalamu Alikum! ".concat(guest, ", please come today in our home for dinner")); });
