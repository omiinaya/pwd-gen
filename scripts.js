let special = ["!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","/","~","_","=","|","?",".",","];
let numeric = ["0","1","2","3","4","5","6","7","8","9"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let charset = [];
let length = 0;

function specialFn() {
    var checkBox = document.getElementById("specialCheck");
    if (checkBox.checked == true){
        charset = charset.concat(special);
        console.log(charset);
    } else {
        charset = charset.filter(function (item) {
        return special.indexOf(item) === -1;
        });
        console.log(charset);
    }
}
function numericFn() {
    var checkBox = document.getElementById("numericCheck");
    if (checkBox.checked == true){
        charset = charset.concat(numeric);
        console.log(charset);
    } else {
        charset = charset.filter(function (item) {
        return numeric.indexOf(item) === -1;
        });
        console.log(charset);
    }
}
function lowerFn() {
    var checkBox = document.getElementById("lowerCheck");
    if (checkBox.checked == true){
        charset = charset.concat(lower);
        console.log(charset);
    } else {
        charset = charset.filter(function (item) {
        return lower.indexOf(item) === -1;
        });
        console.log(charset);
    }
}
function upperFn() {
    var checkBox = document.getElementById("upperCheck");
    if (checkBox.checked == true){
        charset = charset.concat(upper);
        console.log(charset);
    } else {
        charset = charset.filter(function (item) {
        return upper.indexOf(item) === -1;
        });
        console.log(charset);
    }
}
function setLength() {
    var pwdLength=document.getElementById("lengthCheck");
    length = pwdLength.value;
    console.log("new password length: "+length);
}
function generatePassword() {
        var result = "";
        for (var i=0; i<length;i++)
        result += charset[Math.floor(Math.random()*charset.length)];
        document.getElementById("password").innerHTML = result;
        console.log(charset);
        console.log(result);
        console.log(result.length);
        console.log("test");
}