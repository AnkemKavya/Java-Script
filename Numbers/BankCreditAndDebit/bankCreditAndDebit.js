openingBalance = 500;
function onClickCredit() {
    debugger;
    var amount = Number(document.getElementById("txtamount").value);
    openingBalance =(openingBalance + amount);
    credit = amount + " Credited";
    alert(credit);
    alert(openingBalance);
}

function onClickDebit() {
    debugger;
    var amount = Number(document.getElementById("txtamount").value);
    debit = amount + " Debited";
    alert(debit);
    if((openingBalance - amount) < 0) {
         Balance = "Insufficient Balance";
         alert(Balance);
    }else{
    openingBalance = (openingBalance - amount);
    
    alert(openingBalance);
    }
}
// function onClickDebit() {
//     debugger;
//     var amount = Number(document.getElementById("txtamount").value);
//     var debit = amount + " Debited";
//     var availableBalance = "Available Balance" + (openingBalance + debit);
//     alert(debit);
    
//     if((availableBalance - debit) < 0) {
//         Balance = "Insufficient Balance";
//         alert(Balance);
//     }else{
//         Balance = availableBalance;
//         alert(availableBalance);
//     }
// }