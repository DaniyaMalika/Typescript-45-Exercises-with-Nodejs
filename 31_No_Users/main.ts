let arrayUsernames :string[] = ["Admin","Asad","Noshairwan","Ukasha","Taha"];
arrayUsernames  = [];

if (arrayUsernames.length === 0){
    console.log("Your array is empty we need to find some users!");
}else{
    arrayUsernames.forEach(adminUser => {
        if(adminUser === "Admin"){
           console.log(`Hello ${adminUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${adminUser}, thank you for logging in again.`)
        }
    })
}
