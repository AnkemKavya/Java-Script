function onClickStaticAbsolute() {
    debugger;
    document.getElementById("pResult").innerHTML = Math.abs(-50);
}

function onClickDynamicAbsolute() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    document.getElementById("pResults").innerHTML = Math.abs(number);
}