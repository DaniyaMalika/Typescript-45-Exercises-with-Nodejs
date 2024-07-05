//define a function with a rest parameter that accept items arguments representing our 
function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(singleItem => console.log(">" + singleItem));
    console.log("Now Enjoy Sandwich");
}

//call the function 3 times with 3 different number of arguments
makeSandwich("Chatni","Mayo","Garlic","Tikka");
makeSandwich("Cauliflower","Carrot");
makeSandwich("Bread","Butter","Mayo","Egg","Chatni","Mayo","Garlic","Tikka","Cauliflower","Carrot")