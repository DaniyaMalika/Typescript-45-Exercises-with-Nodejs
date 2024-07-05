//define a function to create a car object with options...
function create_car(manufacturer, model, ...options){
    //initializing a car object with manufacturer model
    let car = {
        manufacturer: manufacturer,
        model: model,
    
        
    };

    //add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim()
    });
    return car;
}
     //call the function to create a car object
     let myCar = create_car("Toyota","Corrolla", "color: Black" , "Sunroof: True", "Year: 2022" );

     //print the variable to ensure 
     console.log(myCar);

    
