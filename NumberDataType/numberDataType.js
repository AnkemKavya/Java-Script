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