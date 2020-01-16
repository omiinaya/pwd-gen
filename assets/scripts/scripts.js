let special = ["!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","/","~","_","=","|","?",".",","];
let numeric = ["0","1","2","3","4","5","6","7","8","9"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let charset = [];
let length = 0;

function arrayMerge(a, b) {
    if (document.getElementById(a).checked == true){
        charset = charset.concat(b);
    } else {
        charset = charset.filter(function (item) {
        return b.indexOf(item) === -1;
        });
    }
}
function copyFn() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
function setLength() {
    var pwdLength=document.getElementById("lengthCheck");
    if (pwdLength.value<8) {
        length=8;
        alert("minimum password length is 8.");

        document.getElementById("lengthCheck").placeholder = length;
        document.getElementById("lengthCheck").value = "";
    }
    else if (pwdLength.value>128) {
        length=128;
        alert("maximum password length is 128.");

        document.getElementById("lengthCheck").placeholder = length;
        document.getElementById("lengthCheck").value = "";
    } else {
    length = pwdLength.value;
    document.getElementById("lengthCheck").placeholder = length;
    document.getElementById("lengthCheck").value = "";
    }
}
function generatePassword() {
    var result = "";
    if (charset.length < 1) {
        alert("You must choose at least one of the options.");
    }
    else if (length==0) {
        alert("You must set a length for the password.");
    } else {
        for (var i=0; i<length;i++)
        result += charset[Math.floor(Math.random()*charset.length)];
        document.getElementById("password").value = result;
    }
}