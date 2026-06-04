function onClickNumber() {
    debugger;
    result = "";
    var number = Number(document.getElementById("number").value);
    if (number % 2 == 0) {
        result = number + " is even number";
        alert(result);
    } else {
        result = number + " is odd number";
        alert(result);
    }

}