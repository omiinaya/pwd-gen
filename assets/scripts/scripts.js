let special = ["!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","/","~","_","=","|","?",".",","];
let numeric = ["0","1","2","3","4","5","6","7","8","9"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let charset = [];
let newLength = 0;

function arrayMerge(a, b) {
    if (document.getElementById(a).checked == true){
        charset = charset.concat(b);
    } else {
        charset = charset.filter(function (c) {
        return b.indexOf(c) === -1;
        });
    }
}
function copyFn() {
    if ((document.getElementById("password").value) == "") {
        alert("There is nothing to copy yet.");
    } else {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        console.log(document.getElementById("password").value);
    }
}
function setLength() {
    var pwdLength=document.getElementById("lengthCheck");
    if (pwdLength.value=="") {
        if (pwdLength.placeholder <8) {
            alert("Password length cannot be less than 8.");
            pwdLength.placeholder = 8;
        }
        newLength = pwdLength.placeholder;
    }
    else if (pwdLength.value<8) {
        newLength=8;
        alert("Password length cannot be less than 8.");
        document.getElementById("lengthCheck").placeholder = newLength;
        document.getElementById("lengthCheck").value = "";
    }
    else if (pwdLength.value>128) {
        newLength=128;
        alert("Password length cannot be more than 128.");
        document.getElementById("lengthCheck").placeholder = newLength;
        document.getElementById("lengthCheck").value = "";
    } else {
        newLength = pwdLength.value;
        document.getElementById("lengthCheck").placeholder = newLength;
        document.getElementById("lengthCheck").value = "";
    }
}
function generatePassword() {
    var result = "";
    if (charset.length < 1) {
        alert("You must check at least one of the checkboxes.");
    } else {
        for (var i=0; i<newLength;i++)
        result += charset[Math.floor(Math.random()*charset.length)];
        document.getElementById("password").value = result;
    }
}