function onClickPrimeNumbers() {
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var result = document.getElementById("pResult");
    if (number <= 1) {
        result.innerHTML = number+ " is not a Prime number";
    }
    else if (number == 2) {
        result.innerHTML = number+ " is Prime number";
    }
    else if (number % 2 == 0) {
        result.innerHTML = number+ " is not a Prime number";
    }
    else {
        result.innerHTML = number+ " is Prime number";
    }
}