let realInput
let eachLength1
let eachLength2
let eachLength3

let alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number= "0123456789"
let character= "!@#$%^&*_=+:<>?|"

function pasGenerator(){
    let userInput= document.getElementById("pasLength").value
    realInput= Number(userInput)
}

function randomButton(){
    eachLength1= realInput/3
    eachLength2= Math.round(realInput/3)
    eachLength3= Math.floor(realInput/3)
    
    let divisionReminder= realInput%3
   if (divisionReminder<5&& divisionReminder>0){
       eachLength1= Math.floor((realInput/3)+1)
   }else{
       eachLength1= Math.round(realInput/3)
   }

    generatePassword()
}

function getPassword() {
    let finalPassword
    let result1=""
    let result2=""
    let result3=""
    
     for ( let i = 0; i < eachLength1; i++ ) {
         result1 += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
     }
     for ( let i = 0; i < eachLength2; i++ ) {
         result2 += number.charAt(Math.floor(Math.random() * number.length));
     }
     for ( let i = 0; i < eachLength3; i++ ) {
         result3 += character.charAt(Math.floor(Math.random() * character.length));
     }
     finalPassword= result1 + result2 + result3
     return finalPassword
}

function generatePassword(){
    document.getElementById("pasRandom1").value = getPassword()
    document.getElementById("pasRandom2").value = getPassword()
    document.getElementById("pasRandom3").value = getPassword()
    document.getElementById("pasRandom4").value = getPassword()
    
    let inputs=[pasRandom1, pasRandom2, pasRandom3, pasRandom4]
    inputs.forEach(input=>{
        input.style.backgroundImage = "none"
        input.onclick= function(){
            input.select()
            document.execCommand("copy")
            alert("Copied to clickboard")
        }
    })
}

