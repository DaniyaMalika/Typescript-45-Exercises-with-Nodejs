let arrayNumbers: number[]=[1,2,3,4,5,6,7,8,9,];

//ab tk foreach or whileloop use krrhy thy ab for loop ko use krengy
//using forloop yh kam bhi foreach ki trah krta h
for(let number of arrayNumbers){
    let OrdinalEnding: string;
    if(number === 1){
        OrdinalEnding = "st"
    }else if(number === 2){
        OrdinalEnding = "nd"
    }else if(number === 3){
        OrdinalEnding = "rd"
    }else {
        OrdinalEnding = "th"
    }

    console.log(`${number}${OrdinalEnding}`)

    

    
}