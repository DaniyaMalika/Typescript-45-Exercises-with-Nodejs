function make_shirt(size:string = "Large", printMessage:string = `"I love typescript"`,){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on it`)

}
//calling function with bydefault values
make_shirt();

//calling a function with medium size with bydefault message
make_shirt("Medium",)

//calling a function with different message
make_shirt("Small",`"I dont love typescript it is difficult!"`)

