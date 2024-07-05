function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "\"I love typescript\""; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on it"));
}
//calling function with bydefault values
make_shirt();
//calling a function with medium size with bydefault message
make_shirt("Medium");
//calling a function with different message
make_shirt("Small", "\"I dont love typescript it is difficult!\"");
