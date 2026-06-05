openingBalance = 500;
availableBalance = 0;
function onClickCredit() {
    debugger;
    var amount = Number(document.getElementById("amount").value);
    availableBalance = "Balance: "+(openingBalance + availableBalance + amount);
    var credit = amount + " Credited";
    alert(credit);
    alert(availableBalance);
}

function onClickDebit() {
    debugger;
    var amount = Number(document.getElementById("amount").value);
    var debit = amount + " Debited";
    var availableBalance = "Available Balance" + (openingBalance + debit);
    alert(debit);
    if((availableBalance - debit) < 0) {
        Balance = "Insufficient Balance";
        alert(Balance);
    }else{
        Balance = availableBalance;
        alert(availableBalance);
    }
}