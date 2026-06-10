function onClickConvertNumberToString() {
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var string = number.toString();
    document.getElementById("pResult").innerHTML = string;
}