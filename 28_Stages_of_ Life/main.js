var age = 21;
if (age < 2) {
    console.log("You are a baby!");
}
else if (age >= 2 && age < 4) {
    console.log("You are toddler!");
}
else if (age >= 4 && age < 13) { // 4 k equal hu ya 4 se greater mgr 13 se kam
    console.log("You are a kid!");
}
else if (age >= 13 && age < 20) {
    console.log("You are a teenager!");
}
else if (age >= 20 && age < 65) { //21 se 64 ko adult type krna
    console.log("You are an adult!");
}
else if (age >= 65) { // 65 ya us se barri age walon ko elder mn dadena bhaly wo 200 sal k hun
    console.log("You are an elder!");
}
