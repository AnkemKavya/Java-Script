function onClickRound() {
    debugger;
    var number = document.getElementById("txtNumber").value;
    document.getElementById("pResult").innerHTML = Math.round(number);
}

function onClickToCeil() {
    debugger;
    var number = document.getElementById("txtNumber").value;
    document.getElementById("pResult").innerHTML = Math.ceil(number);
}

function onClickToFloor() {
    debugger;
    var number = document.getElementById("txtNumber").value;
    document.getElementById("pResult").innerHTML = Math.floor(number);
}

function onClickToTrunc() {
    debugger;
    var number = document.getElementById("txtNumber").value;
    document.getElementById("pResult").innerHTML = Math.trunc(number);
}