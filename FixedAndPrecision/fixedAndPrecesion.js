function onClickFixed() {
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var digits = Number(document.getElementById("txtDigits").value);
    document.getElementById("pResult").innerHTML = number.toFixed(digits);
}

function onClickPrecesion() {
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var digits = Number(document.getElementById("txtDigits").value);
    document.getElementById("pResult").innerHTML = number.toPrecision(digits);
}