var currentuserNames = ["Ali", "Shahid", "Anaya", "Usman", "Ukasha"];
var newuserNames = ["Anaya", "Mhad", "Ayesha", "Taha", "Nabeel", "Ukasha"];
newuserNames.forEach(function (newuser) {
    var ourCondition = currentuserNames.some(function (currentoneuser) { return currentoneuser.toLowerCase() === newuser.toLowerCase(); });
    if (ourCondition) {
        console.log("Sorry ".concat(newuser, " is already taken"));
    }
    else {
        console.log("This Username ".concat(newuser, " is available"));
    }
});
