var checkBox1 = document.getElementById("specialFn");
var checkBox2 = document.getElementById("numericCheck");
var checkBox3 = document.getElementById("lowerCheck");
var checkBox4 = document.getElementById("upperCheck");
let special = ["!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","<",">","/","~","_","=","|","?",".",","];
let numeric = ["0","1","2","3","4","5","6","7","8","9"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let charset = [];

function specialFn() {
    var checkBox = document.getElementById("specialCheck");
    var text = document.getElementById("text");
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
    var text = document.getElementById("text");
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
    var text = document.getElementById("text");
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
    var text = document.getElementById("text");
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
    var pwdLength=document.getElementById("length");
    alert(pwdLength.value);
}
function generatePassword() {
            //filler
}