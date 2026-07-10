function onClickInteger() {
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    document.getElementById("pResult").innerHTML = Number.isInteger(number);
}