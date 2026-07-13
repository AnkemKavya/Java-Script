function onClickParseInt() {
    debugger;
    var number = document.getElementById("txtNumber").value;
    document.getElementById("pResult").innerHTML = parseInt(number);
}

function onClickParseFloat() {
    debugger;
    var input = document.getElementById("txtFloat").value;
    document.getElementById("pResults").innerHTML = parseFloat(input);
}