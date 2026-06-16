function onClickStaticPower() {
    debugger;
    document.getElementById("pResult").innerHTML = Math.pow(5, 2);
}

function onClickDynamicPower() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    let power = Number(document.getElementById("txtPower").value);
    document.getElementById("pResults").innerHTML = Math.pow(number, power);
}