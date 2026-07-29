function onClickNumber() {
    debugger;
    result = "";
    var number = Number(document.getElementById("number").value);
    var result = document.getElementById("pResult");
    if (number % 2 == 0) {
        result.innerText = number + " is Even";
        results = number + " is even number";
        alert(results);
    } else {
        result = number + " is odd number";
         result.innerText = number + " is Odd";
        alert(result);
    }

}