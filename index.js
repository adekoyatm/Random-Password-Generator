const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordGenEl1 = document.getElementById("passwordGen-btn1")
let genBtnEl1 = document.getElementById("gen-btn-el1")
let genBtnEl2 = document.getElementById("gen-btn-el2")
let genBtnEl3 = document.getElementById("gen-btn-el3")
let genBtnEl4 = document.getElementById("gen-btn-el4")

let password1 = []
let password2 = []
function generatePassword1() {    
    password1 = passwordGenerator()
    password2 = passwordGenerator()
    genBtnEl1.textContent = password1
    genBtnEl2.textContent = password2
}

let password3 = []
let password4 = []
function generatePassword2() {    
    password3 = passwordGenerator()
    password4 = passwordGenerator()
    genBtnEl3.textContent = password3
    genBtnEl4.textContent = password4
}

function passwordGenerator() {
    let password = []
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor( Math.random() * characters.length)
        password += characters[randomNumber]           
    }
    return password
}
