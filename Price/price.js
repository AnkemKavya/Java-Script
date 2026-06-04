function onClickBox() {
    debugger;
    var price = Number(document.getElementById("chocolatePrice").value);
    var quantity = Number(document.getElementById("boxQuantity").value);
    var boxes = Number(document.getElementById("noOfBoxes").value);
    var travel = Number(document.getElementById("travelExpences").value);
    var newPrice = Number(document.getElementById("NewChocolatePrice").value);
    var costPrice = (price * quantity * boxes) + travel;
    var sellingPrice = (newPrice * quantity * boxes);
    if (sellingPrice>costPrice){
        result = "Profit";
        alert(result);
    }else{
        result = "Loss";
        alert(result);
    }
}