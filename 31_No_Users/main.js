var arrayUsernames = ["Admin", "Asad", "Noshairwan", "Ukasha", "Taha"];
arrayUsernames = [];
if (arrayUsernames.length === 0) {
    console.log("Your array is empty we need to find some users!");
}
else {
    arrayUsernames.forEach(function (adminUser) {
        if (adminUser === "Admin") {
            console.log("Hello ".concat(adminUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(adminUser, ", thank you for logging in again."));
        }
    });
}
