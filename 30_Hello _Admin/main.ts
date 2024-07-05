let arrayUsenames :string[] = ["Admin","Asad","Noshairwan","Ukasha","Taha"];

//using forloop on array
arrayUsenames.forEach(adminUser => {
    if(adminUser === "Admin"){
       console.log(`Hello ${adminUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${adminUser}, thank you for logging in again.`)
    }
})