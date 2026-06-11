function onClickToDone() {
    debugger;
    var number = document.getElementById("txtNumber").value;
    var result = document.getElementById("pResult");
    if (number == 1) {
        result.innerHTML = "The number is one";
    }else if (number == 6) {
        result.innerHTML = "The number is six";
    }else if(number == 2) {
        result.innerHTML = "The number is two";
    }else if(number == 7) {
        result.innerHTML = "The number is seven";
    }else 
        result.innerHTML = "The number is another number";
}