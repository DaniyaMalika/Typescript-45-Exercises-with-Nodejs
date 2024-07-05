//define a function with a rest parameter that accept items arguments representing our 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log(">" + singleItem); });
    console.log("Now Enjoy Sandwich");
}
//call the function 3 times with 3 different number of arguments
makeSandwich("Chatni", "Mayo", "Garlic", "Tikka");
makeSandwich("Cauliflower", "Carrot");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Chatni", "Mayo", "Garlic", "Tikka", "Cauliflower", "Carrot");
