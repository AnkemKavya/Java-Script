function onClickToCheckMax() {
    debugger;
    let FirstNumber = Number(document.getElementById("txtFirstNumber").value);
    let SecondNumber = Number(document.getElementById("txtSecondNumber").value);
    let ThirdNumber = Number(document.getElementById("txtThirdNumber").value);
    let FourthNumber = Number(document.getElementById("txtFourthNumber").value);
    let FifthNumber = Number(document.getElementById("txtFifthNumber").value);
    let SixthNumber = Number(document.getElementById("txtSixthNumber").value);
    document.getElementById("pResult").innerHTML = Math.max(FirstNumber, SecondNumber, ThirdNumber, FourthNumber, FifthNumber, SixthNumber) + " is Max Value";
}

function onClickToCheckMin() {
    debugger;
    let FirstNumber = Number(document.getElementById("txtFirstNumber").value);
    let SecondNumber = Number(document.getElementById("txtSecondNumber").value);
    let ThirdNumber = Number(document.getElementById("txtThirdNumber").value);
    let FourthNumber = Number(document.getElementById("txtFourthNumber").value);
    let FifthNumber = Number(document.getElementById("txtFifthNumber").value);
    let SixthNumber = Number(document.getElementById("txtSixthNumber").value);
    document.getElementById("pResult").innerHTML = Math.min(FirstNumber, SecondNumber, ThirdNumber, FourthNumber, FifthNumber, SixthNumber) + " is Min Value";
}