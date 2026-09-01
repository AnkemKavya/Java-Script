

let _btnInteger=document.getElementById("btnInteger");


_btnInteger.addEventListener("click", function (){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    document.getElementById("pResult").innerHTML = Number.isInteger(number);
    
});






