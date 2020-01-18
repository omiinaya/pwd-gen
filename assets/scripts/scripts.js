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
function generatePassword() {
    var pwdLength=document.getElementById("lengthCheck");
    if (pwdLength.value=="") {
        alert("You must set a length first.");
        console.log(pwdLength.value);
    }
    else if (pwdLength.value<8 || pwdLength.value>128) {
        if (pwdLength.value<8) {
            alert("Password must be at least 8 characters.");
            pwdLength.value=8;
            newLength=pwdLength.value;
            console.log(pwdLength.value);
            console.log(newLength);
        }
        else if (pwdLength.value>128) {
            alert("Password must be at most 128 characters.");
            pwdLength.value=128;
            newLength=pwdLength.value;
            console.log(pwdLength.value);
            console.log(newLength);
        }
    } else {
        var result = "";
        newLength=pwdLength.value;
        if (charset.length < 1) {
            alert("You must check at least one of the checkboxes.");
        } else {
            for (var i=0; i<newLength;i++)
            result += charset[Math.floor(Math.random()*charset.length)];
            document.getElementById("password").value = result;
        }
        console.log(pwdLength.value);
        console.log(newLength);
    }
}