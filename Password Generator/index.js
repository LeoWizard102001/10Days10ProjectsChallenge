const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const symbols = ['.', '/', '!', '@', '#', '$', '%', '&', '?', '*', '(', ')'];

let includeLetters = false;
let includeSymbols = false;

reset();
function reset() {
    includeLetters = false;
    includeSymbols = false;

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("number").value = null;

    printResult("-PASSWORD-");

}

function checkBox (type) {
    if (type == "letters") {
        if (includeLetters == false) {
        includeLetters = true;
        console.log("letters true");
        }
        else {
            includeLetters = false;
            console.log("letters false");
        }
    }
    if (type == "symbols") {
        if (includeSymbols == false) {
            includeSymbols = true;
            console.log("Symbols true");
            }
            else {
                includeSymbols = false;
                console.log("Symbols false");
            }
        }
}
function generatePassword (length) {
    let result = "";
    let raw = [...numbers];
    if (includeLetters == true) {
        raw = raw.concat(letters);
    }
    if (includeSymbols == true) {
        raw = raw.concat(symbols);
    }
    // console.log(raw);
    for (i = 1; i <= length; i++) {
        let j = Math.floor(Math.random()*48);
        result = result + (raw[Math.floor(Math.random()*raw.length)]);
    }
    console.log(result);
    printResult(result);
}

function generateResult () {
    let length = document.getElementById("number").value;
    generatePassword(length);
}
function printResult (result) {
    document.getElementById("result").innerHTML = result;
}
