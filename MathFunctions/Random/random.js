function onClickStaticRandom() {
    debugger;
    document.getElementById("pResult").innerHTML = Math.random();
}

function onClickDynamicRandom() {
    debugger;
    let digits = Number(document.getElementById("txtNumber").value);
    document.getElementById("pResults").innerHTML = Math.random()*Math.pow(10, digits);
}

function onClickFixedStaticRandom() {
    debugger;
    document.getElementById("fixedResult").innerHTML = Math.trunc(Math.random()*Math.pow(10, 6));
}

function onClickFixedDynamicRandom() {
    debugger;
    let digits = Number(document.getElementById("txtFixedNumber").value);
    let result = Math.trunc(Math.random()*Math.pow(10, digits));
    document.getElementById("fixedResults").innerHTML = result;
}