var arrayPizzasFlavor = ["Cheese", "Tikka", "BBQ"];
//using forloop
for (var _i = 0, arrayPizzasFlavor_1 = arrayPizzasFlavor; _i < arrayPizzasFlavor_1.length; _i++) {
    var onePizza = arrayPizzasFlavor_1[_i];
    console.log("I like ".concat(onePizza, " flavour for pizza"));
}
//print a message outside of the loop
console.log("I don't like any flavor except these three flavors.");
