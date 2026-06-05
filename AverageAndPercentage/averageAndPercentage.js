function onClickPercentage() {
    debugger;
    var telugu = Number(document.getElementById("telugu").value);
    var hindi = Number(document.getElementById("hindi").value);
    var english = Number(document.getElementById("english").value);
    var maths = Number(document.getElementById("maths").value);
    var science = Number(document.getElementById("science").value);
    var social = Number(document.getElementById("social").value);
    var total = (telugu + hindi + english + maths + science + social) + " out of 600";
    var percentage = (((telugu + hindi + english + maths + science + social) / 600) * 100) + "%";
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
    var total = (telugu + hindi + english + maths + science + social) + " out of 600";
    var average = (telugu + hindi + english + maths + science + social) / 6;
    alert(average);
    alert(total);
}