function onClickDynamicSquare() {
    debugger;
    document.getElementById("pResult").innerHTML = Math.sqrt(64);
}

function onClickStaticSquare() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    document.getElementById("pResults").innerHTML = Math.sqrt(number);
}