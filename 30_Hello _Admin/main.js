var arrayUsenames = ["Admin", "Asad", "Noshairwan", "Ukasha", "Taha"];
//using forloop on array
arrayUsenames.forEach(function (adminUser) {
    if (adminUser === "Asad") {
        console.log("Hello ".concat(adminUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(adminUser, ", thank you for logging in again."));
    }
});
