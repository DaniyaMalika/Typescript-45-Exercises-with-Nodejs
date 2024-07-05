let currentuserNames = ["Ali","Shahid","Anaya","Usman","Ukasha"];
let newuserNames = ["Anaya","Mhad","Ayesha","Taha","Nabeel","Ukasha"]
newuserNames.forEach(newuser => {
    let ourCondition = currentuserNames.some(currentoneuser => currentoneuser.toLowerCase()=== newuser.toLowerCase())
    if(ourCondition){
        console.log(`Sorry ${newuser} is already taken`)
    }else{
        console.log(`This Username ${newuser} is available`)
    }
})