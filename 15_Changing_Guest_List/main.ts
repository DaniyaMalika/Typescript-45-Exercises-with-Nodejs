let arrayGuestsNames: string[]=["Khala","Phuppo","Taya","Dadi"];
let dontcome = arrayGuestsNames[0];
console.log(dontcome, "is not coming in today's dinner.");
arrayGuestsNames.splice(0,1,"Dada");
arrayGuestsNames.forEach(guest => console.log(`Assalamu Alikum! ${guest}, please come today in our home for dinner`))