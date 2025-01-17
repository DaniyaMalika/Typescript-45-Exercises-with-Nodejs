//define a function to create a car object with options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initializing a car object with manufacturer model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to create a car object
var myCar = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2022");
//print the variable to ensure 
console.log(myCar);
