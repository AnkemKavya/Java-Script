
function totalMarks(t, h, e, m, sc, so) {
    debugger;
    let sum = t + h + e + m + sc + so;
    return sum;
}

function onClickPercentage() {
    debugger;
    var telugu = Number(document.getElementById("telugu").value);
    var hindi = Number(document.getElementById("hindi").value);
    var english = Number(document.getElementById("english").value);
    var maths = Number(document.getElementById("maths").value);
    var science = Number(document.getElementById("science").value);
    var social = Number(document.getElementById("social").value);
    var _totalMarks= totalMarks(telugu, hindi, english, maths, science, social)
    var total = _totalMarks + " out of 600";
    var percentage = ((_totalMarks / 600) * 100) + "%";
    alert(percentage);
    alert(total);


}

function onClickAverage() {
    debugger;
    var telugu = Number(document.getElementById("telugu").value);
    var hindi = Number(document.getElementById("hindi").value);
    var english = Number(document.getElementById("english").value);
    var maths = Number(document.getElementById("maths").value);
    var science = Number(document.getElementById("science").value);
    var social = Number(document.getElementById("social").value);
        var _totalMarks= totalMarks(telugu, hindi, english, maths, science, social)
    var total = _totalMarks + " out of 600";
    var average = _totalMarks / 6;
    alert(average);
    alert(total);
}







