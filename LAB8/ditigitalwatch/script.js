var intervalID;
function showTime() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
var intervalID = setInterval(showTime, 1000);

function setalarm() {
    let time = document.querySelectorAll('select');
    var hours = time[0].value;
    var minutes = time[1].value;
    var even = time[2].value;
    alert(`alarm set at -- ${hours}:${minutes} ${even} `);

}
