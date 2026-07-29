alert("Are you ready to learn about the number data type?");
console.log("The number data type is used to represent numeric values in JavaScript.");
function onClickToAdd() {
    debugger;
    var FirstName=Number(document.getElementById("FirstNumber").value);
    var SecondName=Number(document.getElementById("SecondNumber").value);
    var sum= FirstName + SecondName;
    alert(sum);
}

function onClickToSub() {
    debugger;
    var FirstName=Number(document.getElementById("FirstNumber").value);
    var SecondName=Number(document.getElementById("SecondNumber").value);
    var subtract= FirstName - SecondName;
    alert(subtract);
}

function onClickToMul() {
    debugger;
    var FirstName=Number(document.getElementById("FirstNumber").value);
    var SecondName=Number(document.getElementById("SecondNumber").value);
    var multiplication= FirstName * SecondName;
    alert(multiplication);
}

function onClickToDiv() {
    debugger;
    var FirstName=Number(document.getElementById("FirstNumber").value);
    var SecondName=Number(document.getElementById("SecondNumber").value);
    var divide= FirstName / SecondName;
    alert(divide);
}

function onClickToGetRemainder() {
    debugger;
    var  FirstName=Number(document.getElementById("FirstNumber").value);
    var SecondName=Number(document.getElementById("SecondNumber").value);
    var remainder= FirstName % SecondName;
    alert(remainder);
}

function onClickToSquare() {
    debugger;
    var number=document.getElementById("square").value;
    var square= number * number;
    alert(square);
}

function onClickNumber() {
    debugger;
    var input= document.getElementById("number").value;
    var number= input * 5;
    alert(number);
}