const AlphNumS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const AlphS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const AlphNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const Alph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");

let style = AlphNumS;
let passwordLength = document.getElementById("pswrdL");
let x = passwordLength.value;
let G = 91

let pass1 = [];
let pass2 = [];
let pass3 = [];
//pulls value and sets it from DOM
function findValue() {
    let Num = document.getElementById("numbers").checked;
    let Sym = document.getElementById("Symbols").checked;
    x = passwordLength.value;
    if (Num === true && Sym === true) {
        style = AlphNumS
        G = 91
    } else if (Num === true && Sym === false) {
        style = AlphNum
        G = 62
    } else if (Num === false && Sym === true) {
        style = AlphS
        G = 81
    } else if (Num === false && Sym === false) {
        style = Alph
        G = 52
    }
    return x
}
//creates password by using random numbers
function createRandomPassword(x, style, setNum, pass) {
    for (i = 0; i < x; i++ ) {
        let randomNumber = Math.floor(Math.random() * setNum);
        let randomletter = style[randomNumber];
        pass.push(randomletter);
    }
    return pass.join("");
}

//Generates Password
function generate() {
    pass1.length = 0
    pass2.length = 0
    pass3.length = 0
    findValue()
    password1.textContent = createRandomPassword(x, style, G, pass1)
    password2.textContent = createRandomPassword(x, style, G, pass2)
    password3.textContent = createRandomPassword(x, style, G, pass3)
}

function copy(pass) {
    if (pass.textContent === "") {

    } else {
    navigator.clipboard.writeText(pass.textContent)
    setTimeout(() => {
    alert("password copied to clipboard")
    }, 500); // 2000 ms = 2 seconds
    }
}
