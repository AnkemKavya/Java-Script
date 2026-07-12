alert("Are you sure you want to open this page");

function onClickToGetResult() {
    debugger;
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    if (firstNumber > secondNumber){
        result = "Bigger Number is "+ firstNumber;
        alert(result);
    }else{
        result = "Bigger Number is "+ secondNumber;
        alert(result);
    }
}